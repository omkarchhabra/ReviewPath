"use client";

import * as React from "react";

type TabsContextType = {
  activeTab: string;
  setActiveTab: (v: string) => void;
};

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

export const Tabs = ({ defaultValue, children }: { defaultValue: string, children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full">
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-panel-alt p-1 text-muted ${className}`} {...props}>
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, className = "", children }: { value: string, className?: string, children: React.ReactNode }) => {
  const context = React.useContext(TabsContext);
  if (!context) return null;
  const { activeTab, setActiveTab } = context;
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

export const TabsContent = ({ value, className = "", children }: { value: string, className?: string, children: React.ReactNode }) => {
  const context = React.useContext(TabsContext);
  if (!context) return null;
  const { activeTab } = context;
  
  if (value !== activeTab) return null;
  return <div className={`mt-2 ${className}`}>{children}</div>;
};
