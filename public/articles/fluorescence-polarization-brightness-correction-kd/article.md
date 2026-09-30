# Half the molecules and two thirds of the light

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/fluorescence-polarization-brightness-correction-kd/

Binding can change tracer brightness and shift an apparent Kd while the curve still fits beautifully. See the equations, controls and fluorescence data to keep.

An antibody binds fluorescein. The fluorescence polarization increases, a binding curve emerges, and the fitted dissociation constant is 165 nM. Then the analysis accounts for what binding did to the dye's brightness. The reported 

K subscript d

 becomes 11 nM.

That fifteenfold change appears in Invitrogen's fluorescence polarization technical guide, in an example using a single-chain anti-fluorescein antibody. Binding strongly quenched the fluorescein. The correction changed the interpretation of the measurements already collected. [1]

The error enters when a fraction of the optical response is treated as a fraction of the molecules. When free and bound tracer have different brightness, the detector gives the two populations different weights. The fitted curve may still look convincing.

## Start with the photons

Imagine a well containing equal numbers of free and bound tracer molecules. Suppose each bound molecule produces twice as much detected fluorescence as each free molecule under the chosen optical settings. Of every three fluorescence units reaching the measurement, two now come from bound tracer. Half the molecules contribute two thirds of the light.

The direction reverses if binding quenches the dye. Bound molecules then become less visible in the mixture. Either behavior changes the relationship between a polarization measurement and occupancy. A chemically clean, perfectly equilibrated binding experiment can therefore give a misleading estimate of occupancy.

Anisotropy is the convenient quantity for doing the accounting because mixtures combine according to their fluorescence contributions. Polarization and anisotropy describe the same pair of channels with different denominators. They are not numerically interchangeable. For polarization P expressed as a fraction, anisotropy r is 

(2P) divided by (3 − P)

. A reported value in mP must first be divided by 1,000. [1]

Let f be the fraction of tracer molecules bound, with free and bound anisotropies 

r subscript f

 and 

r subscript b

. Define q as bound-tracer brightness divided by free-tracer brightness, per molecule and under the same measurement conditions. For two fluorescent states after appropriate background correction:

r = ((1 − f) r subscript f + qf r subscript b) divided by ((1 − f) + qf)

When q equals one, the familiar straight interpolation between endpoints works. Otherwise, the fluorescence contributions must remain in the equation. Solving for the molecular fraction gives:

f = (r − r subscript f) divided by (q( r subscript b − r) + (r − r subscript f ))

The same kind of brightness correction appears in the methods of a primary FP study of Nrf2 peptide binding to Keap1. [2]

The ratio calculation does cancel a common multiplier applied to all the fluorescence. Binding-dependent brightness does something else: it changes the relative contributions of two populations with different anisotropies. Dividing one combination of channel intensities by another cannot restore the molecular proportions that produced them.

For a constructed example, take free anisotropy 0.04, bound anisotropy 0.24, and q = 2. At 50% molecular occupancy, the measured anisotropy is approximately 0.1733. Straight interpolation between the two endpoints reports 66.7% bound. The brightness-corrected expression recovers 50%. No pipetting error or instrument drift is needed to produce the discrepancy.

## A beautiful curve can have the wrong Kd

The consequences extend beyond a single midpoint. Consider trace ligand binding to one class of independent sites. Use free receptor concentration R, assume negligible ligand depletion, and let the true 

K subscript d

 be 100 nM. The actual bound fraction follows the usual binding hyperbola. If bound tracer is twice as bright as free tracer throughout the titration, normalized anisotropy follows:

y = (r − r subscript f) divided by (r subscript b − r subscript f) = (qR) divided by (K subscript d + qR)

Divide the last expression's numerator and denominator by q. The expression remains a hyperbola, with an apparent dissociation constant of 

(K subscript d) divided by (q)

. For this example, an uncorrected fit reports 50 nM. The residuals can look excellent because the wrong interpretation still has the right mathematical shape.

That result assumes two states with fixed brightness, known endpoints, and the binding model just described. It is a calculated illustration, not a general conversion rule for every FP assay. Ligand depletion, multiple sites or concentration-dependent optical effects require a more complete treatment. A good fit alone does not establish molecular occupancy.

In the antibody example, binding quenched the dye and the uncorrected affinity appeared weaker. A tracer that becomes brighter on binding can push the apparent affinity in the other direction. The sign and size of the error depend on the experiment.

