import { useState } from 'react'
import DeleteIcon from '../../assets/delete-icon.svg'
import EditIcon from '../../assets/edit-icon.svg'
import ConfirmModal from '../ConfirmModal'
import './styles.css'

function Table() {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false);
    }

    const handleConfirm = () => {
        setOpen(false);
    }

    const handleDeleteContact = (contact) => {
        setOpen(true);
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
                open={open}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
            />

        </div>
    )
}

export default Table
