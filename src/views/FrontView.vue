<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand me-0 fw-bold"
        to="/">
        Jesse Store
      </router-link>
      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div  class="collapse navbar-collapse justify-content-center"
            style="margin-left:-106px"
            id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link"
              to="/">
              首頁
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              to="/products">
              產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              to="/cart">
              購物車
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              to="/admin">
              後台
            </router-link>
          </li>
        </ul>
      </div><!-- collapse -->
    </div><!-- container-fluid -->
  </nav>
  <div class="text-center">
    <router-view></router-view>
    <!-- ProductsView -->
  </div>
</template>
