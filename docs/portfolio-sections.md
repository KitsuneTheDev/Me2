# Portfolio Page - Sections

**Theme:** retro electronics / hardware panel. Single page.
**Legend:** [S] static content, [J] Jira, [G] GitHub, [N] Notion.
Data-driven items ([J], [G], [N]) can be shown or hidden from the admin panel.

### 1. Header
   Purpose: identity and admin entry point.
   Content: "Kitsu | Software Developer | Powered by Ozan Çelikkol" at top left
   (hierarchy to be decided), power button at top right for admin login. [S]
   No separate header bar.

### 2. Section indicator
   Purpose: show the current section and scroll to a section on click.
   Content: list of section names with the active one highlighted. [S]

### 3. System Overview (hero)
   Purpose: show the health of the project being built right now.
   Content:
   * One donut chart: Jira work items by status, % done in the center. [J]
   * Counters for epics, tasks and bugs. [J]
   * Recent GitHub commits as a terminal-style log. [G]
   * Contact information. [S]

### 4. About
   Purpose: a polished, short version of the CV, not a form.
   Content: selected highlights only, plus tech stack. [S]

### 5. Projects
   Purpose: show repositories with their progress.
   Content: project cards generated from a standard README template. [G]

### 6. Blog
   Purpose: publish selected Notion notes as posts.
   Content: post list and post view. [N]

#### Open items
* Header text hierarchy.
* Empty and error states for sections 3, 5 and 6.
* README template format for project cards.