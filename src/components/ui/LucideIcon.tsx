import * as icons from "lucide-react";
import type { LucideProps } from "lucide-react";

type Props = LucideProps & { name: string };

function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export default function LucideIcon({ name, ...props }: Props) {
  const Icon = icons[toPascalCase(name) as keyof typeof icons] as React.ComponentType<LucideProps> | undefined;
  if (!Icon) return null;
  return <Icon {...props} />;
}
