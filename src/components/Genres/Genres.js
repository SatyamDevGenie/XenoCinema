// import Chip from "@mui/material/Chip";
// import axios from "axios";
// import { useEffect } from "react";

// const Genres = ({
//   selectedGenres,
//   setSelectedGenres,
//   genres,
//   setGenres,
//   type,
//   setPage,
// }) => {
//   const fetchGenres = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
//     );
//     setGenres(data.genres);
//   };

//   console.log(genres);

//   useEffect(() => {
//     fetchGenres();
//     return () => {
//       setGenres({}); // unmounting
//     };
//   }, []);

//   return (
//     <div style={{ padding: "6px 0" }}>
//       {genres.map((genre) => (
//         <Chip
//           style={{ margin: 2 }}
//           label={genre.name}
//           key={genre.id}
//           clickable
//           size="small"
//         />
//       ))}
//     </div>
//   );
// };

// export default Genres;

import Chip from "@mui/material/Chip";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres([]); // unmounting, set to empty array
    };
  }, []);

  return (
    <div style={{ padding: "8px 0", margin: "12" }}>
      {genres.map((genre) => (
        <Chip
          style={{ backgroundColor: "white" }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
        />
      ))}
    </div>
  );
};

export default Genres;
