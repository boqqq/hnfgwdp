<template>
  <div id="index">
    <div class = "chart_main">
      <el-row :gutter="30">
        <el-col :span="7">
          <div  class="live_col_first">
            <div class="live_col_tit">
              <span>人口情况</span>
            </div>
            <div class="live_pop_count">
              <el-row :gutter="20">
                <el-col :span="6"><i class="icon_group_fill icon"></i></el-col>
                <el-col :span="18">
                  <div class="live_pop_vel">
                    <h3 class="live_pop_tag">常驻人口</h3>
                    <p class="live_pop_num" style="color:#f0a90f;">4855万人</p>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6"><i class="icon_chart_fill icon"></i></el-col>
                <el-col :span="18">
                  <div class="live_pop_vel">
                    <h3 class="live_pop_tag">常驻人口城镇化率</h3>
                    <p class="live_pop_num" style="color:#e63bec;">32.5%</p>
                    <div class="bar">
                      <div class="rate" style="width: 32.5%;"></div>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6"><i class="icon_addressbook_fill icon"></i></el-col>
                <el-col :span="18">
                  <div class="live_pop_vel">
                    <h3 class="live_pop_tag">户籍人口城镇化率</h3>
                    <p class="live_pop_num" style="color:#04cbe0;">76.3%</p>
                    <div class="bar" style="border-color: #04cbe0;">
                      <div class="rate" style="width: 76.35%;background: #04cbe0"></div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div  class="live_col_first">
            <!--民生领域获得感-->
            <div class="diamond_tit_bg">民生领域获得感</div>
            <el-row :gutter="20" class="live_ring_row">
              <el-col :span="8">
                <div class="live_ring_item">
                  <h3><i class="icon"></i>环境</h3>
                  <p>92</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="live_ring_item">
                  <h3><i class="icon"></i>教育</h3>
                  <p>92</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="live_ring_item">
                  <h3><i class="icon"></i>就业</h3>
                  <p>92</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="live_ring_item">
                  <h3><i class="icon"></i>社保</h3>
                  <p>92</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="live_ring_item">
                  <h3><i class="icon"></i>收入</h3>
                  <p>92</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="live_ring_item">
                  <h3><i class="icon"></i>养老</h3>
                  <p>92</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="live_ring_item">
                  <h3><i class="icon"></i>医疗</h3>
                  <p>92</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="live_ring_item">
                  <h3><i class="icon"></i>居住</h3>
                  <p>92</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="live_ring_item">
                  <h3><i class="icon"></i>物价</h3>
                  <p>92</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="7">
          <div  class="live_col_first">
            <div>
              <div class="live_col_tit">
                <span>
                  <el-button size="mini" @click="">城镇居民收入</el-button>
                  <el-button size="mini" @click="">农村居民收入</el-button>
                </span>
              </div>
              <div id="chart_bar_inc" style="height: 20vh;"></div>
            </div>
            <div>
              <div class="live_col_tit">
                <span>CPI/PPI</span>
              </div>
              <div id="chart_line_cpi" style="height: 20vh;"></div>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="30">
        <el-col :span="7">
          <div  class="live_col_second">
            <!--就业和社会保障-->
            <div class="live_col_tit">
              <span>就业和社会保障</span>
            </div>
            <el-row :gutter="20">
              <el-col :span="8" class="live_saf_list">
                <p class="tip">2016年以来民生<br>支出占财政支出比值</p>
                <div class="vel_box">
                  <span><b>23.3</b>%</span>
                </div>
              </el-col>
              <el-col :span="8" class="live_saf_list">
                <p class="tip">2016年累计农村<br>劳动力转移就业人数</p>
                <div class="vel_box">
                  <span><b>361</b>万人</span>
                </div>
              </el-col>
              <el-col :span="8" class="live_saf_list">
                <p class="tip">2016年以来累计改造<br>棚户区和建设保障性住房</p>
                <div class="vel_box">
                  <span><b>89.1</b>万套</span>
                </div>
              </el-col>
              <el-col :span="8" class="live_saf_list">
                <p class="tip">2016年以来累计<br>新增城镇就业人数</p>
                <div class="vel_box">
                  <span><b>223</b>万人</span>
                </div>
              </el-col>
              <el-col :span="8" class="live_saf_list">
                <p class="tip">2016年以来农村<br>危房改造</p>
                <div class="vel_box">
                  <span><b>90</b>万户</span>
                </div>
              </el-col>
              <el-col :span="8" class="live_saf_list">
                <p class="tip">2017年城乡居民<br>医保参保率</p>
                <div class="vel_box">
                  <span><b>98.5</b>%</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="10">
          <div  class="live_col_second">
            <!--十件民生实事完成情况-->
            <div class="live_col_tit">
              <span>十件民生实事完成情况</span>
            </div>
            <div id="chart_bar_live" style="height: 30vh;"></div>
          </div>
        </el-col>
        <el-col :span="7">
          <div  class="live_col_second">
            <!--脱贫攻坚-->
            <div class="live_col_tit">
              <span>脱贫攻坚</span>
            </div>
            <el-row :gutter="20">
              <el-col :span="12" class="live_pole_col">
                <p class="tip">2016年以来减少建档<br />立卡贫困人口</p>
                <div class="vel_box" style="background: #1ab4f4;">603万人</div>
              </el-col>
              <el-col :span="12" class="live_pole_col">
                <p class="tip">2016年以来<br />年均减贫</p>
                <div class="vel_box" style="background: #0ca77d;">603万人</div>
              </el-col>
              <el-col :span="12" class="live_pole_col">
                <p class="tip">2016年以来<br />贫困发生率由</p>
                <div class="vel_box" style="background: #ad3398;">603万人</div>
              </el-col>
              <el-col :span="12" class="live_pole_col">
                <p class="tip">2017年全省<br />贫困人口</p>
                <div class="vel_box" style="background: #b08e35;">246万人</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  //import axios from 'axios';
  import 'font-awesome/css/font-awesome.min.css';
  //import {config,xAxiss,yAxiss,grid,tooltip,dotHtml,legend} from '../../static/js/config/chartConfig.js';
  var echarts = require('echarts');
  export default {
    name:"index",
    components: {

    },
    data(){
      return{
        liveSaf:[
          '眼疾筛查治疗',
          '听障康复救助',
          '困难老人保险',
          '重度残疾保险',
          '提高养老标准',
          '小额贷款贴息',
          '乡村教师培养',
          '教师公共厨房',
          '农贸市场改造',
          '农村饮水安全',
        ]
      }
    },
    components: {
    },
    created () {
    },
    beforeDestroy() {

    },
    mounted () {
      this.chart_bar_live(this.liveSaf,this.liveVel)
      this.chart_bar_inc()
      this.chart_line_cpi()
    },
    methods: {
      //十件民生实事完成情况
      chart_bar_live(){
        var chart_bar_live = echarts.init(document.getElementById('chart_bar_live'));
        var option = {
          grid:{
            top:'5%',
          },
          legend: {
            data:[''],
            right:'10%',
            top:'5%',
            textStyle:{
              color:'#fff',
            }
          },
          xAxis: {
            data:this.liveSaf,
            axisTick:{
              show:false,
            },
            axisLabel:{
              interval: 0,
              rotate:25,
              textStyle: {
                color:'#fff',
                fontSize:12,
              }
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color:'#fff',
                width:'1  ',                                                //坐标线的宽度

              }
            },
          },
          yAxis: {
            splitLine: {
              show: true,
              lineStyle:{
                color: '#40A1EA',                                         //网格横线颜色
                width: 1,
                type: 'solid'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize:12,//坐标值得具体的颜色
              }
            },
            axisLine: {
              show:false,
            },
          },
          series: [{
            name: '',
            type: 'bar',
            barWidth:20,
            data: [30,49,26, 60, 26, 30,49,26, 60, 26],        //数据
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#06B5D7'},                   //柱图渐变色
                    {offset: 0.5, color: '#44C0C1'},                 //柱图渐变色
                    {offset: 1, color: '#71C8B1'},                   //柱图渐变色
                  ]
                )
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#71C8B1'},                  //柱图高亮渐变色
                    {offset: 0.7, color: '#44C0C1'},                //柱图高亮渐变色
                    {offset: 1, color: '#06B5D7'}                   //柱图高亮渐变色
                  ]
                )
              }
            },
          }]
        };

        chart_bar_live.setOption(option)
        window.onresize = chart_bar_live.resize;
      },
      //居民收入情况
      chart_bar_inc(){
        var chart_bar_inc = echarts.init(document.getElementById('chart_bar_inc'));
        var option = {
          barWidth:'15',
          legend: {
            data: ['人均可支配收入', '人均可支配收入增速'],
            textStyle: {
              color: '#fff'
            },
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            axisLine:{
              lineStyle:{
                color:'#fff'
              }
            },
            textStyle:{
              color:'#fff'
            },
            data: ['2016', '2017', '2018Q1', '2018Q2', '2018Q3',]
          },
          yAxis: {
            show:false,
            splitLine: {
              show:false
            },
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'#fff'
              }
            },
            // min:1000,
            // max:10000,
          },
          grid:{
            top:'10%',
            left: '5%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          series: [
            {
              data: [11,22,33,44,80],
              type: 'bar',
              name: '人均可支配收入',
              itemStyle: {
                emphasis: {
                  barBorderRadius: 15
                },
                normal: {
                  barBorderRadius: 15,
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                      offset: 0,
                      color: '#51adfa'
                    },
                      {
                        offset: 1,
                        color: '#ba0066'
                      }
                    ])
                }
              }
            },
            {
              data: [64,68,72,76,80,84,86,90,94,96,100,110],
              type: 'line',
              name: '人均可支配收入增速',
              color:'#3f6999'
            }
          ]
        };
        chart_bar_inc.setOption(option)
        window.onresize = chart_bar_inc.resize;
      },
      //cpi/ppi
      chart_line_cpi(){
        var chart_line_cpi = echarts.init(document.getElementById('chart_line_cpi'));
        var option = {
          tooltip: {
            trigger: 'axis',
          },
          color:['#b80295','#ff1e06'],
          legend: {
            data:['CPI','PPI'],
            textStyle: {
              color: '#fff'
            },
          },
          grid: {
            top:'20%',
            left: '3%',
            right: '4%',
            bottom: '20%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            axisLine:{
              lineStyle:{
                color:'rgba(255,255,255,0.1)'
              }
            },
            boundaryGap: false,
            data: ['2017/2','2017/6','2017/10','2018/2','2018/4','2017/10'],
            axisLabel: {
              show: true,
              textStyle: {
                color:'#fff',
                fontSize:10,
              }
            },
            splitLine:{
              show:false
            },
          },
          yAxis: {
            splitLine: {
              lineStyle: {
                color: 'rgba(23,255,243,.1)'
              }
            },
            max:110,
            min:60,
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'rgba(255,255,255,0.1)'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color:'#fff',
                fontSize:10,
              }
            }
          },
          series: [
            {
              name:'CPI',
              type:'line',
              data:[66, 88, 73, 110, 90, 85, 66],
              lineStyle: {
                color: '#b80295'
              },
            },
            {
              name:'PPI',
              type:'line',
              data:[88, 110, 99, 66, 77, 60, 99],
              lineStyle: {
                color: '#ff1e06'
              },
            }
          ]
        };

        chart_line_cpi.setOption(option)
        window.onresize = chart_line_cpi.resize;
      }
    }
  }
