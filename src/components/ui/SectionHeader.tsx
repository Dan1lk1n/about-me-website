type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="flex flex-col gap-[24px]">
      <span className="font-primary text-[14px] font-medium text-primary tracking-[2px] uppercase">
        {eyebrow}
      </span>
      {title && (
        <h2 className="font-primary text-[32px] lg:text-[48px] font-bold text-foreground leading-[1.1]">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="font-secondary text-[18px] text-muted-foreground leading-[1.7]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
