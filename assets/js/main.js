//var data
var contador=0;

$(document).ready(function(){
		for (var i=0; i<20; i++){
		console.log(data[i].title);
	$('.pint').append('<div class="pinter_rest col-md-12" type="button" data-toggle="modal" data-target="#myModal'
							+data[i].id+'"><img class="img-responsive img-rounded" src="dist/img/'
							+data[i].image_url+'"><p class="cont_img"><i class="fa fa-thumb-tack" aria-hidden="true"></i>36,6k <i class="fa fa-check" aria-hidden="true"></i> 6</p><h4>'
							+data[i].title+'</h4><h5>'
							+data[i].description+'</h5><p><i class="fa fa-user-circle" aria-hidden="true"></i>'
							+data[i].username+' #'
							+data[i].hashtag+'</p></div>'
							+'<div class="modal fade" id="myModal'
							+data[i].id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
							+'<div class="modal-dialog" role="document"><div class="modal-content">'
							+'<div class="modal-header"><div class="headermodal"><i class="fa fa-upload" aria-hidden="true"></i><i class="fa fa-check" aria-hidden="true">'
							+'</i><i class="fa fa-ellipsis-h" aria-hidden="true"></i><button type="button" class="btn btn-primary"><i class="fa fa-thumb-tack" aria-hidden="true"></i>Guardar</button></div>'
							+'<h4 class="modal-title" id="myModalLabel'
							+data[i].id+'">'
							+data[i].title+'</h4></div>'
							+'<div class="modal-body"><img class="img-responsive img-rounded center-block" src="dist/img/'
							+data[i].image_url+'"></div><div class="modal-footer">'
							+'<div class="headermodal"><i class="fa fa-upload" aria-hidden="true"></i><i class="fa fa-check" aria-hidden="true"></i>'
							+'<i class="fa fa-ellipsis-h" aria-hidden="true"></i><button type="button" class="btn btn-primary"><i class="fa fa-thumb-tack" aria-hidden="true"></i>Guardar</button></div>'
							+'<div class="text-left segundo"><h5><i class="fa fa-user-circle" aria-hidden="true"></i>'
							+data[i].username+' #'
							+data[i].hashtag+'<button type="button" class="btn btn-default" data-dismiss="modal">Leerlo</button></h5></div><h4 class="text-justify">'
							+data[i].description
							+'</h4></div></div></div></div>');
} //aqui temrina el primer for de arreglo de 20 imagenes para luego hacer el scroll window.
$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	      for (var i=0; i<40; i++){
		console.log(data[i].title);
	$('.pint').append('<div class="pinter_rest col-md-12" type="button" data-toggle="modal" data-target="#myModal'
							+data[i].id+'"><img class="img-responsive img-rounded" src="dist/img/'
							+data[i].image_url+'"><p class="cont_img"><i class="fa fa-thumb-tack" aria-hidden="true"></i>36,6k <i class="fa fa-check" aria-hidden="true"></i> 6</p><h4>'
							+data[i].title+'</h4><h5>'
							+data[i].description+'</h5><p><i class="fa fa-user-circle" aria-hidden="true"></i>'
							+data[i].username+' #'
							+data[i].hashtag+'</p></div>'
							+'<div class="modal fade" id="myModal'
							+data[i].id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
							+'<div class="modal-dialog" role="document"><div class="modal-content">'
							+'<div class="modal-header"><div class="headermodal"><i class="fa fa-upload" aria-hidden="true"></i><i class="fa fa-check" aria-hidden="true">'
							+'</i><i class="fa fa-ellipsis-h" aria-hidden="true"></i><button type="button" class="btn btn-primary"><i class="fa fa-thumb-tack" aria-hidden="true"></i>Guardar</button></div>'
							+'<h4 class="modal-title" id="myModalLabel'
							+data[i].id+'">'
							+data[i].title+'</h4></div>'
							+'<div class="modal-body"><img class="img-responsive img-rounded center-block" src="dist/img/'
							+data[i].image_url+'"></div><div class="modal-footer">'
							+'<div class="headermodal"><i class="fa fa-upload" aria-hidden="true"></i><i class="fa fa-check" aria-hidden="true"></i>'
							+'<i class="fa fa-ellipsis-h" aria-hidden="true"></i><button type="button" class="btn btn-primary"><i class="fa fa-thumb-tack" aria-hidden="true"></i>Guardar</button></div>'
							+'<div class="text-left segundo"><h5><i class="fa fa-user-circle" aria-hidden="true"></i>'
							+data[i].username+' #'
							+data[i].hashtag+'<button type="button" class="btn btn-default" data-dismiss="modal">Leerlo</button></h5></div><h4 class="text-justify">'
							+data[i].description
							+'</h4></div></div></div></div>');
							contador ++;



}
			

			}
			i = 50;
	   });


});


//HACE QUE EN EL MODAL TODAS LAS IMAGENES SEAN LAS MISMAS DE LA IMAGEN 1 NO ME SIRVE.
/*$(document).ready(function(){
		
		for(var i =0; i <20 ; i++){
		
		var img=$('<img>').attr('src', 'dist/img/' + data[i].image_url);
		
		var cards=$('<div class="cards" data-toggle="modal" data-target="#myModal">');

		var titulo=$('<h4>').attr('class', "title");
		titulo.text(data[i].title);
		var descripcion=$('<p>').attr('class','descripciones');
		descripcion.text(data[i].description);
		var divUsuario=$('<div>').attr('class', 'user_uno');
		var user=$('<p class="user">').append('<p><i class="fa fa-user-circle" aria-hidden="true"></i>'
					+data[i].username + '</p>');
		console.log(data[i].username);
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

console.log(data[i].username);

}	

	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	       for(i ; i < 40 ; i++){
			var img=$('<img>').attr('src', 'dist/img/' + data[i].image_url);
			var cards=$('<div class="cards">');
			var titulo=$('<h4>').attr('class', "title");
			titulo.text(data[i].title);
			var descripcion=$('<p>').attr('class','descripciones');
				descripcion.text(data[i].description);
			var divUsuario=$('<p>').attr('class', 'user_uno');
			var user=$('<p>').text(data[i].username);
			var hashtag = $('<p class="hashtag">').text('#' + data[i].hashtag);
			var hashtag = $('<p>').text('#' + data[i].hashtag);
			divUsuario.append(user);
			divUsuario.append(hashtag);

			cards.append(img);
			cards.append(titulo);
			cards.append(descripcion);
			cards.append(divUsuario);
			
//$('.pint_info').append(cards);
			}
			i = 50;
	   }
});

});
*/