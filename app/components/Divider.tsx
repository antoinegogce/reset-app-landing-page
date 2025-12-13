export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={[
        "h-px w-full bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.10)] to-transparent",
        className,
      ].join(" ")}
    />
  );
}


