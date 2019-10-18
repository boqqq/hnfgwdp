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
              <div class = "fix_center">

              </div>
            </el-col>
            <el-col :span="24">
              <div class = "fix_center" style="height:59.5vh">

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

    },
    methods: {

    }
  }
</script>
<style lang="scss" scoped>
  #index{

  }
</style>
