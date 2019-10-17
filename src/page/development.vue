<template>
  <div id="index">
    <div class = "chart_main">
      <el-row>
        <el-col :span="24">
          <div>
            <el-row>
            <el-col :span="6">
              <div class = "fix_left h14">
                <div class = "h1 _tit2"><h4>省市参与度</h4></div>
                <div id = "top_chart1" class = "h8"></div>
                <div class = "h1 _tit2"><h4>海南一带一路参与度</h4></div>
                <div class = "h3">
                  <el-row>
                    <el-col :span="4">
                    <div class = "top_t1">
                      <p>全国</p><p>最高值</p>
                    </div>
                  </el-col>
                    <el-col :span="8">
                      <div class = "top_v1 vc1">
                        <span>84</span>
                        <span>.39</span>
                      </div>
                    </el-col>
                    <el-col :span="4">
                        <div class = "top_t1">
                          <p>海南</p><p>当前值</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                      <div class = "top_v1 vc2">
                        <span>52</span>
                        <span>.25</span>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class = "fix_center h14">
                <div class = "h1 _tit2"><h4>一带一路参与度</h4></div>
                <div id = "top_chart2" class = "h12"></div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class = "fix_right h14">
                <div class = "h7">
                  <div class = "h1 _tit2"><h4>国家排名</h4></div>
                  <div class = "h6" style="padding: 0 1vh">
                    <div class="tltleBox" style="z-index: 9999;margin-top: 1vh;"><span>排名</span><span>名称</span><span>进出口额（万元）</span></div>
                    <div  style="height: 51vh;overflow: hidden; position:relative">
                      <div>
                        <vueSeamlessScroll :data="tableData" :class-option="defaultOption" autoshow="true">
                          <div class="textBox" v-for="(item,index) in tableData" :class="{'active':index%2 != 1}" :key="index" ><span>{{item.num}}</span><span>{{item.name}}</span><span>{{item.qty}}</span></div>
                        </vueSeamlessScroll>
                      </div>
                    </div>
                  </div>
                </div>
                <div class = "h7">
                  <div class = "h1">
                      <el-row>
                        <el-col :span="16">
                          <div class = "_tit2">
                            <h4>进出口总额及增速</h4>
                          </div>
                        </el-col>
                        <el-col :span="8">
                          <div class="in_out">
                            进口
                          </div>
                          <div class="in_out">
                            出口
                          </div>
                        </el-col>
                      </el-row>
                  </div>
                  <div id = "top_chart3" class = "h6"></div>
                </div>
              </div>
            </el-col>
          </el-row>
          </div>
        </el-col>
        <el-col :span="24">
          <div class = "dev_center h8">
            <el-row>
            <el-col :span="6">
                <div class = "h1 _tit2"><h4>关注领域分布</h4></div>
                <div id = "bottom_chart1" class = "h7"></div>
            </el-col>
            <el-col :span="6">
                  <div class = "h1 _tit2"><h4>期待合作国家</h4></div>
                  <div id = "bottom_chart2" class = "h7">
                    <div  style="overflow: hidden; position:relative;margin-top: 2vh">
                      <div>
                        <vueSeamlessScroll :data="tableData2" :class-option="defaultOption" autoshow="true">
                          <div class="textBox" v-for="(item,index) in tableData2" :class="{'active':index%2 != 1}" :key="index" >
                            <span>{{item.num1}}</span>
                            <span><div :class="item.cla1" class = "countrys"></div></span>
                            <span>{{item.country1}}</span>
                            <span>{{item.num2}}</span>
                            <span><div :class="item.cla2" class = "countrys"></div></span>
                            <span>{{item.country2}}</span>
                          </div>
                        </vueSeamlessScroll>
                      </div>
                    </div>
                  </div>
            </el-col>
              <el-col :span="6">
                  <div class = "h1 _tit2"><h4>实际利用外资（新设项目数）</h4></div>
                  <div id = "bottom_chart3" class = "h7">

                  </div>
              </el-col>
            <el-col :span="6">
                  <div class = "h1 _tit2"><h4>实际利用外资（总额）</h4></div>
                  <div id = "bottom_chart4" class = "h7"></div>
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
  import {config} from '../../static/js/config/chartConfig.js';
  import '../../static/js/map/world.js';
  export default {
    name:"index",
    components: {

    },
    data(){
      return{
        tableData:[{num:'No.1',name:'美国',qty:1121343},
          {num:'No.2',name:'东盟',qty:918811},
          {num:'No.3',name:'欧盟',qty:608929},
          {num:'No.4',name:'中东',qty:325764},
          {num:'No.5',name:'日本',qty:80360}],
        tableData2:[{num1:1,cla1:'cou1',country1:'俄罗斯',num2:6,cla2:'cou6',country2:'越南'},
          {num1:2,cla1:'cou2',country1:'新加坡',num2:7,cla2:'cou7',country2:'哈萨克斯坦'},
          {num1:3,cla1:'cou3',country1:'印度',num2:8,cla2:'cou8',country2:'巴基斯坦'},
          {num1:4,cla1:'cou4',country1:'泰国',num2:9,cla2:'cou9',country2:'菲律宾'},
          {num1:5,cla1:'cou5',country1:'马来西亚',num2:10,cla2:'cou10',country2:'柬埔寨'}],
      }
    },
    components: {
    },
    created () {
    },
    beforeDestroy() {

    },
    mounted () {
      this.top_chart1();
      this.top_chart2();
      this.top_chart3();
      this.bottom_chart1();
      this.bottom_chart3();
      this.bottom_chart4();
    },
    methods: {
      top_chart1(){
        var top_chart = echarts.init(document.getElementById('top_chart1'));
        var option = {
          color: ['#ff0077', '#001eff', '#ffff00'],//数据蛛网线条的颜色，示例中为红黄绿
          legend: { //图例的设置
            show: true, //是否显示图例
            //icon: 'circle',//图例形状，示例为原型
            top: '3%',//图例离底部的距离
            right:"5%",
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: 20, // 图例每项之间的间隔。
            textStyle: config().textStyle,
            data: ['海南', '福建', '广东'],//图例的名称数据
          },
          radar: [{//每个网格的指数名称，类似于X轴或Y轴上的数据的值大小
            indicator: [{
              text: '政策评价',
              max: 100
            },
              {
                text: '综合影响',
                max: 100
              },
              {
                text: '设施配套',
                max: 100
              },
              {
                text: '人文交流',
                max: 100
              },
              {
                text: '经贸合作',
                max: 100
              }
            ],
            center: ['50%', '58%'],//统计图位置，示例是居中
            radius: '65%',//统计图大小
            startAngle: 90,//统计图起始的角度
            splitNumber: 3,//统计图蛛网的网格分段，示例分为三段
            // shape: 'circle',//蛛网是圆角还是尖角
            name: {
              formatter: '{value}',//蛛网轴尖的数据名称
              textStyle: config().textStyle,
            },
            splitArea: { // 蛛网在 grid 区域中的分隔区域，默认不显示。
              show: true,
              areaStyle: { // 分隔区域的样式设置。
                color: ['rgba(76, 140, 200, 0.05)', 'rgba(76, 140, 200, 0.1)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
              }
            },
            axisLine: { //蛛网轴线上的颜色，由内向外发散的那条
              lineStyle: {
                color: '#153269'
              }
            },
            splitLine: {//蛛网环形的线条颜色
              lineStyle: {
                color: '#113865', // 分隔线颜色
                width: 1, // 分隔线线宽
              }
            }
          }, ],
          series: [{
            name: '',
            center: ['50%','80%'],
            type: 'radar',//统计图专业名称为雷达图，这里叫做蛛网图
            itemStyle: {//数据样式设置
              emphasis: {//鼠标悬浮效果
                lineStyle: {
                  width: 4//线条粗细变成4
                }
              }
            },
            data: [{
              name: '海南',//数据名称
              value: [85, 65, 55, 90, 82],
              areaStyle: {
                normal: { // 单项区域填充样式
                  color: {
                    x: 0, //右
                    y: 0, //下
                    x2: 1, //左
                    y2: 1, //上
                    colorStops: [{
                      offset: 0,
                      color: 'rgba(228,52,70,0.5)'
                    }, {
                      offset: 0.5,
                      color: 'rgba(0,0,0,0)'
                    }, {
                      offset: 1,
                      color: 'rgba(228,52,70,0.5)'
                    }],
                  },
                  opacity: 1 // 区域透明度
                }
              },
              symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
              label: { // 单个拐点文本的样式设置
                normal: { // 单个拐点文本的样式设置。[ default: false ]
                  position: 'top', // 标签的位置。[ default: top ]
                  distance: 4, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                  color: '#ccc', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                  fontSize: config().fontSize, // 文字的字体大小
                },
                emphasis: {
                  show: true,
                  formatter: '{c}'//显示分析的数字值，a为统计图名称，b为学生姓名,c为学生这项能力的值
                }
              },
              itemStyle: {
                normal: { //图形悬浮效果
                  borderColor: '#ccc',//单个数据标记描边的颜色
                  borderWidth: 2.5//单个数据标记描边的大小
                }
              },
            }, {
              name: '福建',
              value: [50, 20, 45, 30, 75],
              symbolSize: 2.5,
              itemStyle: {
                normal: {
                  borderColor: '#ccc',
                  borderWidth: 2.5,
                }
              },
              areaStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: 'rgba(235,192,23,0.5)'
                    }, {
                      offset: 0.5,
                      color: 'rgba(0,0,0,0)'
                    }, {
                      offset: 1,
                      color: 'rgba(235,192,23,0.5)'
                    }],
                  },
                  opacity: 1
                }
              },
              label: {
                normal: {
                  position: 'top',
                  distance: 4,
                  color: '#ccc',
                  fontSize: config().fontSize,
                },
                emphasis: {
                  show: true,
                  formatter: '{c}'
                }
              },
            }, {
              name: '广东',
              value: [37, 80, 12, 50, 25],
              symbolSize: 2.5,
              itemStyle: {
                normal: {
                  borderColor: '#ccc',
                  borderWidth: 2.5,
                }
              },
              areaStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: 'rgba(67,199,152,0.5)'
                    }, {
                      offset: 0.5,
                      color: 'rgba(0,0,0,0)'
                    }, {
                      offset: 1,
                      color: 'rgba(67,199,152,0.5)'
                    }],
                    globalCoord: false
                  },
                  opacity: 1
                }
              },
              label: {
                normal: {
                  position: 'top',
                  distance: 4,
                  color: '#ccc',
                  fontSize: config().fontSize,
                },
                emphasis: {
                  show: true,
                  formatter: '{c}'
                }
              },
            }]
          }, ]
        };
        top_chart.setOption(option)
        window.onresize = top_chart.resize;
      },
      top_chart2(){
        var top_chart = echarts.init(document.getElementById('top_chart2'));
        var geoCoordMap = {
          '上海': [121.4648, 31.2891],
          '尼日利亚': [-4.388361, 11.186148],
          '美国洛杉矶': [-118.24311, 34.052713],
          '香港邦泰': [114.195466, 22.282751],
          '美国芝加哥': [-87.801833, 41.870975],
          '加纳库马西': [-4.62829, 7.72415],
          '英国曼彻斯特': [-1.657222, 51.886863],
          '德国汉堡': [10.01959, 54.38474],
          '哈萨克斯坦阿拉木图': [45.326912, 41.101891],
          '俄罗斯伊尔库茨克': [89.116876, 67.757906],
          '巴西': [-48.678945, -10.493623],
          '埃及达米埃塔': [31.815593, 31.418032],
          '西班牙巴塞罗纳': [2.175129, 41.385064],
          '柬埔寨金边': [104.88659, 11.545469],
          '意大利米兰': [9.189948, 45.46623],
          '乌拉圭蒙得维的亚': [-56.162231, -34.901113],
          '莫桑比克马普托': [32.608571, -25.893473],
          '阿尔及利亚阿尔及尔': [3.054275, 36.753027],
          '阿联酋迪拜': [55.269441, 25.204514],
          '匈牙利布达佩斯': [17.108519, 48.179162],
          '澳大利亚悉尼': [150.993137, -33.675509],
          '美国加州': [-121.910642, 41.38028],
          '澳大利亚墨尔本': [144.999416, -37.781726],
          '墨西哥': [-99.094092, 19.365711],
          '加拿大温哥华': [-123.023921, 49.311753]
        };
        var BJData = [
          [{
            name: '尼日利亚',
            value: 9100
          }, {
            name: '上海'
          }],
          [{
            name: '美国洛杉矶',
            value: 2370
          }, {
            name: '上海'
          }],
          [{
            name: '香港邦泰',
            value: 3130
          }, {
            name: '上海'
          }],
          [{
            name: '美国芝加哥',
            value: 2350
          }, {
            name: '上海'
          }],
          [{
            name: '加纳库马西',
            value: 5120
          }, {
            name: '上海'
          }],
          [{
            name: '英国曼彻斯特',
            value: 3110
          }, {
            name: '上海'
          }],
          [{
            name: '德国汉堡',
            value: 6280
          }, {
            name: '上海'
          }],
          [{
            name: '哈萨克斯坦阿拉木图',
            value: 7255
          }, {
            name: '上海'
          }],
          [{
            name: '俄罗斯伊尔库茨克',
            value: 8125
          }, {
            name: '上海'
          }],
          [{
            name: '巴西',
            value: 13590
          }, {
            name: '上海'
          }],
          [{
            name: '埃及达米埃塔',
            value: 3590
          }, {
            name: '上海'
          }],
          [{
            name: '西班牙巴塞罗纳',
            value: 3590
          }, {
            name: '上海'
          }],
          [{
            name: '柬埔寨金边',
            value: 3590
          }, {
            name: '上海'
          }]
        ];
        var convertData = function(data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
              res.push([{
                coord: fromCoord,
                value: dataItem[0].value,
                fromName: dataItem[1].name,
                toName: dataItem[0].name,
              }, {
                coord: toCoord,
                value: dataItem[0].value,
                fromName: dataItem[1].name,
                toName: dataItem[0].name,
              }]);
            }
          }
          return res;
        };

        var color = ['#fff', '#ffa022', '#46bee9'];
        var series = [];
        [
          ['上海', BJData]
        ].forEach(function(item, i) {
          console.log(item)
          series.push(
            {
              name: item[0],
              type: 'lines',
              zlevel: 1,
              effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'image://',
                symbolSize: 15
              },
              label: {
                emphasis: {
                  show: true,
                }
              },
              lineStyle: {
                normal: {
                  color: color[i],
                  width: 2,
                  opacity: 0.8,
                  curveness: 0.2
                },
                emphasis:{
                  color: color[i],
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                  shadowBlur: 10,
                  width: 3
                }
              },
              data: convertData(item[1])
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: { //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 4, //波纹圆环最大限制，值越大波纹越大
                trailLength: 0,
              },
              label: {
                normal: {
                  show: true,
                  position: 'right', //显示位置
                  offset: [5, 0], //偏移设置
                  formatter: '{b}' //圆环显示文字
                },
                emphasis: {
                  show: true
                }
              },
              symbol: 'circle',
              symbolSize: function(val) {
                console.log(val)
                return 4 + val[2] / 1000; //圆环大小
              },
              itemStyle: {
                normal: {
                  show: false,
                  textStyle:config().textStyle,
                }
              },
              data: item[1].map(function(dataItem) {
                return {
                  name: dataItem[0].name,
                  value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
              }),
            },
            //被攻击点
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4
              },
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  //offset:[5, 0],
                  color: '#00ffff',
                  formatter: '{b}',
                  textStyle: {
                    color: "#00ffff"
                  }
                },
                emphasis: {
                  show: true
                }
              },
              symbol: 'pin',
              symbolSize: 30,
              itemStyle: {
                normal: {
                  show: true,
                  color: '#9966cc'
                }
              },
              data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([100]),
              }],
            }
          );
        });

        var option = {
          tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(12, 204, 104, 0.92)',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function(params, ticket, callback) {
              //根据业务自己拓展要显示的内容
              console.log(params)
              var res = "";
              var name = params.data.toName;
              var fname = params.data.fromName;
              var value = params.value;
              res = "<span style='color:#fff;'>" + name+'>'+ fname + "</span><br/>数据：" + value;
              return res;
            }
          },
          visualMap: { //图例值控制
            show:false,
            min: 0,
            max: 10000,
            calculable: true,
            color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            map: 'world',
            label: {
              emphasis: {
                show: false
              }
            },
            roam: true, //是否允许缩放
            layoutCenter: ['50%', '50%'], //地图位置
            layoutSize: "200%",
            itemStyle: {
              normal: {
                color: 'rgba(51, 69, 89, .5)', //地图背景色
                borderColor: 'rgba(100,149,237,1)' //省市边界线
              },
              emphasis: {
                color: 'rgba(37, 43, 61, .5)' //悬浮背景
              }
            }
          },

          series: series
        };


        top_chart.setOption(option)
    window.onresize = top_chart.resize;
  },
      top_chart3(){
        var xData = ['2016Q1','2016Q2','2016Q3','2016Q4','2017Q1','2017Q2','2017Q3','2017Q4','2018Q1','2018Q2','2018Q3','2018Q4'];
        var data1 = [3000,6000,14000,21000,5000,9000,11000,23000,6000,12000,18000,26000];
        var data2 = [3.2,2.4,5.2,6.9,3.1,4.4,6.3,8.5,9.1,6.6,4.7,8.1];

        var top_chart  = echarts.init(document.getElementById('top_chart3'));
        var option = {
          color: ["#ed9d3c",'#4fd7fd'],
          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            top:'10%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : xData ,
              axisLabel: {
                //rotate:45,//斜体字可不用
                textStyle: config().textStyle
              },
            },
          ],
          yAxis : [
            {
              type : 'value',
              minInterval:100,//设置左侧Y轴最小刻度
              splitLine: {
                show: true,
                lineStyle: {
                  type: 'solid',
                  width:2,
                  color: '#8b8b8e'
                }
              },//设置横线样式
              axisLabel: {
                textStyle: config().textStyle
              },
            },
            {
              type: "value",
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
                textStyle: config().textStyle
              },
            }
          ],
          series : [
            {
              name:'',
              type:'bar',
              data:data1,
              //barWidth:'30%',
              itemStyle: {
                //折线拐点标志的样式
                normal: {
                  color: '#FF2385'
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
            }
          ]
        };
        top_chart.setOption(option)
        window.onresize = top_chart.resize;
      },
      bottom_chart1(){
        var xData = ['2016Q1','2016Q2','2016Q3','2016Q4','2017Q1','2017Q2','2017Q3','2017Q4','2018Q1','2018Q2','2018Q3','2018Q4'];
        var data1 = [3000,6000,14000,21000,5000,9000,11000,23000,6000,12000,18000,26000];
        var data2 = [3.2,2.4,5.2,6.9,3.1,4.4,6.3,8.5,9.1,6.6,4.7,8.1];

        var top_chart  = echarts.init(document.getElementById('bottom_chart1'));
        var option = {
          color: ["#ed9d3c",'#4fd7fd'],
          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '4%',
            top:'10%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : xData ,
              axisLabel: {
                //rotate:45,//斜体字可不用
                textStyle: config().textStyle
              },
            },
          ],
          yAxis : [
            {
              type : 'value',
              minInterval:100,//设置左侧Y轴最小刻度
              splitLine: {
                show: true,
                lineStyle: {
                  type: 'solid',
                  width:2,
                  color: '#6AC9F5'
                }
              },//设置横线样式
              axisLabel: {
                textStyle: config().textStyle
              },
            }
          ],
          series : [
            {
              name:'',
              type:'bar',
              data:data1,
              barWidth:'40%',
              itemStyle: {
                //折线拐点标志的样式
                normal: {
                  barBorderRadius: [30, 30, 0, 0],
                  color: '#6AC9F5'
                }
              }
            }
          ]
        };
        top_chart.setOption(option)
        window.onresize = top_chart.resize;
      },
      bottom_chart3(){
        var xData = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        var data1 = [30,60,140,210,50,90,110,230,60,120,180,260];
        var data2 = [10,50,30,40,60,80,160,110,40,60,140,190];
        var data3 = [50,10,80,20,10,60,190,140,10,40,120,170];
        var data4 = [20,70,100,80,30,90,90,180,90,220,100,160];
        var data5 = [3.2,2.4,5.2,6.9,3.1,4.4,6.3,8.5,9.1,6.6,4.7,8.1];

        var top_chart  = echarts.init(document.getElementById('bottom_chart3'));
        var option = {
          legend: { //图例的设置
            show: true, //是否显示图例
            //icon: 'circle',//图例形状，示例为原型
            top: '3%',//图例离底部的距离
            right:"5%",
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
            data: ['外资企业', '合资企业', '合作企业','外商投资股份制企业','增速'],//图例的名称数据
          },
          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '4%',
            top:'18%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : xData ,
              axisLabel: {
                //rotate:45,//斜体字可不用
                textStyle: config().textStyle
              },
            },
          ],
          yAxis : [
            {
              type : 'value',
              minInterval:100,//设置左侧Y轴最小刻度
              splitLine: {
                show: true,
                lineStyle: {
                  type: 'solid',
                  width:2,
                  color: '#8b8b8e'
                }
              },//设置横线样式
              axisLabel: {
                textStyle: config().textStyle
              },
            },
            {
              type: "value",
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
                textStyle: config().textStyle
              },
            }
          ],
          series : [
            {
              name:'外资企业',
              type:'bar',
              stack: '2',
              data:data1,
              barWidth:'60%',
              itemStyle: {
                //折线拐点标志的样式
                normal: {
                  color: '#FE9E9F'
                }
              }
            },{
              name:'合资企业',
              type:'bar',
              stack: '2',
              data:data2,
              barWidth:'60%',
              itemStyle: {
                //折线拐点标志的样式
                normal: {
                  color: '#FFE99E'
                }
              }
            },{
              name:'合作企业',
              type:'bar',
              stack: '2',
              data:data3,
              barWidth:'60%',
              itemStyle: {
                //折线拐点标志的样式
                normal: {
                  color: '#9EFEFD'
                }
              }
            },{
              name:'外商投资股份制企业',
              type:'bar',
              stack: '2',
              data:data4,
              barWidth:'60%',
              itemStyle: {
                //折线拐点标志的样式
                normal: {
                  color: '#9DA7FE'
                }
              }
            },{
              name: "增速",
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
                color: "#A070C4"
              },
              data: data5,
              zlevel: 11
            }
          ]
        };
        top_chart.setOption(option)
        window.onresize = top_chart.resize;
      },
      bottom_chart4(){
        var xData = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        var data1 = [30,60,140,210,50,90,110,230,60,120,180,260];
        var data2 = [10,50,30,40,60,80,160,110,40,60,140,190];
        var data3 = [50,10,80,20,10,60,190,140,10,40,120,170];
        var data4 = [20,70,100,80,30,90,90,180,90,220,100,160];
        var data5 = [3.2,2.4,5.2,6.9,3.1,4.4,6.3,8.5,9.1,6.6,4.7,8.1];

        var top_chart  = echarts.init(document.getElementById('bottom_chart4'));
        var option = {
          legend: { //图例的设置
            show: true, //是否显示图例
            //icon: 'circle',//图例形状，示例为原型
            top: '3%',//图例离底部的距离
            right:"5%",
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
            data: ['外资企业', '合资企业', '合作企业','外商投资股份制企业','增速'],//图例的名称数据
          },
          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '4%',
            top:'18%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : xData ,
              axisLabel: {
                //rotate:45,//斜体字可不用
                textStyle: config().textStyle
              },
            },
          ],
          yAxis : [
            {
              type : 'value',
              minInterval:100,//设置左侧Y轴最小刻度
              splitLine: {
                show: true,
                lineStyle: {
                  type: 'solid',
                  width:2,
                  color: '#8b8b8e'
                }
              },//设置横线样式
              axisLabel: {
                textStyle: config().textStyle
              },
            },
            {
              type: "value",
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
                textStyle: config().textStyle
              },
            }
          ],
          series : [
            {
              name:'外资企业',
              type:'bar',
              stack: '2',
              data:data1,
              barWidth:'60%',
              itemStyle: {
                //折线拐点标志的样式
                normal: {
                  color: '#29FAFF'
                }
              }
            },{
              name:'合资企业',
              type:'bar',
              stack: '2',
              data:data2,
              barWidth:'60%',
              itemStyle: {
                //折线拐点标志的样式
                normal: {
                  color: '#914AFE'
                }
              }
            },{
              name:'合作企业',
              type:'bar',
              stack: '2',
              data:data3,
              barWidth:'60%',
              itemStyle: {
                //折线拐点标志的样式
                normal: {
                  color: '#7DF27F'
                }
              }
            },{
              name:'外商投资股份制企业',
              type:'bar',
              stack: '2',
              data:data4,
              barWidth:'60%',
              itemStyle: {
                //折线拐点标志的样式
                normal: {
                  color: '#FE9F21'
                }
              }
            },{
              name: "增速",
              type: "line",
              yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
              smooth: false, //平滑曲线显示
              showAllSymbol: true, //显示所有图形。
              symbol: "circle", //标记的图形为实心圆
              symbolSize: 10, //标记的大小
              itemStyle: {
                //折线拐点标志的样式
                color: "#fff"
              },
              lineStyle: {
                color: "#FE2386"
              },
              data: data5,
              zlevel: 11
            }
          ]
        };
        top_chart.setOption(option)
        window.onresize = top_chart.resize;
      },
    }
  }
