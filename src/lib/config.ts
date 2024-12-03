import type { Member } from "$lib/types/Member";
import type { Gen } from "$lib/types/Gen";
import type { Guild } from "$lib/types/Guild";
import { MemberData } from "$lib/myClasses/MemberData";


const Members: Member[] = [
    "Calli", "Kiara", "Ina", "Gura", "Ame",
    "IRyS", "Fauna", "Kronii", "Mumei", "Bae",
    "Shiori", "Biboo", "Rissa", "Fuwawa", "Mococo",
    "Liz", "Gigi", "Ceci", "Raora"
]
    ;
const Gens: Gen[] = [
    "Myth", "Promise", "Advent", "Justice"
]

const Guilds: Guild[] = [
    "ScarletWand", "CeruleanCup", "JadeSword", "AmberCoin"
]


const memberData: Record<Member, MemberData> = {
    "Calli":
        new MemberData({
            gen: "Myth", guild: "JadeSword",
            enRecoName: "Mori Calliopeen", mcHeadUUID: "14abe999ac61432aba3f216bbe9454b3", seriesAndMarkerColor: "#dd6299",
            ENRecoDayVideoID: ["xE3JQ1R2DdU", "oPKmSO7XtoY", "efqkfe_5O0s", "1eOME6DuJK0", "", "", "", "evcruocvE3g"],
            EnRecoDayVODStart: [1725155942000, 1725250092000, 1725325165000, 1725418863000, NaN, NaN, NaN, 1725751863000],
        }),
    "Kiara":
        new MemberData({
            gen: "Myth", guild: "AmberCoin",
            enRecoName: "Shakira", mcHeadUUID: "604ed1ffde0b4eef8629dc96cc29d652", seriesAndMarkerColor: "#ea4b1d",
            ENRecoDayVideoID: ["izEX6XKyApQ", "qKlzaYirN88", "", "", "", "3cr3DLpyB60", "lNIoudshEkQ", ""],
            EnRecoDayVODStart: [1725156014000, 1725238716000, NaN, NaN, NaN, 1725577211000, 1725670981000, NaN],
        }),
    "Ina":
        new MemberData({
            gen: "Myth", guild: "CeruleanCup",
            enRecoName: "Princess Nino Ina", mcHeadUUID: "8237e9c41c114c19b29a67c51f2045b8", seriesAndMarkerColor: "#6b5b80",
            ENRecoDayVideoID: ["THllQCVOYzY", "z4R10dPeuwY", "", "KE-Qhw2T1CY", "", "3zaM1QIff9U", "", "NdWqpuyH0Zg"],
            EnRecoDayVODStart: [1725156018000, 1725252317000, NaN, 1725415289000, NaN, 1725591639000, NaN, 1725757292000],
        }),
    "Gura":
        new MemberData({
            gen: "Myth", guild: "ScarletWand",
            enRecoName: "Goombo Goombo", mcHeadUUID: "4b05d8d3236243c29494b2866c701267", seriesAndMarkerColor: "#397292",
            ENRecoDayVideoID: ["PJtapc2_7ok", "bOIlLaFiiE4", "", "72SJQRQ7qi0", "", "", "", "cIb5yHw4mvk"],
            EnRecoDayVODStart: [1725156123000, 1725238894000, NaN, 1725404530000, NaN, NaN, NaN, 1725760888000],
        }),
    "Ame":
        new MemberData({
            gen: "Myth", guild: "JadeSword",
            enRecoName: "Jyonathan Watson", mcHeadUUID: "6b6c5fbd07894489b5bf91954a28e821", seriesAndMarkerColor: "#eec477",
            ENRecoDayVideoID: ["hUCfCWOj-1w", "", "", "aP7OWMQ18ao", "uyOxBS0Cx8E", "i7g-HJMqZ_E", "", "mxOT9QEg5dI"],
            EnRecoDayVODStart: [1725156155000, NaN, NaN, 1725408034000, 1725512473000, 1725589876000, NaN, 1725753925000],
        }),
    "IRyS":
        new MemberData({
            gen: "Promise", guild: "CeruleanCup",
            enRecoName: "The Hot Pink One", mcHeadUUID: "1cbbf835c97140a49b4e2bd410a0a8e0", seriesAndMarkerColor: "#b71e5a",
            ENRecoDayVideoID: ["Rk7nZ91vme4", "f8W426vzTb8", "", "", "gtOGWDKwQfY", "", "", "pH9lSCrTVMY"],
            EnRecoDayVODStart: [1725159550000, 1725246005000, NaN, NaN, 1725505248000, NaN, NaN, 1725760690000],
        }),
    "Fauna":
        new MemberData({
            gen: "Promise", guild: "ScarletWand",
            enRecoName: "Ceres Fauna", mcHeadUUID: "dda14f252cfd407d8e2058b2d4c8b7bf", seriesAndMarkerColor: "#88ea99",
            ENRecoDayVideoID: ["VrLNA0SjYN8", "eUQWfgVwwpo", "menSag1VKTc", "E2JxBxhda9I", "iRM_kaxQBp4", "j4AxXzluEWE", "", "8x-MVX8h9gU"],
            EnRecoDayVODStart: [1725156014000, 1725228009000, 1725314463000, 1725407893000, 1725487217000, 1725573607000, NaN, 1725757207000],
        }),
    "Kronii":
        new MemberData({
            gen: "Promise", guild: "CeruleanCup",
            enRecoName: "Queen Tam Gandr", mcHeadUUID: "4ea7903562934c8c994287060f6dd716", seriesAndMarkerColor: "#595f7d",
            ENRecoDayVideoID: ["zgioohaY0m4", "fIGfh8GmKY8", "JcRcTRedS_8", "", "", "", "", ""],
            EnRecoDayVODStart: [1725156232000, 1725247721000, 1725334321000, NaN, NaN, NaN, NaN, NaN],
        }),

    "Mumei":
        new MemberData({
            gen: "Promise", guild: "AmberCoin",
            enRecoName: "Nanamu", mcHeadUUID: "952d81364d9044f3948de1084eb8042b", seriesAndMarkerColor: "#ae8c7a",
            ENRecoDayVideoID: ["vuij6YTMIzw", "WQRPyJ4zhC0", "", "PUlE34rNV-g", "", "", "zPJ78C7uNq8", "oq_4QZacuso"],
            EnRecoDayVODStart: [1725156123000, 1725237065000, NaN, 1725415451000, NaN, NaN, 1725671872000, 1725757355000],
        }),
    "Bae":
        new MemberData({
            gen: "Promise", guild: "AmberCoin",
            enRecoName: "Peasant Bae", mcHeadUUID: "5c8ddcbaf19a450c8fddb36fcf244682", seriesAndMarkerColor: "#e42012",
            ENRecoDayVideoID: ["y8bcLA6BQsw", "", "", "", "", "", "", "t5NGryTaGqk"],
            EnRecoDayVODStart: [1725156041000, NaN, NaN, NaN, NaN, NaN, NaN, 1725760884000],
        }),
    "Shiori":
        new MemberData({
            gen: "Advent", guild: "ScarletWand",
            enRecoName: "Shiori of the Nyavellas", mcHeadUUID: "9a0f1b1a88ea48569a8fe241a62d2151", seriesAndMarkerColor: "#bab2bc",
            ENRecoDayVideoID: ["KSaC99K4IF8", "LTIq_0ykLVA", "BnpLALzUzD4", "N3v-MJXHQ0w", "BlDRaNhYZxk", "", "", "dTf0g5tqzBU"],
            EnRecoDayVODStart: [1725156098000, 1725242293000, 1725328609000, 1725414954000, 1725501389000, NaN, NaN, 1725760462000],
        }),
    "Biboo":
        new MemberData({
            gen: "Advent", guild: "CeruleanCup",
            enRecoName: "Princess Bijou", mcHeadUUID: "03be98c57e214c18a3c67cc7b226f450", seriesAndMarkerColor: "#b36fec",
            ENRecoDayVideoID: [["OTmQwttr1Aw", "Fr6yMByDTIs"], "Y2LV1PUQ0S8", "Tl7rUzJyc_0", "ZV47e39yyMU", "5o4TerH2bVI", "8frv4avuyl8", "", "u3MQlnSHfhA"],
            EnRecoDayVODStart: [[1725155833000, 1725168575000], 1725242116000, 1725324939000, 1725411372000, 1725497831000, 1725584243000, NaN, 1725749787000],
        }),
    "Rissa":
        new MemberData({
            gen: "Advent", guild: "ScarletWand",
            enRecoName: "Nerissa Ravencroft", mcHeadUUID: "67b5f11621d647af8b7cb748013f3780", seriesAndMarkerColor: "#39418f",
            ENRecoDayVideoID: [["PJSd7DYlGNo", "DDwNcYCtAXw"], "nHn2JKHTyzM", "LH_8d-8gZow", "dRCvSHBTvSk", ["iy0fMrzhwOY", "Lv6_Xl1u_Ss"], "", "CFSfP27KTco", "qdYQ5j-0sQI"],
            EnRecoDayVODStart: [[1725155818000, 1725168378000], 1725247050000, 1725321081000, 1725407746000, [1725493862000, 1725501837000], NaN, 1725666911000, 1725753304000],
        }),
    "Fuwawa":
        new MemberData({
            gen: "Advent", guild: "JadeSword",
            enRecoName: "Fuwawa Abyssgard", mcHeadUUID: "0ecd6c8bb760495c8eb7d8393fcd6cff", seriesAndMarkerColor: "#c5dbfe",
            ENRecoDayVideoID: [["3s_pVYBEax0", "uIHK81QMI24"], "jjCVWFJl-_o", "BehFIHehD_Y", "cYvEiwlPkW0", "FjZ9ettDlNw", "", "zdQoGFICNDk", "31OnEJrRDfU"],
            EnRecoDayVODStart: [[1725156025000, 1725170133000], 1725242119000, 1725328543000, 1725422421000, 1725501344000, NaN, 1725670510000, 1725756926000],
        }),
    "Mococo":
        new MemberData({
            gen: "Advent", guild: "JadeSword",
            enRecoName: "Mococo Abyssgard", mcHeadUUID: "81b893249e8b44a7a89621cb0e7e11b1", seriesAndMarkerColor: "#f3a2bd",
            ENRecoDayVideoID: [["OSjlqA0FS9Q", "ASF0b50sKM0"], "0rhoyO69kAQ", "zh0satM3cEs", "5swK4fB2smo", "wINOVotsvPY", "", "qFnAgJtQtiY", "6TXwZjXEoxk"],
            EnRecoDayVODStart: [[1725156026000, 1725170129000], 1725242139000, 1725328525000, 1725422424000, 1725501331000, NaN, 1725670531000, 1725756912000],
        }),
    "Liz":
        new MemberData({
            gen: "Justice", guild: "JadeSword",
            enRecoName: "Lady Bloodflame", mcHeadUUID: "06103da78bd04dc28197d3f23efcb9db", seriesAndMarkerColor: "#bf4648",
            ENRecoDayVideoID: ["2qiX7084obE", "M3cuDNZrIKM", "oVguNTPnDww", "dCNrMstGc3I", "1_dhGL0K5-k", "5R01-igo4sM", "Gw0dZbPKTG4", "_urPfTQnLes"],
            EnRecoDayVODStart: [1725156020000, 1725241824000, 1725325084000, 1725416895000, 1725501369000, 1725588045000, 1725658013000, 1725748288000],
        }),

    "Gigi":
        new MemberData({
            gen: "Justice", guild: "CeruleanCup",
            enRecoName: "Gonathan G", mcHeadUUID: "8e41f2dc0f4943218075bb23c2375446", seriesAndMarkerColor: "#ffb848",
            ENRecoDayVideoID: ["y9KKa_k2VTU", "kB2jUKUsxtE", "6exWVCmzA9I", "VgMSugOH5DA", "LSGUo-UnXwY", "oygFzGlMT28", "_pxgqfGjshs", "WvRIdaH107U"],
            EnRecoDayVODStart: [1725156112000, 1725243166000, 1725326146000, 1725412521000, 1725498969000, 1725586533000, 1725671808000, 1725753854000],
        }),
    "Ceci":
        new MemberData({
            gen: "Justice", guild: "ScarletWand",
            enRecoName: "Cecilia Immergreen", mcHeadUUID: "0ecc0924ea034869b0720574a965081b", seriesAndMarkerColor: "#8fc9a6",
            ENRecoDayVideoID: ["SAdndMvNK98", "a74NeBcixi8", "-QKg8Fau9GM", "yK3QZkOZ6bE", "2ATTd32AV-Q", "", "iAYrdIlfVf0", "4co7VDSYTqU"],
            EnRecoDayVODStart: [1725156155000, 1725238724000, 1725325085000, 1725411617000, 1725494432000, NaN, 1725670540000, 1725756991000],
        }),
    "Raora":
        new MemberData({
            gen: "Justice", guild: "AmberCoin",
            enRecoName: "Queen Mario", mcHeadUUID: "83d401f0f4a64b549fc0e5d6c3af3ff4", seriesAndMarkerColor: "#eb86a7",
            ENRecoDayVideoID: ["8ybUOw9NhMc", "qDhyA4-79ko", "6VtHPTU1FB8", "Y0H168Iq8aY", "xT6ChmC6CfU", "", "Rd0awHHBTiA", "Gou89O6CzmY"],
            EnRecoDayVODStart: [1725155928000, 1725242290000, 1725325056000, 1725407775000, 1725497878000, NaN, 1725670615000, 1725757017000],
        }),
}


