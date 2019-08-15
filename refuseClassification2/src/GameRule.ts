class GameRule extends ui.GameRuleUI{
    constructor(){
        super();
        this.gtitle.visible = true;
        this.g1.visible = true;
        this.g2.visible = true;
        this.g3.visible = true;
        this.g4.visible = true;
        this.g5.visible = true;
        this.tor.visible = true;
        this.back.visible = true;
        this.rtitle.visible = false;
        this.r1.visible = false;
        this.r2.visible = false;
        this.r3.visible = false;
        this.r4.visible = false;
        this.r5.visible = false;
        this.r6.visible = false;
        this.r7.visible = false;
        this.r8.visible = false;
        this.r9.visible = false;
        this.tor.on(Laya.Event.CLICK,this,this.toRewards);
        this.back.on(Laya.Event.CLICK,this,this.backToIndex);
    }

    toRewards():void{
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
    }
    backToIndex():void{
        this.removeSelf();
        
        var gamestart:GameStart = new GameStart();
        Laya.stage.addChild(gamestart);
    }
}