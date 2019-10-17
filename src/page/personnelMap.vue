<template>
  <div id="index">
    <div class = "chart_main">
      <el-row>
        <el-col :span="15">
          <el-row>
            <el-col :span="24">
              <div class = "fix_left h11">
                <div class = "_tit2"><h4>专家地图</h4></div>
                <div id = "professorMap" class = "h9">

                </div>
                <el-row>
                  <el-col :span="24">
                    <div class = "h1">
                      <span style="font-size:0.8vw;color:#1EFFFF;margin-left: 3%;">专家总数:{{professorCount}}</span>
                      <span style="font-size:0.8vw;color:#1EFFFF;margin-right: 3%;float: right" id="count"></span>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <!--<div style="font-size:12%;color:#1EFFFF;">专家总数:{{professorCount}}</div>
              <div id="count" style="font-size:12%;color:#1EFFFF;"></div>-->
            </el-col>
            <el-col :span="24">
              <el-row>
                <el-col :span="12">
                  <div class = "fix_left h11">
                    <div class = "_tit2"><h4>就业压力指数</h4></div>
                    <div id = "pressure" class = "h10">

                    </div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class = "fix_center2 h11">
                    <div class = "_tit2"><h4>人才需求结构</h4></div>
                    <div id = "structure" class = "h10">

                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="9">
          <el-row>
            <el-col :span="24">
              <div class = "fix_right2 h13">
                <div class = "_tit2"><h4>各行业供需关系</h4></div>
                <div id = "relation" class = "h12">

                </div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "fix_right2 h9">
                <div class = "_tit2"><h4>行业人才需求对比</h4></div>
                <div id = "compare" class = "h8">

                </div>
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
        professorCount:0,
        title:'',
        count:0,
        display:false,
        professorData:{
          "name": "海南",
          "children": [{
            "name": "经济与管理科学",
            "children": [
              {
                "name": "财政与税收",
                "value": 5842
              },{
                "name": "投资",
                "value": 5842},{"name": "服务业经济",
                "value": 5232},{"name": "农业经济",
                "value": 5845},{"name": "贸易经济",
                "value": 1242},{"name": "信息经济与邮政经济",
                "value": 5222},{"name": "管理学",
                "value": 5112},{"name": "会计",
                "value": 1842},{"name": "企业经济",
                "value": 842},{"name": "经济体制改革",
                "value": 42},{"name": "工业经济",
                "value": 142},{"name": "旅游",
                "value": 242},{"name": "宏观经济管理与可持续发展",
                "value": 342},{"name": "金融",
                "value": 542},{"name": "审计",
                "value": 642},{"name": "交通运输经济",
                "value": 1242}
            ]
          }, {
            "name": "信息科技",
            "children": [{
              "name": "Easing",
              "value": 17010
            }, {
              "name": "FunctionSequence",
              "value": 5842
            }, {
              "name": "interpolate",
              "value":1234
            }, {
              "name": "ISchedulable",
              "value": 1041
            }, {
              "name": "Parallel",
              "value": 5176
            }, {
              "name": "Pause",
              "value": 449
            }, {
              "name": "Scheduler",
              "value": 5593
            }, {
              "name": "Sequence",
              "value": 5534
            }, {
              "name": "Transition",
              "value": 9201
            }, {
              "name": "Transitioner",
              "value": 19975
            }, {
              "name": "TransitionEvent",
              "value": 1116
            }, {
              "name": "Tween",
              "value": 6006
            }]
          }, {
            "name": "哲学与人文科学",
            "children": [{
              "name": "converters",
              "value":3456
            }, {
              "name": "DataField",
              "value": 1759
            }, {
              "name": "DataSchema",
              "value": 2165
            }, {
              "name": "DataSet",
              "value": 586
            }, {
              "name": "DataSource",
              "value": 3331
            }, {
              "name": "DataTable",
              "value": 772
            }, {
              "name": "DataUtil",
              "value": 3322
            }]
          }, {
            "name": "工程科技",
            "children": [{
              "name": "DirtySprite",
              "value": 8833
            }, {
              "name": "LineSprite",
              "value": 1732
            }, {
              "name": "RectSprite",
              "value": 3623
            }, {
              "name": "TextSprite",
              "value": 10066
            }]
          }, {
            "name": "社会科学",
            "children": [{
              "name": "FlareVis",
              "value": 4116
            }]
          }, {
            "name": "农业科技",
            "children": [{
              "name": "DragForce",
              "value": 1082
            }, {
              "name": "GravityForce",
              "value": 1336
            }, {
              "name": "IForce",
              "value": 319
            }, {
              "name": "NBodyForce",
              "value": 10498
            }, {
              "name": "Particle",
              "value": 2822
            }, {
              "name": "Simulation",
              "value": 9983
            }, {
              "name": "Spring",
              "value": 2213
            }, {
              "name": "SpringForce",
              "value": 1681
            }]
          }, {
            "name": "基础科学",
            "children": [{
              "name": "AggregateExpression",
              "value": 1616
            }, {
              "name": "And",
              "value": 1027
            }, {
              "name": "Arithmetic",
              "value": 3891
            }, {
              "name": "Average",
              "value": 891
            }, {
              "name": "BinaryExpression",
              "value": 2893
            }, {
              "name": "Comparison",
              "value": 5103
            }, {
              "name": "CompositeExpression",
              "value": 3677
            }, {
              "name": "Count",
              "value": 781
            }, {
              "name": "DateUtil",
              "value": 4141
            }, {
              "name": "Distinct",
              "value": 933
            }, {
              "name": "Expression",
              "value": 5130
            }, {
              "name": "ExpressionIterator",
              "value": 3617
            }, {
              "name": "Fn",
              "value": 3240
            }, {
              "name": "If",
              "value": 2732
            }, {
              "name": "IsA",
              "value": 2039
            }, {
              "name": "Literal",
              "value": 1214
            }, {
              "name": "Match",
              "value": 3748
            }, {
              "name": "Maximum",
              "value": 843
            },  {
              "name": "Minimum",
              "value": 843
            }, {
              "name": "Not",
              "value": 1554
            }, {
              "name": "Or",
              "value": 970
            }, {
              "name": "Query",
              "value": 13896
            }, {
              "name": "Range",
              "value": 1594
            }, {
              "name": "StringUtil",
              "value": 4130
            }, {
              "name": "Sum",
              "value": 791
            }, {
              "name": "Variable",
              "value": 1124
            }, {
              "name": "Variance",
              "value": 1876
            }, {
              "name": "Xor",
              "value": 1101
            }]
          }, {
            "name": "医药卫生科技",
            "children": [{
              "name": "IScaleMap",
              "value": 2105
            }, {
              "name": "LinearScale",
              "value": 1316
            }, {
              "name": "LogScale",
              "value": 3151
            }, {
              "name": "OrdinalScale",
              "value": 3770
            }, {
              "name": "QuantileScale",
              "value": 2435
            }, {
              "name": "QuantitativeScale",
              "value": 4839
            }, {
              "name": "RootScale",
              "value": 1756
            }, {
              "name": "Scale",
              "value": 4268
            }, {
              "name": "ScaleType",
              "value": 1821
            }, {
              "name": "TimeScale",
              "value": 5833
            }]
          }]
        },
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
      this.professorMap();
      this.countProfessors(this.professorData);
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

          grid: {
            left: '5%',
            right: '5%',
            top:'10%',
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
          color: ['#9307C0', '#6AC9F5', '#E1427A', '#8DC1AA','#EA7D52'],
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
            top: '3%',
            right: '5%',
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
            top:'13%',
            bottom: '20%',
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

          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '8%',
            top:'10%',
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
            zlevel:10,
            data: ['商业服务','文娱体育','房地产','批发零售','计算机通信','软件信息','能源采矿','消费品','居民服务','住宿餐饮'],
            axisLine: {
              lineStyle: {
                color: '#138EEE'
              }
            },
            axisLabel: {
              margin:5,
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
          tooltip : {
            trigger: 'axis'
          },
          grid: {
            left: '15%',
            right: '5%',
            bottom: '5%',
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
            itemWidth: 12,
            itemHeight: 10,
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
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
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
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
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
      },
      professorMap(){

        var myChart=echarts.init(document.getElementById("professorMap"));
        var option = {
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          calculable : true,
          series: [
            {
              type: 'tree',
              lineStyle:{
                color:'#3a6ce1'
              },
              data: [this.professorData],
              top: '20%',
              left: '7%',
              bottom: '1%',
              right: '20%',
              width:'50%',
              height:'60%',
              symbolSize: 7,
              itemStyle:{
                color:'blue',
                borderColor:'blue'
              },
              label: {
                normal: {
                  position: 'left',
                  verticalAlign: 'middle',
                  align: 'right',
                  fontSize: 9,
                  color:'#FFF'
                }
              },

              leaves: {
                label: {
                  normal: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                  }
                }
              },
              initialTreeDepth:1,
              expandAndCollapse: true,
              animationDuration: 550,
              animationDurationUpdate: 750
            }
          ]
        };
        myChart.setOption(option);
        myChart.on("click", eConsole);
        function eConsole(data) {
          var child=data.data.children;
          var title=data.data['name'];
          var count=0;
          for(var i in child){
            count+=child[i]['value']
          }
          if(title !="海南"){
            document.getElementById("count").innerText=title+"专家数:"+count;
          }
        }
      },
      countProfessors(data){
        var child=data.children;
        var count=0;
        for(var i in child){
          for(var t in child[i].children){
            var temp=child[i].children;
            count+=temp[t]['value'];
          }
        }
        this.professorCount=count;
      }
    }
  }
</script>
<style lang="scss" scoped>
  #index{

  }
</style>
