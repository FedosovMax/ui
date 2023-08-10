import { useState } from "react";
import React from "react";
import "./Content.css";
import ContentMain from "../ContentMain/ContentMain";

const Content = ({ entries, columns, itemColumns, toggleShow, setEntry }) => {
  console.log(entries);

  return (
    <tbody className="tbody-main">
      {entries.map((entry) => (
        <>
          <ContentMain entry={entry} columns={columns} itemColumns={itemColumns} toggleShow={toggleShow} setEntry={setEntry}/>
          {/* <div className="open-close-button"> */}
          {/* <ContentItem
            entry={entry}
            itemColumns={itemColumns}
          /> */}
          {/* </div> */}
        </>
      ))}
    </tbody>
  );
};

export default Content;
