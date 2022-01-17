import React from 'react'

export default function Cards({field}) {
    return (
        
        <>
            {
          field.map( x => 
            <div className='cards' key={x.id}>

                <div className='proc-img'>
                  <img  alt='pics' src={x.imageUrl}></img>
                </div>

                <p className='step'>{x.id + '.' + ' ' + x.step}</p>
            </div>
            )
        }
        
        </>
        
        
        
        
    )
}