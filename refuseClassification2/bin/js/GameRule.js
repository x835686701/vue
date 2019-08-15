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
var GameRule = /** @class */ (function (_super) {
    __extends(GameRule, _super);
    function GameRule() {
        var _this = _super.call(this) || this;
        _this.gtitle.visible = true;
        _this.g1.visible = true;
        _this.g2.visible = true;
        _this.g3.visible = true;
        _this.g4.visible = true;
        _this.g5.visible = true;
        _this.tor.visible = true;
        _this.back.visible = true;
        _this.rtitle.visible = false;
        _this.r1.visible = false;
        _this.r2.visible = false;
        _this.r3.visible = false;
        _this.r4.visible = false;
        _this.r5.visible = false;
        _this.r6.visible = false;
        _this.r7.visible = false;
        _this.r8.visible = false;
        _this.r9.visible = false;
        _this.tor.on(Laya.Event.CLICK, _this, _this.toRewards);
        _this.back.on(Laya.Event.CLICK, _this, _this.backToIndex);
        return _this;
    }
    GameRule.prototype.toRewards = function () {
        this.gtitle.visible = false;
        this.g1.visible = false;
        this.g2.visible = false;
        this.g3.visible = false;
        this.g4.visible = false;
        this.g5.visible = false;
        this.g6.visible = false;
        this.g7.visible = false;
        this.tor.visible = false;
        this.back.visible = true;
        this.rtitle.visible = true;
        this.r1.visible = true;
        this.r2.visible = true;
        this.r3.visible = true;
        this.r4.visible = true;
        this.r5.visible = true;
        this.r6.visible = true;
        this.r7.visible = true;
        this.r8.visible = true;
        this.r9.visible = true;
    };
    GameRule.prototype.backToIndex = function () {
        this.removeSelf();
        var gamestart = new GameStart();
        Laya.stage.addChild(gamestart);
    };
    return GameRule;
}(ui.GameRuleUI));
//# sourceMappingURL=GameRule.js.map