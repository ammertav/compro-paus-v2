// "Two brands, **one accountable team**." → Two brands, <strong>one accountable team</strong>.
export default function Emphasis({ text }) {
    return text
        .split("**")
        .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}
