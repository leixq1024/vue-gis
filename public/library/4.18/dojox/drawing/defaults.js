//>>built
define({clickMode:!0,clickable:!0,current:null,currentHit:null,angleSnap:1,zAxis:!1,zAxisEnabled:!0,zAngle:225,renderHitLines:!0,renderHitLayer:!0,labelSameColor:!1,useSelectedStyle:!0,norm:{width:1,color:"#000000",style:"Solid",cap:"round",fill:"#CCCCCC"},selected:{width:6,color:"#00FF00"},highlighted:{width:6,color:"#FF00FF",style:"Solid",cap:"round",fill:"#E11EBB"},disabled:{width:1,color:"#666666",style:"solid",cap:"round",fill:"#cccccc"},hitNorm:{width:6,color:{r:0,g:255,b:255,a:0},style:"Solid",
cap:"round",fill:{r:255,g:255,b:255,a:0}},hitSelected:{width:6,color:"#FF9900",style:"Solid",cap:"round",fill:{r:255,g:255,b:255,a:0}},hitHighlighted:{width:6,color:"#FFFF00",style:"Solid",cap:"round",fill:{r:255,g:255,b:255,a:0}},anchors:{size:10,width:2,color:"#999",style:"solid",fill:"#fff",cap:"square",minSize:10,marginZero:5},arrows:{length:30,width:16},text:{minWidth:100,deleteEmptyCreate:!0,deleteEmptyModify:!0,pad:3,size:"18px",family:"sans-serif",weight:"normal",color:"#000000"},textDisabled:{size:"18px",
family:"sans-serif",weight:"normal",color:"#cccccc"},textMode:{create:{width:2,style:"dotted",color:"#666666",fill:null},edit:{width:1,style:"dashed",color:"#666",fill:null}},button:{norm:{color:"#cccccc",fill:{type:"linear",x1:0,x2:0,y1:0,y2:100,colors:[{offset:.5,color:"#ffffff"},{offset:1,color:"#e5e5e5"}]}},over:{fill:{type:"linear",x1:0,x2:0,y1:0,y2:100,colors:[{offset:.5,color:"#ffffff"},{offset:1,color:"#e1eaf5"}]},color:"#92a0b3"},down:{fill:{type:"linear",x1:0,x2:0,y1:0,y2:100,colors:[{offset:0,
color:"#e1eaf5"},{offset:1,color:"#ffffff"}]},color:"#92a0b3"},selected:{fill:{type:"linear",x1:0,x2:0,y1:0,y2:100,colors:[{offset:0,color:"#97b4bf"},{offset:1,color:"#c8dae1"}]},color:"#92a0b3"},icon:{norm:{fill:null,color:"#92a0b3"},selected:{fill:"#ffffff",color:"#92a0b3"}}},copy:function(){var e=function(a){if("object"!=typeof a||null===a||void 0===a)return a;if(a.push){var d=[];for(var b=0;b<a.length;b++)d.push(e(a[b]));return d}d={};for(b in a)"copy"!=b&&(d[b]="object"==typeof a[b]?e(a[b]):
a[b]);return d},c=e(this);c.current=c.norm;c.currentHit=c.hitNorm;c.currentText=c.text;return c}});