import React, {useState,useEffect } from "react";
import Axios from "axios";
import { Container, Col, Row } from "reactstrap";

import './style.css';
import Gameheader from "./gameheader";
// import Body from "./body";
import Footer from "./footer";
import Login from "./login";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
const Game = () => {
   
    let iflogin = localStorage.getItem('islogin').replace(/"/g, "");
    // console.log(iflogin);
    //11
    const apiurl= "https://cwscoring.cricwick.net/api/v4/series/162/squad/717";
    const apiurl2="https://cwscoring.cricwick.net/api/v4/series/162/squad/724";
    const [players1,setPlayers1]= useState([]);
    const [players2,setPlayers2]= useState([]);
    const [players3,setPlayers3]= useState([]);
    const [coin,setCoin]=useState(10000);

    const fetchPlayers = async () => {
      const {data} = await Axios.get(apiurl,{});

      const players = data;
      // console.log(JSON.stringify(playersData));
      // console.log(playersData);
      // console.log(players.length);
      const PakPlayers = players.map(
        playersData=>(
          {
            PlayerName: playersData.name,
            PlayerNname:playersData.short_name,
            PlayerID: playersData.id,
            PlayerPic:playersData.full_display_picture_url, 
            PlayerRole:playersData.playingrole,
            PlayerBattingStyle:playersData.batting,
            PlayerBowlingStyle:playersData.bowling,
            playerAge:playersData.age,
            PlayerTeam:'Pakistan',
          }
        )
      );
          setPlayers1(PakPlayers);
          // console.log(players1.length);
          // console.log(players1);

          // console.log(PakPlayers.length);
          console.log(JSON.stringify(players1));
          
    }

    useEffect(() => {
      fetchPlayers();
    }, []);
    const fetchPlayers2 = async () => {
    const {data} = await Axios.get(apiurl2,{});
    const players12 = data;
    // console.log(JSON.stringify(data));
    // console.log(data.length);
    const InPlayers = players12.map(
      playersData=>(
        {
          PlayerName: playersData.name,
          PlayerNname:playersData.short_name,
          PlayerID: playersData.id,
          PlayerPic:playersData.full_display_picture_url, 
          PlayerRole:playersData.playingrole,
          PlayerBattingStyle:playersData.batting,
          PlayerBowlingStyle:playersData.bowling,
          playerAge:playersData.age,
          PlayerTeam:'India',
        }
      )
    );
    setPlayers2(InPlayers);
    console.log(players2);
    // console.log(players2.length);
    // console.log(players2);
      }
      useEffect(() => {
        fetchPlayers2();
      }, []);
    //  if(iflogin){<h1>YES login</h1>}
    // const navigate = useNavigate();
    // const selectedplayer=[];
    function handleRemove(id) {
      const newList = players1.filter((item) => item.PlayerID !== id);
     console.log(newList);

      const newList1 = players1.filter((item) => item.PlayerID === id);
      const changecoin=coin-id;
      setCoin(changecoin);
      // const selectedplayer= [...players3,newList1];
      // x.unshift('a', 'b');
      // console.log(newList1);
      // console.log(JSON.stringify(newList1));
      // console.log(newList1.length);
      players3.push(newList1);
      // players3=players3.flat(Infinity);
      // players3=JSON.parse(players3);
          // console.log(players3.length);
      // console.log(players3);
      // console.log(players3[0]);
      // var alltrend = doc["trendsByDateList"][0]["trendsList"];//[0]["title"];
      // var users = players3.map(o => o.PlayerName)

      // const usersCollection = [].concat(...users)
      
      // console.log(usersCollection)
      // console.log(players3[0].PlayerName);
      console.log(players3[0][0]);

      setPlayers1(newList);
      setPlayers3(players3);
    }

    function handleRemove2(id) {
      const newList2 = players2.filter((item) => item.PlayerID !== id);
      const newList3 = players2.filter((item) => item.PlayerID === id);
      const changecoin=coin-id;
      setCoin(changecoin);
      players3.push(newList3);
      setPlayers2(newList2);
      setPlayers3(players3);
    }

    function handleRemove3(id) {
      //removing selected player from list
      const newList4 = players3.filter((item) => item[0].PlayerID !== id);
    //  console.log(item[0][0].PlayerID);
    const changecoin=coin+id;
       const newList5 = players3.filter((item) => item[0].PlayerID === id);
       (newList5[0][0].PlayerTeam==="Pakistan")? players1.unshift(newList5[0][0]):players2.unshift(newList5[0][0])
       console.log(newList5);
      setCoin(changecoin);
      setPlayers3(newList4);
      setPlayers2(players2);
      setPlayers1(players1);
    }
    return (
         
      <div >
          {
          iflogin==='true'? 
          <div className="main">
            {/* Pakistan Team Players */}
            <Gameheader></Gameheader>
            <div className="game">
            <div className="coins">
                <h1>Your Coins : <span className="cointext">{coin} C</span> </h1>
            </div>
            <div className="team1">
              
            <Container fluid>
            <h1 className="text-success text-center">Pakistan Cricket Team ({players1.length})</h1>
            <Row>
            {players1.map(player => (

            <Col lg="auto" md="auto" xs="auto" key={player.PlayerID}>

              <Card className="mt-4 mb-1">
                    <CardImg className="card1img" top height="250" width="100%" src={player.PlayerPic} onClick={() => handleRemove(player.PlayerID)} />
                    <CardBody className="text-center text-dark">
                      <CardTitle><h2>{player.PlayerNname}</h2></CardTitle>
                      <CardText className="secondary">
                        <hr></hr>
                         <h3 class="text-primary">{player.PlayerRole}</h3>
                         <hr></hr>
                         <h4 class="text-danger"> Worth: {player.PlayerID} C</h4> 

                      </CardText>
                    </CardBody>
                  </Card>
            
            </Col>
            
            ))}
            </Row>
            </Container>
             </div>

              <div className="team2">
                {/* Indian Team Players */}
              <Container fluid>
            <h1 className="text-success text-center">Indian Cricket Team ({players2.length})</h1>
            <Row>
            {players2.map(player => (

            <Col lg="auto" md="auto" xs="auto" key={player.PlayerID}>

              <Card className="mt-4 mb-1">
                    <CardImg className="card1img" top height="250" width="100%" src={player.PlayerPic} onClick={() => handleRemove2(player.PlayerID)} />
                    <CardBody className="text-center text-dark">
                      <CardTitle><h2>{player.PlayerNname}</h2></CardTitle>
                      <CardText className="secondary">
                        <hr></hr>
                         <h3 class="text-primary">{player.PlayerRole}</h3>
                         <hr></hr>
                         <h4 class="text-danger"> Worth: {player.PlayerID} C</h4> 

                      </CardText>
                    </CardBody>
                  </Card>
            
            </Col>
            
            ))}
            </Row>
            </Container>
              </div>

              <div className="selectedteam">

              <Container fluid>
                {/* Selected Team Players */}
            <h1 className="text-success text-center">Your Selected Team ({players3.length})</h1>
            <Row>
            {players3.map(player => (

            <Col lg="auto" md="auto" xs="auto" key={player[0].PlayerID}>

              <Card className="mt-4 mb-1">
                    <CardImg className="card2img" top height="250" width="100%" src={player[0].PlayerPic} onClick={() => handleRemove3(player[0].PlayerID)}/>
                    <CardBody className="text-center text-dark">
                      <CardTitle><h2>{player[0].PlayerNname}</h2></CardTitle>
                      <CardText className="secondary">
                        <hr></hr>
                         <h3 class="text-primary">{player[0].PlayerRole}</h3>
                         <hr></hr>
                         <h4 class="text-danger"> Worth: {player[0].PlayerID} C</h4> 

                      </CardText>
                    </CardBody>
                  </Card>
            
            </Col>
            
            ))}
            </Row>
            </Container>
              </div>


             </div>

            <Footer></Footer>
            </div> : <Login/>}
          
      </div>
      
  
    );
  };
  
  export default Game;