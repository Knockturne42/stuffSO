'use strict'

//AJAX changement MDP via compte joueur (dans page log)

var $mdp = jQuery.noConflict();

	$mdp(document).ready(function(){
			
		function menuChangeMdp()
		{
			event.preventDefault();
			$mdp("#changeMdp").toggle('visible');
		}
		
		function confirmChangeMdp()
		{
			event.preventDefault();
			
			$mdp.post(
				'changeMdp.php',
			{
				mdpMoment : $mdp("#mdpMoment").val(),
				inputNewMdp : $mdp("#inputNewMdp").val(),
				inputNewMdpConfirm : $mdp("#inputNewMdpConfirm").val()			
			},
			
			function(data)
			{
				var objectMdp = JSON.parse(data);
				
 				if(objectMdp.inputMdp == 1)
				{
					$mdp("#errorChangeMdp").html("<p>Mauvais mot de passe!</p>");
				}
				if(objectMdp.inputMdpConfirm == 1)
				{
					$mdp("#falseMdp").html("<p>Les nouveaux mot de passe ne concordent pas !</p>");
				}
 				if(objectMdp.error == 1)
				{
					$mdp("#emptyInput").html("<p>N'oubliez pas de remplir les champs.</p>");
				}
 				if(objectMdp.response == 1)
				{
					$mdp("#changeMdpOk").html("<p>Changement de mot de passe bien effectué.</p>");
					$mdp("#mdpMoment").val("");
					$mdp("#inputNewMdp").val("");
					$mdp("#inputNewMdpConfirm").val("");
				}				
			},
			
				'text',
			
			);
		}
		
		function empty()
		{
			$mdp("#errorChangeMdp").empty();
			$mdp("#falseMdp").empty();
			$mdp("#changeMdpOk").empty();
			$mdp("#emptyInput").empty();
		}
		
		// Affichage menu
		$mdp('#changeMdpLink').on('click', menuChangeMdp);
		
		// Formulaire
		$mdp('#changeConfirmMdp').on('click', confirmChangeMdp);
	
		// Vide les div d'erreur
		$mdp('#changeConfirmMdp').on('click', empty);
	});
