## Typography System Specification for MyPortfolio

This document outlines the comprehensive typography system implemented in the portfolio, addressing the artistic identity, readability, and specific font assignments as requested.

---

### 1. Font Role Assignment & Rationale

The following fonts have been strategically assigned to various elements to create a clear visual hierarchy and convey the desired artistic tone:

*   **`Kalam` (Cursive)**
    *   **Usage:** Hero/Main Headings (H1), Section Headings (H2), Subsection Headings (H3), Card Titles (e.g., `h4` in tab panels), Accent Text (e.g., drop caps, todo lists).
    *   **Rationale:** This expressive, bold, and artistic font is ideal for drawing attention to key statements and maintaining a creative, handcrafted feel for primary and secondary headings. Its strong presence establishes the portfolio's unique voice.

*   **`Patrick Hand` (Cursive)**
    *   **Usage:** Navigation Elements (`a`, `button`, `.nav-link`), Buttons/CTAs (`.cv-button`), Accent Text (e.g., project card captions, about section headers, modal close buttons, tab buttons).
    *   **Rationale:** A clean and legible handwritten style, `Patrick Hand` adds a personal, approachable touch to interactive elements and specific UI components without sacrificing readability. It complements `Kalam` by offering a slightly more subdued handwritten feel.

*   **`Caveat` (Cursive)**
    *   **Usage:** Accent Text (specifically for "sticky-note" style elements, e.g., `.sticky-note` and the introductory text "Hello, I'm Sumanth. Welcome to my digital atelier.").
    *   **Rationale:** `Caveat` provides a distinct, playful, and personal touch for specific callouts and unique UI elements. Its use is intentionally sparse to maximize its impact as a special accent.

*   **`system-ui` (Sans-serif)**
    *   **Usage:** Body Text (`p` tags), general fallback.
    *   **Rationale:** As a highly legible, clean, and performant system font, `system-ui` ensures optimal readability for long-form content across all devices and operating systems. It provides a neutral and accessible foundation for the more decorative fonts.

*   **`monospace`**
    *   **Usage:** Accent Text (e.g., toolkit tags, company roles in tab panels).
    *   **Rationale:** Used for technical or label-like elements, `monospace` provides a distinct, structured, and functional aesthetic, contrasting with the handwritten styles.

*   **`Dancing Script` (Cursive)**
    *   **Usage:** Available via the `.font-dancing` class for potential future use as a very specific, elegant script accent.
    *   **Rationale:** Offers an alternative elegant script style if a different calligraphic feel is desired for a particular element.

*   **`Gochi Hand` (Cursive)**
    *   **Usage:** Available via the `.font-gochi` class for potential future use as a more playful, informal handwritten accent.
    *   **Rationale:** Provides another option for a distinct handwritten style, offering a different personality than `Patrick Hand` or `Caveat`.

---

### 2. Pairing Strategy

The typography system employs a strategic pairing of expressive and highly legible fonts to create visual interest and maintain clarity:

*   **Expressive Headings (`Kalam`) with Legible Body (`system-ui`):** This primary pairing ensures that while headings are artistic and attention-grabbing, the main content remains easy to read.
*   **Handwritten UI Elements (`Patrick Hand`) with Neutral Body (`system-ui`):** `Patrick Hand` adds a friendly, personal touch to interactive components, harmonizing with the clean body text.
*   **Distinct Accents (`Caveat`, `monospace`) for Emphasis:** These fonts are used sparingly to highlight specific information or UI elements, providing visual breaks and reinforcing the portfolio's unique character.

---

### 3. Implementation Details (as per `src/index.css` and `src/components/Hero.tsx`)

*   **Font Imports:** All specified fonts are imported from Google Fonts in `src/index.css`.
*   **CSS Variables:** Font families are managed using CSS variables (`--font-body`, `--font-heading-hero`, etc.) for easy maintenance and consistency.
*   **Font Weights:** Default weights (e.g., 400 for regular, 700 for bold) are utilized as available for each font.
*   **Font Sizes:** Responsive font sizes are defined using `rem` units and adjusted for mobile vs. desktop breakpoints (`@media (min-width: 768px)`) to ensure optimal readability across various screen sizes.
*   **Line Heights & Letter Spacing:** These properties are carefully adjusted in `src/index.css` to enhance readability and visual appeal.
*   **Legibility vs. Artistic Expression:** Legibility is prioritized for body text and interactive elements, while artistic expression is embraced for headings and unique accent pieces.
*   **Fallback Fonts:** Generic `cursive` and `sans-serif` fallbacks are included in the font stacks for browser compatibility.

---

### 4. Design Rationale Summary

*   **Artistic/Creative Nature:** The selection of `Kalam`, `Patrick Hand`, and `Caveat` directly supports the portfolio's artistic and creative identity, giving it a distinctive, handcrafted, and personal feel.
*   **Mobile Readability:** The use of `system-ui` for body text, coupled with responsive font sizing and careful line-height adjustments, ensures excellent readability and accessibility on mobile devices.
*   **Brand Personality and Tone:** The overall typography conveys a brand personality that is professional, innovative, approachable, and creatively expressive.
*   **Visual Harmony:** The chosen fonts work together cohesively, with clear roles that prevent visual clutter and enhance the user experience.

---

### Changes Implemented:

1.  **`grat vibes` replacement:** Confirmed that `Kalam` is already extensively used for headings and display text, fulfilling the intent of replacing a general "grat vibes" style with `Kalam`. No direct string replacement was necessary as "grat vibes" was not found as a literal string in the codebase.
2.  **`Caveat` for "sticky-note sticky-note-yellow":** Confirmed that the `.sticky-note` class in `src/index.css` already sets `font-family: 'Caveat', cursive;`, and the text within the sticky note in `src/components/Hero.tsx` explicitly uses `font-caveat`.
3.  **`Caveat` for "Hello, I'm Sumanth. Welcome to my digital atelier.":** Confirmed that this specific text in `src/components/Hero.tsx` already uses `font-caveat`.
4.  **Font Inconsistency Correction:** The `.font-dancing` class in `src/index.css` was updated to correctly use `'Dancing Script', cursive;` instead of `'Kalam', cursive;`, resolving a direct font mismatch.

This comprehensive typography system is now implemented and aligned with the project's design goals.
