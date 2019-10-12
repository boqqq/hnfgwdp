import jq from 'jquery';

export {
  config,xAxis,xAxiss,yAxis,yAxiss,grid,tooltip,tooltip1,legend,dotHtml
}
var config = function (){
  let fz = jq(".title").css('font-size').replace('px','')
  let cof = {"fontSize":fz*0.6,//坐标轴字体大小
    "color":'#D5CBE8',//坐标轴和s字体颜色
    "legendFontSize":fz*0.6,//图例字体大小
    "legendColor":'#D5CBE8',//图例字体颜色
    "legendHeight":fz*0.6,//图例高度
    "legendWidth":2*fz*0.6,//图例宽度
    "textFontSize":0.6*fz,//弹出页面字体大小
    "nextTextFontSize":fz*1,//二级页面字体大小
    "symbolSize":fz*0.6/4,//折线图拐点圆点大小
    "lineWidth":fz*0.6/7, //折线图线宽
    "XYlineWidth":fz*0.05, //XY轴线宽
    "Xmargin":fz*0.5,   //x轴文字距离轴线距离
    "Ymargin":fz*0.3 ,  //x轴文字距离轴线距离
    "toppsize":fz*0.6,   //提示圆点大小
    "toolColor":'#fff',   //提示框字体颜色
    "toolFontSize":fz*0.6,   //提示框字体颜色
    "axisPointer":{
      type: "shadow",
      label: {
        show: false
      }
    },
    "textStyle":{
      color: '#fff',
      fontSize:fz*0.7
    }
  };
  return cof
}
var legend = function (data,icon,position) {//data图例数据   icon  是否显示为正方形
  let i = icon==1?'icon':''
  let w = config().legendWidth
  let r = typeof(position) == 'undefined'?'4%':position
  icon==1?w=config().legendHeight:w = config().legendWidth
  let l = {
    icon: i,
    itemWidth: w,
    itemHeight: config().legendHeight,
    itemGap: config().legendFontSize,
    data: data,
    right: r,
    textStyle: {
      fontSize: config().legendFontSize,
      color: config().legendColor
    }
  }
  return l;
}

//x轴
var xAxis = function (data,f,fl){//data 坐标轴数据   f是否显示轴线 fl是否隐藏x轴文字
  let s = f==false?f:true
  let l = fl==false?f:true
  let x =  {
    data: data,
    axisTick: {
      show: s,
      lineStyle: {
        color: config().color,
        width: config().XYlineWidth
      }
    },
    axisLine: {
      show: s,
      lineStyle: {
        color: config().color,
        width: config().XYlineWidth
      }
    },
    axisLabel: {
      show: l,
      margin:config().Xmargin,
      textStyle: {
        color: config().color,
        fontSize:config().fontSize
      }
    },
    splitLine: {
      show:false
    }
  };
  return x
};

//x轴
var xAxiss = function (param){//data 坐标轴数据   f是否显示轴线 fl是否隐藏x轴文字
  let s = param.lineShow==false?false:true
  let l = true
  if(typeof(param.labelShow) != 'undefined'&&param.labelShow==false&&param.labelShow != ''){
    l = false
  }
  let p = param.position=='top'?param.position:''
  let x =  {
    data: param.data,
    name:param.name,
    position:p,
    axisTick: {
      show: s,
      lineStyle: {
        color: config().color,
        width: config().XYlineWidth
      }
    },
    axisLine: {
      show: s,
      lineStyle: {
        color: config().color,
        width: config().XYlineWidth
      }
    },
    axisLabel: {
      show: l,
      margin:config().Xmargin,
      textStyle: {
        color: config().color,
        fontSize:config().fontSize
      }
    },
    splitLine: {
      show:param.splitLineShow,
      lineStyle: {
        type: param.splitLineType,
        color: param.splitLineColor == ''?'rgba(135,140,147,0.8)':param.splitLineColor,
        width: config().XYlineWidth*0.5,
      }
    }
  };
  return x
};


//y轴
var yAxiss = function (param){//data--数据  f --是否显示y轴   fl--是否显示y轴文字   po--y轴位置（left/right)默认left
  let s = param.lineShow==false?false:true
  let l = true
  if(typeof(param.labelShow) != 'undefined'&&param.labelShow==false&&param.labelShow != ''){
    l = false
  }
  let p = param.position=='right'?param.position:''
  let y =  {
    name:param.name,
    nameTextStyle: {
      color: config().color,
      fontSize:config().fontSize
    },
    //min:10,
    data: param.data,
    //splitNumber:6,
    position:p,
    axisTick: {
      show: s,
      lineStyle: {
        color: config().color,
        width: config().XYlineWidth
      }
    },
    axisLine: {
      show: s,
      lineStyle: {
        color: config().color,
        width: config().XYlineWidth
      }
    },
    axisLabel: {
      show: l,
      margin:config().Xmargin,
      formatter: "{value}"+param.unit,
      textStyle: {
        color: config().color,
        fontSize:config().fontSize
      }
    },
    splitLine: {
        show:param.splitLineShow,
        lineStyle: {
          type: param.splitLineType,
          color: param.splitLineColor == ''?'rgba(135,140,147,0.8)':param.splitLineColor,
          width: config().XYlineWidth*0.5,
        }
      }
  };
  return y
};


//y轴
 var yAxis = function (data,f,fl,po){//data--数据  f --是否显示y轴   fl--是否显示y轴文字   po--y轴位置（left/right)默认left
  let s = f==false?false:true
  let l = true
   if(typeof(fl) != 'undefined'&&fl==false&&fl != ''){
     l = false
   }
  let p = po=='right'?po:''
  let y =  {
    data: data,
    //splitNumber:6,
    position:p,
    axisTick: {
      show: s,
      lineStyle: {
        color: config().color,
        width: config().XYlineWidth
      }
    },
    axisLine: {
      show: s,
      lineStyle: {
        color: config().color,
        width: config().XYlineWidth
      }
    },
    axisLabel: {
      show: l,
      margin:config().Xmargin,
      formatter: "{value}",
      textStyle: {
        color: config().color,
        fontSize:config().fontSize
      }
    },
    splitLine: {
      show:false
    }
  };
  return y
};
var grid = function (top,bottom,left,right) {
  let t = top>0?top+'%':'10%'
  let b = bottom>0?bottom+'%':'5%'
  let l = left>0?left+'%':'3%'
  let r = right>0?right+'%':'3%'
  let g = {
    top: t,
    bottom: b,
    left:l,
    right:r,
    containLabel: true,
  };
  return g;
}
var tooltip = function () {
  let wh = config().toppsize
  let t = {
    trigger: "axis",
    axisPointer: config().axisPointer,
    textStyle: config().textStyle,
    formatter: function(params) {
      var result = params[0].axisValue
      params.forEach(function (item) {
        if(item.seriesType == 'line'||item.seriesType == 'bar') {
          result += "</br>" + dotHtml(item.color) + item.seriesName + '：' + item.data
        }
      })
      return result}
  };
  return t;
}
var tooltip1 = function () {
  let t = {
    trigger: "axis",
    textStyle: {
      color: config().toolColor,
      fontSize:config().toolFontSize
    },
  };
  return t;
}

var dotHtml = function (color) {
  let height = config().toppsize
  var dot = '<span style="display:inline-block;margin-right:5px;border-radius:' + height + 'px;width:' + height + 'px;height:' + height + 'px;background-color:' + color + ';"></span>';
  return dot;
}
