import { Button } from "@/app/components/ui/button";
import { Mail, DownloadCloud } from "lucide-react";
import Image from "next/image";

export default function Hero({}) {
  return (
    <div className="bg-stone-200 dark:bg-stone-900 w-full">
      <div className="max-w-4xl mx-auto py-12 px-6" id="profile-section">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col justify-between">
            <div className="-mt-1 flex flex-col gap-2">
              <p className="dark:text-stone-50 text-stone-950 text-3xl">
                Chad Coderman
              </p>
              <p className="text-stone-600 dark:text-stone-400">
                Software Engineer and Indie Hacker 🇨🇦
              </p>
            </div>
            <div className="max-sm:hidden">
              <Button variant="secondary" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Get in touch
              </Button>
              <Button size="lg" className="ml-2" variant="secondary">
                <DownloadCloud className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
          <Image
            id="headshot"
            className="w-36 h-36 max-sm:h-28 max-sm:w-28 rounded-md border-stone-700/10 border-2"
            src={"@/images/headshot.jpg"}
            width={150}
            height={150}
            alt="Headshot"
          />
        </div>
        <div className="sm:hidden w-full mt-6 flex gap-2">
          <Button size="lg" variant="secondary" className="flex-1">
            <Mail className="w-4 h-4 mr-2" />
            Get in touch
          </Button>
          <Button className="flex-1" size="lg" variant="secondary">
            <DownloadCloud className="h-4 w-4 mr-2" />
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
