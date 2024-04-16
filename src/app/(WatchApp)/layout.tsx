import HeaderWatch from "@/components/header/headerWatch";
export default function WatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <HeaderWatch />
      <div className="mt-[80px]">{children}</div>
    </section>
  );
}
