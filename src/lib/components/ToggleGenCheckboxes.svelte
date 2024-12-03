<script lang="ts">
	import config from "$lib/config";
    import selections, {
        isMythSelected,
        isPromiseSelected,
        isAdventSelected,
        isJusticeSelected,
        isScarletWandSelected,
        isCeruleanCupSelected,
        isJadeSwordSelected,
        isAmberCoinSelected,
        isOrderedByGen,
        isAllSelected,
        isNoneSelected,
    } from "$lib/stores"
	import type { Gen } from "$lib/types/Gen";
	import type { Guild } from "$lib/types/Guild";


    function AllSelect() {
       isAllSelected.set(true);
       isNoneSelected.set(false);

        $isMythSelected = true;
        $isPromiseSelected = true;
        $isAdventSelected = true;
        $isJusticeSelected = true;
        $isScarletWandSelected = true;
        $isCeruleanCupSelected = true;
        $isJadeSwordSelected = true;
        $isAmberCoinSelected = true;
        for(let member of config.Members) {
            selections[`is${member}Selected`].set(true);
        }
    }

    function NoneSelect() {
        isAllSelected.set(false);
        isNoneSelected.set(true);

        $isMythSelected = false;
        $isPromiseSelected = false;
        $isAdventSelected = false;
        $isJusticeSelected = false;
        $isScarletWandSelected = false;
        $isCeruleanCupSelected = false;
        $isJadeSwordSelected = false;
        $isAmberCoinSelected = false;
        for(let member of config.Members) {
            selections[`is${member}Selected`].set(false);
        }
    }

    function ToggleGen(gen: Gen) {
        isAllSelected.set(false);
        isNoneSelected.set(false);

        selections[`is${gen}Selected`].update(oldValue => {
            let newValue = !oldValue;
            for(let genMember of config[`${gen}MemberOrder`]) {
                    selections[`is${genMember}Selected`].set(newValue);
            }
            return newValue;
        });
    }

    function ToggleGuild(guild: Guild) {
        isAllSelected.set(false);
        isNoneSelected.set(false);
        
        selections[`is${guild}Selected`].update(oldValue => {
            let newValue = !oldValue;
            for(let genMember of config[`${guild}MemberOrder`]) {
                    selections[`is${genMember}Selected`].set(newValue);
            }
            return newValue;
        });
    }

    function OrderByGen(e: Event) {
        $isOrderedByGen = true;
    }

    function OrderByGuild(e: Event) {
        $isOrderedByGen = false;
    }
</script>


<style>
    button {
        margin-bottom: 5px;
    }

    #allButtonContainer {
        display: flex;
    }

    .allNoneGenGuildButtonGroupContainer {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1px 5px;
        margin-right: 15px;
    }

    .genAndGuildButtonGroupContainer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1px 5px;
        margin-right: 10px;
    }

    .allOrNoneButtonPressed {
        color: #a3bcf9;
    }

    .orderByGenOrGuildButtonPressed {
        color: #c2948a;
    }

    .genOrGuildButtonPressed {
        color: #9dbd9e;
    }
</style>


<div id="allButtonContainer">
    <div class="allNoneGenGuildButtonGroupContainer">
        <button type="button" class="btn btn-secondary" class:allOrNoneButtonPressed={$isAllSelected} on:click={AllSelect}>
            All
        </button>
        <button type="button" class="btn btn-secondary" class:allOrNoneButtonPressed={$isNoneSelected} on:click={NoneSelect}>
            None
        </button>
    </div>

    <div class="allNoneGenGuildButtonGroupContainer">
        <button type="button" class="btn btn-secondary" class:orderByGenOrGuildButtonPressed={$isOrderedByGen} on:click={OrderByGen}>
            Order by Gen
        </button>
        <button type="button" class="btn btn-secondary" class:orderByGenOrGuildButtonPressed={!$isOrderedByGen} on:click={OrderByGuild}>
            Order by Guild
        </button>
    </div>

    <div class="genAndGuildButtonGroupContainer">
        <button type="button" class="btn btn-secondary" class:genOrGuildButtonPressed={$isMythSelected} on:click={() => ToggleGen("Myth")}>
            Myth
        </button>
        <button type="button" class="btn btn-secondary" class:genOrGuildButtonPressed={$isPromiseSelected} on:click={() => ToggleGen("Promise")}>
            Promise
        </button>
        <button type="button" class="btn btn-secondary" class:genOrGuildButtonPressed={$isAdventSelected} on:click={() => ToggleGen("Advent")}>
            Advent
        </button>
        <button type="button" class="btn btn-secondary" class:genOrGuildButtonPressed={$isJusticeSelected} on:click={() => ToggleGen("Justice")}>
            Justice
        </button>
    </div>

    <div class="genAndGuildButtonGroupContainer">
        <button type="button" class="btn btn-secondary" class:genOrGuildButtonPressed={$isScarletWandSelected} on:click={() => ToggleGuild("ScarletWand")}>
            Scarlet Wand
        </button>
        <button type="button" class="btn btn-secondary" class:genOrGuildButtonPressed={$isCeruleanCupSelected} on:click={() => ToggleGuild("CeruleanCup")}>
            Cerulean Cup
        </button>
        <button type="button" class="btn btn-secondary" class:genOrGuildButtonPressed={$isJadeSwordSelected} on:click={() => ToggleGuild("JadeSword")}>
            Jade Sword
        </button>
        <button type="button" class="btn btn-secondary" class:genOrGuildButtonPressed={$isAmberCoinSelected} on:click={() => ToggleGuild("AmberCoin")}>
            Amber Coin
        </button>
    </div>
</div>