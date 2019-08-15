/**
 * 垃圾集合
 */
class Garbage2 extends Laya.Sprite{
    private ape = new Laya.Sprite;
    private view:GameView;
    private type: number;       //垃圾类型
    public level:number;        //级别
    private scoreCallBackHd:Laya.Handler;
    private dragRegion: Rectangle;
    public id:any = this.generateUUID();
    public click_time:number;
    private currXY:any;
    public isactive:boolean;
    public tx = new Laya.Text();
    private sroreNo:number;     //垃圾编号
    private site:number;    //垃圾位置
    private bodyurl:string; 
    private GarName:String;
    constructor( _view:GameView){
        super();
        this.view = _view;
    }
    public position = [{x:211,y:375},{x:480,y:369},{x:215,y:598},{x:481,y:595},{x:215,y:807},{x:476,y:805}];
    public init(_level:number,_type:number,_site:number,X:any,Y:any,scoreCallBackHd:Laya.Handler):void{
        this.type = _type;
        this.level = _level;
        this.scoreCallBackHd = scoreCallBackHd;
        this.site = _site;
        var garbagesname = ["一大坨垃圾","过期的香烟","过期的蚝油","坏掉的电话","包裹","外卖盒饭","未喝完的奶茶"]; 

        this.sroreNo = Math.floor(Math.random()*7)+1;           //生成组合垃圾数量随机数
        this.bodyurl = "war/garbages/garbage_"+this.type+"_"+this.sroreNo+".png";
        this.ape.loadImage(this.bodyurl);           
        this.ape.pos(this.position[this.site-1].x,-90);
        this.ape.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag);     //绑定鼠标按下事件
        this.ape.on(Laya.Event.MOUSE_UP, this, this.onstopDrag);        //绑定鼠标松开事件
        this.ape.on(Laya.Event.DOUBLE_CLICK,this,this.ondoubleClick);

        this.ape.size(this.ape.width, this.ape.height);                 //定义交互区域
        this.ape.pivot(this.ape.getBounds().width / 2,this.ape.getBounds().height / 2);

        this.tx.fontSize = 30;
        this.tx.color = "#552423";
        this.tx.bold = true;
        this.tx.text = garbagesname[this.sroreNo-1];
         this.GarName = garbagesname[this.sroreNo-1];
        this.tx.pos(this.position[this.site-1].x-30,this.position[this.site-1].y-90);
        
        
        Laya.stage.addChild(this.ape);

        this.currXY = [this.position[this.site-1].x,this.position[this.site-1].y];
        Tween.to(this.ape,{x: this.position[this.site-1].x,y: this.position[this.site-1].y}, 1000);            //缓动到指定位置

        Laya.timer.loop(500, this, this.isStop);

    }
    isStop():void{
        if(this.isactive && ( new Date().getTime() - this.click_time)/1000>2){
            this.onstopDrag();
        }
    }

    //双击
    ondoubleClick():void{
        this.apeDelete();
        this.view.GarSplit(this.ape,this.id,this.sroreNo);
    }

    //鼠标按下
    onStartDrag():void{
        Laya.stage.addChild(this.tx);

         SoundManager.playSound("war/click.mp3", 1);    //音效播放

        // Laya.timer.clear(this,this.apemove);
        this.ape.startDrag();
        this.tx.startDrag();
        this.isactive = true;
        this.view.currnode = this.id;
        this.view.mouse_down();
        this.click_time = new Date().getTime();
    }
    //鼠标弹起
    onstopDrag():void{
        Laya.stage.removeChild(this.tx);
        var Ttype = {type:this.type,Srore:0,site:this.site,ape:this.ape,tx:this.tx,id:this.id,currXY:this.currXY,bodyurl:this.bodyurl,GarName:this.GarName};  
        this.scoreCallBackHd.runWith(Ttype);
        this.isactive = false;
    }

    public apeDelete():void{
        this.ape.removeSelf(); 
        this.tx.removeSelf(); 
    }

    generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    };

}