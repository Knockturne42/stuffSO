var hdv = document.getElementById('hdv');
var listObject = document.getElementById('listObject');
var page = 'page=index';
function eventObjetListe() {
	var obj = document.getElementsByClassName('objet');
	for (var i = obj.length - 1; i >= 0; i--) {
		obj[i].addEventListener('click', function(e){
			for (var i = obj.length - 1; i >= 0; i--) {
				obj[i].children[1].style.display = "none";
			}
			e.target.parentNode.children[1].style.display = "flex";
		});
	}
}

function eventRecherche()
{
	var rechercheObj = document.getElementById('rechercheObjet');
	rechercheObjet.addEventListener("input", function(){
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function (argument) {
		if (httpRequest.readyState === 4)
			document.getElementById('objetContent').innerHTML = httpRequest.responseText;
		}
		httpRequest.open('GET', './php/rechercheObjet.php?'+page+'&nom='+rechercheObjet.value, true);
		httpRequest.send();
		setTimeout(function(){eventObjetListe();} ,500);
	});
}

hdv.addEventListener("click", function(){
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function (argument) {
	if (httpRequest.readyState === 4)
		document.getElementById('objetMain').innerHTML = httpRequest.responseText;
	}
	httpRequest.open('GET', './php/venteObjet.php?page=hdv', true);
	httpRequest.send();
	setTimeout(function(){eventObjetListe(); page = 'page=hdv';} ,500);
});

listObject.addEventListener("click", function(){
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function (argument) {
	if (httpRequest.readyState === 4)
		document.getElementById('objetMain').innerHTML = httpRequest.responseText;
	}
	httpRequest.open('GET', './php/listeObjet.php', true);
	httpRequest.send();
	setTimeout(function(){eventObjetListe(); page = 'page=index';} ,500);
});

eventObjetListe();
eventRecherche(page);