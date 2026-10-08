# AlphaPlex: your first measurement can change the second

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/alphaplex-dual-emission-crosstalk/

Learn why AlphaPlex read order matters, how simultaneous dual emission helps, and how to distinguish spectral leakage, well crosstalk and antibody effects.

Measuring two analytes in one well saves sample, but the order of the two emission readings can matter.

In an AlphaPlex assay, that is a chemistry question as well as an instrument question. The excitation used to generate the first signal can slightly change the material you are about to measure again.

Simultaneous dual-emission detection has an unusually concrete benefit here: collect both colors from the same excitation event, and neither measurement has to wait for a second exposure. The same assay also illustrates why several different problems get called crosstalk.

## Reading an Alpha assay does something to it

Alpha detection begins with excitation of donor beads, which generate singlet oxygen. Nearby acceptor beads convert that chemistry into light. AlphaPlex uses distinguishable acceptor emissions to measure more than one analyte in a well. [1]

This is an active chemical measurement. Revvity's development guide reports that sequential reading can slightly reduce the second signal through oxidation of protein recognition elements, with losses of a few percent. It recommends reading the generally weaker terbium channel before europium when using the sequential arrangement described. [1]

That does not mean every second read fails. It means that read history belongs among the experimental conditions. A second pass is not necessarily a fresh observation of an untouched sample.

Consider two ways of measuring a duplex. In the first, excite the well, collect one emission, then repeat the excitation-and-collection sequence for the other emission. In the second, collect both emissions during the same interval following one excitation. The latter gives both measurements the same excitation history and avoids the extra cycle required solely to obtain the other color.

That is the case for simultaneous detection even when the sample is otherwise stable. It also shortens the measurement sequence, reducing the time over which the plate can change temperature or continue developing signal. Whole-plate throughput still includes movement and settling; halving the number of collection cycles does not guarantee halving every run time.

The guide also reports comparable sensitivity for the sequential and simultaneous configurations it discusses, despite different optical paths and signal intensities. [1] Fewer repeat excitations and faster paired collection are useful benefits without promising an automatic improvement in detection limit.

## A small signal shift can become a larger concentration error

Suppose a sample loses 3% of its signal before the second channel is measured. That sounds modest. Its effect on reported concentration depends on where the sample lies on the calibration curve.

For an illustrative, background-free saturating response, let:

S = (S subscript max C) divided by (K + C)

Here S is signal, C is concentration and K is the concentration giving half-maximal signal. The subscript max denotes the upper signal limit. This simple curve is a teaching model, not a prescribed fit for every AlphaPlex assay.

Set the maximum signal to 100. A signal of 90 corresponds to C = 9K. Reduce that signal by 3%, to 87.3, and interpret it against the original calibration:

C = (K S) divided by (S subscript max − S)

The inferred concentration becomes about 6.87K, roughly 24% lower. At a signal of 50, the same proportional signal loss changes the inferred concentration from K to about 0.942K, only 5.8% lower.

The difference comes from the curve's slope. Near the upper plateau, a large concentration change produces a small signal change, so a small measurement shift becomes a large concentration error when the curve is inverted.

This example assumes the reference calibration has not undergone the same signal change. If standards and samples experience identical proportional losses and are calibrated together, the scaling can be absorbed by the fitted curve. The risk is mismatched read histories, unequal losses or extrapolation from poorly resolved parts of the curve. Do not apply the 24% figure as a general AlphaPlex correction.

Validate sample dilutions and measurement history together. A second read that seems harmless in the middle of the curve may deserve closer attention near its upper end.

## Three problems called crosstalk

First, photons can enter the wrong emission channel. This is spectral leakage. A very bright europium signal, for example, may contribute a small fraction to the terbium measurement. The relevant quantity is that fraction multiplied by the bright signal, compared with the weak signal you care about.

Second, light can arrive from another well. This is interwell leakage. It depends on the plate and collection geometry, so a correction derived from two colors in the same well does not diagnose it.

Third, antibodies can recognize an unintended target. Now the assay is making an unwanted biochemical signal. Better wavelength separation will faithfully measure that unwanted signal.

Revvity distinguishes these mechanisms in its AlphaPlex guidance. [1] Keeping them separate gives you a much better troubleshooting experiment than increasing the integration time and hoping for the best.

For spectral leakage, use controls that emit from only one acceptor-bead type and measure both channels. For interwell leakage, arrange bright sources beside blanks and weak samples, with remote controls elsewhere. For antibody specificity, challenge each assay with the other analyte and relevant related molecules. Retain the complete multiplex reagent mixture when testing whether combining assays changes their behavior.

## Subtraction removes an average, not the photons that arrived

