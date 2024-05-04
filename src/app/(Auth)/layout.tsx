import "@/app/globals.css";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="page">
      {children}
    </div>
  );
}
