export default function Table () {
    return (
        <>
        <h1 className="text-3xl">Skills:</h1>
        <p className="text-sm text-accent-4">A table of notable skills of mine with an rough estimate on the profiency where 10 would be completely fluent.</p>
        <table className="cursor-custom text-lg text-left table-auto w-full">
        <thead className="bg-accent-2/25">
        <tr>
        <th className="pl-2 py-1">Skill</th>
        <th className="pl-2 py-1 border-l border-accent-2">Profiency</th>
        </tr>
    </thead>
    <tbody className="divide-y divide-accent-2">
        <tr className= "border-accent-2 hover:bg-accent-1 transition-colors">
            <td className="pl-2 py-1">JavaScript</td>
            <td className="border-l border-inherit pl-2">7/10</td>
        </tr>
        <tr className= "hover:bg-accent-1 transition-colors">
        <td className="pl-2 py-1">React</td>
        <td className="border-l border-inherit pl-2">5/10</td>
        </tr>
        <tr className= "hover:bg-accent-1 transition-colors">
        <td className="pl-2 py-1">Next.js</td>
        <td className="border-l border-inherit pl-2">7/10</td>
        </tr>
        <tr className= "hover:bg-accent-1 transition-colors">
        <td className="pl-2 py-1">php</td>
        <td className="border-l border-inherit pl-2">6/10</td>
        </tr>
        <tr className= "hover:bg-accent-1 transition-colors">
        <td className="pl-2 py-1">HTML/CSS</td>
        <td className="border-l border-inherit pl-2">9/10</td>
        </tr>
        <tr className= "hover:bg-accent-1 transition-colors">
        <td className="pl-2 py-1">Figma</td>
        <td className="border-l border-inherit pl-2">7/10</td>
        </tr>
        <tr className= "hover:bg-accent-1 transition-colors">
        <td className="pl-2 py-1">Adobe CC</td>
        <td className="border-l border-inherit pl-2">8/10</td>
        </tr>
        </tbody>
        </table>
        </>
    )
}