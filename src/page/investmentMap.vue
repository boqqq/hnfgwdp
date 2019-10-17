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
                    <div id="chart_pie_rich" style=" height:17vh;"></div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="12">
              <div style="height: 30vh;">
                <div class="inv_col_tit">
                  <span>全省政府投资项目行业</span>
                </div>
                <div id="chart_bar_fold" style=" height:22vh;"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div style="height: 30vh;">
                <div class="inv_col_tit">
                  <span>全省社会投资项目行业</span>
                </div>
                <div id="" style=" height:80%;"></div>
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
                    <div  style=" height:80%;" id="chart_bar_rate"></div>
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
                    <div style=" height:80%;">
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
                  <div style="height: 30vh;">
                    <div class="inv_col_tit">
                      <span>重点项目投资进度情况</span>
                    </div>
                    <div  style=" height:80%;" id="">重点项目投资进度情况</div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16">
          <el-row class="inv_col_box inv_col_second">
            <el-col :span="10">
              <!--重点项目投资进度-->
              <div id="chart_bar_invImp" style="height:36vh"></div>
            </el-col>
            <el-col :span="7">
              <!--各领域重点项目投资进度-->
              <div>123</div>
            </el-col>
            <el-col :span="7">
              <!--重点项目完成进度-->
              <ul class="inv_rate_table">
                <li class="item"><span class="value"><b>64</b>个</span><i class="icon icon-task"></i><p class="title">计划项目开工数</p></li>
                <li class="item"><span class="value"><b>23.1</b>%</span><i class="icon icon-chart"></i><p class="title">开工率</p></li>
                <li class="item"><span class="value"><b>89</b>个</span><i class="icon icon-buil"></i><p class="title">计划竣工数目</p></li>
                <li class="item"><span class="value"><b>91.41</b>%</span><i class="icon icon-floor"></i><p class="title">竣工率</p></li>
              </ul>
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
  export default {
    name:"index",
    components: {

    },
    data(){
      return{

      }
    },
    components: {
    },
    created () {
    },
    beforeDestroy() {

    },
    mounted () {
      this.chart_pie_rich()
      this.chart_bar_rate()
      // this.chart_bar_inv()
      this.chart_bar_invImp()
      // this.chart_map_hnInv()
      this.chart_bar_fold()
    },
    methods: {
      //全省固定资产投资情况-各领域重点项目投资进度
      chart_pie_rich(){
        var chart_pie_rich = echarts.init(document.getElementById('chart_pie_rich'));
        var option = {
          title:{
            text: '投资项目总数',
            backgroundColor:'#42b1e8',
            borderColor:'rgba(255,255,255,.3)',
            borderWidth: 1,
            borderRadius: 6,
            shadowColor:'rgba(66,177,232,.8)',
            shadowBlur:'10',
            padding: [6, 10, 4, 10],
            bottom:'10%',
            left:'center',
            textStyle: {
              color: '#fff',
              fontSize: 12,
              fontWeight:'normal',
            }
          },
          series: [{
            name: 'pie',
            startAngle:'270',
            type: 'pie',
            color:'#42b1e8',
            radius: ['64%', '70%'],
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [{
              value: 100,
              name: '占有率',
              label: {
                normal: {
                  formatter: '{d}',
                  textStyle: {
                    fontSize: 16,
                    fontWeight:'bold',
                  }
                }
              }
            }, {
              value: 100,
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
          }]
        };
        chart_pie_rich.setOption(option);
        window.onresize = chart_pie_rich.resize;
      },
      //项目开竣工进度-重点项目投资进度
      chart_bar_rate(){
        var chart_bar_rate = echarts.init(document.getElementById('chart_bar_rate'));
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
            dimensions: ['product', '新开工', '续建', '竣工'],
            source: [
              {product: '2018Q1', '新开工': 93.3, '续建': 85.8, '竣工': 93.7},
              {product: '2018Q2', '新开工': 83.1, '续建': 93.4, '竣工': 95.1},
              {product: '2018Q3', '新开工': 86.4, '续建': 85.2, '竣工': 92.5},
              {product: '2018Q4', '新开工': 92.4, '续建': 99.9, '竣工': 99.1}
            ]
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
      chart_bar_invImp(){
        var chart_bar_invImp = echarts.init(document.getElementById('chart_bar_invImp'));
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
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
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
              data: [64,68,72,76,80,84,86,90,94,96,100,110],
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
              data: [64,68,72,76,80,84,86,90,94,96,100,110],
              type: 'line',
              name: '折线图',
              color:'#3f6999'
            }
          ]
        };
        chart_bar_invImp.setOption(option);
        window.onresize = chart_bar_invImp.resize;

      },
      chart_bar_fold(){
        var chart_bar_fold = echarts.init(document.getElementById('chart_bar_fold'));
        var option = {
          angleAxis: {
            show:false,
          },
          radiusAxis: {
            type: 'category',
            data: ['教育', '城建', '环保', '公路水路港口', '林业'],
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
            data: [55,10,10,10,10],
            coordinateSystem: 'polar',
            color:'#61a2ff',
            name: '项目总数',
            stack: 'a'
          }, {
            type: 'bar',
            data: [30,55,30,10,10],
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
      // chart_map_hnInv(){
      //   var chart_map_hnInv = echarts.init(document.getElementById('chart_map_hnInv'));
      //
      //   chart_map_hnInv.setOption(option);
      //   window.onresize = chart_map_hnInv.resize;
      // },


    }
  }
</script>
<style lang="scss" scoped>
  #index{ margin-top: 7vh;}
  .chart_main { margin: 10px 15px; }
  .chart_main .el-row { margin:0;}
  .inv_col_first { height: 50vh;}
  .inv_col_second { height: 36vh;}
  .inv_col_box { padding: 10px; border:1px solid #14436c;}
  .inv_col_tit {
    padding:1vh 2vh;
    white-space: nowrap;
    overflow: hidden;
    height: 4vh;
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
