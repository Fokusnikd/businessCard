import { ArrowHint } from '@/components/atoms'
import type { ContactChannel } from '@/content/site'

import styles from './ContactList.module.css'

type ContactListProps = {
  channels: readonly ContactChannel[]
}

export function ContactList({ channels }: ContactListProps) {
  return (
    <ul className={styles.list}>
      {channels.map((channel) => {
        const externalLabel = channel.external ? ' (откроется в новой вкладке)' : ''
        return (
          <li key={channel.id} className={styles.item}>
            <a
              className={styles.link}
              href={channel.href}
              aria-label={`${channel.label}: ${channel.value}${externalLabel}`}
              {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className={styles.label}>{channel.label}</span>
              <span className={styles.value}>{channel.value}</span>
              <ArrowHint className={styles.arrow} />
            </a>
            <p className={styles.hint}>{channel.hint}</p>
          </li>
        )
      })}
    </ul>
  )
}
