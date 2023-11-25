import React from 'react';

interface IInputProps {
    type: string,
    className: string,
}


export const Input: React.FC<IInputProps> = ({type, className}) => {
  return (
    <input type={type} className={className}/>
  );
};