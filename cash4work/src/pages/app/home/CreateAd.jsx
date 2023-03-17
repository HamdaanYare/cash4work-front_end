import React, { useState } from 'react';
import "./CreateAd.css"
function CreateAd() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // submit the form data to your API or database
    const response = await fetch('/ads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, price })
    });
    if (response.ok) {
      // clear the form inputs
      setTitle('Cash4Work');
      setDescription('it is cash4 work where you can apply jobs, post jobs, create Ad, create Resume,.');
      setPrice('58000');
      alert('Ad created successfully!');
    } else {
      alert('There was an error creating the ad.');
    }
  };

  return (
    <form className="create-ad-form" onSubmit={handleSubmit}>
      <label className="create-ad-label">
        Title:
        <input className="create-ad-input" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label className="create-ad-label">
        Description:
        <textarea className="create-ad-textarea" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <br />
      <label className="create-ad-label">
        Price:
        <input className="create-ad-input" type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
      </label>
      <br />
      <button className="create-ad-button" type="submit">Create Ad</button>
    </form>
  );
}

export default CreateAd;

// CSS styling
// import './CreateAd.css';
// const style = `

// `