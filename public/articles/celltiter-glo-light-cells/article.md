# CellTiter-Glo: when less light doesn’t mean fewer cells

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/celltiter-glo-light-cells/

CellTiter-Glo measures ATP-dependent light, not cell number directly, so metabolism and detection conditions can change the signal independently of abundance. The article separates biological effects from reagent, temperature, mixing, and detector effects and proposes controls for each.

The plate says 50% viability. The microscope says there are rather more cells than that. Before deciding which result to believe, ask what the luminescence measurement actually counted.

CellTiter-Glo measures ATP through a light-producing reaction. ATP is a useful marker of viable cells, but the instrument does not count cells directly. The result depends on how many cells remain, how much ATP each contributes, how effectively the reagent releases it, and how faithfully the resulting glow is measured. Those factors matter when a compound changes metabolism, cell size or proliferation.

After reagent addition, an enzyme reaction produces the light, and its output depends on temperature. For the room-temperature endpoint workflow discussed here, a stable measurement chamber close to the equilibrated plate temperature is part of obtaining a reliable result.

## Three biological outcomes can produce two answers

A useful bookkeeping model, within a validated linear range, is:

L minus B equals k times N times a times eta.

L is measured light, B is background, N is cell number, a is average ATP per cell, and η is the fraction recovered for detection. The factor k includes light production and collection under the chosen conditions. This is a diagnostic model, not a complete kinetic description of the reagent.

Hold recovery and detection constant, normalize the untreated control to one, and consider these constructed examples:

| Condition | Cell number | ATP per cell | Net light |
| --- | --- | --- | --- |
| Untreated control | 1.0 | 1.0 | 1.0 |
| Half as many cells | 0.5 | 1.0 | 0.5 |
| Same cells, half the ATP per cell | 1.0 | 0.5 | 0.5 |
| Half as many cells, twice the ATP per cell | 0.5 | 2.0 | 1.0 |

The middle two rows produce the same light for different reasons. The last row produces no change in light despite a substantial change in cell number. A reliable ATP measurement can therefore disagree with a reliable cell count.

