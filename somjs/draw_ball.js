/**
 * @author zhangll
 */

var draw = (function(stage_name,container_name,type){
//判断container_name 是否存在


var balldata = [5,10,8,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];
//初始化点的数量
function container_name_exist(container_name){
    
    if ($("."+container_name).length>0){
        return container_name+"1";
    }else{
        return container_name;
    }
}

container_name= container_name_exist(container_name);
function drawInit(){
    
    var svg=d3.select("#"+stage_name).append("svg").attr("width",750).attr("height",600)
                .attr("class",stage_name);
    var a = svg.selectAll("a").data(balldata).enter().append("a").attr("class",container_name).attr("href","#")
            .append("circle")
            .attr("cx","0px")
            .attr("cy","0px")
            .attr("r",function(d,i){return d;});
            
};
drawInit();

    
var tagEle = "querySelectorAll" in document ? document.querySelectorAll("."+container_name) : getClass(container_name),
    paper = "querySelectorAll" in document ? document.querySelector("."+stage_name) : getClass(stage_name)[0],
    //paper = d3.select("#"+stage_name)[0][0],
    RADIUS = 220,
    fallLength = 500,
    tags = [],
    angleX = Math.PI / 500,
    angleY = Math.PI / 500,
    CX = paper.clientWidth / 2,
    CY = paper.clientHeight / 2,
    CX = 750 / 2,
    CY = 600 / 2,
    //EX = paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
    EX =0,
    //EY = paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop,
    EY = 0,
    mousedown = false,
    mousestartCX = 0,
    mousestartCy = 0,
    init_circle_n = 36
    ;
//var CX = 1440/ 2,//paper.parentElement.clientWidth
  //  CY = CX * 5 / 9;
console.log(paper);
console.log(tagEle);
function getClass(className) {
    var ele = document.getElementsByTagName("*");
    var classEle = [];
    for (var i = 0; i < ele.length; i++) {
        var cn = ele[i].className;
        if (cn === className) {
            classEle.push(ele[i]);
        }
    }
    return classEle;
}

function innit() {
    for (var i = 0; i < tagEle.length; i++) {
        var a, b;
        var k = -1 + (2 * (i + 1) - 1) / tagEle.length;
        var a = Math.acos(k);
        var b = a * Math.sqrt(tagEle.length * Math.PI);
        var x = RADIUS * Math.sin(a) * Math.cos(b);
        var y = RADIUS * Math.sin(a) * Math.sin(b);
        var z = RADIUS * Math.cos(a);
        var t = new tag(tagEle[i], x, y, z);
        console.log(t);
        tagEle[i].style.fill = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
        tagEle[i].style.fill = "rgb(0,0,0)";
        
    }
    rotateX();
    rotateY();
    // tags.forEach1(function() {
        // this.move();
    // });
};


function innit_ball() {
    var num = Math.sqrt(tagEle.length);
    for (var i = 0; i < num; i++) {
        var theta1 =  Math.PI/(num+1)*(i+1);
        var y = RADIUS *Math.cos(theta1);
        for (var j = 0; j < num; j++){
            var theta2 = Math.PI*2/num*j;
            var x = Math.abs(RADIUS * Math.sin(theta1)) * Math.sin(theta2);
            var z = Math.abs(RADIUS * Math.sin(theta1)) * Math.cos(theta2+Math.PI);
            var t = new tag(tagEle[num*i+j], x, y, z,balldata[num*i+j]);
            //tagEle[i].style.fill = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
            tagEle[num*i+j].style.fill = "rgb(0,0,0)";
            tags.push(t);
            t.move();
        }
        
    }
    
};
function innit_cylinder() {
    var num = Math.sqrt(tagEle.length);
    for (var i = 0; i < num; i++) {
        var theta1 =  Math.PI/(num+1)*(i+1);
        var y = RADIUS *Math.cos(theta1);
        for (var j = 0; j < num; j++){
            var theta2 = Math.PI*2/num*j;
            var x = Math.abs(RADIUS * 0.5) * Math.sin(theta2);
            var z = Math.abs(RADIUS * 0.5) * Math.cos(theta2+Math.PI);
            var t = new tag(tagEle[num*i+j], x, y, z,balldata[num*i+j]);
            //tagEle[i].style.fill = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
            tagEle[num*i+j].style.fill = "rgb(0,0,0)";
            tags.push(t);
            t.move();
        }
        
    }
    
};
Array.prototype.forEach1 = function(callback) {
    for (var i = 0; i < this.length; i++) {
        callback.call(this[i]);
    }
};
//初始化自动更新节点，并且在做鼠标点击的时候停止自动更新

var Animation = function() {
    this.init();
};
Animation.prototype = {
    type: type,
    init: function(){
        if(this.type=="ball"){
                innit_ball();
            }else{
                innit_cylinder();
            }
            },
    isrunning: false,
    start: function() {
      this.isrunning = true;
      //animate();
      this.open();
    },
    stop: function() {
      this.isrunning = false;
    },
    open:function(){
        //避免被污染
        var prototype_n = this;
        setInterval(function(){
            //console.log(this);
            if (prototype_n.isrunning) {
            rotateY();
            tags.forEach1(function() {
                this.move();
            });
            console.log("running");
        }}, 200);
        }
    ,
};


if ("addEventListener" in window) {
    paper.addEventListener("mousemove", function(event) {
    console.log($(event));
    if(mousedown){
        //console.log("clientX");
        //console.log(event.clientX);
        
        var now_x = event.clientX;
        var now_y = event.clientY;
        var x = now_x - EX - mousestartCX;
        var y = now_y - EY - mousestartCY;
        if (this.orient[0] == null && this.orient[1] == null){
            if(x>0){
                this.orient[0]="right";
            }else{
                this.orient[0]="left";
            };
            if(y>0){
                this.orient[1]="down";
            }else{
                this.orient[1]="up";
            };
            console.log(x);
            console.log(y);
            console.log(this.orient);
            this.next_x = event.clientX;
            this.next_y = event.clientY;
        }else{
            console.log([now_x,this.next_x]);
            console.log([now_y,this.next_y]);
            console.log(this.orient);
            if (((now_x-this.next_x) > 0 && this.orient[0]=="left") || ((now_x-this.next_x)<0 && this.orient[0]=="right")){
                mousestartCX = event.clientX;
                this.orient[0]=this.orient[0]=="left"?"right":"left";
            };
            if (((now_y-this.next_y) > 0 && this.orient[1]=="up") || ((now_y-this.next_y)<0 && this.orient[1]=="down")){
                mousestartCY = event.clientY;
                this.orient[1]=this.orient[1]=="up"?"down":"up";
            };
            this.next_x = event.clientX;
            this.next_y = event.clientY;
            
        };
        
        angleY = -x * 0.00015;
        angleX = -y * 0.00015;
        rotateX();
        rotateY();
        //console.log(EX);
        //console.log(CX);
        tags.forEach1(function() {
            this.move();

        });
        }
        
    },false);
    paper.addEventListener("mousedown",function(event){
        animation.stop();
        mousedown =true;
        mousestartCX = event.clientX;
        mousestartCY = event.clientY;
        this.orient=[null,null];
    });
    paper.addEventListener("mouseup",function(event){
        mousedown =false;
    });
    
} else {
    paper.attachEvent("onmousemove", function(event) {
        var x = event.clientX - EX - CX;
        var y = event.clientY - EY - CY;
        angleY = x * 0.0001;
        angleX = y * 0.0001;
    });
}

function rotateX() {
    var cos = Math.cos(angleX);
    var sin = Math.sin(angleX);
    tags.forEach1(function() {
        var y1 = this.y * cos - this.z * sin;
        var z1 = this.z * cos + this.y * sin;
        this.y = y1;
        this.z = z1;
    });

}

function rotateY() {
    var cos = Math.cos(angleY);
    var sin = Math.sin(angleY);
    tags.forEach1(function() {
        var x1 = this.x * cos - this.z * sin;
        var z1 = this.z * cos + this.x * sin;
        this.x = x1;
        this.z = z1;
    });
};
var tag = function(ele, x, y, z,r) {
    this.ele = ele;
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;
};
//每个标签都需要move,是否必须
tag.prototype = {
    move: function() {
        var scale = fallLength / (fallLength - this.z);
        var alpha = (this.z + RADIUS) / (2 * RADIUS);
        this.ele.style.fontSize = 15 * scale + "px";
        this.ele.style.opacity = alpha + 0.5;
        this.ele.style.filter = "alpha(opacity = " + (alpha + 0.5) * 100 + ")";
        this.ele.style.zIndex = parseInt(scale * 100);
        //var cx = this.x + CX - $(this.ele.getClientRects()).attr("width") / 2 + "px";
        //console.log(this.ele.offsetWidth);
        //var cx = this.x + CX - $(this.ele.getClientRects()).attr("width") / 2 + "px";
        var cx = this.x + CX + "px";
        //var cx = this.x + CX - this.ele.offsetWidth / 2 + "px";
        $(this.ele.children).attr("cx",cx);
        //var cy = this.y + CY - $(this.ele.getClientRects()).attr("height") / 2 + "px";
        var cy = this.y + CY + "px";
        //var cy = this.y + CY - this.ele.offsetHeight / 2 + "px";
        $(this.ele.children).attr("cy",cy);
        
        $(this.ele.children).attr("r",this.r*scale);
    }
};

var animation = new Animation();
animation.start();
//animate();
});
var a = draw("normal_sphere","tag","ball");
var b = draw("abnormal_sphere","tag1","ball");
var c = draw("normal_cy","tag2","cylinder");
var e = draw("abnormal_cy","tag3","cylinder");