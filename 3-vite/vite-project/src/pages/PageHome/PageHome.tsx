import React, { FC } from 'react';
import './PageHome.css';
import { useStore } from '../../store';

interface PageHomeProps {}

const PageHome: FC<PageHomeProps> = () => {

  const [datas, ] = useStore();

  return (
    <div className="PageHome" data-testid="PageHome">
      PageHome Component : {datas.length}
    </div>
    );
};

export default PageHome;
