import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Book, Home, SeaAndSun } from "iconoir-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  let mount = false;
  // run useEffect, to make sure that correct theme is rendered
  useEffect(() => {
    if (!mount) {
      mount = true;
      setMounted(true);
    }
    return () => (mount = false);
  }, []);

  if (!mounted) {
    return null;
  }

  const size = 20;
  const home = {
    url: "/",
    title: "Home",
    logo: {
      element: <Home label="Logo of Home button" width={size} height={size} />,
    },
  };
  const blog = {
    url: "/Blog",
    title: "Blog",
    logo: {
      element: <Book label="Logo of Blog button" width={size} height={size} />,
    },
  };

  const menuItems = [home, blog];

  return (
    <div
      className={`fixed bottom-5 z-50 flex h-min w-full justify-center px-3`}
    >
      <nav
        className="dark: relative flex w-full max-w-3xl flex-row justify-between 
      rounded-3xl 
      border 
      border-accent-3/10 
      bg-accent-4/50
      p-3
      shadow-2xl 
      shadow-accent-5/40 backdrop-blur-xl
      dark:bg-accent-1/40
      dark:shadow-none md:p-5"
      >
        <div
          className="
        flex flex-row gap-6
        fill-accent-5/90 
        text-accent-5 
        dark:fill-accent-3 
        dark:text-accent-3 
        "
        >
          {menuItems.map((item) => {
            return (
              <Link
                key={item.title}
                className="flex items-center gap-1 rounded-3xl border border-transparent py-1 pl-3 pr-4 text-lg transition-all duration-150 hover:bg-bgLight dark:hover:bg-bgPrimary"
                href={item.url}
              >
                {item.logo.element}
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="flex justify-self-end">
          <button
            // really nice way to set the theme. Borrowed from https://github.com/leerob/leerob.io/blob/main/components/Container.tsx
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle Dark Mode"
            title="Toggle Dark Mode"
            className="
            rounded-3xl 
            stroke-accent-5 
            p-1.5 opacity-75 transition-all hover:opacity-100 dark:stroke-accent-3"
          >
            <SeaAndSun width={28} height={28} />
          </button>
        </div>
      </nav>
    </div>
  );
}
