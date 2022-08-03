import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';
import '../style/ListTeam.css'

const ListTeam = () => {
    const [teams, setTeams] = useState([]);

    useEffect(function(){
        axios.get("https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=40")
        .then((response) => setTeams(response.data.items))
    }, [])


    return (
        <main className='main'>
            <article className='main__article'>
                {
                    teams.map((team, index) =>
                    // console.log("https"+ team.$ref.slice(4))
                    <TeamCard key={index} teamUrl={"https"+ team.$ref.slice(4)} />
                    )
                }
            </article>
        </main>
    );
};

export default ListTeam;