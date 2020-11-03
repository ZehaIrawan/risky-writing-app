import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {

const wordGoalOption = [150,250,500,750,1000]

const [wordGoal,setWordGoal] = useState(wordGoalOption[2])

  return (
    <div>
      <h2>Don't stop typing, or all is lost.</h2>

    <div>
    <button onClick={() => setWordGoal(wordGoalOption[0])}>150</button>
    <button onClick={() =>setWordGoal(wordGoalOption[1])}>250</button>
    <button onClick={() => setWordGoal(wordGoalOption[2])}>500</button>
    <button onClick={() => setWordGoal(wordGoalOption[3])}>750</button>
    <button onClick={() => setWordGoal(wordGoalOption[4])}>1000</button>
  <h3>Goal : {wordGoal} Words</h3>
    </div>
      <Link to="/write">Start Writing</Link>
    </div>
  )
}

export default Landing