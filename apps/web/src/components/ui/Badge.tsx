import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "danger" | "success" | "warning" | "info";
}

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";
  
  const variants = {
    default: "border-transparent bg-accent text-white hover:bg-accent-hover",
    secondary: "border-transparent bg-panel-alt text-foreground hover:bg-border",
    danger: "border-transparent bg-danger text-white hover:bg-danger/80",
    success: "border-transparent bg-success text-white hover:bg-success/80",
    warning: "border-transparent bg-warning text-foreground hover:bg-warning/80",
    info: "border-transparent bg-info text-white hover:bg-info/80",
    outline: "text-foreground border-border",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />
  );
}
