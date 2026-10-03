# NanoBRET: proximity needs a good alibi

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/nanobret-assay-optimization-dual-emission/

Improve NanoBRET assays with expression controls, simultaneous dual-emission detection, linearity checks and stable temperature. Includes worked examples.

The compound produces a reproducible concentration-response curve, and the NanoBRET ratio falls. Before calling it a protein–protein interaction inhibitor, open the two emission channels separately.

Did the acceptor signal fall? Did the donor signal rise? Did both collapse? The ratio can look equally tidy in experiments that deserve quite different explanations.

NanoBRET makes molecular proximity measurable in living cells. Good assay development establishes what that proximity means. Good detection preserves the relationship between the two signals while the cells and the luciferase reaction continue doing things on their own schedule.

## What a NanoBRET ratio actually measures

In the HaloTag-based protein-interaction format, NanoLuc fused to one protein supplies the energy donor; a fluorescent ligand attached to a HaloTag fusion supplies the acceptor. Suitable proximity and geometry allow energy transfer. The reader collects donor and acceptor emission through separate optical channels. Promega calculates a corrected ratio by subtracting the ratio from a matched sample lacking fluorescent HaloTag ligand. [1]

For that format, write the correction as:

R subscript corrected = (A subscript labelled) divided by (D subscript labelled) − (A subscript unlabelled) divided by (D subscript unlabelled)

Here A and D denote the respective channel readings. Multiplying by 1,000 expresses the result in milliBRET units. The no-ligand control estimates the donor-related signal entering the acceptor channel; ordinary sample and reagent backgrounds also need appropriate controls. Neither control demonstrates that your two proteins specifically associate.

Nor is the corrected ratio a universal percentage of bound protein. It depends on labeling, tag geometry and the optical response of the instrument. Compare samples under a validated configuration before comparing their biological meaning.

## Proximity needs a biological control

High expression can place unrelated molecules close enough to transfer energy. This matters especially when proteins occupy a restricted space such as a membrane. A useful negative control therefore shares the relevant cellular location; a protein elsewhere in the cell may provide a reassuringly low signal without testing the real alternative explanation.

Expression titrations help. Promega describes holding donor plasmid constant while increasing acceptor plasmid, looking for a saturating response and testing an appropriate negative partner. [1] Measure expression as well as DNA input: fixed nanograms of plasmid do not guarantee fixed protein abundance.

A saturation curve needs scrutiny too. Lan and colleagues showed that conventional membrane-protein BRET titrations could produce hyperbolic curves from non-associating proteins. Their experiments separated acceptor density from donor abundance and acceptor-to-donor stoichiometry. A saturating curve alone did not settle the association question. This was a membrane-BRET study, not a blanket verdict on every NanoBRET PPI assay. [2]

Use a combination of controls that attacks your particular alternative explanation: an interaction-deficient mutant with verified expression and localization, a suitable competitor, an unrelated partner in the same compartment, or an independent interaction assay. A mutation that removes the signal by misfolding the protein has answered a different question.

Sensitive detection can make lower expression experimentally practical. White and colleagues demonstrated NanoBRET measurements with a genome-edited donor controlled by its endogenous promoter, while the acceptor was introduced separately. That did not make every component endogenous, but it reduced one important source of artificial abundance. [3] Ask how little expression supports a useful assay window, rather than automatically selecting the brightest construct.

## Collect both emissions on the same clock

Simultaneous dual-emission detection collects donor and acceptor light over the same interval. That is especially useful in NanoBRET because the luciferase reaction can change while the reader is changing channels.

Consider a deliberately simple model. The underlying BRET relationship stays constant, both channels remain linear, and backgrounds are negligible. A common brightness factor g(t) multiplies both signals:

A(t) = a g(t);   D(t) = d g(t)

Simultaneous collection over identical windows gives a/d even if brightness changes during the interval: both integrated signals contain the same integral of g(t). Sequential acquisition instead combines different portions of that history. The ratio can change without any change in the underlying interaction.

Suppose donor and acceptor readings would be 100,000 and 10,000 arbitrary units at the first measurement. Both fall by 10% before the second channel is collected. These are illustrative readings, not measured decay rates for a NanoBRET reagent.

| Acquisition arrangement | Acceptor used | Donor used | Raw ratio |
| --- | --- | --- | --- |
| Both channels together initially | 10,000 | 100,000 | 0.100 |
| Donor first, acceptor later | 9,000 | 100,000 | 0.090 |
| Acceptor first, donor later | 10,000 | 90,000 | 0.111 |

The same unchanged interaction appears 10% lower or about 11% higher depending on channel order. A rapid channel switch during a stable endpoint may make this negligible. Collecting one whole plate before switching channels can make the separation much longer. Find out which sequence the protocol actually uses.

Simultaneous detection removes this particular timing mismatch. It also preserves the pairing when the interaction itself changes rapidly, although a finite integration still averages that biology over time. Independent photon noise, insufficient acceptor signal and unequal channel drift remain. There is no excitation lamp in this experiment whose fluctuations need correcting.

