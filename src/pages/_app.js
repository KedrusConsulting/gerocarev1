import ProgressProvider from "@/context/progress";
import "../styles/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <ProgressProvider>
      <Component {...pageProps} />
    </ProgressProvider>
  );
}
