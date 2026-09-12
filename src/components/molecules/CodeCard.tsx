import styles from './CodeCard.module.css'

type CodeCardProps = {
  comment: string
  idea: string
  ready: string
}

export function CodeCard({ comment, idea, ready }: CodeCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.comment}>{comment}</span>
      <br />
      <span className={styles.purple}>const</span> idea ={' '}
      <span className={styles.green}>{idea}</span>;
      <br />
      <span className={styles.purple}>await</span> build(idea);
      <br />
      <span className={styles.green}>{ready}</span>
    </div>
  )
}
