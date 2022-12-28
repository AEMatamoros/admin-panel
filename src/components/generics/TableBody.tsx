import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

interface iTableBody {
  type: string;
  index: number;
  value: string;
}
export default function TableBody({ type, index, value }: iTableBody) {
  return (
    <>
      {type == "text" ? (
        <div className=" text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-l border-[#E8E8E8] ">
          {value}
        </div>
      ) : (
        <>
          <div
            key={index}
            className=" text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-l border-[#E8E8E8] "
          >
            {!!value ? (
              <FontAwesomeIcon icon={faCircle} className="text-green-500" />
            ) : (
              <FontAwesomeIcon icon={faCircle} className="text-red-500" />
            )}
          </div>
        </>
      )}
    </>
  );
}
