import React from "react";
import "./review.css";

const Review = () => {
  const data = [
    {
      name: "Gopinath",
      designation: "Software engineer",
      location: "Chennai",
      review:
        "I’m about 4.5 months out from my original treatment (3300 grafts) and I wanted to check in and leave a review. My hair growth has been incredible— I do keep my hair on the shorter side but it’s been extremely consistent each month where I had the hair transplant. It’s amazing to see how my hair has adapted properly to this treatment and I am extremely thankful to no longer have the huge bald patch. Would highly recommend this process to anyone debating it but especially at this clinic.",
    },
    {
      name: "Murali Krishna",
      designation: "Registered Nurse",
      location: "New Zealand",
      review:
        "I just had my 2400 graft FUE hair transplant and  I was not expecting the process to be so smooth and painless. I didn't have any side effects that affected my daily routine. I even started my work again in just 2 days (WFH).Thanks for  Dr.Prabhakar and team !",
    },
    {
      name: "Prashanth",
      designation: "Architect",
      location: "Coimbatore",
      review:
        "Recently I have done my hair transplant from Dr.Prabhakar clinic and my experience was too good. Dr. and all staff are very helpful. Now I'm waiting for my result....I hope it'll be very best.",
    },
    {
      name: "Mohammed Rasik",
      designation: "Advocate",
      location: "Bengaluru",
      review:
        "Recently I have done my hair transplant from Dr.Prabhakar clinic and my experience was too good. Dr. and all staff are very helpful. Now I'm waiting for my result....I hope it'll be very best.",
    },
  ];
  return (
    <div>
      <section className="gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center mb-4 pb-2">
                <i className="fas fa-quote-left fa-3x text-white"></i>
              </div>

              <div>
                {data.map((itm, i) => (
                  <div
                    class="card mb-4"
                    style={{ borderRadius: "14px" }}
                    key={i}
                  >
                    <div class="card-body">
                      <h5
                        class="card-title"
                        style={{ fontWeight: 600, marginBottom: 5 }}
                      >
                        {itm.name} ({itm.designation})
                      </h5>
                      <span
                        style={{ color: "gray", fontSize: 14, marginLeft: 0 }}
                      >
                        {itm.location}
                      </span>

                      <h5 class="card-title mt-3 mb-4">
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "orange", cursor: "pointer" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "orange", cursor: "pointer" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "orange", cursor: "pointer" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "orange", cursor: "pointer" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "orange", cursor: "pointer" }}
                        ></i>
                      </h5>
                      <p class="card-text" style={{ color: "gray" }}>
                        {itm.review}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-4 pt-2">
                <i className="fas fa-quote-right fa-3x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
