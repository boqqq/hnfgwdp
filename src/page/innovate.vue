<template>
  <div id="index">
    <div class = "chart_main">
      <el-row>
        <el-col :span="8">
          <div class = "fix_left h9">
            <div>
              <div class = "h1 _tit2"><h4>2018年1月-10月海南专利公开授权量在全国排名</h4></div>
                <el-row>
                  <el-col :span="10">
                    <div class = "inn_topN h3_5">
                      <!--<span>&nbsp;3&nbsp;</span>-->
                      <span><div>3</div></span>
                      <span><div>0</div></span>
                      <span>名</span>
                      <span><i class="fa fa-long-arrow-up"></i></span>
                      <span>1名</span>
                    </div>
                  </el-col>
                  <el-col :span="7">
                    <div class = "cou_max h3_5">
                      <p>全国最高值</p>
                      <p>25172</p>
                    </div>
                  </el-col>
                  <el-col :span="7">
                    <div class = "hn_max h3_5">
                      <p>海南当前值</p>
                      <p>174</p>
                    </div>
                  </el-col>
                </el-row>
            </div>
            <div>
              <div class = "h1 _tit2"><h4>2018年1月-10月海南发明专利占各类专利授权量比重排名</h4></div>
              <el-row>
                <el-col :span="10">
                  <div class = "inn_topN h3_5">
                    <!--<span>&nbsp;3&nbsp;</span>-->
                    <span><div>2</div></span>
                    <span><div>6</div></span>
                    <span>名</span>
                    <span><i class="fa fa-long-arrow-up"></i></span>
                    <span>1名</span>
                  </div>
                </el-col>
                <el-col :span="7">
                  <div class = "cou_max h3_5">
                    <p>全国最高占比</p>
                    <p>81.5%</p>
                  </div>
                </el-col>
                <el-col :span="7">
                  <div class = "hn_max h3_5">
                    <p>海南当前占比</p>
                    <p>35.06%</p>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class = "fix_left h13">
            <div class = "h1 _tit2"><h4>2018年1月-10月海南发明专利占各类专利授权量比重排名</h4></div>
            <div id = "left_chart2" class="h12">

            </div>
          </div>
        </el-col>

        <el-col :span="16">
            <el-row>
              <el-col :span="12">
                <div class = "fix_right h13" style="margin-right: 1vh">

                </div>
              </el-col>
              <el-col :span="12">
                <div class = "fix_right h13">

                </div>
              </el-col>
            </el-row>
          <div class = "fix_right h9">
            <el-row id = "inn_bottom">
              <el-col :span="8">
                <div class = "fix_center h9">
                  <div class = "_tit2"><h4>创投数量</h4></div>
                  <div id = "bottom_chart1" class="h8">

                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class = "fix_center h9">
                  <div class = "_tit2"><h4>创投领域</h4></div>
                  <div id = "bottom_chart2" class="h8">

                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class = "fix_center h9">
                  <div class = "_tit2"><h4>高新技术企业累计数量</h4></div>
                  <div id = "bottom_chart3" class="h8">

                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import 'font-awesome/css/font-awesome.min.css';
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
      this.left_chart2();
      this.bottom_chart1();
      this.bottom_chart2();
      this.bottom_chart3();
    },
    methods: {
      left_chart2(){
        var top_chart = echarts.init(document.getElementById('left_chart2'));
        var option = {
          tooltip: {},
          grid: {
            right: '12%',
            bottom: '15%',
          },
          dataZoom: [{
            show: true,
            type: 'slider',
            xAxisIndex: 0,
            start: 0,
            end: 20,
            bottom: '5%',
            height: 15,
            backgroundColor: '#041257',
            borderColor: 'transparent',
            fillerColor: '#059DFA',
            handleStyle: {
              fontSize:16,
              color: 'transparent'
            },
            textStyle: {
              color: '#fff'
            }
          }],
          visualMap: {
            show:false,
            right: 0,
            min: 0,
            max: 9000,
            dimension: 1,
            itemWidth: 10,
            itemHeight: 80,
            calculable: true,
            inRange: {
              color: ['#c23c33', '#d08a00', '#2c9a42'],
              symbolSize: [20, 60]
            },
            text: ['高', '低'],
            textStyle: {
              color: 'blue'
            }
          },
          xAxis: {
            type: "category",
            name: '专利数',
            nameGap: 25,
            nameTextStyle: {
              color: '#fff',
              fontSize: 18
            },
            axisLine: {
              lineStyle: {
                width:2,
                type: 'dashed',
                color: '#447AD5'
              }
            },
            boundaryGap: false,
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: '#447AD5 '
              }
            },
            axisLabel: {
              margin:30,
              textStyle: {
                color: '#fff',
                fontSize: 18
              }
            }
          },
          yAxis: {
            name: '新增企业数',
            nameTextStyle: {
              color: '#fff',
              fontSize: 18
            },
            nameGap: 25,
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: '#447AD5 '
              }
            },
            axisLine: {
              lineStyle: {
                width:2,
                type: 'dashed',
                color: '#447AD5'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              margin:30,
              textStyle: {
                color: '#fff',
                fontSize: 18
              }
            },
          },
          series: [{
            type: 'scatter',
            symbol: 'circle',
            data: [
              [-100, 1234],
              [40, 2000],
              [-60, 4500],
              [-10, 9000],
              [-67, 2354],
              [ 67, 7890],
              [23, 6456],
              [68, 7890],
              [0, 890],
              [68, 7890]
            ]
          }]

        };
        top_chart.setOption(option)
        window.onresize = top_chart.resize;
      },
      bottom_chart1(){
        var xData = ['2012', '2013', '2014', '2015', '2016', '2017'];
        var data1 = [20, 45, 65, 88, 121, 167];
        var data2 = [1211, 1677, 1822, 2322, 2689, 3111];
        var top_chart = echarts.init(document.getElementById('bottom_chart1'));
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(255,255,255,0)' // 0% 处的颜色
                  }, {
                    offset: 0.5,
                    color: 'rgba(255,255,255,1)' // 100% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(255,255,255,0)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              },
            },

          },
          grid: {
            top: '18%',
            left: '3%',
            right: '3%',
            bottom: '10%',
            // containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: true,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#406ba7'
              }
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              margin: 25,
              textStyle: {
                color: '#fff',
                fontSize: 18,
              },
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            axisTick: {
              show: false,
            },
            data: xData
          }],
          yAxis: [{
            type: 'value',
            //splitNumber: 4,
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,0.1)'
              }
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
              margin: 20,
              textStyle: {
                color: '#fff',
                fontSize: 18,
              },
            },
            axisTick: {
              show: false,
            },
          },
            {
              type: 'value',
              //splitNumber: 4,
              splitLine: {
                show: false,
                lineStyle: {
                  color: 'rgba(255,255,255,0.1)'
                }
              },
              axisLine: {
                show: false,
              },
              axisLabel: {
                show: false,
                margin: 20,
                textStyle: {
                  color: '#fff',
                  fontSize: 18
                }
              },
              axisTick: {
                show: false,
              },
            }],
          series: [{
            name: '创投融累计资额',
            type: 'line',
            // smooth: true, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: "#53fdfe", // 线条颜色
              },
              borderColor: '#f0f'
            },
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff',
              }
            },
            itemStyle: {
              normal: {
                color: "#2599DF",
              }
            },
            tooltip: {
              show: false
            },
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#316ABB'
                },
                  {
                    offset: 1,
                    color: '#228CBE'
                  }
                ], false),
                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: data1
          },
            {
              name: '创投项目累计数',
              yAxisIndex: 1,
              type: 'line',
              // smooth: true, //是否平滑曲线显示
              // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
              showAllSymbol: true,
              // symbol: 'image://./static/images/guang-circle.png',
              symbolSize: 8,
              lineStyle: {
                normal: {
                  color: "#DF427B", // 线条颜色
                },
                borderColor: '#2599DF'
              },
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff',
                }
              },
              itemStyle: {
                normal: {
                  color: "#DF427B",
                }
              },
              tooltip: {
                show: false
              },
              data: data2
            }]
        };
        top_chart.setOption(option)
        window.onresize = top_chart.resize;
      },
      bottom_chart2(){
        var top_chart = echarts.init(document.getElementById('bottom_chart2'));
        var dataStyle = {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            // shadowBlur: 15,
            // shadowColor: 'white',
          }
        };
        var placeHolderStyle = {
          normal: {
            color: 'rgba(0,0,0,0)',
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            color: 'rgba(0,0,0,0)'
          }
        };
        var option = {
          color: ['#4DFFE3','#4DE0FF','#4DFF8F','#ADFF4D'],
          tooltip : {
            show: true,
            formatter: "{b} : {c}"
          },

          legend: {
            top: "13.5%",
            x: 'right',
            left: "42%",
            itemWidth:0,itemHeight:0,
            data: ['已婚已育','已婚未育','未婚' ,'学生'],
            itemGap: 38,
            textStyle: {
              color: '#fff',
              align:'right',
              x: 'right',
              textAlign:'right'
            },

            selectedMode: true,
            orient: "vertical",

          },
          series: [
            {
              name: 'Line 4',
              type: 'pie',
              clockWise: true,
              hoverAnimation: false,
              radius: ['65%', '75%'],
              itemStyle: dataStyle,

              data: [{
                value: 7645434,
                name: '已婚已育'
              }, {
                value: 3612343,
                name: '总数',
                tooltip: {
                  show: false
                },
                itemStyle: placeHolderStyle
              }

              ]
            }, {
              name: 'Line 3',
              type: 'pie',
              clockWise: true,
              radius: ['50%', '60%'],
              itemStyle: dataStyle,
              hoverAnimation: false,

              data: [{
                value: 2,
                name: '已婚未育'
              }, {
                value: 10,
                name: '总数',
                tooltip: {
                  show: false
                },
                itemStyle: placeHolderStyle
              }]
            }, {
              name: 'Line 2',
              type: 'pie',
              clockWise: true,
              hoverAnimation: false,
              radius: ['35%', '45%'],
              itemStyle: dataStyle,

              data: [{
                value: 1823323,
                name: '未婚'
              }, {
                value: 1812343,
                name: '总数',
                tooltip: {
                  show: false
                },
                itemStyle: placeHolderStyle
              }]
            },
            {
              name: 'Line 1',
              type: 'pie',
              clockWise: true,

              radius: ['20%', '30%'],
              itemStyle: dataStyle,
              hoverAnimation: false,

              data: [ {
                value: 1342221,
                name: '学生'
              },{
                value:1912343,
                name: '总数',
                tooltip: {
                  show: false
                },
                itemStyle: placeHolderStyle
              }

              ]
            }
          ]
        };
        top_chart.setOption(option)
        window.onresize = top_chart.resize;
      },
      bottom_chart3(){
        var xData = ['2008','2009','2010','2011','2012', '2013', '2014', '2015', '2016', '2017','2018'];
        var data2 = [765,812,892,1002,1211, 1677, 1822, 2322, 2689, 3111,3222];
        var top_chart = echarts.init(document.getElementById('bottom_chart3'));
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(255,255,255,0)' // 0% 处的颜色
                  }, {
                    offset: 0.5,
                    color: 'rgba(255,255,255,1)' // 100% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(255,255,255,0)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              },
            },

          },
          grid: {
            top: '18%',
            left: '3%',
            right: '3%',
            bottom: '10%',
            // containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: true,
            splitLine: {
              show: false,
              lineStyle: {
                color: '#406ba7'
              }
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              margin: 25,
              textStyle: {
                color: '#fff',
                fontSize: 18,
              },
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            axisTick: {
              show: false,
            },
            data: xData
          }],
          yAxis: [{
            type: 'value',
            //splitNumber: 4,
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,0.1)'
              }
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
              margin: 20,
              textStyle: {
                color: '#fff',
                fontSize: 18,
              },
            },
            axisTick: {
              show: false,
            },
          }],
          series: [
            {
              name: '累计数',
              type: 'bar',
              barWidth: '40%',
              itemStyle: {
                normal: {
                  color: '#4086E8',
                  // barBorderRadius: [30, 30, 30, 30],
                  // shadowColor: 'rgba(0,160,221,1)',
                  // shadowBlur: 4,
                }
              },
              // tooltip: {
              //   show: false
              // },
              data: data2
            }]
        };
        top_chart.setOption(option)
        window.onresize = top_chart.resize;
      },
    }
  }
