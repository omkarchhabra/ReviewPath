"use client";

import * as React from "react";
import Link from "next/link";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ThemeToggle";

export function Topbar() {
  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-border bg-panel px-6">
      <div className="flex w-full max-w-md items-center shadow-sm">
        <Input 
          type="text" 
          placeholder="Search repositories, pull requests, issues..." 
          className="bg-panel-alt"
        />
      </div>
      
      <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
        <ThemeToggle />
        
        <Link href="/notifications">
          <Button variant="ghost" size="sm" className="relative p-2 h-[36px] w-[36px] text-muted hover:text-foreground" title="Notifications">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute right-2 top-1.5 h-2 w-2 rounded-full bg-danger border-2 border-panel"></span>
          </Button>
        </Link>
        
        <Link href="https://github.com/omkarchhabra/ReviewPath" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="sm" className="p-2 h-[36px] w-[36px] text-muted hover:text-foreground" title="View on GitHub">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </Button>
        </Link>
        
        <div className="h-8 w-8 ml-2 overflow-hidden rounded-full border border-border bg-panel-alt cursor-pointer hover:border-accent hover:shadow-glow transition-all">
          <Link href="/settings">
            <img src="https://avatars.githubusercontent.com/omkarchhabra" alt="User avatar" className="h-full w-full object-cover" />
          </Link>
        </div>
      </div>
    </header>
  );
}
