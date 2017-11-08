通过如下链接查看效果
[3d_picture](http://htmlpreview.github.io/?https://github.com/a524631266/3d-ball/blob/master/ball1.html)
The web loading should take a few minutues,please wait for a while;

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
    </head>
    <body>
		
	<h1>3d-ball<br />本文的主旨是通过web的js生成可操作的球型以及柱形体</h1>
	<h3>利用svg技术（非canvas）以及三维影射模型建立二维平面的三维立体图转换</h3>
	<h2>不足：</h2>
	<li>目前还没有做到放大与缩小视图</li>
	<h2>使用方法</h2>
	<li>可以利用鼠标对图像进行拖拽，绕图像的中心点进行旋转</li>
	<li>旋转同时改变每个对象（点）的浓度以及大小，从而进行三维旋转模拟</li>
	<hr>
	<p>代码写得有点粗糙，请大神指点</p>
	<div id="normal_sphere">
	   
	</div>
	<div id="abnormal_sphere">
	   
	</div>
	<div id="normal_cy">
	   
	</div>
	<div id="abnormal_cy">
	   
	</div>
	<script src="somjs/jquery-1.8.3.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="somjs/d3.v2.js" type="text/javascript" charset="utf-8"></script>
	<script src="somjs/draw_ball.js" type="text/javascript" charset="utf-8"></script>
    </body>
</html>
