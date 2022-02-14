import styles from './styles.module.scss';

export function Player() {

    return (
        <div className={styles.playerContainer}>
            <header>
                <img src='./PlayingNow.svg' alt='Tocando agora'/>
                <strong>Tocando agora</strong>
            </header>

            <div className={styles.emptyPlayer}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        <div className={styles.emptySlider} />
                    </div>
                    <span>00:00</span>
                </div>

                <div className={styles.buttons}>
                    <button type='button'>
                        <img src='./arrow-random.svg' alt='Embaralhar' className={styles.shuffleButton}/>
                    </button>
                    <button type='button'>
                        <img src='./previous.svg' alt='Tocar anterior' />
                    </button>
                    <button type='button' className={styles.playButton}>
                        <img src='./play.svg' alt='Tocar' />
                    </button>
                    <button type='button'>
                        <img src='./step-forward.svg' alt='Tocar próxima' />
                    </button>
                    <button type='button'>
                        <img src='./repeat.svg' alt='Repetir' className={styles.repeatButton}/>
                    </button>
                </div>
            </footer>
        </div>
    );
}