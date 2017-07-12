function Drawn(obju,setting){
      this.obju=obju;
      this.style=setting.st;
      this.pencolor=setting.pen;
      this.widt=setting.wid;
}
Drawn.prototype={
    pen:function(){
        var obju=this.obju;
        obju.strokeStyle=this.pencolor;
        obju.fillStyle=this.pencolor;
    },
    wid:function (){
      this.obju.lineWidth=this.widt;
    },
  line:function(dx,dy,mx,my){
      this.pen();
      this.wid();
      var obju=this.obju;
      obju.beginPath();
      obju.moveTo(dx,dy);
      obju.lineTo(mx,my);
      obju[this.style]();
  },
    qianbi:function(dx,dy,ox,oy){
        this.pen();
        this.wid();
        var obju=this.obju;
        obju.lineTo(ox,oy);
        obju.stroke();
    },
    crec:function (dx,dy,mx,my) {
        this.pen();
        this.wid();
        var obju=this.obju;
        obju.beginPath();
        obju.rect(dx,dy,mx-dx,my-dy);
        obju[this.style]();
    },
    arc:function(dx,dy,mx,my){
        this.pen();
        this.wid();
        var obju=this.obju;
        obju.beginPath();
        var r=Math.sqrt(Math.pow(mx-dx,2)+Math.pow(my-dy,2))
        obju.arc(dx,dy,r,0,Math.PI*2);
        obju[this.style]();
    },
    srec:function(dx,dy,mx,my,w){
        this.pen();
        this.wid();
        var obju=this.obju;
        obju.save();
        obju.translate(dx,dy);
        var r=Math.sqrt(Math.pow(mx-dx,2)+Math.pow(my-dy,2));
        var x=r*Math.cos(Math.PI/w);
        var y=r*Math.sin(Math.PI/w);
        obju.beginPath();
        obju.moveTo(x,y);
        for (var i=0;i<w;i++){
            obju.save();
            obju.rotate(-2*Math.PI/w*i);
            obju.lineTo(x,-y);
            obju.restore();
        }
        obju[this.style]();
        obju.restore();

    },
    reser:function(dx,dy,mx,my){
        var obju=this.obju;
        obju.clearRect(mx,my,20,20);

    }
    



};