export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={[
        "h-px w-full bg-gradient-to-r from-transparent via-[rgba(241,236,227,0.10)] to-transparent",
        className,
      ].join(" ")}
    />
  );
}


