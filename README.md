# tremor-react-19

A community fork of [Tremor](https://github.com/tremorlabs/tremor) — the copy & paste
React components for charts and dashboards — with its dependency stack modernized to
**React 19**, **Tailwind CSS v4**, and **Recharts 3**.

> [!NOTE]
> **This is a temporary, stopgap project.** Upstream Tremor is excellent but currently
> targets React 18-era dependencies. This fork exists only to bridge the gap until the
> original maintainers ship official support for the newer stack — at which point you
> should switch (back) to [tremorlabs/tremor](https://github.com/tremorlabs/tremor).
> No new components or features are added here; the goal is fidelity to upstream on a
> modern dependency tree.

The modernization was carried out with **Claude Fable 5** (Anthropic), and verified
end-to-end: typecheck, lint, unit tests, and a 588-test Playwright suite across
Chromium, Firefox, and WebKit.

## Live demo

Browse every component in the **[Storybook](https://babanomania.github.io/tremor-react-19/)**.

## What's inside

| Dependency | Version |
| --- | --- |
| React / React DOM | 19.2 |
| Tailwind CSS | 4.3 |
| Recharts | 3.8 |
| react-day-picker | 10 |
| date-fns | 4 |
| TypeScript | 6.0 |

35+ accessible components: charts (Area, Bar, Line, Combo, Donut, Spark), inputs,
date pickers, dialogs, drawers, tables, and more — built on Radix UI and Tailwind CSS.

## Installation

Install straight from a GitHub tag (the package builds itself on install):

```bash
npm install github:babanomania/tremor-react-19#v1.1.1
```

Add two lines to your app's CSS — that's the whole Tailwind setup:

```css
@import "tailwindcss";
@import "tremor-react-19/theme.css";
```

Use the components:

```tsx
import { AreaChart, Button, DatePicker } from "tremor-react-19"
```

**Requirements:** React 19 (peer dependency) and Tailwind CSS v4.

### Prefer to own the code?

This is still a copy & paste library at heart, exactly like upstream:

1. Copy the component file(s) you need from [`src/components/`](src/components/)
2. Copy the small utilities they import from [`src/utils/`](src/utils/) (`cx`, `focusRing`, …)
3. Add the animation tokens from [`src/theme.css`](src/theme.css) to your CSS
4. Install the dependencies listed at the top of each component file

Or click **Use this template** to start a new project from the whole repo.

## Development

```bash
npm install
npm run storybook   # component workbench at localhost:6006
npm run test:all    # vitest + playwright suite
```

## License

[Apache License 2.0](LICENSE) — this project is a derivative of
[Tremor](https://github.com/tremorlabs/tremor), © Tremor. Original license and
attribution retained; modifications are documented in the
[release notes](https://github.com/babanomania/tremor-react-19/releases) and commit history.
All credit for the component design and implementation belongs to the Tremor team.
