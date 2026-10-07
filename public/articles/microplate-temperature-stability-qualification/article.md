# The plate is recording its temperature history

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/microplate-temperature-stability-qualification/

Qualify liquid temperature during plate reads, busy runs and interruptions. Separate thermal drift from evaporation and optical crosstalk before correcting data.

On a microplate heat map, row and column identify both the well's position and, in a sequential read, approximately when it was measured. If the liquid changes temperature during acquisition, a time trend can arrive on the screen looking like a spatial effect.

Changing when the wells are measured provides a way to investigate the pattern. Change the acquisition order, where the instrument permits it, and ask whether the pattern follows the physical wells or the elapsed time. Couple that comparison to measurements of representative liquid temperatures. The room thermostat and the reader's chamber display cannot supply the same evidence.

## Put a scale on the possible error

The historical AlphaScreen practical guide describes a typical signal sensitivity of 8% per degree Celsius and warns that warming or cooling during reading can create gradients across a plate. It also describes 15–30-minute equilibration for a particular filled 384-well plate initially a few degrees from its surroundings. Those are useful starting observations, with conditions attached. Neither number is a specification for every Alpha assay or every plate. [1]

For a constructed example, assume a local, linear signal response of +8% per degree relative to the starting signal. Suppose liquid temperature rises by 2°C during the relevant interval. The corresponding signal ratio is:

(S(T)) divided by (S( T subscript 0 )) = 1 + α(T − T subscript 0 ) = 1.16

Here α is the assumed coefficient, 0.08 per degree. The example uses a linear approximation over that small interval; it is not a correction equation established for an actual screen. A different assay, temperature range or reporter could have a different response, including a different direction.

Now consider a well whose biological response should be half that of an uninhibited control. With negligible background, the warmer well could produce 0.50 × 1.16 = 0.58 of the earlier control signal. Normalizing to that control would report 42% inhibition rather than 50%. If both sample and control experienced the same multiplicative factor, it would cancel. The error comes from their different conditions.

A plate-wide mean can conceal that difference. Controls concentrated in one corner may sample a narrow portion of the temperature history while most compounds experience another. Distributing identical controls across the plate lets you examine that difference before applying a spatial correction.

## Measure the liquid the assay experiences

Start thermal qualification with the intended plate type, fill volume, lid and loading sequence. Use a sacrificial plate containing representative liquid, and a suitable calibrated temperature measurement method that can operate safely in that configuration. Match the thermal properties of the assay matrix as closely as practical. A probe in an empty well measures a different system.

Place measurements near the center and the perimeter, and include the locations expected to experience different contact or exposure conditions. Record liquid temperature before entry, during the representative residence interval and after exit. Record the chamber reading alongside it so the relationship between the two becomes evidence rather than an assumption.

The measurement method has its own limitations. A probe can change local heat exchange or displace an appreciable fraction of a small well's contents. A surface infrared reading describes the visible surface and depends on the measurement geometry and material. Use an instrument-compatible method, document what it actually measures, and avoid treating one conveniently accessible point as a complete thermal map.

Establish whether the assay liquid stays within the range that the workflow requires. A room-temperature endpoint that begins equilibrated can drift again after entering a warmer chamber. Qualification must cover that second interval too.

## Room temperature needs to survive the read

Promega's CellTiter-Glo 2.0 manual states that temperature affects both luminescence intensity and signal decay. It calls for consistent plate temperature and specifically warns that tall stacks equilibrate more slowly than a single layer. Inadequate equilibration can produce center-to-edge differences, with the pattern depending on position in the stack. [2]

The ADP-Glo manual likewise calls for plate and reagent equilibration to room temperature and connects incomplete equilibration to center-to-edge variability. It recommends developing the kinase reaction at room temperature where appropriate to avoid gradients. Its biological reaction and subsequent luminescent detection remain separate stages to qualify. [3]

For these room-temperature glow endpoints, a stable measurement environment close to the validated room-temperature condition is valuable. An illustrative target near 22°C is reasonable only when the assay protocol and laboratory conditions support it. Live-cell incubation may require a different environment; the endpoint recommendation does not replace that biology.

Heating switched off is an incomplete description of the reader's thermal behavior. Electronics, motors and other operating components dissipate heat. Their effect on the sample depends on the instrument's construction and operating load. Ask whether heat is removed effectively and kept from reaching the plate, then test the liquid under sustained use. A heater that can only raise temperature cannot by itself hold an above-ambient chamber at a cooler room-temperature target.

## Challenge a busy instrument

A cold-start test is easy to pass if the troublesome condition develops after many plates. Compare at least three representative states: the first plate after the specified preparation, a plate during sustained throughput, and a plate after a plausible interruption followed by restart. The number of plates and pause duration should come from the intended operation.

