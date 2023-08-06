import { useEffect, useState } from "react";
import axios from "../../api/axios";
import MovieModal from "../MovieModal/MovieModal";
import {
    RowContainer, RowPosters, RowPoster, RowTitle
} from './Styled'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Row({ isLarge, title, id, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        fetchMovieData();

    },[fetchUrl]);

    const fetchMovieData = async () => {
      const request = await axios.get(fetchUrl);
      console.log(request)

      setMovies(request.data.results)
    };

    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected,setMovieSelected] = useState({});

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }


  return (
    <>
    {modalOpen && (
      <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
    )}
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >

          <RowPosters>
            {movies.map((movie)=>(
              <SwiperSlide>
                      <RowPoster
                        key={movie.id}
                        isLarge={isLarge ? 'true' : 'false'}
                        src={`https://image.tmdb.org/t/p/original/${
                            isLarge
                                ? movie.poster_path
                                : movie.backdrop_path
                        }`}
                        alt={movie.name}
                        onClick={()=>handleClick(movie)}
                      />
              </SwiperSlide>      
                  ))}
          </RowPosters>
              
      </Swiper>
    </RowContainer>
    </>
  )
}