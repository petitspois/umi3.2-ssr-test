import React from 'react';
import { Link } from 'umi';

const BasicLayout = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Page1</Link>
        </li>
        <li>
          <Link to="/page2">Page2</Link>
        </li>
        <li>
          <Link to="/page3">Page3</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

BasicLayout.getInitialProps = async ({ store }) => {
  const { dispatch, getState } = store;
  await dispatch({
    type: 'test/setBase',
    payload: {
      text: 'Hello base',
    },
  });
  return getState();
};

export default BasicLayout;
