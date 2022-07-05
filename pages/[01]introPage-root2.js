const textInIntro_introText = {
  startPosition : function(leftValue,topValue){
    let values = {
      width :"fit-contant",
      height: "fit-contant",
      backgroundColor:"none",
      position:"absolute",
      left:leftValue,
      top:topValue,
      color:"black",
      src: "none",
      id:"textIntro",
    }
    return values
  },
  intro : {
    startLeft:10,
    finishLeft:10,
    startTop :100,
    finishTop : 30,
    startScale:1,
    finishScale:1
  },
  
  I : {
    startLeft:10,
    finishLeft:-43,
    startTop :30,
    finishTop : 30,
    startScale:1,
    finishScale:2
  },
  My : {
    startLeft:-43,
    finishLeft:-130,
    startTop :30,
    finishTop : 30,
    startScale:2,
    finishScale:4
  }
}

export {textInIntro_introText}