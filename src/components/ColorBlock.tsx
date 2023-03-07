import { FC } from 'react'
import { IColors } from './Input'

interface IColorBlockProps {
    passwordStrengthColors: IColors,
    obj: string
}

const ColorBlock: FC<IColorBlockProps> = ({ passwordStrengthColors, obj }) => (
    <p className="h-2 rounded w-full mx-1" style={{background: `${passwordStrengthColors[obj]}`}} />
  )

export default ColorBlock