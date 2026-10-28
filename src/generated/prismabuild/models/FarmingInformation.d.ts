import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model FarmingInformation
 *
 */
export type FarmingInformationModel = runtime.Types.Result.DefaultSelection<Prisma.$FarmingInformationPayload>;
export type AggregateFarmingInformation = {
    _count: FarmingInformationCountAggregateOutputType | null;
    _min: FarmingInformationMinAggregateOutputType | null;
    _max: FarmingInformationMaxAggregateOutputType | null;
};
export type FarmingInformationMinAggregateOutputType = {
    farmingId: string | null;
    authorId: string | null;
    farmingInfoImage: string | null;
    status: $Enums.FarmingInfoStatus | null;
    title: string | null;
    article: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FarmingInformationMaxAggregateOutputType = {
    farmingId: string | null;
    authorId: string | null;
    farmingInfoImage: string | null;
    status: $Enums.FarmingInfoStatus | null;
    title: string | null;
    article: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FarmingInformationCountAggregateOutputType = {
    farmingId: number;
    authorId: number;
    farmingInfoImage: number;
    status: number;
    title: number;
    article: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FarmingInformationMinAggregateInputType = {
    farmingId?: true;
    authorId?: true;
    farmingInfoImage?: true;
    status?: true;
    title?: true;
    article?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FarmingInformationMaxAggregateInputType = {
    farmingId?: true;
    authorId?: true;
    farmingInfoImage?: true;
    status?: true;
    title?: true;
    article?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FarmingInformationCountAggregateInputType = {
    farmingId?: true;
    authorId?: true;
    farmingInfoImage?: true;
    status?: true;
    title?: true;
    article?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FarmingInformationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FarmingInformation to aggregate.
     */
    where?: Prisma.FarmingInformationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FarmingInformations to fetch.
     */
    orderBy?: Prisma.FarmingInformationOrderByWithRelationInput | Prisma.FarmingInformationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FarmingInformationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FarmingInformations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FarmingInformations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FarmingInformations
    **/
    _count?: true | FarmingInformationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FarmingInformationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FarmingInformationMaxAggregateInputType;
};
export type GetFarmingInformationAggregateType<T extends FarmingInformationAggregateArgs> = {
    [P in keyof T & keyof AggregateFarmingInformation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFarmingInformation[P]> : Prisma.GetScalarType<T[P], AggregateFarmingInformation[P]>;
};
export type FarmingInformationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FarmingInformationWhereInput;
    orderBy?: Prisma.FarmingInformationOrderByWithAggregationInput | Prisma.FarmingInformationOrderByWithAggregationInput[];
    by: Prisma.FarmingInformationScalarFieldEnum[] | Prisma.FarmingInformationScalarFieldEnum;
    having?: Prisma.FarmingInformationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FarmingInformationCountAggregateInputType | true;
    _min?: FarmingInformationMinAggregateInputType;
    _max?: FarmingInformationMaxAggregateInputType;
};
export type FarmingInformationGroupByOutputType = {
    farmingId: string;
    authorId: string;
    farmingInfoImage: string | null;
    status: $Enums.FarmingInfoStatus;
    title: string | null;
    article: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: FarmingInformationCountAggregateOutputType | null;
    _min: FarmingInformationMinAggregateOutputType | null;
    _max: FarmingInformationMaxAggregateOutputType | null;
};
export type GetFarmingInformationGroupByPayload<T extends FarmingInformationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FarmingInformationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FarmingInformationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FarmingInformationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FarmingInformationGroupByOutputType[P]>;
}>>;
export type FarmingInformationWhereInput = {
    AND?: Prisma.FarmingInformationWhereInput | Prisma.FarmingInformationWhereInput[];
    OR?: Prisma.FarmingInformationWhereInput[];
    NOT?: Prisma.FarmingInformationWhereInput | Prisma.FarmingInformationWhereInput[];
    farmingId?: Prisma.StringFilter<"FarmingInformation"> | string;
    authorId?: Prisma.StringFilter<"FarmingInformation"> | string;
    farmingInfoImage?: Prisma.StringNullableFilter<"FarmingInformation"> | string | null;
    status?: Prisma.EnumFarmingInfoStatusFilter<"FarmingInformation"> | $Enums.FarmingInfoStatus;
    title?: Prisma.StringNullableFilter<"FarmingInformation"> | string | null;
    article?: Prisma.StringNullableFilter<"FarmingInformation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"FarmingInformation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FarmingInformation"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type FarmingInformationOrderByWithRelationInput = {
    farmingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    farmingInfoImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    article?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.FarmingInformationOrderByRelevanceInput;
};
export type FarmingInformationWhereUniqueInput = Prisma.AtLeast<{
    farmingId?: string;
    AND?: Prisma.FarmingInformationWhereInput | Prisma.FarmingInformationWhereInput[];
    OR?: Prisma.FarmingInformationWhereInput[];
    NOT?: Prisma.FarmingInformationWhereInput | Prisma.FarmingInformationWhereInput[];
    authorId?: Prisma.StringFilter<"FarmingInformation"> | string;
    farmingInfoImage?: Prisma.StringNullableFilter<"FarmingInformation"> | string | null;
    status?: Prisma.EnumFarmingInfoStatusFilter<"FarmingInformation"> | $Enums.FarmingInfoStatus;
    title?: Prisma.StringNullableFilter<"FarmingInformation"> | string | null;
    article?: Prisma.StringNullableFilter<"FarmingInformation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"FarmingInformation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FarmingInformation"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "farmingId">;
export type FarmingInformationOrderByWithAggregationInput = {
    farmingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    farmingInfoImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    article?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FarmingInformationCountOrderByAggregateInput;
    _max?: Prisma.FarmingInformationMaxOrderByAggregateInput;
    _min?: Prisma.FarmingInformationMinOrderByAggregateInput;
};
export type FarmingInformationScalarWhereWithAggregatesInput = {
    AND?: Prisma.FarmingInformationScalarWhereWithAggregatesInput | Prisma.FarmingInformationScalarWhereWithAggregatesInput[];
    OR?: Prisma.FarmingInformationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FarmingInformationScalarWhereWithAggregatesInput | Prisma.FarmingInformationScalarWhereWithAggregatesInput[];
    farmingId?: Prisma.StringWithAggregatesFilter<"FarmingInformation"> | string;
    authorId?: Prisma.StringWithAggregatesFilter<"FarmingInformation"> | string;
    farmingInfoImage?: Prisma.StringNullableWithAggregatesFilter<"FarmingInformation"> | string | null;
    status?: Prisma.EnumFarmingInfoStatusWithAggregatesFilter<"FarmingInformation"> | $Enums.FarmingInfoStatus;
    title?: Prisma.StringNullableWithAggregatesFilter<"FarmingInformation"> | string | null;
    article?: Prisma.StringNullableWithAggregatesFilter<"FarmingInformation"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FarmingInformation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FarmingInformation"> | Date | string;
};
export type FarmingInformationCreateInput = {
    farmingId?: string;
    farmingInfoImage?: string | null;
    status?: $Enums.FarmingInfoStatus;
    title?: string | null;
    article?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutFarmingInformationInput;
};
export type FarmingInformationUncheckedCreateInput = {
    farmingId?: string;
    authorId: string;
    farmingInfoImage?: string | null;
    status?: $Enums.FarmingInfoStatus;
    title?: string | null;
    article?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmingInformationUpdateInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumFarmingInfoStatusFieldUpdateOperationsInput | $Enums.FarmingInfoStatus;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutFarmingInformationNestedInput;
};
export type FarmingInformationUncheckedUpdateInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumFarmingInfoStatusFieldUpdateOperationsInput | $Enums.FarmingInfoStatus;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmingInformationCreateManyInput = {
    farmingId?: string;
    authorId: string;
    farmingInfoImage?: string | null;
    status?: $Enums.FarmingInfoStatus;
    title?: string | null;
    article?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmingInformationUpdateManyMutationInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumFarmingInfoStatusFieldUpdateOperationsInput | $Enums.FarmingInfoStatus;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmingInformationUncheckedUpdateManyInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumFarmingInfoStatusFieldUpdateOperationsInput | $Enums.FarmingInfoStatus;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmingInformationListRelationFilter = {
    every?: Prisma.FarmingInformationWhereInput;
    some?: Prisma.FarmingInformationWhereInput;
    none?: Prisma.FarmingInformationWhereInput;
};
export type FarmingInformationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FarmingInformationOrderByRelevanceInput = {
    fields: Prisma.FarmingInformationOrderByRelevanceFieldEnum | Prisma.FarmingInformationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type FarmingInformationCountOrderByAggregateInput = {
    farmingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    farmingInfoImage?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    article?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FarmingInformationMaxOrderByAggregateInput = {
    farmingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    farmingInfoImage?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    article?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FarmingInformationMinOrderByAggregateInput = {
    farmingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    farmingInfoImage?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    article?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FarmingInformationCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FarmingInformationCreateWithoutUserInput, Prisma.FarmingInformationUncheckedCreateWithoutUserInput> | Prisma.FarmingInformationCreateWithoutUserInput[] | Prisma.FarmingInformationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FarmingInformationCreateOrConnectWithoutUserInput | Prisma.FarmingInformationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FarmingInformationCreateManyUserInputEnvelope;
    connect?: Prisma.FarmingInformationWhereUniqueInput | Prisma.FarmingInformationWhereUniqueInput[];
};
export type FarmingInformationUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FarmingInformationCreateWithoutUserInput, Prisma.FarmingInformationUncheckedCreateWithoutUserInput> | Prisma.FarmingInformationCreateWithoutUserInput[] | Prisma.FarmingInformationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FarmingInformationCreateOrConnectWithoutUserInput | Prisma.FarmingInformationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FarmingInformationCreateManyUserInputEnvelope;
    connect?: Prisma.FarmingInformationWhereUniqueInput | Prisma.FarmingInformationWhereUniqueInput[];
};
export type FarmingInformationUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FarmingInformationCreateWithoutUserInput, Prisma.FarmingInformationUncheckedCreateWithoutUserInput> | Prisma.FarmingInformationCreateWithoutUserInput[] | Prisma.FarmingInformationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FarmingInformationCreateOrConnectWithoutUserInput | Prisma.FarmingInformationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FarmingInformationUpsertWithWhereUniqueWithoutUserInput | Prisma.FarmingInformationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FarmingInformationCreateManyUserInputEnvelope;
    set?: Prisma.FarmingInformationWhereUniqueInput | Prisma.FarmingInformationWhereUniqueInput[];
    disconnect?: Prisma.FarmingInformationWhereUniqueInput | Prisma.FarmingInformationWhereUniqueInput[];
    delete?: Prisma.FarmingInformationWhereUniqueInput | Prisma.FarmingInformationWhereUniqueInput[];
    connect?: Prisma.FarmingInformationWhereUniqueInput | Prisma.FarmingInformationWhereUniqueInput[];
    update?: Prisma.FarmingInformationUpdateWithWhereUniqueWithoutUserInput | Prisma.FarmingInformationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FarmingInformationUpdateManyWithWhereWithoutUserInput | Prisma.FarmingInformationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FarmingInformationScalarWhereInput | Prisma.FarmingInformationScalarWhereInput[];
};
export type FarmingInformationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FarmingInformationCreateWithoutUserInput, Prisma.FarmingInformationUncheckedCreateWithoutUserInput> | Prisma.FarmingInformationCreateWithoutUserInput[] | Prisma.FarmingInformationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FarmingInformationCreateOrConnectWithoutUserInput | Prisma.FarmingInformationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FarmingInformationUpsertWithWhereUniqueWithoutUserInput | Prisma.FarmingInformationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FarmingInformationCreateManyUserInputEnvelope;
    set?: Prisma.FarmingInformationWhereUniqueInput | Prisma.FarmingInformationWhereUniqueInput[];
    disconnect?: Prisma.FarmingInformationWhereUniqueInput | Prisma.FarmingInformationWhereUniqueInput[];
    delete?: Prisma.FarmingInformationWhereUniqueInput | Prisma.FarmingInformationWhereUniqueInput[];
    connect?: Prisma.FarmingInformationWhereUniqueInput | Prisma.FarmingInformationWhereUniqueInput[];
    update?: Prisma.FarmingInformationUpdateWithWhereUniqueWithoutUserInput | Prisma.FarmingInformationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FarmingInformationUpdateManyWithWhereWithoutUserInput | Prisma.FarmingInformationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FarmingInformationScalarWhereInput | Prisma.FarmingInformationScalarWhereInput[];
};
export type EnumFarmingInfoStatusFieldUpdateOperationsInput = {
    set?: $Enums.FarmingInfoStatus;
};
export type FarmingInformationCreateWithoutUserInput = {
    farmingId?: string;
    farmingInfoImage?: string | null;
    status?: $Enums.FarmingInfoStatus;
    title?: string | null;
    article?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmingInformationUncheckedCreateWithoutUserInput = {
    farmingId?: string;
    farmingInfoImage?: string | null;
    status?: $Enums.FarmingInfoStatus;
    title?: string | null;
    article?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmingInformationCreateOrConnectWithoutUserInput = {
    where: Prisma.FarmingInformationWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmingInformationCreateWithoutUserInput, Prisma.FarmingInformationUncheckedCreateWithoutUserInput>;
};
export type FarmingInformationCreateManyUserInputEnvelope = {
    data: Prisma.FarmingInformationCreateManyUserInput | Prisma.FarmingInformationCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type FarmingInformationUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.FarmingInformationWhereUniqueInput;
    update: Prisma.XOR<Prisma.FarmingInformationUpdateWithoutUserInput, Prisma.FarmingInformationUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.FarmingInformationCreateWithoutUserInput, Prisma.FarmingInformationUncheckedCreateWithoutUserInput>;
};
export type FarmingInformationUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.FarmingInformationWhereUniqueInput;
    data: Prisma.XOR<Prisma.FarmingInformationUpdateWithoutUserInput, Prisma.FarmingInformationUncheckedUpdateWithoutUserInput>;
};
export type FarmingInformationUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.FarmingInformationScalarWhereInput;
    data: Prisma.XOR<Prisma.FarmingInformationUpdateManyMutationInput, Prisma.FarmingInformationUncheckedUpdateManyWithoutUserInput>;
};
export type FarmingInformationScalarWhereInput = {
    AND?: Prisma.FarmingInformationScalarWhereInput | Prisma.FarmingInformationScalarWhereInput[];
    OR?: Prisma.FarmingInformationScalarWhereInput[];
    NOT?: Prisma.FarmingInformationScalarWhereInput | Prisma.FarmingInformationScalarWhereInput[];
    farmingId?: Prisma.StringFilter<"FarmingInformation"> | string;
    authorId?: Prisma.StringFilter<"FarmingInformation"> | string;
    farmingInfoImage?: Prisma.StringNullableFilter<"FarmingInformation"> | string | null;
    status?: Prisma.EnumFarmingInfoStatusFilter<"FarmingInformation"> | $Enums.FarmingInfoStatus;
    title?: Prisma.StringNullableFilter<"FarmingInformation"> | string | null;
    article?: Prisma.StringNullableFilter<"FarmingInformation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"FarmingInformation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FarmingInformation"> | Date | string;
};
export type FarmingInformationCreateManyUserInput = {
    farmingId?: string;
    farmingInfoImage?: string | null;
    status?: $Enums.FarmingInfoStatus;
    title?: string | null;
    article?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmingInformationUpdateWithoutUserInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumFarmingInfoStatusFieldUpdateOperationsInput | $Enums.FarmingInfoStatus;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmingInformationUncheckedUpdateWithoutUserInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumFarmingInfoStatusFieldUpdateOperationsInput | $Enums.FarmingInfoStatus;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmingInformationUncheckedUpdateManyWithoutUserInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumFarmingInfoStatusFieldUpdateOperationsInput | $Enums.FarmingInfoStatus;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmingInformationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    farmingId?: boolean;
    authorId?: boolean;
    farmingInfoImage?: boolean;
    status?: boolean;
    title?: boolean;
    article?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["farmingInformation"]>;
export type FarmingInformationSelectScalar = {
    farmingId?: boolean;
    authorId?: boolean;
    farmingInfoImage?: boolean;
    status?: boolean;
    title?: boolean;
    article?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FarmingInformationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"farmingId" | "authorId" | "farmingInfoImage" | "status" | "title" | "article" | "createdAt" | "updatedAt", ExtArgs["result"]["farmingInformation"]>;
export type FarmingInformationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FarmingInformationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FarmingInformation";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        farmingId: string;
        authorId: string;
        farmingInfoImage: string | null;
        status: $Enums.FarmingInfoStatus;
        title: string | null;
        article: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["farmingInformation"]>;
    composites: {};
};
export type FarmingInformationGetPayload<S extends boolean | null | undefined | FarmingInformationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FarmingInformationPayload, S>;
export type FarmingInformationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FarmingInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FarmingInformationCountAggregateInputType | true;
};
export interface FarmingInformationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FarmingInformation'];
        meta: {
            name: 'FarmingInformation';
        };
    };
    /**
     * Find zero or one FarmingInformation that matches the filter.
     * @param {FarmingInformationFindUniqueArgs} args - Arguments to find a FarmingInformation
     * @example
     * // Get one FarmingInformation
     * const farmingInformation = await prisma.farmingInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmingInformationFindUniqueArgs>(args: Prisma.SelectSubset<T, FarmingInformationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FarmingInformationClient<runtime.Types.Result.GetResult<Prisma.$FarmingInformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FarmingInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmingInformationFindUniqueOrThrowArgs} args - Arguments to find a FarmingInformation
     * @example
     * // Get one FarmingInformation
     * const farmingInformation = await prisma.farmingInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmingInformationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FarmingInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FarmingInformationClient<runtime.Types.Result.GetResult<Prisma.$FarmingInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FarmingInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingInformationFindFirstArgs} args - Arguments to find a FarmingInformation
     * @example
     * // Get one FarmingInformation
     * const farmingInformation = await prisma.farmingInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmingInformationFindFirstArgs>(args?: Prisma.SelectSubset<T, FarmingInformationFindFirstArgs<ExtArgs>>): Prisma.Prisma__FarmingInformationClient<runtime.Types.Result.GetResult<Prisma.$FarmingInformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FarmingInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingInformationFindFirstOrThrowArgs} args - Arguments to find a FarmingInformation
     * @example
     * // Get one FarmingInformation
     * const farmingInformation = await prisma.farmingInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmingInformationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FarmingInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FarmingInformationClient<runtime.Types.Result.GetResult<Prisma.$FarmingInformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FarmingInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FarmingInformations
     * const farmingInformations = await prisma.farmingInformation.findMany()
     *
     * // Get first 10 FarmingInformations
     * const farmingInformations = await prisma.farmingInformation.findMany({ take: 10 })
     *
     * // Only select the `farmingId`
     * const farmingInformationWithFarmingIdOnly = await prisma.farmingInformation.findMany({ select: { farmingId: true } })
     *
     */
    findMany<T extends FarmingInformationFindManyArgs>(args?: Prisma.SelectSubset<T, FarmingInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmingInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FarmingInformation.
     * @param {FarmingInformationCreateArgs} args - Arguments to create a FarmingInformation.
     * @example
     * // Create one FarmingInformation
     * const FarmingInformation = await prisma.farmingInformation.create({
     *   data: {
     *     // ... data to create a FarmingInformation
     *   }
     * })
     *
     */
    create<T extends FarmingInformationCreateArgs>(args: Prisma.SelectSubset<T, FarmingInformationCreateArgs<ExtArgs>>): Prisma.Prisma__FarmingInformationClient<runtime.Types.Result.GetResult<Prisma.$FarmingInformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FarmingInformations.
     * @param {FarmingInformationCreateManyArgs} args - Arguments to create many FarmingInformations.
     * @example
     * // Create many FarmingInformations
     * const farmingInformation = await prisma.farmingInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FarmingInformationCreateManyArgs>(args?: Prisma.SelectSubset<T, FarmingInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a FarmingInformation.
     * @param {FarmingInformationDeleteArgs} args - Arguments to delete one FarmingInformation.
     * @example
     * // Delete one FarmingInformation
     * const FarmingInformation = await prisma.farmingInformation.delete({
     *   where: {
     *     // ... filter to delete one FarmingInformation
     *   }
     * })
     *
     */
    delete<T extends FarmingInformationDeleteArgs>(args: Prisma.SelectSubset<T, FarmingInformationDeleteArgs<ExtArgs>>): Prisma.Prisma__FarmingInformationClient<runtime.Types.Result.GetResult<Prisma.$FarmingInformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FarmingInformation.
     * @param {FarmingInformationUpdateArgs} args - Arguments to update one FarmingInformation.
     * @example
     * // Update one FarmingInformation
     * const farmingInformation = await prisma.farmingInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FarmingInformationUpdateArgs>(args: Prisma.SelectSubset<T, FarmingInformationUpdateArgs<ExtArgs>>): Prisma.Prisma__FarmingInformationClient<runtime.Types.Result.GetResult<Prisma.$FarmingInformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FarmingInformations.
     * @param {FarmingInformationDeleteManyArgs} args - Arguments to filter FarmingInformations to delete.
     * @example
     * // Delete a few FarmingInformations
     * const { count } = await prisma.farmingInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FarmingInformationDeleteManyArgs>(args?: Prisma.SelectSubset<T, FarmingInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FarmingInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FarmingInformations
     * const farmingInformation = await prisma.farmingInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FarmingInformationUpdateManyArgs>(args: Prisma.SelectSubset<T, FarmingInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one FarmingInformation.
     * @param {FarmingInformationUpsertArgs} args - Arguments to update or create a FarmingInformation.
     * @example
     * // Update or create a FarmingInformation
     * const farmingInformation = await prisma.farmingInformation.upsert({
     *   create: {
     *     // ... data to create a FarmingInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FarmingInformation we want to update
     *   }
     * })
     */
    upsert<T extends FarmingInformationUpsertArgs>(args: Prisma.SelectSubset<T, FarmingInformationUpsertArgs<ExtArgs>>): Prisma.Prisma__FarmingInformationClient<runtime.Types.Result.GetResult<Prisma.$FarmingInformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FarmingInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingInformationCountArgs} args - Arguments to filter FarmingInformations to count.
     * @example
     * // Count the number of FarmingInformations
     * const count = await prisma.farmingInformation.count({
     *   where: {
     *     // ... the filter for the FarmingInformations we want to count
     *   }
     * })
    **/
    count<T extends FarmingInformationCountArgs>(args?: Prisma.Subset<T, FarmingInformationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FarmingInformationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FarmingInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FarmingInformationAggregateArgs>(args: Prisma.Subset<T, FarmingInformationAggregateArgs>): Prisma.PrismaPromise<GetFarmingInformationAggregateType<T>>;
    /**
     * Group by FarmingInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmingInformationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends FarmingInformationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FarmingInformationGroupByArgs['orderBy'];
    } : {
        orderBy?: FarmingInformationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FarmingInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmingInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FarmingInformation model
     */
    readonly fields: FarmingInformationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FarmingInformation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FarmingInformationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the FarmingInformation model
 */
export interface FarmingInformationFieldRefs {
    readonly farmingId: Prisma.FieldRef<"FarmingInformation", 'String'>;
    readonly authorId: Prisma.FieldRef<"FarmingInformation", 'String'>;
    readonly farmingInfoImage: Prisma.FieldRef<"FarmingInformation", 'String'>;
    readonly status: Prisma.FieldRef<"FarmingInformation", 'FarmingInfoStatus'>;
    readonly title: Prisma.FieldRef<"FarmingInformation", 'String'>;
    readonly article: Prisma.FieldRef<"FarmingInformation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FarmingInformation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FarmingInformation", 'DateTime'>;
}
/**
 * FarmingInformation findUnique
 */
export type FarmingInformationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingInformation
     */
    select?: Prisma.FarmingInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmingInformation
     */
    omit?: Prisma.FarmingInformationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmingInformationInclude<ExtArgs> | null;
    /**
     * Filter, which FarmingInformation to fetch.
     */
    where: Prisma.FarmingInformationWhereUniqueInput;
};
/**
 * FarmingInformation findUniqueOrThrow
 */
export type FarmingInformationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingInformation
     */
    select?: Prisma.FarmingInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmingInformation
     */
    omit?: Prisma.FarmingInformationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmingInformationInclude<ExtArgs> | null;
    /**
     * Filter, which FarmingInformation to fetch.
     */
    where: Prisma.FarmingInformationWhereUniqueInput;
};
/**
 * FarmingInformation findFirst
 */
export type FarmingInformationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingInformation
     */
    select?: Prisma.FarmingInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmingInformation
     */
    omit?: Prisma.FarmingInformationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmingInformationInclude<ExtArgs> | null;
    /**
     * Filter, which FarmingInformation to fetch.
     */
    where?: Prisma.FarmingInformationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FarmingInformations to fetch.
     */
    orderBy?: Prisma.FarmingInformationOrderByWithRelationInput | Prisma.FarmingInformationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FarmingInformations.
     */
    cursor?: Prisma.FarmingInformationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FarmingInformations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FarmingInformations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FarmingInformations.
     */
    distinct?: Prisma.FarmingInformationScalarFieldEnum | Prisma.FarmingInformationScalarFieldEnum[];
};
/**
 * FarmingInformation findFirstOrThrow
 */
export type FarmingInformationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingInformation
     */
    select?: Prisma.FarmingInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmingInformation
     */
    omit?: Prisma.FarmingInformationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmingInformationInclude<ExtArgs> | null;
    /**
     * Filter, which FarmingInformation to fetch.
     */
    where?: Prisma.FarmingInformationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FarmingInformations to fetch.
     */
    orderBy?: Prisma.FarmingInformationOrderByWithRelationInput | Prisma.FarmingInformationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FarmingInformations.
     */
    cursor?: Prisma.FarmingInformationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FarmingInformations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FarmingInformations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FarmingInformations.
     */
    distinct?: Prisma.FarmingInformationScalarFieldEnum | Prisma.FarmingInformationScalarFieldEnum[];
};
/**
 * FarmingInformation findMany
 */
export type FarmingInformationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingInformation
     */
    select?: Prisma.FarmingInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmingInformation
     */
    omit?: Prisma.FarmingInformationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmingInformationInclude<ExtArgs> | null;
    /**
     * Filter, which FarmingInformations to fetch.
     */
    where?: Prisma.FarmingInformationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FarmingInformations to fetch.
     */
    orderBy?: Prisma.FarmingInformationOrderByWithRelationInput | Prisma.FarmingInformationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FarmingInformations.
     */
    cursor?: Prisma.FarmingInformationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FarmingInformations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FarmingInformations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FarmingInformations.
     */
    distinct?: Prisma.FarmingInformationScalarFieldEnum | Prisma.FarmingInformationScalarFieldEnum[];
};
/**
 * FarmingInformation create
 */
export type FarmingInformationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingInformation
     */
    select?: Prisma.FarmingInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmingInformation
     */
    omit?: Prisma.FarmingInformationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmingInformationInclude<ExtArgs> | null;
    /**
     * The data needed to create a FarmingInformation.
     */
    data: Prisma.XOR<Prisma.FarmingInformationCreateInput, Prisma.FarmingInformationUncheckedCreateInput>;
};
/**
 * FarmingInformation createMany
 */
export type FarmingInformationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FarmingInformations.
     */
    data: Prisma.FarmingInformationCreateManyInput | Prisma.FarmingInformationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FarmingInformation update
 */
export type FarmingInformationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingInformation
     */
    select?: Prisma.FarmingInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmingInformation
     */
    omit?: Prisma.FarmingInformationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmingInformationInclude<ExtArgs> | null;
    /**
     * The data needed to update a FarmingInformation.
     */
    data: Prisma.XOR<Prisma.FarmingInformationUpdateInput, Prisma.FarmingInformationUncheckedUpdateInput>;
    /**
     * Choose, which FarmingInformation to update.
     */
    where: Prisma.FarmingInformationWhereUniqueInput;
};
/**
 * FarmingInformation updateMany
 */
export type FarmingInformationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FarmingInformations.
     */
    data: Prisma.XOR<Prisma.FarmingInformationUpdateManyMutationInput, Prisma.FarmingInformationUncheckedUpdateManyInput>;
    /**
     * Filter which FarmingInformations to update
     */
    where?: Prisma.FarmingInformationWhereInput;
    /**
     * Limit how many FarmingInformations to update.
     */
    limit?: number;
};
/**
 * FarmingInformation upsert
 */
export type FarmingInformationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingInformation
     */
    select?: Prisma.FarmingInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmingInformation
     */
    omit?: Prisma.FarmingInformationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmingInformationInclude<ExtArgs> | null;
    /**
     * The filter to search for the FarmingInformation to update in case it exists.
     */
    where: Prisma.FarmingInformationWhereUniqueInput;
    /**
     * In case the FarmingInformation found by the `where` argument doesn't exist, create a new FarmingInformation with this data.
     */
    create: Prisma.XOR<Prisma.FarmingInformationCreateInput, Prisma.FarmingInformationUncheckedCreateInput>;
    /**
     * In case the FarmingInformation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FarmingInformationUpdateInput, Prisma.FarmingInformationUncheckedUpdateInput>;
};
/**
 * FarmingInformation delete
 */
export type FarmingInformationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingInformation
     */
    select?: Prisma.FarmingInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmingInformation
     */
    omit?: Prisma.FarmingInformationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmingInformationInclude<ExtArgs> | null;
    /**
     * Filter which FarmingInformation to delete.
     */
    where: Prisma.FarmingInformationWhereUniqueInput;
};
/**
 * FarmingInformation deleteMany
 */
export type FarmingInformationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FarmingInformations to delete
     */
    where?: Prisma.FarmingInformationWhereInput;
    /**
     * Limit how many FarmingInformations to delete.
     */
    limit?: number;
};
/**
 * FarmingInformation without action
 */
export type FarmingInformationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmingInformation
     */
    select?: Prisma.FarmingInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmingInformation
     */
    omit?: Prisma.FarmingInformationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmingInformationInclude<ExtArgs> | null;
};
//# sourceMappingURL=FarmingInformation.d.ts.map