import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

import { Button, Flex } from "antd";

import ProductCard from "../../components/Card/ProductCard/ProductCard";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import { Kernels, RCN } from "../../assets/img";

import "./ProductList.less";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchProducts } from "../../redux/product";

const ProductList = () => {
  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = () => {
    navigate("/product-list/detail");
  };

  const handleEdit = () => {
    navigate("/product-list/detail");
  };

  const updateStock = () => {
    navigate("/product-list/detail");
  };

  const backPreviousPage = () => {
    navigate(-1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      <div className="header">
        <Breadcrumb
          items={[
            {
              title: (
                <Flex align="center">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    onClick={backPreviousPage}
                  />
                  <span className="divider">|</span>
                  Product Listings
                </Flex>
              )
            }
          ]}
          className="custom-breadcrumb"
        />

        <Button className="btn-add" onClick={handleAddProduct}>
          {" "}
          <FontAwesomeIcon icon={faPlus} /> ADD PRODUCT{" "}
        </Button>
      </div>
      <div className="body">
        <Flex align="center" justify="space-between">
          <p className="product-title">Product: RCNs </p>
          <div className="slider">
            <FontAwesomeIcon icon={faAngleLeft} />
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </Flex>

        <Flex gap="middle">
          <div className="product-cover">
            <p>
              Raw
              <br /> Cashow <br />
              Nuts
            </p>
          </div>
          <ProductCard
            name="Product Name"
            quanlity="1000 MT"
            country="US"
            price="$200/MT"
            imageSrc={RCN}
            handleEdit={handleEdit}
            updateStock={updateStock}
          />
          <ProductCard
            name="Product Name"
            quanlity="1000 MT"
            country="US"
            price="$200/MT"
            imageSrc={RCN}
            handleEdit={handleEdit}
            updateStock={updateStock}
          />
        </Flex>

        <Flex align="center" justify="space-between">
          <p className="product-title">Product: Kernels </p>
          <div className="slider">
            <FontAwesomeIcon icon={faAngleLeft} />
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </Flex>

        <Flex gap="middle">
          <div className="product-cover" style={{ backgroundColor: "#242E35" }}>
            <p>
              Cashew
              <br />
              Kernels
            </p>
          </div>
          <ProductCard
            name="Product Name"
            quanlity="1000 MT"
            country="US"
            price="$200/MT"
            imageSrc={Kernels}
            handleEdit={handleEdit}
            updateStock={updateStock}
          />
          <ProductCard
            name="Product Name"
            quanlity="1000 MT"
            country="US"
            price="$200/MT"
            imageSrc={Kernels}
            handleEdit={handleEdit}
            updateStock={updateStock}
          />
        </Flex>
      </div>
    </div>
  );
};

export default ProductList;
