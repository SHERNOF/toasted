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
            // field: [],
            // pressure: [],
            // torque: [],
            title: '',
            procs:[]
        }
    }

    
    

    // torqueData = e => {
    //   if(data.nameT === e.target.value){
    //     this.setState({ field: data.procT, title: e.target.value })
    //   }
    // }

    procsArray = e => {
      const y = data.procs.filter( el => el.category === e.target.value)
      if(y){
        this.setState({procs: y})
        this.setState({ title: e.target.value })
      }
    }
    render() {
        const { data, procs, title  } = this.state
        console.log(procs)
        console.log(title)


        return (
          
          <div className='main-content'>
            
            
              {/* <div className="title-container">
                <h2 className='proc-title'>{title}</h2>
              </div> */}
              <Title title={title}></Title>
            
              <div className='button-container'>
                  <input type='button' onClick={this.procsArray} value={'Field'} className='button field'></input>

                  <input type='button' onClick={this.procsArray} value={'Pressure'}   className='button pressure' ></input>

                  <input type='button' onClick={this.procsArray} value={'Torque'}   className='button torque'></input>
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



