import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto my-20 max-w-5xl text-left">
        <h1 className="text-4xl font-bold mb-10 text-center">About Us</h1>
        <div className="mb-20">
          <p className="text-lg leading-7 mb-6">
            <ul className="list-disc pl-6 text-2xl">
              <li>Cash4Work is a new job-seeking app</li>
              <li>Cash4Work is a cross-platform application</li>
              <li>Users can create ads and fill out complaint forms about another ad</li>
              <li>Focusing on temporary job offers</li>
              <li>The application interacts with users via a website or mobile application</li>
            </ul>
          </p>
        </div>
        <div className="text-3xl font-bold mb-10">
          <h2>Introduction</h2>
        </div>
        <div className="mb-20">
          <p className="text-2xl font-bold pl-24 mb-6">
            1.1 Purpose
          </p>
          <p className="text-2xl">
            This document was created to present a detailed description of the Cash4Work project.
            Here you can find features, constraints, and functionality.
            This document may be used for both the stakeholders and for the developers.
          </p>
        </div>
        <div className="mb-20">
          <p className="text-2xl font-bold pl-24 mb-6">
            1.2 Scope
          </p>
          <p className="text-2xl">
            The purpose of the project is to create a job-seeking platform, which is going to be specialized on short term jobs.
            It is supposed to help young people, especially students, to find a job,
            without impacting their studies and for those entrepreneurs,
            who are not in need of full-time workers.
            The website is going to be a platform where employers are going to post job listings and provide them with description.
            Employees are going to choose one which fits them most.
            After the job is chosen money will be frozen on employers tab until the job is complete.
            After completion, the employer may leave a comment on the worker.
            If the job was not complete, or complete not fully,
            the employer may contact customer services with proof and get a refund.
            After 3 incomplete jobs, the employee's account will be permanently banned from the platform.
          </p>
        </div>
        <div className="mb-20">
          <p className="text-3xl font-bold mb-10">
            <h2>System Overview</h2>
          </p>
          <p className="text-2xl">
            The Cash4Work is a cooperating system that contains actors and modules.
            The system has 3 active actors namely Employer, Employee, and Editor.
            The system contains 3 main modules: Job, Resume, and Manager.
            The Registration on the platform creates for the user two Actors.
            An employee can use the Resume modules. The Employer can use Job modules.
            They will have access to see all available Jobs and Resumes. Editor use Manager Module.
            The ads with problems would go to the Manager module where the editor can edit or delete ads, and users.
          </p>
        </div>
        <div className="mb-20">
          <p className="text-2xl font-bold pl-24 mb-6">
          2.1	Project Perspective
          </p>
          <p className="text-2xl">
          Cash4Work is a new job-seeking app. 
        It focused on temporary job offers. 
        The system will be developed as a new self-contained system. 
        Cash4Work is a cross-platform application. 
        The application interacts with users via a website or mobile application. 
        The users can create ads and fill out complaint forms about another ad. 
        An editor will process the complaints and edit/remove the ads.
          </p>
        </div>
        <div className="mb-20">
          <p className="text-2xl font-bold pl-24 mb-6">
          2.2	System Context
          </p>
          <p className="text-2xl">
          Cash4Work is initially a web application project. The project will be based on the NodeJS framework. 
      The application will use the removed database. To manage the database we will use the MySql RDBMS. 
      The idea of Cash4Work is to give opportunity for everyone to find a temporary job quickly. 
      The easiest way to give access to job listings is through a website. 
      To be able to process multiple customers with different requests we should create a web application. 
      To cover some business costs we could potentially add some advertisements(e.g. Google ads),
      Also we can use paid promotions for job offers.  
          </p>
        </div>
        <div className="mb-20">
          <p className="text-2xl font-bold pl-24 mb-6">
          2.3	General Constraints
          </p>
          <p className="text-2xl">
          In order to cover big amount of users the project must be accessible and simple. To achieve it the project must be accessible by mobile versions
      In order to reduce and avoid scum the project must have basic regulations. To achieve it the project must have registration 
      Due to the lack of experience of the development team the project will avoid the payment and verification processes. Because the project must be safe and reliable. The quality of the project should not have beginner's errors
      The application must be tested by independent people.
      The application must be adaptive for mobile and Website. NodeJs could work with React and reactNative.
          </p>
        </div>
    </div>
    </div>
  );
};

export default About;
