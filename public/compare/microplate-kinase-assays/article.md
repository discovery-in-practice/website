# Microplate kinase assays: choose the event you need to measure

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/compare/microplate-kinase-assays/

ADP production, ATP depletion, substrate phosphorylation and target binding are useful measurements. They are not interchangeable evidence of kinase inhibition.

Start by asking where the assay signal comes from. An ADP assay can detect turnover without recognizing the substrate. A phospho-specific assay recognizes a modified substrate but depends on an antibody or development chemistry. A binding assay can find a compound that occupies a kinase without measuring phosphate transfer at all. Each format has a good use, and each can give a convincing result for the wrong reason.

This comparison covers major plate-based biochemical formats and the cellular assays used to follow them: ADP-Glo, Kinase-Glo, Adapta, Transcreener, HTRF KinEASE, LANCE Ultra, LanthaScreen, Z′-LYTE, Alpha, DELFIA, radiometric detection and NanoBRET target engagement. The reader matters when they preserve the required signal, timing and temperature. They cannot make two different biological endpoints equivalent.

## Headlines

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| A universal nucleotide assay is not automatically a target-specific assay.ENDPOINT · SPECIFICITY | ADP-Glo, Adapta and Transcreener detect ADP. Kinase-Glo detects ATP remaining. These readouts do not identify which protein consumed ATP or produced ADP. | Unwanted ATPase activity, enzyme contaminants or substrate-independent turnover can contribute. A phospho-substrate assay is more specific to its epitope but can miss relevant chemistry outside that epitope. | For purified-enzyme screening, broad substrate compatibility is valuable. For mixtures, lysates or immunoprecipitates, include no-substrate and appropriate enzyme controls, then confirm the intended phosphorylation event by another method. The assay's universality applies to detection, not biological attribution.Sources: K1, K3, K4, K5. |
| Low conversion favors product measurement over subtracting two large ATP signals.CALCULATION · SIGNAL WINDOW | Illustration: a reaction starts with 100 µM ATP and makes 2 µM ADP. An ATP-depletion assay must distinguish 100 from 98 µM; a product assay seeks the 2 µM ADP above its background. | This does not prove a particular ADP assay will work: ADP contamination, antibody selectivity and coupled-detection background still matter. The product measurement needs its own calibration. | Do not push a kinase toward substrate depletion merely to obtain a large ATP-loss window. Measure the signal and precision at conversion compatible with your kinetic question. The numbers illustrate the measurement problem; they are not comparative kit data.Sources: K1, K3. Constructed 2% conversion example. |

## Specifications

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| ADP-Glo reports ADP through a second set of enzymatic reactions.LUMINESCENCE · PRODUCT | ADP-Glo stops the kinase, removes remaining ATP, then converts ADP to ATP for luciferase detection. More activity normally means more light. The standard format supports ATP up to 1 mM; ADP-Glo Max extends to 5 mM. | The detection reactions are potential interference sites. The assay does not identify the phospho-acceptor or distinguish productive phosphorylation from other ADP generation. | Strong starting choice when substrate labels or suitable phospho-antibodies are awkward. Run kinase-free ATP/ADP mixtures with compound through the full sequence, and use standards at constant total nucleotide. A luciferase-only control misses interference upstream of light production.Sources: K1, K2, K19. |
| Kinase-Glo runs in the opposite signal direction.LUMINESCENCE · ATP DEPLETION | Kinase-Glo measures ATP left after the reaction: active kinase lowers light, and inhibition preserves it. Promega specifies ATP ceilings of 10 µM, 100 µM and 500 µM for Kinase-Glo, Plus and Max respectively. | A small decrease in a large starting ATP pool gives a narrow measurement window. Luciferase inhibition can reduce light and resemble greater kinase activity, rather than kinase inhibition. | Useful for compatible reactions with a robust ATP-depletion window and a simple detection addition. Check whether the conversion needed for detection still supports the intended interpretation. Kinase-Glo Max and ADP-Glo Max are different assays despite the shared suffix.Sources: K3, K2. |
| Adapta measures ADP by competitive TR-FRET.TR-FRET · PRODUCT | ADP displaces a fluorescent ADP tracer from europium-labelled anti-ADP antibody. More ADP gives less TR-FRET; a kinase inhibitor usually preserves the high-ratio state. | The antibody has some ATP affinity, so tracer and detection conditions must match the ATP background. Optical interference and disruption of antibody–tracer binding can also alter the ratio. | A useful alternative to enzymatically coupled luminescence, including appropriate lipid-kinase applications. Establish ATP-to-ADP conversion curves at each working ATP level; do not transfer a curve from one nucleotide background to another unchanged.Sources: K4. |
| Transcreener offers several optical ways to detect the same ADP product.FP · FI · TR-FRET | Transcreener ADP2 is available with fluorescence polarization, fluorescence intensity or TR-FRET detection. In FP, ADP displaces bound tracer, increasing its mobility and lowering polarization. | Each mode has different optical requirements and interference behavior. FP depends on calibration and adequate intensity; a stable polarization value at very low signal can still be imprecise. | Choose the readout that fits the compound collection and installed optics. Use the format-specific protocol and nucleotide standards. Two formats sharing the same competitive antibody chemistry provide less independent confirmation than changing both detection chemistry and the measured event.Sources: K5, K6. |
| HTRF KinEASE measures phosphorylation of an assay substrate.TR-FRET · PHOSPHO-SUBSTRATE | KinEASE TK combines biotinylated substrate, europium-cryptate phospho-antibody and streptavidin-XL665. Phosphorylation increases the proximity signal. STK variants address serine/threonine substrates. | A kinase must recognize the selected substrate, and detection must recognize the resulting phospho-epitope. The generic substrate is not necessarily the physiological substrate. | A strong option when a validated substrate/antibody combination is available and direct phospho-substrate readout is useful. Optimize enzyme, ATP, substrate and detection separately. The published TK workflow includes an EDTA stop and room-temperature detection incubation.Sources: K7. |
| LANCE Ultra and LanthaScreen activity are phospho-antibody assays, not ADP assays.TR-FRET · ACTIVITY | LANCE Ultra pairs a ULight-labelled substrate with a europium anti-phospho antibody. LanthaScreen activity similarly uses phospho-antibody TR-FRET with compatible labelled substrates. | Substrate concentration, label placement, antibody affinity and epitope recognition define the usable assay window. The enzyme's preferred native protein may behave differently from a labelled peptide. | Compare compatible kinase/substrate pairs, rather than judging the platforms by fluorophore brightness alone. These assays can separate substrate phosphorylation from unrelated ATP turnover. LanthaScreen activity must be distinguished from LanthaScreen Eu binding, described below.Sources: K8, K9. |

