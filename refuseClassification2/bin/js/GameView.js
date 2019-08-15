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
/**
 * GameView继承场景
 */
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView(_level, _score, _time, _currScore, _targetScore) {
        var _this = _super.call(this) || this;
        _this.level = 1;
        _this.score = 0; //总积分
        _this.time = 60; //倒计时
        _this.currScore = 0; //当前关卡得分，每关重新记录
        _this.targetScore = 25; //目标分数，每关都会增加
        _this.ape = [];
        _this.i = 0;
        _this.scoreCallBackHd = Laya.Handler.create(_this, _this.setScore, null, false);
        _this.site = [];
        _this.isfrist = true;
        _this.position = [{ x: 211, y: 375 }, { x: 480, y: 369 }, { x: 215, y: 598 }, { x: 481, y: 595 }, { x: 215, y: 807 }, { x: 476, y: 805 }];
        _this.tip = new Tip();
        _this.level = _level;
        _this.score = _score;
        _this.time = _time;
        _this.currScore = _currScore;
        _this.targetScore = _targetScore;
        _this.LabelTime.text = "倒计时: " + _this.time;
        _this.LabelScore.text = "得分: " + _this.score;
        _this.LabelDifficulty.text = "关卡: " + _this.level;
        _this.Progress.value = _this.currScore / _this.targetScore; //更新进度条
        var num = 2;
        // this.GameBg.skin = "war/bg/neijiangbg"+num+".png";
        _this.on(Laya.Event.MOUSE_DOWN, _this, _this.mouse_down); //绑定鼠标按下事件
        //每隔一段时间创建一个随机类型垃圾，单位帧
        Laya.timer.loop(200, _this, _this.createGar3);
        Laya.timer.loop(1000, _this, _this.createGar);
        return _this;
    }
    GameView.prototype.jishi = function () {
        // var aa:GameView = new GameView(this.level,this.score,this.time,this.currScore,this.targetScore);
        // Laya.stage.addChild(aa);
        this.isfrist = true;
    };
    //垃圾拆分方法
    GameView.prototype.GarSplit = function (ape, id, sroreNo) {
        var xy = [{ x: ape.x, y: ape.y }, { x: ape.x - 100, y: ape.y + 50 }];
        var gartp = [];
        if (sroreNo == 2) { //2为过期的香烟
            gartp = [{ type: 1, no: 24 }, { type: 4, no: 23 }];
        }
        else if (sroreNo == 3) { //蚝油
            gartp = [{ type: 1, no: 15 }, { type: 2, no: 11 }];
        }
        else if (sroreNo == 4) { //电话
            gartp = [{ type: 1, no: 23 }, { type: 3, no: 3 }];
        }
        else if (sroreNo == 5) { //包裹
            gartp = [{ type: 1, no: 27 }, { type: 1, no: 18 }];
        }
        else if (sroreNo == 6) { //外卖垃圾
            gartp = [{ type: 1, no: 29 }, { type: 2, no: 32 }];
        }
        else if (sroreNo == 7) { //奶茶
            gartp = [{ type: 4, no: 32 }, { type: 2, no: 34 }];
        }
        else { //全部为null随机生成垃圾
            gartp = [{ type: null, no: null }, { type: null, no: null }];
        }
        for (var i = 0; i <= 1; i++) {
            var gar = new Garbage(this);
            var num = Math.floor(Math.random() * 4) + 1;
            gar.init(this.level, num, i, xy[i].x, xy[i].y, gartp[i].type, gartp[i].no, this.scoreCallBackHd);
            this.ape.push(gar);
        }
        this.removeArray(id);
    };
    GameView.prototype.createGar3 = function () {
        var _this = this;
        if (this.isfrist) {
            for (var i = 1; i <= 6; i++) {
                var num;
                var gar;
                if (Math.random() < 0.8) {
                    num = Math.floor(Math.random() * 4) + 1; //随机1-4的数字对应四种垃圾分类
                }
                else {
                    num = 5;
                }
                if (num == 5) {
                    gar = new Garbage2(this);
                    gar.init(this.level, num, i, null, null, this.scoreCallBackHd);
                    this.ape.push(gar);
                }
                else {
                    gar = new Garbage(this);
                    gar.init(this.level, num, i, null, null, null, null, this.scoreCallBackHd);
                    this.ape.push(gar);
                }
            }
            this.isfrist = false;
        }
        if (this.ape.length == 0) {
            // Laya.timer.clear(this, this.createGar);  
            // Laya.timer.clear(this, this.createGar3);  
            setTimeout(function () { _this.jishi(); }, 100);
        }
        // if(this.site.length == 0){
        //     return;
        // }else{
        //     for(var i=1;i <=6;i++){
        //         if(i == this.site[0]){
        //             var num = Math.floor(Math.random()*4)+1;    //随机1-4的数字对应四种垃圾分类
        //             var gar  = new Garbage(this);
        //             gar.init(this.level,num,i,this.scoreCallBackHd);
        //             this.ape.push(gar);
        //             this.site = [];
        //         }
        //     }
        // }
    };
    GameView.prototype.createGar2 = function () {
        var num = Math.floor(Math.random() * 4) + 1; //随机1-4的数字对应四种垃圾分类
        var gar = new Garbage(this);
        // gar.init(this.level,num,this.scoreCallBackHd);
        this.ape.push(gar);
    };
    GameView.prototype.createGar = function () {
        console.log(this.ape.length);
        this.time -= 1;
        this.LabelTime.text = "倒计时: " + this.time;
        if (this.time == 0) {
            this.gameOver();
        }
        // 平均随机创建垃圾↓
        // //平均5秒创建一个
        // if (Math.random() <= 0.55) return;
        // if(this.time > 5){
        //     //添加一个垃圾对象
        //     var num = Math.floor(Math.random()*4)+1;    //随机1-4的数字
        //     // var gar = Laya.Pool.getItemByClass("gar"+this.i, Garbage);
        //     var gar  = new Garbage(this);
        //     gar.init(this.level,num,this.scoreCallBackHd);
        //     // Laya.Pool.recover("laji",gar);
        //     this.ape.push(gar)
        //   //   console.log(   gar.id );      
        // }
        // 平均随机创建垃圾↑
    };
    GameView.prototype.Garbageaddlevel = function () {
        for (var i in this.ape) {
            this.ape[i].level += 1;
        }
    };
    GameView.prototype.removeArray = function (id) {
        // var ape = Laya.Pool.getPoolBySign("laji");
        var new_arr = [];
        for (var i in this.ape) {
            if (this.ape[i] != null && this.ape[i].id == id) {
                this.ape[i].removeSelf();
                this.ape[i] = null;
            }
            else {
                new_arr.push(this.ape[i]);
                this.ape[i] = null;
            }
        }
        this.ape = new_arr;
    };
    //加分方法
    GameView.prototype.addscore = function (Ttype) {
        var Trash;
        if (Ttype.type == 1) {
            Trash = this.Trash1;
        }
        else if (Ttype.type == 2) {
            Trash = this.Trash2;
        }
        else if (Ttype.type == 3) {
            Trash = this.Trash3;
        }
        else if (Ttype.type == 4) {
            Trash = this.Trash4;
        }
        SoundManager.playSound("war/right.mp3", 1);
        Trash.skin = "war/Trash" + Ttype.type + "on.png";
        setTimeout(function () { Trash.skin = "war/Trash" + Ttype.type + ".png"; }, 300);
        //this.Trash1Add.play(0,false);       //播放垃圾桶1动画
        this.score += Ttype.Srore;
        this.currScore += Ttype.Srore;
        Ttype.ape.removeSelf();
        this.removeArray(Ttype.id);
        if (Ttype.site != null) {
            this.site = [Ttype.site];
        }
    };
    GameView.prototype.reducescore = function (Ttype) {
        SoundManager.playSound("war/error.mp3", 1);
        this.score -= Ttype.Srore;
        this.currScore -= Ttype.Srore;
        if (this.score <= 0) { //积分小于或等于0时，按0记
            this.score = 0;
        }
        if (this.currScore <= 0) {
            this.currScore = 0;
        }
        Ttype.ape.removeSelf();
        this.GarId = Ttype.id;
        if (Ttype.site != null) {
            this.site = [Ttype.site];
        }
        this.removeArray(Ttype.id);
        this.showMask(Ttype.type, Ttype.bodyurl, Ttype.GarName);
    };
    GameView.prototype.setScore = function (Ttype) {
        var isTrash1 = this.Trash1.hitTestPoint(Ttype.ape.x, Ttype.ape.y);
        var isTrash2 = this.Trash2.hitTestPoint(Ttype.ape.x, Ttype.ape.y);
        var isTrash3 = this.Trash3.hitTestPoint(Ttype.ape.x, Ttype.ape.y);
        var isTrash4 = this.Trash4.hitTestPoint(Ttype.ape.x, Ttype.ape.y);
        var lax = Ttype.currXY[0];
        var lay = Ttype.currXY[1];
        var tx_x = Ttype.currXY[0] - 30;
        var tx_y = Ttype.currXY[1] - 90;
        if (Ttype.type == 5) {
            Tween.to(Ttype.ape, { x: lax, y: lay }, 1000);
            Tween.to(Ttype.tx, { x: tx_x, y: tx_y }, 1000);
            if (isTrash1 || isTrash2 || isTrash3 || isTrash4) {
                this.showMask(Ttype.type, Ttype.bodyurl, Ttype.GarName);
            }
        }
        else {
            if (!isTrash1 && !isTrash2 && !isTrash3 && !isTrash4) {
                Tween.to(Ttype.ape, { x: lax, y: lay }, 1000);
                Tween.to(Ttype.tx, { x: tx_x, y: tx_y }, 1000);
            }
            else {
                if (isTrash1) { //是否在垃圾桶1内
                    if (Ttype.type == 1) { //垃圾类型是否正确
                        this.addscore(Ttype);
                    }
                    else {
                        this.reducescore(Ttype);
                    }
                }
                else if (isTrash2) {
                    if (Ttype.type == 2) { //垃圾类型是否正确
                        this.addscore(Ttype);
                    }
                    else {
                        this.reducescore(Ttype);
                    }
                }
                else if (isTrash3) {
                    if (Ttype.type == 3) { //垃圾类型是否正确
                        this.addscore(Ttype);
                    }
                    else {
                        this.reducescore(Ttype);
                    }
                }
                else if (isTrash4) {
                    if (Ttype.type == 4) { //垃圾类型是否正确
                        this.addscore(Ttype);
                    }
                    else {
                        this.reducescore(Ttype);
                    }
                }
            }
        }
        this.LabelScore.text = "得分: " + this.score;
        this.Progress.value = this.currScore / this.targetScore; //更新进度条
        //积分进度条积满关卡加一
        if (this.Progress.value == 1) {
            this.level += 1;
            this.Garbageaddlevel();
            this.LabelDifficulty.text = "关卡: " + this.level;
            this.Progress.value = 0; //进度条清零
            this.currScore = 0; //当前关卡积分清零
            this.targetScore += 25; //关卡目标积分加1200
            //this.time += 60;        //剩余时间加60
        }
    };
    GameView.prototype.gameOver = function () {
        Laya.timer.clear(this, this.createGar3); //停止倒计时，停止继续创建垃圾
        Laya.timer.clear(this, this.jishi); //停止倒计时，停止继续创建垃圾
        this.removeSelf();
        var gameover = new GameOver(this.score, this.level);
        Laya.stage.addChild(gameover);
    };
    GameView.prototype.mouse_down = function () {
        for (var i in this.ape) {
            if (this.ape[i] != null && this.ape[i].isactive && this.currnode != this.ape[i].id) {
                this.ape[i].isactive = false;
                this.ape[i].onstopDrag();
            }
        }
    };
    //错误提示
    GameView.prototype.showMask = function (type, skin, name) {
        Laya.timer.clear(this, this.createGar3); //停止继续创建垃圾
        Laya.timer.clear(this, this.createGar); //停止倒计时
        for (var i in this.ape) {
            this.ape[i].offAll();
            //Laya.timer.clear(this.ape[i], this.ape[i].apemove);  //停止垃圾移动
            Laya.timer.clear(this.ape[i], this.ape[i].isStop); //停止倒计时
        }
        var tong;
        if (type == 1) {
            tong = "应该归类为可回收物";
        }
        else if (type == 2) {
            tong = "应该归类为湿垃圾";
        }
        else if (type == 3) {
            tong = "应该归类为有害垃圾";
        }
        else if (type == 4) {
            tong = "应该归类为干垃圾";
        }
        else if (type == 5) {
            tong = "需要双击进行拆分";
        }
        this.tip.Tips.visible = true;
        this.tip.TipImg.skin = skin;
        this.tip.TipText.text = name + tong;
        this.tip.TipYes.on(Laya.Event.MOUSE_DOWN, this, this.moveMask);
        Laya.stage.addChild(this.tip);
    };
    GameView.prototype.moveMask = function () {
        this.tip.removeSelf();
        // this.removeArray(this.GarId);
        Laya.timer.loop(200, this, this.createGar3);
        Laya.timer.loop(1000, this, this.createGar);
        // for(var i in this.ape){
        //     this.ape[i].offAll();
        //    // Laya.timer.loop(1, this.ape[i], this.ape[i].apemove);
        //     Laya.timer.loop(500, this.ape[i], this.ape[i].isStop);
        //     this.ape[i].on(Laya.Event.MOUSE_DOWN, this.ape[i], this.ape[i].onStartDrag); 
        // }
    };
    return GameView;
}(ui.gameUI));
//# sourceMappingURL=GameView.js.map