There is a throughput benefit too. At 0.5 seconds per channel, 384 sequentially measured wells require 384 seconds of collection; simultaneous collection requires 192 seconds. Those are calculated collection times only. Motion, settling, injection and software overhead mean that the whole plate run need not become twice as fast.

## The brighter channel can be the problem

NanoBRET asks the instrument to measure a bright donor and a weaker acceptor faithfully at the same time. That calls for both efficient light collection and enough verified linear range in each channel.

Suppose the donor should read 100,000 but compression makes it read 80,000, while the acceptor correctly reads 10,000. The ratio rises from 0.100 to 0.125: an apparent 25% increase caused entirely by the denominator. This constructed example assumes the acceptor remains linear and backgrounds are negligible. Simultaneous acquisition cannot repair a nonlinear detector response.

Check the donor's brightest expected samples, including controls and expression outliers. Then check whether the weakest acceptor samples have enough precision to distinguish the biological effect. A large donor number cannot compensate for an acceptor channel dominated by background. Keep the optical configuration and channel gains documented when transferring the assay; an apparently identical raw ratio is not a calibration standard.

Low interwell light leakage matters for the same reason. A weak well beside a bright one can inherit light with a different donor-to-acceptor balance. A spatial check with bright wells, low controls and remote blanks tests something that repeated measurements of a uniform plate cannot reveal.

## Stable temperature belongs in the protocol

Long-lived luminescence still requires controlled conditions. In its manual for Endurazine and Vivazine live-cell substrates, Promega explicitly identifies plate-temperature gradients as a source of well-to-well variability. It discusses plate cooling during transfers, suitable buffering outside a carbon-dioxide incubator, and evaporation control during reader residence. [4]

For Vivazine-based NanoBRET kinetic measurements, the PPI protocol includes a 30–60-minute equilibration at 37°C and warns that inadequate substrate stabilization can cause an initial luminescence rise. [1] That instruction belongs to that kinetic workflow; it is not a universal incubation requirement for every NanoBRET experiment.

Standardize the transfer and measurement conditions as carefully as the compound incubation. A stable chamber, limited heat transfer from electronics, low unnecessary airflow and appropriate evaporation control are useful engineering choices. Verify the resulting behavior with your plate, volume and run duration. The displayed chamber temperature does not establish the temperature of every sample.

In the simple model above, simultaneous collection cancels a proportional brightness change; it cannot rule out changes in binding, trafficking or cell physiology caused by temperature. A stable ratio therefore still needs matched cell conditions.

## A practical NanoBRET qualification run

Before committing a compound collection, make a small plate answer the questions that matter:

- Include matched no-fluorescent-ligand controls and a biological negative that tests the proposed interaction. Keep both emission channels in the exported data.

- Examine more than one expression condition. Check that the response survives a reduction in abundance and remains consistent with the intended biology.

- Compare acquisition arrangements on equivalently prepared samples, balancing sample age and read order. Report both per-channel integration and total cycle time; use actual timestamps when testing changing signals.

- Verify bright-donor linearity, weak-acceptor precision and performance beside bright neighbors. Choose settings from that range of samples.

- Run a realistic thermal and handling sequence, including the waiting time and repeated reader residence expected during screening.

For a hit, put the donor trace, acceptor trace and corrected ratio beside one another before interpreting the fitted potency. If the ratio changes while the donor collapses, you have a useful diagnostic lead. The expression and specificity controls establish how confidently you can attribute the response to the intended interaction. Simultaneous detection keeps a channel-timing artifact out of that interpretation.

## References

1. Promega. [NanoBRET Protein:Protein Interaction System, TM439](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/101/nanobret-proteinprotein-interaction-system-protocol.pdf?rev=a023285c290141eb923f7fe914521505). Revised October 2023. Sections 4B, 5C, 6, 7 and 10B cover detection, kinetic equilibration, ratio correction and assay controls.

2. Lan TH et al. [BRET evidence that β2 adrenergic receptors do not oligomerize in cells](https://www.nature.com/articles/srep10166). Scientific Reports 5, 10166 (2015). doi:10.1038/srep10166.

3. White CW et al. [Using nanoBRET and CRISPR/Cas9 to monitor proximity to a genome-edited protein in real-time](https://www.nature.com/articles/s41598-017-03486-2). Scientific Reports 7, 3187 (2017). doi:10.1038/s41598-017-03486-2.

4. Promega. [Nano-Glo Endurazine and Vivazine Live Cell Substrates, TM550](https://www.promega.com/-/media/files/resources/protocols/technical-manuals/500/nano-glo-endurazine-and-vivazine-live-cell-substrates-technical-manual.pdf?rev=6bcfcbefee4f4cad8a6a14a6697ae39b). Revised October 2025. Sections 3D–3F discuss measurement conditions, thermal gradients, evaporation and background.
