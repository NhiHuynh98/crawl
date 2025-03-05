import React, { useEffect, useState } from "react";
import { Table as TableAnt, Select } from "antd";
import "./Crawl.less";
import { Link } from "react-router-dom";

const Crawl = () => {
  const extractTime = (text) => {
    const parts = text.split(" • ");
    if (parts.length > 2) {
      return parts[1];
    }
    return parts.length > 1 ? parts[parts.length - 1] : null;
  };

  const columns = [
    {
      title: "Index",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Location",
      dataIndex: "location_time",
      key: "location_time"
    },
    {
      title: "Time",
      dataIndex: "location_time",
      key: "time",
      render: (text) => extractTime(text)
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (text) => text
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
      render: (text) => (
        <Link to={text} target="_blank">
          {text}
        </Link>
      )
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record, index) => (
        <Select
          defaultValue="none"
          style={{ width: 120 }}
          onChange={(value) => hdChangeStatus(value, record)}
          value={record.status}
          options={[
            { value: "none", label: "None" },
            { value: "consider", label: "Consider" },
            { value: "completed", label: "Completed" },
            { value: "rejected", label: "Rejected" }
          ]}
        />
      )
    }
  ];

  const [testOutput, setTestOutput] = useState([]);

  // useEffect(() => {
  //   changePageNumber(5)
  // }, [])

  const changePageNumber = async (value) => {
      try {
        const response = await fetch(`http://localhost:5000/run-tests?page=${value}`);
        const data = await response.json();
        let record = JSON.parse(localStorage.getItem("changedData")) || [{}];

        const recordUsers = new Set(record.map(r => r.user));

        const filteredData = data.output.filter(item => !recordUsers.has(item.user));

        setTestOutput(filteredData);
      } catch (error) {
        // setTestOutput("Error running tests");
      }
  }

  const savedData = async (record) => {
    const {id, status, ...temp} = record;
    // Get existing data from localStorage
    let existingData = JSON.parse(localStorage.getItem("changedData")) || [];

    // Ensure existingData is an array
    if (!Array.isArray(existingData)) {
        existingData = [];
    }

    // Append the new record
    existingData.push(temp);

    // Save updated data back to localStorage
    localStorage.setItem("changedData", JSON.stringify(existingData));
};

  const hdChangeStatus = async (value, record) => {
    if (value !== 'none') {
      savedData(record);
    }
    try {
      const request = await fetch(`http://localhost:5000/change-status?status=${value}&index=${record.id}`);
      const response = await request.json();
      setTestOutput(response);
      // console.log("response", response);
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Select
          defaultValue="Fetch Data"
          style={{ width: 120 }}
          onChange={changePageNumber}
          options={[
            { value: 2, label: "5 pages" },
            { value: 10, label: "10 pages" },
            { value: 15, label: "15 pages" },
            { value: 20, label: "20 pages" },
            { value: 50, label: "50 pages" },
            { value: 100, label: "100 pages" },
            { value: 150, label: "150 pages" }
          ]}
        />
      </div>

      <TableAnt className="content" dataSource={testOutput} columns={columns} />
    </>
  );
};

export default Crawl;
