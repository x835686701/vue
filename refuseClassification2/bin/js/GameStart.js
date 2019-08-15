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
var GameStart = /** @class */ (function (_super) {
    __extends(GameStart, _super);
    function GameStart() {
        var _this = _super.call(this) || this;
        _this.gamecount = 0;
        var a = Math.floor(Math.random() * 3) + 1;
        if (a == 1) {
            _this.xjpjh.text = "习近平总书记强调，培养垃圾分类的好习惯，为改善生活环境作努力，为绿色发展可持续发展做贡献。";
        }
        else if (a == 2) {
            _this.xjpjh.text = "习近平总书记强调，实现垃圾分类，关系广大人民群众生活环境，关系节约使用资源，也是社会文明水平的一个重要体现。";
        }
        else {
            _this.xjpjh.text = "习近平总书记强调，推行垃圾分类，关键是要加强科学管理、形成长效机制、推动习惯养成。";
        }
        _this.zimu.play(0, false); //播放字幕动画
        Laya.stage.addChild(_this);
        _this.starBtn.on(Laya.Event.CLICK, _this, _this.startGame);
        _this.konwBtn.on(Laya.Event.CLICK, _this, _this.konwView);
        _this.helpBtn.on(Laya.Event.CLICK, _this, _this.help);
        _this.rankingBtn.on(Laya.Event.CLICK, _this, _this.ranking);
        var xhr = new HttpRequest();
        xhr.on(Laya.Event.COMPLETE, _this, _this.gameCount);
        xhr.once(Laya.Event.ERROR, _this, _this.errorHandler);
        xhr.send("http://game.scnjwh.com/ljfl/rest/score/count.htm", "", "get", "json");
        return _this;
    }
    GameStart.prototype.gameCount = function (data) {
        if (data.obj) {
            this.gamecount = data.obj.gameCount;
        }
    };
    GameStart.prototype.errorHandler = function () {
        //this.gamecount = 100;
    };
    GameStart.prototype.startGame = function () {
        console.log("cs" + this.gamecount);
        if (this.gamecount < 5) {
            //移除游戏开始界面
            this.removeSelf();
            //添加游戏界面
            //显示背景资源到舞台
            var view = new GameView(1, 0, 60, 0, 25);
            Laya.stage.addChild(view);
            //每隔一段时间创建一个随机类型垃圾，单位帧
            // Laya.timer.loop(1000, view, view.createGar);
        }
        else {
            if (this.gamecount == 100) {
                alert("获取游戏次数失败");
            }
            else {
                alert("每个人一天只能玩5次");
            }
        }
    };
    GameStart.prototype.konwView = function () {
        var konw = new Konwledge();
        Laya.stage.addChild(konw);
    };
    GameStart.prototype.help = function () {
        var help = new GameRule();
        Laya.stage.addChild(help);
    };
    GameStart.prototype.ranking = function () {
        var topScore = new TopScore();
        Laya.stage.addChild(topScore);
    };
    return GameStart;
}(ui.GameStartUI));
//# sourceMappingURL=GameStart.js.map