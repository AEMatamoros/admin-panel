import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpDown,
  faUpLong,
  faDownLong,
} from "@fortawesome/free-solid-svg-icons";

export default function OrderConf({
  state,
  tableId,
  obkey,
  handler,
}: {
  state: any;
  tableId: number;
  obkey: string;
  handler: (sortField: string) => void;
}) {
  return (
    <>
      {state.tables[tableId].searchOptions.sortField !== obkey && (
        <button title="Orden ASC">
          <FontAwesomeIcon
            icon={faUpDown}
            onClick={() => {
              handler(obkey);
            }}
          ></FontAwesomeIcon>
        </button>
      )}
      {state.tables[tableId].searchOptions.sortField === obkey &&
        state.tables[tableId].searchOptions.sortOrder === "asc" && (
          <button title="Orden DESC">
            <FontAwesomeIcon
              icon={faUpLong}
              onClick={() => {
                handler(obkey);
              }}
            ></FontAwesomeIcon>
          </button>
        )}
      {state.tables[tableId].searchOptions.sortField === obkey &&
        state.tables[tableId].searchOptions.sortOrder === "desc" && (
          <button title="Orden ASC">
            <FontAwesomeIcon
              icon={faDownLong}
              onClick={() => {
                handler(obkey);
              }}
            ></FontAwesomeIcon>
          </button>
        )}
    </>
  );
}
