<template>
  <div class="searchbar mr-5 w-100 mt-2">
    <form class="search-bar" v-on:submit.prevent="onSubmit">
      <input
        type="text"
        placeholder="Search for Varieties" class="font-italic font-weight-normal"
        required
        v-model="search"
      />
      <input type="submit" value="search" class="btn" />
    </form>
  
  </div>
</template>

<script>
export default {
  name: "searchbar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
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
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  user-select: none;
}
</style>
