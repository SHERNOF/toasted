import React, { Component } from 'react';
import './mainContent.scss'
import data from '../../data.js'
import Cards from '../cards/Cards'


class MainContent extends Component {
    constructor(){
        super()
        this.state = {
            data: data,
            field: [],
            pressure: [],
            torque: []
        }
    }
    fieldData = e => {
      if(data.nameF === e.target.value){
        this.setState({ field: data.procF })
      }
    }
    pressureData = e => {
      if(data.nameP === e.target.value){
        this.setState({ field: data.procP })
      }
    }
    torqueData = e => {
      if(data.nameT === e.target.value){
        this.setState({ field: data.procT })
      }
    }
    render() {
        const { data, field, pressure, torque } = this.state

        return (
            <div className='main-content'>
              <div className='upper'>

                <div className='proc-title'>
                  <h2>Field Database Procedure</h2>
                </div>
                
                {
                <div className='button-container'>
                  
                    <button type='button' onClick={this.fieldData} value={'Field'} className='button field' render={<Cards field={field}></Cards>}>Field</button>
                  
                    <button type='button'  onClick={this.pressureData} value={'Pressure'} className='button pressure' render={<Cards pressure={pressure}></Cards>}>Pressure</button>

                    <button type='button'  onClick={this.torqueData} value={'Torque'} className='button torque' render={<Cards torque={torque}></Cards>}>Torque</button>
                  
                </div>
                }
              </div>
              
                <div className='lower'> 
                  <Cards field={field}></Cards>
                </div>
             

          </div>
        );
    }
}

export default MainContent;



