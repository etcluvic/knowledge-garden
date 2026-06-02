---
title: "Toxicity of the Commons: Curating Open-Source Pre-Training Data"
domain: AI and Scholarship
tension:
  - Openness vs Enclosure
  - Technical Capability vs Organizational Capacity
tags:
  - annotation
  - topic-curation
  - tension-openness-v-enclosure
  - topic-open-data
  - tension-technical-capability-v-organizational-capacity
type: annotation
created: 2026-05-14
---

# Toxicity of the Commons: Curating Open-Source Pre-Training Data

**Arnett, Catherine, Eliot Jones, Ivan P. Yamshchikov; Pierre-Carl Langlais** (2024)

*arXiv:2410*

🔗 [https://doi.org/10.48550/arXiv.2410.22587](https://doi.org/10.48550/arXiv.2410.22587)

---

## Annotation

Open-source pre-training data is increasingly treated as a shared resource for building “open” language models, yet it can embed and reproduce harmful speech patterns at scale. Arnett, Jones, Yamshchikov, and Langlais argue that reducing toxic model behavior requires intervening upstream in data, and they focus specifically on the distinctive constraints of public-domain corpora (including historical documents and OCR-derived text) where standard web-text toxicity filters can be impractical or ill-suited. They propose a fully open-source curation pipeline designed for these conditions and present three concrete contributions: (1) ToxicCommons, a custom-labeled dataset organized across five toxicity dimensions (racial/origin-based, gender/sex-based, religious, ability-based discrimination, and violence); (2) Celadon, a classifier trained on that dataset to detect toxic content more efficiently at scale in open data; and (3) a “balanced” filtration strategy that explicitly trades off safety filtering against retaining sufficient training material. The paper’s core claim is that open-data model development needs domain-attuned, auditable curation methods paired with task-specific classifiers, so that openness in data does not automatically translate into avoidable harms in downstream model outputs.

---


## Connections

**Domain**: [[AI and Scholarship]] → Research Methods and Practices

**Tensions**: [[Openness vs Enclosure]] · [[Technical Capability vs Organizational Capacity]]

**Key Concepts**: [[Open Source]] · [[Curation]] · [[Large Language Models]] · [[Open Data]] · [[Bias]] · [[Interoperability]] · [[Reproducibility]] · [[Training Data]] · [[Commons]]

**Methodologies**: `framework development`, `design research`

**Stakeholders**: communities

---

*Return to: [[Taking Bearings - Home]] | [[AI and Scholarship]] | [[Concepts Glossary]]*

---

<details><summary>📎 Related Notes (3)</summary>

- [[Bail 6206 - Can-Generative-Artiﬁcial-Intelligence-Im]] — *shared concepts: training data, reproducibility, open source, bias | shared tension: Technical Capability vs Organizational Capacity | same subdomain*
- [[Montague-Hellen 2024 - Empowering-Knowledge-through-AI-Open-Sc]] — *shared concepts: curation, commons, training data | shared tension: Openness vs Enclosure | same subdomain*
- [[Schroeder 2024 - Large-Language-Models-in-Qualitative-Res]] — *shared concepts: bias, large language models | shared tension: Technical Capability vs Organizational Capacity | same subdomain*

</details>
