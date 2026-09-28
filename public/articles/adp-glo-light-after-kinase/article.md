# ADP-Glo: the light comes after the kinase

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/adp-glo-light-after-kinase/

ADP-Glo light is the endpoint of a multistep detection sequence, so a lower signal can arise outside the kinase reaction. This article shows how to reconstruct the endpoint with ATP/ADP controls and interpret temperature, timing, conversion, and ATP-dependent potency.

A kinase inhibitor reduces the ADP-Glo signal. That is the expected result. Unfortunately, a compound that leaves the kinase alone and interferes with detection can also reduce the signal. Between the enzyme reaction and the reported number sit additional reactions, reagent additions and incubation periods. Include those stages in the troubleshooting plan.

ADP-Glo detects the ADP produced by the reaction. Its first reagent terminates the kinase reaction and removes remaining ATP. The second detection step converts ADP into ATP and measures that newly generated ATP through a luciferase reaction. [[1](https://discoveryinpractice.com/articles/adp-glo-light-after-kinase/#ref-1),[2](https://discoveryinpractice.com/articles/adp-glo-light-after-kinase/#ref-2)] The instrument sees the end of this sequence. Establishing kinase inhibition requires showing where in the sequence the effect occurred.

## Reconstruct the endpoint without the kinase

The most useful detection control contains a known ATP/ADP mixture instead of an active kinase reaction. It should otherwise resemble the assay closely enough to retain the suspected interference. Process it through both detection steps, with compound and vehicle controls.

Zegzouti and colleagues describe this approach in the original ADP-Glo paper. [[2](https://discoveryinpractice.com/articles/adp-glo-light-after-kinase/#ref-2)] It tests more than a luciferase-only counterscreen because it includes ATP depletion and ADP conversion. A compound can interfere before light production ever begins. Depending on which steps are affected, interference may raise or lower the result, or partly offset genuine kinase inhibition.

For a hypothetical assay starting with 10 µM ATP and reaching 10% conversion, prepare a mock endpoint containing 1 µM ADP and 9 µM ATP, with concentrations expressed before detection-reagent addition. Include the reaction buffer, substrate and other compatible components. Keep their dilution history consistent with the real samples.

Do not confuse the compound concentration during kinase exposure with its concentration during detection. In a 1:1:2 sequence of reaction, first reagent and second reagent volumes, the final volume is four times the kinase-reaction volume. A compound initially at 20 µM ends at 5 µM, assuming neither detection reagent adds compound. Prepare the mock reaction so the compound experiences the same staged dilution.

A detection effect flags the hit for further work; it does not prove the kinase is unaffected. Conversely, a clean mock reaction supports the assay interpretation without proving selectivity. Confirmation with an appropriate direct product or alternative activity measurement answers a different question.

## The standard curve should contain the ATP you removed

For conversion standards, hold the total ATP plus ADP concentration constant while varying their proportions. This reproduces the changing nucleotide composition of the reaction more closely than ADP diluted into buffer alone. Both the technical manual and the original study describe this approach. [[1](https://discoveryinpractice.com/articles/adp-glo-light-after-kinase/#ref-1),[2](https://discoveryinpractice.com/articles/adp-glo-light-after-kinase/#ref-2)]

At 10 µM total nucleotide, 5% conversion corresponds to 0.5 µM ADP plus 9.5 µM ATP. A 20% standard contains 2 µM ADP plus 8 µM ATP. Those standards must undergo the same detection sequence as the samples.

Pay particular attention to the zero-conversion mixture. ADP contamination in an ATP stock is already detectable product, even when the kinase does nothing. Promega recommends its supplied high-purity ATP to limit this problem. [[1](https://discoveryinpractice.com/articles/adp-glo-light-after-kinase/#ref-1)] An illustrative 0.1 µM ADP background is only a small fraction of a nominal 10 µM nucleotide pool, yet it equals the product from a reaction generating just 0.1 µM ADP.

Background subtraction removes the estimated mean contribution. It does not remove uncertainty in that estimate, nor does it repair well-to-well differences in nucleotide contamination or ATP depletion. Include matched no-enzyme controls and low-conversion standards across the plate, especially when working near the assay's lower useful range.

## More conversion is not always a better kinase experiment

Extending the reaction often produces a larger signal. It also changes the experiment. Substrate concentrations fall, product accumulates, and a control reaction may approach completion while an inhibited reaction is still progressing. The resulting endpoint no longer necessarily represents the ratio of their initial rates.

Establish a time interval and enzyme concentration over which product formation supports the intended kinetic interpretation. Low conversion helps limit substrate depletion, but low conversion alone does not prove linear progress. Enzyme activation, inactivation or slow inhibitor binding can still make the trajectory nonlinear.

Choose detection settings that measure the required low-conversion signal precisely instead of driving the biology harder merely to make a brighter well. Good light collection and low background can reduce pressure to use more enzyme or longer incubations. Preserve enough verified linear range for the highest standards and unexpected samples as well.

## ATP concentration belongs beside every potency value

For a simple reversible ATP-competitive inhibitor under initial-rate conditions, a useful approximation is:

IC50 equals Ki times (1 plus ATP concentration divided by Km), under the assumptions stated in the article.

Here Ki is the inhibition constant and Km is the apparent ATP Michaelis constant under the chosen assay conditions. This relationship assumes the appropriate competitive model, negligible inhibitor depletion and suitable control of the kinase's other substrate. Tight binding, time dependence and more complex mechanisms require other analysis.

If Ki is 10 nM, measuring at ATP equal to Km gives an expected IC50 of 20 nM. Measuring at ten times Km gives 110 nM. The compound has not become intrinsically weaker; the competition has changed. In the original ADP-Glo study, increasing ATP shifted the measured potency of an ATP-competitive PKA inhibitor much more than that of the noncompetitive comparator. [[2](https://discoveryinpractice.com/articles/adp-glo-light-after-kinase/#ref-2)]

ATP titration is therefore informative, but it changes both the kinase reaction and the nucleotide burden entering detection. Qualify the conversion curve and detection controls at each ATP condition. Report ATP concentration, substrate, enzyme amount, incubation time and temperature with potency. Those conditions are needed to interpret the IC50.

## Temperature is part of every stage

Promega explicitly states that temperature affects ADP-Glo light intensity and signal stability, and that inadequate equilibration can produce center-to-edge gradients. The manual calls for assay plates and reagents to reach room temperature before detection-reagent addition. It also recommends developing the kinase reaction at room temperature where appropriate. [[1](https://discoveryinpractice.com/articles/adp-glo-light-after-kinase/#ref-1)]

This gives the workflow two distinct temperature questions: under what conditions did the kinase produce ADP, and under what conditions was that ADP detected? Making the second stage stable cannot undo unequal reaction histories in the first.

There is a timing trap here. The first ADP-Glo reagent terminates the kinase reaction. If a reaction runs above room temperature and then waits to equilibrate before that addition, the waiting period is still potentially part of the active reaction. Follow the manufacturer's equilibration guidance, but include that transition when qualifying the effective reaction time. Do not silently treat removal from an incubator as the stop event.

Once detection begins, keep the reagent additions, incubation intervals and measurement temperature reproducible. A plate equilibrated near 22°C should not encounter a chamber that warms substantially above the room during the batch. Turning the heater off does not show that this requirement has been met. Internal components can still supply heat, and an above-ambient-only heater cannot remove it.

Ask for evidence that the sample environment remains stable near the intended room-temperature target under sustained use. Heat removal, separation of heat sources from the plate and limited unnecessary airflow across open wells are useful capabilities. A chamber-temperature display is not a substitute for checking representative liquid-filled wells. Low airflow also does not establish humidity control.

Keep stacks, reagent reservoirs and plate queues in the qualification experiment. A bottle may be equilibrated while newly dispensed liquid and the plate are not. Record the actual intervals between additions and reading; a long-lived glow still has kinetics. Avoid applying an Alpha-assay temperature coefficient to ADP-Glo, or assuming that all parts of the coupled reaction respond identically to warming.

## Qualify the complete workflow

Run matched low, middle and high ATP/ADP mixtures through the complete detection sequence early and late in realistic instrument use. Alongside them, run kinase controls with matched reaction histories. Distribute positions so concentration is not inseparable from row, column or read order.

If both sets drift, investigate detection conditions, including temperature, timing, dispensing and reader response. If only the kinase-containing wells drift, focus on reaction history and components absent from the mock controls. These patterns guide follow-up; differences in matrix or timing can still complicate the diagnosis.

Challenge weak wells beside bright ones and verify proportional response across the required range. Crosstalk can lift the apparent activity of inhibited samples; compression can distort strong controls and intermediate responses. Neither a tight control CV nor a favorable Z′ establishes linearity.

Keep the ATP/ADP controls, thermal history and raw light values with the kinase results. They make it possible to distinguish a change in enzyme activity from a change in the chain of reactions used to observe it.

## References

1. Promega. [ADP-Glo Kinase Assay, TM313](https://www.promega.com/-/media/files/resources/protocols/technical-manuals/0/adp-glo-kinase-assay-protocol.pdf?rev=42e85ccab87244b395f4ecd1ad8e1616&sc_lang=en). Revised July 2023. Sections 3B, 4 and 5: conversion standards, reagent sequence, thermal guidance and interference controls.

2. Zegzouti H., Zdanovskaia M., Hsiao K. and Goueli S.A. [ADP-Glo: A Bioluminescent and Homogeneous ADP Monitoring Assay for Kinases](https://journals.sagepub.com/doi/full/10.1089/adt.2009.0222). Assay and Drug Development Technologies 7, 560–572 (2009). doi:10.1089/adt.2009.0222.
