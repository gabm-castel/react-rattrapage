import React, { lazy, Suspense } from 'react';

const LazyPageProduct = lazy(() => import('./PageProduct'));

const PageProduct = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPageProduct {...props} />
  </Suspense>
);

export default PageProduct;
