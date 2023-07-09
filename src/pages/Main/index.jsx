import { useState } from 'react';
import AddContactsModal from '../../components/AddContactsModal';
import Header from '../../components/Header';
import Table from '../../components/Table';
import './styles.css';

function Main() {
  const [openAdd, setOpenAdd] = useState('');

  const toggleAddModal = () => {
    setOpenAdd(!openAdd);
  }

  return (
    <div className='container-main'>
      <Header />
      <main>
        <button
          className='btn-green'
          onClick={toggleAddModal}
        >
          Adicionar
        </button>

        <Table />
      </main>
      <AddContactsModal
        open={openAdd}
        handleClose={toggleAddModal}
      />

    </div>
  )
}

export default Main
