import React from 'react'

const Button = ({ onClick, className, children, disable,...rest }) => {
    const buttonClass = disable ? ' cursor-not-allowed bg-blue-200' : ' bg-blue-400 cursor-poiter';
    return (
        <button {...rest} onClick={e => {
            e.preventDefault();
            if(disable) return;
            onClick && typeof onClick === 'function' && onClick(e)
        }} className={`px-2  rounded border  text-sm h-9 mr-1 ${className || ''} ${buttonClass}`}>{children && children}</button>
    )
}

export default Button
