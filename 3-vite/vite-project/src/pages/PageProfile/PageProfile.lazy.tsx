import React, { lazy, Suspense } from 'react';

const LazyPageProfile = lazy(() => import('./PageProfile'));

const PageProfile = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPageProfile {...props} />
  </Suspense>
);

export default PageProfile;