</script>
<style lang="scss" scoped>
  #index{
    .top_t1{
      color: #fff;
      font-size: 1.39vh;
      text-align: center;
      margin-top: 4vh;
      p{
        line-height: 3vh;
      }
    }
    .vc1{
      color: #60DCFE;
    }
    .vc2{
      color: #FE2282;
    }
    .top_v1{
      height: 14vh;
      line-height: 14vh;
      span:nth-child(1){
        font-size: 6.94vh;
        text-align: center;
      }
      span:nth-child(2){
        font-size: 2.77vh;
        text-align: center;
      }
    }
    .tltleBox{
      background: #023954;
      top: 0;
    }
    .tltleBox,.textBox{
      width: 100%;
      display: flex;
      align-items: center;
      /*height:4vh;*/
      /*line-height: 4vh;*/
      padding: 0.9vh 0;
      font-size: 0.8vw;
      color: #0475C3;
      transition: all 0.5s;
      overflow: hidden;
      span{
        width: 30%;
        text-align: center;
      }
      span:nth-child(2){
        width: 40%;
      }
    }
    .textBox{
      color: #AFB8D2;
      overflow: hidden;
    }
    .tltleBox:hover,.textBox:hover{
      background: #465177;
    }

    .in_out{
      float: left;
      font-size: 0.8vw;
      text-align: center;
      color: #fff;
      border: 1px #1a358c solid;
      border-radius: 5px;
      width: 3vw;
      line-height: 1.3vw;
      margin-top: 1.3vh;
      margin-left: 0.5vh;

    }
    .dev_center{
      margin-right: 2vh;
      margin-left: 2vh;
      margin-top: 2vh;
      border: 1px solid #23A9F3;
      //height: 31vh
    }
    #bottom_chart2{
      span{
        width: 20%;
        text-align: center;
      }
      span:nth-child(1),span:nth-child(4){
        width: 15%;
      }
      span:nth-child(2),span:nth-child(5){
        width: 12%;
      }
      span:nth-child(3),span:nth-child(6){
        text-align: left;
      }
      .tltleBox,.textBox{
        padding: 1.5vh 0;
      }
      .countrys{
        height: 1vw;
        width: 1.6vw;
        background-repeat: no-repeat;
        background-size: 1.6vw 1vw;
      }
      .cou1{
        background-image:url('../../static/img/guoqi/eluosi.png');
      }
      .cou2{
        background-image:url('../../static/img/guoqi/xinjiapo.png');
      }
      .cou3{
        background-image:url('../../static/img/guoqi/yindu.png');
      }
      .cou4{
        background-image:url('../../static/img/guoqi/taiguo.png');
      }
      .cou5{
        background-image:url('../../static/img/guoqi/malaixiya.png');
      }
      .cou6{
        background-image:url('../../static/img/guoqi/yuenan.png');
      }
      .cou7{
        background-image:url('../../static/img/guoqi/hasakesitan.png');
      }
      .cou8{
        background-image:url('../../static/img/guoqi/bajisitan.png');
      }
      .cou9{
        background-image:url('../../static/img/guoqi/feilvbin.png');
      }
      .cou10{
        background-image:url('../../static/img/guoqi/jianpuzhai.png');
      }
    }
  }
</style>
