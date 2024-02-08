"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[5044],{7690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var s=n(5893),r=n(1151),i=n(4866),o=n(5162);const c={title:"Recurring Snapshots"},a=void 0,l={id:"etcd-snapshots/recurring-snapshots/recurring-snapshots",title:"Recurring Snapshots",description:"Recurring snapshots are handled differently based on your version of RKE.",source:"@site/docs/etcd-snapshots/recurring-snapshots/recurring-snapshots.md",sourceDirName:"etcd-snapshots/recurring-snapshots",slug:"/etcd-snapshots/recurring-snapshots/",permalink:"/etcd-snapshots/recurring-snapshots/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/etcd-snapshots/recurring-snapshots/recurring-snapshots.md",tags:[],version:"current",lastUpdatedAt:1704844723,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{title:"Recurring Snapshots"},sidebar:"mySidebar",previous:{title:"One-time Snapshots",permalink:"/etcd-snapshots/one-time-snapshots/"},next:{title:"Restoring from Backup",permalink:"/etcd-snapshots/restoring-from-backup/"}},d={},h=[{value:"Snapshot Service Logging",id:"snapshot-service-logging",level:3},{value:"Options for the <code>Etcd-Snapshot</code> Service",id:"options-for-the-etcd-snapshot-service",level:3},{value:"Using a custom CA certificate for S3",id:"using-a-custom-ca-certificate-for-s3",level:5},{value:"IAM Support for Storing Snapshots in S3",id:"iam-support-for-storing-snapshots-in-s3",level:3},{value:"Configuring the Snapshot Service in YAML",id:"configuring-the-snapshot-service-in-yaml",level:3},{value:"Snapshot Service Logging",id:"snapshot-service-logging-1",level:3},{value:"Options for the Local <code>Etcd-Snapshot</code> Service",id:"options-for-the-local-etcd-snapshot-service",level:3},{value:"Configuring the Snapshot Service in YAML",id:"configuring-the-snapshot-service-in-yaml-1",level:3}];function u(e){const t={a:"a",code:"code",em:"em",h3:"h3",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Recurring snapshots are handled differently based on your version of RKE."}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(o.Z,{value:"RKE v0.2.0+",children:[(0,s.jsxs)(t.p,{children:["To schedule automatic recurring etcd snapshots, you can enable the ",(0,s.jsx)(t.code,{children:"etcd-snapshot"})," service with ",(0,s.jsx)(t.a,{href:"#options-for-the-etcd-snapshot-service",children:"extra configuration options"}),". ",(0,s.jsx)(t.code,{children:"etcd-snapshot"})," runs in a service container alongside the ",(0,s.jsx)(t.code,{children:"etcd"})," container. By default, the ",(0,s.jsx)(t.code,{children:"etcd-snapshot"})," service takes a snapshot for every node that has the ",(0,s.jsx)(t.code,{children:"etcd"})," role and stores them to local disk in ",(0,s.jsx)(t.code,{children:"/opt/rke/etcd-snapshots"}),"."]}),(0,s.jsxs)(t.p,{children:["If you set up the ",(0,s.jsx)(t.a,{href:"#options-for-the-etcd-snapshot-service",children:"options for S3"}),", the snapshot will also be uploaded to the S3 backend."]}),(0,s.jsx)(t.h3,{id:"snapshot-service-logging",children:"Snapshot Service Logging"}),(0,s.jsxs)(t.p,{children:["When a cluster is launched with the ",(0,s.jsx)(t.code,{children:"etcd-snapshot"})," service enabled, you can view the ",(0,s.jsx)(t.code,{children:"etcd-rolling-snapshots"})," logs to confirm backups are being created automatically."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'$ docker logs etcd-rolling-snapshots\n\ntime="2018-05-04T18:39:16Z" level=info msg="Initializing Rolling Backups" creation=1m0s retention=24h0m0s\ntime="2018-05-04T18:40:16Z" level=info msg="Created backup" name="2018-05-04T18:40:16Z_etcd" runtime=108.332814ms\ntime="2018-05-04T18:41:16Z" level=info msg="Created backup" name="2018-05-04T18:41:16Z_etcd" runtime=92.880112ms\ntime="2018-05-04T18:42:16Z" level=info msg="Created backup" name="2018-05-04T18:42:16Z_etcd" runtime=83.67642ms\ntime="2018-05-04T18:43:16Z" level=info msg="Created backup" name="2018-05-04T18:43:16Z_etcd" runtime=86.298499ms\n'})}),(0,s.jsxs)(t.h3,{id:"options-for-the-etcd-snapshot-service",children:["Options for the ",(0,s.jsx)(t.code,{children:"Etcd-Snapshot"})," Service"]}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"S3 Specific"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"interval_hours"})}),(0,s.jsxs)(t.td,{children:["The duration in hours between recurring backups. This supercedes the ",(0,s.jsx)(t.code,{children:"creation"})," option (which was used in RKE before v0.2.0) and will override it if both are specified. (Default: 12)"]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"retention"})}),(0,s.jsxs)(t.td,{children:["The number of snapshots to retain before rotation. If the retention is configured in both ",(0,s.jsx)(t.code,{children:"etcd.retention"})," (time period to keep snapshots in hours), which was required in RKE before v0.2.0, and at ",(0,s.jsx)(t.code,{children:"etcd.backup_config.retention"})," (number of snapshots), the latter will be used. (Default: 6)"]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"bucket_name"})}),(0,s.jsx)(t.td,{children:"S3 bucket name where backups will be stored"}),(0,s.jsx)(t.td,{children:"*"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"folder"})}),(0,s.jsxs)(t.td,{children:["Folder inside S3 bucket where backups will be stored. This is optional. ",(0,s.jsx)(t.em,{children:"Available as of v0.3.0"})]}),(0,s.jsx)(t.td,{children:"*"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"access_key"})}),(0,s.jsx)(t.td,{children:"S3 access key with permission to access the backup bucket."}),(0,s.jsx)(t.td,{children:"*"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"secret_key"})}),(0,s.jsx)(t.td,{children:"S3 secret key with permission to access the backup bucket."}),(0,s.jsx)(t.td,{children:"*"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"region"})}),(0,s.jsx)(t.td,{children:"S3 region for the backup bucket. This is optional."}),(0,s.jsx)(t.td,{children:"*"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"endpoint"})}),(0,s.jsx)(t.td,{children:"S3 regions endpoint for the backup bucket."}),(0,s.jsx)(t.td,{children:"*"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"custom_ca"})}),(0,s.jsx)(t.td,{children:"Custom certificate authority to use when connecting to the endpoint. Only required for private S3 compatible storage solutions. Available for RKE v0.2.5+."}),(0,s.jsx)(t.td,{children:"*"})]})]})]}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"--access-key"})," and ",(0,s.jsx)(t.code,{children:"--secret-key"})," options are not required if the ",(0,s.jsx)(t.code,{children:"etcd"})," nodes are AWS EC2 instances that have been configured with a suitable IAM instance profile."]}),(0,s.jsx)(t.h5,{id:"using-a-custom-ca-certificate-for-s3",children:"Using a custom CA certificate for S3"}),(0,s.jsxs)(t.p,{children:["The backup snapshot can be stored on a custom ",(0,s.jsx)(t.code,{children:"S3"})," backup like ",(0,s.jsx)(t.a,{href:"https://min.io/",children:"minio"}),". If the S3 backend uses a self-signed or custom certificate, provide a custom certificate using the option ",(0,s.jsx)(t.code,{children:"custom_ca"})," to connect to the S3 backend."]}),(0,s.jsx)(t.h3,{id:"iam-support-for-storing-snapshots-in-s3",children:"IAM Support for Storing Snapshots in S3"}),(0,s.jsx)(t.p,{children:"In addition to API access keys, RKE supports using IAM roles for S3 authentication. The cluster etcd nodes must be assigned an IAM role that has read/write access to the designated backup bucket on S3. Also, the nodes must have network access to the S3 endpoint specified."}),(0,s.jsxs)(t.p,{children:["Below is an ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html",children:"example IAM policy"})," that would allow nodes to store and retrieve backups from S3:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "ListObjectsInBucket",\n            "Effect": "Allow",\n            "Action": ["s3:ListBucket"],\n            "Resource": ["arn:aws:s3:::bucket-name"]\n        },\n        {\n            "Sid": "AllObjectActions",\n            "Effect": "Allow",\n            "Action": "s3:*Object",\n            "Resource": ["arn:aws:s3:::bucket-name/*"]\n        }\n    ]\n}\n'})}),(0,s.jsxs)(t.p,{children:["For details on giving an application access to S3, refer to the AWS documentation on ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",children:"Using an IAM Role to Grant Permissions to Applications Running on Amazon EC2 Instances."})]}),(0,s.jsx)(t.h3,{id:"configuring-the-snapshot-service-in-yaml",children:"Configuring the Snapshot Service in YAML"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'services:\n  etcd:\n    backup_config:\n      interval_hours: 12\n      retention: 6\n      s3backupconfig:\n        access_key: S3_ACCESS_KEY\n        secret_key: S3_SECRET_KEY\n        bucket_name: s3-bucket-name\n        region: ""\n        folder: "" # Optional - Available as of v0.3.0\n        endpoint: s3.amazonaws.com\n        custom_ca: |-\n          -----BEGIN CERTIFICATE-----\n          $CERTIFICATE\n          -----END CERTIFICATE-----\n'})})]}),(0,s.jsxs)(o.Z,{value:"RKE before v0.2.0",children:[(0,s.jsxs)(t.p,{children:["To schedule automatic recurring etcd snapshots, you can enable the ",(0,s.jsx)(t.code,{children:"etcd-snapshot"})," service with ",(0,s.jsx)(t.a,{href:"#options-for-the-local-etcd-snapshot-service",children:"extra configuration options"}),". ",(0,s.jsx)(t.code,{children:"etcd-snapshot"})," runs in a service container alongside the ",(0,s.jsx)(t.code,{children:"etcd"})," container. By default, the ",(0,s.jsx)(t.code,{children:"etcd-snapshot"})," service takes a snapshot for every node that has the ",(0,s.jsx)(t.code,{children:"etcd"})," role and stores them to local disk in ",(0,s.jsx)(t.code,{children:"/opt/rke/etcd-snapshots"}),"."]}),(0,s.jsxs)(t.p,{children:["RKE saves a backup of the certificates, i.e. a file named ",(0,s.jsx)(t.code,{children:"pki.bundle.tar.gz"}),", in the same location. The snapshot and pki bundle file are required for the restore process in versions before v0.2.0."]}),(0,s.jsx)(t.h3,{id:"snapshot-service-logging-1",children:"Snapshot Service Logging"}),(0,s.jsxs)(t.p,{children:["When a cluster is launched with the ",(0,s.jsx)(t.code,{children:"etcd-snapshot"})," service enabled, you can view the ",(0,s.jsx)(t.code,{children:"etcd-rolling-snapshots"})," logs to confirm backups are being created automatically."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'$ docker logs etcd-rolling-snapshots\n\ntime="2018-05-04T18:39:16Z" level=info msg="Initializing Rolling Backups" creation=1m0s retention=24h0m0s\ntime="2018-05-04T18:40:16Z" level=info msg="Created backup" name="2018-05-04T18:40:16Z_etcd" runtime=108.332814ms\ntime="2018-05-04T18:41:16Z" level=info msg="Created backup" name="2018-05-04T18:41:16Z_etcd" runtime=92.880112ms\ntime="2018-05-04T18:42:16Z" level=info msg="Created backup" name="2018-05-04T18:42:16Z_etcd" runtime=83.67642ms\ntime="2018-05-04T18:43:16Z" level=info msg="Created backup" name="2018-05-04T18:43:16Z_etcd" runtime=86.298499ms\n'})}),(0,s.jsxs)(t.h3,{id:"options-for-the-local-etcd-snapshot-service",children:["Options for the Local ",(0,s.jsx)(t.code,{children:"Etcd-Snapshot"})," Service"]}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Snapshot"})}),(0,s.jsxs)(t.td,{children:["By default, the recurring snapshot service is disabled. To enable the service, you need to define it as part of ",(0,s.jsx)(t.code,{children:"etcd"})," and set it to ",(0,s.jsx)(t.code,{children:"true"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Creation"})}),(0,s.jsxs)(t.td,{children:["By default, the snapshot service will take snapshots every 5 minutes (",(0,s.jsx)(t.code,{children:"5m0s"}),"). You can change the time between snapshots as part of the ",(0,s.jsx)(t.code,{children:"creation"})," directive for the ",(0,s.jsx)(t.code,{children:"etcd"})," service."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Retention"})}),(0,s.jsxs)(t.td,{children:["By default, all snapshots are saved for 24 hours (",(0,s.jsx)(t.code,{children:"24h"}),") before being deleted and purged. You can change how long to store a snapshot as part of the ",(0,s.jsx)(t.code,{children:"retention"})," directive for the ",(0,s.jsx)(t.code,{children:"etcd"})," service."]})]})]})]}),(0,s.jsx)(t.h3,{id:"configuring-the-snapshot-service-in-yaml-1",children:"Configuring the Snapshot Service in YAML"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"services:\n    etcd:\n      snapshot: true\n      creation: 5m0s\n      retention: 24h\n"})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var s=n(4334);const r={tabItem:"tabItem_Ymn6"};var i=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>S});var s=n(7294),r=n(4334),i=n(2466),o=n(6550),c=n(469),a=n(1980),l=n(7392),d=n(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=u(e),[o,a]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[l,h]=f({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),x=(()=>{const e=l??m;return p({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{x&&a(x)}),[x]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=n(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(5893);function b(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=a.indexOf(t),r=c[n].value;r!==s&&(l(t),o(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>a.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function S(e){const t=(0,g.Z)();return(0,j.jsx)(k,{...e,children:h(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);