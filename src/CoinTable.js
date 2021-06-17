import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { socket } from "./App";

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
    > tbody {
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
  const [block, setBlock] = useState([]);

  useEffect(() => {
    if (block.length > 4) {
      return;
    }
    socket.on("block", (data) => {
      const json = JSON.parse(data);
      setBlock((curData) => [json, ...curData]);
    });
    socket.on("disconnect", (reason) => {
      console.log(reason);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>블록정보</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>block</th>
            <th>timestamp</th>
            <th>trx_count</th>
            <th>reward</th>
            <th>passtime</th>
          </tr>
        </tbody>
        {!block ? (
          <div>...loading</div>
        ) : (
          <>
            {/* {block.map((item, idx) => (
              <tbody key={idx}>
                <tr>
                  <td>{item.block}</td>
                  <td>{item.timestamp}</td>
                  <td>{item.trx_count}</td>
                  <td>{item.reward}</td>
                  <td>{item.passtime}</td>
                </tr>
              </tbody>
            ))} */}
          </>
        )}
      </table>
    </Container>
  );
}

export default CoinTable;
