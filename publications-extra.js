// Publications page reconciled to the 38 records in the supplied Google Scholar snapshot.

const scholarExcludedTitle = "From planar proximity to room-level depth: Nonlinear capitalization of historic landscape visibility in dense urban districts";
publicationTopics.delete(scholarExcludedTitle);
const excludedIndex = publications.findIndex((item) => item.id === "historic-landscape-visibility");
if (excludedIndex >= 0) publications.splice(excludedIndex, 1);

const scholarAdditions = [
  {
    id: "green-space-uhi-xian",
    date: "Dec 2024",
    title: "The mitigating effect of green space's spatial and temporal patterns on the urban heat island in the context of urban densification: A case study of Xi'an",
    authors: "Zhaowen Xu & Jin Rui",
    journal: "Sustainable Cities and Society 117, 105974",
    abstract: "This study examines how green-space patterns and urban densification interact with urban heat-island conditions in Xi'an and identifies spatially differentiated implications for heat-mitigation planning.",
    doi: "https://doi.org/10.1016/j.scs.2024.105974",
    topics: ["climate", "health"],
    kind: "journal"
  },
  {
    id: "street-greening-cycling",
    date: "Oct 2024",
    title: "Encouraging cycling through the improvement of streetscape perception: A bottom-up investigation into the relationship between street greening and bicycling volume",
    authors: "Qiao Zhang, Jin Rui & Yufei Wu",
    journal: "Applied Geography 171, 103388",
    abstract: "This study links streetscape greening and perception measures with cycling volume and highlights spatially heterogeneous, bottom-up strategies for bicycle-friendly street improvement.",
    doi: "https://doi.org/10.1016/j.apgeog.2024.103388",
    topics: ["climate", "mobility", "health"],
    kind: "journal"
  },
  {
    id: "leisure-activity-segregation",
    date: "Mar 2025",
    title: "Revealing disparities and driving factors in leisure activity segregation of residents and tourists: A data-driven analysis of smart phone data",
    authors: "Xun Zhang, Jin Rui, Geyang Xia, Junyan Yang, Chenfan Cai & Wenjia Zhao",
    journal: "Applied Geography 176, 103513",
    abstract: "Using smartphone and POI data, this study examines spatiotemporal disparities in leisure-activity segregation between residents and tourists and identifies differentiated built-environment drivers.",
    doi: "https://doi.org/10.1016/j.apgeog.2025.103513",
    topics: ["mobility", "health"],
    kind: "journal"
  },
  {
    id: "coexistence-urban-decay-crime",
    date: "2026",
    title: "Coexistence of urban decay and crime? Exploring the association of physical disorder and streetscape perceptions with crime density",
    authors: "Rongyi Sun, Linggui Liu, Jin Rui, Xiao Rong & Yuheng Tu",
    journal: "Applied Geography 194, 104125",
    abstract: "This study quantifies fine-grained physical disorder and multidimensional streetscape perceptions from street-view imagery and evaluates their nonlinear associations with crime density using spatially augmented explainable machine learning.",
    doi: "https://doi.org/10.1016/j.apgeog.2026.104125",
    topics: ["health"],
    kind: "journal"
  },
  {
    id: "spatial-digital-coupling",
    date: "Aug 2026",
    title: "Unpacking spatial-digital coupling: nonlinear morphological association ranges and spatially heterogeneous built-environment relationships in Beijing",
    authors: "Zuozheng Shi, Senyang Yao, Jin Rui, Changran Li & Wen Ouyang",
    journal: "City and Environment Interactions, 100438",
    abstract: "This study examines spatial-digital coupling in Beijing using mobile-signalling and network-traffic data together with XGBoost, SHAP and geographically weighted modelling to reveal nonlinear thresholds and localized built-environment relationships.",
    doi: "https://doi.org/10.1016/j.cacint.2026.100438",
    topics: ["mobility"],
    kind: "journal"
  },
  {
    id: "ai-human-building-typology",
    date: "Jul 2026",
    title: "AI vs Human Expert Reasoning: Assessing Agreements in Building Typology Predictions based on Street View Imagery",
    authors: "Zahratu Shabrina, Muhammad Asa, Jin Rui, Lu Yin & Stephen Law",
    journal: "arXiv preprint arXiv:2607.14756",
    abstract: "This preprint compares vision-language-model and human-expert reasoning for building-typology prediction from street-view imagery, evaluating agreement across building construction, use and storey tasks.",
    doi: "https://arxiv.org/abs/2607.14756",
    topics: ["mobility"],
    kind: "preprint"
  },
  {
    id: "flood-susceptibility-ssrn",
    date: "",
    title: "Geographical simulation of routine and extreme flood susceptibility: A Machine-Learning Scenario Analysis for a Sinking City",
    authors: "Jin Rui, Zahratu Shabrina, Emma Colven & S.A.H. Saut",
    journal: "Available at SSRN 7324977",
    abstract: "Working paper listed on Google Scholar. See the SSRN record for the full abstract and manuscript.",
    doi: "https://ssrn.com/abstract=7324977",
    topics: ["climate", "health"],
    kind: "preprint"
  },
  {
    id: "spatial-digital-coupling-ssrn",
    date: "",
    title: "Unpacking spatial-digital coupling: Non-linear morphological thresholds and localized built environment impacts in Beijing",
    authors: "Zuozheng Shi, Senyang Yao, Jin Rui, Changran Li & Wen Ouyang",
    journal: "Available at SSRN 6945428",
    abstract: "This working-paper version studies digital infrastructure usage intensity in Beijing's historical core and identifies nonlinear morphological thresholds and spatially heterogeneous built-environment effects.",
    doi: "https://doi.org/10.2139/ssrn.6945428",
    topics: ["mobility"],
    kind: "preprint"
  }
];

