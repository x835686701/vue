var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Box = laya.ui.Box;
var TopScore = /** @class */ (function (_super) {
    __extends(TopScore, _super);
    function TopScore() {
        var _this = _super.call(this) || this;
        _this.weekNo = 0;
        //this.L.on(Laya.Event.CLICK,this,this.startGame)
        _this.nextWeekBtn.on(Laya.Event.CLICK, _this, _this.getNextScore);
        _this.lastWeekBtn.on(Laya.Event.CLICK, _this, _this.getLastScore);
        _this.btnUserScore.on(Laya.Event.CLICK, _this, _this.goUserScore);
        _this.fhImg.on(Laya.Event.CLICK, _this, _this.goHome);
        _this.init();
        return _this;
    }
    TopScore.prototype.init = function () {
        //初始化，让用户 
        this.nextWeekBtn.disabled = true;
        //加载页面所需资源
        var res = [
        //{url:"res/atlas/hit.wav",type:Laya.Loader.SOUND}
        ];
        this.getTopScore("1");
        this.scoreList.renderHandler = new Laya.Handler(this, this.onListRender);
    };
    TopScore.prototype.goUserScore = function () {
        UIManager.toUI(2 /* UserScoreList */);
    };
    TopScore.prototype.goHome = function () {
        UIManager.toUI(3 /* Home */);
    };
    TopScore.prototype.sbuStr = function (str, len) {
        if (str.length > len) {
            return str.substring(0, len) + "...";
        }
        else {
            return str;
        }
    };
    /**
     * 排行榜渲染
     */
    TopScore.prototype.onListRender = function (cell, index) {
        if (index > this.scoreList.array.length) {
            return;
        }
        var data = this.scoreList.array[index];
        //var headImg: Laya.Image = cell.getChildByName("touXiangImg") as Laya.Image;
        var ranking = cell.getChildByName("ranking");
        var num = cell.getChildByName("num");
        var userNameLab = cell.getChildByName("userName");
        var scoreLab = cell.getChildByName("score");
        num.index = index;
        userNameLab.changeText(this.sbuStr(data.nickName, 10));
        scoreLab.changeText(data.weekScore.toString());
    };
    TopScore.prototype.processHandler = function (data) {
        this.scoreList.visible = false;
        this.myMsg.changeText("正在获取数据");
    };
    TopScore.prototype.errorHandler = function (data) {
        this.userRank.changeText("0");
        this.userScore.changeText("0");
        this.myMsg.changeText("服务器走丢了");
        this.scoreList.visible = false;
    };
    TopScore.prototype.completeHandler = function (e) {
        try {
            this.myMsg.visible = false;
            this.scoreList.visible = true;
            var obj = JSON.parse(e);
            if (obj.obj && obj.obj.ownRank && obj.obj.ownRank.length > 0 && obj.obj.rankings) {
                this.userRank.changeText(obj.obj.ownRank[0].rowNo);
                this.userScore.changeText(obj.obj.ownRank[0].weekScore);
            }
            else {
                this.userRank.changeText("0");
                this.userScore.changeText("0");
            }
            if (obj.obj && obj.obj.userNum) {
                this.userCount.changeText("已有" + obj.obj.userNum + "人参与活动");
            }
            this.rankDatas = null;
            if (obj.obj && obj.obj.rankings) {
                this.rankDatas = obj.obj.rankings;
            }
            if (this.rankDatas && this.rankDatas.length > 0) {
                this.scoreList.vScrollBarSkin = '';
                this.scoreList.repeatY = this.rankDatas.length;
                this.scoreList.array = this.rankDatas;
                this.scoreList.refresh();
            }
            else {
                this.myMsg.changeText("暂无数据");
                this.scoreList.visible = false;
                this.myMsg.visible = true;
            }
        }
        catch (e) {
            this.myMsg.changeText("内部程序异常");
            this.scoreList.visible = false;
            this.myMsg.visible = true;
        }
    };
    //到周排名
    TopScore.prototype.getTopScore = function (type) {
        var xhr = new Laya.HttpRequest();
        xhr.http.timeout = 10000; //设置超时时间；
        xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);
        xhr.once(Laya.Event.ERROR, this, this.errorHandler);
        xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
        var url = "http://game.scnjwh.com/ljfl/rest/score/ranking.htm?week=" + this.weekNo;
        xhr.send(url, "", "get", "text");
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
    };
    TopScore.prototype.getNextScore = function () {
        //下一周不能是未来周
        if (0 > this.weekNo) {
            this.lastWeekBtn.disabled = false;
            this.weekNo = this.weekNo + 1;
            this.getTopScore(this.weekNo.toString());
        }
        //如果点击后达到当前周，则下一周按钮不可用
        if (0 == this.weekNo) {
            this.nextWeekBtn.disabled = true;
        }
    };
    TopScore.prototype.getLastScore = function () {
        //只能查询5周前的数据。
        if (this.weekNo > -6) {
            this.weekNo = this.weekNo - 1;
            this.getTopScore(this.weekNo.toString());
        }
        if (this.weekNo == -5) {
            this.lastWeekBtn.disabled = true;
        }
        if (this.weekNo < 0) {
            this.nextWeekBtn.disabled = false;
        }
    };
    TopScore.prototype.getWeekNumber = function (d) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
        // Return array of year and week number
        return [d.getUTCFullYear(), weekNo];
    };
    //加载完成后的回调函数
    TopScore.prototype.onLoad = function () {
        // console.log("加载完成");
        //var my=new MyNetworkManager();
        //UIManager.toUI(UIName.Login);
    };
    return TopScore;
}(ui.TopScoreUI));
/** * 排行数据 */
var RankData = /** @class */ (function () {
    function RankData(nickName, weekScore, rowNo) {
        this.rowNo = rowNo;
        this.nickName = nickName;
        this.weekScore = weekScore;
    }
    return RankData;
}());
//# sourceMappingURL=TopScore.js.map