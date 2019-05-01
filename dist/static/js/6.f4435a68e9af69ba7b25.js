(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_lib_loader_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_style_index_0_id_1d239ecf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_lib_loader_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_style_index_0_id_1d239ecf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_lib_loader_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_style_index_0_id_1d239ecf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_lib_loader_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_style_index_0_id_1d239ecf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Loading/demo.vue?vue&type=template&id=1d239ecf&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page-demo-loading" }, [
    _c("div", { staticClass: "demo-list-box e-unfold" }, [
      _c("h4", { staticClass: "type" }, [_vm._v("基本用法")]),
      _vm._v(" "),
      _c("ul", { staticClass: "demo-list" }, [
        _c("li", { staticClass: "demo-list-item" }, [
          _c("a", { staticClass: "router-link", on: { click: _vm.handle1 } }, [
            _vm._v("显示Loading，2s自动消失")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "demo-list-item" }, [
          _c("a", { staticClass: "router-link", on: { click: _vm.handle2 } }, [
            _vm._v("显示Loading，并且自定义文案")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "demo-list-item" }, [
          _c("a", { staticClass: "router-link", on: { click: _vm.handle3 } }, [
            _vm._v("显示Loading，并且隐藏文案")
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/Loading/demo.vue?vue&type=template&id=1d239ecf&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Loading/demo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var demovue_type_script_lang_js_ = ({
  name: 'demo-loading',
  methods: {
    handle1: function handle1() {
      var _this = this;

      this.$loading.show(); // 显示

      setTimeout(function () {
        _this.$loading.hide(); // 隐藏

      }, 2000);
    },
    handle2: function handle2() {
      var _this2 = this;

      this.$loading.show({
        message: '自定义文案'
      }); // 自定义文案

      setTimeout(function () {
        _this2.$loading.hide(); // 隐藏

      }, 2000);
    },
    handle3: function handle3() {
      var _this3 = this;

      this.$loading.show({
        isHideMessage: true
      }); // 隐藏文本提示

      setTimeout(function () {
        _this3.$loading.hide(); // 隐藏

      }, 2000);
    }
  }
});
// CONCATENATED MODULE: ./src/packages/Loading/demo.vue?vue&type=script&lang=js&
 /* harmony default export */ var Loading_demovue_type_script_lang_js_ = (demovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/Loading/demo.vue?vue&type=style&index=0&id=1d239ecf&lang=scss&scoped=true&
var demovue_type_style_index_0_id_1d239ecf_lang_scss_scoped_true_ = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/Loading/demo.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Loading_demovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1d239ecf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/Loading/demo.vue"
/* harmony default export */ var demo = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);