import textButton from './images/Text Button.png';
import illustration from './images/Illustration.png';
import './home.css';

const Home = () => {
  return (
    <div className="Home">
      <div class="hero">
        <div class="hero-description">
          <div class="big-title">
            Best app for financial advices
          </div>
          <div>
            GFinance is the smart way to track and manage your financial life. Get industry-leading financial tools and
            personal attention from registered financial advisors.
          </div>
          <button class="text-button">
            <img src={textButton} alt="" />
          </button>
        </div>
        <div class="grid-image">
          <img src={illustration} alt="" />
        </div>
      </div>
      <div class="core-features-panel">
        <div class="core-features-title">
          <div class="big-title">
            Core Features Of Our App
          </div>
          We have multiple features to make you better experience
        </div>
        <div class="core-features-list">
          <div class="core-feature">
            1. We track the bills for you
          </div>
          <div class="core-feature">
            2. All your accounts are in one place
          </div>
          <div class="core-feature">
            3. Bill pay is free and takes only seconds.
          </div>
          <div class="core-feature">
            4. It’s fast, simple, and free
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
