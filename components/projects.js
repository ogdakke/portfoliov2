import Book from "iconoir-react/dist/Book";
import OpenNewWindow from "iconoir-react/dist/OpenNewWindow";
import Link from "next/link";

const salasanakone = {
  url: "https://www.salasanakone.com/",
  name: "Salasanakone",
  desc: "Password Generator, for the Finnish language.",
  post: {
    hasPost: true,
    postUrl: "/Blog/posts/creating-a-password-generator",
  },
};
const woltApp = {
  url: "https://wolt-taupe.vercel.app/",
  name: "Calculate delivery Fee",
  desc: "Application project for Wolt. Calculates a deliveryfee on some conditions.",
  post: {
    hasPost: false,
    postUrl: "",
  },
};

export const Projects = () => {
  const projects = [salasanakone, woltApp];

  return (
    <>
      <h2 className="pb-6 text-3xl">Projects</h2>
      <div className="flex flex-col gap-4">
        {projects.map((projectObj) => {
          return (
            <div key={projectObj.name} className="flex flex-col gap-4 ">
              <div className="flex justify-between sm:justify-start sm:gap-4">
                <a
                  target="_blank"
                  className="200ms flex w-fit gap-1 rounded-xl border 
                  border-accent-4
                  bg-bgLight py-2 px-4 invert transition-all hover:invert-0
                  dark:bg-bgPrimary
                  font-bold
                  dark:font-normal"
                  href={projectObj.url}
                >
                  {projectObj.name}
                  <OpenNewWindow width={18} />
                </a>
                {projectObj.post.hasPost ? (
                  <Link
                    href={projectObj.post.postUrl}
                    target="_blank"
                    title={`Blog post on ${projectObj.name}`}
                    className="200ms flex w-fit items-center gap-2 rounded-xl bg-bgLight py-2 px-3 transition-all hover:invert dark:bg-bgPrimary"
                  >
                    Read in blog
                    <Book width={18} height={18} />
                  </Link>
                ) : null}
              </div>

              <p className="flex items-center">{projectObj.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
