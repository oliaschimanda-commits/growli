import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Product: "Product";
    readonly Training: "Training";
    readonly TrainingRegisterUser: "TrainingRegisterUser";
    readonly FarmingInformation: "FarmingInformation";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly userId: "userId";
    readonly email: "email";
    readonly password: "password";
    readonly profileImage: "profileImage";
    readonly role: "role";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly bio: "bio";
    readonly country: "country";
    readonly state: "state";
    readonly city: "city";
    readonly farming: "farming";
    readonly scale: "scale";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly productId: "productId";
    readonly userId: "userId";
    readonly price: "price";
    readonly pronductImage: "pronductImage";
    readonly quantity: "quantity";
    readonly farmersName: "farmersName";
    readonly productName: "productName";
    readonly phoneNumber: "phoneNumber";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const TrainingScalarFieldEnum: {
    readonly trainingId: "trainingId";
    readonly authorId: "authorId";
    readonly title: "title";
    readonly trainingDate: "trainingDate";
    readonly trainingImage: "trainingImage";
    readonly country: "country";
    readonly state: "state";
    readonly city: "city";
    readonly place: "place";
    readonly description: "description";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TrainingScalarFieldEnum = (typeof TrainingScalarFieldEnum)[keyof typeof TrainingScalarFieldEnum];
export declare const TrainingRegisterUserScalarFieldEnum: {
    readonly registryId: "registryId";
    readonly userId: "userId";
    readonly trainingEventId: "trainingEventId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TrainingRegisterUserScalarFieldEnum = (typeof TrainingRegisterUserScalarFieldEnum)[keyof typeof TrainingRegisterUserScalarFieldEnum];
export declare const FarmingInformationScalarFieldEnum: {
    readonly farmingId: "farmingId";
    readonly authorId: "authorId";
    readonly farmingInfoImage: "farmingInfoImage";
    readonly status: "status";
    readonly title: "title";
    readonly article: "article";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FarmingInformationScalarFieldEnum = (typeof FarmingInformationScalarFieldEnum)[keyof typeof FarmingInformationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly userId: "userId";
    readonly email: "email";
    readonly password: "password";
    readonly profileImage: "profileImage";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly bio: "bio";
    readonly country: "country";
    readonly state: "state";
    readonly city: "city";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export declare const ProductOrderByRelevanceFieldEnum: {
    readonly productId: "productId";
    readonly userId: "userId";
    readonly pronductImage: "pronductImage";
    readonly farmersName: "farmersName";
    readonly productName: "productName";
    readonly phoneNumber: "phoneNumber";
};
export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum];
export declare const TrainingOrderByRelevanceFieldEnum: {
    readonly trainingId: "trainingId";
    readonly authorId: "authorId";
    readonly title: "title";
    readonly trainingImage: "trainingImage";
    readonly country: "country";
    readonly state: "state";
    readonly city: "city";
    readonly place: "place";
    readonly description: "description";
};
export type TrainingOrderByRelevanceFieldEnum = (typeof TrainingOrderByRelevanceFieldEnum)[keyof typeof TrainingOrderByRelevanceFieldEnum];
export declare const TrainingRegisterUserOrderByRelevanceFieldEnum: {
    readonly registryId: "registryId";
    readonly userId: "userId";
    readonly trainingEventId: "trainingEventId";
};
export type TrainingRegisterUserOrderByRelevanceFieldEnum = (typeof TrainingRegisterUserOrderByRelevanceFieldEnum)[keyof typeof TrainingRegisterUserOrderByRelevanceFieldEnum];
export declare const FarmingInformationOrderByRelevanceFieldEnum: {
    readonly farmingId: "farmingId";
    readonly authorId: "authorId";
    readonly farmingInfoImage: "farmingInfoImage";
    readonly title: "title";
    readonly article: "article";
};
export type FarmingInformationOrderByRelevanceFieldEnum = (typeof FarmingInformationOrderByRelevanceFieldEnum)[keyof typeof FarmingInformationOrderByRelevanceFieldEnum];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map