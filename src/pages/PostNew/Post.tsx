import { Button, Flex, Upload, Select } from "antd";
import React, { useState } from "react";
import { Input, TextArea } from "../../components";
import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";

export const Post = () => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    page: "50"
  });

  const hdChange = (name, value) => {
    setValues(prevValues => ({
        ...prevValues,
        [name]: value,
      }));
  };
  console.log("values", values);
  return (
    // Input message
    // Input file multiple file.
    // Link page need to post
    // Choose 30, 50, 100 pages
    // Post
    <Flex vertical gap="middle">
      <TextArea
        placeholder="Enter messages"
        maxLength="999999999999"
        value={values['messages']}
        name="messages"
        onChange={hdChange}
      />
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture"
      >
        <Button type="primary" icon={<UploadOutlined />}>
          Upload
        </Button>
      </Upload>
      <TextArea
        placeholder="Enter links"
        maxLength="999999999999"
        value={values['links']}
        name="links"
        onChange={hdChange}
        style={{ height: 120, resize: 'none' }}
      />
      <Select
          defaultValue="none"
          style={{ width: 120 }}
          onChange={(value) => hdChange("page", value)}
          value={values["page"]}
          options={[
            { value: "50", label: "50" },
            { value: "100", label: "100" },
          ]}
        />
    </Flex>
  );
};

export default Post;
