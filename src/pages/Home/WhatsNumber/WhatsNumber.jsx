import { useState } from "react";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const WhatsNumber = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="py-16 md:py-28">
        <Container>
          <SectionTitle
            heading="What's the numbers"
            subHeading="Join the Countless Success Stories in Yoga"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center auto-cols-max uppercase">
            <div className="flex flex-col gap-3 px-3 py-8 my-bg rounded-md shadow-lg">
              <div className="text-3xl sm:text-4xl font-semibold">
                {counterOn && (
                  <CountUp start={0} end={1200} duration={2} delay={0} />
                )}
                +
              </div>
              Enrolled
            </div>
            <div className="flex flex-col gap-3 px-3 py-8 my-bg rounded-md shadow-lg">
              <div className="text-3xl sm:text-4xl font-semibold">
                {counterOn && (
                  <CountUp start={0} end={920} duration={2} delay={0} />
                )}
                +
              </div>
              Happy Students
            </div>
            <div className="flex flex-col gap-3 px-3 py-8 my-bg rounded-md shadow-lg">
              <div className="text-3xl sm:text-4xl font-semibold">
                {counterOn && (
                  <CountUp start={0} end={90} duration={2} delay={0} />
                )}
                %
              </div>
              Satisfaction
            </div>
            <div className="flex flex-col gap-3 px-3 py-8 my-bg rounded-md shadow-lg">
              <div className="text-3xl sm:text-4xl font-semibold">
                {counterOn && (
                  <CountUp start={0} end={13} duration={2} delay={0} />
                )}
              </div>
              Instructors
            </div>
          </div>
        </Container>
      </div>
    </ScrollTrigger>
  );
};

export default WhatsNumber;
