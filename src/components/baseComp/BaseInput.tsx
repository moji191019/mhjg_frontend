import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
/**
 * 참고: https://mui.com/material-ui/react-text-field/#basic-textfield
 */
type BaseTextFieldProps = TextFieldProps;

/**
 * @property label 라벨값
 * @property variant 인풋 스타일
 * @property defaultValue 렌더링 시 기본값
 * @property helperText 인풋 아래에 작게 쓰여진 도움말
 * @property size 인풋 사이즈
 * @property onChangeHandler 인풋 onChange 콜백함수
 */
const BaseInput = ({ ...props }: BaseTextFieldProps) => {
  return (
    <>
      {/* <TextField
      size={size}
      label={label}
      defaultValue={defaultValue}
      variant={variant}
      helperText={helperText}
      onChange={onChangeHandler}
      InputProps={inputProps}
      sx={sx}
      fullWidth
    /> */}
      <TextField {...props} />
    </>
  );
};

export default BaseInput;
