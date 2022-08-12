"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isMask: false
    };
  },
  methods: {
    closeMask(e) {
      this.isMask = e;
    },
    back(e) {
      this.isMask = e;
    }
  }
};
if (!Array) {
  const _easycom_login2 = common_vendor.resolveComponent("login");
  _easycom_login2();
}
const _easycom_login = () => "../../components/login/login.js";
if (!Math) {
  _easycom_login();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.isMask = true),
    b: common_vendor.o($options.closeMask),
    c: common_vendor.o($options.back),
    d: common_vendor.p({
      isMask: $data.isMask
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/code2/test/phone/pages/project/project.vue"]]);
wx.createPage(MiniProgramPage);
