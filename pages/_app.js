import "../styles/globals.css";
import "../styles/Header.module.css";
import "../styles/Home.module.css";
import "../styles/Portfolio.module.css";
import "../styles/Contact.module.css";
import "../styles/Testimonial.module.css";
import "../styles/Resume.module.css";
import "../styles/Features.module.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Winifred Liam | Freelance Ghost Writer, Virtual Assistant, Author & IT
          Support Specialist
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
