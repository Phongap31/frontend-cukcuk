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
            <button @click="deleteOnClick()">Có</button>
            <button @click="btnCancelOnClick()">Không</button>
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
        alert('Xoa thanh cong!!!')
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

.dialog-content {
  position: fixed;
  border-radius: 5px;
  border: 5px solid #016087;
  border-top: none;
  width: 650px;
  background-color: #fff;
  left: calc(50% - 275px);
  top: calc(50% - 310px);
}
.dialog-body {
  height: 90px;
  font-size: 18px;
  padding-left: 15px;
}
.dialog-body-name {
  padding: 20px 0;
}
.dialog-body-query {
  font-style: italic;
  font-weight: 600;
  padding-top: 15px;
}
.dialog-footer button {
  padding: 5px 20px;
  cursor: pointer;
  margin: 0 5px;
  border: none;
  outline: #0087be solid 1px;
}

</style>