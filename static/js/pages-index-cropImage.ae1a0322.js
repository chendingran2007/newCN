(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-cropImage"],{"014f":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'.flex-auto[data-v-4ad453dc]{flex:auto}.bg-transparent[data-v-4ad453dc]{background-color:rgba(0,0,0,.9);transition-duration:.35s}.lime-clipper[data-v-4ad453dc]{width:100vw;height:calc(100vh - var(--window-top));background-color:rgba(0,0,0,.9);position:fixed;position:absolute;top:var(--window-top);left:300vw;z-index:1}.lime-clipper.open[data-v-4ad453dc]{left:0;right:0;margin:0 auto;width:100%}.lime-clipper-mask[data-v-4ad453dc]{position:relative;z-index:2;pointer-events:none}.lime-clipper__content[data-v-4ad453dc]{pointer-events:none;position:absolute;border:%?1?% solid hsla(0,0%,100%,.3);box-sizing:border-box;box-shadow:rgba(0,0,0,.5) 0 0 0 80vh;background:transparent}.lime-clipper__content[data-v-4ad453dc]::before,\n.lime-clipper__content[data-v-4ad453dc]::after{content:"";position:absolute;border:%?1?% dashed hsla(0,0%,100%,.3)}.lime-clipper__content[data-v-4ad453dc]::before{width:100%;top:33.33%;height:33.33%;border-left:none;border-right:none}.lime-clipper__content[data-v-4ad453dc]::after{width:33.33%;left:33.33%;height:100%;border-top:none;border-bottom:none}.lime-clipper__edge[data-v-4ad453dc]{position:absolute;width:%?34?%;height:%?34?%;border:%?6?% solid #fff;pointer-events:auto}.lime-clipper__edge[data-v-4ad453dc]::before{content:"";position:absolute;width:%?40?%;height:%?40?%;background-color:initial}.lime-clipper__edge[data-v-4ad453dc]:nth-child(1){left:%?-6?%;top:%?-6?%;border-bottom-width:0!important;border-right-width:0!important}.lime-clipper__edge[data-v-4ad453dc]:nth-child(1):before{top:-50%;left:-50%}.lime-clipper__edge[data-v-4ad453dc]:nth-child(2){right:%?-6?%;top:%?-6?%;border-bottom-width:0!important;border-left-width:0!important}.lime-clipper__edge[data-v-4ad453dc]:nth-child(2):before{top:-50%;left:50%}.lime-clipper__edge[data-v-4ad453dc]:nth-child(3){left:%?-6?%;bottom:%?-6?%;border-top-width:0!important;border-right-width:0!important}.lime-clipper__edge[data-v-4ad453dc]:nth-child(3):before{bottom:-50%;left:-50%}.lime-clipper__edge[data-v-4ad453dc]:nth-child(4){right:%?-6?%;bottom:%?-6?%;border-top-width:0!important;border-left-width:0!important}.lime-clipper__edge[data-v-4ad453dc]:nth-child(4):before{bottom:-50%;left:50%}.lime-clipper-image[data-v-4ad453dc]{width:100%;max-width:inherit;border-style:none;position:absolute;top:0;left:0;z-index:1;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:center;transform-origin:center}.lime-clipper-canvas[data-v-4ad453dc]{position:fixed;position:absolute;z-index:10;left:-200vw;top:-200vw;pointer-events:none}.lime-clipper-tools[data-v-4ad453dc]{position:absolute;left:0;bottom:10px;width:100%;z-index:99;color:#fff}.lime-clipper-tools__btns[data-v-4ad453dc]{font-weight:700;display:flex;align-items:center;justify-content:space-between;width:100%;padding:%?20?% %?40?%;box-sizing:border-box}.lime-clipper-tools__btns .cancel[data-v-4ad453dc]{width:%?112?%;height:%?60?%;text-align:center;line-height:%?60?%}.lime-clipper-tools__btns .confirm[data-v-4ad453dc]{width:%?112?%;height:%?60?%;line-height:%?60?%;background:var(--lime-clipper-confirm-color,#07c160);border-radius:%?6?%;text-align:center}.lime-clipper-tools__btns uni-image[data-v-4ad453dc]{display:block;width:%?60?%;height:%?60?%}',""]),t.exports=i},"029a":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{path:"",options:{width:400,height:400}}},methods:{successFn:function(t){this.getOpenerEventChannel().emit("success",t.url),uni.navigateBack()},cancel:function(){uni.navigateBack()}},onLoad:function(t){this.path=t.path,t.options&&(this.options=JSON.parse(t.options))}};i.default=n},"0c47":function(t,i,e){var n=e("da84"),a=e("d44e");a(n.JSON,"JSON",!0)},"131a":function(t,i,e){var n=e("23e7"),a=e("d2bb");n({target:"Object",stat:!0},{setPrototypeOf:a})},"19dc":function(t,i,e){var n=e("014f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("9ef5bab0",n,!0,{sourceMap:!1,shadowMode:!1})},"1a6f":function(t,i,e){"use strict";(function(t){e("7a82");var n=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("c7eb")),o=n(e("1da1"));e("a9e3"),e("99af"),e("d3b7"),e("159b"),e("b64b"),e("caad"),e("4fadc"),e("d81d");var r=n(e("922b")),c=n(e("25a9")),l=e("6468"),s={},h={name:"lime-clipper",props:{value:{type:Boolean,default:!0},customStyle:{type:String},canvasId:{type:String,default:"lime-clipper"},zIndex:{type:Number,default:99},imageUrl:{type:String},fileType:{type:String,default:"png"},quality:{type:Number,default:1},width:{type:Number,default:400},height:{type:Number,default:400},minWidth:{type:Number,default:200},maxWidth:{type:Number,default:600},destWidth:Number,destHeight:Number,minHeight:{type:Number,default:200},maxHeight:{type:Number,default:600},isLockWidth:{type:Boolean,default:!1},isLockHeight:{type:Boolean,default:!1},isLockRatio:{type:Boolean,default:!0},scaleRatio:{type:Number,default:1},minRatio:{type:Number,default:.5},maxRatio:{type:Number,default:2},isDisableScale:{type:Boolean,default:!1},isDisableRotate:{type:Boolean,default:!1},isLimitMove:{type:Boolean,default:!1},isShowPhotoBtn:{type:Boolean,default:!0},isShowRotateBtn:{type:Boolean,default:!0},isShowConfirmBtn:{type:Boolean,default:!0},isShowCancelBtn:{type:Boolean,default:!0},rotateAngle:{type:Number,default:90},source:{type:Object,default:function(){return{album:"从相册中选择",camera:"拍照"}}}},data:function(){return{rotateImg:r.default,photoImg:c.default,canvasWidth:0,canvasHeight:0,clipX:0,clipY:0,clipWidth:0,clipHeight:0,animation:!1,imageWidth:0,imageHeight:0,imageTop:0,imageLeft:0,scale:1,angle:0,image:"",sysinfo:{},throttleTimer:null,throttleFlag:!0,timeClipCenter:null,flagClipTouch:!1,flagEndTouch:!1,clipStart:{},animationTimer:null,touchRelative:[{x:0,y:0}],hypotenuseLength:0,ctx:null}},computed:{clipStyle:function(){var t=this.clipWidth,i=this.clipHeight,e=this.clipY,n=this.clipX,a=this.animation;return"\n\t\twidth: ".concat(t,"px;\n\t\theight:").concat(i,"px;\n\t\ttransition-property: ").concat(a?"":"background",";\n\t\tleft: ").concat(this.isMobile?n:(375-this.width/2)/2,"px;\n\t\ttop: ").concat(e,"px\n\t\t")},imageStyle:function(){var t=this.imageWidth,i=this.imageHeight,e=this.imageLeft,n=this.imageTop,a=this.animation,o=this.scale,r=this.angle;if(this.isMobile)var c=e-t/2;else c=(375-t)/2;return"\n\t\t\twidth: ".concat(t?t+"px":"auto",";\n\t\t\theight: ").concat(i?i+"px":"auto",";\n\t\t\ttransform: translate3d(").concat(c,"px, ").concat(n-i/2,"px, 0) scale(").concat(o,") rotate(").concat(r,"deg);\n\t\t\ttransition-duration: ").concat(a?.35:0,"s\n\t\t")},clipSize:function(){var t=this.clipWidth,i=this.clipHeight;return{clipWidth:t,clipHeight:i}},clipPoint:function(){var t=this.clipY,i=this.clipX;return{clipY:t,clipX:i}}},watch:{value:function(t){if(t){if(this.imageUrl){var i=(null===s||void 0===s?void 0:s[this.imageUrl])||{},e=i.imageWidth,n=i.imageHeight,a=i.imageLeft,o=i.imageTop,r=i.scale,c=i.clipX,l=i.clipY,h=i.clipWidth,u=i.clipHeight,d=i.path;d!=this.image?this.image=this.imageUrl:this.setDiffData({imageWidth:e,imageHeight:n,imageLeft:a,imageTop:o,scale:r,clipX:c,clipY:l,clipWidth:h,clipHeight:u})}}else this.animation=0,this.angle=0},imageUrl:function(t){this.image=t},image:{handler:function(){var t=(0,o.default)((0,a.default)().mark((function t(i){return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.getImageInfo(i);case 1:case"end":return t.stop()}}),t,this)})));return function(i){return t.apply(this,arguments)}}()},clipSize:function(t){var i=t.widthVal,e=t.heightVal,n=this.minWidth,a=this.minHeight;n/=2,a/=2,i<n&&this.setDiffData({clipWidth:n}),e<a&&this.setDiffData({clipHeight:a}),this.calcClipSize()},angle:function(t){this.animation=!0,this.moveStop();var i=this.isLimitMove;i&&t%90&&this.setDiffData({angle:90*Math.round(t/90)}),this.imgMarginDetectionScale()},animation:function(t){var i=this;if(clearTimeout(this.animationTimer),t){var e=setTimeout((function(){i.setDiffData({animation:!1})}),260);this.setDiffData({animationTimer:e}),this.animationTimer=e}},isLimitMove:function(t){t&&(this.angle%90&&this.setDiffData({angle:90*Math.round(this.angle/90)}),this.imgMarginDetectionScale())},clipPoint:function(){this.cutDetectionPosition()},width:function(t,i){t!==i&&this.setDiffData({clipWidth:t/2})},height:function(t,i){t!==i&&this.setDiffData({clipHeight:t/2})}},mounted:function(){var t=uni.getSystemInfoSync();this.sysinfo=t,this.setClipInfo(),this.image=this.imageUrl||this.image,this.setClipCenter(),this.calcClipSize(),this.cutDetectionPosition()},methods:{setDiffData:function(t){var i=this;Object.keys(t).forEach((function(e){i[e]!==t[e]&&(i[e]=t[e])}))},getImageInfo:function(t){var i=this;t&&(this.value&&uni.showLoading({title:"请稍候...",mask:!0}),uni.getImageInfo({src:t,success:function(e){["right","left"].includes(e.orientation)?i.imgComputeSize(e.height,e.width):i.imgComputeSize(e.width,e.height),i.image=e.path,i.isLimitMove&&(i.imgMarginDetectionScale(),i.$emit("ready",e));var n=i.imageWidth,a=i.imageHeight,o=i.imageLeft,r=i.imageTop,c=i.scale,l=i.clipX,h=i.clipY,u=i.clipWidth,d=i.clipHeight;s[t]=Object.assign(e,{imageWidth:n,imageHeight:a,imageLeft:o,imageTop:r,scale:c,clipX:l,clipY:h,clipWidth:u,clipHeight:d})},fail:function(t){i.imgComputeSize(),i.isLimitMove&&i.imgMarginDetectionScale()}}))},setClipInfo:function(){var t=this.width,i=this.height,e=this.sysinfo,n=this.canvasId,a=t/2,o=i/2,r=(e.windowHeight-o)/2,c=(e.windowWidth-a)/2,l=e.windowWidth/2,s=e.windowHeight/2;this.ctx=uni.createCanvasContext(n,this),this.clipWidth=a,this.clipHeight=o,this.clipX=c,this.clipY=r,this.canvasHeight=o,this.canvasWidth=a,this.imageLeft=l,this.imageTop=s},setClipCenter:function(){var t=this.sysInfo,i=this.clipHeight,e=this.clipWidth,n=this.imageTop,a=this.imageLeft,o=t||uni.getSystemInfoSync(),r=.5*(o.windowHeight-i),c=.5*(o.windowWidth-e);this.imageTop=n-this.clipY+r,this.imageLeft=a-this.clipX+c,this.clipY=r,this.clipX=c},calcClipSize:function(){var t=this.clipHeight,i=this.clipWidth,e=this.sysinfo,n=this.clipX,a=this.clipY;i>e.windowWidth?this.setDiffData({clipWidth:e.windowWidth}):i+n>e.windowWidth&&this.setDiffData({clipX:e.windowWidth-n}),t>e.windowHeight?this.setDiffData({clipHeight:e.windowHeight}):t+a>e.windowHeight&&(this.clipY=e.windowHeight-a,this.setDiffData({clipY:e.windowHeight-a}))},cutDetectionPosition:function(){var t=this,i=this.clipX,e=this.clipY,n=this.sysinfo,a=this.clipHeight,o=this.clipWidth,r=function(){e<0&&t.setDiffData({clipY:0}),e>n.windowHeight-a&&t.setDiffData({clipY:n.windowHeight-a})},c=function(){i<0&&t.setDiffData({clipX:0}),i>n.windowWidth-o&&t.setDiffData({clipX:n.windowWidth-o})};if(null===e&&null===i){var l=.5*(n.windowHeight-a),s=.5*(n.windowWidth-o);this.setDiffData({clipX:s,clipY:l})}else null!==e&&null!==i?(r(),c()):null!==e&&null===i?(r(),this.setDiffData({clipX:(n.windowWidth-o)/2})):null===e&&null!==i&&(c(),this.setDiffData({clipY:(n.windowHeight-a)/2}))},imgComputeSize:function(t,i){var e=(0,l.calcImageSize)(t,i,this),n=e.imageWidth,a=e.imageHeight;this.imageWidth=n,this.imageHeight=a},imgMarginDetectionScale:function(t){if(this.isLimitMove){var i=(0,l.calcImageScale)(this,t);this.imgMarginDetectionPosition(i)}},imgMarginDetectionPosition:function(t){if(this.isLimitMove){var i=(0,l.calcImageOffset)(this,t),e=i.scale,n=i.left,a=i.top;this.setDiffData({imageLeft:n,imageTop:a,scale:e})}},throttle:function(){this.setDiffData({throttleFlag:!0})},moveDuring:function(){clearTimeout(this.timeClipCenter)},moveStop:function(){var t=this;clearTimeout(this.timeClipCenter);var i=setTimeout((function(){t.animation||t.setDiffData({animation:!0}),t.setClipCenter()}),800);this.setDiffData({timeClipCenter:i})},clipTouchStart:function(t){if(t.preventDefault(),this.image){var i=t.touches[0].clientX,e=t.touches[0].clientY,n=this.clipX,a=this.clipY,o=this.clipWidth,r=this.clipHeight,c=(0,l.determineDirection)(n,a,o,r,i,e);this.moveDuring(),c&&(this.clipStart={width:o,height:r,x:i,y:e,clipY:a,clipX:n,corner:c},this.flagClipTouch=!0,this.flagEndTouch=!0)}else uni.showToast({title:"请选择图片",icon:"none"})},clipTouchMove:function(t){if(t.stopPropagation(),t.preventDefault(),this.image){if(1===t.touches.length){var i=this.flagClipTouch,e=this.throttleFlag;if(i&&e){var n=this.isLockRatio,a=this.isLockHeight,o=this.isLockWidth;if(n&&(o||a))return;this.setDiffData({throttleFlag:!1}),this.throttle();var r=(0,l.clipTouchMoveOfCalculate)(this,t);if(r){var c=r.width,s=r.height,h=r.clipX,u=r.clipY;o||a?o?a||this.setDiffData({clipHeight:s,clipY:u}):this.setDiffData({clipWidth:c,clipX:h}):this.setDiffData({clipWidth:c,clipHeight:s,clipX:h,clipY:u}),this.imgMarginDetectionScale()}}}}else uni.showToast({title:"请选择图片",icon:"none"})},clipTouchEnd:function(){this.moveStop(),this.flagClipTouch=!1},imageTouchStart:function(t){event.preventDefault(),this.flagEndTouch=!1;var i=this.imageLeft,e=this.imageTop,n=t.touches[0].clientX,a=t.touches[0].clientY,o=[];if(1===t.touches.length)o[0]={x:n-i,y:a-e},this.touchRelative=o;else{var r=t.touches[1].clientX,c=t.touches[1].clientY,s=Math.abs(n-r),h=Math.abs(a-c),u=(0,l.calcPythagoreanTheorem)(s,h);o=[{x:n-i,y:a-e},{x:r-i,y:c-e}],this.touchRelative=o,this.hypotenuseLength=u}},imageTouchMove:function(t){event.preventDefault();var i=this.flagEndTouch,e=this.throttleFlag;if(!i&&e){var n=t.touches[0].clientX,a=t.touches[0].clientY;if(this.setDiffData({throttleFlag:!1}),this.throttle(),this.moveDuring(),1===t.touches.length){var o=(0,l.imageTouchMoveOfCalcOffset)(this,n,a),r=o.left,c=o.top;this.setDiffData({imageLeft:r,imageTop:c}),this.imgMarginDetectionPosition()}else{var s=t.touches[1].clientX,h=t.touches[1].clientY,u=Math.abs(n-s),d=Math.abs(a-h),f=(0,l.calcPythagoreanTheorem)(u,d),p=this.scale*(f/this.hypotenuseLength);this.isDisableScale?p=1:(p=p<=this.minRatio?this.minRatio:p,p=p>=this.maxRatio?this.maxRatio:p,this.$emit("change",{width:this.imageWidth*p,height:this.imageHeight*p})),this.imgMarginDetectionScale(p),this.hypotenuseLength=Math.sqrt(Math.pow(u,2)+Math.pow(d,2)),this.scale=p}}},imageTouchEnd:function(){this.setDiffData({flagEndTouch:!0}),this.moveStop()},uploadImage:function(){var t=this,i=Object.entries(this.source),e=["original","compressed"],n=function(i){var e=i.tempFilePaths,n=i.tempFiles;t.image=e?e[0]:n[0].path},a=function(t){"message"!==t&&uni.chooseImage({count:1,sizeType:e,sourceType:[t],success:n})};i.length>1?uni.showActionSheet({itemList:i.map((function(t){return t[1]})),success:function(t){var e=t.tapIndex;a(i[e][0])}}):a(i[0][0])},imageReset:function(){var t=this.sysinfo||uni.getSystemInfoSync();this.scale=1,this.angle=0,this.imageTop=t.windowHeight/2,this.imageLeft=t.windowWidth/2},imageLoad:function(t){this.imageReset(),uni.hideLoading(),this.$emit("ready",t.detail)},rotate:function(t){if(!this.isDisableRotate)if(this.image){var i=this.rotateAngle,e=this.angle,n=t.currentTarget.dataset.type;this.angle="along"===n?e+i:e-i,this.$emit("rotate",this.angle)}else uni.showToast({title:"请选择图片",icon:"none"})},confirm:function(){var i=this;if(this.image){uni.showLoading({title:"加载中"});var e=this.canvasHeight,n=this.canvasWidth,a=this.clipHeight,o=this.clipWidth,r=this.ctx,c=this.scale,l=this.imageLeft,s=this.imageTop,h=this.clipX,u=this.clipY,d=this.angle,f=this.scaleRatio,p=this.image,g=this.quality,m=this.fileType,v=(this.type,this.canvasId),w=function(){var e=i.imageWidth*c*f,n=i.imageHeight*c*f,w=l-h,y=s-u;r.translate(w*f,y*f),r.rotate(d*Math.PI/180),r.drawImage(p,-e/2,-n/2,e,n),r.draw(!1,(function(){var e=o*f,n=a*f,r={x:0,y:0,width:e,height:n,destWidth:i.destWidth||e,destHeight:i.destHeight||n,canvasId:v,fileType:m,quality:g,success:function(t){c.url=t.tempFilePath||t.filePath,uni.hideLoading(),i.$emit("success",c),i.$emit("input",!1)},fail:function(e){t.error("error",e),i.$emit("fail",e),i.$emit("input",!1)}},c={url:"",width:e,height:n};uni.canvasToTempFilePath(r,i)}))};n!==o||e!==a?(this.canvasWidth=o,this.canvasHeight=a,r.draw(),this.$nextTick((function(){setTimeout((function(){w()}),100)}))):w()}else uni.showToast({title:"请选择图片",icon:"none"})},cancel:function(){this.$emit("cancel",!1),this.$emit("input",!1)}}};i.default=h}).call(this,e("5a52")["default"])},"1b80":function(t,i,e){"use strict";e.r(i);var n=e("029a"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"1da1":function(t,i,e){"use strict";function n(t,i,e,n,a,o,r){try{var c=t[o](r),l=c.value}catch(s){return void e(s)}c.done?i(l):Promise.resolve(l).then(n,a)}e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var i=this,e=arguments;return new Promise((function(a,o){var r=t.apply(i,e);function c(t){n(r,a,o,c,l,"next",t)}function l(t){n(r,a,o,c,l,"throw",t)}c(void 0)}))}},e("d3b7")},"23dc":function(t,i,e){var n=e("d44e");n(Math,"Math",!0)},"25a9":function(t,i,e){t.exports=e.p+"static/img/photo.ac4fb10d.svg"},3410:function(t,i,e){var n=e("23e7"),a=e("d039"),o=e("7b0b"),r=e("e163"),c=e("e177"),l=a((function(){r(1)}));n({target:"Object",stat:!0,forced:l,sham:!c},{getPrototypeOf:function(t){return r(o(t))}})},"391f":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"lime-clipper",class:{open:t.value},style:"z-index: "+t.zIndex+";"+t.customStyle,attrs:{"disable-scroll":!0}},[e("v-uni-view",{staticClass:"lime-clipper-mask",on:{touchstart:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.clipTouchStart.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.clipTouchMove.apply(void 0,arguments)},touchend:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.clipTouchEnd.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"lime-clipper__content",style:t.clipStyle},t._l([0,0,0,0],(function(t,i){return e("v-uni-view",{key:i,staticClass:"lime-clipper__edge"})})),1)],1),t.image?e("v-uni-image",{staticClass:"lime-clipper-image",style:t.imageStyle,attrs:{src:t.image,mode:"auto"==t.imageWidth?"widthFix":"scaleToFill"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.imageLoad.apply(void 0,arguments)},load:function(i){arguments[0]=i=t.$handleEvent(i),t.imageLoad.apply(void 0,arguments)},touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.imageTouchStart.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.imageTouchMove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.imageTouchEnd.apply(void 0,arguments)}}}):t._e(),e("v-uni-canvas",{staticClass:"lime-clipper-canvas",style:"width: "+t.canvasWidth*t.scaleRatio+"px; height:"+t.canvasHeight*t.scaleRatio+"px;",attrs:{"canvas-id":t.canvasId,id:"lime-clipper","disable-scroll":!0}}),e("v-uni-view",{staticClass:"lime-clipper-tools"},[e("v-uni-view",{staticClass:"lime-clipper-tools__btns"},[t.isShowCancelBtn?e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cancel.apply(void 0,arguments)}}},[t.$slots.cancel?t._t("cancel"):e("v-uni-view",{staticClass:"cancel"},[t._v("取消")])],2):t._e(),t.isShowPhotoBtn?e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.uploadImage.apply(void 0,arguments)}}},[t.$slots.photo?t._t("photo"):e("v-uni-image",{attrs:{src:t.photoImg}})],2):t._e(),t.isShowRotateBtn?e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rotate.apply(void 0,arguments)}}},[t.$slots.rotate?t._t("rotate"):e("v-uni-image",{attrs:{src:t.rotateImg,"data-type":"inverse"}})],2):t._e(),t.isShowConfirmBtn?e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.confirm.apply(void 0,arguments)}}},[t.$slots.confirm?t._t("confirm"):e("v-uni-view",{staticClass:"confirm"},[t._v("确定")])],2):t._e()],1),t._t("default")],2)],1)},a=[]},"44b9":function(t,i,e){"use strict";var n=e("19dc"),a=e.n(n);a.a},"4fadc":function(t,i,e){var n=e("23e7"),a=e("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return a(t)}})},"538e":function(t,i,e){"use strict";e.r(i);var n=e("812c"),a=e("1b80");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);var r=e("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);i["default"]=c.exports},6468:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.calcImageOffset=function(t,i){var e=t.imageLeft,n=t.imageTop;i=i||t.scale;var a=t.imageWidth,o=t.imageHeight;t.angle/90%2&&(a=t.imageHeight,o=t.imageWidth);var r=t.clipX,c=t.clipWidth,l=t.clipY,s=t.clipHeight,h=function(t){return t*i/2},u=h(a),d=h(o);return e=r+u>=e?e:r+u,e=r+c-u<=e?e:r+c-u,n=l+d>=n?n:l+d,n=l+s-d<=n?n:l+s-d,{left:e,top:n,scale:i}},i.calcImageScale=function(t,i){i=i||t.scale;var e=t.imageWidth,n=t.imageHeight,a=t.clipWidth,o=t.clipHeight,r=t.angle;r/90%2&&(e=n,n=e);e*i<a&&(i=a/e);n*i<o&&(i=Math.max(i,o/n));return i},i.calcImageSize=function(t,i,e){var n=t,a=i,o=e.clipWidth,r=e.clipHeight,c=e.sysinfo,l=e.width,s=e.height;if(n&&a)n/a>(o||l)/(o||s)?(a=r||s,n=t/i*a):(n=o||l,a=i/t*n);else{var h=c||uni.getSystemInfoSync();n=h.windowWidth,a=0}return{imageWidth:n,imageHeight:a}},i.calcPythagoreanTheorem=function(t,i){return Math.sqrt(Math.pow(t,2)+Math.pow(i,2))},i.clipTouchMoveOfCalculate=function(t,i){var e=i.touches[0].clientX,n=i.touches[0].clientY,a=t.clipWidth,o=t.clipHeight,r=t.clipY,c=t.clipX,l=t.clipStart,s=t.isLockRatio,h=t.maxWidth,u=t.minWidth,d=t.maxHeight,f=t.minHeight;h/=2,u/=2,f/=2,d/=2;var p=a,g=o,m=r,v=c,w=function(){p=p<=h?p>=u?p:u:h,g=g<=d?g>=f?g:f:d},y=function(){return(p>h||p<u||g>d||g<f)&&s?(w(),!1):(w(),!0)};switch(g=l.height+(l.corner>1&&l.corner<4?1:-1)*(l.y-n),l.corner){case 1:if(p=l.width-l.x+e,s&&(g=p/(a/o)),!y())return;break;case 2:if(p=l.width-l.x+e,s&&(g=p/(a/o)),!y())return;m=l.clipY-(g-l.height);break;case 3:if(p=l.width+l.x-e,s&&(g=p/(a/o)),!y())return;m=l.clipY-(g-l.height),v=l.clipX-(p-l.width);break;case 4:if(p=l.width+l.x-e,s&&(g=p/(a/o)),!y())return;v=l.clipX-(p-l.width);break;default:break}return{width:p,height:g,clipX:v,clipY:m}},i.determineDirection=function(t,i,e,n,a,o){var r,c=[t+e/2,i+n/2],l=[a,o];l[0]<=c[0]&&l[1]<=c[1]?r=3:l[0]>=c[0]&&l[1]<=c[1]?r=2:l[0]<=c[0]&&l[1]>=c[1]?r=4:l[0]>=c[0]&&l[1]>=c[1]&&(r=1);return r},i.imageTouchMoveOfCalcOffset=function(t,i,e){var n=i-t.touchRelative[0].x,a=e-t.touchRelative[0].y;return{left:n,top:a}}},"812c":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={lClipper:e("8543").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"clipperContainer"},[e("l-clipper",{attrs:{width:t.options.width,"scale-ratio":2,"is-lock-width":!1,"is-lock-height":!1,height:t.options.height,"image-url":t.path},on:{success:function(i){arguments[0]=i=t.$handleEvent(i),t.successFn.apply(void 0,arguments)},cancel:function(i){arguments[0]=i=t.$handleEvent(i),t.cancel.apply(void 0,arguments)}}})],1)},o=[]},8543:function(t,i,e){"use strict";e.r(i);var n=e("391f"),a=e("e600");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("44b9");var r=e("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"4ad453dc",null,!1,n["a"],void 0);i["default"]=c.exports},"922b":function(t,i,e){t.exports=e.p+"static/img/rotate.c2113aba.svg"},"944a":function(t,i,e){var n=e("d066"),a=e("e065"),o=e("d44e");a("toStringTag"),o(n("Symbol"),"Symbol")},b636:function(t,i,e){var n=e("e065");n("asyncIterator")},c7eb:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
i.default=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,o=Object.defineProperty||function(t,i,e){t[i]=e.value},r="function"==typeof Symbol?Symbol:{},c=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function h(t,i,e){return Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[i]}try{h({},"")}catch(C){h=function(t,i,e){return t[i]=e}}function u(t,i,e,n){var a=i&&i.prototype instanceof p?i:p,r=Object.create(a.prototype),c=new W(n||[]);return o(r,"_invoke",{value:_(t,e,c)}),r}function d(t,i,e){try{return{type:"normal",arg:t.call(i,e)}}catch(C){return{type:"throw",arg:C}}}t.wrap=u;var f={};function p(){}function g(){}function m(){}var v={};h(v,c,(function(){return this}));var w=Object.getPrototypeOf,y=w&&w(w(H([])));y&&y!==e&&a.call(y,c)&&(v=y);var b=m.prototype=p.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(i){h(t,i,(function(t){return this._invoke(i,t)}))}))}function D(t,i){var e;o(this,"_invoke",{value:function(o,r){function c(){return new i((function(e,c){(function e(o,r,c,l){var s=d(t[o],t,r);if("throw"!==s.type){var h=s.arg,u=h.value;return u&&"object"==(0,n.default)(u)&&a.call(u,"__await")?i.resolve(u.__await).then((function(t){e("next",t,c,l)}),(function(t){e("throw",t,c,l)})):i.resolve(u).then((function(t){h.value=t,c(h)}),(function(t){return e("throw",t,c,l)}))}l(s.arg)})(o,r,e,c)}))}return e=e?e.then(c,c):c()}})}function _(t,i,e){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return M()}for(e.method=a,e.arg=o;;){var r=e.delegate;if(r){var c=T(r,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var l=d(t,i,e);if("normal"===l.type){if(n=e.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(n="completed",e.method="throw",e.arg=l.arg)}}}function T(t,i){var e=i.method,n=t.iterator[e];if(void 0===n)return i.delegate=null,"throw"===e&&t.iterator["return"]&&(i.method="return",i.arg=void 0,T(t,i),"throw"===i.method)||"return"!==e&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var a=d(n,t.iterator,i.arg);if("throw"===a.type)return i.method="throw",i.arg=a.arg,i.delegate=null,f;var o=a.arg;return o?o.done?(i[t.resultName]=o.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=void 0),i.delegate=null,f):o:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,f)}function S(t){var i={tryLoc:t[0]};1 in t&&(i.catchLoc=t[1]),2 in t&&(i.finallyLoc=t[2],i.afterLoc=t[3]),this.tryEntries.push(i)}function L(t){var i=t.completion||{};i.type="normal",delete i.arg,t.completion=i}function W(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function H(t){if(t){var i=t[c];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function i(){for(;++e<t.length;)if(a.call(t,e))return i.value=t[e],i.done=!1,i;return i.value=void 0,i.done=!0,i};return n.next=n}}return{next:M}}function M(){return{value:void 0,done:!0}}return g.prototype=m,o(b,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=h(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var i="function"==typeof t&&t.constructor;return!!i&&(i===g||"GeneratorFunction"===(i.displayName||i.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,h(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(D.prototype),h(D.prototype,l,(function(){return this})),t.AsyncIterator=D,t.async=function(i,e,n,a,o){void 0===o&&(o=Promise);var r=new D(u(i,e,n,a),o);return t.isGeneratorFunction(e)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},x(b),h(b,s,"Generator"),h(b,c,(function(){return this})),h(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var i=Object(t),e=[];for(var n in i)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in i)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=H,W.prototype={constructor:W,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var i in this)"t"===i.charAt(0)&&a.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function e(e,n){return r.type="throw",r.arg=t,i.next=e,n&&(i.method="next",i.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],r=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,i){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=i&&i<=o.finallyLoc&&(o=null);var r=o?o.completion:{};return r.type=t,r.arg=i,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(r)},complete:function(t,i){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&i&&(this.next=i),f},finish:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),f}},catch:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var a=n.arg;L(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,e){return this.delegate={iterator:H(t),resultName:i,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t},e("7a82"),e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("b636"),e("944a"),e("0c47"),e("23dc"),e("3410"),e("d9e2"),e("d401"),e("14d9"),e("159b"),e("131a"),e("26e9"),e("fb6a");var n=function(t){return t&&t.__esModule?t:{default:t}}(e("53ca"))},e600:function(t,i,e){"use strict";e.r(i);var n=e("1a6f"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a}}]);