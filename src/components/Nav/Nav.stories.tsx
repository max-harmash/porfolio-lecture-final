import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Nav } from "./Nav";

const items = [
  { label: "Кейси", href: "/cases" },
  { label: "Виступи", href: "/talks" },
  { label: "Про мене", href: "/about" },
  { label: "Контакти", href: "/contacts" },
];

const description = `
Навігація сайту: логотип, пункти меню й кнопка праворуч. На вузькому екрані (до 768px) пункти ховаються за кнопкою «Меню» і відкриваються випадною панеллю поверх контенту: сторінка під нею не зсувається. Закривається повторним натиском, клавішею Escape або вибором пункту.

**Параметри**: \`items\` (список \`{ label, href }\`), \`current\` (адреса активного пункту), \`ctaLabel\`, \`ctaHref\`, \`defaultOpen\` (\`false\`, лише для перегляду).

**Стани пункту**
- Звичайний: \`ink\`, моноширинний, великими літерами.
- Наведення: підкреслення \`ink-muted\`.
- Фокус (Tab): контур \`ink\` 2px з відступом.
- Активний: жирний і підкреслення \`accent\`, позначка \`aria-current="page"\` для скрінрідера. Активний пункт відрізняється не лише кольором, а й жирністю.

**Вузький екран**: перегляньте в тулбарі Storybook через Viewport (іконка екрана) → Small mobile, або звузьте вікно. Кнопка «Меню» має \`aria-expanded\`, після вибору пункту меню згортається. Увімкніть \`defaultOpen\`, щоб побачити розгорнуте меню одразу.

**Токени**: \`ink\`, \`ink-muted\`, \`accent\`, \`canvas\` (фон панелі); \`font-mono\` + \`text-label\` (пункти), \`text-heading\` (логотип); \`rounded-control\`, \`rounded-card\` (панель).

**Розміщення**: компонент має \`z-20\`, щоб панель лягала поверх сторінки. Ставте його в шапку без \`overflow-hidden\` у батьків, інакше панель обріжеться. Кнопка праворуч — компонент Button (\`secondary\`, \`md\`).

**Коли використовувати**: один раз угорі кожної сторінки. **Коли ні**: для посилань усередині тексту чи футера.

**Як взяти в код**
\`\`\`tsx
import { Nav } from "@/components/Nav/Nav";

<Nav
  items={[{ label: "Кейси", href: "/cases" }, { label: "Контакти", href: "/contacts" }]}
  current="/cases"
  ctaLabel="Написати"
  ctaHref="#contact"
/>
\`\`\`
`;

const meta = {
  title: "Components/Nav",
  component: Nav,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
  },
  argTypes: {
    current: { control: "select", options: [undefined, ...items.map((i) => i.href)] },
    defaultOpen: { control: "boolean" },
    items: { control: "object" },
  },
  args: {
    items,
    current: "/cases",
    ctaLabel: "Написати",
    ctaHref: "#contact",
    defaultOpen: false,
  },
  // key: щоб перемикач defaultOpen одразу відкривав чи закривав меню.
  // Під навігацією — шматок тексту, щоб було видно: панель лягає поверх, а не зсуває його.
  render: (args) => (
    <div className="flex flex-col gap-6">
      <Nav key={String(args.defaultOpen)} {...args} />
      <p className="font-sans text-body text-ink-muted">
        Вміст сторінки під навігацією. Відкрите меню на вузькому екрані лягає поверх цього тексту.
      </p>
    </div>
  ),
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
