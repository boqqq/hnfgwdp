<template>
  <div id="index">
    <div class = "chart_main">
    <el-row>
      <el-col :span="7">
        <el-row>
          <el-col :span="24">
            <div class = "fix_left">

            </div>
          </el-col>
          <el-col :span="24">
            <div class = "fix_left">

            </div>
          </el-col>
          <el-col :span="24">
            <div class = "fix_left">

            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="10">
        <el-row>
          <el-col :span="24">
            <div class = "fix_center" style="height:47.4vh">
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
            <div class = "fix_center" style="height:40vh">

            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="7">
        <el-row>
          <el-col :span="24">
            <div class = "fix_right">

            </div>
          </el-col>
          <el-col :span="24">
            <div class = "fix_right">

            </div>
          </el-col>
          <el-col :span="24">
            <div class = "fix_right">

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

    mounted () {
      this.chart_center1();
    },
    methods: {
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
           window.onresize = chart5.resize;
       }
    }
  }
</script>
<style lang="scss" scoped>
  #index{
    .ind_tit{
     font-size: 16px;
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
      font-size: 16px;
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
  }
</style>
