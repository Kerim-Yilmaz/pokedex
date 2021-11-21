import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Form,
} from 'react-bootstrap';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    console.log(event.target.value)
    i18n.changeLanguage(event.target.value);
  };

  return (
    
      <Form.Control as="select" name="language" onChange={changeLanguage}>
        <option value="tr-TR">Türkçe</option>
        <option value="en-US">English</option>
      </Form.Control>
    
  );
};

export default LanguageSelector;
