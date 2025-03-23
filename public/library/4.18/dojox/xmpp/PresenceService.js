//>>built
define(["dojo","dijit","dojox"],function(f,h,c){f.provide("dojox.xmpp.PresenceService");c.xmpp.presence={UPDATE:201,SUBSCRIPTION_REQUEST:202,SUBSCRIPTION_SUBSTATUS_NONE:204,SUBSCRIPTION_NONE:"none",SUBSCRIPTION_FROM:"from",SUBSCRIPTION_TO:"to",SUBSCRIPTION_BOTH:"both",SUBSCRIPTION_REQUEST_PENDING:"pending",STATUS_ONLINE:"online",STATUS_AWAY:"away",STATUS_CHAT:"chat",STATUS_DND:"dnd",STATUS_EXTENDED_AWAY:"xa",STATUS_OFFLINE:"offline",STATUS_INVISIBLE:"invisible"};f.declare("dojox.xmpp.PresenceService",
null,{constructor:function(a){this.session=a;this.isInvisible=!1;this.presence=this.avatarHash=null;this.restrictedContactjids={}},publish:function(a){this.presence=a;this._setPresence()},sendAvatarHash:function(a){this.avatarHash=a;this._setPresence()},_setPresence:function(){var a=this.presence,b={xmlns:"jabber:client"};a&&a.to&&(b.to=a.to);a.show&&a.show==c.xmpp.presence.STATUS_OFFLINE&&(b.type="unavailable");if(a.show&&a.show==c.xmpp.presence.STATUS_INVISIBLE)this._setInvisible(),this.isInvisible=
!0;else{this.isInvisible&&this._setVisible();b=new c.string.Builder(c.xmpp.util.createElement("presence",b,!1));a.show&&a.show!=c.xmpp.presence.STATUS_OFFLINE&&(b.append(c.xmpp.util.createElement("show",{},!1)),b.append(a.show),b.append("\x3c/show\x3e"));a.status&&(b.append(c.xmpp.util.createElement("status",{},!1)),b.append(a.status),b.append("\x3c/status\x3e"));this.avatarHash&&(b.append(c.xmpp.util.createElement("x",{xmlns:"vcard-temp:x:update"},!1)),b.append(c.xmpp.util.createElement("photo",
{},!1)),b.append(this.avatarHash),b.append("\x3c/photo\x3e"),b.append("\x3c/x\x3e"));if(a.priority&&a.show!=c.xmpp.presence.STATUS_OFFLINE){if(127<a.priority||-128>a.priority)a.priority=5;b.append(c.xmpp.util.createElement("priority",{},!1));b.append(a.priority);b.append("\x3c/priority\x3e")}b.append("\x3c/presence\x3e");this.session.dispatchPacket(b.toString())}},toggleBlockContact:function(a){this.restrictedContactjids[a]||(this.restrictedContactjids[a]=this._createRestrictedJid());this.restrictedContactjids[a].blocked=
!this.restrictedContactjids[a].blocked;this._updateRestricted();return this.restrictedContactjids},toggleContactInvisiblity:function(a){this.restrictedContactjids[a]||(this.restrictedContactjids[a]=this._createRestrictedJid());this.restrictedContactjids[a].invisible=!this.restrictedContactjids[a].invisible;this._updateRestricted();return this.restrictedContactjids},_createRestrictedJid:function(){return{invisible:!1,blocked:!1}},_updateRestricted:function(){var a={id:this.session.getNextIqId(),from:this.session.jid+
"/"+this.session.resource,type:"set"},b=new c.string.Builder(c.xmpp.util.createElement("iq",a,!1));b.append(c.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1));b.append(c.xmpp.util.createElement("list",{name:"iwcRestrictedContacts"},!1));var g=1,d;for(d in this.restrictedContactjids){var e=this.restrictedContactjids[d];e.blocked||e.invisible?(b.append(c.xmpp.util.createElement("item",{value:c.xmpp.util.encodeJid(d),action:"deny",order:g++},!1)),e.blocked&&b.append(c.xmpp.util.createElement("message",
{},!0)),e.invisible&&b.append(c.xmpp.util.createElement("presence-out",{},!0)),b.append("\x3c/item\x3e")):delete this.restrictedContactjids[d]}b.append("\x3c/list\x3e");b.append("\x3c/query\x3e");b.append("\x3c/iq\x3e");a=new c.string.Builder(c.xmpp.util.createElement("iq",a,!1));a.append(c.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1));a.append(c.xmpp.util.createElement("active",{name:"iwcRestrictedContacts"},!0));a.append("\x3c/query\x3e");a.append("\x3c/iq\x3e");this.session.dispatchPacket(b.toString());
this.session.dispatchPacket(a.toString())},_setVisible:function(){var a={id:this.session.getNextIqId(),from:this.session.jid+"/"+this.session.resource,type:"set"};a=new c.string.Builder(c.xmpp.util.createElement("iq",a,!1));a.append(c.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1));a.append(c.xmpp.util.createElement("active",{},!0));a.append("\x3c/query\x3e");a.append("\x3c/iq\x3e");this.session.dispatchPacket(a.toString())},_setInvisible:function(){var a={id:this.session.getNextIqId(),
from:this.session.jid+"/"+this.session.resource,type:"set"},b=new c.string.Builder(c.xmpp.util.createElement("iq",a,!1));b.append(c.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1));b.append(c.xmpp.util.createElement("list",{name:"invisible"},!1));b.append(c.xmpp.util.createElement("item",{action:"deny",order:"1"},!1));b.append(c.xmpp.util.createElement("presence-out",{},!0));b.append("\x3c/item\x3e");b.append("\x3c/list\x3e");b.append("\x3c/query\x3e");b.append("\x3c/iq\x3e");a={id:this.session.getNextIqId(),
from:this.session.jid+"/"+this.session.resource,type:"set"};a=new c.string.Builder(c.xmpp.util.createElement("iq",a,!1));a.append(c.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1));a.append(c.xmpp.util.createElement("active",{name:"invisible"},!0));a.append("\x3c/query\x3e");a.append("\x3c/iq\x3e");this.session.dispatchPacket(b.toString());this.session.dispatchPacket(a.toString())},_manageSubscriptions:function(a,b){a&&(-1==a.indexOf("@")&&(a+="@"+this.session.domain),a=c.xmpp.util.createElement("presence",
{to:a,type:b},!0),this.session.dispatchPacket(a))},subscribe:function(a){this._manageSubscriptions(a,"subscribe")},approveSubscription:function(a){this._manageSubscriptions(a,"subscribed")},unsubscribe:function(a){this._manageSubscriptions(a,"unsubscribe")},declineSubscription:function(a){this._manageSubscriptions(a,"unsubscribed")},cancelSubscription:function(a){this._manageSubscriptions(a,"unsubscribed")}})});