<template>
  <div id="index">
    <div class = "chart_main">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-row class="inv_col_first inv_col_box">
            <el-col :span="24">
              <div style="height: 20vh;">
                <div class="inv_col_tit">
                  <span>全省固定资产投资情况</span>
                </div>
                <el-row :gutter="20">
                  <el-col :span="8">
                    <div id="chart_pie_rich1" style=" height:17vh;"></div>
                  </el-col>
                  <el-col :span="8">
                    <div id="chart_pie_rich2" style=" height:17vh;"></div>
                  </el-col>
                  <el-col :span="8">
                    <div id="chart_pie_rich3" style=" height:17vh;"></div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="12">
              <div style="height: 24vh;">
                <div class="inv_col_tit">
                  <span>全省政府投资项目行业</span>
                </div>
                <div id="chart_bar_fold1" style=" height:22vh;"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div style="height: 24vh;">
                <div class="inv_col_tit">
                  <span>全省社会投资项目行业</span>
                </div>
                <div id="chart_bar_fold2" style=" height:22vh;"></div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16">
          <el-row  class="inv_col_box inv_col_first">
            <el-col :span="10">
              <!--各市县投资进度-->
              <div class="diamond_tit_bg">各市县投资进度</div>
              <div id="chart_map_hnInv" style="height:39.5vh;"></div>
            </el-col>
            <el-col :span="14">
              <el-row>
                <el-col>
                  <div style="height: 20vh;">
                    <div class="inv_col_tit">
                      <span>项目进度</span>
                    </div>
                    <div style=" height:80%;">
                      <ul class="round_list">
                        <li style="width: 20%;">
                          <div class="round_item">
                            <h3>投资总额</h3>
                            <p>655亿元</p>
                          </div>
                        </li>
                        <li style="width: 20%;">
                          <div class="round_item">
                            <h3>投资项目数</h3>
                            <p>5369个</p>
                          </div>
                        </li>
                        <li style="width: 20%;">
                          <div class="round_item">
                            <h3>新开工数</h3>
                            <p>2658个</p>
                          </div>
                        </li>
                        <li style="width: 20%;">
                          <div class="round_item">
                            <h3>续建数</h3>
                            <p>325个</p>
                          </div>
                        </li>
                        <li style="width: 20%;">
                          <div class="round_item">
                            <h3>竣工数</h3>
                            <p>895个</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </el-col>
                <el-col>
                  <div style="height: 30vh;">
                    <div class="inv_col_tit">
                      <span>项目开竣工进展</span>
                    </div>
                    <div  style=" height:80%;" id="chart_bar_rate1"></div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row >
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :span="8">
          <el-row class="inv_col_box inv_col_second">
            <el-col>
              <el-row>
                <el-col>
                  <div style="height: 20vh;">
                    <div class="inv_col_tit">
                      <span>省重点项目</span>
                    </div>
                    <div style=" height:12vh;">
                      <ul class="round_list">
                        <li style="width: 25%;">
                          <div class="round_item">
                            <h3>项目总额</h3>
                            <p>5242个</p>
                          </div>
                        </li>
                        <li style="width: 25%;">
                          <div class="round_item">
                            <h3>投资总额</h3>
                            <p>578亿元</p>
                          </div>
                        </li>
                        <li style="width: 25%;">
                          <div class="round_item">
                            <h3>年度投资计划</h3>
                            <p>27.9亿元</p>
                          </div>
                        </li>
                        <li style="width: 25%;">
                          <div class="round_item">
                            <h3>完成投资进度</h3>
                            <p>44.2%</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </el-col>
                <el-col>
                  <div style="height:12vh;">
                    <div class="inv_col_tit">
                      <span>重点项目投资进度情况</span>
                    </div>
                    <div  style=" height:10vh;" id="chart_bar_rate2"></div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16">
          <el-row class="inv_col_box inv_col_second" style="padding-top: 0;" :gutter="20">
            <el-col :span="10">
              <!--重点项目投资进度-->
              <div class = "chart_title">
                <div class = "fl"><i class="fa fa-caret-left"></i></div>
                <div class = "_tit">月度经济指标</div>
                <div class = "fl"><i class="fa fa-caret-right"></i></div>
              </div>
              <div class = "chart_box">
                <div id="chart_bar_invImp" style="height:32vh"></div>
              </div>
            </el-col>
            <el-col :span="7">
              <!--各领域重点项目投资进度-->
              <div class = "chart_title">
                <div class = "fl"><i class="fa fa-caret-left"></i></div>
                <div class = "_tit">各领域重点项目投资进度</div>
                <div class = "fl"><i class="fa fa-caret-right"></i></div>
              </div>
              <div class = "chart_box">
               <el-row>
                  <el-col :span="12">
                  <div id="chart_pie_rich4" style=" height:16vh;"></div>
                  </el-col>
                  <el-col :span="12">
                    <div id="chart_pie_rich5" style=" height:16vh;"></div>
                  </el-col>
                  <el-col :span="12">
                    <div id="chart_pie_rich6" style=" height:16vh;"></div>
                  </el-col>
                  <el-col :span="12">
                    <div id="chart_pie_rich7" style=" height:16vh;"></div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="7">
              <!--重点项目完成进度-->
              <div class = "chart_title">
                <div class = "fl"><i class="fa fa-caret-left"></i></div>
                <div class = "_tit">重点项目完成进度</div>
                <div class = "fl"><i class="fa fa-caret-right"></i></div>
              </div>
              <div class = "chart_box">
                <ul class="inv_rate_table">
                  <li class="item"><span class="value"><b>64</b>个</span><i class="icon icon-task"></i><p class="title">计划项目开工数</p></li>
                  <li class="item"><span class="value"><b>23.1</b>%</span><i class="icon icon-chart"></i><p class="title">开工率</p></li>
                  <li class="item"><span class="value"><b>89</b>个</span><i class="icon icon-buil"></i><p class="title">计划竣工数目</p></li>
                  <li class="item"><span class="value"><b>91.41</b>%</span><i class="icon icon-floor"></i><p class="title">竣工率</p></li>
                </ul>
              </div>
            </el-col>
          </el-row>
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
  import {config} from '../../static/js/config/chartConfig.js';
  import '../../static/js/map/china.js';
  import '../../static/js/map/hainan.js';
  import hainan from '../../static/js/json/hainan.json';
  export default {
    name:"index",
    components: {

    },
    data(){
      return{
        richSource1:[
          {product: '2018Q1', '新开工': 93.3, '续建': 85.8, '竣工': 93.7},
          {product: '2018Q2', '新开工': 83.1, '续建': 93.4, '竣工': 95.1},
          {product: '2018Q3', '新开工': 86.4, '续建': 85.2, '竣工': 92.5},
          {product: '2018Q4', '新开工': 92.4, '续建': 99.9, '竣工': 99.1}
        ],
        richSource2:[
          {product: '2018Q1', '竣工': 93.3, '续建': 85.8, '新开工': 93.7},
          {product: '2018Q2', '竣工': 83.1, '续建': 93.4, '新开工': 95.1},
          {product: '2018Q3', '竣工': 86.4, '续建': 85.2, '新开工': 92.5},
          {product: '2018Q4', '竣工': 92.4, '续建': 99.9, '新开工': 99.1}
        ],
        richDim1: ['product', '新开工', '续建', '竣工'],
        richDim2: ['product', '竣工', '续建', '新开工'],
        foldAxis1:['教育', '城建', '环保', '公路水路港口', '林业'],
        foldAxis2:['经贸', '公路水路港口', '城建', '教育', '环保',],
        foldAmount1:[15,15,14,10,30],
        foldAmount2:[33,10,22,14,15],
        foldSum1:[15,14,20,11,10],
        foldSum2:[22,10,30,50,14],
        invImpDate: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        invImpBar:[64,68,72,76,80,84,86,90,94,96,100,110],
        invImpLine:[64,68,72,76,80,84,86,90,94,96,100,110],
        richArr:
          [
            {
              text:'投资项目总数',
              color:'#42b1e8',
              val:8454,
              relVal:8454,
              formatter: '{c}',
            },
            {
              text:'备案类项目',
              color:'#33ce12',
              val:4521,
              relVal:4521,
              formatter: '{c}',
            },
            {
              text:'审批类项目',
              color:'#feb544',
              val:1245,
              relVal:1245,
              formatter: '{c}',
            },
            {
              text:'总部经济',
              color:'#42b1e8',
              val:99,
              relVal:100,
              formatter: '{d}%',
            },
            {
              text:'十二重点产业',
              color:'#33ce12',
              val:88,
              relVal:100,
              formatter: '{d}%',
            },
            {
              text:'“五网”基础设施',
              color:'#feb544',
              val:110,
              relVal:100,
              formatter: '{d}%',
            },
            {
              text:'社会民生',
              color:'#ff4ef6',
              val:100,
              relVal:100,
              formatter: '{d}%',
            },
          ],
      }
    },
    components: {
    },
    created () {
    },
    beforeDestroy() {

    },
    mounted () {
      this.chart_pie_rich('chart_pie_rich1', this.richArr[0].text, this.richArr[0].color, this.richArr[0].val, this.richArr[0].relVal, this.richArr[0].formatter)
      this.chart_pie_rich('chart_pie_rich2', this.richArr[1].text, this.richArr[1].color, this.richArr[1].val, this.richArr[1].relVal, this.richArr[1].formatter)
      this.chart_pie_rich('chart_pie_rich3', this.richArr[2].text, this.richArr[2].color, this.richArr[2].val, this.richArr[2].relVal, this.richArr[2].formatter)
      this.chart_pie_rich('chart_pie_rich4', this.richArr[3].text, this.richArr[3].color, this.richArr[3].val, this.richArr[3].relVal, this.richArr[3].formatter)
      this.chart_pie_rich('chart_pie_rich5', this.richArr[4].text, this.richArr[4].color, this.richArr[4].val, this.richArr[4].relVal, this.richArr[4].formatter)
      this.chart_pie_rich('chart_pie_rich6', this.richArr[5].text, this.richArr[5].color, this.richArr[5].val, this.richArr[5].relVal, this.richArr[5].formatter)
      this.chart_pie_rich('chart_pie_rich7', this.richArr[6].text, this.richArr[6].color, this.richArr[6].val, this.richArr[6].relVal, this.richArr[6].formatter)
      this.chart_bar_rate('chart_bar_rate1', this.richDim1, this.richSource1)
      this.chart_bar_rate('chart_bar_rate2', this.richDim2, this.richSource2)
      this.chart_bar_invImp('chart_bar_invImp', this.invImpDate, this.invImpBar, this.invImpLine)
      this.chart_bar_fold('chart_bar_fold1', this.foldAxis1, this.foldAmount1, this.foldSum1)
      this.chart_bar_fold('chart_bar_fold2', this.foldAxis2, this.foldAmount2, this.foldSum2)
      this.chart_map_hnInv('chart_map_hnInv')
    },
    methods: {
      //全省固定资产投资情况-各领域重点项目投资进度
      chart_pie_rich(id, text, color, val, relVal, formatter){
        var chart_pie_rich = echarts.init(document.getElementById(id));
        var option = {
          title:{
            text: text,
            backgroundColor:color,
            borderColor:'rgba(255,255,255,.3)',
            borderWidth: 1,
            borderRadius: 6,
            shadowColor:'rgba(66,177,232,.8)',
            shadowBlur:'10',
            padding: [6, 5, 4, 5],
            bottom:'10%',
            left:'center',
            textStyle: {
              color: '#fff',
              fontSize: 12,
              fontWeight:'normal',
            }
          },
          series: [
            {
              name: 'pie',
              startAngle:'270',//起始角度
              type: 'pie',
              color: color,
              radius: ['64%', '70%'],
              label: {
                normal: {
                  position: 'center'
                }
              },
              data: [{
                value: val,
                name: '占有率',
                label: {
                  normal: {
                    formatter: formatter,
                    textStyle: {
                      fontSize: 16,
                      fontWeight:'bold',
                    }
                  }
                }
              }, {
                value: relVal,
                tooltip: {
                  show: false
                },
                itemStyle: {
                  normal: {
                    color: 'rgba(255,255,255,.2)'
                  },
                  emphasis: {
                    color: 'rgba(255,255,255,.2)'
                  }
                },
                hoverAnimation: false
              }]
            },
          ]
        };
        chart_pie_rich.setOption(option);
        window.onresize = chart_pie_rich.resize;
      },
      //项目开竣工进度-重点项目投资进度
      chart_bar_rate(id, richDim,richSource){
        var chart_bar_rate = echarts.init(document.getElementById(id));
        var option = {
          legend: {
            textStyle:{
             color:'#fff',
            },
            right:'4%',
            icon: 'circle'
          },
          color:['#db5e32','#7df27f','#1ab4f4'],
          barWidth : 15,
          barGap:'50%',
          tooltip: {},
          dataset: {
            dimensions:richDim,
            source: richSource,
          },
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: "#fff",
              }},
              },
          yAxis: {
            axisLine:{
              show:false,
              lineStyle:{
                color:'#fff'
              }
            },
            min: 60,
            max: 100,
          },
          grid:{
            top:'20%',
            left: '3%',
            right: '4%',
            bottom: '5%',
            containLabel: true
          },
          series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
          ]
        };
        chart_bar_rate.setOption(option);
        window.onresize = chart_bar_rate.resize;

      },
      //重点项目投资进度bar
      chart_bar_invImp(id,date,bar,line){
        var chart_bar_invImp = echarts.init(document.getElementById(id));
        var option = {
          barWidth:'15',
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
            data: date
          },
          yAxis: {
            splitLine: {
              show:false
            },
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'#fff'
              }
            },
            min:60,
            max: 110,
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
              data:bar,
              type: 'bar',
              name: '柱状图',
              itemStyle: {
                emphasis: {
                  barBorderRadius: 15
                },
                normal: {
                  barBorderRadius: 15,
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                      offset: 0,
                      color: '#f25d2d'
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
              data: line,
              type: 'line',
              name: '折线图',
              color:'#3f6999'
            }
          ]
        };
        chart_bar_invImp.setOption(option);
        window.onresize = chart_bar_invImp.resize;

      },
      chart_bar_fold(id,axis,amount,sum){
        var chart_bar_fold = echarts.init(document.getElementById(id));
        var option = {
          angleAxis: {
            show:false,
          },
          radiusAxis: {
            type: 'category',
            data:axis,
            z: 10,
            axisLabel: {
              interval:0,
              textStyle: {
                color: '#fff',
                fontSize:'10',
              }
            }
          },
          polar: {
          },
          series: [{
            type: 'bar',
            data: amount,
            coordinateSystem: 'polar',
            color:'#61a2ff',
            name: '项目总数',
            stack: 'a'
          }, {
            type: 'bar',
            data: sum,
            coordinateSystem: 'polar',
            color:'#f82939',
            name: '项目金额',
            stack: 'a'
          },],
          legend: {
            show: true,
            data: ['项目总数', '项目金额'],
            color:'#fff',
            textStyle: {
              color: '#fff',
              fontSize:10
            }
          }
        };
        chart_bar_fold.setOption(option)
        window.onresize=chart_bar_fold.resize;
      },
      //各市县投资进度
      chart_map_hnInv(id){
        var chart_map_hnInv = echarts.init(document.getElementById(id));
        echarts.registerMap('hainan',  hainan)
        var pd = [{"name":"海口","value":[110.326837,20.031624,"海口","20.18"]}]
        var option = option = {
          tooltip: {
            trigger: 'item',
            textStyle: config().textStyle,
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
                return params.name + ' : ' + params.value;
              }else{
                return params.name + ' : ' + params.value[2];
              }
            }
          },
          legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:['pm2.5'],
            textStyle: config().textStyle,
          },
          visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
              // color: ['#3B5077', '#031525'] // 蓝黑
              // color: ['#ffc0cb', '#800080'] // 红紫
              // color: ['#3C3B3F', '#605C3C'] // 黑绿
              //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
              //color: ['#23074d', '#cc5333'] // 紫红
              // color: ['#00467F', '#A5CC82'] // 蓝绿
              // color: ['#1488CC', '#2B32B2'] // 浅蓝
              // color: ['#00467F', '#A5CC82'] // 蓝绿
              // color: ['#00467F', '#A5CC82'] // 蓝绿
              // color: ['#00467F', '#A5CC82'] // 蓝绿
              // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
          },

          geo: {
            show: true,
            map: 'hainan',
            layoutSize: "500%",
            zoom:9,
            center: [109.76112,19.2472],
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: 'transparent',
                borderColor: '#3fdaff',
                borderWidth: 2,
                shadowColor: 'rgba(63, 218, 255, 0.5)',
                shadowBlur: 30
              },
              emphasis: {
                areaColor: '#2B91B7',
              }
            }
          },
          series : [
            { //城市点位
              name: 'city',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbol: 'circle',
              symbolSize: 30,
              itemStyle: {
                normal: {
                  color: 'red'
                }
              },
              zlevel: 9,
              data: pd,
            },
            { //城市点位
              name: 'city',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'pin',
              symbolSize: 50,
              itemStyle: {
                normal: {
                  color: 'yellow'
                }
              },
              zlevel: 9,
              data: pd,
            }
          ]
        };
        chart_map_hnInv.setOption(option);
        window.onresize = chart_map_hnInv.resize;
      },


    }
  }
