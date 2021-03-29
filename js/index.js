function isWord(word) {
	if(!word) return false;
	if(!word.replace(/\s/g, '')) return false;
	return true;
}

function colorBlue(id) {
	if (document.getElementById(id).classList.contains('inpred')){
		document.getElementById(id).classList.remove('inpred');
		document.getElementById(id).classList.add('inpblue');
		console.log(id+" color toggled to blue");
	}else{
		console.log(id+" is already blue");
	}
}

function colorRed(id) {
	if (document.getElementById(id).classList.contains('inpblue')){
		document.getElementById(id).classList.remove('inpblue');
		document.getElementById(id).classList.add('inpred');
		console.log(id+" color toggled to red");
	}else{
		console.log(id+" is already red");
	}
}

function updateImage(id) {
	console.log("updateImage function started");
	nameinp = document.getElementById('nameinput').value;
	console.log('word = "'+nameinp+'"');
	if(isWord(nameinp)){
		colorBlue("nameinput");
		let idlink="https://github.com/identicons/"+nameinp+".png";
		console.log("idlink = "+idlink);
		document.getElementById(id).src = idlink;
	}else{
		colorRed("nameinput");
	}
	/*
	let avlink="https://github.com/"+document.getElementById('nameinput').value+".png"
	document.getElementById("avatar").src = avlink;
	*/
}

function imageClick() {
	nameinp = document.getElementById('nameinput').value;
	if(isWord(nameinp)){
		colorBlue("nameinput");
		let gitlink="https://github.com/"+document.getElementById('nameinput').value;
		window.open(gitlink);
		updateImage("identicon");
	}else{
		colorRed("nameinput");
	}
}