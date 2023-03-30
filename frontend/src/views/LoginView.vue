
<template>
  <div class="my-width-login p-5">
    <h1>Login</h1>
    <!-- user name -->
    <div class="mb-3">
      <label for="userName" class="form-label">User név:</label>
      <input type="text" class="form-control" id="userName" 
        v-model="storeLogin.userName"
      />
    </div>

    <!-- password -->
    <div class="mb-3">
      <label for="pasword" class="form-label">Jelszó:</label>
      <input type="text" class="form-control" id="pasword"
      v-model="storeLogin.password"
      />
    </div>

    <button type="button" class="btn btn-primary"
      @click="login()"
    >
      Login</button>
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
    };
  },
  methods:{
    async login(){
      const url=storeUrl.urlLogin
      const user = {
        userName: storeLogin.userName,
        password: storeLogin.password
      }
      const body = JSON.stringify(user);
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      };
      const response = await fetch(url,config);
      const data = await response.json();
      if (data.success) {
          //sikeres bejelentkezés
          this.storeLogin.loginSuccess = data.success;
          this.storeLogin.accessToken = data.data.accessToken;
          this.storeLogin.refreshToken = data.data.refreshToken;
          this.storeLogin.userId = data.data.userId;
          this.storeLogin.number = data.data.number;
          this.storeLogin.accessTime = parseInt(data.data.accessTime);
      } else{
        //sikertelen bejelentkezés

      }

    },
  }
};
</script>


<style>
.my-width-login {
  max-width: 500px;
}
</style>
