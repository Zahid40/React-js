import React from 'react'

export default function Aleart(props) {
    const capatasized = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.aleart && <div className='altbox'>
            <div className={`alert alert-${props.aleart.type}  fade show` }role="alert">
                <strong>{capatasized(props.aleart.type)}</strong>:{props.aleart.message}
            </div>
        </div>
    )
}
