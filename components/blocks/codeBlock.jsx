// import  SyntaxHighlighter  from 'react-syntax-highlighter';
// import { atomDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import copyToClipboard from '../tools/copyToClipboard';
import { Check, Copy } from 'iconoir-react';
import { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from "next-themes";

const CodeBlock = ({data}) => {
  const [isCopied, setCopied] = useState(false)
  const { theme, setTheme } = useTheme();
  
  const copy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 1100)
  }
  const code = data.code
  const filename = data.filename
  const language = data.language
  const highlightedLines = data.highlightedLines

  const [lines, setLines] = useState([])


let isMounted = false
  useEffect(() => {
    if (!isMounted) {
      isMounted = true
      setTheme(theme)
      setLines(highlightedLines)
    }    
    return () => isMounted = false
  }, [theme, lines])
    
    

  return (
    <ThemeProvider>
    <div className="relative shadow-lg dark:shadow-none bg-accent-4/10 dark:bg-accent-5/25 px-3 pb-3 pt-1 rounded-xl my-6">
      <div className="flex justify-between ">
      <p className='opacity-70'>
        {filename}
      </p>
      <p>
        language: <span className="opacity-70">{language}</span>
      </p>
    </div>
      <div className="px-2 py-4flex bg-[#fafafa] dark:bg-accent-5/50  max-h-[42rem] rounded-lg overflow-y-scroll scrollbar-hide">
          <div className='flex w-full pr-6 justify-end absolute'>
            <button 
            onClick={async () => {
              await copyToClipboard(code)
              copy()
            }}
            className='200ms py-2 px-3 opacity-75 transition-opacity hover:opacity-100 '>
              {isCopied 
              ? <Check width={30} height={30}/>
              : <Copy strokeWidth={1.5} width={30} height={30} />}
            </button>
            </div>
            <pre className='p-2'>
              <code className="mx-1 border-none scrollbar-hide dark:!bg-[#0d0d0d]">
                {code}
              </code>
            </pre>
          {/* <SyntaxHighlighter
            className="border-none scrollbar-hide dark:!bg-[#0d0d0d]"
            // style={theme === "light" ? oneLight : atomDark}
            
            useInlineStyles={true}
            lineNumberStyle={{minWidth: "2em"}}
            showLineNumbers={true}
            language={language}
            lineProps={line => {
              const isHighlighted = highlightedLines && highlightedLines.includes(line)
              console.log("🚀 ~ file: codeBlock.jsx:72 ~ CodeBlock ~ isHighlighted:", isHighlighted, line)
              return {
                "className": `${isHighlighted} ? block ml-10 w-full bg-bgLight : '' `
              }
            }}
            wrapLines={true}>
            {code}
          </SyntaxHighlighter> */}
      </div>
    </div>
  </ThemeProvider>
  )
}

export default CodeBlock