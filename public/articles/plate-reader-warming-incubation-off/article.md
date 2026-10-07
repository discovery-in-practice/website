# Why does my plate reader warm the plate when incubation is switched off?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/plate-reader-warming-incubation-off/

Understand plate-reader warming, room-temperature chamber control and practical temperature checks for CellTiter-Glo and Alpha assays.

Switching off incubation disables intentional heating; it does not actively hold the sample at laboratory temperature. Operating electronics and other internal components can release heat, and the chamber can retain heat from an earlier run. Room conditions and a plate arriving from an incubator also affect the result. The displayed chamber temperature may differ from the liquid temperature. For a temperature-sensitive assay, measure the plate during the actual reading workload, including runs with incubation switched off. [1]

## What happened before this plate matters

A plate reader used repeatedly can behave differently from the same instrument after a long idle period. A preceding 37°C experiment, a warm automation enclosure or changes in laboratory air temperature can alter the next plate's starting conditions. Which mechanism dominates requires measurement; assay light alone cannot identify the source of heat.

Some readers specify a controllable range beginning several degrees above ambient temperature. That is a heating specification, not a promise to maintain samples at room temperature. A chamber designed to regulate near room temperature, with cooling when required, can prevent an equilibrated plate from warming again during detection. BMG LABTECH's published engineering description gives an example of this capability; it is manufacturer documentation, not an independent comparison of all readers. [1]

## Why this matters for glow luminescence and Alpha

Promega's CellTiter-Glo 2.0 assay measures adenosine triphosphate (ATP) through a luciferase reaction. Its technical manual states that temperature affects the reaction rate, light intensity and signal decay. The standard protocol calls for approximately 30 minutes of plate equilibration to room temperature before reagent addition, followed by mixing and a 10-minute room-temperature period to stabilize the light signal. Those are kit-specific instructions, not universal equilibration times. [2]

The same manual warns that tall stacks of plates equilibrate more slowly than plates in a single layer and can develop center-to-edge temperature gradients. A plate can arrive with a temperature gradient already present, so both handling and the measurement environment need attention. [2]

Revvity advises reading AlphaScreen and AlphaLISA plates near 22°C and keeping incubation and read temperatures consistent between days. Alpha uses a different detection chemistry from luciferase, so neither the magnitude nor the direction of a temperature effect should be transferred from one assay to the other. [3]

## A practical way to locate the drift

First measure the thermal behavior without relying on assay light as a thermometer. Use a calibrated temperature method suitable for representative liquid volumes and plate positions. Any probe arrangement must be compatible with the reader and must not interfere with its motion. Repeatedly opening the chamber can disturb the temperature being measured.

Compare an idle reader with one running the intended plate sequence. Record laboratory temperature, chamber readings, representative liquid temperatures, plate-entry times and the preceding instrument method. Match plate type, volume, lids or seals and dwell time. Include center and edge positions where the measurement method permits.

Then compare assay controls at matched dispense-to-read ages under the two thermal conditions. If liquid temperature changes while elapsed reaction time is held comparable, temperature becomes a credible contributor. If signal drifts while temperature remains stable, investigate reaction kinetics, evaporation, substrate depletion or other assay-specific causes. More than one process can occur together.

## Choose control for the assay stage

For a room-temperature lytic endpoint, the useful capability is maintaining the equilibrated sample near its validated detection temperature throughout the measurement sequence. Low disruptive airflow and well-controlled chamber conditions can help, but low airflow alone is not humidity control or proof against evaporation.

For live-cell kinetic measurements, preserve the biological temperature specified by the assay. Moving such a measurement to room temperature solely to stabilize light can change the biology. Record the actual sample conditions and validate a temperature tolerance against acceptable assay bias and precision; do not choose a universal tolerance from another kit.

## References

1. BMG LABTECH. [Advanced Assay Stability](https://www.bmglabtech.com/en/aas/). Manufacturer engineering description. Discusses internal heat and heating/cooling of the measurement chamber. Numerical competitive performance is not inferred here.

2. Promega. [CellTiter-Glo 2.0 Assay Technical Manual TM403](https://www.promega.com/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol/). Archived revision January 2023; sections 3.B and 4.B, PDF pp. 7 and 11. Room-temperature assay handling and temperature-gradient guidance.

3. Revvity. [AlphaLISA and AlphaScreen No-wash Assays](https://www.revvity.com/ask/alphalisa-and-alphascreen-no-wash-assays). Tips and FAQs. Guidance to read plates near 22°C and maintain consistent temperatures.
