import ProgressProvider from "@/context/progress";
import "../styles/main.scss";
import StatesProvider from "@/context/states";

export default function App({ Component, pageProps }) {
  return (
    <ProgressProvider>
      <StatesProvider>
        <Component {...pageProps} />
      </StatesProvider>
    </ProgressProvider>
  );
}
