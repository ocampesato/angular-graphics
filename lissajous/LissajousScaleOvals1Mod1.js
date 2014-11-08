window.App = angular.module('App', []);

App.controller('MyCtrl', function($scope){
  $scope.getElems = function(){
    var basePointX  = 450, basePointY = 250;
    var currentX    = 0, currentY     = 0;
    var offsetX     = 0, offsetY      = 0;
    var radius      = 0, spiralCount  = 4;
    var Constant    = 0.25, angle     = 0;
    var A           = 200, B          = 2;
    var C           = 100, D          = 5;
    var deltaAngle  = 1, maxAngle     = 721;
    var modulusX    = 0, modulusY     = 0;
      
    var offsetX=0, offsetY=0, index=0;
    var majorAxis=40, minorAxis=60, elems=[], color="";
    var colors=["#FF0000","#0000FF","#FF00FF","#FF0000"];
      
    for(angle=0; angle<maxAngle; angle+=deltaAngle) {
      offsetX  = A*Math.sin(B*angle*Math.PI/180);
      offsetY  = C*Math.cos(D*angle*Math.PI/180);
      currentX = basePointX+offsetX;
      currentY = basePointY-offsetY;
      modulusX = angle % majorAxis;
      modulusY = angle % minorAxis;
    
      // alternate between red and blue
      index = Math.floor(angle/deltaAngle);
  
      var transform = "scale("+(2*angle/maxAngle)+")";
  
      // append an (x,y) pair of values that
      // represent the upper-left vertex
      elems.push({cx:currentX,  cy:currentY,
                  rx:modulusX,  ry:modulusY,
                  tr:transform, fill:colors[index%2]});
    }
   
    return elems;
  };
});

