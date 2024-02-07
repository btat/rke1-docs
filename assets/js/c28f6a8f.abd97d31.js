"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[9003],{2748:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var o=n(5893),s=n(1151);const t={title:"Configuring Pod Security Admission (PSA)"},r=void 0,d={id:"config-options/services/pod-security-admission/pod-security-admission",title:"Configuring Pod Security Admission (PSA)",description:"As of RKE v1.4.4, Pod Security admissions (PSA) support has been added for clusters with Kubernetes v1.23 and above. PSA defines security restrictions for a broad set of workloads and replace Pod Security Policies in Kubernetes v1.25 and above. The Pod Security Admission controller is enabled by default in Kubernetes clusters v1.23 and above. To configure its default behavior, you must provide an admission configuration file to the kube-apiserver when provisioning the cluster.",source:"@site/docs/config-options/services/pod-security-admission/pod-security-admission.md",sourceDirName:"config-options/services/pod-security-admission",slug:"/config-options/services/pod-security-admission/",permalink:"/config-options/services/pod-security-admission/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/services/pod-security-admission/pod-security-admission.md",tags:[],version:"current",lastUpdatedAt:1707343823,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{title:"Configuring Pod Security Admission (PSA)"},sidebar:"mySidebar",previous:{title:"Authorization",permalink:"/config-options/authorization/"},next:{title:"Rate Limiting",permalink:"/config-options/rate-limiting/"}},c={},a=[{value:"Method 1: Using <code>pod_security_configuration</code> option",id:"method-1-using-pod_security_configuration-option",level:2},{value:"Method 2: Using <code>admission_configuration</code> to pass a customized admission configuration file",id:"method-2-using-admission_configuration-to-pass-a-customized-admission-configuration-file",level:2},{value:"Method 3:  Using <code>extra_args</code> to pass customized admission configuration file",id:"method-3--using-extra_args-to-pass-customized-admission-configuration-file",level:2}];function u(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["As of RKE v1.4.4, ",(0,o.jsx)(i.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/",children:"Pod Security admissions (PSA)"})," support has been added for clusters with Kubernetes v1.23 and above. PSA defines security restrictions for a broad set of workloads and replace ",(0,o.jsx)(i.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/",children:"Pod Security Policies"})," in Kubernetes v1.25 and above. The Pod Security Admission controller is enabled by default in Kubernetes clusters v1.23 and above. To configure its default behavior, you must provide an admission configuration file to the ",(0,o.jsx)(i.code,{children:"kube-apiserver"})," when provisioning the cluster."]}),"\n",(0,o.jsx)(i.p,{children:"RKE provides three methods for configuring the Pod Security Admission controller."}),"\n",(0,o.jsxs)(i.h2,{id:"method-1-using-pod_security_configuration-option",children:["Method 1: Using ",(0,o.jsx)(i.code,{children:"pod_security_configuration"})," option"]}),"\n",(0,o.jsxs)(i.p,{children:["To use the built-in PSA configuration, you can set the ",(0,o.jsx)(i.code,{children:"services.kube-api.pod_security_configuration"})," field in the ",(0,o.jsx)(i.code,{children:"cluster.yml"})," file. Valid values for ",(0,o.jsx)(i.code,{children:"services.kube-api.pod_security_configuration"})," are either ",(0,o.jsx)(i.code,{children:"restricted"})," or ",(0,o.jsx)(i.code,{children:"privileged"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:"services:\n  kube-api:\n    pod_security_configuration: <VALUE> # restricted or privileged\n"})}),"\n",(0,o.jsxs)(i.p,{children:["If set to ",(0,o.jsx)(i.code,{children:"restricted"}),", the PodSecurityConfiguration section from the admission configuration file below is applied:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1\n    defaults:\n      audit: restricted\n      audit-version: latest\n      enforce: restricted\n      enforce-version: latest\n      warn: restricted\n      warn-version: latest\n    exemptions:\n      namespaces:\n      - ingress-nginx\n      - kube-system\n    kind: PodSecurityConfiguration\n  name: PodSecurity\n  path: ""\n'})}),"\n",(0,o.jsxs)(i.p,{children:["If set to ",(0,o.jsx)(i.code,{children:"privileged"}),", the PodSecurityConfiguration section from the admission configuration file below is applied:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1\n    defaults:\n      enforce: privileged\n      enforce-version: latest\n    exemptions: {}\n    kind: PodSecurityConfiguration\n  name: PodSecurity\n  path: ""\n'})}),"\n",(0,o.jsxs)(i.h2,{id:"method-2-using-admission_configuration-to-pass-a-customized-admission-configuration-file",children:["Method 2: Using ",(0,o.jsx)(i.code,{children:"admission_configuration"})," to pass a customized admission configuration file"]}),"\n",(0,o.jsxs)(i.p,{children:["You can directly pass your customized admission configuration file in the ",(0,o.jsx)(i.code,{children:"cluster.yml"})," file by setting the ",(0,o.jsx)(i.code,{children:"services.kube-api.admission_configuration"})," field."]}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-controller/",children:(0,o.jsx)(i.code,{children:"pod-security.admission.config.k8s.io/v1"})})," configuration requires Kubernetes v1.25 and above. For Kubernetes v1.23 and v1.24, use ",(0,o.jsx)(i.a,{href:"https://v1-24.docs.kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-controller/",children:"v1beta1"})," instead."]})}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:'services:\n  kube-api:\n    admission_configuration:\n      apiVersion: apiserver.config.k8s.io/v1\n      kind: AdmissionConfiguration\n      plugins:\n        - name: PodSecurity\n          configuration:\n            apiVersion: pod-security.admission.config.k8s.io/v1\n            kind: PodSecurityConfiguration\n            defaults:\n              enforce: "restricted"\n              enforce-version: "latest"\n            exemptions:\n              namespaces: ["cattle-system", "cattle-monitoring", "kube-system"]\n              runtimeClasses: []\n              usernames: []\n'})}),"\n",(0,o.jsxs)(i.h2,{id:"method-3--using-extra_args-to-pass-customized-admission-configuration-file",children:["Method 3:  Using ",(0,o.jsx)(i.code,{children:"extra_args"})," to pass customized admission configuration file"]}),"\n",(0,o.jsxs)(i.p,{children:["If you want to use an external admission configuration file in a control plane node, you can use the ",(0,o.jsx)(i.code,{children:"services.kube-api.extra_args"})," option to set the path to the file and the ",(0,o.jsx)(i.code,{children:"services.kube-api.extra_binds"})," option to mount the file in the ",(0,o.jsx)(i.code,{children:"kube-apiserver"}),"."]}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-controller/",children:(0,o.jsx)(i.code,{children:"pod-security.admission.config.k8s.io/v1"})})," configuration requires Kubernetes v1.25 and above. For Kubernetes v1.23 and v1.24, use ",(0,o.jsx)(i.a,{href:"https://v1-24.docs.kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-controller/",children:"v1beta1"})," instead."]})}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:'services:\n  kube-api:\n    extra_args:\n      admission-control-config-file: <PATH> # path to the file\n    extra_binds:\n      - "<PATH-IN-NODES>:<PATH-IN-CONTAINER>"\n'})})]})}function l(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>r});var o=n(7294);const s={},t=o.createContext(s);function r(e){const i=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:i},e.children)}}}]);