import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
export default function Navbar({}) {
  return (
    <nav className="bg-stone-200 dark:bg-stone-900 top-0 w-full z-10">
      <div className="max-w-3xl mx-auto py-3 px-6 flex justify-between items-center text-stone-600 dark:text-stone-400">
        <div
          id="navbar-left"
          className="flex items-center justify-center gap-2"
        >
          <Link href={"/"}>
            <div className="h-10 w-10 dark:bg-stone-200 bg-stone-800 rounded-sm"></div>
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
          <div className="bg-green-400 h-2 w-2 rounded-full glow"></div>
          <p className="text-sm mr-2">Available for work</p>
          {/*<Button size="icon">
            <Mail className="h-4 w-4" />
          </Button>*/}
        </div>
      </div>
    </nav>
  );
}
