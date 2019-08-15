var UIManager = /** @class */ (function () {
    function UIManager() {
    }
    //添加ui
    UIManager.pushUI = function (ui) {
        UIManager.uiArray.push(ui);
    };
    UIManager.toUI = function (uiname) {
        for (var i = 0; i < UIManager.uiArray.length; i++) {
            UIManager.uiArray[i].removeSelf();
            UIManager.uiArray[i].destroy();
        }
        var ui;
        if (uiname == 1 /* TopScore */) {
            ui = new TopScore();
            Laya.stage.addChild(ui);
        }
        else if (uiname == 2 /* UserScoreList */) {
            ui = new UserScoreList();
            Laya.stage.addChild(ui);
        }
        else if (uiname == 3 /* Home */) {
            ui = new GameStart();
            Laya.stage.addChild(ui);
        }
        else if (uiname == 4 /* Help */) {
            // ui = new Login();
            Laya.stage.addChild(ui);
        }
        if (ui != undefined) {
            UIManager.pushUI(ui);
        }
    };
    //ui列表
    UIManager.uiArray = [];
    return UIManager;
}());
//# sourceMappingURL=UIManager.js.map