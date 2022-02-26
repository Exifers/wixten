import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
