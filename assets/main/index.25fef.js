System.register("chunks:///_virtual/car_script.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,n,i,s,r,c,a,u,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){s=e.cclegacy,r=e._decorator,c=e.Node,a=e.input,u=e.Input,p=e.Component}],execute:function(){var l,h,y,d,f,_;s._RF.push({},"b784fkyqwhCHaTVvFSKqstC","car_script",void 0);var v=r.ccclass,g=r.property;e("car_script",(l=v("car_script"),h=g(c),l((f=t((d=function(e){function t(){for(var t,o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return t=e.call.apply(e,[this].concat(s))||this,n(t,"speed",f,i(t)),n(t,"camera_node",_,i(t)),t}o(t,e);var s=t.prototype;return s.onLoad=function(){a.on(u.EventType.KEY_DOWN,this.Key_Down,this),a.on(u.EventType.TOUCH_END,this.Touch_Move,this)},s.onDestroy=function(){a.off(u.EventType.KEY_DOWN,this.Key_Down,this),a.off(u.EventType.TOUCH_END,this.Touch_Move,this)},s.Key_Down=function(e){console.log(e);var t=this.node.getPosition();37==e.keyCode?t.x>0&&(this.node.setPosition(-1*t.x,t.y,t.z),console.log("现在应该向左")):39==e.keyCode&&t.x<0&&(this.node.setPosition(-1*t.x,t.y,t.z),console.log("现在应该向右"))},s.Touch_Move=function(){var e=this.node.getPosition();this.node.setPosition(-1*e.x,e.y,e.z)},s.start=function(){},s.update=function(e){var t=this.node.getPosition();this.node.setPosition(t.x,t.y,t.z-this.speed*e);var o=this.camera_node.getPosition();this.camera_node.setPosition(o.x,o.y,o.z-this.speed*e)},t}(p)).prototype,"speed",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 30}}),_=t(d.prototype,"camera_node",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=d))||y));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./car_script.ts"],(function(){return{setters:[null],execute:function(){}}}));

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