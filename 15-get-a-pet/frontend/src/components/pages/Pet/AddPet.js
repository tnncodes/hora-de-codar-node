import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFlashMessage from '../../../hooks/useFlashMessage';
import api from '../../../utils/api';
import styles from './AddPet.module.css';



function AddPet() {
  return (
    <section className={styles.addpet_header}>
      <div>
        <h1>Cadastre um Pet</h1>
        <p>Depois ele ficará disponível para adoção.</p>
      </div>
      <p>formuário</p>
    </section>
  )
};

export default AddPet;