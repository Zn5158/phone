"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "login",
  data() {
    return {
      code: "\u53D1\u9001\u9A8C\u8BC1\u7801",
      sending: false,
      validPhone: true,
      validCode: true,
      phone: "",
      codeValue: "",
      validText: "\u60A8\u8F93\u5165\u7684\u624B\u673A\u53F7\u6709\u8BEF",
      validText2: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
      isFirst: true
    };
  },
  props: ["isMask"],
  methods: {
    sendCode() {
      if (!this.codeValue) {
        this.validCode = false;
        return;
      } else if (!this.sending) {
        this.sending = true;
        this.code = 59;
        let timer = setInterval(() => {
          this.code--;
          if (this.code == 0) {
            clearInterval(timer);
            this.code = "\u53D1\u9001\u9A8C\u8BC1\u7801";
            this.sending = false;
          }
        }, 1e3);
      }
    },
    clickMask() {
      this.isFirst = true;
      this.sending = false;
      this.validPhone = true;
      this.validCode = true;
      this.isFirst = true;
      this.$emit("clickMask", false);
    },
    modalClick() {
      console.log("\u4E8B\u4EF6\u5192\u6CE1");
    },
    login() {
      this.isFirst = false;
      if (!this.phone) {
        this.validPhone = false;
        this.validText = "\u8BF7\u8F93\u5165\u624B\u673A\u53F7";
        return;
      }
      let valid = /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone);
      if (!valid) {
        this.validPhone = valid;
        this.validText = "\u60A8\u8F93\u5165\u7684\u624B\u673A\u53F7\u6709\u8BEF";
        return;
      } else {
        this.validPhone = valid;
      }
      if (!this.codeValue) {
        this.validCode = false;
        return;
      }
      setTimeout(() => {
        {
          common_vendor.index.showToast({
            title: "\u5931\u8D25",
            icon: "error",
            duration: 2e3
          });
          return;
        }
      }, 3e3);
    },
    goOtherPage() {
      common_vendor.index.redirectTo({
        url: "/pages/webview/webview"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.isMask
  }, $props.isMask ? common_vendor.e({
    b: $data.phone,
    c: common_vendor.o(($event) => $data.phone = $event.detail.value),
    d: !$data.validPhone
  }, !$data.validPhone ? {
    e: common_vendor.t($data.validText)
  } : {}, {
    f: common_vendor.t($data.code),
    g: !$data.sending ? 1 : "",
    h: common_vendor.o((...args) => $options.sendCode && $options.sendCode(...args)),
    i: $data.codeValue,
    j: common_vendor.o(($event) => $data.codeValue = $event.detail.value),
    k: !$data.validCode
  }, !$data.validCode ? {
    l: common_vendor.t($data.validText2)
  } : {}, {
    m: common_vendor.o((...args) => $options.login && $options.login(...args)),
    n: common_vendor.o((...args) => $options.goOtherPage && $options.goOtherPage(...args)),
    o: common_vendor.o((...args) => $options.modalClick && $options.modalClick(...args)),
    p: common_vendor.o((...args) => $options.clickMask && $options.clickMask(...args))
  }) : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-55f941d8"], ["__file", "D:/code2/test/phone/components/login/login.vue"]]);
wx.createComponent(Component);
