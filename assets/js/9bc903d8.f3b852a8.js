"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[2972],{8197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>x});var r=n(5893),s=n(1151);const i={title:"OpenStack Cloud Provider"},l=void 0,d={id:"config-options/cloud-providers/openstack/openstack",title:"OpenStack Cloud Provider",description:"To enable the OpenStack cloud provider, besides setting the name as openstack, there are specific configuration options that must be set. The OpenStack configuration options are grouped into different sections.",source:"@site/docs/config-options/cloud-providers/openstack/openstack.md",sourceDirName:"config-options/cloud-providers/openstack",slug:"/config-options/cloud-providers/openstack/",permalink:"/config-options/cloud-providers/openstack/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/cloud-providers/openstack/openstack.md",tags:[],version:"current",lastUpdatedAt:1707343823,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{title:"OpenStack Cloud Provider"},sidebar:"mySidebar",previous:{title:"Azure Cloud Provider",permalink:"/config-options/cloud-providers/azure/"},next:{title:"vSphere Cloud Provider",permalink:"/config-options/cloud-providers/vsphere/"}},c={},x=[{value:"Overriding the hostname",id:"overriding-the-hostname",level:2},{value:"OpenStack Configuration Options",id:"openstack-configuration-options",level:2},{value:"Global",id:"global",level:3},{value:"Load Balancer",id:"load-balancer",level:3},{value:"Block Storage",id:"block-storage",level:3},{value:"Route",id:"route",level:3},{value:"Metadata",id:"metadata",level:3}];function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["To enable the OpenStack cloud provider, besides setting the name as ",(0,r.jsx)(t.code,{children:"openstack"}),", there are specific configuration options that must be set. The OpenStack configuration options are grouped into different sections."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"cloud_provider:\n    name: openstack\n    openstackCloudProvider:\n      global:\n        username: xxxxxxxxxxxxxx\n        password: xxxxxxxxxxxxxx\n        auth-url: https://1.2.3.4/identity/v3\n        tenant-id: xxxxxxxxxxxxxx\n        domain-id: xxxxxxxxxxxxxx\n      load_balancer:\n        subnet-id: xxxxxxxxxxxxxx\n      block_storage:\n        ignore-volume-az: true\n      route:\n        router-id: xxxxxxxxxxxxxx\n      metadata:\n        search-order: xxxxxxxxxxxxxx\n"})}),"\n",(0,r.jsx)(t.h2,{id:"overriding-the-hostname",children:"Overriding the hostname"}),"\n",(0,r.jsxs)(t.p,{children:["The OpenStack cloud provider uses the instance name (as determined from OpenStack metadata) as the name of the Kubernetes Node object, you must override the Kubernetes name on the node by setting the ",(0,r.jsx)(t.code,{children:"hostname_override"})," for each node. If you do not set the ",(0,r.jsx)(t.code,{children:"hostname_override"}),", the Kubernetes node name will be set as the ",(0,r.jsx)(t.code,{children:"address"}),", which will cause the OpenStack cloud provider to fail."]}),"\n",(0,r.jsx)(t.h2,{id:"openstack-configuration-options",children:"OpenStack Configuration Options"}),"\n",(0,r.jsx)(t.p,{children:"The OpenStack configuration options are divided into 5 groups."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Global"}),"\n",(0,r.jsx)(t.li,{children:"Load Balancer"}),"\n",(0,r.jsx)(t.li,{children:"Block Storage"}),"\n",(0,r.jsx)(t.li,{children:"Route"}),"\n",(0,r.jsx)(t.li,{children:"Metadata"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"global",children:"Global"}),"\n",(0,r.jsxs)(t.p,{children:["These are the options that are available under the ",(0,r.jsx)(t.code,{children:"global"})," directive."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"OpenStack's Global Configuration Options"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"auth_url"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"username"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"user-id"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"password"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"tenant-id"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"tenant-name"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"trust-id"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"domain-id"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"domain-name"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"region"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"ca-file"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"load-balancer",children:"Load Balancer"}),"\n",(0,r.jsxs)(t.p,{children:["These are the options that are available under the ",(0,r.jsx)(t.code,{children:"load_balancer"})," directive."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"OpenStack's Load Balancer Configuration Options"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"lb-version"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"use-octavia"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"bool"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"subnet-id"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"floating-network-id"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"lb-method"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"lb-provider"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"manage-security-groups"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"bool"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"create-monitor"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"bool"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"monitor-delay"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["* if ",(0,r.jsx)(t.code,{children:"create-monitor"})," is true"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"monitor-timeout"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["* if ",(0,r.jsx)(t.code,{children:"create-monitor"})," is true"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"monitor-max-retries"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["* if ",(0,r.jsx)(t.code,{children:"create-monitor"})," is true"]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"block-storage",children:"Block Storage"}),"\n",(0,r.jsxs)(t.p,{children:["These are the options that are available under the ",(0,r.jsx)(t.code,{children:"block_storage"})," directive."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"OpenStack's Block Storage Configuration Options"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"bs-version"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"trust-device-path"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"bool"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"ignore-volume-az"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"bool"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"route",children:"Route"}),"\n",(0,r.jsxs)(t.p,{children:["This is the option that is available under the ",(0,r.jsx)(t.code,{children:"route"})," directive."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"OpenStack's Route Configuration Option"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"router-id"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"Metadata"}),"\n",(0,r.jsxs)(t.p,{children:["These are the options that are available under the ",(0,r.jsx)(t.code,{children:"metadata"})," directive."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"OpenStack's Metadata Configuration Options"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"search-order"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"request-timeout"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["For more information of OpenStack configurations options please refer to the official Kubernetes ",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#openstack",children:"documentation"}),"."]})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>l});var r=n(7294);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);