</script>
<style lang="scss" scoped>
  #index{ margin-top: 7vh;}
  .chart_main { margin: 10px 15px;}
  .chart_main .el-row { margin:0;}
  .live_col_first { height: 50vh; margin-bottom: 10px;}
  .live_col_second { height: 36vh; margin-bottom:10px;}
  .inv_col_box { margin: 10px; border:1px solid #14436c;}
  .live_col_tit {
    .el-button {
      padding:5px 10px;
      background: none;
      border-color:#23b0e8;
      color: #fff;
    }
     padding:10px;
     white-space: nowrap;
     overflow: hidden;
     height: 1.4em;
     span {
       font-size:16px;
       color: #fff;
       &:before,
       &:after {
         content:'◆';
         font-size:20px;
         color:#20baff;
         margin: 0 .2em;
         vertical-align:middle;
         line-height: 14px;
       }
     }
   }
  .live_pop_count {
    margin: 0 1vw;
    border:1px solid #417fb0;
    height:36vh;
    border-radius:12px;
    padding:20px 10px;
    background: rgba(8,32,80 ,.5);
    box-shadow: 0 0 20px rgba(49,186,232 ,.6);
    text-align: center;
    .el-row { height: 33.3%;}
    .el-col { height: 100%;}
    .icon {
      width:80%;
      height:80%;
      display: inline-block;
    }
  }
  .live_pop_vel {
    margin-right: 10px;
    text-align: right;
    .live_pop_tag {
      color: #fff;
      font-size: 14px;
      text-align: right;
      line-height: 1.2em;
    }
    .live_pop_num {
      font-size: 24px;
      text-align: right;
      line-height: 1.2em;
      font-weight: 600;
    }
    .bar {
      float: right;
      height: 4px;
      padding: 1px;
      width: 120px;
      border-radius:5px;
      border: 1px solid #e839ec;
      .rate {
        height:4px;
        background:#e839ec;
      }
    }
  }
  .live_ring_row {
    height: 39vh;
    .el-col {
      height: 33.3%;
      margin-bottom: 1vh;
    }
  }
  .live_ring_item {
    text-align: center;
    width: 12vh;
    height: 12vh;
    margin: 0 auto;
    border: .5vh solid #81ecff;
    border-radius:100%;
    background: linear-gradient(#153adb, #1a1b30);
    color: #fff;
    overflow: hidden;
    >h3 {
      font-size: 14px;
      margin-top:20%;
    }
    >p {
      font-size: 24px;
    }
  }
  .live_saf_list {
    margin-bottom: 20px;
    .tip {
      font-size: 12px;
      color:#3e9ec4;
      margin-bottom: 10px;
      white-space: nowrap;
      overflow: hidden;
    }
    .vel_box {
      position: relative;
      height:20px;
      margin: 30px 0 0 20px;
      font-size:14px;
      color: #fff;
      border:3px solid #43b8fe;
      border-top: none;
      border-left:none;
      >span {
        position:absolute;
        top:-20px;
        left: -20px;
        text-shadow: 0 0 10px #04cbe0;
      >b{
        font-size: 28px;
        margin-right:6px;
      }
      }
    }
  }
  .live_pole_col {
    padding:10px;
    text-align: center;
    .tip {
      font-size: 12px;
      color: #fff;
      margin-bottom: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-shadow: 0 0 10px #1EFFFF;
    }
    .vel_box {
      margin: 0 20px;
      padding:5px 10px;
      font-size: 18px;
      color: #fff;
    }
  }
  .diamond_tit_bg{
    width: 12vw;
    height:4vh;
    line-height:4vh;
    margin: 1vh auto 2vh;
    color: #fff;
    font-size: 14px;
    text-align: center;
    background: url("../../static/img/diamond_tit_bg.png") no-repeat;
    background-size: 100% 100%;
  }
  .icon_chart_fill {background: url("../../static/img/icon_chart_fill.svg") no-repeat center;}
  .icon_group_fill {background: url("../../static/img/icon_group_fill.svg") no-repeat center;}
  .icon_addressbook_fill {background: url("../../static/img/icon_addressbook_fill.svg") no-repeat center;}

</style>
