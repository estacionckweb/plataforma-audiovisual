(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports={color:"#FF0071","query-gaitan":"%28Gaitan%29%20AND%20mediatype%3A%28movies%29",query:"creator%3A%28Plataforma%20Bogota%29%20AND%20mediatype%3A%28movies%29",showTags:!0,videoThumbnails:!0}},22:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAAGzCI4dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADtJREFUeNpi+P//PwNAADGACIAAYgSzgAAggOAMJgYoAAgguAgMMDGgAYAAIqyCsABAgGGYQVAH9RUAAMKWFQEBzFDaAAAAAElFTkSuQmCC"},25:function(e,t,a){e.exports=a(47)},30:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),s=a.n(o),i=(a(30),a(16)),l=a.n(i),c=a(21),u=a(3),h=a(4),p=a(6),m=a(5),d=a(7),v=(a(34),a(17)),b=a.n(v),f=a(50),g=a(10),E=a(22),y=a.n(E),A=a(11),O=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).call(this))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t="http://"+this.props.entry.d1+this.props.entry.dir+"/"+this.props.entry.thumb.name,a=r.a.createElement("div",null);!0===this.props.highlighted&&(a=r.a.createElement("div",{className:"p-2 h-full text-3xl text-white uppercase absolute pin-t pin-l",style:{backgroundColor:A.color}}," ",this.props.entry.metadata.title," "));var n="http://"+this.props.entry.d1+this.props.entry.dir+"/"+this.props.entry.ogg.name;return r.a.createElement("div",{className:"w-full cursor-pointer",onMouseOver:function(){e.props.onThumbHover(e.props.index)},onMouseOut:function(){e.props.onThumbHover(null)},onMouseDown:function(){e.props.onSelectEntry(e.props.index)},style:{background:"url("+t+")",backgroundSize:"cover"}},r.a.createElement("div",{className:"relative"},r.a.createElement("video",{className:"w-full",autoPlay:!0,muted:!0,loop:!0,poster:y.a},r.a.createElement("source",{src:n,type:"video/ogg"})),a))}}]),t}(n.Component),j=a(48),T=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).call(this))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this;return r.a.createElement("div",{className:"flex flex-wrap"},this.props.entries.map(function(a,n){var o=!1;return a.uniq===e.props.hoverEntryUniq&&(o=!0),null!==e.props.hoverTag&&a.metadata.subject.indexOf(e.props.hoverTag.label)>=0&&(o=!0),r.a.createElement(j.a,{to:"/item/"+a.metadata.identifier,className:"w-1/3 cursor-pointer"},r.a.createElement(O,Object.assign({},t.props,{entry:a,highlighted:o,key:n,index:n})))}))}}]),t}(n.Component),N=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).call(this))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"w-full m-4"},this.props.tags.map(function(t,a){var n="bg-black";return null!==e.props.hoverEntry&&e.props.hoverEntry.metadata.subject.indexOf(t.label)>-1&&(n="bg-pink-dark"),null!==e.props.hoverTag&&e.props.hoverTag.label===t.label&&(n="bg-pink-dark"),r.a.createElement("div",{className:"inline-block m-1 p-2 text-white cursor-pointer "+n,onMouseOver:function(){return e.props.onTagHover(a)},onMouseOut:function(){return e.props.onTagHover(null)},key:a},t.label)}))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={hoverTag:null,hoverEntry:null},e.onThumbHover=e.onThumbHover.bind(Object(g.a)(Object(g.a)(e))),e.onTagHover=e.onTagHover.bind(Object(g.a)(Object(g.a)(e))),e}return Object(d.a)(t,e),Object(h.a)(t,[{key:"onTagHover",value:function(e){null!==e?this.setState({hoverTag:this.props.tags[e]}):this.setState({hoverTag:null})}},{key:"onThumbHover",value:function(e){null!==e?this.setState({hoverEntry:this.props.entries[e]}):this.setState({hoverEntry:null})}},{key:"render",value:function(){var e;return e=r.a.createElement("div",null,r.a.createElement(N,{tags:this.props.tags,hoverEntry:this.state.hoverEntry,onTagHover:this.onTagHover,hoverTag:this.state.hoverTag}),r.a.createElement(T,{entries:this.props.entries,onSelectEntry:this.props.onSelectEntry,hoverTag:this.state.hoverTag,onThumbHover:this.onThumbHover,hoverEntryUniq:null===this.state.hoverEntry?null:this.state.hoverEntry.uniq})),r.a.createElement("div",{className:""},e)}}]),t}(n.Component),w=a(52),S=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).call(this))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=null;this.props.match.params.identifier&&this.props.entries.forEach(function(a){e.props.match.params.identifier===a.metadata.identifier&&(t=a)}),console.log("tags",this.props);var a="http://"+t.d1+t.dir+"/"+t.mp4.name,n=[],o=[];return this.props.tags.forEach(function(e){e.entries.forEach(function(e){if(e.uniq!==t.uniq){var a=n.indexOf(e.uniq);console.log(e.uniq,n,a),a<0&&(n.push(e.uniq),o.push(e))}})}),console.log("entry array",n),r.a.createElement("div",{className:"mb-10"},r.a.createElement("video",{autoPlay:!0,controls:!0,className:"w-full"},r.a.createElement("source",{src:a,type:"video/mp4"})),r.a.createElement("h1",{className:"m-6"}," ",t.metadata.title," "),r.a.createElement("div",{className:"m-6"}," ",t.metadata.date," "),r.a.createElement("p",{className:"m-6",dangerouslySetInnerHTML:{__html:t.metadata.description}}),r.a.createElement("h3",{className:"mt-12 m-6"}," Relacionados: "),r.a.createElement(k,{entries:o,tags:this.props.tags,onSelectEntry:this.props.onSelectEntry}))}}]),t}(n.Component),x=Object(w.a)(S),H=a(51),C=a(49),q=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={selectedEntry:null},e.onSelectEntry=e.onSelectEntry.bind(Object(g.a)(Object(g.a)(e))),e}return Object(d.a)(t,e),Object(h.a)(t,[{key:"onSelectEntry",value:function(e){null!==e?this.setState({selectedEntry:this.props.entries[e]}):this.setState({selectedEntry:null})}},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(H.a,null,r.a.createElement(C.a,{exact:!0,path:"/"},r.a.createElement(k,{tags:this.props.tags,entries:this.props.entries,onSelectEntry:this.onSelectEntry})),r.a.createElement(C.a,{path:"/item/:identifier"},r.a.createElement(x,{entry:this.state.selectedEntry,tags:this.props.tags,entries:this.props.entries,onSelectEntry:this.onSelectEntry}))))}}]),t}(n.Component),_=(a(43),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).call(this))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader__bar"}),r.a.createElement("div",{className:"loader__bar"}),r.a.createElement("div",{className:"loader__bar"}),r.a.createElement("div",{className:"loader__bar"}),r.a.createElement("div",{className:"loader__bar"}),r.a.createElement("div",{className:"loader__ball"})))}}]),t}(n.Component)),M=(a(45),A.query),G=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={entries:[],tags:[],isLoaded:!1,error:null},e}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this,a={},n={};b.a.get("https://api.archivelab.org/search?q="+M).end(function(){var r=Object(c.a)(l.a.mark(function r(o,s){return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:o?(console.log("error",o),e.setState({error:o})):(console.log("response",s.body.response.docs),Promise.all(s.body.response.docs.map(function(e){return b.a.get("https://archive.org/metadata/"+e.identifier)})).then(function(e){var r=e.map(function(e){var t=e.body;console.log("obj",t);var r=t.files.filter(function(e){return"Item Tile"==e.format||"Thumbnail"==e.format});if(t.thumb=r[r.length-1],t.ogg=t.files.filter(function(e){return"Ogg Video"==e.format})[0],t.mp4=t.files.filter(function(e){return"MPEG4"==e.format||"h.264"==e.format})[0],void 0===t.ogg||void 0===t.mp4)return null;if(t.metadata.subject){if(!Array.isArray(t.metadata.subject)){var o=t.metadata.subject.split(";");t.metadata.subject=o}t.metadata.subject.forEach(function(e){n[e]?n[e].entries.push(t):n[e]={label:e,entries:[t]}})}else t.metadata.subject=[];return void 0!==t.ogg&&void 0!==t.mp4&&(a[e.body.metadata.identifier]=t),e.body.metadata.identifier}),o=Object.values(n);o.sort(function(e,t){return e.entries.length-t.entries.length}),console.log("TAGS",a,r,o),t.setState({entries:Object.values(a),tags:o,isLoaded:!0})}));case 1:case"end":return r.stop()}},r,this)}));return function(e,t){return r.apply(this,arguments)}}())}},{key:"render",value:function(){var e=null;return e=!0===this.state.isLoaded?r.a.createElement(q,{tags:this.state.tags,entries:this.state.entries}):r.a.createElement(_,null),r.a.createElement(f.a,{basename:""},r.a.createElement("div",{className:"flex font-sans"},e))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.9837e41a.chunk.js.map