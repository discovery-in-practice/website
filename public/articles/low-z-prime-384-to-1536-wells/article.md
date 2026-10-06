# Why does my assay have low Z-prime after moving from 384 to 1536 wells?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/low-z-prime-384-to-1536-wells/

Diagnose low Z-prime after miniaturizing from 384 to 1536 wells, including photon counts, cell loading, evaporation and read geometry.

After miniaturization, a low Z-prime often reflects more control variability relative to separation between the high and low controls. Keeping reagent concentrations unchanged does not preserve cell number, detected photons, dispensing precision or evaporation. Smaller wells also change optical geometry. Identify which contribution deteriorated before increasing reagent concentrations or reading every well longer.

## A change of scale can leave Z-prime unchanged

Z-prime, written Z′, compares the spread of the control populations with the distance between their means:

Z′ = 1 − (3( σ subscript high + σ subscript low )) divided by (| μ subscript high − μ subscript low |)

The μ terms are mean responses and the σ terms are their standard deviations (SDs). Z′ is dimensionless. The Assay Guidance Manual discusses its use in evaluating control separation and variability. [1]

Consider three constructed results on a common arbitrary response scale:

| Condition | Control mean gap | Sum of control SDs | Z-prime |
| --- | --- | --- | --- |
| Starting assay | 9,000 units | 600 units | 0.80 |
| All responses scaled to one-quarter | 2,250 units | 150 units | 0.80 |
| Quarter-sized gap, larger relative spread | 2,250 units | 300 units | 0.60 |

Multiplying every individual result by the same positive constant scales both the gap and the standard deviations equally. Z′ is unchanged. A smaller photon count behaves differently: under ideal Poisson statistics, reducing collected photons fourfold doubles their relative counting uncertainty. A dimmer assay can therefore lose Z′ even when its chemistry preserves the expected fold response.

## What unchanged concentration leaves out

At unchanged cell concentration, one-quarter of the volume contains one-quarter of the expected cells. Under an ideal model of independent cell loading, 400 cells per well have 5% relative counting variability; 100 cells have 10%. Unequal cell brightness, clumps and dispensing can add further variation. These are model calculations, not expected coefficients of variation (CVs) for every cell assay.

Evaporation consumes a larger fraction of a small starting volume. Dispensing and mixing also face different well dimensions and fluid behavior. The Assay Guidance Manual's microplate chapter discusses evaporation, liquid handling, mixing and plate geometry as assay-development variables. A transfer that preserves concentrations still needs these steps checked. [2]

The reader sees a different target too. Read height, illumination footprint and collection optics may need adjustment. Bright neighboring wells can contaminate weak controls. Suitable well opacity and optical isolation should be assessed before relying on software crosstalk correction, which can remove a mean contribution while leaving its photon noise.

## Separate detection from preparation

Begin with a stable, premixed cell-free optical control at the intended volumes, including blanks and low signals. This tests the combined plate and detection geometry without reproducing every source of biological variation. Inspect position effects, bright-neighbor leakage, raw-channel precision and linearity. For a ratiometric assay, retain both channel outputs.

Next, dispense the same control material through the intended liquid-handling workflow. New variability implicates preparation, timing or handling, although further tests are needed to separate them. Finally, test the complete assay with independently prepared replicate plates. Map the controls across the plate and record the elapsed time from dispensing to reading.

If useful photon collection is limiting, efficient excitation and detection may recover precision without a prolonged read. For time-resolved Förster resonance energy transfer (TR-FRET), compatible laser excitation can help when too few useful photons limit precision. Simultaneous dual-emission collection can reduce errors from measuring the channels at different times. Cell-loading variation needs a separate remedy. [4]

Temperature deserves its own check. Promega's CellTiter-Glo 2.0 protocol specifies room-temperature equilibration, and its manual identifies temperature effects on intensity and decay. For this lytic endpoint, a stable near-room-temperature measurement chamber helps preserve comparable conditions through the plate sequence. Avoid unvalidated exposure to airflow or heat during waiting and reading. Live-cell protocols may need a different temperature. [3]

## References

1. Bray MA, Carpenter A. [Advanced Assay Development Guidelines for Image-Based High Content Screening and Analysis](https://www.ncbi.nlm.nih.gov/books/NBK126174/). Assay Guidance Manual, 2017 update. Statistical assessment of controls and assay quality.

2. [Microplate Selection and Recommended Practices in High-throughput Screening and Quantitative Biology](https://www.ncbi.nlm.nih.gov/books/NBK558077/). Assay Guidance Manual. Plate geometry, dispensing, mixing and evaporation; previously archived full chapter reviewed.

3. Promega. [CellTiter-Glo 2.0 Assay Technical Manual TM403](https://www.promega.com/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol/), archived revision January 2023, sections 3.B and 4.B, PDF pp. 7 and 11. Equilibration, temperature and plate-selection caveats.

4. Revvity. [HTRF Technical Booklet](https://resources.revvity.com/pdfs/gde-htrf-technical-booklet.pdf), pp. 13 and 20. Ratiometric detection and excitation-source guidance. Timing-error reduction is a mechanism-based inference, not a quantified advantage for every assay.
