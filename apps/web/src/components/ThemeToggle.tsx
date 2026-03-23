"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/Button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="ghost" size="sm" className="w-[36px] h-[36px] p-2" aria-label="Loading Theme Toggle" />;
  }

  return (
    <Button
      variant="ghost" 
      size="sm" 
      className="w-[36px] h-[36px] p-2 text-muted hover:text-foreground relative flex items-center justify-center overflow-hidden"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      title="Toggle Theme"
    >
      {resolvedTheme === "light" ? (
         <svg className="w-5 h-5 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
         </svg>
      ) : (
         <svg className="w-5 h-5 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
         </svg>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
