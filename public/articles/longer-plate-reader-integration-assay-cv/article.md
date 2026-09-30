# Why does reading longer stop improving my assay CV?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/longer-plate-reader-integration-assay-cv/

Find out when longer integration improves assay CV, when well variability dominates and how to choose a useful reading time.

Longer reading helps while light-collection noise still makes a substantial contribution to the result. Once differences in dispensing, cell number, temperature or other persistent well properties dominate, extra integration produces little improvement in the coefficient of variation (CV). Drift during a longer run can even make precision worse. Before lengthening the read again, compare repeated measurements of the same preparation with independently prepared replicate wells.

## The square-root return on reading time

For independent detected photons with negligible background and other noise, the relative counting uncertainty is approximately one divided by the square root of the accumulated photon count. A steady source therefore needs four times the collection time to halve this contribution to CV. Hamamatsu's photon-counting treatment includes the additional penalties from background and dark counts. [1]

A displayed value of 10,000 relative light units (RLU) is not necessarily 10,000 detected photons. Instrument scaling, gain and normalization matter. Counts per second are a rate, whereas the shot-noise calculation uses the count accumulated during the measurement. Do not use a displayed intensity as a photon count without establishing what the software reports.

Consider a constructed example. At 1 s per well, measurement noise contributes 6% CV and persistent differences between wells contribute 8% CV. Assume the contributions are independent, the mean is stable and measurement CV falls with the square root of integration time. Their variances add:

CV subscript total raised to (2) = CV subscript measurement raised to (2) + CV subscript between wells raised to (2)

CV is the standard deviation divided by a positive mean, multiplied by 100 when reported as a percentage. All CV terms use the same scale; the table reports percentages. Here the persistent 8% contribution is assumed, not measured.

| Integration per well | Measurement CV | Persistent well CV | Total CV |
| --- | --- | --- | --- |
| 1 s | 6.0% | 8.0% | 10.0% |
| 4 s | 3.0% | 8.0% | 8.5% |
| 16 s | 1.5% | 8.0% | 8.1% |

Moving from 4 s to 16 s barely changes the overall CV. Across 1,536 wells measured sequentially, that change adds 18,432 s, or 5.12 h, of integration alone. Assay age and temperature become harder to keep comparable over that interval.

## Find the variation that your next second can remove

Use representative weak, middle and bright samples plus blanks. At several integration settings, measure repeatability within the same wells and variation between independently prepared wells. Repeat readings preserve the original dispensing and cell-loading outcome, so they reveal a different part of the variance.

If repeated-read CV improves while between-well CV levels off, examine preparation, position effects and persistent optical differences. If both improve, light collection may still be limiting. A plateau alone does not identify the cause: unstable blanks, correlated noise and drift can also defeat the simple model.

Balance acquisition order and assay age. Always running the longest setting last confounds reading time with reaction progress. Use fresh matched preparations if repeated excitation bleaches the fluorophore or otherwise perturbs the sample. In pulsed fluorescence, increasing the number of flashes, lengthening each collection window and extending the overall well time are different changes. Record which parameter actually changed.

## Keep the sample stable while you improve the measurement

Promega's CellTiter-Glo 2.0 manual specifies room-temperature equilibration and a stabilization period before measurement. It also identifies temperature as affecting luminescence intensity and decay. A longer read can expose a plate to more thermal drift unless the measurement chamber maintains the validated sample temperature. For this lytic endpoint, stable near-room-temperature detection supports a fair timing comparison; live-cell assays may require another temperature. [2]

Efficient collection and lower optical background can improve a weak measurement without extending the run. Persistent preparation differences need their own intervention. Verify the bright end remains linear, then select the shortest acquisition that gives reliable decisions at the weak and intermediate signals your assay must distinguish.

## References

1. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf), April 2017, printed pp. 152–153 (PDF pp. 165–166). Counting statistics and integration time. The variance example is a calculation under stated assumptions.

2. Promega. [CellTiter-Glo 2.0 Assay Technical Manual TM403](https://www.promega.com/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol/), archived revision January 2023, sections 3.B and 4.B, PDF pp. 7 and 11. Protocol timing and temperature guidance.

## Provenance

Author: Andrew Stewart. Named human technical review: pending. Research and editorial preparation: 29 September 2026. Sources checked: 29 September 2026. Proposed checks and illustrative calculations have not been validated in a laboratory as part of this draft.
