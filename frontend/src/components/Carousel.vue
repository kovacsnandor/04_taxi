<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide position-relative">

      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://picsum.photos/id/237/1200/200" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/238/1200/200" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/239/1200/200" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

      <div class="position-absolute top-50 start-50 translate-middle">
        <h1><span class="my-bg-cim">Címfelirat</span></h1>
      </div>
      
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style>
.my-bg-cim{
  background-color: rgba(255,255,255,0.3);
  border-radius: 10px;
  padding: 5px 15px;
  font-weight: normal;
  font-size: 3rem;
}
</style>