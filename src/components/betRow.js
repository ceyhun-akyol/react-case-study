import React from "react";
import { useBasket } from "../context/basket";

const getO = (ocg, p1, p2, p3, p4) => {
  try {
    return ocg[p1][p2][p3][p4];
  } catch (error) {
    return "";
  }
};

const BetRow = (props) => {
  const { name, date, day, league, code, time, ocg } = props;
  const { basketList, addBasket, removeBasket } = useBasket();

  const renderClickableTd = (p1, p2, p3, p4) => {
    const id = [code, p1, p2, p3, p4].join("-");

    const selected =
      basketList.findIndex((a) => a.id === id) !== -1 ? "selected" : "";

    const click = () =>
      selected
        ? removeBasket(id)
        : addBasket({
            id: [code, p1, p2, p3, p4].join("-"),
            mbs: ocg["1"].MBS,
            code: code,
            name: name,
            o: getO(ocg, p1, p2, p3, p4),
          });

    return (
      <td onClick={click} className={`clickable ${selected}`}>
        {getO(ocg, p1, p2, p3, p4)}
      </td>
    );
  };

  return (
    <>
      <tr>
        <td>{`${date} ${day} ${league}`}</td>
        <td>Yorumlar</td>
        <td>&nbsp;</td>
        <td>{getO(ocg, "1", "OC", "0", "N")}</td>
        <td>{getO(ocg, "1", "OC", "1", "N")}</td>
        <td>2</td>
        <td>{getO(ocg, "5", "OC", "25", "N")}</td>
        <td>{getO(ocg, "5", "OC", "25", "N")}</td>
        <td>H1</td>
        <td>1</td>
        <td>X</td>
        <td>2</td>
        <td>H2</td>
        <td>{getO(ocg, "2", "OC", "3", "N")}</td>
        <td>{getO(ocg, "2", "OC", "4", "N")}</td>
        <td>{getO(ocg, "2", "OC", "5", "N")}</td>
        <td>Var</td>
        <td>Yok</td>
        <td>+99</td>
      </tr>

      <tr>
        <td>{`${code} ${time} ${name}`}</td>
        <td>Yorumlar</td>
        <td>{ocg["1"].MBS}</td>
        {renderClickableTd("1", "OC", "0", "O")}
        {renderClickableTd("1", "OC", "1", "O")}
        {renderClickableTd("1", "OC", "2", "O")}
        {renderClickableTd("5", "OC", "25", "O")}
        {renderClickableTd("5", "OC", "26", "O")}
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        {renderClickableTd("2", "OC", "3", "O")}
        {renderClickableTd("2", "OC", "4", "O")}
        {renderClickableTd("2", "OC", "5", "O")}
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    </>
  );
};

export default BetRow;
