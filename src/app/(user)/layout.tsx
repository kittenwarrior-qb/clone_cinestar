import '../globals.css';
import { Header } from '@/components/shared/header/header';
import { SubHeader } from "@/components/shared/header/subheader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <body>
        <Header></Header>
        <SubHeader></SubHeader>
        {children}
      </body>
    </html>
  );
}
