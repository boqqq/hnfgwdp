import jq from 'jquery';

export {
  config
}
var config = function (){
  let fz = jq('body').css('width').replace('px','')*0.006
  //alert(fz*0.006)
  let cof = {
    "fontSize":fz,//坐标轴字体大小
    "textStyle":{
      fontSize: fz,
      color:'#fff'
  },
    "lineStyle":{
      color: '#fff',
      width: 1
  }

  };
  return cof
}

