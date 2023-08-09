import { useState } from "react";
import React from "react";
import "./Content.css";
import ContentItemHeader from "./ContentItemHeader";

const ContentItem = ({ entry, itemColumns}) => {
  const [show, setShow] = useState(false);
  const [tempId, setTempId] = useState();

  function toggleShow(id) {
    setShow(!show);
    setTempId(id);
  }

  var buttonText = show ? "^" : "v";

  console.log(entry);
  // console.log(entry.items);

  return (
    <>
      <button className="item-button" onClick={() => toggleShow(entry.id)}>
        {buttonText}
      </button>
      <ContentItemHeader
        entry={entry}
        tempId={tempId}
        itemColumns={itemColumns}
        showItems={show}
      />
      <tr>
        {show && tempId === entry.id ? (
          <>
            {itemColumns.map((itemColumn) => (
              <td className="lots-table-cell8">
                {entry.lotItems.map((item) => (
                  <div className="lots-table-cell10">
                    {/* {itemColumn === "documentUrl" ? (
                      <p>
                        <a href={item[itemColumn]}>document URL</a>
                      </p>
                    ) : ( */}
                      <p>{item[itemColumn]}</p>
                    {/* )} */}
                  </div>
                ))}
              </td>
            ))}
          </>
        ) : (
          ""
        )}
      </tr>
    </>
  );
};

export default ContentItem;
