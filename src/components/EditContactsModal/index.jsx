import { useState } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import './styles.css';

function EditContactsModal({
    openEdit,
    handleEditContact
}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        openEdit &&
        <div className='backdrop'>
            <div className='modal modal-edit'>
                <img
                    src={CloseIcon}
                    className='close-icon'
                    alt="close"
                    onClick={toggleEditModal}
                />
                <h2>Editar contato</h2>
                <form className='form-edit'>
                    <input
                        type="text"
                        placeholder='Nome'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        type="text"
                        placeholder='E-mail'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="text"
                        placeholder='Telefone'
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                </form>
                <div className='container-buttons'>
                    <button
                        className='btn-green btn-confirm'
                    >
                        Salvar
                    </button>
                    <button
                        className='btn-red btn-cancel'
                        onClick={handleEditContact}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>

    )
}

export default EditContactsModal