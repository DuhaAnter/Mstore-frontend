# Horizontal Carousel with Flexbox

## Goal

Create a horizontal carousel where:

* Cards appear next to each other horizontally.
* Each card has a fixed width.
* Cards do not shrink.
* The container scrolls horizontally when there are more cards than available space.
* The scrollbar is hidden without disabling scrolling/swiping.

---

# 1. The Basic Structure

The important structure is:

```jsx
<div className="flex gap-6 overflow-x-auto hide-scrollbar">
  <ProductsGrid
    products={products}
    className="w-60 shrink-0"
  />
</div>
```

The idea is:

```text
Carousel wrapper
│
├── Card
├── Card
├── Card
├── Card
└── Card
       ↓
Cards continue beyond the visible area
       ↓
Horizontal scrolling
```

---

# 2. How the Carousel Actually Works

The carousel does not require a carousel library.

It is created using three main Flexbox/CSS concepts:

```text
flex
  ↓
Place cards horizontally

w-60
  ↓
Give cards a fixed width

shrink-0
  ↓
Prevent cards from becoming smaller

overflow-x-auto
  ↓
Allow horizontal scrolling when content is too wide
```

---

# 3. `flex`

```css
display: flex;
```

Tailwind:

```jsx
className="flex"
```

By default, block elements stack vertically:

```text
Card
Card
Card
Card
```

`flex` changes the layout so the children are placed in a row:

```text
Card   Card   Card   Card
```

This is the first requirement for a horizontal carousel.

---

# 4. Fixed Card Width — `w-60`

```jsx
className="w-60"
```

`w-60` gives the card a width of:

```text
15rem = 240px
```

So every card is intended to be 240px wide.

For example:

```text
Card 1 = 240px
Card 2 = 240px
Card 3 = 240px
Card 4 = 240px
```

You can choose another Tailwind width depending on your design:

```jsx
w-52
w-56
w-60
w-64
w-72
```

---

# 5. Why `shrink-0` Is Important

This is one of the most important parts.

Flexbox normally allows its children to shrink if there isn't enough space.

For example, imagine:

```text
Container width = 1000px

5 cards × 240px = 1200px
```

The cards need 1200px, but the container only has 1000px.

Without `shrink-0`, Flexbox may shrink the cards:

```text
Card = 200px
Card = 200px
Card = 200px
Card = 200px
Card = 200px
```

That is not what we want.

We want:

```text
Card = 240px
Card = 240px
Card = 240px
Card = 240px
Card = 240px
```

So:

```jsx
shrink-0
```

means:

> "Do not allow this flex item to shrink."

This allows the total content width to become larger than the visible container.

---

# 6. `overflow-x-auto`

Now we have:

```text
Container = 1000px
Cards     = 1200px
```

The cards are wider than the visible area.

Normally, the extra content would simply overflow.

So we use:

```jsx
overflow-x-auto
```

This means:

> "If the content becomes wider than the container horizontally, allow horizontal scrolling."

The result is:

```text
┌─────────────────────────────────────┐
│ Card  Card  Card  Card →            │
└─────────────────────────────────────┘
              more content
                 ↓
             scroll →
```

The browser automatically provides horizontal scrolling.

This also allows touch/trackpad horizontal scrolling.

---

# 7. `gap-6`

```jsx
gap-6
```

adds space between the cards.

Without it:

```text
CardCardCardCard
```

With it:

```text
Card    Card    Card    Card
```

The exact gap can be changed:

```jsx
gap-4
gap-5
gap-6
gap-8
```

---

# 8. Why the Page Was Overflowing Initially

The original New Arrivals section had:

```jsx
items-center
```

on its parent:

```jsx
<div className="flex flex-col justify-center items-center gap-5 px-10">
```

This affected how the child wrapper was sized/aligned.

After removing:

```jsx
items-center
```

the carousel wrapper was allowed to behave correctly within the available width.

The important lesson is:

> When building a horizontal scrolling area inside a flex layout, parent alignment rules such as `items-center` can affect the sizing behaviour of the scrolling container.

In this particular layout, `min-w-0` turned out **not to be necessary**.

Don't automatically add `min-w-0` to every carousel. Use it when the surrounding flex/grid layout actually requires it.

---

# 9. Why the Scrollbar Appeared

Once this was added:

```jsx
overflow-x-auto
```

the browser correctly created a horizontal scrollbar because the content was wider than the container.

That is expected behaviour.

We don't want to remove:

```jsx
overflow-x-auto
```

because that would remove the scrolling functionality.

Instead, we only hide the scrollbar visually.

---

# 10. Hide the Scrollbar Without Disabling Scrolling

Add this CSS:

```css
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
```

Then use:

```jsx
<div className="flex gap-6 overflow-x-auto hide-scrollbar">
```

The important distinction is:

```text
overflow-x-auto
       ↓
Scrolling remains enabled

hide-scrollbar
       ↓
Only the visual scrollbar disappears
```

So the user can still:

* Swipe horizontally on touch devices.
* Use a trackpad.
* Use supported horizontal mouse scrolling.
* Scroll through the cards normally.

---

# 11. Final Carousel Recipe

Whenever you need a simple horizontal product carousel, think:

### Container

```jsx
<div className="flex gap-6 overflow-x-auto hide-scrollbar">
```

### Individual cards

```jsx
className="w-60 shrink-0"
```

Together:

```jsx
<div className="flex gap-6 overflow-x-auto hide-scrollbar">
  <ProductsGrid
    products={products}
    className="w-60 shrink-0"
  />
</div>
```

---

# 12. Mental Model

Remember the problem in this order:

```text
I want cards next to each other
        ↓
flex

I want every card to stay a certain size
        ↓
w-60

I don't want Flexbox to squeeze the cards
        ↓
shrink-0

There are more cards than the available width
        ↓
overflow-x-auto

I don't want to see the scrollbar
        ↓
hide-scrollbar
```

### The core formula

```text
Horizontal Carousel
=
flex
+
fixed card width
+
shrink-0
+
overflow-x-auto
```

And optionally:

```text
+
hide-scrollbar
```

---

# 13. Important Separation of Responsibilities

A useful way to structure your React components:

```text
New Arrivals
    │
    └── controls the carousel/layout
            │
            └── ProductsGrid
                    │
                    └── controls product cards
```

The **New Arrivals wrapper** should decide:

```jsx
flex
gap-6
overflow-x-auto
hide-scrollbar
```

The **individual product card** should decide:

```jsx
w-60
shrink-0
```

This keeps the carousel behaviour separate from the product card's general design.

---

# Quick Reference

```jsx
{/* Horizontal Carousel */}
<div className="flex gap-6 overflow-x-auto hide-scrollbar">

  {/* Fixed-size cards */}
  <ProductsGrid
    products={products}
    className="w-60 shrink-0"
  />

</div>
```

```css
/* Hide scrollbar while preserving scrolling */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
```

## One sentence to remember

> **`flex` puts the cards in a row, `w-60` gives them a fixed size, `shrink-0` stops Flexbox from squeezing them, and `overflow-x-auto` makes the overflowing row scrollable.**
