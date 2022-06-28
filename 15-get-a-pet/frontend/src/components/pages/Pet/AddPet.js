import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../utils/api';

/* components */
import PetForm from '../../form/PetForm';

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessage';

import styles from './AddPet.module.css';



function AddPet() {
  return (
    <section className={styles.addpet_header}>
      <div>
        <h1>Cadastre um Pet</h1>
        <p>Depois ele ficará disponível para adoção.</p>
      </div>
      <PetForm btnText="Cadastrar Pet" />
    </section>
  )
};

export default AddPet;