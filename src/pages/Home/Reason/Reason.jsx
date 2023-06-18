import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Reason = () => {
  return (
    <section className="pt-16 md:pt-28">
      <Container>
        <SectionTitle
          heading="Inner Strength"
          subHeading="The Main Reasons to Practice Yoga"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
          <div className=" space-y-8">
            {/* card 1 */}
            <div className="flex gap-4 items-center">
              <div className="w-full max-w-xs ml-auto text-right">
                <h4 className="text-lg font-semibold">Good for Health</h4>
                <p>
                  Yoga Fit is where you can find balance, harmony and energy.
                  Yoga Fit is where you can find balance, harmony and energy.
                </p>
              </div>
              <div>
                <img
                  src={"https://i.ibb.co/DWfxYY3/care.png"}
                  className="bg-[#13795B] p-2 w-12 rounded-full"
                  alt=""
                />
              </div>
            </div>
            {/* card 2 */}
            <div className="flex gap-4 items-center text-right">
              <div className="w-full max-w-xs ml-auto">
                <h4 className="text-lg font-semibold">Good for Body</h4>
                <p>
                  Yoga Fit is where you can gain balance of metabolism. Maintain
                  healthy weight, beautiful strong body and control your hunger.
                </p>
              </div>
              <div>
                <img
                  src={"https://i.ibb.co/Jq31yCf/muscles.png"}
                  className="bg-[#13795B] p-2 w-12 rounded-full"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              className="mx-auto"
              src={"https://i.ibb.co/sFz9H57/Layer-44.png"}
              alt=""
            />
          </div>
          <div className=" space-y-8">
            {/* card 3 */}
            <div className="flex gap-4 items-center">
              <div>
                <img
                  src={"https://i.ibb.co/CW0jwVm/cardio.png"}
                  className="bg-[#13795B] p-2 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full max-w-xs mr-auto">
                <h4 className="text-lg font-semibold">Good for Cardio</h4>
                <p>
                  Yoga Fit iimproves blood circulation and decreases blood
                  pressure of the body. A lower pulse rate helps your heart.
                </p>
              </div>
            </div>
            {/* card 4 */}
            <div className="flex gap-4 items-center">
              <div>
                <img
                  src={"https://i.ibb.co/Rgv0BBF/breathing.png"}
                  className="bg-[#13795B] p-2 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full max-w-xs mr-auto">
                <h4 className="text-lg font-semibold">Good for Breathing</h4>
                <p>
                  Yoga Fit improves your respiratory by helping your lungs work
                  more efficiently. Breathing exercises are a
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reason;
