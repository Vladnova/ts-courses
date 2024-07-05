// мій код
var Card = /** @class */ (function () {
    function Card() {
        this.products = [];
    }
    Card.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Card.prototype.delProduct = function (id) {
        this.products = this.products.filter(function (product) { return product.id !== id; });
    };
    Card.prototype.costProducts = function () {
        var cost = 0;
        this.products.forEach(function (product) { return (cost += product.price); });
        return cost;
    };
    Card.prototype.addAddress = function (address) {
        this.delivery = address;
    };
    Card.prototype.checkout = function () {
        if (this.products.length && this.delivery.date) {
            return { success: true };
        }
        else {
            throw new Error("There is no product in the cart or no delivery address");
        }
    };
    return Card;
}());
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var Delivery = /** @class */ (function () {
    function Delivery(dateOrShopId, address) {
        if (address !== undefined && dateOrShopId instanceof Date) {
            this.date = dateOrShopId;
            this.address = address;
        }
        else if (typeof dateOrShopId === "number") {
            this.date = new Date();
            this.shopId = dateOrShopId;
        }
        else {
            throw new Error("Invalid constructor arguments");
        }
    }
    return Delivery;
}());
var card1 = new Card();
card1.addProduct(new Product(1, 'phone', 2500));
card1.addProduct(new Product(2, 'ipad', 4500));
card1.addProduct(new Product(3, 'macbook', 8500));
card1.addProduct(new Product(4, 'xiaomi', 3500));
card1.addAddress(new Delivery(new Date(), 'pravdy 85'));
console.log(card1.delivery);
console.log(card1.checkout());
card1.delProduct(1);
console.log(card1.costProducts());
// код викладача
var Product1 = /** @class */ (function () {
    function Product1(id, name, price) {
    }
    return Product1;
}());
var Delivery1 = /** @class */ (function () {
    function Delivery1(date) {
    }
    return Delivery1;
}());
