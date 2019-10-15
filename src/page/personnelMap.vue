<template>
  <div id="index">
    <div class = "chart_main">
      <el-row>
        <el-col :span="15">
          <el-row>
            <el-col :span="24">
              <div class = "fix_left" style = "height:43vh">

              </div>
            </el-col>
            <el-col :span="24">
              <el-row>
                <el-col :span="12">
                  <div id= "pressure" class = "fix_left" style = "height:43vh">

                  </div>
                </el-col>
                <el-col :span="12">
                  <div id= "structure" class = "fix_left" style = "height:43vh">

                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="9">
          <el-row>
            <el-col :span="24">
              <div id="relation" class = "fix_center" style = "height:53vh">

              </div>
            </el-col>
            <el-col :span="24">
              <div id="compare" class = "fix_center" style = "height:33vh">

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
      this.pressure();
      this.structure();
      this.compare();
      this.relation();
    },
    methods: {
      pressure(){
        var myChart = echarts.init(document.getElementById("pressure"));
        var fontColor = 'rgba(255,255,255,0.5)';
        let data=[
          {
            name:'海口',
            list:[
              {xdate:'2015/01',enName:"2015/01",value:"3"},
              {xdate:'2015/07',enName:"2015/07",value:"5"},
              {xdate:'2016/01',enName:"2016/01",value:"7"},
              {xdate:'2016/07',enName:"2016/07",value:"2"},
              {xdate:'2017/01',enName:"2017/01",value:"5"},
              {xdate:'2017/07',enName:"2017/07",value:"3"},
              {xdate:'2018/01',enName:"2018/01",value:"9"},
              {xdate:'2018/07',enName:"2018/07",value:"9"},
            ]

          },
          {name:'三亚',
            list:[
              {xdate:'2015/01',enName:"2015/01",value:"3"},
              {xdate:'2015/07',enName:"2015/07",value:"7"},
              {xdate:'2016/01',enName:"2016/01",value:"9"},
              {xdate:'2016/07',enName:"2016/07",value:"8"},
              {xdate:'2017/01',enName:"2017/01",value:"5"},
              {xdate:'2017/07',enName:"2017/07",value:"1"},
              {xdate:'2018/01',enName:"2018/01",value:"2"},
              {xdate:'2018/07',enName:"2018/07",value:"6"},
            ]},
        ];
        let datelist = [];
        let safeList = [];
        let danger = [];
        data[0].list.forEach(function(value,index){
          datelist.push(data[0].list[index].enName);
          safeList.push(data[0].list[index].value);
          danger.push(data[1].list[index].value);
        });
        var option ={
          title:{
            text:'就业压力指数',
            textStyle:{
              color:"#3a6ce1",
              fontSize:13
            }
          },
          grid: {
            left: '5%',
            right: '5%',
            top:'18%',
            bottom: '15%',
            containLabel: false
          },
          tooltip : {
            trigger: 'axis',
            padding: [0, 0, 0, 0],
            textStyle: {
              color: '#FFFFFF'
            }
          },
          legend: {
            right:'8%',
            top:'10%',
            itemWidth:15,
            itemHeight:5,
            textStyle:{
              color:'rgba(255,255,255,1)' ,
              fontSize:10
            },
            nameTextStyle :{
              color:'rgba(255,255,255,1)'
            },
            data:[data[0].name,data[1].name]
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              axisLabel:{
                color: '#FFF',
                fontSize:10
              },
              axisLine:{
                show:true,
                lineStyle:{
                  color:'#0B6472',
                }
              },
              axisTick:{
                show:false,
              },
              splitLine :{    //网格线
                lineStyle:{
                  type:'solid' ,   //设置网格线类型 dotted：虚线   solid:实线
                  color:'#0B6472'
                },
                show:true //隐藏或显示
              },
              data :datelist
            }
          ],
          yAxis : [
            {
              type : 'value',
              name : '次数/(次)',
              nameTextStyle:{
                color:'#fff',
                fontSize:14
              },
              show:false,
              axisLabel : {
                formatter: '{value}',
                textStyle:{
                  color:'#0B6472',
                  fontSize:16
                }
              },
              axisLine:{
                lineStyle:{
                  color:'rgba(255,255,255,0.1)',
                }
              },
              axisTick:{
                show:false,
              },
              splitLine:{
                show:true,
                lineStyle:{
                  color:'rgba(255,255,255,0.05)',
                }
              }
            }
          ],
          series : [
            {
              name:data[0].name,
              type:'line',
              smooth: true , //true 为平滑曲线，false为直线
              // smooth:true,  //这个是把线变成曲线
              itemStyle: {
                normal: {
                  color:'#0092f6',
                  lineStyle: {
                    color: "#0092f6",
                    width:1
                  },
                  areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                      offset: 0,
                      color: 'rgba(0,255,255,0)'
                    }, {
                      offset: 1,
                      color: 'rgba(0,255,255,1)'
                    }]),
                  }
                }
              },
              data:safeList
            },
            {
              name:data[1].name,
              type:'line',
              smooth: true , //true 为平滑曲线，false为直线
              itemStyle: {
                normal: {
                  color:'rgba(251,14,68,0.7)',
                  lineStyle: {
                    color: "rgba(251,14,68,0.8)",
                    width:1
                  },
                  areaStyle: {
                    //color: '#94C9EC'
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                      offset: 0,
                      color: 'rgba(251,14,68,0)'
                    }, {
                      offset: 1,
                      color: 'rgba(251,14,68,0.9)'
                    }]),
                  }
                }
              },
              data:danger
            }
          ]
        };
        myChart.setOption(option);
        window.onresize = myChart.resize;
      },
      structure(){
        var myChart = echarts.init(document.getElementById("structure"))
        var option = {
          color: ['#9307C0', '#6AC9F5', '#E1427A', '#3a6ce1','#EA7D52'],
          title : {
            text: '人才需求结构',
            textStyle:{
              color:"#3a6ce1",
              fontSize:13
            }
          },
          legend: {
            data: [
              {
                name: '4000以下',
                icon: 'roundRect'
              },
              {
                name: '4000-5999',
                icon: 'roundRect'
              },
              {
                name: '6000-7999',
                icon: 'roundRect'
              },
              {
                name: '8000-9999',
                icon: 'roundRect'
              },
              {
                name: '10000及以上',
                icon: 'roundRect'
              },
            ],
            top: '10%',
            right: '10%',
            left: '5%',
            textStyle: {
              color: '#FFFFFF',
              fontSize: 10
            },
            itemGap: 10,
            itemWidth: 10,
            itemHeight: 10
          },
          grid: {
            left: '3%',
            right: '3%',
            top:'20%',
            bottom: '15%',
            containLabel: false
          },
          tooltip: {
            trigger: 'axis',
            padding: [0, 0, 0, 0],
            textStyle: {
              color: '#FFFFFF'
            },
          },
          xAxis: {
            type: 'category',
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#25373B'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color:'#FFF',
              fontSize: 10,
              interval:0,
              rotate:40
            },
            data: ['教育', '商务服务', '房地产', '文娱体育', '批发零售','软件信息','计算机通信','消费品','能源采矿','居民服务']
          },
          yAxis: {
            name: '',
            type: 'value',
            show: false,
            nameRotate: 1,
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#C0C0C5'
              }
            },
            axisTick: {
              show: true
            },
            axisLabel: {
              fontSize: 13,
              color: '#5F5F6B'
            }
          },
          series: [
            {
              name: '4000以下',
              type: 'bar',
              stack: 'a',
              barWidth: '30%',
              data: ['200', '300', '300', '200', '200', '300', '180','111','124','158']
            },
            {
              name: '4000-5999',
              type: 'bar',
              stack: 'a',
              barWidth: '30%',
              data: ['250', '340', '310', '260', '290', '300', '110','111','124','158']
            },
            {
              name: '6000-7999',
              type: 'bar',
              stack: 'a',
              barWidth: '30%',
              data: ['300', '400', '300', '200', '300', '300', '280','111','124','158']
            },
            {
              name: '8000-9999',
              type: 'bar',
              stack: 'a',
              barWidth: '30%',
              data: ['300', '200', '300', '200', '200', '300', '260','111','124','158']
            },
            {
              name: '10000及以上',
              type: 'bar',
              stack: 'a',
              barWidth: '30%',
              data: ['400', '460', '420', '430', '420', '460', '520','111','124','158']
            }
          ]
        };
        myChart.setOption(option);
        window.onresize = myChart.resize;
      },
      compare(){
        var myChart=echarts.init(document.getElementById("compare"));
        var option = {
          title : {
            text: '行业人才需求对比',
            textStyle:{
              color:"#3a6ce1",
              fontSize:13
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '15%',
            top:'20%',
            containLabel: false
          },
          legend: {
            data: ['海口', '三亚'],
            right: '8%',
            top:'5%',
            textStyle: {
              color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
          },
          xAxis: {
            type: 'category',
            data: ['商业服务','文娱体育','房地产','批发零售','计算机通信','软件信息','能源采矿','消费品','居民服务','住宿餐饮'],
            axisLine: {
              lineStyle: {
                color: '#138EEE'
              }
            },
            axisLabel: {
              margin:15,
              inside:true,
              textStyle: {
                fontFamily: 'Microsoft YaHei',
                color:"#FFF",
                fontSize:10,
              },
              formatter:function(value){
                return value.split("").join("\n");
              }
            },
            axisTick:{
              show:false
            }
          },

          yAxis: {
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#138EEE'
              }
            },
            axisLabel:{
              show:false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)'
              }
            },

            axisTick:{
              show:false
            }
          },
          series: [{
            name: '海口',
            type: 'bar',
            barWidth: '30%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#D94076'
                }, {
                  offset: 1,
                  color: '#B83664'
                }]),
              },
            },
            data: [400, 400, 300, 300, 300,100,70,80,150,270]
          },
            {
              name: '三亚',
              type: 'bar',
              barWidth: '30%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#67C2EF'
                  }, {
                    offset: 1,
                    color: '#4877BD'
                  }]),
                }

              },
              data: [400, 500, 500, 500, 500,100,200,150,110,80]
            }]
        };
        myChart.setOption(option);
        window.onresize = myChart.resize;
      },
      relation(){
        var myChart=echarts.init(document.getElementById("relation"));
        var option = {
          title : {
            text: '各行业供需关系',
            textStyle:{
              color:"#3a6ce1",
              fontSize:13
            }

          },
          tooltip : {
            trigger: 'axis'
          },
          grid: {
            left: '15%',
            right: '5%',
            bottom: '10%',
            top:'20%',
            containLabel: false
          },
          legend: {
            right: '8%',
            top:'5%',
            data:['海口', '三亚'],
            textStyle:{
              color:'#1bb4f6'
            },
          },
          toolbox: {
            show : true,
          },
          calculable : true,
          xAxis : [
            {
              type : 'value',
              show:false,
              boundaryGap : [0, 0.01],
              axisLabel: {
                textStyle: {
                  fontSize: 18,
                  color: '#D5CBE8'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#DDD'
                }
              },
              splitLine: {
                lineStyle: {
                  type: 'dashed',
                  color: '#DDD'
                }
              }
            }
          ],
          yAxis : [
            {
              type : 'category',
              name:"",
              data : ['商业服务','文娱体育','房地产','批发零售','计算机通信','软件信息','能源采矿','消费品','居民服务','住宿餐饮'],
              axisTick: {
                show: false
              }  ,
              axisLabel: {
                textStyle: {
                  fontSize: 10,
                  color: '#D5CBE8'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#233972'
                }
              },
            }
          ],
          series : [
            {
              name:'海口',
              type:'bar',
              barWidth: '40%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#A41D48'
                  }, {
                    offset: 1,
                    color: '#EC5286'
                  }]),


                }

              },
              data:[100,150, 580, 850, 500,3000,111,222,333,4444],
            },
            {
              name:'三亚',
              type:'bar',
              barWidth: '40%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#20A1F5'
                  }, {
                    offset: 1,
                    color: '#3DE8FC'
                  }]),
                }
              },
              data:[200,300, 650, 880, 300,3500,112,270,678,789]
            }
          ]
        };
        myChart.setOption(option);
        window.onresize = myChart.resize;
      }
    }
  }
</script>
<style lang="scss" scoped>
  #index{

  }
</style>