const MythMemberOrder: Member[] = [
    "Calli",
    "Kiara",
    "Ina",
    "Gura",
    "Ame",
]

const PromiseMemberOrder: Member[] = [
    "IRyS",
    "Fauna",
    "Kronii",
    "Mumei",
    "Bae",
]

const AdventMemberOrder: Member[] = [
    "Shiori",
    "Biboo",
    "Rissa",
    "Fuwawa",
    "Mococo",
]

const JusticeMemberOrder: Member[] = [
    "Liz",
    "Gigi",
    "Ceci",
    "Raora",
]

const ScarletWandMemberOrder: Member[] = [
    "Fauna",
    "Gura",
    "Shiori",
    "Rissa",
    "Ceci",
]

const CeruleanCupMemberOrder: Member[] = [
    "Ina",
    "Biboo",
    "IRyS",
    "Gigi",
    "Kronii",
]

const JadeSwordMemberOrder: Member[] = [
    "Ame",
    "Fuwawa",
    "Mococo",
    "Calli",
    "Liz",
]

const AmberCoinMemberOrder: Member[] = [
    "Raora",
    "Kiara",
    "Bae",
    "Mumei",
]

export default {
    Members,
    Gens,
    Guilds,
    memberData,
    MythMemberOrder,
    PromiseMemberOrder,
    AdventMemberOrder,
    JusticeMemberOrder,
    ScarletWandMemberOrder,
    CeruleanCupMemberOrder,
    JadeSwordMemberOrder,
    AmberCoinMemberOrder
};
