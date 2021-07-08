import React, { FC, ReactElement } from 'react';
import CoffeeHousePublicLayout from './Public/CoffeeHousePublicLayout';
import './style.scss';

const CoffeeHouseLayout:FC = ():ReactElement => {
  return (
    <div className="coffee-house">
      <CoffeeHousePublicLayout />
    </div>
  );
};

export default CoffeeHouseLayout;
