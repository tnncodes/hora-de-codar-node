import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../../utils/api';
import styles from './PetDetails.module.css';

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessage';

function PetDetails() {
  return (
    <h1>Página de detalhes</h1>
  )
}

export default PetDetails;