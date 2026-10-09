# How do I test for injector carryover in a plate reader?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/test-plate-reader-injector-carryover/

Test injector carryover with sequential blanks and positive-control recovery, including residues that suppress rather than increase luminescence.

After running the previous reagent through the injector, perform the intended changeover and test the next dispenses for contamination and assay suppression. Include controls prepared without the challenged fluid path. An inhibitory residue can leave the blank unchanged while suppressing the next positive sample. Promega documents exactly that problem for some dual-luciferase reagent workflows. [1,2]

## Identify what the injector actually carries

Many reader injectors draw reagent from a reservoir and dispense it into wells. They do not aspirate each sample as a liquid-handling pipette might. In that arrangement, carryover can originate in tubing, pumps, valves or the outlet after a reagent change; splash or accidental contact can introduce additional contamination. The relevant test follows the actual fluid path. [3]

Record the reagent sequence, contact time, hold time, tubing and pump configuration, wash procedure and prime volume. Test realistic difficult transitions. A water-to-dye demonstration alone cannot establish cleaning for a proteinaceous or strongly adsorbing reagent.

## Collect successive dispenses in fresh receivers

First establish uncontaminated baseline dispenses from a clean path or a suitable independent dispenser. Expose the test path to the challenge reagent under the intended conditions, then apply the proposed manufacturer-compatible changeover procedure. Collect successive next-reagent dispenses in fresh wells or vessels, labeling their order and volume in µL, plus cumulative volume in µL or mL.

Measure a suitable chemical or optical marker against a calibration prepared in the receiving matrix. If response is linear and comparable, background-corrected residual signal divided by the challenge reference signal can estimate carryover. Correct for any differences in dilution or collected volume. Report each dispense in order; an acceptable sequence average can conceal a failed first well.

Define the acceptable residual concentration from the next assay's tolerance. There is no universal carryover percentage that proves compatibility with every assay.

## Include a positive-control recovery test

Promega's Dual-Luciferase manual describes Stop & Glo components adsorbing reversibly to plastic surfaces and later suppressing firefly luciferase when another reagent passes through the system. [1] Nano-Glo Dual-Luciferase likewise requires dedicated reagent paths and warns against using its Stop & Glo injector for firefly-luciferase or Ultra-Glo reagents, including CellTiter-Glo. [2]

For a permitted changeover, challenge a fixed positive assay control with each collected dispense and compare recovery with uncontaminated reagent. An unchanged blank accompanied by reduced positive-control light reveals inhibition that a blank-only check would miss. Include weak and strong controls if the assay uses a broad signal range. This is a proposed qualification design; it does not override a manufacturer's dedicated-line requirement.

## Separate fluid residue from optical leakage

Read collected receiver samples away from the bright challenge wells, ideally on another plate, and include neighboring blanks where appropriate. Contamination remains with the collected liquid; optical crosstalk depends on the measurement arrangement. Relocation is a useful diagnostic, though adsorption or reaction can change the contaminant with time.

Prevent bright-well leakage physically where possible. Correcting its average contribution does not remove the associated photon noise, and an optical artifact should not be mistaken for a failed wash.

Use only cleaning agents and procedures compatible with both the injector and reagent manufacturer instructions. Repeat the qualification after relevant tubing, chemistry or procedure changes. Save the sequential-dispense and positive-control recovery results with the protocol, including the acceptance limits.

## References

1. Promega. [Dual-Luciferase Reporter Assay System, TM040](https://www.promega.com/-/media/files/resources/protocols/technical-manuals/0/dual-luciferase-reporter-assay-system-protocol.pdf), revised August 2023, sections 4.A–4.B and 6.D. Timing, injectors and Stop & Glo reagent carryover.

2. Promega. [Nano-Glo Dual-Luciferase Reporter Assay, TM426](https://www.promega.com/-/media/files/resources/protocols/technical-manuals/101/nanoglo-dual-luciferase-reporter-assay-protocol.pdf), revised February 2024, sections 3.A–3.H and 4.C. Temperature, mixing, injection, reagent carryover and coincidence-reporter design.

3. Tecan. [Infinite 200 PRO Instructions for Use, revision 1.4](https://www.tecan.com/hubfs/30125944_IFU_Infinite200-PRO_V1_4_English_German-Warnings.pdf), June 2021, pp. 42–43, 92–99 and 159. Pathlength correction, injector operation and application-dependent cleaning.