## Features

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| Z′-LYTE adds a protease decision after the kinase reaction.FRET · DEVELOPMENT CHEMISTRY | A labelled peptide is phosphorylated by the kinase. During development, unphosphorylated peptide is cleaved more readily, disrupting FRET. In the documented 445/520 emission ratio, inhibition raises the ratio. | A compound that inhibits the development protease can preserve FRET without increasing kinase activity. Compound fluorescence and incomplete development are additional concerns. | Useful when a validated peptide and development system fit the target. Include the prescribed phosphorylation and development controls, with compounds where needed. The important counterscreen addresses protease development as well as optical interference.Sources: K10. |
| Alpha brings phospho-recognition into a bead-proximity assay.ALPHA · PHOSPHORYLATION | Alpha kinase formats connect phospho-recognition and substrate capture to donor/acceptor beads. AlphaLISA SureFire Ultra extends the approach to endogenous phosphorylated or total proteins in cellular samples. | Bead capture, antibody recognition, compound quenching and temperature can affect the result. A cellular phosphoprotein change can reflect upstream signaling or protein abundance, not direct inhibition of the named kinase. | Useful when no-wash detection and a compatible antibody pair simplify a difficult substrate or cellular endpoint. Check total protein or other appropriate normalization, test detection interference and preserve thermal history. Follow the particular kit's incubation instructions.Sources: K11, K12, K18. |
| DELFIA trades washing for a different interference profile.TIME-RESOLVED FLUORESCENCE · WASH | DELFIA kinase formats capture substrate or protein and detect phosphorylation with a lanthanide-labelled antibody, using washing and enhancement before time-resolved measurement. | Washes can remove unbound compounds and background, but add handling and can lose material. Capture quality, wash consistency and antibody specificity remain important. | Worth considering when homogeneous assay interference is troublesome or the capture format suits the substrate. Evaluate plate handling and recovery alongside sensitivity. A wash-based confirmation can provide useful evidence when a no-wash hit affects the detection mixture.Sources: K13. |
| Radiometric phosphate transfer remains a distinct confirmation route.RADIOMETRIC · INCORPORATION | Gamma-labelled ATP supplies labelled phosphate to a substrate. Separation or proximity detection distinguishes incorporated label from unreacted material, according to the selected format. | Radioisotope handling, counting equipment, waste and separation requirements add operational burden. Recovery and nonspecific retention can bias the result. | Valuable when an unlabelled substrate and direct transfer measurement answer a question that optical formats leave unresolved. It is not automatically a perfect reference method: demonstrate linear reaction progress and control free-label background and substrate recovery.Sources: K14. |