scholarAdditions.forEach((item) => {
  publicationTopics.set(item.title, item.topics);
  if (!publications.some((publication) => publication.id === item.id)) {
    publications.push({
      id: item.id,
      date: item.date,
      title: item.title,
      authors: item.authors,
      journal: item.journal,
      abstract: item.abstract,
      doi: item.doi,
      pdf: ""
    });
  }
});

const preprintIds = new Set([
  "ai-human-building-typology",
  "flood-susceptibility-ssrn",
  "spatial-digital-coupling-ssrn"
]);

function authorHtml(authors) {
  return authors.replaceAll("Jin Rui", `<a href="${scholarUrl}" target="_blank" rel="noreferrer">Jin Rui</a>`);
}

function outputHtml(item, linkLabel = "Full text") {
  const linkText = item.doi?.includes("doi.org/") ? item.doi.split("doi.org/")[1] : linkLabel;
  return `<article>
    <p class="publication-title"><button type="button" data-publication="${item.id}">${item.title}</button></p>
    <p class="publication-authors">${authorHtml(item.authors)}</p>
    <p class="publication-venue"><em>${item.journal}</em>${item.date ? `, ${item.date}` : ""}${item.doi ? `, <a href="${item.doi}" target="_blank" rel="noreferrer">${linkText}</a>` : ""}</p>
    <div class="publication-actions"><button type="button" data-publication="${item.id}">Abs</button>${item.doi ? `<a href="${item.doi}" target="_blank" rel="noreferrer">${linkLabel}</a>` : ""}</div>
  </article>`;
}

const monthRank = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
function publicationYear(item) {
  return Number(String(item.date).match(/20\d{2}/)?.[0] || 0);
}
function publicationMonth(item) {
  return monthRank[String(item.date).slice(0, 3)] || 0;
}

const results = document.querySelector("#publication-results");
if (results) {
  results.innerHTML = "";

  const journals = publications.filter((item) => !preprintIds.has(item.id));
  const years = [...new Set(journals.map(publicationYear).filter(Boolean))].sort((a, b) => b - a);

  years.forEach((year) => {
    const heading = document.createElement("div");
    heading.className = "publication-year";
    heading.innerHTML = `<h2>${year}</h2>`;
    const list = document.createElement("div");
    list.className = "publication-list";

    journals
      .filter((item) => publicationYear(item) === year)
      .sort((a, b) => publicationMonth(b) - publicationMonth(a))
      .forEach((item) => list.insertAdjacentHTML("beforeend", outputHtml(item)));

    results.append(heading, list);
  });

  const preprintHeading = document.createElement("div");
  preprintHeading.className = "publication-year";
  preprintHeading.innerHTML = "<h2>Preprints &amp; Working Papers</h2>";
  const preprintList = document.createElement("div");
  preprintList.className = "publication-list";
  publications
    .filter((item) => preprintIds.has(item.id))
    .forEach((item) => preprintList.insertAdjacentHTML("beforeend", outputHtml(item)));
  results.append(preprintHeading, preprintList);
}

// Match a few journal labels to the supplied Scholar snapshot.
const metadataOverrides = {
  "digital-quality-gradient": { journal: "Digital Health 12, 20552076261465140", date: "2026" },
  "sinking-city": { journal: "Data in Brief, 113048", date: "2026" }
};
Object.entries(metadataOverrides).forEach(([id, override]) => {
  const item = publications.find((publication) => publication.id === id);
  if (!item) return;
  item.journal = override.journal;
  item.date = override.date;
});

// Refresh counts after all Scholar records have been reconciled.
document.querySelectorAll(".publication-filters button").forEach((button) => {
  const topic = button.dataset.topic;
  const count = topic === "all"
    ? publicationTopics.size
    : [...publicationTopics.values()].filter((topics) => topics.includes(topic)).length;
  const span = button.querySelector("span");
  if (span) span.textContent = String(count);
});

// Bind modal actions for dynamically rendered publications.
document.querySelectorAll("#publication-results [data-publication]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = publications.find((publication) => publication.id === button.dataset.publication);
    if (item && publicationModal) openPublication(item, button);
  });
});

if (publicationTopics.size !== 38 || publications.length !== 38) {
  console.warn("Publication alignment warning:", {
    topicCount: publicationTopics.size,
    publicationCount: publications.length
  });
}
