const red_class = 'brred';
const blue_class = 'brblue';

const input_id = 'nameinput';

const isWord = (word) => {
	if(word.replace(/\s/g, '')) return true;
	return false;
}

const switchClass = (element, from, to) => {
	element.classList.remove(from);
	element.classList.add(to);
}

const updateImage = (id) => {
	let input = document.getElementById(input_id);
	let inputvalue = input.value;
	if(isWord(inputvalue)){
		document.getElementById(id).src = `https://github.com/identicons/${inputvalue}.png`;
		switchClass(input, red_class, blue_class)
	}else{
		switchClass(input, blue_class, red_class)
	}
}

const imageClick = (id) => {
	let inputvalue = document.getElementById(input_id).value;
	if(isWord(inputvalue)) {
		window.open(`https://github.com/${inputvalue}`);
		updateImage(id);
	}
}