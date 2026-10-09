# 1536-well assays: the waiting time is part of the assay

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/1536-well-assay-evaporation-temperature/

Optimize 1536-well assays for real screening runs: control evaporation, queue time, mixing, room-temperature glow detection and plate reader stability.

The first 1536-well plate gives a clean result while using less reagent. Then the assay joins a queue of twenty-four plates, the robot pauses, and the last few plates develop a pattern that was absent from the development run.

Miniaturization changes more than the volume in the dispensing program. A smaller well contains less water, fewer cells at the same seeding density, and fewer reporter molecules at the same concentration. It also has to survive the time between the steps you optimized.

Test the assay after the handling, waiting and measurement it will actually experience. For endpoint glow luminescence, that includes keeping an equilibrated room-temperature plate near its intended temperature inside the reader.

## A missing fraction of a microliter changes the experiment

Suppose a nonvolatile compound is initially at 10 µM in 2 µL. If 0.5 µL of water evaporates before the next addition, the amount of compound is unchanged but its concentration rises to 13.3 µM. The general mass-balance relationship is:

(C subscript after) divided by (C subscript before) = (V subscript before) divided by (V subscript before − V subscript lost)

The loss is 25% of the starting volume; the concentration increase is 33%. Those percentages are different because the remaining solution is the denominator. Salts and other retained solutes concentrate too. This calculation assumes only solvent is lost, with no precipitation, adsorption or chemical reaction.

Now add 2 µL of reagent. The final compound concentration is 20 pmol divided by 3.5 µL, or 5.71 µM. Without evaporation it would have been 5 µM. Reagent addition reduces the relative concentration error to about 14%, but it does not undo the earlier exposure at elevated concentration or restore the intended sample-to-reagent volume ratio.

That is why evaporation can affect both the biological incubation and the final detection chemistry. A reassuring endpoint volume does not reconstruct the history of the well.

The Assay Guidance Manual discusses evaporation, well geometry, lids and handling as linked assay variables. [1] A manufacturer study using 1536-well cell cultures also compared environmental and conventional lids, measuring plate weight as well as luminescence. It reported lower evaporative losses with the environmental lid. That is evidence for the tested workflow, not a universal evaporation rate for every plate. [2]

## A queue is an incubation step

In a hypothetical batch of twenty-four plates read at four-minute start-to-start intervals, the last plate begins 92 minutes after the first. If all plates received detection reagent together, that is a substantial difference in signal age. If reagent addition is staggered to preserve assay age, time spent waiting before addition becomes the next variable to control.

Record both. For each plate, capture critical additions, lid removal, entry to the reader and measurement time. When changes occur on the timescale of a plate read, well-level timing matters too.

A long signal half-life allows scheduling flexibility, but does not imply zero drift. For illustration, an exponentially decaying glow with a three-hour half-life would retain about 70% of its starting intensity after a 92-minute delay:

(S(t)) divided by (S(0)) = 2 raised to (− (t) divided by (h))

Here h is the half-life. This is a constructed timing example, not a measured decay curve for a particular reagent. Real glow kinetics depend on formulation, sample and conditions. Uniform proportional decay may cancel during normalization to controls read at the same age, but it still changes photon numbers and can interact with background. Unequal histories need not cancel.

Arrange the workflow to keep critical intervals consistent. Faster detection can shorten the queue, provided the reduced collection time still supports the required precision. Where a dual-emission assay permits simultaneous collection, obtaining both channels together can help throughput without imposing a delay between them. For single-channel glow assays, prioritize efficient collection, linearity and a stable sample environment.

## The measurement chamber is part of the temperature protocol

For many lysed-cell glow endpoints, room-temperature equilibration belongs immediately before detection. Promega's CellTiter-Glo 2.0 protocol specifies that approach. Its HiBiT Lytic manual likewise recommends room-temperature equilibration and states that sample and reagent temperatures should remain constant during luminescence measurement. [3,4]

The reader needs to preserve the temperature of an already equilibrated plate. If the chosen operating temperature is near 22°C, placing that plate in a chamber warmed substantially above the room changes the reaction conditions during the measurement.

A stable chamber close to the intended room-temperature target is valuable for glow luminescence. Check that it remains there after repeated loading, long runs and other instrument activity. Switching off heating does not demonstrate this. Internal electronics, motors and the surrounding laboratory can still supply heat, and an above-ambient-only heater cannot remove it.

When comparing readers, ask for evidence that the sample environment stays near the chosen setpoint under realistic use. Effective heat removal, limiting heat transfer to the plate and avoiding unnecessary airflow across exposed wells are useful capabilities. A good temperature specification at a sensor is a starting point; verify the behavior of representative liquid-filled wells using a suitable sacrificial plate.

