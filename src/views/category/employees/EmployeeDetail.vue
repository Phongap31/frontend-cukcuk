<template>
  <div>
    <div
      class="m-dialog dialog-detail"
      title="Thông tin nhân viên"
      :class="{ isHide: ishide }"
    >
      <div class="dialog-modal"></div>
      <div class="dialog-content">
        <div class="dialog-header">
          <div class="dialog-header-title" v-if="addOrupdateChild == 'Add'">
            Thêm nhân viên
          </div>
          <div class="dialog-header-title" v-if="addOrupdateChild == 'Update'">
            Cập nhật nhân viên
          </div>
          <div class="dialog-header-close">
            <button v-on:click="btnCancelOnClick">x</button>
          </div>
        </div>
        <br />
        <div class="dialog-body">
          <div class="group-button-detail" v-if="addOrupdateChild == 'Add'">
            <button>
              <div class="m-btn-icon icon-add"></div>
              <div>Thêm</div>
            </button>
            <button disabled>
              <div class="m-btn-icon icon-update"></div>
              <div>Sửa</div>
            </button>
            <button @click="btnAddOnClick()">
              <div class="btnadd-icon"></div>
              <div>Cất</div>
            </button>
            <button disabled>
              <div class="m-btn-icon icon-remove"></div>
              <div>Xóa</div>
            </button>
            <button disabled>
              <div class="btnadd-icon"></div>
              <div>Hoãn</div>
            </button>
            <button @click="focusInputTest()">
              <div class="btnadd-icon"></div>
              <div>Giúp</div>
            </button>
            <button>
              <div class="btnadd-icon"></div>
              <div>Đóng</div>
            </button>
          </div>
          <div class="group-button-detail" v-if="addOrupdateChild == 'Update'">
            <button>
              <div class="m-btn-icon icon-add"></div>
              <div>Thêm</div>
            </button>
            <button @click="btnAddOnClick()">
              <div class="m-btn-icon icon-update"></div>
              <div>Sửa</div>
            </button>
            <button disabled>
              <div class="btnadd-icon"></div>
              <div>Cất</div>
            </button>
            <button>
              <div class="m-btn-icon icon-remove"></div>
              <div>Xóa</div>
            </button>
            <button disabled>
              <div class="btnadd-icon"></div>
              <div>Hoãn</div>
            </button>
            <button>
              <div class="btnadd-icon"></div>
              <div>Giúp</div>
            </button>
            <button>
              <div class="btnadd-icon"></div>
              <div>Đóng</div>
            </button>
          </div>
          <div class="tabs-detail">
            <button class="tablinks" id="openDefault">Thông tin chung</button>
          </div>
          <div class="info-detail">
            <div class="infor-detail-input">
              <table class="table-detail">
                <!-- mã nhân vien -->
                <tr>
                  <td>Mã nhân viên <span class="input-require">(*)</span></td>
                  <td>
                    <span class="warning-text"></span>
                    <input
                    :disabled="!isdisable"
                      ref="nameInput"
                      v-model="newEmployee.employeeCode"
                      class="form-input"
                      :class="{isWarning: isWarning}"
                      type="text"
                      id="input-employeeCode"
                    />
                    <span></span>
                  </td>
                  <td colspan="3">
                    <div class="noteforUser">
                      Dùng làm tên đăng nhập vào hệ thống, có thể sử dụng số
                      điện thoại hoặc email cho dễ nhớ.
                    </div>
                  </td>
                </tr>

                <!-- emali -->
                <tr>
                  <td>Email</td>
                  <td colspan="2" class="col-50">
                    <input
                      v-model="newEmployee.email"
                      class="form-input"
                      type="email"
                    />
                  </td>
                  <!-- <td colspan="2">555555</td> -->
                </tr>

                <!-- số điện thoại -->
                <tr>
                  <td>Số điện thoại</td>
                  <td colspan="2" class="col-50">
                    <input
                      v-model="newEmployee.phoneNumber"
                      class="form-input"
                      type="text"
                    />
                  </td>
                </tr>

                <!-- tên nhân viên -->
                <tr>
                  <td>Tên nhân viên <span class="input-require">(*)</span></td>
                  <td colspan="4">
                    <span class="warning-text"></span>
                    <input
                      v-model="newEmployee.fullName"
                      class="form-input"
                      :class="{isWarning: isWarning}"
                      type="text"
                    />
                  </td>
                </tr>

                <!-- giới tính -->
                <tr>
                  <td>Giới tính</td>
                  <td class="col-50">
                    <select
                      v-model="newEmployee.gender"
                      class="form-input"
                      name=""
                      id=""
                    >
                      <option value="1">Nam</option>
                      <option value="0">Nữ</option>
                    </select>
                  </td>
                  <td class="col-text">Ngày sinh</td>
                  <td>
                    <input
                      v-model="newEmployee.dateOfBirth"
                      class="form-input-date"
                      type="date"
                      name=""
                      id=""
                    />
                  </td>
                </tr>

                <!-- số CMND -->
                <tr>
                  <td>Số CMND</td>
                  <td class="col-50">
                    <input
                      v-model="newEmployee.identityCode"
                      class="form-input"
                      type="text"
                    />
                  </td>
                  <td class="col-text">Ngày cấp</td>
                  <td>
                    <input
                    class="form-input-date"
                      v-model="newEmployee.identityDate"
                      type="date"
                      name=""
                      id=""
                    />
                  </td>
                </tr>

                <!-- nơi cấp CMND -->
                <tr>
                  <td>Nơi cấp CMND</td>
                  <td colspan="4">
                    <input
                      v-model="newEmployee.identityPlace"
                      type="text"
                      class="form-input"
                    />
                  </td>
                </tr>

                <!-- phân quyền -->
                <tr>
                  <td>Phân quyền <span class="input-require">(*)</span></td>
                  <td colspan="1">
                    <span class="warning-text"></span>
                    <input v-model="newEmployee.ruleCode" :value="0" type="checkbox" :checked="0"/>Vai trò
                    quản trị hệ thống
                  </td>
                  <td colspan="2">
                    <input v-model="newEmployee.ruleCode" :value="1" type="checkbox" :checked="1" />Vai trò quản lý
                    chuỗi
                  </td>
                </tr>

                <!-- tình trạng công việc -->
                <tr>
                  <td>
                    Trạng thái làm việc <span class="input-require">(*)</span>
                  </td>
                  <td>
                    <span class="warning-text"></span>
                    <select
                      v-model="newEmployee.statusWork"
                      class="form-input"
                      :class="{isWarning: isWarning}"
                      name=""
                      id=""
                    >
                      <option value="0">Chính thức</option>
                      <option value="1">Thử việc</option>
                    </select>
                  </td>
                  <td colspan="2">
                    <input type="checkbox" name="" id="" />Cho phép làm việc
                    với phần mềm CukCuk
                  </td>
                </tr>

                <!-- mật khẩu -->
                <tr v-if="addOrupdateChild == 'Add'">
                  <td>
                    Mật khẩu truy cập <span class="input-require">(*)</span>
                  </td>
                  <td>
                    <input class="form-input" :class="{isWarning: isWarning}" type="password" name="" id="" />
                  </td>
                  <td class="col-text-password">
                    Xác nhận mật khẩu <span class="input-require">(*)</span>
                  </td>
                  <td>
                    <input class="form-input" :class="{isWarning: isWarning}" type="password" name="" id="" />
                  </td>
                </tr>

                <!-- lưu ý -->
                <tr>
                  <td></td>
                  <td class="text-note">
                    Mật khẩu phải có ít nhất 8 ký tự bao gồm cả chữ hoa, chữ
                    thường và chữ số.
                  </td>
                </tr>
                <tr v-if="addOrupdateChild == 'Update'">
                  <td></td>
                  <td colspan="2">
                    <input type="checkbox" name="" id=""> Thay đổi mật khẩu
                  </td>
                </tr>
              </table>
            </div>
            <div class="info-detail-avatar">
              <div class="avatar-img"></div>
              <div>Chỉ được upload file .jpg, .jpeg, .png, .gif.</div>
            </div>
          </div>
        </div>
        <div class="dialog-footer">
          <!-- <button
            id="btnCancel"
            class="m-btn m-btn-default m-btn-cancel"
            v-on:click="btnCancelOnClick"
          >
            Hủy
          </button>
          <button
            id="btnSave"
            @click="btnAddOnClick()"
            class="m-btn m-btn-default"
          >
            <i class="far fa-save"></i><span class="btn-text">Lưu</span>
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  props: ["ishide","isdisable", "infoUpdateOrAddChild", "addOrupdateChild"],
  // mounted: function () {
  //   this.focusInputTest();
  // },
  methods: {
    //test focus input
    focusInputTest() {
      this.$refs.nameInput.focus();
      this.$refs.nameInput.value = "NV0003";
    },
    // focusInput() {
    //   this.$refs.email.$el.focus();
    // },

    // hàm thực hiện thêm mới và sửa thông tin nhân viên
    async btnAddOnClick() {
      if(this.validateInputNotNull.errorMsg != ''){
        this.isWarning = true;
      }
      else{
        this.isWarning = false;
        if (this.addOrupdateChild == "Add") {
          axios({
            method: "POST",
            url: "https://localhost:44306/api/v1/Employees",
            data: this.newEmployee,
          })
            .then((res) => console.log(res.status))
            .catch((e) => console.log(e));
          console.log(this.newEmployee);
          // location.reload();
        } else if (this.addOrupdateChild == "Update") {
          await axios
            .put(
              `https://localhost:44306/api/v1/Employees/${this.newEmployee.employeeID}`,
              this.newEmployee
            )
            .then((res) => console.log(res.status))
            .catch((e) => console.log(e));
          location.reload();
        }
      }
    },
    
    

    btnCancelOnClick() {
      this.$emit("ishideToParent", true);
    },

    //Định dạng lại ngày tháng hiển thị trên form
    formatDateDefalut(date) {
      return moment(String(date)).format("YYYY-MM-DD");
    },
   
  },

  computed: {
    //Kiểm tra bắt buộc nhập
    validateInputNotNull(){
      let errorMsg = '';
      if(this.newEmployee.employeeCode == ""){
        errorMsg = 'ban chua nhap ma nv';
        return errorMsg;
      }
      return errorMsg;
    }
  },
  
  //Cập nhật khi có bất kỳ thay đổi nào
  updated() {
    this.newEmployee = this.infoUpdateOrAddChild;
    this.newEmployee.dateOfBirth = this.formatDateDefalut(
      this.newEmployee.dateOfBirth
    );
    this.newEmployee.identityDate = this.formatDateDefalut(
      this.newEmployee.identityDate
    );
    this.newEmployee.gender = parseInt(this.newEmployee.gender);
    this.newEmployee.statusWork = parseInt(this.newEmployee.statusWork);
  },
  data() {
    return {
      newEmployee: Object,
      dialog: false,
      display: "none",
      isWarning: false,
    };
  },
};
</script>
<style scoped>
.isHide {
  display: none;
}
.m-dialog {
  z-index: 999;
}

