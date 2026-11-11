const PERSONALIDADES = [
  {
    nome: "Monteiro Lobato", iniciais: "ML", profissao: "Escritor e editor",
    areas: ["Literatura"], nascimento: "18 de abril de 1882", falecimento: "5 de julho de 1948",
    local: "Taubaté (SP)", resumo: "Autor do Sítio do Picapau Amarelo e um dos nomes centrais da literatura infantil brasileira.",
    bio: "José Bento Monteiro Lobato nasceu em Taubaté em 1882. Sua observação da vida no interior inspirou obras como Urupês, e sua produção para crianças inclui personagens conhecidos como Emília e Narizinho. Sua trajetória também teve importância na história da edição de livros no Brasil.",
    obras: ["Urupês (1918)", "Cidades Mortas (1919)", "A Menina do Narizinho Arrebitado (1920)", "Reinações de Narizinho (1931)"],
    fontes: [{nome:"IBGE: histórico de Taubaté", url:"https://biblioteca.ibge.gov.br/visualizacao/dtb/saopaulo/taubate.pdf"}]
  },
  {
    nome: "Hebe Camargo", iniciais: "HC", profissao: "Apresentadora, cantora e atriz",
    areas: ["Televisão", "Música"], nascimento: "8 de março de 1929", falecimento: "29 de setembro de 2012",
    local: "Taubaté (SP)", resumo: "Uma das apresentadoras mais marcantes da televisão brasileira, conhecida por seu jeito espontâneo.",
    bio: "Hebe Maria Monteiro de Camargo nasceu em Taubaté em 1929. Começou sua carreira na música e no rádio antes de se tornar uma figura popular da televisão brasileira, com uma longa trajetória como entrevistadora.",
    obras: ["Hebe e Vocês (disco, 1959)", "Programa Hebe (televisão)"],
    fontes: [{nome:"Prefeitura de Taubaté: Lei 5.529/2019", url:"https://taubate.sp.gov.br/anexos/leis/2019/5529%20DENOMINA%20PALCO%20HEBE%20CAMARGO.pdf"}]
  },
  {
    nome: "Amácio Mazzaropi", iniciais: "AM", profissao: "Ator, diretor e produtor",
    areas: ["Cinema", "Teatro"], nascimento: "9 de abril de 1912", falecimento: "13 de junho de 1981",
    local: "São Paulo (SP), criado em Taubaté", resumo: "Artista ligado à comédia caipira que instalou em Taubaté seu estúdio cinematográfico.",
    bio: "Amácio Mazzaropi nasceu em São Paulo em 1912 e mudou-se ainda criança com a família para Taubaté. Trabalhou no teatro, no circo, no rádio e na televisão. Em 1958 criou a PAM Filmes, produzindo e distribuindo seus próprios filmes.",
    obras: ["Criação da PAM Filmes (1958)", "Jeca Tatu (1959)", "O Lamparina (1964)", "Jeca e a Égua Mágica (1980)"],
    fontes: [{nome:"USP: estudo sobre Taubaté", url:"https://edisciplinas.usp.br/mod/resource/view.php?id=5057337"}]
  },
  {
    nome: "Celly Campello", iniciais: "CC", profissao: "Cantora",
    areas: ["Música"], nascimento: "18 de junho de 1942", falecimento: "4 de março de 2003",
    local: "São Paulo (SP), criada em Taubaté", resumo: "Cantora de destaque do rock brasileiro no fim dos anos 1950 e início dos anos 1960.",
    bio: "Celly Campello passou a infância em Taubaté e se tornou um dos nomes populares da música jovem brasileira. Entre suas gravações mais conhecidas estão Estúpido Cupido e Banho de Lua. Seu irmão, Tony Campello, também seguiu carreira musical.",
    obras: ["Estúpido Cupido (1959)", "Banho de Lua (1960)"],
    fontes: [{nome:"Prefeitura de Taubaté: Lei 5.569/2020", url:"https://taubate.sp.gov.br/anexos/leis/2020/5569%20DENOMINA%20SALA%20CELLY%20CAMPELLO.pdf"}]
  },
  {
    nome: "Cid Moreira", iniciais: "CM", profissao: "Locutor e apresentador",
    areas: ["Televisão", "Rádio"], nascimento: "29 de setembro de 1927", falecimento: "3 de outubro de 2024",
    local: "Taubaté (SP)", resumo: "Jornalista e locutor cuja voz se tornou conhecida nacionalmente, especialmente no Jornal Nacional.",
    bio: "Nascido em Taubaté, Cid Moreira construiu carreira como locutor e apresentador de telejornal. Sua voz marcante ficou associada ao Jornal Nacional e também à narração de textos e obras em áudio.",
    obras: ["Jornal Nacional (a partir de 1969)", "Narrações de textos bíblicos"],
    fontes: [{nome:"Assembleia Legislativa de São Paulo", url:"https://www.al.sp.gov.br/spl/2008/12/Propositura/13012797_840574_propositura_RequerimentodeCongratula%3F%3Fes_840574%5B1%5D.doc"}]
  },
  {
    nome: "Tony Campello", iniciais: "TC", profissao: "Cantor",
    areas: ["Música"], nascimento: "Dados biográficos em revisão", falecimento: "Dados biográficos em revisão",
    local: "Ligado a Taubaté", resumo: "Cantor e irmão de Celly Campello, participou da cena musical jovem brasileira.",
    bio: "O material consultado relaciona Tony Campello ao início da trajetória musical da irmã, Celly. As datas e outros detalhes biográficos precisam ser confirmados antes de uma publicação definitiva.",
    obras: [], fontes: [{nome:"Prefeitura de Taubaté: Lei 5.569/2020", url:"https://taubate.sp.gov.br/anexos/leis/2020/5569%20DENOMINA%20SALA%20CELLY%20CAMPELLO.pdf"}]
  },
  {
    nome: "Fego Camargo", iniciais: "FC", profissao: "Maestro",
    areas: ["Música"], nascimento: "Dados biográficos em revisão", falecimento: "Dados biográficos em revisão",
    local: "Taubaté (SP)", resumo: "Maestro citado entre as personalidades ligadas à história cultural da cidade.",
    bio: "O material de referência cita Fego Camargo entre as personalidades da cidade. Informações biográficas detalhadas precisam de confirmação em fontes específicas.",
    obras: [], fontes: [{nome:"Assembleia Legislativa de São Paulo", url:"https://www.al.sp.gov.br/spl/2008/12/Propositura/13012797_840574_propositura_RequerimentodeCongratula%3F%3Fes_840574%5B1%5D.doc"}]
  },
  {
    nome: "Heitor Martins", iniciais: "HM", profissao: "Ator",
    areas: ["Teatro", "Televisão"], nascimento: "Dados biográficos em revisão", falecimento: "Dados biográficos em revisão",
    local: "Citado entre personalidades de Taubaté", resumo: "Ator mencionado no material de referência sobre personalidades ligadas à cidade.",
    bio: "O material de referência menciona Heitor Martins entre atores ligados a Taubaté, mas não traz dados biográficos suficientes para um perfil completo. As informações devem ser confirmadas em fontes adicionais.",
    obras: [], fontes: [{nome:"Assembleia Legislativa de São Paulo", url:"https://www.al.sp.gov.br/spl/2008/12/Propositura/13012797_840574_propositura_RequerimentodeCongratula%3F%3Fes_840574%5B1%5D.doc"}]
  }
];