Humidity and temperature answer different questions. Keeping the chamber near room temperature does not by itself prevent evaporation, and reducing airflow does not establish humidity control. Qualify the actual combination of chamber, lid or seal, plate and dwell time. Check condensation and optical compatibility before deciding to read through a cover.

This room-temperature guidance concerns the endpoint detection stage. A live-cell kinetic assay may require a different temperature and atmosphere throughout. Preserve the biological conditions required by that assay rather than treating room temperature as a universal instrument setting.

## Small wells still need mixing

A correct dispense volume does not prove that the contents became homogeneous. Dispense position, delivery speed, well shape and fluid properties can affect where reagent lands and how it mixes. The Assay Guidance Manual discusses mixing and centrifugation as practical parts of microplate operation. [1]

Check the liquid-handling step with a suitable tracer in the actual plate and volume, then verify the assay response. A dye test can reveal distribution problems but cannot establish complete cell lysis or uniform enzyme exposure. Centrifugation may bring droplets down from walls; it is not proof that the contents mixed.

Do not assume a shaking speed transfers between formats. The same nominal speed can produce different liquid motion as well geometry, fill volume and orbit change. Check recovery and variability while watching for bubbles, splashing and carryover. Time spent rescuing poor mixing can also extend the uncovered interval, so evaluate the complete sequence.

## More sensitive detection buys choices

At 0.1 seconds of collection per well, 1,536 wells require 153.6 seconds before motion and other overhead. At 0.5 seconds per well, collection alone takes 768 seconds, or 12.8 minutes. A setting that improves one plate's repeatability may greatly lengthen the batch.

Efficient collection gives you options: shorten that interval, retain precision with less reporter, or measure weaker samples. Choose among those benefits using the assay's uncertainty, rather than maximizing the displayed signal.

Some variability cannot be fixed by collecting more photons. Under an ideal independent Poisson-loading model, 100 cells per well have a cell-count CV of 10%; 25 cells have 20%. Real seeding can depart substantially from that model because of clumps, settling and dispensing behavior. Those numbers illustrate a separate source of variation, not guaranteed performance. Reading longer does not add the missing cells.

Optimize collection height and any aperture against the actual plate and volume, checking weak wells beside bright ones. Check that higher counts do not come from admitting more neighboring light. Preserve enough linear range for the brightest expected controls, including outliers. Neither a tight CV nor a good Z′ verifies that the bright end remains proportional.

## Qualify the interrupted run

Use a small qualification batch that represents the intended workload, including a plausible interruption. Make each proposed stress test answer a specific question:

- Queue time: compare equivalent plates after normal and extended waits, keeping or deliberately varying reagent-to-read age as specified. Include distributed low, middle and high controls.

- Thermal history: compare operation early and late in sustained reader use. Record chamber conditions and assess representative sample temperatures rather than assuming they match.

- Volume loss: weigh matched plates at defined stages and pair that total-loss estimate with a spatial assay check. Plate weight alone cannot show which wells lost liquid; lid condensation can complicate interpretation.

- Optical challenge: place bright samples beside low controls, distribute them across the plate and repeat at the intended volume and detection settings.

Agree in advance what counts as acceptable recovery, precision and control separation. Keep the individual control trends as well as the plate summary statistic. If the assay passes only when plates are read immediately in a cool, quiet instrument, that restriction belongs in the operating protocol. If production cannot honor it, improve the handling or measurement conditions before scaling the screen.

## References

1. [Microplate Selection and Recommended Practices in High-throughput Screening and Quantitative Biology](https://www.ncbi.nlm.nih.gov/sites/books/NBK558077/?report=reader). Assay Guidance Manual. Sections on covers, mixing, centrifugation, evaporation and positional effects.

2. Beckman Coulter Life Sciences. [Utilization of the MicroClime Environmental Lid to Reduce Edge Effects in a Cell-based Proliferation Assay](https://www.beckman.fr/en/resources/reading-material/application-notes/utilization-of-the-microclime-environmental-lid-to-reduce-edge-effects). Manufacturer application study, including 1536-well culture and gravimetric evaporation measurements.

3. Promega. [CellTiter-Glo 2.0 Assay, TM403](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol.pdf?la=en). Revised January 2023. Room-temperature endpoint procedure and temperature considerations.

4. Promega. [Nano-Glo HiBiT Lytic Detection System, TM516](https://at.promega.com/-/media/files/resources/protocols/technical-manuals/500/nano-glo-hibit-lytic-detection-system-technical-manual.pdf?rev=c60ea014d049499484b20ae1da288eec&sc_lang=en). Revised June 2023. Section 3B, note c: constant sample and reagent temperatures during measurement.
