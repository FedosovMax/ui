import React from "react";
import { useState } from "react";

import "./ContentMain.css";
import ContentBar from "../ContentBar/ContentBar";

const ContentMain = ({ entry, columns, itemColumns, toggleShow, setEntry }) => {
  // const [show, setShow] = useState(false);
  // const [tempId, setTempId] = useState();

  // console.log(entry);

  function toggleShowWithEntry(id, entry) {
    toggleShow(id);
    setEntry(entry);
  }

  let participants =
    entry.participantNames === "" ? "" : entry.participantNames;

  return (
    <>
    {/* {show && tempId === entry.id ? 
      <ContentBar entry={entry} itemColumns={itemColumns} tempId={tempId} showItems={show} />
      : ""
    } */}
    <tr className="lots-table-cell2" onClick={() => toggleShowWithEntry(entry.id, entry)}>
      {/* <button className="item-button-big" onClick={() => toggleShow(entry.id)}> */}
      {/* </button>  */}
      {/* <ContentItemHeader
        entry={entry}
        tempId={tempId}
        itemColumns={itemColumns}
        showItems={show}
      /> */}
      {columns.map((column) => (
        <td key="column">
          {column === "lotURL" ? (
            <p>
              <a href={entry[column]}>Prozorro URL</a>
            </p>
          ) : (
            <>
              {column === "participantNames" ? (
                <>
                  <div className="show-participants">
                    <p>{participants[0] != null ? participants[0].name + "..." : ""}</p>
                    <div className="participant-list">
                      {participants.map((participant) => (
                        <p>{participant.name}</p>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {column === "pdfURL" ? (
                    <p>
                      <a href={entry[column]}>Document URL</a>
                    </p>
                  ) : (
                    <p>{entry[column]}</p>
                  )}
                </>
                // <p>{entry[column]}</p>
              )}
            </>
          )}
        </td>
      ))}
    {/* </button> */}
    </tr>
    </>
  );
};

export default ContentMain;
