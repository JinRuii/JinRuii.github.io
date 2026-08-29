// Publication audit additions and metadata corrections (2026-08-29).
// Peer-reviewed journal articles remain the items counted by the topic filters.
publicationTopics.set("The mitigating effect of green space's spatial and temporal patterns on the urban heat island in the context of urban densification: A case study of Xi'an", ["climate", "health"]);
publicationTopics.set("Encouraging cycling through the improvement of streetscape perception: A bottom-up investigation into the relationship between street greening and bicycling volume", ["climate", "mobility", "health"]);
publicationTopics.set("Unpacking spatial-digital coupling: nonlinear morphological association ranges and spatially heterogeneous built-environment relationships in Beijing", ["mobility"]);
publicationTopics.set("Revealing disparities and driving factors in leisure activity segregation of residents and tourists: A data-driven analysis of smart phone data", ["mobility", "health"]);

publications.push(
  {
    id: "green-space-uhi-xian",
    date: "Dec 2024",
    title: "The mitigating effect of green space's spatial and temporal patterns on the urban heat island in the context of urban densification: A case study of Xi'an",
    authors: "Zhaowen Xu & Jin Rui",
    journal: "Sustainable Cities and Society 117, 105974",
    abstract: "This study examines how changes in urban green-space patterns interact with densification to influence the urban heat island in central Xi'an. Using urban-density indicators, MODIS land-surface temperature, Landsat imagery and a coupling-coordination framework for 2013–2023, it identifies an overall improvement in green-space–temperature coordination but substantial differences across districts. Continued densification is associated with weaker improvement in thermal coordination, highlighting the need for context-specific green-space planning and heat-mitigation strategies in rapidly densifying cities.",
    doi: "https://doi.org/10.1016/j.scs.2024.105974",
    pdf: ""
  },
  {
    id: "street-greening-cycling",
    date: "Oct 2024",
    title: "Encouraging cycling through the improvement of streetscape perception: A bottom-up investigation into the relationship between street greening and bicycling volume",
    authors: "Qiao Zhang, Jin Rui & Yufei Wu",
    journal: "Applied Geography 171, 103388",
    abstract: "This study investigates how street-greening quality relates to bicycle-sharing activity on Xiamen Island. Street-view imagery, semantic segmentation, spatial network measures and spatial regression are combined to evaluate multiple dimensions of greening and their geographically varying associations with cycling. The results show that qualitative features such as richness, openness, safety and the composition of street elements can be as important as the amount of greenery, with marked spatial heterogeneity. The study proposes targeted, bottom-up strategies for creating more bicycle-friendly streets.",
    doi: "https://doi.org/10.1016/j.apgeog.2024.103388",
    pdf: ""
  },
  {
    id: "spatial-digital-coupling",
    date: "Aug 2026",
    title: "Unpacking spatial-digital coupling: nonlinear morphological association ranges and spatially heterogeneous built-environment relationships in Beijing",
    authors: "Zuozheng Shi, Senyang Yao, Jin Rui, Changran Li & Wen Ouyang",
    journal: "City and Environment Interactions, 100438",
    abstract: "This study examines spatial-digital coupling in Beijing's Capital Core Functional Area using anonymized cellular records to construct a grid-level measure of digital infrastructure usage intensity. An interpretable framework combining XGBoost, SHAP and geographically weighted regression identifies nonlinear and spatially heterogeneous relationships with the built environment. Commercial service quality and block openness emerge as leading predictors, while heritage concentration shows a nonlinear association and street-level greenery can strengthen digital activity in more permeable settings. The findings highlight the importance of context-specific rather than universal planning thresholds for digitally active historic urban areas.",
    doi: "https://doi.org/10.1016/j.cacint.2026.100438",
    pdf: ""
  },
  {
    id: "leisure-activity-segregation",
    date: "Mar 2025",
    title: "Revealing disparities and driving factors in leisure activity segregation of residents and tourists: A data-driven analysis of smart phone data",
    authors: "Xun Zhang, Jin Rui, Geyang Xia, Junyan Yang, Chenfan Cai & Wenjia Zhao",
    journal: "Applied Geography 176, 103513",
    abstract: "This study examines leisure-activity segregation between residents and tourists in Zhoushan using smart-phone and POI data. It identifies clear spatiotemporal differences in leisure preferences and finds that tourists experience higher segregation, particularly on weekdays and in selected functional areas. XGBoost and SHAP analyses show that built-environment effects vary across contexts, with factors such as floor-area ratio, POI density and proximity to inter-city bus stations associated with lower tourist segregation. The findings support differentiated planning strategies for more inclusive urban leisure spaces.",
    doi: "https://doi.org/10.1016/j.apgeog.2025.103513",
    pdf: ""
  },
  {
    id: "ai-human-building-typology",
    date: "Jul 2026",
    title: "AI vs Human Expert Reasoning: Assessing Agreements in Building Typology Predictions based on Street View Imagery",
    authors: "Zahratu Shabrina, Muhammad Asa, Jin Rui, Lu Yin & Stephen Law",
    journal: "arXiv:2607.14756",
    abstract: "This preprint evaluates whether vision-language models can infer building construction, current use and storeys from Google Street View imagery in ways that agree with human experts. It compares several leading models and prompting strategies, finding that chain-of-thought prompting produces more stable performance and that model accuracy can approach roughly 70% across the building-typology tasks. The reasoning analysis shows that AI relies more heavily on visual cues, while human experts incorporate broader contextual and domain knowledge. The study positions vision-language models as scalable complements to expert urban analysis rather than replacements for expert judgement.",
    doi: "https://arxiv.org/abs/2607.14756",
    pdf: ""
  },
  {
    id: "visible-order-hidden-fear",
    date: "Jan 2026",
    title: "Visible order and hidden fear: perceived safety and crime risk across day and night in Shanghai's main urban area",
    authors: "Ziwen He, Chenfan Cai & Jin Rui",
    journal: "SSRN preprint 6214802",
    abstract: "This preprint investigates how perceived safety and crime risk differ between daytime and nighttime in Shanghai's main urban area. It combines generative day-to-night street-view imagery, a localized resident survey and spatial modelling to compare safety perception with crime patterns. The analysis identifies substantially lower nighttime safety perceptions, spatial clustering, and context-dependent relationships between crowd activity, entertainment venues, ageing communities and crime risk, providing evidence for temporally differentiated urban safety governance.",
    doi: "https://doi.org/10.2139/ssrn.6214802",
    pdf: ""
  },
  {
    id: "consumption-shrinkage-bidirectional",
    date: "Sep 2025",
    title: "Bidirectional Interactions Between Consumption Downgrading and Urban Spatial Shrinkage in the Digital Era: Evidence from 286 Chinese Cities",
    authors: "Yufei Wu & Jin Rui",
    journal: "SSRN preprint 5526178",
    abstract: "This preprint examines the co-evolution of online and offline consumption downgrading and urban spatial shrinkage across 286 Chinese cities from 2018 to 2023. Using entropy-based indices, coupling-coordination analysis and GNN-enhanced geographically weighted regression, it finds strong regional disparities and an asymmetric relationship in which urban shrinkage has a stronger immediate effect on consumption downgrading, while the reverse pathway exhibits a time lag. The study develops a consumption-spatial framework for understanding urban transition under economic restructuring.",
    doi: "https://doi.org/10.2139/ssrn.5526178",
    pdf: ""
  }
);

