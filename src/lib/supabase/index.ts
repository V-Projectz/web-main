import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { AuthenticatedUser, buildAuthenticatedUser } from "./types";

/** */
export function createZentroBizSupabaseBrowserClient() {
  return createBrowserClient(process.env.ZENTROBIZ_SUPABASE_URL!, process.env.ZENTROBIZ_SUPABASE_ANON_KEY!);
}

/** */
export async function createZentroBizSupabaseServerClient() {
  const cookieStore = await cookies();
  return createServerClient(process.env.ZENTROBIZ_SUPABASE_URL!, process.env.ZENTROBIZ_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (cookiesToSet) => {
        for (const cookie of cookiesToSet) {
          cookieStore.set(cookie);
        }
      },
    },
  });
}

/** */
export async function getZentroBizAuthenticatedUser(accessToken?: string): Promise<AuthenticatedUser> {
  const supabase = await createZentroBizSupabaseServerClient();
  const {
    data: { user: userAuth },
    error,
  } = await supabase.auth.getUser(accessToken);
  if (error) throw error;
  if (!userAuth) {
    return buildAuthenticatedUser(null, userAuth, null);
  }
  //
  const { data: user } = await supabase.schema("public").from("users").select("*").eq("auth_id", userAuth.id).maybeSingle();
  const { data: profile } = await supabase.schema("public").from("user_profiles").select("*").eq("user_id", user.id).maybeSingle();
  return buildAuthenticatedUser(user, userAuth, profile);
}
