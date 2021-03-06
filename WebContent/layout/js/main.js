/* settings block start */

/* settings block end */



/* browser selection */
var ie8 = ($.browser.msie && $.browser.version == '8.0') ? true : false;

/* mobile */
var isMobile = false;
function isMobile_f() {
    var array_mobileIds = new Array('iphone', 'android', 'ipad', 'ipod');
    var uAgent = navigator.userAgent.toLowerCase();
	
    for (var i=0; i<array_mobileIds.length; i++) {
		if(uAgent.search(array_mobileIds[i]) > -1) {
			isMobile = true;
		}
    }
}
isMobile_f();

//这里给所有ajax请求添加一个complete函数
$.ajaxSetup({
            complete : function(xhr, status) {
                //拦截器实现超时跳转到登录页面
                // 通过xhr取得响应头
                var REDIRECT = xhr.getResponseHeader("REDIRECT");
                //如果响应头中包含 REDIRECT 则说明是拦截器返回的
                if (REDIRECT == "REDIRECT")
                {
                    var win = window;
                    while (win != win.top)
                    {
                        win = win.top;
                    }
                    
                    swal({ 
            			  title: "登陆信息失效", 
            			  type:"error",
            			  text: "请重新登陆~", 
            			  showConfirmButton: true 
            			},function(){
            				win.location.href = xhr.getResponseHeader("CONTEXTPATH");
            			}); 
                    //重新跳转到 login.html 
                    
                }
            }
        });


function init_sticky_footer() {
	if($('.wrapper').hasClass('sticky_footer')) $('#content > .inner').css('padding-bottom', $('footer').outerHeight() + 'px');
}

function init_r_corner() {
	$('.r_corner').each(function() {
		var path = $(this).find('img').attr('src');
		$(this).css('background-image', 'url(' + path + ')');
	});
}

function init_iframe_size() {
	var max_width = false;
	if($('.wrapper').outerWidth() >= 768) {
		var max_width = 612;
	}
	if($('.wrapper').outerWidth() < 950 && $('.wrapper').outerWidth() >= 768) {
		var max_width = 472;
	}
	if($('.wrapper').outerWidth() < 768 && $('.wrapper').outerWidth() >= 480) {
		var max_width = 412;
	}
	if($('.wrapper').outerWidth() < 480) {
		var max_width = 292;
	}
	
	$('.block_video iframe').each(function() {
		if(max_width) {
			var iframe_width = $(this).attr('width');
			var iframe_height = $(this).attr('height');
			
			iframe_height = parseInt((max_width * iframe_height) / iframe_width);
			
			$(this).attr('width', max_width);
			$(this).attr('height', iframe_height);
		}
	});
}

function init_fields() {
	$('.w_def_text').each(function() {
		var text = $(this).attr('title');
		
		if($(this).val() == '') {
			$(this).val(text);
		}
	});
	
	$(document).on('click','.w_def_text', function() {
		var text = $(this).attr('title');
		
		if($(this).val() == text) {
			$(this).val('');
		}
		
		$(this).focus();
	});
	
	$(document).on('blur','.w_def_text', function() {
		var text = $(this).attr('title');
		
		if($(this).val() == '') {
			$(this).val(text);
		}
	});
	
	$('.custom_select').each(function() {
		$(this).css('opacity', '0');
		$(this).parent().append('<span />');
		var text = $(this).find('option:selected').html();
		$(this).parent().find('span').html(text);
	});
	
	$('.custom_select').live('change', function() {
		var text = $(this).find('option:selected').html();
		$(this).parent().find('span').html(text);
	});
}

function init_validation(target) {
	function validate(target) {
		var valid = true;
		$(target).find('.req').each(function() {
			if($(this).val() == '') {
				valid = false;
				$(this).parent().addClass('errored');
			}
			else {
				$(this).parent().removeClass('errored');
			}
		});
		return valid;
	}
	
	$('form.w_validation').live('submit', function(e) {
		var valid = validate(this);
		if(!valid) e.preventDefault();
	});
	
	if(target) {return validate(target);}
}

