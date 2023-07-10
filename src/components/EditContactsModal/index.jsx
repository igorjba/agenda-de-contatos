import { useEffect, useState } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import useGlobalContext from '../../hooks/useGlobalContext';
import api from '../../services/api';
import './styles.css';

function EditContactsModal({
    openEdit,
    handleEditContact,
    handleCloseEdit,
}) {
    const { token, currentContact, setContacts, contacts } = useGlobalContext();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleEditFormSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!name || !email || !phone) {
                return alert('Preencha todos os campos');
            }
            const response = await api.put(`/contatos/${currentContact.id}`, {
                nome: name,
                email,
                telefone: phone,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status > 204) {
                return alert('Erro ao editar contato');
            }

            const localContacts = [...contacts]

            const contactInEditingIndex = localContacts.findIndex((contact) => contact.id === currentContact.id)

            localContacts[contactInEditingIndex].nome = name;
            localContacts[contactInEditingIndex].email = email;
            localContacts[contactInEditingIndex].telefone = phone;


            setContacts([...localContacts]);
            console.log(response.data);
            handleCloseEdit();
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        if (!currentContact) {
            setName('');
            setEmail('');
            setPhone('');
            return;
        }

        const { nome, email: emailContact, telefone } = currentContact;
        setName(nome || '');
        setEmail(emailContact || '');
        setPhone(telefone || '');
    }, [currentContact]);

    return (
        openEdit && (
            <div className='backdrop'>
                <div className='modal modal-edit'>
                    <img
                        src={CloseIcon}
                        className='close-icon'
                        alt='close'
                        onClick={handleCloseEdit}
                    />
                    <h2>Editar contato</h2>
                    <form className='form-edit' onSubmit={handleEditFormSubmit}>
                        <input
                            type='text'
                            placeholder='Nome'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='E-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='Telefone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <div className='container-buttons'>
                            <button className='btn-green btn-confirm'>Salvar</button>
                            <button
                                className='btn-red btn-cancel'
                                onClick={handleEditContact}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
}

export default EditContactsModal