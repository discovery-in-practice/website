# DNA quantification: five methods, five different answers

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/compare/dna-quantification/

DNA mass, target copies, amplifiable library molecules and fragment integrity are different measurements. Choose the answer your next experiment needs before choosing the instrument.

A DNA extract can produce a high absorbance result, a lower fluorescent-dye result and a still lower PCR result without any instrument being broken. Each method responds to a different feature of the sample. Absorbance measures ultraviolet absorption; a dsDNA dye reports accessible double-stranded DNA; PCR interrogates a chosen amplifiable sequence; electrophoresis adds a size distribution. Agreement is useful, but disagreement can reveal contamination, degradation or a library-preparation problem.

This comparison covers UV absorbance, fluorescent dyes, qPCR, digital PCR and automated electrophoretic QC, with representative commercial products. Check the measurement chemistry as well as the instrument name: NanoDrop Ultra FL and DeNovix DS-11 FX combine absorbance and fluorescence. Product limits below retain their units and sample-volume conditions. The practical recommendations concern workflow fit, not a universal sensitivity ranking. A separate adapter-selective fluorescent library assay is included to distinguish it from ordinary DNA-binding dyes.

## Headlines

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| There is no single quantity called DNA quality.METHOD SELECTION | UV estimates concentration from absorption. Dyes estimate a selected nucleic-acid class. PCR quantifies an amplifiable target. Electrophoresis resolves material by size. | None of these alone proves that a sample is pure, intact, correctly adapter-ligated and suitable for the next experiment. | Start with the decision: normalize dsDNA mass, count a locus, pool sequenceable libraries, or reject damaged material. A combined workflow is often more informative than buying the instrument with the smallest quoted detection limit.Sources: D4, D8, D11, D14. |
| A high UV result and a low dye result can both be informative.INTERPRETATION | UV absorption is not selective for dsDNA. A dsDNA-selective fluorescence assay largely rejects RNA and free nucleotides under its validated conditions. | Dye selectivity is not absolute, and matrix effects, DNA structure, standards or pipetting can also produce disagreement. | Check the spectrum, blank, dilution recovery and an independent dye standard before deciding one device is wrong. Do not turn the difference into an exact RNA concentration: the two assays have different calibration and interference behavior.Sources: D4, D13. |

## Specifications

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| NanoDrop Ultra adds low-volume absorbance; FL models also add fluorescence.UV · THERMO FISHER | The family brochure specifies 1 µL minimum sample for the Ultra pedestal and a 1 ng/µL dsDNA pedestal detection limit. NanoDrop Eight handles up to eight samples; Ultra is a single-sample platform. | Those are model-specific claims, not a precision guarantee at the detection limit. Fluorescence is present only in the relevant FL configurations and needs its assay workflow. | Good fit for quick concentration and spectral QC of sufficiently concentrated extracts. Compare absorption spectra and replicate performance near your working concentration. Do not recycle an older ND-1000 sensitivity comparison as evidence about the current Ultra.Sources: D1, D4. |
| Qubit range belongs to the kit and input volume, not just the reader.DYE · QUBIT | Thermo currently lists 0.1–120 ng per assay for both standard and 1X dsDNA HS. Its technical note distinguishes a 0.2–100 ng core range from the extended ends. Sample concentration limits depend on the volume added. | At 0.2 ng total input, using 1 µL corresponds to 0.2 ng/µL; using 20 µL corresponds to 0.01 ng/µL. These are different sampling conditions, not contradictory instrument limits. | Record kit, sample volume and core-versus-extended range in the SOP. A 2 µL sample at 0.05 ng/µL contributes 0.1 ng, at the extended lower end; 10 µL contributes 0.5 ng, inside the core range. More input can help if matrix tolerance is maintained. Calculation, not measured performance.Sources: D2, D13, D17. |
| Qubit Flex increases batch handling without changing what a DNA dye measures.DYE · THROUGHPUT | Qubit Flex measures up to eight prepared samples simultaneously using compatible Qubit assays. Qubit 4 is the single-sample alternative. | The read itself is only one part of preparation, mixing, incubation, loading, standards and data transfer. Eight positions do not mean eight times the total laboratory throughput. | For a few tubes, simple loading may dominate the choice. For extraction plates, time a complete batch against a plate-reader dye assay, including repeat samples and result import. Use samples and staffing representative of routine work.Sources: D3. |
| DS-11 FX combines two useful measurements in one instrument.UV + DYE · DENOVIX | DeNovix DS-11 FX provides microvolume UV-visible absorbance and fluorescence; FX+ also includes a cuvette capability. Different DNA reagent kits provide different concentration ranges. | Combining modes does not combine their biological meaning. A fluorescence result remains reagent-dependent, while the spectrum remains a separate contamination check. | Useful when the same bench needs both extract QC and selective mass normalization. Compare the actual assay reagent, operator workflow and data export. Avoid comparing one vendor's ultra-high-sensitivity dye with another vendor's broad-range kit as though the reader alone caused the difference.Sources: D5. |

