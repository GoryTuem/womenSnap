import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  //자바 스크립트
  let aaa = 3;

  //html 코드
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>이 글자가 잘 나오는지 확인</h1>
      </main>
    </div>
  );
}
