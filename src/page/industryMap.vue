<template>
  <div class="industry">
    <div class="chart_main">
      <el-row>
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
          <div  class = "fix_center content-padding" style="height: 42vh">
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

      </el-row>
      <el-row>
        <el-col :span="24">
          <div  class = "fix_left fix_right" style="height: 45.2vh">
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
              <el-col :span="2" style="height: 45.2vh;width: 8%">
                <div style="height: 12vh; border: 1px solid #999; background-color: transparent;  margin-top: 3vh">

                </div>
                <div style="background-color: blue; height: 12vh; margin: 1.5vh 0">

                </div>
                <div style="background-color: blue; height: 12vh; margin-bottom: 3vh">

                </div>
              </el-col>
              <el-col :span="5">123</el-col>
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
    }
  }
</script>
<style lang="scss">
  $title-color1:#145FA1;
  .industry{
    .title-gb1{
      color: $title-color1;
      font-weight: bolder;
      font-size: 12px
    }
    .content-padding{
      padding: 5px 10px;
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
  }
</style>
