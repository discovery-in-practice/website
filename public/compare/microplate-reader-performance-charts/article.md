# Microplate reader performance: four comparisons in charts

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/compare/microplate-reader-performance-charts/

Compare microplate reader sensitivity, dual-color read times and temperature control, with published values and measurement conditions kept visible.

Four comparisons bring the reader specifications into view. The figures keep published values, calculated comparisons and configuration limits distinct; the data tables retain the numbers and conditions behind each plot.

[Specifications](https://discoveryinpractice.com/compare/microplate-reader-specifications/)[At a glance](https://discoveryinpractice.com/compare/microplate-readers-at-a-glance/)[Performance charts](https://discoveryinpractice.com/compare/microplate-reader-performance-charts/)

## Fluorescein detection limits: printed and committed figures

The sensitivity rows compare headline numbers, and four instruments print a headline far better than the figure they commit to in their own manuals. This chart puts the two side by side.

![Fluorescein detection limits: printed and committed figures. Full values and limitations appear in the accompanying data table and caption.](https://discoveryinpractice.com/assets/microplate-reader-fluorescence-limits.svg)Top-read fluorescein detection limits, in pM on a logarithmic scale (lower is better). Light dots show brochure or data-sheet headlines; dark dots show the binding figure from the vendor’s own manual or guaranteed table. A single dark dot marks a single published “<” limit. Sources: vendor brochures, data sheets and manuals as cited in the comparison matrix. Neo2 guarantee is provisional pending a newer manual. H1 guarantee is in 96-well; its data sheet is in 384-well. iD5 prints “optimized” and “guaranteed.” Varioskan prints amol per well with no volume.

| Reader | Filters: printed pM | Filters: committed pM | Mono: printed pM | Mono: committed pM | Basis |
| --- | --- | --- | --- | --- | --- |
| CLARIOstar Plus | 0.15 | — | 0.35 | — | “<” limits, 384sv, 20 µL |
| EnVision Nexus | 2 | — | — | — | Spec sheet “<” limit; no separate guarantee found; no monochromator |
| PHERAstar FSX | 0.15 | — | — | — | “<” limit; no monochromator |
| SpectraMax iD3/iD5 | 0.5 | 3 | 1 | 6 | Optimized vs guaranteed, 384-well (filters iD5 only) |
| Synergy H1 | 0.25 | 10 | 2.5 | 20 | Data sheet (384) vs manual guarantee (96-well) |
| Synergy Neo2 | 0.2 | 5 | 2 | 20 | Data sheet averages vs manual Rev B (2016) App. A; provisional pending a newer manual |
| Tecan Spark | 0.25 | 10 | 0.5 | 20 | Brochure factory averages vs Reference Guide (2024) pp. 190, 196; standard module, 384, 100 µL |
| VANTAstar | 0.5 | — | 0.8 | — | “<” limits, 384sv, 20 µL |
| Varioskan LUX | — | — | — | — | No filter FI; monochromator 400 amol/well with no volume |

## Luminescence: committed figure versus printed headline

The same question for luminescence. Glow and flash figures can’t share an axis, so each vendor is compared only with itself, same chemistry and plate.

![Luminescence: committed figure versus printed headline. Full values and limitations appear in the accompanying data table and caption.](https://discoveryinpractice.com/assets/microplate-reader-luminescence-ratios.svg)Shown as a ratio within each vendor’s own documents, because glow and flash figures cannot share one absolute axis. Light dot = headline (1×); dark dot = manual specification, guaranteed table or vendor measurement. Single “<” limits are shown at 1×; missing or incompatible comparisons are not plotted. The original chart compares the same chemistry and plate. Spark source volumes differ: 55 µL in the brochure versus 100 µL in the Reference Guide. Spark glow values are 9 versus <10 pM. Spark sources: ENLITEN flash ≤12 amol in 55 µL; Reference Guide 30124664 v2.2 (2024) §9.7.2. iD: live spec page versus Tables A-6/A-7. Nexus: spec sheet 947574 versus Revvity technical note (2025), Figure 1, Ultra-sensitive, same kit/plate/volume, 1 s. Neo2 manual specifies 10 s/well, 96-well, 200 µL.

| Reader | Headline | Committed or vendor-measured | Ratio | Basis |
| --- | --- | --- | --- | --- |
| CLARIOstar Plus | <0.4 pM | — | 1 | One “<” limit, flash ATP, 384sv, 20 µL |
| EnVision Nexus | <0.001 pM | 8.29 pM | 8290 | Spec sheet 947574 vs Revvity technical note (2025), Ultra-sensitive, same kit/plate/volume, 1 s |
| PHERAstar FSX | <0.4 pM | — | 1 | One “<” limit, flash ATP, 384sv, 20 µL |
| SpectraMax iD3/iD5 | 4 pM (384) | 20 pM guaranteed (384) | 5 | Live spec page vs user guide Tables A-6/A-7, ATPlite |
| Synergy H1 | 10 amol (no plate) | ≤75 amol (96-well) | n/a | Headline names no plate |
| Synergy Neo2 | 5 amol (no volume) | ≤50 amol (96-well, 200 µL) | n/a | Different plates; volume of the headline not stated |
| Tecan Spark | 0.218 pM flash | <0.8 pM flash at 10 s/well | 3.7 | Spec sheet 2015 (ENLITEN, 384, 55 µL) vs Reference Guide v2.2 §9.7.2 (384, 100 µL) |
| VANTAstar | <0.8 pM | — | 1 | One “<” limit, 384sv, 20 µL |
| Varioskan LUX | <7 amol (no volume) | — | n/a | One figure, no volume |

## Reading both colors of a 384-well ratio assay

One detector reads the two colors of a ratio assay in turn. The second color is a second pass, and no vendor prints that time.

![Reading both colors of a 384-well ratio assay. Full values and limitations appear in the accompanying data table and caption.](https://discoveryinpractice.com/assets/microplate-reader-dual-color-read-times.svg)A second detector halves the read time in the source comparison. Dark bars show the vendor’s fastest printed one-color read, or both colors at once where stated. Light bars show an estimated second pass for one-detector readers: an upper bound because plate movement is shared. Vendor settings differ (1 flash, sweep mode, “lowest setting”). Spark: Spark Cyto brochure ≤30 s for 384 wells. H1: kinetic figure, no flash count stated. Neo2’s 11 s is one color, and dual-emission time is not published; it reads two colors at once only on Dual Filter Top builds with a special-order cube.

| Reader | First color, s (vendor) | Second color, s (estimated) | Total, s | Basis |
| --- | --- | --- | --- | --- |
| CLARIOstar Plus | 15 | 15 | 30 | Flying, 1 flash; second color estimated |
| EnVision Nexus | 14 | 0 | 14 | On the fly, dual-channel module, both colors at once |
| PHERAstar FSX | 14 | 0 | 14 | Flying mode, 1 flash, simultaneous dual emission |
| SpectraMax iD3/iD5 | 32 | 32 | 64 | “Using lowest setting”; second color estimated |
| Synergy H1 | 22 | 22 | 44 | Kinetic figure, no flash count; second color estimated |
| Synergy Neo2 | 11 | not published | 11 | Sweep mode, one color; dual time not published |
| Tecan Spark | 30 | 30 | 60 | Spark Cyto brochure ≤30 s, 384, one flash; second color estimated |
| VANTAstar | 16 | 16 | 32 | Flying, 1 flash; second color estimated |
| Varioskan LUX | 45 | 45 | 90 | Minimum time, one flash; second color estimated |

## Coldest setpoint in a 22 °C laboratory

Temperature-sensitive assays (Alpha, glow luminescence, enzyme kinetics) run at whatever temperature the reader settles at. Only readers that can cool get below the room.

![Coldest setpoint in a 22 °C laboratory. Full values and limitations appear in the accompanying data table and caption.](https://discoveryinpractice.com/assets/microplate-reader-temperature-floor.svg)Every reader warms the plate above the room unless it can cool. Two can, one at the read position. Floors apply vendors’ “ambient +n °C” figures to a 22 °C lab. PHERAstar FSX AAS is optional and operates at 18–45 °C in the read chamber; detectors are cooled too. Spark Te-Cool is optional at the incubation position; the plate is read elsewhere. With Te-Cool fitted, room limit drops to 30 °C; at 30 °C and 50% RH the 18 °C floor is the dew point (calculated). Nexus: “The instrument cannot reach temperatures lower than the ambient temperature.” Alpha signal moves about 8% per °C (PerkinElmer); +4 °C shifts it by about a third (calculated). Tecan’s own note reports glow luminescence rising 34% in six minutes at +4 °C over ambient.

| Reader | Coldest setpoint in a 22 °C lab, °C | Basis |
| --- | --- | --- |
| CLARIOstar Plus | 25 | Ambient +3 |
| EnVision Nexus | 27 | Ambient +5 |
| PHERAstar FSX | 18 | AAS option, 18–45 °C, in the read chamber |
| SpectraMax iD3/iD5 | 27 | Ambient +5 |
| Synergy H1 | 26 | Ambient +4 |
| Synergy Neo2 | 26 | Ambient +4 (Alpha mode +3, max 30 °C) |
| Tecan Spark | 26 (18 with Te-Cool) | Ambient +4; Te-Cool option at the incubation position |
| VANTAstar | 26 | Ambient +4 |
| Varioskan LUX | 26 | Ambient +4 |

## Sources

The [comparison source library](https://discoveryinpractice.com/compare/microplate-reader-specifications/#sources) identifies the vendor documents, editions and availability notes. Each chart and data table retains its specific measurement basis.
