//>>built
define(["dojox/main","dojo/_base/lang","dojo/_base/array"],function(k,l,m){var e=l.getObject("date.hebrew.numerals",!0,k),f=function(a,b){a=a.replace("\u05d9\u05d4","\u05d8\u05d5").replace("\u05d9\u05d5","\u05d8\u05d6");b||(b=a.length,a=1<b?a.substr(0,b-1)+'"'+a.charAt(b-1):a+"\u05f3");return a},h=function(a){var b=0;m.forEach(a,function(d){var c;-1!=(c="\u05d0\u05d1\u05d2\u05d3\u05d4\u05d5\u05d6\u05d7\u05d8".indexOf(d))?b+=++c:-1!=(c="\u05d9\u05db\u05dc\u05de\u05e0\u05e1\u05e2\u05e4\u05e6".indexOf(d))?
b+=10*++c:-1!=(c="\u05e7\u05e8\u05e9\u05ea".indexOf(d))&&(b+=100*++c)});return b},g=function(a){for(var b="",d=4,c=9;a;)a>=100*d?(b+="\u05e7\u05e8\u05e9\u05ea".charAt(d-1),a-=100*d):1<d?d--:a>=10*c?(b+="\u05d9\u05db\u05dc\u05de\u05e0\u05e1\u05e2\u05e4\u05e6".charAt(c-1),a-=10*c):1<c?c--:0<a&&(b+="\u05d0\u05d1\u05d2\u05d3\u05d4\u05d5\u05d6\u05d7\u05d8".charAt(a-1),a=0);return b};e.getYearHebrewLetters=function(a){return f(g(a%1E3))};e.parseYearHebrewLetters=function(a){return h(a)+5E3};e.getDayHebrewLetters=
function(a,b){return f(g(a),b)};e.parseDayHebrewLetters=function(a){return h(a)};e.getMonthHebrewLetters=function(a){return f(g(a+1))};e.parseMonthHebrewLetters=function(a){a=e.parseDayHebrewLetters(a)-1;if(-1==a||12<a)throw Error("The month name is incorrect , month \x3d "+a);return a};return e});