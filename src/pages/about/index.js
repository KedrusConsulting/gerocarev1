import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Awards from "@/components/Awards";
import AboutImgSlider from "@/components/AboutImgSlider";
import Vision from "@/components/Vision";
import Story from "@/components/Story";
import Header from "@/components/Header";
import HeroCentered from "@/components/HeroCentered";
import Root from "@/Layout/Root";

export default function About() {
  return (
    <Root title={"About"}>
      <Header className={"about"}>
        <HeroCentered>
          <h1
            className="heading heading--display"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            We provide regular doctor home visits.
          </h1>

          <p data-aos="fade-up" data-aos-duration="2000">
            Our Mission is to pioneer medical inclusion by leveraging technology
            to provide access to medical care to underserved segments of people
            across Africa.
          </p>
        </HeroCentered>

        <AboutImgSlider />
      </Header>

      <main>
        <Vision />

        <Story />

        <Awards />
      </main>
    </Root>
  );
}
