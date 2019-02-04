'use strict'

//AJAX form contact (page info)

var $form = jQuery.noConflict();

	$form(document).ready(function(){
		
		function contactForm()
		{
			//event.preventDefault();
			
			$form.post(
			'info.php',
			{
				pseudo : $form("#pseudo").val(),
				mail : $email("#mail").val(),
				subject : $email("#subject").val(),
				message : $email("#message").val()			
			},
			
			function(data)
			{
				var objectForm = JSON.parse(data);
				
 				if(objectForm.pseudo == 1 || objectForm.mail == 1 || objectForm.message == 1)
				{
					$form("#sendError").html("<p>N'oubliez pas de bien remplir les champs !</p>");
					
						if(objectForm.regexEmail == 1)
						{
							$form("#regexMail").html("<p>Merci d'utiliser une adresse valide !</p>");										
						}
					
				}

 				if(objectForm.pseudo == 0 && objectForm.mail == 0 && objectForm.message == 0 && objectForm.regexEmail == 0)
				{
					$form("#sendok").html("<p>Mail bien reçu, nous vous répondrons au plus vite !</p>");
					$x("#pseudo").val("");
					$x("#mail").val("");
					$x("#message").val("");
				}
				if(objectForm.fail == 1)
				{
					$form("#mailFail").html("<p>L'envoi du mail a échoué, merci de rententer ultérieurement</p>");
				}
			},
			
			'text',
			
			);
		}
		
		function empty()
		{
			$form("#sendError").empty();
			$form("#sendok").empty();
			$form("#regexMail").empty();
			$form("#mailFail").empty();
		}
		
		// Formulaire
		$form('#envoi').on('click', function(event) {
			event.preventDefault(); contactForm();
		});
		$form('#envoi').on('click', empty);
	
		// Vide les div d'erreur
		$form('#sendok').on('click', empty);
		$form('#sendError').on('click', empty);
		$form("#regexMail").on('click', empty);
		$form("#mailFail").on('click', empty);
		
	});
