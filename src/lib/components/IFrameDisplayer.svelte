<script lang="ts">
    import { coinValueHasBeenClicked, curIFrameVideoID, curIFrameVideoTimestamp } from "$lib/stores"
    import { onDestroy, onMount } from "svelte";
    import { get, type Unsubscriber } from "svelte/store";


    let iFrameWidth: number
    let iFrameHeight: number
    const emptyIFrameTextContainerWidth = 600
    const emptyIFrameTextContainerHeight = 200

    let iFrame: HTMLIFrameElement

    let unsubscribeID: Unsubscriber
    let unsubscribeTimestamp: Unsubscriber
    onMount(() => {
        unsubscribeID = curIFrameVideoID.subscribe(newID => {
            const curTimestamp = get(curIFrameVideoTimestamp)
            const newVideoURL = `https://www.youtube.com/embed/${newID}?start=${curTimestamp}&autoplay=1`
            if(iFrame)
                iFrame.src = newVideoURL 
        })
        unsubscribeTimestamp = curIFrameVideoTimestamp.subscribe(newTimestamp => {
            const curVideoID = get(curIFrameVideoID)
            const newVideoURL = `https://www.youtube.com/embed/${curVideoID}?start=${newTimestamp}&autoplay=1`
            if(iFrame)
                iFrame.src = newVideoURL 
        })


    const smallScreenQuery = window.matchMedia("(max-width: 768px)")
    const mediumScreenQuery = window.matchMedia("(min-width: 769px) and (max-width: 1274px)")

    function updateIframeWidth() {
            if (smallScreenQuery.matches) {
                iFrameWidth = 424
                iFrameHeight = 238  
            } else if (mediumScreenQuery.matches) {
                iFrameWidth = 614
                iFrameHeight = 345
            } else {
                iFrameWidth = 884
                iFrameHeight = 497
            }
        }

        updateIframeWidth();

        smallScreenQuery.addEventListener("change", updateIframeWidth);
        mediumScreenQuery.addEventListener("change", updateIframeWidth);

        return () => {
            smallScreenQuery.removeEventListener("change", updateIframeWidth);
            mediumScreenQuery.removeEventListener("change", updateIframeWidth);
        };
    })

    onDestroy(() => {
        if(unsubscribeID)
            unsubscribeID()
        if(unsubscribeTimestamp)
            unsubscribeTimestamp()
    })
</script>


<style>
    .IFrameContainer {
        width: var(--iFrameWidth);
        height: var(--iFrameHeight);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border: brown solid 2px;
    }

    .emptyIFrameTextContainer {
        width: var(--emptyIFrameTextContainerWidth);
        height: var(--emptyIFrameTextContainerHeight);
        text-align: center;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20pt;
    }

    @media (max-width: 1274px) {
        .IFrameContainer {
            margin-top: 1%;
        }
    }

    @media (max-width: 768px) {
        .IFrameContainer {
            margin-top: 1%;
        }
    }
</style>


{#if !$coinValueHasBeenClicked}
    <div class="IFrameContainer" style="--iFrameWidth: {iFrameWidth}px; --iFrameHeight: {iFrameHeight}px;">
        <div class="emptyIFrameTextContainer" style="--emptyIFrameTextContainerWidth: {emptyIFrameTextContainerWidth}px; --emptyIFrameTextContainerHeight: {emptyIFrameTextContainerHeight}px;">
            <p>
                The graph shows when and how somebody's coins changed during ENreco.
                Click on any dot to see the corresponding stream moment.
            </p>
        </div>
    </div>
{:else}
    <iframe width={iFrameWidth} height={iFrameHeight} bind:this={iFrame} id="videoIFrame" src="" title="Timestamp to video when coins changed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
{/if}