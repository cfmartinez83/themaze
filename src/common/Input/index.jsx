import React, { useCallback } from 'react';
import debounce from 'helpers/debounce';
import { InputWrapper } from './styled';

const Input = ({ onChange, placeholder }) => {
  const onChangeDebounce = debounce((value) => {
    onChange(value);
  }, 300);

  const onChangeCallBack = useCallback((value) => onChangeDebounce(value), [onChangeDebounce]);
  const handleOnChange = (e) => onChangeCallBack(e.target.value);
  return <InputWrapper placeholder={ placeholder } onChange={ handleOnChange }/>
}

export default Input;
