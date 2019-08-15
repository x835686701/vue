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
 * 垃圾集合
 */
var Garbage2 = /** @class */ (function (_super) {
    __extends(Garbage2, _super);
    function Garbage2(_view) {
        var _this = _super.call(this) || this;
        _this.ape = new Laya.Sprite;
        _this.id = _this.generateUUID();
        _this.tx = new Laya.Text();
        _this.position = [{ x: 211, y: 375 }, { x: 480, y: 369 }, { x: 215, y: 598 }, { x: 481, y: 595 }, { x: 215, y: 807 }, { x: 476, y: 805 }];
        _this.view = _view;
        return _this;
    }
    Garbage2.prototype.init = function (_level, _type, _site, X, Y, scoreCallBackHd) {
        this.type = _type;
        this.level = _level;
        this.scoreCallBackHd = scoreCallBackHd;
        this.site = _site;
        var garbagesname = ["一大坨垃圾", "过期的香烟", "过期的蚝油", "坏掉的电话", "包裹", "外卖盒饭", "未喝完的奶茶"];
        this.sroreNo = Math.floor(Math.random() * 7) + 1; //生成组合垃圾数量随机数
        this.bodyurl = "war/garbages/garbage_" + this.type + "_" + this.sroreNo + ".png";
        this.ape.loadImage(this.bodyurl);
        this.ape.pos(this.position[this.site - 1].x, -90);
        this.ape.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag); //绑定鼠标按下事件
        this.ape.on(Laya.Event.MOUSE_UP, this, this.onstopDrag); //绑定鼠标松开事件
        this.ape.on(Laya.Event.DOUBLE_CLICK, this, this.ondoubleClick);
        this.ape.size(this.ape.width, this.ape.height); //定义交互区域
        this.ape.pivot(this.ape.getBounds().width / 2, this.ape.getBounds().height / 2);
        this.tx.fontSize = 30;
        this.tx.color = "#552423";
        this.tx.bold = true;
        this.tx.text = garbagesname[this.sroreNo - 1];
        this.GarName = garbagesname[this.sroreNo - 1];
        this.tx.pos(this.position[this.site - 1].x - 30, this.position[this.site - 1].y - 90);
        Laya.stage.addChild(this.ape);
        this.currXY = [this.position[this.site - 1].x, this.position[this.site - 1].y];
        Tween.to(this.ape, { x: this.position[this.site - 1].x, y: this.position[this.site - 1].y }, 1000); //缓动到指定位置
        Laya.timer.loop(500, this, this.isStop);
    };
    Garbage2.prototype.isStop = function () {
        if (this.isactive && (new Date().getTime() - this.click_time) / 1000 > 2) {
            this.onstopDrag();
        }
    };
    //双击
    Garbage2.prototype.ondoubleClick = function () {
        this.apeDelete();
        this.view.GarSplit(this.ape, this.id, this.sroreNo);
    };
    //鼠标按下
    Garbage2.prototype.onStartDrag = function () {
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
    //鼠标弹起
    Garbage2.prototype.onstopDrag = function () {
        Laya.stage.removeChild(this.tx);
        var Ttype = { type: this.type, Srore: 0, site: this.site, ape: this.ape, tx: this.tx, id: this.id, currXY: this.currXY, bodyurl: this.bodyurl, GarName: this.GarName };
        this.scoreCallBackHd.runWith(Ttype);
        this.isactive = false;
    };
    Garbage2.prototype.apeDelete = function () {
        this.ape.removeSelf();
        this.tx.removeSelf();
    };
    Garbage2.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    ;
    return Garbage2;
}(Laya.Sprite));
//# sourceMappingURL=Garbage2.js.map