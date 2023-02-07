import React from "react";
import "./try_again.css";

const TryAgain = ({ words, characters, wpm, startAgain }) => {
    return (
        <div data-aos="fade-up" className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                <p>
                    <b>Characters:</b> <b className="result-text">{characters}</b>
                </p>
                <p>
                    <b>Words:</b> <b className="result-text">{words}</b>
                </p>
                <p>
                    <b>Speed:</b> <b className="result-text">{wpm} wpm</b>
                </p>
            </div>

            <div>
                <button
                    onClick={() => startAgain()}
                    className="end-buttons start-again-btn"
                >
                    Re-try
                </button>
            </div>
        </div>
    );
};

export default TryAgain;