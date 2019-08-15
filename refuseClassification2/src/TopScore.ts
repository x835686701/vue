import Box = laya.ui.Box;
 class TopScore extends ui.TopScoreUI{
    private weekNo:number; //0代表当前周，负数就是上几周
    private yearNo:number;
    private rankDatas:Array<RankData>;
    constructor(){
         super();
         this.weekNo=0;
         //this.L.on(Laya.Event.CLICK,this,this.startGame)
         this.nextWeekBtn.on(Laya.Event.CLICK,this,this.getNextScore);
         this.lastWeekBtn.on(Laya.Event.CLICK,this,this.getLastScore);
        this.btnUserScore.on(Laya.Event.CLICK,this,this.goUserScore);
         this.fhImg.on(Laya.Event.CLICK,this,this.goHome);
         this.init();
    }
    init():void{
        //初始化，让用户 
        this.nextWeekBtn.disabled=true;
        //加载页面所需资源
        var res:Array<any> = [ 
            //{url:"res/atlas/hit.wav",type:Laya.Loader.SOUND}
         ];
        this.getTopScore("1");
        this.scoreList.renderHandler = new Laya.Handler(this, this.onListRender);
    }
    private goUserScore():void{
        UIManager.toUI(UIName.UserScoreList);
    }
    private goHome():void{
        UIManager.toUI(UIName.Home);
    }

    private sbuStr(str:string,len:number)
    {
        if(str.length>len)
        {
            return str.substring(0,len)+"...";
        }else{
            return str;
        }
    }
    /**
     * 排行榜渲染
     */
    private onListRender(cell: Box, index: number): void {
        if (index > this.scoreList.array.length) {
            return;
        }
        var data: RankData = this.scoreList.array[index];
        //var headImg: Laya.Image = cell.getChildByName("touXiangImg") as Laya.Image;
        var ranking: Laya.Label = cell.getChildByName("ranking") as Laya.Label;
        var num: Laya.Clip = cell.getChildByName("num") as Laya.Clip;
        var userNameLab: Laya.Label = cell.getChildByName("userName") as Laya.Label;
        var scoreLab: Laya.Label = cell.getChildByName("score") as Laya.Label;
        num.index=index;
        userNameLab.changeText(this.sbuStr(data.nickName,10));
        scoreLab.changeText(data.weekScore.toString());
    }
   private processHandler(data:any): void {
        this.scoreList.visible=false;
        this.myMsg.changeText("正在获取数据");
    }
    private errorHandler(data:any): void {
        this.userRank.changeText("0");
        this.userScore.changeText("0");
        this.myMsg.changeText("服务器走丢了");
        this.scoreList.visible=false;
    }
    private completeHandler(e:any): void {
           try {
            this.myMsg.visible=false;
            this.scoreList.visible=true;
            let obj =  JSON.parse(e);
                if(obj.obj&&obj.obj.ownRank&&obj.obj.ownRank.length>0&&obj.obj.rankings)
                {
                    this.userRank.changeText(obj.obj.ownRank[0].rowNo);
                    this.userScore.changeText(obj.obj.ownRank[0].weekScore);
                }else{
                    this.userRank.changeText("0");
                    this.userScore.changeText("0");
                }
                if(obj.obj&&obj.obj.userNum){
                       this.userCount.changeText("已有"+obj.obj.userNum+"人参与活动");
                 }
                this.rankDatas=null;
                if(obj.obj&&obj.obj.rankings)
                {
                    this.rankDatas=obj.obj.rankings;
                }
                if(this.rankDatas&&this.rankDatas.length>0)
                {
                    this.scoreList.vScrollBarSkin = '';
                    this.scoreList.repeatY =this.rankDatas.length;
                    this.scoreList.array = this.rankDatas;
                    this.scoreList.refresh();
                }else{
                    this.myMsg.changeText("暂无数据");
                    this.scoreList.visible=false;
                    this.myMsg.visible=true;
             }
           }catch(e){
                this.myMsg.changeText("内部程序异常");
                this.scoreList.visible=false;
                this.myMsg.visible=true;
          }
    }
    

    //到周排名
    getTopScore(type:string)
    {
        var xhr: Laya.HttpRequest = new Laya.HttpRequest();
        xhr.http.timeout = 10000;//设置超时时间；
        xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);
        xhr.once(Laya.Event.ERROR, this, this.errorHandler);
        xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
        var url="http://game.scnjwh.com/ljfl/rest/score/ranking.htm?week="+this.weekNo;
        xhr.send(url,"","get","text");
        // xhr.open('GET', url, false); 
        // xhr.send(null); 
        // if (xhr.status === 200) {
        //     try {
        //     this.myMsg.visible=false;
        //     this.scoreList.visible=true;
        //     var json=xhr.responseText;
        //     let obj =  JSON.parse(json);
        //         if(obj.obj&&obj.obj.ownRank&&obj.obj.lengh>0)
        //         {
        //             this.userRank.changeText(obj.obj.ownRank[0].rowNo);
        //             this.userScore.changeText(obj.obj.ownRank[0].weekScore);
        //         }else{
        //             this.userRank.changeText("0");
        //             this.userScore.changeText("0");
        //         }
        //         this.rankDatas=null;
        //         if(obj.obj&&obj.obj.rankings)
        //         {
        //             this.rankDatas=obj.obj.rankings;
        //         }
        //         if(this.rankDatas&&this.rankDatas.length>0)
        //         {
        //             this.scoreList.vScrollBarSkin = '';
        //             this.scoreList.repeatY =this.rankDatas.length;
        //             this.scoreList.array = this.rankDatas;
        //             this.scoreList.refresh();
        //         }else{
        //             this.myMsg.changeText("暂无数据");
        //             this.scoreList.visible=false;
        //             this.myMsg.visible=true;
        //         }
        //     }catch (e){
        //         this.myMsg.changeText("内部程序异常");
        //         this.scoreList.visible=false;
        //         this.myMsg.visible=true;
        //     }
        // }else{
        //      this.myMsg.changeText("服务器走丢了");
        //     this.scoreList.visible=false;
        //     this.myMsg.visible=true;
        // }
    }
    getNextScore():void {
        //下一周不能是未来周
        if(0>this.weekNo)
        {   
            this.lastWeekBtn.disabled=false;
            this.weekNo=this.weekNo+1;
            this.getTopScore(this.weekNo.toString());
        }
        //如果点击后达到当前周，则下一周按钮不可用
        if(0==this.weekNo)
        {
            this.nextWeekBtn.disabled=true;
        }
    }
    getLastScore():void{
        //只能查询5周前的数据。
        if(this.weekNo>-6)
        {    
            this.weekNo=this.weekNo-1;
            this.getTopScore(this.weekNo.toString());
        }
        if(this.weekNo==-5)
        {
            this.lastWeekBtn.disabled=true;
        }
        if(this.weekNo<0)
        {
             this.nextWeekBtn.disabled=false;    
        }
       
    }

    getWeekNumber(d:Date) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1)/7);
        // Return array of year and week number
        return [d.getUTCFullYear(), weekNo];
    }

    //加载完成后的回调函数
    onLoad():void{
        // console.log("加载完成");
        //var my=new MyNetworkManager();
        //UIManager.toUI(UIName.Login);
    }
    
}

/** * 排行数据 */
class RankData {
    // 排名
     rowNo: number;
    // 分数
     weekScore: number;
    // 昵称
     nickName: string;
    constructor( nickName: string, weekScore: number,rowNo:number) {
        this.rowNo = rowNo;
        this.nickName = nickName;
        this.weekScore = weekScore;
    }
}
