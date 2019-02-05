var obj = document.getElementsByClassName('objet');
for (var i = obj.length - 1; i >= 0; i--) {
	obj[i].addEventListener('click', function(e){
	// console.log(e.target.parentNode.lastChild);
	for (var i = obj.length - 1; i >= 0; i--) {
		obj[i].lastChild.style.display = "none";
	}
	e.target.parentNode.lastChild.style.display = "flex";
});
}