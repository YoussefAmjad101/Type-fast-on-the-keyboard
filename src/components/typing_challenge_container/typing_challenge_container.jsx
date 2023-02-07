import React from "react";
import ChallengeDetailsCard from "../challenge_details_card/challenge_details_card";
import TypingChallenge from "../typing_challenge/typing_challenge";
import "./typing_challenge_container.css";

const TypingChallengeContainer = ({
    selectedParagraph,
    testInfo,
    onInputChange,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words} />

                {/* Characters Typed */}
                <ChallengeDetailsCard
                    cardName="Characters"
                    cardValue={characters}
                />

                {/* Mistakes */}
                <ChallengeDetailsCard cardName="WPM" cardValue={wpm} />
            </div>

            <div className="typewriter-container">
                <TypingChallenge
                    testInfo={testInfo}
                    selectedParagraph={selectedParagraph}
                    onInputChange={onInputChange}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                />
            </div>
        </div>
    );
};

export default TypingChallengeContainer;