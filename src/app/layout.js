import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "LogIt",
  description:
    "LogIt is your go-to blogging platform where ideas come to life. Share your thoughts, stories, and insights with the world in a seamless and engaging way. Whether you're a seasoned writer or just starting out, LogIt empowers you to express yourself effortlessly. Start logging your journey today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
