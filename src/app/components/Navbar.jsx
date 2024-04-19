import { Button } from "./ui/button";
import { DownloadCloud } from "lucide-react";
import Link from "next/link";
import { Homemade_Apple } from "next/font/google";

const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: ["400"] });

export default function Navbar({}) {
  return (
    <nav className="bg-stone-200 dark:bg-stone-900 top-0 w-full z-10">
      <div className="max-w-3xl mx-auto py-3 px-6 flex justify-between items-center text-stone-600 dark:text-stone-400">
        <div
          id="navbar-left"
          className="flex items-center justify-center gap-2"
        >
          <Link href={"/"}>
            <p
              className={`text-2xl text-black dark:text-white pt-3 leading-none ${homemadeApple.className}`}
            >
              Hackerman
            </p>
          </Link>
          {/*
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Blog</Button>
          */}
        </div>
        <div
          id="navbar-right"
          className="flex items-center justify-center gap-2"
        >
          <div className="flex items-center justify-center gap-2 max-sm:hidden">
            <div className="bg-green-400 h-2 w-2 rounded-full glow"></div>
            <p className="text-sm">Available for work</p>
          </div>
          <Button className="ml-2" variant="secondary">
            <DownloadCloud className="h-4 w-4 mr-2" />
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
}
