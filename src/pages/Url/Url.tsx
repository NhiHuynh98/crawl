import { Flex, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Button, TextArea } from "../../components";

export const Url = () => {
  const [values, setValues] = useState({
    "location": "hcm",
    "links": ""
  });
  const [urls, setUrls] = useState([]);

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
        links: data.result.join("\n"),
        location: value
    }))
  }

  useEffect(() => {
    hdGetLocation()
    hdChange("location","hcm")
  }, [])

  const [locations, setLocations] = useState([])

  const hdGetLocation = async () => {
    const result = await fetch("http://localhost:5000/get-location")
    const data = await result.json()
    setLocations(data.result)
  }

  const hdSubmit = async() => {
    const { location, links } = values
    let fullLocation = locations.find((item) => item?.value === location)
    console.log("values", links, fullLocation)
    const response = await fetch(`http://localhost:5000/add-links`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            location: fullLocation,
            links: links
          })
      });
    const data = await response.json();
  }

  console.log("ss", values)

  return (
    <Flex vertical gap="middle">
      <Flex vertical gap="middle">
        <Flex align="center">
          <Typography style={{ width: 120 }}>Location: </Typography>
          <Select
            defaultValue="hcm"
            onChange={(value) => hdChange("location", value)}
            value={values["location"]}
            options={locations}
          />
        </Flex>
        <Flex align="center">
          <Typography style={{ width: 120 }}>Link: </Typography>
          <TextArea
            name="links"
            onChange={hdChangeLinks}
            value={values['links']} 
            style={{ height: 120, width: "90%" }}
            maxLength="99999999999999999999999999999999999999"
          />
        </Flex>
      </Flex>
      <Button
        style={{ width: "100%", marginTop: 30 }}
        variant="outlined"
        type="primary"
        onClick={hdSubmit}
      >
        {" "}
        Submit{" "}
      </Button>
    </Flex>
  );
};
export default Url;
