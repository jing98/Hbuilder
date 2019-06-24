/*
   需求：
   1. 给 $ 添加4个工具方法:
     * min(a, b) : 返回较小的值
     * max(c, d) : 返回较大的值
     * leftTrim() : 去掉字符串左边的空格
     * rightTrim() : 去掉字符串右边的空格
   2. 给jQuery对象 添加3个功能方法:
     * checkAll() : 全选
     * unCheckAll() : 全不选
     * reverseCheck() : 全反选
   */
(function(){
	//扩展$(jQuery核心函数)的方法
	$.extend({
		min:function(a,b){
			return a<b ?a:b
		},
		max:function(c,d){
			return c>d ?c:d
		},
		leftTrim:function(){
			return str.replace(/^\s+/,"")
		},
		rightTrim:function(){
			return str.replace(/\s+$/,"")
		}
	})
	//扩展jQuery对象的方法
	$.fn.extend({
		
		/*checkAll:function(){
			return this.each(function(){
				this.checked=true;
			})
		},
		unCheckAll:function(){
			return this.each(function(){
				this.checked=false;
			})
		},
		reverseCheck:function(){
			return this.each(function(){
				this.checked=!this.checked;
			})
		*/
		checkAll:function(){
			this.prop("checked",true);  //this是jQuery对象 
		},
		uncheckAll:function(){
			this.prop("checked",false);
		},
		reverseCheck:function(){
			//this是jQuery对象
			this.each(function(){
				//this是dom元素
				this.checked=!this.checked;
			})
		}
		
		
	})
})()
