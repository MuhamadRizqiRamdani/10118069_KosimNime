
function searchManga(){
	$('#list-manga').html('');
	
	$.ajax({
		url: 'https://api.jikan.moe/v3/search/manga',
		type: 'get',
		dataType: 'json',
		data: {
			'q' : $('#search-input').val()
		},
		success: function (result) {
			if (result) {
				let manga = result.results;

				$.each(manga, function (i, data){
					$('#list-manga').append(`
					<div class="col-md-3 d-flex align-items-stretch ">
						<div class="card mb-5" >
							<img src="`+data.image_url+`" class="card-img-top" alt="...">
							<div class="card-body">
								<h4 class="card-title">`+ data.title+`</h4>
								<h6 class="card-subtitle mb-2 text-muted"> <b>TYPE</b> : `+ data.type+`</h6>
								<h6 class="card-subtitle mb-2 text-muted"> <b>CHAPTER</b> : `+ data.chapters+`</h6>
                                <h6 class="card-subtitle mb-2 text-muted"> <b>SCORE</b> : `+ data.score+`</h6>
                                
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
	searchManga();
})

$('#search-input').on('keypress', function(event){
	if (event.keycode === 13) {
		searchManga()
	}
})