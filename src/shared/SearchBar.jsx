import React, { useRef } from 'react';
import { Col, Form, FormGroup } from 'react-bootstrap';
import './search-bar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SearchBar = () => {

    const locationRef =  useRef(" ");
    const distanceRef =  useRef(0);
    const MaxGroupSizeRef =  useRef(0);


const SearchHandler = ()=>{
    const location = locationRef.current.value;
    const distance= distanceRef.current.value;
    const maxGroupSize= MaxGroupSizeRef.current.value;

    if(location === " " || distance === "" || maxGroupSize === "") {
return toast.warning( "Please fill out all fields" );}

}

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-fill"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="Where are you going?" ref={locationRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-fill"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder="Distance k/m" ref={distanceRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i className="ri-group-fill"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0"  ref={MaxGroupSizeRef}/>
            </div>
          </FormGroup>
          <span className="search__icon" onClick={SearchHandler}>
            <i className="ri-search-2-line"></i>
          </span>
        </Form>
      </div>
      <ToastContainer/>
    </Col>
  );
};

export default SearchBar;
