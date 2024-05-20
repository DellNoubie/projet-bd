import React from 'react'

export const Input = (props) => {
    const { value, name, type, onChange, placeholder } = props;
    return (
        <div className='mt-5'>
            <input type={type}
                placeholder={placeholder}
                name={name} value={value}
                onChange={(e => onChange(e))}
                className='form-control' />
        </div>
    )
}