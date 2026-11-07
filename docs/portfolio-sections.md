# Portfolio Page - Sections

**Theme:** retro electronics / hardware panel. Single page. Status: desktop wireframe v1 (photo attached to ME2-18).

**Legend:** [S] static content, [J] Jira, [G] GitHub, [N] Notion. Data-driven items ([J], [G], [N]) can be shown or hidden from the admin panel.

## Layout
Header spans the full width (as in layout.tsx): "Kitsu | Software Developer | Powered by ..." on the left, power button (admin login) on the right.
Navbar sits below the header. It is a sidebar with one indicator light per section. The light of the section in view is on, clicking a label scrolls to that section.
Sections: System Overview, Projects, Blog. About was removed, its content now lives in System Overview (contact) and Projects (tech stack).
### 1. System Overview

**Purpose:** show the health of the project being built right now.

**Equalizer:** 5 bars, one per Jira status (To Do, In Progress, In Review, In Test, Done). [J]

**Controls under the equalizer:** PREV, SELECT, NEXT. PREV and NEXT move between bars. SELECT opens the chosen bar: the other bars hide and the tasks of that status are listed next to the segment rows. SELECT again restores the full view. [J]

**GitHub heatmap:** last month (5 weeks x 7 days). DATE - / + buttons move between months. [G]
LCD date readout. [S]

**Contact icons on the screen:** mail, GitHub, phone, LinkedIn. The details open on select and are not printed in the page. [S]

### 2. Projects
Screen shows one project card generated from the standard README template. PREV and NEXT buttons move between projects. [G]
TECH STACK panel next to the screen, drawn as a stacked meter: React, TypeScript, JavaScript, CSS, HTML. [S]

### 3. Blog
Screen shows the selected Notion post. [N]

STORAGE panel shows floppy disk previews, one per post. Clicking the selected disk plays an insert animation, then a loading screen, then the post appears on the screen. [N]
Proposed (not confirmed yet)

**Equalizer scale:** lit segments = number of issues in that status, scaled to the highest bar. The count is written under each bar (replaces the n/m notation of the sketch).
Header gets the power button for admin login.

**Empty and error state for every data-driven area:** a single NO SIGNAL line.

Every blog post has its own URL so it can be shared and found by search engines.

Insert animation lasts under 1 second, can be skipped and respects reduced motion.

All controls are real buttons, work with the keyboard and have a touch target of at least 44 px.

## Open items
* What the NAV d-pad controls.
* What the LCD date readout shows (today or the month chosen with DATE).
* Header text hierarchy.
* README template format for project cards.
* Mobile layout (ME2-19).