
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class gameUI extends View {
		public reduce:Laya.FrameClip;
		public GameBg:Laya.Image;
		public Progress:Laya.ProgressBar;
		public LabelScore:Laya.Label;
		public LabelDifficulty:Laya.Label;
		public LabelTime:Laya.Label;
		public lajibg:Laya.Image;
		public Trash1:Laya.Image;
		public Trash2:Laya.Image;
		public Trash3:Laya.Image;
		public Trash4:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":720,"text":"湿垃圾","height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"var":"GameBg","skin":"war/gamebg.png","height":1280}},{"type":"ProgressBar","props":{"y":209,"x":279,"width":371,"var":"Progress","value":0,"skin":"war/progress_time.png","height":30}},{"type":"Label","props":{"y":198,"x":65,"width":254,"var":"LabelScore","text":"得分: 0","height":48,"fontSize":40,"color":"#552423","bold":true},"compId":24},{"type":"Label","props":{"y":151,"x":472,"var":"LabelDifficulty","text":"关卡: 1","fontSize":40,"color":"#552423","bold":true}},{"type":"Label","props":{"y":144,"x":65,"var":"LabelTime","text":"倒计时: 60","fontSize":40,"color":"#552423","bold":true}},{"type":"Image","props":{"y":265,"x":57,"width":609,"var":"lajibg","skin":"war/tb2.png","height":725}},{"type":"Box","props":{"y":1045,"x":30},"child":[{"type":"Image","props":{"width":125,"var":"Trash1","skin":"war/Trash1.png","renderType":"render","height":200}},{"type":"Label","props":{"y":194,"x":1,"width":135,"text":"可回收物","height":51,"fontSize":30,"color":"#552423","bold":true}}]},{"type":"Box","props":{"y":1045,"x":192},"child":[{"type":"Image","props":{"width":160,"var":"Trash2","skin":"war/Trash2.png","height":200}},{"type":"Label","props":{"y":194,"x":39,"width":135,"text":"湿垃圾","height":51,"fontSize":30,"color":"#552423","bold":true}}]},{"type":"Box","props":{"y":1045,"x":370},"child":[{"type":"Image","props":{"width":160,"var":"Trash3","skin":"war/Trash3.png","height":200}},{"type":"Label","props":{"y":194,"x":23,"width":135,"text":"有害垃圾","height":51,"fontSize":30,"color":"#552423","bold":true}}]},{"type":"Box","props":{"y":1045,"x":545},"child":[{"type":"Image","props":{"width":160,"var":"Trash4","skin":"war/Trash4.png","height":200}},{"type":"Label","props":{"y":194,"x":35,"width":135,"text":"干垃圾","height":51,"fontSize":30,"color":"#552423","bold":true}}]}],"animations":[{"nodes":[{"target":24,"keyframes":{"y":[{"value":108,"tweenMethod":"linearNone","tween":true,"target":24,"key":"y","index":0}],"x":[{"value":42,"tweenMethod":"linearNone","tween":true,"target":24,"key":"x","index":0},{"value":44,"tweenMethod":"linearNone","tween":true,"target":24,"key":"x","index":1},{"value":42,"tweenMethod":"linearNone","tween":true,"target":24,"key":"x","index":2},{"value":44,"tweenMethod":"linearNone","tween":true,"target":24,"key":"x","index":3},{"value":42,"tweenMethod":"linearNone","tween":true,"target":24,"key":"x","index":4},{"value":44,"tweenMethod":"linearNone","tween":true,"target":24,"key":"x","index":5},{"value":42,"tweenMethod":"linearNone","tween":true,"target":24,"key":"x","index":6},{"value":43,"tweenMethod":"linearNone","tween":true,"target":24,"key":"x","index":7}]}}],"name":"reduce","id":5,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.uiView);
        }
    }
}

module ui {
    export class GameOverUI extends View {
		public GameAgain:Laya.Button;
		public kpText:Laya.TextArea;
		public kpImg:Laya.Image;
		public overLevel:Laya.Label;
		public overScore:Laya.Label;
		public wxBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"war/gamebg.png","height":1280}},{"type":"Button","props":{"y":1071,"x":490,"var":"GameAgain","stateNum":"2","skin":"war/btn_again.png"}},{"type":"Image","props":{"y":148,"x":30,"width":660,"skin":"war/tb2.png","height":897}},{"type":"TextArea","props":{"y":715,"x":106,"width":508,"var":"kpText","text":"可回收物用蓝色垃圾桶、有害垃圾用红色垃圾桶、湿垃圾用棕色垃圾桶、干垃圾使用黑色色垃圾桶","height":257,"fontSize":35,"editable":false,"disabled":true,"color":"#000000","bold":true}},{"type":"Image","props":{"y":328,"x":192,"width":336,"var":"kpImg","skin":"war/kp_1.png","height":314}},{"type":"Label","props":{"y":251,"x":235,"width":364,"var":"overLevel","text":"当前关卡: 1","height":93,"fontSize":50,"font":"Microsoft YaHei","color":"#552423","bold":true}},{"type":"Label","props":{"y":172,"x":235,"width":364,"var":"overScore","text":"您的分数: 0","height":88,"fontSize":50,"font":"Microsoft YaHei","color":"#552423","bold":true}},{"type":"Image","props":{"y":10.000000000000012,"x":479.00000000000006,"width":216,"var":"wxBtn","skin":"war/wx.png","name":"wx","height":162}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameOverUI.uiView);
        }
    }
}

