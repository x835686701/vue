class GameStart extends ui.GameStartUI{
    private gamecount:number = 0;
    constructor(){
        super();
        var a = Math.floor(Math.random()*3)+1;
        if(a == 1){
            this.xjpjh.text = "习近平总书记强调，培养垃圾分类的好习惯，为改善生活环境作努力，为绿色发展可持续发展做贡献。";
        }else if(a == 2){
            this.xjpjh.text = "习近平总书记强调，实现垃圾分类，关系广大人民群众生活环境，关系节约使用资源，也是社会文明水平的一个重要体现。";
        }else{
            this.xjpjh.text = "习近平总书记强调，推行垃圾分类，关键是要加强科学管理、形成长效机制、推动习惯养成。";
        }
        this.zimu.play(0,false);   //播放字幕动画
        Laya.stage.addChild(this);
        this.starBtn.on(Laya.Event.CLICK, this, this.startGame); 
        this.konwBtn.on(Laya.Event.CLICK,this,this.konwView);
        this.helpBtn.on(Laya.Event.CLICK,this,this.help);
        this.rankingBtn.on(Laya.Event.CLICK,this,this.ranking);
        var xhr:HttpRequest = new HttpRequest();
        xhr.on(Laya.Event.COMPLETE,this,this.gameCount);
        xhr.once(Laya.Event.ERROR,this,this.errorHandler);
        xhr.send("http://game.scnjwh.com/ljfl/rest/score/count.htm","","get","json");
    }
    private gameCount(data:any):void{
        if(data.obj){
            this.gamecount = data.obj.gameCount;
        }
    }
    private errorHandler():void{
        //this.gamecount = 100;
    }
    private startGame():void{
        console.log("cs"+this.gamecount);
        if(this.gamecount < 5){
            //移除游戏开始界面
            this.removeSelf();
            //添加游戏界面
            //显示背景资源到舞台
            var view:GameView = new GameView(1,0,60,0,25);
            Laya.stage.addChild(view);
            //每隔一段时间创建一个随机类型垃圾，单位帧
            // Laya.timer.loop(1000, view, view.createGar);
        }else{
            if(this.gamecount == 100){
                alert("获取游戏次数失败");
            }else{
                alert("每个人一天只能玩5次");
            }
        }
        
    }
    
    private konwView():void{
        var konw:Konwledge = new Konwledge();
        Laya.stage.addChild(konw);
    }

    private help():void{
        var help:GameRule = new GameRule();
        Laya.stage.addChild(help);
    }

    private ranking():void{
        var topScore:TopScore = new TopScore();
        Laya.stage.addChild(topScore);
    }
    
}
