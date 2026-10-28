import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Training
 *
 */
export type TrainingModel = runtime.Types.Result.DefaultSelection<Prisma.$TrainingPayload>;
export type AggregateTraining = {
    _count: TrainingCountAggregateOutputType | null;
    _min: TrainingMinAggregateOutputType | null;
    _max: TrainingMaxAggregateOutputType | null;
};
export type TrainingMinAggregateOutputType = {
    trainingId: string | null;
    authorId: string | null;
    title: string | null;
    trainingDate: Date | null;
    trainingImage: string | null;
    country: string | null;
    state: string | null;
    city: string | null;
    place: string | null;
    description: string | null;
    status: $Enums.TrainingStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TrainingMaxAggregateOutputType = {
    trainingId: string | null;
    authorId: string | null;
    title: string | null;
    trainingDate: Date | null;
    trainingImage: string | null;
    country: string | null;
    state: string | null;
    city: string | null;
    place: string | null;
    description: string | null;
    status: $Enums.TrainingStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TrainingCountAggregateOutputType = {
    trainingId: number;
    authorId: number;
    title: number;
    trainingDate: number;
    trainingImage: number;
    country: number;
    state: number;
    city: number;
    place: number;
    description: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TrainingMinAggregateInputType = {
    trainingId?: true;
    authorId?: true;
    title?: true;
    trainingDate?: true;
    trainingImage?: true;
    country?: true;
    state?: true;
    city?: true;
    place?: true;
    description?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TrainingMaxAggregateInputType = {
    trainingId?: true;
    authorId?: true;
    title?: true;
    trainingDate?: true;
    trainingImage?: true;
    country?: true;
    state?: true;
    city?: true;
    place?: true;
    description?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TrainingCountAggregateInputType = {
    trainingId?: true;
    authorId?: true;
    title?: true;
    trainingDate?: true;
    trainingImage?: true;
    country?: true;
    state?: true;
    city?: true;
    place?: true;
    description?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TrainingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Training to aggregate.
     */
    where?: Prisma.TrainingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Trainings to fetch.
     */
    orderBy?: Prisma.TrainingOrderByWithRelationInput | Prisma.TrainingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TrainingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Trainings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Trainings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Trainings
    **/
    _count?: true | TrainingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TrainingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TrainingMaxAggregateInputType;
};
export type GetTrainingAggregateType<T extends TrainingAggregateArgs> = {
    [P in keyof T & keyof AggregateTraining]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTraining[P]> : Prisma.GetScalarType<T[P], AggregateTraining[P]>;
};
export type TrainingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainingWhereInput;
    orderBy?: Prisma.TrainingOrderByWithAggregationInput | Prisma.TrainingOrderByWithAggregationInput[];
    by: Prisma.TrainingScalarFieldEnum[] | Prisma.TrainingScalarFieldEnum;
    having?: Prisma.TrainingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrainingCountAggregateInputType | true;
    _min?: TrainingMinAggregateInputType;
    _max?: TrainingMaxAggregateInputType;
};
export type TrainingGroupByOutputType = {
    trainingId: string;
    authorId: string;
    title: string;
    trainingDate: Date;
    trainingImage: string | null;
    country: string | null;
    state: string | null;
    city: string | null;
    place: string | null;
    description: string | null;
    status: $Enums.TrainingStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: TrainingCountAggregateOutputType | null;
    _min: TrainingMinAggregateOutputType | null;
    _max: TrainingMaxAggregateOutputType | null;
};
export type GetTrainingGroupByPayload<T extends TrainingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TrainingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TrainingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TrainingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TrainingGroupByOutputType[P]>;
}>>;
export type TrainingWhereInput = {
    AND?: Prisma.TrainingWhereInput | Prisma.TrainingWhereInput[];
    OR?: Prisma.TrainingWhereInput[];
    NOT?: Prisma.TrainingWhereInput | Prisma.TrainingWhereInput[];
    trainingId?: Prisma.StringFilter<"Training"> | string;
    authorId?: Prisma.StringFilter<"Training"> | string;
    title?: Prisma.StringFilter<"Training"> | string;
    trainingDate?: Prisma.DateTimeFilter<"Training"> | Date | string;
    trainingImage?: Prisma.StringNullableFilter<"Training"> | string | null;
    country?: Prisma.StringNullableFilter<"Training"> | string | null;
    state?: Prisma.StringNullableFilter<"Training"> | string | null;
    city?: Prisma.StringNullableFilter<"Training"> | string | null;
    place?: Prisma.StringNullableFilter<"Training"> | string | null;
    description?: Prisma.StringNullableFilter<"Training"> | string | null;
    status?: Prisma.EnumTrainingStatusFilter<"Training"> | $Enums.TrainingStatus;
    createdAt?: Prisma.DateTimeFilter<"Training"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Training"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    trainingRegisterUser?: Prisma.TrainingRegisterUserListRelationFilter;
};
export type TrainingOrderByWithRelationInput = {
    trainingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    trainingDate?: Prisma.SortOrder;
    trainingImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    place?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    trainingRegisterUser?: Prisma.TrainingRegisterUserOrderByRelationAggregateInput;
    _relevance?: Prisma.TrainingOrderByRelevanceInput;
};
export type TrainingWhereUniqueInput = Prisma.AtLeast<{
    trainingId?: string;
    AND?: Prisma.TrainingWhereInput | Prisma.TrainingWhereInput[];
    OR?: Prisma.TrainingWhereInput[];
    NOT?: Prisma.TrainingWhereInput | Prisma.TrainingWhereInput[];
    authorId?: Prisma.StringFilter<"Training"> | string;
    title?: Prisma.StringFilter<"Training"> | string;
    trainingDate?: Prisma.DateTimeFilter<"Training"> | Date | string;
    trainingImage?: Prisma.StringNullableFilter<"Training"> | string | null;
    country?: Prisma.StringNullableFilter<"Training"> | string | null;
    state?: Prisma.StringNullableFilter<"Training"> | string | null;
    city?: Prisma.StringNullableFilter<"Training"> | string | null;
    place?: Prisma.StringNullableFilter<"Training"> | string | null;
    description?: Prisma.StringNullableFilter<"Training"> | string | null;
    status?: Prisma.EnumTrainingStatusFilter<"Training"> | $Enums.TrainingStatus;
    createdAt?: Prisma.DateTimeFilter<"Training"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Training"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    trainingRegisterUser?: Prisma.TrainingRegisterUserListRelationFilter;
}, "trainingId">;
export type TrainingOrderByWithAggregationInput = {
    trainingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    trainingDate?: Prisma.SortOrder;
    trainingImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    place?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TrainingCountOrderByAggregateInput;
    _max?: Prisma.TrainingMaxOrderByAggregateInput;
    _min?: Prisma.TrainingMinOrderByAggregateInput;
};
export type TrainingScalarWhereWithAggregatesInput = {
    AND?: Prisma.TrainingScalarWhereWithAggregatesInput | Prisma.TrainingScalarWhereWithAggregatesInput[];
    OR?: Prisma.TrainingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TrainingScalarWhereWithAggregatesInput | Prisma.TrainingScalarWhereWithAggregatesInput[];
    trainingId?: Prisma.StringWithAggregatesFilter<"Training"> | string;
    authorId?: Prisma.StringWithAggregatesFilter<"Training"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Training"> | string;
    trainingDate?: Prisma.DateTimeWithAggregatesFilter<"Training"> | Date | string;
    trainingImage?: Prisma.StringNullableWithAggregatesFilter<"Training"> | string | null;
    country?: Prisma.StringNullableWithAggregatesFilter<"Training"> | string | null;
    state?: Prisma.StringNullableWithAggregatesFilter<"Training"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"Training"> | string | null;
    place?: Prisma.StringNullableWithAggregatesFilter<"Training"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Training"> | string | null;
    status?: Prisma.EnumTrainingStatusWithAggregatesFilter<"Training"> | $Enums.TrainingStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Training"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Training"> | Date | string;
};
export type TrainingCreateInput = {
    trainingId?: string;
    title: string;
    trainingDate: Date | string;
    trainingImage?: string | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.TrainingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTrainingInput;
    trainingRegisterUser?: Prisma.TrainingRegisterUserCreateNestedManyWithoutTrainimgInput;
};
export type TrainingUncheckedCreateInput = {
    trainingId?: string;
    authorId: string;
    title: string;
    trainingDate: Date | string;
    trainingImage?: string | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.TrainingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trainingRegisterUser?: Prisma.TrainingRegisterUserUncheckedCreateNestedManyWithoutTrainimgInput;
};
export type TrainingUpdateInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTrainingNestedInput;
    trainingRegisterUser?: Prisma.TrainingRegisterUserUpdateManyWithoutTrainimgNestedInput;
};
export type TrainingUncheckedUpdateInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingRegisterUser?: Prisma.TrainingRegisterUserUncheckedUpdateManyWithoutTrainimgNestedInput;
};
export type TrainingCreateManyInput = {
    trainingId?: string;
    authorId: string;
    title: string;
    trainingDate: Date | string;
    trainingImage?: string | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.TrainingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrainingUpdateManyMutationInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingUncheckedUpdateManyInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingListRelationFilter = {
    every?: Prisma.TrainingWhereInput;
    some?: Prisma.TrainingWhereInput;
    none?: Prisma.TrainingWhereInput;
};
export type TrainingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TrainingOrderByRelevanceInput = {
    fields: Prisma.TrainingOrderByRelevanceFieldEnum | Prisma.TrainingOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type TrainingCountOrderByAggregateInput = {
    trainingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    trainingDate?: Prisma.SortOrder;
    trainingImage?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    place?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrainingMaxOrderByAggregateInput = {
    trainingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    trainingDate?: Prisma.SortOrder;
    trainingImage?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    place?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrainingMinOrderByAggregateInput = {
    trainingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    trainingDate?: Prisma.SortOrder;
    trainingImage?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    place?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrainingScalarRelationFilter = {
    is?: Prisma.TrainingWhereInput;
    isNot?: Prisma.TrainingWhereInput;
};
export type TrainingCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TrainingCreateWithoutUserInput, Prisma.TrainingUncheckedCreateWithoutUserInput> | Prisma.TrainingCreateWithoutUserInput[] | Prisma.TrainingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TrainingCreateOrConnectWithoutUserInput | Prisma.TrainingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TrainingCreateManyUserInputEnvelope;
    connect?: Prisma.TrainingWhereUniqueInput | Prisma.TrainingWhereUniqueInput[];
};
export type TrainingUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TrainingCreateWithoutUserInput, Prisma.TrainingUncheckedCreateWithoutUserInput> | Prisma.TrainingCreateWithoutUserInput[] | Prisma.TrainingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TrainingCreateOrConnectWithoutUserInput | Prisma.TrainingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TrainingCreateManyUserInputEnvelope;
    connect?: Prisma.TrainingWhereUniqueInput | Prisma.TrainingWhereUniqueInput[];
};
export type TrainingUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TrainingCreateWithoutUserInput, Prisma.TrainingUncheckedCreateWithoutUserInput> | Prisma.TrainingCreateWithoutUserInput[] | Prisma.TrainingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TrainingCreateOrConnectWithoutUserInput | Prisma.TrainingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TrainingUpsertWithWhereUniqueWithoutUserInput | Prisma.TrainingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TrainingCreateManyUserInputEnvelope;
    set?: Prisma.TrainingWhereUniqueInput | Prisma.TrainingWhereUniqueInput[];
    disconnect?: Prisma.TrainingWhereUniqueInput | Prisma.TrainingWhereUniqueInput[];
    delete?: Prisma.TrainingWhereUniqueInput | Prisma.TrainingWhereUniqueInput[];
    connect?: Prisma.TrainingWhereUniqueInput | Prisma.TrainingWhereUniqueInput[];
    update?: Prisma.TrainingUpdateWithWhereUniqueWithoutUserInput | Prisma.TrainingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TrainingUpdateManyWithWhereWithoutUserInput | Prisma.TrainingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TrainingScalarWhereInput | Prisma.TrainingScalarWhereInput[];
};
export type TrainingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TrainingCreateWithoutUserInput, Prisma.TrainingUncheckedCreateWithoutUserInput> | Prisma.TrainingCreateWithoutUserInput[] | Prisma.TrainingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TrainingCreateOrConnectWithoutUserInput | Prisma.TrainingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TrainingUpsertWithWhereUniqueWithoutUserInput | Prisma.TrainingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TrainingCreateManyUserInputEnvelope;
    set?: Prisma.TrainingWhereUniqueInput | Prisma.TrainingWhereUniqueInput[];
    disconnect?: Prisma.TrainingWhereUniqueInput | Prisma.TrainingWhereUniqueInput[];
    delete?: Prisma.TrainingWhereUniqueInput | Prisma.TrainingWhereUniqueInput[];
    connect?: Prisma.TrainingWhereUniqueInput | Prisma.TrainingWhereUniqueInput[];
    update?: Prisma.TrainingUpdateWithWhereUniqueWithoutUserInput | Prisma.TrainingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TrainingUpdateManyWithWhereWithoutUserInput | Prisma.TrainingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TrainingScalarWhereInput | Prisma.TrainingScalarWhereInput[];
};
export type EnumTrainingStatusFieldUpdateOperationsInput = {
    set?: $Enums.TrainingStatus;
};
export type TrainingCreateNestedOneWithoutTrainingRegisterUserInput = {
    create?: Prisma.XOR<Prisma.TrainingCreateWithoutTrainingRegisterUserInput, Prisma.TrainingUncheckedCreateWithoutTrainingRegisterUserInput>;
    connectOrCreate?: Prisma.TrainingCreateOrConnectWithoutTrainingRegisterUserInput;
    connect?: Prisma.TrainingWhereUniqueInput;
};
export type TrainingUpdateOneRequiredWithoutTrainingRegisterUserNestedInput = {
    create?: Prisma.XOR<Prisma.TrainingCreateWithoutTrainingRegisterUserInput, Prisma.TrainingUncheckedCreateWithoutTrainingRegisterUserInput>;
    connectOrCreate?: Prisma.TrainingCreateOrConnectWithoutTrainingRegisterUserInput;
    upsert?: Prisma.TrainingUpsertWithoutTrainingRegisterUserInput;
    connect?: Prisma.TrainingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TrainingUpdateToOneWithWhereWithoutTrainingRegisterUserInput, Prisma.TrainingUpdateWithoutTrainingRegisterUserInput>, Prisma.TrainingUncheckedUpdateWithoutTrainingRegisterUserInput>;
};
export type TrainingCreateWithoutUserInput = {
    trainingId?: string;
    title: string;
    trainingDate: Date | string;
    trainingImage?: string | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.TrainingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trainingRegisterUser?: Prisma.TrainingRegisterUserCreateNestedManyWithoutTrainimgInput;
};
export type TrainingUncheckedCreateWithoutUserInput = {
    trainingId?: string;
    title: string;
    trainingDate: Date | string;
    trainingImage?: string | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.TrainingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trainingRegisterUser?: Prisma.TrainingRegisterUserUncheckedCreateNestedManyWithoutTrainimgInput;
};
export type TrainingCreateOrConnectWithoutUserInput = {
    where: Prisma.TrainingWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrainingCreateWithoutUserInput, Prisma.TrainingUncheckedCreateWithoutUserInput>;
};
export type TrainingCreateManyUserInputEnvelope = {
    data: Prisma.TrainingCreateManyUserInput | Prisma.TrainingCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TrainingUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TrainingWhereUniqueInput;
    update: Prisma.XOR<Prisma.TrainingUpdateWithoutUserInput, Prisma.TrainingUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TrainingCreateWithoutUserInput, Prisma.TrainingUncheckedCreateWithoutUserInput>;
};
export type TrainingUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TrainingWhereUniqueInput;
    data: Prisma.XOR<Prisma.TrainingUpdateWithoutUserInput, Prisma.TrainingUncheckedUpdateWithoutUserInput>;
};
export type TrainingUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TrainingScalarWhereInput;
    data: Prisma.XOR<Prisma.TrainingUpdateManyMutationInput, Prisma.TrainingUncheckedUpdateManyWithoutUserInput>;
};
export type TrainingScalarWhereInput = {
    AND?: Prisma.TrainingScalarWhereInput | Prisma.TrainingScalarWhereInput[];
    OR?: Prisma.TrainingScalarWhereInput[];
    NOT?: Prisma.TrainingScalarWhereInput | Prisma.TrainingScalarWhereInput[];
    trainingId?: Prisma.StringFilter<"Training"> | string;
    authorId?: Prisma.StringFilter<"Training"> | string;
    title?: Prisma.StringFilter<"Training"> | string;
    trainingDate?: Prisma.DateTimeFilter<"Training"> | Date | string;
    trainingImage?: Prisma.StringNullableFilter<"Training"> | string | null;
    country?: Prisma.StringNullableFilter<"Training"> | string | null;
    state?: Prisma.StringNullableFilter<"Training"> | string | null;
    city?: Prisma.StringNullableFilter<"Training"> | string | null;
    place?: Prisma.StringNullableFilter<"Training"> | string | null;
    description?: Prisma.StringNullableFilter<"Training"> | string | null;
    status?: Prisma.EnumTrainingStatusFilter<"Training"> | $Enums.TrainingStatus;
    createdAt?: Prisma.DateTimeFilter<"Training"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Training"> | Date | string;
};
export type TrainingCreateWithoutTrainingRegisterUserInput = {
    trainingId?: string;
    title: string;
    trainingDate: Date | string;
    trainingImage?: string | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.TrainingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTrainingInput;
};
export type TrainingUncheckedCreateWithoutTrainingRegisterUserInput = {
    trainingId?: string;
    authorId: string;
    title: string;
    trainingDate: Date | string;
    trainingImage?: string | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.TrainingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrainingCreateOrConnectWithoutTrainingRegisterUserInput = {
    where: Prisma.TrainingWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrainingCreateWithoutTrainingRegisterUserInput, Prisma.TrainingUncheckedCreateWithoutTrainingRegisterUserInput>;
};
export type TrainingUpsertWithoutTrainingRegisterUserInput = {
    update: Prisma.XOR<Prisma.TrainingUpdateWithoutTrainingRegisterUserInput, Prisma.TrainingUncheckedUpdateWithoutTrainingRegisterUserInput>;
    create: Prisma.XOR<Prisma.TrainingCreateWithoutTrainingRegisterUserInput, Prisma.TrainingUncheckedCreateWithoutTrainingRegisterUserInput>;
    where?: Prisma.TrainingWhereInput;
};
export type TrainingUpdateToOneWithWhereWithoutTrainingRegisterUserInput = {
    where?: Prisma.TrainingWhereInput;
    data: Prisma.XOR<Prisma.TrainingUpdateWithoutTrainingRegisterUserInput, Prisma.TrainingUncheckedUpdateWithoutTrainingRegisterUserInput>;
};
export type TrainingUpdateWithoutTrainingRegisterUserInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTrainingNestedInput;
};
export type TrainingUncheckedUpdateWithoutTrainingRegisterUserInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingCreateManyUserInput = {
    trainingId?: string;
    title: string;
    trainingDate: Date | string;
    trainingImage?: string | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.TrainingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrainingUpdateWithoutUserInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingRegisterUser?: Prisma.TrainingRegisterUserUpdateManyWithoutTrainimgNestedInput;
};
export type TrainingUncheckedUpdateWithoutUserInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingRegisterUser?: Prisma.TrainingRegisterUserUncheckedUpdateManyWithoutTrainimgNestedInput;
};
export type TrainingUncheckedUpdateManyWithoutUserInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type TrainingCountOutputType
 */
