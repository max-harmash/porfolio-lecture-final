import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextField } from "./TextField";

const description = `
Текстове поле з підписом. Підпис завжди над полем, межа \`ink-muted\` (5 : 1 до фону; \`line\` для межі не годиться — 1.2 : 1), кути \`rounded-control\`.

**Параметри**: \`label\`, \`name\`, \`type\` (\`text\`), \`placeholder\`, \`defaultValue\`, \`hint\`, \`hasError\` (\`false\`), \`errorMessage\`, \`disabled\` (\`false\`), \`required\` (\`false\`).

**Стани**
- Звичайне: фон \`surface\`, межа \`ink-muted\`, підпис \`ink\`.
- Наведення: межа \`ink\`.
- Фокус (Tab або клік): контур \`ink\` 2px з відступом.
- Заповнене: текст \`ink\` (задайте \`defaultValue\`).
- Помилка: межа \`danger\`, під полем іконка й текст \`danger\` (5.9 : 1). Поле позначене \`aria-invalid\`, текст помилки повʼязаний з полем через \`aria-describedby\`. Колір не єдиний сигнал: є іконка й текст.
- Вимкнене: пунктирна межа \`line\`, фон \`canvas\`, текст і підпис \`ink-muted\`. Помилка у вимкненому полі не показується.

**Токени**: \`surface\`, \`canvas\`, \`ink\`, \`ink-muted\`, \`line\`, \`danger\`; \`font-mono\` + \`text-label\` (підпис), \`font-sans\` + \`text-body\` (значення), \`text-caption\` (підказка й помилка); \`rounded-control\`.

**Коли використовувати**: короткий текст у формі: імʼя, пошта, телефон. **Коли ні**: довгий текст (потрібне багаторядкове поле, його ще немає), вибір із варіантів.

**Як взяти в код**
\`\`\`tsx
import { TextField } from "@/components/TextField/TextField";

<TextField label="Пошта" name="email" type="email" placeholder="name@example.com" required />
<TextField label="Пошта" name="email" hasError errorMessage="Перевірте адресу: бракує @" />
\`\`\`
`;

const meta = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: description } },
  },
  argTypes: {
    type: { control: "select", options: ["text", "email", "tel"] },
    hasError: { control: "boolean" },
    errorMessage: { control: "text", if: { arg: "hasError" } },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    defaultValue: { control: "text" },
    hint: { control: "text" },
  },
  args: {
    label: "Пошта",
    name: "email",
    type: "email",
    placeholder: "name@example.com",
    defaultValue: "",
    hint: "Відповім на неї протягом дня",
    hasError: false,
    errorMessage: "Перевірте адресу: бракує @",
    disabled: false,
    required: false,
  },
  // key: щоб зміна defaultValue у Controls одразу показувала заповнене поле.
  render: (args) => (
    <div className="max-w-sm">
      <TextField key={args.defaultValue} {...args} />
    </div>
  ),
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