function bindPublicationButtons(root) {
  root.querySelectorAll('[data-publication]').forEach((button) => {
    if (button.dataset.auditBound === 'true') return;
    button.dataset.auditBound = 'true';
    button.addEventListener('click', () => {
      const publication = publications.find((item) => item.id === button.dataset.publication);
      if (publication && publicationModal) openPublication(publication, button);
    });
  });
}

function updatePublicationVenue(id, html) {
  const article = document.querySelector(`[data-publication="${id}"]`)?.closest('article');
  const venue = article?.querySelector('.publication-venue');
  if (venue) venue.innerHTML = html;
}

function updatePublicationDate(id, date) {
  const publication = publications.find((item) => item.id === id);
  if (publication) publication.date = date;
}

// Align metadata to the journal issue/official record rather than early-online dates.
updatePublicationDate('function-over-morphology', 'Dec 2026');
updatePublicationVenue('function-over-morphology', `<em>Computers, Environment and Urban Systems 130, 102506</em>, Dec 2026, <a href="https://doi.org/10.1016/j.compenvurbsys.2026.102506" target="_blank" rel="noreferrer">10.1016/j.compenvurbsys.2026.102506</a>`);

updatePublicationDate('sinking-city', 'Aug 2026');
updatePublicationVenue('sinking-city', `<em>Data in Brief 67, 113048</em>, Aug 2026, <a href="https://doi.org/10.1016/j.dib.2026.113048" target="_blank" rel="noreferrer">10.1016/j.dib.2026.113048</a>`);

updatePublicationDate('digital-quality-gradient', 'Aug 2026');
updatePublicationVenue('digital-quality-gradient', `<em>DIGITAL HEALTH 12, 1-17</em>, Aug 2026, <a href="https://doi.org/10.1177/20552076261465140" target="_blank" rel="noreferrer">10.1177/20552076261465140</a>`);

