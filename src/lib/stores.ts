import { writable, type Writable } from "svelte/store";
import * as echarts from "echarts"

export const isAllSelected: Writable<boolean> = writable(false);
export const isNoneSelected: Writable<boolean> = writable(false);
export const isOrderedByGen: Writable<boolean> = writable(true);

export const isMythSelected: Writable<boolean> = writable(false);
export const isPromiseSelected: Writable<boolean> = writable(false);
export const isAdventSelected: Writable<boolean> = writable(false);
export const isJusticeSelected: Writable<boolean> = writable(false);

export const isScarletWandSelected: Writable<boolean> = writable(false);
export const isCeruleanCupSelected: Writable<boolean> = writable(false);
export const isJadeSwordSelected: Writable<boolean> = writable(false);
export const isAmberCoinSelected: Writable<boolean> = writable(false);

export const isCalliSelected: Writable<boolean> = writable(false);
export const isKiaraSelected: Writable<boolean> = writable(false);
export const isInaSelected: Writable<boolean> = writable(false);
export const isGuraSelected: Writable<boolean> = writable(false);
export const isAmeSelected: Writable<boolean> = writable(true);
export const isIRySSelected: Writable<boolean> = writable(false);
export const isFaunaSelected: Writable<boolean> = writable(false);
export const isKroniiSelected: Writable<boolean> = writable(false);
export const isMumeiSelected: Writable<boolean> = writable(false);
export const isBaeSelected: Writable<boolean> = writable(false);
export const isShioriSelected: Writable<boolean> = writable(false);
export const isBibooSelected: Writable<boolean> = writable(false);
export const isRissaSelected: Writable<boolean> = writable(false);
export const isFuwawaSelected: Writable<boolean> = writable(true);
export const isMococoSelected: Writable<boolean> = writable(false);
export const isLizSelected: Writable<boolean> = writable(false);
export const isGigiSelected: Writable<boolean> = writable(false);
export const isCeciSelected: Writable<boolean> = writable(true);
export const isRaoraSelected: Writable<boolean> = writable(false);

export const chart: Writable<echarts.ECharts> = writable();

export const coinValueHasBeenClicked: Writable<boolean> = writable(false);

export const curIFrameVideoID: Writable<string> = writable("xE3JQ1R2DdU");
export const curIFrameVideoTimestamp: Writable<number> = writable();

export default {
    isMythSelected,
    isPromiseSelected,
    isAdventSelected,
    isJusticeSelected,

    isScarletWandSelected,
    isCeruleanCupSelected,
    isJadeSwordSelected,
    isAmberCoinSelected,

    isCalliSelected,
    isKiaraSelected,
    isInaSelected,
    isGuraSelected,
    isAmeSelected,
    isIRySSelected,
    isFaunaSelected,
    isKroniiSelected,
    isMumeiSelected,
    isBaeSelected,
    isShioriSelected,
    isBibooSelected,
    isRissaSelected,
    isFuwawaSelected,
    isMococoSelected,
    isLizSelected,
    isGigiSelected,
    isCeciSelected,
    isRaoraSelected,
}