import TextField from '@mui/material/TextField';
import { ChangeEvent, useEffect, useState } from 'react';
import { parseCharacter } from '../helpers/parsing';

const Input = () => {
  const [input, setInput] = useState<string>('')
  const [passwordStrength, setPasswordStrength] = useState<number>()
  const [passwordStrengthColors, setPasswordStrengthColors] = useState<any>({
    first: "gray",
    second: "gray",
    third: "gray",
  }) 

  const parsePasswordStrength = (val: string) => {    
    if (val.length < 8) {
      setPasswordStrength(0)
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
        <p className='mb-4'>passwordStrength level: {passwordStrength}</p>
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={input} onChange={handleChange}/>

        <div className='w-full flex mt-4'>
          {Object.keys(passwordStrengthColors).map(obj => {            
            return (
              <p key={obj} className="h-2 rounded w-full mx-1" style={{background: `${passwordStrengthColors[obj]}`}} />
            )
          })}
        </div>
    </div>
  )
}

export default Input