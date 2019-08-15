/*
* name;
*/
class Konwledge extends ui.KonwledgeUI{
    private  pageNum : number = 1;
    constructor(){
        super();
        this.back.visible = true;
        this.title.visible=true;       
        this.showPage(this.pageNum);
        this.next.on(Laya.Event.CLICK,this,this.nextPage);
        this.pre.on(Laya.Event.CLICK,this,this.prePage);
        this.back.on(Laya.Event.CLICK,this,this.backFun);
        this.knowP1.visible = false;
        this.close.visible = false;
        this.hidePanelAll();
        this.close.on(Laya.Event.CLICK,this,this.closePanel);
        this.one1.on(Laya.Event.CLICK,this,this.show1);
        this.one2.on(Laya.Event.CLICK,this,this.show2);
        this.one3.on(Laya.Event.CLICK,this,this.show3);
        this.one4.on(Laya.Event.CLICK,this,this.show4);
        this.two1.on(Laya.Event.CLICK,this,this.show5);
        this.two2.on(Laya.Event.CLICK,this,this.show6);
        this.two3.on(Laya.Event.CLICK,this,this.show7);
        this.two4.on(Laya.Event.CLICK,this,this.show8);
        this.three1.on(Laya.Event.CLICK,this,this.show9);
        this.three2.on(Laya.Event.CLICK,this,this.show10);
        this.three3.on(Laya.Event.CLICK,this,this.show11);
        this.three4.on(Laya.Event.CLICK,this,this.show12);
        this.four1.on(Laya.Event.CLICK,this,this.show13);
        this.four2.on(Laya.Event.CLICK,this,this.show14);
        this.four3.on(Laya.Event.CLICK,this,this.show15);
        this.four4.on(Laya.Event.CLICK,this,this.show16);
        this.five1.on(Laya.Event.CLICK,this,this.show17);
        this.five2.on(Laya.Event.CLICK,this,this.show18);
        this.five3.on(Laya.Event.CLICK,this,this.show19);
        this.five4.on(Laya.Event.CLICK,this,this.show20);
        this.six1.on(Laya.Event.CLICK,this,this.show21);
        this.six2.on(Laya.Event.CLICK,this,this.show22);
        this.six3.on(Laya.Event.CLICK,this,this.show23);
        this.six4.on(Laya.Event.CLICK,this,this.show24);
        this.seven1.on(Laya.Event.CLICK,this,this.show25);
        this.seven2.on(Laya.Event.CLICK,this,this.show26);
        this.seven3.on(Laya.Event.CLICK,this,this.show27);

    }
    public showPage(page :  number):void {
        if(page == 1){
            this.hideAll();
            this.next.visible = true;            
            this.one.visible = true;
        }else if(page == 2){
            this.hideAll();
            this.next.visible = true;
            this.pre.visible = true;
            this.two.visible = true;
        }else if(page == 3){
            this.hideAll();
            this.next.visible = true;
            this.pre.visible = true;
            this.three.visible = true;
        }else if(page == 4){
            this.hideAll();
            this.next.visible = true;
            this.pre.visible = true;
            this.four.visible = true;
        }else if(page == 5){
            this.hideAll();
            this.next.visible = true;
            this.pre.visible = true;
            this.five.visible = true;
        }else if(page == 6){
            this.hideAll();
            this.six.visible = true;
            this.pre.visible = true;
            this.next.visible = true;
        }
        else if(page == 7){
            this.hideAll();
            this.seven.visible = true;
            this.pre.visible = true;
        }
    }
    public nextPage(page:number):void {
        if(this.pageNum<7){
            this.showPage(++this.pageNum);
        }
       
    }
    public prePage(page :  number):void {
         if(this.pageNum>1){
             this.showPage(--this.pageNum);       

        }
    }
     public backFun(page :  number):void {
         this.removeSelf();
         Laya.stage.addChild(new GameStart());
    }

    public hideAll():void{
            this.next.visible = false;
            this.pre.visible = false;
            this.six.visible = false;
            this.seven.visible = false;
            this.five.visible = false;
            this.four.visible = false;
            this.three.visible = false;
            this.two.visible = false;
            this.one.visible = false;
    }

    hidePanelAll():void{
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
    }
    closePanel(page:number):void{
        this.hidePanelAll();
        this.knowP1.visible = false;
        this.close.visible = false;
        this.pre.visible = true;
        this.next.visible = true;
        this.showPage(this.pageNum);
    }

    show1():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi1.visible = true;
        this.kpt1.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show2():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi2.visible = true;
        this.kpt2.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show3():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi3.visible = true;
        this.kpt3.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show4():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi4.visible = true;
        this.kpt4.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }

    show5():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi5.visible = true;
        this.kpt5.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show6():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi6.visible = true;
        this.kpt6.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show7():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi7.visible = true;
        this.kpt7.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show8():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi8.visible = true;
        this.kpt8.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show9():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi9.visible = true;
        this.kpt9.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show10():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi10.visible = true;
        this.kpt10.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show11():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi11.visible = true;
        this.kpt11.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show12():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi12.visible = true;
        this.kpt12.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show13():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi13.visible = true;
        this.kpt13.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }

    show14():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi14.visible = true;
        this.kpt14.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show15():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi15.visible = true;
        this.kpt15.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show16():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi16.visible = true;
        this.kpt16.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show17():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi17.visible = true;
        this.kpt17.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show18():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi18.visible = true;
        this.kpt18.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show19():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi19.visible = true;
        this.kpt19.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show20():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi20.visible = true;
        this.kpt20.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show21():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi21.visible = true;
        this.kpt21.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show22():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi22.visible = true;
        this.kpt22.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }

    show23():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi23.visible = true;
        this.kpt23.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show24():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi24.visible = true;
        this.kpt24.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show25():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi25.visible = true;
        this.kpt25.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show26():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi26.visible = true;
        this.kpt26.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
    show27():void{
        this.hidePanelAll();
        this.knowP1.visible = true;
        this.close.visible = true;
        this.kpi27.visible = true;
        this.kpt27.visible = true;
        this.pre.visible = false;
        this.next.visible = false;
    }
}