import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IMG_PATH } from "../../http/GiftAxios";
import { load, load2, load3, updateView } from "../../app/gifts";
import GiftDetail from "./GiftDetail";
import { Navigate, useNavigate } from "react-router-dom";
import { requestGetGiftName, requestSort } from "../../app/gifts";

const Gifts = () => {
  const dispatch = useDispatch();
  const allGifts = useSelector((state) => state.gifts.allGifts);
  const myId = localStorage.getItem("loginUser");
  console.log(allGifts);

  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState();
  const [sortKey, setSortKey] = useState("default");
  console.log(allGifts);
  
  useEffect(() => {
    console.log(sortKey);
    dispatch(requestSort({ allGifts: allGifts, sortKey: sortKey }));
  }, [sortKey]);

  const onSubmitSearch = (e) => {
    e.preventDefault();
    console.log(searchKey);
    dispatch(requestGetGiftName({ giftName: searchKey }));
  };

  const onClickImg = (e) => {
    dispatch(load2(e.target.id));
    dispatch(load3(myId));
    dispatch(updateView(e.target.id));
    navigate("/detailGift");
  };

  return (
    <div className="container">
      <div className="row text-center">
        <h1>선물하기</h1>
      </div>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <form className="container" role="search" onSubmit={(e) => onSubmitSearch(e)}>
            <div className="row">
              <input type="text" className="form-control col" placeholder="Search..." name="name" onChange={(e) => setSearchKey(e.target.value)}></input>
              <button type="submit" className="btn btn-primary col-1">
                검색
              </button>
            </div>
            <br></br>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <select className="form-select" value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
            <option value="default">정렬</option>
            <option value="count">구매순</option>
            <option value="view">조회순</option>
            <option value="hprice">가격높은순</option>
            <option value="lprice">가격낮은순</option>
          </select>
        </div>
      </div>
      <div className="row row-cols-4">
        {allGifts?.map((gift, index) => (
          <figure key={index} className="figure">
            <img
              className="img-thumbnail col"
              key={gift.id}
              src={`${IMG_PATH}${gift.img}`}
              alt={gift.name}
              id={gift.id}
              content={gift.content}
              count={gift.count}
              name={gift.name}
              view={gift.views}
              onClick={(e) => onClickImg(e)}
            ></img>
            <figcaption className="figure-caption text-center">{gift.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};
export default Gifts;
