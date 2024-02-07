import React, { Children, ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function Enterprise({children}) {
  var showOrHide = 'inline';

  if (useDocusaurusContext().siteConfig.customFields.isEnterprise==false) {
    showOrHide = 'none';
  }

  return (
    <span
      style={{
        display: showOrHide,
        background: 'yellow',
      }}>
      {children}
    </span>
  );
}

export function Community({children}) {
  var showOrHide = 'inline';

  if (useDocusaurusContext().siteConfig.customFields.isEnterprise==true) {
    showOrHide = 'none';
  }

  return (
    <span
      style={{
        display: showOrHide,
        background: 'green',
      }}>
      {children}
    </span>
  );
}
