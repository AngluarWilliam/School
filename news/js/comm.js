// JavaScript Document

$(function()
{
	//ie6
	
	if ( $.browser.msie){
		 if(parseInt( $.browser.version )<7){
			 $("body").prepend("<div class='ie6' style='display:none;'><span>关闭</span>非常抱歉，本站不再支持您的浏览器，请升级您的浏览器到 <a href='http://www.microsoft.com/zh-cn/download/internet-explorer-8-details.aspx' target='_blank' style='text-decoration:underline'>更高的版本</a>！以获得更好的观看效果。</div>");
			 $(".ie6").animate({height:"toggle",opacity:"toggle"},1000);
			 $(".ie6 span").click(function(){$(".ie6").slideUp()})
	}}
	
	////小屏幕
	
	$("#smenu").toggle(function()
	{
		$(this).addClass("active");
		$("#nav").addClass("active");
		$("header .search").addClass("active");
	},function()
	{
		$(this).removeClass("active");
		$("#nav").removeClass("active");
		$("header .search").removeClass("active");
	})		
	
	
	////小子导航菜单
	$("#subsmenu").toggle(function()
	{
		$(".enav li").show();
		$(".monthnav li").show();
	},function()
	{
		$(".enav li:not('.current')").hide();
		$(".monthnav li:not('.month')").hide();
	})	
	
	
	$(".ulink .socialnet").click(function(){
		
		$(this).find(".socialwraper").toggle();
		})
	
	///滚动图片翻页按钮
	
	$(".subchannel .slidegallery").hover(function(){
		$(".subchannel .slidegallery .sliderbutton").fadeIn("fast");
		},function(){
		$(".subchannel .slidegallery .sliderbutton").fadeOut("fast");	
		});

})

