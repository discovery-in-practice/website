# Top vs bottom read: which should I use for cell-based fluorescence?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/top-vs-bottom-read-cell-fluorescence/

Choose top or bottom plate reading using cell location, medium background, plate transmission and matched controls while preserving assay biology.

Bottom reading is often the better starting point for fluorescent reporters in adherent cells on a transparent well bottom, especially when the medium contributes substantial background. Top reading can work better when the signal is distributed through the liquid, the bottom transmits poorly at the required wavelengths, or the reader's top optics collect light more efficiently. Compare both reading directions with appropriate controls. [1,2]

## Bottom reading can avoid much of the overlying medium

With top reading, excitation aimed at an adherent cell layer passes through the overlying medium, and returning fluorescence travels through it again. Medium components can absorb, scatter or emit light along that path. Bottom reading accesses the cell layer through the plate base and can reduce those contributions.

BMG LABTECH's HowTo Note 04 tested adherent HeLa cells expressing a red fluorescent protein at 580 nm excitation and 620 nm emission. Bottom reading improved signal-to-blank relative to top reading, particularly with autofluorescent medium. [1] The result supports testing bottom optics under those conditions; it does not supply a universal improvement factor for every reporter or reader.

The cell layer still contributes its own autofluorescence. A cell-free medium blank cannot tell you how much signal comes from unlabeled cells. Include both controls before attributing all remaining fluorescence to the reporter.

## The transparent bottom is part of the optics

Bottom reading requires transmission through the base at both excitation and emission wavelengths. “Clear” in visible room light does not establish ultraviolet transmission. Material, thickness, coatings and the reader's focal geometry all matter. The Assay Guidance Manual discusses these plate-selection constraints. [2]

For adherent cells, black-walled plates with an appropriate clear bottom are a practical fluorescence starting point. Preserve the surface treatment needed for attachment. Comparing plates with different coatings may change the cells as well as the light path. Inspect underside contamination, condensation and scratches when a few wells behave strangely.

Bottom optical paths differ in their efficiency. Ask how much light the bottom optical path delivers and collects at the relevant wavelengths, and whether it can focus appropriately on the cell layer. Manufacturer manuals, such as Tecan's Infinite 200 PRO instructions, specify different optical arrangements and settings for top and bottom modes. [3]

## Compare useful separation at a realistic read time

Use the same compatible plate when possible, containing labeled cells, otherwise comparable unlabeled cells, medium-only wells and a stable fluorescent reference. Optimize each direction within the reader's supported settings, including focus where adjustable. Prevent saturation and record gain differences; larger raw relative fluorescence units (RFU) alone do not establish better sensitivity.

Inspect low-positive separation from negative controls, replicate scatter and position effects. Check weak wells beside bright wells for optical crosstalk. If repeated excitation changes the reporter, balance read order across replicate plates or use separate matched plates for the comparison.

Uneven cell attachment can dominate either read direction. Imaging or a validated well-scan pattern can reveal whether the central reading spot represents the cell layer. Repeatedly sampling one bright patch can produce precise readings that misrepresent the well.

## Keep the biology comparable

Reducing fluorescent medium components may help, but changing medium also changes the biological environment. Verify cell function after any substitution. Use the assay's validated temperature and control drift during the measurement sequence; live-cell biology may require incubation above room temperature. A room-temperature chamber is useful only when that temperature suits the assay endpoint.

Choose the direction that preserves the smallest relevant biological response at the required throughput, then repeat that comparison after changing the plate bottom, medium or reporter.

## References

1. BMG LABTECH. [How to reduce autofluorescence in cell-based assays](https://www.bmglabtech.com/hubfs/1_Webseite/5_Resources/Downloads/Howto%20Notes/HTN4.pdf), HowTo Note 04, pp. 2–3. Adherent-cell top/bottom comparison and media effects; manufacturer experiment, not a universal performance ratio.

2. [Microplate Selection and Recommended Practices in High-throughput Screening and Quantitative Biology](https://www.ncbi.nlm.nih.gov/books/NBK558077/). Assay Guidance Manual. Archived full chapter; plate color, bottom material, surfaces and optical crosstalk.

3. Tecan. [Infinite 200 PRO Instructions for Use](https://www.tecan.com/hubfs/30125944_IFU_Infinite200-PRO_V1_4_English_German-Warnings.pdf), revision 1.4, June 2021. Fluorescence top/bottom optics and measurement-parameter guidance; instrument-specific details require the relevant reader manual.