</script>
<style lang="scss" scoped>
  #index{ margin-top: 7vh;}
  .chart_title { left: 50%; margin-left: -5vw;}
  .chart_box {border:1px solid #23A9F3;}
  .fix_left{margin-top:0;}
  .chart_main { margin: 10px 15px; }
  .chart_main .el-row { margin:0;}
  .inv_col_first { height: 50vh;}
  .inv_col_second { height: 39vh;}
  .inv_col_box { padding: 10px; border:1px solid #14436c;}
  .inv_col_tit {
    padding:1vh 2vh;
    white-space: nowrap;
    overflow: hidden;
    height: 3vh;
    span {
     font-size:1vw;
     color: #fff;
      &:before,
      &:after {
       content:'◆';
        font-size:1.2vw;
       color:#20baff;
        margin: 0 .2em;
        vertical-align:middle;
        line-height: 1.2em;
      }
   }
  }
  .round_list {
    overflow: hidden;
    margin: 1vh 1vw;
    >li {
      float: left;
    }
    .round_item {
      width: 11vh;
      height:11vh;
      margin: 0 auto;
      border-radius:11vh;
      background: linear-gradient(#14b4fe,#8f71ed);
      border:.4vw solid rgba(255,255,255,.1);
      text-align: center;
      color: #fff;
      font-size:1vw;
      h3 { 
        margin: 3vh 0 0;
        white-space: nowrap;
        overflow: hidden;
        line-height: 3vh;
        text-shadow:0 0 5px #000;
      }
      >p {
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
  .inv_rate_table {
    padding:0 1vh;
    height: 32vh;
    line-height: 6vh;
    .item {
      &:nth-child(2n+1) b {
        color: #ff0 !important;
      }
      margin:1vh 0;
      position: relative;
      font-size:1.1vw;
      color: #fff;
      .title {
        white-space: nowrap;
        overflow: hidden;
        margin: 0 8vh 0 7vh;
      }
      .icon {
        position: absolute;
        z-index: 9;
        top:0;
        left: 0;
        width: 6vh;
        height: 6vh;
        display: inline-block;
        background-size: 70%;
      }
      .value {
        position: absolute;
        z-index: 9;
        top:0;
        right: 0;
        font-size: 1vw;
        b {
          color: #25e2ff;
          font-size:1.2vw; margin-right:5px;
        }
      }
    }
  }
  .diamond_tit_bg{
    width: 12vw;
    height:4vh;
    line-height:4vh;
    margin: 1vh auto 2vh;
    color: #fff;
    font-size:1vw;
    text-align: center;
    background: url("../../static/img/diamond_tit_bg.png") no-repeat;
    background-size: 100% 100%;
  }
  .icon-buil {background: url("../../static/img/icon_buil.svg") no-repeat center;}
  .icon-chart {background: url("../../static/img/icon_chart.svg") no-repeat center;}
  .icon-floor {background: url("../../static/img/icon_floor.svg") no-repeat center;}
  .icon-task {background: url("../../static/img/icon_task.svg") no-repeat center;}
</style>
