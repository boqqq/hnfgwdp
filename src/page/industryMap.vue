<template>
  <div class="industry">
    <div class="chart_main">
      <el-row style=" margin-top: 2vh">
        <el-col :span="6">
          <div  class = "fix_left content-padding" style="height: 42vh">
            <el-row>
              <el-col :span="17">
                <span class="title-gb1">十二大重点产业税收前10企业排名</span>
              </el-col>
              <el-col :span="7" style="text-align: right">
                <el-select size="mini" v-model="rankingType" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <div id="bar_ranking" style="height: 85%; margin-top: 10px">

            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div  class = "fix_center content-padding" style="height: 42vh;">
            <el-row>
              <el-col>
                <span class="title-gb1">三次产业增加值</span>
              </el-col>
            </el-row>
            <el-row style="margin: 10px 0">
              <el-col style="text-align: center">
                <el-button size="mini" @click="IncrementTypeChange(1)" :class="{'btn-selected':IncrementType == 1}">产业结构</el-button>
                <el-button size="mini" @click="IncrementTypeChange(2)" :class="{'btn-selected':IncrementType == 2}" style="margin-left: 5px">增加值</el-button>
                <el-button size="mini" @click="IncrementTypeChange(3)" :class="{'btn-selected':IncrementType == 3}" style="margin-left: 5px">增速</el-button>
              </el-col>
            </el-row>
            <div id="bar_increment" style="height: 80%">

            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div  class = "fix_right content-padding" style="height: 42vh">
            <div id="bar_ranking2" style="height: 100%">

            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div  class = "fix_right content-padding" style="height: 42vh">
            <el-row>
              <el-col>
                <span class="title-gb1">三次产业增加值</span>
              </el-col>
            </el-row>
            <div id="bar_newly" style="height: 85%; margin-top: 10px">

            </div>
          </div>
            </el-col>
            <el-col :span="24">
              <div  class = "fix_left fix_right" style="height: 45.2vh; margin-top: 2vh">
                <el-row>
                  <el-col style="width: 23%">
                    <div  style="height: 45.2vh" class="content-padding">
                      <el-row>
                        <el-col>
                          <span class="title-gb1">十二大产业税收贡献前5名</span>
                        </el-col>
                      </el-row>
                      <div id="bar_contribution" style="height: 85%; margin-top: 10px">

                      </div>
                    </div>
                  </el-col>
                  <el-col :span="2" style="height: 45.2vh; width: 8.5%">
                    <div class="rate-box" style=" margin-top: 3vh">
                      <div class="rate-box-in">
                        <el-row style="padding: 5px 0">
                          <span class="rate-box-text">十二大重点产业<br>增加值占GDP比重</span>
                        </el-row>
                        <el-row style="padding: 5px; text-align: right">
                          <span class="rate-box-number">83.21%</span>
                        </el-row>
                      </div>
                    </div>
                    <div class="rate-box" style="margin: 1.5vh 0">

                    </div>
                    <div class="rate-box" style="margin-bottom: 3vh">

                    </div>
                  </el-col>
                  <el-col style="height: 45.2vh; width: 23%">
                    <div class="content-padding" style="height: 100%;">
                      <el-row>
                        <el-col :span="17">
                          <span class="title-gb1">十二大重点产业投资额及增速</span>
                        </el-col>
                      </el-row>
                      <div id="bar_investment" style="height: 85%; margin-top: 10px">

                      </div>
                    </div>
                  </el-col>
                  <el-col :span="9">123</el-col>
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
      this.initInvestment()
    },
    methods: {
      IncrementTypeChange(val){
        this.IncrementType = val;
      },
      initRanking(id, labels, values, labelShow){
        console.log('=====')
        var bar_ranking = echarts.init(document.getElementById(id));
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
        console.log('=====')
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
            left: '0',
            right: '10',
            bottom: '5',
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
              data:[220, 432, 501, 534, 790, 830, 920, 1021],
              itemStyle: {
                normal: {
                  color: '#DF2DFF',
                }
              }
            },
            {
              name:'第二产业',
              type:'bar',
              stack: '产业结构',
              data:[120, 132, 101, 134, 290, 230, 220, 330],
              itemStyle: {
                normal: {
                  color: '#139DFF',
                }
              }
            },
            {
              name:'第三产业',
              type:'bar',
              stack: '产业结构',
              data:[60, 72, 71, 74, 190, 130, 110,230],
              itemStyle: {
                normal: {
                  color: '#E11054',
                }
              }
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
            color: ['#3F61FF', '#C94B89', '#9072EE', '#54BB4D','#929090'],
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
                    fontSize: 12,
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
      initInvestment(){
        console.log('=====')
        var bar_investment = echarts.init(document.getElementById('bar_investment'));

        // Generate data
        var category = ['2017Q3','2017Q4','2018Q1','2018Q2','2018Q3','2018Q4',];
        var dottedBase = [];
        var lineData = [123,211,99
          ,432,321,544];
        var barData = [55,67,43
          ,87,65,89];
        var rateData = [];
        32808
        for (var i = 0; i < 33; i++) {
          // var date = i+2001;
          // category.push(date)
          var rate=barData[i]/lineData[i]*100;
          rateData[i] = rate.toFixed(2);
        }


        var option = {
          title: {
            text: '',
            x: 'center',
            y: 0,
            textStyle:{
              color:'#B4B4B4',
              fontSize:16,
              fontWeight:'normal',
            },

          },
          // backgroundColor: '#0d235e',
          tooltip: {
            trigger: 'axis',
            backgroundColor:'rgba(255,255,255,0.1)',
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                backgroundColor: '#7B7DDC'
              }
            }
          },
          legend: {
            data: ['投资额（亿元）', '增速（%）',],
            textStyle: {
              color: '#B4B4B4'
            },
            // top:'7%',
          },
          grid: {
            left: '10',
            right: '6',
            bottom: '0',
            top:'50',
            containLabel: true
          },
          xAxis: {
            data: category,
            axisLine: {
              lineStyle: {
                color: '#B4B4B4'
              }
            },
            axisTick:{
              show:false,
            },
          },
          yAxis: [{

            // splitLine: {show: false},
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#B4B4B4',
              }
            },

            axisLabel:{
              formatter:'{value} ',
            }
          },
            {

              splitLine: {show: false},
              axisTick: {
                show: false
              },
              axisLine: {
                show:false,
                lineStyle: {
                  color: '#B4B4B4',
                }
              },
              axisLabel:{
                show:false,
                formatter:'{value} ',
              }
            }],

          series: [{
            name: '增速（%）',
            type: 'line',
            // smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              color:'#fff'
            },
            lineStyle: {
              color: "#3EACE5"
            },
            data: rateData
          },

            {
              name: '投资额（亿元）',
              type: 'bar',
              barWidth: 15,
              itemStyle: {
                normal: {
                  // barBorderRadius: 5,
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#956FD4'},
                      {offset: 1, color: '#3EACE5'}
                    ]
                  )
                }
              },
              data: barData
            }
          ]
        };
        bar_investment.setOption(option)
      },
    }
  }
