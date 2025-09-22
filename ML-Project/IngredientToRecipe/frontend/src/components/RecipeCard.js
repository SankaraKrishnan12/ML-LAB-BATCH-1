import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div style={{border: '1px solid #ccc', padding: '10px', margin: '10px'}}>
      <h2>{recipe.name}</h2>
    </div>
  );
}

export default RecipeCard;
