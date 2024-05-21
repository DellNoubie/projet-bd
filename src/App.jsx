import React, { useState } from 'react';
import EnregistrerE from  './EnregistrerE/EnregistrerE.jsx'

const Home = () => {
  const [classe, setClasse] = useState('');
  const [matiere, setMatiere] = useState('Physique');
  const [iden, setIden] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'classe') {
      setClasse(value);
    } else if (name === 'matiere') {
      setMatiere(value);
    } else if (name === 'iden') {
      setIden(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Insérez ici le code de traitement de la soumission du formulaire
  };

  return (
    <div>
      <h1>Gestion Des Requetes</h1>
      <h2>Seances des cours d'une matiere dans une classe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="classe">Classe</label>
        <select
          id="classe"
          name="classe"
          value={classe}
          onChange={handleChange}
          multiple
        >
          <option value="classe1">6eme</option>
          <option value="classe2">5eme</option>
          <option value="classe3">4eme</option>
          <option value="classe4">3eme</option>
          <option value="classe5">2nd</option>
          <option value="classe6">1ere</option>
          <option value="classe7">tle</option>
        </select>
        <label htmlFor="matiere">Matiere</label>
        <input
          type="text"
          id="matiere"
          name="matiere"
          value={matiere}
          onChange={handleChange}
        />
        <button className="btn-button-primary" type="submit">Rechercher</button>
        <label htmlFor="iden">id</label>
        <input
          type="text"
          id="iden"
          name="iden"
          value={iden}
          onChange={handleChange}
        />
        <input type="submit" value="Supprimer" />
      </form>
       <EnregistrerE/>
    </div>
    
  );
};
=======
import React from 'react'
import { Courses } from './pages/courses'
const App = () => {
  return (
    <div className='container'>
    <Courses/>  
    <h1>bonjour</h1>
  </div>

  )
}

export default App
