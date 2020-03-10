import React, { useState } from "react";
import Proptype from "prop-types";

import ImageDialog from "./ImageDialog";
import ImageGrid from "./ImageGrid";

const ImageResult = ({ images }) => {
  const [dialogSetting, setDialogSetting] = useState({
    open: false,
    curImage: ""
  });

  const openHandler = img => {
    setDialogSetting({
      open: true,
      curImage: img
    });
  };
  const closeHandler = () => {
    setDialogSetting({
      open: false,
      curImage: ""
    });
  };

  return (
    <div>
      <ImageGrid images={images} openHandler={openHandler} />
      {dialogSetting.open === true ? (
        <ImageDialog
          closeHandler={closeHandler}
          imgSource={dialogSetting.curImage}
          dialogSetting={dialogSetting}
        />
      ) : null}
    </div>
  );
};

ImageResult.protoType = {
  images: Proptype.array.isRequired
};

export default ImageResult;
