# TR-FRET: waiting doesn’t fix the wrong photons

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/tr-fret-troubleshooting-filters-timing-excitation/

Troubleshoot HTRF and LanthaScreen assays by separating timing from spectral leakage. Learn when filters, excitation and reader controls improve results.

The assay has almost no window, but plenty of fluorescence. Increasing the flash count raises the numbers; extending the delay lowers them. Yet the positive and negative controls still do not separate.

Before replacing the protein, check which photons the reader is collecting.

Time-resolved fluorescence resonance energy transfer, or TR-FRET, uses both timing and wavelength selection. HTRF and LanthaScreen are implementations of that general approach, with different donor–acceptor combinations and setup requirements. The time delay rejects short-lived fluorescence. The emission optics decide which of the remaining photons enter each channel. A good delay cannot rescue an unsuitable emission filter.

## Why a short-lived acceptor can give a delayed signal

After an excitation pulse, a population of excited lanthanide donors decays slowly. Donors near suitable acceptors can transfer energy during that decay. Each acceptor excitation is brief; the delayed emission persists because different donors transfer their energy at different times. The signal therefore carries information about donor–acceptor proximity. [1]

This separates direct acceptor excitation from excitation through the donor. Prompt fluorescence can decay before measurement begins, while sensitized acceptor fluorescence remains detectable.

It does not remove every unwanted signal. Donor emission is deliberately long-lived. Any donor photons admitted into the acceptor channel can survive the delay along with the signal you intended to measure.

Thermo Fisher's LanthaScreen guidance makes the problem unusually explicit: a conventional fluorescein emission filter can have too broad a bandwidth and admit terbium emission. The familiar fluorophore name on a filter is insufficient evidence that it suits the assay. [2]

Check the complete optical recommendation for the exact donor, acceptor and reader configuration. Center wavelength matters, but so do bandwidth and rejection of unwanted wavelengths. A red-acceptor HTRF setup is not a template to copy indiscriminately into a terbium–fluorescein assay.

## More fluorescence can mean less useful contrast

Write the acceptor-channel measurement as a simple model:

A subscript measured = F + αD + B

F is the desired sensitized acceptor signal, D is the measured donor-channel signal, α describes donor leakage into the acceptor channel, and B is other background. This is an illustrative linear model; α depends on the spectra and detection paths, and B can include several mechanisms.

Suppose the useful acceptor signal is 100 units in the low control and 1,000 in the high control. Hold donor emission constant between controls and set other background to zero. Compare two hypothetical optical selections:

| Optical selection | Low control | High control | High/low window |
| --- | --- | --- | --- |
| Adds 100 units of donor leakage | 200 | 1,100 | 5.5-fold |
| Adds 1,900 units of donor leakage | 2,000 | 2,900 | 1.45-fold |

The second selection delivers the larger raw readings and the poorer fold window. In this deliberately simplified comparison, it collects the same useful fluorescence and admits more donor light. Actual filters may change both contributions.

The absolute high-minus-low difference remains 900 units. That matters: a constant offset does not automatically corrupt a properly fitted concentration-response curve. But the leaked light contributes photon noise, and collecting it uses detector range without adding the desired biological contrast. Subtracting its mean cannot subtract the random photons that arrived with it.

The donor-normalized ratio also has a limit:

(A subscript measured) divided by (D) = (F) divided by (D) + α + (B) divided by (D)

Dividing by the donor channel does not remove α. It makes constant proportional leakage a ratio offset. If spectra, background or detector response change across samples, the problem can become more complicated than an offset. Keep both channels and donor-only controls rather than expecting the ratio to perform an optical repair.

## Delay time and collection time spend different photons

Delay is the interval between excitation and the start of measurement. Collection time is the interval during which the detector accepts photons. Increasing one discards an earlier portion of the decay; increasing the other collects a later portion. They are not interchangeable sensitivity settings.

For an ideal single exponential with lifetime τ, the fraction of its total post-pulse photons collected after delay d during a window T is:

f subscript gate = e raised to (− (d) divided by (τ)) − e raised to (− (d + T) divided by (τ))

Take a hypothetical 600-microsecond lifetime and a 200-microsecond collection window. Starting at 100 microseconds collects about 24% of the total decay. Starting at 300 microseconds collects about 17%. The extra waiting has discarded roughly 28% of the photons that the earlier window would have collected.

That can be a good trade if it removes disproportionately more background. Once the troublesome short-lived background is already gone, however, a longer delay may mainly cost precision. Real TR-FRET decays can contain several components, and donor leakage need not share the decay of the useful acceptor signal. Optimize with assay controls; do not treat this one-exponential example as a universal timing prescription.

