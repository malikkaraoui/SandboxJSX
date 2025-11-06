import { useState } from 'react';

// Composant dédié pour gérer les clics de souris avec alertes

export function ClickableVegetableList() {
  // État initial du tableau de légumes (maintenant mutable avec useState)
  const [vegetables, setVegetables] = useState([
    'Carotte',
    'Brocoli', 
    'Épinard',
    'Tomate',
    'Courgette'
  ]);

  // État pour gérer la valeur de l'input
  const [newVegetable, setNewVegetable] = useState('');

  // Fonction qui gère le clic sur un légume
  const handleVegetableClick = (vegetable) => {
    alert(`Vous avez cliqué sur : ${vegetable}`);
  };

  // Fonction pour ajouter un nouveau légume
  const addVegetable = () => {
    if (newVegetable.trim() !== '') {
      setVegetables([...vegetables, newVegetable.trim()]);
      setNewVegetable(''); // Vider l'input après ajout
    }
  };

  // Fonction pour gérer l'appui sur Entrée dans l'input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addVegetable();
    }
  };

  return (
    <div className="clickable-vegetable-list">
      <h2>Liste des légumes (cliquables) :</h2>
      
      {/* Section pour ajouter un nouveau légume */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newVegetable}
          onChange={(e) => setNewVegetable(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Entrez un nouveau légume..."
          style={{
            padding: '8px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <button 
          onClick={addVegetable}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Ajouter
        </button>
      </div>

      <ul>
        {vegetables.map((vegetable, index) => (
          <li 
            key={index} 
            id={`li${index}`}
            className="clickable-vegetable-item"
            onClick={() => handleVegetableClick(vegetable)}
            style={{ 
              cursor: 'pointer', 
              padding: '8px',
              margin: '4px 0',
              borderRadius: '4px'
            }}
          >
            {vegetable}
          </li>
        ))}
      </ul>
    </div>
  );
}