import { ContextProvider } from "@/components/Context";
import "./globals.css";
import { Inter } from "next/font/google";
import { getTeams } from "@/lib/lib";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  NewPasswordModal,
}: {
  children: React.ReactNode;
  NewPasswordModal: React.ReactNode;
}) {
  const teams = await getTeams();

  return (
    <ContextProvider data={{ teams }}>
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
