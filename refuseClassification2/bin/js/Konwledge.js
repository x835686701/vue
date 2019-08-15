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
/*
* name;
*/
var Konwledge = /** @class */ (function (_super) {
    __extends(Konwledge, _super);
    function Konwledge() {
        var _this = _super.call(this) || this;
        _this.pageNum = 1;
        _this.back.visible = true;
        _this.title.visible = true;
        _this.showPage(_this.pageNum);
        _this.next.on(Laya.Event.CLICK, _this, _this.nextPage);
        _this.pre.on(Laya.Event.CLICK, _this, _this.prePage);
        _this.back.on(Laya.Event.CLICK, _this, _this.backFun);
        _this.knowP1.visible = false;
        _this.close.visible = false;
        _this.hidePanelAll();
        _this.close.on(Laya.Event.CLICK, _this, _this.closePanel);
        _this.one1.on(Laya.Event.CLICK, _this, _this.show1);
        _this.one2.on(Laya.Event.CLICK, _this, _this.show2);
        _this.one3.on(Laya.Event.CLICK, _this, _this.show3);
        _this.one4.on(Laya.Event.CLICK, _this, _this.show4);
        _this.two1.on(Laya.Event.CLICK, _this, _this.show5);
        _this.two2.on(Laya.Event.CLICK, _this, _this.show6);
        _this.two3.on(Laya.Event.CLICK, _this, _this.show7);
        _this.two4.on(Laya.Event.CLICK, _this, _this.show8);
        _this.three1.on(Laya.Event.CLICK, _this, _this.show9);
        _this.three2.on(Laya.Event.CLICK, _this, _this.show10);
        _this.three3.on(Laya.Event.CLICK, _this, _this.show11);
        _this.three4.on(Laya.Event.CLICK, _this, _this.show12);
        _this.four1.on(Laya.Event.CLICK, _this, _this.show13);
        _this.four2.on(Laya.Event.CLICK, _this, _this.show14);
        _this.four3.on(Laya.Event.CLICK, _this, _this.show15);
        _this.four4.on(Laya.Event.CLICK, _this, _this.show16);
        _this.five1.on(Laya.Event.CLICK, _this, _this.show17);
        _this.five2.on(Laya.Event.CLICK, _this, _this.show18);
        _this.five3.on(Laya.Event.CLICK, _this, _this.show19);
        _this.five4.on(Laya.Event.CLICK, _this, _this.show20);
        _this.six1.on(Laya.Event.CLICK, _this, _this.show21);
        _this.six2.on(Laya.Event.CLICK, _this, _this.show22);
        _this.six3.on(Laya.Event.CLICK, _this, _this.show23);
        _this.six4.on(Laya.Event.CLICK, _this, _this.show24);
        _this.seven1.on(Laya.Event.CLICK, _this, _this.show25);
        _this.seven2.on(Laya.Event.CLICK, _this, _this.show26);
        _this.seven3.on(Laya.Event.CLICK, _this, _this.show27);
        return _this;
    }
    Konwledge.prototype.showPage = function (page) {
        if (page == 1) {
            this.hideAll();
            this.next.visible = true;
            this.one.visible = true;
        }
        else if (page == 2) {
            this.hideAll();
            this.next.visible = true;
            this.pre.visible = true;
            this.two.visible = true;
        }
        else if (page == 3) {
            this.hideAll();
            this.next.visible = true;
            this.pre.visible = true;
            this.three.visible = true;
        }
        else if (page == 4) {
            this.hideAll();
            this.next.visible = true;
            this.pre.visible = true;
            this.four.visible = true;
        }
        else if (page == 5) {
            this.hideAll();
            this.next.visible = true;
            this.pre.visible = true;
            this.five.visible = true;
        }
        else if (page == 6) {
            this.hideAll();
            this.six.visible = true;
            this.pre.visible = true;
            this.next.visible = true;
        }
        else if (page == 7) {
            this.hideAll();
            this.seven.visible = true;
            this.pre.visible = true;
        }
    };
    Konwledge.prototype.nextPage = function (page) {
        if (this.pageNum < 7) {
            this.showPage(++this.pageNum);
        }
    };
    Konwledge.prototype.prePage = function (page) {
        if (this.pageNum > 1) {
            this.showPage(--this.pageNum);
        }
    };
    Konwledge.prototype.backFun = function (page) {
        this.removeSelf();
        Laya.stage.addChild(new GameStart());
    };
    Konwledge.prototype.hideAll = function () {
        this.next.visible = false;
        this.pre.visible = false;
        this.six.visible = false;
        this.seven.visible = false;
        this.five.visible = false;
        this.four.visible = false;
        this.three.visible = false;
        this.two.visible = false;
        this.one.visible = false;
    };
    Konwledge.prototype.hidePanelAll = function () {
        this.kpi1.visible = false;
        this.kpt1.visible = false;
        this.kpi2.visible = false;
        this.kpt2.visible = false;
        this.kpi3.visible = false;
        this.kpt3.visible = false;
        this.kpi4.visible = false;
        this.kpt4.visible = false;
        this.kpi5.visible = false;
        this.kpt5.visible = false;
        this.kpi6.visible = false;
        this.kpt6.visible = false;
        this.kpi7.visible = false;
        this.kpt7.visible = false;
        this.kpi8.visible = false;
        this.kpt8.visible = false;
        this.kpi9.visible = false;
        this.kpt9.visible = false;
        this.kpi10.visible = false;
        this.kpt10.visible = false;
        this.kpi11.visible = false;
        this.kpt11.visible = false;
        this.kpi12.visible = false;
        this.kpt12.visible = false;
        this.kpi13.visible = false;
        this.kpt13.visible = false;
        this.kpi14.visible = false;
        this.kpt14.visible = false;
        this.kpi15.visible = false;
        this.kpt15.visible = false;
        this.kpi16.visible = false;
        this.kpt16.visible = false;
        this.kpi17.visible = false;
        this.kpt17.visible = false;
        this.kpi18.visible = false;
        this.kpt18.visible = false;
        this.kpi19.visible = false;
        this.kpt19.visible = false;
        this.kpi20.visible = false;
        this.kpt20.visible = false;
        this.kpi21.visible = false;
        this.kpt21.visible = false;
        this.kpi22.visible = false;
        this.kpt22.visible = false;
        this.kpi23.visible = false;
        this.kpt23.visible = false;
        this.kpi24.visible = false;
        this.kpt24.visible = false;
        this.kpi25.visible = false;
        this.kpt25.visible = false;
        this.kpi26.visible = false;
        this.kpt26.visible = false;
        this.kpi27.visible = false;
        this.kpt27.visible = false;
    };
    Konwledge.prototype.closePanel = function (page) {
        this.hidePanelAll();
        this.knowP1.visible = false;
        this.close.visible = false;
        this.pre.visible = true;
        this.next.visible = true;
        this.showPage(this.pageNum);
    };
    Konwledge.prototype.show1 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi1.visible = true;
        this.kpt1.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show2 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi2.visible = true;
        this.kpt2.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show3 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi3.visible = true;
        this.kpt3.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show4 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi4.visible = true;
        this.kpt4.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show5 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi5.visible = true;
        this.kpt5.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show6 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi6.visible = true;
        this.kpt6.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show7 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi7.visible = true;
        this.kpt7.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show8 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi8.visible = true;
        this.kpt8.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show9 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi9.visible = true;
        this.kpt9.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show10 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi10.visible = true;
        this.kpt10.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show11 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi11.visible = true;
        this.kpt11.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show12 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi12.visible = true;
        this.kpt12.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show13 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi13.visible = true;
        this.kpt13.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show14 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi14.visible = true;
        this.kpt14.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show15 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi15.visible = true;
        this.kpt15.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show16 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi16.visible = true;
        this.kpt16.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show17 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi17.visible = true;
        this.kpt17.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show18 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi18.visible = true;
        this.kpt18.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show19 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi19.visible = true;
        this.kpt19.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show20 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi20.visible = true;
        this.kpt20.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show21 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi21.visible = true;
        this.kpt21.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show22 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi22.visible = true;
        this.kpt22.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show23 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi23.visible = true;
        this.kpt23.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show24 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi24.visible = true;
        this.kpt24.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show25 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi25.visible = true;
        this.kpt25.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show26 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi26.visible = true;
        this.kpt26.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    Konwledge.prototype.show27 = function () {
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi27.visible = true;
        this.kpt27.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    };
    return Konwledge;
}(ui.KonwledgeUI));
//# sourceMappingURL=Konwledge.js.map