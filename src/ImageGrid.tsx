import { useEffect, useState } from "react";

const ImageGrid = () => {
  const [images, setImages] = useState([]);
  const key = process.env.REACT_APP_IMAGE_GRID_KEY;
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
      .then((res) => res.json())
      .then((images) => {
        setImages(images);
      });
  }, []);
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
};

export default ImageGrid;
