# Why do Alpha or glow-luminescence controls drift from the first plate to the last?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/alpha-glow-luminescence-controls-drift/

Separate assay age, reagent changes and temperature drift when Alpha or glow-luminescence controls change from the first plate to the last.

Successive plates can differ in assay age, liquid temperature, reagent condition and time spent inside the reader. These variables often move together, so a smooth trend across plate numbers does not identify its cause. Separate the interval from reagent addition to reading from the thermal history of each plate. For endpoints specified near room temperature, include the reader's thermal history in that comparison. [1,2]

## Later plates may contain older reactions

If all plates receive detection reagent together and are read sequentially, the later plates contain older reactions. A glow signal can remain usable for a long time while still changing measurably over a batch. For an illustrative exponential signal with a two-hour half-life, a 30-minute difference in assay age produces about 16% less light at the later measurement. That example is not a half-life specification for CellTiter-Glo or any other kit.

Alpha reactions can develop in the opposite direction as binding approaches equilibrium. The AlphaScreen practical guide recommends a time course with separate wells for each time point and requires an appropriate minimum incubation for every plate. [1] A time course based on repeatedly exciting the same wells can mix reaction age with measurement history.

Record when each critical reagent was added and when the plate was mixed, loaded and read. Include read completion time if a plate takes long enough for within-plate timing to matter. Check which plates actually receive the stated incubation, including those delayed by the queue.

## The liquid can change while the chamber appears steady

Plates arriving from a stack can have different temperatures even when their bench waiting times match. Once loaded, they may warm toward the chamber temperature. A busy reader may present a different thermal environment from the one encountered by the first plate.

Promega's CellTiter-Glo 2.0 manual connects temperature with both luminescence intensity and decay and warns about incomplete equilibration in plate stacks. [2] The ADP-Glo manual likewise calls for equilibration of plates and reagents and identifies center-to-edge gradients as a source of variability. [3] Keep the liquid temperature controlled through the reading interval as well as during incubation.

## Change one history while holding the other steady

Prepare matched control plates at staggered times so that each reaches the reader at the same assay age. Compare those controls across the intended throughput sequence while recording representative liquid temperatures. A remaining trend warrants investigation of temperature, dispensing and reader behavior; equal age alone does not prove a thermal cause.

Then hold the thermal conditions consistent and compare controls at deliberately different ages within the proposed reading window. For Alpha, retain separate wells or plates for the time points. This comparison tests whether reaction development or signal decay can explain the observed drift.

Check reagent preparation age and dispensing separately. Freshly prepared control plates will not isolate the reader if a shared reagent reservoir loses activity, changes concentration or dispenses inconsistently through the run. For ADP-Glo, keep the kinase reaction, ATP-depletion stage and luminescent detection stage distinct; ATP means adenosine triphosphate. [3]

## Make the queue part of the qualified protocol

Use distributed controls to inspect raw signal, background and variability across position and acquisition time. Plate normalization may remove a shared multiplicative shift, but unequal sample and control histories can survive that correction. Examine control scatter as well as normalized means.

Define acceptable ages for the important stages and a restart rule for interrupted batches. Where the kit calls for a room-temperature endpoint, keep the measurement chamber close to the validated condition throughout sustained operation. Save the timing and temperature records with the run so later drift can be compared with the conditions under which the workflow was qualified.

## References

1. PerkinElmer. [AlphaScreen practical guide](https://www.urmc.rochester.edu/MediaLibraries/URMCMedia/hts/documents/AlphaScreenPracticalGuide.pdf), PDF pp. 30 and 32 / printed pp. 24 and 26. Separate time-point wells, binding equilibration and temperature sensitivity. Historical examples are assay-specific.

2. Promega. [CellTiter-Glo 2.0 Assay Technical Manual TM403](https://www.promega.com/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol/), revised January 2023, PDF pp. 7 and 11. Room-temperature protocol, signal temperature dependence and stack equilibration.

3. Promega. [ADP-Glo Kinase Assay Technical Manual TM313](https://www.promega.com/-/media/files/resources/protocols/technical-manuals/0/adp-glo-kinase-assay-protocol.pdf), revised July 2023, PDF pp. 17–18. Reaction staging, plate/reagent temperature equilibration and luminescence stability.
