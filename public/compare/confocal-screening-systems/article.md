# Automated confocal screening: compare the result, not the camera speed

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/compare/confocal-screening-systems/

Six representative high-content imaging families compared by optics, simultaneous channels, live-cell conditions and the work required to turn a plate into reliable measurements.

A high-content imager is a microscope, a plate-handling system and an analysis workflow. Its useful throughput is the rate at which it produces accepted biological results. Camera frame rate is only one contributor. Autofocus, the number of fields, color changes, z-stacks, water replenishment, analysis and file transfer can dominate the time spent on a plate.

This comparison focuses on automated microplate systems: Revvity Opera Phenix OptIQ and Operetta CLS, Molecular Devices ImageXpress HCS.ai, Yokogawa CellVoyager CV8000 and CQ3000, and Thermo Scientific CellInsight CX7 LZR Pro. They are representative product families, not a market-share ranking. Older Opera Phenix Plus and ImageXpress HT.ai documentation is identified where relevant; specifications and options belong to the named generation and configuration.

## Headlines

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| The configuration matters as much as the family name.CURRENT PRODUCTS · OPTIONS | Opera Phenix OptIQ has one-, two- and four-camera configurations. ImageXpress HCS.ai includes Widefield, LED Confocal and laser Advanced versions. Operetta CLS Quattro needs its confocal option. | A family-level brochure can describe capabilities missing from an individual quote. Molecular Devices now marks Confocal HT.ai discontinued and directs buyers to HCS.ai. | Build the comparison from the exact bill of materials: cameras, disk, objectives, illumination, climate, liquid handling and analysis licenses. A quote that says only the family name is not enough to establish parity. Product naming checked September 2026.Sources: C01, C04, C06, C08. |
| Several excitation colors do not mean several simultaneous images.ACQUISITION · CHANNEL TIMING | Multi-camera OptIQ and CV8000 configurations support up to four simultaneous colors; CQ3000 offers two with its second-camera option. The reviewed Operetta CLS, HCS.ai and CX7 LZR Pro layouts use one camera. | Single-camera color acquisition is generally successive in these layouts. Parallel cameras still require spectral separation, alignment and appropriate exposure choices. | Simultaneity is especially valuable when cells move, signals change rapidly or bleaching makes the second color different from the first. It also reduces repeated exposure groups. It does not eliminate spectral leakage, and it cannot make all stage, focusing and analysis overhead disappear.Sources: C01, C04, C06, C09, C12, C15. |

