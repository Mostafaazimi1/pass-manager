import { ContextProvider } from "@/components/Context";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  NewPasswordModal,
}: {
  children: React.ReactNode;
  NewPasswordModal: React.ReactNode;
}) {
  return (
    <ContextProvider data={{ teams: [], passwords: [] }}>
      <html lang="en">
        <body className={inter.className}>
          <div className=" container mx-auto my-24 flex flex-row gap-6">
            {children}
            {NewPasswordModal}
          </div>
        </body>
      </html>
    </ContextProvider>
  );
}
