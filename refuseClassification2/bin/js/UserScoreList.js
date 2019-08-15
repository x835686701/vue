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
var UserScoreList = /** @class */ (function (_super) {
    __extends(UserScoreList, _super);
    function UserScoreList() {
        var _this = _super.call(this) || this;
        _this.weekNo = 0;
        //this.L.on(Laya.Event.CLICK,this,this.startGame);
        _this.nextWeekBtn.on(Laya.Event.CLICK, _this, _this.getNextScore);
        _this.lastWeekBtn.on(Laya.Event.CLICK, _this, _this.getLastScore);
        // this.GoHome.on(Laya.Event.CLICK,this,this.goHome);
        _this.btnTopScore.on(Laya.Event.CLICK, _this, _this.goTopScore);
        _this.init();
        return _this;
    }
    UserScoreList.prototype.init = function () {
        //初始化，让用户 
        //this.nextWeekBtn.disabled=true;
        //加载页面所需资源
        var res = [
            { url: "res/atlas/hb.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/33.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/hb.png", type: Laya.Loader.IMAGE }
            //{url:"res/atlas/hit.wav",type:Laya.Loader.SOUND}
        ];
        this.nextWeekBtn.disabled = true;
        this.getUserScore("1");
        this.scoreList.renderHandler = new Laya.Handler(this, this.onListRender);
    };
    UserScoreList.prototype.goTopScore = function () {
        this.removeSelf();
        var topscore = new TopScore();
        Laya.stage.addChild(topscore);
    };
    UserScoreList.prototype.goHome = function () {
        this.removeSelf();
        var gamestart = new GameStart();
        Laya.stage.addChild(gamestart);
    };
    /**
     * 排行榜渲染
     */
    UserScoreList.prototype.onListRender = function (cell, index) {
        if (index > this.scoreList.array.length) {
            return;
        }
        var data = this.scoreList.array[index];
        //var headImg: Laya.Image = cell.getChildByName("touXiangImg") as Laya.Image;
        var dateTime = cell.getChildByName("dateTime");
        var scoreLab = cell.getChildByName("score");
        dateTime.changeText(data.scoreTime.toString());
        scoreLab.changeText(data.score.toString());
    };
    UserScoreList.prototype.processHandler = function (data) {
        this.scoreList.visible = false;
        this.myMsg.changeText("数据加载中");
    };
    UserScoreList.prototype.errorHandler = function (data) {
        this.myMsg.changeText("服务器走丢了");
        this.scoreList.visible = false;
    };
    UserScoreList.prototype.completeHandler = function (e) {
        try {
            this.myMsg.visible = false;
            this.scoreList.visible = true;
            var obj = JSON.parse(e);
            this.rankDatas = null;
            if (obj.obj && obj.obj.records && obj.obj.monday) {
                this.weekDate.changeText(obj.obj.monday + " 到 " + obj.obj.sunday);
                this.rankDatas = obj.obj.records;
            }
            if (this.rankDatas.length > 0) {
                this.scoreList.vScrollBarSkin = '';
                this.scoreList.repeatY = this.rankDatas.length;
                this.scoreList.array = this.rankDatas;
                this.scoreList.refresh();
            }
            else {
                this.scoreList.visible = false;
                this.myMsg.changeText("暂无数据");
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
    UserScoreList.prototype.getUserScore = function (type) {
        var xhr = new Laya.HttpRequest();
        xhr.http.timeout = 10000; //设置超时时间；
        xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);
        xhr.once(Laya.Event.ERROR, this, this.errorHandler);
        xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
        var url = "http://game.scnjwh.com/ljfl/rest/score/flowRecord.htm?week=" + this.weekNo;
        xhr.send(url, "", "get", "text");
    };
    UserScoreList.prototype.getNextScore = function () {
        //下一周不能是未来周
        if (0 > this.weekNo) {
            this.lastWeekBtn.disabled = false;
            this.weekNo = this.weekNo + 1;
            this.getUserScore(this.weekNo.toString());
        }
        //如果点击后达到当前周，则下一周按钮不可用
        if (0 == this.weekNo) {
            this.nextWeekBtn.disabled = true;
        }
    };
    UserScoreList.prototype.getLastScore = function () {
        console.log("111111");
        //只能查询5周前的数据。
        if (this.weekNo > -1) {
            this.weekNo = this.weekNo - 1;
            this.getUserScore(this.weekNo.toString());
        }
        if (this.weekNo == -1) {
            this.lastWeekBtn.disabled = true;
        }
        if (this.weekNo < 0) {
            this.nextWeekBtn.disabled = false;
        }
    };
    return UserScoreList;
}(ui.UserScoreListUI));
/** * 排行数据 */
var ScoreData = /** @class */ (function () {
    function ScoreData(scoreTime, score) {
        this.scoreTime = scoreTime;
        this.score = score;
    }
    return ScoreData;
}());
//# sourceMappingURL=UserScoreList.js.map