module ui {
    export class GameRuleUI extends View {
		public rtitle:laya.display.Text;
		public r1:laya.display.Text;
		public r2:laya.display.Text;
		public r3:laya.display.Text;
		public r4:laya.display.Text;
		public r5:laya.display.Text;
		public r6:laya.display.Text;
		public r7:laya.display.Text;
		public r8:laya.display.Text;
		public r9:laya.display.Text;
		public gtitle:laya.display.Text;
		public g1:laya.display.Text;
		public g2:laya.display.Text;
		public g3:laya.display.Text;
		public g4:laya.display.Text;
		public g5:laya.display.Text;
		public back:Laya.Button;
		public tor:Laya.Button;
		public g6:laya.display.Text;
		public g7:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"war/gamebg.png","height":1280}},{"type":"Image","props":{"y":175,"x":77.00000000000004,"width":567,"skin":"war/phb.png","sizeGrid":"28,27,28,27","height":853}},{"type":"Text","props":{"y":253.99999999999997,"x":153.00000000000006,"width":400,"var":"rtitle","text":"奖 励 规 则","height":40,"fontSize":"40","color":"#000000","bold":true,"align":"center"}},{"type":"Text","props":{"y":339.00000000000006,"x":115.00000000000004,"width":450,"var":"r1","text":"1.活动时间：2019年6月24日至2019","height":30,"fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":390.00000000000006,"x":115.00000000000004,"width":319,"var":"r2","text":"年11月10日（共20周）","height":30,"fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":441.00000000000006,"x":115.00000000000004,"var":"r3","text":"2.活动方式：活动期间,每天可玩5次.","fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":492,"x":115.00000000000004,"var":"r4","text":"每天取最高分纳入","fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":543,"x":115.00000000000004,"var":"r5","text":"3.奖励范围:仅限内江移动电话的用户","fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":594,"x":115.00000000000004,"var":"r6","text":"4.奖励方式：每周总分排名前30的给","fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":650,"x":115.00000000000004,"var":"r7","text":"予一次性移动电话卡充值奖励,具体","fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":701,"x":115.00000000000004,"var":"r8","text":"奖励标准：1-5名，充值30元；6-15","fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":752,"x":115.00000000000004,"var":"r9","text":"名,充值 20元;16-30名，充值10元","fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":253.99999999999997,"x":153.00000000000006,"width":400,"var":"gtitle","text":"游 戏 规 则","height":40,"fontSize":"40","color":"#000000","bold":true,"align":"center"}},{"type":"Text","props":{"y":339.00000000000006,"x":115.00000000000004,"var":"g1","text":"1.游戏时间初始为60秒","fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":390.00000000000006,"x":115.00000000000004,"var":"g2","text":"2.每局游戏垃圾图标个数随机出现","fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":441.00000000000006,"x":115.00000000000004,"var":"g3","text":"3.垃圾图标拖拽正确则得分,不同类型","fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":490.00000000000006,"x":115.00000000000004,"var":"g4","text":"的垃圾图标得分各不相同","fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":541,"x":115.00000000000004,"var":"g5","text":"4.每天有5次机会，分数记最高分","fontSize":"30","color":"#000000","bold":true}},{"type":"Button","props":{"y":1067,"x":254.00000000000009,"width":191,"var":"back","stateNum":"1","skin":"war/back2.png","height":128}},{"type":"Button","props":{"y":939,"x":349,"width":263,"var":"tor","labelSize":35,"labelFont":"SimHei","labelColors":"blue","labelBold":true,"label":"查看奖励规则>>","height":30}},{"type":"Text","props":{"y":592,"x":115,"wordWrap":false,"width":507,"var":"g6","text":"5.活动期间，每个内江移动电话卡用","height":40,"fontSize":"30","color":"#000000","bold":true}},{"type":"Text","props":{"y":643,"x":115,"var":"g7","text":"户每周只能获得一次奖励","fontSize":"30","color":"#000000","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.GameRuleUI.uiView);
        }
    }
}

module ui {
    export class GameStartUI extends View {
		public zimu:Laya.FrameClip;
		public starBtn:Laya.Button;
		public konwBtn:Laya.Button;
		public helpBtn:Laya.Button;
		public xjpjh:Laya.Label;
		public rankingBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":720,"text":"内江市机关事务管理局","height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"war/gamebg.png","height":1280}},{"type":"Button","props":{"y":770,"x":260,"width":200,"var":"starBtn","stateNum":"2","skin":"war/btn_start.png","height":200}},{"type":"Button","props":{"y":960,"x":73,"width":150,"var":"konwBtn","stateNum":"2","skin":"war/btn_help.png","height":150}},{"type":"Button","props":{"y":960,"x":285,"width":150,"var":"helpBtn","stateNum":"2","skin":"war/btn_help2.png","height":150}},{"type":"Label","props":{"y":459,"x":892,"wordWrap":true,"width":598,"var":"xjpjh","text":"习近平总书记强调，实现垃圾分类，关系广大人民群众生活环境，关系节约使用资源，也是社会文明水平的一个重要体现。","overflow":"visible","leading":20,"height":229,"fontSize":40,"font":"SimSun","color":"#552423","bold":true,"align":"center"},"compId":8},{"type":"Image","props":{"y":198,"x":-75,"width":824,"skin":"war/name.png","height":106}},{"type":"Button","props":{"y":960,"x":500,"width":150,"var":"rankingBtn","stateNum":"2","skin":"war/btn_phb.png","height":150}},{"type":"Label","props":{"y":1180,"x":197,"wordWrap":true,"width":314,"text":"内江市机关事务管理局","overflow":"visible","leading":1,"height":27,"fontSize":20,"font":"SimSun","color":"#552423","bold":true,"align":"center"}},{"type":"Label","props":{"y":1180,"x":85,"wordWrap":true,"width":193,"text":"版权所有:","overflow":"visible","leading":1,"height":27,"fontSize":20,"font":"SimSun","color":"#552423","bold":true,"align":"center"}},{"type":"Label","props":{"y":1237,"x":233,"wordWrap":true,"width":178,"text":"移动内江分公司","overflow":"visible","leading":1,"height":26,"fontSize":20,"font":"SimSun","color":"#552423","bold":true,"align":"center"}},{"type":"Label","props":{"y":1237,"x":124,"wordWrap":true,"width":114,"text":"支持商家:","overflow":"visible","leading":1,"height":26,"fontSize":20,"font":"SimSun","color":"#552423","bold":true,"align":"center"}},{"type":"Label","props":{"y":1237,"x":383,"wordWrap":true,"width":224,"text":"内江五环公司","overflow":"visible","leading":1,"height":26,"fontSize":20,"font":"SimSun","color":"#552423","bold":true,"align":"center"}}],"animations":[{"nodes":[],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":8,"keyframes":{"y":[{"value":484,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":0},{"value":455,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":10}],"x":[{"value":892,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0},{"value":61,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":10}],"leading":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"leading","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":8,"key":"leading","index":10}],"height":[{"value":183,"tweenMethod":"linearNone","tween":true,"target":8,"key":"height","index":0},{"value":226,"tweenMethod":"linearNone","tween":true,"target":8,"key":"height","index":10}],"align":[{"value":"center","tweenMethod":"linearNone","tween":false,"target":8,"key":"align","index":0},{"value":"left","tweenMethod":"linearNone","tween":false,"target":8,"key":"align","index":10}]}}],"name":"zimu","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameStartUI.uiView);
        }
    }
}

