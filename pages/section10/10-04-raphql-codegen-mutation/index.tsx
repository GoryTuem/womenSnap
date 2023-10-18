import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    #타입 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 실제 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

//동기
export default function GraphqlMutationPage() {
  // const [createBoard] = useMutation<결과타입, 변수타입>(CREATE_BOARD);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        // 변수 정의 $생략
        writer: "문소희",
        title: "날씨가 너무 덥네요",
        contents: "여름아 얼른 지나가라~",
      },
    });
  };

  return (
    <>
      <button onClick={onClickSubmit}>graphql-API(동기) 요청하기</button>
    </>
  );
}