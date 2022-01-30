import './title.scss'
import React, { useState } from 'react'

export default function Title({title}) {
    const [ animate, setAnimate] = useState(false)
    const handleChange = () => setAnimate(!animate)
    console.log(handleChange)
    return (
        <div className="title-container" >
            <h2 className='proc-title title'>{title + ' ' + 'Template Use Procedure'}</h2>
        </div>
    )
}
