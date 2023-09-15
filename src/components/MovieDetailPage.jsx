import Tv from "../assets/tv.png";
import Home from "../assets/images/Home.svg";
import Video from "../assets/images/Movie Projector.svg";
import TvScreen from "../assets/images/TV Show.svg";
import Calendar from "../assets/images/Calendar.svg"

const MovieDetailPage = () => {
  return (
    <div className=" ">
      <div className=" flex mt-10 ">
        <img src={Tv} alt="" />
        <p className="font-semibold text-2xl text-zinc-950 mx-5 mt-2">
          Movie Box
        </p>
      </div>
      <div className="  text-zinc-950 ">
        <div className=" flex my-10">
          <img src={Home} alt="" />
          <p>Home</p>
        </div>
        <div className=" flex ">
          <img src={Video} alt="" />
          <p>Movies</p>
        </div>
        <div className="flex ">
          <img src={TvScreen} alt="" />
          <p>TV Series</p>
        </div>
              <div className="flex ">
                  <img src={Calendar} alt="" />
          <p>Upcoming</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
