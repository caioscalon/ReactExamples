import React, {Component} from "react";

function MainContent() {
    const firstName = "Caio";
    const lastName = "Scalon";

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    const styles = {
        color: "black",
        fontSize: "30",
    }

    if (hours < 12) {
        styles.color = "green";
        timeOfDay = "morning";
    }
    else if (hours < 18) {
        styles.color = "yellow";
        timeOfDay = "afternoon";
    }
    else {
        styles.color = "blue";
        timeOfDay = "evening";
    }

    return (
        <div>
            <h1 style={styles}>
                Good {timeOfDay}, {firstName} {lastName}!
            </h1>
        </div>
    );
}

export default MainContent;