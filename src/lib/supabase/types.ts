import { User } from "@supabase/supabase-js";

/** */
export interface AuthenticatedUser {
  user: Record<string, unknown> | null; // Account user ID
  userAuth: User | null; // Supabase user object
  userProfile: Record<string, unknown> | null;
  // Derived data
  userId: string | null;
  displayName: string;
  avatarUrl: string | null;
}

/** */
export function buildAuthenticatedUser(
  user: Record<string, unknown> | null,
  userAuth: User | null,
  userProfile: Record<string, unknown> | null,
): AuthenticatedUser {
  return {
    user,
    userAuth,
    userProfile,
    userId: (user?.id as string | null) ?? userAuth?.id ?? null,
    displayName:
      `${(userProfile?.firstName as string | undefined) ?? ""} ${(userProfile?.lastName as string | undefined) ?? ""}`.trim() ||
      (userAuth?.user_metadata.full_name as string | undefined) ||
      "",
    avatarUrl: (userProfile?.avatarUrl as string | null) ?? (userAuth?.user_metadata.avatar_url as string | null) ?? null,
  };
}
