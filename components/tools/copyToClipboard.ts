

export default async function copyToClipboard(valueToCopy: string): Promise<string> {
  writeToClipboard(valueToCopy)
  return valueToCopy
}

const writeToClipboard = async (value: string) => {
  if (navigator) {
    const clipBoard = navigator.clipboard
    
    try {
      await clipBoard.writeText(value)
      console.log("Copied value successfully");
      return value 
      
  } catch (err) {
    console.error(err)
    throw err
  }
} else {
  throw new Error("No navigator detected");
}
}