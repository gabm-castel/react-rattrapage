import React, { FC } from 'react';
import './List.css';

interface ListProps {}

const List: FC<ListProps> = () => (
  <div className="List" data-testid="List">
    List Component
  </div>
);

export default List;
