
$('#search-button').on('click', function () {
	$('#list-films').html('');
	
	$.ajax({
		url: 'https://ghibliapi.herokuapp.com/films?fields',
		type: 'get',
		dataType: 'json',
		data: {
			'fields' : $('').val()
		},
		success: function (result) {
			if (result) {
				let films = result;

				$.each(films, function (i, data){
					$('#list-films').append(`
					<div class="col-md-3 d-flex align-items-stretch ">
						<div class="card mb-5" >							
							<div class="card-body">
								<h4 class="card-title">`+ data.title+`</h4>
								<h6 class="card-subtitle mb-2 text-muted"> <b>DIRECTOR</b> : `+ data.director +` </h6>
								<h6 class="card-subtitle mb-2 text-muted"> <b>PRODUCER</b> : `+ data.producer +` </h6>
                                <h6 class="card-subtitle mb-2 text-muted"> <b>RELEASE DATE</b> : `+ data.release_date +` </h6>
                                <h6 class="card-subtitle mb-2 text-muted"> <b>SCORE</b> : `+ data.rt_score +`</h6>
                                <p class="card-text"><b>DESCRIPTION : </b> <br/> `+data.description+` </p
                                
							</div>
						</div>
				  	</div>
					`)
				})

	

			}	
		}
	})
})