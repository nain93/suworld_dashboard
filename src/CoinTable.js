import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  > table {
    /* color: #4274ff; */
    color: white;
    width: 100%;
    text-align: center;
    table-layout: fixed;
    > tr {
      td {
      }
      td:nth-child(2) {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  /* background-color: rgba(10, 19, 45, 0.5); */
  box-shadow: inset 0px -10px 30px -10px #00517f;
  border: 1px solid rgba(0, 81, 127, 0.5);
`;

function CoinTable() {
  return (
    <Container>
      <table>
        <tr>
          <th></th>
          <th></th>
          <th>블록정보</th>
        </tr>
        <tr>
          <th>name</th>
          <th>token</th>
          <th>apply</th>
          <th>time</th>
          <th>result</th>
        </tr>
        <tr>
          <td>asd</td>
          <td>SW5q12x363sa6c0asd</td>
          <td>asd</td>
          <td>asd</td>
          <td>asd</td>
        </tr>
        <tr>
          <td>asd</td>
          <td>GE2qa12x54dasa6c0asd</td>
          <td>asd</td>
          <td>asd</td>
          <td>asd</td>
        </tr>
        <tr>
          <td>asd</td>
          <td>CQu8qqa12asdg4dasa</td>
          <td>asd</td>
          <td>asd</td>
          <td>asd</td>
        </tr>
        <tr>
          <td>asd</td>
          <td>TD12aacvv1dfavvasfzxc</td>
          <td>asd</td>
          <td>asd</td>
          <td>asd</td>
        </tr>
        <tr>
          <td>asd</td>
          <td>GV12asfacaasdfadfda</td>
          <td>asd</td>
          <td>asd</td>
          <td>asd</td>
        </tr>
      </table>
    </Container>
  );
}

export default CoinTable;
