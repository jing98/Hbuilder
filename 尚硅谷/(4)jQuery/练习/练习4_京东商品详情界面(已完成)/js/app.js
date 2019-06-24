/*
 1.鼠标移入显示，移出隐藏
       目标：手机京东，客户服务，网站导航，我的京东，去购物车结算，全部商品
 2.鼠标移入切换二级导航菜单的切换显示和隐藏
 3.输入搜索关键字，列表显示匹配的结果
 4.点击显示或者隐藏更多的分享图标
 5.鼠标移入移出切换地址的显示隐藏
 6.点击切换地址tab
 
 7.鼠标移入移出切换显示迷你购物车
 8.点击切换产品选项（商品详情等显示出来）
 
 9.点击向右/向左，移动当前展示商品的小图片
 10.当鼠标悬停在某个小图上，在上方显示对应的中图
 11.当鼠标在小图上移动时，显示对应大图的附近部分区域
 * */

$(function() {
	showhide();
	hoverSubMenu();
	search();
	share();
	address();
	clickTabs();
	hoverMiniCart();
	clickProductTabs();
	moveMiniImg();
	hoverMiniImg();
	bigImg();

	/*1.鼠标移入显示，移出隐藏
       			目标：手机京东，客户服务，网站导航，我的京东，去购物车结算，全部商品*/
	function showhide() {
		$("[name=show_hide]").hover(
			function() {
				var id = this.id + "_items"
				$("#" + id).show()
			},
			function() { //隐藏
				var id = this.id + "_items"
				$("#" + id).hide()
			})
	}

	/* 2.鼠标移入切换二级导航菜单的切换显示和隐藏*/
	function hoverSubMenu() {
		$("#category_items>div").hover(
			function() {
				$(this).children(":last").show()
			},
			function() {
				$(this).children(":last").hide()
			})
	}

	/* 3.输入搜索关键字，列表显示匹配的结果*/
	function search() {
		$("#txtSearch")
			.on("keyup focus", function() {
				//如果输入框有文本才显示列表
				var txt = this.value.trim()
				//var txt=$.trim(this.value)
				if(txt) {
					$("#search_helper").show()
				}
			})
			.blur(function() {
				//隐藏列表 
				$("#search_helper").hide()
			})
	}

	/* 4.点击显示或者隐藏更多的分享图标*/
	function share() {
		//标识当前状态，初始为关闭
		var isOpen = false
		var $shareMore = $("#shareMore")
		var $parent = $shareMore.parent()
		var $as = $shareMore.prevAll("a:lt(2)")
		var $b = $shareMore.children()
		$shareMore.click(function() {
			if(isOpen) { //去关闭
				isOpen = false
				$parent.css("width", 155)
				$as.hide()
				$b.removeClass("backword")
			} else { //去打开
				isOpen = true
				$parent.css("width", 200)
				$as.show()
				$b.addClass("backword")
			}
			//isOpen=!isOpen
		})
	}

	/*5.鼠标移入移出切换地址的显示隐藏*/
	function address() {
		var $select = $("#store_select")
		$select.hover(function() {
					$(this).children(":gt(0)").show()
				},
				function() {
					$(this).children(":gt(0)").hide()
				})
			.children(":last")
			.click(function() {
				//$(this)..children(":gt(0)").hide()  //不能用，this不对
				$select.children(":gt(0)").hide()
			})
	}

	/* 6.点击切换地址tab*/
	function clickTabs() {
		$("#store_tabs>li").click(function() {
			$("#store_tabs>li").removeClass("hover")
			//$("#store_tabs>li").attr("class")
			this.className = "hover"
			//$(this).addClass("hover")
		})

	}

	/* 7.鼠标移入移出切换显示迷你购物车*/
	function hoverMiniCart() {
		$("#minicart").hover(function() {
				this.className = "minicart"
				$(this).children(":last").show()
			},
			function() {
				this.className = ""
				$(this).children(":last").hide()
			})
	}

	/*8.点击切换产品选项（商品详情等显示出来）*/
	function clickProductTabs() {
		var $lis = $("#product_detail>ul>li")
		var $contents = $("#product_detail>div:gt(0)")
		$lis.click(function() {
			$lis.removeClass("current")
			$(this).addClass("current")
			//this.className="current"

			//隐藏所有的$contents
			$contents.hide()
			//显示当前对应的content
			var index = $(this).index()
			$contents.eq(index).show()
			//$contents[index].style.display="block"
		})
	}
	/* 9.点击向右/向左，移动当前展示商品的小图片*/
	function moveMiniImg() {
		var $as = $("#preview>h1>a")
		var $backward = $as.first()
		var $forward = $as.last()
		var $ul = $("#icon_list")
		var SHOW_COUNT = 5
		var imgCount = $ul.children("li").length
		var moveCount = 0 //移动的次数（点击向右箭头为正，向左为负）
		var liWidth = $ul.children(":first").width()

		//初始化更新:如果图片总数大于显示的图片，则右边按钮是可点的
		if(imgCount > SHOW_COUNT) {
			//$forward[0].className="forward"
			$forward.attr("class", "forward")
		}
		//向右按钮绑定点击监听
		$forward.click(function() {
			//判断是否需要移动，移到最后时：如果不需要直接结束
			if(moveCount === imgCount - SHOW_COUNT) {
				return
			}
			moveCount++
			//更新向左的按钮
			$backward.attr("class", "backward")
			//更新向右的按钮
			if(moveCount === imgCount - SHOW_COUNT) {
				$forward.attr("class", "forward_disabled")
			}
			//移动ul
			$ul.css({
				left: -moveCount * liWidth
			})
		})

		//向左按钮绑定点击监听
		$backward.click(function() {
			//判断是否需要移动，移到最后时：如果不需要直接结束
			if(moveCount === 0) {
				return
			}
			moveCount--
			//更新向右的按钮
			$forward.attr("class", "forward")
			//更新向左的按钮
			if(moveCount === 0) {
				$backward.attr("class", "backward_disabled")
			}
			//移动ul
			$ul.css({
				left: -moveCount * liWidth
			})
		})
	}

	/*10.当鼠标悬停在某个小图上，在上方显示对应的中图*/
	function hoverMiniImg() {
		$("#icon_list>li").hover(function() {
				//this.children()[0].className="hoveredThumb"
				var $img = $(this).children()
				$img.addClass("hoveredThumb")
				//显示对应的中图
				var src = $img.attr("src").replace(".jpg", "-m.jpg")
				$("#mediumImg").attr("src", src)
			},
			function() {
				$(this).children().removeClass()("hoveredThumb")
			})
	}

	/*11.当鼠标在小图上移动时，显示对应大图的附近部分区域*/
	function bigImg() {
		var $medimuImg = $("#mediumImg")
		var $mask = $('#mask') //小黄块
		var $maskTop = $("#maskTop")
		var $largeImgContainer = $("#largeImgContainer")
		var $loading = $("#loading")
		var $largeImg = $("#largeImg")
		var maskWidth = $mask.width() //小黄块的宽度
		var maskHeight = $mask.height()
		var maskTopWidth = $maskTop.width()//中图的宽度
		var maskTopHeight = $maskTop.height()

		$maskTop.hover(function() {//进入
				//显示小黄块
				$mask.show()
				//动态加载对应的大图
				/*
				 中图的地址:images/products/product-s2-m.jpg
				 大图的地址:images/products/product-s2-l.jpg
				 * */
				var src = $medimuImg.attr("src").replace("-m.", "-l.")
				$largeImg.attr("src", src)
				$largeImgContainer.show()
				//绑定加载完成的监听
				$largeImg.on("load", function() { //大图加载完成
					//得到大图的尺寸
					var largeWidth=$largeImg.width()
					var largeHeight=$largeImg.height()
					
					//给$largeImgContainer（大图的容器）设置尺寸
					$largeImgContainer.css({
						width:largeWidth/2,
						height:largeHeight/2
					})
					//显示大图
					$largeImg.show()
					//隐藏加载进度条
					$loading.hide()
					console.log($largeImg.width(), $largeImg.height())
					
					//鼠标移动的监听
					$maskTop.mousemove(function(event) { //在移动的过程中被反复调用
						/*
						 1.移动小黄块
						 2.移动大图
						 * */
						/*1.移动小黄块*/
						var left = 0
						var top = 0
						//获取鼠标事件的坐标:offsetX匹配元素在当前视口的相对偏移
						var eventLeft = event.offsetX
						var eventTop = event.offsetY
						left = eventLeft - maskWidth / 2
						top = eventTop - maskHeight / 2
						//left在[0,maskTopWidth-maskWidth]
						if(left < 0) {
							left = 0
						} else if(left > maskTopWidth - maskWidth) {
							left = maskTopWidth - maskWidth
						}
						//top在[0,maskTopHeight-maskHeight]
						if(top < 0) {
							top = 0
						} else if(top > maskTopHeight - maskHeight) {
							top = maskTopHeight - maskHeight
						}
						//给$mask重新定位：计算出小黄块的left和top值
						$mask.css({
							left: left,
							top: top
						})
						/*2.移动大图*/
						
						//得到大图的坐标
						left=-left*largeWidth/maskTopWidth
						top=-top*largeHeight/maskTopHeight
						//设置大图的坐标
						$largeImg.css({
							left:left,
							top:top
						})
					})
					
					
					
				})

				//绑定mousemove鼠标移动的监听

			},
			function() {
				$mask.hide()
				$largeImgContainer.hide()
				$largeImg.hide()
			})

	}

})