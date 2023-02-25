import TextField from '@mui/material/TextField';
import { ChangeEvent, useEffect, useState } from 'react';

const Input = () => {
  const [input, setInput] = useState<string>('')
  const [passwordStrength, setPasswordStrength] = useState<number>()
  const [passwordStrengthColors, setPasswordStrengthColors] = useState({
    first: "gray",
    second: "gray",
    third: "gray",
  }) 

  function isLetterParser(char: string) {
    return char.toLowerCase() != char.toUpperCase();
  }
  function isNumericParser(char: string){
    return /^\d+$/.test(char);
  }
  function isSymbolParser(char: string){
    return /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(char);
   }

  const parseCharacter = (char: string) => {
    const isLetter = isLetterParser(char)
    if (isLetter) return 'letter'
    const isNum = isNumericParser(char)
    if(isNum) return 'number'
    const isSymbol = isSymbolParser(char)
    if (isSymbol) return 'symbol'

    return 'undefined'
  }

  const parsePasswordStrength = (val: string) => {    
    if (val.length < 8) {
      setPasswordStrength(3)
      setPasswordStrengthColors({
        first: "red",
        second: "red",
        third: "red",
      })
    } else if (val.length > 7) {      
      let types: string[] = []

      val.split("").forEach(char => {
        let typeofChar: string = parseCharacter(char)

        if (!types.join(" ").includes(typeofChar) && typeofChar !== 'undefined') {
          types.push(typeofChar)
        }
      })

      if (types.length === 1) {
        setPasswordStrengthColors({
          first: "red",
          second: "gray",
          third: "gray",
        })
        setPasswordStrength(1)
      } else if (types.length === 2) {
        setPasswordStrengthColors({
          first: "yellow",
          second: "yellow",
          third: "gray",
        })
        setPasswordStrength(2)
      } else if (types.length === 3) {
        setPasswordStrengthColors({
          first: "green",
          second: "green",
          third: "green",
        })
        setPasswordStrength(3)
      }
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value.toString())
  };

  useEffect(() => {
    parsePasswordStrength(input)

    if (input.length === 0) {
      setPasswordStrengthColors({
        first: "gray",
        second: "gray",
        third: "gray",
      })
    }
  }, [input])
  
  return (
    <div className='w-[50%] mt-4'>
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={input} onChange={handleChange}/>

        <div>
          first: {passwordStrengthColors.first} <br/>
          second: {passwordStrengthColors.second} <br/>
          third: {passwordStrengthColors.third} 
        </div>
        <p>passwordStrength: {passwordStrength}</p>
    </div>
  )
}

export default Input