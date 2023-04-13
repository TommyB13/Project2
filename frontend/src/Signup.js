import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import './signup.css'

function Signup() {
  const [cluedata, setClueData] = useState({data:{}});
  let clueExists = cluedata.data !== undefined;

  let {clueURLStem} = useParams();

  console.log(clueURLStem);
    useEffect(() => {
      
      async function getResults() {
        await axios('http://localhost:2400/api/clues/' + clueURLStem).then( results => {
          setClueData({data: results.data})
        
        }).catch(err => {
          setClueData({});
        });
        
        
      }
      getResults()
    }, []);
    
    
    if(clueExists) {
        
        return(
        <div>

        <h1>Team Registration</h1>
        <form action="#" method="post">
          <label for="team-name">Team Name:</label>
          <input type="text" id="team-name" name="team-name" required></input>
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