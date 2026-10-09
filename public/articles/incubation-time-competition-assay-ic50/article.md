# Waiting longer can move the competition curve

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/incubation-time-competition-assay-ic50/

Longer incubation can improve an assay window while changing potency. Explore AlphaScreen and hERG examples and a practical way to qualify complete curves.

The signal is still climbing. Another hour could bring more counts and a cleaner window. In a competitive binding assay, it can also change the concentration required to produce half the response.

The AlphaScreen practical guide describes exactly this problem in a cAMP assay. It recommends at least an hour after the final reagent addition for suitable signal, while reporting that maximal counts typically occur after 14–16 hours at room temperature. During that prolonged incubation, its example 

IC subscript 50

 shifts from 5 to 15 nM. The brighter measurement has a different competition curve. [1]

Those times belong to the assay described in the historical guide. The example shows how an incubation can improve the signal while changing the result; each Alpha assay needs its own timing qualification.

## What is still happening in the well

In this competitive format, unlabeled cAMP competes with a biotinylated cAMP tracer in a bead-based detection system. The guide attributes the shift to an increase in the local concentration of biotin-cAMP between associated donor and acceptor beads as equilibrium is approached. For prolonged incubation, it suggests reducing biotin-cAMP concentration, giving 2 nM instead of 10 nM as an example. [1]

That recommendation changes the assay chemistry. It deserves a fresh standard curve and evaluation of the usable range, rather than being treated as a general correction for late plates. Lower tracer concentration may change the signal and the competition conditions together.

The underlying issue is familiar from binding experiments: occupancy takes time to develop. Association and dissociation rates determine how quickly a particular mixture approaches equilibrium. In a competition experiment, the tracer and competitor each contribute their own kinetics. Order of addition can matter before equilibrium, especially if one ligand has had a substantial head start. The Assay Guidance Manual's treatment of kinetic binding makes these dependencies explicit. [2]

A bead assay adds further events between ligand binding and the measured light. A signal plateau therefore deserves interpretation. It may reflect the relevant system reaching a reproducible state; it may also conceal offsetting changes or a limiting detection step. A flat high control cannot establish that every intermediate competitor concentration has stopped moving. Check that the detector remains linear as counts rise, too. Compression at the bright end can flatten a time course while the chemistry continues to develop. A wide, verified linear detection range helps preserve changes in both dim and bright wells. [4]

## The endpoints can look excellent while the middle moves

Here is a constructed illustration using the guide's two midpoint values. Assume a decreasing competition curve with slope one, fixed high and low signals of 10,500 and 500 units, and no change in either endpoint. At competitor concentration c, the model is:

S(c) = L + (H − L) divided by (1 + (c) divided by (IC subscript 50))

H and L are the upper and lower limits. This simple curve describes a response; it does not assert the molecular mechanism of the cAMP assay. At 10 nM competitor, the two hypothetical curves give:

| Curve midpoint | Signal at 10 nM | Normalized inhibition |
| --- | --- | --- |
| 5 nM | 3,833 | 66.7% |
| 15 nM | 6,500 | 40.0% |

The intermediate signals are calculated, not measurements from the guide. They show what a threefold midpoint shift could mean for a single-concentration screen. A compound can cross a hit threshold even though both endpoint controls remain exactly where they were.

Give those controls standard deviations of 300 and 100 units, respectively. Both curves would have the same Z′ of 0.88, because the high-control mean, low-control mean and their variation have not changed. The control statistics show a well-separated measurement window while leaving this change in the competition curve untested.

A reference curve supplies information the two endpoint populations cannot. Its midpoint follows the competition response, and its slope and limits help reveal whether the change is more complicated than a horizontal displacement. Retain uncertainty on those fits. A small apparent shift from a poorly constrained curve should not carry the same weight as a reproducible shift supported by well-sampled plateaus.

## A different assay makes the same practical point

The Predictor hERG fluorescence polarization manual reports a time-course example for E-4031. Its 

IC subscript 50

 rises from 23 nM after one hour to 39 nM after four hours, while the reported assay window rises from 111 to 153 mP and Z′ improves from 0.56 to 0.77. The manual suggests a complex equilibrium involving tracer, binding sites and membrane, while noting that it was not studied further. It recommends determining timing for the intended workflow. [3]

The improvement in control separation accompanies a changed potency estimate. The Alpha and hERG examples use different detection mechanisms and cannot supply a universal direction or magnitude for incubation effects. Together they give a good reason to qualify the curve as well as the signal.

Comparing values from different days or protocols requires that timing information. A time-dependent 

IC subscript 50

 is an experimental result under specified conditions. Leaving the incubation out of the record makes that result harder to interpret, particularly when a series contains compounds with different binding kinetics.

## Give each possible explanation its own experiment

A shift with time does not establish long residence time. Residence time concerns dissociation; a moving competition curve can also reflect association, changing tracer distribution, nonspecific binding or instability. A kinetic binding experiment with an appropriate model and adequate observation period provides stronger evidence about rates. Two endpoint 

IC subscript 50

 values provide much less information. [2]

Enzyme assays bring another distinction. If catalysis continues during the added waiting period, product accumulates and substrate may become depleted. A changing response can then arise even with rapidly equilibrating inhibitor binding. Determine whether the biological reaction is still running and whether the intended initial-rate assumptions remain reasonable. Reagents that develop the detection signal add further timing requirements after the enzyme reaction has ended.

Temperature can affect these stages differently. Bringing plates to a reproducible liquid temperature improves comparability, but cooling a reaction does not automatically stop it. Include any pre-stop equilibration interval in the workflow assessment. A stable chamber cannot reconstruct the reaction history of a plate that waited too long before the terminating reagent arrived.

For Alpha assays, previous illumination is another variable. The practical guide explicitly recommends separate wells for each time point when establishing the equilibrium time course. Use fresh matched wells or plates for that purpose, with reagent preparation and handling held as consistent as practical. Otherwise, time since preparation and number of previous measurements become entangled. [1]

## Qualify the interval you intend to use

Start with the earliest allowed read, the normal operating time and the latest plausible read after a routine delay. Include the assay's actual minimum incubation requirements. If no prior timing information exists, a broader exploratory time course comes first; an arbitrary three-point schedule may miss the behavior you need to understand.

At each selected time, measure a complete concentration-response curve, not only the no-competitor and fully displaced controls. Use enough concentrations to define both limits and the region around the midpoint, with replication suitable for the assay's precision. Include more than one reference ligand where possible. A rapidly equilibrating standard may remain well behaved while a slower compound continues to change.

Distribute the controls and curve replicates so concentration is not inseparable from row, column or acquisition time. Retain raw signal as well as normalized response. A common multiplicative intensity change may largely disappear during normalization; a concentration-dependent change will not generally do so. Plot signal, midpoint and slope against elapsed time rather than reducing the qualification to one pass/fail statistic.

Define acceptable variation from the use of the assay. A screen seeking large effects and a medicinal-chemistry assay ranking close analogs may need different tolerances. Estimate ordinary between-run variation before declaring an allowable potency drift. Specify an operating interval and a rule for plates that fall outside it.

If longer incubation moves the curve, the next useful step is to establish whether it eventually stabilizes and whether that stable state is practical for the workflow. A defined earlier endpoint can also be useful when validated and reported consistently, with its kinetic limitations understood. Record the interval beside the reported potency. A colleague comparing the next run should be able to tell whether a changed curve reflects a new compound or a different time point.

## References

1. PerkinElmer. [AlphaScreen practical guide](https://www.urmc.rochester.edu/MediaLibraries/URMCMedia/hts/documents/AlphaScreenPracticalGuide.pdf). PDF p. 30, printed p. 24: equilibrium time course, separate wells and the cAMP incubation example. Historical assay-specific guidance.

2. Hoare SRJ (2021). Analyzing Kinetic Binding Data. [Assay Guidance Manual](https://www.ncbi.nlm.nih.gov/books/NBK53196/). Supplied 2021 compilation, PDF pp. 61–79: association, dissociation, competition kinetics and limits of rate estimation. Consult the chapter's models before inferring residence time from endpoint data.

3. Invitrogen. [Predictor hERG Fluorescence Polarization Assay manual](https://documents.thermofisher.com/TFS-Assets/LSG/manuals/Predictor_hERG_FP_Assay_man.pdf). PDF p. 11, section 7.1 and Table 7: E-4031 time course. These historical results describe this assay, not a general FP incubation requirement.

4. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/etd/PMT_handbook_v4E.pdf). Printed pp. 149–150: count-rate linearity and correction. A signal plateau alone does not establish linear detector response.
