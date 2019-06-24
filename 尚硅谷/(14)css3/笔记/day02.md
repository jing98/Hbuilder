###day02
###盒模型垂直水平居中的多种方法：
	https://blog.csdn.net/Li_dengke/article/details/81193451
***		1.有高宽的垂直水平居中
		#test{
				/*
					* 垂直水平居中,必须要有宽高,margin: auto;
				*/
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
				width: 100px;
				height: 100px;
		}
		
***		2.
		div{
				width: 200px;
				height: 200px;
				position: absolute;
				left: 50%;
				top:50%;
				margin-left: -100px;
				margin-top: -100px;
			}
			
***		3.未知元素宽高垂直水平居中（已知高宽也可以）
		a{
			position:absolute;
			/*
				 top,height百分比参照于包含块的高度
				 left,margin,padding,width百分比参照于包含块的宽度
				 translate(50%,-50%)百分比参照于自身的宽高
				 background-position百分比参照于（图片区域-图片的位图像素值）
			* */
			left: 50%;
			top: 50%;
			transform: translate(50%,-50%);
		}
***		4.相对于#warp居中，#warp{position: relative;}
		但是这个有局限性，在下面要再次使用transform的话就不起作用
		#warp{
				position: relative;
				margin: 200px auto;
				width: 300px;
				height: 300px;
				border: 1px solid;
			}
			#test{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate3d(-50%,-50%,0);
				width: 100px;
				height: 100px;
				background: pink;
			}
	
###图片水平垂直居中
***		1.
		body:after{
			content: "";
			display: inline-block;
			height: 100%;
			vertical-align: middle;
		}
		img{
			vertical-align: middle;
		}
***		2.
		img{
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
		}

###滚动条问题
	滚动条永远不会出现在html身上
	###滚动条出现在body身上：
		html和body都有overflow属性
	如果html和body中只有一个有overflow属性，滚动条出现在html的上一层，即窗口

###禁止系统滚动条
	html或者body随便哪一个overflow:hidden
	一般   html,body{
			 height: 100%;
			 overflow: hidden;
		}
		

--------------------------------------------------------------------------------
 
###复习
	1.盒模型新增样式
		box-shadow:
			关键字(inset内阴影，outset外阴影默认)
			length(x轴的偏移量，可正可负)
			length(y轴的偏移量)
			length(模糊程度)
			length(阴影面积)
			color(阴影颜色)
		text-shadow:
			length(x轴的偏移量，可正可负)
			length(y轴的偏移量)
			length(模糊程度)
			color(阴影颜色)
	2.倒影（webkit内核下 文字描边 背景镂空）
			渐变倒影：-webkit-box-reflect
	3.box-sizing
		border-box:代表元素上设置的width和height表示的是border-box尺寸
		content-box:代表元素上设置的width和height表示的是content-box尺寸
***4.层级
		a.浮动提升半层，只有在浮动的情况下，才需要考虑元素分两层
		定位元素提一层
			相对定位会在文档流里有残留
		b.z-index为1怎么都会比a高；
		  z-index为-1怎么都会比a低
	5.包含块
		初始包含块：和视窗大小位置尺寸一样的矩形
		系统滚动条的会不会影响初始包含块的位置？
			会
		禁止系统滚动条
			html,body{
				height:100%;
				overflow:hidden;
			}
		怎么解决ie6下固定定位失效的问题？
			用绝对定位来模拟固定定位
				1.禁止系统滚动条
				2.将滚动条作用在最外层的包裹器上或者在body上
				3.因为移动包裹器或者body身上的滚动条并不会影响初始包含块的位置
					所以一个按照初始包含块定位的元素就不会产生移动
	6.边框图片、渐变（发廊灯、光斑动画）
	7.背景
		css2
			background-color		平铺整个boder-box
			background-image		默认从padding-box开始绘制，从boder-box开始剪裁
									css3中有多背景，默认绘制时尺寸是自己的位图像素
			background-repeat   	
									控制平铺与否
			background-position		
									控制背景图片在背景区域中的位置
									px
									百分比
										参照于背景区域减去背景图片的位图像素值
			background-attachment
									scroll：默认值，背景图不会随着元素滚动条的滚动而滚动
									fixed：背景图铺在视口中固定定位了
		css3
			background-origin
									控制起始绘制位置
			background-clip
									控制起始剪切位置
			background-size			图片是自适应的
									控制背景大小
									图片是自适应的
***8.如何实现一张图片的垂直水平居中
		body:after{
			content: "";
			display: inline-block;
			height: 100%;
			vertical-align: middle;
		}
		img{
			vertical-align: middle;
		}
	