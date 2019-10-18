<template>
  <div id="index" >
    <div class = "chart_main" >
      <el-row>
        <el-col :span="8">
          <div class = "fix_up content-padding h11">

            <el-row>
              <el-col :span="12">
                <div class = "_tit2"><h4>社会消费品零售总额</h4></div>
              </el-col>
              <el-col :span="12" >
                <div  class = "h1 indu_butt ">
                  <el-button size="mini" @click="IncrementTypeChange(1)" :class="{'btn-selected':IncrementType == 1}" style="margin-left: 90px">按消费形态</el-button>
                  <el-button size="mini" @click="IncrementTypeChange(2)" :class="{'btn-selected':IncrementType == 2}" style="margin-left: 10px">按经营地</el-button>
                </div>
              </el-col>
            </el-row>

            <div id="bar_increment" style="height: 80%">

            </div>



          </div>
        </el-col>

        <el-col :span="8">
          <div class = "fix_up content-padding">
            <div class = "_tit2"><h4>商圈分布情况</h4></div>
            <div id = "shopping_center" class = "h10"></div>
          </div>
        </el-col>

        <el-col :span="8">
          <div class = "fix_up content-padding">

            <div class = "_tit2"><h4>网上零售总额</h4></div>
            <div id="total-retail" style="height: 100% ;"></div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class = "fix_down content-padding">

            <div class = "_tit2"><h4>消费环境评价指数</h4></div>
            <div id="consume-index" style="height: 100%;"></div>

          </div>


        </el-col>

        <el-col :span="8">
          <div class = "fix_down">

          </div>
        </el-col>

        <el-col :span="8">
          <div class = "fix_down content-padding ">
            <div class = "_tit2"><h4>离岛免税购物</h4></div>
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
    import '../../static/js/map/hainan.js';
    import hainan from '../../static/js/json/hainan.json';
    import {config} from '../../static/js/config/chartConfig.js';
    //import {config,xAxiss,yAxiss,grid,tooltip,dotHtml,legend} from '../../static/js/config/chartConfig.js';
    var echarts = require('echarts');
    export default {
        name:"consumeption",
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
            //商业圈分部
            this.init_shopping_center()
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
                        right:'50',
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
                        bottom: '60%',
                        top:'9%',
                        height: '75%',
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
                        right:'4%',
                        textStyle:{
                            color : 'white',
                        },
                        data:['海南','全国']
                    },

                    grid: {
                        top:'10%',
                        left: '4%',
                        right: '4%',
                        bottom: '4%',
                        height:'70%',
                        width:'90%',
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
                        top:'5%',
                        right:'2%',
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
                        top:'13%',
                        left: '2%',
                        right: '2%',
                        bottom: '22%',
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
            },
            //商圈分布
            init_shopping_center(){
                let shopping_center = echarts.init(document.getElementById('shopping_center'));
                echarts.registerMap('hainan',  hainan)
                var pd = [{"name":"海口","value":[110.326837,20.031624,"海口","20.18"]}]
                var   option = {
                    tooltip: {
                        trigger: 'item',
                        textStyle: config().textStyle,
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
                        data:['shopping'],
                        textStyle: config().textStyle,
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

                    geo: {
                        show: true,
                        map: 'hainan',
                        layoutSize: "500%",
                        zoom:9,
                        center: [109.76112,19.2472],
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
                        { //城市点位
                            name: 'city',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            symbol: 'circle',
                            symbolSize: 30,
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            },
                            zlevel: 9,
                            data: pd,
                        },
                        { //城市点位
                            name: 'city',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'pin',
                            symbolSize: 50,
                            itemStyle: {
                                normal: {
                                    color: 'yellow'
                                }
                            },
                            zlevel: 9,
                            data: pd,
                        }
                    ]
                };
                shopping_center.setOption(option)
                window.onresize = shopping_center.resize;
            }
        }
    }
</script>
<style lang="scss" scoped>
  $title-color1:#128eee;
  #index{
    .indu_butt{
      text-align: center;
      margin-top: 2vh;
    }
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
  }
</style>
