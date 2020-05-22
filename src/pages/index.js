import React from 'react';
import { useSelector } from 'umi'
import styles from './index.less';

const Page = () => {
    const test = useSelector(state => state.test )
    const { base , page } = test
  return (
    <div>
        
        <h1 className={styles.title}>base:{base ? base.text : ""}</h1>
      <h1 className={styles.title}>page:{page ? page.text : ""}</h1>
    </div>
  );
}
Page.getInitialProps = async ({ store }) => {
    console.log("page props")
    const { dispatch , getState } = store
    await dispatch({
        type:"test/setPage",
        payload:{
            text:"Hello page"
        }
    })
    console.log("page return")
    return getState()
}
export default Page
