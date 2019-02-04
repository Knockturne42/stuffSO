'use strict'

//AJAX changement ADRESSE MAIL compte joueur (dans page log)

var $email = jQuery.noConflict();

	$email(document).ready(function(){
			
		function menuChangeEmail()
		{
			event.preventDefault();
			$email("#changeMail").toggle('visible');
		}
		
		function confirmChangeMail()
		{
			event.preventDefault();
			
			$email.post(
			'changeEmail.php',
			{
				oldEmail : $email("#oldEmail").val(),
				inputNewEmail : $email("#inputNewEmail").val(),
				confirmEmailChange : $email("#confirmEmailChange").val(),
				passwordChange : $email("#passwordChange").val()				
			},
			
			function(data)
			{
				var objectMail = JSON.parse(data);
				
 				if(objectMail.inputMdp == 1 || objectMail.inputOldEmail == 1 || objectMail.inputNewEmail == 1 || objectMail.inputConfirmEmail == 1 || objectMail.error == 1)
				{
					$email("#errorChangeMail").html("<p>Mauvais(e(s))mot de passe/Adresse(s) !</p>");
				}
				else
				{
					objectMail.error = 0
				}
 				if(objectMail.error == 0)
				{
					$email("#changeMailOk").html("<p>Adresse bien changée !</p>");
					$email("#oldEmail").val("");
					$email("#inputNewEmail").val("");
					$email("#confirmEmailChange").val("");
					$email("#passwordChange").val("");
				}
			},
				'text',
			);
		}
		
		function empty()
		{
			$email("#errorChangeMail").empty();
			$email("#changeMailOk").empty();
		}
		
		// Affichage menu
		$email('#changeEmailLink').on('click', menuChangeEmail);
		
		// Formulaire
		$email('#changeConfirmMail').on('click', confirmChangeMail);
	
		// Vide les div d'erreur
		$email('#changeConfirmMail').on('click', empty);
	});
