<template>
  <div class="side-bar" v-if="open">
    <div class="navbar-content">
        <div class="nav-item" >
          <div class="nav-item-icon navbar-item-category"></div>
          <div class="category-dropdown">
          <div class="nav-item-text">Danh Mục</div>
            <div class="category-dropdown-content">
                <router-link to="/category/list">
                <div>Nhân viên</div>
                </router-link>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="nav-item-icon navbar-item-category"></div>
          <div class="nav-item-text">Tổng Quan</div>
        </div>
        <div class="nav-item">
          <div class="nav-item-icon navbar-item-category"></div>
          <div class="nav-item-text">Báo Cáo</div>
        </div>
        <div class="nav-item">
          <div class="nav-item-icon navbar-item-category"></div>
          <div class="nav-item-text">Mua Hàng</div>
        </div>
        <div class="nav-item">
          <div class="nav-item-icon navbar-item-category"></div>
          <div class="nav-item-text">Sản Phẩm</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['open']
};
</script>


    
