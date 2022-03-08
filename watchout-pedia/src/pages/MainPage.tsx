import React from "react";
import Footer from "../compoments/Footer";
import Header from "../compoments/Header";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingSection from "../features/movie/nowPlaying";
import styled from "@emotion/styled";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const MainPage :React.FC = () => {
    return (
        <div>
            <Header />
            <Main>
                <Container>
                    <LatestMovieSection />
                    <NowPlayingSection />

                </Container>
            </Main>
            <Footer />
        </div>
    )
}

export default MainPage