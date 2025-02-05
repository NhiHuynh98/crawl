import { Alert, Flex, Typography } from "antd";
import React from "react";
import "./Notification.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEllipsisVertical
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "../../components";

const { Title } = Typography;

const Notification = () => {
  return (
    <div className="notify">
      <Flex gap="middle" vertical>
        <Alert
          message="Reminder Notification !"
          description="You have not done the KYC process yet. Complete KYC to access bidding and product listings!"
        />

        <Flex
          horizontal
          gap="middle"
          className="notification-list"
          justify="space-between"
        >
          <div className="notification-title">
            <Dropdown
              title={"All Notifications"}
              isShowIcon={true}
              items={[
                { key: "1", label: "All Notifications" },
                { key: "2", label: "Bidding Updates" },
                { key: "3", label: "Order Status Updates" },
                { key: "4", label: "KYC Status" },
                { key: "5", label: "System Alerts" }
              ]}
            />
          </div>

          <div className="icon">
            <Dropdown
              title={
                <FontAwesomeIcon icon={faEllipsisVertical} color="white" />
              }
              items={[{ key: "1", label: "Mark All As Read" }]}
            />
          </div>
        </Flex>

        {[1, 2, 3].map((item, index) => (
          <Flex
            className="notification-items"
            align="baseline"
            gap="large"
            justify="space-between"
          >
            <Flex gap="large">
              <div className="icon">
                <FontAwesomeIcon icon={faCircleCheck} color="black" />
              </div>
              <Flex vertical gap="middle">
                <div className="title">Bid Accepted for RCN 52lbs Contract</div>
                <div className="sub-title">
                  Your bid of 200MT for RCN 52lbs has been accepted.
                </div>
              </Flex>
            </Flex>
            <div className="sub-title time">09:30 AM</div>
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

export default Notification;
