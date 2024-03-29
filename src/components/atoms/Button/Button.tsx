import React from 'react';
import './Button.scss'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{

}

export const Button: React.FC<ButtonProps> = ({children,color='#F0F0F0',className='primary',...props}) => {
  const style = className==='primary'?{backgroundColor:color}:{color:color}
  
  return <button style={{backgroundColor:color}} className={className} {...props}>{children}</button>
}