function init_pretty_photo() {
	if(!isMobile) {
		$("a[data-rel^='prettyPhoto']").prettyPhoto({
			deeplinking : false,
			keyboard_shortcuts : false
		});
	}
}

function add_zero(num) {
	return (num < 10) ? '0' + num : num;
}

function init_time_n_date() {
	var timer;
	window.clearTimeout(timer);
	var now = new Date();
	
	
	var minute = add_zero(now.getMinutes());
	var hour = add_zero(now.getHours());
	
	
	
	
	if($('.wrapper').outerWidth() < 480) {
		$('#month_top').html(months_short[month]);
	}
	else {
		
	}
	
	$('#time').html(hour + ':' + minute);
	
	timer = window.setTimeout(init_time_n_date, 1000);
}
function init_popup() {
	$('.open_popup').click(function(e) {
		var target = $(this).attr('href');
		$('#overlay').show();
		$(target).show(500);
		
		e.preventDefault();
	});
	
	$('.block_popup .close').click(function(e) {
		var target = $(this).attr('href');
		$('.block_popup').hide(500, function() {
			$('#overlay').hide();
		});
		
		e.preventDefault();
	});
}

function init_pic_hover() {
	$('.general_pic_hover').each(function() {
		if(!$(this).hasClass('initialized')) {
			$(this).append('<span class="hover"><span class="icon"></span></span>');
			$(this).addClass('initialized');
		}
		
		var no_fx = $(this).hasClass('no_fx');
		
		$(this).bind('mouseenter',function(e){
			var icon = $(this).find('.icon');
			var overlay = $(this).find('.hover');
			
			if(no_fx) {
				if(!ie8) {
					overlay.show().css('opacity', '0');
					overlay.stop(true).delay(100).animate(
						{
							opacity : 1
						}, 200
					);
				}
				else {
					overlay.css('display', 'block');
				}
			}
			else {
				overlay.show();
				
				var w = $(this).width();
				var h = $(this).height();
				var x = (e.pageX - $(this).offset().left - (w/2)) * ( w > h ? (h/w) : 1 );
				var y = (e.pageY - $(this).offset().top  - (h/2)) * ( h > w ? (w/h) : 1 );
				var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;
				
				
				/** do your animations here * */ 
				switch(direction) {
					case 0:
						/** animations from the TOP * */
						icon.css({
							'left' : '0px',
							'top' : '-100%',
							'right' : 'auto',
							'bottom' : 'auto'
						});
						icon.stop(true).delay(300).animate({
							top : 0
						}, 300);
					break;
					case 1:
						/** animations from the RIGHT * */
						icon.css({
							'left' : '100%',
							'top' : '0',
							'right' : 'auto',
							'bottom' : 'auto'
						});
						icon.stop(true).delay(300).animate({
							left : 0
						}, 300);
					break;
					case 2:
						/** animations from the BOTTOM * */
						icon.css({
							'left' : '0px',
							'top' : 'auto',
							'right' : 'auto',
							'bottom' : '-100%'
						});
						icon.stop(true).delay(300).animate({
							bottom : 0
						}, 300);
					break;
					case 3:
						/** animations from the LEFT * */
						icon.css({
							'left' : 'auto',
							'top' : '0',
							'right' : '100%',
							'bottom' : 'auto'
						});
						icon.stop(true).delay(300).animate({
							right : 0
						}, 300);
					break;
				}
			}
		});
		
		$(this).bind('mouseleave',function(e){
			var icon = $(this).find('.icon');
			var overlay = $(this).find('.hover');
			
			if(no_fx) {
				if(!ie8) {
					overlay.stop(true).animate(
						{
							opacity : 0
						}, 200
					);
				}
				else {
					overlay.css('display', 'none');
				}
			}
			else {
				var w = $(this).width();
				var h = $(this).height();
				var x = (e.pageX - $(this).offset().left - (w/2)) * ( w > h ? (h/w) : 1 );
				var y = (e.pageY - $(this).offset().top  - (h/2)) * ( h > w ? (w/h) : 1 );
				var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;
				
				
				/** do your animations here * */ 
				switch(direction) {
					case 0:
						/** animations from the TOP * */
						icon.css({
							'left' : '0px',
							'top' : '0px',
							'right' : 'auto',
							'bottom' : 'auto'
						});
						icon.stop(true).animate({
							top : -h
						}, 300, function () {overlay.hide()});
					break;
					case 1:
						/** animations from the RIGHT * */
						icon.css({
							'left' : 'auto',
							'top' : '0px',
							'right' : '0px',
							'bottom' : 'auto'
						});
						icon.stop(true).animate({
							right : -w
						}, 300, function () {overlay.hide()});
					break;
					case 2:
						/** animations from the BOTTOM * */
						icon.css({
							'left' : '0px',
							'top' : 'auto',
							'right' : 'auto',
							'bottom' : '0px'
						});
						icon.stop(true).animate({
							bottom : -h
						}, 300, function () {overlay.hide()});
					break;
					case 3:
						/** animations from the LEFT * */
						icon.css({
							'left' : '0px',
							'top' : '0px',
							'right' : 'auto',
							'bottom' : 'auto'
						});
						icon.stop(true).animate({
							left : -w
						}, 300, function () {overlay.hide()});
					break;
				}
			}
		});

	});
}

