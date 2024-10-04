import React, { useState } from 'react';
import './CommSupport.css';

const CommunitySupport = () => {
  // State to manage the visibility of each section
  const [showRedditDiscord, setShowRedditDiscord] = useState(false);
  const [showProfessionalGuidance, setShowProfessionalGuidance] = useState(false);
  const [showMentalCheckIns, setShowMentalCheckIns] = useState(false);
  const [showHelplines, setShowHelplines] = useState(false);

  return (
    <div className="community-support-page">
      <header className="header">
        <h2>Community Support for Your Well-Being</h2>
        <p>Connect with resources, peers, and professionals.</p>
      </header>

      <div className="container">
        {/* Reddit and Discord Communities Section */}
        <div className="section">
          <h3 onClick={() => setShowRedditDiscord(!showRedditDiscord)} className="dropdown-header">
            Online Communities (Reddit & Discord)
            {showRedditDiscord ? ' ▲' : ' ▼'}
          </h3>
          {showRedditDiscord && (
            <div className="dropdown-content">
            <p>Engage with others through various mental health-focused communities on Reddit and Discord. Discuss your challenges, share tips, and get support from peers.</p>

                <div classNamw="dropdown-section">
                    <div className="platform-section">
                    <h4>Reddit Communities</h4>
                    <ul>
                        <li><a href="https://www.reddit.com/r/mentalhealth/" target="_blank" rel="noopener noreferrer">Reddit - Mental Health</a></li>
                        <li><a href="https://www.reddit.com/r/depression/" target="_blank" rel="noopener noreferrer">Reddit - Depression Support</a></li>
                        <li><a href="https://www.reddit.com/r/anxiety/" target="_blank" rel="noopener noreferrer">Reddit - Anxiety Support</a></li>
                    </ul>
                    </div>
                
                    <div className="platform-section">
                    <h4>Discord Communities</h4>
                    <ul>
                        <li><a href="https://discord.gg/mentalhealth" target="_blank" rel="noopener noreferrer">Discord - Mental Health Community</a></li>
                        <li><a href="https://discord.gg/anxiety" target="_blank" rel="noopener noreferrer">Discord - Anxiety Support</a></li>
                    </ul>
                    </div>
                </div>
                
          </div>
          
          )}
        </div>

        {/* Professional Guidance Section */}
        <div className="section">
          <h3 onClick={() => setShowProfessionalGuidance(!showProfessionalGuidance)} className="dropdown-header">
            Professional Guidance
            {showProfessionalGuidance ? ' ▲' : ' ▼'}
          </h3>
          {showProfessionalGuidance && (
            <div className="dropdown-content">
              <p>Get tips, advice, and information from mental health professionals.</p>
              <ul>
                <li><a href="#">Managing Stress and Anxiety</a></li>
                <li><a href="#">Self-Care for Mental Health</a></li>
                <li><a href="#">Mindfulness Practices</a></li>
                <li><a href="#">Finding the Right Therapist</a></li>
              </ul>
            </div>
          )}
        </div>

        {/* Mental Health Check-Ins Section */}
        <div className="section">
          <h3 onClick={() => setShowMentalCheckIns(!showMentalCheckIns)} className="dropdown-header">
            Mental Health Check-Ins
            {showMentalCheckIns ? ' ▲' : ' ▼'}
          </h3>
          {showMentalCheckIns && (
            <div className="dropdown-content">
              <p>Quickly check in with your emotional well-being. Track your mood and progress over time.</p>
              <form>
                <label htmlFor="mood">How are you feeling today?</label><br />
                <input type="radio" name="mood" value="Good" /> Good<br />
                <input type="radio" name="mood" value="Okay" /> Okay<br />
                <input type="radio" name="mood" value="Bad" /> Bad<br /><br />
                <label htmlFor="notes">Notes (Optional):</label><br />
                <textarea name="notes" rows="4" cols="50"></textarea><br /><br />
                <input type="submit" value="Submit Check-In" />
              </form>
            </div>
          )}
        </div>

        {/* Crisis Support and Indian Helplines Section */}
        <div className="section">
          <h3 onClick={() => setShowHelplines(!showHelplines)} className="dropdown-header">
            Crisis Support and Indian Helplines
            {showHelplines ? ' ▲' : ' ▼'}
          </h3>
          {showHelplines && (
            <div className="dropdown-content">
              <p>If you're in an urgent crisis, please reach out to one of the helplines below for immediate assistance.</p>
              <div className="helpline">
                <p><strong>Indian Helplines:</strong></p>
                <ul>
                  <li><strong>Kiran Helpline (Mental Health):</strong> 1800-599-0019</li>
                  <li><strong>Vandrevala Foundation (Emotional Distress):</strong> 9999-666-555</li>
                  <li><strong>Snehi (Counseling Helpline):</strong> 91-22-25230511</li>
                  <li><strong>iCall (Mental Health Support):</strong> 9152987821</li>
                  <li><strong>Roshni Helpline (Suicide Prevention):</strong> 91-4066202000</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunitySupport;