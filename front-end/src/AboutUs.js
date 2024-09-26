import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState({}); // State to store fetched data

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/AboutUs`)
      .then(response => {
        setAboutData(response.data); 
      })
      .catch(error => {
        console.error('Error fetching About Us data:', error);
      });
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>{aboutData.bio}</p>
      <img src={aboutData.imageUrl} alt="About Us" style={{ width: '200px', height: 'auto' }} />
    </div>
  );
};

export default AboutUs;