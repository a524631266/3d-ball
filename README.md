# 3d-ball
本文的主旨是通过web的js生成可操作的球型以及柱形体
利用svg技术（非canvas）以及三维影射模型建立二维平面的三维立体图转换，
不足：
目前还没有做到放大与缩小视图

使用方法
可以利用鼠标对图像进行拖拽，绕图像的中心点进行旋转
同时通过每个点的浓度与大小对数据进行三维模拟

代码写得有点粗糙，请大神指点
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
    </head>

    <body>
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
