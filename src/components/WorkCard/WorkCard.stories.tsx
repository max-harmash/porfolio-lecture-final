import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import brandSystem from "@/assets/cases/brand-system.jpg";
import figmaPlugin from "@/assets/cases/figma-plugin.jpg";
import training from "@/assets/cases/training.jpg";
import { WorkCard } from "./WorkCard";

const description = `
Картка роботи для списку кейсів: обкладинка, номер і назва, короткий опис. Уся картка — одне посилання, тож у фокус потрапляє один раз.

**Параметри**: \`href\`, \`title\`, \`description\`, \`cover\` (статичний імпорт картинки), \`coverAlt\` (\`""\`), \`index\`.

**Стани**
- Звичайна: обкладинка в рамці \`line\`, назва \`ink\`, опис \`ink-muted\`.
- Наведення: рамка обкладинки стає \`ink\`, картинка трохи збільшується, назва підкреслюється лінією \`accent\`.
- Фокус (Tab): контур \`ink\` 2px навколо всієї картки з відступом.

**Токени**: \`line\`, \`ink\`, \`ink-muted\`, \`accent\`; \`font-mono\` + \`text-title\` (назва), \`text-caption\` (номер), \`font-sans\` + \`text-body\` (опис); \`rounded-card\`; \`aspect-cover\` (пропорція обкладинки).

**Обмеження**: номер у кольорі \`accent\` має контраст 3 : 1 — для тексту 12px це нижче за 4.5 : 1. Залишено як у макеті, рішення відкрите.

**Коли використовувати**: роботи в списку кейсів і на головній, по три в ряд на десктопі. **Коли ні**: для виступів чи новин без обкладинки.

**Як взяти в код**
\`\`\`tsx
import { WorkCard } from "@/components/WorkCard/WorkCard";
import training from "@/assets/cases/training.jpg";

<WorkCard
  href="/cases/cedem"
  index="01"
  title="Тренінг для редакцій ЦЕДЕМ"
  description="як прибрати рутину з роботи журналіста"
  cover={training}
/>
\`\`\`
`;

const covers = { training, brandSystem, figmaPlugin };

const meta = {
  title: "Components/WorkCard",
  component: WorkCard,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: description } },
  },
  argTypes: {
    cover: { control: "select", options: Object.keys(covers), mapping: covers },
    href: { control: "text" },
    index: { control: "text" },
  },
  args: {
    href: "#",
    index: "01",
    title: "Тренінг для редакцій ЦЕДЕМ",
    description: "як прибрати рутину з роботи журналіста",
    cover: training,
    coverAlt: "",
  },
  render: (args) => (
    <div className="max-w-sm">
      <WorkCard {...args} />
    </div>
  ),
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
