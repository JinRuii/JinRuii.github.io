const scholarUrl = "https://scholar.google.com/citations?user=DCsYsa0AAAAJ&hl=en";

const publicationTopics = new Map([
  ["Green in isolation: An interpretable spatial machine learning approach to understanding green satisfaction disparities in segregated neighborhoods", ["climate", "health"]],
  ["From agglomeration to downgrading: Spatial differentiation and drivers of online and offline consumption downgrading in Chinese cities", ["health"]],
  ["Unveiling spatiotemporal mechanisms of urban traffic: Multi-scale determinants and explainable street-level dynamics of a graph neural network in Berlin", ["mobility"]],
  ["Sinking city: A multidimensional dataset for urban and land subsidence modelling based on satellite imagery in Jakarta, Indonesia (2016–2024)", ["climate"]],
  ["Street-level monitoring of urban tactile paving obstructions through visual-language models and street view imagery", ["mobility", "health"]],
  ["Artificial intelligence applications in urban extreme heat management: A systematic review of forecasting, monitoring, mitigation and decision support", ["climate", "health"]],
  ["From causes to consequences: Unpacking the fragmented logic of urban commuting research through LLM-assisted review", ["mobility", "health"]],
  ["One city, two heats: An LLM-enabled comparative analysis of heat perception, thermal environment, and health pathways in Beijing, China", ["climate", "health"]],
  ["Social media-driven multi-scale flood sensing: A systematic review of applications from global monitoring to community resilience", ["climate", "health"]],
  ["Paying lip service? An investigation into the spatial mismatch between younger and older adults’ streetscape perceptual preference and visitation behavior", ["mobility", "health"]],
  ["The digital economy enhances overall life satisfaction but reduces equity among vulnerable groups: Empirical evidence from 287 cities in China", ["health"]],
  ["Rethinking urban shrinkage: An LLM-enhanced literature review of global landscapes and theoretical reconstruction of shrinking cities", ["health"]],
  ["Estimating road speed classes: Integrating OpenStreetMap and Street View imagery for missing data imputation", ["mobility"]],
  ["Scale-dependent environmental influences on urban green space sentiment: Integrating multimodal social media analysis and explainable spatial models", ["climate", "health"]],
  ["Intergenerational spatial differentiation in neighborhood renewal: How can we achieve spatial equity between the elderly and the young?", ["health"]],
  ["Marginalized but equal? An investigation of visible green equity disparities in marginalized residents' daily commutes and its potential green solutions", ["climate", "mobility", "health"]],
  ["Green disparities, happiness elusive: Decoding the spatial mismatch between green equity and happiness from vulnerable perspectives", ["climate", "health"]],
  ["Leveraging large language models for tourism research based on 5D framework: A collaborative analysis of tourist sentiments and spatial features", ["mobility", "health"]],
  ["Plausible or misleading? Evaluating the adaption of the Place Pulse 2.0 dataset for predicting subjective perception in Chinese urban landscapes", ["health"]],
  ["Revealing the impact of urban spatial morphology on land surface temperature in plain and plateau cities using explainable machine learning", ["climate", "health"]],
  ["Towards equal neighborhood evolution? A longitudinal study of soundscape and visual evolution and housing value fluctuations in Shenzhen", ["climate", "health"]],
  ["Beyond built environment: Unveiling the interplay of streetscape perceptions and cycling behavior", ["mobility", "health"]],
  ["Destigmatizing urban villages by examining their attractiveness: Quantification evidence from Shenzhen", ["health"]],
  ["Deciphering urban bike-sharing patterns: An in-depth analysis of natural environment and visual quality in New York's Citi Bike system", ["climate", "mobility"]],
  ["Decoding vibrant neighborhoods: Disparities between formal neighborhoods and urban villages in eye-level perceptions and physical environment", ["climate", "health"]],
  ["Exploring the association between the settlement environment and residents' positive sentiments in urban villages and formal settlements in Shenzhen", ["climate", "health"]],
  ["Measuring streetscape perceptions from driveways and sidewalks to inform pedestrian-oriented street renewal in Düsseldorf", ["mobility", "health"]],
  ["Examining the role of innovative streets in enhancing urban mobility and livability for sustainable urban transition: A review", ["climate", "mobility", "health"]]
]);

