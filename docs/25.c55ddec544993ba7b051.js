(self.webpackChunk_unistylus_app=self.webpackChunk_unistylus_app||[]).push([[25],{1025:(n,t,e)=>{"use strict";e.r(t),e.d(t,{HomePageModule:()=>_});var o=e(1116),c=e(3673),i=e(5176),g=e(4953),s=e(8619),a=e(6807);const r=function(){return["/guide","usage"]},l=[{path:"",component:(()=>{class n{constructor(n,t){this.settingService=n,this.soulService=t,this.scssSkin="\nInstall skins & mixins:\n```scss\nnpm install --save @unistylus/core\n```\n",this.scssSoul="\nInstall a soul ([list of souls](/guide/soul)):\n```scss\nnpm install --save @unistylus/bootstrap\n```\n",this.cssSkin='\nImport skins from a CDN:\n```html\n<link rel="stylesheet" href="https://unpkg.com/@unistylus/core@latest/css/skins/light-default.min.css">\n```\n',this.cssSoul='\nImport a soul from a CDN ([list of souls](/guide/soul)):\n```html\n<link rel="stylesheet" href="https://unpkg.com/@unistylus/bootstrap-css@latest/full.min.css">\n```\n'}ngOnInit(){}changeSkin(n){this.settingService.changeTheme(n)}changeSoul(n){this.soulService.changeSoul(n)}}return n.\u0275fac=function(t){return new(t||n)(s.Y36(c.RC),s.Y36(a.H))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-home-page"]],decls:129,vars:16,consts:[[1,"host"],[1,"heading"],[1,"text"],[1,"text-primary"],[1,"text-secondary"],[1,"text-tertiary"],[1,"text-success"],[1,"text-warning"],[1,"text-danger"],[1,"text-medium"],[1,"text-foreground"],[1,"cta"],[1,"button-primary-xl",3,"routerLink"],["href","https://github.com/unistylus/core","target","_blank",1,"source-code","button-outline-medium-xl"],[1,"icon","icon-github"],[1,"intro","margin-top-5x"],[1,"title"],[1,"body"],[1,"text-medium",2,"font-size","1.2rem"],["href","https://lamnhan.com","target","_blank"],["href","https://lamnhan.com/works","target","blank"],[1,"action","margin-top-5x"],[1,"skin","margin-top-2x"],[3,"click"],["src","https://img.icons8.com/fluent/50/000000/sun.png"],["src","https://img.icons8.com/fluent/48/000000/new-moon.png"],["src","https://img.icons8.com/fluent/48/000000/connection-status-off.png"],[1,"soul","margin-top-2x"],["src","https://img.icons8.com/color/48/000000/bootstrap.png"],["src","https://img.icons8.com/color/48/000000/material-ui.png"],[1,"installation","margin-top-5x"],[3,"content"],[1,"margin-top"],[1,"button-outline-primary",3,"routerLink"]],template:function(n,t){1&n&&(s.TgZ(0,"div",0),s.TgZ(1,"section",1),s.TgZ(2,"div",2),s.TgZ(3,"h1"),s.TgZ(4,"span",3),s._uU(5,"U"),s.qZA(),s.TgZ(6,"span",4),s._uU(7,"n"),s.qZA(),s.TgZ(8,"span",5),s._uU(9,"i"),s.qZA(),s.TgZ(10,"span",6),s._uU(11,"s"),s.qZA(),s.TgZ(12,"span",7),s._uU(13,"t"),s.qZA(),s.TgZ(14,"span",8),s._uU(15,"y"),s.qZA(),s.TgZ(16,"span",3),s._uU(17,"l"),s.qZA(),s.TgZ(18,"span",9),s._uU(19,"u"),s.qZA(),s.TgZ(20,"span",10),s._uU(21,"s"),s.qZA(),s.qZA(),s.TgZ(22,"p"),s._uU(23,"Just another "),s.TgZ(24,"strong",10),s._uU(25,"modern"),s.qZA(),s._uU(26,", "),s.TgZ(27,"strong",10),s._uU(28,"clean"),s.qZA(),s._uU(29," and "),s.TgZ(30,"strong",10),s._uU(31,"light weight"),s.qZA(),s._uU(32," CSS framework."),s.qZA(),s.qZA(),s.TgZ(33,"div",11),s.TgZ(34,"a",12),s._uU(35,"Use it now!"),s.qZA(),s.TgZ(36,"a",13),s._UZ(37,"i",14),s.TgZ(38,"span"),s._uU(39,"Source code"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(40,"section",15),s.TgZ(41,"div",16),s.TgZ(42,"h2"),s._uU(43,"Introduction"),s.qZA(),s.qZA(),s.TgZ(44,"div",17),s.TgZ(45,"p",18),s._uU(46,"This is just another UI framework that nobody want to use, "),s.TgZ(47,"a",19),s._uU(48,"but me"),s.qZA(),s._uU(49,", or isn't it?"),s.qZA(),s.TgZ(50,"p"),s._uU(51,"It is an effort of balancing between convenience and customization."),s.qZA(),s.TgZ(52,"p"),s._uU(53,"If you want to build app that small, clean and have total control; or simply don't want to use other frameworks. You may give Unistylus a try:"),s.qZA(),s.TgZ(54,"ul"),s.TgZ(55,"li"),s._uU(56,"\ud83d\udc9a Just standard HTML, CSS/SCSS & JS (when needed)."),s.qZA(),s.TgZ(57,"li"),s._uU(58,"\ud83c\udf13 Supports multiple skins in app runtime."),s.qZA(),s.TgZ(59,"li"),s._uU(60,"\ud83d\udc4c No icon fonts; only register whatever icons you ever need."),s.qZA(),s.TgZ(61,"li"),s._uU(62,"\u26a1 Imports just the parts you want."),s.qZA(),s.TgZ(63,"li"),s._uU(64,"\ud83d\udd28 Customize to the bone, at microscopic level."),s.qZA(),s.TgZ(65,"li"),s._uU(66,"\ud83d\udd0c Drop in replacement (-ish) for other frameworks."),s.qZA(),s.TgZ(67,"li"),s._uU(68,"\ud83d\ude0d A member of the "),s.TgZ(69,"a",20),s._uU(70,"Lam Nhan Ecosystem"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(71,"section",21),s.TgZ(72,"div",16),s.TgZ(73,"h2"),s._uU(74,"See the action"),s.qZA(),s.qZA(),s.TgZ(75,"div",17),s.TgZ(76,"div",22),s.TgZ(77,"p"),s.TgZ(78,"strong"),s._uU(79,"Apply skin"),s.qZA(),s.qZA(),s.TgZ(80,"p"),s._uU(81,"An app can have many skins, skin can be changed easily."),s.qZA(),s.TgZ(82,"ul"),s.TgZ(83,"li",23),s.NdJ("click",function(){return t.changeSkin("light")}),s._UZ(84,"img",24),s.TgZ(85,"span"),s._uU(86,"Light skin"),s.qZA(),s.qZA(),s.TgZ(87,"li",23),s.NdJ("click",function(){return t.changeSkin("dark")}),s._UZ(88,"img",25),s.TgZ(89,"span"),s._uU(90,"Dark skin"),s.qZA(),s.qZA(),s.TgZ(91,"li"),s._UZ(92,"img",26),s.TgZ(93,"span"),s._uU(94,"More skins coming!"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(95,"div",27),s.TgZ(96,"p"),s.TgZ(97,"strong"),s._uU(98,"Apply soul"),s.qZA(),s.qZA(),s.TgZ(99,"p"),s._uU(100,"An app should only have one soul, for example this app has the "),s.TgZ(101,"code"),s._uU(102,"bootstrap"),s.qZA(),s._uU(103," soul. This changer is for demonstration purpose."),s.qZA(),s.TgZ(104,"ul"),s.TgZ(105,"li",23),s.NdJ("click",function(){return t.changeSoul("bootstrap")}),s._UZ(106,"img",28),s.TgZ(107,"span"),s._uU(108,"Bootstrap"),s.qZA(),s.qZA(),s.TgZ(109,"li",23),s.NdJ("click",function(){return t.changeSoul("material")}),s._UZ(110,"img",29),s.TgZ(111,"span"),s._uU(112,"Material"),s.qZA(),s.qZA(),s.TgZ(113,"li"),s._UZ(114,"img",26),s.TgZ(115,"span"),s._uU(116,"More soul coming!"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(117,"section",30),s.TgZ(118,"div",16),s.TgZ(119,"h2"),s._uU(120,"Installation"),s.qZA(),s.qZA(),s.TgZ(121,"div",17),s._UZ(122,"nguix-content",31),s._UZ(123,"nguix-content",31),s._UZ(124,"nguix-content",31),s._UZ(125,"nguix-content",31),s.TgZ(126,"div",32),s.TgZ(127,"a",33),s._uU(128,"Next, see usage!"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&n&&(s.xp6(34),s.Q6J("routerLink",s.DdM(14,r)),s.xp6(49),s.ekj("active","light"===t.settingService.theme),s.xp6(4),s.ekj("active","dark"===t.settingService.theme),s.xp6(18),s.ekj("active","bootstrap"===t.soulService.soul),s.xp6(4),s.ekj("active","material"===t.soulService.soul),s.xp6(13),s.Q6J("content",t.scssSkin),s.xp6(1),s.Q6J("content",t.scssSoul),s.xp6(1),s.Q6J("content",t.cssSkin),s.xp6(1),s.Q6J("content",t.cssSoul),s.xp6(2),s.Q6J("routerLink",s.DdM(15,r)))},directives:[g.yS,i.ContentComponent],styles:[".host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:100%}.host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4rem;font-weight:700}.host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2rem;color:var(--app-color-medium)}.host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center}.host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   a.source-code[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem}.host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   a.source-code[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{opacity:.5}.host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   a.source-code[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .soul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap}.host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .soul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;padding:1rem;margin-top:1rem;cursor:pointer;border:1px solid var(--app-color-foreground);border-radius:10rem;display:flex;flex-wrap:nowrap;align-items:center}.host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .soul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:var(--app-color-background-shade)}.host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, .host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .soul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{opacity:.3}.host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:hover, .host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .soul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:hover{background:none}.host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%], .host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .soul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:var(--app-color-medium)}.host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .soul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:48px;height:48px}.host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .soul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem;font-size:1.3rem}@media only screen and (min-width:480px){.host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:5rem}.host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]{flex-wrap:nowrap}.host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   a.source-code[_ngcontent-%COMP%]{margin-top:0;margin-left:1rem}}@media only screen and (min-width:576px){.host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:6rem}}@media only screen and (min-width:768px){.host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:7rem}.host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .soul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-left:-1rem;flex-wrap:wrap}.host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .host[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .soul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(50% - 1rem);margin-left:1rem}}@media only screen and (min-width:992px){.host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{padding-top:1rem}.host[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:8rem}}"]}),n})()}];let u=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[g.Bz.forChild(l)],g.Bz]}),n})(),_=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[o.ez,c.Pf,i.NguixContentComponentModule,u]]}),n})()}}]);