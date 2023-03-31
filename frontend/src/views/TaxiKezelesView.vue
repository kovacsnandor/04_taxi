
<template>
  <div>
    <h1>Taxi kezelés</h1>

    <!--#region táblázat -->
    <table class="table table-bordered w-auto">
      <thead>
        <tr>
          <th>
            <!-- post -->
            <button type="button btn-sm" class="btn btn-outline-success btn-sm">
              Új taxi
            </button>
          </th>
          <th>Autó márka</th>
          <th>Rendszám</th>
          <th>Óradíj Ft/óra</th>
          <th>Sofőr</th>
          <th>Forgamon kívül</th>
        </tr>

      </thead>
      <tbody>
        <tr>
          <td>
            <!-- törlés delete -->
            <button type="button" class="btn btn-outline-danger btn-sm">
              <i class="bi bi-trash3-fill"></i>
            </button>
            <!-- put -->
            <button type="button" class="btn btn-outline-primary btn-sm ms-2">
              <i class="bi bi-pencil-fill"></i>
            </button>

          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <!--#endregion táblázat -->
  </div>
</template>

<script>
import * as bootstrap from "bootstrap";
import { useUrlStore } from "@/stores/url";
import { useLoginStore } from "@/stores/login";
const storeUrl = useUrlStore();
const storeLogin = useLoginStore();

class Car {
  constructor(
    id = 0,
    name = null,
    licenceNumber = null,
    hourlyRate = null,
    outOfTraffic = false,
    driverId = null
  ) {
    this.id = id;
    this.name = name;
    this.licenceNumber = licenceNumber;
    this.hourlyRate = hourlyRate;
    this.outOfTraffic = outOfTraffic;
    this.driverId = driverId;
  }
}
export default {
  data() {
    return {
      storeUrl,
      storeLogin,
      carsWithDrivers: [],
      editableCar: new Car(),
      modal: null,
      form: null,
      state: "view",
      currentId: null,
      driversAbc: [],
    };
  },
  mounted(){
    this.getCarsWithDrivers()
  },
  methods: {
    async getCarsWithDrivers(){
      let url = this.storeUrl.urlCarsWithDrivers;
      const config = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.storeLogin.accessToken}`,
        },
      };
      const response = await fetch(url, config);
      const data = await response.json();
      this.carsWithDrivers = data.data;
    }
  }
}
</script>


<style>
</style>
