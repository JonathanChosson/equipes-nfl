import axios from 'axios';
import React, { useEffect, useState} from 'react';
import '../style/TeamCard.css'

const TeamCard = ({teamUrl}) => {
    const [teamInfo, setTeamInfo] =  useState({});

    useEffect(()=>{
        async function axiosGet(){
            // console.log(teamUrl);
                let response = await axios.get(teamUrl);
                let teamStadeImage = response.data.venue.images[0].href ? response.data.venue.images[0].href : ""
                console.log(teamStadeImage);
                let team = {
                    teamName: response.data.shortDisplayName,
                    teamLogo: response.data.logos[0].href,
                    teamAbbreviation: response.data.abbreviation,
                    teamCompleteName: response.data.displayName,
                    teamCity: response.data.venue.address.city,
                    teamStadeName: response.data.venue.fullName,
                    // teamStadeImage: 
                }
                setTeamInfo(team)
        }
        
            axiosGet()
    },[teamUrl])

    function handleClickFace(e){
        console.log(e.target.parentNode.nextSibling);
        e.target.parentNode.classList.add('flip-out-ver-right');
        setTimeout(function(){
            e.target.parentNode.classList.add('invisible');
            e.target.parentNode.nextSibling.classList.remove('invisible');
            e.target.parentNode.nextSibling.classList.add('flip-in-ver-right');
        },450)
    }

    function handleClickDos(e){

    }


    return (
        <div>
            <section className='section' onClick={handleClickFace} >
                <img className='section__img' src={teamInfo.teamLogo} alt={"Logo de " + teamInfo.TeamName} />
                <p className='section__p'>{teamInfo.teamName}</p>
            </section>
            <section className='section--info invisible' onClick={handleClickDos}>
                <p>test</p>
            </section>
        </div>
        
    );
};

export default TeamCard;