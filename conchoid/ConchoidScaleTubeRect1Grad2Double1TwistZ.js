window.App = angular.module('App', []);

App.controller('MyCtrl', function($scope){
  $scope.getElems = function(){
    var basePointX  = 450, basePointY = 250;
    var currentX    = 0, currentY     = 0;
    var offsetX     = 0, offsetY      = 0;
    var radius      = 0, spiralCount  = 4;
    var Constant    = 0.25, angle     = 0;
    var Constant1   = 120, Constant2  = 80;
    var deltaAngle  = 1, maxAngle     = 721;
    var stripCount  = 10, stripWidth  = Math.floor(maxAngle/stripCount);
    var currStrip   = 0, index        = 0;
    var scaleFactor = 1, scaleFactors = [0.5, 1.0];
  
    var offsetX=0, offsetY=0, index=0;
    var rectWidth=40, rectHeight=60, elems=[], color="";
    var widthScaled=0, heightScaled=0;
    var colors=["#FFFF00","#FF00FF","#FF00FF","#FF0000"];
  
    for(angle=0; angle<maxAngle; angle+=deltaAngle) {
      radius   = Constant1+Constant2/
                       Math.cos(angle*Math.PI/180);
 
      offsetX  = radius*Math.cos(angle*Math.PI/180);
      offsetY  = radius*Math.sin(angle*Math.PI/180);
      currentX = basePointX+offsetX;
      currentY = basePointY-offsetY;
  
      // alternate between red and blue
      index = Math.floor(angle/deltaAngle);
  
      currStrip = Math.floor(angle/stripWidth);
      if(currStrip % 2 == 0) {
        scaleF = scaleFactors[0];
      } else {
        scaleF = scaleFactors[1];
      }
  
      widthScaled = rectWidth*scaleF;
      heightScaled = rectHeight*scaleF;
  
      var transform = "scale("+(2-2*angle/maxAngle)+")";
  
      // append an (x,y) pair of values that
      // represent the upper-left vertex
      elems.push({x:currentX, y:currentY,
                  rw:widthScaled, rh:heightScaled,
                  tr:transform,  fill:colors[index%2]});
    }
  
    return elems;
  };
});

