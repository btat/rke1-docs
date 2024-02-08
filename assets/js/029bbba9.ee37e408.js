"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[8756],{4326:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var r=o(5893),s=o(1151);const t={title:"Adding and Removing Nodes",description:"RKE supports adding/removing nodes for worker and controlplane hosts. Learn about the changes you need to make to the cluster.yml in order to add/remove nodes"},d=void 0,i={id:"managing-clusters/managing-clusters",title:"Adding and Removing Nodes",description:"RKE supports adding/removing nodes for worker and controlplane hosts. Learn about the changes you need to make to the cluster.yml in order to add/remove nodes",source:"@site/docs/managing-clusters/managing-clusters.md",sourceDirName:"managing-clusters",slug:"/managing-clusters/",permalink:"/managing-clusters/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/managing-clusters/managing-clusters.md",tags:[],version:"current",lastUpdatedAt:1704844723,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{title:"Adding and Removing Nodes",description:"RKE supports adding/removing nodes for worker and controlplane hosts. Learn about the changes you need to make to the cluster.yml in order to add/remove nodes"},sidebar:"mySidebar",previous:{title:"Certificate Management",permalink:"/cert-mgmt/"},next:{title:"Kubernetes Configuration Options",permalink:"/config-options/"}},c={},l=[{value:"Adding/Removing Nodes",id:"addingremoving-nodes",level:3},{value:"Adding/Removing Worker Nodes",id:"addingremoving-worker-nodes",level:3},{value:"Removing Kubernetes Components from Nodes",id:"removing-kubernetes-components-from-nodes",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"addingremoving-nodes",children:"Adding/Removing Nodes"}),"\n",(0,r.jsxs)(n.p,{children:["RKE supports adding/removing ",(0,r.jsx)(n.a,{href:"/config-options/nodes/",children:"nodes"})," for worker and controlplane hosts."]}),"\n",(0,r.jsxs)(n.p,{children:["In order to add additional nodes, you update the original ",(0,r.jsx)(n.code,{children:"cluster.yml"})," file with any additional nodes and specify their role in the Kubernetes cluster."]}),"\n",(0,r.jsxs)(n.p,{children:["In order to remove nodes, remove the node information from the nodes list in the original ",(0,r.jsx)(n.code,{children:"cluster.yml"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["After you've made changes to add/remove nodes, run ",(0,r.jsx)(n.code,{children:"rke up"})," with the updated ",(0,r.jsx)(n.code,{children:"cluster.yml"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"addingremoving-worker-nodes",children:"Adding/Removing Worker Nodes"}),"\n",(0,r.jsxs)(n.p,{children:["You can add/remove only worker nodes, by running ",(0,r.jsx)(n.code,{children:"rke up --update-only"}),". This will ignore everything else in the ",(0,r.jsx)(n.code,{children:"cluster.yml"})," except for any worker nodes."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["When using ",(0,r.jsx)(n.code,{children:"--update-only"}),", other actions that do not specifically relate to nodes may be deployed or updated, for example ",(0,r.jsx)(n.a,{href:"/config-options/add-ons/",children:"addons"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"removing-kubernetes-components-from-nodes",children:"Removing Kubernetes Components from Nodes"}),"\n",(0,r.jsxs)(n.p,{children:["In order to remove the Kubernetes components from nodes, you use the ",(0,r.jsx)(n.code,{children:"rke remove"})," command."]}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:["This command is irreversible and will destroy the Kubernetes cluster, including etcd snapshots on S3. If there is a disaster and your cluster is inaccessible, refer to the process for ",(0,r.jsx)(n.a,{href:"/etcd-snapshots/#restoring-a-cluster-from-backup",children:"restoring your cluster from a snapshot"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"rke remove"})," command does the following to each node in the ",(0,r.jsx)(n.code,{children:"cluster.yml"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Remove the Kubernetes component deployed on it","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"etcd"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"kube-apiserver"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"kube-controller-manager"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"kubelet"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"kube-proxy"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"nginx-proxy"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The cluster's etcd snapshots are removed, including both local snapshots and snapshots that are stored on S3."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Pods are not removed from the nodes. If the node is re-used, the pods will automatically be removed when the new Kubernetes cluster is created."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Clean each host from the directories left by the services:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"/etc/kubernetes/ssl"}),"\n",(0,r.jsx)(n.li,{children:"/var/lib/etcd"}),"\n",(0,r.jsx)(n.li,{children:"/etc/cni"}),"\n",(0,r.jsx)(n.li,{children:"/opt/cni"}),"\n",(0,r.jsx)(n.li,{children:"/var/run/calico"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>d});var r=o(7294);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);