updatePublicationDate('destigmatizing-urban-villages', 'Aug 2024');
updatePublicationVenue('destigmatizing-urban-villages', `<em>Habitat International 150, 103120</em>, Aug 2024, <a href="https://doi.org/10.1016/j.habitatint.2024.103120" target="_blank" rel="noreferrer">10.1016/j.habitatint.2024.103120</a>`);

// Insert the City and Environment Interactions paper into the 2026 journal list.
const functionPaper = document.querySelector('[data-publication="function-over-morphology"]')?.closest('article');
if (functionPaper && !document.querySelector('[data-publication="spatial-digital-coupling"]')) {
  const article = document.createElement('article');
  article.innerHTML = `<p class="publication-title"><button type="button" data-publication="spatial-digital-coupling">Unpacking spatial-digital coupling: nonlinear morphological association ranges and spatially heterogeneous built-environment relationships in Beijing</button></p><p class="publication-authors">Zuozheng Shi, Senyang Yao, <a href="${scholarUrl}" target="_blank" rel="noreferrer">Jin Rui</a>, Changran Li &amp; Wen Ouyang</p><p class="publication-venue"><em>City and Environment Interactions, 100438</em>, Aug 2026, <a href="https://doi.org/10.1016/j.cacint.2026.100438" target="_blank" rel="noreferrer">10.1016/j.cacint.2026.100438</a></p><div class="publication-actions"><button type="button" data-publication="spatial-digital-coupling">Abs</button><a href="https://doi.org/10.1016/j.cacint.2026.100438" target="_blank" rel="noreferrer">Full text</a></div>`;
  functionPaper.insertAdjacentElement('afterend', article);
  bindPublicationButtons(article);
}

// Insert the missing Applied Geography article into the 2025 journal list.
const placePulsePaper = document.querySelector('[data-publication="place-pulse"]')?.closest('article');
if (placePulsePaper && !document.querySelector('[data-publication="leisure-activity-segregation"]')) {
  const article = document.createElement('article');
  article.innerHTML = `<p class="publication-title"><button type="button" data-publication="leisure-activity-segregation">Revealing disparities and driving factors in leisure activity segregation of residents and tourists: A data-driven analysis of smart phone data</button></p><p class="publication-authors">Xun Zhang, <a href="${scholarUrl}" target="_blank" rel="noreferrer">Jin Rui</a>, Geyang Xia, Junyan Yang, Chenfan Cai &amp; Wenjia Zhao</p><p class="publication-venue"><em>Applied Geography 176, 103513</em>, Mar 2025, <a href="https://doi.org/10.1016/j.apgeog.2025.103513" target="_blank" rel="noreferrer">10.1016/j.apgeog.2025.103513</a></p><div class="publication-actions"><button type="button" data-publication="leisure-activity-segregation">Abs</button><a href="https://doi.org/10.1016/j.apgeog.2025.103513" target="_blank" rel="noreferrer">Full text</a></div>`;
  placePulsePaper.insertAdjacentElement('beforebegin', article);
  bindPublicationButtons(article);
}

// Keep the 2026 journal articles genuinely newest-to-oldest using official issue months.
const year2026Heading = [...document.querySelectorAll('.publication-year h2')].find((h) => h.textContent.trim() === '2026');
const year2026List = year2026Heading?.closest('.publication-year')?.nextElementSibling;
if (year2026List?.classList.contains('publication-list')) {
  const ordered2026 = [
    'function-over-morphology',
    'green-isolation',
    'consumption-downgrading',
    'sinking-city',
    'digital-quality-gradient',
    'spatial-digital-coupling',
    'berlin-traffic',
    'tactile-paving',
    'one-city-two-heats',
    'ai-urban-heat',
    'commuting-review',
    'flood-sensing',
    'urban-shrinkage',
    'road-speed-classes',
    'paying-lip-service',
    'digital-economy',
    'intergenerational-renewal',
    'green-space-sentiment'
  ];
  ordered2026.forEach((id) => {
    const article = year2026List.querySelector(`[data-publication="${id}"]`)?.closest('article');
    if (article) year2026List.appendChild(article);
  });
}

// Clarify that non-peer-reviewed outputs are deliberately separated from journal articles.
const sectionLead = document.querySelector('.publications-page .section-lead');
if (sectionLead) sectionLead.textContent = 'Peer-reviewed journal articles are listed from newest to oldest. Preprints and research datasets are listed separately below.';

