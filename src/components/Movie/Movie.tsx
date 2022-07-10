import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { getMovie } from "../../APIs";
import { AppDispatch, Movie, RootState } from "../../Interface/Movie";
import { SET_LOADING } from "../../Redux/MoviesSlice";
import Header from "../Header";
import SkeletonDetailLoading from "../Loading/SkeletonDetailLoading";
import SkeletonLoading from "../Loading/SkeletonLoading";
export default function MovieDetail() {
  const { id } = useParams<{ id: string | undefined }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie>();
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.moviesReducer.status);

  useEffect(() => {
    console.log("dzo");
    dispatch(SET_LOADING(!loading));
    getMovie(id)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Thông báo",
          text: err.message,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(-1);
          }
        });
      });
    dispatch(SET_LOADING(!!loading));
  }, [id, loading]);

  return (
    <Container>
      
      <Background>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt=""
        />
      </Background>
      {loading && <SkeletonDetailLoading />}
      <ImageTitle>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
        />
      </ImageTitle>
      <Control>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupButton>
      </Control>
      <SubTitle>{movie?.release_date}</SubTitle>
      <Description>{movie?.overview}</Description>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 70vh;
  min-height: 170px;
  width: 25vw;
  min-width: 200px;
  margin-top: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Control = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);

  span {
    font-size: 24px;
    color: #fff;
  }
`;
const GroupButton = styled(AddButton)``;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 20px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  padding-bottom: 36px;
`;
