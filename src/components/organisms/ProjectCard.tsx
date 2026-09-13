import { useEffect, useRef, type PointerEvent } from "react";
import { TagList } from "@/components/molecules";
import type { Project } from "@/content/site";

import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const frame = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    [],
  );

  function resetTilt(event: PointerEvent<HTMLElement>) {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
    event.currentTarget.removeAttribute("data-tilting");
    for (const property of [
      "--tilt-x",
      "--tilt-y",
      "--light-x",
      "--light-y",
      "--shift-x",
      "--shift-y",
    ]) {
      event.currentTarget.style.removeProperty(property);
    }
  }

  function moveTilt(event: PointerEvent<HTMLElement>) {
    if (
      event.pointerType !== "mouse" ||
      !window.matchMedia(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      ).matches
    )
      return;
    // Measure the stationary wrapper, not the rotating surface, to avoid jitter.
    const surface = event.currentTarget;
    const bounds = surface.getBoundingClientRect();
    const x = Math.max(
      0,
      Math.min(1, (event.clientX - bounds.left) / bounds.width),
    );
    const y = Math.max(
      0,
      Math.min(1, (event.clientY - bounds.top) / bounds.height),
    );
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      surface.dataset.tilting = "true";
      surface.style.setProperty("--tilt-x", `${(0.5 - y) * 10}deg`);
      surface.style.setProperty("--tilt-y", `${(x - 0.5) * 12}deg`);
      surface.style.setProperty("--light-x", `${x * 100}%`);
      surface.style.setProperty("--light-y", `${y * 100}%`);
      surface.style.setProperty("--shift-x", `${(x - 0.5) * 12}px`);
      surface.style.setProperty("--shift-y", `${(y - 0.5) * 10}px`);
      frame.current = null;
    });
  }

  return (
    <article
      className={styles.scene}
      aria-labelledby={`project-${project.id}`}
      onPointerMove={moveTilt}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
    >
      <div className={styles.card}>
        <div
          className={`${styles.preview} ${styles[project.visual]}`}
          aria-hidden="true"
        >
          <div className={styles.browser}>
            <div className={styles.toolbar}>
              <span>● ● ●</span>
              <span>{project.previewLabel}</span>
              <span>↗</span>
            </div>
            {project.visual === "service" ? (
              <div className={styles.servicePage}>
                <small>STUDIO / INDEPENDENT</small>
                <strong>
                  В фокусе —<br />
                  <i>главное.</i>
                </strong>
                <span className={styles.miniButton}>Смотреть работы ↗</span>
                <div className={styles.orbit} />
              </div>
            ) : project.visual === "catalog" ? (
              <div className={styles.catalogPage}>
                <strong>Objects for living.</strong>
                <div className={styles.filters}>
                  <span>Все объекты</span>
                  <span>Свет</span>
                  <span>Декор</span>
                </div>
                <div className={styles.products}>
                  {["01", "02", "03"].map((n) => (
                    <div key={n}>
                      <div className={styles.object} />
                      <small>Объект {n} ↗</small>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.boardPage}>
                <strong>Меньше хаоса. Больше дела.</strong>
                <div className={styles.columns}>
                  {["В планах", "В работе", "Готово"].map((label, i) => (
                    <div key={label}>
                      <small>{label}</small>
                      <div className={styles.task}>
                        <span />
                        <b>{["Новая идея", "Первый шаг", "Всё готово"][i]}</b>
                        <small>{["○", "◷", "✓"][i]} Задача</small>
                      </div>
                      {i === 0 && (
                        <div className={styles.task}>
                          <span />
                          <b>Детали проекта</b>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <span className={styles.previewCaption}>ЭСКИЗ БУДУЩЕГО ПРОЕКТА</span>
        </div>
        <div className={styles.body}>
          <div className={styles.meta}>
            <span>{project.category}</span>
            <span>{project.index}</span>
          </div>
          <h3 id={`project-${project.id}`}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <ul className={styles.features}>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className={styles.tech}>
            <span className={styles.label}>ПЛАНИРУЕМЫЙ СТЕК</span>
            <TagList items={project.tags} />
          </div>
          <div className={styles.actions}>
            {project.siteUrl ? (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Открыть сайт: ${project.title}`}
              >
                Открыть сайт ↗
              </a>
            ) : (
              <span className={styles.pending}>Демо скоро ↗</span>
            )}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Код проекта: ${project.title}`}
              >
                GitHub ↗
              </a>
            ) : (
              <span className={styles.pending}>Код скоро</span>
            )}
          </div>
          <span className={styles.status}>● {project.status}</span>
        </div>
      </div>
    </article>
  );
}
