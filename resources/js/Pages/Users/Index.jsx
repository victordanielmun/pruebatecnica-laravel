import Modal from '@/Components/Modal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react'
import { useState } from 'react';
import UpdateUser from './UpdateUser';
import UserView from './UserView';
import DeleteUser from './DeleteUser';

export default function Index({ users }) {
  const [showModalView, setShowModalView] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [userSelected, setUserSelected] = useState(null);

  const handleOpenModalEdit = (user) => {
    setUserSelected(user);
    setShowModalEdit(true);
  };

  const handleOpenModalView = (user) => {
    setUserSelected(user);
    setShowModalView(true);
  };

  const handleOpenModalDelete = (user) => {
    setUserSelected(user);
    setShowModalDelete(true);
  };


  const handleCloseModal = () => {
    setShowModalEdit(false);
    setShowModalView(false);
    setShowModalDelete(false);
  };

  
  return (
    <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Usuarios
            </h2>
        }
    >
      <Head title="Users availables" />
        

      <Modal
        show={showModalEdit}
        onClose={handleCloseModal}
        maxWidth="2xl"
      >
        {/* Modal content here */}
        <UpdateUser user={userSelected} />
      </Modal>

      
      <Modal
        show={showModalView}
        onClose={handleCloseModal}
        maxWidth="2xl"
      >
        {/* Modal content here */}
        <UserView user={userSelected} />
      </Modal>

      <Modal
        show={showModalDelete}
        onClose={handleCloseModal}
        maxWidth="2xl"
      >
        {/* Modal content here */}
        <DeleteUser user={userSelected} />
      </Modal>


      <div className='base-200 h-fit my-2' data-theme="garden">
        {/* tabla */}

        <div className="bg-neutral-100 overflow-x-auto">
        <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th className='text-black'>No</th>
                <th className='text-black'>Nombre</th>
                <th className='text-black'>Correo</th>
                <th className='text-black'>Estado</th>
                <th className='text-black'></th>
              </tr>
            </thead>
            <tbody>

              {users.map((user, index) => (
                <tr key={index}>
                  <th>
                    <label>
              {index+1}
                    </label>
                  </th>
                  <td>
                    {user.name} {user.last_name}
                  </td>
                  <td>
                    {user.email}
                  </td>
                  
                  <td>
                    {user.is_active ? 'Activo' : 'Inactivo'}
                    </td>
                  <th>

                    <div className='flex'>
    
                      <button onClick={() => handleOpenModalView(user)}  className='m-2 hover:btn-accent'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye hover:fill-accent" viewBox="0 0 16 16">
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                        </svg>
                      </button>

                      <button onClick={() => handleOpenModalEdit(user)} href={route('users.show', user.id)} className='m-2 hover:btn-accent' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right hover:fill-accent" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                        </svg>
                      </button>

                      <button onClick={() => handleOpenModalDelete(user)}  className='m-2 hover:btn-accent'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-download hover:fill-accent" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                      </button>

                    </div>

                  </th>
                </tr>

              ))}

            </tbody>
            {/* foot */}

          </table>

        </div>

      </div>

    </AuthenticatedLayout>
  )
}