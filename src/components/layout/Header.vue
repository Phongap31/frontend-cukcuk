<template>
  <div class="header">
    <div class="logo-site">
      <div class="logo-box">
        <div class="toggle-icon" @click="$emit('togglenav')"></div>
        <div class="cukcuk-logo"></div>
      </div>
    </div>
    <div class="location-option">
      <select name="locations" id="locations">
        <option value="all">--Chuỗi cửa hàng--</option>
        <option value="nhahangbientay">Nhà hàng Biển Tây</option>
        <option value="nhahangbienbac">Nhà hàng Biển Bắc</option>
        <option value="nhahangbiennam">Nhà hàng Biển Nam</option>
      </select>
    </div>
    <div class="header-right">
      <div class="language-option">
        <select name="languages" id="languages">
          <option value="tiengviet">Tiếng Việt (Tiếng Việt)</option>
          <option value="nhahangbientay">Nhà hàng Biển Tây</option>
          <option value="nhahangbienbac">Nhà hàng Biển Bắc</option>
          <option value="nhahangbiennam">Nhà hàng Biển Nam</option>
        </select>
      </div>
      <div class="other-option">
        <div class="notification"></div>
        <div class="qa-option"></div>
        <div class="misa-support" title="Tổng đài hỗ trợ MISA"></div>
      </div>
      <div class="account-info">
        <div class="account-avatar"></div>
        <div class="account-name">Hồng Phong Lê</div>
        <div class="dropdown" style="float: right">
          <div class="account-option"></div>
          <div class="dropdown-content">
            <a href="#"><i class="fas fa-edit"></i> Thay đổi mật khẩu</a>
            <a href="#"><i class="fas fa-sign-out-alt"></i> Đăng xuất</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

