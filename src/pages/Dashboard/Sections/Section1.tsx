import React from 'react'
import { DashboardCard, AppTable } from '../../../components'

import { useModal, useAlert } from '../../../hooks'
import ExampleFormInModal from '../../../components/modalForms/ExampleForm'

import { tableHeaders } from '../../../db/testdb'
import { iTableOptions } from '../../../interfaces/generic.interfaces'

//Example
import ExampleCRUD from '../../../components/modalForms/TableCRUD'

//Example APi Call
import {
  getData,
  postData,
  putData,
  deleteData,
} from '../../../services/exampleService'

export default function Section1() {
  //Example CRUD
  let { CreateForm, UpdateForm, handleDeleteAlert } = ExampleCRUD()
  // Use Alert
  let { topAlert } = useAlert()

  let handleTopAlert = () => {
    topAlert('top-end', 'Almacenado Correctamente', false, 1500, true, '300px')
      .then((res) => console.log('ok'))
      .catch((err) => console.log('err'))
  }

  let tableOptions: iTableOptions = {
    createItem: {
      active: true,
      createForm: CreateForm,
    },
    updateItem: {
      active: true,
      updateForm: UpdateForm,
    },
    deleteItem: {
      active: true,
      deleteAlert: handleDeleteAlert,
    },
    searchOptions: {
      searchWord: {
        show: true,
        word: '',
      },
      pagination: {
        show: true,
        limit: 10,
        offset: 0,
      },
      order: {
        sortField: 'nombre',
        sortOrder: 'asc',
      },
    },
  }

  // Use Modal
  let { modal, handleModalShow } = useModal({
    modalHeader: 'Example Modal',
    modalBody: <ExampleFormInModal />,
  })

  return (
    <>
      {/* Inner Bar */}
      <div className="w-full border-b-2 border-gray-400">
        <h5 className="m-0 p-0 text-gray-600">Example Section</h5>
      </div>
      <AppTable
        tableId={1}
        tableName="ExampleTable"
        tableHeaders={tableHeaders}
        tableOptions={tableOptions}
        data={{ dispatchAction: getData }}
      ></AppTable>

      {/* Inner Bar */}
      <h6 className="w-full">Cards</h6>
      <DashboardCard
        width="30%"
        icon="fa-solid fa-check"
        porcentage={15}
        color="indigo"
      />
      <DashboardCard
        width="30%"
        icon="fa-solid fa-check"
        porcentage={15}
        color="green"
      />
      <DashboardCard
        width="30%"
        icon="fa-solid fa-check"
        porcentage={15}
        color="red"
      />

      <h6 className="w-full">Modal</h6>
      <button className="btn-atlantida" onClick={handleModalShow}>
        Modal
      </button>
      {modal}
      <h6 className="w-full">Alert</h6>
      <button className="btn-atlantida" onClick={handleTopAlert}>
        Top Alert
      </button>
    </>
  )
}