function init_message_boxes() {
	$('.general_info_box .close').live('click', function() {
		$(this).parent().fadeOut(300);
	});
}

function init_pricing_table() {
	$('.block_pricing_table_1').each(function() {
		var table = $(this);
		table.find('.column.category .cell p').each(function() {
			var name = '<span class="alt_text">' + $(this).html() + '</span> ';
			var num = $('.column.category .cell p').index(this);
			
			table.find('.column:not(.category)').each(function() {
				$(this).find('.cell p').eq(num).prepend(name);
			});
		});
	});
}
function bodyshow(){
	$("#left_main").slideDown(500);
	$("#right_main").slideDown(500);
	$("#bodyfooter").delay(1000).show(500);
	$("#footer").delay(1000).show(500);
	}

$(document).ready(function() {
	init_sticky_footer();
	init_iframe_size();
	init_fields();
	init_r_corner();
	init_time_n_date();
	init_popup();
	init_pic_hover();
	init_validation();
	init_message_boxes();
	init_pricing_table();
	bodyshow();
	pagingNum(1);
	$('.block_to_top a').click(function(e) {
		$.scrollTo(0, 500);
		
		e.preventDefault();
	});
	$('.wordSumTotal').textSum();
	
});

$(window).resize(function() {
	init_sticky_footer();
	init_iframe_size();
	init_time_n_date();
});

$(function() {
	init_pretty_photo();
});

function newBlogPaging(){
	 $.ajax({  
         type :'post',  
         url :basePath+"/user/loginTestUser.action",
         data : {username:name},
         dataType : "json",  
         success : function(data) {
         	if(data.msg==0){
         		$('#username').addClass('error_msg_color');
		    		 $("#msg_txt").html("账号不存在哦!"); 
		    		 return false;
         	}
         }
         });
	
}
var localObj = window.location;

   var contextPath = localObj.pathname.split("/")[1];

   var basePath = localObj.protocol+"//"+localObj.host+"/"+contextPath;

   var server_context=basePath;

