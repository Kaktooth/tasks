import peopleGroup from './images/group-of-people-sitting-indoors-3184360.png';
import standingMan from './images/a-man-standing-in-an-office-7792811.png';
import women from './images/photo-of-women-at-the-meeting-3810789.png';
import './about.css';

export default function About() {
    return (
        <div className="About">
            <div class="grid-panel panel-gray under-nav-panel align-left">
                <div class="g-c-1">
                    <div class="first-column-grid-nav-option align-left">
                        About us
                    </div>
                    <div class="first-column-grid-title align-left">
                        Our apps solve problems
                    </div>
                    <br />
                    <div class="align-left">
                        Our apps solve problems by providing innovative solutions to common challenges faced by people every day.
                    </div>
                </div>
                <div class="g-c-2">
                    <img src={peopleGroup} alt="" />
                </div>
            </div>
            <div class="grid-panel">
                <div class="g-c-1">
                    <img src={standingMan} alt="" />
                </div>
                <div class="g-c-2">
                    <div class="first-column-grid-nav-option align-left">
                        Our Mission
                    </div>
                    <div class="first-column-grid-title align-left">
                        Providing innovative solutions
                    </div>
                    <br />
                    <div class="align-left">
                        We believe that by staying ahead of the curve and embracing new technologies, we can create products and services that are not just good, but great - products that will delight our customers and exceed their expectations.
                    </div>
                </div>
            </div>
            <div class="grid-panel panel-gray under-nav-panel align-left">
                <div class="g-c-1">
                    <div class="first-column-grid-nav-option align-left">
                        Our Vision
                    </div>
                    <div class="first-column-grid-title align-left">
                        Inspire, Innovate, Share
                    </div>
                    <br />
                    <div class="align-left">
                        By inspiring and encouraging employees to innovate, and then sharing their successes, a company can create a culture of creativity, collaboration, and growth.
                    </div>
                </div>
                <div class="g-c-2">
                    <img src={women} alt="" />
                </div>
            </div>
        </div>
    );
}
