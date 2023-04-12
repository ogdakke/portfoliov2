import copyToClipboard from '../tools/copyToClipboard';
// import Check from 'iconoir-react/dist/Check';
// import Copy from 'iconoir-react/dist/Copy';
import { Check, Copy } from 'iconoir-react';
import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";

import Highlight, { defaultProps } from 'prism-react-renderer';
import github from "prism-react-renderer/themes/github"
import vsDark from "prism-react-renderer/themes/vsDark"

const CodeBlock = ({data}) => {
  const [isCopied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme();
  const copy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 1100)
  }

  useEffect(() => {
    console.log(theme);
    if (window !== undefined) {

    }
  }, [])

  const code = data.code
  const filename = data.filename
  const language = data.language
  const highlightedLines = data.highlightedLines
  
  const checkLine = (index) => {
    if (highlightedLines !== undefined) {
      if (highlightedLines.includes(index)) {
        return true
      } else {
        return false
      }
    } else return null
  } 


 // run useEffect, to make sure that correct theme is rendered
 useEffect(() => {
  setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }


  let codeTheme = github
  if (resolvedTheme === "light") {
    codeTheme = github
  }
  if (resolvedTheme === "dark") {
    codeTheme = vsDark
  }



  return (
    <div className="relative shadow-lg dark:shadow-none bg-accent-4/10 dark:bg-accent-5/25 px-3 pb-3 pt-1 rounded-xl my-6">
      <div className="flex justify-between ">
      <p className='opacity-70'>
        {filename}
      </p>
      <p>
        language: <span className="opacity-70">{language}</span>
      </p>
      </div>
      <div className=" py-4 bg-[#fafafa] dark:bg-accent-5/50  max-h-[42rem] rounded-lg overflow-y-scroll scrollbar-hide">
          <div className='flex w-full pr-6 justify-end absolute'>
            <button 
            onClick={async () => {
              await copyToClipboard(code)
              copy()
            }}
            className='200ms py-2 px-3 opacity-75 transition-opacity hover:opacity-100 '>
              {isCopied 
              ? <Check  width={30} height={30}/>
              : <Copy strokeWidth={1.5} width={30} height={30} />}
            </button>
            </div> 
            <Highlight  {...defaultProps} 
            theme={codeTheme} 
            code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={`${className} !bg-transparent px-2`} style={style}>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i })
                  if (checkLine(i + 1)) {                    
                    lineProps.className = `${lineProps.className} bg-[#fef3c8] dark:bg-[#27261c]`
                  }
                  return (
                    <div key={i} {...lineProps}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  )
                })}
              </pre>
            )}
          </Highlight>
      </div>
    </div>
  )
}

export default CodeBlock