const isLetterParser = (char: string) => {
    return char.toLowerCase() != char.toUpperCase();
  }
const isNumericParser = (char: string) => {
    return /^\d+$/.test(char);
  }
const isSymbolParser = (char: string) => {
    return /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(char);
  }

const parseCharacter = (char: string) => {
  const isLetter = isLetterParser(char)
  if (isLetter) return 'letter'
  const isNum = isNumericParser(char)
  if (isNum) return 'number'
  const isSymbol = isSymbolParser(char)
  if (isSymbol) return 'symbol'

  return 'undefined'
}


export const parsePasswordStrength = (input: string) => {  
  if (input.length === 0) {
    return {
      colors: {
        first: "gray",
        second: "gray",
        third: "gray",
      },
      strength: 0
  }
  } else if (input.length < 8) {
    return {
      colors: {
        first: "red",
        second: "red",
        third: "red",
      },
      strength: 0
  }
  } else if (input.length > 7) {      
    let types: string[] = []

    input.split("").forEach(char => {
      let typeofChar: string = parseCharacter(char)
      if (!types.join(" ").includes(typeofChar) && typeofChar !== 'undefined') {
        types.push(typeofChar)
      }
    })

    if (types.length === 1) {
      return {
        colors:{
          first: "red",
          second: "gray",
          third: "gray",
        },
        strength: 1
    }
    } else if (types.length === 2) {
      return {
        colors: {
          first: "yellow",
          second: "yellow",
          third: "gray",
        },
        strength: 2
    }
    } else if (types.length === 3) {
      return {
        colors: {
          first: "green",
          second: "green",
          third: "green",
        },
        strength: 3
    }
    }
  }
}