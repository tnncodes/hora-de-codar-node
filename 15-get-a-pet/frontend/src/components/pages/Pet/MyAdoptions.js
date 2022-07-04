import { useState, useEffect } from 'react';
import api from '../../../utils/api';
import RoundedImage from '../../layout/RoundedImage';

import styles from './Dashboard.module.css';

function MyAdoptions() {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    api
      .get('/pets/myadoptions', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
      .then((response) => {
        setPets(response.data.pets);
      })
  }, [token]);

  return <p>My Adoptions</p>;
};

export default MyAdoptions;