var vue = new Vue({
    el:'#app',
    data:{
        title:'',
        herolistshow:false,
        equipmentlistshow:false,
        heroFormVisible:false,
        heroform: {
            heroimg:'',
            name: '',
            occupation:'法师',
            race:'恶魔',
            price:'1金币',
            skill:'',
            skillimg:'',
            skilldescribe:''
        },
        formLabelWidth: '120px',
        heroTableData: [],
        equipmentTableData:[]
    },
    methods:{
        //打开list页面
        showlist:function (name) {
            if (name == "hero"){
                this.herolistshow = true;
            } else if (name == "equipment"){
                this.equipmentlistshow = true;
            }
        },
        //关闭list页面
        closelist:function (name) {
            if (name == "hero"){
                this.herolistshow = false;
            } else if (name == "equipment"){
                this.equipmentlistshow = false;
            }
        },
        //打开英雄新增页面
        addHero:function () {
            this.title = "英雄新增";
            this.heroFormVisible = true;
        },
        //关闭英雄新增页面
        heroClose:function(){
            this.heroFormVisible = false;
            if(this.title == "英雄新增"){
                this.$http.post('/heroController/deletImg',{heroUrl:this.heroform.heroimg,skillUrl:this.heroform.skillimg},{emulateJSON:true});
            }
            this.heroform = {
                    heroimg:'',
                    name: '',
                    occupation:'法师',
                    race:'恶魔',
                    price:'1金币',
                    skill:'',
                    skillimg:'',
                    skilldescribe:''
            }
        },

        //图片上传成功方法英雄图标
        handleAvatarSuccess:function(res, file) {
            this.heroform.heroimg = "/"+res;
        },
        //图片上传成功方法技能图标
        handleAvatarSuccess2:function(res, file) {
            this.heroform.skillimg = "/"+res;
        },

        //英雄表单提交
        heroSubmit:function(){
            this.heroFormVisible = false;
            this.$http.post('/heroController/addHero',this.heroform,{emulateJSON:true}).then(function(res){
                this.$message.success(res.bodyText);
            },function(res){
                this.$message.error(res.bodyText);
                //失败
            });
        }
    }
})