publicationTopics.set("The mitigating effect of green space's spatial and temporal patterns on the urban heat island in the context of urban densification: A case study of Xi'an", ["climate", "health"]);
publicationTopics.set("Encouraging cycling through the improvement of streetscape perception: A bottom-up investigation into the relationship between street greening and bicycling volume", ["climate", "mobility", "health"]);

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
  }
);

document.querySelectorAll(".publication-filters button").forEach((button) => {
  const topic = button.dataset.topic;
  const count = topic === "all"
    ? publicationTopics.size
    : [...publicationTopics.values()].filter((topics) => topics.includes(topic)).length;
  button.querySelector("span").textContent = String(count);
});
