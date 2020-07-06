import 'whatwg-fetch'
let data = [{ "_id" : "5f0253fd647d78b1b64e22a9", "price" : 40.99, "title" : "Blink XT2 Outdoor", "imgUrl" : "https://images-na.ssl-images-amazon.com/images/I/51cNf8VwK3L._SL1000_.jpg" },
{ "_id" : "5f0253fd647d78b1b64e22aa", "price" : 39.99, "title" : "Ring Video Doorbell", "imgUrl" : "https://images-na.ssl-images-amazon.com/images/I/51pGjo0OhJL._SL1000_.jpg" },
{ "_id" : "5f0253fd647d78b1b64e22ab", "price" : 50, "title" : "Blink Mini", "imgUrl" : "https://images-na.ssl-images-amazon.com/images/I/61YnlcFA-jL._SL1000_.jpg" },
{ "_id" : "5f0253fd647d78b1b64e22ad", "price" : 199.29, "title" : "Amazon eero Beacon", "imgUrl" : "https://images-na.ssl-images-amazon.com/images/I/41oLyfuAtZL._SL1000_.jpg" },
{ "_id" : "5f0253fd647d78b1b64e22ae", "price" : 34.99, "title" : "Amazon Smart Plug", "imgUrl" : "https://images-na.ssl-images-amazon.com/images/I/51yy4dHf5VL._AC_SL1000_.jpg" },
{ "_id" : "5f028f84647d78b1b64e22af", "price" : 130.5, "title" : "Ring Stick Up Cam", "imgUrl" : "https://images-na.ssl-images-amazon.com/images/I/51M%2BW1l2ShL._SL1000_.jpg" }]
class HttpService {
    getProducts = () => {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3004/product')
            .then(response => {
                // resolve(response.json());
                resolve(data);
            })
            
        });
        return promise;
    }
}

export default HttpService;
