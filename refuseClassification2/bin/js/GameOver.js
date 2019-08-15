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
var HttpRequest = Laya.HttpRequest;
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver(_score, _level) {
        var _this = _super.call(this) || this;
        _this.wx = Laya.Browser.window.wx; //微信的接口
        _this.level = _level;
        _this.score = _score;
        _this.overScore.text = "您的分数: " + _this.score;
        _this.overLevel.text = "当前关卡: " + _this.level;
        _this.addChild(_this);
        _this.upScore();
        _this.GameAgain.on(Laya.Event.CLICK, _this, _this.againGame);
        var konw = new Konwledge();
        var num = Math.floor(Math.random() * 21) + 1;
        var text;
        switch (num) {
            case 1: {
                text = konw.kpt1.text;
                _this.kpImg.skin = konw.know1.skin;
                break;
            }
            case 2: {
                text = konw.kpt2.text;
                _this.kpImg.skin = konw.know2.skin;
                break;
            }
            case 3: {
                text = konw.kpt3.text;
                _this.kpImg.skin = konw.know3.skin;
                break;
            }
            case 4: {
                text = konw.kpt4.text;
                _this.kpImg.skin = konw.know4.skin;
                break;
            }
            case 5: {
                text = konw.kpt5.text;
                _this.kpImg.skin = konw.know5.skin;
                break;
            }
            case 6: {
                text = konw.kpt6.text;
                _this.kpImg.skin = konw.know6.skin;
                break;
            }
            case 7: {
                text = konw.kpt7.text;
                _this.kpImg.skin = konw.know7.skin;
                break;
            }
            case 8: {
                text = konw.kpt8.text;
                _this.kpImg.skin = konw.know8.skin;
                break;
            }
            case 9: {
                text = konw.kpt9.text;
                _this.kpImg.skin = konw.know9.skin;
                break;
            }
            case 11: {
                text = konw.kpt11.text;
                _this.kpImg.skin = konw.know10.skin;
                break;
            }
            case 10: {
                text = konw.kpt10.text;
                _this.kpImg.skin = konw.know11.skin;
                break;
            }
            case 12: {
                text = konw.kpt12.text;
                _this.kpImg.skin = konw.know12.skin;
                break;
            }
            case 13: {
                text = konw.kpt13.text;
                _this.kpImg.skin = konw.know13.skin;
                break;
            }
            case 14: {
                text = konw.kpt14.text;
                _this.kpImg.skin = konw.know14.skin;
                break;
            }
            case 15: {
                text = konw.kpt15.text;
                _this.kpImg.skin = konw.know15.skin;
                break;
            }
            case 16: {
                text = konw.kpt16.text;
                _this.kpImg.skin = konw.know16.skin;
                break;
            }
            case 17: {
                text = konw.kpt17.text;
                _this.kpImg.skin = konw.know17.skin;
                break;
            }
            case 18: {
                text = konw.kpt18.text;
                _this.kpImg.skin = konw.know18.skin;
                break;
            }
            case 19: {
                text = konw.kpt19.text;
                _this.kpImg.skin = konw.know19.skin;
                break;
            }
            case 20: {
                text = konw.kpt20.text;
                _this.kpImg.skin = konw.know20.skin;
                break;
            }
            case 21: {
                text = konw.kpt21.text;
                _this.kpImg.skin = konw.know21.skin;
                break;
            }
        }
        // this.kpImg.skin = "war/kp_"+num+".png";
        _this.kpText.text = text;
        return _this;
    }
    GameOver.prototype.againGame = function () {
        this.removeSelf();
        var gamestart = new GameStart();
        Laya.stage.addChild(gamestart);
    };
    //分数提交
    GameOver.prototype.upScore = function () {
        var xhr = new HttpRequest();
        xhr.http.timeout = 10000; //设置超时时间；
        xhr.once(Laya.Event.ERROR, this, this.errorHandler);
        xhr.send("http://game.scnjwh.com/ljfl/rest/score/record.htm", "score=" + this.score, "post", "json");
    };
    //失败处理
    GameOver.prototype.errorHandler = function (e) {
    };
    //微信分享
    GameOver.prototype.share = function () {
        var xhr = new HttpRequest();
        xhr.on(Laya.Event.COMPLETE, this, this.shareSuccess);
        xhr.send("http://game.scnjwh.com/ljfl/rest/wechat/share.htm", "post", "json");
    };
    GameOver.prototype.shareSuccess = function (data) {
        console.log(data);
        var mydata = JSON.parse(data);
        //**配置微信信息**
        this.wx.config({
            debug: false,
            appId: mydata.obj.appId,
            timestamp: mydata.obj.timestamp,
            nonceStr: mydata.obj.nonceStr,
            signature: mydata.obj.signature,
            jsApiList: [
                // 所有要调用的 API 都要加到这个列表中
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
            ]
        });
        this.wx.ready(function () {
            // 微信分享的数据
            var shareData = {
                "imgUrl": "war/wx.png",
                "link": "www.baidu.com",
                "desc": "测试",
                "title": "测试",
                success: function () {
                    // 分享成功可以做相应的数据处理
                }
            };
            //分享微信朋友圈
            this.wx.onMenuShareTimeline(shareData);
            //分享给朋友
            this.wx.onMenuShareAppMessage(shareData);
        });
    };
    return GameOver;
}(ui.GameOverUI));
//# sourceMappingURL=GameOver.js.map