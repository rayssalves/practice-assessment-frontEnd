import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { selectAllSpaces } from "../../store/space/selector";
import { fetchSpaces } from "../../store/space/thunk";

export default function HomePage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectAllSpaces);

  //   Dispatch fetchPosts inside useEffect. This is the necessary step to fetch the data and put it in the Redux store.
  useEffect(() => {
    console.log("Useeffect running");
    dispatch(fetchSpaces);
  }, [dispatch]);

  //dispatching list of spaces
  return (
    <div>
      <h2>Spaces</h2>
      <ul>
        {!spaces.length
          ? "Loading"
          : spaces.map((space) => (
              <li key={space.id}>
                <div>
                  <p>{space.title}</p>
                  <p>{space.description}</p>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
}

//   return (
//     <div>
//       <h2>Spaces</h2>
//       {!spaces.length
//         ? "Loading"
//         : spaces.map((space) => (
//             <div key={space.id}>
//               <li>{space.title}</li>
//               <p>{space.description}</p>
//             </div>
//           ))}
//     </div>
//   );
// }
