import {
  Flex,
  Upload,
  Select,
  Typography,
  UploadFile,
  UploadProps,
  Image,
  GetProp
} from "antd";
import React, { useState } from "react";
import { Input, TextArea, Button } from "../../components";
import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined
} from "@ant-design/icons";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const Post = () => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [filePayload, setFilePayload] = useState<any>();
  const [previewImage, setPreviewImage] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [values, setValues] = useState({
    page: "50"
  });

  const hdChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const convertImageToPayload = (file: File): Promise<{ name: string; mimeType: string; buffer: number[] }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const arrayBuffer = event.target?.result as ArrayBuffer;
      const uint8Array = new Uint8Array(arrayBuffer);
      const bufferArray = Array.from(uint8Array);

      resolve({
        name: file.name,
        mimeType: file.type,
        buffer: bufferArray,
      });
    };

    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
};

  const handleChange: UploadProps["onChange"] = async ({ fileList: newFileList }) => {
    const processedFiles = await Promise.all(
    newFileList.map(async (file) => {
      if (!file.originFileObj) return file;

      const filePayload = await convertImageToPayload(file.originFileObj);
      return filePayload
    })
  );
  setFileList(newFileList);
  setFilePayload(processedFiles)
  }


  const handlePostNews = async () => {
    let temp = {
      ...values,
      filePayload
    };
    try {
      const response = await fetch(`http://localhost:5000/post-news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(temp)
      });
      const data = await response.json();
    } catch (error) {
      // setTestOutput("Error running tests");
    }
  };

  return (
    <Flex vertical gap="middle">
      <Flex gap="middle" align="center">
        <Typography style={{ width: 150 }}>Điền nội dung: </Typography>
        <TextArea
          placeholder="Enter messages"
          maxLength="999999999999"
          value={values["messages"]}
          name="messages"
          onChange={hdChange}
          style={{ width: "90%" }}
        />
      </Flex>

      <Flex gap="middle" align="center">
        <Typography style={{ width: 150 }}>Chọn hình ảnh: </Typography>
        <Upload
          action="http://localhost:5000/upload"
          listType="picture"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          <Button type="primary" icon={<UploadOutlined />}>
            Upload
          </Button>
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{ display: "none" }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage("")
            }}
            src={previewImage}
          />
        )}
      </Flex>

      <Flex gap="middle" align="center">
        <Typography style={{ width: 150 }}>Nhập link cần đăng tin: </Typography>
        <TextArea
          placeholder="Enter links"
          maxLength="999999999999"
          value={values["page_url"]}
          name="page_url"
          onChange={hdChange}
          style={{ height: 120, width: "90%", resize: "none" }}
        />
      </Flex>

      <Flex gap="middle" align="center">
        <Typography style={{ width: 150 }}>Chọn số trang: </Typography>
        <Select
          defaultValue="none"
          style={{ width: 120 }}
          onChange={(value) => hdChange("page", value)}
          value={values["page"]}
          options={[
            { value: "50", label: "50" },
            { value: "100", label: "100" }
          ]}
        />
      </Flex>

      {/* <Flex gap="middle" align="center">
        <Typography style={{ width: 160 }}>Tài khoản: </Typography>
        <Input
          placeholder="Enter account"
          value={values["account"]}
          name="account"
          onChange={hdChange}
        />
      </Flex>

      <Flex gap="middle" align="center">
        <Typography style={{ width: 160 }}>Mật khẩu: </Typography>
        <Input
          placeholder="Enter password"
          value={values["password"]}
          name="password"
          onChange={hdChange}
        />
      </Flex> */}

      <Flex vertical gap="middle" align="center">
        <Button onClick={handlePostNews} type="primary" style={{ width: 100 }}>
          Gửi
        </Button>
      </Flex>
    </Flex>
  );
};

export default Post;
