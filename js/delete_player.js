'use strict'

//AJAX Suppression compte joueur (dans page log)

var $delete = jQuery.noConflict();

	$delete(document).ready(function(){
			
		function menuDeletePlayer()
		{
			event.preventDefault();
			$delete("#destroy").toggle('visible');
		}
		
		function confirmDestroy()
		{
			event.preventDefault();
			
			$delete.post(
			'delete_player.php',
			{
				pseudo : $delete("#pseudo").val(),
				password : $delete("#password").val(),
				email : $delete("#email").val(),
			},
			
			function(data)
			{
				var objectDelete = JSON.parse(data);
				
				if(objectDelete.inputMdp == 1 || objectDelete.inputPseudo == 1 || objectDelete.inputEmail == 1)
				{
					$delete("#deleteFormInput").html("<p>Attention, merci de bien remplir tous les champs !</p>");
				}
 				if(objectDelete.error == 1)
				{
					$delete("#deleteForm").html("<p>Mauvais(e) Login/Mdp/Adresse !</p>");
				}
				if(objectDelete.error == 0)
				{
					objectDelete.response = 1
					alert("Suppression bien effective");
					window.location.href = 'index.php';
				}
			},
			
			'text',
			
			);
		}
		
		function empty()
		{
			$delete("#deleteFormInput").empty();
			$delete("#deleteForm").empty();
		}
		
		$delete('#delete').on('click', menuDeletePlayer);
		$delete('#deletePlayer').on('click', confirmDestroy);
		$delete('#deletePlayer').on('click', empty);
		
	});
