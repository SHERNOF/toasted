import React, { Component } from 'react';
import './mainContent.scss'
import data from '../../data.js'
import Cards from '../cards/Cards'
import Title from '../title/Title';


class MainContent extends Component {
    constructor(){
        super()
        this.state = {
            data: data,
            field: [],
            pressure: [],
            torque: [],
            title: ''
        }
    }

    
    
    
    fieldData = e => {
      if(data.nameF === e.target.value){
        this.setState({ field: data.procF, title: e.target.value });
        
      }
    }
    pressureData = e => {
      if(data.nameP === e.target.value){
        this.setState({ field: data.procP, title: e.target.value })
      }
    }
    torqueData = e => {
      if(data.nameT === e.target.value){
        this.setState({ field: data.procT, title: e.target.value })
      }
    }
    render() {
        const { data, field, pressure, torque, title } = this.state
        console.log(title)

        return (
            <div className='main-content'>
                  <Title title={title}></Title>

                  {
                  <div className='button-container'>

                    
                      <input type='button' onClick={this.fieldData} value={'Field'} className='button field' render={<Cards field={field}></Cards>} ></input>

                      <input type='button'  onClick={this.pressureData} value={'Pressure'} className='button pressure' render={<Cards pressure={pressure}></Cards>}></input>

                      <input type='button'  onClick={this.torqueData} value={'Torque'} className='button torque' render={<Cards torque={torque}></Cards>} render={<Title title={data.nameT}></Title>}></input>

                      
                  </div>
                  }

                  <div className="cards-container">
                      <Cards field={field}></Cards>
                  </div>
  
          </div>
        );
    }
}

export default MainContent;



