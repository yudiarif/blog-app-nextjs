import { Forum, Roboto_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeContextProvider } from "@/context/ThemeContext";

const font = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Blog App",
  description: "Nextjs Blog Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-themeColor-gray-300 min-w-screen overflow-x-hidden`}>
        <ThemeContextProvider>
          <div className="container min-h-screen min-w-full bg-themeColor-gray-300 text-themeColor-dark">
            <div className="2xl:max-w-screen-2xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm sm:max-w-md lg:px-10 mx-auto px-20">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
