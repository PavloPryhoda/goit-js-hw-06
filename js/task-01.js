const itemRef = document.querySelectorAll('li.item');

console.log(`Number of categories: ${itemRef.length}`);

const listRef = document.querySelectorAll('#categories>li');

listRef.forEach(itemRef => {
	console.log(`Category: ${itemRef.firstElementChild.textContent}, Elements: ${itemRef.lastElementChild.children.length}`);
});