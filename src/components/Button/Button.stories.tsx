import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const description = `
Кнопка сайту: прямокутна, моноширинний шрифт великими літерами, рамка 2px. З \`href\` стає посиланням (next/link), без нього — кнопкою.

**Варіанти**
- \`primary\` — темна заливка. Головна дія екрана: «Розказати про задачу →». Одна на екран.
- \`secondary\` — рамка без заливки. Другорядна дія поруч із primary («Дивитись кейси») або кнопка в меню («Написати»).

**Розміри**
- \`lg\` (за замовчуванням) — перший екран і заклики до дії.
- \`md\` — меню в шапці.

**Стани**
- Наведення: кольори міняються місцями (primary світлішає, secondary заливається темним).
- Фокус з клавіатури (Tab): контур \`ink\` з відступом.
- Вимкнена (\`disabled\`): кольори \`muted\`, не натискається; посилання перестає переходити.

**Токени**: кольори \`ink\`, \`paper\`, \`white\`, \`muted\`; шрифт \`font-mono\`; розміри тексту \`text-button\` (lg) і \`text-label\` (md); рамка \`border-2\`. Кутів немає.

**Коли використовувати**: дія або перехід, який треба виділити. **Коли ні**: посилання всередині тексту й пункти меню («Кейси», «Виступи») — це звичайні посилання, не кнопки. Не ставте два \`primary\` поруч.

**Як взяти в код**
\`\`\`tsx
import { Button } from "@/components/Button/Button";

<Button href="#contact">Розказати про задачу →</Button>
<Button href="/cases" variant="secondary">Дивитись кейси</Button>
<Button href="#contact" variant="secondary" size="md">Написати</Button>
\`\`\`
`;

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: description } },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["md", "lg"] },
    disabled: { control: "boolean" },
    href: { control: "text" },
    children: { control: "text" },
    type: { control: false },
    onClick: { control: false },
  },
  args: {
    children: "Розказати про задачу →",
    variant: "primary",
    size: "lg",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
