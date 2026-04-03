import LucideIcon from "./LucideIcon";

type Props = {
  icon: string;
  name: string;
  description: string;
};

export default function ToolCard({ icon, name, description }: Props) {
  return (
    <div className="bg-card rounded-[16px] p-[32px] flex flex-col gap-[16px] h-full">
      <div className="flex items-center gap-3">
        <LucideIcon name={icon} size={32} className="text-primary" />
        <span className="font-primary text-[16px] font-semibold text-card-foreground">
          {name}
        </span>
      </div>
      <p className="font-secondary text-[14px] text-muted-foreground leading-[1.6]">
        {description}
      </p>
    </div>
  );
}
