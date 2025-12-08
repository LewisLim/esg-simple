import { ReactNode } from "react";
import { ReadCvLogoIcon } from "@phosphor-icons/react";

interface ArticleSectionProps {
  icon?: any;
  iconColor?: string;
  title?: string;
  children: ReactNode;
  variant?: "default" | "card" | "gradient" | "highlight";
  className?: string;
}

export function ArticleSection({
  icon: Icon = ReadCvLogoIcon,
  iconColor = "text-primary",
  title,
  children,
  variant = "default",
  className = "",
}: ArticleSectionProps) {
  const variants = {
    default: "space-y-4",
    card: "bg-card p-6 rounded-2xl shadow-sm border border-border/50 space-y-4",
    gradient:
      "bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border border-primary/10 space-y-4",
    highlight:
      "bg-[var(--background2)] p-6 rounded-2xl border-l-4 border-primary space-y-4",
  };

  return (
    <section className={`${variants[variant]} ${className}`}>
      {(Icon || title) && (
        <div className="flex items-start gap-3">
          {Icon && (
            <div
              className={`${iconColor} flex-shrink-0 mt-1 p-2 rounded-lg bg-background2`}
            >
              <Icon className="w-6 h-6" />
            </div>
          )}
          {title && <h2 className="flex-1">{title}</h2>}
        </div>
      )}
      <div className="space-y-3">{children}</div>
    </section>
  );
}
