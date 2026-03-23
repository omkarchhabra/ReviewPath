import * as React from "react";
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
      
      <div className="flex items-center gap-2 md:gap-4">
        <ThemeToggle />
        <Button variant="ghost" size="sm" className="relative p-2 h-auto text-muted hover:text-foreground">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute right-2 top-1.5 h-2 w-2 rounded-full bg-danger border-2 border-panel"></span>
        </Button>
        <div className="h-8 w-8 ml-2 overflow-hidden rounded-full border border-border bg-panel-alt">
          <img src="https://avatars.githubusercontent.com/u/9919?s=96&v=4" alt="User avatar" className="h-full w-full object-cover" />
        </div>
      </div>
    </header>
  );
}
