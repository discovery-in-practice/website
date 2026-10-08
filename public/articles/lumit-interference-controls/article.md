# Lumit: no wash steps doesn't mean no interference

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/lumit-interference-controls/

Investigate Lumit results with dilution series, matrix controls and tests that separate antibody recognition, light production and detector response.

A diluted sample gives more light than the undiluted sample. Before blaming the pipette, consider the possibility that the dilution worked perfectly. In a homogeneous immunoassay, dilution changes the concentration of the analyte and everything else carried into the well. A matrix component may change the light output more than the analyte does.

Lumit removes the wash steps from many familiar immunoassay workflows. That saves handling and makes large experiments easier to run. It also means that sample components remain present during detection. Good troubleshooting starts by asking whether an unexpected signal comes from the analyte, antibody recognition, the light-producing reaction or the measurement itself.

## The useful complex is the one that makes light

In a typical two-antibody Lumit assay, binding to the analyte brings the small and large luciferase fragments close enough to form an active enzyme. Some formats label the analyte-specific antibodies directly; cellular systems can use labelled secondary antibodies with an appropriate primary pair. Hwang and colleagues demonstrated the latter approach for total and phosphorylated cellular proteins. [1] Check which architecture your assay uses before borrowing a control from another kit.

For a sandwich format, binding more antibody does not necessarily mean making more productive complexes. At sufficiently high antigen concentrations, the two antibody populations can become occupied on separate antigen molecules. There is then less opportunity to bring the luciferase fragments together on the same target.

Promega explicitly describes this high-dose hook effect in its Lumit glucagon troubleshooting guide: excessive glucagon can yield less light than a lower concentration. [2] Dilution can move the sample back toward the useful assay range and increase signal. That is a documented kit-specific example, not a claim that every Lumit assay hooks at the same concentration or even within its intended working range.

Once a response turns downward, one light value can correspond to more than one antigen concentration. Curve fitting cannot resolve that ambiguity. Keep unknowns on the validated portion of the calibration curve.

## Dilution is a diagnostic experiment

Test a suspicious sample at several dilutions, using a validated diluent and consistent assay volumes. Convert each reading to concentration using the calibration curve, then account for the sample dilution:

C subscript original = D C subscript measured

Here D is the pre-assay dilution factor. C_measured must already use the same concentration convention as the standards. If the calibration labels refer to concentrations before detection reagent addition, do not apply that reagent-volume factor a second time.

Consider these invented results, with every measured concentration assumed to lie within the calibrated range:

| Sample preparation | Dilution factor | Measured ng/ml | Corrected ng/ml |
| --- | --- | --- | --- |
| Undiluted | 1 | 20 | 20 |
| Twofold dilution | 2 | 25 | 50 |
| Fourfold dilution | 4 | 24 | 96 |
| Eightfold dilution | 8 | 12.5 | 100 |

The corrected estimates approach agreement only after sufficient dilution. The undiluted value would badly understate the amount suggested by the later dilutions. The small difference between 96 and 100 would need assessment against the assay's actual precision and predefined acceptance criteria.

This pattern is consistent with relief of interference or an antigen-excess effect. It does not prove which one occurred. Dilution also changes pH buffering, detergent concentration, protein interactions and optical absorption. Document what changes in the experiment before naming the mechanism.

Nor does agreement between two dilutions establish absolute accuracy. Both might share a calibration bias, or the standard protein might behave differently from endogenous material. Dilutional agreement is evidence about consistency under those conditions. Assess it alongside spike recovery and relevant controls.

## A buffer standard does not reproduce a treated sample

Promega's Lumit labeling guide recommends testing calibration material in both buffer and the relevant sample matrix. It notes that sample components can increase background or reduce complementation, and that dilution may reduce these effects. [3]

For assay development, compare low, middle and high analyte additions across representative matrices. Include the medium, serum content, lysis chemistry and sample fraction expected in routine use. A calibration curve made in clean buffer can look excellent while systematically misreading the samples beside it.

Spike recovery answers a related question. After correcting for any volume changes, calculate:

Recovery (%) = 100 (C subscript spiked − C subscript unspiked) divided by (C subscript added)

If a sample measures 20 ng/ml, adding 40 ng/ml should bring it to 60 ng/ml under the assumed proportional conditions. A measured result of 52 ng/ml gives 80% recovery of the addition. Those numbers are illustrative, not an acceptance specification. Establish acceptance limits for the intended application and concentration range.

Include an unspiked partner and keep the spike volume small or explicitly correct for dilution. A purified spike may not reproduce the accessibility, binding partners or modification state of native analyte. Good spike recovery therefore supports compatibility of the added material; it does not establish every aspect of native-analyte recovery.

