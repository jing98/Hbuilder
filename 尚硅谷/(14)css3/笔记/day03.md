###day03:过渡、2D变换(transform)
***	过渡的天坑
		a.过渡只关心元素的初始状态和结束状态，没有方法可以获取元素在过渡中每一帧的状态
		b.元素在初次渲染还没有结束的时候，是没有办法触发过渡的
		c.在绝大部分变换样式的切换时，变换组合的个数和位置不一样时，是没有办法触发过渡的
		
		
	1.过渡
		transition-property(并不是所有的属性都可以动画)
			指定过渡动画的属性
		transition-duration(0也要带单位)
			自己指定过渡动画的时间
		transition-timing-function
			指定过渡动画的形式(贝塞尔 )
		transition-delay
			指定过渡动画的延迟
		transition
			第一个可以被解析成时间的值会赋给transition-duration
		
***		当属性值的列表长度不一致时
			超出的情况下是会被全部截掉的
			不够的时候，关于时间的会重复列表，transition-timing-function的时候使用的是默认值ease
***		transtionend事件(DOM2)
			在每个属性完成过渡时都会触发这个事件
			Element.addEventListener("transitionend",fn)
			用完了之后可以移除
			Element.removeEventListener("transitionend",fn)
			
	2.2D变换(transform)
		旋转（rotate）
			正值:顺时针旋转  rotate(360deg)
			负值:逆时针旋转  rotate(-360deg)
			只能设单值。正数表示顺时针旋转，负数表示逆时针旋转
		平移（translate）
			正数表示XY轴正向位移，负数为反向位移。设单值表示只X轴位移，Y轴坐标不变
		倾斜（skew）
			参数值以deg为单位
			正值:拉正斜杠\方向的两个角
			负值:拉反斜杠/方向的两个角
		缩放（scale）
			 正值:缩放的程度
			 负值:不推荐使用（有旋转效果）
			 缩小一倍可以transform: scale(.5);
                           放大一倍可以transform: scale(2);
                  变换组合
        	顺序是从右往左的，变换的底层其实就是矩阵的运算
                  基点的变换
        	transform-origin
        