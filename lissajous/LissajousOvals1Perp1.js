window.App = angular.module('App', []);

App.controller('MyCtrl', function($scope){
  $scope.getElems = function(){
    var basePointX  = 250, basePointY = 250;
    var currentX    = 0, currentY     = 0;
    var offsetX     = 0, offsetY      = 0;
    var radius      = 0, spiralCount  = 4;
    var Constant    = 0.25, angle     = 0;
    var A           = 200, B          = 2;
    var C           = 100, D          = 5;
    var deltaAngle  = 1, maxAngle     = 721;
  
    var offsetX=0, offsetY=0, index=0;
    var majorAxis=40, minorAxis=80, elems=[], color="";
    var colors=["#FF0000","#FFFF00","#FF00FF","#FF0000"];
      
    for(angle=0; angle<maxAngle; angle+=deltaAngle) {
      offsetX  = A*Math.sin(B*angle*Math.PI/180);
      offsetY  = C*Math.cos(D*angle*Math.PI/180);
      currentX = basePointX+offsetX;
      currentY = basePointY-offsetY;
  
      // alternate between red and blue
      index = Math.floor(angle/deltaAngle);
  
      // append an (x,y) pair of values that
      // represent the upper-left vertex
      elems.push({cx:currentX,  cy:currentY,
                  rx:majorAxis, ry:minorAxis,
                  fill:colors[index%2]});
  
      elems.push({cx:currentX,  cy:currentY,
                  rx:minorAxis, ry:majorAxis,
                  fill:colors[index%2]});
    }

    return elems;
  };
});

