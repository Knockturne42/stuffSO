//TABLEAU DE CLASSEMENT

'use strict'

var $d = jQuery.noConflict();

$d(document).ready(function() {
	
	$d('#tabXp').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": "ajaxClassementXp.php",
		pagingType: "simple",
		lengthMenu:[25, 50, 100, 200, 300],
		pageLength: 25,
		responsive: true,
		autoWidth: false,
        "order": [[ 2, 'DESC' ]],
		language: {url: "plugins/DataTables/DataTables/French.json",}
    });
	
	$d('#tabRep').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": "ajaxClassementRep.php",
		pagingType: "simple",
		lengthMenu:[25, 50, 100, 200, 300],
		pageLength: 25,
		responsive: true,
		autoWidth: false,
        "order": [[ 2, 'DESC' ]],
		language: {url: "plugins/DataTables/DataTables/French.json",}
    });
	
	$d('#tabOr').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": "ajaxClassementOr.php",
		pagingType: "simple",
		lengthMenu:[25, 50, 100, 200, 300],
		pageLength: 25,
		responsive: true,
		autoWidth: false,
        "order": [[ 2, 'DESC' ]],
		language: {url: "plugins/DataTables/DataTables/French.json",}
    });
	
	/*
	$d('#tabGuildeXp').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": "ajaxClassementGuildeXp.php",
		pagingType: "simple",
		lengthMenu:[25, 50, 100, 200, 300],
		pageLength: 25,
		responsive: true,
		autoWidth: false,
        "order": [[ 2, 'DESC' ]],
		language: {url: "plugins/DataTables/DataTables/French.json",}
    });
	
	$d('#tabGuildeRep').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": "ajaxClassementGuildeRep.php",
		pagingType: "simple",
		lengthMenu:[25, 50, 100, 200, 300],
		pageLength: 25,
		responsive: true,
		autoWidth: false,
        "order": [[ 2, 'DESC' ]],
		language: {url: "plugins/DataTables/DataTables/French.json",}
    });
	
	$d('#tabGuildeOr').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": "ajaxClassementGuildeOr.php",
		pagingType: "simple",
		lengthMenu:[25, 50, 100, 200, 300],
		pageLength: 25,
		responsive: true,
		autoWidth: false,
        "order": [[ 2, 'DESC' ]],
		language: {url: "plugins/DataTables/DataTables/French.json",}
    });	
	*/
	
	
	$d('#tab').DataTable( {	
		pagingType: "simple",
		lengthMenu:[50, 100, 200, 300],
		pageLength: 100,
		responsive: true,
		autoWidth: false,
        language: {url: "plugins/DataTables/DataTables/French.json",},
	});
		
	
	$d('#tab1').DataTable({
    	paging: false,
		lengthMenu:[5,15,50],
		pageLength: 10,
		responsive: true,
		searching: false,
		bInfo: false,
        language: {url: "plugins/DataTables/DataTables/French.json",},
		ordering:  false,
    });
	
	$d('#tab2').DataTable({
    	paging: false,
		lengthMenu:[5,15,50],
		pageLength: 10,
		responsive: true,
		searching: false,
		ordering:  false,
		bInfo: false,
        language: {url: "plugins/DataTables/DataTables/French.json",}

    });
	
	$d('#tab3').DataTable({
    	paging: false,
		lengthMenu:[5,15,50],
		pageLength: 10,
		responsive: true,
		searching: false,
		ordering:  false,
		bInfo: false,
        language: {url: "plugins/DataTables/DataTables/French.json",}
    });
	
	$d('#tab4').DataTable({
    	paging: false,
		lengthMenu:[5,15,50],
		pageLength: 10,
		responsive: true,
		searching: false,
		ordering:  false,
		bInfo: false,
        language: {url: "plugins/DataTables/DataTables/French.json",}
    });
	
	$d('#tab5').DataTable({
    	paging: false,
		lengthMenu:[5,15,50],
		pageLength: 10,
		responsive: true,
		searching: false,
		ordering:  false,
		bInfo: false,
        language: {url: "plugins/DataTables/DataTables/French.json",}
    });
	
	$d('#tab6').DataTable({
    	paging: false,
		lengthMenu:[5,15,50],
		pageLength: 10,
		responsive: true,
		searching: false,
		ordering:  false,
		bInfo: false,
        language: {url: "plugins/DataTables/DataTables/French.json",}
    });
	
	$d('#tab7').DataTable({
    	paging: false,
		lengthMenu:[5,15,50],
		pageLength: 10,
		responsive: true,
		searching: false,
		ordering:  false,
		bInfo: false,
        language: {url: "plugins/DataTables/DataTables/French.json",}
    });
	
	$d('#tab8').DataTable({
    	paging: false,
		lengthMenu:[5,15,50],
		pageLength: 10,
		responsive: true,
		searching: false,
		ordering:  false,
		bInfo: false,
        language: {url: "plugins/DataTables/DataTables/French.json",}
		
    });
	
	$d('#tab9').DataTable({
    	paging: false,
		lengthMenu:[5,15,50],
		pageLength: 10,
		responsive: true,
		searching: false,
		ordering:  false,
        language: {url: "plugins/DataTables/DataTables/French.json",},
		bInfo: false
    });
	
	$d('#tab10').DataTable({
    	paging: false,
		lengthMenu:[5,15,50],
		pageLength: 10,
		responsive: true,
		searching: false,
		ordering:  false,
		bInfo: false,
        language: {url: "plugins/DataTables/DataTables/French.json",}
    });
	
	//description de guilde
		$d('#tabDescripGuilde').DataTable({
    	paging: false,
		responsive: true,
		searching: true,
		ordering:  true,
		bInfo: false,
        language: {url: "plugins/DataTables/DataTables/French.json",}
    });
	
	//gestion de guilde
		$d('#modifGuilde').DataTable({
    	paging: false,
		responsive: true,
		searching: true,
		ordering:  true,
		bInfo: false,
        language: {url: "plugins/DataTables/DataTables/French.json",}
    });	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});