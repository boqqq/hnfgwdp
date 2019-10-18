<template>
  <div class="environment">
    <div class = "chart_main">
      <el-row>
        <el-col :span="7">
          <el-row>
            <el-col :span="24">
              <div class = "chart_title">
                <div class = "fl"><i class="fa fa-caret-left"></i></div>
                <div class = "_tit">空气质量</div>
                <div class = "fl"><i class="fa fa-caret-right"></i></div>
              </div>
              <div class = "fix_left h7" style="height:38vh">
                <el-row style="padding-top: 5%;">
                  <el-col :span="14" style="padding: 0 5%">
                    <el-col :span="24">
                      <div style="text-align: center; height: 2vh; line-height: 2vh">
                        <span style="color: #fff; font-size: 0.8vw;">{{dataLabel}}</span>
                      </div>
                    </el-col>
                    <el-col :span="24">
                      <vCalendar
                        v-on:choseDay="clickDay"
                        v-on:changeMonth="changeDate"
                        v-on:isToday="clickToday"
                      ></vCalendar>
                    </el-col>
                  </el-col>
                  <el-col :span="10">

                  </el-col>
                </el-row>

              </div>
            </el-col>
            <el-col :span="24">
              <div class = "chart_title">
                <div class = "fl"><i class="fa fa-caret-left"></i></div>
                <div class = "_tit">近一年空气优良天气占比</div>
                <div class = "fl"><i class="fa fa-caret-right"></i></div>
              </div>
              <div class = "fix_left h7" style="height:23vh">
                <div  id="chart_left2" class = "chart80"></div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "chart_title">
                <div class = "fl"><i class="fa fa-caret-left"></i></div>
                <div class = "_tit">环境问题热度</div>
                <div class = "fl"><i class="fa fa-caret-right"></i></div>
              </div>
              <div class = "fix_left h7" style="height:23vh">
                <div id = "chart_left3" class = "chart80"></div>
              </div>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="10">
          <el-row>
            <el-col :span="24">
              <div class = "fix_center h12">
                <div id = "chart_center1" style="height:63vh">
                </div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "fix_center h10">
                <el-row>
                  <el-col :span="24">
                    <div class="chart_title">
                    <div class = "fl"><i class="fa fa-caret-left"></i></div>
                    <div class = "_tit">前两年完成"十三五"目标进度情况</div>
                    <div class = "fl"><i class="fa fa-caret-right"></i></div>
                    </div>
                  </el-col>
                  <el-col :span="24">
                    <div class = "fix_left h7">
                      <div id = "chart_center2" class = "charts" style="height:31vh"></div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="7">
          <el-row>
            <el-col :span="24">
              <div class = "chart_title">
                <div class = "fl"><i class="fa fa-caret-left"></i></div>
                <div class = "_tit">森林覆盖</div>
                <div class = "fl"><i class="fa fa-caret-right"></i></div>
              </div>
              <div class = "fix_right h7" style="height: 18vh;">
                <div>
                  <span>森林覆盖率</span>
                  <span>森林储积率</span>
                </div>
                <div>
                  <span>62.31%</span>
                  <span>7090.4万立方米</span>
                </div>
              </div>
            </el-col>
            <el-col :span="24">
              <el-row>
                <el-col :span="12">
                  <div class = "chart_title">
                    <div class = "fl"><i class="fa fa-caret-left"></i></div>
                    <div class = "_tit1">污水垃圾处理率</div>
                    <div class = "fl"><i class="fa fa-caret-right"></i></div>
                  </div>
                  <div class = "fix_right h7"  style="height: 23vh;">
                    <div id = "chart_right2" class = "charts"></div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class = "chart_title">
                    <div class = "fl"><i class="fa fa-caret-left"></i></div>
                    <div class = "_tit1">水体质量</div>
                    <div class = "fl"><i class="fa fa-caret-right"></i></div>
                  </div>
                  <div class = "fix_right h7"  style="height: 23vh;">
                    <div id = "chart_right4" class = "charts"></div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <div class = "chart_title">
                <div class = "fl"><i class="fa fa-caret-left"></i></div>
                <div class = "_tit">近一年PM2.5趋势变化</div>
                <div class = "fl"><i class="fa fa-caret-right"></i></div>
              </div>
              <div class = "fix_right h7"  style="height: 43vh;">
                <div id = "chart_right3" class = "charts"></div>
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
  import '../../static/js/map/china.js';
  import '../../static/js/map/hainan.js';
  import '../../static/js/map/jiangxi.js';
  import vCalendar from 'vue-calendar-component';

  //import {config,xAxiss,yAxiss,grid,tooltip,dotHtml,legend} from '../../static/js/config/chartConfig.js';
  var echarts = require('echarts');
  export default {
    name:"index",
    data(){
      return{
        dataLabel:'',
      }
    },
    components: {
      vCalendar
    },
    created () {
    },
    beforeDestroy() {

    },
    mounted () {
      this.chart_left2();
      this.chart_left3();
      this.chart_center2();
      this.chart_right3();
      this.chart_right4();
      this.chart_right2();
      this.chart_center1();
    },
    methods: {
      clickDay(data) {
        this.dataLabel = data
        console.log(data); //选中某天
      },
      changeDate(data) {
        this.dataLabel = data
        console.log(data); //左右点击切换月份
      },
      clickToday(data) {
        this.dataLabel = data
        console.log(data); // 跳到了本月
      },
      chart_left2(){
        var myChart=echarts.init(document.getElementById("chart_left2"));
        var  colorList=['#7564FF', '#2BBEC5', '#15C8FF', '#3bafff', '#f1bb4c','#aff', "rgba(250,250,250,0.5)"];
        var option = {
          grid: {
            bottom: '10%',
            left: '10%',
            right: '10%',
            top:'20%'
          },
          legend: {
            show:false,
            orient: 'vertical',
            top: "middle",
            right: "5%",
            textStyle: {
              color: '#f2f2f2',
              fontSize: 12,

            },
            icon: 'roundRect'
          },
          series: [
            // 主要展示层的
            {
              radius: ['29%', '59%'],
              center: ['50%', '50%'],
              type: 'pie',
              itemStyle: {
                normal: {
                  color: function(params) {
                    return colorList[params.dataIndex]
                  }
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 35,
                  length2: 40,
                  lineStyle: {
                    color: '#d3d3d3'
                  },
                  align: 'right'
                },
                color: "#000",
                emphasis: {
                  show: true
                }
              },
              label:{
                normal:{
                  formatter: function(params){
                    var str = '';
                    switch(params.name){
                      case '优':str = '优'+params.value+'%';break;
                      case '良':str = '良'+params.value+'%';break;
                      case '其他':str = '其他'+params.value+'%';break;
                    }
                    return str
                  },
                  padding: [0, -45],
                  height: 35,
                  rich: {
                    a: {
                      width:38,
                      height:38,
                      lineHeight: 50,

                      align: 'left'
                    },
                    b: {
                      width:29,
                      height:45,
                      lineHeight: 50,
                      align: 'left'
                    },
                    c: {
                      width:34,
                      height:33,
                      lineHeight: 50,

                      align: 'left'
                    },
                    d: {
                      width:34,
                      height:44,
                      lineHeight: 50,
                      align: 'left'
                    },
                    e: {
                      width:38,
                      height:30,
                      lineHeight: 50,
                      align: 'left'
                    },
                    nameStyle: {
                      fontSize: 16,
                      color: "#555",
                      align: 'left'
                    },
                    rate: {
                      fontSize: 20,
                      color: "#1ab4b8",
                      align: 'left'
                    }
                  }
                }
              },
              data: [
                {
                  value:17,
                  name:'优',
                },
                {value:23, name:'良'},
                {value:27, name:'其他'},
              ],
            },
            // 边框的设置
            {
              radius: ['54%', '59%'],
              center: ['50%', '50%'],
              type: 'pie',
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              animation: false,
              tooltip: {
                show: false
              },
              itemStyle: {
                normal: {
                  color:'rgba(250,250,250,0.5)'
                }
              },
              data: [{
                value: 1,
              }],
            }
          ]
        };
        myChart.setOption(option);
      },
      chart_left3(){
        var xData = ['空气质量','水环境质量','土壤环境质量','工业污染治理','城乡垃圾处理','农业农村环境治理','节能环保产业发展','生态红线保护'];
        var data1 = [3.2,2.4,5.2,6.9,3.1,4.4,6.3,8.5];
        var chart_center1 = echarts.init(document.getElementById('chart_left3'));
        var option = {
          tooltip: {
            trigger: 'axis',

          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'10%',
            containLabel: true
          },
          xAxis: {
            data: xData,
            splitLine: {
              show: false
            }, //去除网格线
            splitArea: {
              show: false
            }, //保留网格区域
            axisTick: {
              show: false
            },
            axisLine: {
              onZero: false,
              show: false,
              lineStyle: {
                color: "#fff",
                width: 0.6 //这里是为了突出显示加上的
              }
              // symbol: ['none', 'arrow'],
              // symbolSize: [6, 12],
              // symbolOffset: [0, 8]
            },
            axisLabel: {
              //interval: 0, //隔几个显示
              //rotate: 30,
              interval:0,
              rotate:40,
              showMinLabel: true,
              textStyle: {
                fontSize: '16',
                color:'#fff',
              }
            }
          },
          yAxis:   {
            type : 'value',
            show:false,
            //minInterval:100,//设置左侧Y轴最小刻度
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: 'rgba(135,140,147,0.8)'
              }
            },//设置横线样式
            axisLabel: {
              textStyle: {
                fontSize: '16',
                color:'#fff'
              }
            },
          },
          color: ['#e54035'],
          series: [{
            name: '指数',
            type: 'pictorialBar',
            barCategoryGap: '-80%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
              /*normal: {
                //barBorderRadius: 5,
                //渐变色
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#00ddff'},
                    {offset: 1, color: '#0091ff'}
                  ]
                )
              }*/
        color: function (params){
                if(params.dataIndex%2==0){//系列预警值，根据预警值变化柱子的颜色
                  var warningColor= new echarts.graphic.LinearGradient( 0, 0, 1, 0,[{offset: 0, color: '#931038'},{offset: 1, color: '#E5487F'}]);
                  return warningColor;
                }
                else{
                  var normalColor= new echarts.graphic.LinearGradient( 0, 0, 1, 0,[{offset: 0, color: '#1D95F6'},{offset: 1, color: '#38DDF9'}]);
                  return normalColor;
                }
              }
            },
            data: data1,
            z: 10
          }]
        };
        chart_center1.setOption(option)
        window.onresize = chart_center1.resize;
      },
      chart_center2(){
        var title = {
          show: true,
          offsetCenter: [0, "95%"], //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
          // 文字的颜色,默认 #333。
          color:"#fff",
          fontSize: 16,
          x: "38%",
          y: '60%',
        };
        var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: '#FD432E'
        },

          {
            offset: 0.62,
            color: '#F5D33C'
          },

          {
            offset: 1,
            color: '#06C55B'
          }
        ]);
        var axisLine = {
          show: true,
          lineStyle: {
            width: 10,
            shadowBlur: 0,
            color: [[1, axislineColor]]
          }
        };
        var detail = {
          fontSize: 16,
          color:'#fff',
          formatter: '{value}%'
        }
        var axisLabel = { // 刻度标签。
          show: true, // 是否显示标签,默认 true。
          color:'#fff',
          formatter:function (v) {
            if(v == 0 || v == 50 || v == 100){
              return v;
            }else{
              return '';
            }
          }
        };
        var chart_center1 = echarts.init(document.getElementById('chart_center2'));
        var option = {
          series: [{
            type: 'gauge',
            radius: '80%',
            center: ['25%', '70%'],
            detail:detail ,
            title: title,
            startAngle: 180, //开始刻度的角度
            endAngle: 0, //结束刻度的角度
            axisTick: {
              show:true,
              splitNumber: 1,
            },
            axisLabel: axisLabel,
            splitLine: {
              length: 10,
              lineStyle: {
                color: 'auto'
              }
            },
            pointer: {
              width: 3
            },
            axisLine: axisLine,
            data: [{
              value: 67,
              name: 'GDP能耗',
            }]
          },
            {
              type: 'gauge',
              radius: '80%',
              center: ['75%', '70%'],
              detail:detail ,
              title: title,
              startAngle: 180, //开始刻度的角度
              endAngle: 0, //结束刻度的角度
              axisTick: {
                show:true,
                splitNumber: 1,
              },
              axisLabel: axisLabel,
              splitLine: {
                length: 10,
                lineStyle: {
                  color: 'auto'
                }
              },
              pointer: {
                width: 3
              },
              axisLine: axisLine,
              data: [{
                value: 67,
                name: 'GDP能耗',
              }]
            }]
        };
        chart_center1.setOption(option)
        window.onresize = chart_center1.resize;
      },
      chart_right3(){
        var myChart=echarts.init(document.getElementById("chart_right3"));
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['海南', '海口', '三亚'],
            align: 'right',
            right: '5%',
            top: '10%',
            textStyle: {
              color: "#fff"
            },
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 35
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['2018-4',
              '2018-5',
              '2018-6',
              '2018-7',
              '2018-8',
              '2018-9',
              '2018-10',
              '2018-11'
            ],
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff",
                width: 1,
                type: "solid"
              }
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
              }
            },
          }],
          yAxis: [{
            type: 'value',
            name:'PM2.5值',
            axisLabel: {
              formatter: '{value}'
            },
            axisTick: {
              show: true,
              color:'#fff'
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff",
                width: 1,
                type: "solid"
              },
            },
            splitLine: {
              show:false,
              lineStyle: {
                color: "#063374",
              }
            }
          }],
          series: [{
            name: '海南',
            type: 'bar',
            data: [20, 30, 35, 18, 13, 18, 27, 40],
            barWidth: 8, //柱子宽度
            barGap: 0.5, //柱子之间间距
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#008cff'
                }, {
                  offset: 1,
                  color: '#005193'
                }]),
                opacity: 1,
              }
            }
          }, {
            name: '海口',
            type: 'bar',
            data: [40, 40, 40, 11,25, 27, 20, 22],
            barWidth: 8,
            barGap: 0.5,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00da9c'
                }, {
                  offset: 1,
                  color: '#007a55'
                }]),
                opacity: 1,
              }
            }
          }, {
            name: '三亚',
            type: 'bar',
            data: [20, 28, 33,38, 23, 27, 30, 32],
            barWidth: 8,
            barGap: 0.5,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#c4e300'
                }, {
                  offset: 1,
                  color: '#728400'
                }]),
                opacity: 1,
              }
            }
          }]
        };
        myChart.setOption(option);
      },
      chart_right2(){
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
        var myChart=echarts.init(document.getElementById("chart_right2"));
        var option = {
          color: ['#4BB8FD','#53F532'],
          tooltip : {
            show: true,
            formatter: "{b} : {c}%"
          },

          legend: {
            top: "10%",
            x: 'right',
            right: "5%",
            itemWidth:10,itemHeight:10,
            data: ['污水处理率','垃圾处理率'],
            itemGap: 10,
            textStyle: {
              color: '#fff',
              align:'center',
              x: 'right',
              textAlign:'right',
              fontSize:10
            },

            selectedMode: true,
            orient: "horizontal",

          },
          series: [
            {
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              hoverAnimation: false,
              radius: ['45%', '55%'],
              itemStyle: dataStyle,

              data: [{
                value: 70,
                name: '垃圾处理率'
              }, {
                value: 10,
                name: '总数',
                tooltip: {
                  show: false
                },
                itemStyle: placeHolderStyle
              }

              ]
            }, {
              name: 'Line 2',
              type: 'pie',
              clockWise: true,
              radius: ['30%', '40%'],
              itemStyle: dataStyle,
              hoverAnimation: false,

              data: [{
                value: 60,
                name: '污水处理率'
              }, {
                value: 10,
                name: '总数',
                tooltip: {
                  show: false
                },
                itemStyle: placeHolderStyle
              }]
            }
          ]
        };
        myChart.setOption(option);
      },
      chart_right4(){
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
        var myChart=echarts.init(document.getElementById("chart_right4"));
        var option = {
          color: ['#FFD622','#FF8820','#FC3459'],
          tooltip : {
            show: true,
            formatter: "{b} : {c}%"
          },
          legend: {
            top: "10%",
            x: 'right',
            right: "5%",
            itemWidth:10,itemHeight:10,
            data: ['饮用水','地表水','近岸水域'],
            itemGap: 10,
            textStyle: {
              color: '#fff',
              align:'center',
              x: 'right',
              textAlign:'right',
              fontSize:10
            },

            selectedMode: true,
            orient: "horizontal",

          },
          series: [
            {
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              hoverAnimation: false,
              radius: ['45%', '55%'],
              itemStyle: dataStyle,

              data: [{
                value: 70,
                name: '饮用水'
              }, {
                value: 10,
                name: '总数',
                tooltip: {
                  show: false
                },
                itemStyle: placeHolderStyle
              }

              ]
            }, {
              name: 'Line 2',
              type: 'pie',
              clockWise: true,
              radius: ['30%', '40%'],
              itemStyle: dataStyle,
              hoverAnimation: false,

              data: [{
                value: 60,
                name: '地表水'
              }, {
                value: 10,
                name: '总数',
                tooltip: {
                  show: false
                },
                itemStyle: placeHolderStyle
              }]
            },, {
              name: 'Line 3',
              type: 'pie',
              clockWise: true,
              radius: ['15%', '25%'],
              itemStyle: dataStyle,
              hoverAnimation: false,

              data: [{
                value: 60,
                name: '近岸水域'
              }, {
                value: 10,
                name: '总数',
                tooltip: {
                  show: false
                },
                itemStyle: placeHolderStyle
              }]
            }
          ]
        };
        myChart.setOption(option);
      },
      chart_center1(){
        var myChart=echarts.init(document.getElementById("chart_center1"));
        var name_title = "全国重点城市空气质量排名"
        var nameColor = " rgb(55, 75, 113)"
        var name_fontFamily = '等线'
        var name_fontSize = 18
        var mapName = 'china'
        var data = [
          {name:"乌鲁木齐",value:1},
          {name:"拉萨",value:2},
          {name:"西宁",value:3},
          {name:"兰州",value:4},
          {name:"呼和浩特",value:5},
          {name:"银川",value:6},
          {name:"成都",value:7},
          {name:"昆明",value:8},
          {name:"西安",value:9},
          {name:"太原",value:10},
          {name:"重庆",value:11},
          {name:"贵阳",value:12},
          {name:"南宁",value:13},
          {name:"海口",value:14},
          {name:"三亚",value:15},
          {name:"广州",value:16},
          {name:"台北",value:17},
          {name:"福州",value:18},
          {name:"南昌",value:19},
          {name:"长沙",value:20},
          {name:"武汉",value:21},
          {name:"合肥",value:22},
          {name:"杭州",value:23},
          {name:"南京",value:24},
          {name:"郑州",value:25},
          {name:"济南",value:26},
          {name:"上海",value:27},
          {name:"石家庄",value:28},
          {name:"天津",value:29},
          {name:"北京",value:30},
          {name:"沈阳",value:31},
          {name:"大连",value:32},
          {name:"长春",value:33},
          {name:"哈尔滨",value:34}
        ];

        var geoCoordMap = {"乌鲁木齐":[87.500966,  43.983832],
          "拉萨":[90.959657,  29.881987],
          "西宁":[101.703679, 36.733408],
          "兰州":[103.764176, 36.198433],
          "呼和浩特":[111.711808, 40.98898],
          "银川":[106.192619, 38.605171],
          "成都":[103.984944, 30.712171],
          "昆明":[102.733927, 25.025991],
          "西安":[112.521289, 38.025365],
          "太原":[108.84183,  34.510421],
          "重庆":[106.413387, 29.689402],
          "贵阳":[106.560565, 26.756654],
          "南宁":[108.326706, 22.99805,],
          "海口":[110.129641, 20.14162,],
          "三亚":[109.7525,18.40005],
          "广州":[113.183592, 23.202287],
          "台北":[121.49917,  25.12653,],
          "福州":[119.107522, 26.193691],
          "南昌":[115.722419, 28.882959],
          "长沙":[112.778851, 28.363482],
          "武汉":[114.177046, 30.743959],
          "合肥":[117.120614, 31.943998],
          "杭州":[119.990592, 30.361806],
          "南京":[118.665986, 32.194658],
          "郑州":[113.441154, 34.8448],
          "济南":[116.973435, 36.763019],
          "上海":[121.315197, 31.314325],
          "石家庄":[114.397814, 38.170754],
          "天津":[117.194203, 39.180291],
          "北京":[116.384722, 39.977552],
          "沈阳":[123.412489, 41.875105],
          "大连": [121.5255,38.95223],
          "长春":[125.252219, 43.850841],
          "哈尔滨":[126.503235, 45.865719]
        };
        var toolTipData = [
          {name:"乌鲁木齐",value:1},
          {name:"拉萨",value:2},
          {name:"西宁",value:3},
          {name:"兰州",value:4},
          {name:"呼和浩特",value:5},
          {name:"银川",value:6},
          {name:"成都",value:7},
          {name:"昆明",value:8},
          {name:"西安",value:9},
          {name:"太原",value:10},
          {name:"重庆",value:11},
          {name:"贵阳",value:12},
          {name:"南宁",value:13},
          {name:"海口",value:14},
          {name:"三亚",value:15},
          {name:"广州",value:16},
          {name:"台北",value:17},
          {name:"福州",value:18},
          {name:"南昌",value:19},
          {name:"长沙",value:20},
          {name:"武汉",value:21},
          {name:"合肥",value:22},
          {name:"杭州",value:23},
          {name:"南京",value:24},
          {name:"郑州",value:25},
          {name:"济南",value:26},
          {name:"上海",value:27},
          {name:"石家庄",value:28},
          {name:"天津",value:29},
          {name:"北京",value:30},
          {name:"沈阳",value:31},
          {name:"大连",value:32},
          {name:"长春",value:33},
          {name:"哈尔滨",value:34}
        ];


        /*获取地图数据*/
        /*var mapFeatures = echarts.getMap(mapName).geoJson.features;
        var str='';
        myChart.hideLoading();
        mapFeatures.forEach(function(v) {
            // 地区名称
            var name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;

        });*/
// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
        console.log(data)
        console.log(toolTipData)
        var max = 480,
          min = 9; // todo
        var maxSize4Pin = 100,
          minSize4Pin = 20;

        var convertData = function(data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
              });
            }
          }
          return res;
        };
        var option = {
          title: {
            text: name_title,
            x: 'center',
            textStyle: {
              color: nameColor,
              fontFamily: name_fontFamily,
              fontSize: name_fontSize
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: function(params) {
              if (typeof(params.value)[2] == "undefined") {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                  if(params.name==toolTipData[i].name){
                    toolTiphtml += toolTipData[i].name+':<br>'+"排名:"+toolTipData[i].value
                  }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
              } else {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                  if(params.name==toolTipData[i].name){
                    toolTiphtml += toolTipData[i].name+':<br>'+"排名:"+toolTipData[i].value
                  }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
              }
            }
          },
          // legend: {
          //     orient: 'vertical',
          //     y: 'bottom',
          //     x: 'right',
          //     data: ['credit_pm2.5'],
          //     textStyle: {
          //         color: '#fff'
          //     }
          // },
          visualMap: {
            show: true,
            min: 0,
            max: 200,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
              // color: ['#3B5077', '#031525'] // 蓝黑
              // color: ['#ffc0cb', '#800080'] // 红紫
              // color: ['#3C3B3F', '#605C3C'] // 黑绿
              // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
              // color: ['#23074d', '#cc5333'] // 紫红
              color: ['#00467F', '#A5CC82'] // 蓝绿
              // color: ['#1488CC', '#2B32B2'] // 浅蓝
              // color: ['#00467F', '#A5CC82'] // 蓝绿
              // color: ['#00467F', '#A5CC82'] // 蓝绿
              // color: ['#00467F', '#A5CC82'] // 蓝绿
              // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
          },
          /*工具按钮组*/
          // toolbox: {
          //     show: true,
          //     orient: 'vertical',
          //     left: 'right',
          //     top: 'center',
          //     feature: {
          //         dataView: {
          //             readOnly: false
          //         },
          //         restore: {},
          //         saveAsImage: {}
          //     }
          // },
          geo: {
            show: true,
            map: mapName,
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
                areaColor: '#031525',
                borderColor: '#3B5077',
              },
              emphasis: {
                areaColor: '#2B91B7',
              }
            }
          },
          series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: 'white'
              }
            }
          },
            {
              type: 'map',
              map: mapName,
              geoIndex: 0,
              aspectScale: 0.75, //长宽比
              showLegendSymbol: false, // 存在legend时显示
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: false,
                  textStyle: {
                    color: '#fff'
                  }
                }
              },
              roam: true,
              itemStyle: {
                normal: {
                  areaColor: '#031525',
                  borderColor: '#3B5077',
                },
                emphasis: {
                  areaColor: '#2B91B7'
                }
              },
              animation: false,
              data: data
            },
            {
              name: '点',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'pin', //气泡
              symbolSize: function(val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a * min;
                b = maxSize4Pin - a * max;
                return a * val[2] + b;
              },
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: '#fff',
                    fontSize: 9,
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#F62157', //标志颜色
                }
              },
              zlevel: 6,
              data: convertData(data),
            },
            {
              name: 'Top 3',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(data.sort(function(b) {
                return b.value
              }).slice(0, 3)),
              symbolSize: function(val) {
                return val[2] / 10;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#3AC4E0',
                  shadowBlur: 10,
                  shadowColor: '#3AC4E0'
                }
              },
              zlevel: 1
            },
            {
              name: 'Top 3-20',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(data.sort(function(b) {
                return b.value
              }).slice(3, 20)),
              symbolSize: function(val) {
                return val[2] / 10;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: 'yellow',
                  shadowBlur: 10,
                  shadowColor: 'yellow'
                }
              },
              zlevel: 1
            },

          ]
        };
        myChart.setOption(option);
      }
    }
  }
