var express = require('express');
var app = express();
var bodyPaser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')


var db = mongoose.connect('mongodb://localhost/swag-shop');

var Product = require('./model/product');
var WishList = require('./model/wishList');
// const { response } = require('express');
// const { replaceOne } = require('./model/product');

app.use(cors())
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended:false}));

app.post('/product', function(request, response){
    var product = new Product();
    product.title = request.body.title;
    product.price = request.body.price;
    product.likes = request.body.likes;
    product.save(function(err, savedProduct){
        if (err) {
            response.status(500).send({error:"COuld not save product" });
        }else {
            // console.log(savedProduct);
            response.status(200).send(savedProduct);
        }
    });
});

app.get('/product', function(request, response){
    Product.find({}, function(err, products){
        if (err){
            response.status(500).send({error:"COuld not fetch product" });
        }else {
            response.status(200).send(products);
        }
    });
});

app.get('/wishlist', function(request, response){
    WishList.find({}).populate({path:'products', model:'Product'}).exec(function(err, wishList){
        if (err){
            response.status(500).send({err:"Could not fetch wishList"});
        }else {
            response.status(200).send(wishList);
        }
    });
});

app.post('/wishlist', function(request, response){
    var wishList = new WishList();
    wishList.title = request.body.title;

    wishList.save(function(err, newWishList){
        if (err){
            response.status(500).send({error:"COuld not create wish list!"});
        }else {
            response.status(200).send(newWishList);
        }
    });
});

app.put('/wishlist/product/add', function(request, response){
    Product.find({_id:request.body.productId}, function(err, product){
        if (err){
            response.status(500).send({err:"Could not add item to the wishList"});
        }else {
            WishList.update({_id:request.body.wishListId}, {$addToSet: {products: product[0]._id}}, function(err, wishList){
                if (err){
                    response.status(500).send({err:"Could not add item to the wishList"});
                }else{
                    
                    response.send(wishList);
                }
            });
        }
    });
});

app.listen(3004, function(){
    console.log("Swap Shop API running on port 3004...")
});