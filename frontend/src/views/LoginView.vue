
<template>
  <div class="my-width-login p-5">
    <h1>Login</h1>
    <!-- user name -->
    <div class="mb-3">
      <label for="userName" class="form-label"
        >User név:</label
      >
      <input
        type="text"
        class="form-control"
        id="userName"
      />
    </div>

    <!-- password -->
    <div class="mb-3">
      <label for="pasword" class="form-label"
        >Jelszó:</label
      >
      <input
        type="text"
        class="form-control"
        id="pasword"
      />
    </div>

    <button type="button" class="btn btn-primary">Login</button>

  </div>
</template>

<script setup>
</script>


<style>
.my-width-login {
  max-width: 500px;
}
</style>
