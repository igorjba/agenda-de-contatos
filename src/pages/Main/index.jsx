import Header from '../../components/Header';
import './styles.css';
import Table from '../../components/Table';

function Main() {
  return (
    <div container-main>
      <Header />
      <main>

        <button
          className='btn-green'>
          Adicionar
        </button>

        <Table />

      </main>
    </div>
  )
}

export default Main
