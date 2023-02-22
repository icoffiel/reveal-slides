import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css'
import 'reveal.js/plugin/highlight/monokai.css';
import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm";

const deck = new Reveal();
deck.initialize({
    progress: true,
    slideNumber: true,
    hash: true,
    overview: true,
    plugins: [
        RevealNotes,
        RevealHighlight,
        RevealMarkdown,
    ]
});