## Features

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| PicoGreen and QuantiFluor move selective DNA quantification into plates.DYE · MICROPLATES | Quant-iT PicoGreen supports plate-based dsDNA measurement. Promega QuantiFluor ONE supports tubes or plates and lists 0.2–400 ng per assay in its stated 1 µL sample / 200 µL assay example. | The sample concentration and the concentration after dye dilution differ. Plate geometry, reader settings, blank variation and standards affect the usable low end. | A sensible choice for batches already produced in plates. Use a standard curve on each run, keep read settings consistent across the curve and samples, and challenge weak wells next to bright ones. A low manufacturer detection limit is not your locally validated quantification limit.Sources: D6, D7. |
| qPCR asks whether a particular sequence can be amplified.AMPLIFICATION · qPCR | With an appropriate assay and calibration curve, qPCR converts amplification behavior into starting target abundance. KAPA library quantification uses adapter-directed amplification to assess compatible sequencing libraries. | Primer compatibility, reference material, inhibition and relative amplification efficiency matter. A generic genomic-locus assay is not a substitute for adapter-specific library quantification. | Choose qPCR when the useful quantity is amplifiable target or compatible library molecules. It can expose a preparation that has plenty of DNA mass but few usable library molecules. It does not produce a fragment-size distribution or certify every possible sequencing defect.Sources: D8. |
| A library-specific fluorescence assay is not an ordinary DNA mass dye.FLUORESCENCE · ADAPTER SELECTIVITY | Qubit NGS Library Quantification selectively measures P5/P7-adapted dsDNA libraries. Thermo lists 0.8–46 nM and compatibility with Qubit Flex or suitable plate readers; it explicitly excludes Qubit 4. | This is a separate assay from Qubit dsDNA HS. Adapter selectivity and molar output do not make its chemistry the same as PCR amplification or establish compatibility with every library design. | It is a relevant alternative when compatible library quantification is needed without a qPCR workflow. Validate it on the actual adapters and library types, including failed or partially adapted preparations. Keep size QC, and use an amplification-based check when amplification competence is the unresolved question.Sources: D16. |
| Digital PCR removes the external standard curve, not the need for assay controls.AMPLIFICATION · dPCR | Bio-Rad QX600 uses droplet digital PCR. QIAGEN QIAcuity uses nanoplate partitions with integrated processing. Positive and negative partitions support an occupancy-based estimate of target concentration. | Partition quality, effective analyzed volume, target accessibility and the positive/negative threshold still matter. Highly occupied reactions require dilution; all-positive partitions contain little concentration information. | Strong fit for defined-target copy concentration, rare-target work or reference-material assignment. It is not a generic total-DNA mass meter. Compare partition count and usable input volume alongside hands-on workflow, multiplex requirements and uncertainty at the expected copy number.Sources: D9, D10, D14. |
| Electrophoresis tells you where the DNA mass sits in the size distribution.SIZE · INTEGRITY | Agilent 4200 TapeStation automates up to 96 samples per run. The 5300 Fragment Analyzer separates 48 or 96 samples in parallel, depending on configuration. Assay kits define the useful sizing and concentration windows. | A DNA peak is not automatically a sequenceable library. Quantification uses fluorescent signal and calibration; fragments outside the assay range or chosen analysis region can change the reported answer. | Use it to identify short-fragment contamination, library-size distribution and degraded genomic DNA. Pair size information with selective concentration or adapter-directed quantification when the downstream decision requires both.Sources: D11, D12. |

