import React from "react";
import styled from "@emotion/styled";
import useNowPlayingMovie from "./useNowPlayingMovie";

import Card from "../../../compoments/Card";
import Slider from "../../../compoments/Slider";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;



const NowPlayingSection: React.FC = () => {
    const {data, isLoading} = useNowPlayingMovie();

    const getYear = (date : string) => date.split('-')[0];


    return (
        <Base>
            <Title>최근 개봉작</Title>
            {
                isLoading || !data ? (
                    <div>Loading...</div>
                ) : (
                   
                           data.data.results.map(movie => (
                            <Card 
                            key={movie.id}
                            linkUrl={`/movie/${movie.id}`} 
                            posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`} 
                            title={movie.title} 
                            voteAverage={movie.vote_average} 
                            year={getYear(movie.release_date)} />
                           ))
                       
                )
            }
        </Base>
    )
}

export default NowPlayingSection;