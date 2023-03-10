import React from "react";
import TestContainer from "../test_container/test_container";
import "./challenge_section.css";

const ChallengeSection = ({
    selectedParagraph,
    testInfo,
    onInputChange,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    startAgain,
}) => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Show me How fast you are!
            </h1>
            <TestContainer
                testInfo={testInfo}
                selectedParagraph={selectedParagraph}
                onInputChange={onInputChange}
                words={words}
                characters={characters}
                wpm={wpm}
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                startAgain={startAgain}
            />
        </div>
    );
};

export default ChallengeSection;