## Specifications

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| Opera Phenix OptIQ emphasizes parallel imaging and automated immersion.REVVITY · OPERA PHENIX | The current family uses microlens-enhanced spinning-disk confocal optics. The product matrix lists Single/Simultaneous/FRET/Screener with 1/2/4/4 cameras. Automated water immersion is listed across configurations; climate inclusion varies. | OptIQ is not the same generation as Plus. Published Plus plate-speed results cannot be relabelled as OptIQ benchmarks. Brochure and product matrix also differ on liquid-handling availability for Single. | A strong candidate for multiplexed and extensive z-stack screening where parallel collection is useful. Confirm the exact laser/camera combination, environmental package and dispensing option in the quote. Test the same segmentation endpoint and sampled volume used for other candidates.Sources: C01, C02, C03. |
| Operetta CLS offers a different route to a flexible shared platform.REVVITY · OPERETTA | Operetta CLS uses LED excitation and one sCMOS camera. FLEX and LIVE include confocal detection; LIVE includes water immersion and environmental control, which are optional on FLEX. Harmony supports acquisition and analysis. | Sequential colors impose timing differences, and a Quattro configuration is not automatically confocal. Objective, plate and optional software compatibility require configuration-specific confirmation. | Worth shortlisting for varied assay development and core-lab use, especially where the Harmony workflow is already established. Compare total data quality and turnaround rather than assuming a laser-based system must be better for every endpoint.Sources: C04, C05. |
| ImageXpress HCS.ai Confocal and Advanced differ in excitation and disk options.MOLECULAR DEVICES · HCS.ai | The datasheet specifies five-color LED excitation for Confocal and a seven-color laser engine for Advanced, with a single large sCMOS sensor. Advanced supports the Deep Tissue disk option; water immersion and climate are options. | The family name does not promise laser excitation or a particular disk. The current webpage and datasheet disagree on maximum dry-objective NA; that maximum should not drive selection until clarified. | Useful for labs that need configurable acquisition and 3D workflows with MetaXpress Acquire and IN Carta. Ask for the intended disk, water objectives, analysis modules and actual acquisition protocol in the demo. A seven-color engine is not seven-camera simultaneous capture.Sources: C06, C07. |
| CV8000 combines parallel confocal capture with screening automation.YOKOGAWA · CV8000 | CV8000 uses microlens-enhanced dual-Nipkow optics with up to four sCMOS cameras and four-color simultaneous capture. It lists 6–1536-well compatibility, water-objective choices and a 35–40°C stage environment with 5% CO2 and humidity. | The robot pipettor and some disk/camera choices are options. Maximum camera count is not a statement of what every installed system contains. | A candidate for high-throughput live-cell or multiparameter screening when parallel capture and integrated automation meet the workload. Check pipetting-to-imaging delay, plate access, liquid-handling recovery and the exact CellPathfinder analysis arrangement.Sources: C09, C10. |
| CQ3000 puts two-color parallelism into a benchtop configuration.YOKOGAWA · CQ3000 | CQ3000 uses dual-Nipkow confocal optics and an optional second camera. The brochure distinguishes standard 488/561 nm lasers from optional 405/640 nm lines. It supports automated immersion supply and 6–1536-well plates. | The six-objective configuration allows at most two water lenses. Fast acquisition, Target Search and some software/integration features depend on options. Other vessel types require the relevant holders. | Worth considering for long live-cell and 3D studies when two simultaneous colors meet the experiment's needs. Confirm the illumination and objective set actually supplied. A compact system can still generate a large analysis and storage workload.Sources: C11, C12. |
| CellInsight CX7 LZR Pro integrates acquisition with real-time phenotyping.THERMO FISHER · CELLINSIGHT | CX7 LZR Pro has a laser engine, a cooled back-illuminated sCMOS camera, confocal/widefield switching, laser/software focus and HCS Studio analysis. The documented confocal apertures are 40 and 70 µm; 6–1536-well formats are listed. | The reviewed objective sheet lists dry objectives, not water immersion. Product-page seven-color language and the manual's six-channel table need reconciliation for the intended acquisition protocol. | A candidate when integrated analysis and EurekaScan two-pass targeting fit the assay. Confirm acquired channels, objective options and climate in writing. Do not turn an unlisted immersion option into a claim that no configuration could ever provide it.Sources: C13, C14, C15. |

## Features

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| A smaller pinhole can improve sectioning while costing photons.OPTICS · THICK SAMPLES | CV8000 offers a 25 µm disk option alongside 50 µm pinholes. HCS.ai provides different disk geometries. CellInsight's manual warns that its smaller aperture may require longer exposure. | Micrometers alone do not define equivalent optical sectioning: magnification, NA, wavelength and pinhole spacing matter. In thick specimens, neighboring pinholes can admit unwanted out-of-focus light. | Compare a depth series of the actual organoid or spheroid. Inspect whether nuclei remain separable and counts remain useful near the center. A sharp surface image cannot establish volumetric performance. Disk choice is a light-versus-sectioning trade-off, not a simple smallest-hole contest.Sources: C06, C09, C15, C17. |
| Water immersion changes collection efficiency and unattended operation.OBJECTIVES · PHOTON COLLECTION | OptIQ, Operetta CLS, HCS.ai and the Yokogawa systems offer automated water-immersion arrangements with different inclusion rules. The reviewed CellInsight objective list is dry. | Compare NA, working distance, plate-bottom correction and well-edge access, not just magnification. Replenishment, bubbles, water supply, cleaning and failed immersion can affect long runs. | Ask how much useful signal and segmentation accuracy each objective provides at the required exposure. Then repeat the test near the end of an unattended run. A higher-magnification image is not necessarily a better measurement if it collects too little light or samples too few cells.Sources: C01, C04, C06, C09, C12, C14. |
| Laser power is useful only when it buys an acceptable image with acceptable cell damage.EXCITATION · LIVE CELLS | Operetta CLS and HCS.ai Confocal use LEDs; the other named configurations offer laser excitation. Multiple source wavelengths expand probe choices but do not establish contrast or phenotype preservation. | Increasing light can shorten exposure while increasing bleaching or phototoxicity. Collection efficiency, fluorophore brightness and the required sampling rate all affect the useful operating point. | Compare exposure and intensity at matched image quality, then check biological behavior against a minimally imaged control. For long experiments, cell health is part of image quality. Maximum illumination power is not a meaningful all-system ranking.Sources: C04, C06, C16. |

