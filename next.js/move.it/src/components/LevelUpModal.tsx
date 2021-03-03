import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/LevelUpModal.module.css';


export const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)


  return (
    <div className={styles.overlay} >
      <div className={styles.container} >
        <header>
          {level}
        </header>

        <strong>Parabéns</strong>
        <p>Você alcançou o próximo nível 🎮!</p>

        <button
          type="button"
          onClick={closeLevelUpModal}
        >
          <img src="icons/close.svg" alt="Close"/>
        </button>
      </div>
    </div>
  )
}