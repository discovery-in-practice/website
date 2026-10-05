# Why does the mP value of my free FP tracer change when I change its concentration?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/free-fp-tracer-concentration-mp/

Diagnose concentration-dependent fluorescence polarization using raw channels, matched blanks, linearity checks and controls for tracer behavior.

For a chemically unchanged free tracer, fluorescence polarization (FP) should be approximately concentration-independent within the reader's useful range. A systematic change in millipolarization units (mP) can arise from additive background, unequal channel response, detector nonlinearity or a change in the tracer itself. A proportional change in brightness may cancel in the ratio, whereas a fixed fluorescent background may shift it. [1]

## Calculate from the two corrected intensities

Using one common convention, calculate polarization from blank-corrected parallel and perpendicular intensities:

mP = 1000 × (I subscript ∥ − G × I subscript ⊥) divided by (I subscript ∥ + G × I subscript ⊥)

G is the dimensionless correction for relative channel response. The intensities must use compatible units and the same convention as the instrument software. Polarization is dimensionless; multiplying by 1,000 reports mP. Subtract the appropriate blank from each intensity before forming the ratio. Subtracting a blank's mP from a sample's mP does not do the same calculation. [1,2]

Here is a constructed example with G = 1. A tracer contributes 1,100 RFU parallel and 900 RFU perpendicular, where RFU means relative fluorescence units. Its polarization is 100 mP. Add an uncorrected background of 100 RFU to each channel and the apparent value becomes about 90.9 mP.

Dilute only the tracer tenfold while leaving that background unchanged. The measured channels become 210 and 190 RFU, giving 50 mP. The tracer still contributes 100 mP, but background now supplies half the summed intensity. An unequal background could move the result in another direction.

Channel subtraction recovers the original mean in this ideal example, but the background's photon noise remains. Near the blank, the denominator becomes small and noisy, so individual mP values can become erratic. A flat mean with rapidly increasing scatter is a different diagnostic pattern from a smooth concentration-dependent shift.

## Look at the bright end as well as the dim end

Plot both corrected channel intensities against tracer concentration. Within an appropriate dilute range they should scale proportionally if the tracer and optics remain unchanged. If one channel bends first at higher signal, its nonlinear response can move mP. Recalibrating G at every concentration can disguise that problem.

Efficient light collection helps maintain precision at low tracer concentration; broad linear response helps preserve accuracy at the high end. Simultaneous, calibrated polarization channels reduce errors from fluctuations between acquisitions. Check the resulting working range with the actual tracer, including the weakest intended samples.

## Confirm that the dilution changes only concentration

Hold buffer, pH, solvent fraction, temperature and volume constant. A serial dilution that also changes glycerol or another viscosity-modifying ingredient can change rotational motion. For a room-temperature biochemical FP assay, stable measurement near the validated temperature helps keep the tracer baseline comparable across the plate. Follow the reagent protocol rather than imposing that condition on every application. [1,3]

Hall and colleagues identify a rising FP value with increasing probe concentration as a possible sign of aggregation. [1] That pattern alone does not establish aggregation. Check fresh dilutions and time dependence, and consider whether the tracer can self-associate or interact with buffer components or surfaces.

Use a matrix-matched blank and a free-tracer control in the actual assay buffer. Thermo Fisher's PolarScreen protocol distinguishes these controls from receptor-containing assay wells. [3] Select a working concentration where the corrected mP is stable, both channels are proportional and replicate precision is adequate. Keep the raw dilution data with the protocol so later changes can be compared with the qualified interval.

## References

1. Hall MD and colleagues. [Fluorescence polarization assays in high-throughput screening and drug discovery: a review](https://pmc.ncbi.nlm.nih.gov/articles/PMC5563979/). Methods and Applications in Fluorescence 2016;4:022001. Supplied full PDF, sections 2, 4 and 5: polarization calculation, assay development, concentration dependence and interference.

2. Tecan. [Infinite 200 PRO Instructions for Use, revision 1.4](https://www.tecan.com/hubfs/30125944_IFU_Infinite200-PRO_V1_4_English_German-Warnings.pdf), June 2021, pp. 79–84. Channel blank subtraction, G-factor calibration, filter-specific records and polarization calculation.

3. Thermo Fisher Scientific. [PolarScreen Nuclear Receptor Competitor Assays Universal Protocol](https://documents.thermofisher.com/TFS-Assets/LSG/manuals/polarscreen_nr_competitor_assay_universal_man.pdf), MAN0007703 revision A.0, 12 March 2014, pp. 2–3 and 8. Green/red filter settings, FP reference kit, assay controls and room-temperature incubation; check the target-specific product sheet.
