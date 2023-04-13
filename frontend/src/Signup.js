import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import './signup.css'

function Signup() {
  const [cluedata, setClueData] = useState({data:{}});
  const [teamname, setTeamName] = useState('');

  let clueExists = cluedata.data !== undefined;

  let {clueURLStem} = useParams();



  
    useEffect(() => {
      

      async function getResults() {
        await axios('http://localhost:2400/api/clues/' + clueURLStem).then( results => {
          setClueData({data: results.data})
        
        }).catch(err => {
          setClueData({});
        });

        console.log(cluedata.data);
        
        
      }
      getResults()
    }, []);
    
    
    if(clueExists) {
        
        return(
        <div>

        <h1>Team Registration</h1>
        <form action="#" method="post" onSubmit={(e) => {

          e.preventDefault();

          async function post() {
            await axios.post("/api/auth/clue", {
              
                "name": teamname,
                "new_clue":clueURLStem
              
            }).then(results => {
              console.log(results);
            });
          }
          post();

          }}>
          <label for="team-name">Team Name:</label>
          <input value = {teamname} onChange={e => setTeamName(e.target.value)} type="text" id="team-name" name="team-name" required></input>
          <button type="submit">Submit</button>
        </form>
        
        </div>)
      }

      else {

        return(

          <p> This clue does not exist</p>

        )

      }

  



}

export default Signup;