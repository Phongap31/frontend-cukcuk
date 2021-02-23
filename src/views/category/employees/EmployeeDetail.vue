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
            <button @click="addNewEmployee()">
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
            <button @click="btnCancelOnClick()">
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
            <button @click="btnDeleteOnClick()">
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
            <button @click="btnCancelOnClick()">
              <div class="btnadd-icon"></div>
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
                      :disabled="!isdisable"
                      ref="employeeCode"
                      v-model="newEmployee.employeeCode"
                      class="form-input"
                      :class="{ isWarning: errorMessage }"
                      type="text"
                      id="input-employeeCode"
                      @input="inputHandle()"
                      
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
                      :class="{ isWarning: errorMessage }"
                      type="text"
                      @input="inputHandle()"
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
                    <input
                     
                      :value="0"
                      type="checkbox"
                      :checked="0"
                    />Vai trò quản trị hệ thống
                  </td>
                  <td colspan="2">
                    <input

                      :value="1"
                      type="checkbox"
                      :checked="1"
                    />Vai trò quản lý chuỗi
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
                      id=""
                    >
                      <option value="0">Chính thức</option>
                      <option value="1">Thử việc</option>
                    </select>
                  </td>
                  <td colspan="2">
                    <input type="checkbox" name="" id="" />Cho phép làm việc với
                    phần mềm CukCuk
                  </td>
                </tr>

                <!-- mật khẩu -->
                <tr v-if="addOrupdateChild == 'Add'">
                  <td>
                    Mật khẩu truy cập <span class="input-require">(*)</span>
                  </td>
                  <td>
                    <input
                      class="form-input"
                      :class="{ isWarning: isWarning }"
                      type="password"
                      name=""
                      id=""
                    />
                  </td>
                  <td class="col-text-password">
                    Xác nhận mật khẩu <span class="input-require">(*)</span>
                  </td>
                  <td>
                    <input
                      class="form-input"
                      :class="{ isWarning: isWarning }"
                      type="password"
                      name=""
                      id=""
                    />
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
              <div>Chỉ được upload file .jpg, .jpeg, .png, .gif.</div>
            </div>
          </div>
        </div>
        <div class="dialog-footer"></div>
      </div>
    </div>
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
      if (this.errorMessage) {
        return ;
      } else {
        // this.isWarning = false;
        if (this.addOrupdateChild == "Add") {
          const response = await axios({
            method: "POST",
            url: "https://localhost:44306/api/v1/Employees",
            data: this.newEmployee,
          })
            .then((res) => console.log(res.status))
            .catch((e) => console.log(e));
          console.log(response);
          if(response.data == 1){
            alert('Them moi thanh cong!!!')
            location.reload();
          }
          else{
            alert("res.userMsg")
          }
          
        } else if (this.addOrupdateChild == "Update") {
          await axios
            .put(
              `https://localhost:44306/api/v1/Employees/${this.newEmployee.employeeID}`,
              this.newEmployee
            )
            .then((res) => console.log(res.status))
            .catch((e) => console.log(e));
            alert('Sua thanh cong!!!')
          location.reload();
        }
      }
    },
    
    addNewEmployee(){
      this.newEmployee = this.employee;
      console.log(this.newEmployee);
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

    inputHandle(){
      this.validated = true;
    }
  },

  // mounted: function(){
  //   this.addNewEmployee();
  // },

  computed: {
    //Kiểm tra bắt buộc nhập
    // validateInputNotNull() {
    //   let errorMsg = "";
    //   if (this.newEmployee.employeeCode.length < 0) {
    //     errorMsg = "ban chua nhap ma nv";
    //     return errorMsg;
    //   }
    //   return errorMsg;
    // },
    errorMessage(){
      if(!this.validated){
        return '';
      }
      if (this.newEmployee.employeeCode == "" ) {
        return  "ban chua nhap ma nv";
      }
      else return '';
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
      ishideDelete: true,
      validated: false,
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
.errorMsg{
  color: red;
}
</style>