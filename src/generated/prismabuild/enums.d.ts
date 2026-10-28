export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly USER: "USER";
    readonly SUPER_USER: "SUPER_USER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Scale: {
    readonly SMALL_SCALE: "SMALL_SCALE";
    readonly LARGE_SCALE: "LARGE_SCALE";
};
export type Scale = (typeof Scale)[keyof typeof Scale];
export declare const FarmingCategory: {
    readonly CROP_FARMING: "CROP_FARMING";
    readonly LIVESTOCK_FARMING: "LIVESTOCK_FARMING";
    readonly POULTRY_FARMING: "POULTRY_FARMING";
    readonly FISHERY: "FISHERY";
    readonly HORTICULTURE: "HORTICULTURE";
};
export type FarmingCategory = (typeof FarmingCategory)[keyof typeof FarmingCategory];
export declare const TrainingStatus: {
    readonly ON_GOING: "ON_GOING";
    readonly ENDED: "ENDED";
};
export type TrainingStatus = (typeof TrainingStatus)[keyof typeof TrainingStatus];
export declare const FarmingInfoStatus: {
    readonly ADMIN: "ADMIN";
    readonly VERIFIED: "VERIFIED";
    readonly UNVERIFIED: "UNVERIFIED";
};
export type FarmingInfoStatus = (typeof FarmingInfoStatus)[keyof typeof FarmingInfoStatus];
//# sourceMappingURL=enums.d.ts.map