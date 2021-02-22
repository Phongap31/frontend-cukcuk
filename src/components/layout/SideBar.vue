<template>
  <div class="side-bar" v-if="open">
    <div class="navbar-content">
        <div class="nav-item" >
          <div class="nav-item-icon navbar-item-category"></div>
          <div class="category-dropdown">
          <div class="nav-item-text">Danh mục</div>
            <div class="category-dropdown-content">
                <router-link to="/category/list">
                <div>Danh mục nhân viên</div>
                </router-link>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="nav-item-icon navbar-item-category"></div>
          <div class="nav-item-text">Sản phẩm</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['open']
};
</script>


    
