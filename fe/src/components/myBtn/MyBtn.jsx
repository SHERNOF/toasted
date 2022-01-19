import React from 'react';
import './myBtn.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default function MyBtn({onCLick, Field}) {
  return  (
      <ReactCSSTransitionGroup
        transitionName='button'
        transitionAppear = {true} transitionAppearTimeout = {500}
        transitionENter = {false} transitionLeave = {false}>

            <input type='button' onClick={onCLick} value={'Field'} className='button field'></input>
      </ReactCSSTransitionGroup>
    
  )
      
  
}