</script>
<style lang="scss" scoped>
  #index{
    #inn_bottom{
      .fix_center{
        margin-top: 0;
      }
    }
    .inn_topN{
      color: #fff;
      text-align: center;
      font-size: 24px;
      height: 13vh;
      span:nth-child(1) div,span:nth-child(2) div{
        font-size: 90px;
        background-color: #494C5F;
        border-radius: 6px;
        float: left;
        margin-left: 20px;
        width: 90px;
        height: 150px;
        line-height: 150px;
        margin-top: 3vh;
      }
      span:nth-child(1) div{
        margin-left: 20%;
      }
      span:nth-child(3),span:nth-child(5){
        float: left;
        margin-left: 20px;
        margin-top: 8.5vh;
      }
      span:nth-child(5){
        margin-left: 15px;
      }
      span:nth-child(4){
        margin-left: 40px;
        margin-top: 8vh;
        font-size: 35px;
        float: left;
        color: #28ca09;
      }
    }
    .cou_max,.hn_max{
      color: #fff;
      text-align: center;
      p:nth-child(1){
        font-size: 24px;
        line-height: 6vh;
      }
      p:nth-child(2){
        color: #6CCAF5;
        font-size: 50px;
        line-height: 6vh;
      }
    }
    .hn_max{
      p:nth-child(2) {
        color: #D1365F;
      }
    }
  }
</style>
