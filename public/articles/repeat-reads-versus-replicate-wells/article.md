# Why are repeated readings of one well precise while replicate wells disagree?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/repeat-reads-versus-replicate-wells/

Separate reader repeatability from dispensing, cell loading, position effects and preparation variability using a staged comparison.

Repeated readings revisit the same preparation. Replicate wells include differences in dispensing, cell number, mixing, incubation and position as well as reading noise. A reader can measure one imperfectly prepared well very consistently. Separate these sources of variation before changing the optics or collecting more readings from every well.

## Repetition preserves the original preparation

If one well received fewer cells, repeated reads preserve that cell count. If cells formed a ring or a dispensing step left a concentration error, another measurement does not create a new preparation. The result may be repeatable while differing from its neighbors.

Tecan's Infinite 200 PRO quality-control section illustrates the distinction. Its uniformity procedure measures a plate of distributed fluorescence standards; its precision procedure repeatedly measures the same well. These tests assess different properties. Their instrument-specific procedures should not be treated as a complete validation of a biological assay. [1]

Plate geometry and handling introduce further opportunities for differences. The Assay Guidance Manual discusses dispensing, mixing, evaporation and position effects as practical assay-development variables. Those mechanisms need experimental separation; a low repeated-read coefficient of variation (CV) does not identify which one caused the between-well spread. [2]

## More reads can leave most of the variation intact

Consider an illustrative model at a stable common mean. Independent reading noise contributes 2% CV, and persistent differences between wells contribute 5% CV. Their independent variances add, producing a total CV of approximately 5.39% for one read per well.

Averaging four independent reads of each well reduces the reading contribution to 1% CV. The persistent 5% contribution remains, so total CV becomes about 5.10%. These calculations assume stable samples, comparable means and independent reading errors. They do not prescribe a variance model for every assay.

Use those extra observations to estimate reading repeatability, retaining the well identity. Four observations of one preparation still represent one prepared well.

## Locate variation by repeating the preparation steps

Begin with repeat reads of low, middle and high signals in the same wells. Inspect changes with read order rather than calculating only a pooled CV. Drift, bleaching or a changing reaction can violate the assumption of independent reading noise.

Next, distribute a stable premixed control into multiple wells using the intended dispenser. Variation now includes dispensing and position. Compare it with an independently prepared plate and, for a cell assay, independent cell preparations. Keep a record of which reads came from which well, plate and preparation so the analysis preserves those groups.

Randomize or balance sample positions when compatible with the experiment. Map raw responses to distinguish a consistent edge pattern from scattered dispensing errors. Use cell imaging or a suitable spatial scan if uneven cell distribution is plausible. Changing a scan path tests sampling of the well; it does not necessarily correct the underlying seeding problem.

## Control assay age and temperature

A plate sequence exposes wells to different assay ages. Promega's CellTiter-Glo 2.0 manual identifies temperature effects on intensity and decay and specifies room-temperature equilibration before measurement. For this lytic endpoint, stable near-room-temperature reading helps limit a systematic thermal contribution across wells. Preserve the validated biological temperature for live-cell assays. [3]

Compare groups at balanced times and retain the preparation hierarchy in the analysis. If repeat reads are tight but independent wells remain variable, direct the next experiment toward preparation and spatial effects. If repeat reads themselves drift or scatter, investigate acquisition, signal level and sample stability before averaging more observations.

## References

1. Tecan. [Infinite 200 PRO Instructions for Use](https://www.tecan.com/hubfs/30125944_IFU_Infinite200-PRO_V1_4_English_German-Warnings.pdf), revision 1.4, June 2021, pp. 143–144. Separate tests of plate uniformity and repeated-read precision; historical instrument-specific procedures.

2. [Microplate Selection and Recommended Practices in High-throughput Screening and Quantitative Biology](https://www.ncbi.nlm.nih.gov/books/NBK558077/). Assay Guidance Manual. Previously archived full chapter; plate geometry, handling, mixing and position effects.

3. Promega. [CellTiter-Glo 2.0 Assay Technical Manual TM403](https://www.promega.com/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol/), archived revision January 2023, PDF pp. 7 and 11. Room-temperature equilibration, stabilization and temperature effects on intensity and decay.

## Provenance

Author: Andrew Stewart. Named human technical review: pending. Research and editorial preparation: 29 September 2026. Sources checked: 29 September 2026. Proposed checks and illustrative calculations have not been validated in a laboratory as part of this draft.
