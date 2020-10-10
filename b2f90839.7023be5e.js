(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),o=(t(0),t(90)),d={id:"doc1",title:"FA 1.2",sidebar_label:"FA 1.2",slug:"/"},c={unversionedId:"doc1",id:"doc1",isDocsHomePage:!1,title:"FA 1.2",description:"Ledger",source:"@site/docs/doc1.md",slug:"/",permalink:"/completium/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc1.md",version:"current",sidebar_label:"FA 1.2",sidebar:"someSidebar",next:{title:"Document Number 2",permalink:"/completium/docs/doc2"}},l=[{value:"Ledger",id:"ledger",children:[]},{value:"Transfer",id:"transfer",children:[]}],i={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ledger"},"Ledger"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-archetype",metastring:"{1}","{1}":!0}),"asset ledger identified by holder to big_map {\n  holder     : address;\n  tokens     : nat = 0;\n} initialized by {\n  { holder = caller; tokens = totalsupply }\n}\n")),Object(o.b)("h2",{id:"transfer"},"Transfer"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-archetype",metastring:"{1}","{1}":!0}),'entry %transfer (%from : address, %to : address, value : nat) {\n  require {\n    r1 otherwise "NotEnoughBalance" : ledger[%from].tokens >= value;\n  }\n  effect {\n    if caller <> %from then begin\n      var current = allowance[(%from, caller)].amount;\n      dofailif(current < value, ("NotEnoughAllowance", ((value, current))));\n      allowance.update((%from, caller), { amount -=  value });\n    end;\n    ledger.update(%from, { tokens -= value });\n    ledger.addupdate(%to, { tokens += value });\n  }\n}\n')))}s.isMDXComponent=!0}}]);