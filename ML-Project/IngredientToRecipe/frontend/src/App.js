import React from 'react';
import RecipeCard from './components/RecipeCard';

function App() {
  return (
    <div>
      <h1>Ingredient-to-Recipe</h1>
      <RecipeCard recipe={{name: 'Masala Dosa'}} />
    </div>
  );
}

export default App;
