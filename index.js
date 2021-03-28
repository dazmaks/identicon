function isWord(word) {
	if(word="") return 1;
}

function updateImage() {
	console.log("updateImage function started");
	nameinp = document.getElementById('nameinput').value;
	console.log('word = "'+nameinp+'"');
	if(nameinp){
		if (document.getElementById("nameinput").classList.contains('inpred')){
			document.getElementById("nameinput").classList.remove('inpred');
			document.getElementById("nameinput").classList.add('inpblue');
		}
		let idlink="https://github.com/identicons/"+nameinp+".png";
		console.log("idlink = "+idlink);
		document.getElementById("identicon").src = idlink;
	}else{
		document.getElementById("nameinput").classList.remove('inpblue');
		document.getElementById("nameinput").classList.add('inpred');
	}
	/*
	let avlink="https://github.com/"+document.getElementById('nameinput').value+".png"
	document.getElementById("avatar").src = avlink;
	*/
}

function imageClick() {
	console.log("imageClick function started");
	let gitlink="https://github.com/"+document.getElementById('nameinput').value;
	console.log("gitlink = "+gitlink);
	window.open(gitlink);
	console.log("gitlink opened");
}