# Controls can look better when the detector stops telling the truth

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/z-prime-linearity-screen-qualification/

Tight controls can conceal signal compression. Qualify intermediate responses, optical linearity, crosstalk and temperature before accepting a screening window.

The bright controls in a screening assay show less scatter than before, and Z-prime improves. Check the raw response before freezing the reader settings.

A detector that compresses bright signals can make different wells resemble one another. The apparent precision improves because the measurement has become less responsive to real differences. The Assay Guidance Manual explicitly identifies saturation artifacts as a way to reduce control variability in its discussion of assay-quality metrics. [1]

That warning does not make a good Z-prime suspicious by default. Qualification must also establish what the reader does between the control endpoints and beyond the brightest ordinary well. Two well-separated control populations cannot answer that question alone.

## Put intermediate responses on the qualification plate

Z-prime combines the separation between two control means with their standard deviations. It is useful for asking whether those particular populations are distinguishable under the conditions tested. It does not verify detector proportionality, identify the mechanism behind a low CV or establish that moderate biological effects will be measured faithfully.

Include an intermediate biological response during qualification, such as a reference compound concentration that produces partial inhibition. Select it because it tests an effect worth detecting, not because its value makes the plate statistics look attractive. More than one intermediate condition helps reveal changes in response shape.

Keep this biological panel separate from a detector proportionality check. A concentration-response curve can legitimately be nonlinear because of binding, enzyme kinetics or cellular behavior. An intermediate inhibitor concentration is not expected to generate the arithmetic midpoint of the light output. The detector test needs an input relationship established independently of that biology.

The manual's high-content chapter discusses a response-curve metric, the V-factor, alongside Z-prime and notes its reduced susceptibility to saturation artifacts. [1] Another statistic can broaden the information considered. It still cannot establish that the underlying optical measurement is linear without evidence about the input.

## A smooth curve can move the middle

Consider a constructed response in which the measured signal y depends on an incident-signal variable x:

y = (x) divided by (1 + (x) divided by (400))

This has the shape of a simple nonparalyzable count-loss model after choosing illustrative units. Hamamatsu describes nonparalyzable and paralyzable photon-counting models and explains that pulse-pair resolution depends on both the detector and processing electronics. [2] The number 400 here is an arbitrary scale, not a specification for a plate reader.

At x = 100, the measurement returns 80. There is no abrupt ceiling in that neighborhood. The output keeps rising, just too slowly. At x = 55, halfway between inputs of 10 and 100, the output is about 48.35.

| Input level | Measured output | Position within measured endpoint span |
| --- | --- | --- |
| Low control: 10 | 9.76 | 0% |
| Input midpoint: 55 | 48.35 | 54.9% |
| High control: 100 | 80.00 | 100% |

Normalizing the measured endpoints to zero and one has left the true midpoint at 54.9%. For an assay interpreted as decreasing signal with inhibition, that becomes about 45.1% inhibition instead of 50%. The endpoint correction has left the distorted midpoint in place.

The local slope of this response at x = 100 is 0.64. A small input standard deviation around that level is therefore compressed to roughly 64% of its original size, before adding any measurement noise. Its mean is reduced to 80%, so the corresponding CV is reduced to roughly 80% of the input CV. Both the means and the variability entering Z-prime can move.

These are deterministic response calculations. They do not model the complete counting statistics of a dead-time detector, correction software or a commercial instrument. Depending on the control distributions and added noise, compression can raise or lower Z-prime. Unexpectedly tight controls justify a range check; they do not establish a diagnosis.

## Change the light without changing the reaction

The most discriminating optical test varies incident light while preserving the emitting sample and relevant acquisition conditions. Use a qualified stable reference or an instrument-supported attenuation procedure suitable for the detection mode. For fluorescence or time-resolved assays, the reference must also match relevant excitation, timing and spectral conditions closely enough to test the intended measurement.

Measure several levels across the working range, including the brightest plausible samples and the margin the screen intends to rely on. Compare observed changes with the known changes in input. Evaluate deviations against a predefined allowable measurement error. A line fitted only to the lowest values can help reveal bright-end loss; fitting a flexible curve to everything can conceal it.

Biochemical dilution is a useful supporting experiment, but it changes more than incident light. It can alter substrate concentrations, capture equilibria, matrix quenching or reaction rate. An Alpha hook can produce a falling response even with a perfectly linear detector. A dilution result should therefore be interpreted with the assay chemistry, not automatically assigned to the reader.

Nor does a smaller displayed signal necessarily mean the optical problem has been removed. Reducing collection time lowers accumulated counts while leaving the instantaneous photon-arrival rate unchanged. If count losses arise from pulses arriving too close together, a shorter integration may simply collect fewer of the same undercounted events. Lowering gain also requires validation because it can change pulse discrimination. [2]

## Give different failures different tests

A repeated maximum value can suggest clipping or an output limit. Gradual compression may leave no such repeated value. Chemical saturation may respond to reagent concentration or addition order, while detector nonlinearity should track the independently controlled optical input. None of these patterns is conclusive in isolation.

Preserve the original individual well readings, flags, mode settings and any automatic correction information available. Compare responses at a validated alternative acquisition setting or mode, with an overlapping range where both are reliable. Agreement at one bright point is weaker evidence than agreement across several intermediate levels.

A useful linear dynamic range must accommodate weak samples as well as bright controls. Ask where precision becomes inadequate at the low end and where proportionality fails at the high end. If the system changes settings or combines modes automatically, include the transition region in qualification. The range specification needs those operating details to be useful.

## Test the neighborhood and the queue

Place weak controls beside representative bright wells, and compare them with weak controls in darker neighborhoods. Optical crosstalk can elevate the weak readings and contribute additional variance. Preventing that light from reaching the detector protects information that an average subtraction cannot fully recover. Record any correction method, but qualify the residual bias and precision after it is applied.

Run enough plates to reproduce the intended operating load. A stable reference helps distinguish instrument drift from a changing assay signal, although its spectrum and measurement mode constrain what it can diagnose. Distribute assay controls so that read order, plate position and queue time remain visible.

For glow luminescence, keep reagent and liquid temperature within the kit's specified reading conditions. Promega's CellTiter-Glo 2.0 manual calls for equilibration and explains that temperature affects the reaction rate and signal. [3] A chamber that gradually warms during a batch can change the brightness range being tested. Room-temperature endpoint detection should mean a stable, qualified condition, with consistent equilibration and waiting times.

This matters even when the optics were qualified earlier. A brighter reagent lot, warmer read condition or altered plate can move the assay toward a response limit. Recheck the relevant range after such changes, rather than assuming an earlier Z-prime transfers unchanged.

## Write acceptance around the measurement you need

Before the pilot screen, state the required precision for moderate effects, the allowable detector deviation from proportionality, the acceptable bright-neighbor influence and the permitted timing and temperature window. Choose those limits from the assay's decisions and supporting data. A universal percentage would conceal the trade-offs the qualification is supposed to expose.

Keep the evidence in four linked records: control distributions, intermediate biological responses, an independent optical range check and performance across the intended batch. If one fails, investigate that failure before optimizing the summary statistic. Narrow controls are more convincing when the reader also resolves the intermediate changes the screen needs to detect.

## References

1. Bray MA, Carpenter A. [Advanced Assay Development Guidelines for Image-Based High Content Screening and Analysis](https://www.ncbi.nlm.nih.gov/books/NBK126174/). Assay Guidance Manual, chapter dated July 8, 2017; supplied compilation updated June 10, 2026. PDF pp. 771–773, especially p. 773 / printed p. 751: saturation artifacts and response-curve metrics. This is a general statistical warning, not a documented photon-counting screen failure.

2. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/etd/PMT_handbook_v4E.pdf). PDF pp. 158–163 / printed pp. 145–150: pulse discrimination and count-rate linearity; PDF p. 194 / printed p. 181: attenuation checks.

3. Promega. [CellTiter-Glo 2.0 Assay technical manual TM403](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol.pdf?la=en). Revised January 2023; PDF p. 11 / printed p. 10, temperature and equilibration guidance. Instructions are specific to this kit.