## Capabilities

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| Mass concentration is not molar concentration.CALCULATION · LIBRARY POOLING | For an illustrative pure dsDNA population, use approximately 660 g/mol per base pair: nM = 10^6 × concentration in ng/µL ÷ (660 × length in bp). | At 10 ng/µL, 300 bp DNA is about 50.5 nM; 600 bp DNA is about 25.3 nM. A broad size distribution needs more care than substituting one convenient peak length. | Equal masses of different-size libraries contain different numbers of molecules. This calculation assumes dsDNA of known length and says nothing about adapters or amplifiability. Use measured size and the library workflow's recommended quantification method before pooling. Values are calculated, not vendor benchmarks.Calculated molecular-mass example; assumptions stated. |
| Digital PCR counts occupied partitions, then corrects for multiple occupancy.CALCULATION · PARTITION STATISTICS | Under the ideal independent Poisson model, mean copies per partition = −ln(fraction negative). A partition can contain more than one target molecule. | If 10% are negative, the mean is about 2.303 copies per partition, not 0.9. Conversion to copies per microliter also needs partition volume and dilution factors. | The correction explains why simply counting positives underestimates concentration at high occupancy. At the opposite extreme, sampling very few target molecules limits precision. More fluorescence does not create more sampled molecules. This is a statistical illustration, not a QX600 or QIAcuity performance claim.Sources: D14. |

## Downsides

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| Purity ratios become unstable when their denominator approaches the blank.UV · LOW CONCENTRATION | Absorbance concentration depends on baseline and pathlength. For dsDNA, A260 of 1 at a 1 cm equivalent path corresponds conventionally to 50 ng/µL. | At 2 ng/µL the equivalent A260 is 0.04. Small blank or baseline errors can therefore matter disproportionately, and ratios can look extreme even when contamination is not the main problem. | Use the correct buffer blank, inspect the spectrum and verify the low-end concentration with a suitable dye assay. Do not use an apparently acceptable A260/A280 ratio as proof of PCR compatibility. The numeric example is a conversion calculation.Sources: D15, D4. |
| A DNA dye is selective, but its response still depends on the sample.DYE · CALIBRATION | Thermo recommends comparable-length dsDNA standards when samples consist mainly of short strands. Kit-specific limits describe validated conditions, not every possible DNA structure or extraction matrix. | Denatured material, unusual fragment distributions, contaminants and inaccurate low-volume pipetting can change the relation between mass and fluorescence. | Check dilutional agreement and spike recovery with representative extracts. A clean lambda-DNA curve cannot by itself validate a difficult sample matrix. Keep standards and samples under comparable incubation and measurement conditions.Sources: D13, D6. |
| The cheapest reading may not be the cheapest accepted result.OPERATING COST | UV avoids a dye reaction per sample; fluorescence adds reagents and standards; PCR adds amplification consumables and assay development; electrophoresis adds assay-specific consumables. | Actual costs depend on batch size, repeats, instrument utilization, service and existing equipment. No comparable current quotations were established here. | Cost accepted samples, not just reagent wells. Include blanks, standards, dead volume, labor, repeat rates, software and the cost of a failed downstream run. A fast UV check and a selective dye assay can be economically complementary rather than competing purchases.Sources: D1, D3, D8, D11. Workflow analysis; no dollar ranking. |

## Advantages

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| For routine extract normalization, fluorescence is usually the first useful quantity.USE CASE · dsDNA MASS | Qubit, DeNovix fluorescence and plate-compatible DNA dyes provide selective dsDNA mass estimates. UV adds a quick spectrum when concentration permits. | The best format depends on whether the samples arrive as a handful of tubes or whole plates. A dedicated fluorometer simplifies setup; a plate reader supports batch processing and shared assay use. | Shortlist by throughput and sample range, then compare blinded low, middle and high samples with realistic contaminants. Choose the workflow with dependable recovery and manageable repeat rates, not just the broadest brochure range.Sources: D2, D5, D7. |
| For sequencing libraries, combine quantity with size and adapter compatibility.USE CASE · NGS | Ordinary dsDNA dyes measure mass; electrophoresis reveals size; adapter-directed qPCR measures the compatible amplifiable subset. Validated dPCR and specialized adapter-selective fluorescence provide additional library-quantification choices. | These answers need not agree numerically, and not every platform's library chemistry is compatible with the same primers or QC criteria. | Follow the sequencing workflow's library requirements. Retain fragment traces rather than only a concentration number. Investigate a mass-to-PCR discrepancy before normalizing all samples to the same mass and hoping that the sequencer will correct it.Sources: D8, D10, D11, D16. |

