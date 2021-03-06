<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<title>${blog.articleName }</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />

<!--[if lt IE 9]>
<script type="text/javascript" src="layout/plugins/html5.js"></script>
<![endif]-->

<jsp:include page="inc/head.jsp" />
<jsp:include page="inc/login-popup.jsp"/>
	<script type="text/javascript"
	src="${pageContext.request.contextPath }/wangeditor/wangEditor.js"></script>
	<link rel="stylesheet" href="${pageContext.request.contextPath }/wangeditor/wangEditor.css" type="text/css" />
	<script type="text/javascript" src="${pageContext.request.contextPath }/wangeditor/wangEditor.min.js"></script>
	<link rel="stylesheet" href="${pageContext.request.contextPath }/wangeditor/wangEditor.min.css" type="text/css" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

</head>

<body>
	<div id="web_bg"
		style="background-image: url(${pageContext.request.contextPath }/images/dvaaa.jpg);"></div>
	<div class="wrapper sticky_footer;">
		<!-- HEADER BEGIN -->
		<header>
		<jsp:include page="inc/header.jsp" />
		</header>
		<!-- HEADER END -->
        <main role="main" class="container">
	<div class="main-wrapper">
<div class="sidebar-offcanvas" id="sidebar">
	<div class="list-group-title list-group-item">内容</div>
	<div class="list-group">
		<a href="#" class="list-group-item active" >文章管理</a>
		<a href="#" target="_blank" class="list-group-item list-group-item-hover">专栏管理</a>
		<a href="#" target="_blank" class="list-group-item list-group-item-hover">专栏管理</a>
		<a href="#" target="_blank" class="list-group-item list-group-item-hover">专栏管理</a>
		<a href="#" target="_blank" class="list-group-item list-group-item-hover">专栏管理</a>
	</div>
	<div class="list-group-title list-group-item">内容</div>
	<div class="list-group">
		<a href="#" target="_blank" class="list-group-item list-group-item-hover">专栏管理</a>
		<a href="#" target="_blank" class="list-group-item list-group-item-hover">专栏管理</a>
	</div>
</div>
<div class="" id="content-body">
<form action="" id="edit_from" method="post">
	<div class="title-box">
                <input type="text" id="txtTitle" name="article_name" maxlength="100" placeholder="输入文章标题">
				
    </div>
      <div id="editor" style="min-height:500px">
    </div>
	<script type="text/javascript">
        var E = window.wangEditor;
        var editor = new E('#editor');

        editor.customConfig.uploadImgServer = '/Broccoli/upload/fileUpload';
        editor.customConfig.uploadFileName = 'myFileName';
        editor.create();
        
    </script>
      <div class="box">
<label class="edit_title">文章标签：</label>
<div class="tagsinput-primary form-group">
<input name="tagsinput"  id="tagsinputval" class="tagsinput" data-role="tagsinput" value="" placeholder="添加标签" style="display: none;">

</div>
</div>
<div>
<label class="edit_title">个人分类：</label>
<div class="selectBox"style="display: inline-block;">
        	<div class="inputCase">
				<input id="per_classify" class="imitationSelect" type="text" placeholder="添加个人分类" oulname="" oulid="" value="">
				<i class="fa fa-caret-down"></i>
			</div>
			<ul class="selectUl" style="display: none;">
				<li oliname="橘子" oliid="1" class="actived_li">橘子</li>
				<li oliname="苹果" oliid="2">苹果</li>
				<li oliname="桃子" oliid="3">桃子</li>
			</ul>
        </div></div>
        
        <div >
        <label class="edit_title">私密文章：</label>
        <div class="wrap" style="
    vertical-align: middle;
    display: inline-block;">
  <input type="checkbox" id="set_private_checkbox" onclick="set_private();" />
  <label class="slider-v3" for="set_private_checkbox"></label>
