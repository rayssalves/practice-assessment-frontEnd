import React from "react";
import HeroBanner from "../../components/HeroBanner";
import SpaceCard from "../../components/SpaceCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectAllSpaces } from "../../store/space/selectors";
import { fetchSpaces } from "../../store/space/thunk";

export default function HomePage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectAllSpaces);

  //   Dispatch fetchPosts inside useEffect. This is the necessary step to fetch the data and put it in the Redux store.
  useEffect(() => {
    dispatch(fetchSpaces);
  }, [dispatch]);

  //dispatching list of spaces
  return (
    <div>
      <HeroBanner>
        <h1>Home</h1>
      </HeroBanner>
      <ul>
        {spaces.map((space) => {
          return (
            <div className="spaceFeed">
              <SpaceCard
                key={space.id}
                title={space.title}
                description={space.description}
                backgroundColor={space.backgroundColor}
                color={space.color}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
