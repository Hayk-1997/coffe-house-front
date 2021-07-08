import React, { FC, ReactElement } from 'react';
import useStyles from './useStyle';

interface Props {
    children?: React.ReactNode;
}

const Layout:FC = ({ children }: Props): ReactElement => {
  const classes = useStyles();
  return (
    <section>
      <div className="container">
        <div className={classes.root}>
          <div className="col-xl-8 m-auto">
            { children }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
