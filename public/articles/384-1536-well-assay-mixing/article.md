# How do I know whether a 384- or 1536-well assay is actually mixed?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/384-1536-well-assay-mixing/

Learn why shaking speed and stable fluorescence do not prove mixing, and how to qualify a mixing method for a dense microplate assay.

Validate mixing in the actual plate, volume and liquid formulation: a shaking setting, visible plate motion or repeatable whole-well signal does not establish uniform concentrations. The Assay Guidance Manual notes that the narrow wells of 1,536-well plates may not form a robust vortex under ordinary orbital shaking. [1]

## A flat fluorescence trace can miss stratification

Suppose you add a small fluorescent aliquot to a larger volume of clear buffer. If detection collects light from most of the well and fluorescence is linear, the total signal can remain similar whether the dye is evenly distributed or concentrated in one region. The number of dye molecules has barely changed. Stable bulk fluorescence is therefore a weak mixing test on its own.

Use a readout sensitive to spatial concentration differences, such as a validated fluorescence image or height-resolved measurement. Include a thoroughly premixed reference and a deliberately poorly mixed preparation to show that the test distinguishes them. Avoid detector saturation, self-quenching and focus changes that could masquerade as mixing.

An assay-specific reaction can provide another useful challenge, but reaction kinetics, temperature and dispensing precision then become part of the interpretation. Extra shaking that changes the endpoint may indicate incomplete mixing; it can also change biology, bubbles or elapsed reaction time. Include equal-age controls.

## Allow for molecular size and diffusion distance

The Assay Guidance Manual describes dimethyl sulfoxide (DMSO) droplets sinking into aqueous well contents and slowly diffusing without agitation. [1] The concentration near the bottom can temporarily differ from the concentration calculated from the final volume. That matters when a small compound addition contacts cells or starts a rapid reaction.

Diffusive mixing time scales approximately with the square of the distance and inversely with the diffusion coefficient. Halving a relevant distance reduces the characteristic time approximately fourfold for the same freely diffusing species. A small-ion example cannot establish the waiting time for a protein, viscous reagent or particle suspension. Density differences and adsorption add further complications.

## Record more than shaking speed

Record plate manufacturer and product, working volume, addition volume, addition position, liquid composition, shaker orbit, speed and duration. Revolutions per minute (rpm) alone do not describe the motion. A different orbital diameter can produce different circulation at the same rpm.

Compare candidate settings with the premixed reference across representative plate positions. Include the most difficult intended formulation and small addition volume. Confirm acceptable spatial uniformity or assay recovery, replicate precision and acceptable bubble levels and no spillage or cross-well contamination. Define those acceptance limits from the assay's required precision before choosing the preferred condition.

## Use kit timings as specific instructions

For Nano-Glo Dual-Luciferase in 384-well plates, Promega describes dedicated mixing conditions and minimum incubation periods; its manual warns that small volumes are harder to mix. [2] Those instructions belong to that chemistry and plate workflow. They do not validate a different 1,536-well assay or a different shaker.

Optical orbital averaging samples several positions within a well; it does not establish fluid mixing. Excessive agitation can disturb adherent cells, and detergent-containing mixtures can foam. [1,2] For room-temperature glow endpoints, keep mixing and waiting steps in a thermally consistent workflow. Keep the evidence for adequate mixing with the protocol, including the reference preparation and the conditions under which the check could detect a gradient.

## References

1. [Microplate Selection and Recommended Practices in High-throughput Screening and Quantitative Biology](https://www.ncbi.nlm.nih.gov/books/NBK558077/). Assay Guidance Manual, Mixing and Dispensing sections. Supplied NIH compilation, PDF pp. 1573–1575 / printed pp. 1551–1553.

2. Promega. [Nano-Glo Dual-Luciferase Reporter Assay, TM426](https://www.promega.com/-/media/files/resources/protocols/technical-manuals/101/nanoglo-dual-luciferase-reporter-assay-protocol.pdf), revised February 2024, sections 3.A–3.H and 4.C. Temperature, mixing, injection, reagent carryover and coincidence-reporter design.
