import React, { FC } from 'react';
import './PageProduct.css';

interface PageProductProps {}

const PageProduct: FC<PageProductProps> = () => (
  <div className="PageProduct" data-testid="PageProduct">
    PageProduct Component
  </div>
);

export default PageProduct;
