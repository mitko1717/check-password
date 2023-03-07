import TextField from '@mui/material/TextField';
import { ChangeEvent, useEffect, useState } from 'react';
import { parsePasswordStrength } from '../helpers/parsing';
import ColorBlock from './ColorBlock';

export interface IColors {
  [key: string]: string,
}

const Input = () => {
  const [input, setInput] = useState<string>('')
  const [passwordStrength, setPasswordStrength] = useState<number>()
  const [passwordStrengthColors, setPasswordStrengthColors] = useState<IColors>({
    first: "gray",
    second: "gray",
    third: "gray",
  }) 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value.toString())
  };

  useEffect(() => {
    const parsing = parsePasswordStrength(input)
    setPasswordStrength(parsing?.strength)
    if (parsing?.colors) setPasswordStrengthColors(parsing?.colors)
  }, [input])
  
  return (
    <div className='w-[50%] mt-4'>
        <p className='mb-4'>passwordStrength level: {passwordStrength}</p>
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={input} onChange={handleChange}/>

        <div className='w-full flex mt-4'>
          {Object.keys(passwordStrengthColors).map((obj) => (
              <ColorBlock key={obj} passwordStrengthColors={passwordStrengthColors} obj={obj} />
              )
          )}
        </div>
    </div>
  )
}

export default Input