import React, { useState } from 'react';

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
const style = `

.create-ad-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.create-ad-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin: 36% 36%;
  font-size: 20px;
}

.create-ad-input,
.create-ad-textarea,
.create-ad-input[type="number"] {
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
}

.create-ad-textarea {
  height: 100px;
}

.create-ad-button {
  width: 200px;
  height: 50px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
}

.create-ad-button:hover {
  background-color: #27ae60;
}`