export type TrainingCountOutputType = {
    trainingRegisterUser: number;
};
export type TrainingCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trainingRegisterUser?: boolean | TrainingCountOutputTypeCountTrainingRegisterUserArgs;
};
/**
 * TrainingCountOutputType without action
 */
export type TrainingCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingCountOutputType
     */
    select?: Prisma.TrainingCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TrainingCountOutputType without action
 */
export type TrainingCountOutputTypeCountTrainingRegisterUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainingRegisterUserWhereInput;
};
export type TrainingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    trainingId?: boolean;
    authorId?: boolean;
    title?: boolean;
    trainingDate?: boolean;
    trainingImage?: boolean;
    country?: boolean;
    state?: boolean;
    city?: boolean;
    place?: boolean;
    description?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    trainingRegisterUser?: boolean | Prisma.Training$trainingRegisterUserArgs<ExtArgs>;
    _count?: boolean | Prisma.TrainingCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["training"]>;
export type TrainingSelectScalar = {
    trainingId?: boolean;
    authorId?: boolean;
    title?: boolean;
    trainingDate?: boolean;
    trainingImage?: boolean;
    country?: boolean;
    state?: boolean;
    city?: boolean;
    place?: boolean;
    description?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TrainingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"trainingId" | "authorId" | "title" | "trainingDate" | "trainingImage" | "country" | "state" | "city" | "place" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["training"]>;
export type TrainingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    trainingRegisterUser?: boolean | Prisma.Training$trainingRegisterUserArgs<ExtArgs>;
    _count?: boolean | Prisma.TrainingCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $TrainingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Training";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        trainingRegisterUser: Prisma.$TrainingRegisterUserPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        trainingId: string;
        authorId: string;
        title: string;
        trainingDate: Date;
        trainingImage: string | null;
        country: string | null;
        state: string | null;
        city: string | null;
        place: string | null;
        description: string | null;
        status: $Enums.TrainingStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["training"]>;
    composites: {};
};
export type TrainingGetPayload<S extends boolean | null | undefined | TrainingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TrainingPayload, S>;
export type TrainingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TrainingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TrainingCountAggregateInputType | true;
};
export interface TrainingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Training'];
        meta: {
            name: 'Training';
        };
    };
    /**
     * Find zero or one Training that matches the filter.
     * @param {TrainingFindUniqueArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingFindUniqueArgs>(args: Prisma.SelectSubset<T, TrainingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TrainingClient<runtime.Types.Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Training that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainingFindUniqueOrThrowArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TrainingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrainingClient<runtime.Types.Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Training that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingFindFirstArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingFindFirstArgs>(args?: Prisma.SelectSubset<T, TrainingFindFirstArgs<ExtArgs>>): Prisma.Prisma__TrainingClient<runtime.Types.Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Training that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingFindFirstOrThrowArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TrainingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrainingClient<runtime.Types.Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Trainings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trainings
     * const trainings = await prisma.training.findMany()
     *
     * // Get first 10 Trainings
     * const trainings = await prisma.training.findMany({ take: 10 })
     *
     * // Only select the `trainingId`
     * const trainingWithTrainingIdOnly = await prisma.training.findMany({ select: { trainingId: true } })
     *
     */
    findMany<T extends TrainingFindManyArgs>(args?: Prisma.SelectSubset<T, TrainingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Training.
     * @param {TrainingCreateArgs} args - Arguments to create a Training.
     * @example
     * // Create one Training
     * const Training = await prisma.training.create({
     *   data: {
     *     // ... data to create a Training
     *   }
     * })
     *
     */
    create<T extends TrainingCreateArgs>(args: Prisma.SelectSubset<T, TrainingCreateArgs<ExtArgs>>): Prisma.Prisma__TrainingClient<runtime.Types.Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Trainings.
     * @param {TrainingCreateManyArgs} args - Arguments to create many Trainings.
     * @example
     * // Create many Trainings
     * const training = await prisma.training.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TrainingCreateManyArgs>(args?: Prisma.SelectSubset<T, TrainingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Training.
     * @param {TrainingDeleteArgs} args - Arguments to delete one Training.
     * @example
     * // Delete one Training
     * const Training = await prisma.training.delete({
     *   where: {
     *     // ... filter to delete one Training
     *   }
     * })
     *
     */
    delete<T extends TrainingDeleteArgs>(args: Prisma.SelectSubset<T, TrainingDeleteArgs<ExtArgs>>): Prisma.Prisma__TrainingClient<runtime.Types.Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Training.
     * @param {TrainingUpdateArgs} args - Arguments to update one Training.
     * @example
     * // Update one Training
     * const training = await prisma.training.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TrainingUpdateArgs>(args: Prisma.SelectSubset<T, TrainingUpdateArgs<ExtArgs>>): Prisma.Prisma__TrainingClient<runtime.Types.Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Trainings.
     * @param {TrainingDeleteManyArgs} args - Arguments to filter Trainings to delete.
     * @example
     * // Delete a few Trainings
     * const { count } = await prisma.training.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TrainingDeleteManyArgs>(args?: Prisma.SelectSubset<T, TrainingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Trainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trainings
     * const training = await prisma.training.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TrainingUpdateManyArgs>(args: Prisma.SelectSubset<T, TrainingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Training.
     * @param {TrainingUpsertArgs} args - Arguments to update or create a Training.
     * @example
     * // Update or create a Training
     * const training = await prisma.training.upsert({
     *   create: {
     *     // ... data to create a Training
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Training we want to update
     *   }
     * })
     */
    upsert<T extends TrainingUpsertArgs>(args: Prisma.SelectSubset<T, TrainingUpsertArgs<ExtArgs>>): Prisma.Prisma__TrainingClient<runtime.Types.Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Trainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingCountArgs} args - Arguments to filter Trainings to count.
     * @example
     * // Count the number of Trainings
     * const count = await prisma.training.count({
     *   where: {
     *     // ... the filter for the Trainings we want to count
     *   }
     * })
    **/
    count<T extends TrainingCountArgs>(args?: Prisma.Subset<T, TrainingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TrainingCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Training.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainingAggregateArgs>(args: Prisma.Subset<T, TrainingAggregateArgs>): Prisma.PrismaPromise<GetTrainingAggregateType<T>>;
    /**
     * Group by Training.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TrainingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TrainingGroupByArgs['orderBy'];
    } : {
        orderBy?: TrainingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TrainingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Training model
     */
    readonly fields: TrainingFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Training.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TrainingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    trainingRegisterUser<T extends Prisma.Training$trainingRegisterUserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Training$trainingRegisterUserArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrainingRegisterUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Training model
 */
export interface TrainingFieldRefs {
    readonly trainingId: Prisma.FieldRef<"Training", 'String'>;
    readonly authorId: Prisma.FieldRef<"Training", 'String'>;
    readonly title: Prisma.FieldRef<"Training", 'String'>;
    readonly trainingDate: Prisma.FieldRef<"Training", 'DateTime'>;
    readonly trainingImage: Prisma.FieldRef<"Training", 'String'>;
    readonly country: Prisma.FieldRef<"Training", 'String'>;
    readonly state: Prisma.FieldRef<"Training", 'String'>;
    readonly city: Prisma.FieldRef<"Training", 'String'>;
    readonly place: Prisma.FieldRef<"Training", 'String'>;
    readonly description: Prisma.FieldRef<"Training", 'String'>;
    readonly status: Prisma.FieldRef<"Training", 'TrainingStatus'>;
    readonly createdAt: Prisma.FieldRef<"Training", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Training", 'DateTime'>;
}
/**
 * Training findUnique
 */
export type TrainingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: Prisma.TrainingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Training
     */
    omit?: Prisma.TrainingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingInclude<ExtArgs> | null;
    /**
     * Filter, which Training to fetch.
     */
    where: Prisma.TrainingWhereUniqueInput;
};
/**
 * Training findUniqueOrThrow
 */
export type TrainingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: Prisma.TrainingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Training
     */
    omit?: Prisma.TrainingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingInclude<ExtArgs> | null;
    /**
     * Filter, which Training to fetch.
     */
    where: Prisma.TrainingWhereUniqueInput;
};
/**
 * Training findFirst
 */
export type TrainingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: Prisma.TrainingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Training
     */
    omit?: Prisma.TrainingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingInclude<ExtArgs> | null;
    /**
     * Filter, which Training to fetch.
     */
    where?: Prisma.TrainingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Trainings to fetch.
     */
    orderBy?: Prisma.TrainingOrderByWithRelationInput | Prisma.TrainingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Trainings.
     */
    cursor?: Prisma.TrainingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Trainings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Trainings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Trainings.
     */
    distinct?: Prisma.TrainingScalarFieldEnum | Prisma.TrainingScalarFieldEnum[];
};
/**
 * Training findFirstOrThrow
 */
export type TrainingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: Prisma.TrainingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Training
     */
    omit?: Prisma.TrainingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingInclude<ExtArgs> | null;
    /**
     * Filter, which Training to fetch.
     */
    where?: Prisma.TrainingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Trainings to fetch.
     */
    orderBy?: Prisma.TrainingOrderByWithRelationInput | Prisma.TrainingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Trainings.
     */
    cursor?: Prisma.TrainingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Trainings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Trainings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Trainings.
     */
    distinct?: Prisma.TrainingScalarFieldEnum | Prisma.TrainingScalarFieldEnum[];
};
/**
 * Training findMany
 */
