import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown as DropDown, Space, Typography } from "antd";
import PropTypes from "prop-types";

const Dropdown = (props) => {
  const { title, isShowIcon, items } = props;

  return (
    <DropDown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ["3"]
      }}
    >
        <Space>
          {title}
          {isShowIcon && <DownOutlined />}
        </Space>
    </DropDown>
  );
};

Dropdown.propTypes = {
  title: PropTypes.element,
  isShowIcon: PropTypes.bool,
  items: PropTypes.array
};

Dropdown.defaultProps = {
  title: "",
  isShowIcon: false,
  items: [
    {
      key: "1",
      label: "Item 1"
    },
    {
      key: "2",
      label: "Item 2"
    },
    {
      key: "3",
      label: "Item 3"
    }
  ]
};

export default Dropdown;
