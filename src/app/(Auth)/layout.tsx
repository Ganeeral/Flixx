import "@/app/globals.css";

export default function AuthLayout({
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
