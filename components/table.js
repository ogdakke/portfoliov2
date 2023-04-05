export default function Table() {
  return (
    <>
      <h1 className="text-3xl">Skills:</h1>
      <p className="py-3 text-sm text-accent-4">
        A table of notable skills of mine with an rough estimate on the
        profiency where 10 would be completely fluent.
      </p>
      <table className="cursor-custom w-full table-auto text-left text-lg">
        <thead className="bg-accent-2/25">
          <tr>
            <th className="py-1 pl-2">Skill</th>
            <th className="border-l border-accent-2 py-1 pl-2">Profiency</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-accent-2">
          <tr className="border-accent-2 transition-colors hover:bg-accent-1/25">
            <td className="py-1 pl-2">JavaScript</td>
            <td className="border-l border-inherit pl-2">7/10</td>
          </tr>
          <tr className="transition-colors hover:bg-accent-1/25">
            <td className="py-1 pl-2">React</td>
            <td className="border-l border-inherit pl-2">7/10</td>
          </tr>
          <tr className="transition-colors hover:bg-accent-1/25">
            <td className="py-1 pl-2">php</td>
            <td className="border-l border-inherit pl-2">6/10</td>
          </tr>
          <tr className="transition-colors hover:bg-accent-1/25">
            <td className="py-1 pl-2">C#</td>
            <td className="border-l border-inherit pl-2">5/10</td>
          </tr>
          <tr className="transition-colors hover:bg-accent-1/25">
            <td className="py-1 pl-2">HTML/CSS</td>
            <td className="border-l border-inherit pl-2">9/10</td>
          </tr>
          <tr className="transition-colors hover:bg-accent-1/25">
            <td className="py-1 pl-2">Figma</td>
            <td className="border-l border-inherit pl-2">9/10</td>
          </tr>
          <tr className="transition-colors hover:bg-accent-1/25">
            <td className="py-1 pl-2">Adobe CC</td>
            <td className="border-l border-inherit pl-2">8/10</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
