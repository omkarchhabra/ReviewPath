import * as React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: React.ReactNode;
}

export function Section({ title, description, children, className = "", ...props }: SectionProps) {
  return (
    <section className={`mb-10 ${className}`} {...props}>
      {(title || description) && (
        <div className="mb-4">
          {title && <h2 className="text-xl font-semibold text-foreground">{title}</h2>}
          {description && <p className="text-sm text-muted mt-1">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
