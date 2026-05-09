import { cn } from "@/lib/utils";

interface SkillChipProps {
  label: string;
  className?: string;
}

export function SkillChip({ label, className }: SkillChipProps) {
  return (
    <span
      className={cn(
        "px-3 py-1.5 bg-muted/60 border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors",
        className
      )}
    >
      {label}
    </span>
  );
}
