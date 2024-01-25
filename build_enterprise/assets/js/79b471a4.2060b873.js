"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[5628],{209:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(5893),t=n(1151);const i={title:"Extra Args, Extra Binds, and Extra Environment Variables"},a=void 0,o={id:"config-options/services/services-extras/services-extras",title:"Extra Args, Extra Binds, and Extra Environment Variables",description:"RKE supports additional service arguments, volume binds and environment variables.",source:"@site/docs/config-options/services/services-extras/services-extras.md",sourceDirName:"config-options/services/services-extras",slug:"/config-options/services/services-extras/",permalink:"/config-options/services/services-extras/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/services/services-extras/services-extras.md",tags:[],version:"current",lastUpdatedAt:1683149494,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"Extra Args, Extra Binds, and Extra Environment Variables"},sidebar:"mySidebar",previous:{title:"Default Kubernetes Services",permalink:"/config-options/services/"},next:{title:"External etcd",permalink:"/config-options/services/external-etcd/"}},d={},c=[{value:"Extra Args",id:"extra-args",level:3},{value:"Extra Binds",id:"extra-binds",level:3},{value:"Extra Environment Variables",id:"extra-environment-variables",level:3}];function l(e){const s={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"RKE supports additional service arguments, volume binds and environment variables."}),"\n",(0,r.jsx)(s.h3,{id:"extra-args",children:"Extra Args"}),"\n",(0,r.jsxs)(s.p,{children:["For any of the Kubernetes services, you can update the ",(0,r.jsx)(s.code,{children:"extra_args"})," to change the existing defaults."]}),"\n",(0,r.jsxs)(s.p,{children:["As of ",(0,r.jsx)(s.code,{children:"v0.1.3"}),", using ",(0,r.jsx)(s.code,{children:"extra_args"})," will add new arguments and ",(0,r.jsx)(s.strong,{children:"override"})," any existing defaults. For example, if you need to modify the default admission plugins list, you need to include the default list and edit it with your changes so all changes are included."]}),"\n",(0,r.jsxs)(s.p,{children:["Before ",(0,r.jsx)(s.code,{children:"v0.1.3"}),", using ",(0,r.jsx)(s.code,{children:"extra_args"})," would only add new arguments to the list and there was no ability to change the default list."]}),"\n",(0,r.jsxs)(s.p,{children:["All service defaults and parameters are defined per ",(0,r.jsx)(s.a,{href:"/config-options/#kubernetes-version",children:(0,r.jsx)(s.code,{children:"kubernetes_version"})}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["For RKE v0.3.0+, the service defaults and parameters are defined per ",(0,r.jsx)(s.a,{href:"/config-options/#kubernetes-version",children:(0,r.jsx)(s.code,{children:"kubernetes_version"})}),". The service defaults are located ",(0,r.jsx)(s.a,{href:"https://github.com/rancher/kontainer-driver-metadata/blob/master/rke/k8s_service_options.go",children:"here"}),". The default list of admissions plugins is the same for all Kubernetes versions and is located ",(0,r.jsx)(s.a,{href:"https://github.com/rancher/kontainer-driver-metadata/blob/master/rke/k8s_service_options.go#L11",children:"here"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["For RKE before v0.3.0, the service defaults and admission plugins are defined per ",(0,r.jsx)(s.a,{href:"/config-options/#kubernetes-version",children:(0,r.jsx)(s.code,{children:"kubernetes_version"})})," and located ",(0,r.jsx)(s.a,{href:"https://github.com/rancher/types/blob/release/v2.2/apis/management.cattle.io/v3/k8s_defaults.go",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'services:\n    kube-controller:\n      extra_args:\n        cluster-name: "mycluster"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"extra-binds",children:"Extra Binds"}),"\n",(0,r.jsxs)(s.p,{children:["Additional volume binds can be added to services using the ",(0,r.jsx)(s.code,{children:"extra_binds"})," arguments."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'services:\n    kubelet:\n      extra_binds:\n        - "/dev:/host/dev"\n        - "/usr/libexec/kubernetes/kubelet-plugins:/usr/libexec/kubernetes/kubelet-plugins:z"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"extra-environment-variables",children:"Extra Environment Variables"}),"\n",(0,r.jsxs)(s.p,{children:["Additional environment variables can be added to services by using the ",(0,r.jsx)(s.code,{children:"extra_env"})," arguments."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'services:\n    kubelet:\n      extra_env:\n        - "HTTP_PROXY=http://your_proxy"\n'})})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var r=n(7294);const t={},i=r.createContext(t);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);