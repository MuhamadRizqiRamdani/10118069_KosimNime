<!DOCTYPE html>
<html>
<head>
	<title>KOSIM NIME</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<body>
	<div class="container-fluid bg-dark">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#">KOSIM NIME</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				</button>
			<div class="container">
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul class="navbar-nav mr-auto">
				        
				        <li class="nav-item">
				    	    <a class="nav-link" href="#">SEARCH ANIME</a>
					    </li>
						<li class="nav-item">
				    	    <a class="nav-link" href="manga.php">SEARCH MANGA</a>
					    </li>
						<li class="nav-item">
				    	    <a class="nav-link" href="films.php">STUDIO GHIBLY FILMS</a>
					    </li>
					   
				    </ul>
				    
				</div>
		  </div>
		</nav>

		<div class="jumbotron">
		<div class="container col-md-6">
			<form method="post">
				<h2 class="text-uppercase text-center">SEARCH ANIME</h2><br/>
		        <div class="form-group">
			 	    <label for="Nip">Anime Title</label>
				    <input type="text" name="anime-title" placeholder="Anime Title..." class="form-control" id="search-input">
				</div>
				
				<input type="button" name="submit" class="btn btn-primary" value="SEARCH" id="search-button">
			</form>
		</div>

		<br/><hr><br/>
		
		<div class="row" id="list-anime">
			
		</div>
		
	<div class="footer-copyright text-center py-3 bg-dark text-white">
		<p>© 2020 Copyright</p>
	</div>

	<script
  	src="https://code.jquery.com/jquery-3.5.1.min.js"
  	integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  	crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
	<script src="script.js"></script>
</body>
</html>