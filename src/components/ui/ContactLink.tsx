import LucideIcon from "./LucideIcon";

type Props = {
  icon: string;
  label: string;
  href: string;
};

export default function ContactLink({ icon, label, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-[12px] group"
    >
      <LucideIcon name={icon} size={24} className="text-primary" />
      <span className="font-secondary text-[16px] font-medium text-foreground group-hover:text-primary transition-colors">
        {label}
      </span>
    </a>
  );
}
