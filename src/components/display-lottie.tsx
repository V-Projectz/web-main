"use client";

import { DotLottieReact, DotLottieReactProps } from "@lottiefiles/dotlottie-react";

// ========================================================================= //
type DisplayLottieProps = DotLottieReactProps

// ========================================================================= //
export function DisplayLottie(props: DisplayLottieProps) {
  return <DotLottieReact {...props} />;
}