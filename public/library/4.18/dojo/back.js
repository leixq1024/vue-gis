//>>built
define("./_base/config ./_base/lang ./sniff ./dom ./dom-construct ./_base/window require".split(" "),function(h,F,m,G,H,I,z){function k(){var a=c.pop();if(a){var b=c[c.length-1];b||0!=c.length||(b=n);b&&(b.kwArgs.back?b.kwArgs.back():b.kwArgs.backButton?b.kwArgs.backButton():b.kwArgs.handle&&b.kwArgs.handle("back"));e.push(a)}}function r(){var a=e.pop();a&&(a.kwArgs.forward?a.kwArgs.forward():a.kwArgs.forwardButton?a.kwArgs.forwardButton():a.kwArgs.handle&&a.kwArgs.handle("forward"),c.push(a))}function p(a,
b,f){return{url:a,kwArgs:b,urlHash:f}}function t(a){a=a.split("?");return 2>a.length?null:a[1]}function A(){var a=(h.dojoIframeHistoryUrl||z.toUrl("./resources/iframe_history.html"))+"?"+(new Date).getTime();u=!0;l&&(m("webkit")?l.location=a:window.frames[l.name].location=a);return a}function J(){if(!v){var a=c.length,b=q();b!==B&&window.location.href!=C||1!=a?0<e.length&&e[e.length-1].urlHash===b?r():2<=a&&c[a-2]&&c[a-2].urlHash===b&&k():k()}}var d={};F.setObject("dojo.back",d);var q=d.getHash=function(){var a=
window.location.hash;"#"==a.charAt(0)&&(a=a.substring(1));return m("mozilla")?a:decodeURIComponent(a)},w=d.setHash=function(a){a||(a="");window.location.hash=encodeURIComponent(a)},C="undefined"!==typeof window?window.location.href:"",B="undefined"!==typeof window?q():"",n=null,D=null,x=null,l=null,e=[],c=[],u=!1,v=!1;d.goBack=k;d.goForward=r;d.init=function(){if(!G.byId("dj_history")){var a=h.dojoIframeHistoryUrl||z.toUrl("./resources/iframe_history.html");h.afterOnLoad?console.error("dojo/back::init() must be called before the DOM has loaded. Include dojo/back in a build layer."):
document.write('\x3ciframe style\x3d"border:0;width:1px;height:1px;position:absolute;visibility:hidden;bottom:0;right:0;" name\x3d"dj_history" id\x3d"dj_history" src\x3d"'+a+'"\x3e\x3c/iframe\x3e')}};d.setInitialState=function(a){n=p(C,a,B)};d.addToHistory=function(a){e=[];var b=null,f=null;l||(h.useXDomain&&!h.dojoIframeHistoryUrl&&console.warn("dojo/back: When using cross-domain Dojo builds, please save iframe_history.html to your domain and set djConfig.dojoIframeHistoryUrl to the path on your domain to iframe_history.html"),
l=window.frames.dj_history);x||(x=H.create("a",{style:{display:"none"}},I.body()));if(a.changeUrl){b=""+(!0!==a.changeUrl?a.changeUrl:(new Date).getTime());if(0==c.length&&n.urlHash==b){n=p(f,a,b);return}if(0<c.length&&c[c.length-1].urlHash==b){c[c.length-1]=p(f,a,b);return}v=!0;setTimeout(function(){w(b);v=!1},1);x.href=b;if(m("ie")){f=A();var K=a.back||a.backButton||a.handle,g=function(y){""!=q()&&setTimeout(function(){w(b)},1);K.apply(this,[y])};a.back?a.back=g:a.backButton?a.backButton=g:a.handle&&
(a.handle=g);var E=a.forward||a.forwardButton||a.handle;g=function(y){""!=q()&&w(b);E&&E.apply(this,[y])};a.forward?a.forward=g:a.forwardButton?a.forwardButton=g:a.handle&&(a.handle=g)}else m("ie")||D||(D=setInterval(J,200))}else f=A();c.push(p(f,a,b))};d._iframeLoaded=function(a,b){a=t(b.href);null==a?1==c.length&&k():u?u=!1:2<=c.length&&a==t(c[c.length-2].url)?k():0<e.length&&a==t(e[e.length-1].url)&&r()};return d});