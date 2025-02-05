import React, { useState } from "react";
import { Button, Flex, Select } from "antd";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMinus,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { RightOutlined } from "@ant-design/icons";
import ProductCard from "../../../components/Card/ProductCard/ProductCard";
import { RCN } from "../../../assets/img";

import "./ProductDetail.less";
import Input from "../../../components/Input/Input";
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    country: "",
    quanlity: "1000MT",
    price: "$2000",
    totalPrice: "$ 00",
    quanlitySpecifications: {
      nutCount: "",
      outturn: "",
      defective: "",
      moisture: ""
    }
  });

  const onChange = (value) => {
    setProduct((prev) => ({
      ...prev,
      country: value
    }));
  };

  const handleInputChange = (name, value) => {
    setProduct((prev) => ({
      ...prev,
      quanlitySpecifications: {
        ...prev.quanlitySpecifications,
        [name]: value
      }
    }));
  }

  const decreaseQuanlity = () => {

  }

  const increaseQuanlity = () => {

  }

  const decreasePrice = () => {

  }

  const increasePrice = () => {
    
  }

  const backToPage = () => {
    navigate(-1);
  };

  const handleCreateProduct = () => {
    // const newPost = { title: "New Post", body: "This is a new post", userId: 1 };
    // dispatch(createPost(newPost));
    console.log("product", product)
  };

  return (
    <div className="product-detail">
      <div className="product-header">
        <Breadcrumb
          separator={<RightOutlined />}
          items={[
            {
              title: (
                <Flex align="center">
                  <FontAwesomeIcon icon={faArrowLeft} onClick={backToPage} />
                  <span className="divider">|</span>
                  Product Listings
                </Flex>
              )
            },
            {
              title: "Product Detail"
            }
          ]}
          className="custom-breadcrumb"
        />
      </div>
      <div className="product-body">
        <Flex gap="70px">
          <img className="product-image" alt="product image" src={RCN} />

          <Flex vertical gap="large">
            <Flex>
              <div className="product-type">
                <span className="rcn">RCNS</span>
                <span className="kernels">Kernels</span>
              </div>
            </Flex>

            <div className="product-name">Name Product</div>

            <Flex vertical className="product-info">
              <div className="title">Description: </div>
              <Flex className="content" style={{ maxWidth: "348px" }}>
                <div>Packaging</div>
                <div>Jute Bags</div>
              </Flex>
              <Flex className="content" style={{ maxWidth: "348px" }}>
                <div>Country Of Origin</div>
                <Select
                  showSearch
                  placeholder="Select a country"
                  optionFilterProp="label"
                  onChange={onChange}
                  value={product.country}
                  options={[
                    {
                      value: "vn",
                      label: "Viet Nam"
                    },
                    {
                      value: "usa",
                      label: "My"
                    }
                  ]}
                />
              </Flex>
              <div className="product-total">
                <div className="left">
                  <Flex className="content">
                    <div>Quantity Available</div>
                    <div className="btn-calculate">
                      <FontAwesomeIcon icon={faMinus} onClick={decreaseQuanlity} />
                      1000MT
                      <FontAwesomeIcon icon={faPlus} onClick={increaseQuanlity} />
                    </div>
                  </Flex>
                  <Flex className="content">
                    <div>Price per MT (USD)</div>
                    <div className="btn-calculate">
                      <FontAwesomeIcon icon={faMinus} onClick={decreasePrice} />
                      $2000
                      <FontAwesomeIcon icon={faPlus} onClick={increasePrice} />
                    </div>
                  </Flex>
                </div>
                <Flex vertical className="right">
                  <span>Total price: $ 00</span>
                  <br />
                  <span>USD 000 / Metric Ton</span>
                </Flex>
              </div>
            </Flex>

            <Flex
              vertical
              className="product-info"
              style={{ maxWidth: "442px" }}
            >
              <div className="title">Quality Specifications: </div>
              <Flex justify="space-between" align="center">
                <div>Nut count</div>
                <Input
                  name="nutCount"
                  onChange={(name, value) => handleInputChange(name, value)}
                  value={product.quanlitySpecifications.nutCount}
                  placeholder="Fill in Here"
                />
              </Flex>
              <Flex justify="space-between" align="center">
                <div>Outturn</div>
                <Input
                  name="outturn"
                   onChange={(name, value) => handleInputChange(name, value)}
                  value={product.quanlitySpecifications.outturn}
                  placeholder="Minimum of 52 lbs per bag of 80 kg"
                />
              </Flex>
              <Flex justify="space-between" align="center">
                <div>Defective</div>
                <Input
                  name="defective"
                   onChange={(name, value) => handleInputChange(name, value)}
                  value={product.quanlitySpecifications.defective}
                  placeholder="Maximum of 8%"
                />
              </Flex>
              <Flex justify="space-between" align="center">
                <div>Moisture</div>
                <Input
                  name="moisture"
                   onChange={(name, value) => handleInputChange(name, value)}
                  value={product.quanlitySpecifications.moisture}
                  placeholder="Maximum of 12%"
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          className="product-action"
          gap="large"
          align="center"
          justify="center"
        >
          <Button onClick={handleCreateProduct}>Save Changes</Button>
          <Button>Cancel</Button>
        </Flex>
      </div>
    </div>
  );
};

export default ProductDetail;
