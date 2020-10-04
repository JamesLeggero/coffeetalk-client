import React, { useRef, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import io from "socket.io-client";
import axios from 'axios'
import Container from 'react-bootstrap/Container'

const Room = (props) => {
    const userVideo = useRef();
    const partnerVideo = useRef();
    const peerRef = useRef();
    const socketRef = useRef();
    const otherUser = useRef();
    const userStream = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
            userVideo.current.srcObject = stream;
            userStream.current = stream;

            socketRef.current = io.connect("/");
            socketRef.current.emit("join room", props.match.params.roomID);

            socketRef.current.on('other user', userID => {
                callUser(userID);
                otherUser.current = userID;
            });

            socketRef.current.on("user joined", userID => {
                otherUser.current = userID;
            });

            socketRef.current.on("offer", handleRecieveCall);

            socketRef.current.on("answer", handleAnswer);

            socketRef.current.on("ice-candidate", handleNewICECandidateMsg);
        });

    }, []);

    function callUser(userID) {
        peerRef.current = createPeer(userID);
        userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
    }

    function createPeer(userID) {
        const peer = new RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                },
                {
                    urls: 'turn:numb.viagenie.ca',
                    credential: 'muazkh',
                    username: 'webrtc@live.com'
                },
            ]
        });

        peer.onicecandidate = handleICECandidateEvent;
        peer.ontrack = handleTrackEvent;
        peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

        return peer;
    }

    function handleNegotiationNeededEvent(userID) {
        peerRef.current.createOffer().then(offer => {
            return peerRef.current.setLocalDescription(offer);
        }).then(() => {
            const payload = {
                target: userID,
                caller: socketRef.current.id,
                sdp: peerRef.current.localDescription
            };
            socketRef.current.emit("offer", payload);
        }).catch(e => console.log(e));
    }

    function handleRecieveCall(incoming) {
        peerRef.current = createPeer();
        const desc = new RTCSessionDescription(incoming.sdp);
        peerRef.current.setRemoteDescription(desc).then(() => {
            userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
        }).then(() => {
            return peerRef.current.createAnswer();
        }).then(answer => {
            return peerRef.current.setLocalDescription(answer);
        }).then(() => {
            const payload = {
                target: incoming.caller,
                caller: socketRef.current.id,
                sdp: peerRef.current.localDescription
            }
            socketRef.current.emit("answer", payload);
        })
    }

    function handleAnswer(message) {
        const desc = new RTCSessionDescription(message.sdp);
        peerRef.current.setRemoteDescription(desc).catch(e => console.log(e));
    }

    function handleICECandidateEvent(e) {
        if (e.candidate) {
            const payload = {
                target: otherUser.current,
                candidate: e.candidate,
            }
            socketRef.current.emit("ice-candidate", payload);
        }
    }

    function handleNewICECandidateMsg(incoming) {
        const candidate = new RTCIceCandidate(incoming);

        peerRef.current.addIceCandidate(candidate)
            .catch(e => console.log(e));
    }

    function handleTrackEvent(e) {
        partnerVideo.current.srcObject = e.streams[0];
    };

    const [location, setLocation] = useState({})
    const [farmer, setFarmer] = useState({})
    const [roaster, setRoaster] = useState({})

    // const farmerLoad = useLocation()
    // console.log(farmerLoad.state)

    useEffect(() => {
        async function weatherHit() {
            try {
                const farmerID = window.location.href.slice(-48, -24)
                console.log(farmerID)
                const roasterID = window.location.href.slice(-24)

                const farmerResponse = await axios.get(`https://jml-coffeetalk-api.herokuapp.com/farmers/${farmerID}`)
                const farmerData = farmerResponse.data
                setFarmer(farmerData)
                const roasterResponse = await axios.get(`https://jml-coffeetalk-api.herokuapp.com/roasters/${roasterID}`)
                const roasterData = roasterResponse.data
                setRoaster(roasterData)
                // setFarmer(farmerLoad.state)
                // console.log(farmerData)

                // const weatherResponse = await axios.get(`https://jml-coffeetalk-api.herokuapp.com/weather/${farmerData.farmerLocation}`)
                const weatherResponse = await axios.get(`https://jml-coffeetalk-api.herokuapp.com/weather/${farmerData.farmerLocation}`)
                const weatherData = await weatherResponse.data
                // console.log(weatherData.weather[0])
                await setLocation({ ...weatherData })
              } catch (error) {
                console.error(error)
              }
        };
        weatherHit()
    }, [])

    

    // useEffect(() => {
    //     async function fetchFarmer() {
    //         const response = await axios.get(`https://jml-coffeetalk-api.herokuapp.com/farmers/${props.farmer._id}`)
    //         setFarmer(response.data)
    //         // console.log(response.data)
    //     }
    //     fetchFarmer()
    // }, [])


    return (
        <div>
            <Container className='text-center'>
            {Object.keys(location).length > 0 &&
            <div>
        
            
            <h1>{roaster.username} is coffeetalking with {farmer.username}</h1>
            <h2>Farmer Location: {location.name}, {location.sys.country} </h2>
            <h3>{Math.round(location.main.temp)}&deg; F, currently {location.weather[0].description}</h3>
            </div>
            }
            
            <video autoPlay ref={userVideo} muted>
                
            </video>
            
            <video autoPlay ref={partnerVideo}>
                    Waiting for {farmer.username}
            
                
                </video>
            
                </Container>
        </div>
    );
};

export default Room;