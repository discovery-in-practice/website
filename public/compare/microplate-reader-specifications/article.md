# Microplate reader comparison: specifications and features

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/compare/microplate-reader-specifications/

Compare nine microplate readers across fluorescence, luminescence, TR-FRET, absorbance, plate handling, temperature control and ownership.

Microplate readers can differ in their optics, detector behavior, timing and the options installed. Compare the configuration and measurement conditions alongside each headline specification. This matrix keeps the specifications, reader-specific notes and explanation of each finding together.

[Specifications](https://discoveryinpractice.com/compare/microplate-reader-specifications/)[At a glance](https://discoveryinpractice.com/compare/microplate-readers-at-a-glance/)[Performance charts](https://discoveryinpractice.com/compare/microplate-reader-performance-charts/)

Find a feature Show a reader All readersCLARIOstar PlusEnVision NexusPHERAstar FSXSpectraMax iD3 / iD5Synergy H1Synergy Neo2Tecan SparkVANTAstarVarioskan LUX

## Fluorescence intensity

### 3 Fluorescence sensitivity, top, filters (fluorescein, converted to pM where the vendor gives a volume)

Filters are the sensitive path on every reader that has both. The number to compare is pM in a stated plate and volume; three vendors here print per-well amounts with no volume, or two different volumes on one sheet.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | <0.15 pM / <3 amol (384 small-volume, 20 µL). | — |
| EnVision Nexus | <2 pM (module 1001, 485/535 nm; 50 µL, 384 OptiPlate) = 100 amol; a comparison sheet gives 200 amol. Flash count not stated. | Excitation exists at 340, 355, 400, 485, 535, 555 and 632 nm only. A dye in between has no module. The filter-module list is sparse. |
| PHERAstar FSX | <0.15 pM / <3 amol (384sv black, 20 µL). 1536: <0.5 pM (8 µL). | Free-air light path: lenses, no fiber bundles. |
| SpectraMax iD3 / iD5 | iD5 only: 3 pM guaranteed, 0.5 pM optimized (384; volume not stated). iD3: no filters. | The iD3 has no filter path at all; every iD3 fluorescence read is a monochromator read. |
| Synergy H1 | 0.25 pM / 25 amol (384, works out to 100 µL). Manual guarantee: ≤10 pM (96-well; 3 pM typical in the IFU). | Filters read from the top only. The sheet figure is 40× better than the guarantee. |
| Synergy Neo2 | 0.2 pM / 4 amol (384 low-volume, 20 µL), typical. 1536: 1 pM (10 µL). BioTek’s brochure calls these “the average observed factory test values”; the 2016 manual (Appendix A) guarantees <5 pM filters and ≤20 pM monochromator, 25× and 10× the averages. | Sensitivity is qualified at Normal speed with 50 measurements per point; the 11 s sweep-mode speed on the same sheet comes from a different setting. |
| Tecan Spark | Standard: ≤25 amol in 100 µL = 0.25 pM. Enhanced: ≤8 amol in 10 µL (1536) = 0.8 pM. Calculated. | Quoted at fluorescein, the one color the standard module’s single 510 nm dichroic sits at. The manual’s binding spec for the standard module is <10 pM (40× the brochure). |
| VANTAstar | <0.5 pM / <10 amol (384sv, 20 µL). | — |
| Varioskan LUX | Not offered. Fluorescence intensity is monochromator only; the Varioskan’s filters serve luminescence, Alpha, BRET and TRF. | There is no filter path to fall back on when a fluorescence assay needs more light. |

### 4 Fluorescence sensitivity, bottom, filters

Cell-based assays in clear-bottom plates are read from the bottom. Ask early whether the assay is read from the top or the bottom: on the Neo2 that exposes a build dependency, on the H1 it exposes the monochromator, on the Nexus three modes don’t read from below at all.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | <1.0 pM / <50 amol (384 glass-bottom, 50 µL). | — |
| EnVision Nexus | Not published. Bottom FI is offered; the spec sheet gives no figure. “On-the-fly mode is not available when measuring from below.” | — |
| PHERAstar FSX | <1.0 pM (384g black, 50 µL). Same optic module reads top or bottom; autofocus. | From the bottom it still reads both emission colors at once, plus luminescence and Alpha. |
| SpectraMax iD3 / iD5 | Not published for filters; the published bottom figure is the monochromator one (2.5 pM optimized). | Read height “should be optimized for each new lot of microplates or assay volume used.” |
| Synergy H1 | Not offered. Filters read top only; every bottom read is a monochromator read. | — |
| Synergy Neo2 | 1 pM (100 µL, 384). Fixed bottom focus. Bottom reads need their own cubes and exist only on dual-top-PMT builds. | BioTek’s 2012 guide: bottom sensitivity “not demonstrated.” One bottom detector, so no simultaneous dual emission from below. |
| Tecan Spark | Standard: ≤500 amol (100 µL) = 5 pM. Enhanced: ≤180 amol (10 µL) = 18 pM. Calculated. | Twenty times the top figure on the same sheet. |
| VANTAstar | <2.5 pM / <125 amol (384g, 50 µL). | — |
| Varioskan LUX | Not offered (no filter FI). | — |

### 5 Fluorescence sensitivity, top, monochromator

On every sheet here that prints both, the monochromator is less sensitive than the filters. The size of the loss differs: ~2× on the BMG readers, 2.6× on the Spark by Tecan’s own note, 10× on the Neo2 and H1 by Agilent’s own sheet.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | <0.35 pM / <7 amol (384sv, 20 µL). Best monochromator figure published on any reader in this matrix. | The monochromator is about 2× less sensitive than the filters on the same sheet; the other readers lose 2× to 10×. |
| EnVision Nexus | Not offered. No monochromator in any mode. | — |
| PHERAstar FSX | No monochromator. Filter optic modules only. | Built for screening: every assay reads through a module made for its colors. |
| SpectraMax iD3 / iD5 | 6 pM guaranteed, 1 pM optimized (384; volume not stated). The iD3’s only fluorescence path. | MD’s own brochure rates its filters “10–40 times more sensitive than conventional monochromator based detection” in the near-IR. The iD3 has no filters. |
| Synergy H1 | 2.5 pM / 250 amol (384, 100 µL): 10× worse than its own filters. Manual guarantee ≤20 pM (96-well). | Fixed 16 nm band on most builds. A core facility taped a sign above its Synergy: “Please measure nano orange and mCherry plates with filter cubes, not with the monochromator!” |
| Synergy Neo2 | 2 pM / 40 amol (384 low-volume, 20 µL): ten times less sensitive than its own filters. | BioTek’s 2012 newsletter: “Filters are more optically efficient and will give you the best performance.” |
| Tecan Spark | Standard: ≤50 amol (100 µL) = 0.5 pM. Enhanced: ≤20 amol (10 µL) = 2 pM. Manual spec for the standard module: <20 pM. | Tecan’s own tech note prices its monochromator at 1.5–1.7× on one arm and 2.6× on both and calls that “comparable results.” The brochure figure uses the 510 nm dichroic; a dye away from fluorescein reads through a 50% mirror. |
| VANTAstar | <0.8 pM / <16 amol (384sv, 20 µL). | Under twice the filter figure (calculated). |
| Varioskan LUX | <400 amol per well (black 384; volume not stated) = 4 pM at 100 µL or 20 pM at 20 µL (calculated for both). | Its only fluorescence path, through an emission slit fixed at 12 nm. In a lab’s own PicoGreen QC test it failed the lab’s 20% CV limit; a fluorescein series across 3–400 amol read flat on it. |

### 6 Fluorescence sensitivity, bottom, monochromator

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | <3.0 pM / <150 amol (384g, 50 µL). | — |
| EnVision Nexus | Not offered. | — |
| PHERAstar FSX | No monochromator. | — |
| SpectraMax iD3 / iD5 | 2.5 pM optimized (384), against 1 pM from the top: 2.5× weaker (calculated). Guaranteed bottom figure: not published. | — |
| Synergy H1 | 4 pM / 400 amol (384). Manual guarantee ≤20 pM (96-well). The only bottom path the H1 has. | — |
| Synergy Neo2 | 2.5 pM (100 µL, 384). Fixed bottom focus. | — |
| Tecan Spark | Standard: ≤800 amol (100 µL) = 8 pM. Enhanced: ≤220 amol (10 µL) = 22 pM. Calculated. | Enhanced monochromator: 20 amol top against 220 bottom on the same plate and volume, 11× worse from below. |
| VANTAstar | <3.5 pM / <175 amol (384g, 50 µL). | — |
| Varioskan LUX | <4 fmol (4,000 amol) per well: ten times less sensitive than its own top read. Nothing refocuses; the plate adapter sets the height. | At 100 µL that is 40 pM; at 20 µL, 200 pM (calculated). |

### 7 Practical fluorescence dynamic range in one gain setting, without re-reading the plate

Take a plate whose brightest and dimmest wells are a million-fold apart. Readers that pick a gain per well inside the read see both at once; readers that fix a gain per read see one end and clip or lose the other, and the fix is a second pass. The Spark and Neo2 can widen effective range by reading the plate twice; that doubles the read time and breaks kinetic timing.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | 8 decades in a single measurement (Enhanced Dynamic Range): a test flash picks a factory-calibrated gain per well, inside the delay the read already has. | Works in kinetics, with injectors and with a stacker. The user never sets a gain. Flying mode, the fastest read, runs at a fixed gain without EDR; in standard mode EDR’s test flash fits inside the pause the read already takes. |
| EnVision Nexus | No gain to set on the Ultra-sensitive photon counter and no published count-rate ceiling. Filter-path PMTs: no gain setting in any Kaleido 4.1 operation; the only bright-sample control it names is an “Attenuated” filter-module property. | None of the ten operation parameter lists in the Kaleido 4.1 manual (Rev E) has a gain, PMT-voltage or sensitivity entry, and the 2026 filter list (2321302) shows no module marked attenuated. |
| PHERAstar FSX | 8 decades in one visit to the well (EDR). 700,000,000 counts. | Works in kinetics and with a stacker. Flying mode, the fastest read, runs at a fixed gain without EDR; in standard mode EDR’s test flash fits inside the pause the read already takes. |
| SpectraMax iD3 / iD5 | Kinetics run at a fixed gain chosen before the run, “a nominal dynamic range of three decades” per gain (MD, 2026). Endpoints get AutoPMT: a pre-read at High, then re-reads of saturated wells at Medium and Low. | MD’s own Figure 3: High saturates at 33 nM, Medium at 333 nM, Low is “losing sensitivity at low concentration.” The iD5 widens range for endpoints by re-reading saturated wells and, in fluorescence, by adjusting lamp intensity; it can’t do that in a kinetic or in luminescence. “For kinetic read, the PMT settings have to be fixed”; each gain covers “a nominal dynamic range of three decades.” |
| Synergy H1 | A single read tops out at 99,999 RFU; the manual’s remedy for saturation is “Try lowering the gain/sensitivity” (read again). BioTek’s 2010 table gave 5 decades; the 2026 sheet says 7 for the same model. | Gain is set per read, by number or scaled to a well the user picks as brightest. |
| Synergy Neo2 | Fixed gain per read, ceiling 10 million counts. “Auto-ranging” runs a gain check on every well and adds minutes per plate. BioTek support: use manual gain “for kinetic tests, rapid reads or for tests that require high sensitivity.” | Extended range by re-reading is possible for endpoints; for flash luminescence BioTek’s own tips say it is “simply not possible.” |
| Tecan Spark | One gain, chosen before the read, about 3–4 decades usable (inferred from Tecan’s help text). Tecan’s “extended dynamic range” is “Two consecutive measurement runs with a high and a low amplification” with the listed drawback “Long measurement times.” | Every one of Tecan’s four gain modes has a printed “Disadvantages” panel. Optimal mode: “If signal intensities within one plate are very far spread, certain signals might not be detected any more.” Two passes means the same well is read twice, at two moments; a kinetic can’t hold its timing. The two-pass method does widen the effective range for endpoints. Extended range is “Two consecutive measurement runs”; its listed drawback: “Long measurement times.” |
| VANTAstar | 8 decades in a single measurement (EDR), gain set per well in <0.1 s. | — |
| Varioskan LUX | Auto gain picks one of four calibrated gains per well from a trial flash. Product page commits to FI >6 decades; the tech note shows seven. | Whether auto gain runs in kinetic reads: not published. The gain is chosen before the signal moves. |

### 8 Who sets the detector gain, and when

When the user sets the gain before the read, a plate brighter or dimmer than expected has to be read again, and the time points of a kinetic run cannot be read again.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Nobody. EDR picks a calibrated gain per well from a test flash. Manual gain is available. | — |
| EnVision Nexus | No gain on Ultra-sensitive luminescence or HT Alpha (“Only one detector”). Filter path: no gain setting in any of the ten Kaleido 4.1 measurement operations. | Revvity does not say in words whether the filter-path PMT gain is fixed or automatic inside the instrument; Kaleido offers no control, and the “Attenuated” filter-module property is its only bright-sample lever. |
| PHERAstar FSX | Nobody on current units (EDR). Flying mode runs at a fixed gain. | — |
| SpectraMax iD3 / iD5 | The user, before a kinetic (“the PMT settings have to be fixed”); AutoPMT for endpoints only. Two wavelengths lock the gain at High. | The “gain locked at High for multiple-wavelength reads” sentence comes from the SoftMax Pro 7.0.2 guide for the i3x; no iD guide confirms it yet. |
| Synergy H1 | The user, per read: a number, or scaled to the well the user picks as brightest. | — |
| Synergy Neo2 | The user, per read, or auto-ranging per well at a time cost. | — |
| Tecan Spark | The user, before the read, from four modes (manual, calculated from well, optimal, extended). Each mode has a printed disadvantage. | Optimal: “Signals between different runs might not be comparable.” Calculated from well: “If any signal intensities from another well are higher, the detector might be oversaturated.” |
| VANTAstar | Nobody (EDR). | — |
| Varioskan LUX | The reader, one of four gains from a trial flash before each well; kinetic behavior not published. | — |

### 9 Detectors: how many, what kind, and whether two colors can be read at the same instant

Simultaneous dual emission means the two halves of a ratio come from the same flash, so lamp flicker and timing drop out of the ratio. Only two readers here do it as standard, and only one does it on identical detectors and from the bottom.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | One low-noise PMT; red-shifted PMT option to 900 nm; CCD spectrometer for absorbance. Two colors read one after the other. | — |
| EnVision Nexus | Two PMTs on the filter path (230–850 nm), simultaneous dual channel via dual-channel module. One PMT, 400–650 nm, on the Ultra-sensitive/HT-Alpha module, no filters. Photodiode for absorbance. | The most sensitive mode is one detector, one color, top only. BRET and any two-color luminescence drop to a less sensitive rung. The single-PMT “Nexus One” (2026) has no simultaneous pair at all. |
| PHERAstar FSX | Two matched pairs of PMTs (low-noise pair for FI/FP/lum; red-shifted pair for TR-FRET) plus a CCD spectrometer. Both channels of any ratio read at the same instant, top or bottom. | Simultaneous dual emission in FI, FP, luminescence, TR-FRET and Alpha, from the same flash, on identical detectors. |
| SpectraMax iD3 / iD5 | One “ultra-cooled” PMT for every mode, emission to 850 nm. Two colors one after the other. Photocathode type not named. | A tube that reaches 850 nm is red-extended and carries high dark current; the cooling is what makes it usable. Field experience: in luminescence it is “just good enough to be bad.” No warm-up, stability or drift figure is published. |
| Synergy H1 | One PMT per light path (one monochromator, one filter cube); photodiode for absorbance; red-shifted option to 900 nm. Two colors one after the other. | Saturates at 99,999 RFU. |
| Synergy Neo2 | Up to three PMTs. The two top detectors are different types: one extended into the red, one lower-noise that “isn’t responsive above 700nm.” Bottom: one PMT. Simultaneous dual emission top only, Dual Filter Top builds only, and the cube for it is special order (“please contact BioTek”). | A simultaneous ratio compares readings from two different kinds of tube. BioTek’s own installation test allows the red-shifted tube ten times the luminescence detection limit of the low-noise one (≤500 vs ≤50 amol). Choose two blue tubes and TR-FRET suffers; two red and BRET is ruined; one of each and neither is good. |
| Tecan Spark | One fluorescence PMT, one photon-counting luminescence PMT, a photodiode for absorbance. Every two-color fluorescence ratio is two reads. NanoBRET: donor then acceptor, 300 ms each. | — |
| VANTAstar | One low-noise PMT; CCD spectrometer. Two colors read one after the other. No red-shifted option. | — |
| Varioskan LUX | One PMT for every mode. Two colors one after the other. Luminescence calibration includes a dark-level drift check and expires every 10 minutes. | — |

### 10 Monochromator bandwidth, minimum and maximum

Bandwidth trades light for selectivity: wide for a dim dye, narrow to separate two close colors. The iD, the Varioskan (emission) and the standard Spark module have no bandwidth setting; the Neo2, the H1 M2 builds and the enhanced Spark stop at 50 nm.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | 8–100 nm, continuously, in 1 nm steps, excitation and emission set separately. | Widest bandwidth published on any reader in this matrix. No slit: the band is the overlap of two linear variable filters. |
| EnVision Nexus | Not applicable: no monochromator. Bandwidth is whatever the fitted filter module carries. | — |
| PHERAstar FSX | Not applicable: no monochromator. Bandwidth is set by the filters in each optic module, chosen when the module is built. | — |
| SpectraMax iD3 / iD5 | Fixed: 15 nm excitation, 25 nm emission. No bandwidth setting. | — |
| Synergy H1 | Fixed 16 nm on most builds, including the MF hybrid. 9–50 nm only on the four M2 part numbers. | Agilent’s own H1 page says variable bandwidth delivers “increased sensitivity and increased specificity,” so by Agilent’s account the 16 nm builds give up both. |
| Synergy Neo2 | 3–50 nm, “wavelength dependent,” 1 nm steps. | — |
| Tecan Spark | Standard: fixed 20 nm. Enhanced: 5–50 nm. | Tecan on its own standard module: the 20 nm band “allows detection of too much background signal” and gives “a decreased dynamic range.” Tecan on its own grating: light is “approximately proportional to the square of the slit width,” so narrowing the band costs light fast. |
| VANTAstar | 8–100 nm (93 settings), excitation and emission. | From a comparison table sent to a customer; not printed on the spec page. |
| Varioskan LUX | Excitation 5 or 12 nm. Emission “permanently set to 12 nm and cannot be changed.” Excitation and emission must sit at least 17 nm apart (24 nm with both at 12). | GFP emits over ~30 nm; a 12 nm slit leaves most of that undetected. Not on the product page or brochure; it is in the SkanIt technical manual. |

### 11 Monochromator design: how it selects color and how it blocks the wrong color

Stray light is lamp light that reaches the detector; it sets the background every dim sample has to beat. A grating leaks about one part in a thousand (Tecan’s own figure), which is why grating readers add a second grating or steer sensitive assays to filters.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Two linear variable filter (LVF) slides per monochromator, no grating, no slit. Light outside the band must pass two overlapping filters. | Tecan’s 2023 sales slide said LVFs give “less defined peaks”; BMG’s answer is to show the spectral scans. |
| EnVision Nexus | Not applicable: filter modules only. The manual: “It is advisable to insert the filter module in position 1 in order to obtain the best results.” | The slots are not equal. |
| PHERAstar FSX | Not applicable. Filters on a free-air light path, no light guides. | — |
| SpectraMax iD3 / iD5 | Grating monochromator. Blocking: the only stray-light figure published is for absorbance, ≤0.05% at 260 nm and 280 nm; no out-of-band rejection figure is given for the fluorescence or luminescence monochromators. MD, 2004 (GEMINI line): “a considerable amount of lamp light is reflected into emission beam. Raw background is much higher than in cuvette.” | The iD3 guide (Table A-2, p. 106) gives the same absorbance figure; the newer iD5e guide and brochure list it at 230 nm and 280 nm. The 2004 deck predates the iD series; the geometry it describes is the same. |
| Synergy H1 | Grating monochromators. Blocking figure: not published. The error table, on a monochromator read: “the luminescence probe may be picking up stray light. Try installing a plug in the filter cube.” | Stray light can reach the detector, and the fix is a part in the cube. |
| Synergy Neo2 | Grating monochromator on its own light path; Agilent calls it a “quad monochromator.” Out-of-band blocking figure for the fluorescence path: not published. The only stray-light number Agilent prints is for absorbance: 0.03% at 230 nm. | A BioTek-era Neo2 brochure (undated, hosted by a Harvard core facility) says “Four holographic gratings are used to eliminate stray light” but its own spec table lists “Double grating monochromators (top/bottom)”; neither version gives an OD or percent rejection figure. |
| Tecan Spark | Grating monochromators (“QuadX”); Tecan’s guide says the fluorescence module uses “double monochromators.” Blocking: 10⁶ for a double monochromator (10³ for a single one), a generic figure with no Spark-specific measurement. Tecan on the single-monochromator 10³: “this blocking is often not sufficient” for fluorescence. | This is the Spark’s own guide (v2.2, p. 163), the same passage the matrix had quoted from the Infinite 200 manual; superscripts are flattened to “103” and “106” in the text layer, and the guide’s worked example (10.000 counts vs 10 counts) confirms 10³. |
| VANTAstar | LVF, no grating, no slit. BMG: LVFs “eliminate the stray light issues found in conventional monochromators.” | — |
| Varioskan LUX | Gratings and slits; light guides carry light to and from the well. Light is lost at four points (excitation slit, delivery optic, emission light guide, emission slit). | Thermo’s 17 nm minimum separation rule exists “to prevent any stray light from the excitation light from interfering with the emission light.” |

### 12 Are fixed dichroic mirrors needed on the monochromator path?

A dichroic is the mirror that sends excitation down to the plate and lets emission back up; it works for one color band. Tecan says in print that the dichroic is where the sensitivity comes from, then ships one color of it. The readers with no dichroic on the monochromator path use a 50% mirror or none, and lose light. Only the LVD tracks the dye.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | No. Linear Variable Dichroic, 340–740 nm (to 760 nm with the red-shifted PMT): the mirror slides to match whatever wavelength the user sets, on every read. Patented. | The mirror is matched to the dye at every setting, with nothing to buy or fit. |
| EnVision Nexus | Not applicable: no monochromator. Every wavelength is a filter module, and the module list is fixed (7 excitation wavelengths). | — |
| PHERAstar FSX | Not applicable. Every optic module carries its own dichroic matched to its colors. | — |
| SpectraMax iD3 / iD5 | No dichroic on the monochromator path. Nothing to swap, and nothing matched to the dye. | — |
| Synergy H1 | The monochromator path has no dichroic. BioTek: “Dichroic mirrors provide better sensitivity than 50% mirrors, but they are dye-specific.” | The monochromator path gets none of that sensitivity; the cube does, one dye at a time. |
| Synergy Neo2 | The monochromator path has no dichroic at all; dichroics sit in the filter cubes. No tunable dichroic anywhere in the reader. | — |
| Tecan Spark | Yes. Standard module: one dichroic, at 510 nm, plus a 50% mirror. Enhanced: 510, 560 and 625 nm built in. Five more (410, 430, 458, 593, 660 nm) are “user-selectable” parts shipped in “a metal box… (including Allen key for installation).” | Tecan: “Combining QuadX Monochromators with dichroic mirrors gives the Spark reader industry-leading sensitivity.” Away from the fitted colors the light goes through the 50% mirror, which PerkinElmer’s manual says collects “only 25% of the possible emission signal.” The fluorescein spec is quoted at the one color the standard mirror sits at. |
| VANTAstar | No. Linear variable dichroic, 340–740 nm, tracks the wavelength on every read. | — |
| Varioskan LUX | No dichroic anywhere. Gratings, slits and light guides; no part of the path adjusts to the dye. | — |

### 13 What a new dye color requires

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | A new number in the software. Type the wavelengths in 1 nm steps or pick the dye by name; both LVF monochromators and the dichroic move to match. | — |
| EnVision Nexus | A new filter module, if Revvity makes one. 43 modules in the catalog; no custom modules. A pharma HTS site: “when they ask for a module for a new fluor they can’t get one.” | A protocol won’t start unless every module it names is loaded. |
| PHERAstar FSX | An optic module built for that color; “Any excitation and emission combination can be built to order.” Six positions, the sixth usually reserved for luminescence, so five assay modules sit in the reader at once; swap by hand in seconds; bar-coded. Lead time: not published (BMG’s site says delivery depends on configuration). | BMG’s Optic Modules page speaks of “five module bays,” which matches the five free for assay modules. |
| SpectraMax iD3 / iD5 | iD3: a software setting (monochromator only). iD5: a filter slide to buy, or the monochromator; standard kit is 350/60, 490/10, 616/10 plus polarizers; HTRF needs its own set. | — |
| Synergy H1 | New filters fitted by hand into the one cube (6-week lead time for custom), or the monochromator at 10× less sensitivity. BioTek’s own guide recommends 28 cube combinations for its fluorescent-protein list, for a reader that holds one cube. | — |
| Synergy Neo2 | A new filter cube, or the monochromator at 10× less sensitivity. Custom filters: “typical lead time of 6 weeks.” Every custom cube reads as ID 255: “It is the user’s responsibility to ensure that the correct custom filter cube is installed.” | — |
| Tecan Spark | Away from the fitted mirror colors: a 50% mirror and a quarter of the light at best, or a dichroic bought, stored and fitted by the user with an Allen key. A dye 10 nm away can mean a new part. | Someone in the lab keeps the mirror box, the Allen key and the record of which mirror is in. |
| VANTAstar | A software setting. Filters: four excitation and four emission in slides; more by quote. | — |
| Varioskan LUX | Fluorescence: a software setting, through the fixed 12 nm slit. Luminescence, BRET, Alpha, TRF: an emission filter bought separately and fitted with a pick-up tool inside the LAT module. | — |

### 14 Different filters or modules needed for top and bottom measurements?

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | No. Top or bottom is picked in software; autofocus to 0.1 mm on both sides. Bottom reading is a module. | — |
| EnVision Nexus | Top and bottom for FI, TRF and standard luminescence. Top only: FP, Enhanced and Ultra-sensitive luminescence, both Alpha modes. In aperture modes the measurement height can’t be adjusted. | — |
| PHERAstar FSX | No. The same optic module reads top or bottom, in every mode including luminescence and Alpha; switch in software; autofocus. | — |
| SpectraMax iD3 / iD5 | No (software switch). Bottom luminescence is a factory-installed option at 300/400 pM against 10/20 pM from the top (30× and 20× weaker, calculated). | — |
| Synergy H1 | Yes, in effect: filters read top only, so a bottom read means switching to the monochromator path. FP can’t be read from the bottom at all. | — |
| Synergy Neo2 | Yes. The cube that reads from the top does not read from the bottom: “Users may need to purchase two GFP modules.” One bottom cube fits at a time. Fixed bottom focus. Luminescence reads from the top only. Nothing two-color possible from the bottom. | No BRET, GeneBLAzer or any two-color read from the bottom, where most cell assays want to be read. |
| Tecan Spark | No for fluorescence (software switch, auto Z-focus both sides). Luminescence from the bottom: not confirmed in Tecan’s manual. | — |
| VANTAstar | No. Automatic switching, no hardware to move; autofocus 0.1 mm; FP, luminescence and TR-FRET all read from the bottom. | — |
| Varioskan LUX | No; switched in software. No focus adjustment from either side; the plate adapter sets the height. Bottom luminescence not offered. | — |

### 15 Maximum number of dual-emission assays resident before a physical module change

A reader that holds one assay’s optics at a time turns every assay switch into a hardware step, which is hard to automate and easy to get wrong.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Unlimited on the monochromator path (software). Filter slides are software-identified; the excitation and emission slides each hold 4 filters. | BMG's CLARIOstar Plus spec page says the same twice: “Ex and em slides hold 4 filters each” and “Excitation and emission slides for 4 filters each”. The page does not say how many dual-emission pairs that allows. |
| EnVision Nexus | Six filter-module positions (Kaleido numbers them 1-6). Dual-channel filter modules read both colors at once; the Ultra-sensitive module reads one color. | The six comes from Kaleido's “Position in Instrument” property; Revvity's spec sheet and flyers give no count. |
| PHERAstar FSX | Six optic modules in the reader at once (five included), one of them the luminescence module; each is one assay. Swap by hand in seconds, bar-coded. | Dual-emission is simultaneous on every one of them. |
| SpectraMax iD3 / iD5 | iD5 filter slides, auto-ID; slot count per slide is not published. The guide says only that “The first slot on the tab end of the filter slide is always empty” and that a protocol can “define up to four wavelength pairs.” iD3: monochromator only (software). The Enhanced TRF module sits “on the transport slide”; what still fits beside it is not stated. | The Standard Filter Kit is listed as “seven filters and two filter slides,” which does not state slide capacity. |
| Synergy H1 | One cube, two filter sets; an FP cube holds one set. Dual emission is sequential on one PMT. Swapping the whole cube is “the BioTek-recommended option.” | — |
| Synergy Neo2 | One. Two cube slots on top; a dual-emission cube (FP, TR-FRET, Alpha) takes both, and the cube is special order. Changing assay means taking cubes out: Gen5 “prompt[s] for filter cube installation at runtime, if necessary.” Two cube slots, and an unattended run stops to ask for a cube. Many assays require both cube slots, so frequent manual changes are required. Not automation friendly. | An unattended run that needs another cube stops and waits for a person. |
| Tecan Spark | Mirror slide: 1 dichroic position (standard), 3 (enhanced); others user-fitted. Filter slides: 6 filter positions per slide, one excitation slide and one emission slide. Enhanced luminescence picks from 38 internal filters the user can’t choose. | Tecan cautions that “Any changes to the filters in the filter slide are to be carried out by trained personnel!” |
| VANTAstar | Unlimited on the monochromator path. Filters: 4 excitation + 4 emission in slides. | — |
| Varioskan LUX | Filter nest inside the LAT module with eight configurable filter positions (plus open and blocked). Each change is a five-step tool job. Dual emission sequential on one PMT. | Luminescence, AlphaScreen and TRF emission filters are customer-installed (p. 41), and the manual's filter table (Table 8-25, p. 99) lists no filters, only a referral to a sales representative. |

### 16 Far-red reach (dyes past 650 nm)

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Red-shifted PMT option: monochromator to 840 nm, filters to 900 nm, tunable dichroic tracks to 760 nm. | — |
| EnVision Nexus | Filter-path PMTs reach 850 nm, but excitation modules stop at 632 nm and the Ultra-sensitive detector at 650 nm. | The module list sets the far-red limit. |
| PHERAstar FSX | Red-shifted matched PMT pair; modules for any excitation/emission built to order (Cy5 590→675 in the catalog). | — |
| SpectraMax iD3 / iD5 | iD3: far-red on the monochromator only, the path MD rates “10–40 times” weaker in the near-IR. iD5: red filter slides are extra. | — |
| Synergy H1 | Standard PMT stops at 700 nm; red-shifted option to 900 nm at the cost of the luminescence guarantee (≤75 → ≤500 amol). | — |
| Synergy Neo2 | The lower-noise top tube “isn’t responsive above 700nm” and the bottom tube is the same type. BioTek applications specialist (2013): “huge problems for FP and BRET applications in the far-red range.” | — |
| Tecan Spark | Tecan’s Alexa 647 benchmark (1.14 pM) used 100 flashes, 100 µL and “Dichroic mirror: Auto.” The standard module has no far-red dichroic; the 660 nm mirror is a user-fitted part. | — |
| VANTAstar | Filters and monochromators to 740 nm; no red-shifted PMT option. | — |
| Varioskan LUX | Emission to 840 nm, monochromator only, through the fixed 12 nm slit. Far-red sensitivity not published. | — |

### 17 Light source and in-run calibration

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Xenon flash lamp; laser modules for Alpha. In-run calibration: none documented. | — |
| EnVision Nexus | Xenon flash lamp; optional 343 nm diode-pumped solid-state TRF laser (“< 200 µJ” per pulse); 700 mW or 400 mW Alpha laser depending on mode. | PerkinElmer’s 2008 stacker rule: reduce gain or excitation light 10–20% in advance so a bright plate doesn’t saturate. |
| PHERAstar FSX | Xenon flash lamp; dedicated TRF laser (60 flashes/s) and Alpha laser options. | — |
| SpectraMax iD3 / iD5 | Xenon flash lamp. No warm-up, stability or drift figure published for the cooled PMT. | — |
| Synergy H1 | Xenon flash lamp, “not user-changeable.” No laser offered. | — |
| Synergy Neo2 | Two xenon flash lamps, 20 W for the monochromator and 5 W for the filters, both “(not user-changeable)”; TRF laser on 7 of 19 part numbers; Alpha laser. | Two wear parts where one would do, by field report. |
| Tecan Spark | Xenon flash lamp; 680 nm, 750 mW Alpha laser. In-run calibration: only the absorbance module is described, with a reference photodiode on the beam and a reference reading with the plate carrier out of the beam before the plate is measured. No reference detector is described for fluorescence or luminescence. | For fluorescence the guide mentions only stored data (“Calibration data is saved on the instrument and intensity value corrections are performed automatically”); its error table lists dark-count and “Lamp low error” checks but describes no correction. |
| VANTAstar | Xenon flash lamp. A reference channel measures every flash and corrects each reading; BMG: “No calibration of optical components is required.” | — |
| Varioskan LUX | Xenon flash lamp; 680 nm LED for Alpha. Calibration expires every 10 minutes in FI, TRF, luminescence and Alpha (one hour in absorbance); if the protocol leaves no gap the results carry a warning that accuracy “may have suffered.” | A kinetic has to be spaced around the calibration clock. How long a calibration takes: not published. |

## Luminescence

### 18 Luminescence sensitivity, top (ATP; flash and glow are different tests)

These figures differ in kit and chemistry (glow vs flash), in whether a volume is given, and in whether they belong to an optional detector. The Neo2 and H1 data sheets name no volume or plate, so their headlines can’t be checked against the manuals’ 96-well guarantees. Revvity’s own technical note measured a Nexus detection limit 8,290× the spec sheet’s.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Flash: <0.4 pM / <8 amol ATP (384sv, 20 µL). Glow: <150 amol (comparison sheet). | Best flash figure published on any reader in this matrix (tied with the FSX). |
| EnVision Nexus | Spec sheet (ATPlite 1step, 384 AlphaPlate, 15 µL): Standard <0.25 pM, Enhanced <0.025 pM, Ultra-sensitive <0.001 pM. Revvity’s own technical note, same kit, plate and volume, 1 s integration: 138.77 / 85.99 / 8.29 pM. | The <0.001 pM figure implies detecting about one photon every 42 seconds, which is not physically achievable. Black 384 plates give a 4–5× worse LLOQ (Revvity’s own Table 2). The Ultra-sensitive mode is an option, one color, top only. Revvity’s own technical note measured its luminescence 8,290× worse than its spec sheet. |
| PHERAstar FSX | Flash: <0.4 pM / <8 amol ATP (384sv white, 20 µL). Dedicated luminescence optics on the low-noise PMT pair, top or bottom. | — |
| SpectraMax iD3 / iD5 | 10 pM (96) / 20 pM (384) guaranteed, ATPlite; live spec page prints 2 / 4 pM. The sensitive “All Wavelengths” setting covers 300–650 nm; no figure for the monochromator path. | One cooled red-reaching PMT does luminescence. Field experience: just good enough to be bad. |
| Synergy H1 | Data sheet: 10 amol filters, 20 amol monochromator, no plate, no flash or glow stated. Manual guarantee: ≤75 amol/well, 96-well (30 typical); ≤500 amol with the red-shifted PMT. | The guarantee is 7.5× the sheet (calculated). BioTek’s own Gaussia note: “some additional signal variability… in the final three decades,” the dim end. |
| Synergy Neo2 | Data sheet: 5 amol “typical” (384 low-volume; no read time, no detector named). Manual: “≤ 50 amol/well, 10 amol typical,” 96-well, 200 µL, 10 s per well. Installation pass line with the red-shifted tube: “≤ 500 amol.” | 500 amol is 10× the manual’s spec, 50× the manual’s typical and 100× the data-sheet headline (different plate; calculated). Read through the cube’s “empty filter position,” with no aperture between plate and optics. |
| Tecan Spark | Glow ≤225 amol (25 µL, Biothema kit) = 9 pM. Flash ≤12 amol (55 µL, ENLITEN kit) = 0.22 pM. Calculated. Tecan’s Reference Guide specification: glow < 10 pM (384, 100 µL, 1 s per well); flash < 0.8 pM at 10 s per well (384, 100 µL). | Tecan’s own note on its warm chamber: glow signal +34% in six minutes at 4 °C above ambient, CV 7.7% against 0.3% at ambient. Tecan says the electronics warm the chamber by up to +4 °C. The guide’s flash figure is 3.7× the brochure’s 0.218 pM and needs 10 seconds per well: about an hour for a 384-well plate (calculated). |
| VANTAstar | <0.8 pM / <15 amol ATP (384sv, 20 µL). | — |
| Varioskan LUX | <7 amol ATP (white 384; assay and volume not published). Detects 360–670 nm. | Bottom luminescence not offered. Calibration expires every 10 minutes. |

### 19 Luminescence sensitivity, bottom

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Luminescence reads top or bottom, switched in software. Bottom figure: not published; BMG gives one LUM figure, < 0.4 pM (< 8 amol/well ATP, 384sv, 20 µL), with no top/bottom label, and lists bottom sensitivity only for fluorescence. | BMG’s bottom-reading page: its readers “require no displacement or installation of additional hardware (dichroics, apertures, filters, or mirrors) when switching between top and bottom reading modes.” |
| EnVision Nexus | Standard luminescence only. Enhanced and Ultra-sensitive are top only. | — |
| PHERAstar FSX | Top or bottom on the same optics, matched PMT pair, simultaneous dual emission from below. Bottom figure: not published; BMG gives one LUM figure, < 0.4 pM (< 8 amol/well ATP, 384sv white, 20 µL), with no top/bottom label, and lists a bottom figure only for fluorescence intensity (< 1.0 pM FITC, 384g black, 50 µL). | — |
| SpectraMax iD3 / iD5 | 300 pM (96) / 400 pM (384), a factory-installed option: 30× and 20× weaker than the top (calculated). | — |
| Synergy H1 | Not published; luminescence reads through the filter path (top) or the monochromator. | — |
| Synergy Neo2 | Not offered. Luminescence “from the top of 6- to 384-well plates” only. | No BRET or two-color luminescence from the bottom. |
| Tecan Spark | Not confirmed. No bottom luminescence found in Tecan’s manual (field notes). | — |
| VANTAstar | Luminescence from the bottom offered. Bottom figure: not published; BMG gives one LUM figure, < 0.8 pM (< 15 amol/well ATP, 384sv, 20 µL), with no top/bottom label, and lists bottom figures only for fluorescence intensity. | BMG's own wording that bottom luminescence is offered: “Full top/bottom detection capability with automatic switch” (product page features). |
| Varioskan LUX | Not offered (user reports). | — |

### 20 Practical luminescence dynamic range in one gain setting

A photon counter with no gain is the most sensitive luminescence detector until the well gets bright. Then it misses photons, and unless the software corrects for it, the top of the curve flattens. Revvity publishes no correction or warning. Gain-per-well readers (EDR) cover the whole range in one read; fixed-gain readers cover ~3 decades per setting.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | 8 decades in a single measurement (EDR), bright and dim wells on one plate without a second read. | — |
| EnVision Nexus | Revvity: “>8 logs” (Ultra-sensitive). No dead time, correction or overflow limit published. Analysis of a pharma customer’s paired plates found counting losses consistent with a ~48 ns dead time (about 20% at 5.4 million counts/s, before any correction). | Ask Revvity what Kaleido does about dead time and what appears when the detector’s over-light line goes high. Revvity documents no warning when high standards start to compress; in the customer’s plates, Z′ improved as signal was lost. The loss figures are before any dead-time correction. Past saturation, a counter’s reading falls as light rises, and no correction can recover that. |
| PHERAstar FSX | 8 decades in one visit to the well (EDR). 200,000,000 counts | — |
| SpectraMax iD3 / iD5 | >7 decades as an endpoint figure (AutoPMT per well). Kinetics: a fixed gain, “a nominal dynamic range of three decades.” Low gain “requires Attenuation/Optical Density setting 0–3.” | The lamp-intensity trick that widens fluorescence range does not exist in luminescence. |
| Synergy H1 | Not published in decades or counts. Gen5 marks overflow above 99,998 counts; in BioTek’s own luciferase note the operator set the gain by hand to stay “below the photomultiplier tube (PMT) saturation threshold (overflow).” | — |
| Synergy Neo2 | Agilent: “> 6 decades.” With flash assays, extended range is “simply not possible” (BioTek’s own tips). | The Neo2 can widen effective range for glow endpoints by re-reading at a second gain. |
| Tecan Spark | >9 decades with gray attenuation filters (OD1–OD3; standard module OD1, OD2) chosen before the read. The enhanced module’s extra decade is the OD3 filter (inferred). | The Spark reaches those decades by picking a dimming filter before the read; the plate is still read at one gain. The Spark can also widen effective range by reading the plate twice. |
| VANTAstar | 8 decades in a single measurement (EDR). | — |
| Varioskan LUX | >7 decades. Every luminescence calibration adds a dark-level check “to compensate for possible electronic component and photomultiplier signal level drift”; calibration expires every 10 minutes. | — |

### 21 Luminescence-capable monochromator?

A luminescence monochromator makes a new luciferase pair a software setting and lets the user see the emission curve. Ask how much signal the monochromator path loses, and whether the sensitive path bypasses it.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Yes. Luminescence through filters (240–740 nm) or the LVF monochromator (320–740 nm) at bandwidths to 100 nm; luminescence spectra. The default path bypasses both for maximum photons. | Promega dual-luciferase certified through the LVF at 100 nm bandwidth. |
| EnVision Nexus | No. No monochromator in any mode. | — |
| PHERAstar FSX | No monochromator. Luminescence through dedicated filter optics, matched PMT pair. | — |
| SpectraMax iD3 / iD5 | Yes, monochromator path to 850 nm; its sensitivity is not published. The live spec page prints “Lumi: 300–850 nm” with no qualifier. | The headline range comes from the path with no published sensitivity. |
| Synergy H1 | Yes, for spectral scans, at the fixed 16 nm band on most builds. | — |
| Synergy Neo2 | Yes, luminescence spectra on the monochromator, 230–999 nm. Sensitive luminescence runs through the cube’s empty filter position. | — |
| Tecan Spark | Enhanced module only: software picks from 38 internal filters; the user can’t. Standard module: single-color luminescence. Luminescence spectra on the enhanced module. | Center wavelength and bandwidth show up grayed out in SparkControl. |
| VANTAstar | Yes. Filters (240–740 nm) or LVF monochromators (320–740 nm), spectra included. | — |
| Varioskan LUX | Yes, spectral luminescence up to 384-well, through the fixed 12 nm emission slit. | — |

### 22 Integrated crosstalk apertures (the mask between plate and detector that blocks neighboring wells)?

Crosstalk is a bright well leaking into its neighbors. The mask has to sit between the plate and the lens; after the lens, it cannot block light the lens has already collected. Where the vendor’s own fix is “read every other well” or a smaller aperture that cuts signal, the aperture is not stopping the crosstalk.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Yes. BMG’s application note AN371: an aperture spoon “is set up directly on top of the target well.” Crosstalk figure: not published on bmglabtech.com. | AN371 (2022) gives mathematical crosstalk-correction factors (white 0.05353%, gray 0.01277%, black 0.00026%), not an aperture crosstalk figure. |
| EnVision Nexus | Yes, but hand-swapped per plate format, in gloves, through a transfer plate and a wizard. 2023 manual: the match “is not validated by the software,” beside a legend reading “Does not produce reasonable data or even damages the instrument.” The 2024 warning can be dismissed: “You can ignore the warning and start the measurement in any case.” | A wrong aperture still produces a completed run. With an aperture in, the read height is fixed. Field notes: a mis-load can drop an aperture inside the instrument. |
| PHERAstar FSX | Yes: aperture spoons, one per plate format (96/384, 1536, 3456). The FSX manual offers them to “reduce crosstalk even further in certain applications.” Crosstalk figure: not published. | — |
| SpectraMax iD3 / iD5 | None described. Field reports: MD support “requests that customers use every other well when this is an issue,” which gives up half the plate. | — |
| Synergy H1 | None. No aperture is described anywhere in the H1 manual; luminescence reads through an empty cube position. | — |
| Synergy Neo2 | No aperture between the plate and the optics. The aperture sits inside the cube, after the collecting lens, where light from the neighbors has already been gathered (inferred). Crosstalk control is bought as “high sensitivity” and “low cross talk” cube variants. | Three BRET assays can mean six cubes. The “low cross talk” cube gives up much of the signal. |
| Tecan Spark | “Enhanced Aperture” is a separate line item. A 2023 university quote left it out. | — |
| VANTAstar | Yes, automatic: built-in luminescence crosstalk reduction, applied automatically up to 384 wells, no parts to place. Figure: not published. | — |
| Varioskan LUX | A “crosstalk shield” after the light is collected, from one detection position. Thermo’s remedies: a smaller aperture that works “by decreasing luminescense signals,” and re-aligning the LAT module after cleaning or service. | — |

### 23 Published luminescence crosstalk figure

Promega published crosstalk data for the H1 (Figure 132), and Thermo published its own for the Varioskan (Figure 5). Neither vendor prints a crosstalk specification.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Not published (brochure and spec page checked). | — |
| EnVision Nexus | Revvity’s figures are on its own AlphaPlates: “Most white plates show light leakage… This cannot be prevented by the optical design of a plate reader.” On White OptiPlate, Ultra-sensitive crosstalk was 0.70%, the worst of the three modes. | — |
| PHERAstar FSX | Not published on bmglabtech.com or in the FSX specification table. | — |
| SpectraMax iD3 / iD5 | <0.1% in 96-well half-area, <0.2% in 384 small-volume, white Costar. Clear-bottom bottom reads: <0.4%. | Quoted in the easiest plates. |
| Synergy H1 | Not published. Promega measured one H1 two ways, 96-well: 530 vs 5,063 RLU per 10⁶, depending on which mode the software was in first (9.6× apart). | Promega’s caption: “The same multimode reader produces differing well-to-well cross talk dependent upon instrument setup.” At 5,063 per million, a well reading 1,000,000 puts about 5,000 into its neighbor. Promega sells the GloMax, so lean on the H1-against-itself pair. |
| Synergy Neo2 | “< 0.1% in 96-well plate; < 0.25% in low-volume 384-well plate.” Nothing for 1536. | An AstraZeneca SLAS poster, as cited in a presentation, showed low-signal error bars “significantly higher on the Neo2.” |
| Tecan Spark | No crosstalk figure is published. Tecan says only that dedicated fibers for each plate format “minimizes crosstalk and gives luminometer-like performance”; the spec sheet and reference guide list no percentage. | Tecan’s MultiCheck Plus QC plate includes a luminescence crosstalk check for Spark, but the Tecan page lists no pass limit. |
| VANTAstar | Not published (spec page). | — |
| Varioskan LUX | Not published. Thermo’s own paper (D10893), Figure 5, plots luminescence crosstalk on a log scale outward from one bright well: still measurable several wells away, above 0.01% across much of the plate. | Fixed optics can’t focus into the well to cut it. |

### 24 Luminescence light path: dedicated optics or a gap in the fluorescence optics

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Dedicated path by default (bypasses the LVF for maximum photons); can be routed through the LVF or a filter. | — |
| EnVision Nexus | Three paths: Standard and Enhanced on the two-PMT filter path; Ultra-sensitive on “a designated US detection unit” (option, one color, top only). Luminescence is never read on the fly: 1:13 per 384 plate against 0:13 for FI at the same 100 ms (5.6×, calculated). | — |
| PHERAstar FSX | Its own light path: sample, focus lens, optic module, matched PMT pair. No light source and no excitation side in the path. Top or bottom. | — |
| SpectraMax iD3 / iD5 | “All Wavelengths” path, 300–650 nm, on the one cooled PMT shared with far-red fluorescence; bottom reads through a 675 nm short-pass filter. | — |
| Synergy H1 | “Luminescence is measured through an empty filter position in the filter cube,” or a direct channel, “no filtering, white light only.” BioTek’s qualification reads it with the excitation position set to “Plug” and the emission to “Hole.” | — |
| Synergy Neo2 | “Luminescence is measured through an empty filter position in the filter cube.” No luminescence optic of its own; even a luminescence-only lab needs a cube in the slot, and the single-detector top cube is “REQUIRED for top measurements.” | — |
| Tecan Spark | Dedicated luminescence PMT, photon counting. Every luminescence read is lid off, by Tecan’s own protocol: “select always without lid for luminescence!” | A university SOP: “ALWAYS choose NO when applying luminescence, as the detector is placed deep over the wells.” |
| VANTAstar | Separate top lens for luminescence, switched automatically; filters or LVF. | — |
| Varioskan LUX | Direct (no filter) or through a user-fitted filter, 360–670 nm, in the LAT module. | — |

### 25 Multicolor luminescence and BRET: donor and acceptor read together or one after the other

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Sequential, through the LVF monochromator at bandwidths to 100 nm, no filters needed; a new luciferase pair is a software setting. Promega dual-luciferase certified. | — |
| EnVision Nexus | Simultaneous on the filter path (dual-channel module) at Standard or Enhanced sensitivity only. The Ultra-sensitive mode reads one color, so BRET can’t use it; the sheet rates Ultra-sensitive “up to 25x” more sensitive than Enhanced. | A pharma BRET comparison: “certainly the Nexus was not better.” |
| PHERAstar FSX | Simultaneous, as standard, on two matched low-noise PMTs, top or bottom. NanoBRET 610/450 module in the catalog; any pair built to order. | Neither signal decays while waiting its turn. |
| SpectraMax iD3 / iD5 | Sequential on one PMT; sold as expansions. Two wavelengths lock the gain at High (documented for the i3x; not yet confirmed for the iD). Promega’s NanoBRET lists don’t name the iD3/iD5. | — |
| Synergy H1 | Sequential: 485/20 then 640LP, 1 s each (BioTek’s own dual-luciferase note). | — |
| Synergy Neo2 | Simultaneous top only, on two different kinds of detector; a comparison sheet: “the red-PMT performs poorly” for dual-emission BRET. No simultaneous BRET from the bottom. The two-color cube is “please contact BioTek.” Promega’s NanoBRET lists name no BioTek or Agilent reader. | — |
| Tecan Spark | Sequential, 300 ms each (Tecan’s NanoBRET note); “BRET ratios were computed manually.” Enhanced module only; software picks the filters. Promega’s NanoBRET instrument lists (2016, 2025) don’t name the Spark. | — |
| VANTAstar | Sequential, through filters or the LVF monochromators (no filters required). | — |
| Varioskan LUX | Sequential on one PMT; emission filters bought separately and fitted with a pick-up tool. | — |

### 26 Injection possible concurrent with detection?

Flash luminescence peaks as the reagent reaches the well and fades within seconds. A reader that injects elsewhere, or waits half a second, misses the peak. Only two readers here read while the reagent goes in.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Yes: injection at the read position. Up to two injectors, 3–500 µL, up to 420 µL/s; <30 µL dead volume; clear, user-replaceable tubing. | With the injection spoon fitted and lens protect off, the reader injects during measurement; no post-injection delay for true flash luminescence. |
| EnVision Nexus | Not published. The 77-page user manual has no injector or dispenser specification. | The 2008 EnVision’s sensitive detectors had no “real time” dispense-and-read mode, only a “shortened interval.” |
| PHERAstar FSX | Yes: injection at the read position, recording 50 readings per second through the injection. Two injectors, 3–500 µL, up to 420 µL/s, 0.5 mL prime. Any format to 1536. | — |
| SpectraMax iD3 / iD5 | No: luminescence reads wait “500 msec after injection ends” (800 ms for absorbance). Injectors not usable in FP or TRF; prime “at least 2 mL” plus 250 µL; plates must be unlidded; a PC is required for any injector protocol. | Peristaltic pumps: “The lifetime of the tubing is limited and you must replace the tubing when worn.” Accuracy ±(4% + 1 µL), so ≥14% at 10 µL (calculated). |
| Synergy H1 | Injectors to 384 from an external dispense module; the manual says only that the tips go into “holes inside the reader” and gives no tip-to-optics position or dispense-to-read delay (the Neo2 manual gives one). Dead volume 1.1 mL; “minimum recommended prime volume is 2000 μL.” | Opaque tubing and tips out of sight; a poor fit for shared equipment. |
| Synergy Neo2 | Injectors to 384 only, one well at a time, from an external module. Manual: the tips seat in holes inside the reader “behind the filter cube chamber(s)”; it specifies a maximum delay of < 1.0 second between end of dispense and start of read. Minimum prime 2,000 µL. | The manual never says the plate moves between dispense and read, or that the reader reads during injection; it gives only the tip location and the delay figure (p. 151, 96/384-well, default probe heights). |
| Tecan Spark | No. Injection position is away from the optics; the plate travels between inject and read. External module, opaque tubing, dead volume ≤100 µL. | The first light of a flash reaction happens where nothing is looking. |
| VANTAstar | No. Injection happens away from the read position: the reagent is added, then the well is read. Back-flush, heater and stirrer. | — |
| Varioskan LUX | Only with the dispensing head placed in the L position by hand. In the wrong position: “an extra plate movement… This may cause minor time delays between dispensing and measurement.” No dispensing with lidded-plate adapters or in 1536. Dead volume <100 µL. | — |

## Time-resolved fluorescence, polarization and alpha

### 27 Time-resolved fluorescence sensitivity (europium)

Three readers have a laser; the other six excite TRF with a flash lamp. A laser delivers more UV light per flash, so fewer flashes per well are needed: the FSX reads a 1536-well HTRF plate in 36 s at Z′ 0.8 (Cisbio poster).

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | <20 fM (384, 80 µL; <1.6 amol/well) with the Ultra HTRF/TRF module. Xenon flash lamp. | — |
| EnVision Nexus | Laser <4 fM (0.004 pM); lamp <20 fM (15 µL ProxiPlate). Laser is an option: diode-pumped solid state, 343 nm, “< 200 µJ” per pulse. | Field experience: a diode source, and not that powerful. A pharma site’s 2023 demo never tested the laser: “our unit laser was broken.” |
| PHERAstar FSX | Laser TRF: <5 fM (384, 80 µL; 0.4 amol/well), on a dedicated red-shifted PMT pair. HTRF Delta F >1100%. | Best TRF figure published on any reader in this matrix (tied with the Neo2 laser’s 5 fM, which is a typical in a different plate). |
| SpectraMax iD3 / iD5 | iD5 only. Standard 150 fM guaranteed; with the Enhanced TRF module 100 fM guaranteed, 10 fM optimized. iD3: not offered. | The module is fitted by the customer with a 2.0 mm hex key, instrument powered on. TRF module must be removed if some non TRF-modes are read. Not appropriate for shared equipment |
| Synergy H1 | Data sheet <40 fM (no plate). Manual guarantee ≤250 fM, 96-well, more than 6× worse (calculated). Flash lamp; no laser offered. | — |
| Synergy Neo2 | 5 fM with the TRF laser, 40 fM with the lamp (384 low-volume, typical). Manual lamp figure: “≤ 250 fM (100 fM typical).” Laser ships only on Dual Filter Top builds, 7 of 19 part numbers. | Single Filter Top readers never get the laser, and the manual still sells it as “upgrade later.” |
| Tecan Spark | Filters ≤4 amol (100 µL) = 40 fM standard; ≤0.5 amol (20 µL) = 25 fM enhanced. Monochromator ≤10 amol / ≤0.7 amol. Flash lamp only; no laser. Calculated. | — |
| VANTAstar | <30 fM (384, 80 µL; <2.4 amol/well). Flash lamp, filters. | — |
| Varioskan LUX | <1 amol per well (white low-volume 384; volume not stated) = 50 fM at 20 µL (calculated). Fixed 334 nm excitation filter; flash lamp. | Calibration expires every 10 minutes. |

### 28 HTRF certification, plate color, and how the two colors are read

Black plates cut crosstalk but return less light. Tecan gives the reason its monochromator path is not certified in black plates: “the light levels are too low.”

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Certified in black and white plates. Delta F >880% on the Cisbio control kit. Two colors read one after the other. | BMG’s brochure: “The ability to measure HTRF in black plates is only prerogative of the most sensitive readers.” |
| EnVision Nexus | HTRF certified; setup note: “This reader only allows high performance HTRF measurement when assays are run in WHITE plates.” Simultaneous on the filter path. Automatic HTRF ratio for lamp-plus-laser reads arrived as a new feature in January 2024. | A pharma HTS site “can’t export ratios as raw data” and could not obtain Revvity’s green 490/520 terbium module. |
| PHERAstar FSX | Certified in black and white plates; Delta F >1100%. Donor and acceptor at the same instant, from one laser flash, 60 flashes/s. A 1536 HTRF plate in 36 s at Z′ 0.8 (Cisbio poster). | — |
| SpectraMax iD3 / iD5 | Certified for HTRF (iD5 + Enhanced TRF module). Sequential; two emissions lock the gain at High. MD’s own THUNDER note ranks the iD5 last of three MD readers on signal-to-background: iD5 3.4 · i3x 3.7 · M5e 4.5. | MD’s own Thunder TR-FRET application note ranks the iD5 last of three MD readers for TR-FRET. |
| Synergy H1 | Cisbio-certified (BioTek’s June 2019 release lists the Synergy H1 among its “HTRF-certified detection systems”). Revvity’s H1 setup sheet allows filter-based mode only (“The monochromator mode is not HTRF compatible”) and says high-performance HTRF needs white plates. Two sequential reads (620 nm, then 665 nm) on one PMT; fixed 16 nm monochromator on most builds. | Certification: BioTek press release (26 Jun 2019): “BioTek’s other current HTRF-certified detection systems include the Synergy H1 Hybrid Multi-Mode Reader.” Setup sheet: Revvity, spc-htrf-setup-biotek-synergy-h1 (2024). The H1 data sheet does not mention HTRF. |
| Synergy Neo2 | Certified white plates only. Simultaneous only on Dual Filter Top builds with a special-order cube; the 665 and 620 nm signals land on two different kinds of tube. A side-by-side test: Z′ “dropped significantly” when read fast (field test; data not held). | — |
| Tecan Spark | Sequential, one detector. Tecan: the monochromator path is “not certified for HTRF measurements in black plates, as the light levels are too low.” Every monochromator-emission configuration fails Cisbio’s ΔF criterion (419–420 against 600) because of the 20 nm band. 384 plate: 2:06 on filters, 10:37–13:50 on the monochromator. | — |
| VANTAstar | HTRF/TR-FRET through filters; Reader Control Kit Delta F >700%, figures published for black and white plates. Sequential. | — |
| Varioskan LUX | TR-FRET and HTRF listed; Thermo calls it a “Certified HTRF compatible reader by CisBio Bioassays” and names no plate colors. Sequential through one PMT; fixed 334 nm excitation. | The certification is Thermo's claim, not independently confirmed against Revvity's certified-reader list; the page's only plate statement is a TRF sensitivity quoted on a white low-volume 384-well plate. |

### 29 Decay-curve tool for setting TRF delay and integration window

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | No. BMG's Decay Curve Monitoring page calls it “a unique PHERAstar® FSX microplate reader feature” and lists only the PHERAstar FSX as a compatible reader. | BMG’s TRF page ties Decay Curve Monitoring to the FSX’s photon-counting PMT; the PHERAstar FSX is the only BMG reader with it. |
| EnVision Nexus | A fixed “default decay curve” whose “parameters cannot be modified as long as this option is checked,” not available on the fly. No user-built decay curve. | — |
| PHERAstar FSX | Decay Curve Monitoring: records the TRF signal against time so delay and window are set from the measured decay; integration-time wizard in MARS. | Field tests: the best start differs, 50 µs for Tb–D2 on a laser, 80 µs on a flash lamp. Without the tool, that is found by trial. |
| SpectraMax iD3 / iD5 | Not offered. | — |
| Synergy H1 | No decay-curve tool appears in the H1 manual, data sheet or product page. Gate settable: delay 0–16,000 µs, integration 20–16,000 µs. | — |
| Synergy Neo2 | No. | — |
| Tecan Spark | Not offered in Tecan’s spec sheet or manual. | — |
| VANTAstar | No. BMG's Decay Curve Monitoring page calls it “a unique PHERAstar® FSX microplate reader feature” and lists only the PHERAstar FSX as a compatible reader. | — |
| Varioskan LUX | Not offered, as far as Thermo’s documents show. | — |

### 30 Fluorescence polarization precision, top (SD at 1 nM fluorescein; smaller is better)

Four vendors moved four different conditions on the same spec: Agilent moved the plate format, MD moved the concentration, Tecan dropped the plate, Revvity dropped both. Ask for mP at 1 nM in the plate you use.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | <0.5 mP (384sv, 20 µL). Instant polarizer switching. | Best FP figure published on any reader in this matrix (tied with the FSX). |
| EnVision Nexus | <1.15 mP (module 2001, fluorescein, 50 µL; plate and concentration not stated). Top read only. A 2024 “Detection Spot Size” option “can improve the data quality of bright FP applications” by collecting light from less of the well. | — |
| PHERAstar FSX | <0.5 mP (384sv black, 20 µL). Both planes read at once on the matched PMT pair, from the same flash, so lamp flicker cancels in the ratio. | — |
| SpectraMax iD3 / iD5 | iD5 only. Filters: 5 mP guaranteed at 1 nM (1 mP optimized). Monochromator: 5 mP at 10 nM, ten times the dye. iD3: not offered. | The live spec page has dropped the monochromator figure. |
| Synergy H1 | Data sheet 2 mP, no plate. Manual guarantees 5 mP, 96-well, with 60 measurements per data point. History: 5 mP (2010, 384), 5 mP (2016, 2022), 2 mP (2026). Same optical system. | Filters only, one assay per cube; no monochromator FP. |
| Synergy Neo2 | Data sheet 1 mP, the only spec with no plate format. Manual: “< 5 mP standard deviation at 1 nM Sodium Fluorescein (1 mP typical)”; the installation test passes at <5. Dual-plane cube is special order. | The headline is the typical; a unit can ship at five times it. |
| Tecan Spark | Filters ≤1.5 / monochromator ≤3.0 mP (standard); ≤1.25 / ≤2.5 (enhanced). No plate, no volume. No FP on the Spark Cyto 300 and 400. | Through the monochromator FP precision is twice as poor, in Tecan’s own table. |
| VANTAstar | <1.2 mP (384sv, 20 µL), filters, top or bottom. | — |
| Varioskan LUX | Not offered, and by user reports can never be added. | — |

### 31 Fluorescence polarization from the bottom

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | FP from the bottom: not stated for the Plus. BMG lists “Top and bottom reading” as a measurement mode and gives bottom sensitivity only for fluorescence intensity; its FP figure (< 0.5 mP SD at 1 nM FITC, 384sv, 20 µL) carries no top/bottom label. | BMG states bottom FP for the VANTAstar and the FSX, not for the Plus; BMG applications can confirm. |
| EnVision Nexus | Not offered. FP is top read only. | — |
| PHERAstar FSX | The same optic module reads top or bottom, both planes at once. Bottom FP figure: not published; BMG's FP figures (< 0.5 mP SD at 1 nM FITC in 384sv black, < 1.5 mP in 1536 black) carry no top/bottom label. | — |
| SpectraMax iD3 / iD5 | Not published. | — |
| Synergy H1 | Not possible. FP is filters-only and filters read top only. | — |
| Synergy Neo2 | One bottom detector, so the two planes are read one after the other, and the manual gives bottom FP no specification. | — |
| Tecan Spark | Not available. Tecan’s guide: “The polarization option is available for top measurements only.” | The 2015 spec sheet’s FP hardware table reuses a generic wavelength-range header that mentions top and bottom, but gives FP results with no top/bottom split; the 2024 guide is explicit. |
| VANTAstar | Yes, through filters, top or bottom. | — |
| Varioskan LUX | Not offered (no FP). | — |

### 32 UV fluorescence polarization capable?

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Yes: FP-UV option to 240 nm. | — |
| EnVision Nexus | No UV FP module listed. Revvity's four FP filter modules excite at 485, 535, 555 and 620 nm. | Kaleido lets a filter module be Custom type, so the catalogue does not strictly rule out a special-order UV FP module. |
| PHERAstar FSX | Polarization modules are built to order at any wavelength (three-filter polarization module). BMG's store lists a Pyrene FP module at 320 nm excitation (380 nm emission), and the spec table gives the FI/FP filter range as 230–750 nm. UV mP figure: not published. | The module's own description: “fluorophores with Exmax between 315 and 340 nm, such as pyrene”. The lowest FP module found in the PHERAstar FSX store list is this 320 nm one; the DPH module is 360 nm. BMG's FP page notes UV FP needs “specific UV polarizers”. |
| SpectraMax iD3 / iD5 | iD5 with the optional UVIS polarizer, to 300 nm. | — |
| Synergy H1 | Partly. The stock excitation polarizer is “visible-range (400 nm and above, the default)”; a UV polarizer (300 nm and above) is a separate BioTek option. The manual’s FP spec lists excitation 330–700 nm (UV-transparent polarizing filter); the current data sheet prints 280–700 nm. | Manual and data sheet disagree on the short-wavelength limit (330 vs 280 nm); the manual’s UV polarizer is rated 300 nm and above. |
| Synergy Neo2 | Yes on paper: Agilent’s data sheet gives the FP wavelength range as 280 to 700 nm (850 nm option), filter-based. The 2016 manual states no FP wavelength range; it says only that the filter cube must contain polarizing filters. | The sibling H1 manual says its UV excitation polarizer starts at 300 nm and its FP spec is 330-700 nm, yet the H1 data sheet also prints 280 nm; ask which polarizer part number delivers 280 nm. |
| Tecan Spark | Standard FP module starts at 390 nm; enhanced at 300 nm. | A 2023 quote carried FP from 390 nm while the customer held the enhanced spec sheet. |
| VANTAstar | Spec sheet lists FP among the filter modes covering 240–740 nm. BMG names no UV-FP option and publishes no UV mP figure for the VANTAstar. | On BMG's store, the CLARIOstar UV filter sets carry the footnote “For use in Fluorescence polarization your reader must be equipped with the UV FP option”; no equivalent VANTAstar option was found, and BMG's FP page says UV FP needs “specific UV polarizers”. Ask BMG applications whether the VANTAstar's 240 nm FP range includes UV polarizers. |
| Varioskan LUX | Not offered (no FP). | — |

### 33 AlphaScreen / AlphaLISA specification and excitation source

Alpha signal moves about 8% per °C (PerkinElmer’s figure) and the beads bleach, so excitation source, temperature and what moves between wells all affect the result. Three readers here have no Alpha at all.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | 680 nm laser module: <5 pM / <100 amol P-Tyr-100 (384sv, 20 µL). Can be added later. | — |
| EnVision Nexus | Two modes that cannot be combined: Enhanced (700 mW laser, 4:31 per 384, 79 pg/mL) and High-throughput (400 mW, 1:36, single channel, 121 pg/mL). HT mode: “wells outside the selected measurement layout are also exposed” (fixed 9 mm laser-to-PMT distance, two wells at 384 pitch). | Revvity’s own note says apertures exist to prevent “bleaching of neighboring Alpha samples”; in HT mode the laser reaches wells it hasn’t read yet. Room must be 20–25 °C. Alpha “cannot be added to a Loop operation.” |
| PHERAstar FSX | Dedicated 680 nm laser: <5 pM / <100 amol P-Tyr-100 (384sv white, 20 µL). Optic module set once per plate; nothing moves between wells. | — |
| SpectraMax iD3 / iD5 | Not offered. MD’s Alpha lives on a different platform. | — |
| Synergy H1 | Not offered. BioTek’s 2010 table marks AlphaScreen “n/a” for the H1, its “Value” hybrid. | — |
| Synergy Neo2 | Laser Alpha (100 mW, 680 nm). Sensitivity: 100 amol LCK peptide (384-well low-volume plate). Alpha moves a cube twice per well: 768 moves per 384 plate. Not appropriate for high volume alpha use. Maintenance friction point. | The 2016 manual’s Alpha spec is only laser power (100 mW ± 10%); its Alpha acceptance test is crosstalk < 0.1% and SNR > 10 with Omnibeads, not a sensitivity pass line. |
| Tecan Spark | 680 nm, 750 mW laser. Printed < 2.5 ng/mL Omnibeads; Tecan’s own brochure chart: 3.62 ng/mL uncorrected, 1.58 corrected. 384 wells in ≤2 min “incl. temp. corr.” On the Spark Cyto, Alpha only on the top model. | Without the software temperature correction, the Spark misses its own number. |
| VANTAstar | Not offered. No Alpha mode, no laser. | — |
| Varioskan LUX | LED excitation at 680 nm; no laser. Spec <100 amol. Calibration expires every 10 minutes; no cooling. | — |

### 34 AlphaPlex capable (two Alpha colors)?

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Alpha laser module (an option); AlphaPlex is listed as a supported mode, and BMG's store sells a 545/615 nm AlphaPlex/AlphaLISA filter set for the CLARIOstar. Whether the two colors are read simultaneously: not stated. | Product-page detection modes read “AlphaScreen®/AlphaLISA®/AlphaPlex™”; the store's filter-set page says “To use these filters your reader must be equipped with the AlphaScreen option.” |
| EnVision Nexus | Enhanced mode only (AlphaPlex capable); not in High-throughput mode. A reader can’t have both modes. | — |
| PHERAstar FSX | Yes, with simultaneous dual emission: both AlphaPlex channels from one excitation, on two matched PMTs, so the second color is not read from beads already bleached by an earlier flash. | — |
| SpectraMax iD3 / iD5 | Not offered. | — |
| Synergy H1 | Not offered. | — |
| Synergy Neo2 | No AlphaPLEX (one Alpha color only). | — |
| Tecan Spark | Yes, dedicated filters for AlphaScreen, AlphaLISA and AlphaPlex; sequential on one detector. | — |
| VANTAstar | Not offered (no Alpha). | — |
| Varioskan LUX | Not published. Thermo's LUX manuals and product pages describe AlphaScreen/AlphaLISA only and never mention AlphaPlex. | Revvity's AlphaPlex guide requires an “AlphaPlex compatible reader” and names only EnVision Multilabel readers. |

### 35 Alpha temperature handling: can the plate be held cool while it is read?

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Lowest incubation setting ambient +3 °C. No cooling. | — |
| EnVision Nexus | No cooling; floor ambient +5 °C. Alpha puts a specification on the room: “+20 °C to +25 °C, relative humidity < 80 %.” | A lab that drifts outside 20–25 °C overnight is outside Revvity’s Alpha conditions (inferred). |
| PHERAstar FSX | Advanced Assay Stability option holds the chamber at 18–45 °C, at or below room temperature, with cooled air over the detectors, electronics and chamber. CellTiter-Glo CV 1.8% with AAS against 3.2% without (BMG data). No external vents. | Lowest measurement-chamber temperature published on any reader in this matrix (tied with the Spark’s Te-Cool floor, which is a liquid loop with a condensation problem). |
| SpectraMax iD3 / iD5 | Not applicable (no Alpha). | — |
| Synergy H1 | Not applicable (no Alpha). | — |
| Synergy Neo2 | Alpha mode “3°C over ambient to 30°C,” room must be “less than 30°C.” No cooling. | In a 25 °C lab the Alpha window is 28–30 °C; at 27 °C there is no window at all (calculated). |
| Tecan Spark | Tecan corrects Alpha data for heat in software: “automatic normalization of the signal to a temperature of 22.5 °C,” every read time “incl. temp. corr.” Tecan says its electronics warm the chamber up to +4 °C. The hardware fix is Te-Cool (option), 18–42 °C. | At +4 °C that is about a third of the signal (calculated), corrected by a model, so every corrected well carries the model’s error. Te-Cool’s 18 °C floor is the dew point of a 30 °C lab at 50% humidity: condensation. Without its software temperature correction, Alpha misses Tecan’s own spec. |
| VANTAstar | Not applicable (no Alpha). Floor ambient +4 °C. | — |
| Varioskan LUX | No cooling; floor ambient +4 °C. When the 10-minute calibration can’t run, the Alpha read carries a warning that accuracy “may have suffered.” | — |

## Absorbance

### 36 UV/Vis wavelength range and how the wavelength is selected

Three designs: a spectrometer sees every wavelength in one flash; a monochromator steps through them; a filter sees one. The difference shows up in the next row.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | 220–1000 nm, CCD spectrometer: every wavelength captured at once. 0–4 OD, 0.001 OD resolution, precision ≤0.5 nm. | — |
| EnVision Nexus | Filters only: one wavelength per module from 260, 280, 405, 450, 492, 492 (OPD), 540, 560, 570, 595, 600, 644, 660 and 750 nm. Revvity names the mode “Absorbance Filter.” No monochromator, no spectrometer, no spectrum. | A wavelength off that list is a module to order. |
| PHERAstar FSX | 220–1000 nm, CCD spectrometer (optional). 0–4 OD. | — |
| SpectraMax iD3 / iD5 | 230–1000 nm, monochromator, 4 nm bandwidth, accuracy ±2 nm, 0–4 OD. PathCheck path-length correction. | User reports list what PathCheck can’t correct: turbid, high-salt and non-aqueous samples, Lowry, hemoglobin, red or purple samples. |
| Synergy H1 | 230–999 nm, monochromator (200 nm on the A builds); bandwidth 4 nm UV / 8 nm visible (≤3 nm on A builds). 0–4 OD, <1% at 3.0 OD. | — |
| Synergy Neo2 | 230–999 nm, monochromator, 1 nm steps; ~4 nm resolution (comparison sheet). An ELISA with a reference wavelength is read twice. | — |
| Tecan Spark | 200–1000 nm, monochromator, 3.5 nm bandwidth, accuracy <0.3 nm (Cyto brochure; the 2015 sheet says ≤0.8 nm). | Best absorbance wavelength accuracy published in this matrix. |
| VANTAstar | 220–1000 nm, CCD spectrometer. 0–4 OD; accuracy <1% at 2 OD. | — |
| Varioskan LUX | 200–1000 nm, monochromator. Linear to 4 Abs at 450 nm. No absorbance in 1536. The absorbance calibration expires every hour. | Fast mode costs range, in SkanIt’s words: “a slightly narrower linear absorbance range.” |

### 37 Full absorbance spectrum: time per well

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | <1 s per well, full 220–1000 nm, or eight wavelengths from one flash. | Fastest full-spectrum absorbance published in this matrix (tied with the FSX and VANTAstar). |
| EnVision Nexus | Not offered. | — |
| PHERAstar FSX | <1 s per well at 1 nm resolution; eight wavelengths from one flash. | — |
| SpectraMax iD3 / iD5 | Not published. | Spectrum data read on the touchscreen needs the paid Import feature to reach SoftMax Pro. |
| Synergy H1 | “An hour or more” per plate for a full 200–1000 nm scan (2020 estimate). | — |
| Synergy Neo2 | ~60 s per well (estimate). Field timing on the original Neo: 6 s per wavelength per 96-well plate, so a 96-well spectrum at 10 nm steps takes about 8 minutes and 1 nm steps over an hour (calculated). | — |
| Tecan Spark | ≤5 s per well, “one flash only,” plate in and out not included. | — |
| VANTAstar | <1 s per well, full spectrum or eight wavelengths. | — |
| Varioskan LUX | “<2.2 sec/well, 400 to 500 nm, 1 flash, 2 nm step”: about 18 s per well for 200–1000 nm at that rate (calculated). Spectra stop at 384-well. | — |

### 38 Micro-volume nucleic acid and cuvette

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | LVis plate: 16 spots, 2 µL, full spectrum per spot, plus a cuvette port. | — |
| EnVision Nexus | Not offered. Nucleic-acid absorbance is a 260 nm module plus a 280 nm module. | — |
| PHERAstar FSX | LVis plate: 16 spots of 2 µL, full spectrum per spot. | — |
| SpectraMax iD3 / iD5 | SpectraDrop micro-volume plate (iD5 “fully compatible”). SpectraCuvette adapters without a sticker “cannot be used.” | — |
| Synergy H1 | Take3 and Take3 Trio plates. | — |
| Synergy Neo2 | Take3 and Take3 Trio plates. | — |
| Tecan Spark | NanoQuant plate: 16 samples, 2 µL, <1 ng/µL dsDNA; cuvette port. | — |
| VANTAstar | LVis plate: 16 spots of 2 µL, plus one standard cuvette position on the same plate; optional NIST-traceable OD and holmium oxide standards. | — |
| Varioskan LUX | µDrop plate. SkanIt: “Do not use shaking with the Thermo Scientific μDrop plate.” | — |

## Plates, speed and handling

### 39 1536-well plate capability?

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Yes, 6- to 1536-well; injectors and luminescence in every format; autofocus to 1536. | — |
| EnVision Nexus | Yes, 1- to 1536-well; plate height 7–20 mm. | — |
| PHERAstar FSX | Yes, to 1536 standard (and beyond, next row). Injectors and luminescence at every format; 1536 HTRF in 36 s with the laser. | — |
| SpectraMax iD3 / iD5 | No. 6- to 384-well. Plate height “must not exceed 22 mm, including the lid.” | — |
| Synergy H1 | No. 6- to 384-well, at launch and today. | — |
| Synergy Neo2 | Yes, 6–1536. Injectors to 384 only. BioTek’s luminescence spec and crosstalk spec stop at 384; 1536 Alpha takes a different excitation cube. | — |
| Tecan Spark | Yes with the enhanced modules. Standard luminescence stops at 384; the Spark Cyto stops at 384 altogether. | — |
| VANTAstar | No. 6- to 384-well. | — |
| Varioskan LUX | Yes, with its own adapter (10 mm): no lid, no dispensing. Absorbance and spectra stop at 384. | — |

### 40 3456-well capability?

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | No. | — |
| EnVision Nexus | No. | — |
| PHERAstar FSX | Yes: 6- to 3456-well. BMG: “Only reader with 3456-well proved capability.” | The only reader in this matrix that reads 3456. |
| SpectraMax iD3 / iD5 | No. | — |
| Synergy H1 | No. | — |
| Synergy Neo2 | No. | — |
| Tecan Spark | No. | — |
| VANTAstar | No. | — |
| Varioskan LUX | No. | — |

### 41 6-well plate capability?

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Yes; any other plate definable in software. | — |
| EnVision Nexus | Yes (1-well up). “Shaking is only recommended for plate types with 96, 384, or 1536 wells.” | — |
| PHERAstar FSX | Yes. | — |
| SpectraMax iD3 / iD5 | Yes. | — |
| Synergy H1 | Yes. | — |
| Synergy Neo2 | Yes. | — |
| Tecan Spark | Yes (1- to 1536-well). | — |
| VANTAstar | Yes. | — |
| Varioskan LUX | Yes, with the 6–48 adapter (a second one if lidded). Fill to no more than 50% of well volume when shaking. | — |

### 42 Manual adjustment required for plate height or focus?

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | No. Autofocus to 0.1 mm, top and bottom, up to 1536. Plate geometry defined in software; no adapters. | — |
| EnVision Nexus | In aperture modes “the measurement height cannot be adjusted.” An optimization wizard stores plate dimensions per protocol; it “requires the filter module ‘Test Module EnVision Nexus’” and is “not compatible with the optional stacker.” | — |
| PHERAstar FSX | No. Autofocus; plate definitions user-definable; no adapters. | — |
| SpectraMax iD3 / iD5 | A software setting the user re-tunes. Read height “should be optimized for each new lot of microplates or assay volume used.” | — |
| Synergy H1 | No. Automated Z-focus. | — |
| Synergy Neo2 | Top: automatic. Bottom focus is fixed. Plate adapters: optional PCR-tube and BioCell adapter plates are listed; maximum plate height is 0.89 in. | Unresolved: a BioTek-era Neo2 brochure lists “Read height Auto Z, 0.1 mm steps, top/bottom (Filters), top (Mono),” which conflicts with the fixed bottom focus reported in comparison sheets. |
| Tecan Spark | No. Auto Z-focus top and bottom. | — |
| VANTAstar | No. Rapid full-plate autofocus, 0.1 mm; no adapters. | — |
| Varioskan LUX | Yes, by hardware. The optics never move; a loose adapter under the plate sets its height, one per plate format and a second if lidded (ten in Thermo’s table). Field experience: the wrong adapter means a misfocused read or the plate strikes the optics. | Thermo sells a “Storage Holder for Plate Adapters” for the ones not in use. Every new user needs training on adapters, lids and templates. |

### 43 Plate adapters, lids and plate-type restrictions

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | None. Any plate geometry is defined in software. | — |
| EnVision Nexus | Lids and high-skirt plates are refused by the stacker, Enhanced and Ultra-sensitive luminescence and both Alpha modes. One plate type per stacker protocol; max filled plate 190 g. | — |
| PHERAstar FSX | None. Plate geometry user-definable. | — |
| SpectraMax iD3 / iD5 | Max plate height 22 mm with lid; SpectraCuvette adapters without a sticker “cannot be used.” Injected reads must be unlidded. | — |
| Synergy H1 | Standard 6- to 384-well plates in the 128 x 86 mm footprint, plus Take3 and Take3 Trio; maximum plate height 0.8 in. (20.30 mm) for absorbance and 0.89 in. (22.6 mm) for fluorescence and luminescence. Optional PCR-tube and BioCell adapter plates. To read with a lid, create a Gen5 plate type that adds the lid height. For evaporation the manual says “Use microplate lids.” | Gen5 2.01 and later has a separate “Plate Lid adds” parameter (manual error-code table); other labware “can result in positioning errors during program execution.” |
| Synergy Neo2 | Standard 6- to 1536-well plates in the 128 x 86 mm footprint, plus Take3 and Take3 Trio; maximum plate height 0.89 in. Optional PCR-tube and BioCell adapter plates. For lids the manual says to “create a new plate type in Gen5 with the correct Plate Height”; other labware “can result in positioning errors during program execution.” Injectors take only 6- to 384-well plates, and tip priming is not for tall plates. | Gen5’s protocol dialog also has a “Use lid” check box (manual p. 50). |
| Tecan Spark | ANSI/SBS plates, 10 mm (no lid) up to 24.5 mm (with lid) tall; for bottom reads the well bottom may sit no more than 5.5 mm above the plate rim. Lid Lifter pad needs a lid no taller than 11.5 mm; the Spark-Stack takes no lids. Luminescence is read lid off by Tecan’s protocol, and the humidity spec excludes the outside wells and is tested with a lid. | Tecan’s knowledge portal says of luminescence: “Don’t use transparent plates or plates with lids as this results in crosstalk between wells.” Cuvette adapter, NanoQuant Plate, MultiCheck plate and Cell Chip adapter “can be used with limitations for selected measurement techniques.” |
| VANTAstar | None listed. | — |
| Varioskan LUX | Every plate change is a hardware change: ten adapters by well count and lid; “Always use a plate adapter with a universal tray”; only five support dispensing and none of the lidded ones. The robotic adapter is held by washers and four retaining screws. | — |

### 44 Fastest read of a 384-well dual-emission assay (two colors, whole plate)

The fair comparison is time for both colors at a stated flash count. A sequential reader needs a second emission read at every well; doubling its single-color time is the simple upper estimate (plate movement is shared, so the true figure can be somewhat less), and no vendor prints a dual-emission time, so the doubling is marked as an estimate.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | One color in flying mode, 1 flash: 15 s; two colors are read one after the other, so about 30 s (estimated; BMG prints no dual-emission time). 10 flashes: 57 s per color. | — |
| EnVision Nexus | 14 s on the fly (FI, FP, TRF) with a dual-channel module, both colors at once. Luminescence never on the fly: 1:13 per 384 plate. | — |
| PHERAstar FSX | 14 s (flying mode, 1 flash) for both colors, because they are read at the same instant from the same flash. 10 flashes: 38 s. TRF laser, 1536 wells: 36 s. | The only reader here whose dual-emission time equals its single-color time. |
| SpectraMax iD3 / iD5 | One color: ~32 s “using lowest setting and speed read”; two colors about 64 s (estimated), with the gain locked at High (documented for the i3x only). FP: 3 min per 384. | — |
| Synergy H1 | One color: 22 s (kinetic figure, unchanged since 2010; no mode or flash count stated); two colors about 44 s (estimated). | — |
| Synergy Neo2 | One color: 11 s (sweep mode). Simultaneous two-color read exists on Dual Filter Top builds with a special-order cube; no dual-emission time published. Sensitivity is qualified at Normal speed, 50 measurements per point. | The 11 s and the sensitivity spec come from different settings. |
| Tecan Spark | One color: 22–30 s, “one flash only,” plate in and out not included; two colors about 45–60 s (estimated). NanoBRET at Tecan’s 300 ms per channel: about 3 min 50 s for 384 (estimated). Extended range doubles it: “two consecutive measurement runs.” | — |
| VANTAstar | One color, flying, 1 flash: 16 s; two colors about 32 s (estimated). | — |
| Varioskan LUX | One color: 45 s minimum, one flash, carrier not stopping; two colors about 90 s (estimated), plus the 10-minute calibration clock on a long run. | — |

### 45 Plate read times, single color (96 / 384 / 1536)

A speed figure means little without the flash count and a quality figure beside it. Only BMG prints times at three flash counts; the Neo2 prints a sweep-mode speed and a Normal-speed sensitivity.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Flying mode, 1 flash: 8 s / 15 s / 28 s. 10 flashes: 19 s / 57 s / 3:04. | Flying-mode times are at a fixed gain; EDR is not used in flying mode. |
| EnVision Nexus | On the fly (FI, FP, TRF): 6 s / 14 s / 37 s. Luminescence 1:13 per 384. Alpha Enhanced 4:31, HT 1:36 per 384. TRF laser 1536 at one flash: ~30 s “while maintaining excellent Z′.” | — |
| PHERAstar FSX | Flying mode, 1 flash: — / 14 s / 27 s. 10 flashes: — / 38 s / 1:52. 50 flashes: — / 1:29 / 5:18. TRF laser 1536: 36 s. | Flying-mode times are at a fixed gain; EDR is not used in flying mode. |
| SpectraMax iD3 / iD5 | FI ~10 s / ~32 s / no 1536 (lowest setting). Luminescence 0:16 / 1:01; TRF 0:05 / 1:05; FP 1:00 / 3:00 (iD5e, standard read time). | — |
| Synergy H1 | 11 s / 22 s / no 1536. | — |
| Synergy Neo2 | — / 11 s / — (sweep mode). Alpha: 30 s / 1:50 / 7:20 (two cube moves per well). | — |
| Tecan Spark | FI: ≤13 s / ≤30 s / — (Cyto brochure; “one flash only”). Alpha: ≤1 min / ≤2 min “incl. temp. corr.” | — |
| VANTAstar | Flying mode, 1 flash: 9 s / 16 s / —. | — |
| Varioskan LUX | 15 s / 45 s / 135 s “minimum times,” one flash, carrier not stopping. Detection limit at that speed: not published. | The gain was set by a trial flash before this clock started. |

### 46 Shaking: modes and orbit

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Linear, orbital, double orbital, 100–700 rpm, orbit scales with speed; at the read position; long-term shaking option. | — |
| EnVision Nexus | Linear, orbital, double orbital; duration, speed and diameter adjustable. Warning: liquids “could spill inside the instrument”; test settings with the plate outside. 96/384/1536 only recommended. | — |
| PHERAstar FSX | Linear, orbital, double orbital; user-defined time and speed. | — |
| SpectraMax iD3 / iD5 | Orbital or double orbital. MD support: “Amplitude: 1.7 mm for all shake intensities”; Low 448, Medium 517, High 577 rpm. Advanced shaking is an upgrade. | Three speeds on one small orbit; the user can’t change the orbit size. |
| Synergy H1 | Linear, orbital, double orbital, 1–6 mm, 3–18 Hz. Manual: on older firmware shaking “may stop prematurely with no error message.” | — |
| Synergy Neo2 | Linear, orbital, double orbital, 1–6 mm, six speeds each. | — |
| Tecan Spark | Linear, orbital, double orbital, 1–6 mm in 0.5 mm steps, up to an hour. “The plate must be placed in incubation position while shaking or waiting.” | — |
| VANTAstar | Linear, orbital, double orbital; speed range not published. | — |
| Varioskan LUX | Orbital only (user reports); speed and orbit not published. Fill to no more than 50% of well volume when shaking. | — |

### 47 Cellular imaging capability?

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | No. | — |
| EnVision Nexus | No. | — |
| PHERAstar FSX | No. | — |
| SpectraMax iD3 / iD5 | No. | — |
| Synergy H1 | No. Agilent’s Gen5 carries imaging features the H1 can’t use. | — |
| Synergy Neo2 | No. | — |
| Tecan Spark | Cell counting on the Spark; Spark Cyto adds 2×/4×/10× fluorescence imaging. On the Cyto the chamber isn’t heated, only the plate’s parking spot (user reports tie this to a BioTek patent on imaging in an incubated chamber; no patent document is cited). | The Cyto ladder removes as it climbs: 400 has a monochromator and no filters, 500 the reverse, both only on the 600 with Alpha bundled. |
| VANTAstar | No. | — |
| Varioskan LUX | No. | — |

### 48 Well scanning and cell-reading conveniences

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Autofocus 0.1 mm; orbital, spiral and matrix well scans up to 900 points per well. | — |
| EnVision Nexus | Optimization wizard stores plate dimensions per protocol (not with the stacker). PerkinElmer’s 2008 trainer on the quick-start wizard: it “may give up sensitivity.” | — |
| PHERAstar FSX | Well scanning and automatic z-height, top and bottom. | — |
| SpectraMax iD3 / iD5 | Well Scan (over 20 × 20 points); adjustable read height. Field report: in kinetic runs only the center of the well is read. | — |
| Synergy H1 | Monochromator bottom read, automated Z-focus, well-area scanning; grid size not published. | — |
| Synergy Neo2 | Fixed bottom focus; bottom reads need their own cubes; scan-grid size is not published. Well-area scanning is listed as a read method, and the manual warns the full matrix may not fit perimeter wells (error 570x, “Area Scan matrix too large for perimeter wells”). | Same caveat as the plate-height row: a BioTek-era brochure lists Auto Z read height for bottom filter reads. |
| Tecan Spark | Auto Z-focus; “Optimal Read”; well scans to 100 × 100 points. | Finest well-scan grid published in this matrix. |
| VANTAstar | Rapid full-plate autofocus; well scans up to 900 points; orbital and spiral averaging. | — |
| Varioskan LUX | Multipoint “for bottom reading 6 to 96-well plates only.” | — |

## Temperature, gas and humidity

### 49 Heated measurement chamber, and whether the plate is read where it is heated

A temperature spec covers only the place it was measured. The Spark’s uniformity is specified at the incubation position, and the plate is read elsewhere.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Yes, at the read position: ambient +3 °C to 45 °C, or 65 °C with the option. BMG’s measured plate gradient at 37 °C: 0.38 °C across an INHECO plate after three hours. | — |
| EnVision Nexus | Yes, heating only, ambient +5 to 65 °C; accuracy ±1 °C to 50, ±2 to 60, ±3 °C to 65. Uniformity across the plate: not published. “Oscillating temperatures in the lab will have an impact on temperature-sensitive assays.” | — |
| PHERAstar FSX | Yes: ambient +5 °C to 45 °C; with AAS, 18–45 °C independent of the room. | — |
| SpectraMax iD3 / iD5 | Yes, ambient +5 to 66 °C; from 55 °C up “ambient temperature of 25°C (77°F) is required.” The sensors read “the temperature of the air inside the chamber, not the temperature of the samples.” Equilibration about an hour. | — |
| Synergy H1 | Yes, four-zone, ambient +4 to 45 °C (70 °C on the four M2 builds); ±0.5 °C at 37 °C. | — |
| Synergy Neo2 | Yes, four-zone heating at the read position, ambient +4 to 65 °C. Alpha mode: ambient +3 to 30 °C. | — |
| Tecan Spark | Temperature is specified where the plate waits; the read happens somewhere else. Ambient +4 to 42 °C; uniformity <0.5 °C “at incubation position.” “The plate must be placed in incubation position while shaking or waiting.” On the Spark Cyto the chamber isn’t heated at all, only the parking spot. | A 384-well glow kinetic every 5 minutes spends about 55% of the run out of the incubation position, lid off (calculated from Tecan’s read time). Tecan says the chamber runs up to +4 °C over the room. Temperature is specified where the plate waits, and the plate is read somewhere else. “The plate must be placed in incubation position while shaking or waiting.” |
| VANTAstar | Yes, at the read position: ambient +4 °C to 45 °C, or 60 °C option. The optical head is heated too; the upper plate runs 0.5 °C above the lower to keep condensation off the lid. | — |
| Varioskan LUX | Yes, ambient +4 to 45 °C. The temperature holds “for as long as the software is connected to the instrument.” | A PC that sleeps or restarts mid-run takes the temperature control with it (inferred). |

### 50 Can the measurement chamber be held at or below room temperature (no forced +3–5 °C)?

Every reader warms its chamber with its own electronics. Assays that move with temperature (Alpha, glow luminescence, enzyme kinetics) are run at a temperature the reader chose unless it can cool. Two readers here can; one of them does it with a liquid loop and a condensation problem.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | No. Floor is ambient +3 °C. | — |
| EnVision Nexus | No, in any generation. “The instrument cannot reach temperatures lower than the ambient temperature.” The printed “15–65 °C” means ambient +5 °C; in a 25 °C lab the floor is 30 °C (calculated). In a Temperature operation “Maintain Ambient Temperature… is not available.” “Fast Cooling” opens the plate door and runs a fan. | Air filters “are not accessible for the user… This may affect… the precision of the temperature control.” |
| PHERAstar FSX | Yes, with Advanced Assay Stability: 18–45 °C, at a setpoint independent of the room, including at or below ambient. Rotary-compressor cooling in a rear unit; no external vents; condensate evaporated outside the instrument. Adds ~10 cm of depth; 62 kg total; the stacker still fits. | Best uniformity is at ambient +3.5–4 °C rather than at the coldest setting (BMG data). |
| SpectraMax iD3 / iD5 | No. Floor ambient +5 °C. The only cooling MD names is the detector’s. | — |
| Synergy H1 | No. Floor ambient +4 °C. | — |
| Synergy Neo2 | No. Floor ambient +4 °C (ambient +3 in Alpha mode). | — |
| Tecan Spark | Te-Cool option, 18–42 °C, a liquid cooler for the incubation position. With it fitted the room limit drops from 35 °C to 30 °C; at 30 °C and 50% humidity the 18 °C floor is the dew point (calculated). 512 mm tall; “Only Tecan authorized service technicians are allowed to prepare instrument for transportation.” | A university facility switches on an external chiller for anything below 28 °C. Cooling is at the incubation position; the plate is read elsewhere. The chamber runs warm, and Tecan measured what that does without TE-Cool. Glow signal +34% in six minutes at 4 °C over ambient; CV 7.7% against 0.3%. |
| VANTAstar | No. Floor ambient +4 °C. | — |
| Varioskan LUX | No. Floor ambient +4 °C. | — |

### 51 Actively cooled detection circuitry?

Detector dark current rises with temperature and is highest in red-extended tubes. Cooling reduces it.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | No. | — |
| EnVision Nexus | No. | — |
| PHERAstar FSX | Yes, with AAS: cooled air runs over the PMTs and electronics as well as the chamber, so the detectors are cooled along with the plate. Cooling is an option, and it makes a heavy reader heavier. | — |
| SpectraMax iD3 / iD5 | “Ultra-cooled” PMT, the detector only. No warm-up, stability or drift figure published. | A tube that reaches 850 nm carries high dark current; the cooling is what makes it usable (inferred). The chamber itself is not cooled. |
| Synergy H1 | No. | — |
| Synergy Neo2 | No. | — |
| Tecan Spark | No. Te-Cool cools the incubation position only. | — |
| VANTAstar | No. | — |
| Varioskan LUX | No. Luminescence calibration includes a dark-level drift check instead, expiring every 10 minutes. | — |

### 52 Humidity-controlled incubation chamber?

The Spark is the only reader here with humidity control. It works at the incubation position, and Tecan’s protocol reads luminescence with the lid off.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | No. Evaporation is managed with sealers and gas-permeable membranes; BMG publishes guidance on which to use. | — |
| EnVision Nexus | No, and lids are barred with the stacker, in Enhanced and Ultra-sensitive luminescence, and in both Alpha modes. | — |
| PHERAstar FSX | No. AAS lowers evaporation by holding the chamber at or below room temperature; BMG publishes rates with and without it. | — |
| SpectraMax iD3 / iD5 | No. The guide recommends a lid or seal, but “For reads with injection, plates must be unlidded.” | — |
| Synergy H1 | No. “Use microplate lids.” | — |
| Synergy Neo2 | No. | — |
| Tecan Spark | Yes: humidity cassette plus Lid Lifter. <10% evaporation over 4 days, “excluding outside wells… with lid” (60 of 96 wells, lid on; calculated). Luminescence is read lid off. | The humidity setup suits long assays but not vigorous shaking; it lives at the incubation position. Field experience: the quote often doesn’t make clear which incubation setup is in it. |
| VANTAstar | No. The upper heating plate runs 0.5 °C above the lower to keep condensation off lids and seals. | — |
| Varioskan LUX | No. A lidded plate takes a different adapter, and no lidded adapter supports dispensing. | — |

### 53 CO₂ and O₂ control of the incubation chamber?

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Yes: ACU, O₂ and CO₂ 0.1–20%, regulated in the chamber where the plate sits under the optics. | Cells stay at their gas setpoint while they are read. |
| EnVision Nexus | Not offered on the manual’s base-unit or options list. | — |
| PHERAstar FSX | Not offered. AAS controls temperature only. No CO₂/O₂ control and no humidity control. | — |
| SpectraMax iD3 / iD5 | Optional gas mixer, “user-installable”: O₂ 1–21%, CO₂ 0.1–15%, ±1.0%. The O₂ ceiling “is altitude dependent.” | — |
| Synergy H1 | Yes, on the G part numbers: CO₂ 0–20%, O₂ 1–19%, through a separate gas controller unit. | — |
| Synergy Neo2 | Not offered inside the reader. Agilent sells gas control as an external add-on. | — |
| Tecan Spark | Yes: CO₂ 0.04–10%, O₂ 0.1–21%. Standard on Cyto, an option otherwise. Works at the incubation position; gas at the read position isn’t stated. | — |
| VANTAstar | Yes: ACU, O₂ and CO₂ 1–20%, actively regulated. | — |
| Varioskan LUX | Optional module: CO₂ 0.1–15%, O₂ 1–21%. Nothing below 1% O₂. | — |

### 54 Maximum incubation temperature

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | 45 °C standard, 65 °C option, at the read position. | — |
| EnVision Nexus | 65 °C, ±3 °C at the top of the range. | — |
| PHERAstar FSX | 45 °C. | — |
| SpectraMax iD3 / iD5 | 66 °C, if the room is 25 °C from 55 °C up. | — |
| Synergy H1 | 70 °C on the four M2 builds; 45 °C on the rest, including the MF hybrid. | — |
| Synergy Neo2 | 65 °C (30 °C in Alpha mode). | — |
| Tecan Spark | 42 °C. | — |
| VANTAstar | 45 °C standard, 60 °C option. | — |
| Varioskan LUX | 45 °C. | — |

## Software, automation and ownership

### 55 Number of included software licenses

On the iD, the touchscreen leads to SoftMax Pro seats and a separate Import license.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Unlimited. Control and MARS analysis software install on any number of PCs; multi-user control software for shared labs. | — |
| EnVision Nexus | One Revvity-supplied PC, bound to one serial number (“you cannot exchange the PCs between the devices”). Further analysis in MyAssays Desktop, a separate program, via XML export. | — |
| PHERAstar FSX | Unlimited. Reader control and MARS on any number of PCs. | — |
| SpectraMax iD3 / iD5 | SoftMax Pro: one reader per license, four installs, three analysis-only seats, “per-seat product key activation.” Bringing touchscreen data into the software is extra: “Data import feature requires a separate license.” Updates “require a purchase” (i3x guide). | QuickSync puts SoftMax Pro on every user’s PC, and each departing student means another seat. Field experience: over a few years of lab turnover the seats can approach the cost of the reader. “Per-seat product key activation”; “Data import feature requires a separate license.” |
| Synergy H1 | “A single Gen5 license includes 5 passwords for installation on 5 different computers.” Registration required. | Field notes (2016): Gen5 won’t merge data from separate runs. |
| Synergy Neo2 | Five installations, each authorized by a USB dongle. Additional licenses are options. | Field note: “It isn’t clear what happens if the USB key is lost.” |
| Tecan Spark | Two installs of SparkControl. A new PC or Windows version has meant buying again (field notes). | Two Tecan software stacks that don’t talk: a university SOP says the Spark software “does not communicate with the Magellan software.” |
| VANTAstar | Unlimited. BMG: the software “can be installed on as many computers as needed.” No touchscreen available. | — |
| Varioskan LUX | “No limit on the number of licenses” and “no annual fee.” SkanIt 4.0 and 4.1 “cannot be installed in parallel on the same computer.” | — |

### 56 Touchscreen or embedded computer, and what still needs a PC

No BMG reader has a touchscreen. The iD5’s touchscreen is a built-in computer that MD’s own support tells customers to bypass for anything beyond an endpoint, and it is the part that fails.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | No embedded computer. Runs from a PC. | — |
| EnVision Nexus | A Revvity-supplied desktop PC on a point-to-point cable that uses its network port; “The connection must not go through the customer’s network.” Windows 10 IoT LTSC 2021 only; domain join not guaranteed; virtual PCs not supported. Release notes: “Multi-tasking on the device PC during measurements can cause loss of data.” | Field notes: the local database stops at 90% (≈9 GB) and no new run starts until data is deleted or exported. A pharma site moves its data through a second PC to reach its network. The Quick Start Guide prints a default Windows login for the control PC. |
| PHERAstar FSX | No embedded computer. Runs from any PC. | — |
| SpectraMax iD3 / iD5 | Touchscreen on a built-in computer (“Data is stored on the reader’s hard drive”), NFC or PIN login, QuickSync to a networked PC. Walk-up ends at a single-wavelength endpoint: kinetic, multi-wavelength and spectrum data need a PC, a SoftMax Pro seat and the purchased Import feature; injectors, FRET, TR-FRET and Western blot are PC-only. Connect a PC and the touchscreen locks. | MD support: “I recommend performing the read through SoftMax Pro and not the touchscreen.” When the built-in computer fails, the interface fails and the repair is charged as an instrument repair. A university iD3 failed twice on the same part just past warranty. ResearchGate: “Has anyone had problems with the built-in computer of the Spectramax ID3?” |
| Synergy H1 | No embedded computer. Gen5 on a PC. | — |
| Synergy Neo2 | No embedded computer. Gen5 on a PC, a USB key per PC. | — |
| Tecan Spark | No embedded computer. Runs from a PC with SparkControl; the dashboard and Magellan don’t share methods. | — |
| VANTAstar | No embedded computer. Runs from a PC (SMART Control or Voyager). | — |
| Varioskan LUX | No computer or screen on the instrument. Every run goes through a PC running SkanIt: “To avoid data loss, make sure your computer does not go into hibernation/sleep during a measurement.” | — |

### 57 21 CFR Part 11 and regulated-lab features

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Available, no per-seat or per-run fee. | — |
| EnVision Nexus | Option: “Enhanced Security mode.” Identity controls “must be set in Windows.” | — |
| PHERAstar FSX | Compliant, no per-seat or per-run fee. | — |
| SpectraMax iD3 / iD5 | GxP edition, extra. In GxP mode a connected PC locks the touchscreen for everyone. | — |
| Synergy H1 | Option (Gen5 Secure). | — |
| Synergy Neo2 | Option (Gen5 Secure). | — |
| Tecan Spark | Paid option (Magellan Tracker). | — |
| VANTAstar | Available with SMART Control and MARS, no per-seat fee. | — |
| Varioskan LUX | A second product: electronic signature, audit trail and access control live only in the separately sold Drug Discovery Edition. Login is the user’s Windows account, so password policy, validation and training are “the responsibility of the end user organization.” | — |

### 58 Automation: stacker, barcode, robot access

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Stacker; up to two barcode readers; robot-compatible. | — |
| EnVision Nexus | 20- or 50-plate stacker, 5.2 kg max load, one plate type per protocol, no lids. Release notes name four stacker defects (mid-load magazine mount restarts the system; the stop button does not stop a stacker run; magazines lock after restacking; barcode export “will fail and needs to be done manually”). “Optimizations are not compatible with the optional stacker.” | A long stacker batch can hit the local database’s 90% hard stop and lose data (field notes). |
| PHERAstar FSX | STACKER III, 50 plates, “can also be added later”; robotic integration supported. | — |
| SpectraMax iD3 / iD5 | Robot-compatible; StakMax stacker. | — |
| Synergy H1 | BioStack stacker, BioSpa 8, OLE automation in Gen5, robot accessible. | — |
| Synergy Neo2 | Stacker support. Two cube slots: Alpha and dual-emission assays take both, so “manual changes are necessary, making full automation difficult” (comparison sheet). Gen5 “prompt[s] for filter cube installation at runtime.” | An unattended run that needs another cube waits for someone to fit it. |
| Tecan Spark | Spark-Stack; native fit with Tecan robotics. | “Tecan is first and second an automation company.” User reports: “a LOT of moving parts… not… an easy instrument to maintain and train on in a shared environment.” |
| VANTAstar | Robot-compatible plate carrier with ActiveX and DDE control. No stacker or barcode reader offered. | — |
| Varioskan LUX | Robotic-tray adapter held by washers and four retaining screws; a lidded plate there means “Remove the plate adapter.” User reports: with the automation adapter “you can’t use any of the other adapters without a complicated process.” | — |

### 59 Upgrade path: what can be added later, and what is fixed at purchase

Check the quote against the spec sheet here. Four of the six competitors print one sheet and sell many part numbers, so a figure on the sheet may come from a build or option the quote leaves out.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Alpha, Ultra HTRF/TRF, LVis, stacker and barcode can be added later, one grade each. Bottom reading and luminescence are modules. | — |
| EnVision Nexus | Alpha is chosen at purchase: Enhanced or High-throughput, never both. HT Alpha “automatically also includes Luminescence (Ultra-sensitive)”; a rep in writing would not quote one without the other. Field retrofit of option modules: not published. New filter modules depend on Revvity making them. | The headline numbers belong to options: Ultra-sensitive luminescence, both Alpha modes, the TRF laser, the stacker and Part 11 are all line items. |
| PHERAstar FSX | Spectrometer, TRF, TRF laser, Alpha laser, injectors, AAS and stacker are options, and each “can also be added later.” | One instrument at one performance grade; a lab never trades up to a different model to gain a mode. |
| SpectraMax iD3 / iD5 | iD3 → iD5 is a different reader. Upgrades: bottom luminescence (factory only), Enhanced TRF module (customer-fitted with a hex key), gas mixer (“user-installable”), UVIS polarizer, red filter slides, injectors, Import license, GxP edition. | The brochure describes an iD5 with options the base reader doesn’t have, so a quote needs checking line by line. |
| Synergy H1 | “Upgrade options are available; contact BioTek Customer Care.” Cubes can be added any time. Whether a fixed 16 nm build can become variable bandwidth: not published. 12 part numbers; variable bandwidth and 70 °C only on the four M2 builds; injectors “sold separately” on every one. | — |
| Synergy Neo2 | Single or Dual Filter Top is fixed at purchase; no part number has both. The TRF laser comes only with the dual top. 19 part numbers; six have no monochromator for fluorescence or luminescence; one (N2MON) has no filters. | The manual still sells the laser as “upgrade later.” |
| Tecan Spark | Modular, in standard and enhanced grades. On the Spark Cyto the ladder removes as it climbs: 400 gains a monochromator and loses filters, 500 the reverse, both only on the 600 with Alpha bundled. | The spec sheet describes the enhanced modules. The quote may not: a 2023 university quote carried standard absorbance, aperture, bottom reading and luminescence. |
| VANTAstar | Detection modes, injectors and extended temperature can be added later. The optics choice is fixed at purchase: the filter-only VANTAstar F can’t take LVF monochromators later. | — |
| Varioskan LUX | “Modular, upgradeable.” FP can never be added (user reports). A new LAT module arrives needing the user’s own calibration: “You must run the calibration.” Modes are letters in the catalog code (L, A, T, D, G); a missing letter is a missing mode. | — |

### 60 Validation plates, qualification and service terms

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | Evaluation Plate is sold for IQ/OQ-type validation (NIST-traceable absorbance filters plus solid fluorescence and luminescence standards). BMG US service plans: Standard Depot includes a yearly QCPM; only Preferred Onsite includes a loaner. Repair turnaround: not published. | From BMG’s US store: Standard Depot “includes parts and labor coverage, free software and firmware updates, and a yearly quality control and preventative maintenance (QCPM)”; Preferred Onsite adds “loaner equipment in case your reader is out of service for an extended time.” Plan availability “may depend on product and country.” |
| EnVision Nexus | “Repair and service may only be performed by the Revvity Service.” Air filters “not accessible for the user… let Revvity Service check the filters once a year.” Remote support is LogMeIn Rescue; declining it “may increase costs for the service contract.” Lamp, laser and PMT service life: not published. | A two-Nexus pharma site’s service technician “had no idea how to service the instrument.” |
| PHERAstar FSX | Evaluation Plate is sold for IQ/OQ-type validation (NIST-traceable absorbance filters plus solid fluorescence and luminescence standards); the FSX page also lists optional QC internal standards. BMG US service plans: Standard Depot includes a yearly QCPM; only Preferred Onsite includes a loaner. Repair turnaround: not published. | Same US service plans as the CLARIOstar Plus. BMG’s US store also sells a Phosentix MicroQC Performance Testing Plate for the FSX. |
| SpectraMax iD3 / iD5 | MD’s LM1 validation plate checks 2.5–3 decades of luminescence on multimode readers and skips the dim rungs as “too dim to measure,” so the 7-decade claim is never re-checked on the customer’s unit. Three SpectraTest plates, one per mode: “it must be returned to Molecular Devices. Only Molecular Devices has the necessary knowledge and equipment to recertify”; yearly; book a month ahead. Repair is at MD’s depot: “Instruments not covered by Warranty or Service Plan are not eligible for a loaner.” | MD “is not liable for damage incurred during shipment.” |
| Synergy H1 | OQ yearly; PQ monthly or quarterly. The absorbance test plate is recertified annually by BioTek; FP and TRF tests need a dedicated qualification cube. Lamp “not user-changeable.” | — |
| Synergy Neo2 | Terms: the manual recommends the OQ “initially (before first use)” and then annually, and absorbance test plates are recertified by BioTek annually; warranty terms ship as a separate document and no length is printed in the manual. The luminescence OQ is one point at one gain, so the “>6 decades” is never re-checked on the customer’s unit. Wear to plan for: 768 cube moves per 384-well Alpha plate, an injector module needing a daily flush and overnight soak, and two xenon lamps “(not user-changeable).” Daily flushing is a warranty matter: “Failure to follow preventive maintenance protocols may void the warranty.” | Agilent’s US Terms of Sale (Apr 2024) say only that “Each Product receives a global warranty which includes the standard warranty for the country of purchase” and refer to a separate warranty page; the instrument warranty length was not found. |
| Tecan Spark | Tecan lists “QC tools for IQOQ services”: the MultiCheck Plus QC plate, which Tecan recalibrates at its factory annually. The guide calls for an annual maintenance procedure by a Tecan service engineer. Te-Care contracts list a loaner only as a billed option (footnote: “Subject to availability”); the 48-hour onsite response is in COMPLETE only. | Te-Care and QC-plate terms are from Tecan’s web pages (tecan.com/service-contracts, Detection & Others tab; lifesciences.tecan.com/microplate-readers-qc-tools); regional differences apply. |
| VANTAstar | Evaluation Plate sold as an accessory (NIST-traceable absorbance filters plus solid fluorescence and luminescence standards). BMG US service plans: Standard Depot includes a yearly QCPM; only Preferred Onsite includes a loaner. Repair turnaround: not published. | Same US service plans as the CLARIOstar Plus. |
| Varioskan LUX | Verification plates: spectrophotometric (N03394) and Lumiwell luminescence (2806460), plus a “Microplate package for Varioskan LUX IQ/OQ” (SP-00720). Warranty and service-plan terms for the LUX are not published. Thermo's Part 11 table puts validation and user training on the customer. | Thermo's generic Unity Lab Services plan page does not name the Varioskan or plate readers, and the Dana-Farber quote's “2Y WARR” is a customer quote, not a published term. |

### 61 Support lifetime and end-of-service history

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | By BMG’s own account, no BMG reader has ever been phased out of service support. | — |
| EnVision Nexus | One Windows build for the life of the PC: Windows 10 IoT LTSC 2021, “No, the license is only valid exactly for” that version, supported to January 2032. Kaleido upgrades run one way (4.0 data into 4.1, “but not vice versa”). Revvity publishes no instrument end-of-support policy for the Nexus. | Revvity's service terms reserve the right to refuse a repair order for instrument obsolescence or parts availability, but set no minimum support period. |
| PHERAstar FSX | “Any 16-bit unit will have a guaranteed 10 years of support from the point of purchase.” No BMG reader phased out of support. | — |
| SpectraMax iD3 / iD5 | Not published. MD’s repair FAQ states no obsolescence policy. | — |
| Synergy H1 | No end-of-service date found for the H1 (on sale since 2010). Sibling Synergy Mx: discontinued 2015, service ended Oct 1, 2022 (BioTek’s 2021 notice). H4, Synergy 2 and HT no longer sold or supported. | — |
| Synergy Neo2 | Agilent’s published Service Terms let it drop a product from service coverage on 60 days’ written notice; no Neo2-specific support-life period is published. Support for the sibling Synergy Mx ended ~5.5 years after one account’s purchase. Labs are replacing BioTek readers that BioTek stopped supporting (field experience). | The clause governs service agreements and sets a notice period, not a minimum support life; the Neo2 manual, data sheet and product page state no support-life commitment. |
| Tecan Spark | Tecan’s own schedule: Infinite M1000 shipped to March 2012, support ended March 2019: “no sales, no service packs, no modifications (we expect customers to upgrade in case of problems).” About seven years from sale. The Spark is based on the M1000 (user reports). | Tecan has since removed the schedule from its website; an archived copy exists. |
| VANTAstar | “Free tech and application support for the lifetime of the reader” (BMG value sheet). | — |
| Varioskan LUX | Not published. Thermo gives no support-lifetime or end-of-service policy for the LUX. The Varioskan Flash page is marked discontinued and points to the LUX, with no end-of-service date. | — |

### 62 Relocation: what moving the reader down the hall involves

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | No restriction. 32 kg, two people. | — |
| EnVision Nexus | “Allow the instrument to acclimatize for at least 24 hours after shipping or transport.” Stacker removal “may only be carried out by a Revvity service engineer.” 90 kg; 100 kg with stacker. “Sensitive to vibrations.” | — |
| PHERAstar FSX | Nothing extra to disconnect; AAS has no external vents or plumbing. | — |
| SpectraMax iD3 / iD5 | Moving terms: a customer procedure (guide p. 125) that does not call for a Molecular Devices engineer: remove filter slides and any Enhanced TRF module, touch “Lock Instrument,” fit the transport locks, lift with at least two people. “The instrument can be damaged if the transport locks are not removed before the instrument is powered on.” 40 kg. Original packaging is called for only to store, ship or move it to another building, and warranty claims are void if transport damage is caused by improper packing. | The iD3 guide carries the same procedure (p. 98); the iD5e guide renames the touchscreen step “Prepare Shipment - Lock Instrument.” |
| Synergy H1 | Shipping brackets must go back in, in original packaging “designed to be used no more than five times.” Shipping any other way “can void the warranty.” | — |
| Synergy Neo2 | No restriction found in the manual. | — |
| Tecan Spark | “Do not ship an instrument with integrated cooling module! Only Tecan authorized service technicians are allowed to prepare instrument for transportation. Residual cooling fluid might damage the instrument.” | Moving a Te-Cool Spark starts with a service call; a field note: versions you can’t move yourself without voiding the warranty. |
| VANTAstar | No restriction found. 27 kg. | — |
| Varioskan LUX | Refit the tray-holder transport lock before moving it (front cover off, four screws, ten steps), keep the original packaging, and plan a two-person lift at 53-60 kg. Thermo also offers a service to move the instrument. | The manuals give 53-60 kg (the product page lists 57 kg), not 54-59 kg, and do not say whether the per-unit luminescence alignment must be repeated after a move. |

### 63 Footprint and weight

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | 45 × 51 × 40 cm; 32 kg. | — |
| EnVision Nexus | 446 × 576 × 485 mm; 90 kg. Site drawing needs 751 × 596 × 535 mm bare, 984 mm wide with a stacker, a bench rated ≥100 kg, plus a separate PC and 24-inch monitor. | — |
| PHERAstar FSX | 45 × 51 × 47 cm; 49 kg; with AAS 48 × 68 × 47 cm, 62 kg. | — |
| SpectraMax iD3 / iD5 | 53 × 60 × 40 cm; 40 kg. | — |
| Synergy H1 | 37.5 × 46.4 × 33 cm; <25 kg. | — |
| Synergy Neo2 | Agilent’s current data sheet: 38.1 cm W x 52.5 cm D x 41.2 cm H, 35.4 kg (78 lb); with the TRF laser 62.2 cm D and 45.3 kg (100 lb). The 2016 manual gave 39 x 52.5 x 41 cm and “< 85 lbs. (38.6 kg)” with all modules, without power supply or dispense module. The dispense module sits on top of the reader. | — |
| Tecan Spark | 40 kg; 512 mm tall with Te-Cool, plus the chiller and tubing. User reports: “The on-bench presence is not good, has been the universal complaint about the Spark.” | — |
| VANTAstar | 35 × 52 × 36 cm; 27 kg; external power supply. | — |
| Varioskan LUX | 58 × 53 × 51 cm; 53–60 kg (manuals; the product page lists 57 kg). | — |

### 64 Field accounts and public reviews (reported, not independently established)

Reported accounts, not independent tests. Use these accounts to identify questions for further investigation.

| Reader | Specification or finding | Notes and conditions |
| --- | --- | --- |
| CLARIOstar Plus | SelectScience: five stars, two years after launch (2021). | — |
| EnVision Nexus | A pharma HTS site with two Nexus readers “no one is using”: modules unobtainable, PC off the domain, exports breaking LIMS. A biotech called its demo “a disaster” (broke twice, missing accessories). 2023 pharma demo: “our unit laser was broken.” A pharma BRET comparison: “certainly the Nexus was not better.” | — |
| PHERAstar FSX | 1536 LanthaScreen (2013): matched a competing HTS reader’s 15-minute assay quality in 6 minutes, with a 40% larger window. Customers at a 2023 show said a competitor’s new flagship looked like a copy of it. | — |
| SpectraMax iD3 / iD5 | SelectScience iD3 page (April 2025): 3.2 / 5 from six reviews, featured quote “Don’t buy this one.” A university iD3’s built-in computer failed twice on the same part just past warranty; MD would not cover it; the group bought another make. r/labrats: two MD units returned for refund in ten years. | MD’s tagline on the same page: “Unparalleled performance on a personalized platform.” |
| Synergy H1 | A core facility’s handwritten sign: “Please measure nano orange and mCherry plates with filter cubes, not with the monochromator!” In 2026 an Agilent rep sent a customer an AI-drafted comparison labeled a “3rd party Competitive review.” | That comparison gives the H1MF “~7 logs” and concedes the competing BMG reader “up to ~8 logs.” |
| Synergy Neo2 | Almost no high-volume Alpha labs (field experience ties it to the 768-move design). NanoBRET, 2018: “Can’t do it from the bottom.” Caution: in a 2013 top-read TR-FRET demo the original Neo held its own. | — |
| Tecan Spark | A San Diego biotech’s new Spark couldn’t read its assays; service couldn’t fix it; the replacement failed the same way; they switched makes, and the director will take calls. A 2024 European demo: “The Spark… was slow and had bad performance for this plate.” | — |
| VANTAstar | SelectScience: 4.8 of 5, five reviews, 2023–2025. | — |
| Varioskan LUX | A genomics lab’s own PicoGreen QC test at matched 45 µL: signal over background 14.5, 5.2 and 15.2 against 32.9, 29.7 and 31.8 on the reader the lab bought; the lab put the Varioskan above its 20% CV limit. Slide: “Varioskan does not like Picogreen at low conc.” | A 2022 competitive view: “They haven’t released a new reader in years.” |

## Documents by reader

### CLARIOstar Plus

- [CLARIOstar Plus product and specification page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m21)
- [Decay Curve Monitoring technology page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m24)
- [Evaluation Plate page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m25)
- [Application note AN371: Establishing luminescence-based assays (2022)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m26)
- [US store: Standard Depot and Preferred Onsite service plans](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m28)
- [Bottom reading (direct optic) technology page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m30)
- [CLARIOstar Plus brochure (2019)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m31)
- [Enhanced Dynamic Range (EDR) technology page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m33)
- [CLARIOstar temperature-control performance note (2015)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m34)

### EnVision Nexus

- [EnVision Nexus multimode plate reader specification sheet 947574](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m4)
- [EnVision Nexus User Manual HH36940101 Rev B (2023)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m5)
- [Kaleido 4.1 Software Manual Rev E (2024)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m6)
- [Kaleido 4.1 Release Notes Rev H (2024)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m7)
- [EnVision Nexus Site Readiness Instructions Rev B (2023)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m8)
- [EnVision Nexus Quick Start Guide HH36940121 (2023)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m9)
- [Revvity guide to 21 CFR Part 11 compliance for the EnVision Nexus (2023)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m10)
- [Revvity technical note: Advanced luminescence performance on the EnVision Nexus (2025)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m11)
- [Revvity technical note 1581358 (2024), Alpha on the EnVision Nexus](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m12)
- [Revvity technical note on TRF / single-flash 1536 reads on the EnVision Nexus (2024)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m13)
- [Revvity application note: luminescence on the EnVision Nexus (app-mmd-envision-nexus-lumi)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m14)
- [Revvity HTRF setup recommendations for the EnVision Nexus (2024)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m15)
- [EnVision Nexus filter list, document 2321302 (2026)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m16)
- [PerkinElmer EnVision Reference Manual 2104-9020-02 (2008)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m17)

### PHERAstar FSX

- [PHERAstar FSX product and specification page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m22)
- [Decay Curve Monitoring technology page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m24)
- [Evaluation Plate page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m25)
- [US store: Pyrene fluorescence polarization module (Ex 320 / Em 380)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m27)
- [US store: Standard Depot and Preferred Onsite service plans](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m28)
- [Optic modules page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m29)
- [Bottom reading (direct optic) technology page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m30)
- [Advanced Assay Stability (AAS) FAQ / application note](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m32)
- [Enhanced Dynamic Range (EDR) technology page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m33)

### SpectraMax iD3 / iD5

- [Promega NanoBRET technical manuals TM483 (2016) and TM598 (2025)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m49)
- [SpectraMax iD3 user guide (2018)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m65)
- [SpectraMax iD5 user guide 5059784 (2018 / rev H 2022)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m66)
- [SpectraMax iD5e user guide 5319240 (2025)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m67)
- [SpectraMax iD5e brochure / product page (2025)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m68)
- [Molecular Devices THUNDER TR-FRET application note (2021)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m69)
- [Molecular Devices technical note: PMT gain adjustment (2026)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m70)
- [Molecular Devices knowledge-base answer: shake amplitude iD3/iD5 (#20267)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m71)
- [Molecular Devices knowledge-base answer: touchscreen data and SoftMax Pro import (#20280)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m72)
- [SpectraTest ABS1, FL1 and LM1 validation plate guides](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m73)
- [SoftMax Pro 7.0.2 user guide (2017)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m74)
- [Molecular Devices instrument repair FAQ](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m75)
- [SelectScience SpectraMax iD3 product page and reviews](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m76)
- [ResearchGate thread: problems with the built-in computer of the SpectraMax iD3](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m77)

### Synergy H1

- [Revvity HTRF setup sheet for the BioTek Synergy H1 (2024)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m20)
- [Synergy H1 technical details / data sheet 5994-3583EN](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m36)
- [Synergy H1 Operator's Manual PN 8041000 Rev K (2016)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m38)
- [Synergy H1 Instructions for Use Rev D (2022)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m39)
- [BioTek press release: BioTek Earns Cisbio HTRF Certification (June 2019)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m41)
- [Agilent press release: Agilent completes acquisition of BioTek (Aug 2019)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m42)
- [Synergy H1 product page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m43)
- [BioTek Filter, Mirror and LED List (Rev 06/19/13)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m45)
- [Thermo/Pierce–BioTek application note AN101613 (2013), dual-luciferase on Synergy readers](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m46)
- [Promega GloMax technical manual, Figure 132 (well-to-well crosstalk)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m48)
- [Customer-provided documents](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m92)

### Synergy Neo2

- [PerkinElmer AlphaScreen Practical Guide](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m18)
- [Synergy Neo2 technical details / data sheet 5994-3578EN](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m35)
- [Synergy Neo2 Operator's Manual PN 1351000 Rev B (2016)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m37)
- [Agilent Service Terms, US English (Jan 2024)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m40)
- [Synergy Neo2 product page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m44)
- [BioTek Filter, Mirror and LED List (Rev 06/19/13)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m45)
- [Thermo/Pierce–BioTek application note AN101613 (2013), dual-luciferase on Synergy readers](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m46)
- [BioTek application note AN031810 (2010), AlphaScreen on the Synergy H4](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m47)
- [Promega NanoBRET technical manuals TM483 (2016) and TM598 (2025)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m49)

### Tecan Spark

- [PerkinElmer AlphaScreen Practical Guide](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m18)
- [Promega NanoBRET technical manuals TM483 (2016) and TM598 (2025)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m49)
- [Spark Instructions for Use – Reference Guide 30124664 v2.2 (2024)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m50)
- [Spark brochure 399950 (2017)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m51)
- [Spark 10M complete specification sheet 398836 (2015)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m52)
- [Spark Cyto brochure (2019)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m53)
- [Tecan technical note 398568 (2017), monochromator vs filter sensitivity on Spark](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m54)
- [Tecan technical note 398695 (2018), far-red / Alexa 647 sensitivity](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m55)
- [Tecan technical note 396061 (2009), Infinite M1000 adjustable bandwidth](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m56)
- [Tecan application note 399880 (2017), HTRF on Spark](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m57)
- [Tecan application note 399011 (2017), temperature and glow luminescence](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m58)
- [Tecan application note 398811 (2020), AlphaLISA on Spark](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m59)
- [Tecan application note 400820 (2018), NanoBRET on Spark](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m60)
- [Tecan Knowledge Portal: Spark luminescence application considerations](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m61)
- [Tecan service contracts (Te-Care) page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m62)
- [Tecan microplate reader quality-control tools (MultiCheck) page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m63)
- [Tecan Spark product page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m64)
- [Customer-provided documents](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m92)

### VANTAstar

- [VANTAstar product and specification page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m23)
- [Decay Curve Monitoring technology page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m24)
- [Evaluation Plate page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m25)
- [US store: Standard Depot and Preferred Onsite service plans](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m28)
- [Bottom reading (direct optic) technology page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m30)
- [Enhanced Dynamic Range (EDR) technology page](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m33)
- [Customer-provided documents](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m92)

### Varioskan LUX

- [Revvity AlphaPlex Assay Development Guide](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m19)
- [Varioskan LUX product page (VLBLATD0)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m78)
- [Varioskan LUX User Manual N16044](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m79)
- [Varioskan LUX Technical Manual N16045](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m80)
- [SkanIt Software 4.1 Technical Manual (2015)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m81)
- [Thermo application note: automatic dynamic range / auto-gain selection on the Varioskan LUX (2015)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m82)
- [Varioskan LUX brochure COL32288](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m83)
- [Microplate package for Varioskan LUX IQ/OQ (SP-00720)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m84)
- [Varioskan Flash catalog page (5250500, discontinued)](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m85)
- [Thermo paper D10893 on Varioskan luminescence crosstalk](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m86)
- [Customer-provided documents](https://discoveryinpractice.com/compare/microplate-reader-specifications/#ref-m92)

## Sources and document editions

Document editions and model configurations matter. Where a link leads to a newer edition, a manual search page or a third-party copy, the note identifies that distinction. Reported field accounts remain separate from independently established specifications.

### [EnVision Nexus multimode plate reader specification sheet 947574](https://resources.revvity.com/pdfs/1040814%20(947574)_SPC%20New%20EnVision%20Nexus%20(NPI)_V4.pdf)

EnVision Nexus

### [EnVision Nexus User Manual HH36940101 Rev B (2023)](https://www.revvity.com/manuals-ifu)

EnVision Nexus

Link is Revvity’s manual search page; the document is not posted publicly.

### [Kaleido 4.1 Software Manual Rev E (2024)](https://www.revvity.com/manuals-ifu)

EnVision Nexus

Link is Revvity’s manual search page; the document is not posted publicly.

### [Kaleido 4.1 Release Notes Rev H (2024)](https://www.revvity.com/manuals-ifu)

EnVision Nexus

Link is Revvity’s manual search page; the document is not posted publicly.

### [EnVision Nexus Site Readiness Instructions Rev B (2023)](https://www.revvity.com/manuals-ifu)

EnVision Nexus

Link is Revvity’s manual search page; the document is not posted publicly.

### [EnVision Nexus Quick Start Guide HH36940121 (2023)](https://www.revvity.com/manuals-ifu)

EnVision Nexus

Link is Revvity’s manual search page; the document is not posted publicly.

### [Revvity guide to 21 CFR Part 11 compliance for the EnVision Nexus (2023)](https://resources.revvity.com/pdfs/wth-mmd-envision-nexus-enhanced-security-software.pdf)

EnVision Nexus

### [Revvity technical note: Advanced luminescence performance on the EnVision Nexus (2025)](https://www.revvity.com/content/advanced-luminescence-performance-envision-nexus)

EnVision Nexus

Revvity landing page; the PDF downloads after a form.

### [Revvity technical note 1581358 (2024), Alpha on the EnVision Nexus](https://resources.revvity.com/pdfs/tch-mmd-envision-nexus-alpha-crosstalk.pdf)

EnVision Nexus

### [Revvity technical note on TRF / single-flash 1536 reads on the EnVision Nexus (2024)](https://resources.revvity.com/pdfs/tch-trf-assay-performance-of-the-envision-nexus-multimode-plate-reader.pdf)

EnVision Nexus

### [Revvity application note: luminescence on the EnVision Nexus (app-mmd-envision-nexus-lumi)](https://resources.revvity.com/pdfs/app-mmd-envision-nexus-lumi.pdf)

EnVision Nexus

### [Revvity HTRF setup recommendations for the EnVision Nexus (2024)](https://resources.revvity.com/pdfs/app-mmd-envision-nexus-htrf-setup.pdf)

EnVision Nexus

### [EnVision Nexus filter list, document 2321302 (2026)](https://resources.revvity.com/pdfs/tch-mmd-envision-nexus-filter-list.pdf)

EnVision Nexus

### PerkinElmer EnVision Reference Manual 2104-9020-02 (2008)

EnVision Nexus

No public copy found.

No public document link.

### [PerkinElmer AlphaScreen Practical Guide](https://www.scribd.com/document/732093565/AlphaScreenPracticalGuide)

Synergy Neo2, Tecan Spark

Scribd copy. Revvity does not host this guide.

### [Revvity AlphaPlex Assay Development Guide](https://resources.revvity.com/pdfs/gde-user-guide-alphaplex-assay-development-guide.pdf)

Varioskan LUX

### [Revvity HTRF setup sheet for the BioTek Synergy H1 (2024)](https://resources.revvity.com/pdfs/spc-htrf-setup-biotek-synergy-h1.pdf)

Synergy H1

### [CLARIOstar Plus product and specification page](https://www.bmglabtech.com/en/clariostar-plus/)

CLARIOstar Plus

### [PHERAstar FSX product and specification page](https://www.bmglabtech.com/en/pherastar-fsx/)

PHERAstar FSX

### [VANTAstar product and specification page](https://www.bmglabtech.com/en/vantastar/)

VANTAstar

### [Decay Curve Monitoring technology page](https://www.bmglabtech.com/decay-curve-monitoring/)

CLARIOstar Plus, VANTAstar, PHERAstar FSX

### [Evaluation Plate page](https://www.bmglabtech.com/en/evaluation-plate/)

CLARIOstar Plus, PHERAstar FSX, VANTAstar

### [Application note AN371: Establishing luminescence-based assays (2022)](https://www.bmglabtech.com/en/application-notes/establishing-luminescence-based-assays-miniaturised-experiments-help-to-optimise-results/)

CLARIOstar Plus

### [US store: Pyrene fluorescence polarization module (Ex 320 / Em 380)](https://store.bmglabtech.com/product/pyrene-fluorescence-polarization-module/)

PHERAstar FSX

### [US store: Standard Depot and Preferred Onsite service plans](https://store.bmglabtech.com/product/vantastar-standard-depot-service/)

CLARIOstar Plus, PHERAstar FSX, VANTAstar

### [Optic modules page](https://www.bmglabtech.com/en/optic-modules/)

PHERAstar FSX

### [Bottom reading (direct optic) technology page](https://www.bmglabtech.com/en/direct-optic-bottom-reading/)

CLARIOstar Plus, PHERAstar FSX, VANTAstar

### [CLARIOstar Plus brochure (2019)](https://brochures.bmglabtech.com/view/665731246)

CLARIOstar Plus

### [Advanced Assay Stability (AAS) FAQ / application note](https://www.bmglabtech.com/hubfs/1_Webseite/5_Resources/Downloads/App%20Note%20PDFs/AN379.pdf)

PHERAstar FSX

BMG application note AN379.

### [Enhanced Dynamic Range (EDR) technology page](https://www.bmglabtech.com/en/enhanced-dynamic-range/)

CLARIOstar Plus, PHERAstar FSX, VANTAstar

### CLARIOstar temperature-control performance note (2015)

CLARIOstar Plus

No public copy found.

No public document link.

### [Synergy Neo2 technical details / data sheet 5994-3578EN](https://www.agilent.com/cs/library/specifications/public/Synergy-Neo2-technical-details-5994-3578EN-agilent.pdf)

Synergy Neo2

### [Synergy H1 technical details / data sheet 5994-3583EN](https://www.agilent.com/cs/library/specifications/public/Synergy-H1-technical-details-5994-3583EN-agilent.pdf)

Synergy H1

### Synergy Neo2 Operator's Manual PN 1351000 Rev B (2016)

Synergy Neo2

No public copy found; Agilent posts the data sheet only.

No public document link.

### Synergy H1 Operator's Manual PN 8041000 Rev K (2016)

Synergy H1

No public copy of Rev K; older revisions circulate on university sites.

No public document link.

### [Synergy H1 Instructions for Use Rev D (2022)](https://www.agilent.com/cs/library/packageinsert/public/SynergyH1_IFU_8041005IAW.D.pdf)

Synergy H1

### [Agilent Service Terms, US English (Jan 2024)](https://www.agilent.com/cs/library/support/Sales-Services-Terms/Service_Terms_US_English.pdf)

Synergy Neo2

### [BioTek press release: BioTek Earns Cisbio HTRF Certification (June 2019)](https://www.biospace.com/biotek-earns-cisbio-htrf-certification)

Synergy H1

### [Agilent press release: Agilent completes acquisition of BioTek (Aug 2019)](https://www.agilent.com/about/newsroom/presrel/2019/26aug-gp19017.html)

Synergy H1

### [Synergy H1 product page](https://www.agilent.com/en/product/microplate-instrumentation/microplate-readers/multimode-microplate-readers/biotek-synergy-h1-multimode-reader-1623193)

Synergy H1

### [Synergy Neo2 product page](https://www.agilent.com/en/product/microplate-instrumentation/microplate-readers/multimode-microplate-readers/biotek-synergy-neo2-hybrid-multimode-reader-1623195)

Synergy Neo2

### BioTek Filter, Mirror and LED List (Rev 06/19/13)

Synergy Neo2, Synergy H1

No public copy of the 2013 list; an older 2009 list circulates.

No public document link.

### [Thermo/Pierce–BioTek application note AN101613 (2013), dual-luciferase on Synergy readers](https://www.agilent.com/cs/library/applications/dual-spectral-luciferase-reporter-gene-assays-5994-3332EN-agilent.pdf)

Synergy Neo2, Synergy H1

### BioTek application note AN031810 (2010), AlphaScreen on the Synergy H4

Synergy Neo2

No public copy found.

No public document link.

### Promega GloMax technical manual, Figure 132 (well-to-well crosstalk)

Synergy H1

Not found in Promega’s current GloMax manuals.

No public document link.

### [Promega NanoBRET technical manuals TM483 (2016) and TM598 (2025)](https://www.promega.com/-/media/files/resources/protocols/technical-manuals/101/nanobret-target-engagement-intracellular-hdac-assay-protocol.pdf)

Synergy Neo2, Tecan Spark, SpectraMax iD3/iD5

Link is TM483; TM598 is on promega.com under the same number.

### [Spark Instructions for Use – Reference Guide 30124664 v2.2 (2024)](https://bif.wisc.edu/wp-content/uploads/sites/389/2017/11/30124664_IFU_SPARK_REF_ENGLISH_V2_2.pdf)

Tecan Spark

Copy hosted by UW–Madison; Tecan’s site has v2.1 and the newer v2.5.

### [Spark brochure 399950 (2017)](https://www.tecan.com/hubfs/HubDB/Te-DocDB/pdf/BR_Spark_Complete_399950.pdf)

Tecan Spark

Tecan now hosts the 2025 edition (V3.0), not the 2017 edition cited.

### [Spark 10M complete specification sheet 398836 (2015)](https://medicine.nus.edu.sg/wp-content/uploads/2022/04/complete-specification-sheet398836_1_0_spark10m.pdf)

Tecan Spark

Copy hosted by the National University of Singapore; Tecan’s successor sheet is 399985.

### [Spark Cyto brochure (2019)](https://www.tecan.com/hubfs/HubDB/Te-DocDB/pdf/BR_Spark-Cyto_401217.pdf)

Tecan Spark

Tecan now hosts the 2024 edition (V2.0), not the 2019 edition cited.

### [Tecan technical note 398568 (2017), monochromator vs filter sensitivity on Spark](https://www.tecan.com/hubfs/Downloads-PDFS/TN_The_ingenious_FusionOptics_in_the_Spark_398568.pdf)

Tecan Spark

### [Tecan technical note 398695 (2018), far-red / Alexa 647 sensitivity](https://www.tecan.com/hubfs/HubDB/Te-DocDB/pdf/TN_Evaluation_of_the_performance_of_the_Spark_multimode_reader_for_far_red_fluorescence_emission_398695.pdf)

Tecan Spark

### [Tecan technical note 396061 (2009), Infinite M1000 adjustable bandwidth](https://www.tecan.com/hubfs/HubDB/Te-DocDB/pdf/Infinite_M1000_Impactofbandwidth_396061_V1.0.pdf)

Tecan Spark

### [Tecan application note 399880 (2017), HTRF on Spark](https://www.tecan.com/hubfs/HubDB/Te-DocDB/pdf/AN_Homogeneous_time-resolved_fluorescence-HTRF-assays_399880_V2-0.pdf)

Tecan Spark

### [Tecan application note 399011 (2017), temperature and glow luminescence](https://www.tecan.com/hubfs/HubDB/Te-DocDB/pdf/AN_Optimization_of_using_the_Spark_Te-Cool_399011_V2-0.pdf)

Tecan Spark

Title: Optimization of temperature-sensitive assays using the Spark Te-Cool.

### [Tecan application note 398811 (2020), AlphaLISA on Spark](https://www.tecan.com/hubfs/HubDB/Te-DocDB/pdf/AN_Spark_Implementation_of_AlphaLISA_technology_398811.pdf)

Tecan Spark

### [Tecan application note 400820 (2018), NanoBRET on Spark](https://www.tecan.com/hubfs/HubDB/Te-DocDB/pdf/AN_Implementation-of-NanoBRET-Assay-Technology-in-the-Spark-multimode-reader_400820.pdf)

Tecan Spark

### [Tecan Knowledge Portal: Spark luminescence application considerations](https://www.tecan.com/knowledge-portal/spark-luminescence-application-considerations-and-recommendations)

Tecan Spark

### [Tecan service contracts (Te-Care) page](https://www.tecan.com/service-contracts)

Tecan Spark

### [Tecan microplate reader quality-control tools (MultiCheck) page](https://lifesciences.tecan.com/microplate-readers-qc-tools)

Tecan Spark

### [Tecan Spark product page](https://lifesciences.tecan.com/multimode-plate-reader)

Tecan Spark

### [SpectraMax iD3 user guide (2018)](https://www.moleculardevices.com/sites/default/files/en/assets/user-guide/br/spectramax-id3-userguide-5054747k.pdf)

SpectraMax iD3/iD5

Current revision (rev K).

### [SpectraMax iD5 user guide 5059784 (2018 / rev H 2022)](https://www.moleculardevices.com/sites/default/files/en/assets/user-guide/br/spectramax-id5-user-guide-5059784h.pdf)

SpectraMax iD3/iD5

### [SpectraMax iD5e user guide 5319240 (2025)](https://moldevkb.blob.core.windows.net/kb01/documents/br/idx/spectramax-id5e-user-guide-5319240a.pdf)

SpectraMax iD3/iD5

### [SpectraMax iD5e brochure / product page (2025)](https://www.moleculardevices.com/products/microplate-readers/multi-mode-readers/spectramax-id3s-id5e-readers)

SpectraMax iD3/iD5

### [Molecular Devices THUNDER TR-FRET application note (2021)](https://www.moleculardevices.com/en/assets/app-note/br/cell-based-measurement-of-erk1-2-phosphorylation-with-thunder-tr-fret-assay)

SpectraMax iD3/iD5

Closest match: ERK1/2 THUNDER TR-FRET on the iD5 (2021).

### [Molecular Devices technical note: PMT gain adjustment (2026)](https://www.moleculardevices.com/en/assets/app-note/br/pmt-gain-adjustment-for-fluorescence-luminescence)

SpectraMax iD3/iD5

### Molecular Devices knowledge-base answer: shake amplitude iD3/iD5 (#20267)

SpectraMax iD3/iD5

No public link found.

No public document link.

### Molecular Devices knowledge-base answer: touchscreen data and SoftMax Pro import (#20280)

SpectraMax iD3/iD5

Not found on Molecular Devices’ support portal.

No public document link.

### [SpectraTest ABS1, FL1 and LM1 validation plate guides](https://support.moleculardevices.com/s/article/SpectraTest-Validation-Package-User-Manual-Download-Page)

SpectraMax iD3/iD5

### [SoftMax Pro 7.0.2 user guide (2017)](https://moleculardevices.com/sites/default/files/en/assets/user-guide/br/softmax-pro-user-guide-v7-0-2.pdf)

SpectraMax iD3/iD5

### [Molecular Devices instrument repair FAQ](https://www.moleculardevices.com/service-support/time-and-materials-services)

SpectraMax iD3/iD5

No FAQ page found; Molecular Devices’ repair and maintenance page is the nearest.

### SelectScience SpectraMax iD3 product page and reviews

SpectraMax iD3/iD5

SelectScience no longer has an iD3 page.

No public document link.

### [ResearchGate thread: problems with the built-in computer of the SpectraMax iD3](https://www.researchgate.net/post/Has_anyone_had_problems_with_the_built-in_computer_of_the_Spectramax_ID3)

SpectraMax iD3/iD5

ResearchGate thread.

### [Varioskan LUX product page (VLBLATD0)](https://www.thermofisher.com/order/catalog/product/VLBLATD0)

Varioskan LUX

### [Varioskan LUX User Manual N16044](https://assets.thermofisher.com/TFS-Assets/LCD/manuals/Varioskan-LUX-User-Manual.pdf)

Varioskan LUX

Current revision 1.4 (2023).

### [Varioskan LUX Technical Manual N16045](https://assets.thermofisher.com/TFS-Assets/LCD/manuals/Varioskan-LUX-Technical-Manual.pdf)

Varioskan LUX

### SkanIt Software 4.1 Technical Manual (2015)

Varioskan LUX

No public copy found; Thermo posts SkanIt 6.x manuals.

No public document link.

### [Thermo application note: automatic dynamic range / auto-gain selection on the Varioskan LUX (2015)](https://assets.thermofisher.com/TFS-Assets/LCD/Product-Bulletins/VarioskanLUX-AutoGainSelection-AN-MRIAutoRange-Tech-Note-EN.pdf)

Varioskan LUX

### [Varioskan LUX brochure COL32288](https://assets.thermofisher.com/TFS-Assets/BID/brochures/Varioskan%20LUX.pdf)

Varioskan LUX

12-page Varioskan LUX brochure; the COL32288 code is not printed in it.

### [Microplate package for Varioskan LUX IQ/OQ (SP-00720)](https://thermofisher.com/order/catalog/product/SP-00720)

Varioskan LUX

### [Varioskan Flash catalog page (5250500, discontinued)](https://www.thermofisher.cn/order/catalog/product/cn/en/5250500)

Varioskan LUX

### Thermo paper D10893 on Varioskan luminescence crosstalk

Varioskan LUX

No confirmed public link.

No public document link.

### Field reports, field correspondence and field experience

All readers

Accounts from users, 2012–2026.

No public document link.

### User reports and public forum posts

All readers

Statements by instrument users.

No public document link.

### Comparison sheets and competitive presentations

All readers

Side-by-side specification sheets and slide decks.

No public document link.

### Customer-provided documents

Varioskan LUX, Tecan Spark, Synergy H1, VANTAstar

Customer publications, quotes, procurement memos and forwarded vendor emails.

No public document link.
