<template>
  <div id="index">
    <div class = "chart_main">
    <el-row>
      <el-col :span="7">
        <el-row>
          <el-col :span="24">
            <div class = "chart_title">
              <div class = "fl"><i class="fa fa-caret-left"></i></div>
              <div class = "_tit">月度经济指标</div>
              <div class = "fl"><i class="fa fa-caret-right"></i></div>
            </div>
            <div class = "fix_left">
              <div class = "chart_select"></div>
              <div id = "chart_left1" class = "charts"></div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "chart_title">
              <div class = "fl"><i class="fa fa-caret-left"></i></div>
              <div class = "_tit">月度经济指标</div>
              <div class = "fl"><i class="fa fa-caret-right"></i></div>
            </div>
            <div class = "fix_left">

            </div>
          </el-col>
          <el-col :span="24">
            <div class = "chart_title">
              <div class = "fl"><i class="fa fa-caret-left"></i></div>
              <div class = "_tit">月度经济指标</div>
              <div class = "fl"><i class="fa fa-caret-right"></i></div>
            </div>
            <div class = "fix_left">

            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="10">
        <el-row>
          <el-col :span="24">
            <div class = "fix_center" style="height:47.4vh">
              <div style="height:9.4vh">
                <el-row>
                  <el-col :span="6">
                    <p class = "ind_tit">2018年前三季度</p>
                    <div class = "ind_val ind_val1"><span></span><span></span></div>
                  </el-col>
                  <el-col :span="6">
                    <p class = "ind_tit">全省生产总值</p>
                    <div class = "ind_val ind_val2"><span>8762</span><span> 亿元</span></div>
                  </el-col>
                  <el-col :span="4">
                    <p class = "ind_tit">GDP增速</p>
                    <div class = "ind_val ind_val3"><span>6.2</span><span> %</span></div>
                  </el-col>
                  <el-col :span="4">
                    <p class = "ind_tit">总量排名</p>
                    <div class = "ind_val ind_val4"><span>19</span><span> 名</span></div>
                  </el-col>
                  <el-col :span="4">
                    <p class = "ind_tit">增速排名</p>
                    <div class = "ind_val ind_val5"><span>22</span><span> 名</span></div>
                  </el-col>
                </el-row>
              </div>
              <div id = "chart_center1" style="height:38vh">
              </div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "fix_center" style="height:40vh">

            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="7">
        <el-row>
          <el-col :span="24">
            <div class = "chart_title">
              <div class = "fl"><i class="fa fa-caret-left"></i></div>
              <div class = "_tit">月度经济指标</div>
              <div class = "fl"><i class="fa fa-caret-right"></i></div>
            </div>
            <div class = "fix_right">

            </div>
          </el-col>
          <el-col :span="24">
            <div class = "chart_title">
              <div class = "fl"><i class="fa fa-caret-left"></i></div>
              <div class = "_tit">月度经济指标</div>
              <div class = "fl"><i class="fa fa-caret-right"></i></div>
            </div>
            <div class = "fix_right">

            </div>
          </el-col>
          <el-col :span="24">
            <div class = "chart_title">
              <div class = "fl"><i class="fa fa-caret-left"></i></div>
              <div class = "_tit">月度经济指标</div>
              <div class = "fl"><i class="fa fa-caret-right"></i></div>
            </div>
            <div class = "fix_right">

            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
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

    mounted () {
      this.chart_center1();
    },
    methods: {
      chart_left1(){
        var xData = ['2016Q1','2016Q2','2016Q3','2016Q4','2017Q1','2017Q2','2017Q3','2017Q4','2018Q1','2018Q2','2018Q3','2018Q4'];
        var data1 = [3000,6000,14000,21000,5000,9000,11000,23000,6000,12000,18000,26000];
        var data2 = [3.2,2.4,5.2,6.9,3.1,4.4,6.3,8.5,9.1,6.6,4.7,8.1];

        var chart_center1 = echarts.init(document.getElementById('chart_left1'));
        var option = {
          title: {
            text: '2019年销售水量和主营业务收入对比',
            textStyle: {
              align: 'center',
              color: '#fff',
              fontSize: 20,
            },
            top: '3%',
            left: '10%',
          },
          backgroundColor: '#0f375f',
          grid: {
            top: "25%",
            bottom: "10%"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              label: {
                show: true
              }
            }
          },
          legend: {
            data: ["销售水量", "主营业务"],
            top: "15%",
            textStyle: {
              color: "#ffffff"
            }
          },
          xAxis: {
            data: [
              "当年完成水量",
              "去年同期水量",
              "滚动目标值水量",
              "全年目标值水量",
              "当年完成金额",
              "去年同期金额",
              "滚动目标金额",
              "全年目标值",

            ],
            axisLine: {
              show: true //隐藏X轴轴线
            },
            axisTick: {
              show: true //隐藏X轴刻度
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ebf8ac" //X轴文字颜色
              }
            },
            axisLine: {
              lineStyle: {
                color: '#01FCE3'
              }
            },
          },
          yAxis: [{
            type: "value",
            name: "亿元",
            nameTextStyle: {
              color: "#ebf8ac"
            },
            splitLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ebf8ac"
              }
            },
            axisLine: {
              lineStyle: {
                color: '#FFFFFF'
              }
            },
          },
            {
              type: "value",
              name: "同比",
              nameTextStyle: {
                color: "#ebf8ac"
              },
              position: "right",
              splitLine: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                  color: "#ebf8ac"
                }
              }
            },
            {
              type: "value",
              gridIndex: 0,
              min: 50,
              max: 100,
              splitNumber: 8,
              splitLine: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitArea: {
                show: true,
                areaStyle: {
                  color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
              }
            }
          ],
          series: [{
            name: "销售水量",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#058cff"
            },
            lineStyle: {
              color: "#058cff"
            },
            areaStyle:{
              color: "rgba(5,140,255, 0.2)"
            },
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
          },
            {
              name: "主营业务",
              type: "bar",
              barWidth: 15,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#00FFE3"
                  },
                    {
                      offset: 1,
                      color: "#4693EC"
                    }
                  ])
                }
              },
              data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
            }
          ]
        };
        chart_center1.setOption(option)
        window.onresize = chart_center1.resize;
      },
      chart_center1(){
        var xData = ['2016Q1','2016Q2','2016Q3','2016Q4','2017Q1','2017Q2','2017Q3','2017Q4','2018Q1','2018Q2','2018Q3','2018Q4'];
        var data1 = [3000,6000,14000,21000,5000,9000,11000,23000,6000,12000,18000,26000];
        var data2 = [3.2,2.4,5.2,6.9,3.1,4.4,6.3,8.5,9.1,6.6,4.7,8.1];

         var chart_center1 = echarts.init(document.getElementById('chart_center1'));
           var option = {
             color: ["#ed9d3c",'#4fd7fd'],
             tooltip : {
               trigger: 'axis',
               axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                 type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
               }
             },
             grid: {
               left: '3%',
               right: '4%',
               bottom: '3%',
               top:'10%',
               containLabel: true
             },
             xAxis : [
               {
                 type : 'category',
                 data : xData ,
                 axisLabel: {
                   rotate:45,//斜体字可不用
                   textStyle: {
                     fontSize: '12',
                     color:'#fff'
                   }
                 },
               }
             ],
             yAxis : [
               {
                 type : 'value',
                 minInterval:100,//设置左侧Y轴最小刻度
                 splitLine: {
                   lineStyle: {
                     type: 'dashed',
                     color: 'rgba(135,140,147,0.8)'
                   }
                 },//设置横线样式
                 axisLabel: {
                   textStyle: {
                     fontSize: '12',
                     color:'#fff'
                   }
                 },
               },
               {
                 type: "value",
                 splitLine: {
                   show: false
                 },
                 splitLine: {
                   show: false
                 },
                 axisTick: {
                   show: false
                 },
                 axisLine: {
                   show: false
                 },
                 axisLabel: {
                   textStyle: {
                     fontSize: '12',
                     color:'#fff'
                   }
                 },
               }
             ],
             series : [
               {
                 name:'系统外部',
                 type:'bar',
                 data:data1,
                 barWidth:8
               },{
                 name: "销售水量",
                 type: "line",
                 yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                 smooth: true, //平滑曲线显示
                 showAllSymbol: true, //显示所有图形。
                 symbol: "circle", //标记的图形为实心圆
                 symbolSize: 10, //标记的大小
                 itemStyle: {
                   //折线拐点标志的样式
                   color: "#058cff"
                 },
                 lineStyle: {
                   color: "#058cff"
                 },
                 areaStyle:{
                   color: "rgba(5,140,255, 0.2)"
                 },
                 data: data2
               }
             ]
           };
          chart_center1.setOption(option)
          window.onresize = chart_center1.resize;
       }
    }
  }
</script>
<style lang="scss" scoped>
  #index{
    .ind_tit{
     font-size: 16px;
      color: #fff;
      text-align: center;
      height: 5vh;
      line-height: 5vh;
    }
    .ind_val{
      font-size: 24px;
      color: #fff;
      text-align: center;
      height: 4vh;
      line-height: 4vh;
    }
    .ind_val span:nth-child(2){
      font-size: 16px;
    }
    .ind_val1 span{
      color: #0000ff;
    }
    .ind_val2 span{
      color: #0000ff;
    }
    .ind_val3 span{
      color: #F28A2E;
    }
    .ind_val4 span{
      color: #D644E2;
    }
    .ind_val5 span{
      color: #2FBD57;
    }
  }
</style>
