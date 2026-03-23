"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-[280px] flex-col border-r border-border bg-panel">
      <div className="flex h-16 items-center px-6 border-b border-border">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          ReviewPath<span className="text-accent">.</span>
        </Link>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        <Link 
          href="/dashboard" 
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            pathname === "/dashboard" || pathname === "/"
              ? "text-foreground bg-panel-alt shadow-sm border border-border/50"
              : "text-muted hover:text-foreground hover:bg-panel-alt/50 border border-transparent"
          }`}
        >
          <svg className={`h-5 w-5 ${pathname === "/dashboard" || pathname === "/" ? "text-accent" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Dashboard
        </Link>
        <Link 
          href="/repos" 
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            pathname?.startsWith("/repos")
              ? "text-foreground bg-panel-alt shadow-sm border border-border/50"
              : "text-muted hover:text-foreground hover:bg-panel-alt/50 border border-transparent"
          }`}
        >
          <svg className={`h-5 w-5 ${pathname?.startsWith("/repos") ? "text-accent" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          Repositories
        </Link>
        <Link 
          href="/analytics" 
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            pathname?.startsWith("/analytics")
              ? "text-foreground bg-panel-alt shadow-sm border border-border/50"
              : "text-muted hover:text-foreground hover:bg-panel-alt/50 border border-transparent"
          }`}
        >
          <svg className={`h-5 w-5 ${pathname?.startsWith("/analytics") ? "text-accent" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Analytics
        </Link>
      </nav>
      
      <div className="p-4 border-t border-border">
        <Link href="/settings" className={`block w-full rounded-md border text-sm font-medium p-1 transition-colors ${pathname?.startsWith("/settings") ? "border-border/50 bg-panel-alt" : "border-transparent"}`}>
          <Button variant="ghost" className={`w-full justify-start gap-2 ${pathname?.startsWith("/settings") ? "text-foreground" : "text-muted"}`}>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </Button>
        </Link>
      </div>
    </aside>
  );
}
