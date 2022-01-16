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
              <div className='control-container'>

                
              
                  {
                  <div className='button-container'>
                    
                      <button type='button' onClick={this.fieldData} value={'Field'} className='button field' render={<Cards field={field}></Cards>}>Field</button>
                    
                      <button type='button'  onClick={this.pressureData} value={'Pressure'} className='button pressure' render={<Cards pressure={pressure}></Cards>}>Pressure</button>

                      <button type='button'  onClick={this.torqueData} value={'Torque'} className='button torque' render={<Cards torque={torque}></Cards>}>Torque</button>
                  </div>
                  }

                </div>

                  <div className="cards-container">

                    {/* <div className="title-container">
                      <h2 className='proc-title'>Field Database Procedure</h2>
                    </div> */}

                      <Cards field={field}></Cards>
                  
                    
                  </div>
  
                {/* </div> */}
          </div>
        );
    }
}

export default MainContent;



