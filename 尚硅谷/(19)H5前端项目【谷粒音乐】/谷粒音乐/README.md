###谷粒音乐
	谷粒音乐是使用WEB技术(HTML、JavaScript、CSS)直接构建的移动端APP。
	深入移动端开发的最核心部分，讲解了移动端的像素理论、视口理论，深入剖析了rem适配、viewport适配的原理。
	整个项目在css层面封装度也很高。
	使用了less等预处理器技术。对less的嵌套，继承，混合等进行了强有力的运用。
	对移动端常见的无缝滑屏,快速滑屏,橡皮筋效果，即点即停等效果实现了原生js的封装。
	可以说在整个课程中我们从无到有搭建了一个移动端UI库。
	
###问题
--- （1）滑动时遮罩消失以及点击按钮遮罩消失又打开问题
	在写完滑动的时候遮罩消失了之后出现了问题，遮罩消失了之后又打开了，点在按钮上会出现问题
	主要是因为逻辑错误了，因为原来没有给menuBtn绑定touchstart事件，绑定的是touchuend事件，
	所以，冒泡冒上去会先执行下面document的touchstart事件  isXX = false 什么都不执行
	然后去执行menuBtn上的事件，isXX = false 执行 tools.addClass(menuBtn, "active");
												 mask.style.display = "block";
	然后isXX = true ，下一次再次点击的时候，执行document的touchstart事件 tools.removeClass(menuBtn, "active");
																		 mask.style.display = "none";
																		 isXX = !isXX;
	然后再次执行menuBtn上的事件，isXX = false 执行 tools.addClass(menuBtn, "active");
												   mask.style.display = "block";
	所以逻辑应该是menuBtn上的事件先执行，所以将touchuend改为touchstart，但是同时又有问题，刚开始点不开了
	因为冒泡冒上去执行了document的touchstart事件 tools.removeClass(menuBtn, "active");
												 mask.style.display = "none";
												 isXX = !isXX;
												 所以按钮点不开
	menuBtn和document两个逻辑应该是互相不能影响的，所以取消menuBtn上的冒泡
	
--- （2）点击遮罩不消失问题	
	在写头部遮罩的时候，一定要注意一个问题，要取消冒泡ev.stopPropagation()
	在点击其他地方的时候，遮罩要消失，但是在点击遮罩的时候不能消失，因为它上面是链接是要进行跳转的
	在mask添加阻止冒泡事件
	
--- （3）在遮罩上面滑动出现橡皮筋效果问题
	每次阻止冒泡之后一定要阻止默认行为
		ev.stopPropagation();
		ev.preventDefault();

--- (4)解决手动的橡皮筋效果和滑屏的橡皮筋效果之间的冲突
	
	
	




		


###注意
	1.头部布局 效果
		---怎么使用less来弥补rem适配的缺点
			定义了一个变量@rem（代表1rem包含多少位图像素）
		---表单
			表单高亮  outline:none
			表单内阴影  border:none
		---1物理像素的实现
			less 混合版
		---移动端骨架搭建
			meta标签
			挑选一个适配方案（百分比，rem适配，viewport适配）
			布局形式（流体+固定）
			全面禁止事件默认行为的
		---js	
			每次冒泡的时候阻止事件的默认行为
	2.导航的布局 橡皮筋效果
		---导航 滑屏区域与 滑屏元素的布局
			滑屏区域宽度必定占满一个视口
				滑屏区域宽度100%
			滑屏元素必须被子项撑开
				滑屏元素必须浮动（为了能被子项撑开）
				滑屏元素禁止子项换行
				子项统一inline-block
		---无缝滑屏 滑屏区域	与 滑屏元素的布局
			滑屏区域宽度必定占满一个视口
				滑屏区域宽度100%
			滑屏元素必须被子项撑开
				width：子项个数*100%
				子项统一：1/子项个数*100%
	
###橡皮筋效果
	减少每次move的有效距离，最终的移动距离还是一直在增大
	move:每次手指移动的距离
	
###混合和继承的区别
	.mixin(){
		规则集
	}
	#test{
		.mixin()
		//规则集
	}
	#test2{
		.mixin()
		//规则集
	}

	.extend{
		规则集
	}
	#test{
		&::extend(.extend)
	}
	#test2{
		&::extend(.extend)
	}
	#test,#test2{
		//规则集
	}

	混合就是将一系列属性从一个规则集引入到另一个规则集的方式
		1.普通混合      
		2.不带输出的混合
		3.带参数的混合
		4.带参数并且有默认值的混合
		5.带多个参数的混合
	
	继承
		性能比混合高
		灵活度比混合低