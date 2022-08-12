"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "\u7ED3\u679C\u9875"
    };
  },
  onLoad() {
  },
  methods: {
    goIndexWaken() {
      common_vendor.index.redirectTo({
        url: "/pages/index/waken"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.goIndexWaken),
    b: common_vendor.p({
      type: "back",
      size: "20",
      color: "#fff"
    }),
    c: common_vendor.p({
      type: "search",
      size: "20"
    }),
    d: common_vendor.t($data.title)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6d15d7f3"], ["__file", "D:/code2/test/phone/pages/index/result.vue"]]);
wx.createPage(MiniProgramPage);
