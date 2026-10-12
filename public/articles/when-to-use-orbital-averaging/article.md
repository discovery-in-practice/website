# When should I use orbital averaging?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/when-to-use-orbital-averaging/

When orbital averaging helps heterogeneous cell assays, how it differs from shaking and how to compare center, spiral and matrix reads.

Use orbital averaging when fluorescence varies across a well and a center reading does not reliably represent the sample. Adherent cells, uneven seeding and patchy expression are common reasons to investigate it. The reader averages signals from several positions along an orbit, reducing dependence on the well center if the orbit crosses the relevant material. [1]

## Repeating one position does not sample the rest of the well

A reader can produce highly repeatable measurements of a small region that contains unusually few cells. More flashes at that location may reduce photon-counting noise while leaving the sampling bias unchanged. Moving the measurement across the well addresses a different source of uncertainty.

BMG LABTECH's heterogeneous-cell guidance includes green fluorescent protein (GFP)-expressing HeLa cells: 50,000 cells per well in a 96-well plate, measured from below at 482 nm excitation and 530 nm emission. Across ten replicate wells, scanning modes reduced the coefficient of variation (CV) relative to center readings. That is a configuration-specific example of spatial sampling helping a cell assay, rather than a guarantee for every cell type or plate. [2]

## An orbit samples a ring

Orbital averaging uses a defined circular path. Spiral averaging covers changing radii, while a matrix scan measures a grid and can retain a spatial map. These geometries answer different questions. A ring could miss a compact central cluster; a center reading could miss cells near the wall. A matrix scan can reveal either pattern before you choose a faster routine read. [1,2]

The resulting average is not automatically a whole-well total. The measured value depends on which regions were sampled, their weighting and the instrument's optical footprint. If the assay requires total cell-associated signal, compare the selected geometry against a suitably validated whole-well method. Avoid interpreting an uncalibrated spatial average as an absolute cell count.

Orbital averaging is also distinct from orbital shaking. Shaking moves liquid to mix or resuspend it. Averaging changes the locations sampled during measurement; it does not establish that the contents are well mixed. Check the reader's definition of each setting.

## Compare spatial coverage without adding more reading time

Start with representative untreated and treated wells, including low cell densities and weak responses. Inspect a matrix scan or suitable images for central clusters, rings, detached patches and bubbles. Use matrix-matched blanks to see whether the well wall or plate base contributes position-dependent background.

Compare center, orbital and broader scanning modes at similar total acquisition time or flash count where feasible. Otherwise a longer scan may look better simply because it collected more photons. Record the orbit diameter in mm, read height, plate type, fill volume and actual time per well in s. Keep the path within the usable well area, allowing for the optical spot size.

Evaluate independently prepared replicate wells, not only repeated reads of one well. Check whether the change preserves the treatment response and improves precision at the weak end. If a scan changes the mean substantially, inspect its map before assuming that the larger value is better.

## Decide whether the spatial pattern is biology

For a homogeneous soluble fluorophore, scanning may add little beyond a well-chosen center measurement. For an assay of cell migration or localized growth, the spatial pattern may itself be the result; collapsing it into one average can discard useful information.

If you exclude scan points, define the rule before looking at compound identities and apply it consistently. Removing inconvenient low-signal regions after seeing the answer can hide detachment or cytotoxicity. Retain the maps from development so an unexpected screening result can be compared with the spatial patterns you already observed.

## References

1. BMG LABTECH. [Well-scanning](https://www.bmglabtech.com/en/well-scanning/). Orbital, spiral and matrix acquisition.

2. BMG LABTECH. [How to reduce data variability in heterogenous cell samples](https://www.bmglabtech.com/en/howto-notes/how-to-reduce-data-variability-in-heterogenous-cell-samples/), Figures 4–6. GFP HeLa example and spatial heterogeneity. No universal orbit diameter or improvement is inferred.
