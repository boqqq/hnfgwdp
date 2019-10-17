<template>
  <div id="index" >
    <div class = "chart_main" style="padding: 0">
      <el-row>
        <el-col :span="8">
          <div class = "fix_up content-padding">

            <el-row>
              <el-col :span="12">
                <span class="title-gb1">社会消费品零售总额</span>
              </el-col>
              <el-col :span="12" style="margin-bottom: 10px;margin-top: 5px">
                <el-button size="mini" @click="IncrementTypeChange(1)" :class="{'btn-selected':IncrementType == 1}" style="margin-left: 40px">按消费形态</el-button>
                <el-button size="mini" @click="IncrementTypeChange(2)" :class="{'btn-selected':IncrementType == 2}" style="margin-left: 10px">按经营地</el-button>

              </el-col>
            </el-row>

            <div id="bar_increment" style="height: 80%">

            </div>



          </div>
        </el-col>

        <el-col :span="8">
          <div class = "fix_up">

          </div>
        </el-col>

        <el-col :span="8">
          <div class = "fix_up content-padding">

             <div><span class="title-gb1">网上零售总额</span></div>
            <div id="total-retail" style="height: 100% ;"></div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class = "fix_down content-padding">

            <div><span class="title-gb1">消费环境评价指数</span></div>
            <div id="consume-index" style="height: 100%;"></div>

          </div>


        </el-col>

        <el-col :span="8">
          <div class = "fix_down">

          </div>
        </el-col>

        <el-col :span="8">
          <div class = "fix_down content-padding ">
            <div><span class="title-gb1">离岛免税购物</span></div>
            <div id="shoppingType" style="float: right;padding-right: 23px"  >
              <el-button size="mini" @click="shoppingTypeChange(1)" :class="{'btn-selected':IncrementType == 1}" style="margin-left: 40px;">人次</el-button>
              <el-button size="mini" @click="shoppingTypeChange(2)" :class="{'btn-selected':IncrementType == 2}" style="margin-left: 10px">数量</el-button>
              <el-button size="mini" @click="shoppingTypeChange(3)" :class="{'btn-selected':IncrementType == 3}" style="margin-left: 10px">金额</el-button>
            </div>
            <div id="taxfree-shopping" style="height: 100%;"></div>

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
          IncrementType:1,
      }
    },
    components: {
    },
    created () {
    },
    beforeDestroy() {

    },
    mounted () {
        //社会消费品零售总额
        this.initIncrement();
        //网上零售总额
        this.init_total_retail();
        //消费环境评价指数
        this.init_consume_index();
        //离岛免税购物
        this.init_taxfree_shopping()
    },
    methods: {
        //社会消费品零售总额
        IncrementTypeChange(val){
            this.IncrementType = val;
        },
        initIncrement(){
            console.log('=====')
            var bar_increment = echarts.init(document.getElementById('bar_increment'),'macarons');
            var option = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    top:'10',
                    right:10,
                    textStyle:{
                      color : 'white',
                    },
                    data:['商品','餐饮','增速',]
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        axisLabel:{
                            interval:0,
                            color:'#fff',
                            margin:20
                        },
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitLine:false,
                    },

                ],
                series : [
                    {
                        name:'商品',
                        type:'bar',
                        stack: '额度',
                        color:'#10a2ff',
                        data:[40, 40, 40, 40, 50, 60, 70, 80, 90, 100, 110, 120]
                    },
                    {
                        name:'餐饮',
                        type:'bar',
                        stack: '额度',
                        color:'#ff2e83',
                        data:[40, 40, 50, 60, 70, 60, 70, 80, 90, 100, 110, 120]
                    },

                    {
                        name:'增速',
                        type:'line',
                        stack: '增速',
                        data:[10, 20, 70, 80, 90, 60, 70, 80, 90, 100, 110, 120]
                    },


                ]
            };
            bar_increment.setOption(option)
        },
        //网上零售总额
        init_total_retail(){
            console.log('=====')
            var bar_increment = echarts.init(document.getElementById('total-retail'),'macarons');
            var option = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    top:1,
                    right:40,
                    bottom:10,
                    orient: 'vertical',
                    textStyle:{
                        color : 'white',
                    },
                    data:['海南买方交易额','海南卖方交易额','增速',]
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '17%',
                    top:'24%',
                    height: '60%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        axisLabel:{
                            interval:0,
                            color:'#fff',
                            margin:20
                        },
                        data : ['2017Q1','2017Q2','2017Q3','2017Q4','2018Q1','2018Q2','2018Q3']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',

                        splitLine:false,
                    },

                ],
                series : [
                    {
                        name:'海南买方交易额',
                        type:'bar',
                        stack: '广告',
                        color:'#09f5ff',
                        data:[ 60, 70, 80, 90, 100, 110, 120]
                    },
                    {
                        name:'海南卖方交易额',
                        type:'bar',
                        stack: '广告',
                        color:'#eee810',
                        data:[60, 70, 80, 90, 100, 110, 120]
                    },

                    {
                        name:'增速',
                        type:'line',
                        stack: '广告',
                        data:[60, 70, 80, 90, 100, 110, 120]
                    },


                ]
            };
            bar_increment.setOption(option)
        },
        //消费环境评价指数
        init_consume_index(){
            var consume_index = echarts.init(document.getElementById('consume-index'),'macarons');
            var option = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                    legend: {
                        top:0,
                        right:10,
                        textStyle:{
                            color : 'white',
                        },
                        data:['海南','全国']
                    },

                grid: {
                    top:'15%',
                    left: '0%',
                    right: '4%',
                    bottom: '8%',
                    show:false,
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#406ba7'
                            }
                        },
                        axisLabel:{
                            interval:0,
                            color:'#fff',

                        },
                        boundaryGap: false,
                        data : ['2015/01','2015/07','2016/01','2016/07','2017/01','2017/07','2018/01','2018/07']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        show:false
                    }
                ],
                series : [
                    {
                        name:'海南',
                        type:'line',
                        smooth:true,
                        color:'rgb(255,22,141)',
                        areaStyle: {
                            color: {
                                type: 'linear',  x: 0, y: 0,
                                x2: 0, y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgb(255,13,211,0.2)' // 0% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        },
                        stack: '海南',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data:[6, 7, 6, 7, 5, 6, 7,8,]
                    },
                    {
                        name:'全国',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgb(9,132,255,0.2)' // 0% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        },
                        itemStyle:{
                            normal:{
                                lineStyle:{
                                    width:2,
                                    type:'dotted'  //'dotted'虚线 'solid'实线
                                }
                            }
                        },
                        stack: '全国',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data:[7, 6, 7, 6, 6, 7, 6,7,]
                    }

                ]
            };
            consume_index.setOption(option);

        },
        //离岛免税购物
        init_taxfree_shopping(){
            var taxfree_shopping = echarts.init(document.getElementById('taxfree-shopping'),'macarons');

            var option = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    top:'8%',
                    right:'10%',
                    textStyle:{
                        color : 'white',
                    },
                    data:['总额','增速']
                },
                xAxis: {
                    type: 'category',
                    axisLabel:{
                        interval:0,
                        color:'#fff',

                    },
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                },
                yAxis: {
                    type: 'value'
                },
                grid: {
                    top:'20%',
                    left: '0%',
                    right: '4%',
                    bottom: '18%',
                    containLabel: true
                },
                series: [{
                    name:'总额',
                    data: [120, 200, 150, 110, 100, 110, 130, 150, 105, 108, 110, 130],
                    type: 'bar',
                    itemStyle: {    // 图形的形状
                        color: {
                            type: 'linear',  x: 0, y: 0,
                            x2: 0, y2: 1,
                            colorStops: [{
                                offset: 0.4, color: 'rgb(255,249,38)' // 0% 处的颜色
                            },
                                {
                                    offset:1, color: 'rgb(255,22,141)' // 100% 处的颜色
                                }],
                            globalCoord: false // 缺省为 false
                        },
                        barBorderRadius: [5, 5, 0 ,0]
                    },
                },
                    {
                        name:'增速',
                        type:'line',
                        stack: '增速',
                        itemStyle: {
                            color:'rgb(30,129,238)'
                        },
                        data:[100, 200, 130, 110, 100, 110, 110, 130, 105, 108, 110, 130]
                    }

                ]
            }
            taxfree_shopping.setOption(option);
        }

    }
  }
</script>
<style lang="scss" scoped>
  $title-color1:#128eee;
  #index{
    .fix_up{
      border: 1px solid #23A9F3;
      margin-top: 2vh;
      margin-bottom: 1vh;
      margin-left: 1vh;
      margin-right: 1vh;
      height: 45vh;
    }

    .fix_down{
      border: 1px solid #23A9F3;
      margin-top: 1vh;
      margin-bottom: 0vh;
      margin-left: 1vh;
      margin-right: 1vh;
      height: 40vh;
    }
    .title-gb1{
      color: #128eee;
      font-weight: bolder;
      font-size: 14px
    }
    .title-gb1::before{
      width: 10px;
      content:"|";
      border-radius: 2px;
      color: red;
      margin-right: 5px;
      background-color: red;
    }
    .content-padding{
      padding: 7px;
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
      color: #128eee;
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