.dialog-header {
  position: relative;
  height: 40px;
  line-height: 60px;
  padding-left: 5px;
  padding-bottom: 13px;
  display: flex;
  font-size: 20px;
  background-color: #0087be;
}
.dialog-header-title {
  color: #fff;
  left: 0;
}

.dialog-header-close {
  position: absolute;
  right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  top: 10px;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 24px;
  line-height: 24px;
  color: #0087be;
}
.dialog-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.4;
}

.dialog-content {
  position: fixed;
  border-radius: 5px;
  border: 5px solid #0087be;
  border-top: none;
  width: 950px;
  background-color: #fff;
  left: calc(50% - 475px);
  top: calc(50% - 310px);
}
.dialog-body {
  padding: 0 16px 16px 16px;
}
.dialog-footer {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #e9ebee;
  border-radius: 0 0 5px 5px;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 24px;
  box-sizing: border-box;
}
.el-avatar-employee {
  padding-top: 16px;
  padding-right: 16px;
}
.el-avatar-note {
  font-size: 12px;
}
.el-avatar-employee .el-avatar {
  border: 1px solid #ccc;
  width: 160px;
  height: 160px;
  margin: 0 auto;
  border-radius: 50%;
  cursor: pointer;
  background-image: url(/content/img/default-avatar.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.currency-for-input {
  position: absolute;
  right: 40px;
  line-height: 40px;
  font-style: italic;
}
.group-button-detail {
  background-color: #f5f5f5;
  overflow: hidden;
  display: flex;
}
.group-button-detail button {
  border: none;
  display: flex;
}
.tabs-detail {
  background-color: #f5f5f5;
  overflow: hidden;
  margin: 10px 0;
}
.tabs-detail button {
  background-color: #fff;
  float: left;
  border-bottom: none;
  border-top: 3px solid #0072bc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  outline: none;
  cursor: pointer;
  padding: 8px 12px;
  transition: 0.3s;
  font-size: 15px;
  color: #0072bc;
}
.infor-detail-input label {
  display: flex;
}
.table-detail {
  width: 100%;
  /* border: 1px solid #ccc; */
}
.input-require {
  color: red;
}
.table-detail tr {
  margin-top: 20px;
}
.table-detail td:nth-child(1) {
  width: 20%;
}
.form-input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 4px 0;
  background-color: #ddd;
}
.col-text{
  padding-left: 50px;
}
.col-text-password{
  text-align: center;
}
.text-note{
  font-size: 13px;
  font-style: italic;
}
.form-input-date{
  width: 100%;
  border: 1px solid #ccc;
  padding: 3px 0;
  background-color: #ddd;
}
.form-input:focus {
  outline: 1px solid #0087be;
}
.table-detail .col-50 {
  width: 32%;
}
.table-detail input[type="checkbox"]{
  margin: 2px 6px 2px 0;
  border: 1px solid #ccc;
  padding: 3px 0;
}
.info-detail {
  display: flex;
}
.noteforUser {
  font-size: 12px;
  padding: 0 5px;
  font-style: italic;
}
.info-detail-avatar{
  align-items: center;
  text-align: center;
  font-size: 13px;
  margin-left: 10px;
}
.avatar-img {
  width: 110px;
  height: 100px;
  background-image: url("../../../assets/Resource1/content/images/avatardefault.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.isWarning{
  outline: 1px solid red;
}
.isDisable{
  background-color: #0087be;
}
</style>