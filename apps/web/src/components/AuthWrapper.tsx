"use client";

import { SessionProvider } from "next-auth/react";
import * as React from "react";

export interface AuthWrapperProps {
  children: React.ReactNode;
}

export function AuthWrapper({ children }: AuthWrapperProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
