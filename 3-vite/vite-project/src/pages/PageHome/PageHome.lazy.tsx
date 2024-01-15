import React, { lazy, Suspense } from 'react';

const LazyPageHome = lazy(() => import('./PageHome'));

const PageHome = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPageHome {...props} />
  </Suspense>
);

export default PageHome;
