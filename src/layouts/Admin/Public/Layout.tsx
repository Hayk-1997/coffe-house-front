import React, { FC, ReactElement } from 'react';

type Props = {
    children?: React.ReactNode;
};

const Layout:FC = ({ children }: Props):ReactElement => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 m-auto">
            { children }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
