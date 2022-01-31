import React, { useEffect, useState } from 'react';
import './mainContent.scss'
// import data from '../../data.js'
import Title from '../title/Title';
import MyBtn from '../myBtn/MyBtn';
import Welcome from '../welcome/Welcome';
import Cards from '../cards/Cards';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function MainContent() {

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/procs')
      setProcs(result.data)
    }
    fetchData()
  }, [])

  const [ procs, setProcs ] = useState([])
  const [ title, setTitle ] = useState('Test Mic')
  const [ procedure, setProcedure ] = useState([])

 
 
  console.log(procedure.map(el => el))
  const handleClick = e => {
    
    const y = procs.find(el => el.field === e.target.value)
    console.log(y)
    setTitle(e.target.value)
    setProcedure(y)
    console.log(procedure)
  }

  return (
    <div className='main-content'>
              { 
                title.length === 0 ? 
                <div className="title-container"><h2 className='title'>Select Procedure</h2></div> : 
                <Title title={title}></Title>
              }
            
              <div className='button-container'>
                <div className='proc-button'>
                  {
                    procs.map( x =>
                      <MyBtn onClick={handleClick} key={x.id} value={x.field} ></MyBtn>
                    )
                  }
                </div>
                
                <div className='createNew-button'>
                  <Link to='/create-new' className='link-button'>Create New</Link>
                    
                </div>
                
              </div>
             
              <div className="cards-container">
                  {/* {
                    procedure.length === 0 ? <Welcome></Welcome> : <Cards procedure={procedure}></Cards>
                  } */}
                   {
                     procedure.map( x => 
                      <div className='cards' key={x.id}>
                          <div className='proc-img'>
                            <img  alt='pics' src={x.imageUrl}></img>
                          </div>
                          <p className='step'>{x.id + '. ' + x.step}</p>
                      </div>
                      )
                    }
              </div>
          </div>
  )
}






