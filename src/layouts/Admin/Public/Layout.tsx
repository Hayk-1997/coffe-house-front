import React, { ReactElement } from 'react';

const Layout:React.FC = ({ children }: any): ReactElement => {
  console.log('Layout');
  return (
    <div>
            AuthLayout
      { children }
    </div>
  );
};

export default Layout;
