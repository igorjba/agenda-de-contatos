import { useState } from 'react'
import DeleteIcon from '../../assets/delete-icon.svg'
import EditIcon from '../../assets/edit-icon.svg'
import ConfirmModal from '../ConfirmModal'
import EditContactsModal from '../EditContactsModal'
import './styles.css'

function Table() {
    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState('');

    const handleCloseDelete = () => {
        setOpenDelete(false);
    }

    const handleConfirmDelete = () => {
        setOpenDelete(false);
    }

    const handleDeleteContact = (contact) => {
        setOpenDelete(true);
    }

    // const handleDeleteContact = (contact) => {
    //     setOpenDelete(!openDelete);
    // }
    // const handleEditContact = (contact) => {
    //     setOpenEdit(!openEdit);
    // }

    const toggleDeleteModal = () => {
        setOpenDelete(!openDelete);
    }
    const toggleEditModal = () => {
        setOpenEdit(!openEdit);
    }

    return (
        <div className='container-table'>
            <div className='table-header'>
                <strong>Nome</strong>
                <strong>E-mail</strong>
                <strong>Telefone</strong>
                <div></div>
            </div>

            <div className='table-body'>
                <div className='table-row'>
                    <span>João</span>
                    <span>daniel.lopes@cubos.academy</span>
                    <span>(11) 99999-9999</span>
                    <div className='container-action-buttons'>
                        <img
                            src={EditIcon}
                            alt="Edit"
                            onClick={toggleEditModal}
                        />
                        <img
                            src={DeleteIcon}
                            alt="Delete"
                            onClick={() => handleDeleteContact(1)}
                        />
                    </div>

                </div>

            </div>
            <ConfirmModal
                title="Confirmação de exclusão?"
                subTitle="Deseja excluir o contato João?"
                textBtnConfirm="Excluir"
                textBtnCancel="Cancelar"
                openDelete={openDelete}
                handleCloseDelete={handleCloseDelete}
                handleConfirmDelete={handleConfirmDelete}
            />
            <EditContactsModal
                openEdit={openEdit}
                toggleEditModal={toggleEditModal}
            />

        </div>
    )
}

export default Table
