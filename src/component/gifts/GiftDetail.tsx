import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertGift, postEmail } from "../../app/gifts";
import { IMG_PATH } from "../../app/AxiosApi";
import { Form, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import { select } from "../../app/paper";
import "../front/gi.css";
const GiftDetail = () => {
  const detailGift = useSelector((state: RootState) => state.gifts.detailGift);
  // const receiversInfo = useSelector((state: RootState) => state.gifts.receiversInfo);
  const receiver = useSelector((state: RootState) => state.paper.selectedUser);
  const me = useSelector((state: RootState) => state.user.me);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("onSubmit, form:", form);
    dispatch(insertGift({ ...form, giftId: detailGift.gift.id }));
    dispatch(
      postEmail({
        address: me.userId,
        title: "구매한 내역입니다",
        giftName: detailGift.gift.name,
        giftContent: detailGift.gift.content,
        giftPrice: Number(detailGift.gift.price),
        message: receiver.name + "님에게 보낸 상품 내역입니다",
      })
    );
    dispatch(select(undefined));
    navigate("/profile");
  };

  const onCancle = () => {
    dispatch(select(undefined));
    navigate("/profile");
  };

  const [form, setForm] = useState({
    nickname: "",
    userId: receiver.id,
    content: "",
  });

  // const onChangeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   console.log("onChangeSelect, e.target.value:", value);
  //   setForm({ ...form, userId: Number(value) });
  // };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // console.log("content:", value);
    setForm({ ...form, content: value });
  };

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log("nickname value", value);
    setForm({ ...form, nickname: value });
  };

  return (
    <div className="App">
      <div>
        <div className="row text-center">
          <h1>선물 상세 페이지</h1>
        </div>
        <div className="detailGiftDesc">
          <img className="detailGiftImg" key={detailGift.gift?.id} src={`${IMG_PATH}${detailGift.gift?.img}`} alt={detailGift.gift?.name}></img>
          {detailGift.gift?.content}
        </div>
        <Form>
          닉네임 <Input type="text" name="nickname" id="nickname" onChange={(e) => onChangeNickName(e)}></Input>
          <br></br>
          받는사람 : {receiver.name}
          <br></br>
          <br />
          메시지
          <Input type="textarea" id="content" onChange={(e) => onChangeContent(e)} />
          <br />
          <Button color="info" onClick={onSubmit}>
            선물하기
          </Button>
          <Button color="info" onClick={onCancle}>
            취소
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default GiftDetail;
