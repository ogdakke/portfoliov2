import Container from "./container";
import { OpenNewWindow } from "iconoir-react";

export default function Footer() {

  const gitHub = {
    url: "https://github.com/ogdakke",
    title: "My GitHub Profile",
    name: "GitHub"
  }
  const email = {
    url: "mailto:contactdew@proton.me",
    title: "Email me",
    name: "Email"
  }
  const links = [gitHub, email]

  return (
    <footer className="mt-10 mb-20 border-t border-accent-2">
      <Container>
        <div className="flex flex-col pb-16 pt-8 lg:py-16 ">

          {links.map((item) => {
            return (
              <a
              key={item.name} 
              className="opacity-85 
              text-md
              mb-6
              flex
              w-fit
              items-center
              gap-1 fill-accent-5
              p-4 
              leading-tight
              tracking-tighter 
              text-accent-5 transition-all hover:underline hover:opacity-100 dark:fill-accent-3 dark:text-accent-3 lg:m-4 lg:mb-0 lg:pr-4 lg:text-left lg:text-lg " 
                href={item.url}
                target="_blank"
                title={item.title}>
                {item.name}
                <OpenNewWindow width={18} height={18} />
              </a>
            )
          })}
          <p className="text-md mb-10 p-4 leading-tight tracking-tighter lg:m-4 lg:mb-0 lg:pr-4 lg:text-left lg:text-lg">
            Made by DWE 2023
          </p>
        </div>
      </Container>
    </footer>
  );
}
