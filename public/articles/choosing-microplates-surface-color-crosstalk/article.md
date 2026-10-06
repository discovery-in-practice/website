# Choosing a microplate: the plastic is part of the assay

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/choosing-microplates-surface-color-crosstalk/

Choose microplates by surface, color, geometry and working volume. Use practical tests to separate useful signal from adsorption, crosstalk and evaporation.

Two plates have the same well count, the same color and reassuringly similar catalog photographs. The assay produces twice as much light in one of them. That difference needs an explanation before selecting the plate.

First establish what changed. More light might reflect better collection. It might also reflect a different amount of protein remaining in solution, a changed cell population, higher background or light arriving from the well next door.

Microplate selection is part of assay development because the plate participates in both the chemistry and the measurement. The Assay Guidance Manual treats surface properties, optical behavior and plate handling as connected decisions. [1] That is a more useful starting point than “white for luminescence, black for fluorescence,” although those familiar rules have their uses.

## Choose the surface before choosing the color

Begin with what must happen at the wall. An ELISA may depend on immobilizing protein there. A homogeneous binding assay may depend on keeping the same protein in solution. Adherent cells need a surface that supports the intended attachment and phenotype. Those requirements can point to different plates before the optics enter the discussion.

“Tissue-culture treated,” “high binding” and “low binding” are functional choices. They are not successive grades of laboratory quality. Corning, for example, describes a hydrophilic nonbinding treatment intended to reduce nonspecific molecular interactions, including protein adsorption. That does not establish that every reagent in every buffer will be unaffected. [2]

The quantities can be surprisingly small. A 10-microliter well containing a protein at 1 nM contains 10 femtomoles. For a 50-kDa protein, that is only 0.5 nanograms in the entire well. In a constructed example, loss of 0.1 nanograms to surfaces would remove 20% of the nominal protein amount.

That is a mass balance, not a prediction of how much a particular plate will bind. It explains why a seemingly minor surface interaction deserves attention when working at low concentrations. A reader cannot collect photons from a complex that never formed because one partner left the solution.

Compare suitable surface treatments with the actual reagents, buffer, concentration and contact time. Inspect the titration curve and reference-compound behavior as well as the maximum signal. A blocking protein or detergent may help in some assays, but it can also affect binding or enzyme activity; test the remedy rather than treating it as inert.

## Color changes where the light goes

White walls tend to return more light toward the detection path. Black walls absorb more stray light, often reducing fluorescence background and interwell leakage at the cost of signal. These are useful starting tendencies, not a ranking of assay quality. [3]

Time-resolved fluorescence provides a good exception to the simple color rule. Revvity's HTRF development guide recommends white plates while also listing validated black formats. Its discussion distinguishes increased counts from the signal-to-noise comparison. Use the plate recommendation for the particular assay and reader, then verify it at the intended volume. [4]

A clear bottom is another deliberate trade. It permits microscopy or bottom reading, but changes the optical path. Promega's CellTiter-Glo 2.0 manual notes diminished signal and greater crosstalk with opaque-walled, clear-bottom plates compared with the recommended opaque format. That is a reason to test the exact construction, not a prohibition on clear bottoms when imaging is needed. [5]

Even an empty plate can contribute light. Revvity discusses phosphorescence from plate plastic and recommends dark adaptation for some white-plate luminescence workflows. [6] Include matrix-filled blanks with the same light exposure and handling history. A blank read immediately after opening a package is not necessarily representative of the blanks halfway through a screening queue.

## A tiny leakage percentage can be a large assay error

Suppose a bright well measures 1,000,000 units, while a neighboring weak sample would otherwise measure 100. If 0.1% of the bright-well signal appears in that neighbor, it contributes another 1,000 units. The weak sample now reports 1,100: eleven times its intended signal.

These are illustrative numbers, not a specification for any plate or reader. The point is that leakage should be judged against the receiving well's useful signal, not only against the much larger source.

A practical plate comparison needs both bright wells and quiet neighbors. Use isolated bright wells surrounded by matrix blanks, with remote blanks for comparison. Add a checkerboard pattern to examine the combined contribution of multiple neighbors. Test more than one brightness and include the intended detector settings.

For an isolated source, a simple operational estimate is:

Leakage fraction = (Adjacent blank − Remote blank) divided by (Bright well − Remote blank)

This estimates the effect in that layout, optical configuration and signal range. Replicate the blank measurements, inspect directional differences and avoid quoting a stable percentage when the denominator is small or the response is nonlinear.

Elevated neighboring wells do not, by themselves, prove optical leakage. Liquid carryover, splashing and wicking can produce spatial patterns too. The Assay Guidance Manual explicitly discusses these routes of cross-contamination. [1] Prepare the optical test with careful handling and independent controls; use follow-up layouts or timing tests to separate light transfer from material transfer.

Revvity's luminescence comparisons show why plate construction and color merit testing together: reductions in crosstalk can come with reductions in useful signal, and the balance differs among formats. [6] A dimmer plate can still support a better assay if it preserves the measurements that determine your hits.

