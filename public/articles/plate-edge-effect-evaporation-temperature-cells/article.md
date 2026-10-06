# What causes a plate edge effect: evaporation, temperature or cell biology?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/plate-edge-effect-evaporation-temperature-cells/

Diagnose microplate edge effects with volume, temperature and cell-distribution checks before applying corrections or changing the assay workflow.

Evaporation, temperature and cell distribution can each produce an edge effect, and several may contribute to the same perimeter pattern. Compare evidence for volume loss, liquid-temperature gradients and cell distribution before changing the analysis. The Assay Guidance Manual describes each of these contributors and notes that the direction of the signal change depends on the assay. [1]

## Water loss changes concentration

Perimeter wells experience a different surrounding environment from interior wells. If water is lost while a nonvolatile solute remains, its concentration rises. An illustrative well falling from 8.0 µL to 6.8 µL loses 15% of its volume but concentrates that solute by about 17.6%, because 8.0/6.8 is approximately 1.176. This assumes no solute loss or reaction.

Compound and salt concentrations rise, potentially changing both the cells and the detection chemistry. It need not make the signal brighter: altered biology or inhibition can lower the response. Humidity, covers and exposure duration therefore belong in the investigation. [1]

Weigh matched plates before and after the relevant handling interval, using consistent cover conditions and accounting for condensation or spills. Mass loss can support evaporation as a contributor, but a whole-plate weight does not show which wells lost water. Combine it with a validated volume estimate or a spatially resolved check when the location matters.

## Temperature can produce a similar map

Outer and inner wells may warm or cool at different rates. Promega's CellTiter-Glo 2.0 manual warns that incomplete thermal equilibration can create center-to-edge patterns and that stack position changes the pattern. [2] This can change the detected light without requiring a difference in the original cellular treatment.

Compare representative liquid-temperature traces with the control map. If possible, alter the acquisition order on matched plates while preserving preparation conditions. A pattern that follows elapsed read time supports a process changing during acquisition, though temperature is only one candidate. A pattern fixed to physical position warrants a different comparison.

Stable reading near the validated room-temperature condition can protect a lytic glow endpoint from reheating. Chamber stability does not by itself establish humidity control. Avoid unnecessary dry airflow across exposed small wells, while preserving the circulation needed by the instrument's thermal design.

## Cell placement can establish the pattern early

Lundholt and colleagues reported that ambient pre-incubation of newly seeded plates improved cell distribution relative to immediate placement in a carbon-dioxide incubator, reducing edge effects in their system. [3] The eventual map can therefore begin during the first stages of cell handling. It does not prescribe a universal waiting period for every cell type.

Image representative wells soon after seeding and after the relevant incubation. Examine attachment, distribution and cell number, including the perimeter. A reader that samples the center of each well may respond differently to cells concentrated around the well wall, even if the total number is similar. Validate any change in settling or incubation against the biology being measured.

## Compare volume, temperature and cell-distribution evidence

Run a cell-free reference through the same plate and reader workflow, with volume-loss and temperature observations alongside it. Add matched cell plates with the original and proposed handling procedure. A clean cell-free map points the next investigation toward cell preparation or biology, but does not exclude detection chemistry that differs between the reference and cellular assay.

Also test weak wells beside bright wells. Optical crosstalk follows the bright-neighbor layout and can imitate a positional effect. Preventing leakage protects the weak measurement more reliably than subtracting an average contribution after collection.

Retain the raw map when evaluating a correction. Removing a statistical edge pattern cannot undo a higher compound concentration or a changed cell population. Fix the demonstrated physical or biological cause, then confirm that the intended assay response is preserved.

## References

1. [Microplate Selection and Recommended Practices in High-throughput Screening and Quantitative Biology](https://www.ncbi.nlm.nih.gov/books/NBK558077/). Assay Guidance Manual. Archived full chapter, sections on incubation, evaporation, positional effects and well effects.

2. Promega. [CellTiter-Glo 2.0 Assay Technical Manual TM403](https://www.promega.com/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol/), revised January 2023, PDF pp. 7 and 11. Room-temperature protocol, signal temperature dependence and stack equilibration.

3. Lundholt BK, Scudder KM, Pagliaro L. [A Simple Technique for Reducing Edge Effect in Cell-Based Assays](https://doi.org/10.1177/1087057103256465). Journal of Biomolecular Screening 2003;8(5):566–570. Publisher abstract reviewed; full paper unavailable. No universal pre-incubation duration is inferred.