Conditioned medium deserves particular attention. It can differ from unused medium in ways that track treatment or cell growth. Promega's HMGB1 guide discusses using conditioned medium when refining quantitative interpolation. [4] Simply matching the name on the medium bottle may not match the sample.

## Luminescence still has to get out of the well

Eliminating excitation light removes one set of optical problems. It does not prevent sample components from absorbing the emitted photons. Promega's HMGB1 manual specifically identifies colored compounds and phenol-red-related effects as potential sources of altered luminescence. [4]

An independent light-producing control in a representative matrix can help investigate that possibility. Match the relevant emission and assay conditions as closely as practical. A response in such a control may reflect enzyme inhibition as well as optical absorption, so further separation may be needed. Avoid interpreting every loss of light as failed antibody binding.

Detergent compatibility is also easy to overlook when adapting an existing lysate protocol. Hwang and colleagues tested lysis conditions that preserved the complementation readout. [1] A buffer that extracts a protein successfully for a Western blot has not thereby qualified itself for a homogeneous luminescence reaction. Test recovery and background at the final detergent concentration, after every reagent addition.

## Keep room temperature stable through the reading

For the glucagon assay, Promega states that both signal intensity and stability depend on temperature and calls for room-temperature equilibration of the relevant buffers. [2] Its HMGB1 guidance separately specifies the biological exposure temperature and a constant room-temperature environment for antibody and detection incubations. [4]

Preserve that intended endpoint temperature when measuring the plate. Equilibrating reagents in a 22°C room and then holding the plate in a progressively warming chamber changes the conditions midway through the procedure. A heater set to off is not a demonstration that the chamber stays near room temperature.

Look for evidence from sustained reader operation, with realistic plate loading and dwell times. Effective heat removal and limited heat transfer from internal components help keep the sample environment stable. Avoid unnecessary airflow over exposed wells, especially at low volumes; evaporation can change both matrix composition and analyte concentration. Low airflow alone does not demonstrate humidity control.

Check representative liquid temperatures rather than relying solely on the displayed chamber value. Distribute assay controls across positions and across the run. Consistent reagent-to-read timing remains necessary even with a stable temperature: a glow signal offers a measurement window, not an exemption from kinetics. The appropriate temperature and timing remain kit-specific, and living-cell exposure conditions should follow the biology.

## Separate an assay ceiling from a reader ceiling

A hook effect occurs in the binding chemistry. Detector compression occurs when increasing light no longer produces the expected proportional increase in reported signal. Both can compromise a calibration, but they require different remedies. A reader with a wide verified linear range cannot repair an antigen-excess hook, and a well-designed antibody pair cannot correct nonlinear detection.

Diluting a sample can improve either problem. To isolate detector behavior, use a validated optical attenuation or instrument-linearity test that changes incoming light without changing antibody and antigen concentrations. A detector gain change may be informative, but it is not automatically equivalent to reducing the photon flux at the detector. Confirm what the setting actually changes.

Also challenge weak wells beside the brightest standards in the intended plate. Low crosstalk and appropriate collection geometry protect weak-sample estimates from neighboring light. Longer integration can improve photon-limited precision, but it cannot identify a signal that came from the wrong well or repair a biased calibration.

Before screening, qualify the matrix, useful concentration range, dilution behavior and measurement conditions together. Keep an explicit rule for samples outside that range. When a diluted sample gets brighter, preserve the observation and investigate it. Use the follow-up controls to determine whether dilution relieved a chemical, optical or instrumental limitation.

## References

1. Hwang B. et al. [A homogeneous bioluminescent immunoassay to probe cellular signaling pathway regulation](https://www.nature.com/articles/s42003-019-0723-9). Communications Biology 3, 8 (2020). doi:10.1038/s42003-019-0723-9.

2. Promega. [Lumit Glucagon Immunoassay, TM682](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/500/lumit-glucagon-immunoassay-protocol-tm682.pdf?rev=cbcd081802774f5da3e6f2a96bc364d5). Revised November 2025. Sections 7 and 8A: hook effect, timing, temperature and optical considerations.

3. Promega. [Lumit Immunoassay Labeling Kit, TM602](https://se.promega.com/-/media/files/resources/protocols/technical-manuals/500/tm602-lumit-immunoassay-labeling-kit-technical-manual.pdf?rev=7fdb8f65a8544f768b89b44020dacea8&sc_lang=en). Sections 5C and 5D: antibody optimization, matrix effects and calibration.

4. Promega. [Lumit HMGB1 Human/Mouse Immunoassay, TM681](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/500/lumit-hmgb1-human-mouse-immunoassay-protocol-tm681.pdf?rev=505ad36a956147bea9d481d1161b2ff3&sc_lang=en). Revised May 2025. Sections 5, 8B and 8C: sample matrix, temperature and spectral interference.
