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

<style scoped>
.side-bar {
  position: relative;
  float: left;
  width: 250px;
  height: 100vh;
  background-color: #0087be !important;
  border-right: 1px solid #bbbbbb;
}

.side-bar .navbar-content {
  width: 100%;
}

.side-bar .navbar-content .nav-item {
  display: flex;
  cursor: pointer;
  color: rgb(212, 202, 202);
  text-decoration: none;
  align-items: center;
  padding: 12px 0 12px 10px;
  font-size: 14px;
  border-top: 1px solid #016087!important;
}

.side-bar .navbar-content .nav-item:hover {
  background-color: #005082;
  color: #fff;
}

.side-bar .navbar-content .nav-item:focus {
  background-color: #005082;
  color: #fff;
}

.side-bar .navbar-content .nav-item:active {
  background-color: #005082;
}

.nav-item .nav-item-text{
  align-self: center;
  /* margin-top: 2px; */
}

.nav-item .nav-item-icon {
  width: 20px;
  height: 20px;
  /* align-self: center; */
  margin-right: 5px;
  /* background-size: contain; */
}

.navbar-item-category {
  background-image: url("../../assets/Resource/icon/setting.png");
  background-size: contain;
  background-position: center;
}

/*Dropdown category */
.category-dropdown {
  position: relative;
  display: inline-block;
  font-size: 14px;
}

.category-dropdown-content {
  display: none;
  position: absolute;
  left: 0;
  background-color: #e9d8f4;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.category-dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.category-dropdown-content a:hover {
  background-color: #ccc;
}

.category-dropdown:hover .category-dropdown-content {
  display: inline-block;
  /* margin-top: 5px; */
}
</style>
    
