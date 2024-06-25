import type { Meta, StoryObj } from '@storybook/angular';
import { TooltipComponent } from './tooltip.component';

const meta: Meta<TooltipComponent> = {
  title: 'Tooltip',
  component: TooltipComponent,
  tags: ['autodocs'],
  parameters: {
    layout: "centered"
  }
};

export default meta;
type Story = StoryObj<TooltipComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: { tooltip: "this is a tooltip" },
  render: () => ({
    template: `<div class="flex justify-end">
      <app-tooltip
        tooltip="This is a tooltip"
        class="bg-slate-500 text-slate-50 p-3 rounded">
        This should have a tooltip
      </app-tooltip>
    </div>`
  })
};
