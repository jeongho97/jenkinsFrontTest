import { AxiosResponse } from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { SELECT_ALL_BOARDS, BOARDS_REQUEST, FAILED_REQUEST, INSERT_BOARD, INSERT_REQUEST, board } from "./board";
import { AuthAxios, defaultAxios, fileAxios } from "./AxiosApi";

function* handleInsertBoards(action: { data: { content: any; img: any; file: any } }) {
  try {
    const Boards: Array<board> = yield select((state: any) => state.boards.allBoards);
    const userName: string = yield select((state) => state.users);
    console.log("username : ", userName);
    console.log("handleInsertBoards start");
    let filePath = "";
    console.log(action.data);
    const { content, img, file } = action.data;
    console.log("content: ", content, "img: ", img, "file: ", file);
    let uploadFile = new FormData();
    uploadFile.append("file", file);
    if (file) {
      yield call(fileAxios, "/upload", "post", uploadFile);
    }
    const post: any = {
      content,
      img: filePath ? filePath : "/img/" + file.name,
      userId: null,
    };
    //console.log("기존 boards: ", Boards);
    // let newBoards = Boards.data.slice();
    // let newBoards.concat(post);
    //console.log("붙일거야 :", Boards.concat(post));
    //console.log("post입니다!!!: ", post);
    console.log("newBoards: ", Boards);
    yield call(AuthAxios, "/board/", "post", post);
    yield put({
      type: INSERT_BOARD,
      payload: Boards.concat(post),
    }); //put은 특정 액션을 dispatch한다
  } catch (error) {
    yield put({
      type: FAILED_REQUEST,
      error: error,
    });
  }
}
function* handleSelectAllBoards() {
  try {
    console.log("handleSelectAllBoards start");
    const allBoards: AxiosResponse<any, any> = yield call(defaultAxios, "/board/", "get", null);
    // console.log(allBoards.data);
    yield put({
      type: SELECT_ALL_BOARDS,
      payload: allBoards.data,
    }); //put은 특정 액션을 dispatch한다
  } catch (error) {
    yield put({
      type: FAILED_REQUEST,
      error: error,
    });
  }
}

export function* watchGetBoards() {
  console.log("saga / watchGetBoards");
  yield takeLatest<any, any>(INSERT_REQUEST, handleInsertBoards);
  yield takeLatest(BOARDS_REQUEST, handleSelectAllBoards);
}
