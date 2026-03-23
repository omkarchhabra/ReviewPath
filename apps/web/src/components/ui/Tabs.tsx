"use client";

import * as React from "react";

export const Tabs = ({ defaultValue, children }: { defaultValue: string, children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);
  return (
    <div className="w-full">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { activeTab, setActiveTab } as any);
        }
        return child;
      })}
    </div>
  );
};

export const TabsList = ({ className = "", children, ...props }: any) => {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-panel-alt p-1 text-muted ${className}`} {...props}>
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, activeTab, setActiveTab, className = "", children }: any) => {
  const isActive = activeTab === value;
  return (
    <button
      type="button"
      onClick={() => setActiveTab(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent
        ${isActive ? "bg-panel text-foreground shadow-sm" : "hover:text-foreground hover:bg-panel/50"}
        ${className}`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, activeTab, className = "", children }: any) => {
  if (value !== activeTab) return null;
  return <div className={`mt-2 ${className}`}>{children}</div>;
};
