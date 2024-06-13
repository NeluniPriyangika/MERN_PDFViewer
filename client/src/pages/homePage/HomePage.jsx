import React, { useState, useEffect, useContext } from 'react';
import './homePage.css';
import axios from 'axios';
import { Context } from '../../actions/context/Context';

function HomePage() {
  const { user } = useContext(Context);
  const [pdfs, setPdfs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    pdf: null
  });

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/pdf', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setPdfs(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchPDFs();
  }, []);

  const onChange = e => {
    if (e.target.name === 'pdf') {
      setFormData({ ...formData, pdf: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('pdf', formData.pdf);

    try {
      const res = await axios.post('http://localhost:5000/api/pdf/upload', formDataToSend, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setPdfs([...pdfs, res.data]);
      setFormData({ title: '', description: '', pdf: null });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className='home-main'>
      <div className='wrapper'>
        <div className='from-box uploadpdf'>
          <form onSubmit={onSubmit}>
            <h1>Upload your PDF here</h1>
            <div className='input-box'>
              <input type='text' name='title' placeholder='Title' value={formData.title} onChange={onChange} required />
            </div>
            <div className='input-box'>
              <input type='text' name='description' placeholder='Description' value={formData.description} onChange={onChange} required />
            </div>
            <div className='input-box'>
              <input type='file' name='pdf' accept='application/pdf' onChange={onChange} required />
            </div>
            <button type='submit'>Upload</button>
          </form>
        </div>
      </div>

      <div className='Uploaded-PDFs'>
        <h1>You can see current uploaded PDFs here</h1>

        <div className='getpdf-maindiv'>
          {pdfs.map(pdf => (
            <div className='getpdf-innerdiv' key={pdf._id}>
              <div className='title-div'>
                <h3>{pdf.title}</h3>
              </div>
              <div className='dis-div'>
                <h5>{pdf.description}</h5>
              </div>
              <a href={`http://localhost:5000/uploads/${pdf.filename}`} target='_blank' rel='noopener noreferrer'>
                <button className='view-pdfbtn'>View PDF</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
