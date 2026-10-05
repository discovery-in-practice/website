# The ratio survived but the precision did not

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/fp-ratio-photon-loss-precision/

An unchanged FP ratio can hide lost precision. Follow photon-count examples and practical controls for attenuation, background and fluorescent compounds.

Two wells return 200 millipolarization units. One contains a bright tracer. The other contains the same tracer and a compound that absorbs much of the light. They can have the same average fluorescence polarization even though the dimmer well is less reliable.

Proportional attenuation removes light from both polarization channels without necessarily moving the expected ratio. It also leaves fewer photons from which to estimate that ratio. A compound can therefore escape an interference check based on the mean polarization while making individual wells less trustworthy.

Hall and colleagues describe this distinction in their review of fluorescence polarization screening: proportional optical interference can spare the FP value while reducing precision. Additive fluorescence behaves differently and can shift the value itself. [1] The raw intensities help distinguish those failures.

## The same answer from fewer photons

For parallel and perpendicular channel readings A and B, use the usual polarization definition with a relative channel-response correction G:

P = (A − GB) divided by (A + GB)

Polarization P is a fraction; multiplying it by 1,000 gives mP. Background subtraction belongs in the individual channels. The following constructed example sets G to one and initially assumes negligible background, linear detection and independent Poisson photon counts. These are detected counts during the acquisition interval, not arbitrary fluorescence units relabeled as photons.

Suppose the expected counts are 6,000 parallel and 4,000 perpendicular. The expected ratio of those means is 0.2, or 200 mP. Attenuate both signals fourfold and the means become 1,500 and 1,000. The ratio remains 0.2.

First-order propagation of the independent counting variances gives the approximate variance of polarization:

Var(P) ≈ (1 − P²) divided by (A + B)

The first well has an approximate measurement standard deviation of 9.8 mP. The attenuated well has 19.6 mP. Retaining one-quarter of the photons doubles this uncertainty. Owicki's treatment of FP screening statistics connects polarization precision to photon collection and gives the broader basis for this calculation. [2]

These are standard deviations of individual measurements under the model, not standard errors of a replicated mean. They also exclude pipetting variation, binding variation, drift and other assay noise. Their usefulness is to show a loss of information that can occur even when the chemistry and the expected ratio stay unchanged.

## Background makes the bargain worse

Now give each channel a fixed background contribution averaging 1,000 detected counts. Assume its mean is known accurately enough that uncertainty in the blank estimate can be neglected. Subtraction removes those mean counts from the channel values used to calculate polarization. It leaves the background photons' counting variance in the measurement.

With A and B now denoting the net signal means, the variance contributions must use the gross photon counts. For independent channels:

Var(P) ≈ (4[B² Var(A) + A² Var(B)]) divided by ((A + B)⁴)

For the bright well, the variance terms are 7,000 and 5,000 counts. For the attenuated well, they are 2,500 and 2,000. Polarization calculated from the net channel means remains 200 mP in both cases, while the predicted uncertainty separates further.

| Signal condition | Background per channel | Approximate SD |
| --- | --- | --- |
| 6,000 and 4,000 net counts | Negligible | 9.8 mP |
| 1,500 and 1,000 net counts | Negligible | 19.6 mP |
| 6,000 and 4,000 net counts | 1,000 counts | 10.8 mP |
| 1,500 and 1,000 net counts | 1,000 counts | 26.8 mP |

This background is deliberately held fixed while tracer light is attenuated, as might approximate detector background or an unaffected contribution. It is not a universal model of compound interference. Background originating inside the sample may change with the compound. Estimating the blank from a finite number of noisy wells introduces additional uncertainty as well.

Near a hit threshold, a noisier well has a greater chance of landing on either side of the cutoff. An apparently harmless intensity loss can increase both follow-up workload and the risk of missing a real effect, depending on the response and threshold. An unchanged plate-average ratio offers little reassurance about that individual well.

## Simultaneous collection protects a different part of the measurement

Suppose source intensity fluctuates while the reader measures the two channels. When both are collected simultaneously, a shared proportional change can cancel in the ratio. Sequential acquisition allows the channels to sample different brightness conditions. Calibrated simultaneous dual-emission collection is valuable because it preserves that common timing.

