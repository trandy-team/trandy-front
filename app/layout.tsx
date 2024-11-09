import "./globals.css";
// import "./custom.css";
import "@/styles/main.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos/dist/aos.css";
import ClinetsContainer from "@/components/_common/ClinetsContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Trandy</title>
        <meta name="description" content="Trendy 하지 못한 우린, Trandy" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-gray-200">
        <ClinetsContainer>{children}</ClinetsContainer>
      </body>
    </html>
  );
}
