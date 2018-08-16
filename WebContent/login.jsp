<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>一朵西兰花</title>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/css/normalize.css" />
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/css/default.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/css/styles.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/css/login_regist.css">
     <link rel="shortcut icon" href="${pageContext.request.contextPath }/img/favicon.ico" />
</head>

		<script src="${pageContext.request.contextPath }/js/jquery-2.2.4.min.js"></script>
		<script src="${pageContext.request.contextPath }/js/login_check.js"></script>
		<script type="text/javascript">
       
		 
		</script>

<body>
	<main class="main_box">
      <div id="overlay"></div>
      <ul id="scene">
      <li class="layer" data-depth="0.3">
          <div class="layer3"></div>
        </li>
        <li class="layer" data-depth="0.5">
          <div class="layer1"></div>
        </li>
        <li class="layer" data-depth="0.8">
          <div class="layer2"></div>
        </li>
        
      </ul>



 </main> 
	<div class="login_box">
			<div id="landing" class="landing">登录</div>
			<div id="registered" class="registered">注册</div>
			<div class="fix"></div>
			<form id="loginform">
			<div id="landing-content">
				<div id="photo"><img src="${pageContext.request.contextPath }/img/photo1.jpg" /></div>
				<div class="inp"><input type="text" id="username" placeholder="用户名"  /></div>
				<div class="inp"><input type="password" id="password" placeholder="密码" /></div>
				<div class="captcha"><div class="captcha_input" style="float: left;" ><input type="text" placeholder="验证码" id="user_input_verifyCode"/></div>
				<div class="captcha_img" style="float: left; " ><img class="captcha2" src="${pageContext.request.contextPath }/user/getVerifyCode.action" id="verifyCodeImage" onclick="javascript:changeImage();" title="点击图片更换验证码"  />
				</div></div>
				<div class="login" onclick="javascript:login();">登录</div>
				<div id="bottom"><span id="registeredtxt"><a href = "javascript:void(0);" onclick ="on_regist();">立即注册</a></span><span id="forgotpassword"><a href = "javascript:void(0);" >忘记密码?</a></span></div>
			    <div id="msg"><span id="msg_txt"></span></div>
			</div>
			</form>
			<div id="registered-content">
				<div class="inp"><input type="text" placeholder="请输入用户名" /></div>
				<div class="inp"><input type="password" placeholder="请输入密码" /></div>
				<div class="inp"><input type="password" placeholder="请再次输入密码" /></div>
				<div class="inp"><input type="text" placeholder="电子邮箱" /></div>
				<div class="inp"><input type="text" placeholder="邀请码" /></div>
				<div class="login" >立即注册</a></div>
			</div>
		</div>
	

<script>window.jQuery || document.write('<script src="${pageContext.request.contextPath }/js/jquery-2.1.1.min.js"><\/script>')</script>
	<script src='${pageContext.request.contextPath }/js/jquery.parallax.min.js'></script>
	<script>
	$(document).ready(function () {
	    $('#scene').parallax();
	});
</script>


</body>
</html>