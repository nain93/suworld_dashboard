import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { socket } from "./App";

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 240px;
  overflow: hidden;
  > table {
    /* color: #4274ff; */
    color: white;
    width: 100%;
    max-height: 240px;
    text-align: center;
    table-layout: fixed;
    > tbody {
      height: 40px;
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

const tableFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const TableStyle = styled.tbody`
  animation: ${tableFade} 1s linear;
`;

function CoinTable() {
  const [block, setBlock] = useState([]);
  const [fadeOn, setFadeOn] = useState(false);

  useEffect(() => {
    socket.on("block", (data) => {
      const json = JSON.parse(data);
      const date = new Date(json.timestamp);
      setBlock((curData) => [
        {
          ...json,
          timestamp: `${date.getFullYear()} / ${
            date.getMonth() + 1
          } / ${date.getDate()} / ${date.getHours()}:${
            date.getMinutes() < 10
              ? `0${date.getMinutes()}`
              : `${date.getMinutes()}`
          }`,
        },
        ...curData,
      ]);
    });
    setFadeOn(true);
    return () => {
      socket.on("disconnect", (reason) => {
        console.log(reason);
      });
    };
  }, []);

  useEffect(() => {
    if (block.length > 10) {
      setBlock((block) => [...block.slice(0, 10)]);
    }
  }, [block]);

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
            <th>Block</th>
            <th>Timestamp</th>
            <th>Trx_count</th>
            <th>Reward</th>
            <th>Passtime</th>
          </tr>
        </tbody>
        {!block ? (
          <div>...loading</div>
        ) : (
          <>
            {block.map((item, idx) => (
              <TableStyle key={item.block} current={fadeOn}>
                <tr>
                  <td>
                    {String(item.block).substring(
                      0,
                      String(item.block).length - 6
                    )}
                    ,
                    {String(item.block).substring(
                      String(item.block).length - 6,
                      String(item.block).length - 3
                    )}
                    ,
                    {String(item.block).substring(
                      String(item.block).length - 3,
                      String(item.block).length
                    )}
                  </td>
                  <td>{item.timestamp}</td>
                  <td>{item.trx_count}</td>
                  <td>{item.reward}</td>
                  <td>{item.passtime}</td>
                </tr>
              </TableStyle>
            ))}
          </>
        )}
      </table>
    </Container>
  );
}

export default CoinTable;
