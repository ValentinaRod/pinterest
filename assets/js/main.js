$(document).(ready(){
		for(var i =0; i <20 ; i++){
		var img=$('<img>').attr('src', 'dis/img' + data[i].image_url);
		var cards=$('<div class="cards" data-toggle="modal" data-target="#myModal">');
		var titulo=$('<h4>').attr('class', "title");
		titulo.text(data[i].title);
		var descripcion=$('<p>').atrr('class','descripciones');
		descripcion.text(data[i].description);
		var divUsuario=$('<div>').atrr('class', 'user_uno');
		var user=$('<p class="user">').append('<p><i class="fa fa-user-circle" aria-hidden="true"></i>'
					+data[i].username + '</p>');

		var hashtag = $('<p class="hashtag">').text('#' + data[i].hashtag);

		var modaltop ='<div class="modal"><div><i class="fa fa-upload" aria-hidden="true"></i><i class="fa fa-check" aria-hidden="true"></i><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div><button class="btn-guardar"><i class="fa fa-thumb-tack" aria-hidden="true"></i>Guardar</button></div>';
		var modalImg = '<h6>'+ data[i].title 
						+ '</h5><img src="dist/img/' 
						+ data[i].image_url +'">';
		var modalbottom = '<div class="user"><div class="userC"><i class="fa fa-user-circle" aria-hidden="true"></i>'
							+ data[i].username 
							+'</div><button class="btn-leerlo">Leerlo</button></div><div>'
							+ data[i].description +'</div>';
		var modal = $('<div class="modal fade  bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog modal-sm" role="document"><div class="modal-content"><div class="modal-body"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
							+ modaltop 
							+ modalImg
							+ modaltop 
							+ modalbottom
							+'</div></div></div></div>');
		divUsuario.append(user);
		divUsuario.append(hashtag);

		cards.append(img);
		cards.append(titulo);
		cards.append(descripcion);
		cards.append(divUsuario);

$('.pint_info').append(cards);
$('.pint_info').append(modal);


}	

	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	       for(i ; i < 40 ; i++){
			var img=$('<img>').attr('src', 'dis/img' + data[i].image_url);
			var cards=$('<div class="cards">');
			var titulo=$('<h4>').attr('class', "title");
			titulo.text(data[i].title);


});