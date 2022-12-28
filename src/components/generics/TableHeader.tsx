import { OrderConf } from '../index'

interface iHeaderProps {
  name: string
  state: any
  tableId: number
  obkey: string
  Orderhandler: (sortField: string) => void
}

export default function TableHeader({
  name,
  state,
  tableId,
  obkey,
  Orderhandler,
}: iHeaderProps) {
  return (
    <th className=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent cursor-pointer bg-black">
      <div className="w-full flex justify-between items-center">
        {name}
        {state.tables[tableId] && (
          <OrderConf
            state={state}
            tableId={tableId}
            obkey={obkey}
            handler={Orderhandler}
          />
        )}
      </div>
    </th>
  )
}
