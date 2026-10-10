# How can I tell whether a fluorescent screening hit is active or just interfering with detection?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/fluorescent-screening-hit-interference/

Separate real activity from autofluorescence, quenching and inner-filter effects with compound-only controls and matched detection counterassays.

Test whether the compound changes the detection signal when the biological reaction cannot change it, then confirm the biological effect with a suitably independent readout. Compound autofluorescence can add light; absorption and quenching can remove light. Either process can produce a smooth concentration-response curve. A smooth potency curve may come from altered fluorescence rather than target activity. [1]

## Run both compound-only and detection-only controls

A compound-only control contains the test compound in the relevant assay matrix, without the assay's fluorescent label or product. Measure it at the same excitation and emission settings. A concentration-dependent signal shows that the compound can contribute light in that window. Match solvent, pH and incubation conditions because fluorescence can depend on the environment.

A detection-only counterassay contains the fluorescent tracer or preformed product plus compound, but omits or disables the target-dependent step. This detects loss of assay fluorescence as well as added fluorescence. Compound-only wells cannot reveal quenching of a fluorophore that is absent.

Use a fluorescent concentration representative of the actual assay endpoint. An excessively bright counterassay can conceal additive interference that overwhelms a weak screening signal. For example, an added 100 relative fluorescence units (RFU) of compound fluorescence adds only 1% to a 10,000 RFU reference but doubles a 100 RFU assay signal. These are illustrative values, not measurements. [1]

## Absorbing light can mimic inhibition

An absorbing compound can intercept excitation light before it reaches the fluorophore or absorb emitted light before it reaches the detector. These inner-filter effects can lower measured fluorescence without changing product concentration. Other quenching mechanisms also exist, so a signal decrease alone does not identify its cause. [1]

Compare compound absorption with the actual excitation and emission bands, not just the nominal peak wavelengths. A spectrum and a matched product-spike experiment help distinguish candidates for optical interference. Keep plate type and volume constant: pathlength changes can alter the size of an absorption artifact.

For fluorescence polarization (FP), inspect both polarization channels and total fluorescence as well as millipolarization units (mP). Compound fluorescence can alter the ratio even when the displayed mP value looks physically plausible. The Hall review discusses these intensity checks and assay-specific interference controls. [2]

## Change the detection vulnerability

Confirm activity with a method that reports the same biological event through different chemistry or physics. For an enzyme reaction, an appropriate mass-spectrometric product measurement may be useful. Changing to a spectrally distinct fluorophore can also help, but a broad absorber may interfere in both windows. Verify that the alternate substrate or label still reports the biological event of interest.

For a concrete spectral example, the Assay Guidance Manual describes resorufin detection with excitation at 530 nm and emission at 590 nm in a coupled enzyme assay. Those are reported detection wavelengths, not a universal filter specification. Changing to that chemistry also introduces a coupling reaction that needs its own controls. [1]

Flexible wavelengths and effective optical rejection help avoid some interfering bands. Wider emission collection can improve photon counts while admitting more compound fluorescence. No filter, dichroic mirror or simultaneous channel measurement can reliably distinguish two molecules emitting overlapping light merely by collecting it more efficiently.

## Keep activity and interference as separate findings

A compound can be biologically active and optically troublesome at the same time; the Assay Guidance Manual explicitly makes this point. [1] Flag the affected concentration range and preserve the primary result, counterassay result and independent biological result together.

A negative detection counterassay narrows the alternatives under the conditions tested. It does not exclude aggregation, substrate-specific effects or cellular toxicity. Advance a hit when the evidence supports its biological interpretation, and record which concentrations remain uncertain.

## References

1. Simeonov A, Davis MI. [Interference with Fluorescence and Absorbance](https://www.ncbi.nlm.nih.gov/books/NBK343429/). Assay Guidance Manual, updated 1 July 2018. Fluorescence interferences and assay-design strategies; supplied NIH compilation, PDF pp. 1259–1271.

2. Hall MD and colleagues. [Fluorescence polarization assays in high-throughput screening and drug discovery: a review](https://pmc.ncbi.nlm.nih.gov/articles/PMC5563979/). Methods and Applications in Fluorescence 2016;4:022001, section 5. Supplied full PDF; compound interference and raw-intensity checks.
