import React, { FC } from 'react';
import './PageInfo.css';
import { ActionType, useStore } from '../../store';
import { Button } from '@radix-ui/themes';

interface PageInfoProps {}

const PageInfo: FC<PageInfoProps> = () => {
  const [,dispatch] = useStore();

  return (
    <div className="PageInfo" data-testid="PageInfo">
      PageInfo Component
      <Button onClick={() => dispatch({type: ActionType.LOAD_REQUEST})}>Load Products</Button>
    </div>
  );
}

export default PageInfo;
