import { OpenNewWindow } from "iconoir-react";

export const Projects = () => {
  const salasanakone = {
    url: "https://www.salasanakone.com/",
    name: "Salasanakone",
    desc: "Password Generator, for the Finnish language."
  }
  const woltApp = {
    url: "https://wolt-taupe.vercel.app/",
    name: "Calculate delivery Fee",
    desc: "Application project for Wolt. Calculates a deliveryfee on some conditions."
  }
  const projects =[salasanakone, woltApp]

  return (
    <>
    <h2 className="text-3xl pb-6">Projects</h2>
    <div className="flex flex-col gap-4">
      {
        projects.map((projectObj) => {
          return (
            <div className="flex gap-4">
              <a
              target="_blank"
              className="flex gap-1 py-2 px-4 w-fit bg-accent-3 font-medium rounded-xl border border-accent-4 hover:invert transition-all 200ms"
              href={projectObj.url}>
              {projectObj.name}
              <OpenNewWindow width={18}/>
              </a>
              <p className="flex items-center">{projectObj.desc}</p>
            </div>
          )
        })
      }
    </div>
  </>
  )
}