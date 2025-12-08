import { ListNumbersIcon } from "@phosphor-icons/react";

interface StatCardProps {
  icon: any;
  title: string;
  value: string;
  iconColor?: string;
}

export function StatCard({
  icon: Icon = ListNumbersIcon,
  title,
  value,
  iconColor = "text-primary",
}: StatCardProps) {
  return (
    <div className="bg-card p-5 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all">
      <div className="flex items-center gap-3 mb-2">
        <div className={`${iconColor} p-2 rounded-lg bg-background2`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-muted-foreground">{title}</h3>
      </div>
      <p className="text-foreground pl-11">{value}</p>
    </div>
  );
}
