import styles from './Fallback.module.scss';
import type { FallbackProps } from './Fallback.types';

const Fallback = ({text}: FallbackProps) =>{
  return (
    <div className={styles.loading}>{text}</div>
  )
}

export default Fallback;