<script lang="ts">
	import type { Member } from "$lib/types/Member";
    import type { Gen } from "$lib/types/Gen";
    import type { Guild } from "$lib/types/Guild";
    import config from "$lib/config";
    import McHeadAvatar from "$lib/components/McHeadAvatar.svelte";
    import { onDestroy, onMount } from "svelte";
    import { gsap } from "gsap";
    import { isOrderedByGen } from "$lib/stores";
	import type { Unsubscriber } from "svelte/motion";

    
    let unsubscribe: Unsubscriber;

    onMount(() => {
        const mcHeadImg = {} as Record<Member, HTMLElement>;
        for(let member of config.Members) {
            mcHeadImg[member] = document.getElementById(member)!;
        }

        import("gsap/Flip")
        .then((FlipModule) => {
            const Flip = FlipModule.Flip;
            gsap.registerPlugin(Flip);

            let isOrderedByGenChangedCallback = (isOrderedByGenValue: boolean) => {
                config.Members.forEach(member => {
                    const genIndex = GetGenIndex( member, config.memberData[member].gen);
                    const guildIndex = GetGuildIndex( member, config.memberData[member].guild );
                    const memberImg = mcHeadImg[member];

                    if($isOrderedByGen) {
                        const genContainer = document.querySelector(`.${config.memberData[member].gen}Container${genIndex}`)!;
                        Flip.fit(memberImg, genContainer, {
                            duration: 2,
                            ease: "power4.out",
                            scale: true,
                        });
                    }
                    else {
                        const guildContainer = document.querySelector(`.${config.memberData[member].guild}Container${guildIndex}`)!;
                        Flip.fit(memberImg, guildContainer, {
                            duration: 2,
                            ease: "power4.out",
                            scale: true,
                        });
                    }
                });
            };

            unsubscribe = isOrderedByGen.subscribe(isOrderedByGenChangedCallback);
        })
    })
    
    function GetGuildIndex(member: Member, guild: Guild): number{
        switch(guild) {
            case "ScarletWand":
                return config.ScarletWandMemberOrder.indexOf(member);
            case "CeruleanCup":
                return config.CeruleanCupMemberOrder.indexOf(member);
            case "JadeSword":
                return config.JadeSwordMemberOrder.indexOf(member);
            case "AmberCoin":
                return config.AmberCoinMemberOrder.indexOf(member);
        }
    }

    function GetGenIndex(member: Member, guild: Gen): number{
        switch(guild) {
            case "Myth":
                return config.MythMemberOrder.indexOf(member);
            case "Promise":
                return config.PromiseMemberOrder.indexOf(member);
            case "Advent":
                return config.AdventMemberOrder.indexOf(member);
            case "Justice":
                return config.JusticeMemberOrder.indexOf(member);
        }
    }

    onDestroy(() => {
        if(unsubscribe) {
            unsubscribe();
        }
    })
</script>


<style>
    #mcHeadsContainer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .memberGroupContainer {
        display: flex;
    }

    .mcHeadContainer {
        width: 80px;
        height: 104px;
        margin-right: 6px;
    }

    @media (max-width: 1274px) {
        #mcHeadsContainer {
            gap: 12px;
        }

        .mcHeadContainer {
            width: 56px;
            height: 80px;
            margin-right: 4px;
        }
    }

    @media (max-width: 768px) {
        #mcHeadsContainer {
            gap: 8px;
        }

        .mcHeadContainer {
            width: 48px;
            height: 72px;
            margin-right: 2px;
        }
    }
</style>


<div id="mcHeadsContainer">
    <div class="memberGroupContainer">
        {#each config.MythMemberOrder as mythMember, index}
            <div class="MythContainer{index} ScarletWandContainer{index} mcHeadContainer">
                <McHeadAvatar id={mythMember} mcHeadUUID={config.memberData[mythMember].mcHeadUUID} />
            </div>
        {/each}
    </div>

    <div class="memberGroupContainer">
        {#each config.PromiseMemberOrder as promiseMember, index}
            <div class="PromiseContainer{index} CeruleanCupContainer{index} mcHeadContainer">
                <McHeadAvatar id={promiseMember} mcHeadUUID={config.memberData[promiseMember].mcHeadUUID} />
            </div>
        {/each}
    </div>

    <div class="memberGroupContainer">
        {#each config.AdventMemberOrder as adventMember, index}
            <div class="AdventContainer{index} JadeSwordContainer{index} mcHeadContainer">
                <McHeadAvatar id={adventMember} mcHeadUUID={config.memberData[adventMember].mcHeadUUID} />
            </div>
        {/each}
    </div>

    <div class="memberGroupContainer">
        {#each config.JusticeMemberOrder as justiceMember, index}
            <div class="JusticeContainer{index} AmberCoinContainer{index} mcHeadContainer">
                <McHeadAvatar id={justiceMember} mcHeadUUID={config.memberData[justiceMember].mcHeadUUID} />
            </div>
        {/each}
    </div>
</div>