export type TrainingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: Prisma.TrainingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Training
     */
    omit?: Prisma.TrainingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingInclude<ExtArgs> | null;
    /**
     * Filter, which Trainings to fetch.
     */
    where?: Prisma.TrainingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Trainings to fetch.
     */
    orderBy?: Prisma.TrainingOrderByWithRelationInput | Prisma.TrainingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Trainings.
     */
    cursor?: Prisma.TrainingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Trainings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Trainings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Trainings.
     */
    distinct?: Prisma.TrainingScalarFieldEnum | Prisma.TrainingScalarFieldEnum[];
};
/**
 * Training create
 */
export type TrainingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: Prisma.TrainingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Training
     */
    omit?: Prisma.TrainingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingInclude<ExtArgs> | null;
    /**
     * The data needed to create a Training.
     */
    data: Prisma.XOR<Prisma.TrainingCreateInput, Prisma.TrainingUncheckedCreateInput>;
};
/**
 * Training createMany
 */
export type TrainingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trainings.
     */
    data: Prisma.TrainingCreateManyInput | Prisma.TrainingCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Training update
 */
export type TrainingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: Prisma.TrainingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Training
     */
    omit?: Prisma.TrainingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingInclude<ExtArgs> | null;
    /**
     * The data needed to update a Training.
     */
    data: Prisma.XOR<Prisma.TrainingUpdateInput, Prisma.TrainingUncheckedUpdateInput>;
    /**
     * Choose, which Training to update.
     */
    where: Prisma.TrainingWhereUniqueInput;
};
/**
 * Training updateMany
 */
