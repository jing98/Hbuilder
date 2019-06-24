###day05+day06

###steps(num,[start/end])
	num:拆成多少步(当num为12时，整个动画最好有13帧)
	start:看不见第一帧
	end:看不见最后一帧

	transform只能使用在块级元素上！！！

###old&new flew总结
	0.flex frog练习：
		http://flexboxfroggy.com/
	1.flex基础点
		---什么是容器，什么是项目，什么是主轴，什么是侧轴？
		---项目永远排列在主轴的正方向上
		---flex分新旧两个版本
			-webkit-box
			-webkit-flex  / flex
	
	2.注意点
		---新版本的flex要比老版本的flex强大很多，有没有必要学习老版本的flex?
			移动端开发者必须要关注老版本的flex
				因为很多移动端设备内核低只支持老版本的flex
		---老版本的box通过两个属性四个属性值控制了主轴的位置和方向
			新版本的flex通过一个属性四个属性值控制了主轴的位置和方向
	3.老版本
		---容器
			容器的布局方向
				-webkit-box-orient:horizontal/vertical
					控制主轴是哪一根
						horizontal:	x轴
						vertical:	y轴
			容器的排列方向
				-webkit-box-direction:normal/reverse
					控制主轴的方向
						normal:		从左往右（正方向）
						reverse:	从右往左（反方向）
			富裕空间的管理
				只决定富裕空间的位置，不会给项目去分配空间
				主轴
					-webkit-box-pack
						主轴是x轴
						 	start: 	  在右边
							end: 	  在左边
							center:  在两边
							justify: 在项目之间
						主轴是y轴
							start: 	  在下边
							end: 	  在上边
				 			center:  在两边
							justify: 在项目之间
				侧轴
					-webkit-box-align
					 	侧轴是x轴
					 		start:  在右边
						 	end: 	在左边
						 	center: 在两边
						侧轴是y轴
							start:  在下边
						 	end: 	在上边
					 		center: 在两边
		---项目
			弹性空间管理
				-webkit-box-flex:弹性因子（默认值为0）
				 
	4.新版本
		---容器
			容器的布局方向
			容器的排列方向
				flex-direction
					控制主轴是哪一根，控制主轴的方向
						row:			从左往右的x轴
						row-reverse:	从右往左的x轴
						column:			从上往下的y轴
						column-reverse:	从下往上的y轴
			富裕空间的管理
				只决定富裕空间的位置，不会给项目去分配空间
				主轴
					justify-content 
						flex-start:  	在主轴的正方向
					 	flex-end:   	在主轴的反方向
					 	center:  		在两边
						space-between:  在项目之间 
					 	space-around:	在项目两边
				侧轴
					align-items
						flex-start:  	在侧轴的正方向
						flex-end: 		在侧轴的反方向
					 	center: 		在两边
						baseline:		按基线对齐
						stretch:		等高布局（项目没有高度）
		---项目
			弹性空间管理
				flex-grow:弹性因子（默认值为0）
	5.新版本新增的			
		---容器
			flex-wrap:控制侧轴的方向
				nowrap:      不换行
				wrap:        换行，侧轴方向由上而下   （flex-shrink失效）
				wrap-reverse:换行，侧轴方向由下而上   （flex-shrink失效）
			
			align-content:多行/列时侧轴富裕空间的管理（把多行/列看成一个整体）
			
			flex-flow:flex-direction和flex-wrap的简写属性
				本质上控制了主轴和侧轴分别是哪一根，以及它们的方向
		---项目
			order:控制项目的排列顺序
			align-self:项目自身富裕空间的管理
			flex-shrink:收缩因子（默认值为1）
			flex-basis:伸缩规则计算的基准值（默认拿width或height的值）
	6.伸缩规则
		flex-basis（默认值为auto）
		flex-grow（默认值为0）
	 		可用空间 = (容器大小 - 所有相邻项目flex-basis的总和) 没有flex-basis的话就是width  
			可扩展空间 = (可用空间/所有相邻项目flex-grow的总和)
			每项伸缩大小 = (伸缩基准值(flex-basis) + (可扩展空间 x flex-grow值))
		flex-shrink（默认值为1）
			前提条件为flex-wrap:nowrap
				1.计算收缩因子与基准值乘的总和  
					var a = 每一项flex-shrink*flex-basis之和
				2.计算收缩因数
				          收缩因数=（项目的收缩因子*项目基准值）/第一步计算总和 
				        var b = (flex-shrink*flex-basis)/a
				3.移除空间的计算
				          移除空间= 项目收缩因数 x 负溢出的空间   
				        var c = b * 溢出的空间   
		
	7.侧轴富裕空间的管理
		单行单列
			align-items
			align-self（优先级高）
		多行多列
			align-content
	8.flex的简写属性
		flex:1  (flex-grow: 1;flex-shrink: 1;flex-basis: 0%;)
		等分布局
			#nav{
					display: flex;
				}
			#nav>.item{
					flex: 1;
				}
		/*
		 	flex-grow: 1;
			flex-shrink: 1;
			flex-basis: 0%;
		 */
		写简写属性flex:num;
		无论num为多少，都会将flex-basis置为0%，浏览器进行计算等分布局
	
	
###响应式布局核心 CSS3媒体查询选择器
	@media 媒体类型 and(关键字) 带条件媒体属性 and 带条件媒体属性{
		//规则
	}
	
	媒体类型：
		all
		screen
		print
	媒体属性
		width：浏览器窗口的尺寸（min- max-）
			   min-width:800px  >=800px
			   max-width:800px  <=800px
		device-width：设备尺寸，设备独立像素（min- max-）
				      pc端：分辨率
					    移动端：具体看机器的参数
		device-pixel-ratio：像素比（必须加-webkit前缀  min- max-）
							pc端：1
							移动端：具体看机器的参数
		orientation：横竖屏切换       
					landscape横屏
					portrait竖屏
	关键字
		and：代表与的意思，一般用and连接媒体类型和媒体属性
		only：处理浏览器兼容问题，和浏览器兼容性有关
			老版本的的浏览器只支持媒体类型，不支持带媒体属性的查询
				@media screen{}
				@media only{}
		,：代表或的意思，连接多条查询规则
		not：取反

###多列布局
	栏目宽度
		column-width:200px ;
	栏目列数
		column-count: 2;
	栏目间距
		column-gap: 30px;
	栏目间隔线
		column-rule:1px dashed blue;
###规范
	HTML
		什么是和html5？
		 	是一个强大的技术集(html5约等于html+css+js)
	CSS
		什么是css3？
			css3其实就是html5的一部分，而且现代前端中已经没有版本的概念，都是级别
	JS
		ECMASCRIPT
		DOM
		BOM（没有规范）

###预处理器（less）
	变量
		@定义
		变量的延迟加载
		变量是块级作用域
	嵌套
		&：代表平级，靠在一起，当中没有空格
	混合
		什么是混合？
			将一系列的规则集引入另一个规则集中(ctrl c+ctrl v)
			混合的定义在less规则有明确规定，使用.的形式来定义
		普通混合（编译到原生css中的）
		不带输出的混合（加双括号(){}）
		带参数的混合
		带默认值的混合
		匹配模式（第一个参数一定要为@_，这样在调用下面的混合时，就会自动将上面的同名混合加上，形参个数要相同）
		arguments
	计算
		加减乘除，计算的一方带单位就可以
	继承
	
	