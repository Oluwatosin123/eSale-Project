<template>
  <div class="products">
    <div class="container products pt-5">
      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <div class="row h-100">
        <div class="col-6 col-md-4">
          <!-- Empty space -->
        </div>
        <div
          class="col-6 col-md-4 justify-content-center align-items-center text-right"
        >
          <h3>Products Page</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Laboriosam reprehenderit molestias sed modi ea.
          </p>
        </div>

        <div class="col-6 col-md-4">
          <img src="../assets/images/deliveries.svg" alt="" class="img-fluid" />
        </div>
      </div>

      <div class="row pt-5">
        <div class="col-6 col-md-4">
          <!-- Empty space -->
        </div>

        <div class="col-6 col-md-4">
          <div class="form-group">
            <input
              type="text"
              placeholder="Product Name"
              v-model="product.name"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              placeholder="price"
              v-model="product.price"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <button class="btn btn-primary" @click="saveData">Save Data</button>
          </div>
        </div>

        <div class="col-6 col-md-4">
          <h3>Product List</h3>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>price</th>
                  <th>Modify</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td>{{ product.data().name }}</td>
                  <td>{{ product.data().price }}</td>
                  <!-- we use the data() function to
                          have access to data in here this.products.push(doc.data()) -->
                  <td>
                    <button
                      @click="editProduct(product)"
                      class="btn btn-primary btn-sm mr-2"
                    >
                      Edit
                    </button>
                    <button
                      @click="deleteProduct(product.id)"
                      class="btn btn-danger btn-sm mr-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Area -->
    <!-- Modal -->
    <div
      class="modal fade"
      id="edit"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="edit">Edit Product</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <input
                type="text"
                placeholder="Product Name"
                v-model="product.name"
                class="form-control"
              />
            </div>

            <div class="form-group">
              <input
                type="text"
                placeholder="price"
                v-model="product.price"
                class="form-control"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              @click="updateProduct()"
              class="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Modal Area -->
  </div>
</template>

<script>
// import firebase from '../firebase'
import db from "../firebase";

export default {
  name: "Products",
  props: {
    msg: String,
  },

  data() {
    return {
      // this recieve all products info from firestore
      products: [],

      product: {
        name: null,
        price: null,
      },
      activeItem: null,
    };
  },

  methods: {
    //  This methods update/edit data from the firebase database
    updateProduct() {
      db.collection("products")
        .doc("this.activeItem")
        .update(this.product)
        // this.product.name
        .then(function () {
          console.log("Document successfully updated!");
        })
        .catch(function (error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },

    //  This methods edit data from the firebase database
    /* global $ */
    editProduct(product) {
      $("#edit").modal("show");
      this.product = product.data();
      this.activeItem = product.id;
      console.log(product, "incoming");
    },

    //  This methods delete data from the firebase database
    deleteProduct(doc) {
      alert(doc);
    },

    //  This methods read data in the firebase database
    readData() {
      db.collection("products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            this.products.push(doc);
          });
        });
    },

    //  This methods add data into the firebase database
    saveData() {
      db.collection("products")
        .add(this.product)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          // I have accsess to the reset function due to the ES6 arrow function
          this.readData();
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    },

    //  this methods reset or clear the form field
    // reset(){
    //   Object.assign(this.$data, this.$options.data.apply(this));
    // }
  },

  created() {
    this.readData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