This is more than an algebraic possibility. Chan and colleagues compared cell counting with ATP and MTS assays across drug treatments and cell lines. Some cell-cycle-arresting treatments increased ATP per cell, with changes in cell size and mitochondrial content, masking part of their antiproliferative effect in the metabolic assays. The discrepancy depended on the treatment and cell line. [[1](https://discoveryinpractice.com/articles/celltiter-glo-light-cells/#ref-1)]

If imaging shows fewer, larger cells, test whether ATP per cell changed.

## A low endpoint does not establish cell killing

Suppose an experiment starts with 1,000 cells per well. By the endpoint, untreated wells contain 4,000 cells, while treated wells still contain 1,000. If ATP per cell and detection are unchanged, the treated wells give 25% of the control light.

That is 75% less endpoint signal. In this constructed example, the treatment stopped net growth; the result does not require any net loss of cells from the starting population. A baseline measurement at treatment initiation helps distinguish growth inhibition from loss relative to the starting point. Even unchanged cell number can conceal simultaneous proliferation and death, so a death-specific measurement may still be needed.

Select the companion assay according to the question. Direct counting tests abundance. A membrane-integrity assay tests a different aspect of cell health. Neither is interchangeable with ATP content, and replacing ATP with another metabolic proxy may preserve the same ambiguity. The Assay Guidance Manual describes how these marker-based measurements differ. [[2](https://discoveryinpractice.com/articles/celltiter-glo-light-cells/#ref-2)]

## Why glow luminescence belongs at a stable room temperature

For CellTiter-Glo 2.0, Promega specifies room-temperature equilibration of reagent and plates, followed by mixing and a room-temperature signal-stabilization period. Its additional guidance explicitly connects temperature to light intensity and signal decay. It also warns that tall plate stacks equilibrate more slowly and can develop gradients that depend on stack position. [[3](https://discoveryinpractice.com/articles/celltiter-glo-light-cells/#ref-3)]

The important word is constant. “Room temperature” written in a protocol should correspond to an actual, controlled operating condition. A plate equilibrated near 22°C does not remain there simply because the instrument heater is off.

Imagine that the laboratory is at 22°C but the measurement chamber gradually warms during a long batch. A plate entering that chamber starts another thermal transition. Depending on the assay and timing, the signal can change between early and late measurements even though the amount of ATP was fixed when the cells were lysed. No change in cell viability is required.

A chamber held steadily at a warmer temperature presents a different problem: it may be stable, but it is still mismatched to the incoming plate. Both the stability and the temperature difference matter. For a room-temperature glow protocol, a reader that can maintain the chamber close to the chosen room-temperature target under sustained use helps preserve the conditions established during equilibration.

Useful engineering includes controlling heat transfer from electronics and motors, avoiding unnecessary warm airflow over the plate, and providing temperature control that works at the intended setpoint. Active heat removal can be valuable when internal heat loads would otherwise push the chamber above that target. These capabilities deserve testing over a batch, not just checking a temperature display before the first plate.

The enzyme's thermostability does not mean its reaction rate is temperature-independent. Likewise, a long-lived glow does not guarantee identical light output at every temperature or elapsed time. Do not borrow an Alpha assay's percentage-per-degree coefficient to correct a luciferase assay; establish the behavior of the actual reagent and matrix.

Keep the biological and detection stages separate. Culture and compound exposure may require 37°C and controlled carbon dioxide. The instruction to equilibrate near room temperature applies to this endpoint detection workflow. It is not a recommendation to move every live-cell assay away from its required physiological conditions.

## Make the room-temperature condition testable

Define the interval from incubator removal through reagent addition, stabilization and reading. Specify how plates are arranged during equilibration. A thirty-minute wait in a stack and a thirty-minute wait in a single layer are different thermal histories.

Then test the reader under the workload it will experience. Use replicate, equivalent assay plates with a controlled time from reagent addition, placing controls across the plate. Compare the beginning and end of a representative batch. Where practical, measure sample temperature in a sacrificial plate with a suitable calibrated method; the chamber sensor measures its own location.

Balance preparation and read order so signal age does not become a substitute explanation for temperature. ATP controls without cells help test the detection stage, while cell-containing controls retain lysis and matrix effects. An optical reference can check the reader, but cannot establish that the luciferase reaction stayed constant.

If the drift appears only after the reader has been busy, investigate chamber behavior and plate residence. If it follows stack position before entry, investigate equilibration. Use those observations to identify the cause before applying a numerical correction to the plate map.

## Check detection before assigning a biological mechanism

A compound can alter the detection chemistry as well as the cells. Compare a fixed ATP input with and without compound, using the actual reagent and an appropriate matrix. Promega describes this kind of ATP-plus-compound check. [[3](https://discoveryinpractice.com/articles/celltiter-glo-light-cells/#ref-3)] A loss of light identifies detection interference under those conditions; additional checks are needed to distinguish enzyme inhibition from optical attenuation or other effects.

Keep concentrations and dilution factors representative of the final assay mixture. Include suitable blanks and freshly prepared ATP standards, and verify that ATP remains stable in the chosen matrix over the preparation interval.

Mixing deserves its own check. Incomplete reagent distribution or ATP extraction can depress the result without changing cell number. Compare plausible mixing conditions on equivalent wells, watching for bubbles and position-dependent recovery. A protocol that works for a suspension cell line need not transfer unchanged to an adherent culture or a compact three-dimensional model.

Finally, qualify the optical range. Bright controls must remain linear, and low-signal wells must remain distinguishable from blanks and light leaking from neighboring wells. A detector that compresses bright readings can make replicates look reassuringly uniform while distorting normalized responses. Reducing integration time alone does not necessarily cure a count-rate limitation.

## What should accompany the viability curve

For assay development and hit follow-up, retain enough information to separate the alternatives:

- Raw light and background, alongside the normalized curve and a baseline measurement when growth versus killing matters.
- A cell-count or other appropriate orthogonal measurement for representative treatments, including compounds that alter morphology.
- Detection-only ATP controls and the results of mixing and optical-linearity checks.
- Plate and reagent equilibration conditions, reagent-to-read times, and chamber behavior through the intended batch.

Stable room-temperature handling makes the ATP endpoint more dependable, while imaging and orthogonal controls help explain what changed. When the microscope and the luminescence disagree, check which part of the relationship changed: cells, ATP per cell, recovery, or detection.

## References

1. Chan GKY et al. [A Simple High-Content Cell Cycle Assay Reveals Frequent Discrepancies between Cell Number and ATP and MTS Proliferation Assays](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0063583). PLOS ONE 8(5), e63583 (2013). doi:10.1371/journal.pone.0063583.

2. Riss TL et al. [Cell Viability Assays](https://www.ncbi.nlm.nih.gov/books/NBK144065/). Assay Guidance Manual. Updated July 1, 2016. Marker selection and the ATP assay principle.

3. Promega. [CellTiter-Glo 2.0 Assay, TM403](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol.pdf?la=en). Revised January 2023. Sections 3 and 4B: endpoint procedure, temperature, chemical interference, cell physiology and mixing.
