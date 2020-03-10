import React, { useState, useEffect } from "react";
import { SelectField, TextField, MenuItem } from "material-ui";
import axios from "axios";
import ImageResult from "../ImageResult";

const API_URL = "https://pixabay.com/api/";
const API_KEY = "15525910-2e01ee8fa19510838e74c4763";

const Search = () => {
  const [formFields, setFormFields] = useState({
    searchText: "banana",
    amount: 5
  });

  const [images, setImages] = useState([]);

  const getNewImages = () => {
    const { searchText, amount } = formFields;
    if (searchText === "") {
      setImages([]);
    } else {
      const link = `${API_URL}?key=${API_KEY}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`;
      axios
        .get(link)
        .then(result => {
          setImages(result.data.hits);
        })
        .catch(err => {
          console.log("Error: " + err);
        });
    }
  };

  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    event.preventDefault();
  };

  const handleOnSelectChange = (event, index, value) => {
    setFormFields({ ...formFields, ["amount"]: value });
  };
  useEffect(() => {
    getNewImages();
  }, [formFields]);

  return (
    <div>
      <TextField
        name="searchText"
        value={formFields.searchText}
        onChange={handleOnChange}
        fullWidth={true}
        floatingLabelText="Search For Images"
      />
      <SelectField
        name="amount"
        onChange={handleOnSelectChange}
        value={formFields.amount}
        floatingLabelText="Amount"
      >
        <MenuItem primaryText="5" value={5} />
        <MenuItem primaryText="10" value={10} />
        <MenuItem primaryText="15" value={15} />
        <MenuItem primaryText="30" value={30} />
        <MenuItem primaryText="50" value={50} />
      </SelectField>
      <br />
      {images.length > 0 ? <ImageResult images={images} /> : null}
    </div>
  );
};

export default Search;
