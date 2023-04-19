import React, { useState, useEffect } from 'react';

import axios from 'axios';
import './signup.css'
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import './signup.css';
import Navbar from './Navbar';
import { backendURLBase } from './urlParams';

const PageState = {
  Loading: Symbol("loading"),
  NotFound: Symbol("notfound"),
  TeamForm: Symbol("teamform"),
  Message: Symbol("message")
}

function Signup() {
  const [pageState, setPageState] = useState(PageState.Loading)
  const [cluedata, setClueData] = useState({data:{}});

  const [teamname, setTeamName] = useState('');
  let {clueURLStem} = useParams();

    useEffect(() => {
      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    }, []);

  
    useEffect(() => {

      async function getResults() {
        await axios(backendURLBase + 'api/clues/' + clueURLStem).then( results => {

          setClueData({data: results.data})
          setPageState(PageState.TeamForm)

        }).catch(err => {

          setClueData({});
          setPageState(PageState.NotFound)

        });
      }

      getResults()

    }, []);
    
    if(pageState === PageState.NotFound) {

      return (
        <p>Clue Not Found</p>
      )

    } else if(pageState === PageState.TeamForm) {
        
        return (
          <div>

          <h1>You Found A Clue!</h1>
          <form action="#" method="post" onSubmit={(e) => {

            e.preventDefault();

            async function post() {
              return await axios.post(backendURLBase + "api/auth/clue", {
                
                  name: teamname,
                  new_clue: clueURLStem
                
              }).then(results => {

                console.log(results);
                return true;
              }).catch(err => {

                if (err.response.status === 404) {
                  console.log("not found");
                  return false;
                } else {
                  console.log(err);
                  return false;
                }

              });

            }

            async function createTeam() {
              await axios.post(backendURLBase + "api/auth/signup", { 
                name: teamname,
                clues_found: []
              });
            }


            (async () => {
              let success = await post();

              if (!success) {
                // Create team
                console.log("create new team");
                await createTeam();
                await post();
              }

              setPageState(PageState.Message);

            })();

            }}>
            <label for="team-name">Team Name:</label>
            <input value = {teamname} onChange={e => setTeamName(e.target.value)} type="text" id="team-name" name="team-name" required></input>
            <button type="submit">Submit</button>

          </form>
          
          </div>
        )
      } else if (pageState === PageState.Message) {
        
        if (cluedata.data.message == "") {
          return (
            <div className="container">
              <h1>Response Recorded</h1>
            </div>
          )
        } else {
          return (
            <div className="container">
    
              <h1>Hint For Next QR Code...</h1>
              <div className="message">
                <p>{cluedata.data.message}</p>
              </div>
            </div>
          );
        }

        
      }
      else if (pageState === PageState.Loading) {
        return
      }

}

  

export default Signup;
