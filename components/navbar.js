"use client"

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
// import Book from "iconoir-react/dist/Book";
// import GitHub from "iconoir-react/dist/GitHub";
// import Home from "iconoir-react/dist/Home";
// import SeaAndSun from "iconoir-react/dist/Book";
import { Book, GitHub, Home, SeaAndSun } from "iconoir-react";
import { usePathname } from 'next/navigation';



export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  let pathname = usePathname() || "/"
  
    if (pathname.includes("/Blog/")) {
    pathname = "/Blog"
    }
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
  const github = {
    url: "https://github.com/ogdakke",
    title: "",
    logo: {
      element: <GitHub label="Logo of GitHub" width={size} height={size} />,
    },
  };

  const menuItems = [home, blog, github];

  return (
    <div
      className={`fixed bottom-5 z-50 flex h-min w-full justify-center px-3`}
    >
      <nav
        className="dark: relative flex w-full max-w-3xl flex-row justify-between 
      rounded-2xl 
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
          relative
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
                className={`relative flex items-center gap-1 rounded-lg py-1 
                px-3 
                text-lg transition-all duration-150 
                hover:bg-bgLight/75 dark:hover:bg-bgPrimary/75`}
                href={item.url}
                
                
              >
                {pathname === item.url ? 
                <span className={`absolute inset-0 bg-bgLight/25 dark:bg-bgPrimary/50
                  rounded-lg
                  z-[-1]`}> 
                </span>
                : null}

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
            rounded-lg 
            hover:bg-bgLight/75
            dark:hover:bg-bgPrimary/75
          stroke-accent-5 
            p-1.5 opacity-75 transition-all hover:opacity-100 dark:stroke-accent-3"
          >
            <SeaAndSun strokeWidth={1.45} width={28} height={28} />
          </button>
        </div>
      </nav>
    </div>
  );
}