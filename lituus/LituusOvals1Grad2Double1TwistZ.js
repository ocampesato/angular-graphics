window.App = angular.module('App', []);

App.controller('MyCtrl', function($scope){
  $scope.getElems = function(){
    var basePointX  = 250, basePointY = 150;
    var currentX    = 0, currentY     = 0;
    var offsetX     = 0, offsetY      = 0;
    var radius      = 0, spiralCount  = 4;
    var Constant    = 200, angle      = 0;
    var deltaAngle  = 1, maxAngle     = 721;
    var radius      = 0, sine         = 0;
    var cosine      = 0, factor       = 1;
      
    var offsetX=0, offsetY=0, index=0;
    var rectWidth=40, rectHeight=60, elems=[], color="";
    var colors=["#FFFF00","#0000FF","#FF00FF","#FF0000"];
      
    for(angle=0; angle<maxAngle; angle+=deltaAngle) {
       radius   = Constant*Constant/angle;
       offsetX  = radius*Math.cos(angle*Math.PI/180);
       offsetY  = radius*Math.sin(angle*Math.PI/180);
       currentX = basePointX+offsetX;
       currentY = basePointY-offsetY;
     
       // alternate between red and blue
       index = Math.floor(angle/deltaAngle);
   
       elems.push({x:currentX, y:currentY,
                   rw:rectWidth, rh:rectHeight,
                   fill:colors[index%2]});
    }
  
    return elems;
  };
});

