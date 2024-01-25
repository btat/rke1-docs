---
slug: /
title: Overview of RKE
description: RKE solves Kubernetes installation complexity. With RKE, Kubernetes installation is simplified, regardless of what OSs and platforms you’re running.
---

Rancher Kubernetes Engine (RKE) is a CNCF-certified Kubernetes distribution that runs entirely within Docker containers. It works on bare-metal and virtualized servers. RKE solves the problem of installation complexity, a common issue in the Kubernetes community. With RKE, the installation and operation of Kubernetes is both simplified and easily automated, and it's entirely independent of the operating system and platform you're running. As long as you can run a supported version of Docker, you can deploy and run Kubernetes with RKE.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  {1===0?<TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>:null}
  {1===1?<TabItem value="banana" label="222">
    This is 222
  </TabItem>:null}
</Tabs>

{1===0?<p>enterprise!!!</p>:null}

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

{useDocusaurusContext().siteConfig.customFields.isEnterprise==false?<p>ENTERPRISE EDITION CONTENT</p>:<p>COMMUNITY EDITION CONTENT</p>}

### TEST SECTION

SOME INSTRUCTIONS

1. DO THIS THING
1. RUN THIS CODE:
    
    {useDocusaurusContext().siteConfig.customFields.isEnterprise==false?<code>helm repo add rancher-prime https://charts.rancher.com/server-charts/prime</code>:<code>helm repo add rancher-stable https://releases.rancher.com/server-charts/stable</code>}

1. FINISH TASK

export const Enterprise = ({children}) => (
  
  <span
    style={{
      display: 'inline',
    }}>
    {children}  {useDocusaurusContext().siteConfig.customFields.isEnterprise==false?<code>helm repo add rancher-prime https://charts.rancher.com/server-charts/prime</code>:<code>helm repo add rancher-stable https://releases.rancher.com/server-charts/stable</code>}
  </span>
);

<Enterprise>this is ENTERPRISE ONLY text</Enterprise>
r

I can write **Markdown** alongside my _JSX_!