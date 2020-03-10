import React from "react";
import { IconButton } from "material-ui";
import { GridList, GridTile } from "material-ui/GridList";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";

const ImageGrid = ({ images, openHandler }) => {
  let imageListContent;

  imageListContent = images ? (
    <GridList cols={3}>
      {images.map(image => {
        return (
          <GridTile
            key={image.id}
            title={image.tags}
            subtitle={
              <span>
                by
                <span> </span>
                <strong>{image.user}</strong>
              </span>
            }
            actionIcon={
              <IconButton onClick={() => openHandler(image.largeImageURL)}>
                <ZoomIn color="white" />
              </IconButton>
            }
          >
            <img src={image.largeImageURL} alt="" />
          </GridTile>
        );
      })}
    </GridList>
  ) : null;

  return imageListContent;
};

export default ImageGrid;
