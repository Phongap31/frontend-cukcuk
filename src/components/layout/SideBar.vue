<template>
  <div class="side-bar" v-if="open">
    <div class="navbar-content">
      <div class="nav-item">
        <div class="nav-item-icon navbar-item-dashboard"></div>
        <div class="nav-item-text">Tổng quan</div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon navbar-item-report"></div>
        <div class="nav-item-text">Báo cáo</div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon navbar-item-order"></div>
        <div class="nav-item-text">Mua hàng</div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon navbar-item-stock"></div>
        <div class="nav-item-text">Kho</div>
      </div>
      <div class="nav-item">
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
        <div class="nav-item-icon navbar-item-cash"></div>
        <div class="nav-item-text">Quỹ tiền mặt</div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon navbar-item-bank"></div>
        <div class="nav-item-text">Quỹ tiền gửi</div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon navbar-item-cost"></div>
        <div class="nav-item-text">Chi phí</div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon navbar-item-sale"></div>
        <div class="nav-item-text">Khuyến mãi</div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon navbar-item-menu"></div>
        <div class="nav-item-text">Thực đơn</div>
      </div>

      <div class="nav-item">
        <div class="nav-item-icon navbar-item-setting"></div>
        <div class="nav-item-text">Cài đặt hệ thống</div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon navbar-item-help"></div>
        <div class="nav-item-text">Trợ giúp</div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon navbar-item-5foot"></div>
        <div class="nav-item-text">5Foot</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["open"],
};
</script>


    
