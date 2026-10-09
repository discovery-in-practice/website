# Let the reaction and the detector use different concentrations

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/kinase-assay-reaction-detection-dilution/

Optimize kinase reactions and detection separately. Follow a worked dilution example, account for total substrate and validate stopping, timing and temperature.

The substrate concentration that suits the kinase may be too high for the detection assay. This disagreement can consume a surprising amount of assay-development time, particularly when both reactions have been assigned to the same well and the protocol has begun to feel permanent.

A high substrate concentration may be appropriate for the enzymology or the scientific question. The capture chemistry used to measure product has its own binding capacities and useful concentration range. Trying to satisfy both with one concentration can produce a compromise that serves neither particularly well.

The AlphaScreen practical guide offers a straightforward option: perform the enzyme reaction at a suitable substrate concentration, then transfer a diluted aliquot into the detection assay. [1] Separating the stages lets each process use suitable conditions, provided the concentration accounting is explicit. Every concentration needs a named stage, and the endpoint has to survive the journey between them.

## Follow one aliquot

Consider a constructed kinase reaction containing 2 micromolar biotinylated peptide in 20 microliters. Suppose the enzyme converts 5% of that peptide to phosphorylated product. The reaction now contains 100 nM product and 1,900 nM unmodified substrate. These illustrative values are not a recommended operating point for a particular kinase or kit.

Add 5 microliters of a suitable, validated stop solution. The total volume becomes 25 microliters, so product falls to 80 nM and total peptide to 1,600 nM. Nothing has been lost in this calculation; the same molecules occupy more liquid.

Transfer 2.5 microliters of the stopped mixture into a detection well and bring that well to 20 microliters with the appropriate reagents and buffer. This is an eightfold dilution of the stopped mixture. Including the earlier stop addition, the overall dilution relative to the enzyme reaction is tenfold:

D = (25) divided by (20) × (20) divided by (2.5) = 10

The detection well contains 10 nM product. It also contains 190 nM unmodified peptide. A spreadsheet that follows only the product can miss the larger population competing for capture sites.

| Stage | Product | Total biotinylated peptide |
| --- | --- | --- |
| Enzyme reaction | 100 nM | 2,000 nM |
| After stop addition | 80 nM | 1,600 nM |
| Detection, tenfold overall dilution | 10 nM | 200 nM |
| Detection, hundredfold overall dilution | 1 nM | 20 nM |

The last row adds a separate tenfold dilution of the stopped mixture before the same transfer into detection reagents. It illustrates the accounting, not validated recovery. Use practical transfer volumes and a qualified diluent; a vanishingly small direct transfer is rarely an attractive substitute for an intermediate dilution.

## Count the unmodified substrate

In this example, both phosphorylated and unmodified peptides carry biotin. Both can occupy streptavidin sites even though only the phosphorylated population should recruit the phospho-specific detection partner. Ten nanomolar product can therefore arrive accompanied by enough total peptide to disrupt the capture system.

Revvity's Alpha kinase guidance gives an approximate theoretical streptavidin-donor capacity of 30 nM at 20 micrograms per milliliter beads, with lower practical capacity possible for larger substrates. It cautions that excessive substrate or antibody can generate a hook effect. [2] The 200 nM total peptide in our tenfold-diluted example would exceed that theoretical benchmark. Twenty nanomolar after hundredfold dilution is a candidate to test, not proof of compatibility.

This is why a product-only standard curve in clean buffer may be misleading. The real reaction also contains unmodified substrate, ATP, salts, enzyme and stopping reagent. Build conversion standards that replace unmodified substrate with known phosphorylated product while keeping total peptide and the relevant matrix constant. Check whether the response can distinguish the conversion levels the screen needs.

Capture reagent requirements can change across a substrate titration. The HTRF KinEASE-TK manual explicitly separates enzyme-stage and final detection concentrations and adjusts streptavidin-XL665 during substrate optimization. It also asks for corresponding negative controls because changing that reagent can change background. [3] A substrate titration consequently deserves a detection check at every materially different condition.

## Choose the enzyme conditions for the question

Dilution creates flexibility; it does not establish the right reaction conditions. Choose ATP, peptide, enzyme and incubation time with the intended pharmacology in mind. An ATP-competitive inhibitor can show a different apparent potency when ATP changes. A long incubation with extensive conversion can complicate interpretation of an endpoint as an initial reaction rate.

Establish a useful time course and conversion window before settling the detection dilution. If a particular substrate concentration is needed to investigate mechanism, preserve it during the enzyme reaction and ask whether the resulting product can be measured after a validated transfer. If the goal is a screening assay, justify the reaction conditions for that goal rather than choosing them solely to maximize counts.

