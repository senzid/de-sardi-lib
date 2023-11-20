import React from 'react';
import './Button.scss'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{

}

export const Button: React.FC<ButtonProps> = ({children,color='#F0F0F0',className='primary',...props}) => {
  const style = className==='primary'?{backgroundColor:color}:{color:color}
  
  return <button style={{backgroundColor:color}} className={className} {...props}>{children}</button>
}

// interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
//   type: "primary" | "outlined",
//   title: string,
//   color?: string,
//   textColor?:string,
//   children?: React.ReactNode;
//   onClick?: ()=>void
// }
// export function Button ({type,title,onClick,children,color,textColor,...props}:ButtonProps) {
//   const classType= `styles.${type}`

//   return (
//       <button onClick={onClick} className={type} style={{backgroundColor:color}} {...props}>
//           {children}
//       </button>
//   )
// }