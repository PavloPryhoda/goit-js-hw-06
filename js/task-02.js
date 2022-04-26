const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');



  const addlistEls = ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.setAttribute('class', 'item');
    return item;
  });

  listRef.append(...addlistEls);
