import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import type { MouseEvent } from "react";

const MyIcon = styled(UpCircleOutlined)`
  color: red;
  font-size: 50px;
`;
export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (event: MouseEvent<HTMLDivElement>) => {
    alert(event.currentTarget.id);
  };
  return (
    <div id="삭제할 ID" onClick={onClickDelete}>
      <MyIcon />
    </div>
  );
}
