import copyToClipboard from '../tools/copyToClipboard';
import { Check, Copy } from 'iconoir-react';
import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";

import Highlight, { defaultProps } from 'prism-react-renderer';
import github from "prism-react-renderer/themes/github"
import vsDark from "prism-react-renderer/themes/vsDark"

const CodeBlock = ({data}) => {
  const [isCopied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme();
  const copy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 1100)
  }


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
    <div className="border dark:border-accent-5/50 shadow-lg dark:shadow-none bg-accent-4/10 dark:bg-accent-5/25 px-3 pb-3 pt-1 rounded-xl my-6">
      <div className="flex justify-between mb-1">
      <div className="flex">
        {filename ? 
         <p className='opacity-70 pr-4'>
          {filename}
        </p>
        : null}
        {language !== "batchfile" ? 
        <p>
          lang: <span className="opacity-70">{language}</span>
        </p>
        : null}
      </div>
      <button 
        onClick={async () => {
          await copyToClipboard(code)
          copy()
        }}
        className='
        bg-accent-8
        border
        dark:border-accent-4/5
        shadow-sm
        dark:bg-accent-5
        rounded-md
        opacity-70
        200ms py-1.5 px-2 transition-opacity hover:opacity-100 '>
          {isCopied 
          ? <Check  width={30} height={30}/>
          : <Copy width={30} height={30} />}
      </button>
      </div>
      <div className=" py-4 bg-accent-solid-white shadow dark:bg-accent-5/50  max-h-[36rem] sm:max-h-[46rem] rounded-lg overflow-y-scroll scrollbar-hide">
          {/* <div className='flex w-full pr-8 justify-end absolute'>
            
            </div>  */}
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