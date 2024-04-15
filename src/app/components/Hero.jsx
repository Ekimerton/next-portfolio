import { Button } from "@/app/components/ui/button";
import { Mail } from "lucide-react";

export default function Hero({}) {
  return (
    <div className="bg-stone-200 dark:bg-stone-900 w-full">
      <div className="max-w-3xl mx-auto py-12 px-6" id="profile-section">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col justify-between">
            <div className="-mt-1">
              <p className="dark:text-stone-50 text-stone-950 text-3xl">
                Ekim Karabey
              </p>
              <p className="text-stone-600 dark:text-stone-400 mt-2">
                Software Engineer 🇨🇦
              </p>
            </div>
            <Button className="max-sm:hidden" size="lg">
              <Mail className="w-4 h-4 mr-2" />
              Get in touch
            </Button>
          </div>
          <div
            id="headshot"
            className="w-36 h-36 max-sm:h-36 rounded-md dark:bg-stone-200 bg-stone-800 border-stone-700/10 border-2"
          ></div>
        </div>
        <Button size="lg" className="sm:hidden w-full mt-6">
          <Mail className="w-4 h-4 mr-2" />
          Get in touch
        </Button>
      </div>
    </div>
  );
}
