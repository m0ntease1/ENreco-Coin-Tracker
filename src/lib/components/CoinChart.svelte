<script lang="ts">
    import * as echarts from "echarts";
    import { onDestroy, onMount } from "svelte";
    import selections, { chart, coinValueHasBeenClicked, curIFrameVideoID, curIFrameVideoTimestamp } from "$lib/stores"
	import type { Unsubscriber } from "svelte/motion";
	import config from "$lib/config";
	import type { Member } from "$lib/types/Member";
    
    
    const officialENRecoStartTime = 1725156000000;
    // e0 = officialENRecoStart = 1725156000000 or 1725155928000 being earliest by raora, id: 8ybUOw9NhMc
    const l0 = 1725177687000  // biboo ,   id: Fr6yMByDTIs
    const e1 = 1725228009000  // fauna ,   id: eUQWfgVwwpo
    const l1 = 1725267774000  // calli ,   id: oPKmSO7XtoY
    const e2 = 1725314463000  // fauna ,   id: menSag1VKTc
    const l2 = 1725354395000  // biboo ,   id: Tl7rUzJyc_0
    const e3 = 1725404530000  // gura  ,   id: 72SJQRQ7qi0
    const l3 = 1725432889000  // mococo,   id: 5swK4fB2smo
    const e4 = 1725487217000  // fauna ,   id: iRM_kaxQBp4
    const l4 = 1725524140000  // ame   ,   id: uyOxBS0Cx8E
    const e5 = 1725573607000  // fauna ,   id: j4AxXzluEWE
    const l5 = 1725602107000  // gigi  ,   id: oygFzGlMT28
    const e6 = 1725658013000  // liz   ,   id: Gw0dZbPKTG4
    const l6 = 1725688059000  // fuwawa,   id: zdQoGFICNDk
    const e7 = 1725748288000  // liz   ,   id: _urPfTQnLes
    const l7 = 1725771263000  // irys  ,   id: pH9lSCrTVMY

    const day1FilesOffset = e1 - l0
    const new_l1 = l1 - day1FilesOffset
    const day2FilesOffset = e2 - new_l1
    const new_l2 = l2 - day2FilesOffset
    const day3FilesOffset = e3 - new_l2
    const new_l3 = l3 - day3FilesOffset
    const day4FilesOffset = e4 - new_l3
    const new_l4 = l4 - day4FilesOffset
    const day5FilesOffset = e5 - new_l4
    const new_l5 = l5 - day5FilesOffset
    const day6FilesOffset = e6 - new_l5
    const new_l6 = l6 - day6FilesOffset
    const day7FilesOffset = e7 - new_l6
    const new_l7 = l7 - day7FilesOffset
    const dayXFileOffsetArr = [0, day1FilesOffset, day2FilesOffset, day3FilesOffset,
                     day4FilesOffset, day5FilesOffset, day6FilesOffset, day7FilesOffset]

    const dayDurationHours = 11
    let unsubscribers: Unsubscriber[] = []

    onMount(() => {
        
        (async () => {
            let calliData = await GetDataFromFile("Mori Calliope.txt")
            let kiaraData = await GetDataFromFile("Takanashi Kiara.txt")
            let inaData = await GetDataFromFile("Ninomae Ina'nis.txt")
            let guraData = await GetDataFromFile("Gawr Gura.txt")
            let ameData = await GetDataFromFile("Amelia Watson.txt")
            let irysData = await GetDataFromFile("IRyS.txt")
            let faunaData = await GetDataFromFile("Ceres Fauna.txt")
            let kroniiData = await GetDataFromFile("Ouro Kronii.txt")
            let mumeiData = await GetDataFromFile("Nanashi Mumei.txt")
            let baeData = await GetDataFromFile("Hakos Baelz.txt")
            let shioriData = await GetDataFromFile("Shiori Novella.txt")
            let bibooData = await GetDataFromFile("Koseki Bijou.txt")
            let rissaData = await GetDataFromFile("Nerissa Ravencroft.txt")
            let fuwawaData = await GetDataFromFile("Fuwawa Abyssgard.txt")
            let mococoData = await GetDataFromFile("Mococo Abyssgard.txt")
            let lizData = await GetDataFromFile("Elizabeth Rose Bloodflame.txt")
            let gigiData = await GetDataFromFile("Gigi Murin.txt")
            let ceciData = await GetDataFromFile("Cecilia Immergreen.txt")
            let raoraData = await GetDataFromFile("Raora Panthera.txt")

            $chart = echarts.init(document.getElementById('chart'));
            
            var option = {
                tooltip: {
                    trigger: "axis",
                    formatter: formatTooltip,
                    axisPointer: {
                        type: "cross",
                    },
                    position: function (pos: number[], params: any, dom: any, rect: any, size: { viewSize: number[]; }) {
                        let obj = {top: 60};
                        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                        return obj;
                    },
                },
                xAxis: {
                    type: 'time',   
                    axisLabel: {
                        formatter: getGlobalTimeFormat
                    },
                },
                yAxis: {
                    type: 'value'
                },
                legend: {
                    show: false
                },
                series: [
                    {
                        name: "Mark Lines",
                        type: "line",
                        data: [],
                        markLine: {
                            label: {
                                show: true,
                                formatter: (data: object) => {
                                    const graphTimestampOfMarker = Number((data as any).value)
                                    let enRecoDay: number = getENRecoDayFromTimestamp(graphTimestampOfMarker)+2
                                    if(graphTimestampOfMarker === officialENRecoStartTime)
                                        enRecoDay = 1
                                    let markerLabel = `Day ${enRecoDay}`
                                    if(graphTimestampOfMarker === new_l7)
                                        markerLabel = "End"
                                    return markerLabel
                                }
                            },
                            symbol: "none",
                            lineStyle: {
                                color: "#ffffff",
                            },
                            data: [
                                { xAxis: officialENRecoStartTime },
                                { xAxis: l0 },
                                { xAxis: new_l1 },
                                { xAxis: new_l2 },
                                { xAxis: new_l3 },
                                { xAxis: new_l4 },
                                { xAxis: new_l5 },
                                { xAxis: new_l6 },
                                { xAxis: new_l7 },
                            ]
                        },
                    },
                    {
                        type: "line",
                        data: [[officialENRecoStartTime,0],[new_l7,0]],
                        showSymbol: false,
                        lineStyle: {
                            opacity: 0,
                        },
                    },
                    {   name: "Calli", data: calliData, type: "line", step: "end",
                        color: config.memberData.Calli.seriesAndMarkerColor, },
                    {   name: "Kiara", data: kiaraData, type: "line", step: "end",
                        color: config.memberData.Kiara.seriesAndMarkerColor, },
                    {   name: "Ina", data: inaData, type: "line", step: "end",
                        color: config.memberData.Ina.seriesAndMarkerColor, },
                    {   name: "Gura", data: guraData, type: "line", step: "end",
                        color: config.memberData.Gura.seriesAndMarkerColor, },
                    {   name: "Ame", data: ameData, type: "line", step: "end",
                        color: config.memberData.Ame.seriesAndMarkerColor, },
                    {   name: "IRyS", data: irysData, type: "line", step: "end",
                        color: config.memberData.IRyS.seriesAndMarkerColor, },
                    {   name: "Fauna", data: faunaData, type: "line", step: "end",
                        color: config.memberData.Fauna.seriesAndMarkerColor, },
                    {   name: "Kronii", data: kroniiData, type: "line", step: "end",
                        color: config.memberData.Kronii.seriesAndMarkerColor, },
                    {   name: "Mumei", data: mumeiData, type: "line", step: "end",
                        color: config.memberData.Mumei.seriesAndMarkerColor, },
                    {   name: "Bae", data: baeData, type: "line", step: "end",
                        color: config.memberData.Bae.seriesAndMarkerColor, },
                    {   name: "Shiori", data: shioriData, type: "line", step: "end",
                        color: config.memberData.Shiori.seriesAndMarkerColor, },
                    {   name: "Biboo", data: bibooData, type: "line", step: "end",
                        color: config.memberData.Biboo.seriesAndMarkerColor, },
                    {   name: "Rissa", data: rissaData, type: "line", step: "end",
                        color: config.memberData.Rissa.seriesAndMarkerColor, },
                    {   name: "Fuwawa", data: fuwawaData, type: "line", step: "end",
                        color: config.memberData.Fuwawa.seriesAndMarkerColor, },
                    {   name: "Mococo", data: mococoData, type: "line", step: "end",
                        color: config.memberData.Mococo.seriesAndMarkerColor, },
                    {   name: "Liz", data: lizData, type: "line", step: "end",
                        color: config.memberData.Liz.seriesAndMarkerColor, },
                    {   name: "Gigi", data: gigiData, type: "line", step: "end",
                        color: config.memberData.Gigi.seriesAndMarkerColor, },
                    {   name: "Ceci", data: ceciData, type: "line", step: "end",
                        color: config.memberData.Ceci.seriesAndMarkerColor, },
                    {   name: "Raora", data: raoraData, type: "line", step: "end",
                        color: config.memberData.Raora.seriesAndMarkerColor, },
                ],
                dataZoom: [
                    {
                        type: 'slider',
                        start: 0,
                        end: 100,
                        xAxisIndex: [0],
                        handleIcon: 'path://M0,0 a5,5 0 1,0 10,0 a5,5 0 1,0 -10,0',
                        filterMode: "empty",
                    },
                    {
                        type: 'slider',
                        start: 0,
                        end: 100,
                        yAxisIndex: [0],
                        left: "left",
                        handleIcon: 'path://M0,0 a5,5 0 1,0 10,0 a5,5 0 1,0 -10,0',
                        filterMode: "empty",
                    },
                    {
                        type: "inside",
                        xAxisIndex: [0],
                    },
                    {
                        type: "inside",
                        yAxisIndex: [0],
                    },
                ]
            };

            $chart.setOption(option);

            $chart.on("click", (params: object) => {
                coinValueHasBeenClicked.set(true)

                const selectedMember: Member = (params as any).seriesName
                const timestampFromGraph = (params as any).data[0]
                const enRecoDayOfThisTimestamp = getENRecoDayFromTimestamp(timestampFromGraph)

                const normalizedRealtimeTimestampFromGraph: number = adjustTimestampForGraph(timestampFromGraph, enRecoDayOfThisTimestamp)

                const videoID: string = getVideoIDFromMemberAndENRecoDay(selectedMember, enRecoDayOfThisTimestamp, normalizedRealtimeTimestampFromGraph)

                const actualVODStart: number = getActualVODStartFromMemberAndENRecoDay(selectedMember, enRecoDayOfThisTimestamp, normalizedRealtimeTimestampFromGraph)
                const secondsInVOD: number = Math.floor( (normalizedRealtimeTimestampFromGraph - actualVODStart) / 1000 )

                // wait a bit for iframe to get initialized
                setTimeout(() => {
                    curIFrameVideoID.set(videoID)
                    curIFrameVideoTimestamp.set(secondsInVOD)
                }, 100)
            })

            function getVideoIDFromMemberAndENRecoDay(member: Member, enRecoDay: number, realtimeTimestamp: number): string {
                const videoID: string = config.memberData[member].ENRecoDayVideoID[enRecoDay]
                // Handle episodes split into two parts
                if(Array.isArray(videoID)) {
                    // should only happend on biboo day0, fuwawa day0, mococo day0, rissay day0, rissay day4
                    const secondPartActualVODStart = config.memberData[member].EnRecoDayVODStart[enRecoDay][1]
                    if(realtimeTimestamp < secondPartActualVODStart)
                        return videoID[0]
                    else
                        return videoID[1]
                }
                else {
                    return videoID
                }
            }

            function getActualVODStartFromMemberAndENRecoDay(member: Member, enRecoDay: number, realtimeTimestamp: number): number {
                const actualVODStart: number = config.memberData[member].EnRecoDayVODStart[enRecoDay]
                // Handle episodes split into two parts
                if(Array.isArray(actualVODStart)) {
                    // should only happend on biboo day0, fuwawa day0, mococo day0, rissay day0, rissay day4
                    const secondPartActualVODStart = config.memberData[member].EnRecoDayVODStart[enRecoDay][1]
                    if(realtimeTimestamp < secondPartActualVODStart)
                        return actualVODStart[0]
                    else
                        return actualVODStart[1]
                }
                else {
                    return actualVODStart
                }
            }

            function adjustTimestampForGraph(timestampToAdjust: number, offsetIndex: number): number {
                const valueToOffsetBy = dayXFileOffsetArr[offsetIndex]
                const adjustedTimestamp = timestampToAdjust + valueToOffsetBy
                return adjustedTimestamp
            }

            function getGlobalTimeFormat(value: string) {
                const [hours, minutes, seconds] = getHourMinSecFromGraphTimestamp(Number(value))
                const time: string = `${hours}:${minutes}:${seconds}`;
                return time;
            }


            function getHourMinSecFromGraphTimestamp(timestampFromGraph: number) {
                const timeSinceEnRecoStart_ms: number = new Date(timestampFromGraph - officialENRecoStartTime).getTime();
                const hoursDecimal: number = timeSinceEnRecoStart_ms / 1000 / 60 / 60;
                const hoursInt: number = Math.floor(hoursDecimal);
                const minutesDecimal: number = hoursDecimal % 1 * 60;
                const minutesInt: number = Math.floor(minutesDecimal);
                const secondsDecimal: number = minutesDecimal % 1 * 60;
                const secondsInt: number = Math.floor(secondsDecimal);
                return [hoursInt, minutesInt, secondsInt]
            }

            
            function getENRecoDayFromTimestamp(timestampFromGraph: number): number {
                if(officialENRecoStartTime <= timestampFromGraph && timestampFromGraph <= l0)
                    return 0
                else if(l0 < timestampFromGraph && timestampFromGraph <= new_l1)
                    return 1
                else if(new_l1 < timestampFromGraph && timestampFromGraph <= new_l2)
                    return 2
                else if(new_l2 < timestampFromGraph && timestampFromGraph <= new_l3)
                    return 3
                else if(new_l3 < timestampFromGraph && timestampFromGraph <= new_l4)
                    return 4
                else if(new_l4 < timestampFromGraph && timestampFromGraph <= new_l5)
                    return 5
                else if(new_l5 < timestampFromGraph && timestampFromGraph <= new_l6)
                    return 6
                else if(new_l6 < timestampFromGraph && timestampFromGraph <= new_l7)
                    return 7
                else
                    return -1
            }

            async function GetDataFromFile(fileName: string) {
                const response = await fetch(fileName);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.text();
                const lines = data.split(/\r?\n/);
                const fileContent = lines.map(line => {
                    const [timestamp, value] = line.split(",")
                    return [parseInt(timestamp), parseInt(value)]
                });
                return fileContent
            }

            function formatTooltip(params: any[]) {
                let toolTipContent = ""

                const targetX = params[0].data[0]

                for(let seriesName of activatedMembers) {
                    const allSeries: any[] = $chart.getOption()["series"] as any[];
                    const activeSeries = allSeries.find(series => series["name"] === seriesName);
                    const closestPointLeftOfTargetX = activeSeries.data.reduce((curClosest: number[], cur: number[]) => {
                        const newClosestPoint = Math.abs(cur[0] - targetX) < Math.abs(curClosest[0] - targetX) ? cur : curClosest;
                        // Only if it's not right of target
                        if(newClosestPoint[0] > targetX)
                            return curClosest
                        return newClosestPoint
                    });
                    const markerColor = config.memberData[seriesName].seriesAndMarkerColor;
                    const marker = `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${markerColor};"></span>`

                    toolTipContent += `${marker}
                                       ${seriesName}: 
                                       ${closestPointLeftOfTargetX[1]} <br>`;
                }
                
                return toolTipContent
            }


            let activatedMembers: Member[] = []

            for(let member of config.Members) {
                let unsubscribe: Unsubscriber
                unsubscribe = selections[`is${member}Selected`].subscribe((selectedStatus: boolean) => {
                    if(selectedStatus) {
                        activatedMembers.push(member)
                    }
                    else {
                        let indexToRemove = activatedMembers.indexOf(member)
                        if(indexToRemove !== -1)
                            activatedMembers.splice(indexToRemove, 1)
                    }

                    const type = selectedStatus ? "legendSelect" : "legendUnSelect";
                    $chart.dispatchAction({
                        type: type,
                        name: member,
                    })
                })
                unsubscribers.push(unsubscribe)
            }

        })()

        window.addEventListener("resize", () => {
            $chart.resize()
        })
    });

    
    onDestroy(() => {
        if(unsubscribers[0])
            for(let unsubscribe of unsubscribers)
                unsubscribe();
    })
</script>

<style>
    #chart {
        width: 800px;
        height: 600px;
    }
    
    @media (max-width: 1274px) {
        #chart {
            width: 500px;
            height: 375px;
        }
    }

    @media (max-width: 768px) {
        #chart {
            width: 400px;
            height: 300px;
        }
    }
</style>


<div id="chart"></div>