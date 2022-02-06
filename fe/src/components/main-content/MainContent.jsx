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

  const [ procs, setProcs ] = useState([])
  const [ title, setTitle ] = useState('')
  const [ contents, setContents ] = useState([])

  console.log(procs.length)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/procedures')
      setProcs(result.data)
    }
    fetchData()
  }, [])

  function handleClick(e){
    let items = procs.find( el => el.field === e.target.value )
    setTitle(e.target.value);
    setContents(items.procedure)
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
                    )}
                </div>
                <div className='createNew-button'>
                  <Link to='/create-new' className='link-button'>Create New</Link>
                </div>  
              </div>
             
              <div className="cards-container">
                  {/* {
                    contents.length === 0 ? <Welcome></Welcome> : <Cards contents={contents}></Cards>
                  } */}
                  
            
                  {
                    contents.map( x => 
                      <Cards key={x.id} x={x}></Cards>
                    )
                  }
              </div>

          </div>
  )
}






