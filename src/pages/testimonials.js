import Root from "@/Layout/Root";
import Header from "@/components/Header";
import GetStarted from "@/components/GetStarted";
import HeroCentered from "@/components/HeroCentered";
import Section from "@/Layout/Section";
import Blockquote from "@/components/Blockquote";

export default function Testimonials() {
  return (
    <Root title={"Customer Stories"}>
      <Header className={"testimonials"}>
        <HeroCentered>
          <h1 className="heading heading--display">Customer’s Stories</h1>
          <p>
            We asked our customer what it was like to enjoy the services of
            Gerocare amd a few of them tell us their experiences. A wow
            experience!
          </p>
        </HeroCentered>
      </Header>

      <main>
        <Section sectionName={"customers-stories"}>
          <div className="customers-stories__grid">
            <Blockquote
              description={
                "“So we started using Gerocare to manage our elderly mum's medical problems and while we approached this tentatively at first, we were really impressed at the level of support, care and professionalism displayed. Gerocare has gone above and beyond to ensure that my mum has received top notch care - Her Doctor has engaged in such a manner that has given us confidence and peace of mind, he has been very supportive and responsive to all her needs and ours. The other stakeholders have also performed up to ”"
              }
              image_url={require("@/assets/img/avatar.png").default}
              author_name={"Margaret Ojo"}
              author_location={"Lagos"}
            />

            <Blockquote
              description={
                "“So we started using Gerocare to manage our elderly mum's medical problems and while we approached this tentatively at first, we were really impressed at the level of support, care and professionalism displayed. Gerocare has gone above and beyond to ensure that my mum has received top notch care - Her Doctor has engaged in such a manner that has given us confidence and peace of mind, he has been very supportive and responsive to all her needs and ours. The other stakeholders have also performed up to ”"
              }
              image_url={require("@/assets/img/avatar.png").default}
              author_name={"Margaret Ojo"}
              author_location={"Lagos"}
            />

            <Blockquote
              description={
                "“So we started using Gerocare to manage our elderly mum's medical problems and while we approached this tentatively at first, we were really impressed at the level of support, care and professionalism displayed. Gerocare has gone above and beyond to ensure that my mum has received top notch care - Her Doctor has engaged in such a manner that has given us confidence and peace of mind, he has been very supportive and responsive to all her needs and ours. The other stakeholders have also performed up to ”"
              }
              image_url={require("@/assets/img/avatar.png").default}
              author_name={"Margaret Ojo"}
              author_location={"Lagos"}
            />

            <Blockquote
              description={
                "“So we started using Gerocare to manage our elderly mum's medical problems and while we approached this tentatively at first, we were really impressed at the level of support, care and professionalism displayed. Gerocare has gone above and beyond to ensure that my mum has received top notch care - Her Doctor has engaged in such a manner that has given us confidence and peace of mind, he has been very supportive and responsive to all her needs and ours. The other stakeholders have also performed up to ”"
              }
              image_url={require("@/assets/img/avatar.png").default}
              author_name={"Margaret Ojo"}
              author_location={"Lagos"}
            />

            <Blockquote
              description={
                "“So we started using Gerocare to manage our elderly mum's medical problems and while we approached this tentatively at first, we were really impressed at the level of support, care and professionalism displayed. Gerocare has gone above and beyond to ensure that my mum has received top notch care - Her Doctor has engaged in such a manner that has given us confidence and peace of mind, he has been very supportive and responsive to all her needs and ours. The other stakeholders have also performed up to ”"
              }
              image_url={require("@/assets/img/avatar.png").default}
              author_name={"Margaret Ojo"}
              author_location={"Lagos"}
            />

            <Blockquote
              description={
                "“So we started using Gerocare to manage our elderly mum's medical problems and while we approached this tentatively at first, we were really impressed at the level of support, care and professionalism displayed. Gerocare has gone above and beyond to ensure that my mum has received top notch care - Her Doctor has engaged in such a manner that has given us confidence and peace of mind, he has been very supportive and responsive to all her needs and ours. The other stakeholders have also performed up to ”"
              }
              image_url={require("@/assets/img/avatar.png").default}
              author_name={"Margaret Ojo"}
              author_location={"Lagos"}
            />
          </div>
        </Section>

        <GetStarted />
      </main>
    </Root>
  );
}
