# Why do my bright controls have excellent CVs while my weak samples are unreliable?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/bright-control-cv-weak-samples/

Why bright controls can have excellent CV while weak samples remain unreliable, with photon statistics, background and working-range checks.

Bright controls can have a small coefficient of variation (CV) because their mean signal is large relative to the measurement noise. Weak samples have fewer useful photons and may sit close to an uncertain background. Measure precision near the weak response rather than relying on the bright-control CV. High-signal compression can also make bright controls appear unusually uniform. [1,2]

## Relative precision depends on the size of the response

For a positive mean, CV is the standard deviation (SD) divided by that mean, usually reported as a percentage:

CV = 100 × (SD) divided by (mean)

An SD of 20 relative fluorescence units (RFU) corresponds to 0.2% CV at a mean of 10,000 RFU, but 20% CV at a mean of 100 RFU. This constructed comparison has identical absolute scatter. The same absolute scatter is a much larger fraction of the weak signal. Near zero, CV becomes unstable and can stop being a useful summary. [1]

Photon counting introduces another dependence on brightness. In an ideal linear measurement with independent photon arrivals and negligible background, relative counting uncertainty falls as the inverse square root of the accumulated count. Expected counts of 10,000 and 100 photons correspond to approximately 1% and 10% counting CV, respectively. Displayed RFU or relative light units (RLU) are not automatically physical photon counts. [2]

## Background can make raw CV look reassuring

A weak assay response may be sitting on a substantial background. Including that background in the mean makes the raw CV smaller without increasing the amount of analyte-specific information. Subtracting a common blank value reduces the mean but leaves the within-plate SD of the sample replicates unchanged.

Consider raw readings with a mean of 1,000 RFU and an SD of 20 RFU. Their CV is 2%. Subtract a common blank of 900 RFU and the net mean becomes 100 RFU, with the same 20 RFU SD: 20% CV. The corrected percentage describes scatter relative to the useful signal.

Uncertainty in the blank estimate needs separate accounting. So do systematic differences between the blank matrix and the sample. A precise measurement can still be biased.

## Check whether the high end is proportional

A detector or processing chain approaching its upper range may compress differences between bright samples. Low observed scatter then accompanies a distorted response. Check a concentration series or validated optical attenuation rather than accepting a good bright-control CV as evidence of linearity. Hamamatsu describes pulse-overlap losses at high counting rates. [2]

At the low end, additional acquisition may help. BMG LABTECH's flash-count example shows that weak fluorescence standards benefit more from increased averaging than bright standards in that configuration. Whether this helps your assay depends on the contribution from reading noise versus preparation variability. [3]

## Test the response differences the screen must resolve

Include independently prepared low positives and relevant intermediate responses, with enough replicates to inspect their distributions. Test recovery of known additions where compatible with the assay. Place some weak samples beside bright wells to expose crosstalk that isolated controls miss.

Inspect raw and net means, SDs and the blank distribution alongside CV. Near the blank, use an appropriate uncertainty or detection analysis rather than ranking samples by CV alone. Define the smallest response difference the screen must resolve and challenge the method at that level. Record the range over which those differences remain distinguishable and the response stays proportional.

## References

1. National Institute of Standards and Technology (NIST). [Coefficient of Variation](https://itl.nist.gov/div898/software/dataplot/refman2/auxillar/coefvari.htm). Definition, ratio-scale requirement and behavior near zero; checked 29 September 2026.

2. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf), April 2017, printed pp. 149–153 (PDF pp. 162–166). Counting linearity, background and signal-to-noise relationships.

3. BMG LABTECH. [How does the number of flashes influence measurement results?](https://www.bmglabtech.com/en/howto-notes/how-does-the-number-of-flashes-influence-measurement-results/). Flash averaging, concentration-dependent variability and acquisition time; checked 29 September 2026. Example-specific flash counts are not generalized.

## Provenance

Author: Andrew Stewart. Named human technical review: pending. Research and editorial preparation: 29 September 2026. Sources checked: 29 September 2026. Proposed checks and illustrative calculations have not been validated in a laboratory as part of this draft.
