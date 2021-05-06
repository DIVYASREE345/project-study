import React from "react";
import { Jumbotron, Button, Card, CardDeck } from "react-bootstrap";
import background from "../images/landingpage.jpg";
import team from "../images/team.png";
import trust from "../images/trust.png";
import team1 from "../images/team1.png";
import ReactPlayer from "react-player";
import video from "../images/video.mp4";
import footer from "../images/ilustration.png";
function Demo() {
    return (
        <div className="Demo">
            <div
                className="bg"
                style={{ backgroundImage: `url(${background})` }}
            >
                <Jumbotron>
                    <h1
                        style={{
                            fontSize: "50px",
                            color: "#E9D366",
                            textShadow: "2px 2px 4px #000000",
                        }}
                    >
                        Welcome To JUST4GIVING!
                    </h1>
                    <p style={{ marginTop: "2%", fontSize: "30px" }}>
                        <Button style={{ fontSize: "23px" }}>
                            I Need Something
                        </Button>

                        <Button style={{ fontSize: "23px" }}>
                            I Want To Donate Something
                        </Button>
                    </p>
                </Jumbotron>

                <CardDeck
                    style={{
                        marginLeft: "5%",
                        marginRight: "5%",
                        borderRadius: "60px 50px",
                    }}
                >
                    <Card
                        className="shadow-lg rounded"
                        style={{
                            width: "20rem",
                            backgroundColor: "lightblue",
                        }}
                    >
                        <Card.Body>
                            <Card.Title
                                style={{
                                    color: "white",
                                    fontSize: "35px",
                                    textShadow:
                                        "-1px 0 orange, 0 1px orange, 1px 0 orange, 0 -1px orange",
                                }}
                            >
                                Donate
                            </Card.Title>
                            <Card.Text
                                style={{
                                    color: "white",
                                    fontSize: "25px",
                                    textShadow: "2px 2px 4px #000000",
                                }}
                            >
                                Don't throw it away, give it away. Help others
                                to have a better life.
                            </Card.Text>
                            <Card.Img
                                style={{ width: "120px", height: "120px" }}
                                variant="top"
                                src={team}
                            />
                        </Card.Body>
                    </Card>
                    <Card
                        className="shadow-lg rounded"
                        style={{
                            width: "20rem",
                            backgroundColor: "#E9D366",
                        }}
                    >
                        <Card.Body>
                            <Card.Title
                                style={{
                                    color: "white",
                                    fontSize: "35px",
                                    textShadow:
                                        "-1px 0 orange, 0 1px orange, 1px 0 orange, 0 -1px orange",
                                }}
                            >
                                Help
                            </Card.Title>
                            <Card.Text
                                style={{
                                    color: "white",
                                    fontSize: "25px",
                                    textShadow: "2px 2px 4px #000000",
                                }}
                            >
                                We know you are strong but accepting help is its
                                own kind of strength.
                            </Card.Text>
                            <Card.Img
                                style={{ width: "120px", height: "120px" }}
                                variant="top"
                                src={trust}
                            />
                        </Card.Body>
                    </Card>
                    <Card
                        className="shadow-lg rounded"
                        style={{
                            width: "20rem",
                            backgroundColor: "lightblue",
                        }}
                    >
                        <Card.Body>
                            <Card.Title
                                style={{
                                    color: "white",
                                    fontSize: "35px",
                                    textShadow:
                                        "-1px 0 orange, 0 1px orange, 1px 0 orange, 0 -1px orange",
                                }}
                            >
                                Connected
                            </Card.Title>
                            <Card.Text
                                style={{
                                    color: "white",
                                    fontSize: "25px",
                                    textShadow: "2px 2px 4px #000000",
                                }}
                            >
                                Stay connected. The world is full with nice
                                people. If you can't find one Be One!
                            </Card.Text>
                            <Card.Img
                                style={{ width: "120px", height: "120px" }}
                                variant="top"
                                src={team1}
                            />
                        </Card.Body>
                    </Card>
                </CardDeck>
                <div className="container">
                    <div className="player-wrapper">
                        <h2>Our Vision</h2>
                        <ReactPlayer
                            className="react-player"
                            width="80%"
                            height="650px"
                            controls={true}
                            url={video}
                        />
                    </div>
                </div>

                <div>
                    <img
                        className="bg2"
                        style={{
                            width: "60%",
                            height: "400px",
                            marginBottom: "0",
                        }}
                        src={footer}
                        alt="bg2"
                    />
                </div>
            </div>
        </div>
    );
}
export default Demo;
