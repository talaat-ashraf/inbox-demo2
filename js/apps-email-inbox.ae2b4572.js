(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apps-email-inbox"],{4560:function(t,e,i){},5311:function(t,e,i){"use strict";i("14d9");var s=i("5607"),a=i("2b0e");e["a"]=a["a"].extend({name:"rippleable",directives:{ripple:s["b"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"681c":function(t,e,i){"use strict";var s=i("8336"),a=i("b0afa"),l=i("ac7c"),n=i("cc20"),o=i("ce7e"),r=i("132d"),c=i("8860"),h=i("da13"),u=i("1800"),d=i("5d23"),p=i("e449"),m=i("a797"),v=i("490a"),f=i("2fa4"),b=(i("14d9"),function(){var t=this,e=t._self._c;return e(a["a"],{staticClass:"min-w-0"},[e("div",{staticClass:"email-app-top px-2 py-1 d-flex align-center"},[e(l["a"],{attrs:{value:t.selectAll,indeterminate:t.selectAlmostAll},on:{click:function(e){return e.stopPropagation(),t.onSelectAll(t.selectAll)}}}),e(p["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:a}){return[e(s["a"],t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),i),[e(r["a"],[t._v("mdi-menu-down")])],1)]}}])},[e(c["a"],t._l(t.menuSelection,(function(i){return e(h["a"],{key:i.key,attrs:{link:""},on:{click:function(e){return t.onMenuSelection(i.key)}}},[e(d["k"],[t._v(t._s(i.title))])],1)})),1)],1),e(s["a"],{directives:[{name:"show",rawName:"v-show",value:0===t.selected.length,expression:"selected.length === 0"}],attrs:{icon:"",loading:t.isLoading},on:{click:function(e){return t.$emit("refresh")}}},[e(r["a"],[t._v("mdi-refresh")])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.selected.length>0,expression:"selected.length > 0"}]},[e(s["a"],{attrs:{icon:""}},[e(r["a"],[t._v("bx-archive")])],1),e(s["a"],{attrs:{icon:""}},[e(r["a"],[t._v("mdi-email-mark-as-unread")])],1),e(s["a"],{attrs:{icon:""}},[e(r["a"],[t._v("bx-trash-alt")])],1)],1),e(f["a"]),e("div",{staticClass:"caption mr-1"},[t._v("1 - 20 of 428")]),e(s["a"],{attrs:{icon:"",disabled:""}},[e(r["a"],[t._v("mdi-chevron-left")])],1),e(s["a"],{attrs:{icon:""}},[e(r["a"],[t._v("mdi-chevron-right")])],1)],1),e(o["a"]),e(c["a"],{staticClass:"py-0"},[t._l(t.emails,(function(i,a){return[e(h["a"],{key:i.title,class:{"grey lighten-5":i.read&&!t.$vuetify.theme.dark,"v-list-item--active primary--text":-1!==t.selected.indexOf(i.id)},attrs:{link:""}},[e(u["a"],{staticClass:"d-flex flex-row align-center"},[e(l["a"],{attrs:{value:i.id},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),e(s["a"],{staticClass:"ml-1",attrs:{icon:""},on:{click:function(t){i.starred=!i.starred}}},[i.starred?e(r["a"],{attrs:{color:"yellow darken-1"}},[t._v(" bx bxs-star ")]):e(r["a"],{attrs:{color:"grey lighten-1"}},[t._v(" bx-star ")])],1)],1),e(d["g"],{on:{click:function(e){return t.$router.push("/apps/email/inbox/"+i.id)}}},[e(d["k"],{domProps:{textContent:t._s(i.subject)}}),e(d["j"],{staticClass:"font-weight-bold",domProps:{textContent:t._s(i.title)}}),e(d["j"],{domProps:{textContent:t._s(i.content)}}),e(d["j"],t._l(i.labels,(function(i){return e(n["a"],{key:i,staticClass:"font-weight-bold mt-1 mr-1",attrs:{color:t.getLabelColor(i),outlined:"",small:""}},[t._v(" "+t._s(t.getLabelTitle(i))+" ")])})),1)],1),e(u["a"],[e(d["e"],{domProps:{textContent:t._s(i.time)}})],1)],1),a+1<t.emails.length?e(o["a"],{key:a}):t._e()]})),t.isLoading||0!==t.emails.length?t._e():[e("div",{staticClass:"px-1 py-6 text-center"},[t._v(t._s(t.$t("email.emptyList")))])]],2),e(m["a"],{attrs:{value:t.isLoading,absolute:""}},[e(v["a"],{attrs:{indeterminate:"",size:"32"}})],1)],1)}),g=[],k={props:{emails:{type:Array,default:()=>[]},labels:{type:Array,default:()=>[]},isLoading:{type:Boolean,default:!1}},data(){return{selectAll:!1,selectAlmostAll:!1,selected:[],menuSelection:[{title:"All",key:"all"},{title:"Read",key:"read"},{title:"Unread",key:"unread"},{title:"Starred",key:"starred"}]}},watch:{selected(t){this.$nextTick(()=>{this.selectAll&&(0===t.length?(this.selectAll=!1,this.selectAlmostAll=!1):this.emails.length===t.length?this.selectAlmostAll=!1:this.selectAlmostAll=!0)})}},methods:{onMenuSelection(t){switch(t){case"all":this.selected=this.emails.map(t=>t.id),this.selectAll=!0,this.selectAlmostAll=!1}},onSelectAll(t){this.selectAll?this.selected=[]:this.selected=this.emails.map(t=>t.id),this.selectAlmostAll=!1,this.selectAll=!this.selectAll},getLabelColor(t){const e=this.labels.find(e=>e.id===t);return e?e.color:""},getLabelTitle(t){const e=this.labels.find(e=>e.id===t);return e?e.title:""}}},C=k,y=(i("ecfe"),i("2877")),x=Object(y["a"])(C,b,g,!1,null,"10a0685e",null);e["a"]=x.exports},"6ca7":function(t,e,i){},"8adc":function(t,e,i){},a24f:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("email-list",{attrs:{"is-loading":t.isLoading,emails:t.inbox,labels:t.labels},on:{refresh:t.onRefresh}})},a=[],l=i("2f62"),n=i("681c"),o={components:{EmailList:n["a"]},computed:{...Object(l["e"])("email-app",["inbox","isLoading","labels"])},watch:{"$route.hash"(t){this.getEmails()}},mounted(){this.getEmails()},methods:{...Object(l["b"])("email-app",["getInbox"]),onRefresh(){this.getEmails()},getEmails(){const{hash:t}=this.$route,e=t?t.replace("#",""):"";this.getInbox(e)}}},r=o,c=i("2877"),h=Object(c["a"])(r,s,a,!1,null,null,null);e["default"]=h.exports},ac7c:function(t,e,i){"use strict";i("6ca7"),i("ec29");var s=i("9d26"),a=i("c37a"),l=i("fe09");e["a"]=l["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...a["b"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["b"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},cc20:function(t,e,i){"use strict";i("14d9"),i("8adc");var s=i("58df"),a=i("0789"),l=i("9d26"),n=i("a9ad"),o=i("4e82"),r=i("7560"),c=i("f2e7"),h=i("1c87"),u=i("af2b"),d=i("d9bd");e["a"]=Object(s["a"])(n["a"],u["a"],h["a"],r["a"],Object(o["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(d["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(l["b"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a["g"],t)},genClose(){return this.$createElement(l["b"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const a=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(a,s),e)}})},ec29:function(t,e,i){},ecfe:function(t,e,i){"use strict";i("4560")},fe09:function(t,e,i){"use strict";i.d(e,"b",(function(){return o}));i("14d9");var s=i("c37a"),a=i("5311"),l=i("8547"),n=i("58df");function o(t){t.preventDefault()}e["a"]=Object(n["a"])(s["b"],a["a"],l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=s["b"].options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})}}]);