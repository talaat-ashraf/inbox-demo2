(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apps-todo"],{1681:function(t,e,i){},"169a":function(t,e,i){"use strict";i("368e");var s=i("480e"),a=i("4ad4"),o=i("b848"),n=i("75eb"),l=i("e707"),r=i("e4d3"),c=i("21be"),d=i("a293"),h=i("58df"),u=i("d9bd"),p=i("80d2");const m=Object(h["a"])(o["a"],n["a"],l["a"],r["a"],c["a"],a["a"]);e["a"]=m.extend({name:"v-dialog",directives:{ClickOutside:d["b"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(u["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===p["A"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]'));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(s["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:Object(p["i"])(this.maxWidth),width:Object(p["i"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"d",(function(){return l})),i.d(e,"e",(function(){return r}));var s=i("b0afa");i.d(e,"a",(function(){return s["a"]}));var a=i("80d2");const o=Object(a["k"])("v-card__actions"),n=Object(a["k"])("v-card__subtitle"),l=Object(a["k"])("v-card__text"),r=Object(a["k"])("v-card__title");s["a"]},a844:function(t,e,i){"use strict";i("1681");var s=i("8654"),a=i("58df");const o=Object(a["a"])(s["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick(()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"},genInput(){const t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},f597:function(t,e,i){"use strict";i.r(e);var s=i("5bc1"),a=i("f774"),o=i("71d9"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-grow-1 flex-row mt-2"},[e(a["a"],{staticClass:"elevation-1 rounded flex-shrink-0",class:[t.$vuetify.rtl?"ml-3":"mr-3"],attrs:{app:t.$vuetify.breakpoint.mdAndDown,permanent:t.$vuetify.breakpoint.lgAndUp,floating:"",right:t.$vuetify.rtl,width:"240"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e("todo-menu",{staticClass:"todo-app-menu pa-2",on:{"open-compose":t.openCompose}})],1),e("div",{staticClass:"d-flex flex-grow-1 flex-column"},[e(o["a"],{staticClass:"hidden-lg-and-up flex-grow-0 mb-2"},[e(s["a"],{on:{click:function(e){t.drawer=!t.drawer}}}),e("div",{staticClass:"title font-weight-bold"},[t._v("Todo App")])],1),e("router-view",{key:t.$route.fullPath,staticClass:"flex-grow-1",on:{"edit-task":t.openCompose}})],1),e("todo-compose",{ref:"compose"})],1)},l=[],r=i("4ca6"),c=i("8336"),d=i("132d"),h=i("8860"),u=i("da13"),p=i("1800"),m=i("5d23"),v=i("34c3"),f=function(){var t=this,e=t._self._c;return e("div",[e(c["a"],{staticClass:"mb-3",attrs:{block:"",large:"",color:"primary"},on:{click:function(e){return t.$emit("open-compose")}}},[t._v(t._s(t.$t("todo.addTask")))]),e(h["a"],{staticClass:"mt-2 pa-0",attrs:{nav:""}},[e(u["a"],{attrs:{to:"/apps/todo/tasks","active-class":"primary--text",link:""}},[e(v["a"],[e(d["a"],{attrs:{small:""}},[t._v("mdi-checkbox-marked-circle-outline")])],1),e(m["g"],[e(m["k"],[t._v(t._s(t.$t("todo.tasks")))])],1),t.incompleteTasks.length>0?e(p["a"],[e(r["a"],{staticClass:"font-weight-bold",attrs:{inline:"",color:"primary",content:t.incompleteTasks.length}})],1):t._e()],1),e(u["a"],{attrs:{to:"/apps/todo/completed","active-class":"primary--text",link:""}},[e(v["a"],[e(d["a"],{attrs:{small:""}},[t._v("mdi-check")])],1),e(m["g"],[e(m["k"],[t._v(t._s(t.$t("todo.completed")))])],1)],1)],1),e(h["a"],{staticClass:"mt-2 pa-0",attrs:{dense:"",nav:""}},[e("div",{staticClass:"overline pa-1 mt-2"},[t._v(t._s(t.$t("todo.labels")))]),t._l(t.labels,(function(i){return e(u["a"],{key:i.id,attrs:{to:"/apps/todo/label/"+i.id,exact:"","active-class":"primary--text",link:""}},[e(v["a"],[e(d["a"],{attrs:{small:"",color:i.color}},[t._v("mdi-label-outline")])],1),e(m["g"],[e(m["k"],[t._v(t._s(i.title))])],1)],1)}))],2)],1)},g=[],k=i("2f62"),b={computed:{...Object(k["e"])("todo-app",["labels"]),...Object(k["c"])("todo-app",["incompleteTasks"])}},w=b,x=i("2877"),y=Object(x["a"])(w,f,g,!1,null,null,null),_=y.exports,C=i("b0afa"),$=i("99d9"),O=i("cc20"),T=i("169a"),A=i("ce7e"),I=i("b974"),E=i("2fa4"),S=i("8654"),j=i("a844"),B=function(){var t=this,e=t._self._c;return e(T["a"],{attrs:{width:"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(C["a"],[e($["e"],{staticClass:"pa-2"},[t._v(" "+t._s(t.isEdit?"Edit Task":"Add Task")+" "),e(E["a"]),e(c["a"],{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[e(d["a"],[t._v("mdi-close")])],1)],1),e(A["a"]),e("div",[e(S["a"],{staticClass:"px-2 py-1",attrs:{solo:"",flat:"",placeholder:t.$t("common.title"),autofocus:"","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.save.apply(null,arguments)}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),e(A["a"]),e(j["a"],{staticClass:"px-2 py-1",attrs:{solo:"",flat:"",placeholder:t.$t("common.description"),"hide-details":""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),e(I["a"],{staticClass:"px-2 my-3",attrs:{"menu-props":{bottom:!0,offsetY:!0},items:t.labels,placeholder:"Labels","item-value":"id","hide-selected":"","hide-details":"",solo:"",flat:"",multiple:""},scopedSlots:t._u([{key:"selection",fn:function({attrs:i,item:s,parent:a,selected:o}){return[s===Object(s)?e(O["a"],t._b({staticClass:"font-weight-bold",attrs:{color:s.color,outlined:"","input-value":o,label:""}},"v-chip",i,!1),[e("span",{staticClass:"pr-2"},[t._v(" "+t._s(s.title)+" ")]),e(d["a"],{attrs:{small:""},on:{click:function(t){return a.selectItem(s)}}},[t._v("close")])],1):t._e()]}},{key:"item",fn:function({index:i,item:s}){return[e(O["a"],{attrs:{color:s.color,label:"",outlined:"",small:""}},[t._v(" "+t._s(s.title)+" ")])]}}]),model:{value:t.taskLabels,callback:function(e){t.taskLabels=e},expression:"taskLabels"}})],1),e(A["a"]),e($["b"],{staticClass:"pa-2"},[e(c["a"],{attrs:{outlined:""},on:{click:t.close}},[t._v(t._s(t.$t("common.cancel")))]),e(E["a"]),e(c["a"],{attrs:{color:"primary"},on:{click:t.save}},[t._v(t._s(t.$t("common.save")))])],1)],1)],1)},L=[],H={data(){return{dialog:!1,title:"",description:"",task:{},taskLabels:[],search:null}},computed:{...Object(k["e"])("todo-app",["labels"]),isEdit(){return this.task&&this.task.id}},methods:{...Object(k["d"])("todo-app",["updateTask","addTask"]),open(t){t?(this.task=t,this.title=this.task.title,this.description=this.task.description,this.taskLabels=this.task.labels):(this.task={},this.title="",this.description="",this.taskLabels=[]),this.dialog=!0},close(){this.dialog=!1},save(){const{title:t,description:e,taskLabels:i}=this,s={title:t,description:e,labels:i};this.task.id?this.updateTask({...this.task,...s}):this.addTask(s),this.close()},filter(t,e,i){const s=t=>null!==t?t:"",a=s(t.title),o=s(e);return a.toString().toLowerCase().indexOf(o.toString().toLowerCase())>-1}}},z=H,F=Object(x["a"])(z,B,L,!1,null,null,null),G=F.exports,N={components:{TodoMenu:_,TodoCompose:G},data(){return{drawer:null}},methods:{openCompose(t){this.$refs.compose.open(t)}}},D=N,M=Object(x["a"])(D,n,l,!1,null,null,null);e["default"]=M.exports}}]);