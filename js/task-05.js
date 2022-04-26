const refs = {
	input: document.querySelector('#name-input'),
	span: document.querySelector('#name-output')
}

refs.input.addEventListener("input", (event) => {
	if (refs.input.textContent === "") {
		refs.span.textContent = 'Anonymous';
}
  refs.span.textContent = event.currentTarget.value;
});