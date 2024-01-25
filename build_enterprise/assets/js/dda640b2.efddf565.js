"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[5758],{4013:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var i=r(5893),a=r(1151);const t={title:"Maintaining Availability for Applications During Upgrades"},o=void 0,s={id:"upgrades/maintaining-availability/maintaining-availability",title:"Maintaining Availability for Applications During Upgrades",description:"Available as of v1.1.0",source:"@site/docs/upgrades/maintaining-availability/maintaining-availability.md",sourceDirName:"upgrades/maintaining-availability",slug:"/upgrades/maintaining-availability/",permalink:"/upgrades/maintaining-availability/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/upgrades/maintaining-availability/maintaining-availability.md",tags:[],version:"current",lastUpdatedAt:1683149494,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"Maintaining Availability for Applications During Upgrades"},sidebar:"mySidebar",previous:{title:"How Upgrades Work",permalink:"/upgrades/how-upgrades-work/"},next:{title:"Configuring the Upgrade Strategy",permalink:"/upgrades/configuring-strategy/"}},l={},d=[{value:"1. Kubernetes Version Requirement",id:"1-kubernetes-version-requirement",level:3},{value:"2. Cluster Requirements",id:"2-cluster-requirements",level:3},{value:"3. Workload Requirements",id:"3-workload-requirements",level:3}];function u(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Available as of v1.1.0"})}),"\n",(0,i.jsxs)(n.p,{children:["In this section, you'll learn the requirements to prevent downtime for your applications when you upgrade the cluster using ",(0,i.jsx)(n.code,{children:"rke up"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"An upgrade without downtime is one in which your workloads are available on at least a single node, and all critical addon services, such as Ingress and DNS, are available during the upgrade."}),"\n",(0,i.jsxs)(n.p,{children:["The way that clusters are upgraded changed in RKE v1.1.0. For details, refer to ",(0,i.jsx)(n.a,{href:"/upgrades/how-upgrades-work/",children:"How Upgrades Work."})]}),"\n",(0,i.jsx)(n.p,{children:"This availability is achieved by upgrading worker nodes in batches of a configurable size, and ensuring that your workloads run on a number of nodes that exceeds that maximum number of unavailable worker nodes."}),"\n",(0,i.jsx)(n.p,{children:"To avoid downtime for your applications during an upgrade, you will need to configure your workloads to continue running despite the rolling upgrade of worker nodes. There are also requirements for the cluster architecture and Kubernetes target version."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#1-kubernetes-version-requirement",children:"Kubernetes Version Requirement"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#2-cluster-requirements",children:"Cluster Requirements"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#3-workload-requirements",children:"Workload Requirements"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"1-kubernetes-version-requirement",children:"1. Kubernetes Version Requirement"}),"\n",(0,i.jsx)(n.p,{children:"When upgrading to a newer Kubernetes version, the upgrade must be from a minor release to the next minor version, or to within the same patch release series."}),"\n",(0,i.jsx)(n.h3,{id:"2-cluster-requirements",children:"2. Cluster Requirements"}),"\n",(0,i.jsx)(n.p,{children:"The following must be true of the cluster that will be upgraded:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The cluster has three or more etcd nodes."}),"\n",(0,i.jsx)(n.li,{children:"The cluster has two or more controlplane nodes."}),"\n",(0,i.jsx)(n.li,{children:"The cluster has two or more worker nodes."}),"\n",(0,i.jsx)(n.li,{children:"The Ingress, DNS, and other addons are schedulable to a number of nodes that exceeds the maximum number of unavailable worker nodes, also called the batch size. By default, the minimum number of unavailable worker nodes is 10 percent of worker nodes, rounded down to the nearest node, with a minimum batch size of one node."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-workload-requirements",children:"3. Workload Requirements"}),"\n",(0,i.jsx)(n.p,{children:"The following must be true of the cluster's applications:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The application and Ingress are deployed across a number of nodes exceeding the maximum number of unavailable worker nodes, also called the batch size. By default, the minimum number of unavailable worker nodes is 10 percent of worker nodes, rounded down to the nearest node, with a minimum batch size of one node."}),"\n",(0,i.jsx)(n.li,{children:"The applications must make use of liveness and readiness probes."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For information on how to use node selectors to assign pods to nodes, refer to the ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/",children:"official Kubernetes documentation."})]}),"\n",(0,i.jsxs)(n.p,{children:["For information on configuring the number of replicas for each addon, refer to ",(0,i.jsx)(n.a,{href:"/upgrades/configuring-strategy/",children:"this section."})]})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var i=r(7294);const a={},t=i.createContext(a);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);