Imagine a linear detector reporting 1,000,000 detected photons in the europium channel. The true terbium contribution is 1,000 photons, but an illustrative 2% spectral leakage adds another 20,000 to its measurement. The reader reports 21,000 in that channel. These are hypothetical photon counts, not arbitrary luminescence units from a commercial reader.

Assuming negligible reverse leakage and an exactly known coefficient c, correction gives:

T subscript estimated = M subscript T − c M subscript E

The two M terms are measured channel counts; here c = 0.02. Subtraction recovers the expected 1,000. It does not recover the precision of a measurement that never collected the extra light.

For independent Poisson channel counts in this simplified model, the corrected variance is 21,000 + 0.02² × 1,000,000 = 21,400. The standard deviation is about 146 photons, or 14.6% of the desired signal. Without leakage, 1,000 photons would have an ideal shot-noise standard deviation of about 32, or 3.2%. The photon-statistics principle is the same one that limits other optical assays. [2]

There is a second vulnerability. If the actual leakage is 2% but you subtract 1.8%, you leave 2,000 unwanted counts behind. The corrected result becomes 3,000 instead of 1,000. A coefficient error of just 0.2 percentage points has tripled the answer.

That arithmetic explains why clean spectral selection matters even when software offers compensation. It also explains why correction factors should be checked across the expected brightness range. Compression in the bright channel would make the number used for subtraction too small. Neither simultaneous collection nor a compensation spreadsheet restores information lost through nonlinear detection.

If leakage is appreciable in both directions, characterize both contributions and use a validated two-channel correction. The one-way example above deliberately omits that complication to expose the precision cost.

## Two analytes do not automatically make a normalization ratio

NanoBRET uses donor and acceptor emission as parts of an energy-transfer measurement. An AlphaPlex duplex may instead measure two independently changing analytes. Dividing one by the other imposes an additional biological interpretation.

For a phosphorylated-protein/total-protein assay, for example, a ratio may be useful after validating both measurements. It should not replace their individual calibration curves or hide a total-protein result below its quantifiable range. For two cytokines, a ratio is a different endpoint from either cytokine concentration.

Simultaneous detection pairs the measurements in time without establishing that one analyte is a stable reference for the other. Export both channels, both corrected results and any derived ratio so that a change in the denominator remains visible.

## Thermal stability still earns its place

Revvity's Alpha guidance states that temperature affects both assay equilibration and signal generation, and recommends bringing the final incubation temperature close to the reader temperature. Reported sensitivity can reach 10% per degree Celsius in some AlphaLISA or AlphaScreen assays; that is an assay-dependent observation, not a universal coefficient for every AlphaPlex channel. [3]

Do not assume two emissions share an identical temperature response. Check each calibrated result across the intended handling conditions. For small volumes, minimize uncontrolled exposure to warm airflow and drying conditions. Stable sample temperature, sensible separation from heat-producing components and validated evaporation control help keep both assays reproducible.

Use separately prepared, equivalent wells or plates to compare temperatures and acquisition modes. Repeatedly reading the same Alpha wells introduces exactly the read-history effect you are trying to understand. Balance preparation and read order so assay age does not become a substitute explanation.

## Qualify the duplex under its hardest conditions

Build the qualification plate around unequal signals: high analyte A with low B, then high B with low A, alongside blanks and midrange controls. A pair of equally bright standards is an easy examination for the optics.

Compare each analyte's calibration in the complete mixture with and without the other analyte at a challenging concentration. Check recovery, precision and usable concentration range after correction. Repeat the critical combinations beside bright wells and after realistic queue times.

When selecting detection settings, ask for simultaneous collection of both emissions from one excitation cycle, efficient collection of the weaker color, verified linearity at the bright end and low interwell leakage in the actual plate. A duplex is ready when both analytes meet their required recovery and precision across the concentrations you intend to report.

## References

1. Revvity. [AlphaPlex assay development user guide](https://resources.revvity.com/pdfs/gde-user-guide-alphaplex-assay-development-guide.pdf). See pp. 12–14 for acquisition and optics, and pp. 14–20 for crosstalk and multiplex validation. The comparison discussed is specific to the configurations in the guide.

2. Hamamatsu Photonics. [Photon-counting signal-to-noise simulator and technical explanation](https://www.hamamatsu.com/eu/en/resources/interactive-tools/photon-counting-snr-simulator.html). Photon counting statistics and the effect of background. Numerical examples in this article are independent constructed calculations.

3. Revvity. [AlphaLISA and AlphaScreen no-wash assays](https://www.revvity.com/ask/alphalisa-and-alphascreen-no-wash-assays). Temperature guidance, signal-generation mechanisms and assay-dependent thermal sensitivity.
