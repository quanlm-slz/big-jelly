import styles from './expand-button.module.scss';

const ExpandButton: React.FC<{ handleClick: () => void }> = ({ handleClick }) => {
  return (
    <div className={styles.container}>
      <button type="button" onClick={handleClick}>
        Xem thêm
      </button>
    </div>
  )
}

export default ExpandButton;
