"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[6598],{4572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(5893),s=n(1151);const i={title:"vSphere Configuration Reference"},l=void 0,c={id:"config-options/cloud-providers/vsphere/config-reference/config-reference",title:"vSphere Configuration Reference",description:"This section shows an example of how to configure the vSphere cloud provider.",source:"@site/docs/config-options/cloud-providers/vsphere/config-reference/config-reference.md",sourceDirName:"config-options/cloud-providers/vsphere/config-reference",slug:"/config-options/cloud-providers/vsphere/config-reference/",permalink:"/config-options/cloud-providers/vsphere/config-reference/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/cloud-providers/vsphere/config-reference/config-reference.md",tags:[],version:"current",lastUpdatedAt:1690506652,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{title:"vSphere Configuration Reference"},sidebar:"mySidebar",previous:{title:"Enabling Disk UUIDs for vSphere VMs",permalink:"/config-options/cloud-providers/vsphere/enabling-uuid/"},next:{title:"Troubleshooting vSphere Clusters",permalink:"/config-options/cloud-providers/vsphere/troubleshooting/"}},d={},o=[{value:"vSphere Configuration Example",id:"vsphere-configuration-example",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"global",id:"global",level:3},{value:"virtual_center",id:"virtual_center",level:3},{value:"workspace",id:"workspace",level:3},{value:"disk",id:"disk",level:3},{value:"network",id:"network",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This section shows an example of how to configure the vSphere cloud provider."}),"\n",(0,r.jsx)(t.p,{children:"The vSphere cloud provider must be enabled to allow dynamic provisioning of volumes."}),"\n",(0,r.jsxs)(t.p,{children:["For more details on deploying a Kubernetes cluster on vSphere, refer to the ",(0,r.jsx)(t.a,{href:"https://cloud-provider-vsphere.sigs.k8s.io/tutorials/kubernetes-on-vsphere-with-kubeadm.html",children:"official cloud provider documentation."})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"This documentation reflects the new vSphere Cloud Provider configuration schema introduced in Kubernetes v1.9 which differs from previous versions."})}),"\n",(0,r.jsx)(t.h2,{id:"vsphere-configuration-example",children:"vSphere Configuration Example"}),"\n",(0,r.jsx)(t.p,{children:"Given the following:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["VMs in the cluster are running in the same datacenter ",(0,r.jsx)(t.code,{children:"eu-west-1"})," managed by the vCenter ",(0,r.jsx)(t.code,{children:"vc.example.com"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["The vCenter has a user ",(0,r.jsx)(t.code,{children:"provisioner"})," with password ",(0,r.jsx)(t.code,{children:"secret"})," with the required roles assigned, see ",(0,r.jsx)(t.a,{href:"/config-options/cloud-providers/vsphere/#prerequisites",children:"Prerequisites"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["The vCenter has a datastore named ",(0,r.jsx)(t.code,{children:"ds-1"})," which should be used to store the VMDKs for volumes."]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.code,{children:"vm/kubernetes"})," folder exists in vCenter."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The corresponding configuration for the provider would then be as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"rancher_kubernetes_engine_config:\n  (...)\n  cloud_provider:\n    name: vsphere\n    vsphereCloudProvider:\n      virtual_center:\n        vc.example.com:\n          user: provisioner\n          password: secret\n          port: 443\n          datacenters: /eu-west-1\n      workspace:\n        server: vc.example.com\n        folder: myvmfolder\n        default-datastore: ds-1\n        datacenter: /eu-west-1\n        resourcepool-path: /eu-west-1/host/hn1/resources/myresourcepool\n\n"})}),"\n",(0,r.jsx)(t.h2,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,r.jsx)(t.p,{children:"The vSphere configuration options are divided into 5 groups:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#global",children:"global"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#virtual_center",children:"virtual_center"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#workspace",children:"workspace"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#disk",children:"disk"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#network",children:"network"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"global",children:"global"}),"\n",(0,r.jsxs)(t.p,{children:["The main purpose of global options is to be able to define a common set of configuration parameters that will be inherited by all vCenters defined under the ",(0,r.jsx)(t.code,{children:"virtual_center"})," directive unless explicitly defined there."]}),"\n",(0,r.jsxs)(t.p,{children:["Accordingly, the ",(0,r.jsx)(t.code,{children:"global"})," directive accepts the same configuration options that are available under the ",(0,r.jsx)(t.code,{children:"virtual_center"})," directive. Additionally it accepts a single parameter that can only be specified here:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"global Options"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"insecure-flag"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"boolean"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Set to ",(0,r.jsx)(t.strong,{children:"true"})," if the vCenter/ESXi uses a self-signed certificate."]})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"(...)\n    global:\n      insecure-flag: true\n"})}),"\n",(0,r.jsx)(t.h3,{id:"virtual_center",children:"virtual_center"}),"\n",(0,r.jsx)(t.p,{children:"This configuration directive specifies the vCenters that are managing the nodes in the cluster. You must define at least one vCenter/ESXi server. If the nodes span multiple vCenters then all must be defined."}),"\n",(0,r.jsxs)(t.p,{children:["Each vCenter is defined by adding a new entry under the ",(0,r.jsx)(t.code,{children:"virtual_center"})," directive with the vCenter IP or FQDN as the name. All required parameters must be provided for each vCenter unless they are already defined under the ",(0,r.jsx)(t.code,{children:"global"})," directive."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"virtual_center Options"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"user"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"vCenter/ESXi user used to authenticate with this server."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"password"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"User's password."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"port"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Port to use to connect to this server. Defaults to 443."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"datacenters"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Comma-separated list of all datacenters in which cluster nodes are running in."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"soap-roundtrip-count"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"uint"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Round tripper count for API requests to the vCenter (num retries = value - 1)."})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"The following additional options (introduced in Kubernetes v1.11) are not yet supported in RKE."})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"virtual_center Options"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"secret-name"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Name of secret resource containing credential key/value pairs. Can be specified in lieu of user/password parameters."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"secret-namespace"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Namespace in which the secret resource was created in."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"ca-file"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Path to CA cert file used to verify the vCenter certificate."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"(...)\n    virtual_center:\n      172.158.111.1: {}  # This vCenter inherits all it's properties from global options\n      172.158.110.2:     # All required options are set explicitly\n        user: vc-user\n        password: othersecret\n        datacenters: eu-west-2\n"})}),"\n",(0,r.jsx)(t.h3,{id:"workspace",children:"workspace"}),"\n",(0,r.jsx)(t.p,{children:"This configuration group specifies how storage for volumes is created in vSphere.\nThe following configuration options are available:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"workspace Options"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"server"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["IP or FQDN of the vCenter/ESXi that should be used for creating the volumes. Must match one of the vCenters defined under the ",(0,r.jsx)(t.code,{children:"virtual_center"})," directive."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"datacenter"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Name of the datacenter that should be used for creating volumes. For ESXi enter ",(0,r.jsx)(t.em,{children:"ha-datacenter"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"folder"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:'Path of folder in which to create dummy VMs used for volume provisioning (relative from the root folder in vCenter), e.g. "vm/kubernetes".'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"default-datastore"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Name of default datastore to place VMDKs if neither datastore or storage policy are specified in the volume options of a PVC. If datastore is located in a storage folder or is a member of a datastore cluster, specify the full path."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"resourcepool-path"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Absolute or relative path to the resource pool where the dummy VMs for ",(0,r.jsx)(t.a,{href:"https://vmware.github.io/vsphere-storage-for-kubernetes/documentation/policy-based-mgmt.html",children:"Storage policy based provisioning"})," should be created. If a relative path is specified, it is resolved with respect to the datacenter's ",(0,r.jsx)(t.em,{children:"host"})," folder. Examples: ",(0,r.jsx)(t.code,{children:"/<dataCenter>/host/<hostOrClusterName>/Resources/<poolName>"}),", ",(0,r.jsx)(t.code,{children:"Resources/<poolName>"}),". For standalone ESXi specify ",(0,r.jsx)(t.code,{children:"Resources"}),"."]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"(...)\n    workspace:\n      server: 172.158.111.1 # matches IP of vCenter defined in the virtual_center block\n      datacenter: eu-west-1\n      folder: vm/kubernetes\n      default-datastore: ds-1\n"})}),"\n",(0,r.jsx)(t.h3,{id:"disk",children:"disk"}),"\n",(0,r.jsx)(t.p,{children:"The following configuration options are available under the disk directive:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"disk Options"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"scsicontrollertype"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["SCSI controller type to use when attaching block storage to VMs. Must be one of: ",(0,r.jsx)(t.em,{children:"lsilogic-sas"})," or ",(0,r.jsx)(t.em,{children:"pvscsi"}),". Default: ",(0,r.jsx)(t.em,{children:"pvscsi"}),"."]})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"network",children:"network"}),"\n",(0,r.jsx)(t.p,{children:"The following configuration options are available under the network directive:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"network Options"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"public-network"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Name of public ",(0,r.jsx)(t.strong,{children:"VM Network"})," to which the VMs in the cluster are connected. Used to determine public IP addresses of VMs."]})]})})]})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>l});var r=n(7294);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);