</script>
<style lang="scss" >
  .environment{
    .fix_left{
      margin-top: 0;
    }
    .fix_right{
      margin-top: 0;
    }
    .ind_tit{
      font-size: 18px;
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
      font-size: 18px;
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
    ._tit1{
      width: 4vw;
      background-color: #052439;
      border: 1px #23A9F3 solid;
      text-align: center;
      color: #fff;
      font-size: 18px;
      line-height: 3vh;
      border-radius:5px;
    }
    .ind_val4 span{
      color: #D644E2;
    }
    .ind_val5 span{
      color: #2FBD57;
    }
    .t_tl{
      height: 2vh;
      border: 1px #0091ff solid;
      border-radius: 5px;
      font-size: 16px;
      color: #fff;
      line-height: 2vh;
      text-align: center;
      margin-top: 3vh;
      margin-left: 10px;
    }
    .center_lis{
      background-color: #0E345B;
      width: 80%;
      height: 3vh;
      margin-left: 10%;
      margin-top: 1.5vh;
      color: #fff;
      line-height: 3vh;
      text-align: center;
    }
    .center2_tit{
      width: 100%;
      height: 7vh;
      color: #fff;
      line-height: 7vh;
      text-align: center;
    }
    .wh_container{
      max-width: none;
    }
    .wh_content_item{
      height: 4.5vh;
      font-size: 0.8vw;
    }
    .wh_top_changge li{
      display: none;
    }
    .wh_content_all {
      background-color: transparent !important;
    }
    .wh_item_date, .wh_top_tag{
      height: 3vh;
      width: 3vh;
    }
    .wh_content_item .wh_chose_day{
      background: #FF808F;
    }
    .wh_content_all{
      background-color: transparent;
    }
  }
</style>
