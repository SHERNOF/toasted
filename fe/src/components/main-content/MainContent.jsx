import React from 'react'
import './mainContent.scss'

export default function MainContent() {
    return (
        <div className='main-content'>
            <div className='upper'>
              <button type='button' className='button field'>Field</button>
              <button type='button' className='button pressure'>Pressure</button>
              <button type='button' className='button torque'>Torque</button>
              {/* upper */}
            </div>
            <div className='lower'>
              <div className='cards'>
                  <div className="cards-content">
                      <ul className='content-items'>
                          <div className='nmbr'>1</div>
                          <div><img className='list-img' alt='image' src='/images/field/1.jpeg'></img></div>
                          <div ><span className='step'>Open the Field shortcut from the desktop</span></div>
                      </ul>
                  </div>
              </div>
            </div>
          </div>
    )
}
