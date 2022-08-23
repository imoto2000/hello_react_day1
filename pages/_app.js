import "../styles/globals.css";
import { AuthUserProvider } from "../context/AuthUserContext";
import DefaultLayout from "../layouts/default";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </AuthUserProvider>
  );
}

export default MyApp;
