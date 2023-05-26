import ProgressProvider from "@/context/progress";
import StatesProvider from "@/context/states";
import ModalProvider from "@/context/modal";
import AOS from "aos";
import { useLayoutEffect } from "react";
import "aos/dist/aos.css";
import "../styles/main.scss";

export default function App({ Component, pageProps }) {
  useLayoutEffect(() => {
    AOS.init();
  });

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
