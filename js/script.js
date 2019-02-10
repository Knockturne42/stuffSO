var hdv = document.getElementById('hdv');
var listObject = document.getElementById('listObject');
var page = 'page=index';
var filtre = '';


function initAchatLink()
{
	var achatLink = document.getElementsByClassName('achatLink');
	for (var i = 0; i < achatLink.length; i++) {
		achatLink[i].addEventListener('click', function(e){
			var httpRequest = new XMLHttpRequest();
			httpRequest.onreadystatechange = function (argument) {
			if (httpRequest.readyState === 4)
				document.getElementById('objetContent').innerHTML = httpRequest.responseText;
			}
			page = 'page=hdv';
			httpRequest.open('GET', './php/rechercheObjet.php?'+page+'&nom='+e.target.parentNode.parentNode.children[0].children[0].innerHTML+'&filtre=', true);
			httpRequest.send();
			filtre = e.target.value;
			setTimeout(function(){initChange();} ,500);
			console.log(e.target.parentNode.parentNode.children[0].children[0].innerHTML);
		});
	}
}

function setClickChoiceEquipement() {
	var stuffChoice = document.getElementsByClassName('stuffChoice');
	var listDisplay = document.getElementById('equipementsListe');
	for (var i = stuffChoice.length - 1; i >= 0; i--) {
		stuffChoice[i].addEventListener("click", function(e){
			stuffChoice.value = e.target.value;
		});
	}
}

function choiceEquipement()
{
	var listEquipement = document.getElementById('equipementLi');
	var listDisplay = document.getElementById('equipementsListe');
	listEquipement.addEventListener('mouseover', function(){
		listDisplay.style.transitionDuration = '0.2s';
		listDisplay.style.height = '160px';
	});
	listEquipement.addEventListener('mouseout', function(){
		listDisplay.style.transitionDuration = '0s';
		listDisplay.style.height = '0px';
	});
}

function eventRechercheFiltre()
{
	var listTypeObjet = document.getElementsByClassName('listeType');
	for (var i = listTypeObjet.length - 1; i >= 0; i--) {
		listTypeObjet[i].addEventListener('click', function(e) {
			var rechercheObj = document.getElementById('rechercheObjet');
			var httpRequest = new XMLHttpRequest();
			httpRequest.onreadystatechange = function (argument) {
			if (httpRequest.readyState === 4)
				document.getElementById('objetContent').innerHTML = httpRequest.responseText;
			}
			httpRequest.open('GET', './php/rechercheObjet.php?'+page+'&nom='+rechercheObjet.value+'&filtre='+e.target.value, true);
			httpRequest.send();
			filtre = e.target.value;
			setTimeout(function(){initChange();} ,500);
		})
	}
}

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
		httpRequest.open('GET', './php/rechercheObjet.php?'+page+'&nom='+rechercheObjet.value+'&filtre='+filtre, true);
		httpRequest.send();
		setTimeout(function(){initChange();} ,500);
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
	setTimeout(function(){initChange(); page = 'page=hdv';} ,500);
});

listObject.addEventListener("click", function(){
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function (argument) {
	if (httpRequest.readyState === 4)
		document.getElementById('objetMain').innerHTML = httpRequest.responseText;
	}
	httpRequest.open('GET', './php/listeObjet.php', true);
	httpRequest.send();
	setTimeout(function(){initChange(); page = 'page=index';} ,500);
});


function initChange() {
	eventObjetListe();
	eventRecherche();
	eventRechercheFiltre();
	choiceEquipement();
	setClickChoiceEquipement();
	initAchatLink();
}

initChange();