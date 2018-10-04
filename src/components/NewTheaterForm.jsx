import React from 'react';
import './styles/NewTheaterForm.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTheater } from './../actions';

function NewTheaterForm(props){
  let _name = null;
  let _image = null;
  let _phone = null;
  let _address = null;
  let _city = null;
  let _state = null;
  let _zip = null;

  function addNewTheater(event){
    event.preventDefault();
    props.dispatch(addTheater(_name.value, _image.value, _phone.value, _address.value, _city.value, _state.value, _zip.value));
    _name.value = '';
    _image.value = '';
    _phone.value = '';
    _address.value = '';
    _city.value = '';
    _state.value = '';
    _zip.value = '';
  }

  return (
    <div className="newTheaterForm">
      <h2>ADD NEW THEATER:</h2>
      <form onSubmit={addNewTheater}>
        <div className="leftForm">
          <div className="form-group">
            <label htmlFor="name">NAME:</label>
            <div>
              <input type="text" id="name" placeholder="Name..." ref={(input) => {_name = input;}}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="image">IMAGE:</label>
            <div>
              <input type="text" id="image" placeholder="Image Src..." ref={(input) => {_image = input;}}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">PHONE NUMBER:</label>
            <div>
              <input type="text" id="phone" placeholder="Phone Number..." ref={(input) => {_phone = input;}}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address">ADDRESS:</label>
            <div>
              <input type="text" id="address" placeholder="Address..." ref={(input) => {_address = input;}}/>
            </div>
          </div>
        </div>
        <div className="rightForm">
          <div className="form-group">
            <label htmlFor="city">CITY:</label>
            <div>
              <input type="text" id="city" placeholder="City..." ref={(input) => {_city = input;}}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="state">STATE:</label>
            <div>
              <input type="text" id="state" placeholder="State..." ref={(input) => {_state = input;}}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="zip">ZIP:</label>
            <div>
              <input type="text" id="zip" placeholder="Zip..." ref={(input) => {_zip = input;}}/>
            </div>
          </div>
          <button type="submit">Submit New Theater</button>
        </div>
      </form>
    </div>
  );
}

NewTheaterForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(NewTheaterForm);
