// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers","./moment"],function(e,c,f){var b=c.createCommonjsModule(function(h,k){(function(d,a){"function"===typeof c.commonjsRequire?a(f.moment$1):a(d.moment)})(c.commonjsGlobal,function(d){return d.defineLocale("fr-ca",{months:"janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),monthsShort:"janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),monthsParseExact:!0,weekdays:"dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),
weekdaysShort:"dim. lun. mar. mer. jeu. ven. sam.".split(" "),weekdaysMin:"di lu ma me je ve sa".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \u00e0] LT",nextDay:"[Demain \u00e0] LT",nextWeek:"dddd [\u00e0] LT",lastDay:"[Hier \u00e0] LT",lastWeek:"dddd [dernier \u00e0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",
ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(a,g){switch(g){default:case "M":case "Q":case "D":case "DDD":case "d":return a+(1===a?"er":"e");case "w":case "W":return a+(1===a?"re":"e")}}})})});b=Object.freeze(Object.assign(Object.create(null),b,{"default":b}));e.frCa=b});