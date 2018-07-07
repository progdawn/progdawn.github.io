<?php
	$servername="progdawn-pokemon-database.cusjpbpsd1fo.us-east-2.rds.amazonaws.com";
	/*$servername="52.15.193.186";*/
	$username="progdawn";
	$password="thepokemonfromhell";
	$dbname="PokemonDatabase";
	
	function metersToFeetInches($meters, $echo = true)
	{
		$m = $meters/10;
		$valInFeet = $m*3.2808399;
		$valFeet = (int)$valInFeet;
		$valInches = round(($valInFeet-$valFeet)*12);
		$data = $valFeet."&prime;".$valInches."&Prime;";
		if($echo == true)
		{
			echo $data;
		} else {
			return $data;
		}
	}
	
	function gramsToPounds($grams, $echo = true)
	{
		$g = $grams/10;
		$pounds = $g * 2.20462;
		$data = round($pounds, 2);
		if($echo == true)
		{
			echo $data;
		} else {
			return $data;
		}
	}

	$rec_limit = 1;
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
		 die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "SELECT count(id) FROM pokemon";
	$retval = mysqli_query($conn, $sql);

	if(!$retval){
		die('Could not get data: '.mysqli_error());
	}
	$row = mysqli_fetch_array($retval, MYSQLI_NUM);
	$rec_count = $row[0];

	if(isset($_GET{'page'})){
		$page = $_GET{'page'} + 1;
		$offset = $rec_limit * $page;
	}else{
		$page = 0;
		$offset = 0;
	}

	$left_rec = $rec_count - ($page * $rec_limit);
	$sql = "SELECT id, identifier, height, weight FROM pokemon LIMIT $offset, $rec_limit";
	$retval = mysqli_query($conn, $sql);

	if(!$retval){
		die('Could not get data: '.mysqli_error());
	}
	while($row = mysqli_fetch_assoc($retval)) {
		$feetInches = metersToFeetInches($row["height"], false);
		$pounds = gramsToPounds($row["weight"], false);
		echo '<div class="container-fluid">';
			echo '<div class="row">';
				echo '<div class="col-md-6" id="pokeimage">';
					echo '<img src="images/main-sprites/x-y/'.$row["id"].'.png" id="pksprite" class="center-block img-responsive">';
				echo '</div>';
				echo '<div class="col-md-6" id="statdiv">';
					echo '<div class="well" id="pokewell">';
						echo '<ul class="pokestats" id="stats">';
							echo '<li id="pkid">ID: '.$row["id"].'</li>';
							echo '<li id="pkname">Name: '.$row["identifier"].'</li>';
							echo '<li id="pkheight">Height: '.$feetInches.'</li>';
							echo '<li id="pkweight">Weight: '.$pounds.' pounds</li>';
						echo '</ul>';
					echo '</div>';
				echo '</div>';
			echo '</div>';
		echo '</div>';
	}
	echo '<div class="pagination-centered">';
		echo '<ul class="pagination">';
			if( $page > 0 ) {
            	$last = $page - 2;
            	echo "<li class=\"page-item\"><a class=\"page-link\" href = \"?page=$last\">Last Pokemon</a></li>";
           		echo "<li class=\"page-item\"><a class=\"page-link\" href = \"?page=$page\">Next Pokemon</a></li>";
         	}else if( $page == 0 ) {
            	echo "<li class=\"page-item\"><a class=\"page-link\" href = \"?page=$page\">Next Pokemon</a></li>";
         	}else if( $left_rec < $rec_limit ) {
            	$last = $page - 2;
            	echo "<li class=\"page-item\"><a class=\"page-link\" href = \"?page=$last\">Last Pokemon</a></li>";
         	}
		echo '</ul>';
	echo '</div>';

	mysqli_close($conn);
?> 