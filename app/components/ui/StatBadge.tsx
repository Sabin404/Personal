interface StatBadgeProps {
  label: string;
  value: string;
  variant?: "default" | "compact";
}

export default function StatBadge({
  label,
  value,
  variant = "default",
}: StatBadgeProps) {
  if (variant === "compact") {
    return (
      <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
        <span className="text-zinc-400">{label}: </span>
        <span className="font-medium text-white">{value}</span>
      </div>
    );
  }

  return (
    <div className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
      <span className="text-zinc-400">{label}:</span> <span>{value}</span>
    </div>
  );
}
