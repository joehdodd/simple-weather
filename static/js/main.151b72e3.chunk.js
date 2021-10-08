(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{48:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(17),c=n.n(a),i=(n(48),n(8)),s=n(7),o=n(11),d=n(25),l=n(14),u=n.n(l),p=n(26),h=n(27),m=n.n(h),j=n(12),b=Object(j.b)("weather/fetchCurrent",function(){var e=Object(p.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("https://api.openweathermap.org/data/2.5","/weather?units=imperial&lat=").concat(t.lat,"&lon=").concat(t.lon,"&appid=").concat("ad6a33205e5b3c6028c0c4903e1d045c"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(j.b)("weather/fetchForecast",function(){var e=Object(p.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("https://api.openweathermap.org/data/2.5","/forecast/daily?units=imperial&lat=").concat(t.lat,"&lon=").concat(t.lon,"&appid=").concat("ad6a33205e5b3c6028c0c4903e1d045c"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(j.c)({name:"weather",initialState:{current:{},forecast:{}},extraReducers:function(e){e.addCase(b.fulfilled,(function(e,t){e.current=Object(d.a)({},t.payload)})),e.addCase(x.fulfilled,(function(e,t){e.forecast=Object(d.a)({},t.payload)}))}}).reducer,g=n(10),O=n(19),w=n.n(O),v=n(2),y=Object(g.a)({currentHeader:{display:"grid",gridAutoFlow:"column",justifyContent:"space-between"},currentDetailsContainer:{display:"grid",gridAutoFlow:"row","@media screen and (min-width: 768px)":{gridAutoFlow:"column"},alignItems:"start",gridGap:8},currentDetailsSub:{display:"grid",gridAutoFlow:"row"},currentHeaderTextContainer:{display:"grid",flexDirection:"column"},currentHeaderText:{fontSize:32,fontWeight:700,textOverflow:"ellipsis"},currentHeaderSubtext:{fontSize:12},currentDegrees:{fontSize:16,fontWeight:700,verticalAlign:"top",lineHeight:"24px",marginLeft:4},currentConditions:{display:"grid",gridTemplateColumns:".5fr 1.5fr",alignItems:"center"}}),C=function(e){var t=e.coords,n=y(),a=Object(o.b)(),c=Object(o.c)((function(e){return e.weather.current}));return Object(r.useEffect)((function(){t.lat&&t.lon&&a(b(t))}),[a,t]),Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:n.currentHeader,children:[Object(v.jsxs)("div",{className:n.currentHeaderTextContainer,children:[Object(v.jsx)("span",{className:n.currentHeaderText,children:c.name}),!!c.weather&&Object(v.jsx)("span",{className:n.currentHeaderSubtext,children:c.weather[0].main}),Object(v.jsx)("span",{className:n.currentHeaderSubtext,children:!!c.dt&&w()(1e3*c.dt).format("dddd, hh:mm A")})]}),Object(v.jsxs)("div",{className:n.currentConditions,children:[!!c.weather&&Object(v.jsx)("img",{style:{maxWidth:50},src:"https://openweathermap.org/img/wn/".concat(c.weather[0].icon,"@2x.png"),alt:c.weather[0].main}),c.main&&Object(v.jsxs)("div",{className:n.currentDetailsContainer,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:n.currentHeaderText,children:Math.round(c.main.temp)}),Object(v.jsx)("span",{className:n.currentDegrees,children:"\xb0 F"})]}),Object(v.jsxs)("div",{className:n.currentDetailsSub,children:[Object(v.jsxs)("span",{style:{fontSize:12},children:["Humidity: ",c.main.humidity,"%"]}),Object(v.jsxs)("span",{style:{fontSize:12},children:["Wind: ",c.wind.speed," mph"]})]})]})]})]})})},S=Object(g.a)({forecastContainer:{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"repeat(7, 1fr)",justifyContent:"start","@media screen and (min-width: 768px)":{gridTemplateRows:"none",gridTemplateColumns:"repeat(7, 1fr)",justifyContent:"space-between"}},dayContainer:{display:"grid",justifyContent:"center",alignItems:"center",textAlign:"center",gridGap:4}}),N=function(e){var t=e.coords,n=S(),a=Object(o.b)(),c=Object(o.c)((function(e){return e.weather.forecast}));return Object(r.useEffect)((function(){t.lat&&t.lon&&a(x(t))}),[a,t]),Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:n.forecastContainer,children:!!c.list&&c.list.map((function(e){return Object(v.jsxs)("div",{className:n.dayContainer,children:[Object(v.jsx)("h3",{style:{marginBottom:0},children:!!e.dt&&w()(1e3*e.dt).format("ddd")}),Object(v.jsx)("img",{style:{maxWidth:50},src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:e.weather.main}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("span",{children:[Math.round(e.temp.max),"\xb0"]})," ",Object(v.jsx)("span",{children:"|"})," ",Object(v.jsxs)("span",{children:[Math.round(e.temp.min),"\xb0"]})]})]},e.dt)}))})})},R=Object(g.a)({searchInput:{padding:"4px 8px",height:"2rem",width:"12rem","@media screen and (min-width: 768px)":{width:"24rem"},fontSize:16,boxShadow:"0px 1px 4px 0px rgba(0,0,0,0.5)",outline:"none",border:"1px solid transparent"}}),H=function(e){var t=e.value,n=e.handleChange,r=e.results,a=R();return Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:a.searchInput,style:{borderRadius:r?"4px 4px 0px 0px":4},onChange:n,vlaue:t,name:"Search...",placeholder:"Search..."})})},F=n(41),k=n(42),A=n.n(k),T=Object(g.a)({"@global":{body:{"@media screen and (min-width: 768px)":{backgroundColor:"#F5F6FA"}}},wrapper:{margin:"2.5%",backgroundColor:"#fff","@media screen and (min-width: 768px)":{borderRadius:4,padding:16,boxShadow:"0px 8px 12px 0px rgba(0,0,0,0.5)",margin:"5% 12.5%"},"@media screen and (min-width: 1024px)":{margin:"5% 25%"}},searchResultsContainer:{position:"relative",marginBottom:16,display:"grid",gridAutoFlow:"column","@media screen and (min-width: 768px)":{gridTemplateColumns:"2fr 1fr"},alignItems:"center",justifyContent:"space-between"},searchResults:{padding:8,width:"12rem","@media screen and (min-width: 768px)":{width:"24rem"},maxHeight:"12rem",overflowY:"scroll",position:"absolute",background:"#fff",display:"grid",gridAutoFlow:"row",gridGap:8,top:38,border:"1px solid transparent",borderRadius:"0px 0px 4px 4px",boxShadow:"0px 4px 4px 0px rgba(0,0,0,0.5)"},searchResultItem:{borderRadius:4,padding:"8px 2px",cursor:"pointer","&:hover":{backgroundColor:"#eee"}},getLocationcontainer:{padding:8,display:"grid",gridAutoFlow:"column",alignItems:"center",justifySelf:"center",cursor:"pointer",borderRadius:4,"&:hover":{backgroundColor:"#eee"}}});var I=function(){var e=T(),t=Object(r.useState)({lat:"",lon:""}),n=Object(s.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(""),d=Object(s.a)(o,2),l=d[0],u=d[1],p=Object(r.useState)([]),h=Object(s.a)(p,2),m=h[0],j=h[1],b=function(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){c({lat:e.coords.latitude,lon:e.coords.longitude})}))};Object(r.useLayoutEffect)((function(){b()}),[]);var x=function(e){var t=new window.google.maps.Geocoder;t&&t.geocode({address:e},(function(e,t){j("OK"===t?Object(i.a)(e):{formatted_address:"Not found."})}))},f=Object(r.useMemo)((function(){return Object(F.debounce)(x,500)}),[]);return Object(r.useEffect)((function(){l&&f(l)}),[f,l]),Object(v.jsxs)("div",{className:e.wrapper,children:[Object(v.jsxs)("div",{className:e.searchResultsContainer,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(H,{results:!!m.length&&!!l.length,handleChange:function(e){var t=e.target.value;return u(t)},value:l}),!!m.length&&!!l.length&&Object(v.jsx)("div",{className:e.searchResults,children:m.map((function(t){return Object(v.jsx)("div",{onClick:function(){return function(e){c({lat:e.lat(),lon:e.lng()}),u(""),j([])}(t.geometry.location)},className:e.searchResultItem,children:Object(v.jsx)("span",{style:{fontSize:16},children:t.formatted_address})},t.formatted_address)}))})]}),Object(v.jsxs)("div",{className:e.getLocationcontainer,onClick:function(){return b()},children:[Object(v.jsx)(A.a,{}),Object(v.jsx)("span",{style:{fontSize:12},children:"Get your location..."})]})]}),Object(v.jsx)(C,{coords:a}),Object(v.jsx)(N,{coords:a})]})},z=Object(j.a)({reducer:{weather:f}});c.a.render(Object(v.jsx)(o.a,{store:z,children:Object(v.jsx)(I,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.151b72e3.chunk.js.map