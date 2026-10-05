# More receptor can make affinity harder to measure

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/ligand-depletion-receptor-concentration/

See how receptor concentration changes free ligand, shifts binding midpoints and limits Kd estimates, with worked examples and practical assay controls.

A binding assay gives an uncomfortably small signal. Adding more receptor seems an economical way out: more binding, better separation from the blank, fewer arguments about the bottom of the curve. That may improve the signal while making the affinity measurement harder to interpret.

The trouble starts with the concentration written above the pipetting instructions. That is the total ligand concentration. A binding equation usually wants the free concentration. Every occupied receptor removes a ligand molecule from that free pool. If enough ligand binds, the experiment changes the quantity that the analysis has treated as fixed.

Ligand depletion survives excellent liquid handling. A perfectly prepared well still loses free ligand as binding proceeds. The fluorescence polarization technical guide devotes a useful discussion to this distinction and to the quadratic equation needed when the approximation of negligible depletion fails. [1]

## Ten nanomolar does not stay ten nanomolar

Consider a constructed example with one ligand binding reversibly to one class of independent receptor sites. Let the total active receptor concentration, 

R subscript T

, be 10 nM; let total ligand, 

L subscript T

, also be 10 nM; and let the true equilibrium dissociation constant, 

K subscript d

, be 10 nM. Assume equilibrium, no nonspecific binding and no loss to surfaces.

It is tempting to put 10 nM ligand into the familiar occupancy expression, L/(

K subscript d

 + L), and report half occupancy. That expression requires free L. We have only specified how much ligand entered the well.

Call the concentration of receptor–ligand complex B. Free ligand is 

L subscript T

 − B, and free receptor is 

R subscript T

 − B. The equilibrium relationship becomes:

K subscript d = (( R subscript T − B)( L subscript T − B)) divided by (B)

Solving for the physically meaningful root gives:

B = (( R subscript T + L subscript T + K subscript d ) − square root of (( R subscript T + L subscript T + K subscript d )² − 4 R subscript T L subscript T)) divided by (2)

For this example, B is approximately 3.82 nM. Free ligand is 6.18 nM. Receptor occupancy is therefore 38.2%, well below the 50% predicted by quietly substituting total ligand for free ligand. The missing ligand is sitting on the receptor.

Now increase receptor tenfold while keeping total ligand and 

K subscript d

 unchanged. About 9.01 nM ligand binds, leaving 0.99 nM free. More ligand is bound, although a much smaller fraction of the receptor population is occupied.

| Quantity | 10 nM receptor | 100 nM receptor |
| --- | --- | --- |
| Total ligand | 10 nM | 10 nM |
| Bound ligand | 3.82 nM | 9.01 nM |
| Free ligand | 6.18 nM | 0.99 nM |
| Fraction of ligand bound | 38.2% | 90.1% |
| Fraction of receptor occupied | 38.2% | 9.01% |

All values are calculated for 

K subscript d

 = 10 nM under the assumptions above. The last two rows deserve separate labels. An FP tracer experiment commonly reports the fraction of fluorescent ligand bound. A receptor-occupancy model reports the fraction of receptor sites occupied. Those fractions happen to agree in the first column because the totals are equal. They diverge sharply in the second.

## The midpoint includes the receptor you added

There is a particularly useful consequence for a ligand saturation experiment at fixed receptor concentration. At half receptor occupancy, free ligand equals 

K subscript d

. Half the receptor sites also contain ligand. The total ligand required to reach that midpoint is therefore:

L subscript T,half = K subscript d + (R subscript T) divided by (2)

With 10 nM active receptor and a true 

K subscript d

 of 10 nM, half occupancy occurs at 15 nM total ligand. At 100 nM receptor, it occurs at 60 nM total ligand. Calling those total-concentration midpoints “the 

K subscript d

” would suggest a change from 15 to 60 nM even though the molecular affinity has stayed fixed.

This is a midpoint calculation for the stated saturation experiment, not a prediction of every parameter returned by an unconstrained curve fit. A fit can also adjust its upper plateau, background and slope. Those extra freedoms may make the picture look more agreeable without repairing the physical interpretation.

In a receptor titration with fixed tracer, the roles of the varied and fixed components change. The same mass balance applies, but the half-bound tracer condition must be derived for that design. Check which component is varied before interpreting its midpoint.

## The quadratic equation has limits, too

Using the correct equation is necessary when depletion matters. It does not guarantee that the experiment contains enough information to estimate affinity precisely.

Suppose binding is extremely tight compared with the concentrations the assay can measure. Most available ligand binds until a binding partner runs out. The curve begins to describe how many active sites are present. Several very small 

K subscript d

 values can then predict responses so similar that experimental noise hides their differences. A precise-looking fit can conceal that lack of information.

Jarmoskaite and colleagues demonstrate the distinction between affinity-sensitive and titration-dominated concentration regimes using protein–RNA binding experiments. They recommend varying the limiting component as an experimental control and establishing equilibrium independently. Their treatment also shows why inserting a quadratic equation cannot rescue a 

K subscript d

 that the chosen concentrations barely constrain. [2]

This matters when ranking exceptionally tight binders. Two compounds may appear equally tight because the experiment cannot resolve the difference. Report the supported bound or uncertainty, then redesign the concentration range or use another suitable measurement if the ranking matters.

The receptor concentration itself also needs scrutiny. Protein mass does not establish the concentration of functional binding sites. An inactive fraction, an incorrect stoichiometry or partial aggregation changes the mass balance. Letting both active receptor and 

K subscript d

 float in a weakly informative fit may trade one unknown against the other. An independent estimate of active sites is often more useful than another decimal place.

## Give the assay a chance to disagree with itself

A practical development experiment repeats the binding curve at several concentrations of the component held constant. Analyze the curves using their actual totals and a shared physical model where justified. Look for agreement in the inferred affinity, sensible active-site estimates and adequate sensitivity of the predictions to 

K subscript d

. Systematic movement deserves investigation before the assay goes into a screening protocol.

Repeat selected points at longer incubation times as well. Lower concentrations can require longer to equilibrate. If binding is still changing, a depletion correction addresses only part of the problem. Jarmoskaite and colleagues also show experimentally that temperature changes can alter both affinity and the time needed to reach equilibrium. [2]

Keep the binding temperature defined and stable during incubation and measurement. A room-temperature assay benefits from a chamber that does not gradually warm the plate during a batch. An assay designed for another temperature should stay at that validated temperature; cooling it for convenient reading can change the equilibrium being measured. Temperature belongs alongside buffer composition in the reported conditions.

## Spend sensitivity on lower concentrations

Efficient fluorescence collection can make a chemically informative, lower-concentration experiment practical. That is a valuable use of reader sensitivity: gaining access to concentrations at which the binding partners retain a useful free pool.

For FP, simultaneous collection of the parallel and perpendicular emission channels can reduce the effect of fluctuations shared by the two measurements, provided their relative response is calibrated. Longer collection can help when photon statistics dominate. Neither improvement adds information about affinity if the chemistry is already in an almost purely stoichiometric regime.

Reducing tracer also makes background, nonspecific adsorption and contamination more consequential. Check the intensity channels, free-tracer recovery and plate-dependent losses. Binding-dependent changes in tracer brightness require their own treatment; a corrected concentration model does not automatically turn polarization into molecular occupancy. The optical and chemical models must both describe the experiment. [1]

Competition assays inherit these concerns and add the competing ligand's mass balance. A routine 

IC subscript 50

-to-

K subscript i

 conversion can fail under substantial depletion or tight binding. Use a competition model appropriate to the concentrations and mechanism, with enough experimental information to constrain it. Check the assumptions against concentration and timing experiments before interpreting the fitted affinity.

Before increasing receptor to improve a weak signal, calculate the free concentrations expected near the informative part of the curve. Then make a small receptor-and-tracer concentration matrix. If brighter wells consistently produce a different apparent affinity, those wells have supplied a useful warning before an entire screen is built around them.

## References

1. Invitrogen. [Fluorescence Polarization Technical Resource Guide, fourth edition](https://research.fredhutch.org/content/dam/research/hahn/methods/beacon_fluorescence_guide.pdf). Ligand depletion and quadratic binding: PDF pp. 68–69. Optical weighting and binding analysis: PDF pp. 84–87.

2. Jarmoskaite I, AlSadhan I, Vaidyanathan PP, Herschlag D (2020). [How to measure and evaluate binding affinities](https://pmc.ncbi.nlm.nih.gov/articles/PMC7452723/). eLife 9:e57264. Sections “Avoid the titration regime,” “Vary incubation time to test for equilibration” and “Determine the fraction of active protein.” DOI: 10.7554/eLife.57264.
