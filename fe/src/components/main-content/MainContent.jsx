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
            title: '',
            proc:[]
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

    testing = e => {
      if(data.procs[0].category === e.target.value){
        const a = data.procs.filter( x => x.category)
        this.setState({ procs: a })
      }
    }
    render() {
        const { data, procs,  } = this.state
        console.log(procs)

        return (
          
          <div className='main-content'>
            
            
              <div className="title-container">
                <h2 className='proc-title'>Title</h2>
              </div>

            
              <div className='button-container'>
                  <input type='button' onClick={this.testing} value={data.procs[0].category} className='button field'></input>

                  <input type='button' value={data.procs[6].category}   className='button pressure' ></input>

                  <input type='button' value={data.procs[9].category}   className='button torque'></input>
              </div>
             
              
              
            

              <div className="cards-container">
                  <div className='cards'>
                    <div className='proc-img'><img src='/images/field/2.PNG' alt='pics' ></img></div>
                      <p className='step'>Test 1</p>
                    </div>
              </div>
          </div>
          
           
        );
    }
}

export default MainContent;



