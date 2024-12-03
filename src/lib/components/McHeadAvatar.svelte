<script lang="ts">
    import selections from "$lib/stores"
	import { onDestroy, onMount } from "svelte";
	import type { Unsubscriber, Writable } from "svelte/store";
    import config from "$lib/config"


    let clazz = "";
    export { clazz as class };
    let idd = ""
    export { idd as id }
    export let mcHeadUUID: string;

    let toggleName = `is${idd}Selected` as keyof typeof selections;
    let selectedMember = selections[toggleName];

    function ToggleSelection() {
        selectedMember.update(curValue => !curValue);
    }

    let mcHeadScale: number
    let mcHeadWidth: number
    let mcHeadHeight: number

    let unsubscribe: Unsubscriber;

    onMount(() => {
        unsubscribe = selectedMember.subscribe(isSelected => {
            if(!isSelected) {
                let gen = config.memberData[idd as keyof typeof config.memberData].gen;
                let guild = config.memberData[idd as keyof typeof config.memberData].guild;
                selections[`is${gen}Selected`].set(false);
                selections[`is${guild}Selected`].set(false);
            }
            
            let grayscaleValue = isSelected ? 0 : 1;
            let brightnessValue = isSelected ? 100 : 80;
            document.getElementById(idd)!.style.filter=`grayscale(${grayscaleValue}) brightness(${brightnessValue}%)`;
        })

    const smallScreenQuery = window.matchMedia("(max-width: 768px)")
    const mediumScreenQuery = window.matchMedia("(min-width: 769px) and (max-width: 1274px)")

    function updateIframeWidth() {
            if (smallScreenQuery.matches) {
                mcHeadWidth = 48
                mcHeadHeight = 48
                mcHeadScale = 6
            } else if (mediumScreenQuery.matches) {
                mcHeadWidth = 56
                mcHeadHeight = 56
                mcHeadScale = 7
            } else {
                mcHeadWidth = 80
                mcHeadHeight = 80
                mcHeadScale = 10
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
        if(unsubscribe)
            unsubscribe();
    });
</script>


<style>
    p {
        color: white;
        text-align: center;
        margin-top: 0px;
        margin-bottom: 0px;
    }
</style>


<div class={clazz} id={idd}>
    <button
        style="width: {mcHeadWidth}px;
            height: {mcHeadHeight}px;
            background: url(https://api.mineatar.io/face/{mcHeadUUID}?scale={mcHeadScale})"
        on:click={ToggleSelection} />
    <p>
        {idd}
    </p>    
</div>