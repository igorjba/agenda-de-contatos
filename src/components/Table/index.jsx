import { useEffect, useState } from 'react'
import DeleteIcon from '../../assets/delete-icon.svg'
import EditIcon from '../../assets/edit-icon.svg'
import useGlobalContext from '../../hooks/useGlobalContext'
import api from '../../services/api'
import ConfirmModal from '../ConfirmModal'
import EditContactsModal from '../EditContactsModal'
import './styles.css'

function Table() {
    const { token, contacts, setContacts } = useGlobalContext();

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

    const handleEditContact = (contact) => {
        setOpenEdit(true);
    }

    // const toggleDeleteModal = () => {
    //     setOpenDelete(!openDelete);
    // }
    // const toggleEditModal = () => {
    //     setOpenEdit(!openEdit);
    // }

    useEffect(() => {
        const loadContacts = async () => {
            try {
                const response = await api.get('/contatos', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (response.status > 204) {
                    return alert('Erro ao cadastrar contato')
                }
                console.log(response.data)
                console.log(contacts)
                setContacts([...response.data])

            } catch (error) {
                console.log(error);
            }
        }


        loadContacts();
    }, []);



    return (
        <div className='container-table'>
            <div className='table-header'>
                <strong>Nome</strong>
                <strong>E-mail</strong>
                <strong>Telefone</strong>
                <div></div>
            </div>

            <div className='table-body'>
                {contacts.map((contact) => {
                    return <div className='table-row' key={contact.id} >
                        <span>{contact.nome}</span>
                        <span>{contact.email}</span>
                        <span>{contact.telefone}</span>
                        <div className='container-action-buttons'>
                            <img
                                src={EditIcon}
                                alt="Edit"
                                onClick={() => handleEditContact(contact)}
                            />
                            <img
                                src={DeleteIcon}
                                alt="Delete"
                                onClick={() => handleDeleteContact(contact)}
                            />
                        </div>

                    </div>
                })}

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
                handleEditContact={handleEditContact}
            />

        </div>
    )
}

export default Table
