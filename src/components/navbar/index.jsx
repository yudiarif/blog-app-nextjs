import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks";
import ThemToggle from "../themeToggle";
import { DM_Serif_Display } from "next/font/google";

const forum = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  return (
    <div className="navbar p-0">
      <div className="navbar-start">
        <div className="dropdown md:flex lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-themeColor-gray-300 rounded-box w-52 drop-shadow-md">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <details>
                <summary>Socials</summary>
                <ul className="p-2 bg-themeColor-gray-300 rounded-t-none">
                  <li>
                    <a href="/">Facebook</a>
                  </li>
                  <li>
                    <a href="/">Instagram</a>
                  </li>
                  <li>
                    <a href="/">Youtube</a>
                  </li>
                  <li>
                    <a href="/">Tiktok</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <AuthLinks />
            </li>
          </ul>
        </div>
        <div className="socials lg:flex lg:gap-4 md:gap-3 sm:gap-2 sm:hidden ">
          <Image src="/img/facebook.png" width={24} height={24} alt="facebook" />
          <Image src="/img/instagram.png" width={24} height={24} alt="instagram" />
          <Image src="/img/youtube.png" width={24} height={24} alt="youtube" />
          <Image src="/img/tiktok.png" width={24} height={24} alt="tiktok" />
        </div>
      </div>
      <div className="navbar-center">
        <a className={`${forum.className} text-3xl font-bold`}>Your Blog App</a>
      </div>
      <div className="navbar-end">
        <div className="link lg:flex lg:gap-3 lg:text-lg sm:hidden font-bold no-underline">
          {/* <ThemToggle /> */}
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          <AuthLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
