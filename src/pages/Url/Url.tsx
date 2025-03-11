import { Flex, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Button, TextArea } from "../../components";

export const Url = () => {
  const [values, setValues] = useState({});
  const [urls, setUrls] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/get-group-url").then((response) =>
//         // setUrls(response as any)
//         setValues({
//             'links': response.json() as any
//         })
//     )
//   }, []);

  const hdChangeLinks = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const hdChange = async (name, value) => {
    const result = await fetch(`http://localhost:5000/get-group-url?location=${value}`)
    const data = await result.json();
    setValues((prev) => ({
        ...prev,
        links: data.result
    }))
  }

  return (
    <Flex vertical gap="middle">
      <Flex vertical gap="middle">
        <Flex align="center">
          <Typography style={{ width: 120 }}>Location: </Typography>
          <Select
            defaultValue="hcm"
            onChange={(value) => hdChange("location", value)}
            value={values["location"]}
            options={[
              { value: "hcm", label: "Ho Chi Minh" },
              { value: "hn", label: "Ha Noi" }
            ]}
          />
        </Flex>
        <Flex align="center">
          <Typography style={{ width: 120 }}>Link: </Typography>
          <TextArea
            name="links"
            onChange={hdChangeLinks}
            value={values['links']} 
            style={{ height: 120, width: "90%" }}
          />
        </Flex>
      </Flex>
      <Button
        style={{ width: "100%", marginTop: 30 }}
        variant="outlined"
        type="primary"
      >
        {" "}
        Submit{" "}
      </Button>
    </Flex>
  );
};
export default Url;
