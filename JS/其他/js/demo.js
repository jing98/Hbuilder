/*
//函数
function box()
{
	var sum=0;
	for(var i=0;i<arguments.length;i++)
	{
		sum+=arguments[i];
	}
	return sum;
}
alert(box(1,2,3,4));

function box(num)
{
	return num+100;
}
function box(num)		//ECMAScript中函数没有重载功能，第二个函数会把第一个函数覆盖掉
{
	return num+200;
}
alert(box(50,1));		
*/
/*
//对象和数组
对象包括哪些元素
1、属性（字段）
2、方法（函数）

var box=new Object();		//创建一个对象
box.name="田柾国";
box.age=22;
alert(box.name);

var box=Object();			//new关键字可以省略
alert(box);

var box={};					//字面量方式创建的对象
alert(box);
alert(typeof(box));

var box={				//用字面量方式封装数据
	'name':"田柾国",		//属性可以用单引号括起来
	age:22
};
alert(box.name);

var box={				
	'name':"田柾国",		
	'age':22
};
alert(box.name);
alert(box['name']);		//用数组方式输出，必须加单引号

function objrun()
{
	return "123";
}
var box=new Object();		//创建一个对象
box.name="田柾国";
box.age=22;
//box.run=objrun;			
box.run=objrun();
//alert(box.run());		
alert(box.run);

var box={				
	name:"田柾国",		
	age:22,
	run:function(){				//匿名函数
		return "123";
	}
};
alert(box.run());				//调用方法（函数），如果没有()，会打印函数代码，有()，才会打印返回值


var box={				
	name:"田柾国",		
};
alert(box.name);
delete box.name;				//删除属性
alert(box.name);


function box(obj)
{
	if(obj.name!=undefined) alert(obj.name);
	if(obj.love!=undefined) alert(obj.love);
	if(obj.age!=undefined) alert(obj.age);
}
var obj={
	name:"田柾国",
	age:22,
	height:178,
	address:"韩国釜山"
};
box(obj);
*/
/*
 数组
 var box=new Array();			//声明一个空数组
 alert(typeof box);
 
 var box=new Array("田柾国",22,"釜山");	//声明一个数组，并分配了三个元素
 alert(box[0]);
 
 var box=new Array(10);				//创建数组，包含10个元素
box[3]="田柾国";
alert(box);

var box=Array();
alert(typeof box);

var box=[];				//字面量方式创建数组
alert(typeof box);

var box=["田柾国",22,"釜山"];	
alert(box);

var box=[
	{
		name:"田柾国",
		age:22
	},
	[3,4,5,new Object()],
	"计算机编程",
	25+25,
	new Array(1,2,3)
];
alert(box);
alert(box[0].name);


 * */
 


