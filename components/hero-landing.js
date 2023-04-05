import { City, EmojiLookDown, EmojiLookUp, Learning } from "iconoir-react";
import { useState, useEffect } from "react";
export default function HeroLanding() {
  const [isDivHalfwayUp, setIsDivHalfwayUp] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      const handleScroll = () => {
        const div = document.getElementById("halfway");
        const divPosition = div.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const isDivHalfwayUp = divPosition < windowHeight / 2;
        setIsDivHalfwayUp(isDivHalfwayUp);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const size = 24;
  return (
    <>
      <h3 className="break-words py-20 text-3xl md:pb-64">
        I'm a web developer and designer with a passion for beautiful, fast and
        simple websites. <br /> I create visually pleasing experiences with a
        precise touch.
      </h3>
      <h4 className="text-xl"> Currently doing:</h4>{" "}
      <h4 className="flex gap-1 text-xl leading-relaxed text-accent-2 dark:text-accent-4">
        <City width={size} height={size} />
        University: Studying Information Systems.
      </h4>
      <h4 className="flex gap-1 text-xl text-accent-2 dark:text-accent-4">
        <Learning width={size} height={size} />
        Learning: React, backend development.
      </h4>
      <div
        id="halfway"
        className="flex animate-pulse-slow items-center justify-center gap-1 stroke-accent-2 pt-8 dark:stroke-accent-3"
      >
        scroll{" "}
        {isDivHalfwayUp ? (
          <EmojiLookDown width={28} height={28} />
        ) : (
          <EmojiLookUp width={28} height={28} />
        )}
      </div>
    </>
  );
}
