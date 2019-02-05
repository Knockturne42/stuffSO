<main id="objetMain">
<div id="recherche"><!-- <label for="rechercheObjet">Recherchez par noms: </label> -->
<input type="text" name="rechercheObjet" id="rechercheObjet" value="" placeholder="Recherche"></div>
	<div id="objetContent">
	<div class="objetTitle">
		<h4>Nom de L'objet</h4>
		<p>Description</p>
	</div>
	<div id="objetContent">
<?php
	include 'php/connection.php';
	$select = $bdd->query('SELECT * FROM objets WHERE 1 LIMIT 0, 700');
	while($objet = $select->fetch())
	{
?>
		<div class="objet">
			<div class="objetMin">
				<h4><?php echo $objet['nomObjet'];?></h4>
				<p><?php echo $objet['explication'];?></p>
			</div>
			<div class="objetExtand">
<?php
	echo "<p>Prix: ".$objet['prix']." po.</p>";
	if ($objet['typeInt'] == 3 || $objet['typeInt'] == 4 || $objet['typeInt'] == 5 || $objet['typeInt'] == 6 || $objet['typeInt'] == 7)
	{
		echo '<div class="objetPrerequis">';
		echo "<h5>Prérequis:</h5>";
		echo "<p>Level requis: ".$objet['niveauRequis'].".</p>";
		echo "<p>Force requise: ".$objet['forceRequis'].".</p>";
		echo "<p>Dextérité requise: ".$objet['dextRequis'].".</p>";
		echo "<p>Constitution requise: ".$objet['constRequis'].".</p>";
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