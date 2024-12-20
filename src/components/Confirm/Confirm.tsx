import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';

import './Confirm.less'

const Confirm = (props) => {
    const { isModalOpen, handleOk, handleCancel, title } = props;
    return (
        <Modal className="custom-modal" title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={<Button>Submit</Button>}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
      </Modal>
    )
}

Confirm.propTypes = {
    isModalOpen: PropTypes.bool,
    handleOk: PropTypes.func,
    handleCancel: PropTypes.func,
    title: PropTypes.string
}

Confirm.defaultProps = {
    isModalOpen: true,
    handleOk: () => {},
    handleCancel: () => {},
    title: 'Confirmation'
}

export default Confirm;