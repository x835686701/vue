class UserScoreList  extends ui.UserScoreListUI{
    private weekNo:number; //0代表当前周，负数就是上几周
    private yearNo:number;
    private rankDatas:Array<ScoreData>;
    constructor(){
        super();
        
         this.weekNo=0;
         //this.L.on(Laya.Event.CLICK,this,this.startGame);
        this.nextWeekBtn.on(Laya.Event.CLICK,this,this.getNextScore);
         this.lastWeekBtn.on(Laya.Event.CLICK,this,this.getLastScore);
        // this.GoHome.on(Laya.Event.CLICK,this,this.goHome);
        this.btnTopScore.on(Laya.Event.CLICK,this,this.goTopScore);
         this.init();
    }
    init():void{
        //初始化，让用户 
        //this.nextWeekBtn.disabled=true;
        //加载页面所需资源
       var res:Array<any> = [ 
            {url:"res/atlas/hb.atlas",type:Laya.Loader.ATLAS},
            {url:"res/atlas/33.png",type:Laya.Loader.IMAGE},  
            {url:"res/atlas/hb.png",type:Laya.Loader.IMAGE}
            //{url:"res/atlas/hit.wav",type:Laya.Loader.SOUND}
         ];
        this.nextWeekBtn.disabled=true;
        this.getUserScore("1");
        this.scoreList.renderHandler = new Laya.Handler(this, this.onListRender);
    }
    private goTopScore():void{
        this.removeSelf();
        
        var topscore:TopScore = new TopScore();
        Laya.stage.addChild(topscore);
    }

     private goHome():void{
        this.removeSelf();
        
        var gamestart:GameStart = new GameStart();
        Laya.stage.addChild(gamestart);
    }

    /**
     * 排行榜渲染
     */
    private onListRender(cell: Box, index: number): void {
        if (index > this.scoreList.array.length) {
            return;
        }
        var data: ScoreData = this.scoreList.array[index];
        //var headImg: Laya.Image = cell.getChildByName("touXiangImg") as Laya.Image;
        var dateTime: Laya.Label = cell.getChildByName("dateTime") as Laya.Label;
        var scoreLab: Laya.Label = cell.getChildByName("score") as Laya.Label;
        dateTime.changeText(data.scoreTime.toString());
        scoreLab.changeText(data.score.toString());
    }

     private processHandler(data:any): void {
       this.scoreList.visible=false;
        this.myMsg.changeText("数据加载中");

    }
    private errorHandler(data:any): void {
        this.myMsg.changeText("服务器走丢了");
        this.scoreList.visible=false;
    }
    private completeHandler(e:any): void {
             try {
                this.myMsg.visible=false;
                this.scoreList.visible=true;
                let obj = JSON.parse(e);
                this.rankDatas=null;
                if(obj.obj&&obj.obj.records&&obj.obj.monday){
                   this.weekDate.changeText(obj.obj.monday+" 到 "+obj.obj.sunday);
                    this.rankDatas=obj.obj.records;
                 }
                if(this.rankDatas.length>0)
                {
                    this.scoreList.vScrollBarSkin = '';
                    this.scoreList.repeatY =this.rankDatas.length;
                    this.scoreList.array = this.rankDatas;
                    this.scoreList.refresh();
                }else{
                     this.scoreList.visible=false;
                     this.myMsg.changeText("暂无数据");
                     this.myMsg.visible=true; 
                }
             }catch(e)
             {
                 this.myMsg.changeText("内部程序异常");
                 this.scoreList.visible=false;
                 this.myMsg.visible=true; 
             }
    }


    //到周排名
    getUserScore(type:string)
    {
        var xhr: Laya.HttpRequest = new Laya.HttpRequest();
        xhr.http.timeout = 10000;//设置超时时间；
        xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);
        xhr.once(Laya.Event.ERROR, this, this.errorHandler);
        xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
        var url="http://game.scnjwh.com/ljfl/rest/score/flowRecord.htm?week="+this.weekNo;
         xhr.send(url,"","get","text");
       
    }
    getNextScore():void {
        //下一周不能是未来周
        if(0>this.weekNo)
        {   
            this.lastWeekBtn.disabled=false;
            this.weekNo=this.weekNo+1;
            this.getUserScore(this.weekNo.toString());
        }
        //如果点击后达到当前周，则下一周按钮不可用
        if(0==this.weekNo)
        {
            this.nextWeekBtn.disabled=true;
        }
    }

    getLastScore():void{
             console.log("111111");
               //只能查询5周前的数据。
        if(this.weekNo>-1)
        {    
            this.weekNo=this.weekNo-1;
            this.getUserScore(this.weekNo.toString());
        }
        if(this.weekNo==-1)
        {
            this.lastWeekBtn.disabled=true;
        }
        if(this.weekNo<0)
        {
             this.nextWeekBtn.disabled=false;    
        }
    }
}

/** * 排行数据 */
class ScoreData {
    // 分数
     score: number;
    // 昵称
    scoreTime: string;
    constructor( scoreTime: string, score: number) {
        this.scoreTime = scoreTime;
        this.score = score;
    }
}
