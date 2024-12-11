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


    const mobileScreenQuery = window.matchMedia("(max-width: 480px")
    const smallScreenQuery = window.matchMedia("(max-width: 768px)")
    const mediumScreenQuery = window.matchMedia("(min-width: 769px) and (max-width: 1274px)")

    function updateIframeWidth() {
            if (mobileScreenQuery.matches) {
                mcHeadWidth = 28
                mcHeadHeight = 28
                mcHeadScale = 3
            }
            else if (smallScreenQuery.matches) {
                mcHeadWidth = 44
                mcHeadHeight = 44
                mcHeadScale = 5
            } else if (mediumScreenQuery.matches) {
                mcHeadWidth = 52
                mcHeadHeight = 52
                mcHeadScale = 6
            } else {
                mcHeadWidth = 84
                mcHeadHeight = 84
                mcHeadScale = 10
            }
        }

        updateIframeWidth();

        mobileScreenQuery.addEventListener("change", updateIframeWidth);
        smallScreenQuery.addEventListener("change", updateIframeWidth);
        mediumScreenQuery.addEventListener("change", updateIframeWidth);

        return () => {
            mobileScreenQuery.removeEventListener("change", updateIframeWidth);
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
    .memberName {
        color: white;
        text-align: center;
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 12pt;
    }
    
    @media (max-width: 1274px) {
        .memberName {
            font-size: 10pt;
        }
    }

    @media (max-width: 768px) {
        .memberName {
            font-size: 8pt;
        }
    }

    @media (max-width: 460px) {
        .memberName {
            font-size: 5pt;
        }
    }

    button {
        cursor: pointer;
    }

    button:hover {
        filter: brightness(85%);
    }
</style>


<div class={clazz} id={idd}>
    <button
        style="width: {mcHeadWidth}px;
            height: {mcHeadHeight}px;
            background: url(https://api.mineatar.io/face/{mcHeadUUID}?scale={mcHeadScale})"
        on:click={ToggleSelection} />
    <p class="memberName">
        {idd}
    </p>    
</div>