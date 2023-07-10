import './styles.css';
import CloseIcon from '../../assets/close-icon.svg';
import useGlobalContext from '../../hooks/useGlobalContext';

function ConfirmModal({
    title,
    subTitle,
    textBtnConfirm,
    textBtnCancel,
    openDelete,
    handleCloseDelete,
    handleConfirmDelete
}) {

    const { currentContact } = useGlobalContext();

    return (
        openDelete &&
        <div className='backdrop'>
            <div className='modal modal-confirm'>
                <img
                    src={CloseIcon}
                    className='close-icon'
                    alt="close"
                    onClick={handleCloseDelete}
                />
                <h1>{title}</h1>
                <span>{subTitle + currentContact.nome}?</span>
                <div className='container-buttons'>
                    <button
                        className='btn-green btn-confirm'
                        onClick={handleConfirmDelete}
                    >
                        {textBtnConfirm}
                    </button>
                    <button
                        className='btn-red btn-cancel'
                        onClick={handleCloseDelete}
                    >
                        {textBtnCancel}
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ConfirmModal