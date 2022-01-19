import './title.scss'
import ReactTransitionGroup from 'react-addons-css-transition-group'
import React, { useState } from 'react'

export default function Title({title}) {
    const [ animate, setAnimate] = useState(false)
    const handleChange = () => setAnimate(!animate)
    console.log(handleChange)
    return (
        <ReactTransitionGroup className="title-container" 
        transitionName='example'
        transitionAppear = {true} transitionAppearTimeout = {500}
        transitionENter = {false} transitionLeave = {false}
        >
                <h2 className='proc-title'>{title + ' ' + 'Template Use Procedure'}</h2>
        </ReactTransitionGroup>
    )
}
