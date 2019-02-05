<?php
include 'connection.php';
if (isset($_GET['nom'])) {
	if ($_GET['page'] == 'hdv') {
		if ($_GET['nom'] == '')
			$select = $bdd->query('SELECT * FROM venteobjet LEFT JOIN objets ON venteobjet.idObjet = objets.idObjet LEFT JOIN joueur ON venteobjet.idJoueur = joueur.idJoueur WHERE 1 LIMIT 0, 700');
		else
			$select = $bdd->query('SELECT * FROM venteobjet LEFT JOIN objets ON venteobjet.idObjet = objets.idObjet LEFT JOIN joueur ON venteobjet.idJoueur = joueur.idJoueur WHERE nomObjet LIKE "%'.$_GET['nom'].'%" LIMIT 0, 700');
	}
	else
	{
		if ($_GET['nom'] == '')
			$select = $bdd->query('SELECT * FROM objets WHERE 1 LIMIT 0, 700');
		else
			$select = $bdd->query('SELECT * FROM objets WHERE nomObjet LIKE "%'.$_GET['nom'].'%" LIMIT 0, 700');
	}
	while($objet = $select->fetch())
	{
		?><div class="objet">
			<div class="objetMin">
				<h4><?php echo $objet['nomObjet'];?></h4>
				<p><?php echo $objet['explication'];?></p>
			</div>
			<div class="objetExtand">
					<?php
					echo '<div class="objetStats">';
					echo "<h5>Prix moyen: </h5>";
					echo "<p>".$objet['prix']." po</p>";
					echo "</div>";
					if ($objet['typeInt'] == 3 || $objet['typeInt'] == 4 || $objet['typeInt'] == 5 || $objet['typeInt'] == 6 || $objet['typeInt'] == 7)
					{
						echo '<div class="objetStats">';
						echo "<h5>Prérequis:</h5>";
						echo "<p>Level requis: ".$objet['niveauRequis']."</p>";
						echo "<p>Force requise: ".$objet['forceRequis']."</p>";
						echo "<p>Dextérité requise: ".$objet['dextRequis']."</p>";
						echo "<p>Constitution requise: ".$objet['constRequis']."</p>";
						if ($objet['utilisablePar'] != "0")
						{
							if ($objet['utilisablePar'] == "1")
								echo "<p>Etre: Voleur</p>";
							elseif ($objet['utilisablePar'] == "2")
								echo "<p>Etre: Guerrier</p>";
							else
								echo "<p>Etre: Barbare</p>";
						}
						echo "</div>";
						echo '<div class="objetStats">';
						echo "<h5>Bonus:</h5>";
						if ($objet['force'] != "0") {
							echo "<p>Force bonus: ".$objet['force']."</p>";
						}
						if ($objet['dext'] != "0") {
							echo "<p>Dextérité bonus: ".$objet['dext']."</p>";
						}
						if ($objet['const'] != "0") {
							echo "<p>Constitution bonus: ".$objet['const']."</p>";
						}
						echo "</div>";
						if ($objet['typeInt'] == 4 || $objet['typeInt'] == 7) {
							echo '<div class="objetStats">';
							echo "<h5>Dégats: </h5>";
							echo "<p>Dégats minimum: ".$objet['attMin']."</p>";
							echo "<p>Dégats maximum: ".$objet['attMax']."</p>";
							echo "</div>";
						}
						// elseif ($objet['typeInt'] == 3 || $objet['typeInt'] == 5 || $objet['typeInt'] == 6) {
						// 	echo '<div class="objetStats">';
						// 	echo "<h5>Défense: </h5>";
						// 	echo "<p>".$objet['defense']."</p>";
						// 	echo "</div>";
						// }
					}

					?>
			</div></div><?php
}
}
?>