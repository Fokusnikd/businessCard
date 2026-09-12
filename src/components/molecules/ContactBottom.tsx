import { ArrowHint, TextLink } from '@/components/atoms'

import styles from './ContactBottom.module.css'

type ContactBottomProps = {
  email: string
  note: string
}

export function ContactBottom({ email, note }: ContactBottomProps) {
  return (
    <div className={styles.bottom}>
      <TextLink className={styles.email} href={`mailto:${email}`}>
        {email} <ArrowHint />
      </TextLink>
      <span className={styles.note}>{note}</span>
    </div>
  )
}
