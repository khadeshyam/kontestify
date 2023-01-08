import React from 'react';
import Scrollbar from './Scrollbar';
import Loader from './Loader';

  
const renderContests = (contests) => {
  const cardsOfContest = contests.map((contest) => {
    const startingTime = new Date(contest.start_time).toLocaleString();
    const endingTime = new Date(contest.end_time).toLocaleString();
    return (
      <div className="card" key = {contest.url}>
        <div className="card-body">
          <h5 className="card-title">{contest.name}</h5>
          <div>Starts at : {startingTime}</div>
          <div>Ends on : {endingTime}</div>
         {contest.site && <div>Platform : {contest.site}</div>}
          <a href={contest.url} rel="noreferrer" className="btn btn-primary m-2 card-link">Go to contest</a>
        </div>
      </div>
    )
  })
  return cardsOfContest;
} 

function Contests({contests,loading,handlePlatformClick,platform}) {
  return (
    <div>
    <Scrollbar handlePlatformClick={handlePlatformClick} />
    <div className="container-fluid" >
      <div className="row">
        {loading?<Loader/>
          :renderContests(contests)
        }
      </div>
    </div>
    </div>
  )
}

export default Contests
