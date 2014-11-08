window.App = angular.module('App', []);

App.controller('MyCtrl', function($scope){
  $scope.getElems = function(){
    var basePointX  = 450, basePointY = 350;
    var currentX    = 0, currentY     = 0;
    var offsetX     = 0, offsetY      = 0;
    var radius      = 0, spiralCount  = 4;
    var Constant    = 20000, angle    = 0;
    var deltaAngle  = 1, maxAngle     = 721;
      
    var offsetX=0, offsetY=0, index=0;
    var majorAxis=40, minorAxis=60, elems=[], color="";
    var colors=["#FF0000","#0000FF","#FF00FF","#FF0000","#FFFF00"];
      
    for(angle=1; angle<maxAngle; angle+=deltaAngle) {
      radius = Constant*
               Math.sin(angle*Math.PI/180)/angle;
 
      offsetX  = radius*Math.cos(angle*Math.PI/180);
      offsetY  = radius*Math.sin(angle*Math.PI/180);
      currentX = basePointX+offsetX;
      currentY = basePointY-offsetY;
    
      // alternate between red and blue
      index = Math.floor(angle/deltaAngle);
   
      var transform = "skewX("+(-angle%20)+")";
  
      // append an (x,y) pair of values that
      // represent the upper-left vertex
      elems.push({cx:currentX,  cy:currentY,
                  rx:majorAxis, ry:minorAxis,
                  tr:transform, fill:colors[index%3]});
  
      elems.push({cx:currentX+majorAxis,  cy:currentY,
                  rx:majorAxis, ry:minorAxis,
                  tr:transform, fill:colors[(index)%colors.length]});
  
      elems.push({cx:currentX+majorAxis/2,  cy:currentY+minorAxis,
                  rx:majorAxis, ry:minorAxis,
                  tr:transform, fill:colors[(2+index%4)%colors.length]});
    }
  
    return elems;
  };
});

