import { Theme } from "@radix-ui/themes";

export default function gameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme>
      {children}
    </Theme>
  );
}
