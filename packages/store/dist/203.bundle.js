"use strict";(self.webpackChunkstore=self.webpackChunkstore||[]).push([[203],{514:(e,n,a)=>{a.r(n),a.d(n,{StoreProvider:()=>D,authMiddleware:()=>w,store:()=>x,useAttackChains:()=>U,useIdentity:()=>E,useStore:()=>S});var s,r,i,t=a(82),o=a(820),c=a.n(o),l=a(752),_=a(980),p=(0,_.oM)({name:"error",initialState:{message:null},reducers:{reset:function(e){e.message=null},setErrorMessage:function(e,n){e.message=n.payload.message}}}),d=((s=p.actions).reset,s.setErrorMessage),v=(0,_.oM)({name:"identity",initialState:{email:null,password:null,jwt:null,refresh:null,status:null,loading:!1},reducers:{loading:function(e){e.loading=!0},signIn:function(e,n){e.email=n.payload.email,e.jwt=n.payload.jwt,e.refresh=n.payload.refresh,e.status=n.payload.status,e.loading=!1}}}),u=(r=v.actions).signIn,m=r.loading,f=(0,_.oM)({name:"attackChains",initialState:{data:[],limit:null,total_items:null,total_items_per_passfail:null,status:null,loading:!1},reducers:{loading:function(e){e.loading=!0},reset:function(e){e.data=[]},set:function(e,n){e.data=n.payload.data,e.limit=n.payload.limit,e.total_items=n.payload.total_items,e.total_items_per_passfail=n.payload.total_items_per_passfail,e.status=n.payload.status,e.loading=n.payload.loading}}}),g=((i=f.actions).reset,i.loading),k=i.set,b=a(292),h=function(){return h=Object.assign||function(e){for(var n,a=1,s=arguments.length;a<s;a++)for(var r in n=arguments[a])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},h.apply(this,arguments)},y=b.Z.withExtraArgument({api:{identity:new function(e){var n=this;this.signIn=function(e){return a=n,s=void 0,i=function(){var n,a;return function(e,n){var a,s,r,i,t={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;t;)try{if(a=1,s&&(r=2&i[0]?s.return:i[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,i[1])).done)return r;switch(s=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,s=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(!((r=(r=t.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){t=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){t.label=i[1];break}if(6===i[0]&&t.label<r[1]){t.label=r[1],r=i;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(i);break}r[2]&&t.ops.pop(),t.trys.pop();continue}i=n.call(e,t)}catch(e){i=[6,e],s=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}(this,(function(s){switch(s.label){case 0:return s.trys.push([0,3,,4]),[4,fetch(this.url+"/user/session",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})})];case 1:return[4,s.sent().json()];case 2:return"success"===(null==(n=s.sent())?void 0:n.status)?[2,{email:e.email||"system_testing@orca.security",jwt:n.jwt.access,refresh:n.jwt.refresh,status:n.status}]:[2,{error:new Error(null==n?void 0:n.error),type:"signIn"}];case 3:throw a=s.sent(),Error(a.message);case 4:return[2]}}))},new((r=void 0)||(r=Promise))((function(e,n){function t(e){try{c(i.next(e))}catch(e){n(e)}}function o(e){try{c(i.throw(e))}catch(e){n(e)}}function c(n){var a;n.done?e(n.value):(a=n.value,a instanceof r?a:new r((function(e){e(a)}))).then(t,o)}c((i=i.apply(a,s||[])).next())}));var a,s,r,i},this.url=e}({NVM_INC:"/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/include/node",npm_package_dependencies_webpack_dev_server:"4.7.4",npm_package_dependencies_shared_types:"1.0.0",npm_package_dependencies__reduxjs_toolkit:"^1.8.0",NODE:"/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/bin/node",npm_package_dependencies_process:"^0.11.10",INIT_CWD:"/Users/vladislavkovaliov/WebstormProjects/webpack-modules-federation/packages/store",NVM_CD_FLAGS:"-q",PYENV_ROOT:"/Users/vladislavkovaliov/.pyenv",npm_package_devDependencies_typescript:"4.6.2",npm_config_version_git_tag:"true",SHELL:"/bin/zsh",TERM:"xterm-256color",npm_package_devDependencies_style_loader:"3.3.1",TMPDIR:"/var/folders/5z/rg4s20jd5wl19zd1x2hrl84h0000gn/T/",npm_config_init_license:"MIT",TERM_SESSION_ID:"d33e11fd-b7dd-4ca0-a92d-4b13b41cf499",npm_package_private:"true",npm_config_registry:"https://registry.yarnpkg.com",ZSH:"/Users/vladislavkovaliov/.oh-my-zsh",npm_package_dependencies_react_dom:"17.0.2",npm_package_scripts_server:"node server.js",__INTELLIJ_COMMAND_HISTFILE__:"/Users/vladislavkovaliov/Library/Caches/JetBrains/WebStorm2021.2/terminal/history/webpack-modules-federation-history9",USER:"vladislavkovaliov",NVM_DIR:"/Users/vladislavkovaliov/.nvm",npm_package_devDependencies_webpack:"5.69.1",npm_package_description:"",npm_package_devDependencies_webpack_cli:"4.9.2",npm_package_devDependencies_dotenv:"^16.0.0",npm_package_license:"ISC",COMMAND_MODE:"unix2003",npm_package_devDependencies_postcss_loader:"6.2.1",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.K049MlJleG/Listeners",npm_package_dependencies_lodash:"4.17.21",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_package_dependencies_webpack_merge:"5.8.0",npm_package_devDependencies_postcss:"8.4.8",LOGIN_SHELL:"1",npm_execpath:"/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/lib/node_modules/yarn/bin/yarn.js",npm_package_devDependencies_postcss_cli:"9.1.0",PAGER:"less",npm_package_dependencies_react_redux:"7.2.6",npm_package_author_name:"Vladislav Kovaliov",LSCOLORS:"Gxfxcxdxbxegedabagacad",npm_package_devDependencies_webpack_dev_middleware:"5.3.1",PATH:"/var/folders/5z/rg4s20jd5wl19zd1x2hrl84h0000gn/T/yarn--1647184527563-0.7145301548683689:/Users/vladislavkovaliov/WebstormProjects/webpack-modules-federation/packages/store/node_modules/.bin:/Users/vladislavkovaliov/.config/yarn/link/node_modules/.bin:/Users/vladislavkovaliov/WebstormProjects/webpack-modules-federation/node_modules/.bin:/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/libexec/lib/node_modules/npm/bin/node-gyp-bin:/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/lib/node_modules/npm/bin/node-gyp-bin:/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/bin/node_modules/npm/bin/node-gyp-bin:/Users/vladislavkovaliov/.pyenv/shims:/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/vladislavkovaliov/WebstormProjects/webpack-modules-federation/node_modules/.bin:/Users/vladislavkovaliov/.fzf/bin",npm_config_argv:'{"remain":[],"cooked":["run","build"],"original":["run","build"]}',TERMINAL_EMULATOR:"JetBrains-JediTerm",_:"/Users/vladislavkovaliov/WebstormProjects/webpack-modules-federation/packages/store/node_modules/.bin/webpack",__CFBundleIdentifier:"com.jetbrains.WebStorm",npm_package_dependencies_redux_thunk:"2.4.1",PWD:"/Users/vladislavkovaliov/WebstormProjects/webpack-modules-federation/packages/store",npm_package_devDependencies_tailwindcss:"3.0.23",npm_package_devDependencies__types_lodash:"4.14.179",npm_lifecycle_event:"build",npm_package_devDependencies__types_react_router_dom:"^5.3.3",npm_package_name:"store",npm_package_scripts_start:"webpack serve --config ./configs/webpack/webpack.dev.js",npm_package_scripts_build:"webpack --config ./configs/webpack/webpack.prod.js",npm_config_version_commit_hooks:"true",XPC_FLAGS:"0x0",npm_package_dependencies_react_router_dom:"^6.2.2",npm_package_devDependencies_ts_loader:"9.2.7",npm_package_devDependencies_express:"4.17.3",npm_config_bin_links:"true",XPC_SERVICE_NAME:"0",npm_package_version:"1.0.0",npm_package_devDependencies_autoprefixer:"10.4.2",HOME:"/Users/vladislavkovaliov",SHLVL:"2",PYENV_SHELL:"zsh",npm_package_scripts_test:'echo "Error: no test specified" && exit 1',npm_config_save_prefix:"^",npm_config_strict_ssl:"true",npm_config_version_git_message:"v%s",LOGNAME:"vladislavkovaliov",LESS:"-R",YARN_WRAP_OUTPUT:"false",npm_lifecycle_script:"webpack --config ./configs/webpack/webpack.prod.js",npm_package_dependencies_html_webpack_plugin:"5.5.0",LC_CTYPE:"en_US.UTF-8",npm_package_dependencies_react:"17.0.2",NVM_BIN:"/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/bin",npm_package_dependencies__types_react:"17.0.39",npm_config_version_git_sign:"",npm_config_ignore_scripts:"",npm_config_user_agent:"yarn/1.22.17 npm/? node/v12.22.6 darwin x64",npm_package_devDependencies_dotenv_webpack:"^7.1.0",npm_config_init_version:"1.0.0",npm_config_ignore_optional:"",npm_package_devDependencies_css_loader:"6.7.0",npm_config_init_author_name:"Vladislav Kovaliov",npm_package_dependencies__types_react_dom:"17.0.13",npm_node_execpath:"/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/bin/node",npm_config_version_tag_prefix:"v"}.API_HOST),sonar:new function(e){var n=this;this.toParams=function(e){return new URLSearchParams(h({},e))},this.query=function(e){return a=n,s=void 0,i=function(){var n,a,s;return function(e,n){var a,s,r,i,t={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;t;)try{if(a=1,s&&(r=2&i[0]?s.return:i[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,i[1])).done)return r;switch(s=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,s=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(!((r=(r=t.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){t=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){t.label=i[1];break}if(6===i[0]&&t.label<r[1]){t.label=r[1],r=i;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(i);break}r[2]&&t.ops.pop(),t.trys.pop();continue}i=n.call(e,t)}catch(e){i=[6,e],s=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),n=localStorage.getItem("jwt"),[4,fetch(this.url+"/sonar/query?"+this.toParams({query:e,standard_format:!0}),{headers:{authorization:"Bearer ".concat(n)}})];case 1:return[4,r.sent().json()];case 2:return"success"===(null==(a=r.sent())?void 0:a.status)?[2,{data:null==a?void 0:a.data,limit:null==a?void 0:a.limit,total_items:null==a?void 0:a.totel_items,total_items_per_passfail:null==a?void 0:a.total_items_per_passfail,status:null==a?void 0:a.status}]:[2,{error:new Error(null==a?void 0:a.error),type:"query"}];case 3:throw s=r.sent(),Error(s.message);case 4:return[2]}}))},new((r=void 0)||(r=Promise))((function(e,n){function t(e){try{c(i.next(e))}catch(e){n(e)}}function o(e){try{c(i.throw(e))}catch(e){n(e)}}function c(n){var a;n.done?e(n.value):(a=n.value,a instanceof r?a:new r((function(e){e(a)}))).then(t,o)}c((i=i.apply(a,s||[])).next())}));var a,s,r,i},this.url=e}({NVM_INC:"/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/include/node",npm_package_dependencies_webpack_dev_server:"4.7.4",npm_package_dependencies_shared_types:"1.0.0",npm_package_dependencies__reduxjs_toolkit:"^1.8.0",NODE:"/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/bin/node",npm_package_dependencies_process:"^0.11.10",INIT_CWD:"/Users/vladislavkovaliov/WebstormProjects/webpack-modules-federation/packages/store",NVM_CD_FLAGS:"-q",PYENV_ROOT:"/Users/vladislavkovaliov/.pyenv",npm_package_devDependencies_typescript:"4.6.2",npm_config_version_git_tag:"true",SHELL:"/bin/zsh",TERM:"xterm-256color",npm_package_devDependencies_style_loader:"3.3.1",TMPDIR:"/var/folders/5z/rg4s20jd5wl19zd1x2hrl84h0000gn/T/",npm_config_init_license:"MIT",TERM_SESSION_ID:"d33e11fd-b7dd-4ca0-a92d-4b13b41cf499",npm_package_private:"true",npm_config_registry:"https://registry.yarnpkg.com",ZSH:"/Users/vladislavkovaliov/.oh-my-zsh",npm_package_dependencies_react_dom:"17.0.2",npm_package_scripts_server:"node server.js",__INTELLIJ_COMMAND_HISTFILE__:"/Users/vladislavkovaliov/Library/Caches/JetBrains/WebStorm2021.2/terminal/history/webpack-modules-federation-history9",USER:"vladislavkovaliov",NVM_DIR:"/Users/vladislavkovaliov/.nvm",npm_package_devDependencies_webpack:"5.69.1",npm_package_description:"",npm_package_devDependencies_webpack_cli:"4.9.2",npm_package_devDependencies_dotenv:"^16.0.0",npm_package_license:"ISC",COMMAND_MODE:"unix2003",npm_package_devDependencies_postcss_loader:"6.2.1",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.K049MlJleG/Listeners",npm_package_dependencies_lodash:"4.17.21",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_package_dependencies_webpack_merge:"5.8.0",npm_package_devDependencies_postcss:"8.4.8",LOGIN_SHELL:"1",npm_execpath:"/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/lib/node_modules/yarn/bin/yarn.js",npm_package_devDependencies_postcss_cli:"9.1.0",PAGER:"less",npm_package_dependencies_react_redux:"7.2.6",npm_package_author_name:"Vladislav Kovaliov",LSCOLORS:"Gxfxcxdxbxegedabagacad",npm_package_devDependencies_webpack_dev_middleware:"5.3.1",PATH:"/var/folders/5z/rg4s20jd5wl19zd1x2hrl84h0000gn/T/yarn--1647184527563-0.7145301548683689:/Users/vladislavkovaliov/WebstormProjects/webpack-modules-federation/packages/store/node_modules/.bin:/Users/vladislavkovaliov/.config/yarn/link/node_modules/.bin:/Users/vladislavkovaliov/WebstormProjects/webpack-modules-federation/node_modules/.bin:/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/libexec/lib/node_modules/npm/bin/node-gyp-bin:/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/lib/node_modules/npm/bin/node-gyp-bin:/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/bin/node_modules/npm/bin/node-gyp-bin:/Users/vladislavkovaliov/.pyenv/shims:/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/vladislavkovaliov/WebstormProjects/webpack-modules-federation/node_modules/.bin:/Users/vladislavkovaliov/.fzf/bin",npm_config_argv:'{"remain":[],"cooked":["run","build"],"original":["run","build"]}',TERMINAL_EMULATOR:"JetBrains-JediTerm",_:"/Users/vladislavkovaliov/WebstormProjects/webpack-modules-federation/packages/store/node_modules/.bin/webpack",__CFBundleIdentifier:"com.jetbrains.WebStorm",npm_package_dependencies_redux_thunk:"2.4.1",PWD:"/Users/vladislavkovaliov/WebstormProjects/webpack-modules-federation/packages/store",npm_package_devDependencies_tailwindcss:"3.0.23",npm_package_devDependencies__types_lodash:"4.14.179",npm_lifecycle_event:"build",npm_package_devDependencies__types_react_router_dom:"^5.3.3",npm_package_name:"store",npm_package_scripts_start:"webpack serve --config ./configs/webpack/webpack.dev.js",npm_package_scripts_build:"webpack --config ./configs/webpack/webpack.prod.js",npm_config_version_commit_hooks:"true",XPC_FLAGS:"0x0",npm_package_dependencies_react_router_dom:"^6.2.2",npm_package_devDependencies_ts_loader:"9.2.7",npm_package_devDependencies_express:"4.17.3",npm_config_bin_links:"true",XPC_SERVICE_NAME:"0",npm_package_version:"1.0.0",npm_package_devDependencies_autoprefixer:"10.4.2",HOME:"/Users/vladislavkovaliov",SHLVL:"2",PYENV_SHELL:"zsh",npm_package_scripts_test:'echo "Error: no test specified" && exit 1',npm_config_save_prefix:"^",npm_config_strict_ssl:"true",npm_config_version_git_message:"v%s",LOGNAME:"vladislavkovaliov",LESS:"-R",YARN_WRAP_OUTPUT:"false",npm_lifecycle_script:"webpack --config ./configs/webpack/webpack.prod.js",npm_package_dependencies_html_webpack_plugin:"5.5.0",LC_CTYPE:"en_US.UTF-8",npm_package_dependencies_react:"17.0.2",NVM_BIN:"/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/bin",npm_package_dependencies__types_react:"17.0.39",npm_config_version_git_sign:"",npm_config_ignore_scripts:"",npm_config_user_agent:"yarn/1.22.17 npm/? node/v12.22.6 darwin x64",npm_package_devDependencies_dotenv_webpack:"^7.1.0",npm_config_init_version:"1.0.0",npm_config_ignore_optional:"",npm_package_devDependencies_css_loader:"6.7.0",npm_config_init_author_name:"Vladislav Kovaliov",npm_package_dependencies__types_react_dom:"17.0.13",npm_node_execpath:"/Users/vladislavkovaliov/.nvm/versions/node/v12.22.6/bin/node",npm_config_version_tag_prefix:"v"}.API_HOST)}}),w=function(e){return function(n){return function(a){try{var s=e.getState().identity.jwt;localStorage.setItem("jwt",s)}catch(e){localStorage.clear()}finally{n(a)}}}},x=(0,_.xC)({reducer:{identity:v.reducer,error:p.reducer,attackChains:f.reducer},middleware:[y,w]});function S(e){var n,a=(0,t.v9)((function(n){return n[e]}));return(n={})[e]=a,n}function E(){var e=(0,t.v9)((function(e){return e.identity})),n=(0,t.I0)();return{identity:e,signIn:function(e,a){return n(function(e,n){return function(a,s,r){return i=void 0,t=void 0,c=function(){var s,i,t;return function(e,n){var a,s,r,i,t={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;t;)try{if(a=1,s&&(r=2&i[0]?s.return:i[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,i[1])).done)return r;switch(s=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,s=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(!((r=(r=t.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){t=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){t.label=i[1];break}if(6===i[0]&&t.label<r[1]){t.label=r[1],r=i;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(i);break}r[2]&&t.ops.pop(),t.trys.pop();continue}i=n.call(e,t)}catch(e){i=[6,e],s=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}(this,(function(o){switch(o.label){case 0:s=r.api,o.label=1;case 1:return o.trys.push([1,3,,4]),a(m()),[4,s.identity.signIn({email:e,password:n})];case 2:return(i=o.sent()).error?a(d({message:i.error.message})):a(u({email:e,jwt:i.jwt,refresh:i.refresh,status:i.status,loading:!1})),[3,4];case 3:return t=o.sent(),console.error(t),[3,4];case 4:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function a(e){try{r(c.next(e))}catch(e){n(e)}}function s(e){try{r(c.throw(e))}catch(e){n(e)}}function r(n){var r;n.done?e(n.value):(r=n.value,r instanceof o?r:new o((function(e){e(r)}))).then(a,s)}r((c=c.apply(i,t||[])).next())}));var i,t,o,c}}(e,a))}}}function U(){var e=(0,t.v9)((function(e){return e.attackChains})),n=(0,t.I0)();return{attackChains:e,fetchAttackChains:function(){return n((function(e,n,a){return s=void 0,r=void 0,t=function(){var n,s,r;return function(e,n){var a,s,r,i,t={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;t;)try{if(a=1,s&&(r=2&i[0]?s.return:i[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,i[1])).done)return r;switch(s=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,s=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(!((r=(r=t.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){t=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){t.label=i[1];break}if(6===i[0]&&t.label<r[1]){t.label=r[1],r=i;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(i);break}r[2]&&t.ops.pop(),t.trys.pop();continue}i=n.call(e,t)}catch(e){i=[6,e],s=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}(this,(function(i){switch(i.label){case 0:n=a.api,i.label=1;case 1:return i.trys.push([1,3,,4]),e(g()),[4,n.sonar.query("AttackPath")];case 2:return(s=i.sent()).error?e(d({message:s.error.message})):(console.log(s),e(k({data:s.data,limit:s.limit,total_items:s.total_items,total_items_per_passfail:s.total_items_per_passfail,status:s.status,loading:!1}))),[3,4];case 3:return r=i.sent(),console.error(r),[3,4];case 4:return[2]}}))},new((i=void 0)||(i=Promise))((function(e,n){function a(e){try{c(t.next(e))}catch(e){n(e)}}function o(e){try{c(t.throw(e))}catch(e){n(e)}}function c(n){var s;n.done?e(n.value):(s=n.value,s instanceof i?s:new i((function(e){e(s)}))).then(a,o)}c((t=t.apply(s,r||[])).next())}));var s,r,i,t}))}}}function D(e){var n=e.children;return c().createElement(t.zt,{store:x},c().createElement(l.BrowserRouter,null,n))}}}]);