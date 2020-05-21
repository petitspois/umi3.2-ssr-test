import React from 'react';
import styles from './index.less';

const Page = (props:any) => {
  return (
    <div>
      <h1 className={styles.title}>{props.text}</h1>
    </div>
  );
}
Page.getInitialProps = async (cxt:any) => {
    console.log("test value:",cxt.test)
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({text:"Timeout Hello"})
        }, 2000);
    })
}
export default Page
