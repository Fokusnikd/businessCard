import { cx } from '@/shared/lib/cx'

import styles from './FlowboardVisual.module.css'

export function FlowboardVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.window}>
        <div className={styles.top}>
          <b>
            flow<span>board</span>
          </b>
          <span>Workspace ···</span>
        </div>
        <div className={styles.heading}>
          Сделаем сегодня<span>＋ Новая задача</span>
        </div>
        <div className={styles.kanban}>
          <div>
            <small>
              В ПЛАНАХ <i>2</i>
            </small>
            <div className={styles.task}>
              <span className={styles.label}>Дизайн</span>
              <b>
                Новый взгляд
                <br />
                на привычное
              </b>
              <hr />
              <span>↗ Концепция</span>
            </div>
            <div className={cx(styles.task, styles.stub)} />
          </div>
          <div>
            <small>
              В РАБОТЕ <i>1</i>
            </small>
            <div className={styles.task}>
              <span className={cx(styles.label, styles.violet)}>Разработка</span>
              <b>
                Каждая деталь
                <br />
                на своём месте
              </b>
              <hr />
              <span>◷ Интерфейс</span>
            </div>
          </div>
          <div>
            <small>
              ГОТОВО <i>1</i>
            </small>
            <div className={cx(styles.task, styles.completed)}>
              <span>✓</span>
              <b>
                Первый шаг
                <br />
                сделан
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
