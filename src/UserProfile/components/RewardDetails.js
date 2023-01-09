import React from "react";
import { default as flyoLogo } from "../../images/flyokart-plane-svg.svg";
import Fade from "react-reveal/Fade";
import "./RewardDetails.css";

const RewardDetails = () => {
  return (
    <div className="RewardDetailsContainer">
      <Fade top cascade duration={500}>
        <div className="rewardsDisplaySection">
          <div className="flyoRewardsLogo">
            FlyOkart <br></br>
            {/* <img src={flyoLogo} alt="plane" className="rewardslogoImgTag" />*/}
            <span className="rewardslogoSpan">Rewards</span>
          </div>
          <div className="rewardsPointsAndTierDisplay">
            <div className="rewardspointsDisplay">
              500<br></br>
              <span className="rewardspointsDisplaySpan">Points</span>
            </div>
            <div className="rewardstierDisplay">
              Tier<br></br>
              <span className="rewardstierDisplaySpan">Bronze</span>
            </div>
            <div className="rewardsMedalDisplay">
              <div className="bronzeMedal">
                <i class="fas fa-medal"></i>
                <p className="medalTierText">Bronze</p>
              </div>
              <div className="silverMedal">
                <i class="fas fa-medal"></i>
                <p className="medalTierText">Silver</p>
              </div>
              <div className="goldMedal">
                <i class="fas fa-medal"></i>
                <p className="medalTierText">Gold</p>
              </div>
              <div className="platinumMedal">
                <i class="fas fa-medal"></i>
                <p className="medalTierText">Platinum</p>
              </div>
            </div>
          </div>
          <div className="rewardsPrompt">
            Make a booking today and earn 1 point per dollar spent on flights
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default RewardDetails;
