import React, { Component } from 'react';
import './mainContent.scss'
import data from '../../data.js'
import Title from '../title/Title';
import MyBtn from '../myBtn/MyBtn';
import Welcome from '../welcome/Welcome';
import Cards from '../cards/Cards';
import { Link } from 'react-router-dom';


class MainContent extends Component {
    constructor(){
        super()
        this.state = {
            data: data,
            title: '',
            procedure:[]
        }
    }

    handleClick = e => {
      const y = data.procs.find(el => el.field === e.target.value)
      if(y){
        this.setState({ title: e.target.value, procedure: y.procedure })
      }
    }

    render() {
        const { data, procedure, title  } = this.state

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
                    data.procs.map( x =>
                      <MyBtn  onClick={this.handleClick} key={x.id} value={x.field} ></MyBtn>
                    )
                  }
                </div>
                
                <div className='createNew-button'>
                  <Link to='/create-new'>Test</Link>
                    <MyBtn onClick={this.renderClick} value={'Create New'}></MyBtn>
                </div>
                
              </div>
             
              <div className="cards-container">
                  {
                    procedure.length === 0 ? <Welcome></Welcome> : <Cards procedure={procedure}></Cards>
                  }
              </div>
          </div>
          
        );
    }
}

export default MainContent;



