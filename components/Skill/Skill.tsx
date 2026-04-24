import skillStyles from "@styles/skill/skill.module.scss";

const SKILL_MAX_LEVEL = 5;

type SkillItem = { name: string; level: number };

const skillCategories: { label: string; items: SkillItem[] }[] = [
  {
    label: "core",
    items: [
      { name: "React", level: 3 },
      { name: "Next.js", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "TypeScript", level: 2 },
      { name: "Git / GitHub / GitLab", level: 3 },
      { name: "HTML", level: 4 },
      { name: "CSS", level: 4 },
    ],
  },
  {
    label: "other",
    items: [
      { name: "Storybook", level: 2 },
      { name: "ESLint", level: 2 },
      { name: "Prettier", level: 2 },
      { name: "Copilot", level: 2 },
      { name: "Vercel", level: 2 },
      { name: "Figma", level: 3 },
      { name: "Google Analytics", level: 2 },
    ],
  },
];

export const Skill = () => {
  return (
    <div className={skillStyles.skillRoot}>
      {skillCategories.map((category) => (
        <section key={category.label} className={skillStyles.skillSection}>
          <p className={skillStyles.categoryLabel}>{category.label}</p>
          <ul className={skillStyles.skillSection__list}>
            {category.items.map((item) => (
              <li key={item.name} className={skillStyles.skillSection__listItem}>
                <span className={skillStyles.skillSection__itemName}>
                  {item.name}
                </span>
                <span
                  className={skillStyles.skillLevel}
                  aria-label={`5段階中${item.level}`}
                >
                  {Array.from({ length: SKILL_MAX_LEVEL }, (_, i) => (
                    <span
                      key={i}
                      className={
                        i < item.level
                          ? skillStyles.skillLevel__dotFilled
                          : skillStyles.skillLevel__dot
                      }
                    />
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
