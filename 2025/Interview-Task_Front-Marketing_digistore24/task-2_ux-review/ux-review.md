UX/UI critique of sample sales page

Page reviewed: [Link](https://www.fino.ch/)

1. Poor text readability in hero section

UX issue:
Hero text has insufficient contrast against background images, making headlines and subheadings difficult to read across both carousel slides.

Quick implementation:

- Add a semi-transparent dark overlay (40-60% opacity) behind text blocks or a solid background.
- Ensure WCAG contrast for accessibility compliance

Reasoning:
Readable hero content is critical for immediate value communication and user retention.

2. Competing primary CTAs create decision uncertainty

UX issue:
Two prominent buttons with different purposes("Find Out More" vs "Shop") compete for attention. Also, the "Find out more" button appears to be non functional.

Quick implementation:

- Establish a clear CTA hierarchy: make "Shop" the primary button
- Style "Find out more" button as secondary(outline or invert colours)
- Remove or fix the broken button/link path
- Consider keeping only one CTA: "Start Shopping"

Reasoning: Multiple competing CTAs reduce conversion rates and decision paralysis.

3. Nav overcomplexity and "Home" link

UX issue:
Two large dropdown menus create overwhelming navigation complexity. Home link relies solely on icon without any text.

Quick implementation:

- Combine two dropdowns into single dropdown with sections and grouping.
- Add "Home" text label next to icon or completely remove the icon and just go with text

Reasoning:
Cleaner navigation structure helps users find what they need faster. Clear home page identification follows standard web conventions and improves user orientation.

4. Hero section carousel

UX issue:
Hero slider/carousel, without user control, prevents users from reading content or clicking buttons.

Quick implementation:

- Remove carousel entirely
- Focus on single strong value proposition in hero space

Reasoning:
Auto-rotating carousels have poor usability metrics and often hide important content from user.
