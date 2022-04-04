import axios from 'axios';
import React, { useEffect, useState} from 'react';
import '../style/TeamCard.css'

const TeamCard = ({teamUrl}) => {
    const [teamInfo, setTeamInfo] =  useState({});

    useEffect(()=>{
        async function axiosGet(){
            // console.log(teamUrl);
                let response = await axios.get(teamUrl);
                let setTeamStadeImage = ""
                if(response.data.venue.images.length !== 0){
                    setTeamStadeImage = response.data.venue.images[0].href
                }
                let team = {
                    teamName: response.data.shortDisplayName,
                    teamLogo: response.data.logos[0].href,
                    teamAbbreviation: response.data.abbreviation,
                    teamCompleteName: response.data.displayName,
                    teamCity: response.data.venue.address.city,
                    teamStadeName: response.data.venue.fullName,
                    teamStadeImage: setTeamStadeImage
                }
                setTeamInfo(team)
        }
        
            axiosGet()
    },[teamUrl])

    function handleClickFace(e){
        e.target.parentNode.classList.remove('flip-in-ver-right');
        e.target.parentNode.classList.add('flip-out-ver-right');
        setTimeout(function(){
            e.target.parentNode.classList.remove('flip-out-ver-right');
            e.target.parentNode.classList.add('invisible');
            e.target.parentNode.nextSibling.classList.remove('invisible');
            e.target.parentNode.nextSibling.classList.add('flip-in-ver-right');
        },450)
    }

    function handleClickDos(e){
        e.target.parentNode.classList.remove('flip-in-ver-right');
        e.target.parentNode.classList.add('flip-out-ver-right');
        setTimeout(function(){
            e.target.parentNode.classList.remove('flip-out-ver-right');
            e.target.parentNode.classList.add('invisible');
            e.target.parentNode.previousSibling.classList.remove('invisible');
            e.target.parentNode.previousSibling.classList.add('flip-in-ver-right');
        },450)
    }


    return (
        <div>
            <section className='section' onClick={handleClickFace} >
                <img className='section__img' src={teamInfo.teamLogo} alt={"Logo de " + teamInfo.TeamName} />
                <p className='section__p'>{teamInfo.teamName}</p>
            </section>
            <section className='section--info invisible' onClick={handleClickDos}>
                {teamInfo.teamStadeImage !== "" ? <img className='section__img' src={teamInfo.teamStadeImage} alt={"Stade de " + teamInfo.teamName} /> : ""}
                <div className='section--info__div'>
                    <p className='section--info__p bold'>{teamInfo.teamCompleteName}</p>
                    <p className='section--info__p'>{teamInfo.teamAbbreviation}</p>
                    <p className='section--info__p'>Stade : {teamInfo.teamStadeName}</p>
                    <p className='section--info__p'>Ville : {teamInfo.teamCity}</p>
                </div>
                
            </section>
        </div>
        
    );
};

export default TeamCard;