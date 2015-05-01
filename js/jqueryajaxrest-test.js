// node-restful apiurl forming cheat sheet
// [baugarten/node-restful · GitHub](https://github.com/baugarten/node-restful)

$(document).ready(function () {

    $("#Result").click(function () {


    }); //Click Function Ends

}); //Ready Function Ends

var apiProductUrls = {};

apiProductUrls = {
	getURL: "value",
	putURL: "value",
	postURL: "value",
	deleteURL: "value"
};


var rF = {};
var restFramework = {};

rF = restFramework = {

	getProducts: function () {
		
		
	},
	getProductsById: function (id) {
		var Product;
		
		return Product; //Optional
	},
	postProduct: function (productData) {
		var result = true;
			
		return result; //Optional
	},
	putProduct: function (productData) {
		var result = true;
		
		return result; //Optional
	},
	deleteProduct: function (id) {
		var result = true;
		
		return result; //Optional
	},

};


//Get Max ID and set it to input id field or you can set it to hidden field
------------------------------------------------------------------------------
$.getJSON('http://localhost:3000/api/products?sort=-_id&limit=1&select=_id', function (maxid) {
	var newMaxId = maxid[0]._id + 1;
	console.log(newMaxId); //Success
	$identity.val(newMaxId) //Set the new id input field to new max id
});

// Get Products and append to list
------------------------------------------------------------------------------
var $products = $('#products');

$.ajax({
	url: 'http://localhost:3000/api/products/',
	type: 'GET',
	// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
	// data: {param1: 'value1'},
})
.done(function(products) {
	// console.log(products); //Success
	$.each(products, function(i, product) {
		// console.log(product.name);
		$products.append('<li>'+product.name+'</li>');
	});
	console.log("success ajax");
})
.fail(function() {
	console.log("error ajax");
})
.always(function() {
	console.log("complete ajax");
});


// Get Product By Id and append to list
------------------------------------------------------------------------------
var $products = $('#products');
var id = 3;

$.ajax({
	url: 'http://localhost:3000/api/products/'+id,
	type: 'GET',
	// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
	// data: {param1: 'value1'},
})
.done(function(product) {
	// console.log(data); //Success
	console.log(product.name); //Success
	
	if (product != undefined && product != "")
		$products.append('<li>'+product.name+'</li>');

	console.log("success ajax");
})
.fail(function() {
	console.log("error ajax");
})
.always(function() {
	console.log("complete ajax");
});


// Get Product By Id : short version
------------------------------------------------------------------------------
$.getJSON('http://localhost:3000/api/products/1',
	function (product) { 
		console.log(product); //Success
		console.log(product.name); //Success
		console.log(product.desc); //Success
		console.log(product.price); //Success
		console.log(JSON.stringify(product)); //Success
});

// Get Product : short version
------------------------------------------------------------------------------
$.getJSON('http://localhost:3000/api/products', function (products) {
		console.log(products); //Success
		console.log(JSON.stringify(products)); //Success

		$.each(products, function(i, product) {
			$products.append('<li>'+product._id+' : '+product.name+'</li>');
	});
});


// Add or Insert Product : POST
------------------------------------------------------------------------------
// On Success append to list 
// Get Max _id with this query "db.products.find().sort({_id: -1}).limit(1)	 

//For POST
var $identity = $('#identity');
var $name     = $('#name');
var $desc     = $('#desc');
var $price    = $('#price');

$('#addProduct').on('click', function() {

	//Note : keys should match mongodb column names and productSchema specified in Node 
	//Please perform strong data validations and display
	var product = {
		"_id": $identity.val(),
		"name": $name.val(),
		"desc": $desc.val(),
		"price": $price.val(),
	};

	$.ajax({
		url: 'http://localhost:3000/api/products',
		type: 'POST',
		// dataType: 'json',
		data: product,
	})
	.done(function(newProduct) {
		console.log(newProduct.name); //Success
		
		if (newProduct != undefined && newProduct != "")
			$products.append('<li>'+newProduct.name+'</li>');

		console.log("success ajax");
	})
	.fail(function() {
		console.log("error : bad json format");
	})
	.always(function() {
		console.log("complete");
	});
	
});

// Update Product : PUT
------------------------------------------------------------------------------
//NOTE: The response to PUT will always be the old json value that was replaced.

//For POST PUT : Insert, Update
var $identity = $('#identity');
var $name     = $('#name');
var $desc     = $('#desc');
var $price    = $('#price');

$('#updateProduct').on('click', function() {

	//Note : keys should match mongodb column names and productSchema specified in Node 
	//Please perform strong data validations and display
	var product = {
		"_id": $identity.val(),
		"name": $name.val(),
		"desc": $desc.val(),
		"price": $price.val(),
	};

	$.ajax({
		url: 'http://localhost:3000/api/products/'+ $identity.val(),
		type: 'PUT',
		// dataType: 'json',
		data: product,
	})
	.done(function(newProduct) {
		console.log(newProduct.name); //NOTE: The response to PUT will be the old json value that was replaced so no use
		console.log("success updating ajax");
	})
	.fail(function() {
		console.log("error : bad json format");
	})
	.always(function() {
		console.log("complete");
	});
	
});

------------------------------------------------------------------------------
//For Delete
var $deleteIdentity = $('#deleteIdentity');

$('#deleteProduct').on('click', function() {

	alert('Product with id : '+ $deleteIdentity.val()+' will be deleted!');

	$.ajax({
		url: 'http://localhost:3000/api/products/'+ $deleteIdentity.val(),
		type: 'DELETE',
		// dataType: 'json',
	})
	.done(function() {
		console.log("success delete ajax");
	})
	.fail(function() {
		console.log("error : incorrect delete id");
		alert('Product with id : '+ $deleteIdentity.val()+' was not found :P !');
	})
	.always(function() {
		console.log("complete");
	});
	
});


//POST Examples
//Required to send user login From Data 
------------------------------------------------------------------------------
https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens
http://api.jquery.com/jQuery.post/

$.post( "test.php", { name: "John", time: "2pm" } );
$.post( "test.php", $( "#testform" ).serialize() )

http://www.infotuts.com/send-html-form-data-json-via-ajax/
https://github.com/marioizquierdo/jquery.serializeJSON
$('#my-profile').serializeJSON();



------------------------------------------------------------------------------
http://stackoverflow.com/questions/18746040/how-to-include-header-in-ajax-request

$.ajax({
        type: 'DELETE',
        // must set api key
        url: 'https://www.googleapis.com/youtube/v3/videos?id='+ thisUniqueID +'&key=api_key_here',
		beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer refresh_token_here');},

        success: function() {
        alert('your video has been deleted');
        },
        error: function() {
        alert('error processing your requst');
        }
    }); 

http://stackoverflow.com/questions/22379171/how-pass-google-access-token-when-posting-xml
$.ajax({
    type: "POST",
    headers: {
        Authorization: "Bearer " + localStorage.access_token
    },
    url: url,
    data: {},
    contentType: "application/json"
})
.done(function(response) {
   // snip
})
.fail(function(error) {
    //snip
})

jQuery AJAX Calls can also be made like this 
We can also pass it in as a URL parameter by going to: 
http://localhost:8080/api/users?token=yourtokenvaluehereforjwt
