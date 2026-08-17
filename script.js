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
    abstract: "Urban green spaces are crucial for the health and well-being of residents. However, green planning in isolated urban informal neighborhoods might exacerbate spatial inequalities, leading to green gentrification and stig- matization. Understanding the nonlinear and continuous relationships between green environments and resi- dents' satisfaction within segregated areas remains challenging. This study established an interpretable spatial machine learning framework, integrating the MGW_LightGBM and SHAP models to address nonlinearity, spatial heterogeneity, and interpretability issues. Utilizing multisource data and deep learning technology, the study provides global and local explanations of residents' green satisfaction relative to their green environment. The findings indicated that: (1) 3D green morphologies play a more significant role in influencing green satisfaction compared to 2D green landscape patterns, especially the contributions from tree height and canopy volume; (2) All 2D and 3D green variables, including contagion, Shannon diversity index, and tree height, exhibit distinct nonlinear and threshold effects on green satisfaction; (3) In informal neighborhoods, due to spatial and economic constraints, residents' attitudes towards green spaces show marked pragmatism and spatial adaptability; (4) Compared to existing models, the MGW_LightGBM model demonstrates superior performance in modeling and predicting green satisfaction. These findings are vital for differentiated green planning in neighborhoods, alle- viating residential segregation, and enhancing social integration.",
    doi: "https://doi.org/10.1016/j.habitatint.2026.103891",
    pdf: ""
  },
  {
    id: "consumption-downgrading",
    date: "Aug 2026",
    title: "From agglomeration to downgrading: Spatial differentiation and drivers of online and offline consumption downgrading in Chinese cities",
    authors: "Jin Rui & Zhaowen Xu",
    journal: "Land Use Policy 167, 108034",
    abstract: "Against the backdrop of sustained economic growth, certain regions and consumption sectors in China have exhibited downgrading trends, yet existing research lacks exploration of the characteristics of different con- sumption forms and their spatial drivers. This study analyzes the spatial differentiation of online and offline consumption downgrading in 289 Chinese cities from 2018 to 2023, and explores the mechanisms of multidi- mensional socioeconomic factors. The research constructs a Geographic Convolutional Neural Network Weighted Regression (GCNNWR) model, integrating the nonlinear feature learning of convolutional neural networks with the spatial heterogeneity capturing of geographically weighted regression. The entropy method is employed to weight online and offline consumption indicators, and socioeconomic variables are integrated to build an explanatory framework. The research found: (1) Urban consumption downgrading in China presented significant spatial differentiation patterns, with offline consumption downgrading being more concentrated and intensive in high economic agglomeration areas such as Beijing-Tianjin-Hebei and the Yangtze River Delta, while online consumption downgrading exhibited stronger spatial diffusion effects; (2) Consumption downgrading displayed “inverse gradient” an distribution phenomenon, where economically developed regions actually exceeded un- derdeveloped regions in their degree of consumption downgrading; (3) Economic agglomeration level had the strongest explanatory power for offline consumption downgrading, while population density ranked second in its impact on online consumption downgrading, indicating fundamental differences in the spatial agglomeration effect mechanisms of different consumption modes; (4) Higher education levels showed positive correlations with consumption downgrading, and the consumption-promoting effects of industrial structure optimization exhibited obvious regional threshold characteristics. This study provides evidence for understanding urban consumption transformation.",
    doi: "https://doi.org/10.1016/j.landusepol.2026.108034",
    pdf: ""
  },
  {
    id: "berlin-traffic",
    date: "Jul 2026",
    title: "Unveiling spatiotemporal mechanisms of urban traffic: Multi-scale determinants and explainable street-level dynamics of a graph neural network in Berlin",
    authors: "Shiyu Tang, Jin Rui, Sven Lautenbach, Christina Ludwig, Sukanya Randhawa, Steffen Knoblauch & Alexander Zipf",
    journal: "Journal of Transport Geography 135, 104754",
    abstract: "Street-level average traffic speeds provide essential information for routing, commuting time estimation, and many transport and environmental assessments. However, publicly available traffic speed data often covers only a small share of the urban road networks. One approach to increase traffic speed data availability is the use of models. Here, we tested a two-stage prediction-interpretation framework that combines a graph neural network (GraphSAGE) with a Geographical and Temporal Weighted Regression (GTWR) approach. While the graph neural network was used for the prediction of traffic speed for our case study region, Berlin, Germany, we used the GTWR approach to provide a post-hoc statistical interpretation of the prediction. We trained the GraphSAGE regression model with Uber Movement speeds as the response variable. OSM-based road attributes, population density, and street-view-derived activity indicators were used as predictors for roughly 72% of the road network without Uber Movement speed data. The model achieved a mean average error for the test data of 5.73 km/h and was capable of reproducing the general spatial pattern of traffic speed across Berlin. GTWR was then applied to estimate local coefficients for the same feature set. GTWR indicated road type and speed limit were positively associated with GraphSAGE-predicted speeds, whereas population density, street-view-derived pedestrian counts, and traffic signal counts were generally associated with lower predicted speeds. Clustering the coefficient vectors revealed four coherent GTWR behavior clusters across the city. These clusters summarize how the model redistributes feature importance across spatial contexts and could help transfer the GraphSAGE model to other cities.",
    doi: "https://doi.org/10.1016/j.jtrangeo.2026.104754",
    pdf: ""
  },
  {
    id: "sinking-city",
    date: "Jul 2026",
    title: "Sinking city: A multidimensional dataset for urban and land subsidence modelling based on satellite imagery in Jakarta, Indonesia (2016–2024)",
    authors: "Zahratu Shabrina, Fajrun Wahidil Muharram, Muhammad Asa, Dekka Dhirgantara Putra & Jin Rui",
    journal: "Data in Brief 67, 113048",
    abstract: "Jakarta, the world’s fastest-sinking city, faces complex ur- ban challenges from the complexity of its urban morphol- ogy, infrastructure, and environmental conditions. This study presents a descriptor for a multidimensional database of Jakarta, Indonesia, that can be used to analyse the city’s subsidence and understand the frequent flooding events throughout the city. The data comprise four different dataset modelled using satellite imagery: (1) land subsidence mod- elling to quantify subsidence rates in Jakarta based on Sentinel-1 SAR data processed using the open-source package LiCSBAS (2) spectral indices to highlight vegetation and built- up areas, namely the Normalised Difference Vegetation Index (NDVI) and the Normalised Difference Building Index (NDBI) using Landsat 5, Landsat 7, and Landsat 9 imagery, and urban morphology datasets, including (3) impervious surface areas using Sentinel-2 based on adaptation of the Enhanced Nor- malised Difference Impervious Surface Index (ENDISI) formu- lation and (4) the proportion of residential areas modelled using K-means clustering. Data processing was performed us- ing Google Earth Engine (GEE) and Python to generate a crit-",
    doi: "https://doi.org/10.1016/j.dib.2026.113048",
    pdf: ""
  },
  {
    id: "tactile-paving",
    date: "Jun 2026",
    title: "Street-level monitoring of urban tactile paving obstructions through visual-language models and street view imagery",
    authors: "Hanbei Chen & Jin Rui",
    journal: "Environment and Planning B: Urban Analytics and City Science, OnlineFirst",
    abstract: "Tactile paving is vital infrastructure for safe mobility among 2.2 billion visually impaired individuals worldwide, but in complex urban environments it faces both static damage and dynamic encroachment. This study develops an intelligent evaluation framework that integrates visual-language models (VLMs) with pedestrian-view street imagery to assess tactile paving usability around urban metro stations. Using GPT-4o and GoPro-collected imagery, we built a three-tier risk detection system covering the tactile paving body, a 250 mm proximity zone, and the surrounding environment. The framework includes 26 structural and 24 situational indicators with differentiated risk-scoring thresholds. Based on 110 metro stations within Beijing's Third Ring Road, we analyzed the spatial distribution of tactile paving obstructions. The 250 mm proximity zone showed the highest obstruction rate (34.46%), exceeding the tactile body (33.03%) and environment (19.79%), mainly due to spatial pressure from wall attachments, poles, and adjacent facilities. Structural obstacles reflected persistent damage and encroachment, whereas situational obstacles showed greater temporality, peak intensity, and spatial variability, especially within the proximity zone. AI evaluations closely matched expert ratings (Pearson r = 0.943), and iterative scoring reduced false positives from 54% to 11%, confirming the reliability of VLMs in complex urban contexts. Fengtai District scored poorest in both indicator categories, with Majiapu Station as a key case. We recommend introducing a 'proximity buffer zone' and improving fine-scale maintenance in high-density areas. The resulting intelligent platform is scalable and transferable for nationwide monitoring and governance of accessible infrastructure.",
    doi: "https://doi.org/10.1177/23998083261462585",
    pdf: "https://journals.sagepub.com/doi/pdf/10.1177/23998083261462585"
  },
  {
    id: "ai-urban-heat",
    date: "Jun 2026",
    title: "Artificial intelligence applications in urban extreme heat management: A systematic review of forecasting, monitoring, mitigation and decision support",
    authors: "Jin Rui, Zahratu Shabrina & Wenjing Gong",
    journal: "Environmental Impact Assessment Review 119, 108363",
    abstract: "Against the backdrop of global warming and rapid urbanization, urban extreme heat is becoming increasingly severe, with profound impacts on public health, infrastructure, and social equity. Advances in artificial intelli- gence (AI) offer new opportunities to address this challenge. This systematic review examines 102 publications “Northern bias,” on AI applications in urban extreme heat governance. The findings reveal a with most studies in the United States, China, and Europe, while gaps exist in sub-Saharan Africa and Latin America. Supervised learning dominates current approaches. AI demonstrates effectiveness across four dimensions of governance. In prediction and early warning, random forests and XGBoost are suitable for short-term forecasting, CNNs and LSTMs excel at spatiotemporal patterns, and hybrid models improve accuracy. In monitoring and assessment, AI overcomes spatiotemporal limits of remote sensing, shifting from static heat mapping to dynamic heat–population risk identification, with social media capturing residents' perceptions. In mitigation and adap- green–blue tation, AI identifies thresholds of infrastructure, supports urban form regulation, and expands climate-adaptive design through generative AI. In scenario simulation and decision support, AI-powered digital expert–public twins and interactive platforms integrate planning and operations, fostering collaboration. Yet applications remain constrained by trade-offs between accuracy and efficiency, limited data integration, and insufficient causal inference, particularly in modeling the heat risk chain as a multi-stage system. Future work should build data frameworks integrating physical and social information and advance paradigm shifts toward causal inference and multi-objective optimization. A systematic AI framework can enable closed-loop governance from risk identification to intelligent response.",
    doi: "https://doi.org/10.1016/j.eiar.2026.108363",
    pdf: ""
  },
  {
    id: "commuting-review",
    date: "Jun 2026",
    title: "From causes to consequences: Unpacking the fragmented logic of urban commuting research through LLM-assisted review",
    authors: "Jin Rui, Lei Qin & Chenfan Cai",
    journal: "Journal of Urban Mobility 9, 100230",
    abstract: "Urban commuting research has accumulated substantial knowledge about factors associated with travel patterns and their correlations with various outcomes. Yet studies examining what shapes commuting behavior and those evaluating what effects commuting produces have largely proceeded in parallel, rarely establishing how up- stream determinants translate into downstream consequences through specific causal chains. This matters because effective policy interventions require understanding transmission mechanisms, not merely statistical associations. This study develops a semi-automated literature review methodology combining systematic review procedures with large language model technologies, employing KeyBERT, GPT-4-turbo, and GPT-o1 to analyze 334 peer-reviewed articles. Three principal findings emerge. (1) Studies examining urban form, socioeconomic factors, and policy mechanisms operate largely in isolation from research evaluating health, economic, and environmental outcomes, creating a \"black-box effect\" where correlations appear but causal pathways remain unclear. (2) Most studies rely on cross-sectional designs insufficient for distinguishing residential self-selection from genuine commuting effects on outcomes such as cardiovascular risk and labor supply. (3) Indicator sys- tems across disciplines remain incompatible, hindering knowledge integration. Three directions may help address these limitations: (1) longitudinal designs exploiting natural experiments such as new transit line openings, applying difference-in-differences and synthetic control methods; (2) digital twin platforms integrating smartphone trajectories, transit records, and wearable sensor data to capture real-time interactions; (3) ran- domized trials testing intervention packages to narrow the divide between academic findings and urban governance practice.",
    doi: "https://doi.org/10.1016/j.urbmob.2026.100230",
    pdf: ""
  },
  {
    id: "one-city-two-heats",
    date: "Jun 2026",
    title: "One city, two heats: An LLM-enabled comparative analysis of heat perception, thermal environment, and health pathways in Beijing, China",
    authors: "Jiaqi Zhang, Weijing Wang, Jin Rui & Ziwen Sun",
    journal: "Sustainable Cities and Society 143, 107330",
    abstract: "Urbanization intensifies urban heat islands and health risks, yet most studies prioritize physical heat exposure. Emerging work notes that perceived heat can diverge from thermal measures, but rigorous comparison is limited. We address this gap by using a Large Language Mode (LLM) to extract Social Media Heat Perception (SMHP) from social-media posts about Beijing’s urban parks and integrating it with Physical Thermal Environment (PTE) derived from remote sensing and a population-weighted model. Coupled with subdistrict indicators of physical Squares–Structural health and well-being, we apply Partial Least Equation Modeling to identify direct and mediating pathways and Multiscale Geographically Weighted Regression to map spatial heterogeneity. We show that a LLM can robustly detect semantic SMHP, achieving a 94.5% true positive rate for extreme heat-discomfort cases. The results indicate that PTE is a stronger predictor of health outcomes and is shaped by macro-scale landscapes and regional context, whereas SMHP is associated with micro-scale, in-park features. The biophysi- “perception lag” cal cooling effect has a greater impact on PTE than SMHP, suggesting a in which expressed sentiment is less responsive than objective measurements. Built and socioeconomic factors exhibit a “heat paradox,” where greater resources coincide with higher exposure. Spatial mismatches between SMHP and PTE reveal that temperature-only metrics can miss hidden vulnerabilities. We advocate a coordinated, dual- dimension, multi-scale strategy to support evidence-based climate adaptation and health equity.",
    doi: "https://doi.org/10.1016/j.scs.2026.107330",
    pdf: ""
  },
  {
    id: "flood-sensing",
    date: "May 2026",
    title: "Social media-driven multi-scale flood sensing: A systematic review of applications from global monitoring to community resilience",
    authors: "Jin Rui & Wenjing Gong",
    journal: "Journal of Environmental Management 407, 129895",
    abstract: "With the acceleration of climate change and urbanization, floods have become increasingly frequent. Social media has emerged as a valuable data source for flood monitoring. However, current social media flood research is confined to a single spatial scale, overlooking the heterogeneity and methodological challenges of using such data across different spatial levels. This study proposed a multi-scalar analytical framework to systematically assess the current applications and future directions of social media in flood-related research. We adopted a semi- automated method supported by large language models, combining the PRISMA protocol with KeyBERT for keyword extraction, and analyzed 105 relevant publications. The framework covered four spatial levels: global, regional, urban, and community, and integrated extracted insights using GPT-4o. Results showed that: (1) the global and national scales emphasized cross-platform disaster identification and policy feedback mechanisms; (2) the regional scale highlighted variations in risk perception and interregional information coordination; (3) the urban scale focused on real-time monitoring and fine-grained spatial modeling; and (4) the community scale concentrated on individual evacuation behavior and neighborhood network analysis. Social media data demonstrated strong timeliness, high public engagement, and significant complementarity with traditional data sources in flood research. Nevertheless, key challenges remained, including limited cross-linguistic and cultural modeling capabilities and insufficient mechanisms for multi-source data integration. In addition, the under- representation of digitally disadvantaged populations and the lagging ethical and privacy governance further constrained the research. This study provides theoretical and methodological guidance for developing more resilient multi-scale urban disaster information systems.",
    doi: "https://doi.org/10.1016/j.jenvman.2026.129895",
    pdf: ""
  },
  {
    id: "paying-lip-service",
    date: "Apr 2026",
    title: "Paying lip service? An investigation into the spatial mismatch between younger and older adults’ streetscape perceptual preference and visitation behavior",
    authors: "Jin Rui & Wenjing Gong",
    journal: "Cities 171, 106750",
    abstract: "Do intergenerationally claimed spatial preferences necessarily translate into actual visitation behaviors? This study aims to uncover the phenomenon of “dissonance between perception and behavior” among younger and streetscapes—specifically, older adults in Shenzhen's the spatial mismatch and generational differences between perceived satisfaction and actual visitation patterns. Using computer vision techniques and online surveys grounded in Attention Restoration Theory and the Person-Environment Fit model, we quantitatively assessed pedestrian age groups from street view imagery, as well as generational preferences and real-world visitation patterns. We then explored the driving factors behind this mismatch from both experiential and structural perspectives. The results revealed that older adults exhibit a more pronounced dissonance between streetscape satisfaction and visitation than younger individuals. On streets with lower satisfaction scores, the two genera- tional groups show different streetscape visitation patterns. For younger adults, floor area ratio, Shannon di- versity index, and greenery demonstrate synergistic effects in facilitating the transformation of spatial perception into visitation behavior. Critically, no spatial features facilitated this transformation among older adults, revealing systematic perception behavior decoupling that challenges conventional environment behavior the- ories. Furthermore, green infrastructure and mixed-use spatial morphology enhance satisfaction for both age groups, while street connectivity positively guides intergenerational visitation behavior. These findings offer empirical insights for creating inclusive street environments that promote intergenerational integration.",
    doi: "https://doi.org/10.1016/j.cities.2025.106750",
    pdf: ""
  },
  {
    id: "digital-economy",
    date: "Apr 2026",
    title: "The digital economy enhances overall life satisfaction but reduces equity among vulnerable groups: Empirical evidence from 287 cities in China",
    authors: "Jin Rui, Chenyu Shao, Lei Qin & Wenlin Zhao",
    journal: "Applied Geography 189, 103925",
    abstract: "With the deepening of urban digitalization, existing research has focused on the growth effects of the digital economy, while paying less attention to its impact on residents' life satisfaction and equity, particularly among vulnerable groups. This study aims to address these gaps by integrating the dual perspectives of regional dis- parities and characteristics of vulnerable groups, and by examining the impact mechanisms of the digital economy on life satisfaction and its equity in different geographical and socio-economic contexts. We analyzed life satisfaction by integrating advanced language models with social media data, employing ridge regression and XGBoost combined with GeoShapley to quantify the spatial contributions of features. The results indicated that: residents’ First, the digital economy is positively associated with life satisfaction but is also correlated with widening gaps; Second, elderly, low-income, and low-education groups experience both the benefits and the growing divide in digital finance and mobile internet adoption; Third, the strengthening of digital infrastructure in the eastern coastal regions improves satisfaction but intensifies regional imbalances; Fourth, increasing internet employment opportunities in northern regions can enhance both life satisfaction and its equity; finally, “win–win” coastal port cities demonstrate a scenario, where high life satisfaction coexists with greater equity. In short, balancing “expanding digital dividends” with narrowing gaps for vulnerable groups is key to fostering inclusive digital economy development.",
    doi: "https://doi.org/10.1016/j.apgeog.2026.103925",
    pdf: ""
  },
  {
    id: "urban-shrinkage",
    date: "Apr 2026",
    title: "Rethinking urban shrinkage: An LLM-enhanced literature review of global landscapes and theoretical reconstruction of shrinking cities",
    authors: "Chenfan Cai, Zixuan Hu & Jin Rui",
    journal: "Cities 171, 106775",
    abstract: "As global urbanization enters the post-growth era, urban shrinkage has become increasingly prevalent, yet existing research often oversimplifies it as urban decline, overlooking the complexity and diversity of shrinkage processes. This study aims to systematically review global progress in shrinking cities research and reinterpret the essential characteristics and evolutionary patterns of urban shrinkage. The research employs a systematic literature review methodology, utilizing the ChatGPT-4o large language model to extract and analyze data from 183 articles, constructing an analytical framework across five dimensions: demographic-social, economic-in- dustrial, spatial-land use, ecological-environmental, and governance-policy. The findings revealed: (1) Shrinking cities possess unique developmental logic, manifesting as complex evolutionary patterns where localized pop- ulation return coexists with overall shrinkage; (2) Population flows demonstrate differentiated characteristics with out-migration of young, highly educated groups and retention of elderly, low-income populations, while some cities experience population decline coupled with sustained economic vitality; (3) Urban spatial restruc- turing manifests as simultaneous core decline and peripheral expansion instead of centripetal contraction alone, while abundant vacant land provides new opportunities for ecological restoration; (4) Future research should transcend simple binary frameworks, focusing on revealing the intrinsic mechanisms of localized revival, ecological equity, and multi-collaborative governance. This study unveils the knowledge structure and theo- retical blind spots in shrinking cities research, providing evidence for developing more effective governance strategies for shrinking cities.",
    doi: "https://doi.org/10.1016/j.cities.2026.106775",
    pdf: ""
  },
  {
    id: "road-speed-classes",
    date: "Apr 2026",
    title: "Estimating road speed classes: Integrating OpenStreetMap and Street View imagery for missing data imputation",
    authors: "Shiyu Tang, Sukanya Randhawa, Jin Rui, Christina Ludwig, Steffen Knoblauch, Charles Hatfield & Alexander Zipf",
    journal: "Computers, Environment and Urban Systems 125, 102392",
    abstract: "Traffic speed is a significant indicator for evaluating road network performance and supporting intelligent transportation systems, as it informs congestion management, routing, and operational decisions. Although traffic information is available from commercial platforms and sensor-based monitoring systems, such data are often costly, proprietary, or spatially limited, which restricts their broader usability. To overcome these limi- tations, we designed a spatial prediction model based on the Graph Sample and Aggregation (GraphSAGE) to infer traffic speeds in unobserved areas. Instead of predicting continuous speed values, we classified traffic into speed classes, which enhanced model robustness in the absence of historical observations and better reflected long-term typical traffic patterns relevant to downstream applications such as routing, emission assessment, and traffic management. Taking Berlin as a case study, the model incorporated multi-source features, including to- pological features, OpenStreetMap-based road features, and semantic Street View imagery indicators. Uber Movement average speed data were used as supervised learning labels. Results showed that the multi-source feature fusion improved the prediction performance, with the F1 score increasing from 0.6228 to 0.6917. Feature analysis revealed that OSM contextual features contributed the most under limited label coverage, while Street View imagery added complementary information to facilitate model discrimination. Despite only 28 % of road segments being covered by Uber observations, similar feature patterns between labeled and unlabeled areas enabled the model to generalize and infer missing speed data citywide. The framework makes scalable and low- cost speed class inference available for urban traffic monitoring and modeling.",
    doi: "https://doi.org/10.1016/j.compenvurbsys.2025.102392",
    pdf: ""
  },
  {
    id: "green-space-sentiment",
    date: "Jan 2026",
    title: "Scale-dependent environmental influences on urban green space sentiment: Integrating multimodal social media analysis and explainable spatial models",
    authors: "Jiaqi Zhang, Jin Rui & Chenfan Cai",
    journal: "Journal of Environmental Management 397, 128293",
    abstract: "The benefits of urban green spaces (UGSs) to public health arise not only from the green spaces themselves but also from the surrounding environment (SE). However, leveraging multimodal social media data to compre- hensively assess the associations between environmental features and sentiment toward UGSs remains chal- lenging. This study integrates SHapley Additive exPlanations and Geographically Weighted Regression, using 59,880 social media text entries and 49,501 images from 280 UGSs in Beijing to reveal nonlinear associations, synergies, and spatial heterogeneities across different scales of UGSs. The results show that: (1) SE features play a more important role than UGS attributes in determining UGS sentiment, with building coverage ratio, gross domestic product, and population density contributing the most. (2) All environmental variables exhibit nonlinear, interactive effects, and geographic heterogeneity on UGS sentiment. (3) Within SE features, accessi- bility is positively associated with sentiment in community green spaces but negative in non-community green spaces, whereas floor area ratio is positive in both, revealing scale-dependent heterogeneity across UGSs and localized effects within their effective ranges. Our methodology combines photo- and text-based sentiment analysis, offering a more accurate and efficient approach to capturing public insights and thereby enabling more precise UGS planning decisions.",
    doi: "https://doi.org/10.1016/j.jenvman.2025.128293",
    pdf: ""
  },
  {
    id: "intergenerational-renewal",
    date: "Jan 2026",
    title: "Intergenerational spatial differentiation in neighborhood renewal: How can we achieve spatial equity between the elderly and the young?",
    authors: "Jin Rui & Chenfan Cai",
    journal: "Cities 168, 106410",
    abstract: "Research on spatial intergeneration focuses on qualitative analysis and framework development, lacking quan- titative support. Understanding the relationship between spatial characteristics and intergenerational prefer- ences remains challenging. The objective of this study is to clarify the specific phenomena of intergenerational (18–35) (60+) segregation between young and older residents in neighborhood streets in Shenzhen, and to explore the potential for improving intergenerational relations through spatial optimization. The research question is: What specific intergenerational segregation phenomena exist in neighborhood street public spaces in Shenzhen, and how to optimize the street public spaces in neighborhoods to address spatial intergenerational segregations? We employ SVI) and non-facial human form recognition to identify pedestrian ages, combined with spatial structural and experiential indicators, to quantitatively analyze the differences in public space usage among different generational groups. Our findings highlight that: Spatial experiential indicators play a more critical role in bridging intergenerational segregations, with contributions from walkways and imageability being more significant. Although bottom-up indicators are more effective in conveying spatial experience, macro spatial structural indicators also play a supportive role in bridging intergenerational gaps. Besides, collaborative analysis reveals that young and elderly residents differ in their preferences for the distribution of green spaces but agree on attitudes towards greenery in neighborhoods. Additionally, intergenerational spatial segregation are primarily reflected in openness, building density, and street connectivity. The inclusive residential planning recommendations we proposed shed fresh light on spatial equity and neighborhood cohesion.",
    doi: "https://doi.org/10.1016/j.cities.2025.106410",
    pdf: ""
  },
  {
    id: "marginalized-but-equal",
    date: "Nov 2025",
    title: "Marginalized but equal? An investigation of visible green equity disparities in marginalized residents' daily commutes and its potential green solutions",
    authors: "Jin Rui",
    journal: "Habitat International 165, 103556",
    abstract: "Existing quantification of green equity focused on static spatial measures, neglecting the dynamics of residents’ behavior. This study introduces a novel method based on daily commute trajectories to identify visible green exposure and equity, distinguishing between marginalized and formal settlements. We employed Lasso regression and LightGBM models to demonstrate the contributions of 2D green landscape patterns and 3D green morphologies to visible green equity, as well as the synergistic effects between variables. The results indicated: (1) Residents in marginalized settlements experience more equitable visible greenery compared to those in formal areas. (2) 3D green morphologies, 2D landscape patterns, and spatial patterns play roles of decreasing importance in influencing visible green equity, compensating for the neglect of 3D green morphology in existing conclusions. (3) Synergistic analysis revealed that diversified, dispersed, and low green spaces contribute to promoting visible green equity across all settlements. (4) Marginalized settlements can utilize fragmented small green spaces to reduce spatial segregation, while formal settlements need to focus on the soft boundaries between green spaces and housing. The inclusive green planning strategies proposed in this study consider the residential marginalization and the dynamics of residents’ daily commute, offering new insights for differentiated neigh- borhood green planning.",
    doi: "https://doi.org/10.1016/j.habitatint.2025.103556",
    pdf: ""
  },
  {
    id: "green-disparities",
    date: "Aug 2025",
    title: "Green disparities, happiness elusive: Decoding the spatial mismatch between green equity and happiness from vulnerable perspectives",
    authors: "Jin Rui",
    journal: "Cities 163, 106063",
    abstract: "The equity of urban green spaces (UGS) plays a crucial role in social well-being. While previous studies have examined UGS disparities among various social groups, few have addressed the spatial heterogeneity of UGS inequality affecting vulnerable populations and its impact on their well-being. This study explores how street- scape greenness (SG), neighborhood greenery (NG), and public green spaces (PGS) influence the happiness of vulnerable groups, and it provides regional priorities for green policy through spatial mismatch analysis. The results reveal a strong and stable inequity in the center of Nanjing, which decreases toward the suburbs. Analysis of four vulnerable groups shows that the low-educated population is impacted by activity isolation; therefore, increasing activity facilities and reducing barriers to participation in PGS can alleviate this issue. Elderly groups favor expansive PGS or vibrant SG but are sensitive to the distance and accessibility of these green areas. Low- income groups, acting as “gardeners” to develop NG. This spontaneous behavior needs to be regulated differently for formal and informal neighborhoods. Additionally, PGS has the most potential to enhance the sense of belonging among expatriate household groups. The differentiated UGS planning recommendations we proposed offer new insights into strengthening spatial equity and social integration.",
    doi: "https://doi.org/10.1016/j.cities.2025.106063",
    pdf: ""
  },
  {
    id: "tourism-llm",
    date: "Jun 2025",
    title: "Leveraging large language models for tourism research based on 5D framework: A collaborative analysis of tourist sentiments and spatial features",
    authors: "Jin Rui, Yuhan Xu, Chenfan Cai & Xiang Li",
    journal: "Tourism Management 108, 105115",
    abstract: "Experience-oriented travel models have posed new demands for optimizing urban environments to promote tourismdevelopment.Thisstudyintroducedanaturallanguageclassificationandscoringmethodtoexplorethe relationshipbetweentourismexperiencesandspatialcharacteristics.Wefoundthatonlinetextualdatacaninfer andrepresentphysicalspatialfeatures.Ourfindingsinclude:(1)Touristsperceivedensityfrommovingobjects, with threshold effects caused by their temporal instability. (2) Ecological and cultural-technological tourism modelshavevarieddependenciesontransportationfacilities.(3)Centralareasdominatedbyartificialfunctions andlandscapesrequiremorenaturalplanningapproachestoenhancethetouristexperience.(4)Accessibility perceptionsareinfluencedbydrivingtimeandproximitytothecitycenter,ratherthanwalkingdurationorthe actualdistance.(5)Thedevelopmentofadual-networkpolicyforbusesandsubwaysiscrucialtoenhancethe travelexperience.Ourstudyprovidesevidence-basedrecommendationsforurbanrenewaltoimprovetourism experiences.",
    doi: "https://doi.org/10.1016/j.tourman.2024.105115",
    pdf: ""
  },
  {
    id: "place-pulse",
    date: "Mar 2025",
    title: "Plausible or misleading? Evaluating the adaption of the Place Pulse 2.0 dataset for predicting subjective perception in Chinese urban landscapes",
    authors: "Jin Rui & Chenfan Cai",
    journal: "Habitat International 157, 103333",
    abstract: "Visualperceptioniscrucialinhuman-centricspatialstudies.Currently,PlacePulsedatasetiswidelyusedfor subjectivescoringofurbanspace.However,itslocalapplicabilityraisesquestionsduetolimitationsindata sources and participants. This study compares the performance of Place Pulse 2.0 and a local dataset from Shenzheninpredictingperceptions,exploringitsfeasibilityforevaluatingChinesemegacities.Streetviewim- ages(SVIs)inShenzhenwerecategorizedintofivespatialtypesusingk-meansclusteringforrefineddifferen- tiation,and400SVIsfromeachcategorywerecompiledintoadatasetratedbylocalresidents.Perceptionscores basedondifferentpre-traineddatasetswerepredictedusingXGBoost.Thestudyfoundnotabledifferencesin urbanperceptualevaluationbetweenthedatasets.PlacePulsedatasettendedtogivemorepessimisticratingsfor negativeperceptionslike“boring”and“depressing”.Forpositiveperceptionssuchaslivelyandsafe,itperformed moderately,butwellinbeautifulandwealthy.Additionally,perceptualdifferencesweremostpronouncedin urban core, green corridors, and urban villages. Urban villages saw an increase in perceptions of being \"depressing\"duetothehomogeneityofbuildingfacadesandasenseofenclosure.Thenoveltyliesinquantifying perceptualdifferencesacrossspatialclustersandelaboratingtheirrelationshipwiththevisualenvironment.This research challenges the universality of the Place Pulse dataset in global cities and provides a more credible databaseandframeworkforlocalizedspatialperceptionresearchinChina.",
    doi: "https://doi.org/10.1016/j.habitatint.2025.103333",
    pdf: ""
  },
  {
    id: "lst-morphology",
    date: "Jan 2025",
    title: "Revealing the impact of urban spatial morphology on land surface temperature in plain and plateau cities using explainable machine learning",
    authors: "Zi Wang, Rui Zhou, Jin Rui & Yang Yu",
    journal: "Sustainable Cities and Society 118, 106046",
    abstract: "Rapid urbanization has intensified urban heat island (UHI) effects, highlighting the need to understand UHI drivers to improve local thermal environments. While previous research has shown Urban spatial morphology significantly influences land surface temperature (LST), the mechanisms and characteristics of this impact across different geographic conditions remain unclear. Based on this, we selected the main urban areas of Chengdu and Lhasa as examples, using machine learning models and Shapley additive explanation (SHAP) method to reveal the linear and nonlinear relationships between Urban spatial morphology and LST from a morphological perspective. The results show that: (1) The built environment has the most significant impact on LST in plain cities, while the morphology of green space more strongly regulates LST in plateau cities. (2) Building height and density of core both reflect a role in reducing LST in plateau cities. (3) The interaction mechanisms of building density and building height features show the same trend in both plain and plateau cities. However, density of branch between 0.1 and 0.2 reduces LST in plain cities, while densities below 0.1 are more effective in reducing LST in plateau cities. Our results can provide refined and differentiated references for urban planners dedicated to mitigating UHI.",
    doi: "https://doi.org/10.1016/j.scs.2024.106046",
    pdf: ""
  },
  {
    id: "neighborhood-evolution",
    date: "Nov 2024",
    title: "Towards equal neighborhood evolution? A longitudinal study of soundscape and visual evolution and housing value fluctuations in Shenzhen",
    authors: "Jin Rui, Chenfan Cai & Yufei Wu",
    journal: "Journal of Environmental Management 370, 122829",
    abstract: "Theequitableevolutionofneighborhoodenvironmentsiscloselylinkedtohousingeconomics.However,thelack of quantitative and longitudinal evaluation methods makes it challenging to assess residents’ neighborhood perceptionsandachievesocialinclusivenessgoals.Usinglong-timeseriesstreetviewimagery,wequantified Shenzhenresidents’multidimensionalneighborhoodperceptionsbeforeandaftermicro-renovations,including visualandsoundscapedimensions,andrevealedtheassociationbetweenperceptualevolutionandthehousing value. We identified inequitable results during neighborhood renewal: Neighborhoods with high soundscape scoresareaccompaniedbylowvisualperceptionscores,andviceversa.Thespatialinequalityisreflectedinthe perceptual differentiation prevalent between urban and suburbs. Visual aspects showed a stable but weak relationshipwithhousingvaluefluctuations,whilesoundscapeaspectshadastrongbutmoredynamicimpact. Theinequitablespatialevolutionisfacilitatedbychangesinresidents’perceptions:expectationsforpositive audio-visualperceptionsareincreasing,butsensitivityfornegativesoundscapeisdecreasing.Meanwhile,resi- dents are increasingly seeking diverse and rich visual neighborhood landscapes and atmospheres filled with humanvoices.Thisstudyprovidesquantitativesupportfortheequitableevolutionofneighborhoodsandthe economicsofneighborhoodlandscapes.Itoffersanovelmethodformeasuringmultidimensionalperceptions thatcanbeappliedtosettlementsworldwide.",
    doi: "https://doi.org/10.1016/j.jenvman.2024.122829",
    pdf: ""
  },
  {
    id: "beyond-built-environment",
    date: "Aug 2024",
    title: "Beyond built environment: Unveiling the interplay of streetscape perceptions and cycling behavior",
    authors: "Jin Rui & Yuhan Xu",
    journal: "Sustainable Cities and Society 109, 105525",
    abstract: "As an important means of shared micro-mobility, shared bicycles have become a crucial component of urban transportation in China. The impact of the built environment on bicycling has been widely acknowledged. However, can streetscape perceptions influence bicycle-sharing volume (BSV) and supplement the built envi- ronment? We first obtained millions of pieces of shared-cycling data from the Shenzhen Open Data Platform and carried out geographical quantification of BSV. As for streetscape, we improved the classification of subjective streetscape perception based on street view images using the k-means clustering algorithm and conducted predictions using XGBoost. Through the application of different regression models, we unveiled the nonlinear spatial interdependencies between BSV and streetscape perceptions as a complement to the built environment. Our findings indicate that greenery, vivid street-front facades, and diverse street facilities can promote BSV. Targeted strategies are proposed for different districts. For instance, urban planners can provide incentives for high-income groups in central urban areas to adopt active travel, and increase the supply of shared bicycles in suburban areas with high building density, particularly in industrial urban villages. As a supplement to the long- term planning recommendations derived from the macro-built environment analysis, an in-depth spatial perception quantitative assessment proffers a human-centric, flexible blueprint for urban street design.",
    doi: "https://doi.org/10.1016/j.scs.2024.105525",
    pdf: ""
  },
  {
    id: "destigmatizing-urban-villages",
    date: "Jun 2024",
    title: "Destigmatizing urban villages by examining their attractiveness: Quantification evidence from Shenzhen",
    authors: "Jin Rui, Yuhan Xu & Xiang Li",
    journal: "Habitat International 150, 103120",
    abstract: "While existing social and political research has qualitatively discussed the stigmatization of urban villages (UVs), there’s a lack of quantitative support. This study innovatively attempts to provide quantitative evidence, employing a spatial perspective for the destigmatization of UVs. We integrated population trajectory, GDP data, employment and residential points of interest, and developed a spatial gravity model to derive the spatial attractiveness index. Concurrently, we selected environmental, spatial structure, and housing economic in- dicators to construct a regression analysis. Our findings revealed that urban villagers exhibit a preference for shorter daily commutes, underscoring the positive role of UVs in promoting job-housing balance and providing diverse services. The high-frequency mobility of villagers accelerates the categorization of UVs and enhances intra-area circulation. We further discussed the interaction between UV renewal and its destigmatization. To counter spatial stigmatization, enhancing the spatial quality and infrastructure of UVs, as well as promoting public’s diversified land use can reduce the stereotypical impressions. Moreover, prioritizing affordable housing and equitable distribution of facilities, along with fostering synergies between urban capital and UVs, can facilitate the destigmatization process. Stigmatization in informal settlements is a widespread issue. Our quan- titative approaches, as well as targeted renovation and policy recommendations, can serve as a blueprint for addressing similar challenges in informal settlements globally.",
    doi: "https://doi.org/10.1016/j.habitatint.2024.103120",
    pdf: ""
  },
  {
    id: "bike-sharing-patterns",
    date: "Feb 2024",
    title: "Deciphering urban bike-sharing patterns: An in-depth analysis of natural environment and visual quality in New York's Citi Bike system",
    authors: "Wenjing Gong, Jin Rui & Tianyu Li",
    journal: "Journal of Transport Geography 115, 103799",
    abstract: "Bike-sharing offers a convenient and sustainable mode of transportation. Numerous studies have investigated the influence of temporal variations in the natural environment on cycling, as well as the impact of physical street characteristics like networks and infrastructures. However, few studies integrated and compared the effects of natural environment and street visual quality on cycling in the spatial dimension. As a case study, we focused on the impact of these two factors on Citi Bike system on weekdays and weekends in New York City, while ac- counting for sociodemographic and functional factors. This study employed machine learning and multiscale geographically weighted regression models at both station and neighborhood scales for a comprehensive analysis of their relationships. The results reveal that the natural environment factors, particularly visibility, are more important factors associated with bike-sharing use. Among the visual quality factors, motorized traffic has a negative impact on both weekday and weekend cycling. When considering geographical location, sky openness exhibits an unfavorable influence on weekday cycling in specific areas. By combining natural environment and visual quality factors, our study promotes optimal resource allocation and the development of bike-friendly cities.",
    doi: "https://doi.org/10.1016/j.jtrangeo.2024.103799",
    pdf: ""
  },
  {
    id: "vibrant-neighborhoods",
    date: "Feb 2024",
    title: "Decoding vibrant neighborhoods: Disparities between formal neighborhoods and urban villages in eye-level perceptions and physical environment",
    authors: "Jin Rui & Xiang Li",
    journal: "Sustainable Cities and Society 101, 105122",
    abstract: "Vibrant neighborhoods play a pivotal role in the human well-being and social cohesion. However, existing research amalgamates vitality discussions of varied functions, failing to offer nuanced insights for specific neighborhood planning. Another gap emerges from the lack of research focusing on cultivating neighborhood vibrancy based on bottom-up spatial perceptions at the eye-level. Therefore, our study delves into the spatial and temporal disparities in vitality between formal neighborhoods and urban villages. Both real and virtual in- dicators are employed to measure the physical and digital vitality of neighborhoods. We incorporate eye-level perceptions as a new explanatory variable based on the physical environment. Our findings suggest that real vitality exhibits a modest morning and evening peak on weekends, while virtual vitality continually increases and peaks at night. In addition to enhancing green and enclosed neighborhood environments, improving public transportation options that replace reliance on motorized travel could facilitate formal neighborhood vitality. Regarding urban villages, clear rights-of-way can boost commuting efficiency, spatial accessibility and road safety, while the provision of ample public facilities and public spaces fosters the creation of “15-minute living circles.” The differentiated planning recommendations could offer valuable insights to promote livable neigh- borhoods and ultimately help to improve human well-being.",
    doi: "https://doi.org/10.1016/j.scs.2023.105122",
    pdf: ""
  },
  {
    id: "settlement-sentiments",
    date: "Nov 2023",
    title: "Exploring the association between the settlement environment and residents' positive sentiments in urban villages and formal settlements in Shenzhen",
    authors: "Jin Rui",
    journal: "Sustainable Cities and Society 98, 104851",
    abstract: "The promotion of positive sentiments is essential for achieving the Sustainable Development Goals. However, there is limited evidence on the effect of the settlement environment (SE) on sentiment, especially in urban villages (UVs). By combining affective geography and social media data, this study aims to analyze the residents’ sentiments in UVs and formal settlements (FSs) in Shenzhen, while exploring the underlying mecha- nisms of SE variables that influence the positive sentiment index (PSI). The Weibo text data was analyzed using Natural Language Processing to obtain the PSI. Furthermore, we employed an XGBoost model, Shapley Additive Explanations and Partial Dependence Plots to explore relationships between SE variables and the PSI. We utilized the Interpretative Structural Modeling and Bayesian Network to analyze and verify the interdependencies and probabilistic results. The results revealed that the PSI exhibited spatial heterogeneity, with a trend of medium- high-low from central to suburban areas, and a clustering effect of high and low values. For FSs, we recommend enhancing health and well-being by increasing metro facilities, commercial density and fostering walkable neighborhoods. For UVs, prioritizing micro walk accessibility can improve settlement circulation. Additionally, “special we identified the potential of marginalized UVs to integrate with e-trade and transform into economic zones.”",
    doi: "https://doi.org/10.1016/j.scs.2023.104851",
    pdf: ""
  },
  {
    id: "streetscape-perceptions",
    date: "Oct 2023",
    title: "Measuring streetscape perceptions from driveways and sidewalks to inform pedestrian-oriented street renewal in Düsseldorf",
    authors: "Jin Rui",
    journal: "Cities 141, 104472",
    abstract: "The measurement of urban streetscape quality facilitates the identification of street regeneration. The emerging Street View image and semantic segmentation techniques have recently proven considerable assistance for investigating urban spatial quality. However, current studies using Google Street View (GSV) cannot explicitly reflect pedestrian perceptions, as GSVs are taken from a driveway perspective, which differs significantly from the pedestrian view. This study aims to elucidate the variance in quantitative measurements of streetscape perceptual qualities under different viewpoints and to identify the priority of street renewal based on a combined analysis between street perceptual quality and walking potential. We collected GSVs and self-photographed pedestrian views in the city center of Düsseldorf. 5300 images are gathered, and their semantic information at the pixel level is extracted by the segmentation technique DeepLab V3+. The results indicate that perspective differences have varying geographic effects on street perceptions, with the most significant effect on walkability. The combined analysis identifies renewal areas and provides planning techniques and operational recommendations at the levels of functional zones, streets, and street segments, respectively. The joint spatial syntax and streetscape approach offers a feasible paradigm for identifying fine-grained street renewal. In addition, it promotes pedestrian-centered urban measurement.",
    doi: "https://doi.org/10.1016/j.cities.2023.104472",
    pdf: ""
  },
  {
    id: "innovative-streets",
    date: "Mar 2023",
    title: "Examining the role of innovative streets in enhancing urban mobility and livability for sustainable urban transition: A review",
    authors: "Jin Rui & Frank Othengrafen",
    journal: "Sustainability 15(7), 5709",
    abstract: "As an essential component of urban public spaces, urban streets play a crucial role in shaping cities and promoting urban sustainability. This article focuses on innovative streets as a catalyst for sustainable urban transition. It reviews the theoretical discussions, and empirical evidence on innovative planning approaches for urban streets. For that purpose, measures related to innovative streets are divided into two broad categories: urban mobility and urban livability. The results indicate that integrating smart street facilities with the Internet of Things (IoT), adopting a combination of grid and radial street networks, and fostering a safe street environment are vital in promoting urban mobility. Conversely, a walkable, rideable, and human-oriented street environment enhances social interaction and urban livability. The street's dual function as a commuting and social space highlights the interplay between rising mobility and intensive street usage, leading to competition for street space. To mitigate these conflicts and advance sustainable urban transitions, enhancing street safety, reducing disparities in planning and user behavior, and accommodating the needs of all street users is crucial. Overall, the evidence supports the contribution of streets to sustainable urban transition.",
    doi: "https://doi.org/10.3390/su15075709",
    pdf: "https://www.mdpi.com/2071-1050/15/7/5709/pdf"
  }
];

const publicationModal = document.querySelector("#publication-modal");
const allPublicationsModal = document.querySelector("#all-publications-modal");
let returnFocus = null;

function authorHtml(authors) {
  return authors.replaceAll("Jin Rui", `<a href="${scholarUrl}" target="_blank" rel="noreferrer">Jin Rui</a>`);
}

function actionHtml(publication) {
  const doiLink = `<a href="${publication.doi}" target="_blank" rel="noreferrer">${publication.doi.replace("https://doi.org/","")} <span aria-hidden="true">↗</span></a>`;
  const pdfLink = publication.pdf ? `<a href="${publication.pdf}" target="_blank" rel="noreferrer">PDF <span aria-hidden="true">↗</span></a>` : "";
  return doiLink + pdfLink;
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
