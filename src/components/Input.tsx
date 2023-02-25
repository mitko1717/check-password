import TextField from '@mui/material/TextField';
import { ChangeEvent, useState } from 'react';

const Input = () => {
  const [passwordStrength, setPasswordStrength] = useState<number>()
  const [passwordStrengthColor, setPasswordStrengthColor] = useState({}) 

  function isLetterParser(char: string) {
    return char.length === 1 && char.match(/[a-z]/i);
  }

  const parseCharacter = (char: any) => {
    const isLetter = isLetterParser(char)
    if (isLetter) return
  }

  const parsePasswordStrength = (val: string) => {
    let charactersAmount = 0

    if (val.length < 8) {
      setPasswordStrength(3)
      setPasswordStrengthColor({
        first: "red",
        second: "red",
        third: "red",
      })
    } else if (val.length > 7) {
      
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  
  return (
    <div className='w-[50%] mt-4'>
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth/>

        <div>

        </div>
    </div>
  )
}

export default Input