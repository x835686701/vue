import HttpRequest = Laya.HttpRequest;
class GameOver extends ui.GameOverUI{
    private score:number;
    private level:number;
    private wx: any = Laya.Browser.window.wx;           //微信的接口
    constructor(_score:number,_level:number){
        super();
        this.level = _level;
        this.score = _score;

        this.overScore.text = "您的分数: "+this.score;
        this.overLevel.text = "当前关卡: "+this.level;
        this.addChild(this);
        
        this.upScore();
        this.GameAgain.on(Laya.Event.CLICK, this, this.againGame); 

        var konw:Konwledge = new Konwledge();
        var num = Math.floor(Math.random()*21)+1;
        var text;
        switch(num){
            case 1:{text = konw.kpt1.text;this.kpImg.skin = konw.know1.skin;break;}
            case 2:{text = konw.kpt2.text;this.kpImg.skin = konw.know2.skin;break;}
            case 3:{text = konw.kpt3.text;this.kpImg.skin = konw.know3.skin;break;}
            case 4:{text = konw.kpt4.text;this.kpImg.skin = konw.know4.skin;break;}
            case 5:{text = konw.kpt5.text;this.kpImg.skin = konw.know5.skin;break;}
            case 6:{text = konw.kpt6.text;this.kpImg.skin = konw.know6.skin;break;}
            case 7:{text = konw.kpt7.text;this.kpImg.skin = konw.know7.skin;break;}
            case 8:{text = konw.kpt8.text;this.kpImg.skin = konw.know8.skin;break;}
            case 9:{text = konw.kpt9.text;this.kpImg.skin = konw.know9.skin;break;}
            case 11:{text = konw.kpt11.text;this.kpImg.skin = konw.know10.skin;break;}
            case 10:{text = konw.kpt10.text;this.kpImg.skin = konw.know11.skin;break;}
            case 12:{text = konw.kpt12.text;this.kpImg.skin = konw.know12.skin;break;}
            case 13:{text = konw.kpt13.text;this.kpImg.skin = konw.know13.skin;break;}
            case 14:{text = konw.kpt14.text;this.kpImg.skin = konw.know14.skin;break;}
            case 15:{text = konw.kpt15.text;this.kpImg.skin = konw.know15.skin;break;}
            case 16:{text = konw.kpt16.text;this.kpImg.skin = konw.know16.skin;break;}
            case 17:{text = konw.kpt17.text;this.kpImg.skin = konw.know17.skin;break;}
            case 18:{text = konw.kpt18.text;this.kpImg.skin = konw.know18.skin;break;}
            case 19:{text = konw.kpt19.text;this.kpImg.skin = konw.know19.skin;break;}
            case 20:{text = konw.kpt20.text;this.kpImg.skin = konw.know20.skin;break;}
            case 21:{text = konw.kpt21.text;this.kpImg.skin = konw.know21.skin;break;}
        }
       // this.kpImg.skin = "war/kp_"+num+".png";
        this.kpText.text = text;
    }
    private againGame():void{
        this.removeSelf();
        
        var gamestart:GameStart = new GameStart();
        Laya.stage.addChild(gamestart);
    }

    //分数提交
    private upScore():void{
        var xhr:HttpRequest = new HttpRequest();
        xhr.http.timeout = 10000;//设置超时时间；
        xhr.once(Laya.Event.ERROR,this,this.errorHandler);
       
        xhr.send("http://game.scnjwh.com/ljfl/rest/score/record.htm","score="+this.score,"post","json");
    }
    
    //失败处理
    private errorHandler(e:Object):void{
        
    }


    //微信分享
    private share():void{
        var xhr:HttpRequest = new HttpRequest();
        xhr.on(Laya.Event.COMPLETE,this,this.shareSuccess);
        xhr.send("http://game.scnjwh.com/ljfl/rest/wechat/share.htm","post","json");
    }

    private shareSuccess(data:string):void{
        console.log(data);
         let mydata =  JSON.parse(data);
        //**配置微信信息**
        this.wx.config ({
            debug : false,
            appId : mydata.obj.appId,
            timestamp : mydata.obj.timestamp,
            nonceStr : mydata.obj.nonceStr,
            signature : mydata.obj.signature,
            jsApiList : [
                // 所有要调用的 API 都要加到这个列表中
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
            ]
        });

        this.wx.ready (function () {
                // 微信分享的数据
                var shareData = {
                    "imgUrl" : "war/wx.png",
                    "link" : "www.baidu.com",
                    "desc" : "测试",
                    "title" : "测试",
                    success : function () {
                        // 分享成功可以做相应的数据处理
                    }
                };

                //分享微信朋友圈
                this.wx.onMenuShareTimeline (shareData);
                //分享给朋友
                this.wx.onMenuShareAppMessage(shareData);

        })

    }
    
}