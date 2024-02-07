"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[4984],{9271:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var n=s(5893),i=s(1151);const t={title:"Metrics Server"},o=void 0,c={id:"config-options/add-ons/metrics-server/metrics-server",title:"Metrics Server",description:"By default, RKE deploys Metrics Server to provide metrics on resources in your cluster.",source:"@site/docs/config-options/add-ons/metrics-server/metrics-server.md",sourceDirName:"config-options/add-ons/metrics-server",slug:"/config-options/add-ons/metrics-server/",permalink:"/config-options/add-ons/metrics-server/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/add-ons/metrics-server/metrics-server.md",tags:[],version:"current",lastUpdatedAt:1707343823,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{title:"Metrics Server"},sidebar:"mySidebar",previous:{title:"K8s Ingress Controllers",permalink:"/config-options/add-ons/ingress-controllers/"},next:{title:"User-Defined Add-Ons",permalink:"/config-options/add-ons/user-defined-add-ons/"}},l={},a=[{value:"Tolerations",id:"tolerations",level:3},{value:"Metrics Server Priority Class Name",id:"metrics-server-priority-class-name",level:3},{value:"Disabling the Metrics Server",id:"disabling-the-metrics-server",level:3}];function d(e){const r={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["By default, RKE deploys ",(0,n.jsx)(r.a,{href:"https://github.com/kubernetes-incubator/metrics-server",children:"Metrics Server"})," to provide metrics on resources in your cluster."]}),"\n",(0,n.jsx)(r.p,{children:"RKE will deploy Metrics Server as a Deployment."}),"\n",(0,n.jsxs)(r.p,{children:["The image used for Metrics Server is under the ",(0,n.jsxs)(r.a,{href:"/config-options/system-images/",children:[(0,n.jsx)(r.code,{children:"system_images"})," directive"]}),". For each Kubernetes version, there is a default image associated with the Metrics Server, but these can be overridden by changing the image tag in ",(0,n.jsx)(r.code,{children:"system_images"}),"."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#tolerations",children:"Tolerations"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#metrics-server-priority-class-name",children:"Priority Class Name"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#disabling-the-metrics-server",children:"Disabling the Metrics Server"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"tolerations",children:"Tolerations"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"Available as of v1.2.4"})}),"\n",(0,n.jsxs)(r.p,{children:["The configured tolerations apply to the ",(0,n.jsx)(r.code,{children:"metrics-server"})," Deployment."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'monitoring:\n  tolerations:\n  - key: "node.kubernetes.io/unreachable"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n  - key: "node.kubernetes.io/not-ready"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n'})}),"\n",(0,n.jsxs)(r.p,{children:["To check for applied tolerations on the ",(0,n.jsx)(r.code,{children:"metrics-server"})," Deployment, use the following commands:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"kubectl -n kube-system get deploy metrics-server -o jsonpath='{.spec.template.spec.tolerations}'\n"})}),"\n",(0,n.jsx)(r.h3,{id:"metrics-server-priority-class-name",children:"Metrics Server Priority Class Name"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"Available as of RKE v1.2.6+"})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#pod-priority",children:"pod priority"})," is set by configuring a priority class name:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"monitoring:\n  provider: metrics-server\n  metrics_server_priority_class_name: system-cluster-critical\n"})}),"\n",(0,n.jsx)(r.h3,{id:"disabling-the-metrics-server",children:"Disabling the Metrics Server"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"Available as of v0.2.0"})}),"\n",(0,n.jsxs)(r.p,{children:["You can disable the default controller by specifying ",(0,n.jsx)(r.code,{children:"none"})," to the monitoring ",(0,n.jsx)(r.code,{children:"provider"})," directive in the cluster configuration."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"monitoring:\n  provider: none\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>c,a:()=>o});var n=s(7294);const i={},t=n.createContext(i);function o(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);