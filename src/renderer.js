function setTitle() {
  const hora = new Date().getHours();
  let mensagem = "";

  if (hora >= 5 && hora < 12) {
    mensagem = "Bom dia Deus";
  } else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde Deus";
  } else {
    mensagem = "Boa noite Deus";
  }

  document.title = mensagem;
}

(async () => {
  try {
    setTitle();

    const resposta = await fetch(
      "https://www.bible.com/_next/data/Ddz8lRihzogtTGJCVCa-7/pt.json"
    );
    const dados = await resposta.json();

    document.getElementById(
      "verse-text"
    ).innerText = `"${dados.pageProps.verseOfTheDay.content.trim()}"`;

    document.getElementById(
      "verse-referencia"
    ).innerText = `${dados.pageProps.verseOfTheDay.reference.human}`;

    document.getElementById("verse-image").src =
      dados.pageProps.verseOfTheDayImageURL;
  } catch (error) {
    document.getElementById("verse-text").innerText =
      "Erro ao carregar versículo.";
    console.error(error);
  }
})();
