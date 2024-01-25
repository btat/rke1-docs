"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[8614],{4953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(5893),s=t(1151);const i={title:"RKE Kubernetes Installation",description:"RKE is a fast, versatile Kubernetes installer you can use to install Kubernetes on your Linux hosts. Learn the simple steps for an RKE Kubernetes installation"},l=void 0,o={id:"installation/installation",title:"RKE Kubernetes Installation",description:"RKE is a fast, versatile Kubernetes installer you can use to install Kubernetes on your Linux hosts. Learn the simple steps for an RKE Kubernetes installation",source:"@site/docs/installation/installation.md",sourceDirName:"installation",slug:"/installation/",permalink:"/installation/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/installation/installation.md",tags:[],version:"current",lastUpdatedAt:1690506652,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{title:"RKE Kubernetes Installation",description:"RKE is a fast, versatile Kubernetes installer you can use to install Kubernetes on your Linux hosts. Learn the simple steps for an RKE Kubernetes installation"},sidebar:"mySidebar",previous:{title:"Requirements",permalink:"/os/"},next:{title:"Custom Certificates",permalink:"/installation/certs/"}},a={},c=[{value:"Download the RKE binary",id:"download-the-rke-binary",level:2},{value:"Alternative RKE macOS Install - Homebrew",id:"alternative-rke-macos-install---homebrew",level:3},{value:"Alternative RKE macOS Install - MacPorts",id:"alternative-rke-macos-install---macports",level:3},{value:"Prepare the Nodes for the Kubernetes cluster",id:"prepare-the-nodes-for-the-kubernetes-cluster",level:2},{value:"Creating the Cluster Configuration File",id:"creating-the-cluster-configuration-file",level:2},{value:"Using <code>rke config</code>",id:"using-rke-config",level:3},{value:"Other RKE Configuration Options",id:"other-rke-configuration-options",level:4},{value:"High Availability",id:"high-availability",level:3},{value:"Certificates",id:"certificates",level:3},{value:"Deploying Kubernetes with RKE",id:"deploying-kubernetes-with-rke",level:2},{value:"Save Your Files",id:"save-your-files",level:2},{value:"Kubernetes Cluster State",id:"kubernetes-cluster-state",level:3},{value:"Interacting with your Kubernetes cluster",id:"interacting-with-your-kubernetes-cluster",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"RKE is a fast, versatile Kubernetes installer that you can use to install Kubernetes on your Linux hosts. You can get started in a couple of quick and easy steps"}),"\n",(0,r.jsx)(n.h2,{id:"download-the-rke-binary",children:"Download the RKE binary"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["From your workstation, open a web browser and look up the ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/rke/#latest-release",children:"latest available RKE release"}),". You can click on the release notes link to go straight to that release or manually navigate to our ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/rke/releases",children:"RKE Releases"})," page and download the latest available RKE installer applicable to your operating system and architecture:"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"}),"\nBe aware that the release that is marked as ",(0,r.jsx)(n.code,{children:"Latest release"})," on GitHub release page might not be the actual latest available release of RKE."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"macOS"}),": ",(0,r.jsx)(n.code,{children:"rke_darwin-amd64"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Linux (Intel/AMD)"}),": ",(0,r.jsx)(n.code,{children:"rke_linux-amd64"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Linux (ARM 32-bit)"}),": ",(0,r.jsx)(n.code,{children:"rke_linux-arm"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Linux (ARM 64-bit)"}),": ",(0,r.jsx)(n.code,{children:"rke_linux-arm64"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Windows (32-bit)"}),": ",(0,r.jsx)(n.code,{children:"rke_windows-386.exe"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Windows (64-bit)"}),": ",(0,r.jsx)(n.code,{children:"rke_windows-amd64.exe"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy the RKE binary to a folder in your ",(0,r.jsx)(n.code,{children:"$PATH"})," and rename it ",(0,r.jsx)(n.code,{children:"rke"})," (or ",(0,r.jsx)(n.code,{children:"rke.exe"})," for Windows)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# macOS\n$ mv rke_darwin-amd64 rke\n# Linux\n$ mv rke_linux-amd64 rke\n# Windows PowerShell\n> mv rke_windows-amd64.exe rke.exe\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Make the RKE binary that you just downloaded executable. Open Terminal, change directory to the location of the RKE binary, and then run one of the commands below."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Using Windows?"}),"\nThe file is already an executable. Skip to ",(0,r.jsx)(n.a,{href:"#prepare-the-nodes-for-the-kubernetes-cluster",children:"Prepare the Nodes for the Kubernetes Cluster"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ chmod +x rke\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Confirm that RKE is now executable by running the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ rke --version\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"alternative-rke-macos-install---homebrew",children:"Alternative RKE macOS Install - Homebrew"}),"\n",(0,r.jsx)(n.p,{children:"RKE can also be installed and updated using Homebrew, a package manager for macOS."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Install Homebrew. See ",(0,r.jsx)(n.a,{href:"https://brew.sh/",children:"https://brew.sh/"})," for instructions."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"brew"}),", install RKE by running the following command in a Terminal window:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ brew install rke\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you have already installed RKE using ",(0,r.jsx)(n.code,{children:"brew"}),", you can upgrade RKE by running:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ brew upgrade rke\n"})}),"\n",(0,r.jsx)(n.h3,{id:"alternative-rke-macos-install---macports",children:"Alternative RKE macOS Install - MacPorts"}),"\n",(0,r.jsx)(n.p,{children:"RKE can also be installed and updated using MacPorts, a package manager for macOS."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Install MacPorts. See ",(0,r.jsx)(n.a,{href:"https://www.macports.org/",children:"https://www.macports.org/"})," for instructions."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"port"}),", install RKE by running the following command in a Terminal window:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ port install rke\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you have already installed RKE using ",(0,r.jsx)(n.code,{children:"port"}),", you can upgrade RKE by running:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ port upgrade rke\n"})}),"\n",(0,r.jsx)(n.h2,{id:"prepare-the-nodes-for-the-kubernetes-cluster",children:"Prepare the Nodes for the Kubernetes cluster"}),"\n",(0,r.jsx)(n.p,{children:"The Kubernetes cluster components are launched using Docker on a Linux distro. You can use any Linux you want, as long as you can install Docker on it."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["For information on which Docker versions were tested with your version of RKE, refer to the ",(0,r.jsx)(n.a,{href:"https://www.suse.com/suse-rke1/support-matrix/all-supported-versions/",children:"support matrix"})," for installing Rancher on RKE."]})}),"\n",(0,r.jsxs)(n.p,{children:["Review the ",(0,r.jsx)(n.a,{href:"/os/",children:"OS requirements"})," and configure each node appropriately."]}),"\n",(0,r.jsx)(n.h2,{id:"creating-the-cluster-configuration-file",children:"Creating the Cluster Configuration File"}),"\n",(0,r.jsxs)(n.p,{children:["RKE uses a cluster configuration file, referred to as ",(0,r.jsx)(n.code,{children:"cluster.yml"})," to determine what nodes will be in the cluster and how to deploy Kubernetes. There are ",(0,r.jsx)(n.a,{href:"/config-options/",children:"many configuration options"})," that can be set in the ",(0,r.jsx)(n.code,{children:"cluster.yml"}),". In our example, we will be assuming the minimum of one ",(0,r.jsx)(n.a,{href:"/config-options/nodes/",children:"node"})," for your Kubernetes cluster."]}),"\n",(0,r.jsxs)(n.p,{children:["There are two easy ways to create a ",(0,r.jsx)(n.code,{children:"cluster.yml"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Using our ",(0,r.jsxs)(n.a,{href:"/example-yamls/#minimal-clusteryml-example",children:["minimal ",(0,r.jsx)(n.code,{children:"cluster.yml"})]})," and updating it based on the node that you will be using."]}),"\n",(0,r.jsxs)(n.li,{children:["Using ",(0,r.jsx)(n.code,{children:"rke config"})," to query for all the information needed."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"using-rke-config",children:["Using ",(0,r.jsx)(n.code,{children:"rke config"})]}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"rke config"})," to create a new ",(0,r.jsx)(n.code,{children:"cluster.yml"})," in the current directory. This command will prompt you for all the information needed to build a cluster. See ",(0,r.jsx)(n.a,{href:"/config-options/",children:"cluster configuration options"})," for details on the various options."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rke config --name cluster.yml\n"})}),"\n",(0,r.jsx)(n.h4,{id:"other-rke-configuration-options",children:"Other RKE Configuration Options"}),"\n",(0,r.jsxs)(n.p,{children:["You can create an empty template ",(0,r.jsx)(n.code,{children:"cluster.yml"})," file by specifying the ",(0,r.jsx)(n.code,{children:"--empty"})," flag."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rke config --empty --name cluster.yml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Instead of creating a file, you can print the generated configuration to stdout using the ",(0,r.jsx)(n.code,{children:"--print"})," flag."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rke config --print\n"})}),"\n",(0,r.jsx)(n.h3,{id:"high-availability",children:"High Availability"}),"\n",(0,r.jsxs)(n.p,{children:["RKE is HA ready, you can specify more than one ",(0,r.jsx)(n.code,{children:"controlplane"})," node in the ",(0,r.jsx)(n.code,{children:"cluster.yml"})," file. RKE will deploy master components on all of these nodes and the kubelets are configured to connect to ",(0,r.jsx)(n.code,{children:"127.0.0.1:6443"})," by default which is the address of ",(0,r.jsx)(n.code,{children:"nginx-proxy"})," service that proxy requests to all master nodes."]}),"\n",(0,r.jsxs)(n.p,{children:["To create an HA cluster, specify more than one host with role ",(0,r.jsx)(n.code,{children:"controlplane"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"certificates",children:"Certificates"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Available as of v0.2.0"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, Kubernetes clusters require certificates and RKE auto-generates the certificates for all cluster components. You can also use ",(0,r.jsx)(n.a,{href:"/installation/certs/",children:"custom certificates"}),". After the Kubernetes cluster is deployed, you can ",(0,r.jsx)(n.a,{href:"/cert-mgmt/#certificate-rotation",children:"manage these auto-generated certificates"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"deploying-kubernetes-with-rke",children:"Deploying Kubernetes with RKE"}),"\n",(0,r.jsxs)(n.p,{children:["After you've created your ",(0,r.jsx)(n.code,{children:"cluster.yml"}),", you can deploy your cluster with a simple command. This command assumes the ",(0,r.jsx)(n.code,{children:"cluster.yml"})," file is in the same directory as where you are running the command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rke up\n\nINFO[0000] Building Kubernetes cluster\nINFO[0000] [dialer] Setup tunnel for host [10.0.0.1]\nINFO[0000] [network] Deploying port listener containers\nINFO[0000] [network] Pulling image [alpine:latest] on host [10.0.0.1]\n...\nINFO[0101] Finished building Kubernetes cluster successfully\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The last line should read ",(0,r.jsx)(n.code,{children:"Finished building Kubernetes cluster successfully"})," to indicate that your cluster is ready to use. As part of the Kubernetes creation process, a ",(0,r.jsx)(n.code,{children:"kubeconfig"})," file has been created and written at ",(0,r.jsx)(n.code,{children:"kube_config_cluster.yml"}),", which can be used to start interacting with your Kubernetes cluster."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you have used a different file name from ",(0,r.jsx)(n.code,{children:"cluster.yml"}),", then the kube config file will be named ",(0,r.jsx)(n.code,{children:"kube_config_<FILE_NAME>.yml"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"save-your-files",children:"Save Your Files"}),"\n",(0,r.jsx)(n.admonition,{title:"Important",type:"note",children:(0,r.jsx)(n.p,{children:"The files mentioned below are needed to maintain, troubleshoot and upgrade your cluster."})}),"\n",(0,r.jsx)(n.p,{children:"Save a copy of the following files in a secure location:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cluster.yml"}),": The RKE cluster configuration file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"kube_config_cluster.yml"}),": The ",(0,r.jsx)(n.a,{href:"/kubeconfig/",children:"Kubeconfig file"})," for the cluster, this file contains credentials for full access to the cluster."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cluster.rkestate"}),": The ",(0,r.jsx)(n.a,{href:"#kubernetes-cluster-state",children:"Kubernetes Cluster State file"}),", this file contains credentials for full access to the cluster.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"The Kubernetes Cluster State file is only created when using RKE v0.2.0 or higher."})]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:'The "rancher-cluster" parts of the two latter file names are dependent on how you name the RKE cluster configuration file.'})}),"\n",(0,r.jsx)(n.h3,{id:"kubernetes-cluster-state",children:"Kubernetes Cluster State"}),"\n",(0,r.jsxs)(n.p,{children:["The Kubernetes cluster state, which consists of the cluster configuration file ",(0,r.jsx)(n.code,{children:"cluster.yml"})," and components certificates in Kubernetes cluster, is saved by RKE, but depending on your RKE version, the cluster state is saved differently."]}),"\n",(0,r.jsxs)(n.p,{children:["As of v0.2.0, RKE creates a ",(0,r.jsx)(n.code,{children:".rkestate"})," file in the same directory that has the cluster configuration file ",(0,r.jsx)(n.code,{children:"cluster.yml"}),". The ",(0,r.jsx)(n.code,{children:".rkestate"})," file contains the current state of the cluster including the RKE configuration and the certificates. It is required to keep this file in order to update the cluster or perform any operation on it through RKE."]}),"\n",(0,r.jsx)(n.p,{children:"Before v0.2.0, RKE saved the Kubernetes cluster state as a secret. When updating the state, RKE pulls the secret, updates/changes the state and saves a new secret."}),"\n",(0,r.jsx)(n.h2,{id:"interacting-with-your-kubernetes-cluster",children:"Interacting with your Kubernetes cluster"}),"\n",(0,r.jsxs)(n.p,{children:["After your cluster is up and running, you can start using the ",(0,r.jsx)(n.a,{href:"/kubeconfig/",children:"generated kubeconfig file"})," to start interacting with your Kubernetes cluster using ",(0,r.jsx)(n.code,{children:"kubectl"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"After installation, there are several maintenance items that might arise:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/cert-mgmt/",children:"Certificate Management"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/managing-clusters/",children:"Adding and Removing Nodes in the cluster"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(7294);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);