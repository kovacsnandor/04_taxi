
<template>
  <div class="my-width-login p-5">
    <h1>Login</h1>
    <!-- user name -->
    <div class="mb-3">
      <label for="userName" class="form-label">User név:</label>
      <input
        type="text"
        class="form-control"
        id="userName"
        v-model="storeLogin.userName"
      />
    </div>

    <!-- password -->
    <div class="mb-3">
      <label for="pasword" class="form-label">Jelszó:</label>
      <input
        type="text"
        class="form-control"
        id="pasword"
        v-model="storeLogin.password"
      />
    </div>

    <button type="button" class="btn btn-primary" @click="login()">
      Login
    </button>

    <div v-if="loginErrorMessage" class="alert alert-danger" role="alert">
      {{ loginErrorMessage }}
    </div>
  </div>
</template>

<script>
import { useUrlStore } from "@/stores/url";
const storeUrl = useUrlStore();
import { useLoginStore } from "@/stores/login";
import router from "../router";
const storeLogin = useLoginStore();

export default {
  data() {
    return {
      storeLogin,
      storeUrl,
      loginErrorMessage: null,
    };
  },
  methods: {
    async login() {
      const url = this.storeUrl.urlLogin;
      const user = {
        userName: this.storeLogin.userName,
        password: this.storeLogin.password,
      };
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      try {
        // this.errorMessage = null;
        const response = await fetch(url, config);
        if (!response.ok) {
          this.loginErrorMessageShow("Server error 1");
          return;
        }
        const data = await response.json();
        if (data.success) {
          //sikeres bejelentkezés
          this.storeLogin.loginSuccess = data.success;
          this.storeLogin.accessToken = data.data.accessToken;
          this.storeLogin.refreshToken = data.data.refreshToken;
          this.storeLogin.userId = data.data.userId;
          this.storeLogin.number = data.data.number;
          this.storeLogin.loginSuccess = data.success;
          this.storeLogin.accessTime = parseInt(data.data.accessTime);
          router.push("/");
          // this.timer();
          // this.getTodos();
        } else {
          //sikertelen bejelenkezés
          this.loginErrorMessageShow("Hibás usernév vagy jelszó");
        }
      } catch (error) {
        // this.errorMessage = `Server error`;
        this.loginErrorMessageShow("Server error 2");
      }
    },
    loginErrorMessageShow(message) {
      this.loginErrorMessage = message;
      setTimeout(() => {
        this.loginErrorMessage = null;
      }, 3000);
    },

  },
};
</script>


<style>
.my-width-login {
  max-width: 500px;
}
</style>
