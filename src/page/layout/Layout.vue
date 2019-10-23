<template>
    <div id="layout">
        <div class="charts">
            <div class="titleBoxs">
            </div>
            <div class="titleBox">
              <div @click = "isCollapse =  isCollapse == true?false:true" class = "icon_menu">
                <i class="el-icon-menu"></i>
              </div>
              <div v-if="isCollapse" class = "item_index" @mouseleave = "isCollapse = false">
                <ul class = "index_ul">
                  <li  v-for="(item, index) in nav" @click="routerLink(index, item.path)" :class="navIndex === index ? 'selfont' : 'norfont'"  :key="index">
                    <a>{{item.title}}</a>
                  </li>
                </ul>
              </div>

              <div class="titleCountent">
                  <h4>宏观经济数据可视化展现子系统</h4>
              </div>
              <div class = "index_title">
                <h4>{{title}}</h4>
              </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
export default {
    data(){
        return{
            nav: [
                {title: '宏观经济运行', path: '/index'},//闫博
                {title: '产业地图', path: '/industryMap'},//才峰
                {title: '投资地图', path: '/investmentMap'},//泽潘
                {title: '消费地图',path:'/consumptionMap'},//泽潘
                {title: '开放发展', path: '/development'},//闫博
                {title: '创新创业', path: '/innovate'},//闫博
                {title: '人才地图', path: '/personnelMap'},//春宇
                {title: '生态环境', path: '/environment'},//才峰
                {title: '民生地图', path: '/livelihood'}//苗泫钦
            ],
            navIndex:0,
            title:'宏观经济运行',
            isCollapse:false
        }
    },
    methods: {
      routerLink(index, path) {
        this.navIndex = index;
        this.$router.push(path)
        this.title = this.nav[index].title
        //this.threeGo()
      },
      currentPage(){
        var s = 0
        for (let i = 0; i < this.nav.length; i++) {
          if(this.nav[i].path == this.$route.path){
            this.navIndex  =  i;
            this.title = this.nav[i].title
          }
        }
        //return s;
      },
      checkRouterLocal(path) {
        // 查找当前路由下标高亮
        this.navIndex = this.nav.findIndex(item => item.path === path);
        console.log(path,"path")
      },


    },
    watch: {
        // "$route"() {
        //     let path = this.$route.path;
        //   alert(path)
        //     // 检索当前路径
        //     this.checkRouterLocal(path);
        // }
    },
    mounted () {
      this.currentPage()
    },
}
</script>

<style lang="scss" scoped>
  .charts{
    overflow:auto;
    width: 100%;
    .selfont{
      background-color: #128eee;
    }
    .norfont{}
    .icon_menu{
      height: 30px;
      width: 30px;
      display: flex;
      position: fixed;
      top: 2.5%;
      color: #fff;
      font-size: 25px;
      margin-left: 10px;
    }
    .index_title{
      display: flex;
      position: fixed;
      width: 100%;
      z-index: -1;
      h4{
        width: 100%;
        font-size: 3.3vh;
        color: #fff;
        text-align: center;
      }
    }
    .item_index{
      height: 93%;
      width: 12vw;
      display: flex;
      position: fixed;
      top: 7%;
      background-color: rgba(2,16,42,0.8);
      ul{
        width: 100%;
        margin-top: 10px;
      }
      ul li{
        height: 7vh;
      }
      ul li a{
        line-height: 7vh;
        text-align: left;
        margin-left: 3vw;
        font-size: 0.6vw;
        color: #fff;
        font-weight: bold;
        font-family: 'ºÚÌå',Verdana, Arial, Helvetica, AppleGothic, sans-serif;
      }
    }
    .titleBoxs {
      width: 100%;
      height: 30vh;
      position: fixed;
      top: 0;
      z-index: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-image:url('../../../static/img/top_center_bg.png');
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .titleBox{
      width: 100%;
      height: 7vh;
      position: fixed;
      top: 0;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-image:url('../../../static/img/top_line_bg1.png');
      background-repeat: no-repeat;
      background-size: 100% 200%;

      .titleCountent{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h4{
          font-size:2.4vh;
          color: #76CEFB;
          margin-left: 50px;
          font-weight: bolder;
          background-image: -webkit-linear-gradient(left, #74cdfb , #bcface );
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
      }
    }
  }

</style>
<style lang="scss">
  .el-switch__label{-webkit-transition:.2s;transition:.2s;font-size:2.3vh;font-weight:500;vertical-align:middle;color:#AFB8D2}
  .el-switch__label *{line-height: 0; font-size:2.3vh!important;display:inline-block}
  .el-switch__input{position:absolute;width:0;height:0;opacity:0;margin:0}
  .el-switch__core{margin:0;position:relative;width:7vh!important;height:3vh!important;border:1px solid #DCDFE6;outline:0;border-radius:3vh!important;-webkit-box-sizing:border-box;box-sizing:border-box;background:#DCDFE6;-webkit-transition:border-color .3s,background-color .3s;transition:border-color .3s,background-color .3s;vertical-align:middle}
  .el-switch__core:after{content:"";position:absolute;top:0.1vh!important;left:0.1vh!important;border-radius:100%;-webkit-transition:all .3s;transition:all .3s;width:2.6vh!important;height:2.6vh!important;background-color:#FFF}
  .el-switch.is-checked .el-switch__core::after{left:100%;margin-left:4vh!important;}
</style>
