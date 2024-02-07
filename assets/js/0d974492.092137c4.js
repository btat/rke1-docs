"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[4619],{6481:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=r(5893),i=r(1151);const s={title:"Enabling Disk UUIDs for vSphere VMs"},t=void 0,a={id:"config-options/cloud-providers/vsphere/enabling-uuid/enabling-uuid",title:"Enabling Disk UUIDs for vSphere VMs",description:"In order to provision nodes with RKE, all nodes must be configured with disk UUIDs. This is required so that attached VMDKs present a consistent UUID to the VM, allowing the disk to be mounted properly.",source:"@site/docs/config-options/cloud-providers/vsphere/enabling-uuid/enabling-uuid.md",sourceDirName:"config-options/cloud-providers/vsphere/enabling-uuid",slug:"/config-options/cloud-providers/vsphere/enabling-uuid/",permalink:"/config-options/cloud-providers/vsphere/enabling-uuid/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/cloud-providers/vsphere/enabling-uuid/enabling-uuid.md",tags:[],version:"current",lastUpdatedAt:1707343823,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{title:"Enabling Disk UUIDs for vSphere VMs"},sidebar:"mySidebar",previous:{title:"vSphere Cloud Provider",permalink:"/config-options/cloud-providers/vsphere/"},next:{title:"vSphere Configuration Reference",permalink:"/config-options/cloud-providers/vsphere/config-reference/"}},d={},l=[{value:"Using the vSphere Console",id:"using-the-vsphere-console",level:3},{value:"Using the GOVC CLI tool",id:"using-the-govc-cli-tool",level:3},{value:"Using a Rancher Node Template",id:"using-a-rancher-node-template",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In order to provision nodes with RKE, all nodes must be configured with disk UUIDs. This is required so that attached VMDKs present a consistent UUID to the VM, allowing the disk to be mounted properly."}),"\n",(0,o.jsxs)(n.p,{children:["Depending on whether you are provisioning the VMs using the ",(0,o.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/vsphere",children:"vSphere node driver"})," in Rancher or using your own scripts or third-party tools, there are different methods available to enable disk UUIDs for VMs:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#using-the-vsphere-console",children:"Using the vSphere console"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#using-the-govc-cli-tool",children:"Using the GOVC CLI tool"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#using-a-rancher-node-template",children:"Using a Rancher node template"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"using-the-vsphere-console",children:"Using the vSphere Console"}),"\n",(0,o.jsx)(n.p,{children:"The required property can be set while creating or modifying VMs in the vSphere Console:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["For each VM navigate to the tab ",(0,o.jsx)(n.strong,{children:"VM Options"})," and click on ",(0,o.jsx)(n.strong,{children:"Edit Configuration"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Add the parameter ",(0,o.jsx)(n.code,{children:"disk.EnableUUID"})," with a value of ",(0,o.jsx)(n.strong,{children:"TRUE"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"vSphere Advanced Parameters",src:r(1534).Z+"",width:"600",height:"376"})}),"\n",(0,o.jsx)(n.h3,{id:"using-the-govc-cli-tool",children:"Using the GOVC CLI tool"}),"\n",(0,o.jsxs)(n.p,{children:["You can also modify properties of VMs with the ",(0,o.jsx)(n.a,{href:"https://github.com/vmware/govmomi/tree/master/govc",children:"govc"})," command-line tool to enable disk UUIDs:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ govc vm.change -vm <vm-path> -e disk.enableUUID=TRUE\n"})}),"\n",(0,o.jsx)(n.h3,{id:"using-a-rancher-node-template",children:"Using a Rancher Node Template"}),"\n",(0,o.jsx)(n.p,{children:"In Rancher v2.0.4+, disk UUIDs are enabled in vSphere node templates by default."}),"\n",(0,o.jsxs)(n.p,{children:["If you are using Rancher before v2.0.4, refer to the ",(0,o.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/prior-to-v2.0.4",children:"vSphere node template documentation."})," for details on how to enable a UUID with a Rancher node template."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1534:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/vsphere-advanced-parameters-5c1bb0239fffed3c730b794975630aeb.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>t});var o=r(7294);const i={},s=o.createContext(i);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);