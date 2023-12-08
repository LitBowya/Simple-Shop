

const WhyUs = () => {
  return (
    <div>
      <section className="whyus">
        <marquee direction="" className="whyus__container">
          <div className="row">
            <div className="whyus__content col-4">
              <div className="whyus__info-box">
                <i className="fa-solid fa-screwdriver-wrench"></i>
                <div className="why__info-text">
                  <p>PC Repairs</p>
                </div>
              </div>
            </div>
            <div className="whyus__content col-4">
              <div className="whyus__info-box">
                <i className="fa-solid fa-mobile-button"></i>
                <div className="why__info-text">
                  <p>Accessories</p>
                </div>
              </div>
            </div>
            <div className="whyus__content col-4">
              <div className="whyus__info-box">
                <i className="fa-solid fa-desktop"></i>
                <div className="why__info-text">
                  <p>Accessories</p>
                </div>
              </div>
            </div>
          </div>
        </marquee>
      </section>
    </div>
  );
};

export default WhyUs;
