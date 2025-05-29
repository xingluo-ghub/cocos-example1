System.register("chunks:///_virtual/canvas_script.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var r,n,e,i,c,a,o,s;return{setters:[function(t){r=t.applyDecoratedDescriptor,n=t.inheritsLoose,e=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){c=t.cclegacy,a=t._decorator,o=t.RichText,s=t.Component}],execute:function(){var p,u,l,f,v;c._RF.push({},"86d3fzifSJPpZ6/xDybOy+M","canvas_script",void 0);var h=a.ccclass,_=a.property;t("canvas_script",(p=h("canvas_script"),u=_(o),p((v=r((f=function(t){function r(){for(var r,n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return r=t.call.apply(t,[this].concat(c))||this,e(r,"canva_richText",v,i(r)),r}n(r,t);var c=r.prototype;return c.change_canva_richText=function(t){this.canva_richText.string=t},c.start=function(){},c.update=function(t){},r}(s)).prototype,"canva_richText",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),l=f))||l));c._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./canvas_script.ts","./player_script.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/player_script.ts",["./rollupPluginModLoBabelHelpers.js","cc","./canvas_script.ts"],(function(e){var o,n,t,i,r,s,a,c,l,h,p,u,_;return{setters:[function(e){o=e.applyDecoratedDescriptor,n=e.inheritsLoose,t=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,a=e.Node,c=e.Canvas,l=e.input,h=e.Input,p=e.Collider,u=e.Component},function(e){_=e.canvas_script}],execute:function(){var d,f,v,g,y,m,C,T,b,E;r._RF.push({},"b784fkyqwhCHaTVvFSKqstC","player_script",void 0);var P=s.ccclass,z=s.property;e("car_script",(d=P("car_script"),f=z(a),v=z(a),g=z(c),d((C=o((m=function(e){function o(){for(var o,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return o=e.call.apply(e,[this].concat(r))||this,t(o,"speed",C,i(o)),t(o,"camera_node",T,i(o)),t(o,"car_node",b,i(o)),t(o,"panle_canvas",E,i(o)),o.car_collider=null,o.move_flag=!0,o}n(o,e);var r=o.prototype;return r.onLoad=function(){l.on(h.EventType.KEY_DOWN,this.Key_Down,this),l.on(h.EventType.TOUCH_END,this.Touch_Move,this),this.car_collider=this.car_node.getComponent(p),this.car_collider.on("onTriggerEnter",this.Collision_Enter,this)},r.onDestroy=function(){l.off(h.EventType.KEY_DOWN,this.Key_Down,this),l.off(h.EventType.TOUCH_END,this.Touch_Move,this),this.car_collider.off("onTriggerEnter",this.Collision_Enter,this)},r.Key_Down=function(e){console.log(e);var o=this.node.getPosition();37==e.keyCode?o.x>0&&(this.node.setPosition(-1*o.x,o.y,o.z),console.log("现在应该向左")):39==e.keyCode&&o.x<0&&(this.node.setPosition(-1*o.x,o.y,o.z),console.log("现在应该向右"))},r.Touch_Move=function(){var e=this.node.getPosition();this.node.setPosition(-1*e.x,e.y,e.z)},r.Collision_Enter=function(e){this.move_flag=!1,"Win"==e.otherCollider.node.name?(this.panle_canvas.getComponent(_).change_canva_richText("<color=#FFF14E>游戏胜利！！！</color>"),console.log("游戏胜利！")):(this.panle_canvas.getComponent(_).change_canva_richText("<color=#020000>失败了！！！</color>"),console.log("车辆发生了碰撞!"),console.log("游戏失败！")),this.panle_canvas.node.active=!0},r.new_game=function(){this.panle_canvas.node.active=!1,this.camera_node.setPosition(.048,31.147,37.812),this.node.setPosition(-2.5,.52,-4.189),this.move_flag=!0},r.start=function(){},r.update=function(e){if(this.move_flag){var o=this.node.getPosition();this.node.setPosition(o.x,o.y,o.z-this.speed*e);var n=this.camera_node.getPosition();this.camera_node.setPosition(n.x,n.y,n.z-this.speed*e)}else console.log("游戏暂停中。。。。")},o}(u)).prototype,"speed",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 30}}),T=o(m.prototype,"camera_node",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=o(m.prototype,"car_node",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=o(m.prototype,"panle_canvas",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=m))||y));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});