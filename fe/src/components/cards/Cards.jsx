import React from 'react'

export default function Cards({x}) {
  console.log(x)
    return (
      <>
          <div className='cards' >
              <div className='proc-img'>
                <img  alt='pics' src={x.imageUrl}></img>
              </div>
              <p className='step'>{x.id + '. ' + x.step}</p>
          </div>
      </>
         
        
    )
}
