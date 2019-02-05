var obj = document.getElementsByClassName('objet');
var rechercheObj = document.getElementById('rechercheObjet');
var hdv = document.getElementById('hdv');
var listObject = document.getElementById('listObject');

function eventObjetListe() {
	for (var i = obj.length - 1; i >= 0; i--) {
		obj[i].addEventListener('click', function(e){
			for (var i = obj.length - 1; i >= 0; i--) {
				obj[i].lastChild.style.display = "none";
			}
			e.target.parentNode.lastChild.style.display = "flex";
		});
		// obj[i].addEventListener('mouseout', function(e){
		// 	e.target.parentNode.lastChild.style.display = "none";
		// });
	}	
}

rechercheObjet.addEventListener("input", function(){
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function (argument) {
	if (httpRequest.readyState === 4)
		document.getElementById('objetContent').innerHTML = httpRequest.responseText;
	}
	httpRequest.open('GET', './php/rechercheObjet.php?nom='+rechercheObjet.value, true);
	httpRequest.send();
	setTimeout(function(){eventObjetListe();} ,500);
});

hdv.addEventListener("click", function(){
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function (argument) {
	if (httpRequest.readyState === 4)
		document.getElementById('objetMain').innerHTML = httpRequest.responseText;
	}
	httpRequest.open('GET', './php/venteObjet.php?page=hdv', true);
	httpRequest.send();
	setTimeout(function(){eventObjetListe();} ,500);
});

listObject.addEventListener("click", function(){
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function (argument) {
	if (httpRequest.readyState === 4)
		document.getElementById('objetMain').innerHTML = httpRequest.responseText;
	}
	httpRequest.open('GET', './php/listeObjet.php', true);
	httpRequest.send();
	setTimeout(function(){eventObjetListe();} ,500);
});

eventObjetListe();