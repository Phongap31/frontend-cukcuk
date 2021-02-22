<template>
  <div>
    <div
      class="delete-dialog"
      title="Xóa nhân viên"
      :class="{ isHide: ishideForDeleteChild }"
    >
      <div class="dialog-modal"></div>
      <div class="dialog-content">
        <div class="dialog-header">
          <div class="dialog-header-title">Xóa nhân viên</div>
          <!-- <div class="dialog-header-close"><button>x</button></div>     -->
        </div>
        <div class="dialog-body">
          <div class="dialog-body-name">
            Tên nhân viên: {{ infoDeleteChild.fullName }}
          </div>
          <div class="dialog-body-query">
            Bạn có chắc muốn xóa nhân viên này?
          </div>
        </div>
        <div class="dialog-footer">
          <div class="dialog-footer-groupButton">
            <button @click="deleteOnClick()">Xóa</button>
            <button @click="btnCancelOnClick()">Hủy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["ishideForDeleteChild", "infoDeleteChild"],
  methods: {
    //hàm xóa bản ghi
    deleteOnClick() {
      axios({
        method: "DELETE",
        url: `https://localhost:44306/api/v1/Employees/${this.infoDeleteChild.employeeID}`,
      })
        .then((res) => console.log(res.status))
        .catch((e) => console.log(e));
      location.reload();
    },

    //đóng popup
    btnCancelOnClick() {
      this.$emit("ishideDeleteParent", true);
    },
  },

  data() {
    return {
      deleteObject: Object,
    };
  },
};
</script>

<style scoped>
.isHide {
  display: none;
}
.delete-dialog {
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
  width: 650px;
  background-color: #fff;
  left: calc(50% - 275px);
  top: calc(50% - 310px);
}
.dialog-body {
  height: 130px;
  font-size: 20px;
  padding-left: 15px;
}
.dialog-body-name {
  padding: 20px 0;
}
.dialog-body-query {
  font-style: italic;
  font-weight: 600;
  padding-top: 20px;
}
.dialog-footer button {
  padding: 5px 20px;
  cursor: pointer;
  margin: 0 5px;
  border: none;
  outline: #0087be solid 1px;
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
</style>