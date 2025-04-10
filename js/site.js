const produtosContainer = document.querySelector(".produtos");
const selectPreco = document.getElementById("preco");

function obterProdutos() {
        const elementos = Array.from(document.querySelectorAll(".produto"));
        return elementos.map(el => {
        const precoTexto = el.querySelector(".valor-item").textContent;
        const preco = parseFloat(precoTexto.replace("R$", "").replace(",", "."));
    return { element: el, preco };
    });
}

function ordenarProdutos() {
    const produtos = obterProdutos();
    const ordem = selectPreco.value;
    if (ordem === "menor") {
        produtos.sort((a, b) => a.preco - b.preco);
    } else {
        produtos.sort((a, b) => b.preco - a.preco);
    }

    produtosContainer.innerHTML = "";
    produtos.forEach(p => {
    produtosContainer.appendChild(p.element);
    });
}

selectPreco.addEventListener("change", ordenarProdutos);