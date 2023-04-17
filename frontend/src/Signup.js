import React, { useState } from 'react';
import {useParams} from 'react-router-dom';

import './signup.css'

function Signup() {

    let {clueUrlStem} = useParams();
return (
    <div>
    <h1>Team Registration</h1>
    <p>{clueUrlStem}</p>
    <form action="#" method="post">
      <label for="team-name">Team Name:</label>
      <input type="text" id="team-name" name="team-name" required></input>
      <button type="submit">Submit</button>
    </form>
  </div>
)


}

export default Signup;