Keep compound concentrations stage-specific as well. A compound tested at 10 micromolar during the enzyme reaction would be at 0.1 micromolar after hundredfold dilution into detection. That can reduce direct detection interference, but it also makes a poorly matched counterscreen dangerously reassuring. Test the detector at the concentration and matrix it actually sees, and retain the original reaction concentration when reporting potency.

## Validate the stop before transfer

An enzyme that remains active can continue making product after transfer. Its rate may fall, but even modest residual activity can matter when the measured product concentration is small. Mixing, transfer order and waiting time then become part of the apparent activity.

For illustration, 0.2 nM additional product per minute in a detection well would add 2 nM over ten minutes. Against an intended 10 nM endpoint, that is a 20% change. This is a simple conditional calculation; dilution does not imply that particular residual rate.

Validate the stop in the complete workflow. Hold matched stopped samples for different intervals before detection and test the longest delay the batch can realistically encounter. Where practical, use an independent endpoint check or known product standards to distinguish continuing catalysis from detection-complex development. A signal that drifts after stopping does not identify its own cause.

EDTA is used to stop suitable metal-dependent kinase reactions in both the Alpha guidance and the KinEASE-TK protocol. [2,3] Its effectiveness depends on the relevant metal and chelator concentrations. Subsequent additions must not restore conditions that permit appreciable catalysis. A stop reagent must also preserve the product and remain compatible with capture and detection. Verify those properties under the final assay conditions.

## The reaction temperature can end before the read temperature begins

These stages can also use different temperatures. Revvity's Alpha kinase outline specifies a temperature appropriate to the enzyme reaction, followed by EDTA quenching and a one-hour room-temperature bead incubation. [2] The KinEASE-TK manual similarly distinguishes a kinase-dependent reaction at room temperature or 37°C from detection incubation at room temperature. [3]

A reaction run at 37°C therefore does not automatically justify reading the completed detection assay at 37°C. Allow the specified detection conditions to develop after a validated stop. For temperature-sensitive Alpha chemistry, consistent near-room-temperature detection and a stable measurement chamber help keep signal changes from becoming confused with product changes. [1]

Qualification should follow a real batch through stop addition, dilution, equilibration and reading. A warm stack, cool reagent addition or gradually warming chamber can give nominally identical wells different temperature histories. Record allowable waits and verify liquid behavior under the intended workflow. Cooling alone is an unreliable way to declare a reaction finished.

## What better detection buys

Sensitive detection can make greater dilution practical, opening a useful separation between enzyme conditions and capture conditions. A wide verified linear range then helps retain both low-product samples and higher-conversion controls without compressing the bright end. There are two ranges to qualify: the chemistry's concentration-response range and the instrument's response to incident light.

For a ratiometric TR-FRET endpoint, simultaneous donor and acceptor acquisition can reduce errors from changes shared by the two channels between sequential readings. Appropriate excitation and efficient photon collection help at the diluted endpoint. Preserve both raw channels alongside the ratio so that channel-specific interference or compression remains visible.

Low optical crosstalk becomes particularly valuable when dilution places inhibited wells near the background and active controls remain bright. Preventing neighboring photons from entering those weak measurements protects their precision. Subtracting an average leakage estimate cannot remove the photon noise those photons contributed.

Before transferring the assay to a screening queue, put the reaction concentration, stop dilution and detection concentration in separate columns of the protocol. Include the unmodified substrate, compound and matrix components. That table can expose an excess of competing substrate before it appears as an unexplained loss of signal.

## References

1. PerkinElmer. [AlphaScreen practical guide](https://www.urmc.rochester.edu/MediaLibraries/URMCMedia/hts/documents/AlphaScreenPracticalGuide.pdf). Separate enzyme and detection concentrations: PDF p. 27 / printed p. 21. Temperature sensitivity: PDF p. 32 / printed p. 26.

2. Revvity. [Alpha kinase anti-phospho antibody assays](https://www.revvity.com/ask/alpha-kinase-anti-phospho-antibody-assays). Protocol-in-brief and Tips. Capacity estimates apply to the stated bead concentration and do not replace substrate-specific optimization.

3. Revvity. [HTRF KinEASE-TK manual](https://resources.revvity.com/pdfs/rvty_ls_manual_62TK0PEB-62TK0PEC-62TK0PEJ.pdf). Revision 07, October 2025. Reaction/detection stages and temperature: pp. 1, 3–4; substrate-dependent detection optimization: pp. 5–6. This kit's instructions are distinct from the hypothetical Alpha dilution calculation.