## Capabilities

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| Live-cell stability is a sample requirement, not merely an incubator checkbox.TEMPERATURE · GASES · EVAPORATION | OptIQ documents hypoxia capability; HCS.ai offers optional temperature, CO2, O2 and humidity control. CV8000 and CQ3000 specify different temperature ranges. CellInsight has an optional environmental module. | Gas settings and heater readings do not establish liquid conditions after plate exchange. CQ3000's published stability figures have specified ambient conditions, which must remain attached to the claim. | Measure representative liquid temperatures, evaporation, focus drift and gas recovery over the complete run. Unlike room-temperature glow endpoints, live mammalian-cell imaging may require 37°C and controlled gases. Preserve the biology's needs rather than importing a temperature recommendation from another assay.Sources: C02, C06, C09, C11, C15. |
| Finding the plate bottom is not the same as finding the specimen.AUTOFOCUS · TARGETED ACQUISITION | The families provide hardware/laser focusing with image-based options on several systems. PreciScan, QuickID, Target Search and EurekaScan implement forms of targeted or two-pass acquisition, depending on platform and modules. | Sparse cells, curved bottoms, matrix domes and multicellular objects can defeat a focus or prescan strategy that works well on a dense monolayer. | Demo dim wells and unusual phenotypes, not just a uniformly stained control plate. Check whether the prescan misses small or rare objects before celebrating its time saving. Record focus failures and accepted cells per well beside the total plate time.Sources: C02, C05, C06, C11, C13. |
| Nominal well count does not establish compatibility with your assay plate.PLATES · GEOMETRY | HCS.ai, CV8000, CQ3000 and CellInsight publish high-density plate support. The OptIQ brochure specifies 96/384 formats for its dispensing option; that is not its complete imaging-format specification. | Objective working distance, bottom thickness, carrier geometry, lids and reach near well walls can narrow practical compatibility. Imaging and dispensing can have different format limits. | Use the intended plate part number and objective in the acceptance test. Confirm complete well access and autofocus behavior. Obtain a current OptIQ imaging-format list rather than silently inheriting a Plus specification or mistaking the pipettor limit for the microscope limit.Sources: C02, C06, C09, C12, C13. |

## Downsides

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| Camera frame rate is not plate throughput.CALCULATION · ACQUISITION TIME | Illustration: 384 wells × 4 fields × 10 z-planes × 4 colors gives 61,440 channel images. At 100 ms per sequential channel, exposure alone takes 102.4 minutes. | If four appropriate channels are acquired simultaneously at the same 100 ms exposure, exposure time becomes 25.6 minutes. Motion, focusing, readout and processing still add time; unequal exposures can change the calculation. | This is a conditional timing model, not a product benchmark. Ask every supplier to time the same sampled area, z-range, pixel sampling and accepted biological endpoint. Report loaded-plate-to-reviewed-result time, including retries, rather than extrapolating from maximum fps.Sources: C03. Constructed timing example; not the Plus benchmark. |
| More images can move the bottleneck into analysis and storage.CALCULATION · DATA VOLUME | For the same illustrative 61,440 channel images, 2048 × 2048 pixels stored at 16 bits require about 515 GB, or 480 GiB, before compression and overhead. | Masks, pyramids, derived images, metadata and backups add storage. Parallel cameras reduce elapsed acquisition time, not the number of stored channel images. | Ask for raw export, metadata retention, reanalysis time and recovery after an interrupted transfer. Scope compute and storage with the instrument purchase. The calculation assumes one uncompressed plane per channel image; actual files depend on camera and acquisition settings.Calculated uncompressed payload, not measured storage use. |
| Analysis software can change the apparent biology.SEGMENTATION · VALIDATION | The families use Harmony/Phenologic.AI, MetaXpress Acquire/IN Carta, CellPathfinder-related workflows or HCS Studio. Included tools, optional modules and external integrations differ. | An algorithm that handles untreated cells can fail on rounded, fragmented or densely clustered treated cells. A visually attractive overlay is not enough to establish measurement accuracy. | Inspect masks and object-level results on held-out conditions, including the phenotypes expected from active compounds. Compare the reproducibility of the final decision and the effort needed to repair a failed analysis. Confirm offline licenses and whether raw data remain usable outside the acquisition software.Sources: C02, C05, C06, C09, C11, C13. |

## Advantages

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| Match the shortlist to the experiment's limiting step.USE CASE · PLATFORM FIT | Multi-camera OptIQ and CV8000 merit attention for parallel-color screening. CQ3000 offers optional two-color capture in a benchtop system. Operetta, HCS.ai and CellInsight offer distinct configurable acquisition/analysis workflows. | For thin fixed cells, cost and analysis may matter more than maximum optical sectioning. For organoids, depth and immersion may dominate. Fast live signals place greater weight on channel timing and environmental control. | Use these as shortlist hypotheses, not declared winners. Run a thin-cell endpoint, a relevant 3D specimen and a live-cell test only where each is part of the actual workload. Weight the results by the experiments the laboratory expects to perform.Sources: C01, C04, C06, C09, C12, C13. Use-case assessment, not an all-platform benchmark. |