Manufacturer settings provide a defensible starting point. Thermo's 2010 LanthaScreen reader-test note specifies a 100-microsecond delay and 200-microsecond integration window for that procedure. It explicitly distinguishes its settings from other TR-FRET assays. Use the applicable setup guide, not a timing value remembered from a different kit. [3]

## Where strong excitation earns its keep

Once wavelength selection and timing are correct, collecting more useful photons can improve precision or shorten acquisition. A suitable pulsed UV laser can supply substantial excitation at a wavelength the donor absorbs, concentrating energy into a brief pulse. The practical benefit is more usable signal per excitation cycle when the rest of the optical system and assay can use it.

An assay-manufacturer setup guide documents both lamp excitation and a 337-nm laser option for LanthaScreen terbium measurements. That establishes compatibility in the described configuration, not universal superiority of every laser over every lamp. [4]

Compare the actual assay at equal precision or equal total read time. Include the dim conditions, the raw donor and acceptor channels, and the brightest samples. Stronger excitation is valuable when it supplies information you were short of. It cannot make donor leakage specific, and the detectors must remain linear at the resulting signals.

Simultaneous donor and acceptor collection offers another practical advantage. Reading the same excitation events with matching time gates lets proportional pulse-to-pulse changes affect both channels together. That shared variation can cancel in the ratio. It also avoids a second channel acquisition where the instrument would otherwise need one.

Use corresponding time gates and calibrated relative channel responses, with adequate counts in both channels. Independent photon noise and additive background remain. Assess precision and throughput under the intended protocol instead of assuming that two detectors halve the entire plate time.

## Check the reader without asking the protein to cooperate

Thermo's LanthaScreen reader-test procedure contains a useful troubleshooting idea: generate a TR-FRET response independently of a biological binding equilibrium. It uses diffusion-enhanced energy transfer at suitable donor and acceptor concentrations. The note has explicit reagent restrictions, so follow that procedure rather than improvising a high-concentration mixture from any available kit. [3]

Revvity's HTRF Reader Control Kit similarly provides a way to assess optical and software configuration and follow reader performance. Its incubation schedules and signal-stability windows are specified; it is not simply a permanent fluorescent reference plate. [5]

These controls separate two questions. Can the configured instrument resolve an appropriate TR-FRET response? Does the biological assay generate that response under its own conditions? A successful reader control narrows the investigation without proving that the target assay is sound.

For a failing assay, start with the correct manufacturer setup and a compatible reader control. Then examine matrix blanks, donor-only wells, acceptor-only wells, and complete low and high assay controls. Keep reagent concentrations and matrix conditions comparable where the control design permits. Change one optical or timing variable at a time before undertaking another protein titration.

## Keep the plate history in the experiment

Stable fluorescent chemistry does not make the underlying biology temperature-independent. Revvity distinguishes the temperature robustness of HTRF chemistry from temperature-sensitive protein components and incubation kinetics. [1] Keep incubation temperature, equilibration and read order reproducible when comparing settings.

A sensible final check is a representative plate sequence, not one favorable plate. Record delay, collection window, pulse count, excitation source, channel optics and plate type. Review intermediate responses as well as the controls, and verify the operating range.

A passing reader control with no biological window points back to the assay. Strong donor-only signal in the acceptor channel points to the optics. If a longer delay only dims every well, stop extending it.

## References

1. Revvity. [HTRF Technical Booklet](https://resources.revvity.com/pdfs/gde-htrf-technical-booklet.pdf), especially pp. 9, 13 and 17. Donor-fed delayed acceptor emission, detection principles and temperature qualifications.

2. Thermo Fisher Scientific. [LanthaScreen assay FAQs](https://www.thermofisher.com/order/catalog/product/A15140/faqs), emission-filter and assay-window questions.

3. Thermo Fisher Scientific. [Method to Test Microplate Readers for LanthaScreen Tb Assays](https://www.thermofisher.com/TFS-Assets/LSG/manuals/LanthaScreen_Tb_Instrument_Control_Application_Note17Sep10.pdf). September 20, 2010, pp. 1–3. Historical manufacturer procedure; check current assay-specific instructions before use.

4. Life Technologies/Thermo Fisher Scientific. [LanthaScreen Terbium Assay Setup Guide on the EnVision Multilabel Reader](https://documents.thermofisher.com/TFS-Assets/LSG/manuals/EnVision_LanthaScreen_Terbium.pdf). April 13, 2012, especially p. 2. Configuration-specific lamp/laser and optical guidance; not a current comparative performance study.

5. Revvity. [HTRF Reader Control Kit](https://resources.revvity.com/pdfs/rvty_ls_manual_62RCLPEA.pdf). Version 08, January 2026. Optical/software validation, incubation schedules and stability windows. Numerical examples in this article are constructed calculations, not measured reader performance.
