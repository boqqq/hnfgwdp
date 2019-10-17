<template>
  <div class="industry">
    <div class="chart_main">
      <el-row>
        <el-col :span="24">
          <el-row>
            <el-col :span="6">
              <div  class = "fix_left h11">
                <el-row>
                  <el-col :span="17">
                    <div class = "_tit2"><h4>十二大重点产业税收前10企业排名</h4></div>
                  </el-col>
                  <el-col :span="7">
                    <div class = "t_sel h1">
                      <el-select class = "indu_sel" size="mini" v-model="rankingType">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-col>
                </el-row>
                <div id="bar_ranking" class="h10">

                </div>
                <div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div  class = "fix_center2 h11">
                <div class = "_tit2"><h4>十二大重点产业税收前10企业排名</h4></div>
                <div  class = "h1 indu_butt">
                  <el-button size="mini" @click="IncrementTypeChange(1)" :class="{'btn-selected':IncrementType == 1}">产业结构</el-button>
                  <el-button size="mini" @click="IncrementTypeChange(2)" :class="{'btn-selected':IncrementType == 2}" style="margin-left: 5px">增加值</el-button>
                  <el-button size="mini" @click="IncrementTypeChange(3)" :class="{'btn-selected':IncrementType == 3}" style="margin-left: 5px">增速</el-button>
                </div>
                <div id="bar_increment" style="height:34vh">

                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div  class = "fix_center2 h11">
              </div>
            </el-col>
            <el-col :span="6">
              <div  class = "fix_right h11">
                <div class = "_tit2"><h4>十二大重点产新增市场主体数</h4></div>
                <div id="bar_newly" class = "h10">

                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="24">
          <div  class = "fix_center2 h11" style="margin-left: 2vh;margin-right: 2vh">
            <el-row>
              <el-col :span="7">
                <div  class = "fix_center h10">
                  <el-row>
                    <el-col :span="17">
                      <div class = "_tit2"><h4>十二大重点产业税收贡献前5名</h4></div>
                      <div id="bar_contribution" class = "h9">

                      </div>
                    </el-col>
                    <el-col :span="7">
                      <div class = "cont_topN">
                        <div class = "cont_topN1">
                          <p>十二大重点产业增加值占GDP比重</p>
                          <p><span>83.21</span><span>%</span></p>
                        </div>
                      </div>
                      <div class = "cont_topN">
                        <div class = "cont_topN1">
                          <p>十二大重点产业投资额占比</p>
                          <p><span>83.21</span><span>%</span></p>
                        </div>
                      </div>
                      <div class = "cont_topN">
                        <div class = "cont_topN1">
                          <p>十二大重点产业税收占比</p>
                          <p><span>83.21</span><span>%</span></p>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="7">
                <div  class = "fix_center h10">
                  <div class = "_tit2"><h4>十二大重点产业投资额增速</h4></div>
                  <div id="investmentRate" class = "h9">

                  </div>
                </div>
              </el-col>
              <el-col :span="10">
                <div  class = "fix_center h10">
                  <div class = "_tit2"><h4>十二大重点产业发展情况</h4></div>
                  <div id="developmentSituation" class = "h9">

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
        options: [{
          value: '1',
          label: '医药产业'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        rankingType: '',
        IncrementType:1,
        label1: ['海南逸盛石化有限公司',
          '中国石化有限公司海南石油分公司',
          '中国烟草总公司海南省公司',
          '海南电网有限责任公司',
          '海马汽车集团股份有限公司',
          '海南省建设集团有限公司',
          '海南农垦投资控股集团有限公司',
          '中国石化海南炼油化工有限公司',
          '海南华信国际控股有限公司',
          '海航集团有限公司'],
        label2: [
          '文体产业',
          '房地产业',
          '低碳制造业',
          '医疗产业',
          '海洋产业',
          '金融业',
          '现代物流业',
          '会展业',
          '医疗健康产业',
          '互联网产业',
          '热带特色高效农业',
          '旅游业'],
        value1: [22, 33, 44, 55, 66, 77, 88, 99, 120, 145],
        value2: [22, 33, 44, 55, 66, 77, 88, 99, 120, 145,176,213]

      }
    },
    components: {
    },
    created () {
    },
    beforeDestroy() {

    },
    mounted () {
      this.initRanking('bar_ranking', this.label1, this.value1, false)
      this.initRanking('bar_newly', this.label2, this.value2, true)
      this.initIncrement()
      // this.initNewly()
      this.initContribution()
      this.investmentRate()
      this.developmentSituation()
    },
    methods: {
      IncrementTypeChange(val){
        this.IncrementType = val;
      },
      initRanking(id, labels, values, labelShow){
        var bar_ranking = echarts.init(document.getElementById(id));
        var option = {
          color: ['#0A81E9'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: "{b} <br> 合格率: {c}%"
          },
          grid: {
            left: '4%',
            right: '4%',
            bottom: '4%',
            top:'10%',
            containLabel: true
          },
          xAxis: {
            show:false,
            type: 'value',
            boundaryGap: [0, 0.01],
            interval: 20,
            axisLabel: {
              formatter: '{value}%',
              textStyle: {
                // color: '#fff',
                fontWeight: '80'
              }
            }
          },
          yAxis: {
            axisTick: {
              show: false,
              color: '#0A81E9'
            },
            type: 'category',
            // data: ['海南逸盛石化有限公司',
            //   '中国石化有限公司海南石油分公司',
            //   '中国烟草总公司海南省公司',
            //   '海南电网有限责任公司',
            //   '海马汽车集团股份有限公司',
            //   '海南省建设集团有限公司',
            //   '海南农垦投资控股集团有限公司',
            //   '中国石化海南炼油化工有限公司',
            //   '海南华信国际控股有限公司',
            //   '海航集团有限公司'],
            data:labels,
            axisLabel: {
              show: true,
              interval: 0,
              rotate: 0,
              margin: 10,
              inside: false,
              textStyle: {
                color: '#fff',
                fontWeight: '50',
                fontSize:10
              }
            },
            axisLine:{
              lineStyle:{
                color:'#3398DB',
                width:1,//这里是为了突出显示加上的
              }
            }
          },
          series: [{
            type: 'bar',
            label: {
              normal: {
                show: labelShow,
                // formatter: '{c}',
                position:'right',
                formatter: function(v) {
                  var val = v.data;
                  if (val == 0) {
                    return '';
                  }
                  return val;
                },
                color: '#fff'
              }
            },
            barWidth : 10,
            // data: [22, 33, 44, 55, 66, 77, 88, 99, 120, 145]
            data: values
          }]
        };
        bar_ranking.setOption(option)
      },
      initIncrement(){
        var bar_increment = echarts.init(document.getElementById('bar_increment'));
        var option = {
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['第一产业','第二产业','第三产业'],
            textStyle:{//图例文字的样式
              color:'#fff',
              fontSize:10
            },
          },
          grid: {
            left: '4%',
            right: '4%',
            bottom: '8%',
            top:'20%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              axisLabel: {
                rotate:45,//斜体字可不用
                textStyle: {
                  fontSize: '12',
                  color:'#fff'
                }
              },
              data : ['2011','2012','2013','2014','2015','2016','2017','2018Q3']
            }
          ],
          yAxis : [
            {
              show:false,
              type : 'value'
            }
          ],
          series : [
            {
              name:'第一产业',
              type:'bar',
              barWidth : 15,
              stack: '产业结构',
              data:[220, 432, 501, 534, 790, 830, 920, 1021]
            },
            {
              name:'第二产业',
              type:'bar',
              stack: '产业结构',
              data:[120, 132, 101, 134, 290, 230, 220, 330]
            },
            {
              name:'第三产业',
              type:'bar',
              stack: '产业结构',
              data:[60, 72, 71, 74, 190, 130, 110,230]
            },
          ]
        };
        bar_increment.setOption(option)
      },
      initNewly(){
        console.log('=====')
        var bar_newly = echarts.init(document.getElementById('bar_newly'));
        var option = {
          color: ['#0A81E9'],
          // title: {
          //   text: '各省数据合格率统计',
          //   //textStyle: {
          //   //    color: '#fff'
          //   //}
          // },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: "{b} <br> 合格率: {c}%"
          },
          /*legend: {
              data: [date]
          },*/
          grid: {
            left: '6',
            right: '6',
            bottom: '0',
            top:'0',
            containLabel: true
          },
          xAxis: {
            show:false,
            type: 'value',
            boundaryGap: [0, 0.01],
            interval: 20,
            axisLabel: {
              formatter: '{value}%',
              textStyle: {
                // color: '#fff',
                fontWeight: '80'
              }
            }
          },
          yAxis: {
            axisTick: {
              show: false,
              color: '#0A81E9'
            },
            type: 'category',
            data: [
              '文体产业',
              '房地产业',
              '低碳制造业',
              '医疗产业',
              '海洋产业',
              '金融业',
              '现代物流业',
              '会展业',
              '医疗健康产业',
              '互联网产业',
              '热带特色高效农业',
              '旅游业'],
            axisLabel: {
              show: true,
              interval: 0,
              rotate: 0,
              margin: 10,
              inside: false,
              textStyle: {
                color: '#fff',
                fontWeight: '50',
                fontSize:10
              }
            },
            axisLine:{
              lineStyle:{
                color:'#3398DB',
                width:1,//这里是为了突出显示加上的
              }
            }
          },
          series: [{
            type: 'bar',
            label: {
              normal: {
                show: true,
                // formatter: '{c}',
                position:'right',
                formatter: function(v) {
                  var val = v.data;
                  if (val == 0) {
                    return '';
                  }
                  return val;
                },
                color: '#999'
              }
            },
            barWidth : 10,
            data: [22, 33, 44, 55, 66, 77, 88, 99, 120, 145,176,213]
          }]
        };
        bar_newly.setOption(option)
      },
      initContribution(){
        console.log('=====')
        var bar_contribution = echarts.init(document.getElementById('bar_contribution'));

        var option = {
          // backgroundColor: '#031845',
          // title:{
          //     text:"123",
          //     left:'center',
          //     top:'45%',
          //     textStyle:{
          //         color:"#FFF",
          //         fontSize:"80px",

          //     }
          // },
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {d}% <br/> {c}"
          },
          //  graphic: {
          //  elements: [
          //         {
          //          type: 'text',
          //          left: 'center', // 相对父元素居中
          //          top: 'center',  // 相对父元素上下的位置
          //          style: {
          //              fill: '#FFF',
          //               text: ['357'],
          //               zlevel:"100",
          //               font: '80px Arial Normal',
          //                  }
          //         }]
          //       },
          //  title: {
          //     text:'总考生数',
          //     left:'center',
          //     top:'center',
          //     padding:[24,0],
          //     textStyle:{
          //         color:'#fff',
          //         fontSize:18*scale,
          //         align:'center'
          //     }
          // },
          //   title: {
          //     text: '3246',
          //     subtext: '重点人员(人)',
          //     x: 'center',
          //     y: '43%',
          //     textStyle: {
          //         fontSize: 80,
          //         fontWeight: 'normal',
          //         color: '#00FFFF',
          //     },
          //     subtextStyle: {
          //         fontSize: 28,
          //         fontWeight: 'normal',
          //         align:"center",
          //         color:'#CCCCCC'
          //     },
          // },
          series: [{
            type: 'pie',
            radius: ['30%', '40%'],
            center: ['50%', '50%'],
            color: ['#80C269', '#00FFFF', '#0090F1', '#FFA800','#4658F6'],
            itemStyle:{
              //  normal: {
              //     borderWidth: 5,
              //     borderColor: '#031845',
              //   }
            },
            data: [{
              value: 27,
              name: '会展业'
            },
              {
                value: 30,
                name: '互联网产业'
              },
              {
                value: 24,
                name: '海洋产业'
              },
              {
                value: 27,
                name: '房地产业'
              },
              {
                value: 27,
                name: '旅游业'
              }

            ],
            labelLine: {
              normal: {
                show: true,
                length: 5,
                length2: 15,
                lineStyle: {
                  color: '#CCCCCC',
                  width: 1
                }
              }
            },
            label: {
              normal: {
                formatter: '{b|{b}}',
                rich: {
                  b: {
                    fontSize: 10,
                    color: '#FFF',
                    align: 'left',
                    padding: 1
                  },
                  hr: {
                    borderColor: '#CCCCCC',
                    width: '100%',
                    borderWidth: 1,
                    height: 0,
                  },
                  c: {
                    fontSize: 10,
                    align: 'center',
                    padding: 1,
                    color:'#00EDED'
                  }
                }
              }
            }
          }

          ]
        };
        bar_contribution.setOption(option)
      },
      investmentRate (){
        var xData = ['2016Q1','2016Q2','2016Q3','2016Q4','2017Q1','2017Q2','2017Q3','2017Q4','2018Q1','2018Q2','2018Q3','2018Q4'];
        var data1 = [30,60,140,210,50,90,110,230,60,120,180,260];
        var data2 = [3.2,2.4,5.2,6.9,3.1,4.4,6.3,8.5,9.1,6.6,4.7,8.1];

        var top_chart  = echarts.init(document.getElementById('investmentRate'));
        var option = {
          legend: { //图例的设置
            show: true, //是否显示图例
            //icon: 'circle',//图例形状，示例为原型
            top: '3%',//图例离底部的距离
            right:"5%",
            itemWidth: 22, // 图例标记的图形宽度。
            itemHeight: 22, // 图例标记的图形高度。
            itemGap: 20, // 图例每项之间的间隔。
            textStyle: {//图例文字的样式设置
              fontSize: 18,
              color: '#fff'
            },
            data: ['投资额（万元）', '增速（%）'],//图例的名称数据
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '4%',
            top:'15%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : xData ,
              axisLabel: {
                //rotate:45,//斜体字可不用
                textStyle: {
                  fontSize: '16',
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
                show: true,
                lineStyle: {
                  type: 'solid',
                  width:2,
                  color: '#8b8b8e'
                }
              },//设置横线样式
              axisLabel: {
                textStyle: {
                  fontSize: '16',
                  color:'#fff'
                }
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
                textStyle: {
                  fontSize: '16',
                  color:'#fff'
                }
              },
            }
          ],
          series : [
            {
              name:'投资额（万元）',
              type:'bar',
              stack: '2',
              data:data1,
              barWidth:'60%',
              itemStyle: {
                //折线拐点标志的样式
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#BF4DFA'},

                      {offset: 1, color: '#1798CE'}
                    ]
                  )
                }
              },
              zlevel: 9
            },{
              name: "增速（%）",
              type: "line",
              yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
              smooth: false, //平滑曲线显示
              showAllSymbol: true, //显示所有图形。
              symbol: "circle", //标记的图形为实心圆
              symbolSize: 10, //标记的大小
              itemStyle: {
                //折线拐点标志的样式
                color: "#00b7ff"
              },
              lineStyle: {
                color: "#00b7ff",
                normal: {
                  width: 2
                }
              },
              data: data2,
              zlevel: 11
            },
            {
              name: "",
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
              tooltip:{
                show:false
              },
              lineStyle: {
                normal: {
                  color: "rgba(143,215,247,0.3)",
                  width: 10
                }
              },
              data: data2,
              zlevel: 10
            }
          ]
        };
        top_chart.setOption(option)
        window.onresize = top_chart.resize;
      },
      developmentSituation(){
        var dat = [
          [55, 65,'医药产业'],
          [40, 23,'会展业'],
          [60, 12,'医疗健康产业'],
          [10, 44,'现代物流业'],
          [67, 35,'海洋产业'],
          [31, 56,'低碳制造业'],
          [23, 76,'互联网产业'],
          [68, 88,'金融业'],
          [11, 22,'旅游业'],
          [61, 19,'房地产业'],
          [66, 70,'文体产业'],
          [44, 79,'热带高效特色农业']
        ];
        var data1 = []
        for (var i = 0; i < dat.length; i++) {
          var tmp ={
            name:dat[i][2],
            type: 'scatter',
            symbol: 'circle',
            symbolSize: function (d) {
              return d[0] ;
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                //color: '#DF266E'
              }
            },
            label: {
              show: true,
              formatter: function (v) {
                //alert(JSON.stringify(v))
                return v.data[2]
              },
              textStyle: {
                color: '#fff',
                fontSize: 18
              }
            },
            data:[dat[i]]
          };
          data1.push(tmp)
        }
        var top_chart = echarts.init(document.getElementById('developmentSituation'));
        var option = {
          tooltip: {},
          legend: { //图例的设置
            show: true, //是否显示图例
            //icon: 'circle',//图例形状，示例为原型
            top: '3%',//图例离底部的距离
            right:"5%",
            itemWidth: 22, // 图例标记的图形宽度。
            itemHeight: 22, // 图例标记的图形高度。
            itemGap: 20, // 图例每项之间的间隔。
            textStyle: {//图例文字的样式设置
              fontSize: 18,
              color: '#fff'
            },
            data: ['医药产业', '会展业','医疗健康产业','现代物流业','海洋产业','低碳制造业','互联网产业',
              '金融业','旅游业','房地产业','文体产业','热带高效特色农业'],//图例的名称数据
          },
          color:['#DF286E','#69CAF5','#217555','#301970','#940BC0','#09598A','#DE6B67','#759AA1','#E79C88','#8CC2AA','#E97F58','#EFDD79'],
          grid: {
            left: '3%',
            right: '10%',
            bottom: '6%',
            top:'26%',
            containLabel: true
          },
          xAxis: {
            //type: "category",
            name: '增加值增速',
            nameGap: 25,
            nameTextStyle: {
              color: '#fff',
              fontSize: 18
            },
            axisLine: {
              lineStyle: {
                width:2,
                type: 'solid',
                color: '#447AD5'
              }
            },
            boundaryGap: false,
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#0A4E60'
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
            name: '增加值',
            nameTextStyle: {
              color: '#fff',
              fontSize: 18
            },
            nameGap: 25,
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#0A4E60'
              }
            },
            axisLine: {
              lineStyle: {
                width:2,
                type: 'solid',
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
              },
              formatter: "{value}%"
            },
          },
          series: data1

        };
        top_chart.setOption(option)
        window.onresize = top_chart.resize;
      },
    }
  }
