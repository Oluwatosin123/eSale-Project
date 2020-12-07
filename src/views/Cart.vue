<template>
  <div class="cart">
    <!-- <Navbar></Navbar> -->
    <div class="container-fluid">
      <div id="app">
        <div class="header">
          <div class="container">
            <div class="title">
              <!-- <img src="public/logo.png"> -->
              <h1>Welcome To Your Cart</h1>
            </div>
            <form class="search-bar" v-on:submit.prevent="onSubmit">
              <input
                type="text"
                placeholder="Search for Varieties"
                required
                v-model="search"
              />
              <input type="submit" value="search" class="btn" />
            </form>
          </div>
        </div>
        <div class="main container">
          <div class="products">
            <div
              v-for="product in products"
              class="product"
              v-bind:key="product.id"
            >
              <div>
                <div class="product-img">
                  <img v-bind:src="product.productImage" alt="" />
                </div>
              </div>
              <div class="product-title">
                <h4>{{ product.title }}</h4>
                <button v-on:click="addToCart(product)" class="add-to-cart btn">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div class="cart">
            
            <i class="fas fa-shopping-cart"></i>
            <ul>
              <li v-for="item in cart" v-bind:key="item.id" class="cart-item">
                <div class="item-title">
                  {{ item.title }}
                </div>
                <span class="item-qty">
                  {{ item.price | currency }} * {{ item.qty }}
                </span>
                <button class="btn" v-on:click="inc(item)">+</button>
                <button class="btn" v-on:click="dec(item)">-</button>
              </li>
            </ul>
            <div v-if="cart.length">
              <div class="cart-total">Total: {{ total | currency }}</div>
            </div>
            <div v-else class="empty-cart">Your cart is Empty</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
// import Navbar from "@/components/Navbar.vue";

