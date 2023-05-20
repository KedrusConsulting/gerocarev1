import ProgressProvider from "@/context/progress";
import "../styles/main.scss";
import StatesProvider from "@/context/states";
import ModalProvider from "@/context/modal";

export default function App({ Component, pageProps }) {
  return (
    <ProgressProvider>
      <StatesProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </StatesProvider>
    </ProgressProvider>
  );
}