</script>
<style lang="scss">
  $title-color1:#0090E0;
  .industry{
    .title-gb1{
      color: $title-color1;
      font-weight: bolder;
      font-size: 12px
    }
    .content-padding{
      padding: 5px 10px;
    }
    .fix_left{
      margin-top: 2vh;
    }
    .fix_right{
      margin-top: 2vh;
    }
    .fix_center{
      border: 1px solid #23A9F3;
      margin: 2vh 2vh 0;
    }
    .title-gb1::before{
      width: 10px;
      content:"|";
      border-radius: 2px;
      color: red;
      margin-right: 5px;
      background-color: red;
    }
    .el-input{
      width: 85px;
    }
    .el-input__icon{
      width: 20px;
    }
    .el-select__caret el-input__icon el-icon-arrow-up{
      line-height:20px
    }
    .el-input--mini .el-input__icon{
      line-height: 20px;
    }
    .el-select__caret el-input__icon el-icon-arrow-up{
      width: 20px
    }
    .el-input--mini .el-input__inner{
      height: 20px;
      line-height: 20px
    }
    .el-input__inner{
      background-color: transparent;
      color: #fff;
      border: 1px solid $title-color1;
      padding: 0 5px;
      border-radius: 0;
    }
    .el-input--suffix .el-input__inner{
      padding-right: 5px;
    }
    .el-select-dropdown__item {
      font-size: 12px;
      padding: 0 10px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #606266;
      height: 26px;
      line-height: 26px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      cursor: pointer;
    }
    .el-button--mini, .el-button--mini.is-round{
      padding: 4px 0;
    }
    .el-button {
      width: 65px;
      display: inline-block;
      line-height: 1;
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
    .rate-box-in{
      background-color: #1D3C7D;
      height: 100%;
      opacity: 0.8;
    }
    .rate-box{
      height: 11.5vh;
      border: 1px solid #999;
      background-color: transparent;
      padding: 2px;
    }
    .rate-box-text{
      color: #FFF;
      font-size: 12px;
      white-space: nowrap
    }
    .rate-box-number{
      color: #FFF;
      font-size: 16px;
      text-shadow: 0 0 10px #04cbe0;
    }
  }
</style>
