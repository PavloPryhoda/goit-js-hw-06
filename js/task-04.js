const ref = {
	value: document.querySelector('#value'),
	decrement: document.querySelector('[data-action="decrement"]'),
	increment: document.querySelector('[data-action="increment"]')
}

ref.decrement.addEventListener('click', onDownValue);
ref.increment.addEventListener('click', onUpValue);

let counterValue = 0;

function onDownValue() {
  counterValue -= 1;
  console.log(counterValue);
  ref.value.textContent = counterValue;
  return counterValue;
}

function onUpValue() {
  counterValue += 1;
  console.log(counterValue);
  ref.value.textContent = counterValue;
  return counterValue;
}
