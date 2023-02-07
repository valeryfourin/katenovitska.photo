import React, { Component } from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import '../styles/TellInput.css';

class TelInput extends Component {
  render() {
    return (
      <>
        <IntlTelInput
          inputClassName="form-control"
          css={['intl-tel-input', 'form-control']}
          utilsScript="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
          fieldName="number"
          defaultCountry="ca"
          format
        />
      </>
    );
  }
}

export default TelInput;