const HISTORIA = [
  {ano:"1645", texto:"O povoado é elevado à condição de vila, em um marco importante para a formação de Taubaté."},
  {ano:"Século XIX", texto:"A expansão da cafeicultura transforma a economia local e deixa marcas na arquitetura e na memória da cidade."},
  {ano:"1906", texto:"O Convênio de Taubaté é firmado pelos governos de São Paulo, Minas Gerais e Rio de Janeiro para tratar da valorização do café."},
  {ano:"1952", texto:"A cidade passa a realizar a Semana Monteiro Lobato, evento cultural ligado à memória do escritor."}
];

const AREAS = ["Todas", ...new Set(PERSONALIDADES.flatMap(p => p.areas))];
const grade = document.querySelector("#grade-personalidades");
const busca = document.querySelector("#busca");
const filtros = document.querySelector("#filtros");
const contador = document.querySelector("#contador");
let areaAtiva = "Todas";

function escapar(valor) {
  return String(valor).replace(/[&<>"']/g, caractere => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[caractere]);
}

function normalizar(valor) {
  return String(valor).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function renderizarFiltros() {
  filtros.innerHTML = AREAS.map(area =>
    '<button class="filtro" type="button" data-area="' + escapar(area) +
    '" aria-pressed="' + (area === areaAtiva) + '">' + escapar(area) + '</button>'
  ).join("");
}

function renderizarPersonalidades() {
  const termo = normalizar(busca.value.trim());
  const lista = PERSONALIDADES.filter(p => {
    const correspondeArea = areaAtiva === "Todas" || p.areas.includes(areaAtiva);
    const texto = normalizar([p.nome, p.profissao, p.resumo, ...p.areas, p.bio].join(" "));
    return correspondeArea && texto.includes(termo);
  });

  contador.textContent = lista.length + (lista.length === 1 ? " personalidade encontrada" : " personalidades encontradas");
  grade.innerHTML = lista.length ? lista.map((p, i) => {
    const obras = p.obras.length
      ? '<ul>' + p.obras.map(obra => '<li>' + escapar(obra) + '</li>').join("") + '</ul>'
      : '<p>Portfólio em levantamento.</p>';
    const fontes = p.fontes.map(fonte =>
      '<li><a href="' + escapar(fonte.url) + '" target="_blank" rel="noopener noreferrer">' +
      escapar(fonte.nome) + '</a></li>'
    ).join("");
    return '<article class="cartao">' +
      '<div class="inicial" aria-hidden="true">' + escapar(p.iniciais) + '</div>' +
      '<div class="cartao-conteudo">' +
      '<span class="categoria">' + escapar(p.areas.join(" · ")) + '</span>' +
      '<h3>' + escapar(p.nome) + '</h3>' +
      '<p>' + escapar(p.resumo) + '</p>' +
      '<details><summary class="link-detalhe">Ver perfil</summary>' +
      '<p><strong>Atuação:</strong> ' + escapar(p.profissao) + '</p>' +
      '<p><strong>Nascimento:</strong> ' + escapar(p.nascimento) + '</p>' +
      '<p><strong>Falecimento:</strong> ' + escapar(p.falecimento) + '</p>' +
      '<p><strong>Local:</strong> ' + escapar(p.local) + '</p>' +
      '<p>' + escapar(p.bio) + '</p>' +
      '<strong>Trabalhos e destaques</strong>' + obras +
      '<strong>Fontes para consulta</strong><ul>' + fontes + '</ul></details>' +
      '</div></article>';
  }).join("") : '<p class="vazio">Nenhuma personalidade encontrada. Tente outro nome ou filtro.</p>';
}

function renderizarHistoria() {
  document.querySelector("#linha-tempo").innerHTML = HISTORIA.map(item =>
    '<li><strong>' + escapar(item.ano) + '</strong><span>' + escapar(item.texto) + '</span></li>'
  ).join("");
}

filtros.addEventListener("click", evento => {
  const botao = evento.target.closest("button[data-area]");
  if (!botao) return;
  areaAtiva = botao.dataset.area;
  renderizarFiltros();
  renderizarPersonalidades();
});
busca.addEventListener("input", renderizarPersonalidades);

renderizarFiltros();
renderizarPersonalidades();
renderizarHistoria();
