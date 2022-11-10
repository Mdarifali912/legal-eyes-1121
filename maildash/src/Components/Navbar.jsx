import React from 'react'

const Navbar = () => {
  return (


    <div className='navdiv'>
            
        <div className='navbox'>
            <div className='navdivbox'>

                <img className='imgb' src="https://cdn-icons-png.flaticon.com/128/2516/2516745.png" alt="" />
                
            </div>
            
            <div className='navdivbox'>
            <img src="https://mailchimp.com//email-design-guide/images/share-1a1fdf04.png" alt="" />
            </div>
            <div className='navdivbox'>

                
                 <button style={{background:"white"}} >LOG IN</button>
                 <button>SIGN UP</button>

            </div>
        </div>
    </div>
  )
}

export default Navbar