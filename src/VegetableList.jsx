// Composant dédié pour afficher une liste de légumes

export function VegetableList() {
  const vegetables = [
    'Carotte',
    'Brocoli', 
    'Épinard',
    'Tomate',
    'Courgette'
  ];

  return (
    <div className="vegetable-list">
      <h2>Liste des légumes :</h2>
      <ul>
        {vegetables.map((vegetable, index) => (
          <li key={index} className="vegetable-item">
            {vegetable}
          </li>
        ))}
      </ul>
    </div>
  );
}