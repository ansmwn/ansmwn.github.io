<!-- Interactive fragment logo -->

<canvas id="test" height="400" width="400" style="height:200px;width:200px;color:transparent;" contenteditable>You have an old browser, so you do not deserve to see this logo :P</canvas>
<script>
    // octahedron.min.js - Provides a interactive fragment. 
    var c=document.getElementById("test").getContext("2d");function f(a,e,d){this.x=a;this.y=e;this.z=d}f.prototype.a=function(a){return Math.sqrt((a.x-this.x)*(a.x-this.x)+(a.y-this.y)*(a.y-this.y)+(a.z-this.z)*(a.z-this.z))};var h=new f(2.7,.45,-1.85),k=new f(-.05,-1.05,0);
function r(a){var e=a.x-h.x,d=a.y-h.y;a=a.z-h.z;var p=Math.cos(k.x),l=Math.sin(k.x),m=Math.cos(k.y),n=Math.sin(k.y),b=Math.cos(k.z),g=Math.sin(k.z),q=new f(0,0,0);q.x=m*(g*d+b*e)-n*a;q.y=l*(m*a+n*(g*d+b*e))+p*(b*d-g*e);q.z=p*(m*a+n*(g*d+b*e))-l*(b*d-g*e);return q}
var t=[[new f(0,0,-1),new f(0,-1,0),new f(1,0,0)],[new f(0,-1,0),new f(1,0,0),new f(0,0,1)],[new f(0,0,-1),new f(0,1,0),new f(1,0,0)],[new f(1,0,0),new f(0,1,0),new f(0,0,1)],[new f(0,1,0),new f(0,0,-1),new f(-1,0,0)],[new f(0,1,0),new f(0,0,1),new f(-1,0,0)],[new f(-1,0,0),new f(0,0,1),new f(0,-1,0)],[new f(0,0,-1),new f(0,-1,0),new f(-1,0,0)]];
function u(){c.clearRect(0,0,400,400);for(var a=[],e=0;e<t.length;e++)if(0!=t.length){var d={b:[],a:Infinity,id:-1,c:-1},p=0,l=t[e],m=Infinity,n=0,b=r(l[0]);if(0<=b.z){d.b.push([200+400*b.x/b.z,200-400*b.y/b.z]);var g=h.a(l[0]),m=g,n=n+g;p++}for(b=0;b<l.length;b++)g=r(l[b]),0<=g.z&&(d.b.push([200+400*g.x/g.z,200-400*g.y/g.z]),g=h.a(l[b]),m=Math.min(m,g),n+=g,p++);1<d.b.length&&(d.a=m,d.id=e,d.c=n/p,a.push(d))}for(e=a.length-1;0<=e;e--)for(b=1;b<=e;b++)a[b-1].a===a[b].a&&a[b-1].c<a[b].c&&(d=a[b-1],
a[b-1]=a[b],a[b]=d),a[b-1].a<a[b].a&&(d=a[b-1],a[b-1]=a[b],a[b]=d);for(e=0;e<a.length;e++){d=a[e].b;c.beginPath();c.moveTo(d[0][0],d[0][1]);for(b=1;b<d.length;b++)c.lineTo(d[b][0],d[b][1]);c.lineTo(d[0][0],d[0][1]);c.fill();c.fillStyle="#FFFFFF";c.stroke();c.closePath()}requestAnimationFrame(u)}u();
document.getElementById("test").addEventListener("keydown",function(a){console.log(a.keyCode);switch(a.keyCode){case 65:h.x-=.05;a.preventDefault();break;case 68:h.x+=.05;a.preventDefault();break;case 87:h.z+=.05;a.preventDefault();break;case 16:h.y-=.05;a.preventDefault();break;case 32:h.y+=.05;a.preventDefault();break;case 83:h.z-=.05;a.preventDefault();break;case 37:k.y-=.05;a.preventDefault();break;case 39:k.y+=.05;a.preventDefault();break;case 38:k.x-=.05;a.preventDefault();break;case 40:k.x+=
.05;a.preventDefault();break;default:console.log(a.keyCode)}});
</script>