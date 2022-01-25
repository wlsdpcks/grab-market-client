import { useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://fa3dc8c1-5514-4a83-93c6-8d869939e8f4.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error("에러: ", error);
      });
  }, []);
  if (product === null) {
    return <h1>상품 정보 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2020년 12월 7일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
