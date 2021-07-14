import React, { FC, ReactElement } from 'react';
import CoffeeHousePublicLayout from './Public/CoffeeHousePublicLayout';
import './style.scss';
import { ApolloProvider } from '@apollo/client/react';
import { client } from '../../apollo';

const CoffeeHouseLayout:FC = ():ReactElement => {
  return (
    <ApolloProvider client={client}>
      <div className="coffee-house">
        <CoffeeHousePublicLayout />
      </div>
    </ApolloProvider>
  );
};

export default CoffeeHouseLayout;
