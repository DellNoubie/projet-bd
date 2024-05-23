import React, { useState } from 'react';
import './request.css';

const RequestM = () => {
  const [classe, setClasse] = useState('6eme');
  const [matiere, setMatiere] = useState('');
  const [id, setId] = useState('');

  const handleRecherche = () => {
    if (!classe || !matiere) {
      alert('Veuillez remplir tous les champs avant de rechercher.');
      return;
    }

    // Code pour effectuer la recherche
    console.log(`Recherche pour la classe ${classe} et la matière ${matiere}`);
  };

  const handleSupprimer = () => {
    if (!id) {
      alert('Veuillez saisir l\'ID avant de supprimer.');
      return;
    }

    // Code pour effectuer la suppression
    console.log(`Suppression de l'ID ${id}`);
  };

  return (
    <div>
      <div className="header">
        <h1>Gestion des requêtes</h1>
      </div>
      <div className="body">
        <h2>Séance des cours dans la semaine d'une matière dans une classe</h2>
        <div className="form-group">
          <label htmlFor="classe">Classe:</label>
          <select
            id="classe"
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
          >
            <option value="6eme">6ème</option>
            <option value="5eme">5ème</option>
            <option value="4eme">4ème</option>
            <option value="3eme">3ème</option>
            <option value="Terminal">Terminal</option>
          </select>
          <label htmlFor="matiere">Matière:</label>
          <input
            type="text"
            id="matiere"
            value={matiere}
            onChange={(e) => setMatiere(e.target.value)}
          />
          <button id="recherche" onClick={handleRecherche}>
            Recherche
          </button>
        </div>
        <div className="form-group2">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button id="supprimer" onClick={handleSupprimer}>
            Supprimer
          </button>
        </div>
      </div>
      <div className="footer">
        <h2>Séance des cours dans la semaine d'une matière dans une classe</h2>
        <div className="form-group">
          <label htmlFor="classe2">Classe:</label>
          <select
            id="classe2"
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
          >
            <option value="6eme">6ème</option>
            <option value="5eme">5ème</option>
            <option value="4eme">4ème</option>
            <option value="3eme">3ème</option>
            <option value="Terminal">Terminal</option>
          </select>
          <button id="recherche2" onClick={handleRecherche}>
            Recherche
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestM;