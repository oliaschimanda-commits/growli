import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model TrainingRegisterUser
 *
 */
export type TrainingRegisterUserModel = runtime.Types.Result.DefaultSelection<Prisma.$TrainingRegisterUserPayload>;
export type AggregateTrainingRegisterUser = {
    _count: TrainingRegisterUserCountAggregateOutputType | null;
    _min: TrainingRegisterUserMinAggregateOutputType | null;
    _max: TrainingRegisterUserMaxAggregateOutputType | null;
};
export type TrainingRegisterUserMinAggregateOutputType = {
    registryId: string | null;
    userId: string | null;
    trainingEventId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TrainingRegisterUserMaxAggregateOutputType = {
    registryId: string | null;
    userId: string | null;
    trainingEventId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TrainingRegisterUserCountAggregateOutputType = {
    registryId: number;
    userId: number;
    trainingEventId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TrainingRegisterUserMinAggregateInputType = {
    registryId?: true;
    userId?: true;
    trainingEventId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TrainingRegisterUserMaxAggregateInputType = {
    registryId?: true;
    userId?: true;
    trainingEventId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TrainingRegisterUserCountAggregateInputType = {
    registryId?: true;
    userId?: true;
    trainingEventId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TrainingRegisterUserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingRegisterUser to aggregate.
     */
    where?: Prisma.TrainingRegisterUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TrainingRegisterUsers to fetch.
     */
    orderBy?: Prisma.TrainingRegisterUserOrderByWithRelationInput | Prisma.TrainingRegisterUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TrainingRegisterUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TrainingRegisterUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TrainingRegisterUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TrainingRegisterUsers
    **/
    _count?: true | TrainingRegisterUserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TrainingRegisterUserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TrainingRegisterUserMaxAggregateInputType;
};
export type GetTrainingRegisterUserAggregateType<T extends TrainingRegisterUserAggregateArgs> = {
    [P in keyof T & keyof AggregateTrainingRegisterUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTrainingRegisterUser[P]> : Prisma.GetScalarType<T[P], AggregateTrainingRegisterUser[P]>;
};
export type TrainingRegisterUserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainingRegisterUserWhereInput;
    orderBy?: Prisma.TrainingRegisterUserOrderByWithAggregationInput | Prisma.TrainingRegisterUserOrderByWithAggregationInput[];
    by: Prisma.TrainingRegisterUserScalarFieldEnum[] | Prisma.TrainingRegisterUserScalarFieldEnum;
    having?: Prisma.TrainingRegisterUserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrainingRegisterUserCountAggregateInputType | true;
    _min?: TrainingRegisterUserMinAggregateInputType;
    _max?: TrainingRegisterUserMaxAggregateInputType;
};
export type TrainingRegisterUserGroupByOutputType = {
    registryId: string;
    userId: string;
    trainingEventId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: TrainingRegisterUserCountAggregateOutputType | null;
    _min: TrainingRegisterUserMinAggregateOutputType | null;
    _max: TrainingRegisterUserMaxAggregateOutputType | null;
};
export type GetTrainingRegisterUserGroupByPayload<T extends TrainingRegisterUserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TrainingRegisterUserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TrainingRegisterUserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TrainingRegisterUserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TrainingRegisterUserGroupByOutputType[P]>;
}>>;
export type TrainingRegisterUserWhereInput = {
    AND?: Prisma.TrainingRegisterUserWhereInput | Prisma.TrainingRegisterUserWhereInput[];
    OR?: Prisma.TrainingRegisterUserWhereInput[];
    NOT?: Prisma.TrainingRegisterUserWhereInput | Prisma.TrainingRegisterUserWhereInput[];
    registryId?: Prisma.StringFilter<"TrainingRegisterUser"> | string;
    userId?: Prisma.StringFilter<"TrainingRegisterUser"> | string;
    trainingEventId?: Prisma.StringFilter<"TrainingRegisterUser"> | string;
    createdAt?: Prisma.DateTimeFilter<"TrainingRegisterUser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TrainingRegisterUser"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    trainimg?: Prisma.XOR<Prisma.TrainingScalarRelationFilter, Prisma.TrainingWhereInput>;
};
export type TrainingRegisterUserOrderByWithRelationInput = {
    registryId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    trainingEventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    trainimg?: Prisma.TrainingOrderByWithRelationInput;
    _relevance?: Prisma.TrainingRegisterUserOrderByRelevanceInput;
};
export type TrainingRegisterUserWhereUniqueInput = Prisma.AtLeast<{
    registryId?: string;
    AND?: Prisma.TrainingRegisterUserWhereInput | Prisma.TrainingRegisterUserWhereInput[];
    OR?: Prisma.TrainingRegisterUserWhereInput[];
    NOT?: Prisma.TrainingRegisterUserWhereInput | Prisma.TrainingRegisterUserWhereInput[];
    userId?: Prisma.StringFilter<"TrainingRegisterUser"> | string;
    trainingEventId?: Prisma.StringFilter<"TrainingRegisterUser"> | string;
    createdAt?: Prisma.DateTimeFilter<"TrainingRegisterUser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TrainingRegisterUser"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    trainimg?: Prisma.XOR<Prisma.TrainingScalarRelationFilter, Prisma.TrainingWhereInput>;
}, "registryId">;
export type TrainingRegisterUserOrderByWithAggregationInput = {
    registryId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    trainingEventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TrainingRegisterUserCountOrderByAggregateInput;
    _max?: Prisma.TrainingRegisterUserMaxOrderByAggregateInput;
    _min?: Prisma.TrainingRegisterUserMinOrderByAggregateInput;
};
export type TrainingRegisterUserScalarWhereWithAggregatesInput = {
    AND?: Prisma.TrainingRegisterUserScalarWhereWithAggregatesInput | Prisma.TrainingRegisterUserScalarWhereWithAggregatesInput[];
    OR?: Prisma.TrainingRegisterUserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TrainingRegisterUserScalarWhereWithAggregatesInput | Prisma.TrainingRegisterUserScalarWhereWithAggregatesInput[];
    registryId?: Prisma.StringWithAggregatesFilter<"TrainingRegisterUser"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"TrainingRegisterUser"> | string;
    trainingEventId?: Prisma.StringWithAggregatesFilter<"TrainingRegisterUser"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TrainingRegisterUser"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TrainingRegisterUser"> | Date | string;
};
export type TrainingRegisterUserCreateInput = {
    registryId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTrainingRegisterUserInput;
    trainimg: Prisma.TrainingCreateNestedOneWithoutTrainingRegisterUserInput;
};
export type TrainingRegisterUserUncheckedCreateInput = {
    registryId?: string;
    userId: string;
    trainingEventId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrainingRegisterUserUpdateInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTrainingRegisterUserNestedInput;
    trainimg?: Prisma.TrainingUpdateOneRequiredWithoutTrainingRegisterUserNestedInput;
};
export type TrainingRegisterUserUncheckedUpdateInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingRegisterUserCreateManyInput = {
    registryId?: string;
    userId: string;
    trainingEventId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrainingRegisterUserUpdateManyMutationInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingRegisterUserUncheckedUpdateManyInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingRegisterUserListRelationFilter = {
    every?: Prisma.TrainingRegisterUserWhereInput;
    some?: Prisma.TrainingRegisterUserWhereInput;
    none?: Prisma.TrainingRegisterUserWhereInput;
};
export type TrainingRegisterUserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TrainingRegisterUserOrderByRelevanceInput = {
    fields: Prisma.TrainingRegisterUserOrderByRelevanceFieldEnum | Prisma.TrainingRegisterUserOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type TrainingRegisterUserCountOrderByAggregateInput = {
    registryId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    trainingEventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrainingRegisterUserMaxOrderByAggregateInput = {
    registryId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    trainingEventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrainingRegisterUserMinOrderByAggregateInput = {
    registryId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    trainingEventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrainingRegisterUserCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TrainingRegisterUserCreateWithoutUserInput, Prisma.TrainingRegisterUserUncheckedCreateWithoutUserInput> | Prisma.TrainingRegisterUserCreateWithoutUserInput[] | Prisma.TrainingRegisterUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TrainingRegisterUserCreateOrConnectWithoutUserInput | Prisma.TrainingRegisterUserCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TrainingRegisterUserCreateManyUserInputEnvelope;
    connect?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
};
export type TrainingRegisterUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TrainingRegisterUserCreateWithoutUserInput, Prisma.TrainingRegisterUserUncheckedCreateWithoutUserInput> | Prisma.TrainingRegisterUserCreateWithoutUserInput[] | Prisma.TrainingRegisterUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TrainingRegisterUserCreateOrConnectWithoutUserInput | Prisma.TrainingRegisterUserCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TrainingRegisterUserCreateManyUserInputEnvelope;
    connect?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
};
export type TrainingRegisterUserUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TrainingRegisterUserCreateWithoutUserInput, Prisma.TrainingRegisterUserUncheckedCreateWithoutUserInput> | Prisma.TrainingRegisterUserCreateWithoutUserInput[] | Prisma.TrainingRegisterUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TrainingRegisterUserCreateOrConnectWithoutUserInput | Prisma.TrainingRegisterUserCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TrainingRegisterUserUpsertWithWhereUniqueWithoutUserInput | Prisma.TrainingRegisterUserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TrainingRegisterUserCreateManyUserInputEnvelope;
    set?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    disconnect?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    delete?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    connect?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    update?: Prisma.TrainingRegisterUserUpdateWithWhereUniqueWithoutUserInput | Prisma.TrainingRegisterUserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TrainingRegisterUserUpdateManyWithWhereWithoutUserInput | Prisma.TrainingRegisterUserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TrainingRegisterUserScalarWhereInput | Prisma.TrainingRegisterUserScalarWhereInput[];
};
export type TrainingRegisterUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TrainingRegisterUserCreateWithoutUserInput, Prisma.TrainingRegisterUserUncheckedCreateWithoutUserInput> | Prisma.TrainingRegisterUserCreateWithoutUserInput[] | Prisma.TrainingRegisterUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TrainingRegisterUserCreateOrConnectWithoutUserInput | Prisma.TrainingRegisterUserCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TrainingRegisterUserUpsertWithWhereUniqueWithoutUserInput | Prisma.TrainingRegisterUserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TrainingRegisterUserCreateManyUserInputEnvelope;
    set?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    disconnect?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    delete?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    connect?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    update?: Prisma.TrainingRegisterUserUpdateWithWhereUniqueWithoutUserInput | Prisma.TrainingRegisterUserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TrainingRegisterUserUpdateManyWithWhereWithoutUserInput | Prisma.TrainingRegisterUserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TrainingRegisterUserScalarWhereInput | Prisma.TrainingRegisterUserScalarWhereInput[];
};
export type TrainingRegisterUserCreateNestedManyWithoutTrainimgInput = {
    create?: Prisma.XOR<Prisma.TrainingRegisterUserCreateWithoutTrainimgInput, Prisma.TrainingRegisterUserUncheckedCreateWithoutTrainimgInput> | Prisma.TrainingRegisterUserCreateWithoutTrainimgInput[] | Prisma.TrainingRegisterUserUncheckedCreateWithoutTrainimgInput[];
    connectOrCreate?: Prisma.TrainingRegisterUserCreateOrConnectWithoutTrainimgInput | Prisma.TrainingRegisterUserCreateOrConnectWithoutTrainimgInput[];
    createMany?: Prisma.TrainingRegisterUserCreateManyTrainimgInputEnvelope;
    connect?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
};
export type TrainingRegisterUserUncheckedCreateNestedManyWithoutTrainimgInput = {
    create?: Prisma.XOR<Prisma.TrainingRegisterUserCreateWithoutTrainimgInput, Prisma.TrainingRegisterUserUncheckedCreateWithoutTrainimgInput> | Prisma.TrainingRegisterUserCreateWithoutTrainimgInput[] | Prisma.TrainingRegisterUserUncheckedCreateWithoutTrainimgInput[];
    connectOrCreate?: Prisma.TrainingRegisterUserCreateOrConnectWithoutTrainimgInput | Prisma.TrainingRegisterUserCreateOrConnectWithoutTrainimgInput[];
    createMany?: Prisma.TrainingRegisterUserCreateManyTrainimgInputEnvelope;
    connect?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
};
export type TrainingRegisterUserUpdateManyWithoutTrainimgNestedInput = {
    create?: Prisma.XOR<Prisma.TrainingRegisterUserCreateWithoutTrainimgInput, Prisma.TrainingRegisterUserUncheckedCreateWithoutTrainimgInput> | Prisma.TrainingRegisterUserCreateWithoutTrainimgInput[] | Prisma.TrainingRegisterUserUncheckedCreateWithoutTrainimgInput[];
    connectOrCreate?: Prisma.TrainingRegisterUserCreateOrConnectWithoutTrainimgInput | Prisma.TrainingRegisterUserCreateOrConnectWithoutTrainimgInput[];
    upsert?: Prisma.TrainingRegisterUserUpsertWithWhereUniqueWithoutTrainimgInput | Prisma.TrainingRegisterUserUpsertWithWhereUniqueWithoutTrainimgInput[];
    createMany?: Prisma.TrainingRegisterUserCreateManyTrainimgInputEnvelope;
    set?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    disconnect?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    delete?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    connect?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    update?: Prisma.TrainingRegisterUserUpdateWithWhereUniqueWithoutTrainimgInput | Prisma.TrainingRegisterUserUpdateWithWhereUniqueWithoutTrainimgInput[];
    updateMany?: Prisma.TrainingRegisterUserUpdateManyWithWhereWithoutTrainimgInput | Prisma.TrainingRegisterUserUpdateManyWithWhereWithoutTrainimgInput[];
    deleteMany?: Prisma.TrainingRegisterUserScalarWhereInput | Prisma.TrainingRegisterUserScalarWhereInput[];
};
export type TrainingRegisterUserUncheckedUpdateManyWithoutTrainimgNestedInput = {
    create?: Prisma.XOR<Prisma.TrainingRegisterUserCreateWithoutTrainimgInput, Prisma.TrainingRegisterUserUncheckedCreateWithoutTrainimgInput> | Prisma.TrainingRegisterUserCreateWithoutTrainimgInput[] | Prisma.TrainingRegisterUserUncheckedCreateWithoutTrainimgInput[];
    connectOrCreate?: Prisma.TrainingRegisterUserCreateOrConnectWithoutTrainimgInput | Prisma.TrainingRegisterUserCreateOrConnectWithoutTrainimgInput[];
    upsert?: Prisma.TrainingRegisterUserUpsertWithWhereUniqueWithoutTrainimgInput | Prisma.TrainingRegisterUserUpsertWithWhereUniqueWithoutTrainimgInput[];
    createMany?: Prisma.TrainingRegisterUserCreateManyTrainimgInputEnvelope;
    set?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    disconnect?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    delete?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    connect?: Prisma.TrainingRegisterUserWhereUniqueInput | Prisma.TrainingRegisterUserWhereUniqueInput[];
    update?: Prisma.TrainingRegisterUserUpdateWithWhereUniqueWithoutTrainimgInput | Prisma.TrainingRegisterUserUpdateWithWhereUniqueWithoutTrainimgInput[];
    updateMany?: Prisma.TrainingRegisterUserUpdateManyWithWhereWithoutTrainimgInput | Prisma.TrainingRegisterUserUpdateManyWithWhereWithoutTrainimgInput[];
    deleteMany?: Prisma.TrainingRegisterUserScalarWhereInput | Prisma.TrainingRegisterUserScalarWhereInput[];
};
export type TrainingRegisterUserCreateWithoutUserInput = {
    registryId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trainimg: Prisma.TrainingCreateNestedOneWithoutTrainingRegisterUserInput;
};
export type TrainingRegisterUserUncheckedCreateWithoutUserInput = {
    registryId?: string;
    trainingEventId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrainingRegisterUserCreateOrConnectWithoutUserInput = {
    where: Prisma.TrainingRegisterUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrainingRegisterUserCreateWithoutUserInput, Prisma.TrainingRegisterUserUncheckedCreateWithoutUserInput>;
};
export type TrainingRegisterUserCreateManyUserInputEnvelope = {
    data: Prisma.TrainingRegisterUserCreateManyUserInput | Prisma.TrainingRegisterUserCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TrainingRegisterUserUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TrainingRegisterUserWhereUniqueInput;
    update: Prisma.XOR<Prisma.TrainingRegisterUserUpdateWithoutUserInput, Prisma.TrainingRegisterUserUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TrainingRegisterUserCreateWithoutUserInput, Prisma.TrainingRegisterUserUncheckedCreateWithoutUserInput>;
};
export type TrainingRegisterUserUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TrainingRegisterUserWhereUniqueInput;
    data: Prisma.XOR<Prisma.TrainingRegisterUserUpdateWithoutUserInput, Prisma.TrainingRegisterUserUncheckedUpdateWithoutUserInput>;
};
export type TrainingRegisterUserUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TrainingRegisterUserScalarWhereInput;
    data: Prisma.XOR<Prisma.TrainingRegisterUserUpdateManyMutationInput, Prisma.TrainingRegisterUserUncheckedUpdateManyWithoutUserInput>;
};
export type TrainingRegisterUserScalarWhereInput = {
    AND?: Prisma.TrainingRegisterUserScalarWhereInput | Prisma.TrainingRegisterUserScalarWhereInput[];
    OR?: Prisma.TrainingRegisterUserScalarWhereInput[];
    NOT?: Prisma.TrainingRegisterUserScalarWhereInput | Prisma.TrainingRegisterUserScalarWhereInput[];
    registryId?: Prisma.StringFilter<"TrainingRegisterUser"> | string;
    userId?: Prisma.StringFilter<"TrainingRegisterUser"> | string;
    trainingEventId?: Prisma.StringFilter<"TrainingRegisterUser"> | string;
    createdAt?: Prisma.DateTimeFilter<"TrainingRegisterUser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TrainingRegisterUser"> | Date | string;
};
export type TrainingRegisterUserCreateWithoutTrainimgInput = {
    registryId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTrainingRegisterUserInput;
};
export type TrainingRegisterUserUncheckedCreateWithoutTrainimgInput = {
    registryId?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrainingRegisterUserCreateOrConnectWithoutTrainimgInput = {
    where: Prisma.TrainingRegisterUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrainingRegisterUserCreateWithoutTrainimgInput, Prisma.TrainingRegisterUserUncheckedCreateWithoutTrainimgInput>;
};
export type TrainingRegisterUserCreateManyTrainimgInputEnvelope = {
    data: Prisma.TrainingRegisterUserCreateManyTrainimgInput | Prisma.TrainingRegisterUserCreateManyTrainimgInput[];
    skipDuplicates?: boolean;
};
export type TrainingRegisterUserUpsertWithWhereUniqueWithoutTrainimgInput = {
    where: Prisma.TrainingRegisterUserWhereUniqueInput;
    update: Prisma.XOR<Prisma.TrainingRegisterUserUpdateWithoutTrainimgInput, Prisma.TrainingRegisterUserUncheckedUpdateWithoutTrainimgInput>;
    create: Prisma.XOR<Prisma.TrainingRegisterUserCreateWithoutTrainimgInput, Prisma.TrainingRegisterUserUncheckedCreateWithoutTrainimgInput>;
};
export type TrainingRegisterUserUpdateWithWhereUniqueWithoutTrainimgInput = {
    where: Prisma.TrainingRegisterUserWhereUniqueInput;
    data: Prisma.XOR<Prisma.TrainingRegisterUserUpdateWithoutTrainimgInput, Prisma.TrainingRegisterUserUncheckedUpdateWithoutTrainimgInput>;
};
export type TrainingRegisterUserUpdateManyWithWhereWithoutTrainimgInput = {
    where: Prisma.TrainingRegisterUserScalarWhereInput;
    data: Prisma.XOR<Prisma.TrainingRegisterUserUpdateManyMutationInput, Prisma.TrainingRegisterUserUncheckedUpdateManyWithoutTrainimgInput>;
};
export type TrainingRegisterUserCreateManyUserInput = {
    registryId?: string;
    trainingEventId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrainingRegisterUserUpdateWithoutUserInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainimg?: Prisma.TrainingUpdateOneRequiredWithoutTrainingRegisterUserNestedInput;
};
export type TrainingRegisterUserUncheckedUpdateWithoutUserInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingRegisterUserUncheckedUpdateManyWithoutUserInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingRegisterUserCreateManyTrainimgInput = {
    registryId?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrainingRegisterUserUpdateWithoutTrainimgInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTrainingRegisterUserNestedInput;
};
export type TrainingRegisterUserUncheckedUpdateWithoutTrainimgInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingRegisterUserUncheckedUpdateManyWithoutTrainimgInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingRegisterUserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    registryId?: boolean;
    userId?: boolean;
    trainingEventId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    trainimg?: boolean | Prisma.TrainingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trainingRegisterUser"]>;
export type TrainingRegisterUserSelectScalar = {
    registryId?: boolean;
    userId?: boolean;
    trainingEventId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TrainingRegisterUserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"registryId" | "userId" | "trainingEventId" | "createdAt" | "updatedAt", ExtArgs["result"]["trainingRegisterUser"]>;
export type TrainingRegisterUserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    trainimg?: boolean | Prisma.TrainingDefaultArgs<ExtArgs>;
};
export type $TrainingRegisterUserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TrainingRegisterUser";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        trainimg: Prisma.$TrainingPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        registryId: string;
        userId: string;
        trainingEventId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["trainingRegisterUser"]>;
    composites: {};
};
export type TrainingRegisterUserGetPayload<S extends boolean | null | undefined | TrainingRegisterUserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TrainingRegisterUserPayload, S>;
export type TrainingRegisterUserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TrainingRegisterUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TrainingRegisterUserCountAggregateInputType | true;
};
export interface TrainingRegisterUserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TrainingRegisterUser'];
        meta: {
            name: 'TrainingRegisterUser';
        };
    };
    /**
     * Find zero or one TrainingRegisterUser that matches the filter.
     * @param {TrainingRegisterUserFindUniqueArgs} args - Arguments to find a TrainingRegisterUser
     * @example
     * // Get one TrainingRegisterUser
     * const trainingRegisterUser = await prisma.trainingRegisterUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingRegisterUserFindUniqueArgs>(args: Prisma.SelectSubset<T, TrainingRegisterUserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TrainingRegisterUserClient<runtime.Types.Result.GetResult<Prisma.$TrainingRegisterUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TrainingRegisterUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainingRegisterUserFindUniqueOrThrowArgs} args - Arguments to find a TrainingRegisterUser
     * @example
     * // Get one TrainingRegisterUser
     * const trainingRegisterUser = await prisma.trainingRegisterUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingRegisterUserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TrainingRegisterUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrainingRegisterUserClient<runtime.Types.Result.GetResult<Prisma.$TrainingRegisterUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TrainingRegisterUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRegisterUserFindFirstArgs} args - Arguments to find a TrainingRegisterUser
     * @example
     * // Get one TrainingRegisterUser
     * const trainingRegisterUser = await prisma.trainingRegisterUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingRegisterUserFindFirstArgs>(args?: Prisma.SelectSubset<T, TrainingRegisterUserFindFirstArgs<ExtArgs>>): Prisma.Prisma__TrainingRegisterUserClient<runtime.Types.Result.GetResult<Prisma.$TrainingRegisterUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TrainingRegisterUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRegisterUserFindFirstOrThrowArgs} args - Arguments to find a TrainingRegisterUser
     * @example
     * // Get one TrainingRegisterUser
     * const trainingRegisterUser = await prisma.trainingRegisterUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingRegisterUserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TrainingRegisterUserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrainingRegisterUserClient<runtime.Types.Result.GetResult<Prisma.$TrainingRegisterUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TrainingRegisterUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRegisterUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingRegisterUsers
     * const trainingRegisterUsers = await prisma.trainingRegisterUser.findMany()
     *
     * // Get first 10 TrainingRegisterUsers
     * const trainingRegisterUsers = await prisma.trainingRegisterUser.findMany({ take: 10 })
     *
     * // Only select the `registryId`
     * const trainingRegisterUserWithRegistryIdOnly = await prisma.trainingRegisterUser.findMany({ select: { registryId: true } })
     *
     */
    findMany<T extends TrainingRegisterUserFindManyArgs>(args?: Prisma.SelectSubset<T, TrainingRegisterUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrainingRegisterUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TrainingRegisterUser.
     * @param {TrainingRegisterUserCreateArgs} args - Arguments to create a TrainingRegisterUser.
     * @example
     * // Create one TrainingRegisterUser
     * const TrainingRegisterUser = await prisma.trainingRegisterUser.create({
     *   data: {
     *     // ... data to create a TrainingRegisterUser
     *   }
     * })
     *
     */
    create<T extends TrainingRegisterUserCreateArgs>(args: Prisma.SelectSubset<T, TrainingRegisterUserCreateArgs<ExtArgs>>): Prisma.Prisma__TrainingRegisterUserClient<runtime.Types.Result.GetResult<Prisma.$TrainingRegisterUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TrainingRegisterUsers.
     * @param {TrainingRegisterUserCreateManyArgs} args - Arguments to create many TrainingRegisterUsers.
     * @example
     * // Create many TrainingRegisterUsers
     * const trainingRegisterUser = await prisma.trainingRegisterUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TrainingRegisterUserCreateManyArgs>(args?: Prisma.SelectSubset<T, TrainingRegisterUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a TrainingRegisterUser.
     * @param {TrainingRegisterUserDeleteArgs} args - Arguments to delete one TrainingRegisterUser.
     * @example
     * // Delete one TrainingRegisterUser
     * const TrainingRegisterUser = await prisma.trainingRegisterUser.delete({
     *   where: {
     *     // ... filter to delete one TrainingRegisterUser
     *   }
     * })
     *
     */
    delete<T extends TrainingRegisterUserDeleteArgs>(args: Prisma.SelectSubset<T, TrainingRegisterUserDeleteArgs<ExtArgs>>): Prisma.Prisma__TrainingRegisterUserClient<runtime.Types.Result.GetResult<Prisma.$TrainingRegisterUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TrainingRegisterUser.
     * @param {TrainingRegisterUserUpdateArgs} args - Arguments to update one TrainingRegisterUser.
     * @example
     * // Update one TrainingRegisterUser
     * const trainingRegisterUser = await prisma.trainingRegisterUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TrainingRegisterUserUpdateArgs>(args: Prisma.SelectSubset<T, TrainingRegisterUserUpdateArgs<ExtArgs>>): Prisma.Prisma__TrainingRegisterUserClient<runtime.Types.Result.GetResult<Prisma.$TrainingRegisterUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TrainingRegisterUsers.
     * @param {TrainingRegisterUserDeleteManyArgs} args - Arguments to filter TrainingRegisterUsers to delete.
     * @example
     * // Delete a few TrainingRegisterUsers
     * const { count } = await prisma.trainingRegisterUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TrainingRegisterUserDeleteManyArgs>(args?: Prisma.SelectSubset<T, TrainingRegisterUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TrainingRegisterUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRegisterUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingRegisterUsers
     * const trainingRegisterUser = await prisma.trainingRegisterUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TrainingRegisterUserUpdateManyArgs>(args: Prisma.SelectSubset<T, TrainingRegisterUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one TrainingRegisterUser.
     * @param {TrainingRegisterUserUpsertArgs} args - Arguments to update or create a TrainingRegisterUser.
     * @example
     * // Update or create a TrainingRegisterUser
     * const trainingRegisterUser = await prisma.trainingRegisterUser.upsert({
     *   create: {
     *     // ... data to create a TrainingRegisterUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingRegisterUser we want to update
     *   }
     * })
     */
    upsert<T extends TrainingRegisterUserUpsertArgs>(args: Prisma.SelectSubset<T, TrainingRegisterUserUpsertArgs<ExtArgs>>): Prisma.Prisma__TrainingRegisterUserClient<runtime.Types.Result.GetResult<Prisma.$TrainingRegisterUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TrainingRegisterUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRegisterUserCountArgs} args - Arguments to filter TrainingRegisterUsers to count.
     * @example
     * // Count the number of TrainingRegisterUsers
     * const count = await prisma.trainingRegisterUser.count({
     *   where: {
     *     // ... the filter for the TrainingRegisterUsers we want to count
     *   }
     * })
    **/
    count<T extends TrainingRegisterUserCountArgs>(args?: Prisma.Subset<T, TrainingRegisterUserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TrainingRegisterUserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TrainingRegisterUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRegisterUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainingRegisterUserAggregateArgs>(args: Prisma.Subset<T, TrainingRegisterUserAggregateArgs>): Prisma.PrismaPromise<GetTrainingRegisterUserAggregateType<T>>;
    /**
     * Group by TrainingRegisterUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRegisterUserGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TrainingRegisterUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TrainingRegisterUserGroupByArgs['orderBy'];
    } : {
        orderBy?: TrainingRegisterUserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TrainingRegisterUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingRegisterUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TrainingRegisterUser model
     */
    readonly fields: TrainingRegisterUserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TrainingRegisterUser.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TrainingRegisterUserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    trainimg<T extends Prisma.TrainingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TrainingDefaultArgs<ExtArgs>>): Prisma.Prisma__TrainingClient<runtime.Types.Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the TrainingRegisterUser model
 */
export interface TrainingRegisterUserFieldRefs {
    readonly registryId: Prisma.FieldRef<"TrainingRegisterUser", 'String'>;
    readonly userId: Prisma.FieldRef<"TrainingRegisterUser", 'String'>;
    readonly trainingEventId: Prisma.FieldRef<"TrainingRegisterUser", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TrainingRegisterUser", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TrainingRegisterUser", 'DateTime'>;
}
/**
 * TrainingRegisterUser findUnique
 */
export type TrainingRegisterUserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRegisterUser
     */
    select?: Prisma.TrainingRegisterUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TrainingRegisterUser
     */
    omit?: Prisma.TrainingRegisterUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingRegisterUserInclude<ExtArgs> | null;
    /**
     * Filter, which TrainingRegisterUser to fetch.
     */
    where: Prisma.TrainingRegisterUserWhereUniqueInput;
};
/**
 * TrainingRegisterUser findUniqueOrThrow
 */
export type TrainingRegisterUserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRegisterUser
     */
    select?: Prisma.TrainingRegisterUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TrainingRegisterUser
     */
    omit?: Prisma.TrainingRegisterUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingRegisterUserInclude<ExtArgs> | null;
    /**
     * Filter, which TrainingRegisterUser to fetch.
     */
    where: Prisma.TrainingRegisterUserWhereUniqueInput;
};
/**
 * TrainingRegisterUser findFirst
 */
export type TrainingRegisterUserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRegisterUser
     */
    select?: Prisma.TrainingRegisterUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TrainingRegisterUser
     */
    omit?: Prisma.TrainingRegisterUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingRegisterUserInclude<ExtArgs> | null;
    /**
     * Filter, which TrainingRegisterUser to fetch.
     */
    where?: Prisma.TrainingRegisterUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TrainingRegisterUsers to fetch.
     */
    orderBy?: Prisma.TrainingRegisterUserOrderByWithRelationInput | Prisma.TrainingRegisterUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TrainingRegisterUsers.
     */
    cursor?: Prisma.TrainingRegisterUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TrainingRegisterUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TrainingRegisterUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TrainingRegisterUsers.
     */
    distinct?: Prisma.TrainingRegisterUserScalarFieldEnum | Prisma.TrainingRegisterUserScalarFieldEnum[];
};
/**
 * TrainingRegisterUser findFirstOrThrow
 */
export type TrainingRegisterUserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRegisterUser
     */
    select?: Prisma.TrainingRegisterUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TrainingRegisterUser
     */
    omit?: Prisma.TrainingRegisterUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingRegisterUserInclude<ExtArgs> | null;
    /**
     * Filter, which TrainingRegisterUser to fetch.
     */
    where?: Prisma.TrainingRegisterUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TrainingRegisterUsers to fetch.
     */
    orderBy?: Prisma.TrainingRegisterUserOrderByWithRelationInput | Prisma.TrainingRegisterUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TrainingRegisterUsers.
     */
    cursor?: Prisma.TrainingRegisterUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TrainingRegisterUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TrainingRegisterUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TrainingRegisterUsers.
     */
    distinct?: Prisma.TrainingRegisterUserScalarFieldEnum | Prisma.TrainingRegisterUserScalarFieldEnum[];
};
/**
 * TrainingRegisterUser findMany
 */
export type TrainingRegisterUserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRegisterUser
     */
    select?: Prisma.TrainingRegisterUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TrainingRegisterUser
     */
    omit?: Prisma.TrainingRegisterUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingRegisterUserInclude<ExtArgs> | null;
    /**
     * Filter, which TrainingRegisterUsers to fetch.
     */
    where?: Prisma.TrainingRegisterUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TrainingRegisterUsers to fetch.
     */
    orderBy?: Prisma.TrainingRegisterUserOrderByWithRelationInput | Prisma.TrainingRegisterUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TrainingRegisterUsers.
     */
    cursor?: Prisma.TrainingRegisterUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TrainingRegisterUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TrainingRegisterUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TrainingRegisterUsers.
     */
    distinct?: Prisma.TrainingRegisterUserScalarFieldEnum | Prisma.TrainingRegisterUserScalarFieldEnum[];
};
/**
 * TrainingRegisterUser create
 */
