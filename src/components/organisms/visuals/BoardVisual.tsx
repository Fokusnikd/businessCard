import styles from './BoardVisual.module.css'

const columns = [
  { label: 'В планах', title: 'Новая идея', mark: '○', extra: 'Детали проекта' },
  { label: 'В работе', title: 'Первый шаг', mark: '◷' },
  { label: 'Готово', title: 'Всё готово', mark: '✓' },
] as const

export function BoardVisual() {
  return (
    <div className={styles.page}>
      <strong>Меньше хаоса. Больше дела.</strong>
      <div className={styles.columns}>
        {columns.map((column) => (
          <div key={column.label}>
            <small>{column.label}</small>
            <div className={styles.task}>
              <span />
              <b>{column.title}</b>
              <small>
                {column.mark} Задача
              </small>
            </div>
            {'extra' in column && column.extra ? (
              <div className={styles.task}>
                <span />
                <b>{column.extra}</b>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
