type MarketingSectionHeaderProps = {
  description?: string;
  eyebrow: string;
  title: string;
};

export function MarketingSectionHeader({
  description,
  eyebrow,
  title,
}: MarketingSectionHeaderProps) {
  return (
    <div className="mx-auto max-w-4xl space-y-4 text-center sm:space-y-5">
      <p className="text-primary text-sm font-medium">{eyebrow}</p>
      <div className="space-y-3 sm:space-y-4">
        <h2 className="mx-auto max-w-[18ch] text-4xl font-semibold tracking-tighter text-balance sm:max-w-[16ch] sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-muted-foreground mx-auto max-w-3xl text-base text-balance sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