module ui {
    export class KonwledgeUI extends View {
		public title:Laya.Image;
		public back:Laya.Image;
		public one:Laya.Box;
		public one1:Laya.Box;
		public bknow1:Laya.Image;
		public know1:Laya.Image;
		public btxt1:Laya.TextArea;
		public one2:Laya.Box;
		public bknow2:Laya.Image;
		public know2:Laya.Image;
		public btxt2:Laya.TextArea;
		public one3:Laya.Box;
		public bknow3:Laya.Image;
		public know3:Laya.Image;
		public btxt3:Laya.TextArea;
		public one4:Laya.Box;
		public bknow4:Laya.Image;
		public know4:Laya.Image;
		public btxt4:Laya.TextArea;
		public two:Laya.Box;
		public two1:Laya.Box;
		public bknow5:Laya.Image;
		public know5:Laya.Image;
		public btxt5:Laya.TextArea;
		public two2:Laya.Box;
		public bknow6:Laya.Image;
		public know6:Laya.Image;
		public btxt6:Laya.TextArea;
		public two3:Laya.Box;
		public bknow7:Laya.Image;
		public know7:Laya.Image;
		public btxt7:Laya.TextArea;
		public two4:Laya.Box;
		public bknow8:Laya.Image;
		public know8:Laya.Image;
		public btxt8:Laya.TextArea;
		public three:Laya.Box;
		public three1:Laya.Box;
		public bknow9:Laya.Image;
		public know9:Laya.Image;
		public btxt9:Laya.TextArea;
		public three2:Laya.Box;
		public bknow10:Laya.Image;
		public know10:Laya.Image;
		public btxt10:Laya.TextArea;
		public three3:Laya.Box;
		public bknow11:Laya.Image;
		public know11:Laya.Image;
		public btxt11:Laya.TextArea;
		public three4:Laya.Box;
		public bknow12:Laya.Image;
		public know12:Laya.Image;
		public btxt12:Laya.TextArea;
		public four:Laya.Box;
		public four1:Laya.Box;
		public bknow13:Laya.Image;
		public know13:Laya.Image;
		public btxt13:Laya.TextArea;
		public four2:Laya.Box;
		public bknow14:Laya.Image;
		public know14:Laya.Image;
		public btxt14:Laya.TextArea;
		public four3:Laya.Box;
		public bknow15:Laya.Image;
		public know15:Laya.Image;
		public btxt15:Laya.TextArea;
		public four4:Laya.Box;
		public bknow16:Laya.Image;
		public know16:Laya.Image;
		public btxt16:Laya.TextArea;
		public five:Laya.Box;
		public five1:Laya.Box;
		public bknow17:Laya.Image;
		public know17:Laya.Image;
		public btxt17:Laya.TextArea;
		public five2:Laya.Box;
		public bknow18:Laya.Image;
		public know18:Laya.Image;
		public btxt18:Laya.TextArea;
		public five3:Laya.Box;
		public bknow19:Laya.Image;
		public know19:Laya.Image;
		public btxt19:Laya.TextArea;
		public five4:Laya.Box;
		public bknow20:Laya.Image;
		public know20:Laya.Image;
		public btxt20:Laya.TextArea;
		public six:Laya.Box;
		public six1:Laya.Box;
		public bknow21:Laya.Image;
		public know21:Laya.Image;
		public btxt21:Laya.TextArea;
		public six2:Laya.Box;
		public bknow22:Laya.Image;
		public know22:Laya.Image;
		public btxt22:Laya.TextArea;
		public six3:Laya.Box;
		public bknow23:Laya.Image;
		public know23:Laya.Image;
		public btxt23:Laya.TextArea;
		public six4:Laya.Box;
		public bknow24:Laya.Image;
		public know24:Laya.Image;
		public btxt24:Laya.TextArea;
		public seven:Laya.Box;
		public seven1:Laya.Box;
		public bknow25:Laya.Image;
		public know25:Laya.Image;
		public btxt25:Laya.TextArea;
		public seven2:Laya.Box;
		public bknow26:Laya.Image;
		public know26:Laya.Image;
		public btxt26:Laya.TextArea;
		public seven3:Laya.Box;
		public bknow27:Laya.Image;
		public know27:Laya.Image;
		public btxt27:Laya.TextArea;
		public knowP1:Laya.Image;
		public kpi1:Laya.Image;
		public kpt1:laya.display.Text;
		public kpi2:Laya.Image;
		public kpt2:laya.display.Text;
		public kpi3:Laya.Image;
		public kpt3:laya.display.Text;
		public kpi4:Laya.Image;
		public kpt4:laya.display.Text;
		public kpi5:Laya.Image;
		public kpt5:laya.display.Text;
		public kpi6:Laya.Image;
		public kpt6:laya.display.Text;
		public kpi7:Laya.Image;
		public kpt7:laya.display.Text;
		public kpi8:Laya.Image;
		public kpt8:laya.display.Text;
		public kpi9:Laya.Image;
		public kpt9:laya.display.Text;
		public kpi10:Laya.Image;
		public kpt10:laya.display.Text;
		public kpi11:Laya.Image;
		public kpt11:laya.display.Text;
		public kpi12:Laya.Image;
		public kpt12:laya.display.Text;
		public kpi13:Laya.Image;
		public kpt13:laya.display.Text;
		public kpi14:Laya.Image;
		public kpt14:laya.display.Text;
		public kpi15:Laya.Image;
		public kpt15:laya.display.Text;
		public kpi16:Laya.Image;
		public kpt16:laya.display.Text;
		public kpi17:Laya.Image;
		public kpt17:laya.display.Text;
		public kpi18:Laya.Image;
		public kpt18:laya.display.Text;
		public kpi19:Laya.Image;
		public kpt19:laya.display.Text;
		public kpi20:Laya.Image;
		public kpt20:laya.display.Text;
		public kpi21:Laya.Image;
		public kpt21:laya.display.Text;
		public kpi22:Laya.Image;
		public kpt22:laya.display.Text;
		public kpi23:Laya.Image;
		public kpt23:laya.display.Text;
		public kpi24:Laya.Image;
		public kpt24:laya.display.Text;
		public kpi25:Laya.Image;
		public kpt25:laya.display.Text;
		public kpi26:Laya.Image;
		public kpt26:laya.display.Text;
		public kpt27:laya.display.Text;
		public kpi27:Laya.Image;
		public close:Laya.Image;
		public pre:Laya.Image;
		public next:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":720,"text":"  三只废餐盒就可以做一把学生用的尺子","height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"war/gamebg.png","height":1280}},{"type":"Box","props":{"y":21,"x":48},"child":[{"type":"Image","props":{"y":133,"x":238,"width":110,"var":"title","skin":"war/kp.png","rotation":-90,"height":182}},{"type":"Image","props":{"y":34,"x":8,"width":120,"var":"back","skin":"war/back2.png","height":89}},{"type":"Box","props":{"y":162,"x":-26,"width":684,"var":"one","height":952},"child":[{"type":"Box","props":{"y":2,"x":0,"var":"one1"},"child":[{"type":"Image","props":{"width":320,"var":"bknow1","skin":"war/tb2.png","height":473}},{"type":"Image","props":{"y":36,"x":10,"width":300,"visible":true,"var":"know1","skin":"war/kp_1.png","height":259}},{"type":"TextArea","props":{"y":324,"x":22,"width":281,"var":"btxt1","text":"  可回收物使用蓝色垃圾桶、有害垃圾使用红色垃圾桶、...","height":100,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":0,"x":350,"var":"one2"},"child":[{"type":"Image","props":{"width":320,"var":"bknow2","skin":"war/tb2.png","height":473}},{"type":"Image","props":{"y":30,"x":11,"width":300,"visible":true,"var":"know2","skin":"war/kp_8.png","height":267}},{"type":"TextArea","props":{"y":328,"x":19,"width":278,"var":"btxt2","text":"  废纸应保持平整，立体包装物内应清空内容物，清洁...","height":141,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":491,"x":0,"var":"one3"},"child":[{"type":"Image","props":{"width":320,"var":"bknow3","skin":"war/tb2.png","height":473}},{"type":"Image","props":{"y":25,"x":10,"width":300,"visible":true,"var":"know3","skin":"war/kp_7.png","height":264}},{"type":"TextArea","props":{"y":317,"x":23,"width":286,"var":"btxt3","text":"  废玻璃有尖锐边角的，应包裹投放","height":121,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":489,"x":350,"var":"one4"},"child":[{"type":"Image","props":{"width":320,"var":"bknow4","skin":"war/tb2.png","height":473}},{"type":"Image","props":{"y":13,"x":10,"width":300,"visible":true,"var":"know4","skin":"war/kp_10.png","height":267}},{"type":"TextArea","props":{"y":324,"x":23,"width":273,"var":"btxt4","text":"易拉罐等应踩扁压实","height":110,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]}]},{"type":"Box","props":{"y":162,"x":-26,"width":684,"var":"two","height":952},"child":[{"type":"Box","props":{"y":2,"x":0,"var":"two1"},"child":[{"type":"Image","props":{"width":320,"var":"bknow5","skin":"war/tb2.png","height":473}},{"type":"Image","props":{"y":30,"x":10,"width":300,"visible":true,"var":"know5","skin":"war/kp_2.png","height":259}},{"type":"TextArea","props":{"y":325,"x":26,"width":276,"var":"btxt5","text":"  废旧灯管等易破损的有害垃圾应连带包装或包裹后投放","height":131,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":0,"x":350,"var":"two2"},"child":[{"type":"Image","props":{"width":320,"var":"bknow6","skin":"war/tb2.png","height":473}},{"type":"Image","props":{"y":24,"x":10,"width":300,"visible":true,"var":"know6","skin":"war/kp_9.png","height":264}},{"type":"TextArea","props":{"y":317,"x":29,"width":276,"var":"btxt6","text":"  废弃药品应连带包装一并投放","height":135,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":491,"x":0,"var":"two3"},"child":[{"type":"Image","props":{"width":320,"var":"bknow7","skin":"war/tb2.png","height":473}},{"type":"Image","props":{"y":15,"x":10,"width":300,"visible":true,"var":"know7","skin":"war/kp_21.png","height":264}},{"type":"TextArea","props":{"y":309,"x":25,"width":281,"var":"btxt7","text":"  纯流质食物垃圾，如牛奶等，应直接倒入下水口","height":151,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":491,"x":350,"var":"two4"},"child":[{"type":"Image","props":{"width":320,"var":"bknow8","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":15,"x":10,"width":300,"visible":true,"var":"know8","skin":"war/kp_20.png","height":264}},{"type":"TextArea","props":{"y":304,"x":22,"width":275,"var":"btxt8","text":"  纯流质食物垃圾，如牛奶等，应直接倒入下水口","height":152,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]}]},{"type":"Box","props":{"y":162,"x":-26,"width":684,"var":"three","height":952},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"three1"},"child":[{"type":"Image","props":{"width":320,"var":"bknow9","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":24,"x":10,"width":300,"visible":true,"var":"know9","skin":"war/kp_3.png","height":264}},{"type":"TextArea","props":{"y":321,"x":26,"width":272,"var":"btxt9","text":"  盛放湿垃圾的容器，如塑料袋等，在投放时应予去除","height":141,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":0,"x":347,"var":"three2"},"child":[{"type":"Image","props":{"width":320,"var":"bknow10","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":24,"x":10,"width":300,"visible":true,"var":"know10","skin":"war/kp_4.png","height":264}},{"type":"TextArea","props":{"y":314,"x":20,"width":284,"var":"btxt10","text":"  剩菜、剩饭、骨头、菜根菜叶等食物类废物，经生物技...","height":154,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":473,"x":0,"var":"three3"},"child":[{"type":"Image","props":{"width":320,"var":"bknow11","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":24,"x":10,"width":300,"visible":true,"var":"know11","skin":"war/kp_19.png","height":264}},{"type":"TextArea","props":{"y":299,"x":26,"width":278,"var":"btxt11","text":"  1吨废塑料中能够生产出700-750公升无铅汽油...","height":156,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":474,"x":340,"var":"three4"},"child":[{"type":"Image","props":{"width":320,"var":"bknow12","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":24,"x":10,"width":300,"visible":true,"var":"know12","skin":"war/kp_5.png","height":264}},{"type":"TextArea","props":{"y":301,"x":26,"width":284,"var":"btxt12","text":"  每回收1吨塑料饮料瓶可获得0.7吨二级原料","height":160,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]}]},{"type":"Box","props":{"y":162,"x":-26,"width":684,"var":"four","height":952},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"four1"},"child":[{"type":"Image","props":{"width":320,"var":"bknow13","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":35,"x":10,"width":300,"visible":true,"var":"know13","skin":"war/kp_18.png","height":264}},{"type":"TextArea","props":{"y":328,"x":20,"width":295,"var":"btxt13","text":"  1吨废钢铁可炼好钢0.9吨，比用矿石冶炼节约成本...","height":111,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":0,"x":347,"var":"four2"},"child":[{"type":"Image","props":{"width":320,"var":"bknow14","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":45,"x":10,"width":300,"visible":true,"var":"know14","skin":"war/kp_17.png","height":264}},{"type":"TextArea","props":{"y":324,"x":21,"width":284,"var":"btxt14","text":"  三只废餐盒就可以做一把学生用的尺子","height":123,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":473,"x":0,"var":"four3"},"child":[{"type":"Image","props":{"width":320,"var":"bknow15","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":35,"x":10,"width":300,"visible":true,"var":"know15","skin":"war/kp_16.png","height":264}},{"type":"TextArea","props":{"y":324,"x":16,"width":283,"var":"btxt15","text":"  20个废餐盒可以造出一个漂亮的文具笔筒","height":118,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":474,"x":340,"var":"four4"},"child":[{"type":"Image","props":{"width":320,"var":"bknow16","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":24,"x":10,"width":300,"visible":true,"var":"know16","skin":"war/kp_15.png","height":264}},{"type":"TextArea","props":{"y":295,"x":26,"width":273,"var":"btxt16","text":"  1吨废纸可再造出800公斤好纸，可挽救17棵大树","height":161,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]}]},{"type":"Box","props":{"y":162,"x":-26,"width":684,"var":"five","height":952},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"five1"},"child":[{"type":"Image","props":{"width":320,"var":"bknow17","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":35,"x":10,"width":300,"visible":true,"var":"know17","skin":"war/kp_13.png","height":264}},{"type":"TextArea","props":{"y":321,"x":19,"width":286,"var":"btxt17","text":"  循环再造铝罐可节省95%新造铝罐所需的能源，减少...","height":143,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":0,"x":347,"var":"five2"},"child":[{"type":"Image","props":{"width":320,"var":"bknow18","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":24,"x":10,"width":300,"visible":true,"var":"know18","skin":"war/kp_14.png","height":264}},{"type":"TextArea","props":{"y":322,"x":19,"width":289,"var":"btxt18","text":"  废电池中所含的汞、镉时污染性极强的有毒重金属，但...","height":143,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":473,"x":0,"var":"five3"},"child":[{"type":"Image","props":{"width":320,"var":"bknow19","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":24,"x":10,"width":300,"visible":true,"var":"know19","skin":"war/kp_12.png","height":264}},{"type":"TextArea","props":{"y":310,"x":22,"width":287,"var":"btxt19","text":"  废玻璃回收再造，可减少了20%的空气污染和50%...","height":146,"fontSize":27,"font":"Helvetica","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":474,"x":340,"var":"five4"},"child":[{"type":"Image","props":{"width":320,"var":"bknow20","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":30,"x":10,"width":300,"visible":true,"var":"know20","skin":"war/kp_11.png","height":264}},{"type":"TextArea","props":{"y":326,"x":21,"width":274,"var":"btxt20","text":"  回收一个玻璃瓶节省的能量，可使灯泡亮4小时","height":128,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]}]},{"type":"Box","props":{"y":162,"x":-26,"width":684,"var":"six","height":952},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"six1"},"child":[{"type":"Image","props":{"width":320,"var":"bknow21","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":35,"x":10,"width":300,"visible":true,"var":"know21","skin":"war/kp_6.png","height":264}},{"type":"TextArea","props":{"y":327,"x":15,"width":288,"var":"btxt21","text":"  有害垃圾包括废电池、废日光灯管、废水银温度计、过...","height":118,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":0,"x":347,"var":"six2"},"child":[{"type":"Image","props":{"width":320,"var":"bknow22","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":35,"x":10,"width":300,"visible":true,"var":"know22","skin":"war/kp_22.png","height":264}},{"type":"TextArea","props":{"y":327,"x":15,"width":288,"var":"btxt22","text":"  塑料制品属于可回收物。如：塑料袋、塑料餐具...","height":118,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":473,"x":0,"var":"six3"},"child":[{"type":"Image","props":{"width":320,"var":"bknow23","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":35,"x":10,"width":300,"visible":true,"var":"know23","skin":"war/kp_23.png","height":264}},{"type":"TextArea","props":{"y":327,"x":15,"width":288,"var":"btxt23","text":"  湿垃圾。如：米饭、面食、过期食品、肉鱼虾(可含壳)类...","height":118,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":474,"x":340,"var":"six4"},"child":[{"type":"Image","props":{"width":320,"var":"bknow24","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":35,"x":10,"width":300,"visible":true,"var":"know24","skin":"war/kp_24.png","height":264}},{"type":"TextArea","props":{"y":327,"x":15,"width":288,"var":"btxt24","text":"  纸类制品属于可回收物。如：报纸、杂志、书籍、宣传..","height":118,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]}]},{"type":"Box","props":{"y":162,"x":-26,"width":684,"var":"seven","height":952},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"seven1"},"child":[{"type":"Image","props":{"width":320,"var":"bknow25","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":35,"x":10,"width":300,"visible":true,"var":"know25","skin":"war/kp_25.png","height":264}},{"type":"TextArea","props":{"y":327,"x":15,"width":288,"var":"btxt25","text":"  干垃圾。如：旧浴缸、盆子、坏马桶、旧水槽、贝壳...","height":118,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":0,"x":347,"var":"seven2"},"child":[{"type":"Image","props":{"width":320,"var":"bknow26","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":35,"x":10,"width":300,"visible":true,"var":"know26","skin":"war/kp_26.png","height":264}},{"type":"TextArea","props":{"y":327,"x":15,"width":288,"var":"btxt26","text":"  金属制品属于可回收物。如：易拉罐、罐头盒、衣架玩...","height":118,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]},{"type":"Box","props":{"y":471,"x":0,"width":320,"var":"seven3","height":479},"child":[{"type":"Image","props":{"width":320,"var":"bknow27","skin":"war/tb2.png","height":461}},{"type":"Image","props":{"y":35,"x":10,"width":300,"visible":true,"var":"know27","skin":"war/kp_27.png","height":264}},{"type":"TextArea","props":{"y":327,"x":15,"width":288,"var":"btxt27","text":"  玻璃制品属于可回收物。如：玻璃瓶、玻璃杯、玻璃...","height":118,"fontSize":27,"font":"SimHei","disabled":true,"color":"red","bold":true}}]}]},{"type":"Image","props":{"y":155,"x":-26,"width":684,"var":"knowP1","skin":"war/knowPanel.png","height":975}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi1","skin":"war/kp_1.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt1","text":"可回收物使用蓝色垃圾桶、有害垃圾使用红色垃圾桶、湿垃圾使用棕色垃圾桶、干垃圾使用黑色色垃圾桶","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi2","skin":"war/kp_8.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt2","text":"废纸应保持平整，立体包装物内应清空内容物，清洁后压扁投放","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi3","skin":"war/kp_7.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt3","text":"废玻璃有尖锐边角的，应包裹投放","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi4","skin":"war/kp_10.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt4","text":"易拉罐等应踩扁压实","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi5","skin":"war/kp_2.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt5","text":"废旧灯管等易破损的有害垃圾应连带包装或包裹后投放","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi6","skin":"war/kp_9.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt6","text":"废弃药品应连带包装一并投放","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi7","skin":"war/kp_21.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt7","text":"纯流质食物垃圾，如牛奶等，应直接倒入下水口","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi8","skin":"war/kp_20.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt8","text":"有包装的湿垃圾应将包装物除去后分类投放","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi9","skin":"war/kp_3.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt9","text":"盛放湿垃圾的容器，如塑料袋等，在投放时应予去除","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi10","skin":"war/kp_4.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt10","text":"剩菜、剩饭、骨头、菜根菜叶等食物类废物，经生物技术就地处理堆肥，每吨可生产0.3吨有机肥料","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi11","skin":"war/kp_19.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt11","text":"1吨废塑料中能够生产出700-750公升无铅汽油或柴油","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi12","skin":"war/kp_5.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt12","text":"每回收1吨塑料饮料瓶可获得0.7吨二级原料","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi13","skin":"war/kp_18.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt13","text":"1吨废钢铁可炼好钢0.9吨，比用矿石冶炼节约成本47%，减少空气污染75%，减少97%的水污染和固体废物","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi14","skin":"war/kp_17.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt14","text":"三只废餐盒就可以做一把学生用的尺子","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi15","skin":"war/kp_16.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt15","text":"20个废餐盒可以造出一个漂亮的文具笔筒","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi16","skin":"war/kp_15.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt16","text":"1吨废纸可再造出800公斤好纸，可挽救17棵大树","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi17","skin":"war/kp_13.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt17","text":"循环再造铝罐可节省95%新造铝罐所需的能源，减少95%的空气污染","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi18","skin":"war/kp_14.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt18","text":"废电池中所含的汞、镉时污染性极强的有毒重金属，但回收电池可提取稀有金属锌、铜和二氧化锰","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi19","skin":"war/kp_12.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt19","text":"废玻璃回收再造，可减少了20%的空气污染和50%的水污染","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi20","skin":"war/kp_11.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt20","text":"回收一个玻璃瓶节省的能量，可使灯泡亮4小时","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi21","skin":"war/kp_6.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt21","text":"有害垃圾包括废电池、废日光灯管、废水银温度计、过期药品等，这些垃圾需要特殊安全处理","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi22","skin":"war/kp_22.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt22","text":"塑料制品属于可回收物。如：塑料袋、塑料餐具、塑料瓶、塑料凳椅、塑料文具、塑料玩具、光盘磁带、牙刷、牙膏皮、泡沫塑料等","height":212,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi23","skin":"war/kp_23.png","height":546}},{"type":"Text","props":{"y":793,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt23","text":"湿垃圾。如：米饭、面食、过期食品、肉鱼虾(可含壳)类、螃蟹壳、贝壳头、蔬菜、果皮、果核、蔗渣、茶叶、茄子、苹果、蛋壳、骨头、虾壳、树叶等","height":246,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi24","skin":"war/kp_24.png","height":546}},{"type":"Text","props":{"y":796,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt24","text":"纸类制品属于可回收物。如：报纸、杂志、书籍、宣传单、信封、食品及物品等包装纸盒，购物纸袋、饮料及牛奶等纸包装，一次性纸杯、一次性纸餐具、复印纸、传真纸、纸箱","height":251,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi25","skin":"war/kp_25.png","height":546}},{"type":"Text","props":{"y":791,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt25","text":"干垃圾。如：旧浴缸、盆子、坏马桶、旧水槽、贝壳、化妆刷、坛子、海绵、花生壳、菜板、砖块、卫生纸、篮球、桃核、杯子、陶瓷碗、一次性筷子、烟蒂渣土等","height":254,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi26","skin":"war/kp_26.png","height":546}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt26","text":"金属制品属于可回收物。如：易拉罐、罐头盒、衣架玩具、餐具、用具、文具、家具等金属生活用品用具","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Text","props":{"y":823.9999999999999,"x":44.999999999999915,"wordWrap":true,"width":527,"var":"kpt27","text":"玻璃制品属于可回收物。如：玻璃瓶、玻璃杯、玻璃桌面、玻璃茶几、玻璃窗等有色、无色玻璃制品","height":197,"fontSize":40,"font":"SimSun","color":"#827143"}},{"type":"Image","props":{"y":245.9999999999999,"x":68.0000000000002,"width":492,"var":"kpi27","skin":"war/kp_27.png","height":546}},{"type":"Image","props":{"y":164,"x":558,"var":"close","skin":"war/close.png"}}]},{"type":"Image","props":{"y":1173,"x":120.99999999999993,"var":"pre","skin":"war/pre.png"}},{"type":"Image","props":{"y":1173,"x":467.9999999999999,"var":"next","skin":"war/next.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.KonwledgeUI.uiView);
        }
    }
}

module ui {
    export class TipUI extends View {
		public Tips:Laya.Box;
		public TipImg:Laya.Image;
		public TipText:Laya.Label;
		public TipYes:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"y":220,"x":62,"visible":false,"var":"Tips"},"child":[{"type":"Image","props":{"skin":"war/zz.png"}},{"type":"Image","props":{"y":134,"x":201,"width":218,"var":"TipImg","skin":"war/garbages/garbage_1_1.png","height":206}},{"type":"Label","props":{"y":430,"x":81,"wordWrap":true,"width":472,"var":"TipText","text":"label","height":372,"fontSize":35,"color":"#321c1c"}},{"type":"Image","props":{"y":673,"x":170,"width":293,"var":"TipYes","skin":"war/zhidaole.png","height":110}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TipUI.uiView);
        }
    }
}

module ui {
    export class TopScoreUI extends View {
		public myImg:Laya.Image;
		public lastWeekBtn:Laya.Button;
		public nextWeekBtn:Laya.Button;
		public scoreList:Laya.List;
		public btnTopScore:Laya.Image;
		public userRank:Laya.Label;
		public userScore:Laya.Label;
		public myMsg:Laya.Label;
		public fhImg:Laya.Image;
		public btnUserScore:Laya.Image;
		public userCount:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":720,"skin":"hb/50.png","sizeGrid":"100,100,100,100","label":"下一周","height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"war/gamebg.png","height":1280}},{"type":"Image","props":{"y":143,"x":45,"width":654,"var":"myImg","skin":"war/tb2.png","sizeGrid":"30,30,30,30","height":963}},{"type":"Button","props":{"y":1029,"x":170,"width":128,"var":"lastWeekBtn","toggle":false,"stateNum":2,"skin":"war/last.png","selected":false,"height":37}},{"type":"Button","props":{"y":1029,"x":391,"width":128,"var":"nextWeekBtn","stateNum":2,"skin":"war/nex.png","selected":false,"height":37}},{"type":"List","props":{"y":295,"x":73,"width":598,"var":"scoreList","vScrollBarSkin":"war/vscroll.png","spaceY":5,"spaceX":5,"repeatY":50,"repeatX":1,"renderType":"render","height":693},"child":[{"type":"Box","props":{"y":0,"x":0,"width":585,"renderType":"render","name":"Box","height":70},"child":[{"type":"Image","props":{"y":0,"x":0,"width":582,"visible":true,"skin":"war/listitem.png","sizeGrid":"18,25,25,22","height":70}},{"type":"Label","props":{"y":22,"x":94,"width":147,"text":"我是第一名","name":"userName","height":25,"fontSize":21,"font":"Microsoft YaHei","color":"#f16313","bold":true}},{"type":"Label","props":{"y":28,"x":339,"text":"积分：","name":"xs","fontSize":21}},{"type":"Label","props":{"y":24,"x":405,"text":6666,"name":"score","fontSize":21,"font":"Microsoft YaHei","color":"#ff0d0d"}},{"type":"Clip","props":{"y":12,"x":16,"width":50,"skin":"war/50.png","renderType":"render","name":"num","height":50,"clipX":80}}]}]},{"type":"Image","props":{"y":211,"x":101,"var":"btnTopScore","skin":"war/jfph.png"}},{"type":"Label","props":{"y":266,"x":385,"width":78,"text":"我的本周积分：","height":23,"fontSize":18}},{"type":"Label","props":{"y":268,"x":277,"width":16,"var":"userRank","text":1,"height":18,"fontSize":18,"color":"#fb0e0a"}},{"type":"Label","props":{"y":267,"x":221,"width":45,"text":"排名：","height":18,"fontSize":18}},{"type":"Label","props":{"y":267,"x":512,"var":"userScore","text":9999,"fontSize":18,"color":"#f60a06"}},{"type":"Label","props":{"y":577,"x":261,"width":150,"visible":true,"var":"myMsg","text":"内部程序异常","height":58,"fontSize":25,"font":"Microsoft YaHei"}},{"type":"Image","props":{"y":209,"x":636,"width":40,"var":"fhImg","skin":"war/close.png","height":40}},{"type":"Image","props":{"y":214,"x":351,"var":"btnUserScore","skin":"war/grxq.png"}},{"type":"Label","props":{"y":985,"x":261,"width":200,"var":"userCount","text":"已有0人参与活动","height":36,"font":"20","color":"#978ff"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TopScoreUI.uiView);
        }
    }
}

module ui {
    export class UserScoreListUI extends View {
		public myImg:Laya.Image;
		public lastWeekBtn:Laya.Button;
		public nextWeekBtn:Laya.Button;
		public scoreList:Laya.List;
		public btnUserScore:Laya.Image;
		public myMsg:Laya.Label;
		public weekDate:Laya.Label;
		public btnTopScore:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":579,"label":"下一周","height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"war/gamebg.png","height":1280}},{"type":"Image","props":{"x":36,"width":667,"var":"myImg","skin":"war/tb2.png","sizeGrid":"26,26,29,25","height":972,"centerY":-21}},{"type":"Button","props":{"y":1029,"x":117,"width":128,"var":"lastWeekBtn","toggle":false,"stateNum":2,"skin":"war/last.png","selected":false,"height":37}},{"type":"Button","props":{"y":1034,"x":423,"width":128,"visible":true,"var":"nextWeekBtn","stateNum":2,"skin":"war/nex.png","selected":false,"height":37}},{"type":"List","props":{"y":290,"x":71,"width":608,"var":"scoreList","vScrollBarSkin":"war/vscroll.png","spaceY":5,"spaceX":5,"repeatY":50,"repeatX":1,"renderType":"render","height":725},"child":[{"type":"Box","props":{"y":8,"x":40,"width":585,"renderType":"render","name":"Box","height":70},"child":[{"type":"Image","props":{"y":-2,"x":0,"width":582,"visible":true,"skin":"war/listitem.png","sizeGrid":"18,25,25,22","height":70}},{"type":"Label","props":{"y":21,"x":103,"width":147,"text":"2019-06-15 16:52","name":"dateTime","height":25,"fontSize":20,"font":"Microsoft YaHei","color":"#f16f26","bold":true}},{"type":"Label","props":{"y":21,"x":348,"text":"积分：","name":"xs","fontSize":20,"font":"Microsoft YaHei"}},{"type":"Label","props":{"y":22,"x":436,"text":6666,"name":"score","fontSize":20,"font":"Microsoft YaHei","color":"#ff0d0d"}},{"type":"Label","props":{"y":26,"x":29,"text":"时间：","fontSize":20,"font":"SimHei"}}]}]},{"type":"Image","props":{"y":190,"x":104,"var":"btnUserScore","skin":"war/grxq.png"}},{"type":"Label","props":{"y":608,"x":263,"visible":false,"var":"myMsg","text":"内部程序异常","fontSize":25,"font":"Microsoft YaHei"}},{"type":"Label","props":{"y":251,"x":222,"text":"时间：","fontSize":20,"font":"SimHei"}},{"type":"Label","props":{"y":253,"x":276,"width":209,"var":"weekDate","text":"2019-06-10到2019-06-16","height":36,"fontSize":20,"font":"SimHei"}},{"type":"Image","props":{"y":192,"x":370,"var":"btnTopScore","skin":"war/jfph.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.UserScoreListUI.uiView);
        }
    }
}
