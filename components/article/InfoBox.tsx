import { ReactNode } from "react";
import { InfoIcon } from "@phosphor-icons/react";

interface InfoBoxProps {
  icon: any;
  title: string;
  children: ReactNode;
  variant?: "info" | "success" | "warning" | "danger";
}

export function InfoBox({
  icon: Icon = InfoIcon,
  title,
  children,
  variant = "info",
}: InfoBoxProps) {
  const variants = {
    info: {
      bg: "bg-secondary/10",
      border: "border-secondary/30",
      icon: "text-secondary",
    },
    success: {
      bg: "bg-primary/10",
      border: "border-primary/30",
      icon: "text-primary",
    },
    warning: {
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      icon: "text-amber-600",
    },
    danger: {
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      icon: "text-red-600",
    },
  };

  const style = variants[variant];

  return (
    <div
      className={`${style.bg} ${style.border} border-l-4 p-5 rounded-lg space-y-2`}
    >
      <div className="flex items-center gap-2">
        <Icon className={`w-5 h-5 ${style.icon}`} />
        <h3>{title}</h3>
      </div>
      <div className="text-foreground/80 space-y-2">{children}</div>
    </div>
  );
}
