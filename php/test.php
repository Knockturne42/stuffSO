<?php
include 'connection.php';
if ($_GET['page'] == 'hdv')
{ 
?>
	<div class="objetTitle">
		<h4>Nom de L'objet</h4>
		<p>prix unitaire</p>
		<p>quantite</p>
		<p>prix total</p>
		<p>vendeur</p>
	</div>
	<div id="objetContent">
<?php
	if (isset($_GET['nom']) && $_GET['nom'] != '')
		$select = $bdd->query('SELECT * FROM venteobjet LEFT JOIN objets ON venteobjet.idObjet = objets.idObjet LEFT JOIN joueur ON venteobjet.idJoueur = joueur.idJoueur WHERE nomObjet LIKE "%'.$_GET['nom'].'%" LIMIT 0, 700');
	else
		$select = $bdd->query('SELECT * FROM venteobjet LEFT JOIN objets ON venteobjet.idObjet = objets.idObjet LEFT JOIN joueur ON venteobjet.idJoueur = joueur.idJoueur WHERE 1 LIMIT 0, 700');
}
else
{
?>
	<div class="objetTitle">
		<h4>Nom de L'objet</h4>
		<p>Description</p>
	</div>
	<div id="objetContent">
<?php
	include 'connection.php';
	if (isset($_GET['nom']) && $_GET['nom'] != '')
		$select = $bdd->query('SELECT * FROM objets WHERE nomObjet LIKE "%'.$_GET['nom'].'%" LIMIT 0, 700');
	else
		$select = $bdd->query('SELECT * FROM objets WHERE 1 LIMIT 0, 700');
}
	while($objet = $select->fetch())
	{
?>
		<div class="objet">
			<div class="objetMin">
<?php
				if ($_GET['page'] == 'hdv')
				{
?>
				<h4><?php echo $objet['nomObjet'];?></h4>
				<p><?php echo $objet['prixUnitaire'];?></p>
				<p><?php echo $objet['quantiteObjet'];?></p>
				<p><?php echo intval($objet['prixUnitaire'])*intval($objet['quantiteObjet']);?></p>
				<p><?php echo $objet['nomJoueur'];?></p>
<?php
				}
				else
				{
?>
					<h4><?php echo $objet['nomObjet'];?></h4>
					<p><?php echo $objet['explication'];?></p>
<?php
				}
?>
			</div>
			<div class="objetExtand">
<?php
	echo "<h5>Prix moyen: ".$objet['prix']." po.</h5>";
	if ($objet['typeInt'] == 3 || $objet['typeInt'] == 4 || $objet['typeInt'] == 5 || $objet['typeInt'] == 6 || $objet['typeInt'] == 7)
	{
		echo '<div class="objetPrerequis">';
		echo "<h5>Prérequis:</h5>";
		echo "<p>Level requis: ".$objet['niveauRequis'].".</p>";
		echo "<p>Force requise: ".$objet['forceRequis'].".</p>";
		echo "<p>Dextérité requise: ".$objet['dextRequis'].".</p>";
		echo "<p>Constitution requise: ".$objet['constRequis'].".</p>";
		if ($objet['utilisablePar'] != "0")
		{
			if ($objet['utilisablePar'] == "1")
				echo "<p>Etre: Voleur.</p>";
			elseif ($objet['utilisablePar'] == "2")
				echo "<p>Etre: Guerrier.</p>";
			else
				echo "<p>Etre: Barbare.</p>";
		}
		echo "</div>";
		echo '<div class="objetBonus">';
		echo "<h5>Bonus:</h5>";
		if ($objet['force'] != "0")
			echo "<p>Force bonus: ".$objet['force'].".</p>";
		if ($objet['dext'] != "0")
			echo "<p>Dextérité bonus: ".$objet['dext'].".</p>";
		if ($objet['const'] != "0")
			echo "<p>Constitution bonus: ".$objet['const'].".</p>";
		echo "</div>";
	}
?>
		</div>
	</div>
<?php
	}
?>