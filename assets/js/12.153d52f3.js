(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{378:function(n,t,i){},379:function(n,t,i){},431:function(n,t,i){"use strict";i(378)},432:function(n,t,i){"use strict";i(379)},489:function(n,t,i){"use strict";i.r(t);i(431);var e=i(51),s={components:{DownloadIcon:Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30"}},[t("g",[t("path",{attrs:{d:"M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012\n\t\tv-8.861H25.462z"}}),this._v(" "),t("path",{attrs:{d:"M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723\n\t\tc0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742\n\t\tc0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193\n\t\tC15.092,18.979,14.62,18.426,14.62,18.426z"}})])])}),[],!1,null,"e03d33ca",null).exports},props:{runtimeOnly:{type:Boolean,required:!1,defaultValue:!1}},data:function(){return{}},computed:{uncompressedTitle:function(){return"Download "+this.label},minifiedTitle:function(){return"Download minified "+this.label},label:function(){return this.$props.runtimeOnly?"Handlebars ".concat(this.version," (runtime only)"):"Handlebars ".concat(this.version," (compiler + runtime)")},uncompressedFilename:function(){return this.$props.runtimeOnly?"handlebars.runtime-v".concat(this.version,".js"):"handlebars-v".concat(this.version,".js")},minifiedFilename:function(){return this.$props.runtimeOnly?"handlebars.runtime.min-v".concat(this.version,".js"):"handlebars.min-v".concat(this.version,".js")},linkPrefix:function(){return"https://s3.amazonaws.com/builds.handlebarsjs.com/"},version:function(){return this.$handlebarsVersions.latest}}},a=(i(432),Object(e.a)(s,(function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"download-handlebars"},[i("div",{staticClass:"download-links"},[i("a",{staticClass:"uncompressed-download",attrs:{title:n.uncompressedTitle,href:n.linkPrefix+n.uncompressedFilename}},[n._v("\n      "+n._s(n.label)+"\n      "),i("DownloadIcon",{staticClass:"icon"})],1),n._v(" "),i("a",{staticClass:"minified-download",attrs:{title:n.minifiedTitle,href:n.linkPrefix+n.minifiedFilename}},[n._v("minified\n      "),i("DownloadIcon",{staticClass:"icon"})],1)]),n._v(" "),i("div",{staticClass:"description"},[n._t("default")],2)])}),[],!1,null,"65d60526",null));t.default=a.exports}}]);