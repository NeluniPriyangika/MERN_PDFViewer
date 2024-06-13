import React from 'react';
import './homePage.css';

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

      <div className='Uploaded-PDFs'>
        <h1>You can see current uploaded PDFs here</h1>
        
        <div className='getpdf-maindiv'>

          <div className='getpdf-innerdiv'>
            <div className='title-div'>
              <h3>Title</h3>
            </div>
            <div className='dis-div'>
              <h5>Description</h5>
            </div>
            <button className='view-pdfbtn'>View PDF</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default HomePage;
