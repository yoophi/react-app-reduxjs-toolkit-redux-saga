import { unsplashAction, unsplashSelector } from "../slice";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

export function ImageGrid() {
  const dispatch = useDispatch();
  const { isLoading, images, error } = useSelector(unsplashSelector.all);
  const key = process.env.REACT_APP_IMAGE_GRID_KEY as string;

  useEffect(() => {
    const { load } = unsplashAction;
    dispatch(load({ key: key, page: 4 }));
  }, []);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="content">
      <section className="grid">
        {images.map((image: any) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
    </div>
  );
}