## Working volume changes the optical experiment

The maximum capacity in a catalog is not the recommended assay volume. Nor is a low-volume plate simply a standard plate with less liquid in it. Well depth, taper and cross-sectional area can differ. These changes affect liquid height and the reader's view of the sample. [1]

Revisit focus or measurement height when changing plate geometry or volume. Test representative low, intermediate and high signals, and inspect uniformity and bright-neighbor effects. The setting with the largest count in one well need not give the best precision across a plate.

Good focusing and effective isolation of neighboring wells are particularly valuable when the optical target is small. They should be judged together: efficient collection from the intended well is the objective. A broad collection region that gathers additional neighboring light can make a brightness optimization misleading.

Specify the actual plate definition in the reader software. Check compatibility with the liquid handler as well. A shallow well can put the bottom closer to a dispensing tip or pin tool; a plate that fits the carrier can still be wrong for the programmed motion. The manual flags this problem for low-volume formats. [1]

## The plate also spends time outside the reader

Miniaturization makes modest absolute volume losses consequential. If a 5-microliter reaction loses 0.5 microliters of water, its remaining nonvolatile solutes become about 11% more concentrated, assuming no precipitation, adsorption or reaction consumes them:

(C subscript final) divided by (C subscript initial) = (V subscript initial) divided by (V subscript final) = (5) divided by (4.5) ≈ 1.11

The same half-microliter loss from 50 microliters raises concentration by only about 1%. This comparison assumes equal absolute losses to illustrate the arithmetic; actual evaporation depends on geometry, environment and time.

Evaluate lids or seals, exposed dwell time and the real queue. Dry moving air and heat transfer can increase evaporative stress. A measurement chamber that limits unnecessary airflow and heat reaching the plate can help, but a chamber specification alone does not establish the liquid's temperature or volume stability. Check representative wells or sacrificial plates under the actual workflow. [1]

Temperature matters even without measurable evaporation. Promega specifically calls for temperature equilibration in CellTiter-Glo 2.0 and warns about gradients associated with plate handling and stacking. [5] Keep these histories comparable when testing plate candidates. Otherwise a thermal difference can be mistaken for a better plastic.

## A small comparison that earns its plate budget

Choose two or three plausible candidates based on biology and the assay manufacturer's guidance. Compare them with common reagent stocks and balanced preparation/read order. If candidates differ in several features, treat the result as a comparison of complete products; it cannot isolate which feature caused the difference.

Include four complementary checks:

- Matrix blanks and representative low, intermediate and high assay signals, using the intended volume.

- A complete assay titration and reference compound, to reveal changes hidden by a single bright control.

- Isolated bright wells and a checkerboard with blanks, to examine spatial contamination.

- A uniformity plate or distributed controls after realistic incubation and queue time, to expose positional effects.

For each candidate, retain raw signals, variability, background, reference-compound behavior and timing. Optimize legitimate reader settings for the candidate, record them, and compare the resulting usable performance. Match read time or required precision when the operational trade matters.

Confirm the preferred plate with another lot before committing a long campaign. Record manufacturer, catalog number, lot, surface, bottom construction, working volume and reader settings. Keep an approved alternative if continuity of supply matters, but qualify it as an assay change.

The winning plate is the one that preserves the biology and measures it reliably through the workflow. The brightest plate has only won the brightness comparison.

## References

1. Auld DS and colleagues. [Microplate Selection and Recommended Practices in High-throughput Screening and Quantitative Biology](https://www.ncbi.nlm.nih.gov/books/NBK558077/). Assay Guidance Manual, June 1, 2020. Supplied project compilation, PDF pp. 1309–1344; surfaces, geometry, handling, lots and positional effects.

2. Corning. [Nonbinding surface treatment](https://www.corning.com/cala/en/products/life-sciences/products/microplates/biochemical-assay-microplates/non-binding-surface.html). Mechanism and intended applications. No universal adsorption capacity is assumed in the worked example.

3. Corning. [Microplates Product Selection Guide](https://www.corning.com/content/dam/corning/catalog/cls/documents/selection-guides/CLS-DD-081.pdf), especially the color and well-geometry guidance; an earlier selection guide is also retained in the project library.

4. Revvity. [A Guide to Developing Biochemical Assays with HTRF PPi Reagents](https://resources.revvity.com/pdfs/gde-reagents-htrf-ppi-assays.pdf), pp. 30–31. Plate types, working volumes and white/black comparisons within the guide's scope.

5. Promega. [CellTiter-Glo 2.0 Cell Viability Assay Technical Manual TM403](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol.pdf?la=en). Revision 1/23, printed p. 10. Plate construction, crosstalk and temperature equilibration.

6. Revvity. [Microplates for Luminescence Assays](https://www.revvity.com/ask/microplates-luminescence-assays). Phosphorescence and plate-dependent signal/crosstalk comparisons. Numerical examples in this article are constructed calculations, not measurements from this source.
