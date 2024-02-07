import React, { Children, ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function Enterprise({children}) {
  if (useDocusaurusContext().siteConfig.customFields.isEnterprise==false) {
    return (null);
  } else {
    return (
      <span style={{background:'green', color:'white'}}>
        {children};
      </span>
    );
  }
}

export function Community({children}) {
  if (useDocusaurusContext().siteConfig.customFields.isEnterprise==true) {
    return (null);
  } else {
    return (
      <span style={{background:'blue', color:'white'}}>
        {children};
      </span>
    );
  }
}
