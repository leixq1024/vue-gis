//>>built
define(["../_base/lang","../_base/array"],function(l,k){var g={};l.setObject("dojo.date.stamp",g);g.fromISOString=function(b,c){g._isoRegExp||(g._isoRegExp=/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);var a=g._isoRegExp.exec(b);b=null;if(a){a.shift();a[1]&&a[1]--;a[6]&&(a[6]*=1E3);c&&(c=new Date(c),k.forEach(k.map("FullYear Month Date Hours Minutes Seconds Milliseconds".split(" "),function(d){return c["get"+d]()}),function(d,h){a[h]=
a[h]||d}));b=new Date(a[0]||1970,a[1]||0,a[2]||1,a[3]||0,a[4]||0,a[5]||0,a[6]||0);100>a[0]&&b.setFullYear(a[0]||1970);var f=0,e=a[7]&&a[7].charAt(0);"Z"!=e&&(f=60*(a[8]||0)+(Number(a[9])||0),"-"!=e&&(f*=-1));e&&(f-=b.getTimezoneOffset());f&&b.setTime(b.getTime()+6E4*f)}return b};g.toISOString=function(b,c){var a=function(h){return 10>h?"0"+h:h};c=c||{};var f=[],e=c.zulu?"getUTC":"get",d="";"time"!=c.selector&&(d=b[e+"FullYear"](),d=["0000".substr((d+"").length)+d,a(b[e+"Month"]()+1),a(b[e+"Date"]())].join("-"));
f.push(d);"date"!=c.selector&&(d=[a(b[e+"Hours"]()),a(b[e+"Minutes"]()),a(b[e+"Seconds"]())].join(":"),e=b[e+"Milliseconds"](),c.milliseconds&&(d+="."+(100>e?"0":"")+a(e)),c.zulu?d+="Z":"time"!=c.selector&&(b=b.getTimezoneOffset(),c=Math.abs(b),d+=(0<b?"-":"+")+a(Math.floor(c/60))+":"+a(c%60)),f.push(d));return f.join("T")};return g});