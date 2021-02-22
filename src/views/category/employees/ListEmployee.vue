<template>
  <div class="container list-employee">
    <div class="header-content">
      <div class="header-content-left">
        <div class="title">Danh mục</div>
        <!-- <div class="sub-title"><span>></span> Nhân viên</div> -->
        <div class="filter-workstatus">
          <div>Lọc nhanh:</div>
          <select name="filter-workstatus" id="filter-workstatus">
            <option value="all">--Tất cả--</option>
            <option value="danglamviec">Đang làm việc</option>
            <option value="thuviec">Đang thử việc</option>
            <option value="chinhthuc">Chính thức</option>
            <option value="nghiviec">Nghỉ việc</option>
          </select>
        </div>
      </div>
      <div class="header-content-right">
        <div class="back-original">
          <button>Quay lại thiết lập ban đầu</button>
        </div>
        <div class="reply">
          <button>
            <div class="reply-icon"></div>
            <div>Phản hồi</div>
          </button>
        </div>
      </div>
    </div>
    <div class="content-table">
      <div class="button-group-option">
        <button @click="btnAddOnClick()">
          <div class="m-btn-icon icon-add"></div>
          <div>Thêm</div>
        </button>
        <button>
          <div class="m-btn-icon icon-duplicate"></div>
          <div>Nhân bản</div>
        </button>
        <button>
          <div class="m-btn-icon icon-view"></div>
          <div>Xem</div>
        </button>
        <button @click="rowOnClick(employees[indexForAction])">
          <div class="m-btn-icon icon-update"></div>
          <div>Sửa</div>
        </button>
        <button @click="removeOnClick(employees[indexForAction])">
          <div class="m-btn-icon icon-remove"></div>
          <div>Xóa</div>
        </button>
        <span>|</span>
        <button>
          <div class="m-btn-icon icon-import"></div>
          <div>Nạp</div>
        </button>
        <button>
          <div class="m-btn-icon icon-help"></div>
          <div>Giúp</div>
        </button>
      </div>
      <Delete :ishideForDeleteChild="ishideForDelete" :infoDeleteChild="infoDelete" v-on:ishideDeleteParent="changeIsHideDeleteToClose"/>
      <EmployeeDetail
        :ishide="ishideForAdd"
        :isdisable="isDisableForUpdate"
        :addOrupdateChild="addOrUpdateString"
        :infoUpdateOrAddChild="infoUpdateOrAdd"
        v-on:ishideToParent="changeIsHideToClose"
        @addNewEmployee="toAddNewEmployee"
        ref="input"
      />
      <table class="table-employee" cellpadding="6" cellspacing="0">
        <thead>
          <tr class="el-table__row">
            <th class="col-username">
              <div>Tên đăng nhập</div>
              <div class="filter-col">
                <button>*</button>
                <input type="text" />
              </div>
            </th>
            <th class="col-fullname">
              <div>Tên nhân viên</div>
              <div class="filter-col">
                <button>*</button>
                <input type="text" />
              </div>
            </th>
            <th class="col-phonenumber">
              <div>Số điện thoại</div>
              <div class="filter-col">
                <button>*</button>
                <input type="text" />
              </div>
            </th>
            <th class="col-dateofbirth">
              <div>Ngày sinh</div>
              <div class="filter-col">
                <button>*</button>
                <input type="text" />
              </div>
            </th>
            <th class="col-gender">
              <div>Giới tính</div>
              <select name="gender" id="gender">
                <option value=""></option>
                <option value="nam">nam</option>
                <option value="nu">nữ</option>
              </select>
            </th>
            <th class="col-workstatus">
              <div>Trạng thái làm việc</div>
              <select name="workstatus" id="workstatus">
                <option value=""></option>
                <option value="danglamviec">Chính thức</option>
                <option value="thuviec">Thử việc</option>
                <option value="nghiviec">Nghỉ việc</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody class="tbody-content">
          <tr
            @click="activeRow(index)"
            class="row-onfocus"
            :class="{isActive: !isActiveRow}"
            v-for="(employee, index) in employees"
            :key="index"
            @dblclick="rowOnClick(employee)"
          >
            <td>{{ employee.employeeCode }}</td>
            <td>{{ employee.fullName }}</td>
            <td>{{ employee.phoneNumber }}</td>
            <td>
              {{
                employee.dateOfBirth == null
                  ? ""
                  : formatDate(employee.dateOfBirth)
              }}
            </td>
            <td>
              {{
                employee.gender == 0 ? "Nữ" : employee.gender == 1 ? "Nam" : ""
              }}
            </td>
            <td>
              {{
                employee.statusWork == 0
                  ? "Chính thức"
                  : employee.statusWork == 1
                  ? "Thử việc"
                  : "Nghỉ việc"
              }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table-paging">
        <div class="table-paging-left">
          <div class="tb-a double-paging-left-icon"></div>
          <div class="tb-a paging-left-icon"></div>
          <div class="cut">|</div>
          <div class="">Trang</div>
          <div class="tb-a"><input type="text" value="1" /></div>
          <div class="">Trên 1</div>
          <div class="cut">|</div>
          <div class="tb-a double-paging-right-icon"></div>
          <div class="tb-a paging-right-icon"></div>
          <div class="cut">|</div>
          <div class="tb-a paging-refresh"></div>
        </div>
        <div class="table-paging-right">Hiển thị 1 - 100 trên 100 kết quả</div>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeDetail from "./EmployeeDetail";
import axios from "axios";
import moment from "moment";
import Delete from './CheckToClose';

export default {
  components: {
    EmployeeDetail,
    Delete
  },
  // mounted(){
  //   this.forsucInput()
  // },
  methods: {
    btnAddOnClick() {
      this.ishideForAdd = false;
      this.isDisableForUpdate = true;
      this.infoUpdateOrAdd = this.employee;
      this.addOrUpdateString = "Add";

      // this.$nextTick(()=>{
      //   this.forsucInput();
      // });
    },
    // forsucInput(){
    //   this.$refs.input.$el.focus();
    // },
    changeIsHideToClose(value) {
      this.ishideForAdd = value;
    },
    changeIsHideDeleteToClose(value) {
      this.ishideForDelete = value;
    },
    activeRow(index) {
      this.isActiveRow = true;
      this.indexForAction = index;
    },

    formatDate(date) {
      return moment(String(date)).format("DD/MM/YYYY");
    },

    removeOnClick(employee) {
      if (employee == null) {
        alert("Bạn chưa chọn đối tượng cần xóa");
      } else {
        this.ishideForDelete = false;
        this.infoDelete = employee;
      }
      
      
    },

    rowOnClick(employee) {
      if (employee == null) {
        alert("Bạn chưa chọn đối tượng cần chỉnh sửa");
      } else {
        this.ishideForAdd = false;
        this.isDisableForUpdate = false;
        this.infoUpdateOrAdd = employee;
        this.addOrUpdateString = "Update";
      }
    },
  },
  data() {
    return {
      employees: [
        {
          userlogin: "admin",
          fullname: "Lê Hồng Phong",
          phone: "0399104329",
          dateOfbirth: "1999-07-18",
          gender: "Nam",
          statusWork: "chính thức",
        },
        {
          userlogin: "admin",
          fullname: "Lê Hồng Phong",
          phone: "0399104329",
          dateOfbirth: "1999-07-18",
          gender: "Nam",
          statusWork: "chính thức",
        },
      ],
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
      infoUpdateOrAdd: Object,
      infoDelete: Object,
      ishideForDelete: true,
      ishideForAdd: true,
      isDisableForUpdate: true,
      isActiveRow: Boolean,
      indexForAction: Number,
      addOrUpdateString: String,
    };
  },
  async created() {
    const response = await axios.get(
      "https://localhost:44306/api/v1/Employees"
    );
    this.employees = response.data;
    // this.employees.dateOfbirth = this.employees.dateOfbirth.split("T")[0];
  },
};
</script>

<style>
.container {
  /* margin-left: 240px; */
  margin-top: 10px;
  margin-right: 10px;
  height: calc(100vh-50px);
  font-size: 14px;
}

.header-content {
  display: flex;
}

.header-content .header-content-left {
  display: flex;
  align-items: center;
}

.header-content-left .title {
  font-size: 22px;
  font-weight: 600;
  padding: 0 10px 0 0;
  display: block;
}

.header-content-left .sub-title {
  font-size: 18px;
  color: #0087be;
  padding: 0 10px 0 0;
  display: block;
}

.header-content-left .filter-workstatus {
  display: flex;
  align-items: center;
  align-self: center;
}

.header-content-left .filter-workstatus select {
  padding: 0.3em;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  color: #000;
  margin-left: 8px;
  border: 1px solid #ccc;
}

.header-content-right {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
}

.header-content-right button {
  padding: 0.3em;
  margin-left: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
}
.header-content-right button:focus,
.filter-workstatus select:focus,
.table-employee input:focus,
.table-employee select:focus,
.table-employee button:focus,
.button-group-option button:focus {
  outline: 1px solid #0087be;
}
.reply button {
  display: flex;
  align-self: center;
  align-items: center;
}

.reply .reply-icon {
  width: 15px;
  height: 15px;
  background-position: center;
  background-image: url("../../../assets/Resource1/content/images/viewEmail.png");
  background-repeat: no-repeat;
  margin-right: 3px;
}

/*Table Content */
.content-table {
  width: 100%;
  position: absolute;
  margin-top: 20px;
  height: calc(100vh - 150px);
}

.content-table .button-group-option {
  padding: 2px;
  border: 1px solid #ccc;
  border-bottom: none;
}
.content-table .button-group-option button {
  border: none;
  background-color: #fff;
  padding: 8px;
  margin-right: 5px;
}

.table-employee {
  width: 100%;
  display: block;
  height: calc(100% - 80px);
  overflow-y: auto;
  overflow-x: auto;
  border-collapse: collapse;
  border: 1px solid #ccc;
}
.isActive {
  background-color: #ddd;
}
.row-onfocus {
  cursor: pointer;
}
.row-onfocus:hover {
  background-color: #ddd;
}

.filter-col {
  display: flex;
}
.table-employee button {
  left: 0;
  margin-top: 10px;
  border: 1px solid #ccc;
}
.table-employee input,
.table-employee select {
  width: 90%;
  padding: 4px 0 4px 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
}

.table-employee th,
.table-employee td {
  border: 1px solid #ccc;
}
/* .table-employee th {
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  background-color: #ddd;
  padding-bottom: 15px;
} */

.col-username {
  width: 15%;
}
.col-fullname {
  width: 32%;
}
.col-phonenumber {
  width: 15%;
}
.col-dateofbirth {
  width: 13%;
}
.col-gender {
  width: 10%;
}
.col-workstatus {
  width: 15%;
}

/* .table-employee .tbody-content {
  height: 500px;
  overflow-y: scroll;
} */
.button-group-option {
  display: flex;
  align-items: center;
  height: 40px;
}
.button-group-option button {
  display: flex;
  align-items: center;
  padding: 0 20px 0 0;

  cursor: pointer;
}
.button-group-option button:hover {
  border: 1px solid #0087be;
}

/*icon button */
.icon-add {
  width: 14px;
  height: 14px;
  background-image: url("../../../assets/Resource1/content/images/SaveAdd16.png");
  padding-right: 4px;
  background-repeat: no-repeat;
}
.icon-duplicate {
  width: 14px;
  height: 14px;
  background-image: url("../../../assets/Resource1/content/images/Save16.png");
  padding-right: 4px;
  background-repeat: no-repeat;
}
.icon-update {
  width: 16px;
  height: 16px;
  background-image: url("../../../assets/Resource1/content/images/Edit16.png");
  padding-right: 3px;
  background-repeat: no-repeat;
}
.icon-remove {
  width: 15px;
  height: 15px;
  background-image: url("../../../assets/Resource1/content/images/Disable16.png");
  padding-right: 3px;
  background-repeat: no-repeat;
}
.icon-view {
  width: 16px;
  height: 16px;
  background-image: url("../../../assets/Resource1/content/images/viewEmail.png");
  padding-right: 3px;
  background-repeat: no-repeat;
}
.icon-import {
  width: 16px;
  height: 16px;
  background-image: url("../../../assets/Resource1/content/images/Import16.png");
  padding-right: 3px;
  background-repeat: no-repeat;
}
.icon-help {
  width: 12px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid steelblue;
  background-image: url("../../../assets/Resource1/content/images/iconHelp.png");
  padding-right: 3px;
  background-repeat: no-repeat;
  background-position: center;
}
/*end */

/*Table Paging */
.table-paging {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-top: none;
  padding: 10px;
}
.table-paging .table-paging-left {
  display: flex;
  align-items: center;
}
.table-paging .table-paging-left div {
  display: block;
  padding: 0 20px 0 0;
  cursor: pointer;
}
/* .table-paging .table-paging-left div:hover{
  background-color: #ddd;
  padding: 10px;
} */
.table-paging-left input {
  width: 50px;
  height: 20px;
  margin-top: -1px;
}
.double-paging-left-icon {
  width: 15px;
  height: 16px;
  background-image: url("../../../assets/Resource1/content/images/grid/page-first.png");
  /* padding-right: 3px; */
  background-repeat: no-repeat;
}
.double-paging-right-icon {
  width: 15px;
  height: 16px;
  background-image: url("../../../assets/Resource1/content/images/grid/page-last.png");
  /* padding-right: 3px; */
  background-repeat: no-repeat;
}
.paging-left-icon {
  width: 15px;
  height: 16px;
  background-image: url("../../../assets/Resource1/content/images/grid/page-prev.png");
  /* padding-right: 3px; */
  background-repeat: no-repeat;
}
.paging-right-icon {
  width: 15px;
  height: 16px;
  background-image: url("../../../assets/Resource1/content/images/grid/page-next.png");
  /* padding-right: 3px; */
  background-repeat: no-repeat;
}
.paging-refresh {
  width: 15px;
  height: 16px;
  background-image: url("../../../assets/Resource1/content/images/grid/refresh.png");
  /* padding-right: 3px; */
  background-repeat: no-repeat;
}

.table-paging-right {
  position: absolute;
  right: 1em;
  align-items: center;
}
</style>