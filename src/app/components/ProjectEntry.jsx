import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectEntry({ size = "small" }) {
  if (size === "large") {
    return (
      <div className="row-span-2 col-span-2 rounded-xl border-2 border-stone-700/10 bg-stone-100 dark:bg-stone-900 bg-cover bg-black/30 p-4 pb-0">
        <div className="relative w-full h-full flex flex-col justify-start items-center m-0 overflow-hidden text-center">
          <h3 className="text-3xl mt-2">Slimer</h3>
          <p className="w-11/12">
            The best way to suck slime out of my ass fr. The best way to suck
            slime out of my ass fr.
          </p>
          <Image
            alt="project-1"
            src={"/images/project1.png"}
            width={500}
            className="w-10/12 m-0 rounded-md"
            height={500}
          />

          <Button className="bottom-4 right-0 absolute">
            See Project
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`row-span-1 col-span-2 rounded-xl border-2 border-stone-700/10 bg-stone-100 dark:bg-stone-900 bg-cover bg-black/30 p-4`}
    >
      <div className="relative w-full h-full flex m-0 overflow-hidden gap-4">
        <Image
          alt="project-1"
          src={"/images/project1.png"}
          width={100}
          className="h-full w-min m-0 object-scale-down rounded-sm"
          height={100}
        />
        <div>
          <h3 className="m-0">Slimer</h3>
          <p className="">A fun app for making AI ps5 clones.</p>
        </div>

        <Button className="bottom-0 right-0 absolute">
          See Project
          <ExternalLink className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
