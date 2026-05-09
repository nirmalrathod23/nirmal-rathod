import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label?: string;
  src?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide";
  className?: string;
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function ImagePlaceholder({ label, src, aspectRatio = "video", className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl bg-muted/50 border border-border/50 overflow-hidden relative",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={label || ""}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, var(--foreground) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          {label && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-muted-foreground/60 text-xs font-medium uppercase tracking-widest">
                {label}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
