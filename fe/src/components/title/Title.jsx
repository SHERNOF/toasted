import './title.scss'
import React from 'react'

export default function Title({title}) {

    return (
        <div className="title-container" >
            <h2 className='proc-title title'>{title + ' ' + 'Template Use Procedure'}</h2>
        </div>
    )
}
