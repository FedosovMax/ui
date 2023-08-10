import React from "react";
import "./ContentItemHeader.css";

const ContentItemHeader = ({ entry, tempId, itemColumns, showItems }) => {
  return (
    <tr>
      {showItems && tempId === entry.id ? (
        <>
          {itemColumns.map((itemColumn) => (
            <td className="lots-table-cell7">
              <p>
                <b>{itemColumn}</b>
              </p>
            </td>
          ))}
        </>
      ) : (
        ""
      )}
    </tr>
  );
};

export default ContentItemHeader;
