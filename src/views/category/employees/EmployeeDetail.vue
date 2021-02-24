<template>
  <div>
    <div
      class="m-dialog dialog-detail"
      title="Thông tin nhân viên"
      :class="{ isHide: ishideFocus }"
    >
      <div class="dialog-modal"></div>
      <div class="dialog-content">
        <div class="dialog-header">
          <div class="dialog-header-title">Nhân viên</div>
          <div class="dialog-header-close">
            <button v-on:click="btnCancelOnClick">x</button>
          </div>
        </div>
        <div class="dialog-body">
          <!-- Nếu thực thi thêm mới -->
          <div class="group-button-detail" v-if="addOrupdateChild == 'Add'">
            <button @click="addNewEmployee()">
              <div class="m-btn-icon icon-add"></div>
              <div>Thêm</div>
            </button>
            <button disabled>
              <div class="m-btn-icon icon-update"></div>
              <div>Sửa</div>
            </button>
            <button @click="btnAddOnClick()">
              <div class="btnadd-icon icon-import"></div>
              <div>Cất</div>
            </button>
            <button>
              <div class="m-btn-icon icon-remove"></div>
              <div>Xóa</div>
            </button>
            <button>
              <div class="btnadd-icon"></div>
              <div>Hoãn</div>
            </button>
            <div class="spacing-button" disabled>|</div>
            <button @click="focusInputTest()">
              <div class="btnadd-icon icon-help"></div>
              <div>Giúp</div>
            </button>
            <button @click="btnCancelOnClick()">
              <div class="btnadd-icon icon-exclamation"></div>
              <div>Đóng</div>
            </button>
          </div>
          <!-- Nếu thực thi sửa -->
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
              <div class="m-btn-icon icon-import"></div>
              <div>Cất</div>
            </button>
            <button @click="btnDeleteOnClick()">
              <div class="m-btn-icon icon-remove"></div>
              <div>Xóa</div>
            </button>
            <button disabled>
              <div class="m-btn-icon"></div>
              <div>Hoãn</div>
            </button>
            <div class="spacing-button" disabled>|</div>
            <button>
              <div class="m-btn-icon icon-help"></div>
              <div>Giúp</div>
            </button>
            <button @click="btnCancelOnClick()">
              <div class="m-btn-icon icon-exclamation"></div>
              <div>Đóng</div>
            </button>
          </div>
          <Delete
            :ishideForDeleteChild="ishideDelete"
            :infoDeleteChild="newEmployee"
            v-on:ishideDeleteParent="changeIsHideDelete"
          />
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
                      style="width: calc(100% - 2px)"
                      :disabled="!isdisable"
                      ref="employeeCode"
                      v-model="newEmployee.employeeCode"
                      class="form-input"
                      :class="{ isWarning: errorMessage }"
                      type="text"
                      id="employeeCode"
                    />
                    <!-- <span class="errorMsg">{{errorMessage}}</span> -->
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
                      ref="email"
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
                      style="width: calc(100% - 2px)"
                      v-model="newEmployee.fullName"
                      class="form-input"
                      type="text"
                      @input="inputHandle()"
                      ref="fullName"
                      id="fullname"
                    />
                    <!-- <span class="errorMsg">{{errorMessage}}</span> -->
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
                      style="width: calc(100% - 2px)"
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
                      style="width: calc(100% - 2px)"
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
                    <input
                      class="checkbox-detail"
                      :value="0"
                      type="checkbox"
                      :checked="0"
                    /> 
                    <span class="text-checkbox">Vai trò quản trị hệ thống</span>
                  </td>
                  <td colspan="2">
                    <input
                      class="checkbox-detail"
                      :value="1"
                      type="checkbox"
                      :checked="1"
                    />
                    <span class="text-checkbox">Vai trò quản lý chuỗi</span>
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
                      :class="{ isWarning: isWarning }"
                      name=""
                      id="statusWork"
                    >
                    <option value="-1"></option>
                      <option value="0">Chính thức</option>
                      <option value="1">Thử việc</option>
                    </select>
                  </td>
                  <td v-if="addOrupdateChild == 'Add'" colspan="2">
                    <input
                      class="checkbox-detail"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span class="text-checkbox">Cho phép làm việc với phần mềm CukCuk</span> 
                  </td>
                </tr>

                <!-- mật khẩu -->
                <tr v-if="addOrupdateChild == 'Add'">
                  <td>
                    Mật khẩu truy cập <span class="input-require">(*)</span>
                  </td>
                  <td>
                    <input
                    v-model="newEmployee.password"
                      style="width: calc(100% - 2px)"
                      class="form-input"
                      type="password"
                      name=""
                      id="password"
                    />
                  </td>
                  <!-- <td class="col-text-password">
                    Xác nhận mật khẩu <span class="input-require">(*)</span>
                  </td>
                  <td>
                    <input
                      style="width: calc(100% - 1px)"
                      class="form-input"
                      :class="{ isWarning: isWarning }"
                      type="password"
                      name=""
                      id=""
                    />
                  </td> -->
                </tr>

                <!-- lưu ý -->
                <tr>
                  <td></td>
                  <td class="text-note">
                    Mật khẩu phải có ít nhất 8 ký tự bao gồm cả chữ hoa, chữ
                    thường và chữ số.
                  </td>
                </tr>
                <!-- <tr v-if="addOrupdateChild == 'Update'">
                  <td></td>
                  <td colspan="2">
                    <input type="checkbox" name="" id="" /> Thay đổi mật khẩu
                  </td>
                </tr> -->
              </table>
            </div>
            <div class="info-detail-avatar">
              <div class="avatar-img"></div>
              <div class="feature-text">Chỉ được upload file</div>
              <div><b>.jpg, .jpeg, .png, .gif.</b></div>
            </div>
          </div>
        </div>
        <div class="dialog-footer"></div>
      </div>
    </div>
    <!-- <notifications group="foo" /> -->
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import Delete from "./CheckToClose";
export default {
  components: {
    Delete,
  },
  props: ["ishide", "isdisable", "infoUpdateOrAddChild", "addOrupdateChild"],
  methods: {
    // hàm thực hiện thêm mới và sửa thông tin nhân viên
    async btnAddOnClick() {
      //Chekc mã nhân viên không được bỏ trống
      if (this.newEmployee.employeeCode == "") {
        alert("Trường mã nhân viên không được bỏ trống");
        return;
      }
      //Check tên nhân viên không được bỏ trống
      if (this.newEmployee.fullName == "") {
        alert("Trường tên nhân viên không được bỏ trống");
        return;
        // this.hasNull = true;
        // document.getElementById("fullname").classList.add("isWarning");
      }

      //Check trạng thái làm việc không được bỏ trống
      if (this.newEmployee.statusWork == "-1") {
        alert('Trường trạng thái làm việc không được bỏ trống');
        return;
      }
      //Check mật khẩu không được bỏ trống
      if (this.newEmployee.password == "") {
        alert('Trường mật khẩu không được bỏ trống');
        return;
      }

      //Thực hiện API thêm mới
      if (this.addOrupdateChild == "Add") {
        console.log(this.newEmployee);
        await axios({
          method: "POST",
          url: "https://localhost:44306/api/v1/Employees",
          data: this.newEmployee,
        })
          .then(() => {
            alert("Thêm thành công");
            location.reload();
          })
          .catch((e) => {
            if (e.response.status == 400) {
              alert("Gặp lỗi: " + e.response.data.userMsg);
            //   this.$notify({
            //   group: 'foo',
            //   title: 'Important message',
            //   text: 'Hello user! This is a notification!'
            // });
            }
          });
        //Thực hiện API Sửa nhân viên
      } else if (this.addOrupdateChild == "Update") {
        await axios
          .put(
            `https://localhost:44306/api/v1/Employees/${this.newEmployee.employeeID}`,
            this.newEmployee
          )
          .then((res) => console.log(res))
          .catch((e) => console.log(e));
        alert("Sua thanh cong!!!");
        location.reload();
      }
    },

    //mở popup delete
    btnDeleteOnClick() {
      this.ishideDelete = false;
    },

    //Đóng popup delete
    changeIsHideDelete(value) {
      this.ishideDelete = value;
    },

    //Đóng popup detail info
    btnCancelOnClick() {
      this.$emit("ishideToParent", true);
    },

    //Định dạng lại ngày tháng hiển thị trên form
    formatDateDefalut(date) {
      return moment(String(date)).format("YYYY-MM-DD");
    },

    //hàm thực hiện phím tắt (Crtl + q)
    keyboardFormDetail(event){
      console.log(event);
      if(event.which === 81 && event.ctrlKey == true){
        this.btnAddOnClick();
        event.preventDefault()
      }
    }
  },

  computed: {
    //Kiểm tra bắt buộc nhập
    errorMessage() {
      if (!this.validated) {
        return "";
      }
      if (this.newEmployee.employeeCode == "") {
        return "ban chua nhap ma nv";
      } else return "";
    },
  },

  created(){
    document.onkeydown = function(e){
      e = e || window.event;
      if(e.ctrlKey){
        var c = e.which || e.keyCode;
        switch(c){
          //block Ctrl+S
          case 83: e.preventDefault();
          e.stopPropagation();
          break;
          case 40: e.preventDefault();
          e.stopPropagation();
          break;
        }
      }
      if(e.altKey){
        e.preventDefault();
        e.stopPropagation();
      }
    }
    window.addEventListener('keyup', this.keyboardFormDetail)
  },

  //Cập nhật khi có bất kỳ thay đổi nào
  updated() {
    this.newEmployee = this.infoUpdateOrAddChild;
    this.ishideFocus = this.ishide;
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
      ishideDelete: true,
      validated: false,
      ishideFocus: true,
      hasNull: false,
      employee: {
        employeeCode: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        gender: parseInt(0),
        identityCode: "",
        identityPlace: "",
        identityDate: null,
        dateOfBirth: null,
        ruleCode: parseInt(0),
        statusWork: parseInt(1),
        password: "",
        confirmPassword: "",
        createdDate: null,
        modifiedDate: null,
      },
    };
  },
};
</script>
<style scoped>
.isHide {
  display: none;
}
.isWarning {
  outline: 1px solid red;
}
.isDisable {
  background-color: #0087be;
}
.errorMsg {
  color: red;
}
</style>