</script>
<style lang="scss">
  $title-color1:#145FA1;
  .industry{
    .indu_sel{
      margin-top: 1.2vh;
      float:right;
      margin-right: 3%;
      width: 80%;
      min-width: 70px;
    }
    .indu_butt{
      text-align: center;
      margin-top: 2vh;
    }
    .el-button--mini, .el-button--mini.is-round{
      padding: 4px 0;
      font-size: 0.8vw;
    }
    .el-button {
      width: 5vw;
      display: inline-block;
      line-height: 2vh;
      white-space: nowrap;
      cursor: pointer;
      background: transparent;
      border: 1px solid #DCDFE6;
      color: #999;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: 0;
      margin: 0;
      transition: .1s;
      font-weight: 500;
    }
    .el-button:hover{
      background-color: $title-color1;
      color: #fff;
    }
    .btn-selected{
      background-color: $title-color1;
      color: #fff;
    }
    .cont_topN{
      height: 10.6vh;
      border: 1px #1D3C7D solid;
      width: 90%;
      margin-top: 1vh;
    }
    .cont_topN1{
      margin:0.3vh;
      height: 10vh;
      background-color: #1D3C7D;
      text-align: center;
      p:nth-child(1){
        font-size: 0.8vw;
        line-height: 2vh;
        padding-top: 0.5vh;
        color: #fff;
      }
      p:nth-child(2){
        color: #fff;
        text-align: center;
        font-weight: bold;
        span:nth-child(1){
          font-size: 2.2vw;
          line-height: 5vh;
        }
        span:nth-child(2){
          font-size: 0.8vw;
        }
      }
    }
  }
</style>
