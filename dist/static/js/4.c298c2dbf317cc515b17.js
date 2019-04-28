(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_lib_loader_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_style_index_0_id_23b4513e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_lib_loader_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_style_index_0_id_23b4513e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_lib_loader_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_style_index_0_id_23b4513e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_lib_loader_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_style_index_0_id_23b4513e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Dialog/demo.vue?vue&type=template&id=23b4513e&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page-demo-dialog" }, [
    _c("div", { staticClass: "demo-list-box e-unfold" }, [
      _c("h4", { staticClass: "type" }, [_vm._v("基本用法")]),
      _vm._v(" "),
      _c("ul", { staticClass: "demo-list" }, [
        _c("li", { staticClass: "demo-list-item" }, [
          _c("a", { staticClass: "router-link", on: { click: _vm.handle1 } }, [
            _vm._v("自定义标题和内容")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "demo-list-item" }, [
          _c("a", { staticClass: "router-link", on: { click: _vm.handle3 } }, [
            _vm._v("禁止点击蒙层关闭窗口")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "demo-list-item" }, [
          _c("a", { staticClass: "router-link", on: { click: _vm.handle4 } }, [
            _vm._v("只有一个按钮")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "demo-list-item" }, [
          _c("a", { staticClass: "router-link", on: { click: _vm.handle5 } }, [
            _vm._v("事件")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "demo-list-item" }, [
          _c("a", { staticClass: "router-link", on: { click: _vm.handle2 } }, [
            _vm._v("不能关闭的弹窗")
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/Dialog/demo.vue?vue&type=template&id=23b4513e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Dialog/demo.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
/* harmony default export */ var demovue_type_script_lang_js_ = ({
  name: 'demo-dialog',
  methods: {
    handle1: function handle1() {
      this.$dialog({
        title: '确定删除App？',
        message: '真的不考虑一下留着我吗，<br> 点击蒙层也是可以关闭弹窗',
        footer: {
          cancel: {
            text: '删除'
          },
          confirm: {
            text: '考虑'
          }
        }
      });
    },
    handle2: function handle2() {
      this.$dialog({
        id: 'my-dialog',
        title: '对不起',
        message: '你开启了一个不能关闭的按钮，<p>如果要我消失，请刷新吧</p>',
        isHideFooter: true
      });
    },
    handle3: function handle3() {
      this.$dialog({
        title: '提示',
        message: '你点蒙层是没反应的',
        preventMaskClose: true
      });
    },
    handle4: function handle4() {
      this.$dialog({
        title: '提示',
        message: '只有一个按钮',
        footer: {
          confirm: {
            text: '确定'
          }
        }
      });
    },
    handle5: function handle5() {
      this.$dialog({
        title: '提示',
        message: '事件处理',
        footer: {
          cancel: {
            text: '取消',
            callBack: function callBack() {
              alert('你取消了');
            }
          },
          confirm: {
            text: '确定',
            callBack: function callBack() {
              alert('你确定了');
            }
          }
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/packages/Dialog/demo.vue?vue&type=script&lang=js&
 /* harmony default export */ var Dialog_demovue_type_script_lang_js_ = (demovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/Dialog/demo.vue?vue&type=style&index=0&id=23b4513e&lang=scss&scoped=true&
var demovue_type_style_index_0_id_23b4513e_lang_scss_scoped_true_ = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/packages/Dialog/demo.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Dialog_demovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "23b4513e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/Dialog/demo.vue"
/* harmony default export */ var demo = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);