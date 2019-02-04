'use strict'

//AJAX changement MDP via compte joueur (dans page log)

var $formmdp = jQuery.noConflict();

	$formmdp(document).ready(function(){
		
		function confirmNewMdp()
		{
			//event.preventDefault();
			
			$formmdp.post(
				'recupmdp.php',
			{
				pseudo : $formmdp("#pseudo").val(),
				mail : $formmdp("#mail").val()
			},
			
			function(data)
			{
				var objectSendMdp = JSON.parse(data);
				
 				if(objectSendMdp.ban == 1)
				{
					$formmdp("#ban").html("<p>Personnage banni!</p>");
				}
				
				if(objectSendMdp.admin == 1)
				{
					$formmdp("#admin").html("<p>Personnage admin, impossible de changer le mdp via le formulaire, merci de mail général SO!</p>");
				}
				
 				if(objectSendMdp.fail == 1)
				{
					$formmdp("#NotGood").html("<p>Mauvais pseudo/mauvaise adresse!</p>");
				}
 				if(objectSendMdp.error == 1)
				{
					$formmdp("#emptyInput").html("<p>N'oubliez pas de remplir les champs.</p>");
				}
 				if(objectSendMdp.ok == 1 && objectSendMdp.ban == 0 && objectSendMdp.admin == 0)
				{
					$formmdp("#ok").html("<p>Un email confirmant votre demande de changer de mot de passe vient de vous être envoyé !</p>");
					$formmdp("#pseudo").val("");
					$formmdp("#mail").val("");
				}				
			},
			
				'text',
			);
		}
		
		function empty()
		{
			$formmdp("#NotGood").empty();
			$formmdp("#emptyInput").empty();
			$formmdp("#ok").empty();
			$formmdp("#ban").empty();
			$formmdp("#admin").empty();
		}
		
		// Formulaire
		//$formmdp('#changepassword').on('click', confirmNewMdp);
		
		$formmdp('#changepassword').on('click', function(event) {
			event.preventDefault(); confirmNewMdp();
		});
		
		
	
		// Vide les div d'erreur
		$formmdp('#changepassword').on('click', empty);
	});
