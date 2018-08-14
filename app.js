var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/web-codigo-facilito-nodejs');

var productScheme= {
	title:String,
	description:String,
	imageUrl:String,
	pricing:Number
};

var Product = mongoose.model("Product",productScheme);

app.set("view engine","pug");
app.use(express.static("public"));

app.get("/",function(req,res){
	/*
	var data = {
		title: "Producto 1",
		description: "Descripcion del primero",
		imageUrl: "/images/taco.png",
		pricing: 50
	};

	var product = new Product(data);
	
	product.save(function(err){
		console.log(product)
	});
*/
	res.render("index");
});

app.get("/menu/new", function(solicitud,respuesta){
	respuesta.render("menu/new");
});

app.listen(8082);