import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const description = `
Кнопка дизайн-системи: моноширинний шрифт великими літерами, межа 2px, кути \`rounded-control\`. З \`href\` стає посиланням (next/link), без нього — кнопкою.

**Параметри**: \`variant\` (\`primary\`), \`size\` (\`md\`), \`href\`, \`type\` (\`button\`), \`disabled\` (\`false\`), \`disabledReason\`, \`onClick\`.

**Варіанти**
- \`primary\` — заливка \`accent\`, текст \`ink\` (5.7 : 1). Головна дія екрана: «Розказати про задачу →». Одна на екран.
- \`secondary\` — без заливки, межа \`ink-muted\` (5 : 1 до фону), текст \`ink\`. Другорядна дія поруч із primary («Дивитись кейси») або кнопка в меню («Написати»).

**Розміри**: \`md\` — меню й форми; \`lg\` — перший екран і заклики до дії.

**Стани**
- Наведення: primary стає \`ink\` з текстом \`canvas\`; secondary отримує межу \`ink\` і фон \`surface\`.
- Фокус з клавіатури (Tab): контур \`ink\` 2px з відступом (16.9 : 1 до фону).
- Вимкнена: пунктирна межа \`line\`, текст \`ink-muted\` (5 : 1). Кнопка лишається у фокусі (\`aria-disabled\`, а не \`disabled\`), щоб клавіатура й скрінрідер дійшли до пояснення \`disabledReason\`, яке стоїть під кнопкою.

**Токени**: \`accent\`, \`ink\`, \`ink-muted\`, \`canvas\`, \`surface\`, \`line\`; \`font-mono\`; \`text-button\` (lg), \`text-label\` (md), \`text-caption\` (пояснення); \`rounded-control\`.

**Коли використовувати**: дія або перехід, який треба виділити. **Коли ні**: посилання в тексті й пункти меню — це звичайні посилання (див. Nav). Не ставте два \`primary\` поруч. Не вимикайте кнопку без \`disabledReason\`.

**Як взяти в код**
\`\`\`tsx
import { Button } from "@/components/Button/Button";

<Button href="#contact" size="lg">Розказати про задачу →</Button>
<Button href="/cases" variant="secondary" size="lg">Дивитись кейси</Button>
<Button type="submit" disabled disabledReason="Заповніть пошту">Надіслати</Button>
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
    disabledReason: { control: "text", if: { arg: "disabled" } },
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
    disabledReason: "Спершу заповніть пошту",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
