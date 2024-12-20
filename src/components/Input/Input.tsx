import React from 'react';

import { Input as InputAnt } from "antd";
import PropTypes from 'prop-types';
import Copy from '../CopyToClipboard/Copy';

const Input = ({ value, placeholder, variant, name, allowClear, disabled, classNames, defaultValue, maxLength, size }) => {
    const handeChange = (event: any) => {
        const { value, name } = event?.target;
        console.log("value", value, name);
    }

    return (
        <>
        <h3> Input Component </h3>
        <InputAnt
            value={value}
            placeholder={placeholder}
            variant={variant}
            name={name}
            onChange={(e) => handeChange(e)}
            allowClear={allowClear}
            disabled={disabled}
            classNames={classNames}
            defaultValue={defaultValue}
            maxLength={maxLength}
            size={size}
        />
        </>
        

    );
}

Input.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']), 
    onChange: PropTypes.func,
    name: PropTypes.string,
    allowClear: PropTypes.bool,
    disabled: PropTypes.bool,
    classNames: PropTypes.string,
    defaultValue: PropTypes.string,
    maxLength: PropTypes.number,
    size: PropTypes.oneOf(['large', 'middle', 'small'])
}

Input.defaultProps = {
    value: '',
    placeholder: '',
    variant: 'outlined',
    onChange: () => {},
    name: '',
    allowClear: false,
    disabled: false,
    classNames: '',
    defaultValue: '',
    size: 'middle'
  };
 
export default Input;