import HeaderWatch from "@/components/header/headerWatch";
import "@/app/globals.css";


export default function WatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderWatch />
      <div className="mt-[66px] flix:mt-[80px] flex-grow">{children}</div>
    </>
  
  );
}
