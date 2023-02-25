const isLetterParser = (char: string) => {
    return char.toLowerCase() != char.toUpperCase();
  }
  function isNumericParser(char: string){
    return /^\d+$/.test(char);
  }
  function isSymbolParser(char: string){
    return /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(char);
   }

 export const parseCharacter = (char: string) => {
    const isLetter = isLetterParser(char)
    if (isLetter) return 'letter'
    const isNum = isNumericParser(char)
    if(isNum) return 'number'
    const isSymbol = isSymbolParser(char)
    if (isSymbol) return 'symbol'

    return 'undefined'
  }