function pagingConstruct(paging){  
	pagingNum(paging);
	$.ajax({  
        type :'post',  
        url :basePath+"/home/json.action?pageIndex="+paging,
        data : "",
        dataType : "json",  
        success : function(data) {
        	var results=data.results;
        	$("rownum").html(data.pageCount);
        	var pageDivInnerHTML = "";
        	for(var p in results){
        		pageDivInnerHTML+='<div class="block_home_post" ><div class="pic"> <a href="'+basePath+'/home/query.action?bid='+results[p].articleId+'" class="w_hover"> <img src="'+basePath+'/upload/image/'+results[p].userImageUrl+'" alt="'+results[p].articleName+'" /> <span></span> </a> </div><div class="text"><p class="title"><a href="'+basePath+'/home/query.action?bid='+results[p].articleId+'">'+results[p].articleName+'</a></p><div class="date"><p>'+formatDateTime(results[p].articleTime)+'</p></div><div class="icons"><ul><li><a href="'+basePath+'/home/query.action?bid='+results[p].articleId+'" class="views">'+results[p].articleClick+'</a></li></ul> </div></div></div>';
        		
        	}
        	$("#newblogpage").html(pageDivInnerHTML);  
        }
        });
	
}  
function formatDateTime(inputTime) {  
	    var date = new Date(inputTime);
	    var y = date.getFullYear();  
	    var m = date.getMonth() + 1;  
	    m = m < 10 ? ('0' + m) : m;  
	    var d = date.getDate();  
	    d = d < 10 ? ('0' + d) : d;  
	    var h = date.getHours();
	    h = h < 10 ? ('0' + h) : h;
	    var minute = date.getMinutes();  
	    minute = minute < 10 ? ('0' + minute) : minute;
	    return y + '-' + m + '-' + d+' '+h+':'+minute;  
	};

function pagingNum(paging){
	var total =$("#rownum").html();		 
    // 先更新一下行内文本
    var pagingDivInnerHTML = "";  
    // 这里是加载省略号的flag
    var isHiddenExist = 0;  
    // 从第1页读到第40页。
    for (var i = 1; i <= total; i++) {  
        // 如果读到当前页，就仅仅加载一个文本，不放链接
        if (i == paging) {  
            pagingDivInnerHTML +=  "<li class='current'><a >"+i+"</a></li>";  
        }  
        else {  
            // 如果是页首，中间页，页尾，当前页的前后三页则不省略。
            if (i < 4 || i < (paging + 3) && i > (paging - 3) || i > (total / 2 - 2) && i < (total / 2 + 2) || i > (total - 3)) {  
                pagingDivInnerHTML += "<li><a href='javascript:void(0)' onclick='pagingConstruct(" + i + ")'>" + i + "</a></li> ";  
                isHiddenExist = 0;  
            }  
            // 否则就构造...
            else {  
                if (isHiddenExist == 0) {  
                    pagingDivInnerHTML += "<li><a>...</a></i>";  
                    isHiddenExist = 1;  
                }  
            }  
        }  
    }  
    // 把构造的内容放上去pagingDiv
    $("#pagingDiv").html(pagingDivInnerHTML);  
}

function update_user_info(){  
	alert($("#userinfo_link_from").serialize());
	$.ajax({  
        type :'post',  
        url :basePath+"/user/update_userinfo.action",
        data :$("#userinfo_link_from").serialize(),
        dataType : "json",  
        success : function(data) {
        	 
        	if(data.msg==1){
            	swal({ 
      			  title: "资料修改成功~", 
      			  type:"success",
      			  text: "2秒后自动关闭。", 
      			  timer: 2000, 
      			  allowOutsideClick:true,
      			  showConfirmButton: true 
      			});
            	}else{
            		swal({ 
          			  title: "请刷新后尝试~", 
          			  type:"error",
          			  text: "点击确定刷新页面后重新尝试~", 
          			  showConfirmButton: true 
          			},function(){
          				window.location.reload()
          			}); 
            	}
        },error: function(XMLHttpRequest, textStatus, errorThrown,data) {
        
			// 状态码
			console.log(XMLHttpRequest.status);
			// 状态
			console.log(XMLHttpRequest.readyState);
			// 错误信息
			console.log(textStatus);
        }
        });
	
}
