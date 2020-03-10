import React from "react";
import { Dialog, FlatButton } from "material-ui";
const ImageDialog = ({ dialogSetting, closeHandler, imgSource }) => {
  const actions = [
    <FlatButton
      label="close"
      primary={true}
      onClick={closeHandler}
    ></FlatButton>
  ];
  return (
    <Dialog
      actions={actions}
      modal={false}
      open={dialogSetting.open}
      onRequestClose={closeHandler}
    >
      <img src={imgSource} alt="" style={{ width: "100%" }} />
    </Dialog>
  );
};

export default ImageDialog;