## Notable Details

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| Compare an entire workflow on the same samples before choosing a platform.ACCEPTANCE TEST | Prepare blinded replicate samples across the intended working range, including extraction blanks, degraded material, representative matrix carryover and known target dilutions. | Agreement between methods is only meaningful when they are estimating the same quantity. A clean reference DNA sample tests calibration more readily than it tests real extraction variability. | Record bias against an appropriate reference, repeatability, dilution recovery, failed samples, total time and sample consumed. Keep the measurement definition beside each result. A concentration without its method, kit and input volume is incomplete laboratory metadata.Proposed comparative qualification; not performed. |

## About the sources

Sources checked 25 September 2026. Manufacturer specifications describe the named product and configuration; they are not independent all-vendor benchmarks. Row-level source IDs link to the references below. Calculations and practical interpretations are identified separately. No physical comparison or procurement quotation is represented by these tables.

D1  [Thermo Fisher — NanoDrop family brochure, BR51530](https://www.thermofisher.com/TFS-Assets/MSD/brochures/BR51530-nanodrop-family-brochure.pdf)

D2  [Thermo Fisher — Qubit assays and assay ranges](https://www.thermofisher.com/us/en/home/industrial/spectroscopy-elemental-isotope-analysis/molecular-spectroscopy/fluorometers/qubit/qubit-assays.html)

D3  [Thermo Fisher — Qubit Flex user guide MAN0018186](https://documents.thermofisher.com/TFS-Assets/LSG/manuals/MAN0018186_Qubit_Flex_Fluorometer_UG.pdf)

D4  [Thermo Fisher — UV versus fluorescence technical note](https://www.thermofisher.com/TFS-Assets/LSG/Technical-Notes/fluorescence-UV-quantitation-comparison-tech-note.pdf)

D5  [DeNovix — DS-11 FX spectrophotometer/fluorometer](https://www.denovix.com/products/ds-11-fx-spectrophotometer-fluorometer/)

D6  [Thermo Fisher — Quant-iT PicoGreen dsDNA reagent and kits, MP07581](https://tools.thermofisher.com/content/sfs/manuals/mp07581.pdf)

D7  [Promega — QuantiFluor ONE dsDNA System](https://www.promega.com/products/rna-analysis/dna-and-rna-quantitation/quantifluor-one-dsdna-system/)

D8  [Roche — KAPA Library Quantification brochure](https://sequencing.roche.com/content/dam/diagnostics_microsites/sequencing/us/en/resources/pdfs/brochures/kapa-library-quantification-MC-US-10927.pdf)

D9  [Bio-Rad — QX600 Droplet Reader and QX Manager user guide](https://www.bio-rad.com/sites/default/files/2025-12/10000153877-Ver-J.pdf)

D10  [QIAGEN — QIAcuity Digital PCR System](https://www.qiagen.com/rw/products/instruments-and-automation/pcr-instruments/qiacuity-digital-pcr-system)

D11  [Agilent — 4200 TapeStation System](https://www.agilent.com/en/product/automated-electrophoresis/tapestation-systems/tapestation-instruments/4200-tapestation-system-228263)

D12  [Agilent — 5300 Fragment Analyzer System](https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems/5300-fragment-analyzer-system-365721)

D13  [Thermo Fisher — Qubit dsDNA HS frequently asked questions](https://www.thermofisher.com/order/catalog/product/Q32851/faqs)

D14  [Bio-Rad — Introduction to Digital PCR](https://www.bio-rad.com/de/life-science/learning-center/introduction-to-digital-pcr)

D15  [Thermo Fisher — NanoDrop One frequently asked questions](https://www.thermofisher.com/store/v3/products/faqs/ND-ONE-W)

D16  [Thermo Fisher — Qubit NGS Library Quantification Assay Q34250](https://www.thermofisher.com/order/catalog/product/Q34250)

D17  [Thermo Fisher — Qubit 1X dsDNA technical note](https://documents.thermofisher.com/TFS-Assets/BID/Technical-Notes/qubit-1x-dsdna-assays-simplified-workflow-tech-note.pdf)
