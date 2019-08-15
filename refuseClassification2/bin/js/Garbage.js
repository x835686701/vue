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
 * 垃圾类
 */
var Garbage = /** @class */ (function (_super) {
    __extends(Garbage, _super);
    function Garbage(_view) {
        var _this = _super.call(this) || this;
        _this.ape = new Laya.Sprite;
        _this.id = _this.generateUUID();
        _this.tx = new Laya.Text();
        _this.sroreNo = 1; //垃圾编号
        _this.position = [{ x: 211, y: 375 }, { x: 480, y: 369 }, { x: 215, y: 598 }, { x: 481, y: 595 }, { x: 215, y: 807 }, { x: 476, y: 805 }];
        _this.view = _view;
        return _this;
    }
    Garbage.prototype.getNumber = function (num1, num2) {
        return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    };
    Garbage.prototype.init = function (_level, _type, _site, X, Y, garType, garNo, scoreCallBackHd) {
        if (garType && garNo) {
            this.type = garType;
        }
        else {
            this.type = _type;
        }
        this.level = _level;
        this.scoreCallBackHd = scoreCallBackHd;
        this.site = _site;
        var a; //每种类型的垃圾分几种
        var name;
        var num;
        var garbages1 = ["报纸", "玻璃罐", "玻璃壶", "废锁头", "旧夹子", "旧帽子", "旧手提包", "旧书包", "旧塑料篮子", "旧铁锅", "旧玩具", "旧玩偶", "旧鞋子", "旧纸袋", "空瓶", "煤气罐", "牛奶盒", "泡沫", "盆子", "食品罐头", "塑料瓶", "塑料梳子", "塑料外壳", "烟盒", "雨伞骨架", "纸盒", "纸箱", "玻璃放大镜", "塑料外卖盒", "办公桌", "废旧本子"];
        var garbages2 = ["饼干", "菜叶", "草莓", "橙皮", "葱", "蛋糕", "蛋壳", "番茄酱", "甘蔗", "骨头（鸡鸭鹅）", "蚝油", "花生壳", "辣椒", "梨", "马铃薯", "面包", "苹果", "巧克力", "茄子", "树叶", "桃核", "豌豆皮", "西瓜皮", "西红柿", "西梅核", "虾壳", "香蕉皮", "蟹壳", "鱼骨", "玉米", "中药药渣", "剩菜剩饭", "枯萎的花草", "剩余液体"];
        var garbages3 = ["打火机", "电池", "电子元件", "废弃灯泡", "过期的胶囊药物", "过期化妆品", "过期药片", "酒精", "口服液瓶", "农药瓶", "漆桶", "杀虫剂", "温度计", "香水瓶", "蓄电池", "医用棉签", "医用纱布", "医用手套", "荧光棒", "荧光灯", "油漆", "注射器", "卤素灯"];
        var garbages4 = ["杯子", "贝壳", "菜板", "创口贴", "发胶", "海绵", "化妆刷", "坏的花盆（陶瓷）", "坏马桶", "旧镜子", "旧水槽", "旧浴缸", "蓝球", "木质梳子", "扫把", "湿垃圾袋", "水彩笔", "坛子", "陶瓷碗", "调色板", "瓦片", "卫生纸", "香烟", "牙膏皮", "牙刷", "烟蒂", "一次性筷子", "脏污衣服", "渣土", "砖块", "猫砂", "空杯子"];
        if (this.type == 1) {
            a = 31; //可回收垃圾31种
            name = garbages1;
        }
        else if (this.type == 2) {
            a = 34; //湿垃圾34种
            name = garbages2;
        }
        else if (this.type == 3) {
            a = 23; //有害垃圾23种
            name = garbages3;
        }
        else if (this.type == 4) {
            a = 32; //干垃圾32种
            name = garbages4;
        }
        var ss = Math.floor(Math.random() * 100) + 1;
        if (1 <= ss && ss < 50) { //50%
            if (this.type == 1) { //类型为1时，随机从前生成1分的垃圾 共12
                num = this.getNumber(1, 13);
            }
            else if (this.type == 3) {
                num = this.getNumber(1, 11);
            }
            else {
                num = this.getNumber(1, 15);
            }
        }
        else if (50 <= ss && ss < 75) { //25%
            if (this.type == 1) {
                num = this.getNumber(14, 19);
            }
            else if (this.type == 3) {
                num = this.getNumber(12, 16);
            }
            else {
                num = this.getNumber(16, 22);
            }
        }
        else if (75 <= ss && ss < 90) { //15%
            if (this.type == 1) {
                num = this.getNumber(20, 25);
            }
            else if (this.type == 3) {
                num = this.getNumber(17, 20);
            }
            else {
                num = this.getNumber(23, 27);
            }
        }
        else { //10%
            if (this.type == 1) {
                num = this.getNumber(26, 31);
            }
            else if (this.type == 3) {
                num = this.getNumber(21, 23);
            }
            else if (this.type == 2) {
                num = this.getNumber(28, 34);
            }
            else {
                num = this.getNumber(28, 32);
            }
        }
        this.sroreNo = num;
        var x = Math.floor(Math.random() * 6) + 1;
        var arrX = [24, 157, 284, 392, 496, 600];
        if (garType && garNo) {
            this.bodyurl = "war/garbages/garbage_" + this.type + "_" + garNo + ".png";
        }
        else {
            this.bodyurl = "war/garbages/garbage_" + this.type + "_" + num + ".png";
        }
        this.ape.loadImage(this.bodyurl);
        // this.ape.width = 180;
        // this.ape.height = 180;
        this.ape.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag); //绑定鼠标按下事件
        this.ape.on(Laya.Event.MOUSE_UP, this, this.onstopDrag); //绑定鼠标松开事件
        this.ape.size(this.ape.width, this.ape.height); //定义交互区域
        this.ape.pivot(this.ape.getBounds().width / 2, this.ape.getBounds().height / 2);
        // this.ape.pos(arrX[x],-90);   //生成位置随机
        if (X == null && Y == null) {
            this.currXY = [this.position[this.site - 1].x, this.position[this.site - 1].y];
            this.ape.pos(this.position[this.site - 1].x, -90);
            this.tx.pos(this.position[this.site - 1].x - 30, this.position[this.site - 1].y - 90);
            Tween.to(this.ape, { x: this.position[this.site - 1].x, y: this.position[this.site - 1].y }, 1000); //缓动到指定位置
        }
        else {
            this.currXY = [X, Y];
            this.ape.pos(X, Y);
            this.tx.pos(X, Y - 90);
        }
        this.tx.fontSize = 30;
        this.tx.color = "#552423";
        this.tx.bold = true;
        if (garType && garNo) {
            this.tx.text = name[garNo - 1];
            this.GarName = name[garNo - 1];
        }
        else {
            this.tx.text = name[num - 1];
            this.GarName = name[num - 1];
        }
        Laya.stage.addChild(this.ape);
        // Laya.timer.loop(10, this, this.apemove);
        Laya.timer.loop(500, this, this.isStop);
    };
    Garbage.prototype.isStop = function () {
        if (this.isactive && (new Date().getTime() - this.click_time) / 1000 > 2) {
            this.onstopDrag();
        }
    };
    //鼠标按下开始拖拽
    Garbage.prototype.onStartDrag = function () {
        Laya.stage.addChild(this.tx);
        SoundManager.playSound("war/click.mp3", 1); //音效播放
        // Laya.timer.clear(this,this.apemove);
        this.ape.startDrag();
        this.tx.startDrag();
        this.isactive = true;
        this.view.currnode = this.id;
        this.view.mouse_down();
        this.click_time = new Date().getTime();
    };
    //根据传入的垃圾类型和垃圾编号获取对应的分值
    Garbage.prototype.getSrore = function () {
        if (this.type == 1) {
            if (1 <= this.sroreNo && this.sroreNo <= 12) {
                return 1;
            }
            else if (13 <= this.sroreNo && this.sroreNo <= 17) {
                return 2;
            }
            else if (18 <= this.sroreNo && this.sroreNo <= 21) {
                return 3;
            }
            else {
                return 4;
            }
        }
        else {
            if (1 <= this.sroreNo && this.sroreNo <= 13) {
                return 1;
            }
            else if (14 <= this.sroreNo && this.sroreNo <= 18) {
                return 2;
            }
            else if (19 <= this.sroreNo && this.sroreNo <= 22) {
                return 3;
            }
            else {
                return 4;
            }
        }
    };
    Garbage.prototype.getTrash = function () {
        var apePivotX = this.ape.getBounds().x + this.ape.width / 2;
        var apePivotY = this.ape.getBounds().y + this.ape.height / 2;
        if ((this.view.Trash1.x <= apePivotX && this.view.Trash1.y <= apePivotY) && (this.view.Trash1.x + this.view.Trash1.width >= apePivotX && this.view.Trash1.y + this.view.Trash1.height >= apePivotY)) {
            // 垃圾在Trash1桶范围内返回1
            return 1;
        }
        else if ((this.view.Trash2.x <= apePivotX && this.view.Trash2.y <= apePivotY) && (this.view.Trash2.x + this.view.Trash2.width >= apePivotX && this.view.Trash2.y + this.view.Trash2.height >= apePivotY)) {
            // 垃圾在Trash2桶范围内返回2
            return 2;
        }
        else if ((this.view.Trash3.x <= apePivotX && this.view.Trash3.y <= apePivotY) && (this.view.Trash3.x + this.view.Trash3.width >= apePivotX && this.view.Trash3.y + this.view.Trash3.height >= apePivotY)) {
            // 垃圾在Trash3桶范围内返回3
            return 3;
        }
        else if ((this.view.Trash4.x <= apePivotX && this.view.Trash4.y <= apePivotY) && (this.view.Trash4.x + this.view.Trash4.width >= apePivotX && this.view.Trash4.y + this.view.Trash4.height >= apePivotY)) {
            // 垃圾在Trash4桶范围内返回4
            return 4;
        }
        else {
            // 垃圾不在任何桶范围内返回5
            return 5;
        }
    };
    //鼠标松开停止拖拽
    Garbage.prototype.onstopDrag = function () {
        Laya.stage.removeChild(this.tx);
        var apePivotX = this.ape.getBounds().x + this.ape.width / 2;
        var apePivotY = this.ape.getBounds().y + this.ape.height / 2;
        var TrashId;
        var srore;
        var Ttype;
        if (this.type == 1) {
            srore = this.getSrore();
        }
        else if (this.type == 2) {
            srore = this.getSrore();
        }
        else if (this.type == 3) {
            srore = this.getSrore();
        }
        else if (this.type == 4) {
            srore = this.getSrore();
        }
        Ttype = { type: this.type, Srore: srore, site: this.site, ape: this.ape, tx: this.tx, id: this.id, currXY: this.currXY, bodyurl: this.bodyurl, GarName: this.GarName };
        this.scoreCallBackHd.runWith(Ttype);
        // var Ttype:any;
        // TrashId = this.getTrash();      //获取在那个桶范围
        // console.log(TrashId);
        // //判断垃圾是否扔进了垃圾桶
        // if(TrashId == this.type){    //垃圾在正确垃圾桶范围内
        //     this.ape.removeSelf();      //垃圾消失回收
        //     this.tx.removeSelf(); 
        //     SoundManager.playSound("war/right.mp3", 1);
        //     Ttype = {type:this.type,state:1,id:this.id,Srore:srore,site:this.site,ape:this.ape};  //加分
        //     this.scoreCallBackHd.runWith(Ttype);
        // }else if(TrashId == 5){     //垃圾不在任意一个桶的范围不扣分不加分
        //     Ttype = {type:this.type,state:3,Srore:0,site:null,ape:this.ape};  
        //     this.scoreCallBackHd.runWith(Ttype);
        //     Tween.to(this.ape, { x: this.position[this.site-1].x,y: this.position[this.site-1].x}, 1000);
        // }else{                      //错误垃圾桶扣分
        //     SoundManager.playSound("war/error.mp3", 1);
        //     Ttype = {type:this.type,state:0,Srore:srore,site:this.site,ape:this.ape};  
        //     this.scoreCallBackHd.runWith(Ttype);
        //     if(TrashId == 1 && TrashId != this.type){
        //     }else if(TrashId == 2 && TrashId != this.type){
        //     }else if(TrashId == 3 && TrashId != this.type){
        //     }else if(TrashId == 4 && TrashId != this.type){
        //     }
        /*if(this.ape.y>= 800){
            // this.view.showMask(this.type,this.bodyurl);   //提示遮罩
            Tween.to(this.ape,{alpha:0}, 300/this.level,null,Laya.Handler.create(this,this.apeDelete));
            Tween.to(this.tx,{alpha:0}, 300/this.level,null,Laya.Handler.create(this,this.apeDelete));
        }else{
            Tween.to(this.ape, { x: this.ape.x,y: this.currY}, 1000);     //下落到消失位置
            Tween.to(this.tx, { x: this.tx.x,y: this.currY2}, 1000);     //下落到消失位置
            // Laya.timer.loop(50, this, this.apemove);
        }
        Laya.timer.loop(50, this, this.apemove);         //重新启动帧听器垃圾移动*/
        // }
        this.isactive = false;
    };
    Garbage.prototype.offStartDrag = function () {
    };
    //垃圾移动
    Garbage.prototype.apemove = function () {
        this.ape.y += this.level;
        this.tx.y += this.level;
        if (this.ape.y >= 800) {
            Tween.to(this.ape, { alpha: 0 }, 300 / this.level, null, Laya.Handler.create(this, this.apeDelete));
            Tween.to(this.tx, { alpha: 0 }, 300 / this.level, null, Laya.Handler.create(this, this.apeDelete));
        }
    };
    Garbage.prototype.apeDelete = function () {
        this.ape.removeSelf();
        this.tx.removeSelf();
    };
    Garbage.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    ;
    return Garbage;
}(Laya.Sprite));
//# sourceMappingURL=Garbage.js.map