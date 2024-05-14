import React from "react";
import { Collapse } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const Collapses = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const text = [
    {
      title: "WHAT TYPE OF MAINTENANCE IS REQUIRED AFTER A HAIR TRANSPLANT?",
      desc: "After a hair transplant, you should take special care of your scalp in the days and weeks following the procedure. You should keep the area around the grafts clean and dry, avoid vigorous activities or exercise and exposure to direct sunlight, and be gentle and careful when washing, styling, and brushing your hair. Additionally, you should avoid any lotions, creams, or oils that may be irritating to the new grafts. Always reach out to your doctor if you have any questions or concerns.",
    },
    {
      title: "HOW LONG AM I REQUIRED TO SLEEP IN A HALF SEATED POSITION?",
      desc: "Only for the first 2-3 nights, as well as wearing your bandage and then you can sleep normally. Can clarify with the doctor when you come for the first follow up.",
    },
    {
      title: "WHEN CAN I START WEARING HATS AGAIN?",
      desc: "Typically, you should wait at least two weeks after your hair transplant before you start wearing hats again. You should also be sure to not wear hats that fit too tightly as this may cause too much pressure on the newly transplanted hair follicles.",
    },
    {
      title: "HOW OFTEN SHOULD I COME FOR FOLLOW-UP APPOINTMENTS?",
      desc: "Follow-up visits should typically be scheduled with the doctor the next day or the day after for a lymphatic massage to reduce swelling and speed up the healing. Additional follow-up appointments may be required at regular intervals (e.g., every 1-3 months) for the first year or two after the transplant.",
    },
    {
      title: "WILL THE TRANSPLANTED HAIR FALL OUT AFTER SOME TIME?",
      desc: "After a month you will experience something called hair shock where some of the hair will fall off to start a new cycle and start growing back. Transplanted hair should grow for a lifetime, although it will require maintenance and care like any other hair.",
    },
    {
      title: "WHEN CAN I RESUME MY ACTIVITIES?",
      desc: "It's important to avoid any exercise or physical activity that could increase blood pressure and cause bleeding around the hair follicles. Most people can resume light exercise after a week, but it's best to wait 2-3 weeks before engaging in more intense workouts. You should also avoid swimming for at least two weeks after the procedure to allow your scalp time to heal. Chlorine and other chemicals in the water can irritate your scalp and increase the risk of infection.",
    },
    {
      title:
        "ARE THERE ANY LIMITATIONS TO MY DAILY ACTIVITIES AFTER THE PROCEDURE?",
      desc: "It is important that you follow your surgeon's directions closely after the procedure for a successful hair transplant. For the first week you should avoid strenuous physical activity, swimming, saunas, direct sun exposure and dust. After the first week, light physical activity and normal day- to-day activities can generally be resumed. However, any additional strenuous activity or exposing the area to sun, sweat or dust should be avoided.",
    },
    {
      title: "HOW LONG DOES IT TAKE FOR THE HAIR TRANSPLANT TO TAKE EFFECT?",
      desc: "The results of a hair transplant typically take effect within six to nine months. Your newly transplanted hair will start to thicken and grow after three to four months and the effect should be more visible after six to nine months.",
    },
    {
      title: "WHEN CAN I START WASHING MY HAIR LIKE NORMAL?",
      desc: "Wait at least one week before washing your hair after a hair transplant. Avoid using hot water and vigorous scrubbing when washing your scalp. You can take a shower the same day after the procedure but do not wash or scrub your scalp. You can pour some soapy water (using shampoo we provide in your post-care kit) using the cup on your scalp, but DO NOT touch it the first week after your procedure.",
    },
  ];
  const items = [
    {
      key: "1",
      label: (
        <div className="ml-2" style={{ fontSize: 16, fontWeight: "500" }}>
          Frequently Asked Questions
        </div>
      ),
      children: (
        <div>
          {text.map((itm, i) => (
            <div key={i} style={{ marginBottom: 15 }}>
              <div
                style={{ fontSize: 16, fontWeight: "bold", marginBottom: 4 }}
              >
                {itm.title}
              </div>
              <div>{itm.desc}</div>
            </div>
          ))}
        </div>
      ),
    },
  ];
  return (
    <Collapse
      items={items}
      defaultActiveKey={["2"]}
      onChange={onChange}
      expandIcon={({ isActive }) => (
        <GlobalOutlined
          style={{ color: "#337ab7", fontSize: 18, marginTop: 6 }}
          rotate={isActive ? 90 : 0}
        />
      )}
    />
  );
};
export default Collapses;
