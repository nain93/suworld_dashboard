import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { socket } from "./App";
import Moment from "react-moment";
import "moment/locale/ko";
import { useInterval } from "react-use";

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
      td:nth-child(4) {
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
  from {
    color:red;
    opacity: 0;
  }
  to {
    color:white;
    opacity: 1;
    transform: none;
  }
  /* 0% {
    color:red;
    opacity: 0;
  }
  100% {
    color:white;
    opacity: 1;
  } */
`;

const TableStyle = styled.tbody`
  transform: translateY(-50px);
  opacity: 0;
  animation: ${tableFade} 0.2s ease-in-out forwards;
`;

function CoinTable() {
  const [block, setBlock] = useState([]);
  const [fadeOn, setFadeOn] = useState(false);
  const [test, setTest] = useState("");

  useEffect(() => {
    socket.on("block", (data) => {
      const json = JSON.parse(data);
      const now = new Date();
      const date = new Date(json.timestamp);
      setTest(now - date);
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
          // passtime: Math.ceil((now - date) / 1000),
        },
        ...curData,
      ]);
    });
    setFadeOn(true);
  }, []);

  useEffect(() => {
    // console.log(block);
    if (block.length > 10) {
      setBlock((block) => [...block, { passtime: Math.ceil(test) / 1000 }]);
      setBlock((block) => [...block.slice(0, 10)]);
    }
  }, [block, test]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Block information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Block</th>
            <th>Timestamp</th>
            <th>Trx_count</th>
            <th>Hash</th>
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
                  <td>{item.hash}</td>
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