</div><label id="set_private_msg" class="checkbox_msg checkbox_msg_none" >已设为私密。</label>
        </div>
        <script type="text/javascript">
        function set_private(){
        	if($("#set_private_checkbox").is(":checked")){
        		  $("#set_private_msg").removeClass("checkbox_msg_none");
        	}else{
        		$("#set_private_msg").addClass("checkbox_msg_none");
        	}
        }
        
        function addArticle(){
        	
        	var txtTitle=$('#txtTitle').val();//文章标题
        	var article_tag=$('#tagsinputval').val();//文章标签
        	var article_content=editor.txt.html();//文章内容
        	var article_text = editor.txt.text();
        	var article_type=0;
        	var per_classify=$('#per_classify').val();//个人分类
        	 // 获取编辑器区域完整html代码
            
        	if($("#set_private_checkbox").is(":checked")){
        		article_type=0;
      	    }else{
      		
      		    article_type=1;
      	    }
        	if(txtTitle==""||txtTitle==null){
        		swal({ 
        			  title: "请填写标题哟", 
        			  type:"error",
        			  text: "2秒后自动关闭。", 
        			  timer: 2000, 
        			  allowOutsideClick:true,
        			  showConfirmButton: true 
        			}); 
        			
        		return false;
        	}
        	if(article_tag==""||article_tag==null){
        		swal({ 
      			  title: "请添加文章标签哟", 
      			  type:"error",
      			  text: "2秒后自动关闭。", 
      			  timer: 2000, 
      			  allowOutsideClick:true,
      			  showConfirmButton: true 
      			});
        		return false;
        	}
        	if(article_text==""||article_text==null){
        		swal({ 
        			  title: "请填写文章内容哟", 
        			  type:"error",
        			  text: "2秒后自动关闭。", 
        			  timer: 2000, 
        			  allowOutsideClick:true,
        			  showConfirmButton: true 
        			});
        		return false;
        	}
        	if(per_classify==""||per_classify==null){
        		swal({ 
      			  title: "请填写个人分类哟", 
      			  type:"error",
      			  text: "2秒后自动关闭。", 
      			  timer: 2000, 
      			  allowOutsideClick:true,
      			  showConfirmButton: true 
      			});
        		return false;
        	}
        	
        			$.ajax({
                		type: "POST",  
                	    url:  basePath+"/home/addBlog.action",  
                	    data:{articleName:txtTitle,
                	    	articleLabel:article_tag,
                	    	articleContent:article_content,
                	    	articleType:article_type,
                	    	sortArticleName:per_classify},//:txtTitle,articleLabel:article_tag,articleContent:article_content,articleType:article_type,sortArticleId:per_classify
                	    dataType: 'json',
                	    success: function(data){  
                	    	//返回添加成功状态后返回到文章页
                	    	if(data.msg==1){
                	    		swal({ 
                	      			  title: "添加成功！", 
                	      			  type:"success",
                	      			  text: "5秒后自动跳转。", 
                	      			  timer: 5000, 
                	      			  allowOutsideClick:false,
                	      			  showConfirmButton: true 
                	      			},function(){
                	      				
                	      			});
                	    	}else{
                	    		swal({ 
                	      			  title: "添加失败！请重试", 
                	      			  type:"error",
                	      			  text: "2秒后自动关闭。", 
                	      			  timer: 2000, 
                	      			  allowOutsideClick:true,
                	      			  showConfirmButton: true 
                	      			});
                	    	}
                	        
                	    },  
                	    error: function(res){  
                	       
                	    }  
                	});
        		  
        	
        	
        }
        </script>
        <script type="text/javascript">
        function testsweetalert(){
        	var html = editor.$txt.html();
            alert(html);
            // 获取编辑器纯文本内容
            
            alert(text);
            // 获取格式化后的纯文本
            var formatText = editor.$txt.formatText();
            alert(formatText);
    	}
        </script>
     <div class="edit_button_div">  <input class="edit_button" type="button" onclick="javascript:addArticle();"  value="发布"/>
				
					<input class="edit_button" type="button" value="保存草稿"/>
				
					<input class="edit_button_return" type="button"  value="返回" onclick="javascript:testsweetalert();"/>
					</div>
					</form>
					</div>
					
</div>
<div style="font: 0px/0px sans-serif;clear: both;display: block"> </div>
</div>
</main>
		
				
		<!-- CONTENT END -->
		<footer id="bodyfooter" style="display:none">
		<jsp:include page="inc/footer.jsp" />
		</footer>
		<!-- FOOTER END -->

	

</body>
</html>