export type TrainingRegisterUserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRegisterUser
     */
    select?: Prisma.TrainingRegisterUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TrainingRegisterUser
     */
    omit?: Prisma.TrainingRegisterUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingRegisterUserInclude<ExtArgs> | null;
    /**
     * The data needed to create a TrainingRegisterUser.
     */
    data: Prisma.XOR<Prisma.TrainingRegisterUserCreateInput, Prisma.TrainingRegisterUserUncheckedCreateInput>;
};
/**
 * TrainingRegisterUser createMany
 */
export type TrainingRegisterUserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingRegisterUsers.
     */
    data: Prisma.TrainingRegisterUserCreateManyInput | Prisma.TrainingRegisterUserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TrainingRegisterUser update
 */
export type TrainingRegisterUserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRegisterUser
     */
    select?: Prisma.TrainingRegisterUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TrainingRegisterUser
     */
    omit?: Prisma.TrainingRegisterUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingRegisterUserInclude<ExtArgs> | null;
    /**
     * The data needed to update a TrainingRegisterUser.
     */
    data: Prisma.XOR<Prisma.TrainingRegisterUserUpdateInput, Prisma.TrainingRegisterUserUncheckedUpdateInput>;
    /**
     * Choose, which TrainingRegisterUser to update.
     */
    where: Prisma.TrainingRegisterUserWhereUniqueInput;
};
/**
 * TrainingRegisterUser updateMany
 */
