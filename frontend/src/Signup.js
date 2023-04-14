import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import './signup.css'

const URLBase = "http://localhost:2400/"

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

      async function getResults() {
        await axios(URLBase + 'api/clues/' + clueURLStem).then( results => {

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
              return await axios.post(URLBase + "api/auth/clue", {
                
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
              await axios.post(URLBase + "api/auth/signup", { 
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
            <h1>Response Recorded</h1>
          )
        }
        return (
          <div>
            <h1>Hint for next clue:</h1>
            <p>{cluedata.data.message}</p>
          </div>
        )
      } else if (pageState === PageState.Loading) {
        return
      }

  



}

export default Signup;