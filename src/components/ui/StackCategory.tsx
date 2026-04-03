type Props = {
  label: string;
  value: string;
};

export default function StackCategory({ label, value }: Props) {
  return (
    <div className="flex flex-col gap-[2px]">
      <span className="font-primary text-[12px] font-semibold text-primary tracking-[2px] uppercase">
        {label}
      </span>
      <span className="font-secondary text-[14px] text-foreground leading-[1.6]">
        {value}
      </span>
    </div>
  );
}
