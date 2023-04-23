import peopleGroup from './images/group-of-people-sitting-indoors-3184360.png';
import standingMan from './images/a-man-standing-in-an-office-7792811.png';
import women from './images/photo-of-women-at-the-meeting-3810789.png';
import './contact.css';

export default function Contact() {
    return (
        <div className="Contact">
            <div class="title align-center">
                Contact Us
            </div>
            <div class="align-center">
                Please submit this form
            </div>
            <form class="contact-form">
                <div class="grid">
                    <div class="g-c-1">
                        <div class="field">
                            <div> Name </div>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div class="field">
                            <div> Subject </div>
                            <input type="text" placeholder="Provide context" />
                        </div>
                    </div>
                    <div class="g-c-2">
                        <div class="field">
                            <div> Email </div>
                            <input type="text" placeholder="Enter your Email" />
                        </div>
                        <div class="field">
                            <div> Select subject </div>
                            <input type="text" placeholder="Select subject" />
                        </div>
                    </div>
                </div>
                <div class="message-field">
                    <div> Message </div>
                    <textarea name="message" id="message" cols="65" rows="8"></textarea>
                </div>
                <button class="rounded-button g-c-1">Submit</button>
            </form>
        </div>
    );
}
