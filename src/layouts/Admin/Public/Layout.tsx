import React from 'react';

const Layout:React.FC = ({ children }: any) => {
  console.log('Layout');
  return (
    <div>
            AuthLayout
      { children }
    </div>
  );
};

export default Layout;
