import React from 'react';
import './myBtn.scss'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default function MyBtn({ value, onClick }) {
  return  (
      
          <>
          <input type='button' onClick={onClick} value={value} className='button field'></input>
          </>  
      
  )
}
