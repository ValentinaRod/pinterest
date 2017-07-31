$(document).ready(){
	for(var i =0; i <20 ; i++){
		var img=$('<img>').attr('src', 'dis/img' + data[i].image_url);
		var cards=$('<div class="cards" data-toggle="modal" data-target="#myModal">');
		var titulo=$('<h4>').attr('class', "title");
		titulo.text(data[i].title);
		var descripcion=$('<p>').atrr('class','descripciones');
		descripcion.text(data[i].description);
		var divUsuario=$('<div>').atrr('class', 'user');
		var user=$('<p class="user">').append('<p><i class="fa fa-user-circle" aria-hidden="true"></i>'+data[i].username + '</p>')










	}	
}