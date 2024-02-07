"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[6719],{6784:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=s(5893),t=s(1151);const i={title:"Default Kubernetes Services",description:"To deploy Kubernetes, RKE deploys several default Kubernetes services. Read about etcd, kube-api server, kubelet, kube-proxy and more"},o=void 0,c={id:"config-options/services/services",title:"Default Kubernetes Services",description:"To deploy Kubernetes, RKE deploys several default Kubernetes services. Read about etcd, kube-api server, kubelet, kube-proxy and more",source:"@site/docs/config-options/services/services.md",sourceDirName:"config-options/services",slug:"/config-options/services/",permalink:"/config-options/services/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/services/services.md",tags:[],version:"current",lastUpdatedAt:1683149494,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"Default Kubernetes Services",description:"To deploy Kubernetes, RKE deploys several default Kubernetes services. Read about etcd, kube-api server, kubelet, kube-proxy and more"},sidebar:"mySidebar",previous:{title:"System Images",permalink:"/config-options/system-images/"},next:{title:"Extra Args, Extra Binds, and Extra Environment Variables",permalink:"/config-options/services/services-extras/"}},l={},d=[{value:"etcd",id:"etcd",level:2},{value:"Kubernetes API Server",id:"kubernetes-api-server",level:2},{value:"Kubernetes API Server Options",id:"kubernetes-api-server-options",level:3},{value:"Kubernetes Controller Manager",id:"kubernetes-controller-manager",level:2},{value:"Kubernetes Controller Manager Options",id:"kubernetes-controller-manager-options",level:3},{value:"Kubelet",id:"kubelet",level:2},{value:"Kubelet Options",id:"kubelet-options",level:3},{value:"Kubelet Serving Certificate Requirements",id:"kubelet-serving-certificate-requirements",level:3},{value:"Kubernetes Scheduler",id:"kubernetes-scheduler",level:2},{value:"Kubernetes Network Proxy",id:"kubernetes-network-proxy",level:2}];function a(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"To deploy Kubernetes, RKE deploys several core components or services in Docker containers on the nodes. Based on the roles of the node, the containers deployed may be different."}),"\n",(0,n.jsxs)(r.admonition,{type:"note",children:[(0,n.jsxs)(r.p,{children:["All services support ",(0,n.jsx)("b",{children:"additional custom arguments, Docker mount binds, and extra environment variables."})]}),(0,n.jsxs)(r.p,{children:["To configure advanced options for Kubernetes services such as ",(0,n.jsx)(r.code,{children:"kubelet"}),", ",(0,n.jsx)(r.code,{children:"kube-controller"}),", and ",(0,n.jsx)(r.code,{children:"kube-apiserver"})," that are not documented below, see the ",(0,n.jsxs)(r.a,{href:"/config-options/services/services-extras/",children:[(0,n.jsx)(r.code,{children:"extra_args"})," documentation"]})," for more details."]})]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Component"}),(0,n.jsx)(r.th,{children:"Services key name in cluster.yml"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"etcd"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"etcd"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"kube-apiserver"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"kube-api"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"kube-controller-manager"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"kube-controller"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"kubelet"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"kubelet"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"kube-scheduler"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"scheduler"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"kube-proxy"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"kubeproxy"})})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"etcd",children:"etcd"}),"\n",(0,n.jsxs)(r.p,{children:["Kubernetes uses ",(0,n.jsx)(r.a,{href:"https://etcd.io/",children:"etcd"})," as a store for cluster state and data. Etcd is a reliable, consistent and distributed key-value store."]}),"\n",(0,n.jsx)(r.p,{children:"RKE supports running etcd in a single node mode or in HA cluster mode. It also supports adding and removing etcd nodes to the cluster."}),"\n",(0,n.jsxs)(r.p,{children:["You can enable etcd to ",(0,n.jsx)(r.a,{href:"/etcd-snapshots/recurring-snapshots/",children:"take recurring snapshots"}),". These snapshots can be used to ",(0,n.jsx)(r.a,{href:"/etcd-snapshots/restoring-from-backup/",children:"restore etcd"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["By default, RKE will deploy a new etcd service, but you can also run Kubernetes with an ",(0,n.jsx)(r.a,{href:"/config-options/services/external-etcd/",children:"external etcd service"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"kubernetes-api-server",children:"Kubernetes API Server"}),"\n",(0,n.jsx)(r.admonition,{title:"Note for Rancher 2 users",type:"note",children:(0,n.jsxs)(r.p,{children:["If you are configuring Cluster Options using a ",(0,n.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#rke-cluster-config-file-reference",children:"Config File"})," when creating ",(0,n.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/launch-kubernetes-with-rancher",children:"Rancher Launched Kubernetes"}),", the names of services should contain underscores only: ",(0,n.jsx)(r.code,{children:"kube_api"}),". This only applies to Rancher v2.0.5 and v2.0.6."]})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/",children:"Kubernetes API"})," REST service, which handles requests and data for all Kubernetes objects and provide shared state for all the other Kubernetes components."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"services:\n  kube-api:\n    # IP range for any services created on Kubernetes\n    # This must match the service_cluster_ip_range in kube-controller\n    service_cluster_ip_range: 10.43.0.0/16\n    # Expose a different port range for NodePort services\n    service_node_port_range: 30000-32767\n    pod_security_policy: false\n    # Valid values are either restricted or privileged\n    pod_security_configuration: restricted\n    # Enable AlwaysPullImages Admission controller plugin\n    # Available as of v0.2.0\n    always_pull_images: false\n    secrets_encryption_config:\n      enabled: true\n"})}),"\n",(0,n.jsx)(r.h3,{id:"kubernetes-api-server-options",children:"Kubernetes API Server Options"}),"\n",(0,n.jsxs)(r.p,{children:["RKE supports the following options for the ",(0,n.jsx)(r.code,{children:"kube-api"})," service :"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Service Cluster IP Range"})," (",(0,n.jsx)(r.code,{children:"service_cluster_ip_range"}),") - This is the virtual IP address that will be assigned to services created on Kubernetes. By default, the service cluster IP range is ",(0,n.jsx)(r.code,{children:"10.43.0.0/16"}),". If you change this value, then it must also be set with the same value on the Kubernetes Controller Manager (",(0,n.jsx)(r.code,{children:"kube-controller"}),")."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Node Port Range"})," (",(0,n.jsx)(r.code,{children:"service_node_port_range"}),") - The port range to be used for Kubernetes services created with the ",(0,n.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types",children:"type"})," ",(0,n.jsx)(r.code,{children:"NodePort"}),". By default, the port range is ",(0,n.jsx)(r.code,{children:"30000-32767"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pod Security Policy"})," (",(0,n.jsx)(r.code,{children:"pod_security_policy"}),") - An option to enable the ",(0,n.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/",children:"Kubernetes Pod Security Policy"}),". By default, we do not enable pod security policies as it is set to ",(0,n.jsx)(r.code,{children:"false"}),". This feature is removed as of Kubernetes v1.25.","\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," If you set ",(0,n.jsx)(r.code,{children:"pod_security_policy"})," value to ",(0,n.jsx)(r.code,{children:"true"}),", RKE will configure an  open policy to allow any pods to work on the cluster. You will need to configure your own policies to fully utilize PSP."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pod Security Admission"})," (",(0,n.jsx)(r.code,{children:"pod_security_configuration"}),") - An option to enable the ",(0,n.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/",children:"Kubernetes Pod Security Admission"}),". This feature is available as of RKE v1.4.4 for Kubernetes v1.23 and above."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Always Pull Images"})," (",(0,n.jsx)(r.code,{children:"always_pull_images"}),") - Enable ",(0,n.jsx)(r.code,{children:"AlwaysPullImages"})," Admission controller plugin.  Enabling ",(0,n.jsx)(r.code,{children:"AlwaysPullImages"})," is a security best practice. It forces Kubernetes to validate the image and pull credentials with the remote image registry. Local image layer cache will still be used, but it does add a small bit of overhead when launching containers to pull and compare image hashes. ",(0,n.jsx)(r.em,{children:"Note: Available as of v0.2.0"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Secrets Encryption Config"})," (",(0,n.jsx)(r.code,{children:"secrets_encryption_config"}),") - Manage Kubernetes at-rest data encryption. Documented ",(0,n.jsx)(r.a,{href:"/config-options/secrets-encryption/",children:"here"})]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"kubernetes-controller-manager",children:"Kubernetes Controller Manager"}),"\n",(0,n.jsx)(r.admonition,{title:"Note for Rancher 2 users",type:"note",children:(0,n.jsxs)(r.p,{children:["If you are configuring Cluster Options using a ",(0,n.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#rke-cluster-config-file-reference",children:"Config File"})," when creating ",(0,n.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/launch-kubernetes-with-rancher",children:"Rancher Launched Kubernetes"}),", the names of services should contain underscores only: ",(0,n.jsx)(r.code,{children:"kube_controller"}),". This only applies to Rancher v2.0.5 and v2.0.6."]})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/",children:"Kubernetes Controller Manager"})," service is the component responsible for running Kubernetes main control loops. The controller manager monitors the cluster desired state through the Kubernetes API server and makes the necessary changes to the current state to reach the desired state."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"services:\n    kube-controller:\n      # CIDR pool used to assign IP addresses to pods in the cluster\n      cluster_cidr: 10.42.0.0/16\n      # IP range for any services created on Kubernetes\n      # This must match the service_cluster_ip_range in kube-api\n      service_cluster_ip_range: 10.43.0.0/16\n"})}),"\n",(0,n.jsx)(r.h3,{id:"kubernetes-controller-manager-options",children:"Kubernetes Controller Manager Options"}),"\n",(0,n.jsxs)(r.p,{children:["RKE supports the following options for the ",(0,n.jsx)(r.code,{children:"kube-controller"})," service:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Cluster CIDR"})," (",(0,n.jsx)(r.code,{children:"cluster_cidr"}),") - The CIDR pool used to assign IP addresses to pods in the cluster. By default, each node in the cluster is assigned a ",(0,n.jsx)(r.code,{children:"/24"})," network from this pool for pod IP assignments. The default value for this option is ",(0,n.jsx)(r.code,{children:"10.42.0.0/16"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Service Cluster IP Range"})," (",(0,n.jsx)(r.code,{children:"service_cluster_ip_range"}),") - This is the virtual IP address that will be assigned to services created on Kubernetes. By default, the service cluster IP range is ",(0,n.jsx)(r.code,{children:"10.43.0.0/16"}),". If you change this value, then it must also be set with the same value on the Kubernetes API server (",(0,n.jsx)(r.code,{children:"kube-api"}),")."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"kubelet",children:"Kubelet"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/",children:"kubelet"}),' services acts as a "node agent" for Kubernetes. It runs on all nodes deployed by RKE, and gives Kubernetes the ability to manage the container runtime on the node.']}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"services:\n    kubelet:\n     # Base domain for the cluster\n     cluster_domain: cluster.local\n     # IP address for the DNS service endpoint\n     cluster_dns_server: 10.43.0.10\n     # Fail if swap is on\n     fail_swap_on: false\n     # Generate per node serving certificate\n     generate_serving_certificate: false\n"})}),"\n",(0,n.jsx)(r.h3,{id:"kubelet-options",children:"Kubelet Options"}),"\n",(0,n.jsxs)(r.p,{children:["RKE supports the following options for the ",(0,n.jsx)(r.code,{children:"kubelet"})," service:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Cluster Domain"})," (",(0,n.jsx)(r.code,{children:"cluster_domain"}),") - The ",(0,n.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",children:"base domain"})," for the cluster. All services and DNS records created on the cluster. By default, the domain is set to ",(0,n.jsx)(r.code,{children:"cluster.local"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Cluster DNS Server"})," (",(0,n.jsx)(r.code,{children:"cluster_dns_server"}),") - The IP address assigned to the DNS service endpoint within the cluster. DNS queries will be sent to this IP address which is used by KubeDNS. The default value for this option is ",(0,n.jsx)(r.code,{children:"10.43.0.10"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Fail if Swap is On"})," (",(0,n.jsx)(r.code,{children:"fail_swap_on"}),") - In Kubernetes, the default behavior for the kubelet is to ",(0,n.jsx)(r.strong,{children:"fail"})," if swap is enabled on the node. RKE does ",(0,n.jsx)(r.strong,{children:"not"})," follow this default and allows deployments on nodes with swap enabled. By default, the value is ",(0,n.jsx)(r.code,{children:"false"}),". If you'd like to revert to the default kubelet behavior, set this option to ",(0,n.jsx)(r.code,{children:"true"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Generate Serving Certificate"})," (",(0,n.jsx)(r.code,{children:"generate_serving_certificate"}),") - Generate a certificate signed by the ",(0,n.jsx)(r.code,{children:"kube-ca"})," Certificate Authority for the kubelet to use as a server certificate. The default value for this option is ",(0,n.jsx)(r.code,{children:"false"}),". Before enabling this option, please read ",(0,n.jsx)(r.a,{href:"#kubelet-serving-certificate-requirements",children:"the requirements"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"kubelet-serving-certificate-requirements",children:"Kubelet Serving Certificate Requirements"}),"\n",(0,n.jsxs)(r.p,{children:["If ",(0,n.jsx)(r.code,{children:"hostname_override"})," is configured for one or more nodes in ",(0,n.jsx)(r.code,{children:"cluster.yml"}),", please make sure the correct IP address is configured in ",(0,n.jsx)(r.code,{children:"address"})," (and the internal address in ",(0,n.jsx)(r.code,{children:"internal_address"}),") to make sure the generated certificate contains the correct IP address(es)."]}),"\n",(0,n.jsxs)(r.p,{children:["An example of an error situation is an EC2 instance where the the public IP address is configured in ",(0,n.jsx)(r.code,{children:"address"}),", and ",(0,n.jsx)(r.code,{children:"hostname_override"})," is used, the connection between ",(0,n.jsx)(r.code,{children:"kube-apiserver"})," and ",(0,n.jsx)(r.code,{children:"kubelet"})," will fail because the ",(0,n.jsx)(r.code,{children:"kubelet"})," will be contacted on the private IP address and the generated certificate will not be valid (the error ",(0,n.jsx)(r.code,{children:"x509: certificate is valid for value_in_address, not private_ip"})," will be seen). The resolution is to provide the internal IP address in ",(0,n.jsx)(r.code,{children:"internal_address"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["For more information on host overrides, refer to the ",(0,n.jsx)(r.a,{href:"/config-options/nodes/#overriding-the-hostname",children:"node configuration page."})]}),"\n",(0,n.jsx)(r.h2,{id:"kubernetes-scheduler",children:"Kubernetes Scheduler"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/",children:"Kubernetes Scheduler"})," service is responsible for scheduling cluster workloads based on various configurations, metrics, resource requirements and workload-specific requirements."]}),"\n",(0,n.jsxs)(r.p,{children:["Currently, RKE doesn't support any specific options for the ",(0,n.jsx)(r.code,{children:"scheduler"})," service."]}),"\n",(0,n.jsx)(r.h2,{id:"kubernetes-network-proxy",children:"Kubernetes Network Proxy"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/",children:"Kubernetes network proxy"})," service runs on all nodes and manages endpoints created by Kubernetes for TCP/UDP ports."]}),"\n",(0,n.jsxs)(r.p,{children:["Currently, RKE doesn't support any specific options for the ",(0,n.jsx)(r.code,{children:"kubeproxy"})," service."]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>c,a:()=>o});var n=s(7294);const t={},i=n.createContext(t);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);