// мій код

class Card {
  products: Product[] = [];
  delivery: Delivery;

  addProduct(product: Product) {
    this.products.push(product);
  }

  delProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  costProducts() {
    let cost = 0;
    this.products.forEach((product) => (cost += product.price));
    return cost;
  }

  addAddress(address: Delivery) {
    this.delivery = address;
  }

  checkout() {
    if (this.products.length && this.delivery.date) {
      return { success: true };
    } else {
      throw new Error("There is no product in the cart or no delivery address");
    }
  }
}

class Product {
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class Delivery {
  date: Date;
  address?: string;
  shopId?: number;

  constructor(date: Date, address: string);
  constructor(id: number);
  constructor(dateOrShopId: Date | number, address?: string) {
    if (address !== undefined && dateOrShopId instanceof Date) {
      this.date = dateOrShopId;
      this.address = address;
    } else if (typeof dateOrShopId === "number") {
      this.date = new Date();
      this.shopId = dateOrShopId;
    } else {
      throw new Error("Invalid constructor arguments");
    }
  }
}

const card1 = new Card();

card1.addProduct(new Product(1, "phone", 2500));
card1.addProduct(new Product(2, "ipad", 4500));
card1.addProduct(new Product(3, "macbook", 8500));
card1.addProduct(new Product(4, "xiaomi", 3500));
card1.addAddress(new Delivery(new Date(), "pravdy 85"));
console.log(card1.delivery);
console.log(card1.checkout());
card1.delProduct(1);
console.log(card1.costProducts());
// код викладача

class Product1 {
  constructor(public id: number, public name: string, public price: number) {}
}

class Delivery1 {
  constructor(date: Date) {}
}

class HomeDelivery extends Delivery1 {
  constructor(date: Date, address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery1 {
  constructor(shopId: number) {
    super(new Date());
  }
}

type AddressOptions = ShopDelivery | HomeDelivery;
type Success = { success: boolean };

class Card1 {
  private products: Product1[] = [];
  private address: AddressOptions;

  addProduct(product: Product1): void {
    this.products.push(product);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(
      (product: Product1) => product.id !== productId
    );
  }

  costProducts(): number {
    return this.products
      .map((product: Product1) => product.price)
      .reduce((price1, price2) => price1 + price2);
  }

  checkout(): Success {
    if (!this.products.length) {
      throw new Error("Dosn`t products in card");
    }
    if (!this.address) {
      throw new Error("Address delivery not specified ");
    }
    return { success: true };
  }
}