export type TrainingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Trainings.
     */
    data: Prisma.XOR<Prisma.TrainingUpdateManyMutationInput, Prisma.TrainingUncheckedUpdateManyInput>;
    /**
     * Filter which Trainings to update
     */
    where?: Prisma.TrainingWhereInput;
    /**
     * Limit how many Trainings to update.
     */
    limit?: number;
};
/**
 * Training upsert
 */
export type TrainingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: Prisma.TrainingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Training
     */
    omit?: Prisma.TrainingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingInclude<ExtArgs> | null;
    /**
     * The filter to search for the Training to update in case it exists.
     */
    where: Prisma.TrainingWhereUniqueInput;
    /**
     * In case the Training found by the `where` argument doesn't exist, create a new Training with this data.
     */
    create: Prisma.XOR<Prisma.TrainingCreateInput, Prisma.TrainingUncheckedCreateInput>;
    /**
     * In case the Training was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TrainingUpdateInput, Prisma.TrainingUncheckedUpdateInput>;
};
/**
 * Training delete
 */
export type TrainingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: Prisma.TrainingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Training
     */
    omit?: Prisma.TrainingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingInclude<ExtArgs> | null;
    /**
     * Filter which Training to delete.
     */
    where: Prisma.TrainingWhereUniqueInput;
};
/**
 * Training deleteMany
 */
export type TrainingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Trainings to delete
     */
    where?: Prisma.TrainingWhereInput;
    /**
     * Limit how many Trainings to delete.
     */
    limit?: number;
};
/**
 * Training.trainingRegisterUser
 */
export type Training$trainingRegisterUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.TrainingRegisterUserWhereInput;
    orderBy?: Prisma.TrainingRegisterUserOrderByWithRelationInput | Prisma.TrainingRegisterUserOrderByWithRelationInput[];
    cursor?: Prisma.TrainingRegisterUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrainingRegisterUserScalarFieldEnum | Prisma.TrainingRegisterUserScalarFieldEnum[];
};
/**
 * Training without action
 */
export type TrainingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: Prisma.TrainingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Training
     */
    omit?: Prisma.TrainingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrainingInclude<ExtArgs> | null;
};
//# sourceMappingURL=Training.d.ts.map