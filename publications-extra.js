publicationTopics.set("The mitigating effect of green space's spatial and temporal patterns on the urban heat island in the context of urban densification: A case study of Xi'an", ["climate", "health"]);
publicationTopics.set("Encouraging cycling through the improvement of streetscape perception: A bottom-up investigation into the relationship between street greening and bicycling volume", ["climate", "mobility", "health"]);
publicationTopics.set("Unpacking spatial-digital coupling: nonlinear morphological association ranges and spatially heterogeneous built-environment relationships in Beijing", ["mobility"]);

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
  }
);

// Insert the newly published City and Environment Interactions article into the 2026 list.
const functionPaper = document.querySelector('[data-publication="function-over-morphology"]')?.closest('article');
if (functionPaper && !document.querySelector('[data-publication="spatial-digital-coupling"]')) {
  const article = document.createElement('article');
  article.innerHTML = `<p class="publication-title"><button type="button" data-publication="spatial-digital-coupling">Unpacking spatial-digital coupling: nonlinear morphological association ranges and spatially heterogeneous built-environment relationships in Beijing</button></p><p class="publication-authors">Zuozheng Shi, Senyang Yao, <a href="${scholarUrl}" target="_blank" rel="noreferrer">Jin Rui</a>, Changran Li &amp; Wen Ouyang</p><p class="publication-venue"><em>City and Environment Interactions, 100438</em>, Aug 2026, <a href="https://doi.org/10.1016/j.cacint.2026.100438" target="_blank" rel="noreferrer">10.1016/j.cacint.2026.100438</a></p><div class="publication-actions"><button type="button" data-publication="spatial-digital-coupling">Abs</button><a href="https://doi.org/10.1016/j.cacint.2026.100438" target="_blank" rel="noreferrer">Full text</a></div>`;
  functionPaper.insertAdjacentElement('afterend', article);
  article.querySelectorAll('[data-publication="spatial-digital-coupling"]').forEach((button) => {
    button.addEventListener('click', () => {
      const publication = publications.find((item) => item.id === 'spatial-digital-coupling');
      if (publication && publicationModal) openPublication(publication, button);
    });
  });
}

// The Digital Health article was already listed; refine its publication date using the journal record.
const digitalHealthPublication = publications.find((item) => item.id === 'digital-quality-gradient');
if (digitalHealthPublication) digitalHealthPublication.date = 'Aug 2026';
const digitalHealthArticle = document.querySelector('[data-publication="digital-quality-gradient"]')?.closest('article');
if (digitalHealthArticle) {
  const venue = digitalHealthArticle.querySelector('.publication-venue');
  if (venue) venue.innerHTML = `<em>DIGITAL HEALTH 12, 1-17</em>, Aug 2026, <a href="https://doi.org/10.1177/20552076261465140" target="_blank" rel="noreferrer">10.1177/20552076261465140</a>`;
}

document.querySelectorAll(".publication-filters button").forEach((button) => {
  const topic = button.dataset.topic;
  const count = topic === "all"
    ? publicationTopics.size
    : [...publicationTopics.values()].filter((topics) => topics.includes(topic)).length;
  button.querySelector("span").textContent = String(count);
});
