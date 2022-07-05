import React, { Dispatch, FunctionComponent, SetStateAction, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPaper, load, paper } from "../../app/paper";
import { requestGetGift } from "../../app/paper";
import { RootState } from "../../app/store";
import { user } from "../../app/users";
import AuthRouter from "../AuthRouter";
import "../front/gi.css";
import ProfileNav from "../ProfileNav";
interface IProps {
  setIsSelect: Dispatch<SetStateAction<boolean>>;
}
const PapersList: FunctionComponent<IProps> = (props: IProps) => {
  const dispatch = useDispatch();
  const papers: Array<paper> = useSelector((state: RootState) => state.paper.papers);
  const me: user = useSelector((state: RootState) => state.user.me);

  useEffect(() => {
    dispatch(load());
  }, [dispatch]);

  return (
    <>
      <AuthRouter />
      <ProfileNav />
      <div className="">
        <div className="row">
          <div className="text-center">
            <h1>{me?.name}님에게 온 Rollin</h1>
          </div>
          <div className="row row-cols-5">
            {papers?.map((paper, index) => (
              <figure
                key={index}
                id={paper.nickname}
                className="figure col"
                onClick={(e) => {
                  // alert(`${e.currentTarget.id}님이 보낸 Rollin으로 이동`);
                  dispatch(
                    selectPaper({
                      id: paper.id,
                      userId: paper.userId,
                      content: paper.content,
                      nickname: paper.nickname,
                      giftId: paper.giftId,
                    })
                  );
                  dispatch(requestGetGift({ giftId: paper.giftId }));
                  props.setIsSelect(true);
                }}
              >
                <figcaption className="figure-caption">from {paper.nickname}</figcaption>
                <img className="img2" src="img/note.png" alt={paper.nickname} title={paper.nickname} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PapersList;
