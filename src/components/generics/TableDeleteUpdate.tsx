import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iTableOptions } from "../../interfaces/generic.interfaces";
interface iTableDeleteUpdate {
  tableId: number;
  tableData: any;
  tableOptions: iTableOptions;
  fetching: boolean;
  showUpdateModal: (element: any) => void;
  handleDeleteAlert: (id: string) => void;
}

export default function TableDeleteUpdate({
  tableId,
  tableData,
  tableOptions,
  showUpdateModal,
  handleDeleteAlert,
  fetching,
}: iTableDeleteUpdate) {
  return (
    <td>
      {tableData.content.map((element: any, index: number) => (
        <div
          key={`o${index}${tableId}`}
          className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-l border-[#E8E8E8]"
        >
          <div>
            {tableOptions.updateItem?.active && (
              <button
                disabled={fetching}
                onClick={() => showUpdateModal(element)}
                title="Editar registro"
              >
                <i
                  className="text-green-400 hover:text-green-500 cursor-pointer fa-solid fa-square-pen mx-1 fa-xl"
                  key={element.id + `u`}
                ></i>
              </button>
            )}
            {tableOptions.deleteItem?.active && (
              <button
                disabled={fetching}
                onClick={() => handleDeleteAlert(element.id)}
                title="Eliminar Registro"
              >
                <i
                  className="fa-solid fa-square-xmark text-red-400 hover:text-red-500 cursor-pointer mx-1 fa-xl"
                  key={element.id + `d`}
                ></i>
              </button>
            )}
          </div>
        </div>
      ))}
    </td>
  );
}
