import React, { Component } from 'react';
import './mainContent.scss'
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
            procs:[]
        }
    }

    
    

    // torqueData = e => {
    //   if(data.nameT === e.target.value){
    //     this.setState({ field: data.procT, title: e.target.value })
    //   }
    // }

    handleClick = e => {
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
    
              { title.length === 0 ? null : <Title title={title}></Title>}
            
              <div className='button-container'>
                  
                  {/* <MyBtn onClick={this.procsArray} value='Field' className='button field'></MyBtn> */}
                
                  <input type='button' onClick={this.handleClick} value={'Field'} className='button field'></input>

                  <input type='button' onClick={this.handleClick} value={'Pressure'}   className='button pressure' ></input>

                  <input type='button' onClick={this.handleClick} value={'Torque'}   className='button torque'></input>
                  
              </div>
             
              <div className="cards-container">
                  {
                    procs.length === 0 ? <Welcome></Welcome> : <Cards procs={procs}></Cards>
                  }
              </div>
          </div>
          
           
        );
    }
}

export default MainContent;



