// Google Scholar alignment audit (2026-08-29).
// The rendered Publications page is intentionally reconciled to the 38 records
// in Jin Rui's supplied Google Scholar snapshot: 35 journal articles + 3 preprints/working papers.

// Remove the future Land Use Policy item because it is not one of the 38 Scholar records in the supplied snapshot.
publicationTopics.delete("From planar proximity to room-level depth: Nonlinear capitalization of historic landscape visibility in dense urban districts");
const historicIndex = publications.findIndex((item) => item.id === "historic-landscape-visibility");
if (historicIndex >= 0) publications.splice(historicIndex, 1);

// Entries present in the 38-record Scholar snapshot but absent from the original website data.
const scholarAdditions = [
  {
    id: "green-space-uhi-xian",
    date: "2024",
    title: "The mitigating effect of green space's spatial and temporal patterns on the urban heat island in the context of urban densification: A case study of Xi'an",
    authors: "Zhaowen Xu & Jin Rui",
    journal: "Sustainable Cities and Society 117, 105974",
    abstract: "This study examines how green-space patterns and urban densification interact with urban heat-island conditions in Xi'an and identifies spatially differentiated implications for heat-mitigation planning.",
    doi: "https://doi.org/10.1016/j.scs.2024.105974",
    topics: ["climate", "health"]
  },
  {
    id: "street-greening-cycling",
    date: "2024",
    title: "Encouraging cycling through the improvement of streetscape perception: A bottom-up investigation into the relationship between street greening and bicycling volume",
    authors: "Qiao Zhang, Jin Rui & Yufei Wu",
    journal: "Applied Geography 171, 103388",
    abstract: "This study links streetscape greening and perception measures with cycling volume and highlights spatially heterogeneous, bottom-up strategies for bicycle-friendly street improvement.",
    doi: "https://doi.org/10.1016/j.apgeog.2024.103388",
    topics: ["climate", "mobility", "health"]
  },
  {
    id: "leisure-activity-segregation",
    date: "2025",
    title: "Revealing disparities and driving factors in leisure activity segregation of residents and tourists: A data-driven analysis of smart phone data",
    authors: "Xun Zhang, Jin Rui, Geyang Xia, Junyan Yang, Chenfan Cai & Wenjia Zhao",
    journal: "Applied Geography 176, 103513",
    abstract: "Using smartphone and POI data, this study examines spatiotemporal disparities in leisure-activity segregation between residents and tourists and identifies differentiated built-environment drivers.",
    doi: "https://doi.org/10.1016/j.apgeog.2025.103513",
    topics: ["mobility", "health"]
  },
  {
    id: "coexistence-urban-decay-crime",
    date: "2026",
    title: "Coexistence of urban decay and crime? Exploring the association of physical disorder and streetscape perceptions with crime density",
    authors: "Rongyi Sun, Linggui Liu, Jin Rui, Xiao Rong & Yuheng Tu",
    journal: "Applied Geography 194, 104125",
    abstract: "This study quantifies fine-grained physical disorder and multidimensional streetscape perceptions from street-view imagery in New York City and evaluates their nonlinear associations with property and violent crime density using spatially augmented explainable machine learning.",
    doi: "https://doi.org/10.1016/j.apgeog.2026.104125",
    topics: ["health"]
  },
  {
    id: "spatial-digital-coupling",
    date: "2026",
    title: "Unpacking spatial-digital coupling: nonlinear morphological association ranges and spatially heterogeneous built-environment relationships in Beijing",
    authors: "Zuozheng Shi, Senyang Yao, Jin Rui, Changran Li & Wen Ouyang",
    journal: "City and Environment Interactions, 100438",
    abstract: "This study examines spatial-digital coupling in Beijing using mobile-signalling and network-traffic data together with XGBoost, SHAP and geographically weighted modelling to reveal nonlinear thresholds and localized built-environment relationships.",
    doi: "https://doi.org/10.1016/j.cacint.2026.100438",
    topics: ["mobility"]
  },
  {
    id: "ai-human-building-typology",
    date: "2026",
    title: "AI vs Human Expert Reasoning: Assessing Agreements in Building Typology Predictions based on Street View Imagery",
    authors: "Zahratu Shabrina, Muhammad Asa, Jin Rui, Lu Yin & Stephen Law",
    journal: "arXiv preprint arXiv:2607.14756",
    abstract: "This preprint compares vision-language-model and human-expert reasoning for building-typology prediction from street-view imagery, evaluating agreement across building construction, use and storey tasks.",
    doi: "https://arxiv.org/abs/2607.14756",
    topics: ["mobility"]
  },
  {
    id: "flood-susceptibility-ssrn",
    date: "",
    title: "Geographical simulation of routine and extreme flood susceptibility: A Machine-Learning Scenario Analysis for a Sinking City",
    authors: "Jin Rui, Zahratu Shabrina, Emma Colven & S.A.H. Saut",
    journal: "Available at SSRN 7324977",
    abstract: "Working paper listed on Google Scholar. See the SSRN record for the full abstract and manuscript.",
    doi: "https://ssrn.com/abstract=7324977",
    topics: ["climate", "health"]
  },
  {
    id: "spatial-digital-coupling-ssrn",
    date: "2026",
    title: "Unpacking spatial-digital coupling: Non-linear morphological thresholds and localized built environment impacts in Beijing",
    authors: "Zuozheng Shi, Senyang Yao, Jin Rui, Changran Li & Wen Ouyang",
    journal: "Available at SSRN 6945428",
    abstract: "This working-paper version studies digital infrastructure usage intensity in Beijing's historical core and identifies nonlinear morphological thresholds and spatially heterogeneous built-environment effects.",
    doi: "https://doi.org/10.2139/ssrn.6945428",
    topics: ["mobility"]
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

function scholarAuthorHtml(authors) {
  return authors.replaceAll("Jin Rui", `<a href="${scholarUrl}" target="_blank" rel="noreferrer">Jin Rui</a>`);
}

function scholarArticleHtml(item, linkLabel = "Full text") {
  return `<article>
    <p class="publication-title"><button type="button" data-publication="${item.id}">${item.title}</button></p>
    <p class="publication-authors">${scholarAuthorHtml(item.authors)}</p>
    <p class="publication-venue"><em>${item.journal}</em>${item.date ? `, ${item.date}` : ""}${item.doi ? `, <a href="${item.doi}" target="_blank" rel="noreferrer">${item.doi.includes("doi.org/") ? item.doi.split("doi.org/")[1] : linkLabel}</a>` : ""}</p>
    <div class="publication-actions"><button type="button" data-publication="${item.id}">Abs</button>${item.doi ? `<a href="${item.doi}" target="_blank" rel="noreferrer">${linkLabel}</a>` : ""}</div>
  </article>`;
}

function bindScholarButtons(root = document) {
  root.querySelectorAll('[data-publication]').forEach((button) => {
    if (button.dataset.scholarBound === "true") return;
    const item = publications.find((publication) => publication.id === button.dataset.publication);
    if (!item) return;
    button.dataset.scholarBound = "true";
    button.addEventListener("click", () => {
      if (publicationModal) openPublication(item, button);
    });
  });
}

// Metadata corrections retained from publisher records.
function updateVenue(id, html, date) {
  const publication = publications.find((item) => item.id === id);
  if (publication && date) publication.date = date;
  const article = document.querySelector(`[data-publication="${id}"]`)?.closest("article");
  const venue = article?.querySelector(".publication-venue");
  if (venue) venue.innerHTML = html;
}

updateVenue("function-over-morphology", `<em>Computers, Environment and Urban Systems 130, 102506</em>, 2026, <a href="https://doi.org/10.1016/j.compenvurbsys.2026.102506" target="_blank" rel="noreferrer">10.1016/j.compenvurbsys.2026.102506</a>`, "2026");
updateVenue("sinking-city", `<em>Data in Brief, 113048</em>, 2026, <a href="https://doi.org/10.1016/j.dib.2026.113048" target="_blank" rel="noreferrer">10.1016/j.dib.2026.113048</a>`, "2026");
updateVenue("digital-quality-gradient", `<em>Digital Health 12, 20552076261465140</em>, 2026, <a href="https://doi.org/10.1177/20552076261465140" target="_blank" rel="noreferrer">10.1177/20552076261465140</a>`, "2026");

const publicationsPage = document.querySelector(".publications-page");
if (publicationsPage) {
  // Remove the 2027 item/section that is outside the supplied 38-record Scholar snapshot.
  const historicArticle = publicationsPage.querySelector('[data-publication="historic-landscape-visibility"]')?.closest("article");
  const historicList = historicArticle?.closest(".publication-list");
  const historicHeading = historicList?.previousElementSibling;
  historicArticle?.remove();
  if (historicList && !historicList.querySelector("article")) {
    historicList.remove();
    if (historicHeading?.classList.contains("publication-year")) historicHeading.remove();
  }

  const yearHeading = (year) => [...publicationsPage.querySelectorAll(".publication-year h2")].find((heading) => heading.textContent.trim() === String(year));
  const yearList = (year) => yearHeading(year)?.closest(".publication-year")?.nextElementSibling;

  // Ensure the two 2024 Scholar papers exist even on older cached HTML versions.
  const list2024 = yearList(2024);
  ["green-space-uhi-xian", "street-greening-cycling"].forEach((id) => {
    if (list2024 && !publicationsPage.querySelector(`[data-publication="${id}"]`)) {
      const item = scholarAdditions.find((entry) => entry.id === id);
      if (item) list2024.insertAdjacentHTML("afterbegin", scholarArticleHtml(item));
    }
  });

  // Ensure the missing 2025 Scholar paper exists.
  const list2025 = yearList(2025);
  if (list2025 && !publicationsPage.querySelector('[data-publication="leisure-activity-segregation"]')) {
    const item = scholarAdditions.find((entry) => entry.id === "leisure-activity-segregation");
    if (item) list2025.insertAdjacentHTML("beforeend", scholarArticleHtml(item));
  }

  // Ensure all journal-version 2026 Scholar papers exist.
  const list2026 = yearList(2026);
  ["coexistence-urban-decay-crime", "spatial-digital-coupling"].forEach((id) => {
    if (list2026 && !publicationsPage.querySelector(`[data-publication="${id}"]`)) {
      const item = scholarAdditions.find((entry) => entry.id === id);
      if (item) list2026.insertAdjacentHTML("afterbegin", scholarArticleHtml(item));
    }
  });

  // Rebuild the non-journal section to match Scholar exactly: 1 arXiv + 2 SSRN records.
  const oldPreprints = publicationsPage.querySelector("#preprints-heading");
  if (oldPreprints) {
    const oldList = oldPreprints.nextElementSibling;
    oldPreprints.remove();
    if (oldList?.classList.contains("publication-list")) oldList.remove();
  }
  const oldDatasets = publicationsPage.querySelector("#datasets-heading");
  if (oldDatasets) {
    const oldList = oldDatasets.nextElementSibling;
    oldDatasets.remove();
    if (oldList?.classList.contains("publication-list")) oldList.remove();
  }

  const preprintHeading = document.createElement("div");
  preprintHeading.className = "publication-year";
  preprintHeading.id = "preprints-heading";
  preprintHeading.innerHTML = "<h2>Preprints & Working Papers</h2>";
  const preprintList = document.createElement("div");
  preprintList.className = "publication-list";
  ["ai-human-building-typology", "flood-susceptibility-ssrn", "spatial-digital-coupling-ssrn"].forEach((id) => {
    const item = scholarAdditions.find((entry) => entry.id === id);
    if (item) preprintList.insertAdjacentHTML("beforeend", scholarArticleHtml(item));
  });
  publicationsPage.append(preprintHeading, preprintList);

  // Hard reconciliation: remove any rendered item that is not represented in the 38-record data model.
  const allowedIds = new Set(publications.map((item) => item.id));
  publicationsPage.querySelectorAll(".publication-list article").forEach((article) => {
    const id = article.querySelector("[data-publication]")?.dataset.publication;
    if (id && !allowedIds.has(id)) article.remove();
  });

  bindScholarButtons(publicationsPage);
}

// The Map now represents the exact 38 Scholar records, including the 3 preprints/working papers.
document.querySelectorAll(".publication-filters button").forEach((button) => {
  const topic = button.dataset.topic;
  const count = topic === "all"
    ? publicationTopics.size
    : [...publicationTopics.values()].filter((topics) => topics.includes(topic)).length;
  const span = button.querySelector("span");
  if (span) span.textContent = String(count);
});

// Final integrity guard for the supplied Scholar snapshot.
if (publicationTopics.size !== 38 || publications.length !== 38) {
  console.warn("Publication alignment warning:", { topicCount: publicationTopics.size, publicationCount: publications.length });
}