## Keep the intensity information

A reader already measures intensities to calculate polarization. Export them. For background-subtracted parallel and perpendicular signals A and B, with the instrument's appropriate relative-response correction G, the usual expressions are:

r = (A − GB) divided by (A + 2GB) ;    F = A + 2GB

Here F is the corrected total fluorescence used in the anisotropy calculation. The factor of two accounts for the two perpendicular directions in the standard geometry. Simply adding the two reported channels is a different calculation. The instrument correction G also has a different job from q: G describes relative detection response, while q describes the tracer's change in brightness. [1]

Plot total fluorescence alongside anisotropy throughout the titration. A systematic intensity change makes the equal-brightness assumption questionable. It does not, on its own, establish a usable correction factor. Added protein can bring fluorescence or scattering, and changes in absorption, aggregation or nonspecific association can complicate the signal. A compound can introduce another fluorescent species altogether.

Subtract the appropriate background from each channel before forming the ratio. In a protein titration, a single buffer blank may miss background that increases with protein concentration. Matching blanks across the titration is more informative when that contribution is appreciable. Subtracting one mP value from another cannot perform the same correction.

For q, compare free and well-characterized bound end states at equal tracer concentration, under matching optical conditions. Keep detector response linear. Confirm that the proposed bound endpoint is supported by the binding experiment; the highest protein concentration is only a candidate. If that well also has substantial nonspecific signal, calling it “100% bound” imports the problem into the correction.

Where endpoints cannot be measured cleanly, fit an appropriate joint model to intensity and anisotropy, with enough controls to constrain it. Adding free parameters to a narrow titration can produce attractive numbers with little information behind them. The useful result includes uncertainty in brightness and endpoints as well as uncertainty in the binding parameter.

## More precise channels still need the right model

Simultaneous collection of parallel and perpendicular emission helps the two channels represent the same instant. That reduces the opportunity for a changing excitation level or sample state between readings to become a ratio error. It is particularly useful when a small window demands close agreement between channel measurements. Calibration, adequate photon collection and suitable background correction remain necessary.

This improvement can make the brightness problem easier to diagnose by reducing measurement scatter. It cannot make q equal one. Precise data can make an incorrect fit unusually persuasive. Keep the intensity plot beside the binding curve when deciding whether an improvement in precision has also improved the measurement's interpretation.

Temperature and matrix composition deserve the same consistency across the titration and its endpoint controls. A brightness ratio measured under one set of conditions may fail to describe another. Establish the control behavior at the temperature and timing used for the actual read, and investigate plate-position or time trends before assigning every change to binding.

## An inexpensive addition to assay development

Before accepting an FP binding assay, save one complete titration with both raw channels, the background measurements and the calculated total fluorescence. Compare fits that assume equal brightness with a model supported by the intensity data. Repeat enough of the experiment to learn whether any fitted correction is stable. For competition assays, carry the tracer's binding and optical behavior into the competition model rather than automatically interpreting a normalized mP change as percent displacement.

There is no reason to force a large correction onto a tracer whose brightness remains effectively constant within experimental uncertainty. Record the intensity evidence supporting that choice. When brightness does change, an independent binding measurement can help decide whether the corrected affinity is credible.

The next time a curve fits beautifully, the adjacent intensity plot deserves a look. A systematic change there may explain why two assays agree about the shape of a response and disagree about the affinity. The missing information may already be in the reader's export file.

## References

1. Invitrogen. [Fluorescence Polarization Technical Resource Guide, fourth edition](https://research.fredhutch.org/content/dam/research/hahn/methods/beacon_fluorescence_guide.pdf). Anti-fluorescein example: PDF pp. 35–38, especially p. 37 (printed chapter 3, p. 15). Mixture equations, anisotropy conversion and binding analysis: PDF pp. 84–87.

2. Inoyama D et al. (2012). [Optimization of Fluorescently Labeled Nrf2 Peptide Probes and the Development of a Fluorescence Polarization Assay for the Discovery of Inhibitors of Keap1-Nrf2 Interaction](https://pmc.ncbi.nlm.nih.gov/articles/PMC3309107/). Journal of Biomolecular Screening 17:435–447. Methods, equations 4–5, printed p. 438: brightness correction and ligand depletion. The study uses a bound/free brightness correction before fitting binding.
