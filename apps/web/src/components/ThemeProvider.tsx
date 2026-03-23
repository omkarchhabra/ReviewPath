"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// Import using specific props to avoid TS errors
import type { ThemeProviderProps as NextThemesProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: NextThemesProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
