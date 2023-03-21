import React from 'react';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{

}

export const Button: React.FC<ButtonProps> = (props) => {
    const {children} = props
  return <button {...props}>{children}</button>
}