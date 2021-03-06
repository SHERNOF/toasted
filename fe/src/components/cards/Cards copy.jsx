import React from 'react'

export default function Cards({procs}) {
    return (
        
        <>
         {
            procs.map( x => 
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
