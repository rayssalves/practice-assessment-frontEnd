import { useDispatch, useSelector } from "react-redux";
import { selectOneSpace } from "../../store/space/selectors";
import { useParams } from "react-router-dom";
import { fetchDetailsSpace } from "../../store/space/thunk";
import { useEffect } from "react";
import StoryCard from "../../components/storyCard";

export default function SpaceDetails() {
  const { id } = useParams();
  const space = useSelector(selectOneSpace);
  const dispatch = useDispatch();
  console.log("space", space);

  useEffect(() => {
    dispatch(fetchDetailsSpace(id));
  }, [dispatch, id]);

  return (
    <div>
      {space ? (
        <div>
          {space.stories.map((story) => (
            <div key={story.id}>
              <StoryCard
                name={story.name}
                imgUrl={story.imgUrl}
                content={story.content}
                backgroundColor={story.backgroundColor}
                color={story.color}
              />
            </div>
          ))}
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}
