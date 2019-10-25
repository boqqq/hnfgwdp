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
              <div class = "fix_left h8">
                <el-row style="padding-top: 5%;">
                  <el-col :span="14">
                    <div style="text-align: center; height: 2vh;">
                      <span style="color: #fff; font-size: 1.5vh;">{{enObj.dataLabel}}</span>
                    </div>
                    <el-row style="padding: 0 5%">
                      <vCalendar
                        ref="vcalendar"
                        v-on:choseDay="clickDay"
                        v-on:isToday="clickToday"
                      ></vCalendar>
                    </el-row>
                    <el-row style="padding-left: 9%;margin-top: 1.2vh">
                      <el-col :span="4" style="padding-left: 0.5vh;margin-left: 1.4vh"><el-col class="wh-color1"></el-col></el-col>
                      <el-col :span="4" style="padding-left: 0.5vh"><el-col class="wh-color2"></el-col></el-col>
                      <el-col :span="4" style="padding-left: 0.5vh"><el-col class="wh-color3"></el-col></el-col>
                      <el-col :span="4" style="padding-left: 0.5vh"><el-col class="wh-color4"></el-col></el-col>
                      <el-col :span="4" style="padding-left: 0.5vh"><el-col class="wh-color5"></el-col></el-col>
                    </el-row>
                    <el-row style="padding-left: 9%; color: #fff; font-size: 1.5vh; margin-top: 0.5vh">
                      <el-col :span="4" style="margin-left: 0.6vh">50</el-col>
                      <el-col :span="4">100</el-col>
                      <el-col :span="4">150</el-col>
                      <el-col :span="4">200</el-col>
                      <el-col :span="4">250</el-col>
                      <el-col :span="3">500</el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="8" style="margin-left: 2vw">
                    <el-row class="en-box-item">
                      <el-col :span="12"><span class="en-box-label" style="line-height: 2.9vh">PM<br>2.5</span>
                      </el-col>
                      <el-col :span="12"><span :class="getEnVlaClass(enObj.pm25)">{{enObj.pm25}}</span></el-col>
                    </el-row>
                    <el-row class="en-box-item">
                      <el-col :span="12"><span class="en-box-label" style="line-height: 3vh">PM<br>10</span>
                      </el-col>
                      <el-col :span="12"><span :class="getEnVlaClass(enObj.pm10)">{{enObj.pm10}}</span></el-col>
                    </el-row>
                    <el-row class="en-box-item">
                      <el-col :span="12"><span class="en-box-label" style="line-height: 6vh">AQI</span>
                      </el-col>
                      <el-col :span="12"><span :class="getEnVlaClass(enObj.aqi)">{{enObj.aqi}}</span></el-col>
                    </el-row>
                  </el-col>
                </el-row>

              </div>
            </el-col>
            <el-col :span="24">
              <div class = "chart_title" style="width: 30%;left: 35%">
                <div class = "fl"><i class="fa fa-caret-left"></i></div>
                <div class = "_tit"  style="width: 13vw">近一年空气优良天气占比</div>
                <div class = "fl"><i class="fa fa-caret-right"></i></div>
              </div>
              <div class = "fix_left h6">
                <div  id="chart_left2" class = "h6"></div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "chart_title">
                <div class = "fl"><i class="fa fa-caret-left"></i></div>
                <div class = "_tit">环境问题热度</div>
                <div class = "fl"><i class="fa fa-caret-right"></i></div>
              </div>
              <div class = "fix_left">
                <div id = "chart_left3" style="height: 27.2vh"></div>
              </div>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="10">
          <el-row>
            <el-col :span="24">
              <div class = "fix_center h14">
                <div class="cen_title">全国重点城市空气质量排名</div>
                <div id = "chart_center1" class="h13">
                </div>
              </div>
            </el-col>
            <el-col :span="24">
                <div class="chart_title" style="width: 28%;left: 36%">
                    <div class = "fl"><i class="fa fa-caret-left"></i></div>
                    <div class = "_tit" style="width: 18vw">前两年完成"十三五"目标进度情况</div>
                    <div class = "fl"><i class="fa fa-caret-right"></i></div>
                </div>
               <div class = "fix_center2" style="margin-top: 0">
                      <div id = "chart_center2" class = "h7" style="height: 30.6vh"></div>
                </div>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="7">
          <el-row>
            <el-col :span="24">
              <div class = "chart_title" style="width: 16%;left: 42%">
                <div class = "fl"><i class="fa fa-caret-left"></i></div>
                <div class = "_tit">森林覆盖</div>
                <div class = "fl"><i class="fa fa-caret-right"></i></div>
              </div>
              <div class = "fix_right h5">
                <el-row>
                  <el-col :span="12">
                    <div class = "forest_tit">森林覆盖率</div>
                    <div class = "forest_val forest_val1">
                      <span>62</span>
                      <span>.31</span>
                      <span>%</span>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class = "forest_tit">森林储积量</div>
                    <div class = "forest_val forest_val2">
                      <span>7090</span>
                      <span>.4</span>
                      <span>万立方米</span>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="24">
              <el-row>
                <el-col :span="12">
                  <div class = "chart_title" style="width: 40%;left: 30%">
                    <div class = "fl"><i class="fa fa-caret-left"></i></div>
                    <div class = "_tit">污水垃圾处理率</div>
                    <div class = "fl"><i class="fa fa-caret-right"></i></div>
                  </div>
                  <div class = "fix_center2 h6" style="margin-top: 0">
                    <div id = "chart_right2" class = "charts"></div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class = "chart_title" style="width: 30%;left: 35%">
                    <div class = "fl"><i class="fa fa-caret-left"></i></div>
                    <div class = "_tit">水体质量</div>
                    <div class = "fl"><i class="fa fa-caret-right"></i></div>
                  </div>
                  <div class = "fix_right h6" >
                    <div id = "chart_right3" class = "charts"></div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <div class = "chart_title">
                <div class = "fl"><i class="fa fa-caret-left"></i></div>
                <div class = "_tit" style="width: 13vw">近一年PM2.5趋势变化</div>
                <div class = "fl"><i class="fa fa-caret-right"></i></div>
              </div>
              <div class = "fix_right">
                <div id = "chart_right4" style="height: 39.2vh"></div>
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

  import {config} from '../../static/js/config/chartConfig.js';
  var echarts = require('echarts');
  export default {
    name:"index",
    data(){
      return{
        enObj:{
          dataLabel:'',
          pm25:38,
          pm10:26,
          aqi:75,
        }
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
      this.chart_center1();
      this.chart_center2();
      this.chart_right2();
      this.chart_right3();
      this.chart_right4();
    },
    methods: {
      clickDay(data) {
        this.enObj.dataLabel = data
        this.enObj.pm25 = Math.floor(Math.random()*300);
        this.enObj.pm10 = Math.floor(Math.random()*300);
        this.enObj.aqi = Math.floor(Math.random()*300);
        console.log('clickDay',data); //选中某天
      },
      changeDate(data) {
        this.enObj.dataLabel = data
        console.log('changeDate',data); //左右点击切换月份
      },
      clickToday(data) {
        if (this.enObj.dataLabel.length == 0) {
          this.enObj.dataLabel = data
          this.$refs.vcalendar.ChoseMonth(data.replace('/', '-'))
        }

        console.log('clickToday', data); // 跳到了本月
      },
      getEnVlaClass(val){
        console.log('val',val)
        if (val < 50) {
          return 'en-box-val'
        }
        if (50 < val && val < 100) {
          return 'en-box-val1'
        }
        if (100 < val && val < 150) {
          return 'en-box-val2'
        }
        if (150 < val && val < 200) {
          return 'en-box-val3'
        }
        if (200 < val && val < 250) {
          return 'en-box-val4'
        }
        if (val > 250) {
          return 'en-box-val5'
        }
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
            //orient: 'vertical',
            top: "2%",
            right: "5%",
            textStyle: config().textStyle,
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
                  //padding: [0, -45],
                  height: 35,
                  textStyle: config().textStyle,
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
            textStyle: config().textStyle,
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
            },
            axisLabel: {
              interval:0,
              rotate:30,
              //showMinLabel: true,
              //margin:config().fontSize,
              textStyle: config().textStyle,
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
          fontSize: config().fontSize,
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
            width: config().fontSize,
            shadowBlur: 0,
            color: [[1, axislineColor]]
          }
        };
        var data1 = [{
          value: 52,
          name: 'GDP能耗',
        }];
        var data2 = [{
          value: 8,
          name: 'GDP碳排放',
        }];
        var axisLabel = { // 刻度标签。
          show: true, // 是否显示标签,默认 true。
          color:'#fff',
          fontSize: config().fontSize,
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
            detail:{
              fontSize: config().fontSize*1.5,
              color:'#fff',
              formatter:function (val) {
                return data1[0].name+': '+val +' %'
              }
            } ,
            title: title,
            startAngle: 180, //开始刻度的角度
            endAngle: 0, //结束刻度的角度
            axisTick: {
              show:true,
              splitNumber: 1,
            },
            axisLabel: axisLabel,
            splitLine: {
              length: config().fontSize,
              lineStyle: {
                color: 'auto'
              }
            },
            pointer: {
              width: config().fontSize*0.5,
            },
            axisLine: axisLine,
            data: data1
          },
            {
              type: 'gauge',
              radius: '80%',
              center: ['75%', '70%'],
              detail:{
                fontSize: config().fontSize*1.5,
                color:'#fff',
                formatter:function (val) {
                  return data2[0].name+': '+val +' %'
                }
              } ,
              title: title,
              startAngle: 180, //开始刻度的角度
              endAngle: 0, //结束刻度的角度
              axisTick: {
                show:true,
                splitNumber: 1,
              },
              axisLabel: axisLabel,
              splitLine: {
                length: config().fontSize,
                lineStyle: {
                  color: 'auto'
                }
              },
              pointer: {
                width:  config().fontSize*0.5,
              },
              axisLine: axisLine,
              data: data2
            }]
        };
        chart_center1.setOption(option)
        window.onresize = chart_center1.resize;
      },
      chart_right4(){
        var myChart=echarts.init(document.getElementById("chart_right4"));
        var option = {
          tooltip: {
            trigger: 'axis',
            textStyle: config().textStyle,
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['海南', '海口', '三亚'],
            //align: 'right',
            right: '5%',
            top: '10%',
            textStyle: config().textStyle,
            itemWidth: config().fontSize,
            itemHeight: config().fontSize,
            itemGap: config().fontSize,
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'22%',
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
              margin:config().fontSize,
              textStyle: config().textStyle,
            },
          }],
          yAxis: [{
            type: 'value',
            name:'PM2.5值',
            nameTextStyle: config().textStyle,
            axisLabel: {
              textStyle: config().textStyle,
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
            barWidth: '15%', //柱子宽度
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
            barWidth: '15%',
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
            barWidth: '15%',
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
            textStyle: config().textStyle,
            formatter: "{b} : {c}%"
          },

          legend: {
            top: "10%",
            right: "5%",
            itemWidth:config().fontSize,
            itemHeight:config().fontSize,
            data: ['污水处理率','垃圾处理率'],
            itemGap: config().fontSize,
            textStyle: config().textStyle,
            selectedMode: true,
            orient: "horizontal",

          },
          series: [
            {
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              hoverAnimation: false,
              center:['50%','60%'],
              radius: ['45%', '55%'],
              itemStyle: dataStyle,

              data: [{
                value: 70,
                name: '垃圾处理率'
              }, {
                value: 10,
                name: '总数',
                // tooltip: {
                //   show: false
                // },
                itemStyle: placeHolderStyle
              }

              ]
            }, {
              name: 'Line 2',
              type: 'pie',
              clockWise: true,
              center:['50%','60%'],
              radius: ['30%', '40%'],
              itemStyle: dataStyle,
              hoverAnimation: false,

              data: [{
                value: 60,
                name: '污水处理率'
              }, {
                value: 10,
                name: '总数',
                // tooltip: {
                //   show: false
                // },
                itemStyle: placeHolderStyle
              }]
            }
          ]
        };
        myChart.setOption(option);
      },
      chart_right3(){
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
        var myChart=echarts.init(document.getElementById("chart_right3"));
        var option = {
          color: ['#FFD622','#FF8820','#FC3459'],
          tooltip : {
            show: true,
            textStyle: config().textStyle,
            formatter: "{b} : {c}%"
          },
          legend: {
            top: "10%",
            right: "5%",
            itemWidth:config().fontSize,
            itemHeight:config().fontSize,
            data: ['饮用水','地表水','近岸水域'],
            itemGap: config().fontSize,
            textStyle: config().textStyle,
            selectedMode: true,
            orient: "horizontal",

          },
          series: [
            {
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              hoverAnimation: false,
              center:['50%','60%'],
              radius: ['45%', '55%'],
              itemStyle: dataStyle,

              data: [{
                value: 70,
                name: '饮用水'
              }, {
                value: 10,
                name: '总数',
                itemStyle: placeHolderStyle
              }

              ]
            }, {
              name: 'Line 2',
              type: 'pie',
              clockWise: true,
              center:['50%','60%'],
              radius: ['30%', '40%'],
              itemStyle: dataStyle,
              hoverAnimation: false,

              data: [{
                value: 60,
                name: '地表水'
              }, {
                value: 10,
                name: '总数',
                itemStyle: placeHolderStyle
              }]
            },, {
              name: 'Line 3',
              type: 'pie',
              clockWise: true,
              center:['50%','60%'],
              radius: ['15%', '25%'],
              itemStyle: dataStyle,
              hoverAnimation: false,

              data: [{
                value: 60,
                name: '近岸水域'
              }, {
                value: 10,
                name: '总数',
                itemStyle: placeHolderStyle
              }]
            }
          ]
        };
        myChart.setOption(option);
      },
      chart_center1(){
        var myChart=echarts.init(document.getElementById("chart_center1"));
        var name_fontFamily = '等线'
        var mapName = 'china'
        var data = [
          {name:"北京",value:177},
          {name:"天津",value:42},
          {name:"河北",value:102},
          {name:"山西",value:81},
          {name:"内蒙古",value:47},
          {name:"辽宁",value:67},
          {name:"吉林",value:82},
          {name:"黑龙江",value:66},
          {name:"上海",value:24},
          {name:"江苏",value:92},
          {name:"浙江",value:114},
          {name:"安徽",value:109},
          {name:"福建",value:116},
          {name:"江西",value:91},
          {name:"山东",value:119},
          {name:"河南",value:137},
          {name:"湖北",value:116},
          {name:"湖南",value:114},
          {name:"重庆",value:91},
          {name:"四川",value:125},
          {name:"贵州",value:62},
          {name:"云南",value:83},
          {name:"西藏",value:9},
          {name:"陕西",value:80},
          {name:"甘肃",value:56},
          {name:"青海",value:10},
          {name:"宁夏",value:18},
          {name:"新疆",value:67},
          {name:"广东",value:123},
          {name:"广西",value:59},
          {name:"海南",value:14},
        ];

        var geoCoordMap = {};
        var toolTipData = [
          {name:"北京",value:[{name:"文科",value:95},{name:"理科",value:82}]},
          {name:"天津",value:[{name:"文科",value:22},{name:"理科",value:20}]},
          {name:"河北",value:[{name:"文科",value:60},{name:"理科",value:42}]},
          {name:"山西",value:[{name:"文科",value:40},{name:"理科",value:41}]},
          {name:"内蒙古",value:[{name:"文科",value:23},{name:"理科",value:24}]},
          {name:"辽宁",value:[{name:"文科",value:39},{name:"理科",value:28}]},
          {name:"吉林",value:[{name:"文科",value:41},{name:"理科",value:41}]},
          {name:"黑龙江",value:[{name:"文科",value:35},{name:"理科",value:31}]},
          {name:"上海",value:[{name:"文科",value:12},{name:"理科",value:12}]},
          {name:"江苏",value:[{name:"文科",value:47},{name:"理科",value:45}]},
          {name:"浙江",value:[{name:"文科",value:57},{name:"理科",value:57}]},
          {name:"安徽",value:[{name:"文科",value:57},{name:"理科",value:52}]},
          {name:"福建",value:[{name:"文科",value:59},{name:"理科",value:57}]},
          {name:"江西",value:[{name:"文科",value:49},{name:"理科",value:42}]},
          {name:"山东",value:[{name:"文科",value:67},{name:"理科",value:52}]},
          {name:"河南",value:[{name:"文科",value:69},{name:"理科",value:68}]},
          {name:"湖北",value:[{name:"文科",value:60},{name:"理科",value:56}]},
          {name:"湖南",value:[{name:"文科",value:62},{name:"理科",value:52}]},
          {name:"重庆",value:[{name:"文科",value:47},{name:"理科",value:44}]},
          {name:"四川",value:[{name:"文科",value:65},{name:"理科",value:60}]},
          {name:"贵州",value:[{name:"文科",value:32},{name:"理科",value:30}]},
          {name:"云南",value:[{name:"文科",value:42},{name:"理科",value:41}]},
          {name:"西藏",value:[{name:"文科",value:5},{name:"理科",value:4}]},
          {name:"陕西",value:[{name:"文科",value:38},{name:"理科",value:42}]},
          {name:"甘肃",value:[{name:"文科",value:28},{name:"理科",value:28}]},
          {name:"青海",value:[{name:"文科",value:5},{name:"理科",value:5}]},
          {name:"宁夏",value:[{name:"文科",value:10},{name:"理科",value:8}]},
          {name:"新疆",value:[{name:"文科",value:36},{name:"理科",value:31}]},
          {name:"广东",value:[{name:"文科",value:63},{name:"理科",value:60}]},
          {name:"广西",value:[{name:"文科",value:29},{name:"理科",value:30}]},
          {name:"海南",value:[{name:"文科",value:8},{name:"理科",value:6}]},
        ];

        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        mapFeatures.forEach(function(v) {
          // 地区名称
          var name = v.properties.name;
          // 地区经纬度
          geoCoordMap[name] = v.properties.cp;

        });

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
          tooltip: {
            trigger: 'item',
            textStyle: config().textStyle,
            formatter: function(params) {
              if (typeof(params.value)[2] == "undefined") {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                  if(params.name==toolTipData[i].name){
                    toolTiphtml += toolTipData[i].name+':<br>'
                    for(var j = 0;j<toolTipData[i].value.length;j++){
                      toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                    }
                  }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
              } else {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                  if(params.name==toolTipData[i].name){
                    toolTiphtml += toolTipData[i].name+':<br>'
                    for(var j = 0;j<toolTipData[i].value.length;j++){
                      toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                    }
                  }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
              }
            }
          },

          visualMap: {
            show: true,
            min: 0,
            max: 200,
            left: '5%',
            bottom: '5%',
            itemHeight:100,
            text: ['高', '低'], // 文本，默认为数值文本
            textStyle: config().textStyle,
            calculable: true,
            seriesIndex: [1],
            inRange: {

              color: ['#00467F', '#A5CC82'] // 蓝绿


            }
          },

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
            //layoutSize: "500%",
            zoom:1.2,
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
                color: '#05C3F9'
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
              symbolSize: config().fontSize*3,
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
              name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
              }).slice(0, 5)),
              symbolSize: function(val) {
                return val[2] /4;
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

    .ind_val4 span{
      color: #D644E2;
    }
    .ind_val5 span{
      color: #2FBD57;
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
    .cen_title{
      height: 4vh;
      text-align: center;
      font-size: 2vh;
      color: #fff
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
      height: 3vh;
      font-size: 1.5vh;
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
    .wh_content_item .wh_isToday{
      background: transparent;
    }
    .wh_item_date:hover{
      background-color: transparent;
    }
    .wh_content_item .wh_chose_day{
      background: #FF808F;
    }
    .wh_content_all{
      background-color: transparent;
      padding-bottom: 0;
    }
    .en-box-item{
      height: 8vh;
      padding-top: 2vh;

      .en-box-label{
        font-size: 2vh;
        line-height: 2vh;
        color: #fff;
        margin-top: 2vh;
      }
      .en-box-val{
        color: #33E8BF;
        font-size: 5vh;
        font-weight: bold;
      }
      .en-box-val1{
        color: #24D349;
        font-size: 5vh;
        font-weight: bold;
      }
      .en-box-val2{
        color: #DFCC22;
        font-size: 5vh;
        font-weight: bold;
      }
      .en-box-val3{
        color: #D9793C;
        font-size: 5vh;
        font-weight: bold;
      }
      .en-box-val4{
        color: #D83D3B;
        font-size: 5vh;
        font-weight: bold;
      }
      .en-box-val5{
        color: #4D2324;
        font-size: 5vh;
        font-weight: bold;
      }
    }
    .wh-color1{
      background-color: #24D349;
      height: 1vh;
    }
    .wh-color2{
      background-color: #DFCC22;
      height: 1vh;
    }
    .wh-color3{
      background-color: #D9793C;
      height: 1vh;
    }
    .wh-color4{
      background-color: #D83D3B;
      height: 1vh;
    }
    .wh-color5{
      background-color: #4D2324;
      height: 1vh;
    }
    .forest_tit{
      font-size: 2vh;
      color: #fff;
      text-align: center;
      line-height: 9vh;
    }
    .forest_val{
      font-size: 2vh;
      color: #fff;
      text-align: center;
      line-height: 9vh;
      span:nth-child(1){
        font-size: 7vh;
      }
    }
    .forest_val1{
      span:nth-child(1),span:nth-child(2){
        color: #35FF1F;
      }
    }
    .forest_val2{
      span:nth-child(1),span:nth-child(2){
        color: #36C6EE;
      }
    }
  }
</style>
