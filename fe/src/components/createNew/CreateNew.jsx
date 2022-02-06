import React, { useState } from 'react'
import Cards from '../cards/Cards'
import MyBtn from '../myBtn/MyBtn'
import './createNew.scss'

export default function CreateNew() {
    const [ title, setTitle ] = useState('Create Procedure')
    // const [ label, setLabel ] = useState(false)

    const onChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    const onFocusHandler = e => {
        console.log('test')
        // setLabel(true)
    }
    return (
        <div className='create-new'>
            <div className="title-container"><h2 className='title'>{title}</h2></div> : 

            <div className="createProc-content">
                
                <div className='form-container'>
                    <form className='myForm'>
                        <label  htmlFor='proc-name'>Procedure Name</label>
                        <input type='text' onFocus={onFocusHandler} onChange={onChangeHandler} name='proc-name' className='proc-name' placeholder='Procedure Name'></input>
                    
                        <label htmlFor='proc-content'>Procedure</label>
                        <textarea type='text' name='proc-content' className='proc-content' placeholder='Input Procedure'></textarea>

                        <label htmlFor='proc-img'>Upload Image</label>
                        <input type='file'  name='proc-img' className='proc-img'></input>

                        <MyBtn type="submit" value='Submit'/>

                        
                    </form>
                    
                </div>

                <div className="thumb">
                    {/* <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards> */}
                </div>

            </div>

        </div>
    )
}
