import React from 'react'
import './homePage.css'

function HomePage() {
  return (
    <div className='home-main'>

      <div className='wrapper'>
        <div className='from-box uploadpdf'>
          <form action=''>
            <h1>Upload your PDF here</h1>

            <div className='input-box'>
              <input type='text' placeholder='Title' required/>
            </div>
            <div className='input-box'>
              <input type='text' placeholder='Description' required/>
            </div>
            <div className='input-box'>
              <input type='file' accept='application/pdf' required/>
            </div>
            
            <button type='submit'>Upload</button>
          </form>
        </div>
      </div>

      <div className='Uploaded PDFs'>

      </div>
      

    </div>
  )
}

export default HomePage