## Capabilities

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| LanthaScreen Eu binding measures tracer displacement without requiring catalysis.BINDING · BIOCHEMICAL | A fluorescent kinase tracer and europium anti-tag antibody produce TR-FRET when associated with the kinase. Compounds that displace or alter tracer binding reduce that signal. | Apparent potency depends on tracer concentration and affinity, binding equilibration and target state. An allosteric compound is detected only if it changes the tracer interaction sufficiently. | Useful for low-activity or inactive kinases and for binding kinetics with suitable protocols. A binding IC50 is not a catalytic IC50, and neither is automatically Ki. Confirm functional consequences using a separate activity assay when inhibition is the objective.Sources: K15. |
| NanoBRET target engagement asks whether a compound reaches and binds its target in cells.BRET · LIVE CELLS | A fluorescent tracer binds a NanoLuc-tagged kinase; competitive binding changes donor-to-acceptor energy transfer. Promega provides kinase-specific live-cell target-engagement reagents. | Expression, tag behavior, tracer affinity, cell permeability and cellular ATP can influence occupancy. Reporter interference and cell condition still require controls. | A useful bridge between biochemical affinity and cellular pharmacology. Combine it with a downstream phospho-readout and cell-state controls. Target engagement establishes binding under those conditions; it does not alone establish pathway inhibition, selectivity or a useful phenotype.Sources: K16. |

## Downsides

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| ATP concentration can move potency without changing the compound.KINETICS · COMPARABILITY | For a simple reversible ATP-competitive inhibitor under initial-rate conditions, IC50 ≈ Ki × (1 + [ATP]/Km). At Ki = 10 nM, ATP/Km of 1 and 10 give 20 and 110 nM respectively. | This model assumes the appropriate competition mechanism, negligible inhibitor depletion and controlled other-substrate conditions. Tight binding, slow binding and complex kinase mechanisms need other treatment. | Record ATP, substrate, enzyme, incubation and conversion beside every potency value. A fivefold shift between formats can arise from conditions rather than bad reagents. These example values are calculated; they do not compare commercial assay accuracy.Conditional competitive-inhibition model; independently calculated. |
| Temperature belongs in the ADP-Glo reaction and detection specifications.THERMAL STABILITY · GLOW | Promega TM313 states that temperature affects luminescence intensity and stability and that inadequate equilibration can create center-to-edge differences. It calls for room-temperature equilibration before detection-reagent addition. | Equilibrating a warm reaction before adding the terminating reagent may extend its active reaction time. A heater switched off does not remove heat from electronics or establish stable sample temperature. | Qualify the transition to detection and then maintain the intended room-temperature sample environment throughout reading. Use representative liquid-filled wells during sustained operation. Keep plates, reservoirs and queues in the test; a chamber display alone does not establish the temperature history of the liquid.Sources: K1. Pre-stop timing and sustained-load checks are mechanistic recommendations. |

## Advantages

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| Laser excitation and simultaneous collection solve different TR-FRET problems.READER · EXCITATION AND RATIOS | A spectrally suitable pulsed laser can efficiently excite a lanthanide donor. Simultaneous donor/acceptor collection measures both channels during the same excitation events and observation interval. | More excitation helps only if it produces useful signal within linear response. Simultaneous collection cancels a shared proportional fluctuation, not unequal channel effects, optical leakage or all photon noise. | For HTRF, LANCE, LanthaScreen and Adapta, ask for low-signal precision at matched assay conditions and total acquisition time. Check wavelength, gating and raw channels. A laser can reduce the pulses needed; simultaneous detection can preserve ratio precision and remove a second channel acquisition. Neither creates a universal sensitivity multiplier.Sources: K17. Common-mode cancellation and practical consequences are optical analysis. |
| Simultaneous dual emission also matters for FP and BRET, but the optics differ.READER · TWO-CHANNEL MEASUREMENT | Transcreener FP requires parallel/perpendicular polarization information. NanoBRET requires donor and acceptor luminescence channels. Neither should be assumed compatible merely because a reader lists two detectors. | FP needs polarization calibration and adequate photon counts. BRET needs suitable spectral separation and linear donor detection; an excitation laser provides no benefit to the luminescence excitation mechanism. | Ask whether both relevant channels are collected together with assay-appropriate optics. Preserve raw intensity readings and calibration information. Simultaneity helps protect the relationship between channels, while channel-specific interference still needs to be investigated.Sources: K6, K16. Assay-specific optical interpretation; no hardware ranking. |
| Choose the first screen and the confirmation assay as a pair.WORKFLOW · HIT CONFIRMATION | An ADP-product screen can be followed by phospho-substrate detection. A TR-FRET hit can be followed with a different detection chemistry. Cellular engagement and phosphoprotein measurements address later questions. | Repeating the same interference mechanism in a second kit is weaker confirmation than changing the measured event. Different assay conditions can also create real potency shifts. | Plan counterscreens before screening. Match concentrations, solvent and reaction history where possible, then document differences that cannot be matched. A discordant result is a clue to mechanism, substrate dependence or detection interference; it is not an automatic vote for the brighter assay.Sources: K1, K7, K15, K16. Proposed assay-selection strategy. |

