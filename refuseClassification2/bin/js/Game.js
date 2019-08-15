// 程序入口
var Sprite = Laya.Sprite;
var Rectangle = Laya.Rectangle;
var Texture = Laya.Texture;
var Browser = Laya.Browser;
var Handler = Laya.Handler;
var WebGL = Laya.WebGL;
var Tween = Laya.Tween;
var SoundManager = Laya.SoundManager;
var GameMain = /** @class */ (function () {
    function GameMain() {
        this.level = 1; //关卡
        // 不支持WebGL时自动切换至Canvas
        Laya.init(720, 1280, WebGL);
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.screenMode = "vertical";
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.bgColor = "#232628";
        var resArray = [
            { url: "res/atlas/war.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/war/garbages.json", type: Laya.Loader.ATLAS },
            { url: "war/bg.png", type: Laya.Loader.IMAGE },
            { url: "war/gd.png", type: Laya.Loader.IMAGE },
            { url: "war/33.jpg", type: Laya.Loader.IMAGE },
            { url: "war/50.png", type: Laya.Loader.IMAGE },
            { url: "war/55.jpg", type: Laya.Loader.IMAGE },
            { url: "war/b2b.png", type: Laya.Loader.IMAGE },
            { url: "war/knowPanel.png", type: Laya.Loader.IMAGE },
            { url: "war/knowPanel1.png", type: Laya.Loader.IMAGE },
            { url: "war/knowPanel2.png", type: Laya.Loader.IMAGE },
            { url: "war/knowPanel3.png", type: Laya.Loader.IMAGE },
            { url: "war/knowPanel4.png", type: Laya.Loader.IMAGE },
            { url: "war/name.png", type: Laya.Loader.IMAGE },
            { url: "war/over.png", type: Laya.Loader.IMAGE },
            { url: "war/rewardsrules.png", type: Laya.Loader.IMAGE },
            { url: "war/1.png", type: Laya.Loader.IMAGE },
            { url: "war/bgm.mp3", type: Laya.Loader.SOUND },
            { url: "war/bg.mp3", type: Laya.Loader.SOUND },
            { url: "war/click.mp3", type: Laya.Loader.SOUND },
            { url: "war/error.mp3", type: Laya.Loader.SOUND },
            { url: "war/right.mp3", type: Laya.Loader.SOUND }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoaded), Laya.Handler.create(this, this.onProgress));
    }
    GameMain.prototype.onProgress = function (e) {
        console.log(e);
        var tx = new Laya.Text();
        tx.text = "资源加载中...";
        tx.fontSize = 60;
        tx.pos(150, 640);
        tx.color = "red";
        tx.bold = true;
        Laya.stage.addChild(tx);
    };
    //加载资源回调方法
    GameMain.prototype.onLoaded = function () {
        //显示开始页面资源到舞台
        var gamestart = new GameStart();
        Laya.stage.addChild(gamestart);
        //播放背景音乐
        // SoundManager.playMusic("war/bgMusic.wav", 0);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=Game.js.map