export type TrainingRegisterUserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingRegisterUsers.
     */
    data: Prisma.XOR<Prisma.TrainingRegisterUserUpdateManyMutationInput, Prisma.TrainingRegisterUserUncheckedUpdateManyInput>;
    /**
     * Filter which TrainingRegisterUsers to update
     */
    where?: Prisma.TrainingRegisterUserWhereInput;
    /**
     * Limit how many TrainingRegisterUsers to update.
     */
    limit?: number;
};
/**
 * TrainingRegisterUser upsert
 */
export type TrainingRegisterUserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRegisterUser
     */
    select?: Prisma.TrainingRegisterUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TrainingRegisterUser
     */
    omit?: Prisma.TrainingRegisterUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingRegisterUserInclude<ExtArgs> | null;
    /**
     * The filter to search for the TrainingRegisterUser to update in case it exists.
     */
    where: Prisma.TrainingRegisterUserWhereUniqueInput;
    /**
     * In case the TrainingRegisterUser found by the `where` argument doesn't exist, create a new TrainingRegisterUser with this data.
     */
    create: Prisma.XOR<Prisma.TrainingRegisterUserCreateInput, Prisma.TrainingRegisterUserUncheckedCreateInput>;
    /**
     * In case the TrainingRegisterUser was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TrainingRegisterUserUpdateInput, Prisma.TrainingRegisterUserUncheckedUpdateInput>;
};
/**
 * TrainingRegisterUser delete
 */
export type TrainingRegisterUserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRegisterUser
     */
    select?: Prisma.TrainingRegisterUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TrainingRegisterUser
     */
    omit?: Prisma.TrainingRegisterUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingRegisterUserInclude<ExtArgs> | null;
    /**
     * Filter which TrainingRegisterUser to delete.
     */
    where: Prisma.TrainingRegisterUserWhereUniqueInput;
};
/**
 * TrainingRegisterUser deleteMany
 */
export type TrainingRegisterUserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingRegisterUsers to delete
     */
    where?: Prisma.TrainingRegisterUserWhereInput;
    /**
     * Limit how many TrainingRegisterUsers to delete.
     */
    limit?: number;
};
/**
 * TrainingRegisterUser without action
 */
export type TrainingRegisterUserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRegisterUser
     */
    select?: Prisma.TrainingRegisterUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TrainingRegisterUser
     */
    omit?: Prisma.TrainingRegisterUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingRegisterUserInclude<ExtArgs> | null;
};
//# sourceMappingURL=TrainingRegisterUser.d.ts.map