## Notable Details

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| A bright plate and a high Z′ do not establish linear detection.QUALIFICATION · DYNAMIC RANGE | Luminescent and fluorescent endpoints need enough usable range for both weak samples and bright controls. Interwell light leakage can lift neighboring weak wells; nonlinear response can compress high signals. | Control precision describes repeatability under the chosen conditions. It does not prove proportionality, absence of assay interference or correct biological attribution. | Test standards across the intended range, bright/weak adjacency, realistic queues and repeatability early versus late in a run. Qualify signal direction explicitly: ADP-Glo inhibition lowers light, whereas Kinase-Glo inhibition raises it. Preserve the unnormalized data so the screening team can inspect what the final score hides.Sources: K1, K3. Measurement qualification recommendations; experiments not performed. |

## About the sources

Manufacturer specifications describe the named product and configuration; they are not independent all-vendor benchmarks. Row-level source IDs link to the references below. Calculations and practical interpretations are identified separately. No physical comparison or procurement quotation is represented by these tables.

K1  [Promega — ADP-Glo Kinase Assay technical manual TM313](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/0/adp-glo-kinase-assay-protocol.pdf)

K2  [Promega — ADP-Glo Max Assay](https://www.promega.com/products/cell-signaling/signaling-pathway-assays/adp-glo-max-assay/)

K3  [Promega — Kinase-Glo Platform technical bulletin TB372](https://worldwide.promega.com/-/media/files/resources/protocols/technical-bulletins/101/kinase-glo-luminescent-kinase-assay-platform-protocol.pdf)

K4  [Thermo Fisher — Adapta Universal Kinase Assay user guide](https://assets.thermofisher.com/TFS-Assets/LSG/manuals/adapta_userguide_man.pdf)

K5  [BellBrook Labs — Transcreener HTS assays](https://bellbrooklabs.com/transcreener-hts-assays/)

K6  [BellBrook Labs — Transcreener frequently asked questions](https://bellbrooklabs.com/technical-resources/transcreener-faq/)

K7  [Revvity — HTRF KinEASE TK manual, revision 07 October 2025](https://resources.revvity.com/pdfs/rvty_ls_manual_62TK0PEB-62TK0PEC-62TK0PEJ.pdf)

K8  [Revvity — LANCE Ultra kinase assays](https://www.revvity.com/ask/lance-ultra-kinase-assays)

K9  [Thermo Fisher — Biochemical kinase assays](https://www.thermofisher.com/us/en/home/industrial/pharma-biopharma/drug-discovery-development/target-and-lead-identification-and-validation/kinasebiology/kinase-activity-assays.html)

K10  [Thermo Fisher — Z′-LYTE Tyr 5 user guide](https://documents.thermofisher.com/TFS-Assets/LSG/manuals/zlyte_tyr_5_man.pdf)

K11  [Revvity — Alpha kinase anti-phospho antibody assays](https://www.revvity.com/ask/alpha-kinase-anti-phospho-antibody-assays)

K12  [Revvity — Alpha SureFire no-wash cellular kinase assays](https://www.revvity.com/ask/alpha-surefire-no-wash-cellular-kinase-assays)

K13  [Revvity — DELFIA kinase assays](https://www.revvity.com/ask/delfia-kinase-assays)

K14  [Revvity — Radioactive in vitro kinase assays](https://www.revvity.com/ask/radioactive-vitro-kinase-assays)

K15  [Thermo Fisher — LanthaScreen Eu Kinase Binding user guide](https://assets.thermofisher.com/TFS-Assets/LSG/manuals/LanthaScreen_KinaseBinding_Assay_man.pdf)

K16  [Promega — NanoBRET target engagement technology](https://www.promega.com/resources/technologies/nanoluc-luciferase-enzyme/cellular-target-engagement/)

K17  [Revvity — HTRF technical booklet](https://resources.revvity.com/pdfs/gde-htrf-technical-booklet.pdf)

K18  [Revvity — Alpha troubleshooting tables](https://www.revvity.com/ask/alpha-troubleshooting-tables)

K19  [Promega — Kinase Enzyme Systems TM553](https://www.promega.com/resources/protocols/technical-manuals/500/tm553-kinase-enzyme-system-protocol/)
