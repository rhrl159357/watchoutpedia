import React from 'react';
import styled from '@emotion/styled';

import useOnTheAirTv from './useOnTheAir';
import Card from '../../../compoments/Card';
import Slider from 'react-slick';

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const OnTheAirTvSection: React.FC = () => {
  const { data: onTheAirTvResponse, isLoading } = useOnTheAirTv();

 

  return (
    <Base>
      <Title>실시간</Title>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          
              onTheAirTvResponse?.data?.results.map(tv => (
                <Card
                  key={tv.id}
                  linkUrl={`/tv/${tv.id}`}
                  title={tv.name}
                  posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
                  voteAverage={tv.vote_average}
                  year=""
                />
              ))
           
        )
      }
    </Base>
  )
}

export default OnTheAirTvSection;