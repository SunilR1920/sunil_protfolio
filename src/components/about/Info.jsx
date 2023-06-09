import React from 'react'

const Info = () => {
  return (
    <div className='about_info grid'>
      <div className='about_box about_icon'>
        <i class='bx bx-award'></i>
        <h3 className='about_title'>Experience</h3>
        <span className='about_subtitle'>8 Years Working</span>
      </div>

      <div className='about_box about_icon'>
        <i class='bx bx-briefcase-alt'></i>
        <h3 className='about_title'>Completed</h3>
        <span className='about_subtitle'>48 + Projects</span>
      </div>

      <div className='about_box about_icon'>
        <i class='bx bx-support'></i>
        <h3 className='about_title'>Support</h3>
        <span className='about_subtitle'>Online 24/7</span>
      </div>

    </div>
  )
}

export default Info
