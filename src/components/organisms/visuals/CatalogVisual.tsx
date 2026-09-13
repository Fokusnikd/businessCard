import styles from './CatalogVisual.module.css'

export function CatalogVisual() {
  return (
    <div className={styles.page}>
      <strong>Objects for living.</strong>
      <div className={styles.filters}>
        <span>Все объекты</span>
        <span>Свет</span>
        <span>Декор</span>
      </div>
      <div className={styles.products}>
        {['01', '02', '03'].map((n) => (
          <div key={n}>
            <div className={styles.object} />
            <small>Объект {n} ↗</small>
          </div>
        ))}
      </div>
    </div>
  )
}
