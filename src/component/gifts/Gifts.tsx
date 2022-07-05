import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IMG_PATH } from "../../app/AxiosApi";
import { load2, load3,updateView } from "../../app/gifts";
import { requestGetGiftName, requestSort } from "../../app/gifts";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { SendProps } from "../profile/SendBody";
import "../front/gi.css";
const Gifts: FunctionComponent<SendProps> = (props: SendProps) => {
  const dispatch = useDispatch();
  const allGifts = useSelector((state: RootState) => state.gifts.allGifts);
  const myId = localStorage.getItem("loginUser");

  const navigate = useNavigate();
  const [searchKey, setSearchKey] = React.useState("");
  const [sortKey, setSortKey] = useState("default");

  useEffect(() => {
    console.log(sortKey);
    dispatch(requestSort({ allGifts: allGifts, sortKey: sortKey }));
  }, [sortKey, dispatch]);

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchKey);
    dispatch(requestGetGiftName(searchKey));
  };
  const onClickImg = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    dispatch(load2(Number.parseInt(e.currentTarget.id)));

    dispatch(updateView(Number.parseInt(e.currentTarget.id)));

    // dispatch(load3(myId));

    navigate("/detailGift");
  };

  return (
    <div className="App">
      <div className="box">
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
            <h5 className="col-11">총상품개수 : {allGifts.length}</h5>
            <select className="form-select col" value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
              <option value="default">정렬</option>
              <option value="count">구매순</option>
              <option value="view">조회순</option>
              <option value="hprice">가격높은순</option>
              <option value="lprice">가격낮은순</option>
            </select>
          </div>
        </div>
        <br></br>
        <div className="row row-cols-4">
          {allGifts?.map((gift, index) => (
            <figure key={index} className="figure">
              <img
                className="img-thumbnail col"
                key={gift.id}
                src={`${IMG_PATH}${gift.img}`}
                alt={gift.name}
                id={gift.id.toString()}
                
                // content={gift.content}
                // count={gift.count}
                // name={gift.name}
                // view={gift.views}
                onClick={(e) => onClickImg(e)}
              ></img>
              <figcaption className="figure-caption text-center">{gift.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Gifts;
