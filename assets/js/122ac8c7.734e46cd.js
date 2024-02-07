"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[505],{1685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=n(5893),r=n(1151);const i={title:"Azure Cloud Provider"},l=void 0,d={id:"config-options/cloud-providers/azure/azure",title:"Azure Cloud Provider",description:"To enable the Azure cloud provider, besides setting the name as azure, there are specific configuration options that must be set. Additionally, the Azure node name must also match the Kubernetes node name.",source:"@site/docs/config-options/cloud-providers/azure/azure.md",sourceDirName:"config-options/cloud-providers/azure",slug:"/config-options/cloud-providers/azure/",permalink:"/config-options/cloud-providers/azure/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/cloud-providers/azure/azure.md",tags:[],version:"current",lastUpdatedAt:1707343823,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{title:"Azure Cloud Provider"},sidebar:"mySidebar",previous:{title:"AWS Cloud Provider",permalink:"/config-options/cloud-providers/aws/"},next:{title:"OpenStack Cloud Provider",permalink:"/config-options/cloud-providers/openstack/"}},c={},o=[{value:"Overriding the hostname",id:"overriding-the-hostname",level:2},{value:"Azure Configuration Options",id:"azure-configuration-options",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["To enable the Azure cloud provider, besides setting the name as ",(0,s.jsx)(t.code,{children:"azure"}),", there are specific configuration options that must be set. Additionally, the Azure node name must also match the Kubernetes node name."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"cloud_provider:\n    name: azure\n    azureCloudProvider:\n      aadClientId: xxxxxxxxx\n      aadClientSecret: xxxxxxxxx\n      location: xxxxxxxxx\n      resourceGroup: xxxxxxxxx\n      subnetName: xxxxxxxxx\n      subscriptionId: xxxxxxxxx\n      vnetName: xxxxxxxxx\n      tenantId: xxxxxxxxx\n      securityGroupName: xxxxxxxxx\n"})}),"\n",(0,s.jsx)(t.h2,{id:"overriding-the-hostname",children:"Overriding the hostname"}),"\n",(0,s.jsxs)(t.p,{children:["Since the Azure node name must match the Kubernetes node name, you override the Kubernetes name on the node by setting the ",(0,s.jsx)(t.code,{children:"hostname_override"})," for each node. If you do not set the ",(0,s.jsx)(t.code,{children:"hostname_override"}),", the Kubernetes node name will be set as the ",(0,s.jsx)(t.code,{children:"address"}),", which will cause the Azure cloud provider to fail."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"nodes:\n    - address: x.x.x.x\n      hostname_override: azure-rke1\n      user: ubuntu\n      role:\n        - controlplane\n        - etcd\n        - worker\n"})}),"\n",(0,s.jsx)(t.h2,{id:"azure-configuration-options",children:"Azure Configuration Options"}),"\n",(0,s.jsx)(t.p,{children:"Besides the minimum set of options, there are many other options that are supported in RKE:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Azure Configuration Options"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"tenantId"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The Azure Active Directory (Azure AD) tenant ID for the subscription that the cluster is deployed in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"subscriptionId"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The ID of the Azure subscription that the cluster is deployed in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"aadClientId"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["The client ID for an Azure AD application with RBAC access to talk to Azure Resource Manager APIs. This is used for ",(0,s.jsx)(t.a,{href:"https://github.com/Azure/aks-engine/blob/master/docs/topics/service-principals.md",children:"service principal"})," authentication."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"aadClientSecret"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["The client secret for an Azure AD application with RBAC access to talk to Azure Resource Manager APIs. This is used for ",(0,s.jsx)(t.a,{href:"https://github.com/Azure/aks-engine/blob/master/docs/topics/service-principals.md",children:"service principal"})," authentication."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cloud"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["The cloud environment identifier. Takes values from ",(0,s.jsx)(t.a,{href:"https://github.com/Azure/go-autorest/blob/ec5f4903f77ed9927ac95b19ab8e44ada64c1356/autorest/azure/environments.go#L13",children:"here"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"resourceGroup"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The name of the resource group that the Vnet is deployed in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"location"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The location of the resource group that the cluster is deployed in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"vnetName"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The name of the virtual network that the cluster is deployed in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"vnetResourceGroup"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The name of the resource group that the virtual network is deployed in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"subnetName"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The name of the subnet that the cluster is deployed in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"securityGroupName"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The name of the security group attached to the cluster's subnet."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"routeTableName"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The name of the route table attached to the subnet that the cluster is deployed in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"primaryAvailabilitySetName"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["The name of the availability set that should be used as the load balancer backend. If this is set, the Azure cloud provider will only add nodes from that availability set to the load balancer backend pool. If this is not set, and multiple agent pools (availability sets) are used, then the cloud provider will try to add all nodes to a single backend pool which is forbidden. In other words, if you use multiple agent pools (availability sets), you ",(0,s.jsx)(t.strong,{children:"must"})," set this field."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"vmType"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["The type of Azure nodes. Candidate values are: ",(0,s.jsx)(t.code,{children:"vmss"})," and ",(0,s.jsx)(t.code,{children:"standard"}),". If not set, it will be default to ",(0,s.jsx)(t.code,{children:"standard"}),". Set to ",(0,s.jsx)(t.code,{children:"vmss"})," if the cluster is running on ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview",children:"Azure virtual machine scale sets"})," instead of standard machines."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"primaryScaleSetName"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["The name of the scale set that should be used as the load balancer backend. If this is set, the Azure cloud provider will only add nodes from that scale set to the load balancer backend pool. If this is not set, and multiple agent pools (scale sets) are used, then the cloud provider will try to add all nodes to a single backend pool which is forbidden. In other words, if you use multiple agent pools (scale sets), you ",(0,s.jsx)(t.strong,{children:"must"})," set this field."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"aadClientCertPath"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["The path of a client certificate for an Azure AD application with RBAC access to talk to Azure Resource Manager APIs. This is used for ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-protocols-oauth-service-to-service",children:"client certificate authentication"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"aadClientCertPassword"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["The password of the client certificate for an Azure AD application with RBAC access to talk to Azure Resource Manager APIs. This is used for ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-protocols-oauth-service-to-service",children:"client certificate authentication"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cloudProviderBackoff"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"bool"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Enable exponential backoff to manage resource request retries."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cloudProviderBackoffRetries"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Backoff retry limit."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cloudProviderBackoffExponent"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Backoff exponent."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cloudProviderBackoffDuration"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Backoff duration."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cloudProviderBackoffJitter"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Backoff jitter."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cloudProviderRateLimit"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"bool"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Enable rate limiting."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cloudProviderRateLimitQPS"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Rate limit QPS."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cloudProviderRateLimitBucket"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Rate limit bucket Size."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"useInstanceMetadata"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"bool"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Use instance metadata service where possible."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"useManagedIdentityExtension"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"bool"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["Use managed service identity for the virtual machine to access Azure Resource Manager APIs. This is used for ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/managed-service-identity/overview",children:"managed identity authentication"}),". For user-assigned managed identity, ",(0,s.jsx)(t.code,{children:"UserAssignedIdentityID"})," needs to be set."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"UserAssignedIdentityID"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["The client ID of the user assigned Managed Service Identity (MSI) which is assigned to the underlying VMs. This is used for ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/managed-service-identity/overview",children:"managed identity authentication"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"maximumLoadBalancerRuleCount"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["The limit enforced by Azure Load balancer. The default is ",(0,s.jsx)(t.code,{children:"0"})," and maximum is ",(0,s.jsx)(t.code,{children:"148"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"LoadBalancerSku"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["SKU of the load balancer and public IP. Valid values are  ",(0,s.jsx)(t.code,{children:"basic"})," or ",(0,s.jsx)(t.code,{children:"standard"}),". Default(blank) to ",(0,s.jsx)(t.code,{children:"basic"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ExcludeMasterFromStandardLB"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"bool"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["Excludes master nodes (labeled with ",(0,s.jsx)(t.code,{children:"node-role.kubernetes.io/master"}),") from the backend pool of Azure standard loadbalancer. Defaults to ",(0,s.jsx)(t.code,{children:"nil"}),"."]})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>l});var s=n(7294);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);