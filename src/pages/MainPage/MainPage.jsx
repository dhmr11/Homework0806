import styled from 'styled-components';
import Banner from '../../components/MainPage/Banner';
import Row from '../../components/MainPage/Row';
import requests from "../../api/requests";

export const Container = styled.div`
  width: 100%;
`
export default function MainPage() {
  return (
    <Container>
      <Banner />
      <Row
          title="NETFLIX ORIGINALS"
          id="NO"
          fetchUrl={requests.fetchNetflixOriginals}
          isLarge
      />
      <Row
          title="Trending Now"
          id="TN"
          fetchUrl={requests.fetchTrending}
          
      />
      <Row 
            title="Top Rated"
            id="TR" 
            fetchUrl={requests.fetchTopRated} 
      />
      <Row
          title="Action Movies"
          id="AM"
          fetchUrl={requests.fetchActionMovies}
      />
      <Row
          title="Comnedy Movies"
          id="CM"
          fetchUrl={requests.fetchComedyMovies}
      />
    </Container>
  )
}