import type { ENRecoName } from "$lib/types/ENRecoName";
import type { Gen } from "$lib/types/Gen";
import type { Guild } from "$lib/types/Guild";
import type { VideoIDArray } from "$lib/types/VideoIDArray";
import type { VODStartArray } from "$lib/types/VODStartArray";

interface MemberDataProps {
        gen: Gen,
        guild: Guild,
        enRecoName: ENRecoName,
        mcHeadUUID: string,
        seriesAndMarkerColor: string,
        ENRecoDayVideoID: VideoIDArray,
        EnRecoDayVODStart: VODStartArray,
}

export class MemberData {
    gen: Gen
    guild: Guild
    enRecoName: ENRecoName
    mcHeadUUID: string
    seriesAndMarkerColor: string
    ENRecoDayVideoID: VideoIDArray
    EnRecoDayVODStart: VODStartArray
    constructor({
        gen,
        guild,
        enRecoName,
        mcHeadUUID,
        seriesAndMarkerColor,
        ENRecoDayVideoID,
        EnRecoDayVODStart
    }: MemberDataProps
    ) {
        this.gen = gen
        this.guild = guild
        this.enRecoName = enRecoName
        this.mcHeadUUID = mcHeadUUID
        this.seriesAndMarkerColor =seriesAndMarkerColor
        this.ENRecoDayVideoID = ENRecoDayVideoID
        this.EnRecoDayVODStart = EnRecoDayVODStart
    }
}