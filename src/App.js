import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd"; // antd에서 갖고오는 버튼을 사용한다.
import { DownloadOutlined } from "@ant-design/icons";
function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            {/* "/"슬래시는 기본경로로 가겠다는 뜻 */}
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              // 클릭 시 콜백함수 실행
              history.push("./upload"); // 다른 경로로 이동할 수 있게 함(upload 화면으로)
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path={"/"}>
            <MainPageComponent />
          </Route>
          <Route exact={true} path={"/products/:id"}>
            <ProductPage />
          </Route>
          <Route exact={true} path={"/upload"}>
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
