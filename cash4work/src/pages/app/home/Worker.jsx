// import React from 'react';
// import './Worker.css';

// const Worker = () => {
//   const worker = {
//     name: 'Mohamed Haadii',
//     occupation: 'Web Developer',
//     email: 'mohamed@gmail.com',
//     phone: '555-555-5555',
//     location: 'New York, NY',
//   };

//   return (
//     <div className="worker">
//       <h1 className="title">Worker Page</h1>
//       <p className="description">This is the Worker page.</p>
//       <div className="user-info">
//         <h2>{worker.name}</h2>
//         <p>{worker.occupation}</p>
//         <p>{worker.email}</p>
//         <p>{worker.phone}</p>
//         <p>{worker.location}</p>
//       </div>
//     </div>
//   );
// };

// export default Worker;

import React from 'react';
import './Worker.css';

const Worker = () => {
  const workers = [
    {
      name: 'Mohamed Haadii',
      occupation: 'Web Developer',
      email: 'mohamed@gmail.com',
      phone: '555-555-5555',
      location: 'New York, NY',
    },
    {
      name: 'Jane Smith',
      occupation: 'Graphic Designer',
      email: 'janesmith@example.com',
      phone: '555-555-5555',
      location: 'Los Angeles, CA',
    },
    {
      name: 'Bob Johnson',
      occupation: 'Data Analyst',
      email: 'bobjohnson@example.com',
      phone: '555-555-5555',
      location: 'Chicago, IL',
    },
  ];

  const handleSendMessage = (email) => {
    console.log(`Sending message to ${email}`);
    // You can add your logic here to send a message to the worker's email
  };

  return (
    <div className="worker">
      <h1 className="title">Worker Page</h1>
      <p className="description">This is the Worker page.</p>
      {workers.map(worker => (
        <div className="user-info" key={worker.email}>
          <h2>{worker.name}</h2>
          <p>{worker.occupation}</p>
          <p>{worker.email}</p>
          <p>{worker.phone}</p>
          <p>{worker.location}</p>
          <button onClick={() => handleSendMessage(worker.email)} id='msg'>Message</button>
        </div>
      ))}
    </div>
  );
};

export default Worker;

