import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "MediMeet - Doctors Appointment App",
  description:
    "Connect with doctors anytime, anywhere. Book appointments, access medical records, and get personalized health advice with our user-friendly app.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearances={{
      baseTheme: dark,
    }}>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          <main className="min-h-screen">{children}</main>
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>Made with ❤️ by Darya K.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
