import './styles.css'
import DeletIcon from '../../assets/delete-icon.svg'
import EditIcon from '../../assets/edit-icon.svg'

function Table() {
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
                        <img src={EditIcon} alt="Edit" />
                        <img src={DeletIcon} alt="Delete" />
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Table
