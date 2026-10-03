# Why can a white plate outperform a black plate in a TR-FRET assay?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/white-vs-black-plates-tr-fret-htrf/

Compare white and black TR-FRET plates through photon statistics, laser excitation, detector efficiency, crosstalk and assay-specific requirements.

A white plate can improve a time-resolved Förster resonance energy transfer (TR-FRET) assay by increasing the photons collected in its delayed emission channels. This matters especially when a reader struggles to collect enough light from a black plate. Efficient laser excitation and well-chosen detectors can make black plates practical while preserving useful signal; choose within any plate requirements of the specific assay protocol. [1]

## White plates help when photon collection is limiting

White surfaces reflect light that black surfaces absorb. Revvity's HTRF guidance reports higher absolute counts in white plates, often without a substantial change in signal-to-noise, and recommends white plates particularly for monochromator-based readers. Some assays, including IP-One, require them in that guidance. HTRF means homogeneous time-resolved fluorescence. [1]

Those recommendations are especially relevant to photon-limited measurements. If a black plate leaves the donor or acceptor channel near its practical noise floor, the white plate's collection gain can improve precision. Higher gain on the detector does not replace missing photons.

A reader with intense, donor-compatible laser excitation, efficient collection optics and sensitive detectors suited to delayed donor and acceptor emission may collect adequate light in black plates at the required speed. This can preserve strong usable signal while limiting reflected background and stray light. That advantage depends on the complete optical system. A laser-equipped reader still needs background control and assay-specific plate qualification.

Ask about the complete measurement: excitation delivered at a useful wavelength, detector response in both emission bands, delayed-gate performance and low noise. Dedicated detection optimized for TR-FRET can help avoid a weak channel becoming the limiting measurement. Verify these properties at the wavelengths and gate times used by the assay.

## The same ratio can have different precision

In a common red HTRF configuration, donor emission is measured near 620 nm and acceptor emission near 665 nm. Delayed collection suppresses much of the short-lived fluorescence after excitation. [1] Both channels still need enough counts.

For a simplified ratio R = A/D, independent Poisson counting and negligible background give the approximate fractional coefficient of variation (CV):

CV subscript R ≈ square root of ((1) divided by (A) + (1) divided by (D))

A and D are expected detected photon counts in the acceptor and donor channels, respectively. With A = 250 photons and D = 2,500 photons, the ratio is 0.10 and its counting CV is about 6.63%. Collecting four times as many photons in both channels leaves the ratio at 0.10 but reduces this contribution to about 3.32%. These are constructed counts, not instrument relative fluorescence units (RFU) or a measured white-plate gain. Background, channel covariance and preparation variability require additional terms. [2]

Simultaneous collection on two calibrated detectors also avoids a timing gap between the channels. It can reduce mismatch when a sample changes between sequential reads, while still requiring adequate photons and appropriate channel calibration.

## Test the background that survives the delay

White plates do not automatically impose high assay background. Delayed detection changes the balance, and plate formulation, optics and matrix all contribute. The Assay Guidance Manual discusses both white and black plates and the need to assess crosstalk in the actual assay. [3]

Compare the permitted plate types on the intended reader at the required read time. Keep donor and acceptor raw values, ratio variability and low-positive separation. Place weak controls beside bright wells. Physical optical isolation is preferable to depending entirely on a correction: subtracting an estimated leakage contribution leaves counting noise and correction uncertainty.

If black plates meet the assay's precision and sensitivity requirements with efficient excitation and detection, extra reflected signal offers no automatic advantage. If either channel remains photon-limited, a white plate may be the useful remedy. Make the final comparison with weak samples in the plate types permitted by the kit.

## References

1. Revvity. [HTRF Technical Booklet](https://resources.revvity.com/pdfs/gde-htrf-technical-booklet.pdf), pp. 9–13 and 19–20. Delayed detection, red donor/acceptor channels, plate recommendations and excitation sources.

2. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf), April 2017, printed pp. 149–153 (PDF pp. 162–166). Counting noise, background and count-rate nonlinearity. Numerical examples here are constructed.

3. [Microplate Selection and Recommended Practices in High-throughput Screening and Quantitative Biology](https://www.ncbi.nlm.nih.gov/books/NBK558077/). Assay Guidance Manual. Archived full chapter; plate color, bottom material, surfaces and optical crosstalk.
