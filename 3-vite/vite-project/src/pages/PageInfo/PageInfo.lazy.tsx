import React, { lazy, Suspense } from 'react';

const LazyPageInfo = lazy(() => import('./PageInfo'));

const PageInfo = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPageInfo {...props} />
  </Suspense>
);

export default PageInfo;
