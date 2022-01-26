import React, { Component } from 'react';
import './mainContent.scss'
import ReactTransitionGroup from 'react-addons-css-transition-group'
import data from '../../data.js'
import Title from '../title/Title';
import MyBtn from '../myBtn/MyBtn';
import Welcome from '../welcome/Welcome';
import Cards from '../cards/Cards';


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
      console.log(y)
      if(y){
        this.setState({ title: e.target.value, procedure: y.procedure })
      }
    }
    render() {
        const { data, procedure, title  } = this.state

        return (
          
          <div className='main-content'>
    
              { title.length === 0 ? null : <Title title={title}></Title>}
            
              <div className='button-container'>
                {
                  data.procs.map( x =>
                    <MyBtn  onClick={this.handleClick} key={x.id} value={x.field} ></MyBtn>
                  )
                }
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



