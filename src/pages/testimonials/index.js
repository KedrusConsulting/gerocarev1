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
                "“We started using Gerocare to manage our elderly mom's medical needs with some initial hesitation, but were soon impressed by the exceptional support, care, and professionalism displayed. Gerocare went above and beyond to provide top-notch care. Our mom's doctor instilled confidence and peace of mind through his responsiveness and attentiveness. All other stakeholders also exceeded our expectations. My mom even compared her experience at the medical center to being in London! The nursing assistant's positive attitude put our minds at ease. I highly recommend Gerocare to anyone with elderly parents in Nigeria needing medical support. You won't be disappointed—thank you, Gerocare, and keep up the great work!”"
              }
              image_url={require("@/assets/img/margeret_ojo.png").default}
              author_name={"Margaret Ojo"}
              author_location={"Lagos"}
            />

            <Blockquote
              description={
                "“I nearly lost my dad to a heart failure because of a wrong prescription from the hospital he was admitted in. Thankfully your team came in at the right time and reviewed his treatment and prescribed a better approach. Your guys are the real MVP. Thank you!”"
              }
              image_url={require("@/assets/img/uka_eje.png").default}
              author_name={"Uka Eje"}
              author_location={"Lagos"}
            />

            <Blockquote
              description={
                "“Thank u Gerocare for building a platform so wonderful as this to be able to care for our aged parents and love ones. I had a beautiful experience the first time a doctor from Gerocare came to visit with my parents especially my Dad, I felt proud been able to care for my parents at home, My dad was so happy his son sent a doctor over to the house to check on his health status. It was really a beautiful experience for them, and I do hope I keep caring for them continuously with the help of Gerocare, thank u Gerocare.”"
              }
              image_url={require("@/assets/img/icon_user_avatar.svg").default}
              author_name={"Tega Samuel"}
              author_location={"Lagos"}
            />

            <Blockquote
              description={
                "“I enrolled my Dad in Gerocare's services in 2020 and have been impressed by the ease of subscription, payment, and communication with their staff. My family is delighted with the service quality, respect, and dignity shown to my Dad, along with prompt reports and extra services like at-home investigations. Since joining Gerocare, we've noticed a positive difference in his healthcare. The organization offers flexible services, reasonable pricing, and truly listens to our needs. I'm proud that such a service exists in Nigeria and will recommend it to my elderly relatives and friends' parents. It's refreshing to work with an organization that values my personal and cultural beliefs, and I look forward to contributing as part of the fantastic Gerocare team.”"
              }
              image_url={require("@/assets/img/icon_user_avatar.svg").default}
              author_name={"Tolulope Jeje"}
              author_location={"Lagos"}
            />

            <Blockquote
              description={
                "“I never thought my mom would face numerous health challenges. She was always so full of energy and vigor, but as they say, nothing in life is constant. Signing my mom up for Gerocare has been one of the best decisions I've made for her. Gerocare has provided me with peace of mind over the last year by taking care of her needs, from organizing a 24-hour live-in trained caregiver to arranging her routine blood tests and sending a doctor to visit her regularly, and even upon request. I highly recommend Gerocare to those of us living abroad with aging parents in Nigeria. This service is very affordable and offers excellent value. You can rest assured knowing that your parent(s) is/are well taken care of. Give them a try, and you'll thank me.”"
              }
              image_url={require("@/assets/img/icon_user_avatar.svg").default}
              author_name={"Folasade Ofi"}
              author_location={"Lagos"}
            />

            {/* <Blockquote
              description={
                "“I enrolled my Dad in Gerocare's services in 2020, and I must attest to the excellent ease of subscription, payment, and responsiveness from their staff. My family appreciates the high-quality service, respect, and dignity shown to my Dad, along with the prompt reports and added benefits like at-home investigations. We've noticed a positive difference in my Dad's healthcare since joining Gerocare. They offer flexible services, reasonable pricing, and listen to our needs in providing top-notch home visits and support. I'm proud that such a service is available in Nigeria and will surely recommend it to my elderly relatives and friends' parents. It's a pleasure to work with an organization that values my personal and cultural beliefs.”"
              }
              image_url={require("@/assets/img/icon_user_avatar.svg").default}
              author_name={"Mojee A"}
              author_location={"Lagos"}
            /> */}

            <Blockquote
              description={
                "“I began using Gerocare for my mom in June 2020 after my dad's passing in 2019, when we urgently needed top medical care without the hassle of hospital visits. I discovered Gerocare on Instagram and signed up, even though their website wasn't fully functional. The MD kindly registered my mom via WhatsApp chat, and their admin was always available for assistance. They prioritized patient care over money, providing services before receiving payment. In February 2021, they significantly upgraded their platform, allowing access to test results, doctor reports, and more through email notifications and text messages. Now, with two elderly individuals signed up, I can attest to the excellent experience and continuous improvements. I highly recommend Gerocare for home care medical services at your fingertips.”"
              }
              image_url={require("@/assets/img/icon_user_avatar.svg").default}
              author_name={"Jennifer Aigbogun"}
              author_location={"Lagos"}
            />
          </div>
        </Section>

        <GetStarted />

        <Section sectionName={"cta"}>
          <div className="cta customers-stories__cta">
            <h2 className="heading heading--display">
              Gift your Elderly Loved Ones Monthly Medical Checkup{" "}
            </h2>

            <p>
              GeroCare provides elderly patients with the entire spectrum of
              primary health care services in the comfort of their home. We make
              it extremely easy for you to provide medical care for your parents
              and elderly loved ones anywhere in Nigeria.
            </p>

            <a href="/register" className="btn btn--main cta__btn">
              Get Started
            </a>
          </div>
        </Section>
      </main>
    </Root>
  );
}
