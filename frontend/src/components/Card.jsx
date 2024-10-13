import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const r = +movie.rating;
  // ratinge göre renk belirle
  const color =
    r > 9
      ? "blue"
      : r > 7.5
      ? "#04ff04"
      : r > 5
      ? "orange"
      : r > 3
      ? "#989802"
      : "red";
  // ratinge göre renk belirle
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="border shadow p-3 rounded-md hover:shadow-lg cursor-pointer transition flex flex-col max-sm:flex-row max-sm:gap-5 "
    >
      <div className="relative">
        <img
          className="rounded w-full object-cover max-h-[250px] max-sm:max-h-[150px]"
          src={`https://picsum.photos/seed/${movie.id}/200/300`}
          alt=""
        />
        <span
          style={{ background: color }}
          className="absolute right-[-10px] top-[-10px] rounded-full text-white font-semibold  p-1 sm:p-2  "
        >
          {Number(movie.rating).toFixed(1)}
        </span>
      </div>
      <div className="flex flex-col justify-betwee h-full">
        <h3 className="font-bold text-xl  md:mt-4 line-clamp-2">
          {movie.title}
        </h3>
        <div>
          <p>{movie.year} </p>
          <p className="flex gap-2">
            {movie.genre.map((genre, i) => (
              <span className="bg-gray-200 rounded-md py-1 px-2" key={i}>
                {genre}
              </span>
            ))}
          </p>
          <p className="bg-red-400 rounded-md py-1 px-2 w-fit mt-1 text-white">
            {movie.language}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
