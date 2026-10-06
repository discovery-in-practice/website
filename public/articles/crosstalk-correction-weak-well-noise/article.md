# Why can crosstalk correction fix the mean but leave weak wells unreliable?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/crosstalk-correction-weak-well-noise/

See why subtracting crosstalk can correct a mean while leaving photon noise, and how to test optical suppression and correction independently.

Crosstalk correction can estimate and subtract the average light contributed by neighboring wells. It cannot identify which individual photons in a measurement came from the intended well, and their random arrival fluctuations remain in the corrected result. Because subtraction cannot remove that photon noise, a weak well may have the right corrected mean and poor precision; better optical isolation avoids collecting the unwanted light in the first place. [1,2]

## The weak well keeps the counting noise

Consider an illustrative photon-counting measurement. A weak well contributes a mean of 100 detected photons during one acquisition, while leaked light contributes 900. Assume independent Poisson arrivals, linear detection and no other noise. The detector receives a mean of 1,000 photons, with a standard deviation of about 31.6 photons.

Even if the average leakage were known perfectly, subtracting 900 leaves a mean signal of 100 with the same standard deviation of 31.6. The coefficient of variation (CV) is therefore 31.6%. Without leakage, the ideal standard deviation would be 10 photons and the CV 10%. If optical suppression reduced the leakage to nine photons, the CV would be about 10.4%.

The calculation describes an ideal counting model; it does not specify the performance of a particular reader. An uncertain correction coefficient or noisy estimate of the neighboring signal can add further error. Relative light units (RLU) must not be substituted for photon counts unless their relationship to detected counts is established. [2]

## Small leakage fractions can become large errors

In a second constructed example, leakage equal to 0.01% of a neighboring signal of 1,000,000 units contributes 100 units. If the intended weak signal is also 100 units, that tiny percentage doubles the uncorrected reading. The units here are a common linear intensity scale, not an assumed photon count.

A useful crosstalk specification therefore needs a brightness challenge relevant to the experiment. Very bright samples beside blanks or low positives can expose a limitation that a plate of uniformly bright standards misses. Reliable quantification across a wide range requires both bright-end linearity and protection of the weak wells from their neighbors.

Promega's 2019 Kinase-Glo Max comparison used bright wells beside water-only wells, with a separate blank plate for background. Its discussion identifies plate opacity and the reader's isolation of the measured well as contributors to crosstalk. Those historical measurements establish a useful challenge design; they do not rank every present-day instrument or plate format. [1]

## Test the correction on a different plate pattern

Place bright wells beside matrix-matched blanks and low positives, and include remote blanks. Use several brightness levels within the reader's linear range. Repeat the measurements and prepare replicate plates independently. Keep plate type, volume, optical geometry and acquisition settings fixed while assessing the correction.

Estimate any correction from one layout, then challenge it with another: different bright-well positions and one versus several bright neighbors. Examine corrected averages, residual standard deviations and recovery of the low positives. Fit only the calibration data; using the test layout to tune the correction would overstate how well it generalizes.

Track the time of each measurement: a decaying bright well can change its contribution between sequential reads. For an appropriate glow endpoint, keep reagent timing and sample temperature consistent. Promega's CellTiter-Glo 2.0 manual explicitly links temperature with light output and decay and calls for equilibration before measurement. A stable near-room-temperature chamber helps preserve that condition during a long plate sequence. [3]

## Suppress leakage where it starts

Use suitable opaque wells and validated reader masking, focus and read geometry to limit the light admitted from neighboring positions. Promega also warns that clear-bottom plates can increase luminescence crosstalk in CellTiter-Glo 2.0. Check the actual plate and assay combination; plate color alone is insufficient. [1,3]

Correction can still reduce bias and make an assay usable. Keep the raw data, document the model and evaluate residual uncertainty at the weak responses that determine compound ranking. Accept the correction only after checking that low positives remain distinguishable on the independent test plates.

## References

1. Wieczorek D, Hooper K, Bjerke M. Promega. [How Sensitivity and Crosstalk Affect Your Bioluminescent Assay Results](https://www.promega.com/resources/pubhub/2019/how-sensitivity-and-crosstalk-affect-your-bioluminescent-assay-results/), June 2019, tpub_212. Well isolation, plate opacity and the Kinase-Glo Max challenge design.

2. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf), April 2017, printed pp. 152–153 (PDF pp. 165–166). Counting noise with background. The exact-background subtraction examples are derived calculations.

3. Promega. [CellTiter-Glo 2.0 Assay Technical Manual TM403](https://www.promega.com/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol/), archived revision January 2023, sections 3.B and 4.B, PDF pp. 7 and 11. Temperature, plate equilibration and clear-bottom plate caveats.
