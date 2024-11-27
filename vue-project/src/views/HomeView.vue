<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
<div class="container">
  <div class="row mt-4">
    <div class="col-md-5">
      <select class="form-select" aria-label="Default select example">
  <option selected>Select category</option>
  <option value="1">Vegetables</option>
  <option value="2">Fruit</option>
  <option value="3">Berry</option>
</select>
    </div>
    <div class="col-md-5">
      <input type="text"  class="form-control" value="Search by name" aria-label="readonly input example">
    </div>
    <div class="col-md-2">
      <button type="button" class="btn btn-outline-danger">Reset</button>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://fruit-berries.ru/images/cms/thumbs/139268ff0cf7ad0d47954b4d590e8c88be1335dd/pitahaya-belaya_483_auto_jpg_5_92.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Dragon Fruit</h5>
        <p class="card-text">$35</p>
        <p class="card-text">Fruits</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://swlife.ru/image/cache/catalog/product/f0/62/f062081a60d7824373b26c953cea1028-0x0.webp" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Coconut</h5>
        <p class="card-text">$20</p>
        <p class="card-text">Fruits</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://static.insales-cdn.com/images/products/1/7963/507805467/%D0%BC%D0%B0%D1%80%D0%B0%D0%BA.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Passion fruit</h5>
        <p class="card-text">$25</p>
        <p class="card-text">Fruits</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://kart.co.il/wp-content/uploads/2014/03/tomato_04.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Tomato</h5>
        <p class="card-text">$15</p>
        <p class="card-text">Vegetables</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://media.vprok.ru/products/x700/u4/z6/aklv3a5d35shrcyhsayw5fcnufbhz6u4.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Сucumber</h5>
        <p class="card-text">$10</p>
        <p class="card-text">Vegetables</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://media.istockphoto.com/id/157430678/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D1%80%D0%B8-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%84%D0%B5%D0%BB%D1%8C.jpg?s=612x612&w=0&k=20&c=kt6PwHFRHGwUDg1XwbNXgOykEgFfn2CH7Dk5WCpGOyc=" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Potato</h5>
        <p class="card-text">$7</p>
        <p class="card-text">Vegetables</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://resources.cdn-kaspi.kz/img/m/p/hae/hae/64848634839070.jpg?format=gallery-medium" alt="...">
      <div class="card-body">
        <h5 class="card-title">Watermelon</h5>
        <p class="card-text">$10</p>
        <p class="card-text">Berry</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://berry-valley.ru/wp-content/uploads/2021/03/strawbery-scaled.jpg" alt="...">
      <div class="card-body">
        <h5 class="card-title">Strawberry</h5>
        <p class="card-text">$20</p>
        <p class="card-text">Berry</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://www.ayzdorov.ru/images/Travi/golybika.jpg" alt="...">
      <div class="card-body">
        <h5 class="card-title">Blueberry</h5>
        <p class="card-text">$15</p>
        <p class="card-text">Berry</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  
</div>
</div>
</div>
</template>
