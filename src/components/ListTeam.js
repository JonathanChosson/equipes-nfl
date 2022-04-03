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
                <h2 className='main__article__h2'>Listes des équipes 2021</h2>
                {
                    teams.map((team, index) =>
                    <TeamCard key={index} teamUrl={team.$ref} />
                    )
                }
            </article>
        </main>
    );
};

export default ListTeam;