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
        <div class="misa-support"></div>
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

<style scoped>
.header {
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #0087be !important;
  color: #fff;
}

/*logo-site*/
.header .logo-site {
  display: flex;
  align-items: center;
  align-self: center;
  margin: 0 10px;
}
.header .header-right {
  position: absolute;
  display: flex;
  right: 1em;
  align-items: center;
}
.misa-support {
  width: 60px;
  height: 50px;
  background-image: url("../../assets/Resource1/content/images/ic_support.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 0;
  margin-right: 10px;
  display: block;
  cursor: pointer;
}
.misa-support:hover{
  background-color: #005082;
}
/* .notification{
  width: 30px;
  height: 30px;
  background-image: url("../../assets/Resource1/content/images/SMS_Menu.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 0;
  margin-right: 10px;
  display: block;
  cursor: pointer;
} */

.header .logo-site .logo-box {
  cursor: pointer;
  display: flex;
}

.header .logo-box .toggle-icon {
  width: 25px;
  height: 25px;
  background-image: url("../../assets/Resource1/content/images/icon-left-header.png");
  background-size: contain;
  background-position: center;
  align-items: center;
  margin-top: 10px;
}

.header .logo-box .cukcuk-logo {
  width: 150px;
  height: 40px;
  background-image: url("../../assets/Resource1/content/images/logo-text.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 5px;
}
/*end */
/*Location option */
.header .location-option select {
  padding: 0.65em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: #005082 !important;
  color: #fff;
  margin-left: 10px;
}

/*language option */
.header .language-option {
  padding: 1em;
  font-size: 16px;
}

.header .language-option select {
  padding: 0.65em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: #005082 !important;
  color: #fff;
}
/*end */

/*other option */
.header .other-option {
  display: flex;
}
/*end */

/*Account infor */
.header .account-info {
  /* position: absolute; */
  /* right: 1em; */
  display: flex;
  align-items: center;
}

.header .account-info .account-avatar {
  width: 30px;
  height: 30px;
  background-image: url("../../assets/Resource1/content/images/EmployeeImage.png");
  background-color: #fff;
  background-position: center;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-size: contain;
}

.header .account-info .account-name {
  font-size: 15px;
  padding: 0 0.5em;
}

.header .account-info .account-option {
  width: 20px;
  height: 20px;
  background-image: url("../../assets/Resource1/content/images/button/default-small-arrow.png");
  background-size: contain;
  cursor: pointer;
}
/*end */

/*Dropdown */
.dropdown {
  position: relative;
  display: inline-block;
  font-size: 14px;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #e9d8f4;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ccc;
}

.dropdown:hover .dropdown-content {
  display: inline-block;
  /* margin-top: 5px; */
}
</style>