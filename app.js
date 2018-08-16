var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/web-codigo-facilito-nodejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

app.post("/menu",function(solicitud,respuesta){
	console.log(solicitud.body);

	if(solicitud.body.password == "123"){
		var data = {
			title: solicitud.body.title,
			description: solicitud.body.description,
			imageUrl: "/images/taco.png",
			pricing: solicitud.body.pricing
		};

		var product = new Product(data);
		
		product.save(function(err){
			console.log(product);
			respuesta.render("index");
		});
	}else{
		respuesta.render("menu/new");
	}
});

app.get("/menu/new", function(solicitud,respuesta){
	respuesta.render("menu/new");
});

app.listen(8082);