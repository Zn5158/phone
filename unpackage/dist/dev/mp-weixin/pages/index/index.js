"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      indicatorDots: true,
      autoplay: true,
      interval: 4e3,
      duration: 500
    };
  },
  onLoad() {
  },
  methods: {
    goIndexWake() {
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
    a: common_vendor.o($options.goIndexWake),
    b: common_vendor.p({
      type: "search",
      size: "20"
    }),
    c: $data.indicatorDots,
    d: $data.autoplay,
    e: $data.interval,
    f: $data.duration
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "D:/code2/test/phone/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