function publicationTitle(article) {
  return article.querySelector(".publication-title")?.textContent.trim() || "";
}

function applyPublicationFilter(topic) {
  const publicationPage = document.querySelector(".publications-page");
  if (!publicationPage) return;

  publicationPage.querySelectorAll(".publication-list article").forEach((article) => {
    const topics = publicationTopics.get(publicationTitle(article)) || [];
    article.hidden = topic !== "all" && !topics.includes(topic);
  });
  publicationPage.querySelectorAll(".publication-year").forEach((heading) => {
    heading.hidden = topic !== "all";
  });
  publicationPage.querySelectorAll(".publication-filters button").forEach((button) => {
    const isActive = button.dataset.topic === topic;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.querySelectorAll(".publication-filters button").forEach((button) => {
  const topic = button.dataset.topic;
  const count = topic === "all"
    ? publicationTopics.size
    : [...publicationTopics.values()].filter((topics) => topics.includes(topic)).length;
  button.querySelector("span").textContent = String(count);
  button.addEventListener("click", () => applyPublicationFilter(topic));
});

const publications = [
  {
    id: "green-isolation",
    date: "Sep 2026",
    title: "Green in isolation: An interpretable spatial machine learning approach to understanding green satisfaction disparities in segregated neighborhoods",
    authors: "Jin Rui, Chenyu Shao & Xiayi Zhang",
    journal: "Habitat International 175, 103891",
    abstract: "Urban green space is often assessed through citywide averages that conceal unequal neighbourhood experiences. This study develops an interpretable spatial machine-learning framework to examine how segregation and local contextual conditions shape disparities in residents’ satisfaction with greenery, revealing that the presence of green space alone does not guarantee an equally positive experience across neighbourhoods.",
    doi: "https://doi.org/10.1016/j.habitatint.2026.103891",
    pdf: "https://www.sciencedirect.com/science/article/pii/S0197397526001840/pdfft?isDTMRedir=true&download=true"
  },
  {
    id: "consumption-downgrading",
    date: "Aug 2026",
    title: "From agglomeration to downgrading: Spatial differentiation and drivers of online and offline consumption downgrading in Chinese cities",
    authors: "Jin Rui & Zhaowen Xu",
    journal: "Land Use Policy 167, 108034",
    abstract: "Against the backdrop of sustained economic growth, this study examines the spatial differentiation of online and offline consumption downgrading in 289 Chinese cities from 2018 to 2023. It identifies contrasting spatial patterns and shows that economic agglomeration, population density, education, and industrial structure operate differently across consumption modes, providing evidence for understanding urban consumption transformation.",
    doi: "https://doi.org/10.1016/j.landusepol.2026.108034",
    pdf: "https://www.sciencedirect.com/science/article/pii/S0264837726001183/pdfft?isDTMRedir=true&download=true"
  },
  {
    id: "berlin-traffic",
    date: "Jul 2026",
    title: "Unveiling spatiotemporal mechanisms of urban traffic: Multi-scale determinants and explainable street-level dynamics of a graph neural network in Berlin",
    authors: "Shiyu Tang, Jin Rui, Sven Lautenbach, Christina Ludwig, Sukanya Randhawa, Steffen Knoblauch & Alexander Zipf",
    journal: "Journal of Transport Geography 135, 104754",
    abstract: "Street-level average traffic speeds are essential for routing and transport assessment, but public data cover only part of most urban road networks. Using Berlin as a case study, this research combines GraphSAGE prediction with Geographical and Temporal Weighted Regression interpretation, predicts speeds for roads without observed data, and reveals spatially varying relationships between speed, road attributes, population density, pedestrian activity, and traffic signals.",
    doi: "https://doi.org/10.1016/j.jtrangeo.2026.104754",
    pdf: "https://www.sciencedirect.com/science/article/pii/S0966692326002085/pdfft?isDTMRedir=true&download=true"
  },
  {
    id: "tactile-paving",
    date: "Jun 2026",
    title: "Street-level monitoring of urban tactile paving obstructions through visual-language models and street view imagery",
    authors: "Hanbei Chen & Jin Rui",
    journal: "Environment and Planning B: Urban Analytics and City Science, OnlineFirst",
    abstract: "Tactile paving is vital infrastructure for safe mobility among visually impaired people, yet it is affected by both physical damage and temporary encroachment. This study integrates visual-language models with pedestrian-view imagery to assess tactile-paving usability around 110 metro stations in central Beijing, using a three-tier risk system that captures the paving itself, its immediate proximity zone, and the surrounding environment.",
    doi: "https://doi.org/10.1177/23998083261462585",
    pdf: "https://journals.sagepub.com/doi/pdf/10.1177/23998083261462585"
  },
  {
    id: "ai-urban-heat",
    date: "Jun 2026",
    title: "Artificial intelligence applications in urban extreme heat management: A systematic review of forecasting, monitoring, mitigation and decision support",
    authors: "Jin Rui, Zahratu Shabrina & Wenjing Gong",
    journal: "Environmental Impact Assessment Review 119, 108363",
    abstract: "Urban extreme heat is intensifying under global warming and rapid urbanisation, with major consequences for health, infrastructure, and social equity. This systematic review synthesises 102 publications on artificial-intelligence applications in forecasting, monitoring, mitigation, and decision support, and identifies priorities for more robust, interpretable, and policy-relevant urban heat research.",
    doi: "https://doi.org/10.1016/j.eiar.2026.108363",
    pdf: "https://www.sciencedirect.com/science/article/pii/S0195925526000375/pdfft?isDTMRedir=true&download=true"
  },
  {
    id: "commuting-review",
    date: "Jun 2026",
    title: "From causes to consequences: Unpacking the fragmented logic of urban commuting research through LLM-assisted review",
    authors: "Jin Rui, Lei Qin & Chenfan Cai",
    journal: "Journal of Urban Mobility 9, 100230",
    abstract: "Urban commuting research has accumulated substantial knowledge about travel behaviour, built environments, and social and environmental outcomes, but these strands remain fragmented. This LLM-assisted review organises the field from causes to consequences, identifies disconnected analytical traditions, and proposes a more integrated research agenda linking determinants, commuting processes, and wider urban outcomes.",
    doi: "https://doi.org/10.1016/j.urbmob.2026.100230",
    pdf: "https://www.sciencedirect.com/science/article/pii/S2667091726000476/pdfft?isDTMRedir=true&download=true"
  },
  {
    id: "flood-sensing",
    date: "May 2026",
    title: "Social media-driven multi-scale flood sensing: A systematic review of applications from global monitoring to community resilience",
    authors: "Jin Rui & Wenjing Gong",
    journal: "Journal of Environmental Management 407, 129895",
    abstract: "Social media has become an important source of timely, volunteered information for flood monitoring and response. This systematic review traces applications across spatial scales, from global sensing to community resilience, compares data sources and analytical approaches, and highlights challenges involving representativeness, validation, ethics, and integration with conventional flood-risk systems.",
    doi: "https://doi.org/10.1016/j.jenvman.2026.129895",
    pdf: "https://www.sciencedirect.com/science/article/pii/S0301479726013551/pdfft?isDTMRedir=true&download=true"
  },
  {
    id: "paying-lip-service",
    date: "Apr 2026",
    title: "Paying lip service? An investigation into the spatial mismatch between younger and older adults’ streetscape perceptual preference and visitation behavior",
    authors: "Jin Rui & Wenjing Gong",
    journal: "Cities 171, 106750",
    abstract: "Do stated streetscape preferences correspond to the places people actually visit? This study compares younger and older adults’ perceptual preferences with observed visitation behaviour, revealing a spatial mismatch between preferred and visited environments and showing why age-friendly planning should combine stated perceptions with behavioural evidence.",
    doi: "https://doi.org/10.1016/j.cities.2025.106750",
    pdf: "https://www.sciencedirect.com/science/article/pii/S0264275125010534/pdfft?isDTMRedir=true&download=true"
  },
  {
    id: "digital-economy",
    date: "Apr 2026",
    title: "The digital economy enhances overall life satisfaction but reduces equity among vulnerable groups: Empirical evidence from 287 cities in China",
    authors: "Jin Rui, Chenyu Shao, Lei Qin & Wenlin Zhao",
    journal: "Applied Geography 189, 103925",
    abstract: "This study investigates how the digital economy relates to life satisfaction across 287 Chinese cities and whether its benefits are distributed equally. The findings indicate an overall positive association with life satisfaction alongside widening disadvantages for vulnerable groups, underscoring the need to evaluate digital development through both aggregate welfare and equity perspectives.",
    doi: "https://doi.org/10.1016/j.apgeog.2026.103925",
    pdf: "https://www.sciencedirect.com/science/article/pii/S0143622826000354/pdfft?isDTMRedir=true&download=true"
  }
];

const publicationModal = document.querySelector("#publication-modal");
const allPublicationsModal = document.querySelector("#all-publications-modal");
let returnFocus = null;

function authorHtml(authors) {
  return authors.replaceAll("Jin Rui", `<a href="${scholarUrl}" target="_blank" rel="noreferrer">Jin Rui</a>`);
}

function actionHtml(publication) {
  return `<a href="${publication.doi}" target="_blank" rel="noreferrer">DOI <span aria-hidden="true">↗</span></a><a href="${publication.pdf}" target="_blank" rel="noreferrer">PDF <span aria-hidden="true">↗</span></a>`;
}

function showModal(modal, trigger) {
  returnFocus = trigger || document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeModal(modal) {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (returnFocus) returnFocus.focus();
}

function openPublication(publication, trigger) {
  document.querySelector("#publication-modal-eyebrow").textContent = `${publication.date} · ${publication.journal}`;
  document.querySelector("#publication-modal-title").textContent = publication.title;
  document.querySelector("#publication-modal-authors").innerHTML = authorHtml(publication.authors);
  document.querySelector("#publication-modal-abstract").textContent = publication.abstract;
  document.querySelector("#publication-modal-actions").innerHTML = actionHtml(publication);
  showModal(publicationModal, trigger);
}

document.querySelectorAll("[data-publication]").forEach((button) => {
  button.addEventListener("click", () => {
    const publication = publications.find((item) => item.id === button.dataset.publication);
    if (publication && publicationModal) openPublication(publication, button);
  });
});

document.querySelector("#view-all-publications")?.addEventListener("click", (event) => {
  const list = document.querySelector("#all-publications-list");
  list.innerHTML = publications.map((publication) => `
    <article>
      <p class="modal-publication-date">${publication.date}</p>
      <h3>${publication.title}</h3>
      <p>${authorHtml(publication.authors)}</p>
      <p><em>${publication.journal}</em></p>
      <p class="modal-publication-abstract">${publication.abstract}</p>
      <div class="modal-actions">${actionHtml(publication)}</div>
    </article>
  `).join("");
  showModal(allPublicationsModal, event.currentTarget);
});

[publicationModal, allPublicationsModal].filter(Boolean).forEach((modal) => {
  modal.querySelector(".modal-close").addEventListener("click", () => closeModal(modal));
  modal.addEventListener("mousedown", (event) => {
    if (event.target === modal) closeModal(modal);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (publicationModal && !publicationModal.hidden) closeModal(publicationModal);
  if (allPublicationsModal && !allPublicationsModal.hidden) closeModal(allPublicationsModal);
});

document.querySelectorAll(".research-interest-media").forEach((button) => {
  button.addEventListener("click", () => {
    const isZoomed = button.classList.toggle("is-zoomed");
    button.setAttribute("aria-pressed", String(isZoomed));
  });
});
