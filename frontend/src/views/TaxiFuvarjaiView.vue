
<template>
  <div>
    <h1>Taxi fuvarjai</h1>
  </div>
</template>

<script>
import { useUrlStore } from "@/stores/url";
import { useLoginStore } from "@/stores/login";
const storeUrl = useUrlStore();
const storeLogin = useLoginStore();
export default {
  data() {
    return {
      storeUrl,
      storeLogin,
      listWithTrips: [],
    };
  },
  mounted(){
    this.getListCarsWithTrips()
  },
  methods: {
    async getListCarsWithTrips(){
      const url = storeUrl.urlCarsWithTrips;
      const config = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.storeLogin.accessToken}`,
        },
      };

      const response = await fetch(url, config);
      const data = await response.json();
      this.listWithTrips = data.data;
      console.log("list", this.listWithTrips);
    },
  }
}


</script>


<style>
</style>
