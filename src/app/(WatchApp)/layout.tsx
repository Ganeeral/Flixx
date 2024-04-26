import HeaderWatch from "@/components/header/headerWatch";
import "@/app/globals.css";


export default function WatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <HeaderWatch />
      <div className="mt-[54px] flix:mt-[80px]">{children}</div>
    </section>
  );
}
