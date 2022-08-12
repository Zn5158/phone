"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "\u6211\u662F\u5524\u9192\u9875"
    };
  },
  onLoad() {
  },
  methods: {
    goIndex() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    },
    goIndexResult() {
      common_vendor.index.redirectTo({
        url: "/pages/index/result"
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
    a: common_vendor.o($options.goIndex),
    b: common_vendor.p({
      type: "back",
      size: "20",
      color: "#fff"
    }),
    c: common_vendor.o($options.goIndexResult),
    d: common_vendor.p({
      type: "search",
      size: "20"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1b797d64"], ["__file", "D:/code2/test/phone/pages/index/waken.vue"]]);
wx.createPage(MiniProgramPage);
