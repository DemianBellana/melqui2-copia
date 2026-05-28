# 01_explore.md - Hero Horizontal Cards

## 1. Feature Goal
Modify the floating background cards in the `Hero.jsx` component so they move horizontally from left to right instead of vertically from bottom to top. Additionally, the cards must be more visible (opaque, less blended) without obscuring the main text elements or the right-side highlighted video card.

## 2. Current State Analysis (`src/components/Hero.jsx`)
Currently, the hero section utilizes `framer-motion` to animate the images.
*   **Container (`<div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none opacity-40 mix-blend-overlay">`):**
    *   **Visibility:** It has `opacity-40` and `mix-blend-overlay`, which heavily fades the cards into the background.
    *   **Z-Index:** The cards are set to `z-[5]`. The gradient overlay is `z-10`, and the main content wrapper (text + right video card) is `z-20`.
*   **Image Positions (`style={{ ... }}`):**
    *   Currently, the cards are distributed horizontally using `left: ${leftPos}%` and they start out of view below using `bottom: '-50%'`.
*   **Animation (`animate={{ y: ['0vh', '-150vh'] }}`):**
    *   Moves the cards along the Y-axis upwards.

## 3. Required Modifications
To meet the user's request, the following changes are required:

### A. Animation & Positioning (Horizontal Movement)
1.  **Change Initial Position:** Remove `leftPos` and `bottom` constraints. Change to vertical distribution by generating a `topPos` array (e.g., `[5, 25, 45, 65, 80, 15]`) and applying it as `top: \`${topPos}%\``. Set their starting X position off-screen to the left (e.g., `left: '-20vw'`).
2.  **Change Animation Axis:** Update the `animate` prop in `<motion.img>` to animate along the `x` axis instead of the `y` axis. For example, `animate={{ x: ['0vw', '120vw'] }}` or similar, depending on initial placement.

### B. Visibility & Blending ("Brought forward")
1.  **Remove Blend Mode:** Remove `mix-blend-overlay` from the parent `div` class to restore the normal coloring of the image cards.
2.  **Increase Opacity:** Remove `opacity-40` or change it to a higher value like `opacity-80` to make the cards more opaque and prominent.
3.  **Z-Index Verification:** The current `z-[5]` keeps the cards behind the dark gradient overlay (`z-10`), which might still obscure them. We can elevate the cards to `z-[15]`. By placing them at `z-[15]`, they will be "brought forward" over the background video and gradient, but will correctly remain strictly behind the main text and the right-side video card, since the main content is at `z-20`.

## 4. Constraint Checklist
*   [x] Cards move LEFT to RIGHT (achieved via `x` animation and `top` vertical spread).
*   [x] Brought forward/more opaque (achieved by removing `mix-blend-overlay` and adjusting `opacity`/`z-index`).
*   [x] Must NOT cover main text or right video card (ensured by keeping the container z-index strictly below the text container's `z-20`).
*   [x] No code changes applied during this phase.

## 5. Conclusion
No blocking issues found. The feature can be safely implemented via styling and `framer-motion` property adjustments in `src/components/Hero.jsx`.