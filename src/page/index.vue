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
            <div class = "fix_left h7">
              <div class = "chart_select">
                <div class = "t_sel">
                  <el-select size="mini" v-model="value">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div id = "chart_left1" class = "chart80"></div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "chart_title">
              <div class = "fl"><i class="fa fa-caret-left"></i></div>
              <div class = "_tit">季度经济指标</div>
              <div class = "fl"><i class="fa fa-caret-right"></i></div>
            </div>
            <div class = "fix_left h7">
              <div class = "chart_select">
                <el-row :gutter="20" style="margin-left: 20%">
                  <el-col :span="6">
                    <div class = "t_tl">
                      十二大重点产业增加值
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class = "t_tl">
                       城镇/农村居民可支配收入
                    </div>
                  </el-col>
                  <el-col :span="5">
                    <div class = "t_tl">
                        城镇新增就业人数
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div id = "chart_left2" class = "chart80"></div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "chart_title">
              <div class = "fl"><i class="fa fa-caret-left"></i></div>
              <div class = "_tit">先行指标</div>
              <div class = "fl"><i class="fa fa-caret-right"></i></div>
            </div>
            <div class = "fix_left h7">
              <div class = "chart_select">
                <el-row :gutter="10" style="margin-left: 21%">
                  <el-col :span="2">
                    <div class = "t_tl">
                      PMI
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class = "t_tl">
                      全行业用电量
                    </div>
                  </el-col>
                  <el-col :span="5">
                    <div class = "t_tl">
                      港口货运吞吐量
                    </div>
                  </el-col>
                  <el-col :span="5">
                    <div class = "t_tl">
                      新增银行贷款数
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div id = "chart_left3" class = "chart80"></div>
            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="10">
        <el-row>
          <el-col :span="24">
            <div class = "fix_center h12">
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
            <div class = "fix_center h10">
              <el-row>
                <el-col :span="24">
                  <div class = "center2_tit">宏观经济大数据指数</div>
                </el-col>
                <el-col :span="6">
                  <div class = "center_lis" style="margin-top: 6vh">
                    经济信心指数
                  </div>
                  <div class = "center_lis">就业压力指数</div>
                  <div class = "center_lis">双创热情指数</div>
                  <div class = "center_lis">投资意愿指数</div>
                  <div class = "center_lis">消费评价指数</div>
                </el-col>
                <el-col :span="18">
                  <div id = "chart_center2" class = "charts" style="height:31vh">
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
              <div class = "_tit">预期目标完成度</div>
              <div class = "fl"><i class="fa fa-caret-right"></i></div>
            </div>
            <div class = "fix_right h7">
              <div id = "chart_right1" class = "charts"></div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "chart_title">
              <div class = "fl"><i class="fa fa-caret-left"></i></div>
              <div class = "_tit">各市县GDP情况</div>
              <div class = "fl"><i class="fa fa-caret-right"></i></div>
            </div>
            <div class = "fix_right h7">
              <div id = "chart_right2" class = "charts"></div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "chart_title">
              <div class = "fl"><i class="fa fa-caret-left"></i></div>
              <div class = "_tit">各市县GDP及增速</div>
              <div class = "fl"><i class="fa fa-caret-right"></i></div>
            </div>
            <div class = "fix_right h7">
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
  import 'font-awesome/css/font-awesome.min.css';
  //import {config,xAxiss,yAxiss,grid,tooltip,dotHtml,legend} from '../../static/js/config/chartConfig.js';
  var echarts = require('echarts');
  import '../../static/js/map/china.js';
  import '../../static/js/map/hainan.js';
  import '../../static/js/map/jiangxi.js';
  export default {
    name:"index",
    components: {

    },
    data(){
      return{
        value:'选项1',
          options: [{
          value: '选项1',
          label: '地方一般公共预算收入'
        }, {
          value: '选项2',
          label: '地方一般公共预算收入'
        }, {
          value: '选项4',
          label: '地方一般公共预算收入'
        }, {
          value: '选项5',
          label: '地方一般公共预算收入'
        }, {
          value: '选项6',
          label: '地方一般公共预算收入'
        }, {
          value: '选项7',
          label: '地方一般公共预算收入'
        }],
      }
    },
    components: {
    },

    mounted () {
      this.chart_center1();
      this.chart_center2();
      this.chart_left1();
      this.chart_left2();
      this.chart_left3();
      this.chart_right1();
      this.chart_right2();
      this.chart_right3();
    },
    methods: {
      chart_left1(){
        var xData = ['2016Q1','2016Q2','2016Q3','2016Q4','2017Q1','2017Q2','2017Q3','2017Q4','2018Q1','2018Q2','2018Q3','2018Q4'];
        var data1 = [3000,6000,14000,21000,5000,9000,11000,23000,6000,12000,18000,26000];
        var data2 = [3.2,2.4,5.2,6.9,3.1,4.4,6.3,8.5,9.1,6.6,4.7,8.1];
        var data3 =  [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000]

        var chart_center1 = echarts.init(document.getElementById('chart_left1'));
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
                //rotate:45,//斜体字可不用
                textStyle: {
                  fontSize: '12',
                  color:'#fff'
                }
              },
            },
          ],
          yAxis : [
            {
              type : 'value',
              minInterval:100,//设置左侧Y轴最小刻度
              splitLine: {
                show: false,
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
              name:'',
              type:'bar',
              data:data1,
              barWidth:'30%',
              itemStyle: {
                //折线拐点标志的样式
                color: "#058cff",
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#f42b0d"
                  },
                    {
                      offset: 1,
                      color: "#b65b4e"
                    }
                  ])
                }
              }
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
              data: data2,
              zlevel: 11
            },
            {
              name: '背景',
              type: 'bar',
              barWidth: '50%',
              barGap: '-130%',
              data: data3,
              itemStyle: {
                normal: {
                  color: 'rgba(255,255,255,0.1)'
                }
              },
              zlevel: 9
            },
          ]
        };
        chart_center1.setOption(option)
        window.onresize = chart_center1.resize;
      },
      chart_left2(){
        var xData = ['2016Q1','2016Q2','2016Q3','2016Q4','2017Q1','2017Q2','2017Q3','2017Q4','2018Q1','2018Q2','2018Q3','2018Q4'];
        var data1 = [3000,6000,14000,21000,5000,9000,11000,23000,6000,12000,18000,26000];
        var data2 = [3.2,2.4,5.2,6.9,3.1,4.4,6.3,8.5,9.1,6.6,4.7,8.1];
        var data3 =  [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000]

        var chart_center1 = echarts.init(document.getElementById('chart_left2'));
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
                //rotate:45,//斜体字可不用
                textStyle: {
                  fontSize: '12',
                  color:'#fff'
                }
              },
            },
          ],
          yAxis : [
            {
              type : 'value',
              minInterval:100,//设置左侧Y轴最小刻度
              splitLine: {
                show: false,
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
              name:'',
              type:'bar',
              data:data1,
              barWidth:'30%',
              itemStyle: {
                //折线拐点标志的样式
                color: "#058cff",
                normal: {
                  barBorderRadius: 20,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#baff00"
                  },
                    {
                      offset: 1,
                      color: "#1de40e"
                    }
                  ])
                }
              }
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
                color: "#fff"
              },
              lineStyle: {
                color: "#ff1900"
              },
              data: data2,
              zlevel: 11
            }
          ]
        };
        chart_center1.setOption(option)
        window.onresize = chart_center1.resize;
      },
      chart_left3(){
        var xData = ['2016Q1','2016Q2','2016Q3','2016Q4','2017Q1','2017Q2','2017Q3','2017Q4','2018Q1','2018Q2','2018Q3','2018Q4'];
        var data1 = [3.2,2.4,5.2,6.9,3.1,4.4,6.3,8.5,9.1,6.6,4.7,8.1];

        var chart_center1 = echarts.init(document.getElementById('chart_left3'));
        var option = {
          tooltip: {
            trigger: 'axis',

            formatter: function (params) {
              return '金额' + ': ' + '<span style="color: yellow;">' + params[0].value + '</span>';
            }
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
              show: true,
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
              showMinLabel: true,
              textStyle: {
                fontSize: '16',
                color:'#fff'
              }
            }
          },
          yAxis:   {
            type : 'value',
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
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-80%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
              normal: {
                //barBorderRadius: 5,
                //渐变色
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#00ddff'},
                    {offset: 1, color: '#0091ff'}
                  ]
                )
              }


            },
            data: data1,
            z: 10
          }]
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
       },
      chart_center2(){
        var xData = ['2016Q1','2016Q2','2016Q3','2016Q4','2017Q1','2017Q2','2017Q3','2017Q4','2018Q1','2018Q2','2018Q3','2018Q4'];
        var data1 = [4.2,5.4,3.2,4.9,7.3,1.4,3.3,2.5,7.1,5.6,1.7,11.1];
        var data2 = [3.2,2.4,5.2,6.9,3.1,4.4,6.3,8.5,9.1,6.6,4.7,8.1];

        var chart_center1 = echarts.init(document.getElementById('chart_center2'));
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: '#57617B'
              }
            }
          },
          legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['海南', '全国',],
            right: '4%',
            textStyle: {
              fontSize: 12,
              color: '#ccc'
            }
          },
          grid: {
            left: '3%',
            right: '3%',
            bottom: '4%',
            top:"10%",
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color:'#fff',
                fontSize: 16
              }
            },
            axisLine: {
              lineStyle: {
                color: '#DDD'
              }
            },
            data: xData
          }],
          yAxis: [{
            type: 'value',
            //name: '单位（%）',
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#DDD'
              }
            },
            axisLabel: {
              margin: 15,
              textStyle: {
                color:'#fff',
                fontSize: 16
              }
            },
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: '#91acb1'
              }
            }
          }],
          series: [{
            name: '海南',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 3
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgba(16,97,204, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(17,235,210, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {

                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgba(16,97,204,1)'
                }, {
                  offset: 1,
                  color: 'rgba(17,235,210,1)'
                }])
              },
              emphasis: {
                color: 'rgb(0,196,132)',
                borderColor: 'rgba(0,196,132,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10,

              },
            },
            data: data1
          }, {
            name: '全国',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 3
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(205,52,42, 0.5)'
                }, {
                  offset: 0.8,
                  color: 'rgba(235,235,21, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              },
            },
            itemStyle: {
              normal: {

                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgba(205,52,42,1)'
                }, {
                  offset: 1,
                  color: 'rgba(235,235,21,1)'
                }])
              },
              emphasis: {
                color: 'rgb(99,250,235)',
                borderColor: 'rgba(99,250,235,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
              }
            },
            data: data2
          }  ]
        };
        chart_center1.setOption(option)
        window.onresize = chart_center1.resize;
      },
      chart_right1(){
        var title = {
          show: true,
          offsetCenter: [0, "95%"], //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
          // 文字的颜色,默认 #333。
          color:"#fff",
          fontSize: 16,
        };
        var axisLine = {
          show: true,
          lineStyle: {
            width: 10,
            shadowBlur: 0,
            color: [
              [0.3, '#FF5E69'],
              [0.7, '#ffba00'],
              [1, '#37a2da']
            ]
          }
        };
        var detail = {
          fontSize: 16,
          formatter: '{value}%'
        }
        var axisLabel = { // 刻度标签。
          show: true, // 是否显示标签,默认 true。
          formatter:function (v) {
            if(v == 0 || v == 50 || v == 100){
              return v;
            }else{
              return '';
            }
          }
        };
        var chart_center1 = echarts.init(document.getElementById('chart_right1'));
        var option = {
          series: [{
            type: 'gauge',
            radius: '38%',
            center: ['14%', '27%'],
            detail:detail ,
            title: title,
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
              name: 'GDP',
            }]
          },
            {
              type: 'gauge',
              radius: '38%',
              center: ['14%', '75%'],
              detail:detail ,
              title: title,
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
                name: '城镇居民可支配收入',
              }]
            },
            {
              type: 'gauge',
              radius: '38%',
              center: ['38%', '27%'],
              detail:detail ,
              title: title,
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
                name: '全社会固定资产投资',
              }]
            },
            {
              type: 'gauge',
              radius: '38%',
              center: ['38%', '75%'],
              detail:detail ,
              title: title,
              axisTick: {
                show:true,
                splitNumber: 1,
              },
              pointer: {
                width: 3
              },
              axisLabel: axisLabel,
              splitLine: {
                length: 10,
                lineStyle: {
                  color: 'auto'
                }
              },
              axisLine: axisLine,
              data: [{
                value: 67,
                name: '农村居民可支配收入',
              }]
            },
            {
              type: 'gauge',
              radius: '38%',
              center: ['62%', '27%'],
              detail:detail ,
              title: title,
              axisTick: {
                show:true,
                splitNumber: 1,
              },
              pointer: {
                width: 3
              },
              axisLabel: axisLabel,
              splitLine: {
                length: 10,
                lineStyle: {
                  color: 'auto'
                }
              },
              axisLine: axisLine,
              data: [{
                value: 67,
                name: '社会零售品销售总额',
              }]
            },
            {
              type: 'gauge',
              radius: '38%',
              center: ['62%', '75%'],
              detail:detail ,
              title: title,
              axisTick: {
                show:true,
                splitNumber: 1,
              },
              pointer: {
                width: 3
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
                name: '城镇新增就业',
              }]
            },
            {
              type: 'gauge',
              radius: '38%',
              center: ['86%', '27%'],
              detail:detail ,
              title: title,
              axisTick: {
                show:true,
                splitNumber: 1,
              },
              pointer: {
                width: 3
              },
              axisLabel: axisLabel,
              splitLine: {
                length: 10,
                lineStyle: {
                  color: 'auto'
                }
              },
              axisLine: axisLine,
              data: [{
                value: 67,
                name: '地方一般公共预算收入',
              }]
            },
            {
              type: 'gauge',
              radius: '38%',
              center: ['86%', '75%'],
              detail:detail ,
              title: title,
              axisTick: {
                show:true,
                splitNumber: 1,
              },
              pointer: {
                width: 3
              },
              axisLabel: axisLabel,
              splitLine: {
                length: 10,
                lineStyle: {
                  color: 'auto'
                }
              },
              axisLine: axisLine,
              data: [{
                value: 67,
                name: 'CPI',
              }]
            }]
        };
        chart_center1.setOption(option)
        window.onresize = chart_center1.resize;
      },
      chart_right21(){

        var chart_center1 = echarts.init(document.getElementById('chart_right2'));
        var mapData = [{"name":"河北"},{"name":"山西"},{"name":"内蒙古"},{"name":"辽宁"},{"name":"吉林"},{"name":"黑龙江"},{"name":"江苏"},{"name":"浙江"},{"name":"安徽"},{"name":"福建"},{"name":"江西"},{"name":"山东"},{"name":"河南"},{"name":"湖北"},{"name":"湖南"},{"name":"广东"},{"name":"广西"},{"name":"海南"},{"name":"四川"},{"name":"贵州"},{"name":"云南"},{"name":"西藏"},{"name":"陕西"},{"name":"甘肃"},{"name":"青海"},{"name":"宁夏"},{"name":"新疆"},{"name":"北京"},{"name":"天津"},{"name":"上海"},{"name":"重庆"}];

        var option = {
          tooltip: {
            show: true,
            formatter: function(params) {
              if (params.data) {
                return `${params.name}(<span style="font-size:10px;">持有设备量:${params.data.devicesCount}</span>)</br>${params.marker}使用总数：${params.data.value}</br>${params.marker}活跃度：${params.data.devicesUseLv}`
              } else {
                return;
              }
            }
          },

          // geo: {
          //   roam: true,
          //   map: "china",
          //   layoutCenter: ["50%", "50%"],
          //   layoutSize: "100%",
          //   label: {
          //     emphasis: {
          //       show: false
          //     }
          //   },
          //   scaleLimit: {
          //     min: 1.2,
          //     max: 10,
          //   },
          //   itemStyle: {
          //     emphasis: {
          //       areaColor: "#fff464"
          //     }
          //   },
          //
          // },
          series: [{
            name: 'china',
            type: 'map',
            mapType: 'china',
            roam: false,
            nameMap: {
              'china': '中国'
            },
            // left: 'left',
            // top: 'top',
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: '#999',
                  fontSize: 13
                }
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: '#fff',
                  fontSize: 13
                }
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#323c48',
                borderColor: 'dodgerblue',
                borderWidth: 2,
                shadowColor: 'rgba(63, 218, 255, 0.5)',
                shadowBlur: 20
              },
              emphasis: {
                areaColor: 'darkorange'
              }
            },
            data: mapData
          }]
        }
        chart_center1.setOption(option)
        window.onresize = chart_center1.resize;
      },
      chart_right2(){

        var chart_center1 = echarts.init(document.getElementById('chart_right2'));
        var d0 = [{"name":"省委","value":190},{"name":"合肥市","value":190},
          {"name":"六安市","value":190},{"name":"滁州市","value":190},
          {"name":"蚌埠市","value":190},{"name":"淮南市","value":90},
          {"name":"宿州市","value":120},{"name":"淮北市","value":120},
          {"name":"亳州市","value":120},{"name":"阜阳市","value":120},
          {"name":"安庆市","value":190},{"name":"池州市","value":190},
          {"name":"黄山市","value":190},{"name":"宣城市","value":190},
          {"name":"芜湖市","value":190},{"name":"马鞍山市","value":190},
          {"name":"铜陵市","value":90}];
        var d1 = [{"name":"省委","value":[117.37,31.786,190]},
          {"name":"合肥市","value":[117.37,31.386,190]},
          {"name":"六安市","value":[116.27,31.786,190]},
          {"name":"滁州市","value":[118.07,32.486,190]},
          {"name":"蚌埠市","value":[117.27,33.086,190]},
          {"name":"淮南市","value":[116.67,32.786,90]},
          {"name":"宿州市","value":[117.77,33.486,120]},
          {"name":"淮北市","value":[116.67,33.686,120]},
          {"name":"亳州市","value":[116.27,33.386,120]},
          {"name":"阜阳市","value":[115.57,32.986,120]},
          {"name":"安庆市","value":[116.47,30.486,190]},
          {"name":"池州市","value":[117.47,30.386,190]},
          {"name":"黄山市","value":[118.17,29.886,190]},
          {"name":"宣城市","value":[119.27,30.916,190]},
          {"name":"芜湖市","value":[118.17,31.186,190]},
          {"name":"马鞍山市","value":[118.47,31.616,190]},
          {"name":"铜陵市","value":[117.87,30.956,90]}];
        var d2 = [{"name":"省委","value":[117.37,31.786,190]},
          {"name":"合肥市","value":[117.37,31.386,190]},
          {"name":"六安市","value":[116.27,31.786,190]},
          {"name":"滁州市","value":[118.07,32.486,190]},
          {"name":"蚌埠市","value":[117.27,33.086,190]}];
        var  option = option = {
          backgroundColor: '#091c3d',
          title: {
            top:20,
            text: '',
            subtext: '',
            x: 'center',
            textStyle: {
              color: '#ccc'
            }
          },

          tooltip: {
            trigger: 'item',
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
            textStyle: {
              color: '#fff'
            }
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
          // toolbox: {
          //     show: true,
          //     orient: 'vertical',
          //     left: 'right',
          //     top: 'center',
          //     feature: {
          //             dataView: {readOnly: false},
          //             restore: {},
          //             saveAsImage: {}
          //             }
          // },
          geo: {
            show: true,
            map: 'jiangxi',
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
            {
              name: 'light',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: d1,
              symbolSize: function (val) {
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
                  color: '#F4E925'
                }
              }
            },
            {
              type: 'map',
              map: 'jiangxi',
              geoIndex: 0,
              aspectScale: 0.75, //长宽比
              showLegendSymbol: false, // 存在legend时显示
              label: {
                normal: {
                  show: false
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
                  borderColor: '#FFFFFF',
                },
                emphasis: {
                  areaColor: '#2B91B7'
                }
              },
              animation: false,
              data: d0
            },
            {
              name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: d2,
              symbolSize: function (val) {
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
                  color: '#F4E925',
                  shadowBlur: 10,
                  shadowColor: '#05C3F9'
                }
              },
              zlevel: 1
            }

          ]
        };
        chart_center1.setOption(option)
        window.onresize = chart_center1.resize;
      },
      chart_right3(){
        var tData = ['2016Q1','2016Q2','2016Q3','2016Q4','2017Q1','2017Q2','2017Q3','2017Q4','2018Q1','2018Q2','2018Q3','2018Q4'];
        var xData = [1,2,3,4,5,6];
        var data1 = [[2,3,4,5,8,9],
          [12,34,12,21,5,19],
          [1,6,9,9,13,21],
          [1,2,3,4,5,6],
          [77,88,54,37,87,90],
          [3,4,5,7,1,6],
          [3,87,12,3,4,45],
          [2,45,12,31,24,11],
          [11,22,33,44,55,66],
          [21,22,23,25,12,45],
          [5,4,12,56,3,22,45],
          [99,78,33,24,25,56]];

        var opt = []
        for(var i = 0;i<=tData.length;i++){
          var tmp = {
            title: {
              text: tData[i],
              textStyle: {
                color: "#fff" ,//X轴文字颜色
                fontSize: 18
              }
            },
            series: [{
              name: '上客量',
              type: 'bar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0, [{
                      offset: 0,
                      color: '#ff3000'
                    }, {
                      offset: 1,
                      color: '#ffba00'
                    }]
                  ),
                  barBorderRadius: 20
                },
                emphasis: {
                  color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0, [{
                      offset: 0,
                      color: '#2af598'
                    }, {
                      offset: 1,
                      color: '#009efd'
                    }]
                  ),
                  barBorderRadius: 4
                }
              },
              barWidth:'30%',
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  formatter: '{c}'
                }
              },
              data: data1[i]
            },
              {
                name: "销售水量",
                type: "line",
                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                symbolSize: 10, //标记的大小
                itemStyle: {
                  //折线拐点标志的样式
                  color: "#00d6ff"
                },
                lineStyle: {
                  color: "#0091ff"
                },
                data: data1[i],
                zlevel: 11
              }
            ]
          };
          opt.push(tmp)
        }

        var chart_center1 = echarts.init(document.getElementById('chart_right3'));
        var option = {
          baseOption: {
            timeline: {
              axisType: 'category',
              autoPlay: true,
              symbolSize: 12,
              playInterval: 2000,
              data: tData,
              label: {
                normal: {
                  color: '#fff',
                  fontSize: 16,
                },
                emphasis : {
                  itemStyle : {
                    color: '#fff',
                    fontSize: 16,
                  }
                },
              },
              lineStyle: {
                width: 4,
                color : '#2288fc',
              },
              itemStyle : {
                color : '#2288fc',
              },
              checkpointStyle: {
                color : '#2288fc',
                borderColor: 'rgna(0,0,0,0)',
                symbolSize: 16,
              },
            },
            calculable: true,
            grid: {
              top: '10%',
              bottom: '17%',
              left:'3%',
              right:'3%',
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                  label: {
                    show: true,
                    formatter: function(params) {
                      return params.value.replace('\n', '');
                    }
                  }
                }
              }
            },
            xAxis: [{
              'type': 'category',
              'axisLabel': {
                'interval': 0
              },
              data: xData,
              axisLine: {
                show: true //隐藏X轴轴线
              },
              axisTick: {
                show: true //隐藏X轴刻度
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#fff", //X轴文字颜色
                  fontSize: 16
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#fff'
                }
              },
            }],
            yAxis: [{
              type: 'value',
              //name: 'GDP（亿元）',
              axisLine: {
                show: false //隐藏X轴轴线
              },
              axisTick: {
                show: false //隐藏X轴刻度
              },
              axisLabel: {
                show: false
              },
              axisLine: {
                show: false
              },
              splitLine: {
                show: false
              }
            },
              {
                type: 'value',
                //name: 'GDP（亿元）',
                axisLine: {
                  show: false //隐藏X轴轴线
                },
                axisTick: {
                  show: false //隐藏X轴刻度
                },
                axisLabel: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: false
                }
              }],
            series: [
              {
                name: '',
                type: 'bar'
              },
              {
                name: '',
                type: 'line'
              }
            ]
          },

          options: opt
        };
        chart_center1.setOption(option)
        window.onresize = chart_center1.resize;
      },
    }
  }
</script>
<style lang="scss" scoped>
  #index{
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
  }
</style>
