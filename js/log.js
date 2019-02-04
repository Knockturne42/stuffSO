'use strict'

// AJAX Inscription + connexion

var $x = jQuery.noConflict();

	$x(document).ready(function(){
		
		var $cgu = $x('#cgu'),
			$pseudoregister = $x('#pseudoregister'),
		    $password = $x('#password'),
			$email = $x('#email'),
			$confirmmdp = $x('#confirmmdp'),
			$erreur = $x('#erreur'),
			$champ = $x('.champ'),
			$register = $x('#register');
			
		//POUR AFFICHAGE COULEUR ERREUR TAILLE MINIMALE	
		
		// $champ.keyup(function(){
			// if($x(this).val().length < 3){ // si la chaîne de caractères est inférieure à 3
				// $x(this).css({ // on rend le champ rouge
					// borderColor : 'red',
				// color : 'red'
				// });
			// }
			// else{
				// $x(this).css({ // si tout est bon, on le rend vert
				// borderColor : 'green',
				// color : 'green'
				// });
			// }
		// });
		
		//AFFICHAGE COULEUR ERREUR COMPARAISON MDP
/* 		$confirmmdp.keyup(function(){
			if($x(this).val() != $password.val()){ // si la confirmation est différente du mot de passe
				$x(this).css({ // on rend le champ rouge
					borderColor : 'red',
					color : 'red'
				});
			}
			else{
				$x(this).css({ // si tout est bon, on le rend vert
					borderColor : 'green',
					color : 'green'
				});
			}
		}); */
		
		function verifier(champ){
			if(champ.val() == ""){ // si le champ est vide
				$erreur.css('display', 'block'); // on affiche le message d'erreur
					champ.css({ // on rend le champ rouge
					borderColor : 'red',
					color : 'red'
				});
			}
		}

		$register.click(function(e){
			// puis on lance la fonction de vérification sur tous les champs :
			verifier($pseudoregister);
			verifier($password);
			verifier($confirmmdp);
			verifier($email);
		});

	function log()
	{
		//event.preventDefault();
		
		$x.post(
			'connect.php',
			{
				pseudo: $x("#pseudo").val(),
				mdp : $x("#mdp").val()
			},
			
			function(data)
			{
				var object = JSON.parse(data);
				
				if(object.inputMdp == 1 || object.inputPseudo == 1)
				{
					$x("#errorLog").html("<p>Attention, merci de remplir les champs !</p>");
				}
				if(object.fail == 1)
				{
					$x("#errorLogMdp").html("<p>Mauvais Login/Mdp !</p>");
				}
				if(object.fail == 0 && object.inputMdp == 0 && object.inputPseudo == 0 && object.response == 1)
				{
					window.location.href = 'log.php';
				}
			},
			'text',
			
		);
	}	
		
	function register()
	{
		//event.preventDefault();
	
		var checkbox = $x('input[name="cgu"]').prop('checked'); //it will return true or false
		
        $x.post(
            'register.php',
            {
                cgu : checkbox,
                pseudoregister : $x("#pseudoregister").val(),
				password : $x("#password").val(),
				confirmmdp : $x("#confirmmdp").val(),
				email : $x("#email").val()
            },

            function(data)
			{ 	
				var obj = JSON.parse(data);

	 			if(obj.input == 1)
				{
                   	if(obj.regexPseudo == 1)
					{
						$x("#regexPseudo").html("<p>Votre pseudo ne peut contenir que des lettres et des nombres !</p>");
					}
					else
					{
						if(obj.pseudoUse == 0)
						{
							$x("#errorPseudo").html("<p>Ce pseudo n'est pas libre !</p>");
						}
					}
					if(obj.mdpFail == 0)
					{
						$x("#errorMdp").html("Les deux mots de passe que vous avez rentrés ne correspondent pas…");
					}
					if(obj.regexEmail == 1)
					{
						$x("#regexMail").html("<p>Merci de vous inscrire avec une adresse valide !</p>");	
					}
                }
				else
				{
					$x("#inputVide").html("<p>Merci de remplir tous les champs !</p>");
				}
				if(obj.falseCgu == 0)
				{
					
					$x("#errorCgu").html("<p>Vous n\'avez pas accepté les termes et conditions du jeu pour pouvoir vous inscrire.</p>");
				}
				if(obj.validate == 1)
				{
                    $x("#resultat").html("<p>Création de compte effective ! Vous pouvez vous log en jeu ou sur votre espace personnel.</p>");
					$x("#pseudoregister").val("");
					$x("#confirmmdp").val("");
					$x("#email").val("");
					$x("#password").val("");
				}
            },
			
            'text'
        );
    }
	
	function empty()
	{
		$x("#errorMdp").empty();
		$x("#errorPseudo").empty();
		$x("#regexPseudo").empty();
		$x("#regexMail").empty();
		$x("#inputVide").empty();
		$x("#errorCgu").empty();
		$x("#resultat").empty();
		$x("#errorLog").empty();
		$x("#errorLogMdp").empty();
	}
	
	//$x('#register').on('click', register);
	$x('#register').on('click', function(event) {
		event.preventDefault(); register();
	});
	
	
	$x('#register').on('click', empty);
	
	//$x('#connect').on('click', log);	
	$x('#connect').on('click', function(event) {
			event.preventDefault(); log();
		});	
		
	$x('#connect').on('click', empty);
	
});