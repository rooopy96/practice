(this["webpackJsonpmovie_app_2020_v1.1"]=this["webpackJsonpmovie_app_2020_v1.1"]||[]).push([[0],{39:function(e,s,a){},45:function(e,s,a){},65:function(e,s,a){},66:function(e,s,a){},67:function(e,s,a){"use strict";a.r(s);var t=a(1),c=a(0),n=a.n(c),i=a(26),r=a.n(i),l=a(9),o=a(2),j=a(13);a(39);var m=function(){var e;return Object(t.jsxs)("div",{className:"header",children:[Object(t.jsx)("div",{className:"header__column",children:Object(t.jsx)(l.b,(e={className:"text-link",to:"#"},Object(j.a)(e,"className","header__title"),Object(j.a)(e,"children","JAYFLIX"),e))}),Object(t.jsxs)("ul",{className:"primary-nav",children:[Object(t.jsx)("li",{className:"nav__home",children:Object(t.jsx)(l.b,{className:"text-link",to:"/",children:"\ud648"})}),Object(t.jsx)("li",{className:"nav__tvProgram",children:Object(t.jsx)(l.b,{className:"text-link",to:"/about",children:"About"})}),Object(t.jsx)("li",{className:"nav__movie",children:"\ubb34\ube44"}),Object(t.jsx)("li",{className:"nav__contents",children:"NEW! \uc694\uc998 \ub300\uc138 \ucf58\ud150\uce20"}),Object(t.jsx)("li",{className:"nav__myPick",children:"\ub0b4\uac00 \ucc1c\ud55c \ucf58\ud150\uce20"})]}),Object(t.jsxs)("ul",{className:"secondary-nav",children:[Object(t.jsx)("li",{className:"header__search",children:Object(t.jsx)("i",{className:"fas fa-search"})}),Object(t.jsx)("li",{className:"header__gift",children:Object(t.jsx)("i",{className:"fas fa-gift"})}),Object(t.jsx)("li",{className:"header__notice",children:Object(t.jsx)("i",{className:"fas fa-bell"})}),Object(t.jsx)("li",{className:"header__userInfo",children:Object(t.jsx)("i",{className:"fas fa-user"})})]})]})};a(45);var d=function(){return Object(t.jsxs)("div",{className:"about__container",children:[Object(t.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(t.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},b=a(16),h=a.n(b),v=a(28),u=a(29),x=a(30),O=a(33),_=a(32),f=a(31),p=a.n(f);a(65);var N=function(e){var s=e.poster,a=e.title,c=e.summary,n=e.year;return Object(t.jsxs)("div",{className:"movie",children:[Object(t.jsx)("img",{className:"movie__poster",src:s,alt:a}),Object(t.jsxs)("div",{className:"movie__info",children:[Object(t.jsxs)("h1",{className:"movie__title",children:[a,", ",Object(t.jsx)("span",{className:"movie__year",children:n})]}),Object(t.jsxs)("p",{className:"movie__summary",children:[c.slice(0,300),"..."]})]})]})},y=(a(66),function(e){Object(O.a)(a,e);var s=Object(_.a)(a);function a(){var e;Object(u.a)(this,a);for(var t=arguments.length,c=new Array(t),n=0;n<t;n++)c[n]=arguments[n];return(e=s.call.apply(s,[this].concat(c))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(h.a.mark((function s(){var a,t;return h.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");case 2:a=s.sent,t=a.data.data.movies,e.setState({movies:t,isLoading:!1}),console.log(t);case 6:case"end":return s.stop()}}),s)}))),e}return Object(x.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,s=e.movies,a=e.isLoading;return Object(t.jsx)("section",{className:"container",children:a?Object(t.jsx)("div",{className:"loader",children:Object(t.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(t.jsx)("div",{className:"movies",children:s.map((function(e){return Object(t.jsx)(N,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image},e.id)}))})})}}]),a}(n.a.Component));var g=function(){return Object(t.jsxs)(l.a,{children:[Object(t.jsx)(m,{}),Object(t.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(t.jsx)(o.a,{path:"/about",component:d})]})};r.a.render(Object(t.jsx)(g,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.641e7e75.chunk.js.map