import React from "react";
import { Jumbotron, Button, Card, CardDeck } from "react-bootstrap";
import background from "../images/landingpage.jpg";
import team from "../images/team.png";
import trust from "../images/trust.png";
import team1 from "../images/team1.png";
import ReactPlayer from "react-player";
import video from "../images/video.mp4";
import footer from "../images/ilustration.png";
import { Link } from "react-router-dom";

function Demo() {
    return (
        <div className="Demo">
            <div
                className="bg"
                style={{ backgroundImage: `url(${background})` }}
            >
                <Jumbotron>
                    <h1>Welcome To JUST4GIVING!</h1>
                    <p>
                        {" "}
                        <Link to={"/Signupneeder"}>
                            <Button className="btn-sm signup">
                                I Need Something
                            </Button>
                        </Link>
                        <Button>I Want To Donate Something</Button>
                    </p>
                </Jumbotron>

                <CardDeck className="cards">
                    <Card className="shadow-lg rounded card1">
                        <Card.Body>
                            <Card.Title id="card1h">Donate</Card.Title>
                            <Card.Text id="card1p">
                                Don't throw it away, give it away. Help others
                                to have a better life.
                            </Card.Text>
                            <Card.Img
                                style={{ width: "120px", height: "120px" }}
                                src={team}
                            />
                        </Card.Body>
                    </Card>
                    <Card className="shadow-lg rounded card2">
                        <Card.Body>
                            <Card.Title id="card2h">Help</Card.Title>
                            <Card.Text id="card2p">
                                We know you are strong but accepting help is its
                                own kind of strength.
                            </Card.Text>
                            <Card.Img
                                style={{ width: "120px", height: "120px" }}
                                src={trust}
                            />
                        </Card.Body>
                    </Card>
                    <Card className="shadow-lg rounded card3">
                        <Card.Body>
                            <Card.Title id="card3h">Connected</Card.Title>
                            <Card.Text id="card3p">
                                Stay connected. The world is full with nice
                                people. If you can't find one Be One!
                            </Card.Text>
                            <Card.Img
                                style={{ width: "120px", height: "120px" }}
                                src={team1}
                            />
                        </Card.Body>
                    </Card>
                </CardDeck>

                <div className="container">
                    <div className="player-wrapper">
                        <h2 id="videoh">Our Vision</h2>
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
                    <img className="bg2" src={footer} alt="bg2" />
                </div>
            </div>
        </div>
    );
}
export default Demo;
