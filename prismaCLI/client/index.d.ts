
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model courses
 * 
 */
export type courses = $Result.DefaultSelection<Prisma.$coursesPayload>
/**
 * Model ucRel
 * 
 */
export type ucRel = $Result.DefaultSelection<Prisma.$ucRelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const userType: {
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT',
  ADMIN: 'ADMIN'
};

export type userType = (typeof userType)[keyof typeof userType]


export const relType: {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  CREATOR: 'CREATOR'
};

export type relType = (typeof relType)[keyof typeof relType]

}

export type userType = $Enums.userType

export const userType: typeof $Enums.userType

export type relType = $Enums.relType

export const relType: typeof $Enums.relType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courses`: Exposes CRUD operations for the **courses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.courses.findMany()
    * ```
    */
  get courses(): Prisma.coursesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ucRel`: Exposes CRUD operations for the **ucRel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UcRels
    * const ucRels = await prisma.ucRel.findMany()
    * ```
    */
  get ucRel(): Prisma.ucRelDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    courses: 'courses',
    ucRel: 'ucRel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "courses" | "ucRel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      courses: {
        payload: Prisma.$coursesPayload<ExtArgs>
        fields: Prisma.coursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.coursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.coursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          findFirst: {
            args: Prisma.coursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.coursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          findMany: {
            args: Prisma.coursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>[]
          }
          create: {
            args: Prisma.coursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          createMany: {
            args: Prisma.coursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.coursesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>[]
          }
          delete: {
            args: Prisma.coursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          update: {
            args: Prisma.coursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          deleteMany: {
            args: Prisma.coursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.coursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.coursesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>[]
          }
          upsert: {
            args: Prisma.coursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          aggregate: {
            args: Prisma.CoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourses>
          }
          groupBy: {
            args: Prisma.coursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.coursesCountArgs<ExtArgs>
            result: $Utils.Optional<CoursesCountAggregateOutputType> | number
          }
        }
      }
      ucRel: {
        payload: Prisma.$ucRelPayload<ExtArgs>
        fields: Prisma.ucRelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ucRelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ucRelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ucRelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ucRelPayload>
          }
          findFirst: {
            args: Prisma.ucRelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ucRelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ucRelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ucRelPayload>
          }
          findMany: {
            args: Prisma.ucRelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ucRelPayload>[]
          }
          create: {
            args: Prisma.ucRelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ucRelPayload>
          }
          createMany: {
            args: Prisma.ucRelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ucRelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ucRelPayload>[]
          }
          delete: {
            args: Prisma.ucRelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ucRelPayload>
          }
          update: {
            args: Prisma.ucRelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ucRelPayload>
          }
          deleteMany: {
            args: Prisma.ucRelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ucRelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ucRelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ucRelPayload>[]
          }
          upsert: {
            args: Prisma.ucRelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ucRelPayload>
          }
          aggregate: {
            args: Prisma.UcRelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUcRel>
          }
          groupBy: {
            args: Prisma.ucRelGroupByArgs<ExtArgs>
            result: $Utils.Optional<UcRelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ucRelCountArgs<ExtArgs>
            result: $Utils.Optional<UcRelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    courses?: coursesOmit
    ucRel?: ucRelOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    ucRel: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ucRel?: boolean | UsersCountOutputTypeCountUcRelArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUcRelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ucRelWhereInput
  }


  /**
   * Count Type CoursesCountOutputType
   */

  export type CoursesCountOutputType = {
    ucRel: number
  }

  export type CoursesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ucRel?: boolean | CoursesCountOutputTypeCountUcRelArgs
  }

  // Custom InputTypes
  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursesCountOutputType
     */
    select?: CoursesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeCountUcRelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ucRelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    uid: string | null
    name: string | null
    pword: string | null
    type: $Enums.userType | null
    creAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    uid: string | null
    name: string | null
    pword: string | null
    type: $Enums.userType | null
    creAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    uid: number
    name: number
    pword: number
    type: number
    creAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    uid?: true
    name?: true
    pword?: true
    type?: true
    creAt?: true
  }

  export type UsersMaxAggregateInputType = {
    uid?: true
    name?: true
    pword?: true
    type?: true
    creAt?: true
  }

  export type UsersCountAggregateInputType = {
    uid?: true
    name?: true
    pword?: true
    type?: true
    creAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    uid: string
    name: string
    pword: string
    type: $Enums.userType
    creAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    name?: boolean
    pword?: boolean
    type?: boolean
    creAt?: boolean
    ucRel?: boolean | users$ucRelArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    name?: boolean
    pword?: boolean
    type?: boolean
    creAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    name?: boolean
    pword?: boolean
    type?: boolean
    creAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    uid?: boolean
    name?: boolean
    pword?: boolean
    type?: boolean
    creAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "name" | "pword" | "type" | "creAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ucRel?: boolean | users$ucRelArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      ucRel: Prisma.$ucRelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      name: string
      pword: string
      type: $Enums.userType
      creAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const usersWithUidOnly = await prisma.users.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `uid`
     * const usersWithUidOnly = await prisma.users.createManyAndReturn({
     *   select: { uid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `uid`
     * const usersWithUidOnly = await prisma.users.updateManyAndReturn({
     *   select: { uid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ucRel<T extends users$ucRelArgs<ExtArgs> = {}>(args?: Subset<T, users$ucRelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ucRelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly uid: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly pword: FieldRef<"users", 'String'>
    readonly type: FieldRef<"users", 'userType'>
    readonly creAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.ucRel
   */
  export type users$ucRelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelInclude<ExtArgs> | null
    where?: ucRelWhereInput
    orderBy?: ucRelOrderByWithRelationInput | ucRelOrderByWithRelationInput[]
    cursor?: ucRelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UcRelScalarFieldEnum | UcRelScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model courses
   */

  export type AggregateCourses = {
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  export type CoursesAvgAggregateOutputType = {
    cred: number | null
  }

  export type CoursesSumAggregateOutputType = {
    cred: number | null
  }

  export type CoursesMinAggregateOutputType = {
    cid: string | null
    name: string | null
    desc: string | null
    cred: number | null
    creAt: Date | null
  }

  export type CoursesMaxAggregateOutputType = {
    cid: string | null
    name: string | null
    desc: string | null
    cred: number | null
    creAt: Date | null
  }

  export type CoursesCountAggregateOutputType = {
    cid: number
    name: number
    desc: number
    cred: number
    creAt: number
    _all: number
  }


  export type CoursesAvgAggregateInputType = {
    cred?: true
  }

  export type CoursesSumAggregateInputType = {
    cred?: true
  }

  export type CoursesMinAggregateInputType = {
    cid?: true
    name?: true
    desc?: true
    cred?: true
    creAt?: true
  }

  export type CoursesMaxAggregateInputType = {
    cid?: true
    name?: true
    desc?: true
    cred?: true
    creAt?: true
  }

  export type CoursesCountAggregateInputType = {
    cid?: true
    name?: true
    desc?: true
    cred?: true
    creAt?: true
    _all?: true
  }

  export type CoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to aggregate.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursesMaxAggregateInputType
  }

  export type GetCoursesAggregateType<T extends CoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourses[P]>
      : GetScalarType<T[P], AggregateCourses[P]>
  }




  export type coursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coursesWhereInput
    orderBy?: coursesOrderByWithAggregationInput | coursesOrderByWithAggregationInput[]
    by: CoursesScalarFieldEnum[] | CoursesScalarFieldEnum
    having?: coursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursesCountAggregateInputType | true
    _avg?: CoursesAvgAggregateInputType
    _sum?: CoursesSumAggregateInputType
    _min?: CoursesMinAggregateInputType
    _max?: CoursesMaxAggregateInputType
  }

  export type CoursesGroupByOutputType = {
    cid: string
    name: string
    desc: string | null
    cred: number
    creAt: Date
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  type GetCoursesGroupByPayload<T extends coursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursesGroupByOutputType[P]>
            : GetScalarType<T[P], CoursesGroupByOutputType[P]>
        }
      >
    >


  export type coursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cid?: boolean
    name?: boolean
    desc?: boolean
    cred?: boolean
    creAt?: boolean
    ucRel?: boolean | courses$ucRelArgs<ExtArgs>
    _count?: boolean | CoursesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type coursesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cid?: boolean
    name?: boolean
    desc?: boolean
    cred?: boolean
    creAt?: boolean
  }, ExtArgs["result"]["courses"]>

  export type coursesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cid?: boolean
    name?: boolean
    desc?: boolean
    cred?: boolean
    creAt?: boolean
  }, ExtArgs["result"]["courses"]>

  export type coursesSelectScalar = {
    cid?: boolean
    name?: boolean
    desc?: boolean
    cred?: boolean
    creAt?: boolean
  }

  export type coursesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cid" | "name" | "desc" | "cred" | "creAt", ExtArgs["result"]["courses"]>
  export type coursesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ucRel?: boolean | courses$ucRelArgs<ExtArgs>
    _count?: boolean | CoursesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type coursesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type coursesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $coursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "courses"
    objects: {
      ucRel: Prisma.$ucRelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cid: string
      name: string
      desc: string | null
      cred: number
      creAt: Date
    }, ExtArgs["result"]["courses"]>
    composites: {}
  }

  type coursesGetPayload<S extends boolean | null | undefined | coursesDefaultArgs> = $Result.GetResult<Prisma.$coursesPayload, S>

  type coursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<coursesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursesCountAggregateInputType | true
    }

  export interface coursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['courses'], meta: { name: 'courses' } }
    /**
     * Find zero or one Courses that matches the filter.
     * @param {coursesFindUniqueArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends coursesFindUniqueArgs>(args: SelectSubset<T, coursesFindUniqueArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Courses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {coursesFindUniqueOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends coursesFindUniqueOrThrowArgs>(args: SelectSubset<T, coursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindFirstArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends coursesFindFirstArgs>(args?: SelectSubset<T, coursesFindFirstArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindFirstOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends coursesFindFirstOrThrowArgs>(args?: SelectSubset<T, coursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.courses.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.courses.findMany({ take: 10 })
     * 
     * // Only select the `cid`
     * const coursesWithCidOnly = await prisma.courses.findMany({ select: { cid: true } })
     * 
     */
    findMany<T extends coursesFindManyArgs>(args?: SelectSubset<T, coursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Courses.
     * @param {coursesCreateArgs} args - Arguments to create a Courses.
     * @example
     * // Create one Courses
     * const Courses = await prisma.courses.create({
     *   data: {
     *     // ... data to create a Courses
     *   }
     * })
     * 
     */
    create<T extends coursesCreateArgs>(args: SelectSubset<T, coursesCreateArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {coursesCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends coursesCreateManyArgs>(args?: SelectSubset<T, coursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {coursesCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `cid`
     * const coursesWithCidOnly = await prisma.courses.createManyAndReturn({
     *   select: { cid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends coursesCreateManyAndReturnArgs>(args?: SelectSubset<T, coursesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Courses.
     * @param {coursesDeleteArgs} args - Arguments to delete one Courses.
     * @example
     * // Delete one Courses
     * const Courses = await prisma.courses.delete({
     *   where: {
     *     // ... filter to delete one Courses
     *   }
     * })
     * 
     */
    delete<T extends coursesDeleteArgs>(args: SelectSubset<T, coursesDeleteArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Courses.
     * @param {coursesUpdateArgs} args - Arguments to update one Courses.
     * @example
     * // Update one Courses
     * const courses = await prisma.courses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends coursesUpdateArgs>(args: SelectSubset<T, coursesUpdateArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {coursesDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.courses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends coursesDeleteManyArgs>(args?: SelectSubset<T, coursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends coursesUpdateManyArgs>(args: SelectSubset<T, coursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {coursesUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `cid`
     * const coursesWithCidOnly = await prisma.courses.updateManyAndReturn({
     *   select: { cid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends coursesUpdateManyAndReturnArgs>(args: SelectSubset<T, coursesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Courses.
     * @param {coursesUpsertArgs} args - Arguments to update or create a Courses.
     * @example
     * // Update or create a Courses
     * const courses = await prisma.courses.upsert({
     *   create: {
     *     // ... data to create a Courses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courses we want to update
     *   }
     * })
     */
    upsert<T extends coursesUpsertArgs>(args: SelectSubset<T, coursesUpsertArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.courses.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends coursesCountArgs>(
      args?: Subset<T, coursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoursesAggregateArgs>(args: Subset<T, CoursesAggregateArgs>): Prisma.PrismaPromise<GetCoursesAggregateType<T>>

    /**
     * Group by Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends coursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: coursesGroupByArgs['orderBy'] }
        : { orderBy?: coursesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, coursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the courses model
   */
  readonly fields: coursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for courses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__coursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ucRel<T extends courses$ucRelArgs<ExtArgs> = {}>(args?: Subset<T, courses$ucRelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ucRelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the courses model
   */
  interface coursesFieldRefs {
    readonly cid: FieldRef<"courses", 'String'>
    readonly name: FieldRef<"courses", 'String'>
    readonly desc: FieldRef<"courses", 'String'>
    readonly cred: FieldRef<"courses", 'Int'>
    readonly creAt: FieldRef<"courses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * courses findUnique
   */
  export type coursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses findUniqueOrThrow
   */
  export type coursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses findFirst
   */
  export type coursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses findFirstOrThrow
   */
  export type coursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses findMany
   */
  export type coursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses create
   */
  export type coursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * The data needed to create a courses.
     */
    data: XOR<coursesCreateInput, coursesUncheckedCreateInput>
  }

  /**
   * courses createMany
   */
  export type coursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: coursesCreateManyInput | coursesCreateManyInput[]
  }

  /**
   * courses createManyAndReturn
   */
  export type coursesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * The data used to create many courses.
     */
    data: coursesCreateManyInput | coursesCreateManyInput[]
  }

  /**
   * courses update
   */
  export type coursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * The data needed to update a courses.
     */
    data: XOR<coursesUpdateInput, coursesUncheckedUpdateInput>
    /**
     * Choose, which courses to update.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses updateMany
   */
  export type coursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: coursesWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * courses updateManyAndReturn
   */
  export type coursesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * The data used to update courses.
     */
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: coursesWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * courses upsert
   */
  export type coursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * The filter to search for the courses to update in case it exists.
     */
    where: coursesWhereUniqueInput
    /**
     * In case the courses found by the `where` argument doesn't exist, create a new courses with this data.
     */
    create: XOR<coursesCreateInput, coursesUncheckedCreateInput>
    /**
     * In case the courses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<coursesUpdateInput, coursesUncheckedUpdateInput>
  }

  /**
   * courses delete
   */
  export type coursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter which courses to delete.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses deleteMany
   */
  export type coursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: coursesWhereInput
    /**
     * Limit how many courses to delete.
     */
    limit?: number
  }

  /**
   * courses.ucRel
   */
  export type courses$ucRelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelInclude<ExtArgs> | null
    where?: ucRelWhereInput
    orderBy?: ucRelOrderByWithRelationInput | ucRelOrderByWithRelationInput[]
    cursor?: ucRelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UcRelScalarFieldEnum | UcRelScalarFieldEnum[]
  }

  /**
   * courses without action
   */
  export type coursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
  }


  /**
   * Model ucRel
   */

  export type AggregateUcRel = {
    _count: UcRelCountAggregateOutputType | null
    _min: UcRelMinAggregateOutputType | null
    _max: UcRelMaxAggregateOutputType | null
  }

  export type UcRelMinAggregateOutputType = {
    relid: string | null
    uid: string | null
    cid: string | null
    rel: $Enums.relType | null
  }

  export type UcRelMaxAggregateOutputType = {
    relid: string | null
    uid: string | null
    cid: string | null
    rel: $Enums.relType | null
  }

  export type UcRelCountAggregateOutputType = {
    relid: number
    uid: number
    cid: number
    rel: number
    _all: number
  }


  export type UcRelMinAggregateInputType = {
    relid?: true
    uid?: true
    cid?: true
    rel?: true
  }

  export type UcRelMaxAggregateInputType = {
    relid?: true
    uid?: true
    cid?: true
    rel?: true
  }

  export type UcRelCountAggregateInputType = {
    relid?: true
    uid?: true
    cid?: true
    rel?: true
    _all?: true
  }

  export type UcRelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ucRel to aggregate.
     */
    where?: ucRelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ucRels to fetch.
     */
    orderBy?: ucRelOrderByWithRelationInput | ucRelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ucRelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ucRels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ucRels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ucRels
    **/
    _count?: true | UcRelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UcRelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UcRelMaxAggregateInputType
  }

  export type GetUcRelAggregateType<T extends UcRelAggregateArgs> = {
        [P in keyof T & keyof AggregateUcRel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUcRel[P]>
      : GetScalarType<T[P], AggregateUcRel[P]>
  }




  export type ucRelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ucRelWhereInput
    orderBy?: ucRelOrderByWithAggregationInput | ucRelOrderByWithAggregationInput[]
    by: UcRelScalarFieldEnum[] | UcRelScalarFieldEnum
    having?: ucRelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UcRelCountAggregateInputType | true
    _min?: UcRelMinAggregateInputType
    _max?: UcRelMaxAggregateInputType
  }

  export type UcRelGroupByOutputType = {
    relid: string
    uid: string
    cid: string
    rel: $Enums.relType
    _count: UcRelCountAggregateOutputType | null
    _min: UcRelMinAggregateOutputType | null
    _max: UcRelMaxAggregateOutputType | null
  }

  type GetUcRelGroupByPayload<T extends ucRelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UcRelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UcRelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UcRelGroupByOutputType[P]>
            : GetScalarType<T[P], UcRelGroupByOutputType[P]>
        }
      >
    >


  export type ucRelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    relid?: boolean
    uid?: boolean
    cid?: boolean
    rel?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    course?: boolean | coursesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ucRel"]>

  export type ucRelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    relid?: boolean
    uid?: boolean
    cid?: boolean
    rel?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    course?: boolean | coursesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ucRel"]>

  export type ucRelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    relid?: boolean
    uid?: boolean
    cid?: boolean
    rel?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    course?: boolean | coursesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ucRel"]>

  export type ucRelSelectScalar = {
    relid?: boolean
    uid?: boolean
    cid?: boolean
    rel?: boolean
  }

  export type ucRelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"relid" | "uid" | "cid" | "rel", ExtArgs["result"]["ucRel"]>
  export type ucRelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    course?: boolean | coursesDefaultArgs<ExtArgs>
  }
  export type ucRelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    course?: boolean | coursesDefaultArgs<ExtArgs>
  }
  export type ucRelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    course?: boolean | coursesDefaultArgs<ExtArgs>
  }

  export type $ucRelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ucRel"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      course: Prisma.$coursesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      relid: string
      uid: string
      cid: string
      rel: $Enums.relType
    }, ExtArgs["result"]["ucRel"]>
    composites: {}
  }

  type ucRelGetPayload<S extends boolean | null | undefined | ucRelDefaultArgs> = $Result.GetResult<Prisma.$ucRelPayload, S>

  type ucRelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ucRelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UcRelCountAggregateInputType | true
    }

  export interface ucRelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ucRel'], meta: { name: 'ucRel' } }
    /**
     * Find zero or one UcRel that matches the filter.
     * @param {ucRelFindUniqueArgs} args - Arguments to find a UcRel
     * @example
     * // Get one UcRel
     * const ucRel = await prisma.ucRel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ucRelFindUniqueArgs>(args: SelectSubset<T, ucRelFindUniqueArgs<ExtArgs>>): Prisma__ucRelClient<$Result.GetResult<Prisma.$ucRelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UcRel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ucRelFindUniqueOrThrowArgs} args - Arguments to find a UcRel
     * @example
     * // Get one UcRel
     * const ucRel = await prisma.ucRel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ucRelFindUniqueOrThrowArgs>(args: SelectSubset<T, ucRelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ucRelClient<$Result.GetResult<Prisma.$ucRelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UcRel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ucRelFindFirstArgs} args - Arguments to find a UcRel
     * @example
     * // Get one UcRel
     * const ucRel = await prisma.ucRel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ucRelFindFirstArgs>(args?: SelectSubset<T, ucRelFindFirstArgs<ExtArgs>>): Prisma__ucRelClient<$Result.GetResult<Prisma.$ucRelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UcRel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ucRelFindFirstOrThrowArgs} args - Arguments to find a UcRel
     * @example
     * // Get one UcRel
     * const ucRel = await prisma.ucRel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ucRelFindFirstOrThrowArgs>(args?: SelectSubset<T, ucRelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ucRelClient<$Result.GetResult<Prisma.$ucRelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UcRels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ucRelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UcRels
     * const ucRels = await prisma.ucRel.findMany()
     * 
     * // Get first 10 UcRels
     * const ucRels = await prisma.ucRel.findMany({ take: 10 })
     * 
     * // Only select the `relid`
     * const ucRelWithRelidOnly = await prisma.ucRel.findMany({ select: { relid: true } })
     * 
     */
    findMany<T extends ucRelFindManyArgs>(args?: SelectSubset<T, ucRelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ucRelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UcRel.
     * @param {ucRelCreateArgs} args - Arguments to create a UcRel.
     * @example
     * // Create one UcRel
     * const UcRel = await prisma.ucRel.create({
     *   data: {
     *     // ... data to create a UcRel
     *   }
     * })
     * 
     */
    create<T extends ucRelCreateArgs>(args: SelectSubset<T, ucRelCreateArgs<ExtArgs>>): Prisma__ucRelClient<$Result.GetResult<Prisma.$ucRelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UcRels.
     * @param {ucRelCreateManyArgs} args - Arguments to create many UcRels.
     * @example
     * // Create many UcRels
     * const ucRel = await prisma.ucRel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ucRelCreateManyArgs>(args?: SelectSubset<T, ucRelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UcRels and returns the data saved in the database.
     * @param {ucRelCreateManyAndReturnArgs} args - Arguments to create many UcRels.
     * @example
     * // Create many UcRels
     * const ucRel = await prisma.ucRel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UcRels and only return the `relid`
     * const ucRelWithRelidOnly = await prisma.ucRel.createManyAndReturn({
     *   select: { relid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ucRelCreateManyAndReturnArgs>(args?: SelectSubset<T, ucRelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ucRelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UcRel.
     * @param {ucRelDeleteArgs} args - Arguments to delete one UcRel.
     * @example
     * // Delete one UcRel
     * const UcRel = await prisma.ucRel.delete({
     *   where: {
     *     // ... filter to delete one UcRel
     *   }
     * })
     * 
     */
    delete<T extends ucRelDeleteArgs>(args: SelectSubset<T, ucRelDeleteArgs<ExtArgs>>): Prisma__ucRelClient<$Result.GetResult<Prisma.$ucRelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UcRel.
     * @param {ucRelUpdateArgs} args - Arguments to update one UcRel.
     * @example
     * // Update one UcRel
     * const ucRel = await prisma.ucRel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ucRelUpdateArgs>(args: SelectSubset<T, ucRelUpdateArgs<ExtArgs>>): Prisma__ucRelClient<$Result.GetResult<Prisma.$ucRelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UcRels.
     * @param {ucRelDeleteManyArgs} args - Arguments to filter UcRels to delete.
     * @example
     * // Delete a few UcRels
     * const { count } = await prisma.ucRel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ucRelDeleteManyArgs>(args?: SelectSubset<T, ucRelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UcRels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ucRelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UcRels
     * const ucRel = await prisma.ucRel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ucRelUpdateManyArgs>(args: SelectSubset<T, ucRelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UcRels and returns the data updated in the database.
     * @param {ucRelUpdateManyAndReturnArgs} args - Arguments to update many UcRels.
     * @example
     * // Update many UcRels
     * const ucRel = await prisma.ucRel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UcRels and only return the `relid`
     * const ucRelWithRelidOnly = await prisma.ucRel.updateManyAndReturn({
     *   select: { relid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ucRelUpdateManyAndReturnArgs>(args: SelectSubset<T, ucRelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ucRelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UcRel.
     * @param {ucRelUpsertArgs} args - Arguments to update or create a UcRel.
     * @example
     * // Update or create a UcRel
     * const ucRel = await prisma.ucRel.upsert({
     *   create: {
     *     // ... data to create a UcRel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UcRel we want to update
     *   }
     * })
     */
    upsert<T extends ucRelUpsertArgs>(args: SelectSubset<T, ucRelUpsertArgs<ExtArgs>>): Prisma__ucRelClient<$Result.GetResult<Prisma.$ucRelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UcRels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ucRelCountArgs} args - Arguments to filter UcRels to count.
     * @example
     * // Count the number of UcRels
     * const count = await prisma.ucRel.count({
     *   where: {
     *     // ... the filter for the UcRels we want to count
     *   }
     * })
    **/
    count<T extends ucRelCountArgs>(
      args?: Subset<T, ucRelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UcRelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UcRel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UcRelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UcRelAggregateArgs>(args: Subset<T, UcRelAggregateArgs>): Prisma.PrismaPromise<GetUcRelAggregateType<T>>

    /**
     * Group by UcRel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ucRelGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends ucRelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ucRelGroupByArgs['orderBy'] }
        : { orderBy?: ucRelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ucRelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUcRelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ucRel model
   */
  readonly fields: ucRelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ucRel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ucRelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends coursesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, coursesDefaultArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ucRel model
   */
  interface ucRelFieldRefs {
    readonly relid: FieldRef<"ucRel", 'String'>
    readonly uid: FieldRef<"ucRel", 'String'>
    readonly cid: FieldRef<"ucRel", 'String'>
    readonly rel: FieldRef<"ucRel", 'relType'>
  }
    

  // Custom InputTypes
  /**
   * ucRel findUnique
   */
  export type ucRelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelInclude<ExtArgs> | null
    /**
     * Filter, which ucRel to fetch.
     */
    where: ucRelWhereUniqueInput
  }

  /**
   * ucRel findUniqueOrThrow
   */
  export type ucRelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelInclude<ExtArgs> | null
    /**
     * Filter, which ucRel to fetch.
     */
    where: ucRelWhereUniqueInput
  }

  /**
   * ucRel findFirst
   */
  export type ucRelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelInclude<ExtArgs> | null
    /**
     * Filter, which ucRel to fetch.
     */
    where?: ucRelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ucRels to fetch.
     */
    orderBy?: ucRelOrderByWithRelationInput | ucRelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ucRels.
     */
    cursor?: ucRelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ucRels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ucRels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ucRels.
     */
    distinct?: UcRelScalarFieldEnum | UcRelScalarFieldEnum[]
  }

  /**
   * ucRel findFirstOrThrow
   */
  export type ucRelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelInclude<ExtArgs> | null
    /**
     * Filter, which ucRel to fetch.
     */
    where?: ucRelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ucRels to fetch.
     */
    orderBy?: ucRelOrderByWithRelationInput | ucRelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ucRels.
     */
    cursor?: ucRelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ucRels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ucRels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ucRels.
     */
    distinct?: UcRelScalarFieldEnum | UcRelScalarFieldEnum[]
  }

  /**
   * ucRel findMany
   */
  export type ucRelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelInclude<ExtArgs> | null
    /**
     * Filter, which ucRels to fetch.
     */
    where?: ucRelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ucRels to fetch.
     */
    orderBy?: ucRelOrderByWithRelationInput | ucRelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ucRels.
     */
    cursor?: ucRelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ucRels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ucRels.
     */
    skip?: number
    distinct?: UcRelScalarFieldEnum | UcRelScalarFieldEnum[]
  }

  /**
   * ucRel create
   */
  export type ucRelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelInclude<ExtArgs> | null
    /**
     * The data needed to create a ucRel.
     */
    data: XOR<ucRelCreateInput, ucRelUncheckedCreateInput>
  }

  /**
   * ucRel createMany
   */
  export type ucRelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ucRels.
     */
    data: ucRelCreateManyInput | ucRelCreateManyInput[]
  }

  /**
   * ucRel createManyAndReturn
   */
  export type ucRelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * The data used to create many ucRels.
     */
    data: ucRelCreateManyInput | ucRelCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ucRel update
   */
  export type ucRelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelInclude<ExtArgs> | null
    /**
     * The data needed to update a ucRel.
     */
    data: XOR<ucRelUpdateInput, ucRelUncheckedUpdateInput>
    /**
     * Choose, which ucRel to update.
     */
    where: ucRelWhereUniqueInput
  }

  /**
   * ucRel updateMany
   */
  export type ucRelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ucRels.
     */
    data: XOR<ucRelUpdateManyMutationInput, ucRelUncheckedUpdateManyInput>
    /**
     * Filter which ucRels to update
     */
    where?: ucRelWhereInput
    /**
     * Limit how many ucRels to update.
     */
    limit?: number
  }

  /**
   * ucRel updateManyAndReturn
   */
  export type ucRelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * The data used to update ucRels.
     */
    data: XOR<ucRelUpdateManyMutationInput, ucRelUncheckedUpdateManyInput>
    /**
     * Filter which ucRels to update
     */
    where?: ucRelWhereInput
    /**
     * Limit how many ucRels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ucRel upsert
   */
  export type ucRelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelInclude<ExtArgs> | null
    /**
     * The filter to search for the ucRel to update in case it exists.
     */
    where: ucRelWhereUniqueInput
    /**
     * In case the ucRel found by the `where` argument doesn't exist, create a new ucRel with this data.
     */
    create: XOR<ucRelCreateInput, ucRelUncheckedCreateInput>
    /**
     * In case the ucRel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ucRelUpdateInput, ucRelUncheckedUpdateInput>
  }

  /**
   * ucRel delete
   */
  export type ucRelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelInclude<ExtArgs> | null
    /**
     * Filter which ucRel to delete.
     */
    where: ucRelWhereUniqueInput
  }

  /**
   * ucRel deleteMany
   */
  export type ucRelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ucRels to delete
     */
    where?: ucRelWhereInput
    /**
     * Limit how many ucRels to delete.
     */
    limit?: number
  }

  /**
   * ucRel without action
   */
  export type ucRelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ucRel
     */
    select?: ucRelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ucRel
     */
    omit?: ucRelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ucRelInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    uid: 'uid',
    name: 'name',
    pword: 'pword',
    type: 'type',
    creAt: 'creAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CoursesScalarFieldEnum: {
    cid: 'cid',
    name: 'name',
    desc: 'desc',
    cred: 'cred',
    creAt: 'creAt'
  };

  export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum]


  export const UcRelScalarFieldEnum: {
    relid: 'relid',
    uid: 'uid',
    cid: 'cid',
    rel: 'rel'
  };

  export type UcRelScalarFieldEnum = (typeof UcRelScalarFieldEnum)[keyof typeof UcRelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'userType'
   */
  export type EnumuserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userType'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'relType'
   */
  export type EnumrelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'relType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    uid?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    pword?: StringFilter<"users"> | string
    type?: EnumuserTypeFilter<"users"> | $Enums.userType
    creAt?: DateTimeFilter<"users"> | Date | string
    ucRel?: UcRelListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    uid?: SortOrder
    name?: SortOrder
    pword?: SortOrder
    type?: SortOrder
    creAt?: SortOrder
    ucRel?: ucRelOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    pword?: StringFilter<"users"> | string
    type?: EnumuserTypeFilter<"users"> | $Enums.userType
    creAt?: DateTimeFilter<"users"> | Date | string
    ucRel?: UcRelListRelationFilter
  }, "uid">

  export type usersOrderByWithAggregationInput = {
    uid?: SortOrder
    name?: SortOrder
    pword?: SortOrder
    type?: SortOrder
    creAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    pword?: StringWithAggregatesFilter<"users"> | string
    type?: EnumuserTypeWithAggregatesFilter<"users"> | $Enums.userType
    creAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type coursesWhereInput = {
    AND?: coursesWhereInput | coursesWhereInput[]
    OR?: coursesWhereInput[]
    NOT?: coursesWhereInput | coursesWhereInput[]
    cid?: StringFilter<"courses"> | string
    name?: StringFilter<"courses"> | string
    desc?: StringNullableFilter<"courses"> | string | null
    cred?: IntFilter<"courses"> | number
    creAt?: DateTimeFilter<"courses"> | Date | string
    ucRel?: UcRelListRelationFilter
  }

  export type coursesOrderByWithRelationInput = {
    cid?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    cred?: SortOrder
    creAt?: SortOrder
    ucRel?: ucRelOrderByRelationAggregateInput
  }

  export type coursesWhereUniqueInput = Prisma.AtLeast<{
    cid?: string
    AND?: coursesWhereInput | coursesWhereInput[]
    OR?: coursesWhereInput[]
    NOT?: coursesWhereInput | coursesWhereInput[]
    name?: StringFilter<"courses"> | string
    desc?: StringNullableFilter<"courses"> | string | null
    cred?: IntFilter<"courses"> | number
    creAt?: DateTimeFilter<"courses"> | Date | string
    ucRel?: UcRelListRelationFilter
  }, "cid">

  export type coursesOrderByWithAggregationInput = {
    cid?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    cred?: SortOrder
    creAt?: SortOrder
    _count?: coursesCountOrderByAggregateInput
    _avg?: coursesAvgOrderByAggregateInput
    _max?: coursesMaxOrderByAggregateInput
    _min?: coursesMinOrderByAggregateInput
    _sum?: coursesSumOrderByAggregateInput
  }

  export type coursesScalarWhereWithAggregatesInput = {
    AND?: coursesScalarWhereWithAggregatesInput | coursesScalarWhereWithAggregatesInput[]
    OR?: coursesScalarWhereWithAggregatesInput[]
    NOT?: coursesScalarWhereWithAggregatesInput | coursesScalarWhereWithAggregatesInput[]
    cid?: StringWithAggregatesFilter<"courses"> | string
    name?: StringWithAggregatesFilter<"courses"> | string
    desc?: StringNullableWithAggregatesFilter<"courses"> | string | null
    cred?: IntWithAggregatesFilter<"courses"> | number
    creAt?: DateTimeWithAggregatesFilter<"courses"> | Date | string
  }

  export type ucRelWhereInput = {
    AND?: ucRelWhereInput | ucRelWhereInput[]
    OR?: ucRelWhereInput[]
    NOT?: ucRelWhereInput | ucRelWhereInput[]
    relid?: StringFilter<"ucRel"> | string
    uid?: StringFilter<"ucRel"> | string
    cid?: StringFilter<"ucRel"> | string
    rel?: EnumrelTypeFilter<"ucRel"> | $Enums.relType
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    course?: XOR<CoursesScalarRelationFilter, coursesWhereInput>
  }

  export type ucRelOrderByWithRelationInput = {
    relid?: SortOrder
    uid?: SortOrder
    cid?: SortOrder
    rel?: SortOrder
    user?: usersOrderByWithRelationInput
    course?: coursesOrderByWithRelationInput
  }

  export type ucRelWhereUniqueInput = Prisma.AtLeast<{
    relid?: string
    AND?: ucRelWhereInput | ucRelWhereInput[]
    OR?: ucRelWhereInput[]
    NOT?: ucRelWhereInput | ucRelWhereInput[]
    uid?: StringFilter<"ucRel"> | string
    cid?: StringFilter<"ucRel"> | string
    rel?: EnumrelTypeFilter<"ucRel"> | $Enums.relType
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    course?: XOR<CoursesScalarRelationFilter, coursesWhereInput>
  }, "relid">

  export type ucRelOrderByWithAggregationInput = {
    relid?: SortOrder
    uid?: SortOrder
    cid?: SortOrder
    rel?: SortOrder
    _count?: ucRelCountOrderByAggregateInput
    _max?: ucRelMaxOrderByAggregateInput
    _min?: ucRelMinOrderByAggregateInput
  }

  export type ucRelScalarWhereWithAggregatesInput = {
    AND?: ucRelScalarWhereWithAggregatesInput | ucRelScalarWhereWithAggregatesInput[]
    OR?: ucRelScalarWhereWithAggregatesInput[]
    NOT?: ucRelScalarWhereWithAggregatesInput | ucRelScalarWhereWithAggregatesInput[]
    relid?: StringWithAggregatesFilter<"ucRel"> | string
    uid?: StringWithAggregatesFilter<"ucRel"> | string
    cid?: StringWithAggregatesFilter<"ucRel"> | string
    rel?: EnumrelTypeWithAggregatesFilter<"ucRel"> | $Enums.relType
  }

  export type usersCreateInput = {
    uid?: string
    name: string
    pword: string
    type: $Enums.userType
    creAt?: Date | string
    ucRel?: ucRelCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    uid?: string
    name: string
    pword: string
    type: $Enums.userType
    creAt?: Date | string
    ucRel?: ucRelUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pword?: StringFieldUpdateOperationsInput | string
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    creAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ucRel?: ucRelUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pword?: StringFieldUpdateOperationsInput | string
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    creAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ucRel?: ucRelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    uid?: string
    name: string
    pword: string
    type: $Enums.userType
    creAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pword?: StringFieldUpdateOperationsInput | string
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    creAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pword?: StringFieldUpdateOperationsInput | string
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    creAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type coursesCreateInput = {
    cid: string
    name: string
    desc?: string | null
    cred: number
    creAt?: Date | string
    ucRel?: ucRelCreateNestedManyWithoutCourseInput
  }

  export type coursesUncheckedCreateInput = {
    cid: string
    name: string
    desc?: string | null
    cred: number
    creAt?: Date | string
    ucRel?: ucRelUncheckedCreateNestedManyWithoutCourseInput
  }

  export type coursesUpdateInput = {
    cid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    cred?: IntFieldUpdateOperationsInput | number
    creAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ucRel?: ucRelUpdateManyWithoutCourseNestedInput
  }

  export type coursesUncheckedUpdateInput = {
    cid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    cred?: IntFieldUpdateOperationsInput | number
    creAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ucRel?: ucRelUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type coursesCreateManyInput = {
    cid: string
    name: string
    desc?: string | null
    cred: number
    creAt?: Date | string
  }

  export type coursesUpdateManyMutationInput = {
    cid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    cred?: IntFieldUpdateOperationsInput | number
    creAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type coursesUncheckedUpdateManyInput = {
    cid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    cred?: IntFieldUpdateOperationsInput | number
    creAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ucRelCreateInput = {
    relid: string
    rel: $Enums.relType
    user: usersCreateNestedOneWithoutUcRelInput
    course: coursesCreateNestedOneWithoutUcRelInput
  }

  export type ucRelUncheckedCreateInput = {
    relid: string
    uid: string
    cid: string
    rel: $Enums.relType
  }

  export type ucRelUpdateInput = {
    relid?: StringFieldUpdateOperationsInput | string
    rel?: EnumrelTypeFieldUpdateOperationsInput | $Enums.relType
    user?: usersUpdateOneRequiredWithoutUcRelNestedInput
    course?: coursesUpdateOneRequiredWithoutUcRelNestedInput
  }

  export type ucRelUncheckedUpdateInput = {
    relid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    rel?: EnumrelTypeFieldUpdateOperationsInput | $Enums.relType
  }

  export type ucRelCreateManyInput = {
    relid: string
    uid: string
    cid: string
    rel: $Enums.relType
  }

  export type ucRelUpdateManyMutationInput = {
    relid?: StringFieldUpdateOperationsInput | string
    rel?: EnumrelTypeFieldUpdateOperationsInput | $Enums.relType
  }

  export type ucRelUncheckedUpdateManyInput = {
    relid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    rel?: EnumrelTypeFieldUpdateOperationsInput | $Enums.relType
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumuserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.userType | EnumuserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.userType[]
    notIn?: $Enums.userType[]
    not?: NestedEnumuserTypeFilter<$PrismaModel> | $Enums.userType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UcRelListRelationFilter = {
    every?: ucRelWhereInput
    some?: ucRelWhereInput
    none?: ucRelWhereInput
  }

  export type ucRelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    uid?: SortOrder
    name?: SortOrder
    pword?: SortOrder
    type?: SortOrder
    creAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    uid?: SortOrder
    name?: SortOrder
    pword?: SortOrder
    type?: SortOrder
    creAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    uid?: SortOrder
    name?: SortOrder
    pword?: SortOrder
    type?: SortOrder
    creAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumuserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userType | EnumuserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.userType[]
    notIn?: $Enums.userType[]
    not?: NestedEnumuserTypeWithAggregatesFilter<$PrismaModel> | $Enums.userType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserTypeFilter<$PrismaModel>
    _max?: NestedEnumuserTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type coursesCountOrderByAggregateInput = {
    cid?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    cred?: SortOrder
    creAt?: SortOrder
  }

  export type coursesAvgOrderByAggregateInput = {
    cred?: SortOrder
  }

  export type coursesMaxOrderByAggregateInput = {
    cid?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    cred?: SortOrder
    creAt?: SortOrder
  }

  export type coursesMinOrderByAggregateInput = {
    cid?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    cred?: SortOrder
    creAt?: SortOrder
  }

  export type coursesSumOrderByAggregateInput = {
    cred?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumrelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.relType | EnumrelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.relType[]
    notIn?: $Enums.relType[]
    not?: NestedEnumrelTypeFilter<$PrismaModel> | $Enums.relType
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type CoursesScalarRelationFilter = {
    is?: coursesWhereInput
    isNot?: coursesWhereInput
  }

  export type ucRelCountOrderByAggregateInput = {
    relid?: SortOrder
    uid?: SortOrder
    cid?: SortOrder
    rel?: SortOrder
  }

  export type ucRelMaxOrderByAggregateInput = {
    relid?: SortOrder
    uid?: SortOrder
    cid?: SortOrder
    rel?: SortOrder
  }

  export type ucRelMinOrderByAggregateInput = {
    relid?: SortOrder
    uid?: SortOrder
    cid?: SortOrder
    rel?: SortOrder
  }

  export type EnumrelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.relType | EnumrelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.relType[]
    notIn?: $Enums.relType[]
    not?: NestedEnumrelTypeWithAggregatesFilter<$PrismaModel> | $Enums.relType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrelTypeFilter<$PrismaModel>
    _max?: NestedEnumrelTypeFilter<$PrismaModel>
  }

  export type ucRelCreateNestedManyWithoutUserInput = {
    create?: XOR<ucRelCreateWithoutUserInput, ucRelUncheckedCreateWithoutUserInput> | ucRelCreateWithoutUserInput[] | ucRelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ucRelCreateOrConnectWithoutUserInput | ucRelCreateOrConnectWithoutUserInput[]
    createMany?: ucRelCreateManyUserInputEnvelope
    connect?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
  }

  export type ucRelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ucRelCreateWithoutUserInput, ucRelUncheckedCreateWithoutUserInput> | ucRelCreateWithoutUserInput[] | ucRelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ucRelCreateOrConnectWithoutUserInput | ucRelCreateOrConnectWithoutUserInput[]
    createMany?: ucRelCreateManyUserInputEnvelope
    connect?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumuserTypeFieldUpdateOperationsInput = {
    set?: $Enums.userType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ucRelUpdateManyWithoutUserNestedInput = {
    create?: XOR<ucRelCreateWithoutUserInput, ucRelUncheckedCreateWithoutUserInput> | ucRelCreateWithoutUserInput[] | ucRelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ucRelCreateOrConnectWithoutUserInput | ucRelCreateOrConnectWithoutUserInput[]
    upsert?: ucRelUpsertWithWhereUniqueWithoutUserInput | ucRelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ucRelCreateManyUserInputEnvelope
    set?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    disconnect?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    delete?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    connect?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    update?: ucRelUpdateWithWhereUniqueWithoutUserInput | ucRelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ucRelUpdateManyWithWhereWithoutUserInput | ucRelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ucRelScalarWhereInput | ucRelScalarWhereInput[]
  }

  export type ucRelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ucRelCreateWithoutUserInput, ucRelUncheckedCreateWithoutUserInput> | ucRelCreateWithoutUserInput[] | ucRelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ucRelCreateOrConnectWithoutUserInput | ucRelCreateOrConnectWithoutUserInput[]
    upsert?: ucRelUpsertWithWhereUniqueWithoutUserInput | ucRelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ucRelCreateManyUserInputEnvelope
    set?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    disconnect?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    delete?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    connect?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    update?: ucRelUpdateWithWhereUniqueWithoutUserInput | ucRelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ucRelUpdateManyWithWhereWithoutUserInput | ucRelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ucRelScalarWhereInput | ucRelScalarWhereInput[]
  }

  export type ucRelCreateNestedManyWithoutCourseInput = {
    create?: XOR<ucRelCreateWithoutCourseInput, ucRelUncheckedCreateWithoutCourseInput> | ucRelCreateWithoutCourseInput[] | ucRelUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ucRelCreateOrConnectWithoutCourseInput | ucRelCreateOrConnectWithoutCourseInput[]
    createMany?: ucRelCreateManyCourseInputEnvelope
    connect?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
  }

  export type ucRelUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ucRelCreateWithoutCourseInput, ucRelUncheckedCreateWithoutCourseInput> | ucRelCreateWithoutCourseInput[] | ucRelUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ucRelCreateOrConnectWithoutCourseInput | ucRelCreateOrConnectWithoutCourseInput[]
    createMany?: ucRelCreateManyCourseInputEnvelope
    connect?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ucRelUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ucRelCreateWithoutCourseInput, ucRelUncheckedCreateWithoutCourseInput> | ucRelCreateWithoutCourseInput[] | ucRelUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ucRelCreateOrConnectWithoutCourseInput | ucRelCreateOrConnectWithoutCourseInput[]
    upsert?: ucRelUpsertWithWhereUniqueWithoutCourseInput | ucRelUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ucRelCreateManyCourseInputEnvelope
    set?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    disconnect?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    delete?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    connect?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    update?: ucRelUpdateWithWhereUniqueWithoutCourseInput | ucRelUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ucRelUpdateManyWithWhereWithoutCourseInput | ucRelUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ucRelScalarWhereInput | ucRelScalarWhereInput[]
  }

  export type ucRelUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ucRelCreateWithoutCourseInput, ucRelUncheckedCreateWithoutCourseInput> | ucRelCreateWithoutCourseInput[] | ucRelUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ucRelCreateOrConnectWithoutCourseInput | ucRelCreateOrConnectWithoutCourseInput[]
    upsert?: ucRelUpsertWithWhereUniqueWithoutCourseInput | ucRelUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ucRelCreateManyCourseInputEnvelope
    set?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    disconnect?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    delete?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    connect?: ucRelWhereUniqueInput | ucRelWhereUniqueInput[]
    update?: ucRelUpdateWithWhereUniqueWithoutCourseInput | ucRelUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ucRelUpdateManyWithWhereWithoutCourseInput | ucRelUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ucRelScalarWhereInput | ucRelScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUcRelInput = {
    create?: XOR<usersCreateWithoutUcRelInput, usersUncheckedCreateWithoutUcRelInput>
    connectOrCreate?: usersCreateOrConnectWithoutUcRelInput
    connect?: usersWhereUniqueInput
  }

  export type coursesCreateNestedOneWithoutUcRelInput = {
    create?: XOR<coursesCreateWithoutUcRelInput, coursesUncheckedCreateWithoutUcRelInput>
    connectOrCreate?: coursesCreateOrConnectWithoutUcRelInput
    connect?: coursesWhereUniqueInput
  }

  export type EnumrelTypeFieldUpdateOperationsInput = {
    set?: $Enums.relType
  }

  export type usersUpdateOneRequiredWithoutUcRelNestedInput = {
    create?: XOR<usersCreateWithoutUcRelInput, usersUncheckedCreateWithoutUcRelInput>
    connectOrCreate?: usersCreateOrConnectWithoutUcRelInput
    upsert?: usersUpsertWithoutUcRelInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUcRelInput, usersUpdateWithoutUcRelInput>, usersUncheckedUpdateWithoutUcRelInput>
  }

  export type coursesUpdateOneRequiredWithoutUcRelNestedInput = {
    create?: XOR<coursesCreateWithoutUcRelInput, coursesUncheckedCreateWithoutUcRelInput>
    connectOrCreate?: coursesCreateOrConnectWithoutUcRelInput
    upsert?: coursesUpsertWithoutUcRelInput
    connect?: coursesWhereUniqueInput
    update?: XOR<XOR<coursesUpdateToOneWithWhereWithoutUcRelInput, coursesUpdateWithoutUcRelInput>, coursesUncheckedUpdateWithoutUcRelInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumuserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.userType | EnumuserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.userType[]
    notIn?: $Enums.userType[]
    not?: NestedEnumuserTypeFilter<$PrismaModel> | $Enums.userType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumuserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userType | EnumuserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.userType[]
    notIn?: $Enums.userType[]
    not?: NestedEnumuserTypeWithAggregatesFilter<$PrismaModel> | $Enums.userType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserTypeFilter<$PrismaModel>
    _max?: NestedEnumuserTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumrelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.relType | EnumrelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.relType[]
    notIn?: $Enums.relType[]
    not?: NestedEnumrelTypeFilter<$PrismaModel> | $Enums.relType
  }

  export type NestedEnumrelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.relType | EnumrelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.relType[]
    notIn?: $Enums.relType[]
    not?: NestedEnumrelTypeWithAggregatesFilter<$PrismaModel> | $Enums.relType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrelTypeFilter<$PrismaModel>
    _max?: NestedEnumrelTypeFilter<$PrismaModel>
  }

  export type ucRelCreateWithoutUserInput = {
    relid: string
    rel: $Enums.relType
    course: coursesCreateNestedOneWithoutUcRelInput
  }

  export type ucRelUncheckedCreateWithoutUserInput = {
    relid: string
    cid: string
    rel: $Enums.relType
  }

  export type ucRelCreateOrConnectWithoutUserInput = {
    where: ucRelWhereUniqueInput
    create: XOR<ucRelCreateWithoutUserInput, ucRelUncheckedCreateWithoutUserInput>
  }

  export type ucRelCreateManyUserInputEnvelope = {
    data: ucRelCreateManyUserInput | ucRelCreateManyUserInput[]
  }

  export type ucRelUpsertWithWhereUniqueWithoutUserInput = {
    where: ucRelWhereUniqueInput
    update: XOR<ucRelUpdateWithoutUserInput, ucRelUncheckedUpdateWithoutUserInput>
    create: XOR<ucRelCreateWithoutUserInput, ucRelUncheckedCreateWithoutUserInput>
  }

  export type ucRelUpdateWithWhereUniqueWithoutUserInput = {
    where: ucRelWhereUniqueInput
    data: XOR<ucRelUpdateWithoutUserInput, ucRelUncheckedUpdateWithoutUserInput>
  }

  export type ucRelUpdateManyWithWhereWithoutUserInput = {
    where: ucRelScalarWhereInput
    data: XOR<ucRelUpdateManyMutationInput, ucRelUncheckedUpdateManyWithoutUserInput>
  }

  export type ucRelScalarWhereInput = {
    AND?: ucRelScalarWhereInput | ucRelScalarWhereInput[]
    OR?: ucRelScalarWhereInput[]
    NOT?: ucRelScalarWhereInput | ucRelScalarWhereInput[]
    relid?: StringFilter<"ucRel"> | string
    uid?: StringFilter<"ucRel"> | string
    cid?: StringFilter<"ucRel"> | string
    rel?: EnumrelTypeFilter<"ucRel"> | $Enums.relType
  }

  export type ucRelCreateWithoutCourseInput = {
    relid: string
    rel: $Enums.relType
    user: usersCreateNestedOneWithoutUcRelInput
  }

  export type ucRelUncheckedCreateWithoutCourseInput = {
    relid: string
    uid: string
    rel: $Enums.relType
  }

  export type ucRelCreateOrConnectWithoutCourseInput = {
    where: ucRelWhereUniqueInput
    create: XOR<ucRelCreateWithoutCourseInput, ucRelUncheckedCreateWithoutCourseInput>
  }

  export type ucRelCreateManyCourseInputEnvelope = {
    data: ucRelCreateManyCourseInput | ucRelCreateManyCourseInput[]
  }

  export type ucRelUpsertWithWhereUniqueWithoutCourseInput = {
    where: ucRelWhereUniqueInput
    update: XOR<ucRelUpdateWithoutCourseInput, ucRelUncheckedUpdateWithoutCourseInput>
    create: XOR<ucRelCreateWithoutCourseInput, ucRelUncheckedCreateWithoutCourseInput>
  }

  export type ucRelUpdateWithWhereUniqueWithoutCourseInput = {
    where: ucRelWhereUniqueInput
    data: XOR<ucRelUpdateWithoutCourseInput, ucRelUncheckedUpdateWithoutCourseInput>
  }

  export type ucRelUpdateManyWithWhereWithoutCourseInput = {
    where: ucRelScalarWhereInput
    data: XOR<ucRelUpdateManyMutationInput, ucRelUncheckedUpdateManyWithoutCourseInput>
  }

  export type usersCreateWithoutUcRelInput = {
    uid?: string
    name: string
    pword: string
    type: $Enums.userType
    creAt?: Date | string
  }

  export type usersUncheckedCreateWithoutUcRelInput = {
    uid?: string
    name: string
    pword: string
    type: $Enums.userType
    creAt?: Date | string
  }

  export type usersCreateOrConnectWithoutUcRelInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUcRelInput, usersUncheckedCreateWithoutUcRelInput>
  }

  export type coursesCreateWithoutUcRelInput = {
    cid: string
    name: string
    desc?: string | null
    cred: number
    creAt?: Date | string
  }

  export type coursesUncheckedCreateWithoutUcRelInput = {
    cid: string
    name: string
    desc?: string | null
    cred: number
    creAt?: Date | string
  }

  export type coursesCreateOrConnectWithoutUcRelInput = {
    where: coursesWhereUniqueInput
    create: XOR<coursesCreateWithoutUcRelInput, coursesUncheckedCreateWithoutUcRelInput>
  }

  export type usersUpsertWithoutUcRelInput = {
    update: XOR<usersUpdateWithoutUcRelInput, usersUncheckedUpdateWithoutUcRelInput>
    create: XOR<usersCreateWithoutUcRelInput, usersUncheckedCreateWithoutUcRelInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUcRelInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUcRelInput, usersUncheckedUpdateWithoutUcRelInput>
  }

  export type usersUpdateWithoutUcRelInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pword?: StringFieldUpdateOperationsInput | string
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    creAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutUcRelInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pword?: StringFieldUpdateOperationsInput | string
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    creAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type coursesUpsertWithoutUcRelInput = {
    update: XOR<coursesUpdateWithoutUcRelInput, coursesUncheckedUpdateWithoutUcRelInput>
    create: XOR<coursesCreateWithoutUcRelInput, coursesUncheckedCreateWithoutUcRelInput>
    where?: coursesWhereInput
  }

  export type coursesUpdateToOneWithWhereWithoutUcRelInput = {
    where?: coursesWhereInput
    data: XOR<coursesUpdateWithoutUcRelInput, coursesUncheckedUpdateWithoutUcRelInput>
  }

  export type coursesUpdateWithoutUcRelInput = {
    cid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    cred?: IntFieldUpdateOperationsInput | number
    creAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type coursesUncheckedUpdateWithoutUcRelInput = {
    cid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    cred?: IntFieldUpdateOperationsInput | number
    creAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ucRelCreateManyUserInput = {
    relid: string
    cid: string
    rel: $Enums.relType
  }

  export type ucRelUpdateWithoutUserInput = {
    relid?: StringFieldUpdateOperationsInput | string
    rel?: EnumrelTypeFieldUpdateOperationsInput | $Enums.relType
    course?: coursesUpdateOneRequiredWithoutUcRelNestedInput
  }

  export type ucRelUncheckedUpdateWithoutUserInput = {
    relid?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    rel?: EnumrelTypeFieldUpdateOperationsInput | $Enums.relType
  }

  export type ucRelUncheckedUpdateManyWithoutUserInput = {
    relid?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    rel?: EnumrelTypeFieldUpdateOperationsInput | $Enums.relType
  }

  export type ucRelCreateManyCourseInput = {
    relid: string
    uid: string
    rel: $Enums.relType
  }

  export type ucRelUpdateWithoutCourseInput = {
    relid?: StringFieldUpdateOperationsInput | string
    rel?: EnumrelTypeFieldUpdateOperationsInput | $Enums.relType
    user?: usersUpdateOneRequiredWithoutUcRelNestedInput
  }

  export type ucRelUncheckedUpdateWithoutCourseInput = {
    relid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    rel?: EnumrelTypeFieldUpdateOperationsInput | $Enums.relType
  }

  export type ucRelUncheckedUpdateManyWithoutCourseInput = {
    relid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    rel?: EnumrelTypeFieldUpdateOperationsInput | $Enums.relType
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}