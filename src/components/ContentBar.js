import { useState } from "react";
import React from "react";
import "./ContentBar.css";
import ContentItemHeader from "./ContentItemHeader";

const ContentItem = ({ entry, itemColumns, tempId, showItems}) => {
  // const [show, setShow] = useState(false);
  // const [tempId, setTempId] = useState();

  // function toggleShow(id) {
  //   setShow(!show);
  //   setTempId(id);
  // }

  // var buttonText = show ? "^" : "v";

  console.log(entry);
  console.log(entry.lotItems);
  console.log(itemColumns)
  console.log(tempId)
  console.log(entry.id)
  console.log(showItems)

  return (
    <>
      <div className="full-info-bar">
      {/* <ContentItemHeader
        entry={entry}
        tempId={tempId}
        itemColumns={itemColumns}
        showItems={showItems}
      />   */}
      <tr>
        {showItems && tempId === entry.id ? (
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
      </div>
    </>
  );
};

export default ContentItem;
