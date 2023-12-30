import showcase_1 from "../images/bg-showcase-1.jpg";
import showcase_2 from "../images/bg-showcase-2.jpg";
import showcase_3 from "../images/bg-showcase-3.jpg";
import testimonials_1 from "../images/testimonials-1.jpg";
import testimonials_2 from "../images/testimonials-2.jpg";
import testimonials_3 from "../images/testimonials-3.jpg";
import icon_1 from "../images/icon-1.png";
import icon_2 from "../images/icon-2.png";
import icon_3 from "../images/icon-3.png";

const Body = () => {
  return (
    <>
      {/* Container-1 Start */}
      <section className="body-img">
        <div className="container-1">
          <h1>
            Generate more leads with a <br />
            professional landing page!
          </h1>
          <input placeholder="Email Address" type="email" />
          <button className="btn btn-outline-success" type="submit">
            Submit
          </button>
        </div>
      </section>
      {/* Container-1 End */}

      {/* Container-2 Start */}
      <section className="container-2">
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={icon_1} width={40} />
            </div>
            <div className="content">
              <h3 className="heading">Fully Resposive</h3>
              <p>
                This theme will look great on any device, <br />
                no matter the size!
              </p>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={icon_2} width={40} />
            </div>
            <div className="content">
              <h3 className="heading">Bootstarp 5 Ready</h3>
              <p>
                Featuring the latest build of the new <br /> Bootstrap 5
                framework!
              </p>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={icon_3} width={40} />
            </div>
            <div className="content">
              <h3 className="heading">Easy to Use</h3>
              <p>
                Ready to use with your own content, <br />
                or customize the source files!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Container-2 End */}

      {/* Container-3 Start */}
      {/* First Box */}
      <section className="container-3">
        <div className="col-1">
          <h3>Fully Responsive Design</h3>
          <p>
            When you see the theme created by Start Bootstrap, you know the
            theme will look <br /> great on any device, whether its a phone,
            tablet or desktop the page will behave <br /> resposively!
          </p>
        </div>
        <div className="col-2">
          <img src={showcase_1} width={760} height={400} />
        </div>
      </section>

      {/* Second Box */}
      <section className="container-3">
        <div className="col-2">
          <img src={showcase_2} width={760} height={400} />
        </div>
        <div className="col-1">
          <h3>Updated for Bootstarp 5</h3>
          <p>
            Newly improved, and full of utility classes, Bootstarp 5 is leading
            the way in <br />
            mobile responsive web development! All the themes on start Bootstrap
            are now <b />
            using Bootstarp 5!
          </p>
        </div>
      </section>

      {/* Third Box */}
      <section className="container-3">
        <div className="col-1">
          <h3>Easy to Use & Customize</h3>
          <p>
            Landing Page is just HTML and CSS with splash of SCSS for users who
            demand some <br />
            deeper customization options. Out of the box, just add your content
            and images, and <br />
            you new landing page will be ready to go!
          </p>
        </div>
        <div className="col-2">
          <img src={showcase_3} width={760} height={400} />
        </div>
      </section>
      {/* Container-3 End */}

      {/* Container-4 Start */}
      <section className="container-4">
        <h2>What people are saying...</h2>

        <div className="testimonials">
          <div className="box">
            <div className="image">
              <img src={testimonials_1} width={150} />
            </div>
            <div className="content">
              <h3 className="name">Margaret E.</h3>
              <p>This is fantastic! Thanks so much guys!</p>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={testimonials_2} width={150} />
            </div>
            <div className="content">
              <h3 className="name">Fred S.</h3>
              <p>
                Bootstrap is amazing. I have been using it <br />
                to create lots of super nice landing <br />
                pages.
              </p>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={testimonials_3} width={150} />
            </div>
            <div className="content">
              <h3 className="name">Sarah W.</h3>
              <p>
                Thanks so much for making these free <br />
                resources available for us!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Container 4 End */}

      {/* Container 5 Start */}
      <section className="body-img">
        <div className="container-1">
          <h1>Ready to get started? Sign up now!</h1>
          <input placeholder="Email Address" type="email" />
          <button className="btn btn-outline-success" type="submit">
            Submit
          </button>
        </div>
      </section>
      {/* Container 5 End */}
    </>
  );
};

export default Body;
