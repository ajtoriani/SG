document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. CAPTURA E VALIDAÇÃO DOS PARÂMETROS DA URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookSlug = urlParams.get('slug');

    // Se não encontrar o slug na URL ou o livro não constar no banco de dados, volta para a home
    if (!bookSlug || !BOOKS_DATA[bookSlug]) {
        window.location.href = "index.html";
        return;
    }

    // Busca o livro específico baseado na query string (?slug=nome-do-livro)
    const book = BOOKS_DATA[bookSlug];

    // 2. INJEÇÃO DINÂMICA DE DADOS DO SEU BOOKS_DATA
    document.title = `${book.title} — Sara Gusella`;
    document.getElementById("dynamic-title").innerText = book.title;
    document.getElementById("dynamic-genre").innerText = `${book.genre} / ${book.volume}`;
    document.getElementById("dynamic-desc").innerText = book.description;
    document.getElementById("dynamic-quote").innerText = book.quote;
    document.getElementById("dynamic-cover").src = book.cover;
    document.getElementById("dynamic-cover").alt = `Capa oficial do livro ${book.title}`;
    document.getElementById("dynamic-publisher").innerText = book.publisher;
    document.getElementById("dynamic-volume").innerText = book.volume;
    document.getElementById("dynamic-specs").innerText = book.specs;
    
    // Injeta o link correto do seu mapeamento para o botão da Amazon
    document.getElementById("dynamic-amazon-link").href = book.amazonLink;

    // 3. SEU ENGINE DE ANIMAÇÕES GSAP ORIGINAL
    gsap.from("#cover-frame img", {
        scale: 1.08,
        duration: 1.4,
        ease: "power3.out"
    });

    gsap.to("#cover-frame img", {
        scrollTrigger: {
            trigger: ".book-details_content",
            start: "top center",
            toggleActions: "play none none none"
        },
        filter: "grayscale(0%)",
        duration: 0.7
    });
});