## Notable Details

| The finding | Technology and product evidence | Trade-offs and controls | What it means |
| --- | --- | --- | --- |
| Resolve contradictory specifications before a purchase order makes them your problem.QUOTE · ACCEPTANCE CRITERIA | Three specific conflicts remain: OptIQ Single liquid-handling availability, HCS.ai maximum dry-objective NA, and CellInsight's advertised color count versus a manual channel limit. | A live webpage, brochure and manual can describe different releases or configurations. An omitted option is not proof of impossibility, and an advertised option is not proof of inclusion. | Ask for written resolution tied to the quoted configuration, then put the important performance criteria into the demonstration and acceptance plan. Include service, automation interfaces, software licensing, data export and failed-run recovery. No comparable price or service-response ranking was established here.Sources: C01, C02, C06, C07, C13, C15. |

## About the sources

Sources checked 25 September 2026. Manufacturer specifications describe the named product and configuration; they are not independent all-vendor benchmarks. Row-level source IDs link to the references below. Calculations and practical interpretations are identified separately. No physical comparison or procurement quotation is represented by these tables.

C01  [Revvity Opera Phenix OptIQ product and configuration matrix](https://www.revvity.com/product/opera-phenix-optiq-hh25000000)

C02  [Revvity Opera Phenix OptIQ brochure, 2026](https://resources.revvity.com/pdfs/bro-opera-phenix-optiq-high-content-screening-system.pdf)

C03  [Revvity Opera Phenix Plus technical performance: speed](https://resources.revvity.com/pdfs/012536A_TCH_Opera_Phenix_High_Content_Screening_System_Technical_Performance_Speed_V4.pdf)

C04  [Revvity Operetta CLS product/configuration matrix](https://www.revvity.com/product/operetta-cls-system-hh16000020)

C05  [Revvity Operetta CLS brochure, 2025](https://resources.revvity.com/pdfs/bro-operetta-cls-high-content-analysis-system.pdf)

C06  [Molecular Devices ImageXpress HCS.ai datasheet, January 2025](https://www.moleculardevices.com/sites/default/files/en/assets/data-sheets/dd/img/imagexpress-hcs-ai-system.pdf)

C07  [Molecular Devices ImageXpress HCS.ai product page](https://www.moleculardevices.com/products/cellular-imaging-systems/high-content-imaging/imagexpress-hcs-ai)

C08  [Molecular Devices ImageXpress Confocal HT.ai product page](https://www.moleculardevices.com/products/cellular-imaging-systems/high-content-imaging/imagexpress-confocal-ht-ai)

C09  [Yokogawa CellVoyager CV8000 product/specifications](https://www.yokogawa.com/us/solutions/products-and-services/life-science/high-content-analysis/cv8000/)

C10  [Yokogawa CV8000 brochure](https://web-material3.yokogawa.com/Bulletin_80H01D01-01E.pdf)

C11  [Yokogawa CQ3000 current product page](https://www.yokogawa.com/uk/solutions/products-and-services/life-science/high-content-analysis/high-content-analysis-system-cq3000/)

C12  [Yokogawa CQ3000 brochure](https://web-material3.yokogawa.com/BU80M01A01-01EN.pdf)

C13  [Thermo Scientific CellInsight CX7 LZR Pro current product page](https://www.thermofisher.com/order/catalog/product/HCSDCX7LZRPRO)

C14  [Thermo CellInsight CX7 LZR Pro specification sheet](https://assets.thermofisher.com/TFS-Assets/BID/Reference-Materials/cellinsight-cx7-lzr-pro-hcs-platform-specsheet.pdf)

C15  [Thermo CellInsight CX7 LZR Pro user guide MAN0026043](https://documents.thermofisher.com/TFS-Assets/LSG/manuals/MAN0026043_CellInsight_CX7_LZR_ProHighContentScreeningPlatform_UG.pdf)

C16  [Molecular Devices: tips for successful live-cell imaging](https://www.moleculardevices.com/lab-notes/cellular-imaging-systems/tips-running-successful-live-cell-imaging-experiment)

C17  [Versatile, do-it-yourself, low-cost spinning disk confocal microscope (primary research)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8884209/)
