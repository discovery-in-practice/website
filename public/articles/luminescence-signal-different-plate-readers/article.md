# Why is my luminescence signal lower on one plate reader than another?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/luminescence-signal-different-plate-readers/

Learn why luminescence signals differ between readers and how to compare precision, linearity, temperature and crosstalk fairly.

A lower luminescence reading can reflect a different reporting scale, less collected light, different acquisition settings or a change in the sample between measurements. Relative light units (RLU) are not standardized across plate readers. A tenfold difference in displayed RLU says little about which reader detects weak samples more reliably. Compare the reader's ability to resolve relevant low signals and reproduce the assay response. [1]

## Start with what the displayed number means

Ask whether the software reports integrated output, a rate normalized to acquisition time, gain-scaled intensity or another processed quantity. Increasing the integration time may increase a summed output while leaving a normalized rate approximately unchanged. Changing amplification can change the displayed number without producing additional photons in the sample.

Consider a constructed comparison. Replicates on one reader have a mean of 100,000 RLU and a standard deviation of 5,000 RLU. On another, they have a mean of 10,000 RLU and a standard deviation of 500 RLU. Both have a 5% coefficient of variation (CV), calculated as standard deviation divided by mean, times 100. Those results could arise from a simple scale difference. They do not establish equal performance near the blank or across the full assay range.

## Check what each reader actually collects

Record integration time in seconds, gain or sensitivity mode, read geometry, plate definition and optical filters. A broad luminescence measurement collects a different spectral range from a filtered bioluminescence resonance energy transfer (BRET) donor channel. Comparing their RLU directly leaves that difference hidden.

Detector spectral response, collection efficiency, read height and plate construction can also change output. Use the correct plate definition and validated optics for each instrument. Check dilution behavior over the bright end: a compressed response can make the brightest standards look deceptively consistent. Verify an approximately proportional response through the bright end and distinguishable signals near the blank.

Some of the measured light may come from another well. Promega's crosstalk guidance describes how light from strong emitters affects nearby wells, and why well isolation and plate opacity matter. Include dim or blank wells beside bright samples, plus comparable wells far from them. That layout reveals whether a high apparent low-signal response includes neighboring light. Physical suppression of that leakage also avoids the extra counting noise that subtraction cannot remove. [2]

## Keep the sample comparison fair

Reading a plate first on one instrument and later on another confounds instrument performance with assay age. Use balanced read order across matched plates or another design that separates the two. Record substrate-addition time, transfer time and the order of readings. A stable control material can help isolate instrument behavior, but it does not reproduce all the chemistry of the assay.

For CellTiter-Glo 2.0, Promega specifies approximately 30 minutes of room-temperature equilibration before reagent addition and a stabilization period before measurement. Its manual also explains that temperature affects light intensity and decay. Keep the sample and reagent handling consistent and maintain a stable near-room-temperature chamber for this validated endpoint. A switched-off heater alone does not establish stable sample temperature during a long run. [3]

Live-cell kinetic assays may require controlled biological temperatures instead. Use the assay protocol to define the condition, then check whether each instrument maintains it through the acquisition.

## Compare the result you need to make a decision

Run blanks, low positives and a concentration series with independently prepared replicates. Evaluate blank variability, low-positive precision, response proportionality and recovery of known differences. For a screening assay, inspect control separation and representative concentration–response curves. Keep the raw signals alongside any normalization.

Aligning the display scales leaves background separation, high-end compression and light from neighboring wells to be checked separately. Judge those limits using the samples and response differences the assay must resolve.

## References

1. Messenger S. Promega. [Just What Is an RLU (Relative Light Unit)?](https://www.promegaconnections.com/measuring-relative-light-units/), 28 October 2020; checked 29 September 2026. Instrument-dependent reporting units. Web text reviewed; complete local archive unavailable.

2. Wieczorek D, Hooper K, Bjerke M. Promega. [How Sensitivity and Crosstalk Affect Your Bioluminescent Assay Results](https://www.promega.com/resources/pubhub/2019/how-sensitivity-and-crosstalk-affect-your-bioluminescent-assay-results/), June 2019, tpub_212. Well isolation and plate opacity; no historical instrument ranking is carried forward.

3. Promega. [CellTiter-Glo 2.0 Assay Technical Manual TM403](https://www.promega.com/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol/), archived revision January 2023, sections 3.B and 4.B, PDF pp. 7 and 11. Equilibration, stabilization and temperature-dependent light output.
