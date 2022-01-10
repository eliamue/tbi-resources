import React from "react";
import { useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import { useCreate } from "../hooks/createResource";
import { createResource } from "../services/apiService";
import "../styles/AddForm.css";
import Nav from "./Nav";

const AddForm = () => {
  const history = useHistory();
  const {
    title,
    category,
    about,
    link,
    logo,
    handleTitle,
    handleCategory,
    handleAbout,
    handleLink,
    handleLogo,
  } = useCreate();

  const handleSubmit = async () => {
    const data = {
      title,
      category,
      about,
      link,
      logo,
    };
    await createResource(data);
    history.push('/resources');
  };

  return (
    <>
    <Nav />
      <h1>Add Resource</h1>
      <p className="required">* Is Required</p>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          <div className="prompt">
            <h4 className="required">*</h4>
            <h4>Name of Resource: </h4>
          </div>
          <input
            name="title"
            onChange={handleTitle}
            placeholder="Company Inc."
            value={title}
            required
          />
        </label>
        <label>
          <div className="prompt">
            <h4 className="required">*</h4>
            <h4>Category: </h4>
          </div>
          <select
            name="category"
            onChange={handleCategory}
            value={category}
            required
          >
            <option value="" selected disabled>
              --
            </option>
            <option value="Accessibility" label="Accessibility"></option>
            <option value="Advocacy" label="Advocacy"></option>
            <option value="Education" label="Education"></option>
            <option value="Products" label="Products"></option>
            <option value="Other" label="Other"></option>
          </select>
        </label>

        <label>
          <div className="prompt">
            <h4 className="required">*</h4>
            <h4>Description: </h4>
          </div>
          <textarea
            name="about"
            onChange={handleAbout}
            value={about}
            required
            placeholder="Description of resource, such as services offered, symptoms addressed, location, etc."
          />
        </label>

        <label>
          <div className="prompt">
            <h4 className="required">*</h4>
            <h4>Link to Resource: </h4>
          </div>
          <input
            name="link"
            className="link"
            onChange={handleLink}
            value={link}
            placeholder="http://www.tbi-resource.com"
            required
          />
        </label>

        <label>
          <div className="prompt">
              <h4>Logo/Image</h4>
        </div>
          <input
            name="logo"
            className="logo"
            onChange={handleLogo}
            value={logo}
            placeholder="http://www.tbi-resource.com"
          />
        </label>
    <p>
        <button type="submit">Submit</button>
    </p>
      </form>
    </>
  );
};

AddForm.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  about: PropTypes.string,
  link: PropTypes.string,
  logo: PropTypes.string,
};

export default AddForm;