Use fresh, matched assay plates or wells at comparable assay ages where possible, alongside the sacrificial temperature plate. A changing glow or developing binding reaction can otherwise masquerade as a thermal effect. For Alpha time courses, separate wells also avoid mixing elapsed time with prior-read exposure, as recommended in the practical guide. [1]

Keep the chamber setting constant during the first comparison. Record the actual loading intervals and liquid temperatures instead of assuming the setting establishes equivalence. If a change emerges only under sustained load, repeat the relevant contrast with the thermal condition controlled more tightly. Improvement would support a temperature contribution, although it would still leave any other changing conditions to examine.

Keep the liquid-temperature traces beside the control maps and assay results. Their relationship tells you more than the chamber specification alone. Set acceptance limits according to the assay's measured temperature sensitivity and the decisions it must support, rather than borrowing a universal fraction of a degree.

## Use read order to test the explanation

Prepare matched uniformity plates with the same material in every test well. If the reader supports an altered acquisition sequence, compare normal and reversed orders while preserving preparation and incubation conditions. Plot the results both by physical location and by acquisition time. A pattern that follows time strengthens the case for a process occurring during the read; it does not identify temperature uniquely.

Dispensing can also assign different ages to rows or columns. The Assay Guidance Manual discusses both dispensing-order and detector-order patterns, along with thermal and evaporation effects. Keep those histories in the experiment. A concentration gradient placed along the acquisition direction is particularly difficult to interpret because dose and time then move together. [4]

## Check the neighbors before correcting the map

A bright neighboring well can also change an apparent spatial pattern. Include a separate adjacency test with bright wells beside dim controls, and compare those dim controls with counterparts farther away. Suitable opaque well walls and optical isolation or focusing can prevent unwanted light from reaching the detector. Promega's plate guidance explicitly connects plate construction with luminescence crosstalk. [2]

Prevention protects precision as well as the mean. In an idealized photon-counting example, suppose a dim well contributes 100 detected photons and leakage contributes another 1,000. Subtracting the exactly known average leakage recovers a mean of 100, but the shot-noise standard deviation remains about 33 photons, compared with 10 without leakage. The calculation assumes independent Poisson arrivals and perfect linear detection; estimating the correction introduces further uncertainty. Normalization cannot identify which individual photons came from the neighbor. Reduce optical leakage first, then validate any residual correction against dim-well precision.

## Check water loss separately

Thermal control and evaporation control overlap without being interchangeable. Dry air and exposure can change well volume and solute concentration. Airflow can aid heat exchange, while unnecessary flow across uncovered liquid can increase evaporation. Avoiding all circulation may slow equilibration; directing vigorous flow over small exposed wells can create a different problem. The plate-handling guidance discusses humidity, covers, stack spacing and temperature gradients together. [4]

For a long qualification run, consider weighing matched plates before and after the relevant handling interval, with consistent lids and precautions against condensation or spillage. Total mass loss cannot locate an edge-well problem, but it can establish whether appreciable loss occurred. Combine that observation with the spatial assay data and a test of the intended cover arrangement.

Document how plates reach their reading temperature, how long they may wait, and which sustained-load conditions were accepted. Keep the temperature traces with the control maps. When the next unexpected gradient appears, those records provide a direct comparison with the conditions under which the assay was shown to work.

## References

1. PerkinElmer. [AlphaScreen practical guide](https://www.urmc.rochester.edu/MediaLibraries/URMCMedia/hts/documents/AlphaScreenPracticalGuide.pdf). PDF pp. 30 and 32, printed pp. 24 and 26: separate time-point wells, temperature sensitivity and equilibration. Historical examples remain assay-specific.

2. Promega. [CellTiter-Glo 2.0 Assay technical manual TM403](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol.pdf?la=en). Revised January 2023, PDF p. 11, section 4.B. Temperature and plate-construction guidance.

3. Promega. [ADP-Glo Kinase Assay technical manual TM313](https://www.promega.com/-/media/files/resources/protocols/technical-manuals/0/adp-glo-kinase-assay-protocol.pdf). Revised July 2023, PDF pp. 17–18. Temperature and plate-construction guidance.

4. [Microplate Selection and Recommended Practices in High-throughput Screening and Quantitative Biology](https://www.ncbi.nlm.nih.gov/books/NBK558077/). Assay Guidance Manual, supplied 2021 compilation, PDF pp. 1337 and 1341–1342: incubation, evaporation and spatial effects. Qualification experiments here are proposed. The photon-counting example is a constructed statistical calculation, not measured reader performance.
