import React from 'react';
import { useSelector, Helmet } from 'umi';
import styles from './index.less';

const Page = () => {
  const test = useSelector(state => state.test);
  const { base, page } = test;
  return (
    <div>
      <Helmet>
        <title>{page ? page.text : ''}</title>
      </Helmet>
      <h1 className={styles.title}>base:{base ? base.text : ''}</h1>
      <h1 className={styles.title}>page:{page ? page.text : ''}</h1>
    </div>
  );
};
Page.getInitialProps = async ({ store }) => {
  const { dispatch, getState } = store;
  await dispatch({
    type: 'test/setPage',
    payload: {
      text: 'Hello page2',
    },
  });
  return getState();
};
export default Page;
