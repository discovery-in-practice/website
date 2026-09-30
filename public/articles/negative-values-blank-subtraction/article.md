# Why do I get negative fluorescence or luminescence values after blank subtraction?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/negative-values-blank-subtraction/

Understand negative fluorescence or luminescence after blank subtraction, diagnose blank mismatch and avoid bias from replacing negatives with zero.

A negative corrected value means the measured sample was below the blank value that was subtracted. Near the detection limit, ordinary variation can produce small positive and negative estimates around zero. Consistently negative results can instead indicate an inappropriate blank, drift or a processing error. Inspect the original readings and the blank distribution before changing or deleting the corrected values. [1]

## Subtraction estimates a difference

Suppose a sample reads 996 relative fluorescence units (RFU) and the estimated blank is 1,000 RFU. The corrected result is −4 RFU. The detector has counted photons. The corrected result is the estimated difference from the selected background.

The sample reading and blank estimate both have uncertainty. For independent measurements, their variances add when you subtract them. A small negative difference can therefore be compatible with a zero net response. Correlated or paired measurements require their covariance to be considered. These are applications of standard uncertainty propagation. [1]

Assess their size, frequency and position or time pattern against blank uncertainty. Establish a numerical detection limit through a separate validation study.

## Look for a mismatch that subtraction cannot fix

Check whether the blank contains the same medium, solvent, reagent concentrations and plate material as the sample, apart from the component deliberately omitted. A reagent blank and an untreated biological control answer different questions. Subtracting a control with genuine reporter activity can produce negative differences that describe inhibition relative to that control.

Check whether gain, filters or output scaling changed between blank and sample measurements. Look for edge patterns and time trends. A blank average from the beginning of a long sequence may be unsuitable if the background drifts during the run.

Temperature can contribute to that drift in glow assays. Promega's CellTiter-Glo 2.0 manual calls for room-temperature equilibration and identifies effects of temperature on light intensity and decay. Maintain the validated temperature through measurement; a stable near-room-temperature chamber is useful for this lytic endpoint. Live-cell assays may require different conditions. [2]

## What happens when negatives are replaced with zero?

Consider five constructed net readings: −4, −2, 0, 2 and 4 RFU. Their mean is 0 RFU. Replacing the negative values with zero gives a mean of 1.2 RFU. Deleting the negative values gives a mean of 2 RFU. Both operations manufacture a positive average from data centered on zero.

Preserve the signed values in the raw analysis record. If a reporting convention requires “below quantification limit,” apply a validated rule while retaining the underlying numbers and documenting how summaries were calculated. Do not silently clamp results to zero or add an arbitrary offset simply to make a logarithmic plot work.

## Report uncertainty near zero

The coefficient of variation (CV) divides standard deviation by the mean. NIST warns that it becomes sensitive to small changes when the mean is near zero. A negative or enormous CV for corrected near-blank data is usually unhelpful for assessing assay performance. [3]

Report the net estimate with its uncertainty or standard deviation as appropriate, the blank distribution and relevant detection or quantification status. If the entire sample population falls below the blank by more than expected variation, investigate the blank definition and measurement sequence before attributing that shift to biology.

## References

1. National Institute of Standards and Technology (NIST). [Combining uncertainty components](https://physics.nist.gov/cuu/Uncertainty/combination.html). Propagation of uncertainty, covariance and independent input quantities; checked 29 September 2026. Numerical examples here are derived illustrations.

2. Promega. [CellTiter-Glo 2.0 Assay Technical Manual TM403](https://www.promega.com/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol/), archived revision January 2023, PDF pp. 7 and 11. Room-temperature equilibration, stabilization and temperature effects on intensity and decay.

3. National Institute of Standards and Technology (NIST). [Coefficient of Variation](https://itl.nist.gov/div898/software/dataplot/refman2/auxillar/coefvari.htm). Definition, ratio-scale requirement and behavior near zero; checked 29 September 2026.

## Provenance

Author: Andrew Stewart. Named human technical review: pending. Research and editorial preparation: 29 September 2026. Sources checked: 29 September 2026. Proposed checks and illustrative calculations have not been validated in a laboratory as part of this draft.
