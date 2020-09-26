
function searchAnime(){
	$('#list-anime').html('');
	
	$.ajax({
		url: 'https://api.jikan.moe/v3/search/anime',
		type: 'get',
		dataType: 'json',
		data: {
			'q' : $('#search-input').val()
		},
		success: function (result) {
			if (result) {
				let anime = result.results;

				$.each(anime, function (i, data){
					$('#list-anime').append(`
					<div class="col-md-3 d-flex align-items-stretch ">
						<div class="card mb-5" >
							<img src="`+data.image_url+`" class="card-img-top" alt="...">
							<div class="card-body">
								<h4 class="card-title">`+ data.title+`</h4>
								<h6 class="card-subtitle mb-2 text-muted"> <b>TYPE</b> : `+ data.type+`</h6>
								<h6 class="card-subtitle mb-2 text-muted"> <b>EPISODE</b> : `+ data.episodes+`</h6>
								<h6 class="card-subtitle mb-2 text-muted"> <b>SCORE</b> : `+ data.score+`</h6>
								<h6 class="card-subtitle mb-2 text-muted"> <b>RATED</b> : `+ data.rated+`</h6>
								<p class="card-text"><b>Synopsis : </b> <br/> `+data.synopsis+`</p
								<div class="card-footer">
									<a href=" `+ data.url +` " class="card-link" target="blank">See Detail</a>
								</div>
								
							</div>
						</div>
				  	</div>
					`)
				})

				$('#search-input').val('');

			}	
		}
	})
}

$('#search-button').on('click', function () {
	searchAnime();
})

$('#search-input').on('keypress', function(event){
	if (event.keycode === 13) {
		searchAnime(), searchAnimeYT()
	}
})

