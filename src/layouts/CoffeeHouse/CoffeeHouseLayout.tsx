import React, { ReactElement } from 'react';
import CoffeeHousePublicLayout from './Public/CoffeeHousePublicLayout';
import './CoffeeHouseLayout.scoped.scss';

const CoffeeHouseLayout:React.FC = ():ReactElement => {
  return (
    <div className="coffee-house">
      <CoffeeHousePublicLayout />
    </div>
  );
};

export default CoffeeHouseLayout;