// Add verified, non-duplicate preprints separately. Earlier working papers that already have a journal version are not repeated.
const publicationsSection = document.querySelector('.publications-page');
if (publicationsSection && !document.querySelector('#preprints-heading')) {
  const preprintHeading = document.createElement('div');
  preprintHeading.className = 'publication-year';
  preprintHeading.id = 'preprints-heading';
  preprintHeading.innerHTML = '<h2>Preprints</h2>';

  const preprintList = document.createElement('div');
  preprintList.className = 'publication-list';
  preprintList.innerHTML = `
    <article><p class="publication-title"><button type="button" data-publication="ai-human-building-typology">AI vs Human Expert Reasoning: Assessing Agreements in Building Typology Predictions based on Street View Imagery</button></p><p class="publication-authors">Zahratu Shabrina, Muhammad Asa, <a href="${scholarUrl}" target="_blank" rel="noreferrer">Jin Rui</a>, Lu Yin &amp; Stephen Law</p><p class="publication-venue"><em>arXiv:2607.14756</em>, Jul 2026, <a href="https://arxiv.org/abs/2607.14756" target="_blank" rel="noreferrer">arXiv</a></p><div class="publication-actions"><button type="button" data-publication="ai-human-building-typology">Abs</button><a href="https://arxiv.org/abs/2607.14756" target="_blank" rel="noreferrer">Full text</a></div></article>
    <article><p class="publication-title"><button type="button" data-publication="visible-order-hidden-fear">Visible order and hidden fear: perceived safety and crime risk across day and night in Shanghai's main urban area</button></p><p class="publication-authors">Ziwen He, Chenfan Cai &amp; <a href="${scholarUrl}" target="_blank" rel="noreferrer">Jin Rui</a></p><p class="publication-venue"><em>SSRN preprint 6214802</em>, Jan 2026, <a href="https://doi.org/10.2139/ssrn.6214802" target="_blank" rel="noreferrer">10.2139/ssrn.6214802</a></p><div class="publication-actions"><button type="button" data-publication="visible-order-hidden-fear">Abs</button><a href="https://doi.org/10.2139/ssrn.6214802" target="_blank" rel="noreferrer">Full text</a></div></article>
    <article><p class="publication-title"><button type="button" data-publication="consumption-shrinkage-bidirectional">Bidirectional Interactions Between Consumption Downgrading and Urban Spatial Shrinkage in the Digital Era: Evidence from 286 Chinese Cities</button></p><p class="publication-authors">Yufei Wu &amp; <a href="${scholarUrl}" target="_blank" rel="noreferrer">Jin Rui</a></p><p class="publication-venue"><em>SSRN preprint 5526178</em>, Sep 2025, <a href="https://doi.org/10.2139/ssrn.5526178" target="_blank" rel="noreferrer">10.2139/ssrn.5526178</a></p><div class="publication-actions"><button type="button" data-publication="consumption-shrinkage-bidirectional">Abs</button><a href="https://doi.org/10.2139/ssrn.5526178" target="_blank" rel="noreferrer">Full text</a></div></article>`;

  publicationsSection.append(preprintHeading, preprintList);
  bindPublicationButtons(preprintList);
}

// Add the institutional/Zenodo dataset separately, so it is not counted as a journal paper.
if (publicationsSection && !document.querySelector('#datasets-heading')) {
  const datasetHeading = document.createElement('div');
  datasetHeading.className = 'publication-year';
  datasetHeading.id = 'datasets-heading';
  datasetHeading.innerHTML = '<h2>Research Datasets</h2>';

  const datasetList = document.createElement('div');
  datasetList.className = 'publication-list';
  datasetList.innerHTML = `<article><p class="publication-title"><a href="https://doi.org/10.5281/zenodo.15806063" target="_blank" rel="noreferrer">Hack4Resilient Jakarta 2025: Sinking City</a></p><p class="publication-authors">Zahratu Shabrina, Fajrun Wahidil Muharram, Dekka Dhirgantara Putra, <a href="${scholarUrl}" target="_blank" rel="noreferrer">Jin Rui</a> &amp; Muhammad Asa</p><p class="publication-venue"><em>Zenodo</em>, Aug 2025, <a href="https://doi.org/10.5281/zenodo.15806063" target="_blank" rel="noreferrer">10.5281/zenodo.15806063</a></p><div class="publication-actions"><a href="https://doi.org/10.5281/zenodo.15806063" target="_blank" rel="noreferrer">Dataset</a></div></article>`;

  publicationsSection.append(datasetHeading, datasetList);
}

// Refresh topic-filter counts after all verified journal additions.
document.querySelectorAll('.publication-filters button').forEach((button) => {
  const topic = button.dataset.topic;
  const count = topic === 'all'
    ? publicationTopics.size
    : [...publicationTopics.values()].filter((topics) => topics.includes(topic)).length;
  button.querySelector('span').textContent = String(count);
});
