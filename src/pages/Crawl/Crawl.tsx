import React, { useState } from "react";
import { Table as TableAnt, Select } from "antd";
import "./Crawl.less";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "../../components";

const Crawl = () => {
  const dataSource = [
    {
      title:
        "Bán gấp nhà MT khu K300 Cộng Hòa,3T,11*18m, 59 tỷ TL, số 76A4 Tân Bình",
      details: "Mặt bằng kinh doanh • Hoàn thiện cơ bản",
      price: "59 tỷ",
      areaPrice: "190 m²",
      totalArea: "",
      locationTime: "Tp Hồ Chí Minh • 8 giờ trước • Tin ưu tiên",
      link: "https://www.nhatot.com/sang-nhuong-van-phong-mat-bang-kinh-doanh-quan-tan-binh-tp-ho-chi-minh/122999928.htm#px=SR-stickyad-[PO-1][PL-top]"
    },
    {
      title: "Cần bán gấp đất thị xã trảng bàng 1533m2 đường nhựa trước đất",
      details: "Đất nông nghiệp • Ngang 28 m",
      price: "3,2 tỷ",
      areaPrice: "2,1 tr/m²",
      totalArea: "1533 m²",
      locationTime: "Tây Ninh • 3 ngày trước • Tin ưu tiên",
      link: "https://www.nhatot.com/mua-ban-dat-huyen-trang-bang-tay-ninh/123090629.htm#px=SR-stickyad-[PO-2][PL-top]"
    },
    {
      title: "Mua bán & hỗ trợ pháp lý đất nền KĐT Bàu Tràm Lakeside",
      details: "Đất nền dự án",
      price: "2,7 tỷ",
      areaPrice: "27 tr/m²",
      totalArea: "100 m²",
      locationTime: "Đà Nẵng • 1 tuần trước • Tin ưu tiên",
      link: "https://www.nhatot.com/mua-ban-dat-quan-lien-chieu-da-nang/118352425.htm#px=SR-stickyad-[PO-3][PL-top]"
    },
    {
      title: "Đất mặt tiền 92m2 đường rộng 7.5m Hoà Thọ Tây, Giá sập sàn",
      details: "Đất thổ cư • Ngang 4.01 m",
      price: "2,45 tỷ",
      areaPrice: "27 tr/m²",
      totalArea: "92 m²",
      locationTime: "Đà Nẵng • 4 ngày trước • Tin ưu tiên",
      link: "https://www.nhatot.com/mua-ban-dat-quan-cam-le-da-nang/123067859.htm#px=SR-stickyad-[PO-4][PL-top]"
    },
    {
      title: "CH NGUYỄN TRÃI - NGÃ TƯ SỞ 34m,52m, FULL NỘI THẤT",
      details: "2 PN • Căn hộ dịch vụ, mini",
      price: "1,28 tỷ",
      areaPrice: "37 tr/m²",
      totalArea: "35 m²",
      locationTime: "Hà Nội • hôm qua • Tin ưu tiên",
      link: "https://www.nhatot.com/mua-ban-can-ho-chung-cu-quan-thanh-xuan-ha-noi/123118758.htm#px=SR-stickyad-[PO-5][PL-top]"
    },
    {
      title:
        "Bán nhà MT đường Số 23, khu Bình Phú, 4 x 19m, cấp 4, giá 12.9 tỷ",
      details: "1 PN • Nhà mặt phố, mặt tiền",
      price: "12,9 tỷ",
      areaPrice: "170 tr/m²",
      totalArea: "76 m²",
      locationTime: "Tp Hồ Chí Minh • 11 giây trước",
      link: "https://www.nhatot.com/mua-ban-can-ho-chung-cu-quan-thanh-xuan-ha-noi/123118758.htm#px=SR-stickyad-[PO-5][PL-top]"
    },
    {
      title:
        "Căn hộ Hyori đẹp nhưg em có căn hộ còn đẹp hơn, biển Mỹ Khê,TT Đà Nẵng",
      details: "2 PN • Chung cư",
      price: "3,862 tỷ",
      areaPrice: "59 tr/m²",
      totalArea: "66 m²",
      locationTime: "Đà Nẵng • 26 giây trước",
      link: "https://www.nhatot.com/mua-ban-can-ho-chung-cu-quan-thanh-xuan-ha-noi/123118758.htm#px=SR-stickyad-[PO-5][PL-top]"
    },
    {
      title:
        "Nhà phố 4m x 18m. Đúc 3 lầu Full nội thất Mặt tiền Đường Hiệp Thành 05",
      details: "5 PN • Nhà mặt phố, mặt tiền",
      price: "6,89 tỷ",
      areaPrice: "96 tr/m²",
      totalArea: "72 m²",
      locationTime: "Tp Hồ Chí Minh • 36 giây trước",
      link: "https://www.nhatot.com/mua-ban-can-ho-chung-cu-quan-thanh-xuan-ha-noi/123118758.htm#px=SR-stickyad-[PO-5][PL-top]"
    },
    {
      title:
        "GIẢM 500TR CHỈ 8TỶ9 NHÀ MỚI 5T HXH NGANG 5X16M PHAN HUY ÍCH P12 GÒ VẤP",
      details: "4 PN • Nhà ngõ, hẻm",
      price: "8,99 tỷ",
      areaPrice: "112 tr/m²",
      totalArea: "80 m²",
      locationTime: "Tp Hồ Chí Minh • 51 giây trước",
      link: "https://www.nhatot.com/mua-ban-nha-dat-quan-6-tp-ho-chi-minh/121449992.htm"
    },
    {
      title: "BÁN LÔ ĐẤT XÃ TÂN AN HỘI, HUYỆN CỦ CHI - 500 TRIỆU - DT 124,6M²",
      details: "Đất thổ cư • Ngang 5 m",
      price: "500 triệu",
      areaPrice: "4 tr/m²",
      totalArea: "125 m²",
      locationTime: "Tp Hồ Chí Minh • 51 giây trước",
      link: "https://www.nhatot.com/mua-ban-nha-dat-quan-6-tp-ho-chi-minh/121449992.htm"
    },
    {
      title:
        "NHÀ ĐẸP HOÀ XUÂN vị trí đẹp ,giá tốt full nội thất , CẨM NAM 3 - Hòa X",
      details: "3 PN • Hướng Tây • Nhà mặt phố, mặt tiền",
      price: "5,15 tỷ",
      areaPrice: "64 tr/m²",
      totalArea: "80 m²",
      locationTime: "Đà Nẵng • 1 phút trước",
      link: "https://www.nhatot.com/mua-ban-nha-dat-quan-6-tp-ho-chi-minh/121449992.htm"
    },
    {
      title:
        "TÂN KỲ TÂN QUÝ- TÂN PHÚ- 4*12M –48M2- 4 TẦNG- VUÔNG VỨC- GIÁ 5 TỶ 85",
      details: "4 PN • Nhà ngõ, hẻm",
      price: "5,85 tỷ",
      areaPrice: "122 tr/m²",
      totalArea: "48 m²",
      locationTime: "Tp Hồ Chí Minh • 1 phút trước",
      link: "https://www.nhatot.com/mua-ban-nha-dat-quan-6-tp-ho-chi-minh/121449992.htm"
    },
    {
      title:
        "Bán nhà hẻm xe hơi Nguyễn Duy Cung, P.12, 3,4 x 10 NH 10, 4PN giá 4.86",
      details: "4 PN • Nhà ngõ, hẻm",
      price: "4,86 tỷ",
      areaPrice: "116 tr/m²",
      totalArea: "42 m²",
      locationTime: "Tp Hồ Chí Minh • 1 phút trước",
      link: "https://www.nhatot.com/mua-ban-can-ho-chung-cu-quan-son-tra-da-nang/114028645.htm"
    },
    {
      title: "Nhà 2 Tầng Gần Gigamall Chỉ 5 Tỷ",
      details: "2 PN • Nhà ngõ, hẻm",
      price: "5 tỷ",
      areaPrice: "98 tr/m²",
      totalArea: "51 m²",
      locationTime: "Tp Hồ Chí Minh • 1 phút trước",
      link: "https://www.nhatot.com/mua-ban-can-ho-chung-cu-quan-son-tra-da-nang/114028645.htm"
    },
    {
      title:
        "Bán nhà Tân Mai, mặt ngõ thông, trước nhà baga tránh nhà mới hiện đại,",
      details: "3 PN • Nhà ngõ, hẻm",
      price: "6,5 tỷ",
      areaPrice: "135 tr/m²",
      totalArea: "48 m²",
      locationTime: "Hà Nội • 2 phút trước",
      link: "https://www.nhatot.com/mua-ban-can-ho-chung-cu-quan-son-tra-da-nang/114028645.htm"
    },
    {
      title: "BÁN ĐẤT ĐẸP HẺM 1 XẸC NGẮN TL15 QUẬN 12",
      details: "Đất thổ cư • Ngang 5 m",
      price: "6,8 tỷ",
      areaPrice: "40 tr/m²",
      totalArea: "172 m²",
      locationTime: "Tp Hồ Chí Minh • 2 phút trước",
      link: "https://www.nhatot.com/mua-ban-can-ho-chung-cu-quan-son-tra-da-nang/114028645.htm"
    },
    {
      title: "BÁn GẤp",
      details: "Đất thổ cư • Ngang 5 m",
      price: "450 triệu",
      areaPrice: "1,8 tr/m²",
      totalArea: "250 m²",
      locationTime: "Bình Phước • 2 phút trước",
      link: "https://www.nhatot.com/mua-ban-nha-dat-quan-12-tp-ho-chi-minh/122918333.htm"
    },
    {
      title: "200m2 2 mặt tiền KQH Thai Dương, Hải Dương, Tp Huế",
      details: "Đất nền dự án • Ngang 10 m",
      price: "1,9 tỷ",
      areaPrice: "9,5 tr/m²",
      totalArea: "200 m²",
      locationTime: "Thừa Thiên Huế • 2 phút trước",
      link: "https://www.nhatot.com/mua-ban-nha-dat-quan-12-tp-ho-chi-minh/122918333.htm"
    },
    {
      title: "14,8Tỷ, Nhà Hoàng Đạo Thành, DT 80m2*4Tầng, Phân Lô, Ô Tô Tránh",
      details: "5 PN • Nhà mặt phố, mặt tiền",
      price: "14,8 tỷ",
      areaPrice: "185 tr/m²",
      totalArea: "80 m²",
      locationTime: "Hà Nội • 2 phút trước",
      link: "https://www.nhatot.com/mua-ban-nha-dat-quan-12-tp-ho-chi-minh/122918333.htm"
    },
    {
      title:
        "BÁN GẤP ĐẤT TÂN BÌNH, HẺM XE TẢI, PHẠM VĂN BẠCH, 4.7X16M, NHỈNH 5 TỶ",
      details: "Đất thổ cư • Ngang 4.6 m",
      price: "5,3 tỷ",
      areaPrice: "74 tr/m²",
      totalArea: "72 m²",
      locationTime: "Tp Hồ Chí Minh • 2 phút trước",
      link: "https://www.nhatot.com/mua-ban-nha-dat-quan-12-tp-ho-chi-minh/122918333.htm"
    },
    {
      title:
        "Giá trị! Bán nhà VŨ TRỌNG PHỤNG, 36m2, 7 tỷ, Nhà đẹp, 2 thoáng, Ngõ",
      details: "4 PN • Nhà ngõ, hẻm",
      price: "7 tỷ",
      areaPrice: "194 tr/m²",
      totalArea: "36 m²",
      locationTime: "Hà Nội • 2 phút trước",
      link: "https://www.nhatot.com/mua-ban-nha-dat-quan-go-vap-tp-ho-chi-minh/123092990.htm"
    },
    {
      title: "Chủ kẹt tien gâp cần bán 260m có 100m thổ cư trên đất",
      details: "Đất thổ cư • Ngang 5 m",
      price: "350 triệu",
      areaPrice: "1,4 tr/m²",
      totalArea: "260 m²",
      locationTime: "Bình Dương • 2 phút trước",
      link: "https://www.nhatot.com/mua-ban-nha-dat-quan-go-vap-tp-ho-chi-minh/123092990.htm"
    },
    {
      title: "Nhà 40m2 Hẻm 5m Gần BV Thủ Đức Chỉ 2.85 Tỷ",
      details: "2 PN • Nhà ngõ, hẻm",
      price: "2,85 tỷ",
      areaPrice: "71 tr/m²",
      totalArea: "40 m²",
      locationTime: "Tp Hồ Chí Minh • 2 phút trước",
      link: "https://www.nhatot.com/mua-ban-nha-dat-quan-go-vap-tp-ho-chi-minh/123092990.htm"
    },
    {
      title:
        "Hiếm! Bán căn 48.5 m Ngọc Thụy, Long Biên, Lô góc - kinh doanh giá tốt",
      details: "4 PN • Nhà ngõ, hẻm",
      price: "7,85 tỷ",
      areaPrice: "164 tr/m²",
      totalArea: "48 m²",
      locationTime: "Hà Nội • 2 phút trước",
      link: "https://www.nhatot.com/mua-ban-nha-dat-quan-go-vap-tp-ho-chi-minh/123092990.htm"
    },
    {
      title:
        "NHÀ MỚI XÂY 4 TẦNG HƯƠNG LỘ 2, BÌNH TÂN. 4×20M SHR, HXH, CÓ THANG MÁY",
      details: "4 PN • Nhà ngõ, hẻm",
      price: "7,6 tỷ",
      areaPrice: "95 tr/m²",
      totalArea: "80 m²",
      locationTime: "Tp Hồ Chí Minh • 2 phút trước",
      link: "https://www.nhatot.com/mua-ban-dat-huyen-cu-chi-tp-ho-chi-minh/122879111.htm"
    }
  ];

  const extractTime = (text) => {
    const parts = text.split(" • ");
    if (parts.length > 2) {
      return parts[1];
    }
    return parts.length > 1 ? parts[parts.length - 1] : null;
  };

  const columns = [
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
      dataIndex: "locationTime",
      key: "locationTime"
    },
    {
      title: "Time",
      dataIndex: "locationTime",
      key: "time",
      render: (text) => extractTime(text)
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
      render: () => (
        <Select
          defaultValue="none"
          style={{ width: 120 }}
          options={[
            { value: "none", label: "None" },
            { value: "completed", label: "Completed" },
            { value: "rejected", label: "Rejected" }
          ]}
        />
      )
    }
  ];

  const [testOutput, setTestOutput] = useState("");

  const runTests = async () => {
    setTestOutput("Running tests...");
    try {
      const response = await fetch(`http://localhost:5000/run-tests?page=${2}`);
      const data = await response.json();
      setTestOutput(data.output || data.error);
    } catch (error) {
      setTestOutput("Error running tests");
    }
  };

  return (
    <>
      <div style={{ marginBottom: "40px" }}>
        <Button color="primary" variant="outlined" onClick={runTests}>
          Fetch Data
        </Button>

        <div className="test-output">{testOutput}</div>
      </div>

      <TableAnt className="content" dataSource={dataSource} columns={columns} />
    </>
  );
};

export default Crawl;
