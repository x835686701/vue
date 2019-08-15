
class UIManager {
//ui列表
public static uiArray:Array<View> = [];
constructor(){

}
//添加ui
static pushUI(ui:View):void{
    UIManager.uiArray.push(ui);
}

static toUI(uiname:UIName):void{
        for(var i = 0 ; i < UIManager.uiArray.length ; i ++){
                UIManager.uiArray[i].removeSelf();
                UIManager.uiArray[i].destroy();
            }
        var ui:View;
        if(uiname == UIName.TopScore){
            ui = new TopScore();
            Laya.stage.addChild(ui);
        }else if(uiname == UIName.UserScoreList){
            ui = new UserScoreList();
            Laya.stage.addChild(ui);
        }else if(uiname == UIName.Home){
            ui = new GameStart();
            Laya.stage.addChild(ui);
        }
        else if(uiname == UIName.Help){
        // ui = new Login();
            Laya.stage.addChild(ui);
        }
        if(ui != undefined){
            UIManager.pushUI(ui);
        }
    }
}

const enum UIName {
Login,
TopScore,
UserScoreList,
Home,
Help

}