Independent photon fluctuations do not cancel in the same way. Two channels can share an illumination fluctuation while retaining their own counting noise. A complete uncertainty calculation includes their covariance. The simple formulas above describe the independent-counting case and should not be applied unchanged when other correlated fluctuations dominate.

This also explains the value of efficient optics. More useful photons improve counting precision without requiring more tracer. Raising tracer concentration can change ligand depletion, binding equilibria and assay sensitivity to competitors. Collecting the available emission efficiently can preserve a concentration chosen for sound biochemical reasons.

Longer acquisition is worth testing when counting noise dominates. Under the ideal model, four times the collection interval recovers the precision lost through fourfold attenuation. In a real plate, bleaching, drift and throughput can spoil that trade. Inspect precision against collection time before committing a screen to a slower setting.

## A practical interference review

Retain both background-corrected channels, their corresponding blanks and the acquisition settings. Also keep the raw readings before subtraction. A negative net value may reveal a background or low-signal problem that a ratio-only export conceals. Use the reader's documented channel convention when reconstructing total fluorescence; the FP denominator A + GB is different from the commonly used total-intensity expression A + 2GB.

Compare each compound with a suitable tracer control at the same tracer concentration and binding state. Look at the direction of both channel changes alongside the polarization. Similar fractional decreases suggest proportional attenuation as one possibility. Extra fluorescence, a channel-specific change or an altered binding population can produce another pattern. Use those patterns to choose the next control, then test the suspected mechanism.

One useful follow-up contains compound and tracer without the binding partner, with a matching compound-only well to examine fluorescence in the measurement bands. Add a control representing the bound state where feasible. A compound can interact differently with free and bound tracer, and a no-protein counterassay cannot reproduce every interference mechanism.

Check several compound concentrations. Inspect absorption or fluorescence spectra when the signal pattern warrants it, and consider a different tracer or an independent assay chemistry for consequential hits. Simply subtracting compound-only fluorescence may be inadequate if the compound changes tracer brightness, aggregates, scatters light or behaves differently when protein is present. [1]

Set intensity-review limits using the precision needed for the assay's useful effect sizes. There is no universal percentage loss that makes every FP result unusable. A modest loss in a dim assay can matter more than a much larger loss in a bright one. Accept an intensity loss only when the remaining precision supports the intended decision.

## Protect the photons that remain

Weak samples deserve optical isolation from bright neighbors. Subtracting an estimated leakage contribution can restore a mean intensity while leaving the noise contributed by the unwanted photons. Blocking interwell light before detection can therefore protect precision in a way that normalization alone cannot. Test representative bright-neighbor patterns when low-intensity wells are important to the screen.

Keep both channels inside their verified linear ranges. Compression of one channel can bias the ratio; proportional compression of both can conceal a response problem. A stable ratio is useful evidence only alongside the channel data and an appropriate range check.

Temperature adds a separate source of change through viscosity, rotational motion and tracer behavior. Maintain the validated binding and measurement temperature rather than assuming the ratio removes thermal effects. A stable chamber helps prevent a nominal room-temperature FP assay from drifting through different conditions during a long batch. [1]

For a questionable hit, save the ratio-versus-intensity plot beside the concentration-response curve. A point at 200 mP supported by abundant tracer light and a point at 200 mP reconstructed from weak, background-heavy channels deserve different confidence, even when the screening software prints them in the same column.

## References

1. Hall MD et al. [Fluorescence polarization assays in high-throughput screening and drug discovery: a review](https://pmc.ncbi.nlm.nih.gov/articles/PMC5563979/). Methods and Applications in Fluorescence 4 (2016), 022001. Supplied PDF pp. 26–27: proportional versus additive interference and follow-up; p. 23: temperature.

2. Owicki JC (2000). [Fluorescence polarization and anisotropy in high throughput screening: perspectives and primer](https://doi.org/10.1177/108705710000500501). Journal of Biomolecular Screening 5:297–306. Supplied Fluorescence Methods in Drug Discovery collection, PDF p. 131: shot-noise treatment. Numerical examples here are independently calculated idealized cases.
