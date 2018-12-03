(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{345:function(a,t,s){"use strict";s.r(t);var r=s(1),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"android中drawable详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android中drawable详解","aria-hidden":"true"}},[a._v("#")]),a._v(" Android中Drawable详解")]),a._v(" "),s("p",[a._v("android中的Drawable表示一种图像的概念，通过颜色构造出各种各样的图像效果。在实际开发中，常用作View的背景使用。Drawable分类有很多，主要有BitmapDrawable、LayerDrawable、StateListDrawable、LevelListDrawable、TransitionDrawable、InsertDrawable、ClipDrawable。开发者可以使用xml来定义，也可以通过代码创建Drawable对象来定义，接下来介绍常用的Drawable。\n")]),a._v(" "),s("h2",{attrs:{id:"bitmapdrawable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bitmapdrawable","aria-hidden":"true"}},[a._v("#")]),a._v(" BitmapDrawable")]),a._v(" "),s("p",[a._v("BitmapDrawable它表示的就是一张图片，通过src属性引用图片，然后设置图片的绘制方式，例如平铺填充、拉伸填充、保持图片的原始大小。示例如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("bitmap xmlns"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("android"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"http://schemas.android.com/apk/res/android"')]),a._v("\n    android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("antialias"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"true"')]),a._v("\n    android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("src"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"@mipmap/ic_launcher"')]),a._v("\n\tandroid"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("dither"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"true"')]),a._v("\n    android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("filter"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"true"')]),a._v("\n    android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("tileMode"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"mirror"')]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{attrs:{class:"token operator"}},[a._v("<")]),s("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v("bitmap"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("其中android:src引用图片的id，android:tileMode代表使用的平铺模式，android:antialias代表是否开启图片抗锯齿功能，android:dither代表是否开启抖动效果，android:filter代表是否开启过滤效果。")]),a._v(" "),s("h2",{attrs:{id:"layerdrawable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layerdrawable","aria-hidden":"true"}},[a._v("#")]),a._v(" LayerDrawable")]),a._v(" "),s("p",[a._v("LayerDrawable通过将一组drawable放在layerdrawable中按照顺序绘制，从而达到叠加的效果。示例如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("layer"),s("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("list xmlns"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("android"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"http://schemas.android.com/apk/res/android"')]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\t"),s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("item \n    \t\tandroid"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("drawable"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"@mipmap/ic_launcher"')]),a._v(" \n    \t\tandroid"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("gravity"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"left"')]),a._v(" \n    \t\tandroid"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("top"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"10dp"')]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("/")]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" \n\t"),s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("item \n    \t\tandroid"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("drawable"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"@mipmap/ic_launcher"')]),a._v(" \n    \t\tandroid"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("gravity"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"center"')]),a._v(" \n    \t\tandroid"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("top"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"20dp"')]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("/")]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" \n"),s("span",{attrs:{class:"token operator"}},[a._v("<")]),s("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v("layer"),s("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("list"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("每个item代表一个引用drawable，下面的叠加在上面的，形成叠加效果。你也可以设置drawable的位置、对齐方式等等。")]),a._v(" "),s("h2",{attrs:{id:"statelistdrawable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statelistdrawable","aria-hidden":"true"}},[a._v("#")]),a._v(" StateListDrawable")]),a._v(" "),s("p",[a._v("StateListDrawable它是通过不同的状态提供不同的背景，例如按钮点击、获取焦点是背景的改变。示例如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("selector xmlns"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("android"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"http://schemas.android.com/apk/res/android"')]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("item android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("drawable"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"@mipmap/ic_launcher"')]),a._v(" \n        android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("state_focused"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"true"')]),a._v(" \n        android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("state_pressed"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"true"')]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("/")]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{attrs:{class:"token operator"}},[a._v("<")]),s("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v("selector"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"levellistdrawable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#levellistdrawable","aria-hidden":"true"}},[a._v("#")]),a._v(" LevelListDrawable")]),a._v(" "),s("p",[a._v("LevelListDrawable也是管理一组drawable的集合，但是它通过设置level等级来显示对应的drawable。示例如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("level"),s("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("list xmlns"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("android"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"http://schemas.android.com/apk/res/android"')]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("item \n        android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("drawable"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"@mipmap/ic_launcher"')]),a._v(" \n        android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("maxLevel"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"5"')]),a._v(" \n        android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("minLevel"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"1"')]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("/")]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" \n    "),s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("item \n        android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("drawable"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"@mipmap/ic_launcher"')]),a._v(" \n        android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("maxLevel"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"10"')]),a._v(" \n        android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("minLevel"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"6"')]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("/")]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" \n"),s("span",{attrs:{class:"token operator"}},[a._v("<")]),s("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v("level"),s("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("list"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("android:maxLevel与android:minLevel代表最低与最高等级，当你把它作为ImageView的图片时，可以通过ImageView的setImageLevel()方法来设置显示等级，从而显示对应的drawable。")]),a._v(" "),s("h2",{attrs:{id:"transitiondrawable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transitiondrawable","aria-hidden":"true"}},[a._v("#")]),a._v(" TransitionDrawable")]),a._v(" "),s("p",[a._v("TransitionDrawable它是LayerDrawable的子类，主要实现两个Drawable之间淡入淡出的效果动画。示例如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("transition xmlns"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("android"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"http://schemas.android.com/apk/res/android"')]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("item android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("drawable"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"@mipmap/ic_launcher"')]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("/")]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("item android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("drawable"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"@mipmap/ic_launcher"')]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("/")]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{attrs:{class:"token operator"}},[a._v("<")]),s("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v("transition"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("TransitionDrawable transitionDrawable "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TransitionDrawable"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" view"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("getDrawable")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        transitionDrawable"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("startTransition")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token number"}},[a._v("1000")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        transitionDrawable"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("reverseTransition")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token number"}},[a._v("1000")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("通过view获取它的TransitionDrawable，然后使用startTransition和reverseTransition实现淡入淡出效果以及它的逆过程。")]),a._v(" "),s("h2",{attrs:{id:"insertdrawable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insertdrawable","aria-hidden":"true"}},[a._v("#")]),a._v(" InsertDrawable")]),a._v(" "),s("p",[a._v("InsertDrawable它将一个drawable插入自己的内部当中，并可以在四周留出间距，很像drawable的padding属性。示例如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("inset xmlns"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("android"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"http://schemas.android.com/apk/res/android"')]),a._v("\n    android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("drawable"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"@mipmap/ic_launcher"')]),a._v("\n    android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("insetBottom"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"10dp"')]),a._v("\n    android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("insetLeft"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"10dp"')]),a._v("\n    android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("insetRight"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"10dp"')]),a._v("\n    android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("insetTop"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"10dp"')]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{attrs:{class:"token operator"}},[a._v("<")]),s("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v("inset"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("其中android:insetTop属性代表距离顶部的大小，其他同理。")]),a._v(" "),s("h2",{attrs:{id:"clipdrawable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clipdrawable","aria-hidden":"true"}},[a._v("#")]),a._v(" ClipDrawable")]),a._v(" "),s("p",[a._v("ClipDrawable它通过setLevel(int level)方法来剪切drawable，level等级是从0~10000，0为完全不显示，10000为完全显示。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("clip xmlns"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("android"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"http://schemas.android.com/apk/res/android"')]),a._v("\n    android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("clipOrientation"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"horizontal"')]),a._v("\n    android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("drawable"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"@mipmap/ic_launcher"')]),a._v("\n    android"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("gravity"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token string"}},[a._v('"left"')]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{attrs:{class:"token operator"}},[a._v("<")]),s("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v("clip"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("ClipDrawable clipDrawable "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ClipDrawable"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" view"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("getDrawable")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        clipDrawable"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("setLevel")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token number"}},[a._v("1000")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("android:clipOrientation设置裁剪方向。通过view获取ClipDrawable然后设置等级，进行裁剪。")]),a._v(" "),s("p",[a._v("如果以上的drawable不能满足你的要求，你也可以自定义drawable，然后在onDraw()方法中绘制你所需要的图形。")])])}],!1,null,null,null);n.options.__file="android41.md";t.default=n.exports}}]);