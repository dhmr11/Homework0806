import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";

function DetailPage() {
    // params 가져와 movieId에 넣기
    const { movieId } = useParams();

    // useState를 통해 movie 객체 생성
    const [movie, setMovie] = useState({});

    // 영화 정보 가져오는 함수
    const fetchMovieData = async () => {
        const request = await axios.get(`/movie/${movieId}`);
        setMovie(request.data);
    };

    // useEffect를 통해 movieId가 바뀔때마다 fetchMovieData를 실행한다.
    useEffect(() => {
        fetchMovieData();
    }, [movieId]);

    console.log(movie);
    const renderMovieDetail = () => {
        return !movie ? (
            <S.MovieTitle>로딩중..</S.MovieTitle>
        ) : (
            <>
                <S.MovieTitle>{movie.title}</S.MovieTitle>
                <S.MovieImg
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt="poster"
                />
                <S.MovieContent>{movie.overview}</S.MovieContent>
            </>
        );
    };

    return <S.SearchContainer>{renderMovieDetail()}</S.SearchContainer>;
}
export default DetailPage;
