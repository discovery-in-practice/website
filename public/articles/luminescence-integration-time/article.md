# When reading longer stops helping

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/luminescence-integration-time/

Longer luminescence reads help when photon collection limits precision, but they cannot remove persistent differences between wells. This article shows how to compare repeated reads with independently prepared replicates, account for background noise, and choose a useful stopping point.

The plate looks noisy, so you increase the integration time. That often helps in a luminescence assay, but only if a substantial part of the variation comes from the measurement itself.

Differences in cell number, reagent delivery, temperature or biology remain however long you read. Longer integration improves photon statistics. It cannot put the missing cells back into well H17.

Before extending the read, find out how much of the variation comes from the reader and how much comes from the wells.

## What photon shot noise costs

Even a perfectly steady light source does not deliver precisely the same number of detected photons in every measurement. For independent photon arrivals described by a Poisson distribution, the standard deviation is the square root of the mean count. With negligible background and other noise, the relative uncertainty is:

Photon coefficient of variation equals one divided by the square root of the mean detected photon count N.

Here, N is the mean number of detected photons accumulated during the measurement. CV is expressed as a fraction; multiply by 100 for a percentage. At 100 photons, the photon-counting CV is 10%. At 1,000 it is about 3.2%; at 10,000, 1%. This is the shot-noise limit under those assumptions. Real measurements can be worse. [[1](https://discoveryinpractice.com/articles/luminescence-integration-time/#ref-1), [2](https://discoveryinpractice.com/articles/luminescence-integration-time/#ref-2)]

Halving the photon-counting CV requires four times as many detected photons. If the source is stable and detection remains linear, that means four times the integration time, or four times the useful photon collection rate, or some combination.

Do not insert a displayed value of 10,000 RLU into this equation. Relative light units are instrument-dependent, and counts per second are a rate, not the accumulated count. A bigger displayed number after changing gain does not establish that you collected more photons.

Efficient light collection can save substantial time when photon statistics dominate. Merely multiplying an existing signal multiplies its fluctuations as well.

## A small improvement can consume a large afternoon

Suppose a one-second read contributes 6% measurement CV, while persistent differences between nominally identical wells contribute 8%. Assume these contributions are independent, the signal is stable and the measurement component decreases with the square root of integration time.

For independent contributions, add the variances to estimate total CV:

Total coefficient of variation squared is approximately measurement coefficient of variation squared plus between-well coefficient of variation squared.

This constructed example gives the following result:

| Integration per well | Measurement CV | Persistent well CV | Total CV |
| --- | --- | --- | --- |
| 1 second | 6.0% | 8.0% | 10.0% |
| 4 seconds | 3.0% | 8.0% | 8.5% |
| 16 seconds | 1.5% | 8.0% | 8.1% |

The detector measurement improves fourfold between the first and last rows. Overall precision barely improves after four seconds because most of the remaining variance belongs to the wells.

For a reader measuring wells one at a time, sixteen seconds across 1,536 wells is nearly seven hours of integration alone, before motion and other overheads. That adds more than five hours compared with a four-second read, for a change from 8.5% to 8.1% overall CV. The signal might also change appreciably while you wait.

The assumed 8% contribution represents persistent differences between wells. In an actual experiment, a plateau could reflect dispensing variation, persistent optical effects, imperfect blank correction or sample instability.

## Cells have counting statistics too

Imagine dispensing a well-mixed suspension in which cells arrive independently, with an average of 100 cells per well. Under a Poisson loading model, the cell count has a standard deviation of 10 cells: a 10% CV before the assay chemistry has done anything.

At 1,000 cells per well, the corresponding count CV is 3.2%; at 10,000, 1%. The same probability model describes both examples, but collecting more photons improves the estimate of the light from the cells already present. It does not change how many cells entered each well.

Poisson seeding is more than a classroom convenience. Chang and colleagues used it to describe initial occupancy in microwell arrays, then followed substantial differences in subsequent clonal growth. Their system supports the loading principle; it does not establish a universal CV for a conventional cell-based screen. [[3](https://discoveryinpractice.com/articles/luminescence-integration-time/#ref-3)]

Clumping, settling during dispensing, unequal delivered volumes and differential growth can all change the distribution. Deliberately dispensing a known number of cells changes the model too. For cultured assays, count the cells present when the signal is generated; growth and loss may have changed their number since dispensing.

Cells also contribute unequal amounts of signal. If cell number is Poisson with mean n, and each cell contributes an independent signal with single-cell CV c, the model becomes:

Cell-signal coefficient of variation squared equals the quantity one plus c squared divided by n.

With 100 cells and a single-cell CV of 100%, the predicted well-signal CV is about 14.1%, rather than the 10% obtained by assuming identical cells. This calculation excludes detector noise and assumes cell brightness is independent of cell number and of other cells. Density-dependent biology can break those assumptions.

That distinction matters for ATP assays. Promega's CellTiter-Glo 2.0 manual discusses changes in ATP per cell with cell density and physiological state. Luminescence can be proportional to cell number over a validated range without being a literal cell counter under every treatment. [[4](https://discoveryinpractice.com/articles/luminescence-integration-time/#ref-4)]

Adding cells may reduce sampling variation, but it can also change the biology you intended to measure. Check the response to compounds and the useful assay window before treating the lower CV as an assay improvement.

## Repeated reads and replicate wells answer different questions

Ten reads of one stable well repeatedly measure the same preparation. Ten independently prepared wells include preparation differences. Calling both exercises “reproducibility” can conceal the most useful information in the experiment.

A practical integration-time study should contain both. Use representative low, middle and high signals, along with blanks. Include independently prepared replicates and repeated measurements where the assay tolerates them. Compare the variability within each well with the variability between wells at each integration time.

If repeated reads improve while between-well variation remains nearly unchanged, investigate the preparation and persistent spatial effects. If both improve, photon collection may still be limiting. If both deteriorate with time, investigate drift or damage before calculating a noise floor.

Balance read order and elapsed time across settings. Reading every well briefly first and every well slowly last confounds integration time with assay age. Fluorescence excitation may itself perturb the sample; use matched fresh preparations when repeated exposure changes the signal.

For a stable assay, plotting CV squared against inverse integration time can be informative. A simple model gives a straight line whose intercept represents variation that does not decrease with longer reading. Use it as a diagnostic approximation. Correlated noise, drift and nonlinearity can defeat the interpretation.

## Subtracting background leaves its noise behind

Blank subtraction removes an estimate of the average background. It does not remove the random background photons collected in the sample well.

Consider an ideal counting measurement with 1,000 signal photons and 1,000 background photons. Even if you knew the mean background perfectly, the sample measurement fluctuates according to all 2,000 detected photons. After subtraction, the net signal is 1,000, but its standard deviation is about 44.7: a CV of 4.5%, rather than the 3.2% expected without background. An experimentally estimated blank adds uncertainty of its own. [[1](https://discoveryinpractice.com/articles/luminescence-integration-time/#ref-1), [2](https://discoveryinpractice.com/articles/luminescence-integration-time/#ref-2)]

This is why reducing optical background and leakage from neighboring bright wells can be worth more than extending the read. Neither a clean-looking baseline nor a large raw signal guarantees a precise small difference after subtraction. Check performance at the low signals and intermediate responses that determine compound ranking, as well as at the bright control.

## Spend the next second where it helps

Longer reading also extends the period during which temperature, evaporation or reaction progress can change the plate. Promega specifically identifies temperature as affecting CellTiter-Glo 2.0 light intensity and decay, and cautions about temperature gradients within plates. [[4](https://discoveryinpractice.com/articles/luminescence-integration-time/#ref-4)] A reproducible read schedule and stable sample temperature therefore belong in the precision experiment.

Choose optics, plate geometry and focus settings that collect useful light efficiently while controlling background and interwell leakage. Verify detector linearity over the actual signal range. Compression can make bright wells appear less variable, which is a separate problem from genuinely better photon statistics.

During optimization:

Increase integration time when repeated-read data show that measurement noise remains important.

Fix dispensing, mixing or cell-loading problems when the variation persists between preparations.

Compare uncertainty in the reported endpoint, including any subtraction or ratio, rather than judging only the brightest raw channel.

Recheck the chosen timing under a realistic plate sequence, including temperature equilibration and queue delays.

Stop extending the read when the extra precision no longer changes which compounds you select or which results you would repeat.

## References

1. Hamamatsu Photonics. [Photon Counting SNR Simulator](https://www.hamamatsu.com/eu/en/resources/interactive-tools/photon-counting-snr-simulator.html). Photon statistics and signal/background contributions; accessed September 24, 2026.

2. Owicki JC. [Fluorescence Polarization and Anisotropy in High Throughput Screening: Perspectives and Primer](https://doi.org/10.1177/108705710000500501). Journal of Biomolecular Screening. 2000;5:297–306.

3. Chang TC and colleagues. [Microwell arrays reveal cellular heterogeneity during the clonal expansion of transformed human cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC4854201/). Technology. 2015;3:163–171. Initial seeding statistics and subsequent clonal behavior in their microwell system.

4. Promega. [CellTiter-Glo 2.0 Cell Viability Assay Technical Manual TM403](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol.pdf?la=en). Revision 1/23, section 4; temperature and ATP-per-cell considerations. Worked examples in this article are constructed calculations, not measurements from this manual.