export default {
  name: "Cart",
  components: {
    // Navbar,
  },

  data() {
    return {
      total: 1,
      products: [
        {
          title: "Valentino Amigo",
          id: 1,
          price: 10000,
          productImage: "../assets/images/red shoe.jpeg",
        },
        {
          title: "Men Shirt",
          id: 2,
          price: 3000,
          productImage: "../assets/images/red shoe.jpeg",
        },
        {
          title: "Guchi Dinner Gown",
          id: 3,
          price: 6000,
          productImage: "../assets/images/red shoe.jpeg",
        },
        {
          title: "Grey Browny",
          id: 4,
          price: 22000,
          productImage: "../assets/images/red shoe.jpeg",
        },
      ],
      cart: [],
      search: "",
    };
  },

  methods: {
    addToCart: function (product) {
      this.total += product.price;

      let found = false;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id) {
          this.cart[i].qty++;
          found = true;
        }
      }
      if (!found) {
        // add qty to cart logic
        this.cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          qty: 1,
          productImage: product.productImage,
        });
      }
    },
    // methods for increamentation
    inc: function (item) {
      item.qty++;
      this.total += item.price;
    },

    // methods for decreamentation
    dec: function (item) {
      item.qty--;
      this.total -= item.price;
      // this condition helps the decrementaion not to go to -1,-2 etc also remove item from cart when it zero
      if (item.qty <= 0) {
        let i = this.cart.indexOf(item);
        this.cart.splice(i, 1);
      }
    },

    // the form submit function
    onSubmit: function () {
      //calling our Api
      //create path variable
      // Style 1 let path = "/search?q=".concat(this.search);
      //   let path = `/search?q=${this.search}`; //Style 2
      //   this.$http.get(path).then(function (response) {
      //     this.products = response.body;
      //   });
    },
  },

  // filter Methods to cut currency into 2 digits
  filters: {
    currency: function (price) {
      // return "$".concat(price.toFixed(2))
      return `${"#"}${price.toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
/* Generic styling */

button:focus,
input:focus {
  outline: none;
}

.btn {
  background-color: #108bea;
  border-radius: 2px;
  color: white;
  user-select: none;
  border: none;
  cursor: pointer;
  opacity: 1;
}

.btn:hover {
  background-color: #0f6cb2;
}

.btn:active {
  opacity: 0.8;
}

/* Sections */

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  background-color: #f3f3f3;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
}

.header {
  padding: 1rem 2rem;
  flex: 0;
  background-color: #157ed2;
}

.main {
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex: 1;
  padding-bottom: 2rem;
}

.products {
  flex: 3;
}

.cart {
  flex: 2;
}

.container {
  margin: 0 auto;
  width: 1100px;
}

/* Header */

.title {
  overflow: auto;
  display: flex;
  justify-content: center;
  padding: 2rem 0 1rem;
}

.title > img {
  display: block;
  height: 50px;
}

.title > h1 {
  font-size: 2.5rem;
  margin: 0;
  color: white;
  margin: -9px 0 0 6px;
  text-align: center;
  font-family: "Baloo Bhaina", cursive;
}

.search-bar {
  flex: 0 0 auto;
  border-left: 0;
  border-right: 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}

.search-bar > input {
  border-radius: 2px;
}

.search-bar > input[type="text"] {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  flex-basis: 50%;
  max-width: 450px;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #e9e9e9;
  border-right: none;
}

.search-bar > input[type="submit"] {
  background-color: #fdd922;
  color: #333333;
  padding: 1rem;
  border: 1px solid #e0bc27;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  user-select: none;
}

.header p {
  font-size: 0.8em;
  color: white;
  text-align: center;
}

/* Products */

.product-list {
  margin-right: 1rem;
}

.search-results {
  padding-bottom: 1rem;
}

.search-results .search-term {
  font-style: italic;
}

.product {
  padding: 2rem;
  overflow: auto;
  margin: 1rem 1rem 2rem 0;
  display: flex;
  flex-flow: row nowrap;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}

.product > div:last-child {
  margin-left: 2rem;
}

.product-image {
  max-height: 150px;
  width: 250px;
  overflow: hidden;
  border: 1px solid #e9e9e9;
  border-radius: 2px;
}

.product-image > img {
  width: 100%;
  display: block;
}

.product-title {
  margin-top: 0;
  font-weight: normal;
  text-transform: capitalize;
}

.product .product-price {
  color: #0f6cb2;
  font-size: 1.3rem;
}

.product .add-to-cart {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  transition: all linear 0.2s;
}

#product-list-bottom {
  text-align: center;
  color: #aaaaaa;
  font-size: 0.85rem;
}

/* Cart */

.cart {
  margin-left: 1rem;
  padding-left: 1rem;
}

/* .cart .empty-cart {
} */

.cart > h2 {
  margin-top: 0;
  font-size: 1.25rem;
  text-transform: uppercase;
  padding-bottom: 1rem;
  border-bottom: 2px solid black;
}

.cart ul {
  width: 100%;
  font-size: 0.9rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart ul li {
  vertical-align: top;
  padding: 0 1rem 1rem 0;
}

.cart ul li:not(:first-child) {
  vertical-align: top;
  padding-top: 1rem;
}

.cart ul .cart-item {
  border-bottom: 1px solid rgb(222, 222, 222);
}

.cart ul .cart-item .item-title {
  padding-bottom: 0.5rem;
  text-transform: capitalize;
}

.cart ul .cart-item .item-price {
  font-weight: bold;
  padding-top: 0.5rem;
}

.cart ul .cart-item .item-qty {
  margin-right: 1rem;
  font-weight: bold;
}

.cart ul .cart-item:last-child {
  border-bottom: none;
}

.cart ul .cart-item button {
  margin-right: 3px;
}

.cart-total {
  margin-top: 2rem;
  text-align: right;
}

.cart-total > div {
  width: 50%;
  font-weight: bold;
  font-size: 1.25rem;
  color: #333;
  border-top: 1px solid #333;
  display: inline-block;
  padding: 0.5rem 0 0 0.25rem;
}

@media (max-width: 1200px) {
  .container {
    margin: 0 2rem;
    width: auto;
  }
}

@media (max-width: 950px) {
  .header {
    padding: 1rem 0;
  }

  .main {
    padding: 2rem 0;
    flex-direction: column;
  }

  .products {
    flex: auto;
  }

  .cart {
    flex: auto;
  }

  .container {
    margin: 0 1rem;
    width: auto;
  }

  .title {
    padding-bottom: 2rem;
  }

  .title > img {
    height: 40px;
  }

  .title > h1 {
    font-size: 2rem;
    margin: -7px 0 0 4px;
  }

  .search-bar > input[type="text"] {
    flex-basis: 100%;
  }

  .search-results {
    padding-bottom: 2rem;
  }

  .product {
    padding: 1rem;
    flex-flow: column;
    max-width: 450px;
    margin: 0 auto 2rem;
  }

  .product > div:last-child {
    margin: 1rem 0 0;
  }

  .product .product-price {
    display: inline-block;
    /* float: left; */
    margin: 0;
  }

  /* .product .add-to-cart {
    display: inline-block;
    float: right;
  } */

  .product-image {
    width: auto;
  }

  .cart {
    margin: 0;
    padding: 2rem 0 0 0;
  }

  #product-list-bottom > div {
    display: none;
  }
}
</style>