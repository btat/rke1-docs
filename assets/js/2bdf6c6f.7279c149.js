"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[4388],{2701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=n(5893),o=n(1151);const a={title:"Audit Log"},i=void 0,r={id:"config-options/audit-log/audit-log",title:"Audit Log",description:"Kubernetes auditing provides a security-relevant chronological set of records about a cluster. Kube-apiserver performs auditing. Each request on each stage of its execution generates an event, which is then pre-processed according to a certain policy and written to a backend. The policy determines what\u2019s recorded and the backends persist the records.",source:"@site/docs/config-options/audit-log/audit-log.md",sourceDirName:"config-options/audit-log",slug:"/config-options/audit-log/",permalink:"/config-options/audit-log/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/audit-log/audit-log.md",tags:[],version:"current",lastUpdatedAt:1707343823,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{title:"Audit Log"},sidebar:"mySidebar",previous:{title:"Custom Cloud Provider",permalink:"/config-options/cloud-providers/custom/"},next:{title:"Dual-stack",permalink:"/config-options/dual-stack/"}},l={},d=[{value:"Enabled by default",id:"enabled-by-default",level:3},{value:"Example Configurations",id:"example-configurations",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Kubernetes auditing provides a security-relevant chronological set of records about a cluster. Kube-apiserver performs auditing. Each request on each stage of its execution generates an event, which is then pre-processed according to a certain policy and written to a backend. The policy determines what\u2019s recorded and the backends persist the records."}),"\n",(0,s.jsx)(t.p,{children:"You might want to configure the audit log as part of compliance with the CIS (Center for Internet Security) Kubernetes Benchmark controls."}),"\n",(0,s.jsxs)(t.p,{children:["For configuration details, refer to the ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/debug-application-cluster/audit/",children:"official Kubernetes documentation."})]}),"\n",(0,s.jsx)(t.h3,{id:"enabled-by-default",children:"Enabled by default"}),"\n",(0,s.jsx)(t.p,{children:"In RKE v1.1.0 and higher and when using specific Kubernetes versions, audit log is enabled by default. See the table below to check when audit log is enabled by default."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"RKE version"}),(0,s.jsx)(t.th,{children:"Kubernetes version"}),(0,s.jsx)(t.th,{children:"audit log Enabled"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"v1.1.0 and higher"}),(0,s.jsx)(t.td,{children:"v1.17.4 and higher (v1.17.x)"}),(0,s.jsx)(t.td,{children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"v1.1.0 and higher"}),(0,s.jsx)(t.td,{children:"v1.16.8 and higher (v1.16.x)"}),(0,s.jsx)(t.td,{children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"v1.1.0 and higher"}),(0,s.jsx)(t.td,{children:"v1.15.11 and higher (v1.15.x)"}),(0,s.jsx)(t.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"example-configurations",children:"Example Configurations"}),"\n",(0,s.jsxs)(t.p,{children:["The audit log can be enabled by default using the following configuration in ",(0,s.jsx)(t.code,{children:"cluster.yml"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"services:\n  kube-api:\n    audit_log:\n      enabled: true\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When the audit log is enabled, you should be able to see the default values at ",(0,s.jsx)(t.code,{children:"/etc/kubernetes/audit-policy.yaml"})," (This is located at ",(0,s.jsx)(t.code,{children:"/etc/kubernetes/audit.yaml"})," before RKE v1.1.0):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"# Minimum Configuration: Capture event metadata.\n...\nrules:\n- level: Metadata\n...\n"})}),"\n",(0,s.jsx)(t.p,{children:"When the audit log is enabled, default values are also set for the audit log path, maximum age, maximum number of backups, maximum size in megabytes, and format. To see the default values, run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"ps -ef | grep kube-apiserver\n"})}),"\n",(0,s.jsx)(t.p,{children:"The default values for audit log were changed in RKE v1.1.0 to the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"--audit-log-maxage=30 # The maximum number of days to retain old audit log files\n--audit-log-maxbackup=10 # The maximum number of audit log files to retain\n--audit-log-path=/var/log/kube-audit/audit-log.json # The log file path that log backend uses to write audit events\n--audit-log-maxsize=100 # The maximum size in megabytes of the audit log file before it gets rotated\n--audit-policy-file=/etc/kubernetes/audit-policy.yaml # The file containing your audit log rules\n--audit-log-format=json # The log file format\n\n"})}),"\n",(0,s.jsx)(t.p,{children:"The default values for the audit log before RKE v1.1.0 are:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"--audit-log-maxage=5 # The maximum number of days to retain old audit log files\n--audit-log-maxbackup=5 # The maximum number of audit log files to retain\n--audit-log-path=/var/log/kube-audit/audit-log.json # The log file path that log backend uses to write audit events\n--audit-log-maxsize=100 # The maximum size in megabytes of the audit log file before it gets rotated\n--audit-policy-file=/etc/kubernetes/audit.yaml # The file containing your audit log rules\n--audit-log-format=json # The log file format\n\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To customize the audit log, the ",(0,s.jsx)(t.code,{children:"configuration"})," directive is used."]}),"\n",(0,s.jsxs)(t.p,{children:["A rules policy is passed to kube-apiserver using the ",(0,s.jsx)(t.code,{children:"--audit-policy-file"})," or the ",(0,s.jsx)(t.code,{children:"policy"})," directive in the ",(0,s.jsx)(t.code,{children:"cluster.yml"}),". Below is an example ",(0,s.jsx)(t.code,{children:"cluster.yml"})," with custom values and an audit log policy nested under the ",(0,s.jsx)(t.code,{children:"configuration"})," directive. This example audit log policy is taken from the official ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/debug-application-cluster/audit/#audit-policy",children:"Kubernetes documentation:"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'services:\n  kube-api:\n    audit_log:\n      enabled: true\n      configuration:\n        max_age: 6\n        max_backup: 6\n        max_size: 110\n        path: /var/log/kube-audit/audit-log.json\n        format: json\n        policy:\n          apiVersion: audit.k8s.io/v1 # This is required.\n          kind: Policy\n          omitStages:\n            - "RequestReceived"\n          rules:\n            # Log pod changes at RequestResponse level\n            - level: RequestResponse\n              resources:\n              - group: ""\n                # Resource "pods" doesn\'t match requests to any subresource of pods,\n                # which is consistent with the RBAC policy.\n                resources: ["pods"]\n            # Log "pods/log", "pods/status" at Metadata level\n            - level: Metadata\n              resources:\n              - group: ""\n                resources: ["pods/log", "pods/status"]\n\n            # Don\'t log requests to a configmap called "controller-leader"\n            - level: None\n              resources:\n              - group: ""\n                resources: ["configmaps"]\n                resourceNames: ["controller-leader"]\n\n            # Don\'t log watch requests by the "system:kube-proxy" on endpoints or services\n            - level: None\n              users: ["system:kube-proxy"]\n              verbs: ["watch"]\n              resources:\n              - group: "" # core API group\n                resources: ["endpoints", "services"]\n\n            # Don\'t log authenticated requests to certain non-resource URL paths.\n            - level: None\n              userGroups: ["system:authenticated"]\n              nonResourceURLs:\n              - "/api*" # Wildcard matching.\n              - "/version"\n\n            # Log the request body of configmap changes in kube-system.\n            - level: Request\n              resources:\n              - group: "" # core API group\n                resources: ["configmaps"]\n              # This rule only applies to resources in the "kube-system" namespace.\n              # The empty string "" can be used to select non-namespaced resources.\n              namespaces: ["kube-system"]\n\n            # Log configmap and secret changes in all other namespaces at the Metadata level.\n            - level: Metadata\n              resources:\n              - group: "" # core API group\n                resources: ["secrets", "configmaps"]\n\n            # Log all other resources in core and extensions at the Request level.\n            - level: Request\n              resources:\n              - group: "" # core API group\n              - group: "extensions" # Version of group should NOT be included.\n\n            # A catch-all rule to log all other requests at the Metadata level.\n            - level: Metadata\n              # Long-running requests like watches that fall under this rule will not\n              # generate an audit event in RequestReceived.\n              omitStages:\n                - "RequestReceived"\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var s=n(7294);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);