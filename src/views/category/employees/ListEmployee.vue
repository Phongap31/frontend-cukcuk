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
        <button @click="rowOnClick(employees[indexForAction].employeeID)">
          <div class="m-btn-icon icon-update"></div>
          <div>Sửa</div>
        </button>
        <button @click="removeOnClick(employees[indexForAction].employeeID)">
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
      <Delete
        :ishideForDeleteChild="ishideForDelete"
        :infoDeleteChild="infoDelete"
        v-on:ishideDeleteParent="changeIsHideDeleteToClose"
      />
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
              <select
                name="gender"
                id="gender"
                @click="searchFor($event.target.value)"
              >
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
            :class="{ isHide: ishideForSearch }"
            v-for="(emp, index) in employeeSearch"
            :key="index"
            @dblclick="rowOnClick(employee)"
          >
            <td>
              <div class="cell">{{ emp.employeeCode }}</div>
            </td>
            <td>
              <div class="cell">{{ emp.fullName }}</div>
            </td>
            <td>
              <div class="cell">{{ emp.phoneNumber }}</div>
            </td>
            <td>
              <div class="cell">{{ emp.dateOfBirth }}</div>
            </td>
            <td>
              <div class="cell">{{ emp.gender }}</div>
            </td>
            <td>
              <div class="cell">{{ emp.statusWork }}</div>
            </td>
          </tr>
          <tr
            @click="activeRow(index)"
            class="row-onfocus"
            :class="{ isHide: !ishideForSearch }"
            v-for="(employee, index) in employees"
            :key="index"
            @dblclick="rowOnClick(employee.employeeID)"
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
import Delete from "./CheckToClose";

export default {
  components: {
    EmployeeDetail,
    Delete,
  },
  // mounted(){
  //   this.forsucInput()
  // },
  methods: {
    //Hàm mở form detail để thực hiện thêm mới
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

    //Hàm đóng form detail
    changeIsHideToClose(value) {
      this.ishideForAdd = value;
    },

    //Hàm đóng popup delete
    changeIsHideDeleteToClose(value) {
      this.ishideForDelete = value;
    },

    //Hàm chọn vị trí nhân viên trong bảng để thực hiện sửa và xóa
    activeRow(index) {
      this.isActiveRow = true;
      this.indexForAction = index;
    },

    //Hàm format lại data hiển thị trên bảng
    formatDate(date) {
      return moment(String(date)).format("DD/MM/YYYY");
    },

    //Hàm chọn để mở popup delete thực thi xóa nhân viên
    async removeOnClick(employeeID) {
      if (employeeID == null) {
        alert("Bạn chưa chọn đối tượng cần xóa");
      } else {
        const response = await axios({
          method: "GET",
          url: `https://localhost:44306/api/v1/Employees/${employeeID}`
        });
        this.ishideForDelete = false;
        this.infoDelete = response.data;
      }
    },

    //Hàm chọn nhân viên để thực thi update
    async rowOnClick(employeeID) {
      if (employeeID == null) {
        alert("Bạn chưa chọn đối tượng cần chỉnh sửa");
      } else {
        const response = await axios({
          method: "GET",
          url: `https://localhost:44306/api/v1/Employees/${employeeID}`
        });
        this.ishideForAdd = false;
        this.isDisableForUpdate = false;
        this.infoUpdateOrAdd = response.data
        console.log(this.infoUpdateOrAdd);
        this.addOrUpdateString = "Update";
      }
    },

    //Hàm thực hiện tìm kiếm theo gender và statusWork
    // searchFor(value){
    //   console.log(value);
    //   this.employeeSearch = this.employees.filter((emp) =>
    //       emp.gender = value);
    //   this.ishideForSearch = false;
    //   console.log(this.employeeSearch);
    // },
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
      ishideForSearch: true,
      employeeSearch: Object,
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

<style scoped>
.isHide {
  display: none;
}
</style>
