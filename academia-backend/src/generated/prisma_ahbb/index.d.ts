
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model td_usuario_ahbb
 * 
 */
export type td_usuario_ahbb = $Result.DefaultSelection<Prisma.$td_usuario_ahbbPayload>
/**
 * Model td_curso_ahbb
 * 
 */
export type td_curso_ahbb = $Result.DefaultSelection<Prisma.$td_curso_ahbbPayload>
/**
 * Model td_horario_ahbb
 * 
 */
export type td_horario_ahbb = $Result.DefaultSelection<Prisma.$td_horario_ahbbPayload>
/**
 * Model td_inscripcion_ahbb
 * 
 */
export type td_inscripcion_ahbb = $Result.DefaultSelection<Prisma.$td_inscripcion_ahbbPayload>
/**
 * Model td_certificado_ahbb
 * 
 */
export type td_certificado_ahbb = $Result.DefaultSelection<Prisma.$td_certificado_ahbbPayload>
/**
 * Model td_configuracionglobal_ahbb
 * 
 */
export type td_configuracionglobal_ahbb = $Result.DefaultSelection<Prisma.$td_configuracionglobal_ahbbPayload>
/**
 * Model td_auditoria_aprobacion_ahbb
 * 
 */
export type td_auditoria_aprobacion_ahbb = $Result.DefaultSelection<Prisma.$td_auditoria_aprobacion_ahbbPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Td_usuario_ahbbs
 * const td_usuario_ahbbs = await prisma.td_usuario_ahbb.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Td_usuario_ahbbs
   * const td_usuario_ahbbs = await prisma.td_usuario_ahbb.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.td_usuario_ahbb`: Exposes CRUD operations for the **td_usuario_ahbb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Td_usuario_ahbbs
    * const td_usuario_ahbbs = await prisma.td_usuario_ahbb.findMany()
    * ```
    */
  get td_usuario_ahbb(): Prisma.td_usuario_ahbbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.td_curso_ahbb`: Exposes CRUD operations for the **td_curso_ahbb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Td_curso_ahbbs
    * const td_curso_ahbbs = await prisma.td_curso_ahbb.findMany()
    * ```
    */
  get td_curso_ahbb(): Prisma.td_curso_ahbbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.td_horario_ahbb`: Exposes CRUD operations for the **td_horario_ahbb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Td_horario_ahbbs
    * const td_horario_ahbbs = await prisma.td_horario_ahbb.findMany()
    * ```
    */
  get td_horario_ahbb(): Prisma.td_horario_ahbbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.td_inscripcion_ahbb`: Exposes CRUD operations for the **td_inscripcion_ahbb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Td_inscripcion_ahbbs
    * const td_inscripcion_ahbbs = await prisma.td_inscripcion_ahbb.findMany()
    * ```
    */
  get td_inscripcion_ahbb(): Prisma.td_inscripcion_ahbbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.td_certificado_ahbb`: Exposes CRUD operations for the **td_certificado_ahbb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Td_certificado_ahbbs
    * const td_certificado_ahbbs = await prisma.td_certificado_ahbb.findMany()
    * ```
    */
  get td_certificado_ahbb(): Prisma.td_certificado_ahbbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.td_configuracionglobal_ahbb`: Exposes CRUD operations for the **td_configuracionglobal_ahbb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Td_configuracionglobal_ahbbs
    * const td_configuracionglobal_ahbbs = await prisma.td_configuracionglobal_ahbb.findMany()
    * ```
    */
  get td_configuracionglobal_ahbb(): Prisma.td_configuracionglobal_ahbbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.td_auditoria_aprobacion_ahbb`: Exposes CRUD operations for the **td_auditoria_aprobacion_ahbb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Td_auditoria_aprobacion_ahbbs
    * const td_auditoria_aprobacion_ahbbs = await prisma.td_auditoria_aprobacion_ahbb.findMany()
    * ```
    */
  get td_auditoria_aprobacion_ahbb(): Prisma.td_auditoria_aprobacion_ahbbDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    td_usuario_ahbb: 'td_usuario_ahbb',
    td_curso_ahbb: 'td_curso_ahbb',
    td_horario_ahbb: 'td_horario_ahbb',
    td_inscripcion_ahbb: 'td_inscripcion_ahbb',
    td_certificado_ahbb: 'td_certificado_ahbb',
    td_configuracionglobal_ahbb: 'td_configuracionglobal_ahbb',
    td_auditoria_aprobacion_ahbb: 'td_auditoria_aprobacion_ahbb'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "td_usuario_ahbb" | "td_curso_ahbb" | "td_horario_ahbb" | "td_inscripcion_ahbb" | "td_certificado_ahbb" | "td_configuracionglobal_ahbb" | "td_auditoria_aprobacion_ahbb"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      td_usuario_ahbb: {
        payload: Prisma.$td_usuario_ahbbPayload<ExtArgs>
        fields: Prisma.td_usuario_ahbbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.td_usuario_ahbbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_usuario_ahbbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.td_usuario_ahbbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_usuario_ahbbPayload>
          }
          findFirst: {
            args: Prisma.td_usuario_ahbbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_usuario_ahbbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.td_usuario_ahbbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_usuario_ahbbPayload>
          }
          findMany: {
            args: Prisma.td_usuario_ahbbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_usuario_ahbbPayload>[]
          }
          create: {
            args: Prisma.td_usuario_ahbbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_usuario_ahbbPayload>
          }
          createMany: {
            args: Prisma.td_usuario_ahbbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.td_usuario_ahbbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_usuario_ahbbPayload>[]
          }
          delete: {
            args: Prisma.td_usuario_ahbbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_usuario_ahbbPayload>
          }
          update: {
            args: Prisma.td_usuario_ahbbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_usuario_ahbbPayload>
          }
          deleteMany: {
            args: Prisma.td_usuario_ahbbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.td_usuario_ahbbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.td_usuario_ahbbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_usuario_ahbbPayload>[]
          }
          upsert: {
            args: Prisma.td_usuario_ahbbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_usuario_ahbbPayload>
          }
          aggregate: {
            args: Prisma.Td_usuario_ahbbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTd_usuario_ahbb>
          }
          groupBy: {
            args: Prisma.td_usuario_ahbbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Td_usuario_ahbbGroupByOutputType>[]
          }
          count: {
            args: Prisma.td_usuario_ahbbCountArgs<ExtArgs>
            result: $Utils.Optional<Td_usuario_ahbbCountAggregateOutputType> | number
          }
        }
      }
      td_curso_ahbb: {
        payload: Prisma.$td_curso_ahbbPayload<ExtArgs>
        fields: Prisma.td_curso_ahbbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.td_curso_ahbbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_curso_ahbbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.td_curso_ahbbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_curso_ahbbPayload>
          }
          findFirst: {
            args: Prisma.td_curso_ahbbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_curso_ahbbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.td_curso_ahbbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_curso_ahbbPayload>
          }
          findMany: {
            args: Prisma.td_curso_ahbbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_curso_ahbbPayload>[]
          }
          create: {
            args: Prisma.td_curso_ahbbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_curso_ahbbPayload>
          }
          createMany: {
            args: Prisma.td_curso_ahbbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.td_curso_ahbbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_curso_ahbbPayload>[]
          }
          delete: {
            args: Prisma.td_curso_ahbbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_curso_ahbbPayload>
          }
          update: {
            args: Prisma.td_curso_ahbbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_curso_ahbbPayload>
          }
          deleteMany: {
            args: Prisma.td_curso_ahbbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.td_curso_ahbbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.td_curso_ahbbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_curso_ahbbPayload>[]
          }
          upsert: {
            args: Prisma.td_curso_ahbbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_curso_ahbbPayload>
          }
          aggregate: {
            args: Prisma.Td_curso_ahbbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTd_curso_ahbb>
          }
          groupBy: {
            args: Prisma.td_curso_ahbbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Td_curso_ahbbGroupByOutputType>[]
          }
          count: {
            args: Prisma.td_curso_ahbbCountArgs<ExtArgs>
            result: $Utils.Optional<Td_curso_ahbbCountAggregateOutputType> | number
          }
        }
      }
      td_horario_ahbb: {
        payload: Prisma.$td_horario_ahbbPayload<ExtArgs>
        fields: Prisma.td_horario_ahbbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.td_horario_ahbbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_horario_ahbbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.td_horario_ahbbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_horario_ahbbPayload>
          }
          findFirst: {
            args: Prisma.td_horario_ahbbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_horario_ahbbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.td_horario_ahbbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_horario_ahbbPayload>
          }
          findMany: {
            args: Prisma.td_horario_ahbbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_horario_ahbbPayload>[]
          }
          create: {
            args: Prisma.td_horario_ahbbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_horario_ahbbPayload>
          }
          createMany: {
            args: Prisma.td_horario_ahbbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.td_horario_ahbbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_horario_ahbbPayload>[]
          }
          delete: {
            args: Prisma.td_horario_ahbbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_horario_ahbbPayload>
          }
          update: {
            args: Prisma.td_horario_ahbbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_horario_ahbbPayload>
          }
          deleteMany: {
            args: Prisma.td_horario_ahbbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.td_horario_ahbbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.td_horario_ahbbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_horario_ahbbPayload>[]
          }
          upsert: {
            args: Prisma.td_horario_ahbbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_horario_ahbbPayload>
          }
          aggregate: {
            args: Prisma.Td_horario_ahbbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTd_horario_ahbb>
          }
          groupBy: {
            args: Prisma.td_horario_ahbbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Td_horario_ahbbGroupByOutputType>[]
          }
          count: {
            args: Prisma.td_horario_ahbbCountArgs<ExtArgs>
            result: $Utils.Optional<Td_horario_ahbbCountAggregateOutputType> | number
          }
        }
      }
      td_inscripcion_ahbb: {
        payload: Prisma.$td_inscripcion_ahbbPayload<ExtArgs>
        fields: Prisma.td_inscripcion_ahbbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.td_inscripcion_ahbbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_inscripcion_ahbbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.td_inscripcion_ahbbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_inscripcion_ahbbPayload>
          }
          findFirst: {
            args: Prisma.td_inscripcion_ahbbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_inscripcion_ahbbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.td_inscripcion_ahbbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_inscripcion_ahbbPayload>
          }
          findMany: {
            args: Prisma.td_inscripcion_ahbbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_inscripcion_ahbbPayload>[]
          }
          create: {
            args: Prisma.td_inscripcion_ahbbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_inscripcion_ahbbPayload>
          }
          createMany: {
            args: Prisma.td_inscripcion_ahbbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.td_inscripcion_ahbbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_inscripcion_ahbbPayload>[]
          }
          delete: {
            args: Prisma.td_inscripcion_ahbbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_inscripcion_ahbbPayload>
          }
          update: {
            args: Prisma.td_inscripcion_ahbbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_inscripcion_ahbbPayload>
          }
          deleteMany: {
            args: Prisma.td_inscripcion_ahbbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.td_inscripcion_ahbbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.td_inscripcion_ahbbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_inscripcion_ahbbPayload>[]
          }
          upsert: {
            args: Prisma.td_inscripcion_ahbbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_inscripcion_ahbbPayload>
          }
          aggregate: {
            args: Prisma.Td_inscripcion_ahbbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTd_inscripcion_ahbb>
          }
          groupBy: {
            args: Prisma.td_inscripcion_ahbbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Td_inscripcion_ahbbGroupByOutputType>[]
          }
          count: {
            args: Prisma.td_inscripcion_ahbbCountArgs<ExtArgs>
            result: $Utils.Optional<Td_inscripcion_ahbbCountAggregateOutputType> | number
          }
        }
      }
      td_certificado_ahbb: {
        payload: Prisma.$td_certificado_ahbbPayload<ExtArgs>
        fields: Prisma.td_certificado_ahbbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.td_certificado_ahbbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_certificado_ahbbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.td_certificado_ahbbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_certificado_ahbbPayload>
          }
          findFirst: {
            args: Prisma.td_certificado_ahbbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_certificado_ahbbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.td_certificado_ahbbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_certificado_ahbbPayload>
          }
          findMany: {
            args: Prisma.td_certificado_ahbbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_certificado_ahbbPayload>[]
          }
          create: {
            args: Prisma.td_certificado_ahbbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_certificado_ahbbPayload>
          }
          createMany: {
            args: Prisma.td_certificado_ahbbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.td_certificado_ahbbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_certificado_ahbbPayload>[]
          }
          delete: {
            args: Prisma.td_certificado_ahbbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_certificado_ahbbPayload>
          }
          update: {
            args: Prisma.td_certificado_ahbbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_certificado_ahbbPayload>
          }
          deleteMany: {
            args: Prisma.td_certificado_ahbbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.td_certificado_ahbbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.td_certificado_ahbbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_certificado_ahbbPayload>[]
          }
          upsert: {
            args: Prisma.td_certificado_ahbbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_certificado_ahbbPayload>
          }
          aggregate: {
            args: Prisma.Td_certificado_ahbbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTd_certificado_ahbb>
          }
          groupBy: {
            args: Prisma.td_certificado_ahbbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Td_certificado_ahbbGroupByOutputType>[]
          }
          count: {
            args: Prisma.td_certificado_ahbbCountArgs<ExtArgs>
            result: $Utils.Optional<Td_certificado_ahbbCountAggregateOutputType> | number
          }
        }
      }
      td_configuracionglobal_ahbb: {
        payload: Prisma.$td_configuracionglobal_ahbbPayload<ExtArgs>
        fields: Prisma.td_configuracionglobal_ahbbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.td_configuracionglobal_ahbbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_configuracionglobal_ahbbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.td_configuracionglobal_ahbbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_configuracionglobal_ahbbPayload>
          }
          findFirst: {
            args: Prisma.td_configuracionglobal_ahbbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_configuracionglobal_ahbbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.td_configuracionglobal_ahbbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_configuracionglobal_ahbbPayload>
          }
          findMany: {
            args: Prisma.td_configuracionglobal_ahbbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_configuracionglobal_ahbbPayload>[]
          }
          create: {
            args: Prisma.td_configuracionglobal_ahbbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_configuracionglobal_ahbbPayload>
          }
          createMany: {
            args: Prisma.td_configuracionglobal_ahbbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.td_configuracionglobal_ahbbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_configuracionglobal_ahbbPayload>[]
          }
          delete: {
            args: Prisma.td_configuracionglobal_ahbbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_configuracionglobal_ahbbPayload>
          }
          update: {
            args: Prisma.td_configuracionglobal_ahbbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_configuracionglobal_ahbbPayload>
          }
          deleteMany: {
            args: Prisma.td_configuracionglobal_ahbbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.td_configuracionglobal_ahbbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.td_configuracionglobal_ahbbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_configuracionglobal_ahbbPayload>[]
          }
          upsert: {
            args: Prisma.td_configuracionglobal_ahbbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_configuracionglobal_ahbbPayload>
          }
          aggregate: {
            args: Prisma.Td_configuracionglobal_ahbbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTd_configuracionglobal_ahbb>
          }
          groupBy: {
            args: Prisma.td_configuracionglobal_ahbbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Td_configuracionglobal_ahbbGroupByOutputType>[]
          }
          count: {
            args: Prisma.td_configuracionglobal_ahbbCountArgs<ExtArgs>
            result: $Utils.Optional<Td_configuracionglobal_ahbbCountAggregateOutputType> | number
          }
        }
      }
      td_auditoria_aprobacion_ahbb: {
        payload: Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>
        fields: Prisma.td_auditoria_aprobacion_ahbbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.td_auditoria_aprobacion_ahbbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_auditoria_aprobacion_ahbbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.td_auditoria_aprobacion_ahbbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_auditoria_aprobacion_ahbbPayload>
          }
          findFirst: {
            args: Prisma.td_auditoria_aprobacion_ahbbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_auditoria_aprobacion_ahbbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.td_auditoria_aprobacion_ahbbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_auditoria_aprobacion_ahbbPayload>
          }
          findMany: {
            args: Prisma.td_auditoria_aprobacion_ahbbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_auditoria_aprobacion_ahbbPayload>[]
          }
          create: {
            args: Prisma.td_auditoria_aprobacion_ahbbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_auditoria_aprobacion_ahbbPayload>
          }
          createMany: {
            args: Prisma.td_auditoria_aprobacion_ahbbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.td_auditoria_aprobacion_ahbbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_auditoria_aprobacion_ahbbPayload>[]
          }
          delete: {
            args: Prisma.td_auditoria_aprobacion_ahbbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_auditoria_aprobacion_ahbbPayload>
          }
          update: {
            args: Prisma.td_auditoria_aprobacion_ahbbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_auditoria_aprobacion_ahbbPayload>
          }
          deleteMany: {
            args: Prisma.td_auditoria_aprobacion_ahbbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.td_auditoria_aprobacion_ahbbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.td_auditoria_aprobacion_ahbbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_auditoria_aprobacion_ahbbPayload>[]
          }
          upsert: {
            args: Prisma.td_auditoria_aprobacion_ahbbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$td_auditoria_aprobacion_ahbbPayload>
          }
          aggregate: {
            args: Prisma.Td_auditoria_aprobacion_ahbbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTd_auditoria_aprobacion_ahbb>
          }
          groupBy: {
            args: Prisma.td_auditoria_aprobacion_ahbbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Td_auditoria_aprobacion_ahbbGroupByOutputType>[]
          }
          count: {
            args: Prisma.td_auditoria_aprobacion_ahbbCountArgs<ExtArgs>
            result: $Utils.Optional<Td_auditoria_aprobacion_ahbbCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    td_usuario_ahbb?: td_usuario_ahbbOmit
    td_curso_ahbb?: td_curso_ahbbOmit
    td_horario_ahbb?: td_horario_ahbbOmit
    td_inscripcion_ahbb?: td_inscripcion_ahbbOmit
    td_certificado_ahbb?: td_certificado_ahbbOmit
    td_configuracionglobal_ahbb?: td_configuracionglobal_ahbbOmit
    td_auditoria_aprobacion_ahbb?: td_auditoria_aprobacion_ahbbOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type Td_usuario_ahbbCountOutputType
   */

  export type Td_usuario_ahbbCountOutputType = {
    cursos: number
    inscripciones: number
    auditoriasAprobadas_ahbb: number
    auditoriasUsuario_ahbb: number
  }

  export type Td_usuario_ahbbCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | Td_usuario_ahbbCountOutputTypeCountCursosArgs
    inscripciones?: boolean | Td_usuario_ahbbCountOutputTypeCountInscripcionesArgs
    auditoriasAprobadas_ahbb?: boolean | Td_usuario_ahbbCountOutputTypeCountAuditoriasAprobadas_ahbbArgs
    auditoriasUsuario_ahbb?: boolean | Td_usuario_ahbbCountOutputTypeCountAuditoriasUsuario_ahbbArgs
  }

  // Custom InputTypes
  /**
   * Td_usuario_ahbbCountOutputType without action
   */
  export type Td_usuario_ahbbCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Td_usuario_ahbbCountOutputType
     */
    select?: Td_usuario_ahbbCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Td_usuario_ahbbCountOutputType without action
   */
  export type Td_usuario_ahbbCountOutputTypeCountCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_curso_ahbbWhereInput
  }

  /**
   * Td_usuario_ahbbCountOutputType without action
   */
  export type Td_usuario_ahbbCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_inscripcion_ahbbWhereInput
  }

  /**
   * Td_usuario_ahbbCountOutputType without action
   */
  export type Td_usuario_ahbbCountOutputTypeCountAuditoriasAprobadas_ahbbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_auditoria_aprobacion_ahbbWhereInput
  }

  /**
   * Td_usuario_ahbbCountOutputType without action
   */
  export type Td_usuario_ahbbCountOutputTypeCountAuditoriasUsuario_ahbbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_auditoria_aprobacion_ahbbWhereInput
  }


  /**
   * Count Type Td_curso_ahbbCountOutputType
   */

  export type Td_curso_ahbbCountOutputType = {
    prelaciones: number
    horarios: number
    inscripciones: number
  }

  export type Td_curso_ahbbCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prelaciones?: boolean | Td_curso_ahbbCountOutputTypeCountPrelacionesArgs
    horarios?: boolean | Td_curso_ahbbCountOutputTypeCountHorariosArgs
    inscripciones?: boolean | Td_curso_ahbbCountOutputTypeCountInscripcionesArgs
  }

  // Custom InputTypes
  /**
   * Td_curso_ahbbCountOutputType without action
   */
  export type Td_curso_ahbbCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Td_curso_ahbbCountOutputType
     */
    select?: Td_curso_ahbbCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Td_curso_ahbbCountOutputType without action
   */
  export type Td_curso_ahbbCountOutputTypeCountPrelacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_curso_ahbbWhereInput
  }

  /**
   * Td_curso_ahbbCountOutputType without action
   */
  export type Td_curso_ahbbCountOutputTypeCountHorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_horario_ahbbWhereInput
  }

  /**
   * Td_curso_ahbbCountOutputType without action
   */
  export type Td_curso_ahbbCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_inscripcion_ahbbWhereInput
  }


  /**
   * Models
   */

  /**
   * Model td_usuario_ahbb
   */

  export type AggregateTd_usuario_ahbb = {
    _count: Td_usuario_ahbbCountAggregateOutputType | null
    _avg: Td_usuario_ahbbAvgAggregateOutputType | null
    _sum: Td_usuario_ahbbSumAggregateOutputType | null
    _min: Td_usuario_ahbbMinAggregateOutputType | null
    _max: Td_usuario_ahbbMaxAggregateOutputType | null
  }

  export type Td_usuario_ahbbAvgAggregateOutputType = {
    id_usuario_ahbb: number | null
    aprobadoPorUsuarioId_ahbb: number | null
  }

  export type Td_usuario_ahbbSumAggregateOutputType = {
    id_usuario_ahbb: number | null
    aprobadoPorUsuarioId_ahbb: number | null
  }

  export type Td_usuario_ahbbMinAggregateOutputType = {
    id_usuario_ahbb: number | null
    cedula_ahbb: string | null
    nombre_ahbb: string | null
    apellido_ahbb: string | null
    correo_ahbb: string | null
    contrasena_ahbb: string | null
    rol_ahbb: string | null
    firmaDigital_ahbb: string | null
    estadoCuenta_ahbb: string | null
    requiereCambioContrasena_ahbb: boolean | null
    referenciaPagoMovil_ahbb: string | null
    aprobadoPorUsuarioId_ahbb: number | null
    creadoEn_ahbb: Date | null
    actualizadoEn_ahbb: Date | null
  }

  export type Td_usuario_ahbbMaxAggregateOutputType = {
    id_usuario_ahbb: number | null
    cedula_ahbb: string | null
    nombre_ahbb: string | null
    apellido_ahbb: string | null
    correo_ahbb: string | null
    contrasena_ahbb: string | null
    rol_ahbb: string | null
    firmaDigital_ahbb: string | null
    estadoCuenta_ahbb: string | null
    requiereCambioContrasena_ahbb: boolean | null
    referenciaPagoMovil_ahbb: string | null
    aprobadoPorUsuarioId_ahbb: number | null
    creadoEn_ahbb: Date | null
    actualizadoEn_ahbb: Date | null
  }

  export type Td_usuario_ahbbCountAggregateOutputType = {
    id_usuario_ahbb: number
    cedula_ahbb: number
    nombre_ahbb: number
    apellido_ahbb: number
    correo_ahbb: number
    contrasena_ahbb: number
    rol_ahbb: number
    firmaDigital_ahbb: number
    estadoCuenta_ahbb: number
    requiereCambioContrasena_ahbb: number
    referenciaPagoMovil_ahbb: number
    aprobadoPorUsuarioId_ahbb: number
    creadoEn_ahbb: number
    actualizadoEn_ahbb: number
    _all: number
  }


  export type Td_usuario_ahbbAvgAggregateInputType = {
    id_usuario_ahbb?: true
    aprobadoPorUsuarioId_ahbb?: true
  }

  export type Td_usuario_ahbbSumAggregateInputType = {
    id_usuario_ahbb?: true
    aprobadoPorUsuarioId_ahbb?: true
  }

  export type Td_usuario_ahbbMinAggregateInputType = {
    id_usuario_ahbb?: true
    cedula_ahbb?: true
    nombre_ahbb?: true
    apellido_ahbb?: true
    correo_ahbb?: true
    contrasena_ahbb?: true
    rol_ahbb?: true
    firmaDigital_ahbb?: true
    estadoCuenta_ahbb?: true
    requiereCambioContrasena_ahbb?: true
    referenciaPagoMovil_ahbb?: true
    aprobadoPorUsuarioId_ahbb?: true
    creadoEn_ahbb?: true
    actualizadoEn_ahbb?: true
  }

  export type Td_usuario_ahbbMaxAggregateInputType = {
    id_usuario_ahbb?: true
    cedula_ahbb?: true
    nombre_ahbb?: true
    apellido_ahbb?: true
    correo_ahbb?: true
    contrasena_ahbb?: true
    rol_ahbb?: true
    firmaDigital_ahbb?: true
    estadoCuenta_ahbb?: true
    requiereCambioContrasena_ahbb?: true
    referenciaPagoMovil_ahbb?: true
    aprobadoPorUsuarioId_ahbb?: true
    creadoEn_ahbb?: true
    actualizadoEn_ahbb?: true
  }

  export type Td_usuario_ahbbCountAggregateInputType = {
    id_usuario_ahbb?: true
    cedula_ahbb?: true
    nombre_ahbb?: true
    apellido_ahbb?: true
    correo_ahbb?: true
    contrasena_ahbb?: true
    rol_ahbb?: true
    firmaDigital_ahbb?: true
    estadoCuenta_ahbb?: true
    requiereCambioContrasena_ahbb?: true
    referenciaPagoMovil_ahbb?: true
    aprobadoPorUsuarioId_ahbb?: true
    creadoEn_ahbb?: true
    actualizadoEn_ahbb?: true
    _all?: true
  }

  export type Td_usuario_ahbbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_usuario_ahbb to aggregate.
     */
    where?: td_usuario_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_usuario_ahbbs to fetch.
     */
    orderBy?: td_usuario_ahbbOrderByWithRelationInput | td_usuario_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: td_usuario_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_usuario_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_usuario_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned td_usuario_ahbbs
    **/
    _count?: true | Td_usuario_ahbbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Td_usuario_ahbbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Td_usuario_ahbbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Td_usuario_ahbbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Td_usuario_ahbbMaxAggregateInputType
  }

  export type GetTd_usuario_ahbbAggregateType<T extends Td_usuario_ahbbAggregateArgs> = {
        [P in keyof T & keyof AggregateTd_usuario_ahbb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTd_usuario_ahbb[P]>
      : GetScalarType<T[P], AggregateTd_usuario_ahbb[P]>
  }




  export type td_usuario_ahbbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_usuario_ahbbWhereInput
    orderBy?: td_usuario_ahbbOrderByWithAggregationInput | td_usuario_ahbbOrderByWithAggregationInput[]
    by: Td_usuario_ahbbScalarFieldEnum[] | Td_usuario_ahbbScalarFieldEnum
    having?: td_usuario_ahbbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Td_usuario_ahbbCountAggregateInputType | true
    _avg?: Td_usuario_ahbbAvgAggregateInputType
    _sum?: Td_usuario_ahbbSumAggregateInputType
    _min?: Td_usuario_ahbbMinAggregateInputType
    _max?: Td_usuario_ahbbMaxAggregateInputType
  }

  export type Td_usuario_ahbbGroupByOutputType = {
    id_usuario_ahbb: number
    cedula_ahbb: string
    nombre_ahbb: string
    apellido_ahbb: string
    correo_ahbb: string
    contrasena_ahbb: string
    rol_ahbb: string | null
    firmaDigital_ahbb: string | null
    estadoCuenta_ahbb: string
    requiereCambioContrasena_ahbb: boolean
    referenciaPagoMovil_ahbb: string | null
    aprobadoPorUsuarioId_ahbb: number | null
    creadoEn_ahbb: Date | null
    actualizadoEn_ahbb: Date | null
    _count: Td_usuario_ahbbCountAggregateOutputType | null
    _avg: Td_usuario_ahbbAvgAggregateOutputType | null
    _sum: Td_usuario_ahbbSumAggregateOutputType | null
    _min: Td_usuario_ahbbMinAggregateOutputType | null
    _max: Td_usuario_ahbbMaxAggregateOutputType | null
  }

  type GetTd_usuario_ahbbGroupByPayload<T extends td_usuario_ahbbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Td_usuario_ahbbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Td_usuario_ahbbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Td_usuario_ahbbGroupByOutputType[P]>
            : GetScalarType<T[P], Td_usuario_ahbbGroupByOutputType[P]>
        }
      >
    >


  export type td_usuario_ahbbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario_ahbb?: boolean
    cedula_ahbb?: boolean
    nombre_ahbb?: boolean
    apellido_ahbb?: boolean
    correo_ahbb?: boolean
    contrasena_ahbb?: boolean
    rol_ahbb?: boolean
    firmaDigital_ahbb?: boolean
    estadoCuenta_ahbb?: boolean
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: boolean
    aprobadoPorUsuarioId_ahbb?: boolean
    creadoEn_ahbb?: boolean
    actualizadoEn_ahbb?: boolean
    cursos?: boolean | td_usuario_ahbb$cursosArgs<ExtArgs>
    inscripciones?: boolean | td_usuario_ahbb$inscripcionesArgs<ExtArgs>
    auditoriasAprobadas_ahbb?: boolean | td_usuario_ahbb$auditoriasAprobadas_ahbbArgs<ExtArgs>
    auditoriasUsuario_ahbb?: boolean | td_usuario_ahbb$auditoriasUsuario_ahbbArgs<ExtArgs>
    _count?: boolean | Td_usuario_ahbbCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["td_usuario_ahbb"]>

  export type td_usuario_ahbbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario_ahbb?: boolean
    cedula_ahbb?: boolean
    nombre_ahbb?: boolean
    apellido_ahbb?: boolean
    correo_ahbb?: boolean
    contrasena_ahbb?: boolean
    rol_ahbb?: boolean
    firmaDigital_ahbb?: boolean
    estadoCuenta_ahbb?: boolean
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: boolean
    aprobadoPorUsuarioId_ahbb?: boolean
    creadoEn_ahbb?: boolean
    actualizadoEn_ahbb?: boolean
  }, ExtArgs["result"]["td_usuario_ahbb"]>

  export type td_usuario_ahbbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario_ahbb?: boolean
    cedula_ahbb?: boolean
    nombre_ahbb?: boolean
    apellido_ahbb?: boolean
    correo_ahbb?: boolean
    contrasena_ahbb?: boolean
    rol_ahbb?: boolean
    firmaDigital_ahbb?: boolean
    estadoCuenta_ahbb?: boolean
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: boolean
    aprobadoPorUsuarioId_ahbb?: boolean
    creadoEn_ahbb?: boolean
    actualizadoEn_ahbb?: boolean
  }, ExtArgs["result"]["td_usuario_ahbb"]>

  export type td_usuario_ahbbSelectScalar = {
    id_usuario_ahbb?: boolean
    cedula_ahbb?: boolean
    nombre_ahbb?: boolean
    apellido_ahbb?: boolean
    correo_ahbb?: boolean
    contrasena_ahbb?: boolean
    rol_ahbb?: boolean
    firmaDigital_ahbb?: boolean
    estadoCuenta_ahbb?: boolean
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: boolean
    aprobadoPorUsuarioId_ahbb?: boolean
    creadoEn_ahbb?: boolean
    actualizadoEn_ahbb?: boolean
  }

  export type td_usuario_ahbbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario_ahbb" | "cedula_ahbb" | "nombre_ahbb" | "apellido_ahbb" | "correo_ahbb" | "contrasena_ahbb" | "rol_ahbb" | "firmaDigital_ahbb" | "estadoCuenta_ahbb" | "requiereCambioContrasena_ahbb" | "referenciaPagoMovil_ahbb" | "aprobadoPorUsuarioId_ahbb" | "creadoEn_ahbb" | "actualizadoEn_ahbb", ExtArgs["result"]["td_usuario_ahbb"]>
  export type td_usuario_ahbbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | td_usuario_ahbb$cursosArgs<ExtArgs>
    inscripciones?: boolean | td_usuario_ahbb$inscripcionesArgs<ExtArgs>
    auditoriasAprobadas_ahbb?: boolean | td_usuario_ahbb$auditoriasAprobadas_ahbbArgs<ExtArgs>
    auditoriasUsuario_ahbb?: boolean | td_usuario_ahbb$auditoriasUsuario_ahbbArgs<ExtArgs>
    _count?: boolean | Td_usuario_ahbbCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type td_usuario_ahbbIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type td_usuario_ahbbIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $td_usuario_ahbbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "td_usuario_ahbb"
    objects: {
      cursos: Prisma.$td_curso_ahbbPayload<ExtArgs>[]
      inscripciones: Prisma.$td_inscripcion_ahbbPayload<ExtArgs>[]
      auditoriasAprobadas_ahbb: Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>[]
      auditoriasUsuario_ahbb: Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario_ahbb: number
      cedula_ahbb: string
      nombre_ahbb: string
      apellido_ahbb: string
      correo_ahbb: string
      contrasena_ahbb: string
      rol_ahbb: string | null
      firmaDigital_ahbb: string | null
      estadoCuenta_ahbb: string
      requiereCambioContrasena_ahbb: boolean
      referenciaPagoMovil_ahbb: string | null
      aprobadoPorUsuarioId_ahbb: number | null
      creadoEn_ahbb: Date | null
      actualizadoEn_ahbb: Date | null
    }, ExtArgs["result"]["td_usuario_ahbb"]>
    composites: {}
  }

  type td_usuario_ahbbGetPayload<S extends boolean | null | undefined | td_usuario_ahbbDefaultArgs> = $Result.GetResult<Prisma.$td_usuario_ahbbPayload, S>

  type td_usuario_ahbbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<td_usuario_ahbbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Td_usuario_ahbbCountAggregateInputType | true
    }

  export interface td_usuario_ahbbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['td_usuario_ahbb'], meta: { name: 'td_usuario_ahbb' } }
    /**
     * Find zero or one Td_usuario_ahbb that matches the filter.
     * @param {td_usuario_ahbbFindUniqueArgs} args - Arguments to find a Td_usuario_ahbb
     * @example
     * // Get one Td_usuario_ahbb
     * const td_usuario_ahbb = await prisma.td_usuario_ahbb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends td_usuario_ahbbFindUniqueArgs>(args: SelectSubset<T, td_usuario_ahbbFindUniqueArgs<ExtArgs>>): Prisma__td_usuario_ahbbClient<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Td_usuario_ahbb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {td_usuario_ahbbFindUniqueOrThrowArgs} args - Arguments to find a Td_usuario_ahbb
     * @example
     * // Get one Td_usuario_ahbb
     * const td_usuario_ahbb = await prisma.td_usuario_ahbb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends td_usuario_ahbbFindUniqueOrThrowArgs>(args: SelectSubset<T, td_usuario_ahbbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__td_usuario_ahbbClient<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_usuario_ahbb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_usuario_ahbbFindFirstArgs} args - Arguments to find a Td_usuario_ahbb
     * @example
     * // Get one Td_usuario_ahbb
     * const td_usuario_ahbb = await prisma.td_usuario_ahbb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends td_usuario_ahbbFindFirstArgs>(args?: SelectSubset<T, td_usuario_ahbbFindFirstArgs<ExtArgs>>): Prisma__td_usuario_ahbbClient<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_usuario_ahbb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_usuario_ahbbFindFirstOrThrowArgs} args - Arguments to find a Td_usuario_ahbb
     * @example
     * // Get one Td_usuario_ahbb
     * const td_usuario_ahbb = await prisma.td_usuario_ahbb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends td_usuario_ahbbFindFirstOrThrowArgs>(args?: SelectSubset<T, td_usuario_ahbbFindFirstOrThrowArgs<ExtArgs>>): Prisma__td_usuario_ahbbClient<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Td_usuario_ahbbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_usuario_ahbbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Td_usuario_ahbbs
     * const td_usuario_ahbbs = await prisma.td_usuario_ahbb.findMany()
     * 
     * // Get first 10 Td_usuario_ahbbs
     * const td_usuario_ahbbs = await prisma.td_usuario_ahbb.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario_ahbb`
     * const td_usuario_ahbbWithId_usuario_ahbbOnly = await prisma.td_usuario_ahbb.findMany({ select: { id_usuario_ahbb: true } })
     * 
     */
    findMany<T extends td_usuario_ahbbFindManyArgs>(args?: SelectSubset<T, td_usuario_ahbbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Td_usuario_ahbb.
     * @param {td_usuario_ahbbCreateArgs} args - Arguments to create a Td_usuario_ahbb.
     * @example
     * // Create one Td_usuario_ahbb
     * const Td_usuario_ahbb = await prisma.td_usuario_ahbb.create({
     *   data: {
     *     // ... data to create a Td_usuario_ahbb
     *   }
     * })
     * 
     */
    create<T extends td_usuario_ahbbCreateArgs>(args: SelectSubset<T, td_usuario_ahbbCreateArgs<ExtArgs>>): Prisma__td_usuario_ahbbClient<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Td_usuario_ahbbs.
     * @param {td_usuario_ahbbCreateManyArgs} args - Arguments to create many Td_usuario_ahbbs.
     * @example
     * // Create many Td_usuario_ahbbs
     * const td_usuario_ahbb = await prisma.td_usuario_ahbb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends td_usuario_ahbbCreateManyArgs>(args?: SelectSubset<T, td_usuario_ahbbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Td_usuario_ahbbs and returns the data saved in the database.
     * @param {td_usuario_ahbbCreateManyAndReturnArgs} args - Arguments to create many Td_usuario_ahbbs.
     * @example
     * // Create many Td_usuario_ahbbs
     * const td_usuario_ahbb = await prisma.td_usuario_ahbb.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Td_usuario_ahbbs and only return the `id_usuario_ahbb`
     * const td_usuario_ahbbWithId_usuario_ahbbOnly = await prisma.td_usuario_ahbb.createManyAndReturn({
     *   select: { id_usuario_ahbb: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends td_usuario_ahbbCreateManyAndReturnArgs>(args?: SelectSubset<T, td_usuario_ahbbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Td_usuario_ahbb.
     * @param {td_usuario_ahbbDeleteArgs} args - Arguments to delete one Td_usuario_ahbb.
     * @example
     * // Delete one Td_usuario_ahbb
     * const Td_usuario_ahbb = await prisma.td_usuario_ahbb.delete({
     *   where: {
     *     // ... filter to delete one Td_usuario_ahbb
     *   }
     * })
     * 
     */
    delete<T extends td_usuario_ahbbDeleteArgs>(args: SelectSubset<T, td_usuario_ahbbDeleteArgs<ExtArgs>>): Prisma__td_usuario_ahbbClient<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Td_usuario_ahbb.
     * @param {td_usuario_ahbbUpdateArgs} args - Arguments to update one Td_usuario_ahbb.
     * @example
     * // Update one Td_usuario_ahbb
     * const td_usuario_ahbb = await prisma.td_usuario_ahbb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends td_usuario_ahbbUpdateArgs>(args: SelectSubset<T, td_usuario_ahbbUpdateArgs<ExtArgs>>): Prisma__td_usuario_ahbbClient<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Td_usuario_ahbbs.
     * @param {td_usuario_ahbbDeleteManyArgs} args - Arguments to filter Td_usuario_ahbbs to delete.
     * @example
     * // Delete a few Td_usuario_ahbbs
     * const { count } = await prisma.td_usuario_ahbb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends td_usuario_ahbbDeleteManyArgs>(args?: SelectSubset<T, td_usuario_ahbbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_usuario_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_usuario_ahbbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Td_usuario_ahbbs
     * const td_usuario_ahbb = await prisma.td_usuario_ahbb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends td_usuario_ahbbUpdateManyArgs>(args: SelectSubset<T, td_usuario_ahbbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_usuario_ahbbs and returns the data updated in the database.
     * @param {td_usuario_ahbbUpdateManyAndReturnArgs} args - Arguments to update many Td_usuario_ahbbs.
     * @example
     * // Update many Td_usuario_ahbbs
     * const td_usuario_ahbb = await prisma.td_usuario_ahbb.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Td_usuario_ahbbs and only return the `id_usuario_ahbb`
     * const td_usuario_ahbbWithId_usuario_ahbbOnly = await prisma.td_usuario_ahbb.updateManyAndReturn({
     *   select: { id_usuario_ahbb: true },
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
    updateManyAndReturn<T extends td_usuario_ahbbUpdateManyAndReturnArgs>(args: SelectSubset<T, td_usuario_ahbbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Td_usuario_ahbb.
     * @param {td_usuario_ahbbUpsertArgs} args - Arguments to update or create a Td_usuario_ahbb.
     * @example
     * // Update or create a Td_usuario_ahbb
     * const td_usuario_ahbb = await prisma.td_usuario_ahbb.upsert({
     *   create: {
     *     // ... data to create a Td_usuario_ahbb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Td_usuario_ahbb we want to update
     *   }
     * })
     */
    upsert<T extends td_usuario_ahbbUpsertArgs>(args: SelectSubset<T, td_usuario_ahbbUpsertArgs<ExtArgs>>): Prisma__td_usuario_ahbbClient<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Td_usuario_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_usuario_ahbbCountArgs} args - Arguments to filter Td_usuario_ahbbs to count.
     * @example
     * // Count the number of Td_usuario_ahbbs
     * const count = await prisma.td_usuario_ahbb.count({
     *   where: {
     *     // ... the filter for the Td_usuario_ahbbs we want to count
     *   }
     * })
    **/
    count<T extends td_usuario_ahbbCountArgs>(
      args?: Subset<T, td_usuario_ahbbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Td_usuario_ahbbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Td_usuario_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Td_usuario_ahbbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Td_usuario_ahbbAggregateArgs>(args: Subset<T, Td_usuario_ahbbAggregateArgs>): Prisma.PrismaPromise<GetTd_usuario_ahbbAggregateType<T>>

    /**
     * Group by Td_usuario_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_usuario_ahbbGroupByArgs} args - Group by arguments.
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
      T extends td_usuario_ahbbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: td_usuario_ahbbGroupByArgs['orderBy'] }
        : { orderBy?: td_usuario_ahbbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, td_usuario_ahbbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTd_usuario_ahbbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the td_usuario_ahbb model
   */
  readonly fields: td_usuario_ahbbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for td_usuario_ahbb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__td_usuario_ahbbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursos<T extends td_usuario_ahbb$cursosArgs<ExtArgs> = {}>(args?: Subset<T, td_usuario_ahbb$cursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inscripciones<T extends td_usuario_ahbb$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, td_usuario_ahbb$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditoriasAprobadas_ahbb<T extends td_usuario_ahbb$auditoriasAprobadas_ahbbArgs<ExtArgs> = {}>(args?: Subset<T, td_usuario_ahbb$auditoriasAprobadas_ahbbArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditoriasUsuario_ahbb<T extends td_usuario_ahbb$auditoriasUsuario_ahbbArgs<ExtArgs> = {}>(args?: Subset<T, td_usuario_ahbb$auditoriasUsuario_ahbbArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the td_usuario_ahbb model
   */
  interface td_usuario_ahbbFieldRefs {
    readonly id_usuario_ahbb: FieldRef<"td_usuario_ahbb", 'Int'>
    readonly cedula_ahbb: FieldRef<"td_usuario_ahbb", 'String'>
    readonly nombre_ahbb: FieldRef<"td_usuario_ahbb", 'String'>
    readonly apellido_ahbb: FieldRef<"td_usuario_ahbb", 'String'>
    readonly correo_ahbb: FieldRef<"td_usuario_ahbb", 'String'>
    readonly contrasena_ahbb: FieldRef<"td_usuario_ahbb", 'String'>
    readonly rol_ahbb: FieldRef<"td_usuario_ahbb", 'String'>
    readonly firmaDigital_ahbb: FieldRef<"td_usuario_ahbb", 'String'>
    readonly estadoCuenta_ahbb: FieldRef<"td_usuario_ahbb", 'String'>
    readonly requiereCambioContrasena_ahbb: FieldRef<"td_usuario_ahbb", 'Boolean'>
    readonly referenciaPagoMovil_ahbb: FieldRef<"td_usuario_ahbb", 'String'>
    readonly aprobadoPorUsuarioId_ahbb: FieldRef<"td_usuario_ahbb", 'Int'>
    readonly creadoEn_ahbb: FieldRef<"td_usuario_ahbb", 'DateTime'>
    readonly actualizadoEn_ahbb: FieldRef<"td_usuario_ahbb", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * td_usuario_ahbb findUnique
   */
  export type td_usuario_ahbbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_usuario_ahbb
     */
    select?: td_usuario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_usuario_ahbb
     */
    omit?: td_usuario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_usuario_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_usuario_ahbb to fetch.
     */
    where: td_usuario_ahbbWhereUniqueInput
  }

  /**
   * td_usuario_ahbb findUniqueOrThrow
   */
  export type td_usuario_ahbbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_usuario_ahbb
     */
    select?: td_usuario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_usuario_ahbb
     */
    omit?: td_usuario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_usuario_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_usuario_ahbb to fetch.
     */
    where: td_usuario_ahbbWhereUniqueInput
  }

  /**
   * td_usuario_ahbb findFirst
   */
  export type td_usuario_ahbbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_usuario_ahbb
     */
    select?: td_usuario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_usuario_ahbb
     */
    omit?: td_usuario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_usuario_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_usuario_ahbb to fetch.
     */
    where?: td_usuario_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_usuario_ahbbs to fetch.
     */
    orderBy?: td_usuario_ahbbOrderByWithRelationInput | td_usuario_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_usuario_ahbbs.
     */
    cursor?: td_usuario_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_usuario_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_usuario_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_usuario_ahbbs.
     */
    distinct?: Td_usuario_ahbbScalarFieldEnum | Td_usuario_ahbbScalarFieldEnum[]
  }

  /**
   * td_usuario_ahbb findFirstOrThrow
   */
  export type td_usuario_ahbbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_usuario_ahbb
     */
    select?: td_usuario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_usuario_ahbb
     */
    omit?: td_usuario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_usuario_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_usuario_ahbb to fetch.
     */
    where?: td_usuario_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_usuario_ahbbs to fetch.
     */
    orderBy?: td_usuario_ahbbOrderByWithRelationInput | td_usuario_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_usuario_ahbbs.
     */
    cursor?: td_usuario_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_usuario_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_usuario_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_usuario_ahbbs.
     */
    distinct?: Td_usuario_ahbbScalarFieldEnum | Td_usuario_ahbbScalarFieldEnum[]
  }

  /**
   * td_usuario_ahbb findMany
   */
  export type td_usuario_ahbbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_usuario_ahbb
     */
    select?: td_usuario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_usuario_ahbb
     */
    omit?: td_usuario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_usuario_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_usuario_ahbbs to fetch.
     */
    where?: td_usuario_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_usuario_ahbbs to fetch.
     */
    orderBy?: td_usuario_ahbbOrderByWithRelationInput | td_usuario_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing td_usuario_ahbbs.
     */
    cursor?: td_usuario_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_usuario_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_usuario_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_usuario_ahbbs.
     */
    distinct?: Td_usuario_ahbbScalarFieldEnum | Td_usuario_ahbbScalarFieldEnum[]
  }

  /**
   * td_usuario_ahbb create
   */
  export type td_usuario_ahbbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_usuario_ahbb
     */
    select?: td_usuario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_usuario_ahbb
     */
    omit?: td_usuario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_usuario_ahbbInclude<ExtArgs> | null
    /**
     * The data needed to create a td_usuario_ahbb.
     */
    data: XOR<td_usuario_ahbbCreateInput, td_usuario_ahbbUncheckedCreateInput>
  }

  /**
   * td_usuario_ahbb createMany
   */
  export type td_usuario_ahbbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many td_usuario_ahbbs.
     */
    data: td_usuario_ahbbCreateManyInput | td_usuario_ahbbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * td_usuario_ahbb createManyAndReturn
   */
  export type td_usuario_ahbbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_usuario_ahbb
     */
    select?: td_usuario_ahbbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_usuario_ahbb
     */
    omit?: td_usuario_ahbbOmit<ExtArgs> | null
    /**
     * The data used to create many td_usuario_ahbbs.
     */
    data: td_usuario_ahbbCreateManyInput | td_usuario_ahbbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * td_usuario_ahbb update
   */
  export type td_usuario_ahbbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_usuario_ahbb
     */
    select?: td_usuario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_usuario_ahbb
     */
    omit?: td_usuario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_usuario_ahbbInclude<ExtArgs> | null
    /**
     * The data needed to update a td_usuario_ahbb.
     */
    data: XOR<td_usuario_ahbbUpdateInput, td_usuario_ahbbUncheckedUpdateInput>
    /**
     * Choose, which td_usuario_ahbb to update.
     */
    where: td_usuario_ahbbWhereUniqueInput
  }

  /**
   * td_usuario_ahbb updateMany
   */
  export type td_usuario_ahbbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update td_usuario_ahbbs.
     */
    data: XOR<td_usuario_ahbbUpdateManyMutationInput, td_usuario_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_usuario_ahbbs to update
     */
    where?: td_usuario_ahbbWhereInput
    /**
     * Limit how many td_usuario_ahbbs to update.
     */
    limit?: number
  }

  /**
   * td_usuario_ahbb updateManyAndReturn
   */
  export type td_usuario_ahbbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_usuario_ahbb
     */
    select?: td_usuario_ahbbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_usuario_ahbb
     */
    omit?: td_usuario_ahbbOmit<ExtArgs> | null
    /**
     * The data used to update td_usuario_ahbbs.
     */
    data: XOR<td_usuario_ahbbUpdateManyMutationInput, td_usuario_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_usuario_ahbbs to update
     */
    where?: td_usuario_ahbbWhereInput
    /**
     * Limit how many td_usuario_ahbbs to update.
     */
    limit?: number
  }

  /**
   * td_usuario_ahbb upsert
   */
  export type td_usuario_ahbbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_usuario_ahbb
     */
    select?: td_usuario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_usuario_ahbb
     */
    omit?: td_usuario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_usuario_ahbbInclude<ExtArgs> | null
    /**
     * The filter to search for the td_usuario_ahbb to update in case it exists.
     */
    where: td_usuario_ahbbWhereUniqueInput
    /**
     * In case the td_usuario_ahbb found by the `where` argument doesn't exist, create a new td_usuario_ahbb with this data.
     */
    create: XOR<td_usuario_ahbbCreateInput, td_usuario_ahbbUncheckedCreateInput>
    /**
     * In case the td_usuario_ahbb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<td_usuario_ahbbUpdateInput, td_usuario_ahbbUncheckedUpdateInput>
  }

  /**
   * td_usuario_ahbb delete
   */
  export type td_usuario_ahbbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_usuario_ahbb
     */
    select?: td_usuario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_usuario_ahbb
     */
    omit?: td_usuario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_usuario_ahbbInclude<ExtArgs> | null
    /**
     * Filter which td_usuario_ahbb to delete.
     */
    where: td_usuario_ahbbWhereUniqueInput
  }

  /**
   * td_usuario_ahbb deleteMany
   */
  export type td_usuario_ahbbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_usuario_ahbbs to delete
     */
    where?: td_usuario_ahbbWhereInput
    /**
     * Limit how many td_usuario_ahbbs to delete.
     */
    limit?: number
  }

  /**
   * td_usuario_ahbb.cursos
   */
  export type td_usuario_ahbb$cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbInclude<ExtArgs> | null
    where?: td_curso_ahbbWhereInput
    orderBy?: td_curso_ahbbOrderByWithRelationInput | td_curso_ahbbOrderByWithRelationInput[]
    cursor?: td_curso_ahbbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Td_curso_ahbbScalarFieldEnum | Td_curso_ahbbScalarFieldEnum[]
  }

  /**
   * td_usuario_ahbb.inscripciones
   */
  export type td_usuario_ahbb$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbInclude<ExtArgs> | null
    where?: td_inscripcion_ahbbWhereInput
    orderBy?: td_inscripcion_ahbbOrderByWithRelationInput | td_inscripcion_ahbbOrderByWithRelationInput[]
    cursor?: td_inscripcion_ahbbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Td_inscripcion_ahbbScalarFieldEnum | Td_inscripcion_ahbbScalarFieldEnum[]
  }

  /**
   * td_usuario_ahbb.auditoriasAprobadas_ahbb
   */
  export type td_usuario_ahbb$auditoriasAprobadas_ahbbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbInclude<ExtArgs> | null
    where?: td_auditoria_aprobacion_ahbbWhereInput
    orderBy?: td_auditoria_aprobacion_ahbbOrderByWithRelationInput | td_auditoria_aprobacion_ahbbOrderByWithRelationInput[]
    cursor?: td_auditoria_aprobacion_ahbbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Td_auditoria_aprobacion_ahbbScalarFieldEnum | Td_auditoria_aprobacion_ahbbScalarFieldEnum[]
  }

  /**
   * td_usuario_ahbb.auditoriasUsuario_ahbb
   */
  export type td_usuario_ahbb$auditoriasUsuario_ahbbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbInclude<ExtArgs> | null
    where?: td_auditoria_aprobacion_ahbbWhereInput
    orderBy?: td_auditoria_aprobacion_ahbbOrderByWithRelationInput | td_auditoria_aprobacion_ahbbOrderByWithRelationInput[]
    cursor?: td_auditoria_aprobacion_ahbbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Td_auditoria_aprobacion_ahbbScalarFieldEnum | Td_auditoria_aprobacion_ahbbScalarFieldEnum[]
  }

  /**
   * td_usuario_ahbb without action
   */
  export type td_usuario_ahbbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_usuario_ahbb
     */
    select?: td_usuario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_usuario_ahbb
     */
    omit?: td_usuario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_usuario_ahbbInclude<ExtArgs> | null
  }


  /**
   * Model td_curso_ahbb
   */

  export type AggregateTd_curso_ahbb = {
    _count: Td_curso_ahbbCountAggregateOutputType | null
    _avg: Td_curso_ahbbAvgAggregateOutputType | null
    _sum: Td_curso_ahbbSumAggregateOutputType | null
    _min: Td_curso_ahbbMinAggregateOutputType | null
    _max: Td_curso_ahbbMaxAggregateOutputType | null
  }

  export type Td_curso_ahbbAvgAggregateOutputType = {
    id_curso_ahbb: number | null
    diasDefinidos_ahbb: number | null
    horasDefinidas_ahbb: number | null
    topeEstudiantes_ahbb: number | null
    id_usuario_curso_ahbb: number | null
    id_curso_curso_ahbb: number | null
  }

  export type Td_curso_ahbbSumAggregateOutputType = {
    id_curso_ahbb: number | null
    diasDefinidos_ahbb: number | null
    horasDefinidas_ahbb: number | null
    topeEstudiantes_ahbb: number | null
    id_usuario_curso_ahbb: number | null
    id_curso_curso_ahbb: number | null
  }

  export type Td_curso_ahbbMinAggregateOutputType = {
    id_curso_ahbb: number | null
    nombre_ahbb: string | null
    tematica_ahbb: string | null
    descripcion_ahbb: string | null
    diasDefinidos_ahbb: number | null
    horasDefinidas_ahbb: number | null
    fechaInicio_ahbb: Date | null
    fechaFin_ahbb: Date | null
    fechaDuracion_ahbb: Date | null
    topeEstudiantes_ahbb: number | null
    temarioTexto_ahbb: string | null
    imagenBasePdf_ahbb: string | null
    imagenBloqueada_ahbb: boolean | null
    isPublished_ahbb: boolean | null
    id_usuario_curso_ahbb: number | null
    id_curso_curso_ahbb: number | null
    creadoEn_ahbb: Date | null
    actualizadoEn_ahbb: Date | null
  }

  export type Td_curso_ahbbMaxAggregateOutputType = {
    id_curso_ahbb: number | null
    nombre_ahbb: string | null
    tematica_ahbb: string | null
    descripcion_ahbb: string | null
    diasDefinidos_ahbb: number | null
    horasDefinidas_ahbb: number | null
    fechaInicio_ahbb: Date | null
    fechaFin_ahbb: Date | null
    fechaDuracion_ahbb: Date | null
    topeEstudiantes_ahbb: number | null
    temarioTexto_ahbb: string | null
    imagenBasePdf_ahbb: string | null
    imagenBloqueada_ahbb: boolean | null
    isPublished_ahbb: boolean | null
    id_usuario_curso_ahbb: number | null
    id_curso_curso_ahbb: number | null
    creadoEn_ahbb: Date | null
    actualizadoEn_ahbb: Date | null
  }

  export type Td_curso_ahbbCountAggregateOutputType = {
    id_curso_ahbb: number
    nombre_ahbb: number
    tematica_ahbb: number
    descripcion_ahbb: number
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb: number
    fechaFin_ahbb: number
    fechaDuracion_ahbb: number
    topeEstudiantes_ahbb: number
    temarioTexto_ahbb: number
    imagenBasePdf_ahbb: number
    imagenBloqueada_ahbb: number
    isPublished_ahbb: number
    id_usuario_curso_ahbb: number
    id_curso_curso_ahbb: number
    creadoEn_ahbb: number
    actualizadoEn_ahbb: number
    _all: number
  }


  export type Td_curso_ahbbAvgAggregateInputType = {
    id_curso_ahbb?: true
    diasDefinidos_ahbb?: true
    horasDefinidas_ahbb?: true
    topeEstudiantes_ahbb?: true
    id_usuario_curso_ahbb?: true
    id_curso_curso_ahbb?: true
  }

  export type Td_curso_ahbbSumAggregateInputType = {
    id_curso_ahbb?: true
    diasDefinidos_ahbb?: true
    horasDefinidas_ahbb?: true
    topeEstudiantes_ahbb?: true
    id_usuario_curso_ahbb?: true
    id_curso_curso_ahbb?: true
  }

  export type Td_curso_ahbbMinAggregateInputType = {
    id_curso_ahbb?: true
    nombre_ahbb?: true
    tematica_ahbb?: true
    descripcion_ahbb?: true
    diasDefinidos_ahbb?: true
    horasDefinidas_ahbb?: true
    fechaInicio_ahbb?: true
    fechaFin_ahbb?: true
    fechaDuracion_ahbb?: true
    topeEstudiantes_ahbb?: true
    temarioTexto_ahbb?: true
    imagenBasePdf_ahbb?: true
    imagenBloqueada_ahbb?: true
    isPublished_ahbb?: true
    id_usuario_curso_ahbb?: true
    id_curso_curso_ahbb?: true
    creadoEn_ahbb?: true
    actualizadoEn_ahbb?: true
  }

  export type Td_curso_ahbbMaxAggregateInputType = {
    id_curso_ahbb?: true
    nombre_ahbb?: true
    tematica_ahbb?: true
    descripcion_ahbb?: true
    diasDefinidos_ahbb?: true
    horasDefinidas_ahbb?: true
    fechaInicio_ahbb?: true
    fechaFin_ahbb?: true
    fechaDuracion_ahbb?: true
    topeEstudiantes_ahbb?: true
    temarioTexto_ahbb?: true
    imagenBasePdf_ahbb?: true
    imagenBloqueada_ahbb?: true
    isPublished_ahbb?: true
    id_usuario_curso_ahbb?: true
    id_curso_curso_ahbb?: true
    creadoEn_ahbb?: true
    actualizadoEn_ahbb?: true
  }

  export type Td_curso_ahbbCountAggregateInputType = {
    id_curso_ahbb?: true
    nombre_ahbb?: true
    tematica_ahbb?: true
    descripcion_ahbb?: true
    diasDefinidos_ahbb?: true
    horasDefinidas_ahbb?: true
    fechaInicio_ahbb?: true
    fechaFin_ahbb?: true
    fechaDuracion_ahbb?: true
    topeEstudiantes_ahbb?: true
    temarioTexto_ahbb?: true
    imagenBasePdf_ahbb?: true
    imagenBloqueada_ahbb?: true
    isPublished_ahbb?: true
    id_usuario_curso_ahbb?: true
    id_curso_curso_ahbb?: true
    creadoEn_ahbb?: true
    actualizadoEn_ahbb?: true
    _all?: true
  }

  export type Td_curso_ahbbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_curso_ahbb to aggregate.
     */
    where?: td_curso_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_curso_ahbbs to fetch.
     */
    orderBy?: td_curso_ahbbOrderByWithRelationInput | td_curso_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: td_curso_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_curso_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_curso_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned td_curso_ahbbs
    **/
    _count?: true | Td_curso_ahbbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Td_curso_ahbbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Td_curso_ahbbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Td_curso_ahbbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Td_curso_ahbbMaxAggregateInputType
  }

  export type GetTd_curso_ahbbAggregateType<T extends Td_curso_ahbbAggregateArgs> = {
        [P in keyof T & keyof AggregateTd_curso_ahbb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTd_curso_ahbb[P]>
      : GetScalarType<T[P], AggregateTd_curso_ahbb[P]>
  }




  export type td_curso_ahbbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_curso_ahbbWhereInput
    orderBy?: td_curso_ahbbOrderByWithAggregationInput | td_curso_ahbbOrderByWithAggregationInput[]
    by: Td_curso_ahbbScalarFieldEnum[] | Td_curso_ahbbScalarFieldEnum
    having?: td_curso_ahbbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Td_curso_ahbbCountAggregateInputType | true
    _avg?: Td_curso_ahbbAvgAggregateInputType
    _sum?: Td_curso_ahbbSumAggregateInputType
    _min?: Td_curso_ahbbMinAggregateInputType
    _max?: Td_curso_ahbbMaxAggregateInputType
  }

  export type Td_curso_ahbbGroupByOutputType = {
    id_curso_ahbb: number
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb: Date | null
    fechaFin_ahbb: Date | null
    fechaDuracion_ahbb: Date | null
    topeEstudiantes_ahbb: number | null
    temarioTexto_ahbb: string | null
    imagenBasePdf_ahbb: string | null
    imagenBloqueada_ahbb: boolean | null
    isPublished_ahbb: boolean
    id_usuario_curso_ahbb: number
    id_curso_curso_ahbb: number | null
    creadoEn_ahbb: Date | null
    actualizadoEn_ahbb: Date | null
    _count: Td_curso_ahbbCountAggregateOutputType | null
    _avg: Td_curso_ahbbAvgAggregateOutputType | null
    _sum: Td_curso_ahbbSumAggregateOutputType | null
    _min: Td_curso_ahbbMinAggregateOutputType | null
    _max: Td_curso_ahbbMaxAggregateOutputType | null
  }

  type GetTd_curso_ahbbGroupByPayload<T extends td_curso_ahbbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Td_curso_ahbbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Td_curso_ahbbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Td_curso_ahbbGroupByOutputType[P]>
            : GetScalarType<T[P], Td_curso_ahbbGroupByOutputType[P]>
        }
      >
    >


  export type td_curso_ahbbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_curso_ahbb?: boolean
    nombre_ahbb?: boolean
    tematica_ahbb?: boolean
    descripcion_ahbb?: boolean
    diasDefinidos_ahbb?: boolean
    horasDefinidas_ahbb?: boolean
    fechaInicio_ahbb?: boolean
    fechaFin_ahbb?: boolean
    fechaDuracion_ahbb?: boolean
    topeEstudiantes_ahbb?: boolean
    temarioTexto_ahbb?: boolean
    imagenBasePdf_ahbb?: boolean
    imagenBloqueada_ahbb?: boolean
    isPublished_ahbb?: boolean
    id_usuario_curso_ahbb?: boolean
    id_curso_curso_ahbb?: boolean
    creadoEn_ahbb?: boolean
    actualizadoEn_ahbb?: boolean
    profesor?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    prelacion?: boolean | td_curso_ahbb$prelacionArgs<ExtArgs>
    prelaciones?: boolean | td_curso_ahbb$prelacionesArgs<ExtArgs>
    horarios?: boolean | td_curso_ahbb$horariosArgs<ExtArgs>
    inscripciones?: boolean | td_curso_ahbb$inscripcionesArgs<ExtArgs>
    _count?: boolean | Td_curso_ahbbCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["td_curso_ahbb"]>

  export type td_curso_ahbbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_curso_ahbb?: boolean
    nombre_ahbb?: boolean
    tematica_ahbb?: boolean
    descripcion_ahbb?: boolean
    diasDefinidos_ahbb?: boolean
    horasDefinidas_ahbb?: boolean
    fechaInicio_ahbb?: boolean
    fechaFin_ahbb?: boolean
    fechaDuracion_ahbb?: boolean
    topeEstudiantes_ahbb?: boolean
    temarioTexto_ahbb?: boolean
    imagenBasePdf_ahbb?: boolean
    imagenBloqueada_ahbb?: boolean
    isPublished_ahbb?: boolean
    id_usuario_curso_ahbb?: boolean
    id_curso_curso_ahbb?: boolean
    creadoEn_ahbb?: boolean
    actualizadoEn_ahbb?: boolean
    profesor?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    prelacion?: boolean | td_curso_ahbb$prelacionArgs<ExtArgs>
  }, ExtArgs["result"]["td_curso_ahbb"]>

  export type td_curso_ahbbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_curso_ahbb?: boolean
    nombre_ahbb?: boolean
    tematica_ahbb?: boolean
    descripcion_ahbb?: boolean
    diasDefinidos_ahbb?: boolean
    horasDefinidas_ahbb?: boolean
    fechaInicio_ahbb?: boolean
    fechaFin_ahbb?: boolean
    fechaDuracion_ahbb?: boolean
    topeEstudiantes_ahbb?: boolean
    temarioTexto_ahbb?: boolean
    imagenBasePdf_ahbb?: boolean
    imagenBloqueada_ahbb?: boolean
    isPublished_ahbb?: boolean
    id_usuario_curso_ahbb?: boolean
    id_curso_curso_ahbb?: boolean
    creadoEn_ahbb?: boolean
    actualizadoEn_ahbb?: boolean
    profesor?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    prelacion?: boolean | td_curso_ahbb$prelacionArgs<ExtArgs>
  }, ExtArgs["result"]["td_curso_ahbb"]>

  export type td_curso_ahbbSelectScalar = {
    id_curso_ahbb?: boolean
    nombre_ahbb?: boolean
    tematica_ahbb?: boolean
    descripcion_ahbb?: boolean
    diasDefinidos_ahbb?: boolean
    horasDefinidas_ahbb?: boolean
    fechaInicio_ahbb?: boolean
    fechaFin_ahbb?: boolean
    fechaDuracion_ahbb?: boolean
    topeEstudiantes_ahbb?: boolean
    temarioTexto_ahbb?: boolean
    imagenBasePdf_ahbb?: boolean
    imagenBloqueada_ahbb?: boolean
    isPublished_ahbb?: boolean
    id_usuario_curso_ahbb?: boolean
    id_curso_curso_ahbb?: boolean
    creadoEn_ahbb?: boolean
    actualizadoEn_ahbb?: boolean
  }

  export type td_curso_ahbbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_curso_ahbb" | "nombre_ahbb" | "tematica_ahbb" | "descripcion_ahbb" | "diasDefinidos_ahbb" | "horasDefinidas_ahbb" | "fechaInicio_ahbb" | "fechaFin_ahbb" | "fechaDuracion_ahbb" | "topeEstudiantes_ahbb" | "temarioTexto_ahbb" | "imagenBasePdf_ahbb" | "imagenBloqueada_ahbb" | "isPublished_ahbb" | "id_usuario_curso_ahbb" | "id_curso_curso_ahbb" | "creadoEn_ahbb" | "actualizadoEn_ahbb", ExtArgs["result"]["td_curso_ahbb"]>
  export type td_curso_ahbbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesor?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    prelacion?: boolean | td_curso_ahbb$prelacionArgs<ExtArgs>
    prelaciones?: boolean | td_curso_ahbb$prelacionesArgs<ExtArgs>
    horarios?: boolean | td_curso_ahbb$horariosArgs<ExtArgs>
    inscripciones?: boolean | td_curso_ahbb$inscripcionesArgs<ExtArgs>
    _count?: boolean | Td_curso_ahbbCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type td_curso_ahbbIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesor?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    prelacion?: boolean | td_curso_ahbb$prelacionArgs<ExtArgs>
  }
  export type td_curso_ahbbIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesor?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    prelacion?: boolean | td_curso_ahbb$prelacionArgs<ExtArgs>
  }

  export type $td_curso_ahbbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "td_curso_ahbb"
    objects: {
      profesor: Prisma.$td_usuario_ahbbPayload<ExtArgs>
      prelacion: Prisma.$td_curso_ahbbPayload<ExtArgs> | null
      prelaciones: Prisma.$td_curso_ahbbPayload<ExtArgs>[]
      horarios: Prisma.$td_horario_ahbbPayload<ExtArgs>[]
      inscripciones: Prisma.$td_inscripcion_ahbbPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_curso_ahbb: number
      nombre_ahbb: string
      tematica_ahbb: string
      descripcion_ahbb: string | null
      diasDefinidos_ahbb: number
      horasDefinidas_ahbb: number
      fechaInicio_ahbb: Date | null
      fechaFin_ahbb: Date | null
      fechaDuracion_ahbb: Date | null
      topeEstudiantes_ahbb: number | null
      temarioTexto_ahbb: string | null
      imagenBasePdf_ahbb: string | null
      imagenBloqueada_ahbb: boolean | null
      isPublished_ahbb: boolean
      id_usuario_curso_ahbb: number
      id_curso_curso_ahbb: number | null
      creadoEn_ahbb: Date | null
      actualizadoEn_ahbb: Date | null
    }, ExtArgs["result"]["td_curso_ahbb"]>
    composites: {}
  }

  type td_curso_ahbbGetPayload<S extends boolean | null | undefined | td_curso_ahbbDefaultArgs> = $Result.GetResult<Prisma.$td_curso_ahbbPayload, S>

  type td_curso_ahbbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<td_curso_ahbbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Td_curso_ahbbCountAggregateInputType | true
    }

  export interface td_curso_ahbbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['td_curso_ahbb'], meta: { name: 'td_curso_ahbb' } }
    /**
     * Find zero or one Td_curso_ahbb that matches the filter.
     * @param {td_curso_ahbbFindUniqueArgs} args - Arguments to find a Td_curso_ahbb
     * @example
     * // Get one Td_curso_ahbb
     * const td_curso_ahbb = await prisma.td_curso_ahbb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends td_curso_ahbbFindUniqueArgs>(args: SelectSubset<T, td_curso_ahbbFindUniqueArgs<ExtArgs>>): Prisma__td_curso_ahbbClient<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Td_curso_ahbb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {td_curso_ahbbFindUniqueOrThrowArgs} args - Arguments to find a Td_curso_ahbb
     * @example
     * // Get one Td_curso_ahbb
     * const td_curso_ahbb = await prisma.td_curso_ahbb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends td_curso_ahbbFindUniqueOrThrowArgs>(args: SelectSubset<T, td_curso_ahbbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__td_curso_ahbbClient<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_curso_ahbb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_curso_ahbbFindFirstArgs} args - Arguments to find a Td_curso_ahbb
     * @example
     * // Get one Td_curso_ahbb
     * const td_curso_ahbb = await prisma.td_curso_ahbb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends td_curso_ahbbFindFirstArgs>(args?: SelectSubset<T, td_curso_ahbbFindFirstArgs<ExtArgs>>): Prisma__td_curso_ahbbClient<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_curso_ahbb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_curso_ahbbFindFirstOrThrowArgs} args - Arguments to find a Td_curso_ahbb
     * @example
     * // Get one Td_curso_ahbb
     * const td_curso_ahbb = await prisma.td_curso_ahbb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends td_curso_ahbbFindFirstOrThrowArgs>(args?: SelectSubset<T, td_curso_ahbbFindFirstOrThrowArgs<ExtArgs>>): Prisma__td_curso_ahbbClient<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Td_curso_ahbbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_curso_ahbbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Td_curso_ahbbs
     * const td_curso_ahbbs = await prisma.td_curso_ahbb.findMany()
     * 
     * // Get first 10 Td_curso_ahbbs
     * const td_curso_ahbbs = await prisma.td_curso_ahbb.findMany({ take: 10 })
     * 
     * // Only select the `id_curso_ahbb`
     * const td_curso_ahbbWithId_curso_ahbbOnly = await prisma.td_curso_ahbb.findMany({ select: { id_curso_ahbb: true } })
     * 
     */
    findMany<T extends td_curso_ahbbFindManyArgs>(args?: SelectSubset<T, td_curso_ahbbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Td_curso_ahbb.
     * @param {td_curso_ahbbCreateArgs} args - Arguments to create a Td_curso_ahbb.
     * @example
     * // Create one Td_curso_ahbb
     * const Td_curso_ahbb = await prisma.td_curso_ahbb.create({
     *   data: {
     *     // ... data to create a Td_curso_ahbb
     *   }
     * })
     * 
     */
    create<T extends td_curso_ahbbCreateArgs>(args: SelectSubset<T, td_curso_ahbbCreateArgs<ExtArgs>>): Prisma__td_curso_ahbbClient<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Td_curso_ahbbs.
     * @param {td_curso_ahbbCreateManyArgs} args - Arguments to create many Td_curso_ahbbs.
     * @example
     * // Create many Td_curso_ahbbs
     * const td_curso_ahbb = await prisma.td_curso_ahbb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends td_curso_ahbbCreateManyArgs>(args?: SelectSubset<T, td_curso_ahbbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Td_curso_ahbbs and returns the data saved in the database.
     * @param {td_curso_ahbbCreateManyAndReturnArgs} args - Arguments to create many Td_curso_ahbbs.
     * @example
     * // Create many Td_curso_ahbbs
     * const td_curso_ahbb = await prisma.td_curso_ahbb.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Td_curso_ahbbs and only return the `id_curso_ahbb`
     * const td_curso_ahbbWithId_curso_ahbbOnly = await prisma.td_curso_ahbb.createManyAndReturn({
     *   select: { id_curso_ahbb: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends td_curso_ahbbCreateManyAndReturnArgs>(args?: SelectSubset<T, td_curso_ahbbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Td_curso_ahbb.
     * @param {td_curso_ahbbDeleteArgs} args - Arguments to delete one Td_curso_ahbb.
     * @example
     * // Delete one Td_curso_ahbb
     * const Td_curso_ahbb = await prisma.td_curso_ahbb.delete({
     *   where: {
     *     // ... filter to delete one Td_curso_ahbb
     *   }
     * })
     * 
     */
    delete<T extends td_curso_ahbbDeleteArgs>(args: SelectSubset<T, td_curso_ahbbDeleteArgs<ExtArgs>>): Prisma__td_curso_ahbbClient<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Td_curso_ahbb.
     * @param {td_curso_ahbbUpdateArgs} args - Arguments to update one Td_curso_ahbb.
     * @example
     * // Update one Td_curso_ahbb
     * const td_curso_ahbb = await prisma.td_curso_ahbb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends td_curso_ahbbUpdateArgs>(args: SelectSubset<T, td_curso_ahbbUpdateArgs<ExtArgs>>): Prisma__td_curso_ahbbClient<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Td_curso_ahbbs.
     * @param {td_curso_ahbbDeleteManyArgs} args - Arguments to filter Td_curso_ahbbs to delete.
     * @example
     * // Delete a few Td_curso_ahbbs
     * const { count } = await prisma.td_curso_ahbb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends td_curso_ahbbDeleteManyArgs>(args?: SelectSubset<T, td_curso_ahbbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_curso_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_curso_ahbbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Td_curso_ahbbs
     * const td_curso_ahbb = await prisma.td_curso_ahbb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends td_curso_ahbbUpdateManyArgs>(args: SelectSubset<T, td_curso_ahbbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_curso_ahbbs and returns the data updated in the database.
     * @param {td_curso_ahbbUpdateManyAndReturnArgs} args - Arguments to update many Td_curso_ahbbs.
     * @example
     * // Update many Td_curso_ahbbs
     * const td_curso_ahbb = await prisma.td_curso_ahbb.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Td_curso_ahbbs and only return the `id_curso_ahbb`
     * const td_curso_ahbbWithId_curso_ahbbOnly = await prisma.td_curso_ahbb.updateManyAndReturn({
     *   select: { id_curso_ahbb: true },
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
    updateManyAndReturn<T extends td_curso_ahbbUpdateManyAndReturnArgs>(args: SelectSubset<T, td_curso_ahbbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Td_curso_ahbb.
     * @param {td_curso_ahbbUpsertArgs} args - Arguments to update or create a Td_curso_ahbb.
     * @example
     * // Update or create a Td_curso_ahbb
     * const td_curso_ahbb = await prisma.td_curso_ahbb.upsert({
     *   create: {
     *     // ... data to create a Td_curso_ahbb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Td_curso_ahbb we want to update
     *   }
     * })
     */
    upsert<T extends td_curso_ahbbUpsertArgs>(args: SelectSubset<T, td_curso_ahbbUpsertArgs<ExtArgs>>): Prisma__td_curso_ahbbClient<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Td_curso_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_curso_ahbbCountArgs} args - Arguments to filter Td_curso_ahbbs to count.
     * @example
     * // Count the number of Td_curso_ahbbs
     * const count = await prisma.td_curso_ahbb.count({
     *   where: {
     *     // ... the filter for the Td_curso_ahbbs we want to count
     *   }
     * })
    **/
    count<T extends td_curso_ahbbCountArgs>(
      args?: Subset<T, td_curso_ahbbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Td_curso_ahbbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Td_curso_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Td_curso_ahbbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Td_curso_ahbbAggregateArgs>(args: Subset<T, Td_curso_ahbbAggregateArgs>): Prisma.PrismaPromise<GetTd_curso_ahbbAggregateType<T>>

    /**
     * Group by Td_curso_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_curso_ahbbGroupByArgs} args - Group by arguments.
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
      T extends td_curso_ahbbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: td_curso_ahbbGroupByArgs['orderBy'] }
        : { orderBy?: td_curso_ahbbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, td_curso_ahbbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTd_curso_ahbbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the td_curso_ahbb model
   */
  readonly fields: td_curso_ahbbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for td_curso_ahbb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__td_curso_ahbbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profesor<T extends td_usuario_ahbbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, td_usuario_ahbbDefaultArgs<ExtArgs>>): Prisma__td_usuario_ahbbClient<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prelacion<T extends td_curso_ahbb$prelacionArgs<ExtArgs> = {}>(args?: Subset<T, td_curso_ahbb$prelacionArgs<ExtArgs>>): Prisma__td_curso_ahbbClient<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prelaciones<T extends td_curso_ahbb$prelacionesArgs<ExtArgs> = {}>(args?: Subset<T, td_curso_ahbb$prelacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    horarios<T extends td_curso_ahbb$horariosArgs<ExtArgs> = {}>(args?: Subset<T, td_curso_ahbb$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_horario_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inscripciones<T extends td_curso_ahbb$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, td_curso_ahbb$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the td_curso_ahbb model
   */
  interface td_curso_ahbbFieldRefs {
    readonly id_curso_ahbb: FieldRef<"td_curso_ahbb", 'Int'>
    readonly nombre_ahbb: FieldRef<"td_curso_ahbb", 'String'>
    readonly tematica_ahbb: FieldRef<"td_curso_ahbb", 'String'>
    readonly descripcion_ahbb: FieldRef<"td_curso_ahbb", 'String'>
    readonly diasDefinidos_ahbb: FieldRef<"td_curso_ahbb", 'Int'>
    readonly horasDefinidas_ahbb: FieldRef<"td_curso_ahbb", 'Int'>
    readonly fechaInicio_ahbb: FieldRef<"td_curso_ahbb", 'DateTime'>
    readonly fechaFin_ahbb: FieldRef<"td_curso_ahbb", 'DateTime'>
    readonly fechaDuracion_ahbb: FieldRef<"td_curso_ahbb", 'DateTime'>
    readonly topeEstudiantes_ahbb: FieldRef<"td_curso_ahbb", 'Int'>
    readonly temarioTexto_ahbb: FieldRef<"td_curso_ahbb", 'String'>
    readonly imagenBasePdf_ahbb: FieldRef<"td_curso_ahbb", 'String'>
    readonly imagenBloqueada_ahbb: FieldRef<"td_curso_ahbb", 'Boolean'>
    readonly isPublished_ahbb: FieldRef<"td_curso_ahbb", 'Boolean'>
    readonly id_usuario_curso_ahbb: FieldRef<"td_curso_ahbb", 'Int'>
    readonly id_curso_curso_ahbb: FieldRef<"td_curso_ahbb", 'Int'>
    readonly creadoEn_ahbb: FieldRef<"td_curso_ahbb", 'DateTime'>
    readonly actualizadoEn_ahbb: FieldRef<"td_curso_ahbb", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * td_curso_ahbb findUnique
   */
  export type td_curso_ahbbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_curso_ahbb to fetch.
     */
    where: td_curso_ahbbWhereUniqueInput
  }

  /**
   * td_curso_ahbb findUniqueOrThrow
   */
  export type td_curso_ahbbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_curso_ahbb to fetch.
     */
    where: td_curso_ahbbWhereUniqueInput
  }

  /**
   * td_curso_ahbb findFirst
   */
  export type td_curso_ahbbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_curso_ahbb to fetch.
     */
    where?: td_curso_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_curso_ahbbs to fetch.
     */
    orderBy?: td_curso_ahbbOrderByWithRelationInput | td_curso_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_curso_ahbbs.
     */
    cursor?: td_curso_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_curso_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_curso_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_curso_ahbbs.
     */
    distinct?: Td_curso_ahbbScalarFieldEnum | Td_curso_ahbbScalarFieldEnum[]
  }

  /**
   * td_curso_ahbb findFirstOrThrow
   */
  export type td_curso_ahbbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_curso_ahbb to fetch.
     */
    where?: td_curso_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_curso_ahbbs to fetch.
     */
    orderBy?: td_curso_ahbbOrderByWithRelationInput | td_curso_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_curso_ahbbs.
     */
    cursor?: td_curso_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_curso_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_curso_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_curso_ahbbs.
     */
    distinct?: Td_curso_ahbbScalarFieldEnum | Td_curso_ahbbScalarFieldEnum[]
  }

  /**
   * td_curso_ahbb findMany
   */
  export type td_curso_ahbbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_curso_ahbbs to fetch.
     */
    where?: td_curso_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_curso_ahbbs to fetch.
     */
    orderBy?: td_curso_ahbbOrderByWithRelationInput | td_curso_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing td_curso_ahbbs.
     */
    cursor?: td_curso_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_curso_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_curso_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_curso_ahbbs.
     */
    distinct?: Td_curso_ahbbScalarFieldEnum | Td_curso_ahbbScalarFieldEnum[]
  }

  /**
   * td_curso_ahbb create
   */
  export type td_curso_ahbbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbInclude<ExtArgs> | null
    /**
     * The data needed to create a td_curso_ahbb.
     */
    data: XOR<td_curso_ahbbCreateInput, td_curso_ahbbUncheckedCreateInput>
  }

  /**
   * td_curso_ahbb createMany
   */
  export type td_curso_ahbbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many td_curso_ahbbs.
     */
    data: td_curso_ahbbCreateManyInput | td_curso_ahbbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * td_curso_ahbb createManyAndReturn
   */
  export type td_curso_ahbbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * The data used to create many td_curso_ahbbs.
     */
    data: td_curso_ahbbCreateManyInput | td_curso_ahbbCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * td_curso_ahbb update
   */
  export type td_curso_ahbbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbInclude<ExtArgs> | null
    /**
     * The data needed to update a td_curso_ahbb.
     */
    data: XOR<td_curso_ahbbUpdateInput, td_curso_ahbbUncheckedUpdateInput>
    /**
     * Choose, which td_curso_ahbb to update.
     */
    where: td_curso_ahbbWhereUniqueInput
  }

  /**
   * td_curso_ahbb updateMany
   */
  export type td_curso_ahbbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update td_curso_ahbbs.
     */
    data: XOR<td_curso_ahbbUpdateManyMutationInput, td_curso_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_curso_ahbbs to update
     */
    where?: td_curso_ahbbWhereInput
    /**
     * Limit how many td_curso_ahbbs to update.
     */
    limit?: number
  }

  /**
   * td_curso_ahbb updateManyAndReturn
   */
  export type td_curso_ahbbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * The data used to update td_curso_ahbbs.
     */
    data: XOR<td_curso_ahbbUpdateManyMutationInput, td_curso_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_curso_ahbbs to update
     */
    where?: td_curso_ahbbWhereInput
    /**
     * Limit how many td_curso_ahbbs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * td_curso_ahbb upsert
   */
  export type td_curso_ahbbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbInclude<ExtArgs> | null
    /**
     * The filter to search for the td_curso_ahbb to update in case it exists.
     */
    where: td_curso_ahbbWhereUniqueInput
    /**
     * In case the td_curso_ahbb found by the `where` argument doesn't exist, create a new td_curso_ahbb with this data.
     */
    create: XOR<td_curso_ahbbCreateInput, td_curso_ahbbUncheckedCreateInput>
    /**
     * In case the td_curso_ahbb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<td_curso_ahbbUpdateInput, td_curso_ahbbUncheckedUpdateInput>
  }

  /**
   * td_curso_ahbb delete
   */
  export type td_curso_ahbbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbInclude<ExtArgs> | null
    /**
     * Filter which td_curso_ahbb to delete.
     */
    where: td_curso_ahbbWhereUniqueInput
  }

  /**
   * td_curso_ahbb deleteMany
   */
  export type td_curso_ahbbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_curso_ahbbs to delete
     */
    where?: td_curso_ahbbWhereInput
    /**
     * Limit how many td_curso_ahbbs to delete.
     */
    limit?: number
  }

  /**
   * td_curso_ahbb.prelacion
   */
  export type td_curso_ahbb$prelacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbInclude<ExtArgs> | null
    where?: td_curso_ahbbWhereInput
  }

  /**
   * td_curso_ahbb.prelaciones
   */
  export type td_curso_ahbb$prelacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbInclude<ExtArgs> | null
    where?: td_curso_ahbbWhereInput
    orderBy?: td_curso_ahbbOrderByWithRelationInput | td_curso_ahbbOrderByWithRelationInput[]
    cursor?: td_curso_ahbbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Td_curso_ahbbScalarFieldEnum | Td_curso_ahbbScalarFieldEnum[]
  }

  /**
   * td_curso_ahbb.horarios
   */
  export type td_curso_ahbb$horariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_horario_ahbb
     */
    select?: td_horario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_horario_ahbb
     */
    omit?: td_horario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_horario_ahbbInclude<ExtArgs> | null
    where?: td_horario_ahbbWhereInput
    orderBy?: td_horario_ahbbOrderByWithRelationInput | td_horario_ahbbOrderByWithRelationInput[]
    cursor?: td_horario_ahbbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Td_horario_ahbbScalarFieldEnum | Td_horario_ahbbScalarFieldEnum[]
  }

  /**
   * td_curso_ahbb.inscripciones
   */
  export type td_curso_ahbb$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbInclude<ExtArgs> | null
    where?: td_inscripcion_ahbbWhereInput
    orderBy?: td_inscripcion_ahbbOrderByWithRelationInput | td_inscripcion_ahbbOrderByWithRelationInput[]
    cursor?: td_inscripcion_ahbbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Td_inscripcion_ahbbScalarFieldEnum | Td_inscripcion_ahbbScalarFieldEnum[]
  }

  /**
   * td_curso_ahbb without action
   */
  export type td_curso_ahbbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_curso_ahbb
     */
    select?: td_curso_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_curso_ahbb
     */
    omit?: td_curso_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_curso_ahbbInclude<ExtArgs> | null
  }


  /**
   * Model td_horario_ahbb
   */

  export type AggregateTd_horario_ahbb = {
    _count: Td_horario_ahbbCountAggregateOutputType | null
    _avg: Td_horario_ahbbAvgAggregateOutputType | null
    _sum: Td_horario_ahbbSumAggregateOutputType | null
    _min: Td_horario_ahbbMinAggregateOutputType | null
    _max: Td_horario_ahbbMaxAggregateOutputType | null
  }

  export type Td_horario_ahbbAvgAggregateOutputType = {
    id_horario_ahbb: number | null
    id_curso_horario_ahbb: number | null
  }

  export type Td_horario_ahbbSumAggregateOutputType = {
    id_horario_ahbb: number | null
    id_curso_horario_ahbb: number | null
  }

  export type Td_horario_ahbbMinAggregateOutputType = {
    id_horario_ahbb: number | null
    diaSemana_ahbb: string | null
    horaInicio_ahbb: string | null
    horaFin_ahbb: string | null
    id_curso_horario_ahbb: number | null
  }

  export type Td_horario_ahbbMaxAggregateOutputType = {
    id_horario_ahbb: number | null
    diaSemana_ahbb: string | null
    horaInicio_ahbb: string | null
    horaFin_ahbb: string | null
    id_curso_horario_ahbb: number | null
  }

  export type Td_horario_ahbbCountAggregateOutputType = {
    id_horario_ahbb: number
    diaSemana_ahbb: number
    horaInicio_ahbb: number
    horaFin_ahbb: number
    id_curso_horario_ahbb: number
    _all: number
  }


  export type Td_horario_ahbbAvgAggregateInputType = {
    id_horario_ahbb?: true
    id_curso_horario_ahbb?: true
  }

  export type Td_horario_ahbbSumAggregateInputType = {
    id_horario_ahbb?: true
    id_curso_horario_ahbb?: true
  }

  export type Td_horario_ahbbMinAggregateInputType = {
    id_horario_ahbb?: true
    diaSemana_ahbb?: true
    horaInicio_ahbb?: true
    horaFin_ahbb?: true
    id_curso_horario_ahbb?: true
  }

  export type Td_horario_ahbbMaxAggregateInputType = {
    id_horario_ahbb?: true
    diaSemana_ahbb?: true
    horaInicio_ahbb?: true
    horaFin_ahbb?: true
    id_curso_horario_ahbb?: true
  }

  export type Td_horario_ahbbCountAggregateInputType = {
    id_horario_ahbb?: true
    diaSemana_ahbb?: true
    horaInicio_ahbb?: true
    horaFin_ahbb?: true
    id_curso_horario_ahbb?: true
    _all?: true
  }

  export type Td_horario_ahbbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_horario_ahbb to aggregate.
     */
    where?: td_horario_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_horario_ahbbs to fetch.
     */
    orderBy?: td_horario_ahbbOrderByWithRelationInput | td_horario_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: td_horario_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_horario_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_horario_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned td_horario_ahbbs
    **/
    _count?: true | Td_horario_ahbbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Td_horario_ahbbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Td_horario_ahbbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Td_horario_ahbbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Td_horario_ahbbMaxAggregateInputType
  }

  export type GetTd_horario_ahbbAggregateType<T extends Td_horario_ahbbAggregateArgs> = {
        [P in keyof T & keyof AggregateTd_horario_ahbb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTd_horario_ahbb[P]>
      : GetScalarType<T[P], AggregateTd_horario_ahbb[P]>
  }




  export type td_horario_ahbbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_horario_ahbbWhereInput
    orderBy?: td_horario_ahbbOrderByWithAggregationInput | td_horario_ahbbOrderByWithAggregationInput[]
    by: Td_horario_ahbbScalarFieldEnum[] | Td_horario_ahbbScalarFieldEnum
    having?: td_horario_ahbbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Td_horario_ahbbCountAggregateInputType | true
    _avg?: Td_horario_ahbbAvgAggregateInputType
    _sum?: Td_horario_ahbbSumAggregateInputType
    _min?: Td_horario_ahbbMinAggregateInputType
    _max?: Td_horario_ahbbMaxAggregateInputType
  }

  export type Td_horario_ahbbGroupByOutputType = {
    id_horario_ahbb: number
    diaSemana_ahbb: string
    horaInicio_ahbb: string
    horaFin_ahbb: string
    id_curso_horario_ahbb: number
    _count: Td_horario_ahbbCountAggregateOutputType | null
    _avg: Td_horario_ahbbAvgAggregateOutputType | null
    _sum: Td_horario_ahbbSumAggregateOutputType | null
    _min: Td_horario_ahbbMinAggregateOutputType | null
    _max: Td_horario_ahbbMaxAggregateOutputType | null
  }

  type GetTd_horario_ahbbGroupByPayload<T extends td_horario_ahbbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Td_horario_ahbbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Td_horario_ahbbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Td_horario_ahbbGroupByOutputType[P]>
            : GetScalarType<T[P], Td_horario_ahbbGroupByOutputType[P]>
        }
      >
    >


  export type td_horario_ahbbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_horario_ahbb?: boolean
    diaSemana_ahbb?: boolean
    horaInicio_ahbb?: boolean
    horaFin_ahbb?: boolean
    id_curso_horario_ahbb?: boolean
    curso?: boolean | td_curso_ahbbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["td_horario_ahbb"]>

  export type td_horario_ahbbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_horario_ahbb?: boolean
    diaSemana_ahbb?: boolean
    horaInicio_ahbb?: boolean
    horaFin_ahbb?: boolean
    id_curso_horario_ahbb?: boolean
    curso?: boolean | td_curso_ahbbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["td_horario_ahbb"]>

  export type td_horario_ahbbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_horario_ahbb?: boolean
    diaSemana_ahbb?: boolean
    horaInicio_ahbb?: boolean
    horaFin_ahbb?: boolean
    id_curso_horario_ahbb?: boolean
    curso?: boolean | td_curso_ahbbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["td_horario_ahbb"]>

  export type td_horario_ahbbSelectScalar = {
    id_horario_ahbb?: boolean
    diaSemana_ahbb?: boolean
    horaInicio_ahbb?: boolean
    horaFin_ahbb?: boolean
    id_curso_horario_ahbb?: boolean
  }

  export type td_horario_ahbbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_horario_ahbb" | "diaSemana_ahbb" | "horaInicio_ahbb" | "horaFin_ahbb" | "id_curso_horario_ahbb", ExtArgs["result"]["td_horario_ahbb"]>
  export type td_horario_ahbbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | td_curso_ahbbDefaultArgs<ExtArgs>
  }
  export type td_horario_ahbbIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | td_curso_ahbbDefaultArgs<ExtArgs>
  }
  export type td_horario_ahbbIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | td_curso_ahbbDefaultArgs<ExtArgs>
  }

  export type $td_horario_ahbbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "td_horario_ahbb"
    objects: {
      curso: Prisma.$td_curso_ahbbPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_horario_ahbb: number
      diaSemana_ahbb: string
      horaInicio_ahbb: string
      horaFin_ahbb: string
      id_curso_horario_ahbb: number
    }, ExtArgs["result"]["td_horario_ahbb"]>
    composites: {}
  }

  type td_horario_ahbbGetPayload<S extends boolean | null | undefined | td_horario_ahbbDefaultArgs> = $Result.GetResult<Prisma.$td_horario_ahbbPayload, S>

  type td_horario_ahbbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<td_horario_ahbbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Td_horario_ahbbCountAggregateInputType | true
    }

  export interface td_horario_ahbbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['td_horario_ahbb'], meta: { name: 'td_horario_ahbb' } }
    /**
     * Find zero or one Td_horario_ahbb that matches the filter.
     * @param {td_horario_ahbbFindUniqueArgs} args - Arguments to find a Td_horario_ahbb
     * @example
     * // Get one Td_horario_ahbb
     * const td_horario_ahbb = await prisma.td_horario_ahbb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends td_horario_ahbbFindUniqueArgs>(args: SelectSubset<T, td_horario_ahbbFindUniqueArgs<ExtArgs>>): Prisma__td_horario_ahbbClient<$Result.GetResult<Prisma.$td_horario_ahbbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Td_horario_ahbb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {td_horario_ahbbFindUniqueOrThrowArgs} args - Arguments to find a Td_horario_ahbb
     * @example
     * // Get one Td_horario_ahbb
     * const td_horario_ahbb = await prisma.td_horario_ahbb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends td_horario_ahbbFindUniqueOrThrowArgs>(args: SelectSubset<T, td_horario_ahbbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__td_horario_ahbbClient<$Result.GetResult<Prisma.$td_horario_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_horario_ahbb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_horario_ahbbFindFirstArgs} args - Arguments to find a Td_horario_ahbb
     * @example
     * // Get one Td_horario_ahbb
     * const td_horario_ahbb = await prisma.td_horario_ahbb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends td_horario_ahbbFindFirstArgs>(args?: SelectSubset<T, td_horario_ahbbFindFirstArgs<ExtArgs>>): Prisma__td_horario_ahbbClient<$Result.GetResult<Prisma.$td_horario_ahbbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_horario_ahbb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_horario_ahbbFindFirstOrThrowArgs} args - Arguments to find a Td_horario_ahbb
     * @example
     * // Get one Td_horario_ahbb
     * const td_horario_ahbb = await prisma.td_horario_ahbb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends td_horario_ahbbFindFirstOrThrowArgs>(args?: SelectSubset<T, td_horario_ahbbFindFirstOrThrowArgs<ExtArgs>>): Prisma__td_horario_ahbbClient<$Result.GetResult<Prisma.$td_horario_ahbbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Td_horario_ahbbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_horario_ahbbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Td_horario_ahbbs
     * const td_horario_ahbbs = await prisma.td_horario_ahbb.findMany()
     * 
     * // Get first 10 Td_horario_ahbbs
     * const td_horario_ahbbs = await prisma.td_horario_ahbb.findMany({ take: 10 })
     * 
     * // Only select the `id_horario_ahbb`
     * const td_horario_ahbbWithId_horario_ahbbOnly = await prisma.td_horario_ahbb.findMany({ select: { id_horario_ahbb: true } })
     * 
     */
    findMany<T extends td_horario_ahbbFindManyArgs>(args?: SelectSubset<T, td_horario_ahbbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_horario_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Td_horario_ahbb.
     * @param {td_horario_ahbbCreateArgs} args - Arguments to create a Td_horario_ahbb.
     * @example
     * // Create one Td_horario_ahbb
     * const Td_horario_ahbb = await prisma.td_horario_ahbb.create({
     *   data: {
     *     // ... data to create a Td_horario_ahbb
     *   }
     * })
     * 
     */
    create<T extends td_horario_ahbbCreateArgs>(args: SelectSubset<T, td_horario_ahbbCreateArgs<ExtArgs>>): Prisma__td_horario_ahbbClient<$Result.GetResult<Prisma.$td_horario_ahbbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Td_horario_ahbbs.
     * @param {td_horario_ahbbCreateManyArgs} args - Arguments to create many Td_horario_ahbbs.
     * @example
     * // Create many Td_horario_ahbbs
     * const td_horario_ahbb = await prisma.td_horario_ahbb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends td_horario_ahbbCreateManyArgs>(args?: SelectSubset<T, td_horario_ahbbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Td_horario_ahbbs and returns the data saved in the database.
     * @param {td_horario_ahbbCreateManyAndReturnArgs} args - Arguments to create many Td_horario_ahbbs.
     * @example
     * // Create many Td_horario_ahbbs
     * const td_horario_ahbb = await prisma.td_horario_ahbb.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Td_horario_ahbbs and only return the `id_horario_ahbb`
     * const td_horario_ahbbWithId_horario_ahbbOnly = await prisma.td_horario_ahbb.createManyAndReturn({
     *   select: { id_horario_ahbb: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends td_horario_ahbbCreateManyAndReturnArgs>(args?: SelectSubset<T, td_horario_ahbbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_horario_ahbbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Td_horario_ahbb.
     * @param {td_horario_ahbbDeleteArgs} args - Arguments to delete one Td_horario_ahbb.
     * @example
     * // Delete one Td_horario_ahbb
     * const Td_horario_ahbb = await prisma.td_horario_ahbb.delete({
     *   where: {
     *     // ... filter to delete one Td_horario_ahbb
     *   }
     * })
     * 
     */
    delete<T extends td_horario_ahbbDeleteArgs>(args: SelectSubset<T, td_horario_ahbbDeleteArgs<ExtArgs>>): Prisma__td_horario_ahbbClient<$Result.GetResult<Prisma.$td_horario_ahbbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Td_horario_ahbb.
     * @param {td_horario_ahbbUpdateArgs} args - Arguments to update one Td_horario_ahbb.
     * @example
     * // Update one Td_horario_ahbb
     * const td_horario_ahbb = await prisma.td_horario_ahbb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends td_horario_ahbbUpdateArgs>(args: SelectSubset<T, td_horario_ahbbUpdateArgs<ExtArgs>>): Prisma__td_horario_ahbbClient<$Result.GetResult<Prisma.$td_horario_ahbbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Td_horario_ahbbs.
     * @param {td_horario_ahbbDeleteManyArgs} args - Arguments to filter Td_horario_ahbbs to delete.
     * @example
     * // Delete a few Td_horario_ahbbs
     * const { count } = await prisma.td_horario_ahbb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends td_horario_ahbbDeleteManyArgs>(args?: SelectSubset<T, td_horario_ahbbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_horario_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_horario_ahbbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Td_horario_ahbbs
     * const td_horario_ahbb = await prisma.td_horario_ahbb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends td_horario_ahbbUpdateManyArgs>(args: SelectSubset<T, td_horario_ahbbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_horario_ahbbs and returns the data updated in the database.
     * @param {td_horario_ahbbUpdateManyAndReturnArgs} args - Arguments to update many Td_horario_ahbbs.
     * @example
     * // Update many Td_horario_ahbbs
     * const td_horario_ahbb = await prisma.td_horario_ahbb.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Td_horario_ahbbs and only return the `id_horario_ahbb`
     * const td_horario_ahbbWithId_horario_ahbbOnly = await prisma.td_horario_ahbb.updateManyAndReturn({
     *   select: { id_horario_ahbb: true },
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
    updateManyAndReturn<T extends td_horario_ahbbUpdateManyAndReturnArgs>(args: SelectSubset<T, td_horario_ahbbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_horario_ahbbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Td_horario_ahbb.
     * @param {td_horario_ahbbUpsertArgs} args - Arguments to update or create a Td_horario_ahbb.
     * @example
     * // Update or create a Td_horario_ahbb
     * const td_horario_ahbb = await prisma.td_horario_ahbb.upsert({
     *   create: {
     *     // ... data to create a Td_horario_ahbb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Td_horario_ahbb we want to update
     *   }
     * })
     */
    upsert<T extends td_horario_ahbbUpsertArgs>(args: SelectSubset<T, td_horario_ahbbUpsertArgs<ExtArgs>>): Prisma__td_horario_ahbbClient<$Result.GetResult<Prisma.$td_horario_ahbbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Td_horario_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_horario_ahbbCountArgs} args - Arguments to filter Td_horario_ahbbs to count.
     * @example
     * // Count the number of Td_horario_ahbbs
     * const count = await prisma.td_horario_ahbb.count({
     *   where: {
     *     // ... the filter for the Td_horario_ahbbs we want to count
     *   }
     * })
    **/
    count<T extends td_horario_ahbbCountArgs>(
      args?: Subset<T, td_horario_ahbbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Td_horario_ahbbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Td_horario_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Td_horario_ahbbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Td_horario_ahbbAggregateArgs>(args: Subset<T, Td_horario_ahbbAggregateArgs>): Prisma.PrismaPromise<GetTd_horario_ahbbAggregateType<T>>

    /**
     * Group by Td_horario_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_horario_ahbbGroupByArgs} args - Group by arguments.
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
      T extends td_horario_ahbbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: td_horario_ahbbGroupByArgs['orderBy'] }
        : { orderBy?: td_horario_ahbbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, td_horario_ahbbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTd_horario_ahbbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the td_horario_ahbb model
   */
  readonly fields: td_horario_ahbbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for td_horario_ahbb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__td_horario_ahbbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends td_curso_ahbbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, td_curso_ahbbDefaultArgs<ExtArgs>>): Prisma__td_curso_ahbbClient<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the td_horario_ahbb model
   */
  interface td_horario_ahbbFieldRefs {
    readonly id_horario_ahbb: FieldRef<"td_horario_ahbb", 'Int'>
    readonly diaSemana_ahbb: FieldRef<"td_horario_ahbb", 'String'>
    readonly horaInicio_ahbb: FieldRef<"td_horario_ahbb", 'String'>
    readonly horaFin_ahbb: FieldRef<"td_horario_ahbb", 'String'>
    readonly id_curso_horario_ahbb: FieldRef<"td_horario_ahbb", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * td_horario_ahbb findUnique
   */
  export type td_horario_ahbbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_horario_ahbb
     */
    select?: td_horario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_horario_ahbb
     */
    omit?: td_horario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_horario_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_horario_ahbb to fetch.
     */
    where: td_horario_ahbbWhereUniqueInput
  }

  /**
   * td_horario_ahbb findUniqueOrThrow
   */
  export type td_horario_ahbbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_horario_ahbb
     */
    select?: td_horario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_horario_ahbb
     */
    omit?: td_horario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_horario_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_horario_ahbb to fetch.
     */
    where: td_horario_ahbbWhereUniqueInput
  }

  /**
   * td_horario_ahbb findFirst
   */
  export type td_horario_ahbbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_horario_ahbb
     */
    select?: td_horario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_horario_ahbb
     */
    omit?: td_horario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_horario_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_horario_ahbb to fetch.
     */
    where?: td_horario_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_horario_ahbbs to fetch.
     */
    orderBy?: td_horario_ahbbOrderByWithRelationInput | td_horario_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_horario_ahbbs.
     */
    cursor?: td_horario_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_horario_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_horario_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_horario_ahbbs.
     */
    distinct?: Td_horario_ahbbScalarFieldEnum | Td_horario_ahbbScalarFieldEnum[]
  }

  /**
   * td_horario_ahbb findFirstOrThrow
   */
  export type td_horario_ahbbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_horario_ahbb
     */
    select?: td_horario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_horario_ahbb
     */
    omit?: td_horario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_horario_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_horario_ahbb to fetch.
     */
    where?: td_horario_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_horario_ahbbs to fetch.
     */
    orderBy?: td_horario_ahbbOrderByWithRelationInput | td_horario_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_horario_ahbbs.
     */
    cursor?: td_horario_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_horario_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_horario_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_horario_ahbbs.
     */
    distinct?: Td_horario_ahbbScalarFieldEnum | Td_horario_ahbbScalarFieldEnum[]
  }

  /**
   * td_horario_ahbb findMany
   */
  export type td_horario_ahbbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_horario_ahbb
     */
    select?: td_horario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_horario_ahbb
     */
    omit?: td_horario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_horario_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_horario_ahbbs to fetch.
     */
    where?: td_horario_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_horario_ahbbs to fetch.
     */
    orderBy?: td_horario_ahbbOrderByWithRelationInput | td_horario_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing td_horario_ahbbs.
     */
    cursor?: td_horario_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_horario_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_horario_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_horario_ahbbs.
     */
    distinct?: Td_horario_ahbbScalarFieldEnum | Td_horario_ahbbScalarFieldEnum[]
  }

  /**
   * td_horario_ahbb create
   */
  export type td_horario_ahbbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_horario_ahbb
     */
    select?: td_horario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_horario_ahbb
     */
    omit?: td_horario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_horario_ahbbInclude<ExtArgs> | null
    /**
     * The data needed to create a td_horario_ahbb.
     */
    data: XOR<td_horario_ahbbCreateInput, td_horario_ahbbUncheckedCreateInput>
  }

  /**
   * td_horario_ahbb createMany
   */
  export type td_horario_ahbbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many td_horario_ahbbs.
     */
    data: td_horario_ahbbCreateManyInput | td_horario_ahbbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * td_horario_ahbb createManyAndReturn
   */
  export type td_horario_ahbbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_horario_ahbb
     */
    select?: td_horario_ahbbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_horario_ahbb
     */
    omit?: td_horario_ahbbOmit<ExtArgs> | null
    /**
     * The data used to create many td_horario_ahbbs.
     */
    data: td_horario_ahbbCreateManyInput | td_horario_ahbbCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_horario_ahbbIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * td_horario_ahbb update
   */
  export type td_horario_ahbbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_horario_ahbb
     */
    select?: td_horario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_horario_ahbb
     */
    omit?: td_horario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_horario_ahbbInclude<ExtArgs> | null
    /**
     * The data needed to update a td_horario_ahbb.
     */
    data: XOR<td_horario_ahbbUpdateInput, td_horario_ahbbUncheckedUpdateInput>
    /**
     * Choose, which td_horario_ahbb to update.
     */
    where: td_horario_ahbbWhereUniqueInput
  }

  /**
   * td_horario_ahbb updateMany
   */
  export type td_horario_ahbbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update td_horario_ahbbs.
     */
    data: XOR<td_horario_ahbbUpdateManyMutationInput, td_horario_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_horario_ahbbs to update
     */
    where?: td_horario_ahbbWhereInput
    /**
     * Limit how many td_horario_ahbbs to update.
     */
    limit?: number
  }

  /**
   * td_horario_ahbb updateManyAndReturn
   */
  export type td_horario_ahbbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_horario_ahbb
     */
    select?: td_horario_ahbbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_horario_ahbb
     */
    omit?: td_horario_ahbbOmit<ExtArgs> | null
    /**
     * The data used to update td_horario_ahbbs.
     */
    data: XOR<td_horario_ahbbUpdateManyMutationInput, td_horario_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_horario_ahbbs to update
     */
    where?: td_horario_ahbbWhereInput
    /**
     * Limit how many td_horario_ahbbs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_horario_ahbbIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * td_horario_ahbb upsert
   */
  export type td_horario_ahbbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_horario_ahbb
     */
    select?: td_horario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_horario_ahbb
     */
    omit?: td_horario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_horario_ahbbInclude<ExtArgs> | null
    /**
     * The filter to search for the td_horario_ahbb to update in case it exists.
     */
    where: td_horario_ahbbWhereUniqueInput
    /**
     * In case the td_horario_ahbb found by the `where` argument doesn't exist, create a new td_horario_ahbb with this data.
     */
    create: XOR<td_horario_ahbbCreateInput, td_horario_ahbbUncheckedCreateInput>
    /**
     * In case the td_horario_ahbb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<td_horario_ahbbUpdateInput, td_horario_ahbbUncheckedUpdateInput>
  }

  /**
   * td_horario_ahbb delete
   */
  export type td_horario_ahbbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_horario_ahbb
     */
    select?: td_horario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_horario_ahbb
     */
    omit?: td_horario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_horario_ahbbInclude<ExtArgs> | null
    /**
     * Filter which td_horario_ahbb to delete.
     */
    where: td_horario_ahbbWhereUniqueInput
  }

  /**
   * td_horario_ahbb deleteMany
   */
  export type td_horario_ahbbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_horario_ahbbs to delete
     */
    where?: td_horario_ahbbWhereInput
    /**
     * Limit how many td_horario_ahbbs to delete.
     */
    limit?: number
  }

  /**
   * td_horario_ahbb without action
   */
  export type td_horario_ahbbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_horario_ahbb
     */
    select?: td_horario_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_horario_ahbb
     */
    omit?: td_horario_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_horario_ahbbInclude<ExtArgs> | null
  }


  /**
   * Model td_inscripcion_ahbb
   */

  export type AggregateTd_inscripcion_ahbb = {
    _count: Td_inscripcion_ahbbCountAggregateOutputType | null
    _avg: Td_inscripcion_ahbbAvgAggregateOutputType | null
    _sum: Td_inscripcion_ahbbSumAggregateOutputType | null
    _min: Td_inscripcion_ahbbMinAggregateOutputType | null
    _max: Td_inscripcion_ahbbMaxAggregateOutputType | null
  }

  export type Td_inscripcion_ahbbAvgAggregateOutputType = {
    id_inscripcion_ahbb: number | null
    intento_ahbb: number | null
    notaFinal_ahbb: Decimal | null
    id_usuario_inscripcion_ahbb: number | null
    id_curso_inscripcion_ahbb: number | null
  }

  export type Td_inscripcion_ahbbSumAggregateOutputType = {
    id_inscripcion_ahbb: number | null
    intento_ahbb: number | null
    notaFinal_ahbb: Decimal | null
    id_usuario_inscripcion_ahbb: number | null
    id_curso_inscripcion_ahbb: number | null
  }

  export type Td_inscripcion_ahbbMinAggregateOutputType = {
    id_inscripcion_ahbb: number | null
    estatus_ahbb: string | null
    intento_ahbb: number | null
    notaFinal_ahbb: Decimal | null
    observaciones_ahbb: string | null
    id_usuario_inscripcion_ahbb: number | null
    id_curso_inscripcion_ahbb: number | null
    creadoEn_ahbb: Date | null
    actualizadoEn_ahbb: Date | null
  }

  export type Td_inscripcion_ahbbMaxAggregateOutputType = {
    id_inscripcion_ahbb: number | null
    estatus_ahbb: string | null
    intento_ahbb: number | null
    notaFinal_ahbb: Decimal | null
    observaciones_ahbb: string | null
    id_usuario_inscripcion_ahbb: number | null
    id_curso_inscripcion_ahbb: number | null
    creadoEn_ahbb: Date | null
    actualizadoEn_ahbb: Date | null
  }

  export type Td_inscripcion_ahbbCountAggregateOutputType = {
    id_inscripcion_ahbb: number
    estatus_ahbb: number
    intento_ahbb: number
    notaFinal_ahbb: number
    observaciones_ahbb: number
    id_usuario_inscripcion_ahbb: number
    id_curso_inscripcion_ahbb: number
    creadoEn_ahbb: number
    actualizadoEn_ahbb: number
    _all: number
  }


  export type Td_inscripcion_ahbbAvgAggregateInputType = {
    id_inscripcion_ahbb?: true
    intento_ahbb?: true
    notaFinal_ahbb?: true
    id_usuario_inscripcion_ahbb?: true
    id_curso_inscripcion_ahbb?: true
  }

  export type Td_inscripcion_ahbbSumAggregateInputType = {
    id_inscripcion_ahbb?: true
    intento_ahbb?: true
    notaFinal_ahbb?: true
    id_usuario_inscripcion_ahbb?: true
    id_curso_inscripcion_ahbb?: true
  }

  export type Td_inscripcion_ahbbMinAggregateInputType = {
    id_inscripcion_ahbb?: true
    estatus_ahbb?: true
    intento_ahbb?: true
    notaFinal_ahbb?: true
    observaciones_ahbb?: true
    id_usuario_inscripcion_ahbb?: true
    id_curso_inscripcion_ahbb?: true
    creadoEn_ahbb?: true
    actualizadoEn_ahbb?: true
  }

  export type Td_inscripcion_ahbbMaxAggregateInputType = {
    id_inscripcion_ahbb?: true
    estatus_ahbb?: true
    intento_ahbb?: true
    notaFinal_ahbb?: true
    observaciones_ahbb?: true
    id_usuario_inscripcion_ahbb?: true
    id_curso_inscripcion_ahbb?: true
    creadoEn_ahbb?: true
    actualizadoEn_ahbb?: true
  }

  export type Td_inscripcion_ahbbCountAggregateInputType = {
    id_inscripcion_ahbb?: true
    estatus_ahbb?: true
    intento_ahbb?: true
    notaFinal_ahbb?: true
    observaciones_ahbb?: true
    id_usuario_inscripcion_ahbb?: true
    id_curso_inscripcion_ahbb?: true
    creadoEn_ahbb?: true
    actualizadoEn_ahbb?: true
    _all?: true
  }

  export type Td_inscripcion_ahbbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_inscripcion_ahbb to aggregate.
     */
    where?: td_inscripcion_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_inscripcion_ahbbs to fetch.
     */
    orderBy?: td_inscripcion_ahbbOrderByWithRelationInput | td_inscripcion_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: td_inscripcion_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_inscripcion_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_inscripcion_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned td_inscripcion_ahbbs
    **/
    _count?: true | Td_inscripcion_ahbbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Td_inscripcion_ahbbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Td_inscripcion_ahbbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Td_inscripcion_ahbbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Td_inscripcion_ahbbMaxAggregateInputType
  }

  export type GetTd_inscripcion_ahbbAggregateType<T extends Td_inscripcion_ahbbAggregateArgs> = {
        [P in keyof T & keyof AggregateTd_inscripcion_ahbb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTd_inscripcion_ahbb[P]>
      : GetScalarType<T[P], AggregateTd_inscripcion_ahbb[P]>
  }




  export type td_inscripcion_ahbbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_inscripcion_ahbbWhereInput
    orderBy?: td_inscripcion_ahbbOrderByWithAggregationInput | td_inscripcion_ahbbOrderByWithAggregationInput[]
    by: Td_inscripcion_ahbbScalarFieldEnum[] | Td_inscripcion_ahbbScalarFieldEnum
    having?: td_inscripcion_ahbbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Td_inscripcion_ahbbCountAggregateInputType | true
    _avg?: Td_inscripcion_ahbbAvgAggregateInputType
    _sum?: Td_inscripcion_ahbbSumAggregateInputType
    _min?: Td_inscripcion_ahbbMinAggregateInputType
    _max?: Td_inscripcion_ahbbMaxAggregateInputType
  }

  export type Td_inscripcion_ahbbGroupByOutputType = {
    id_inscripcion_ahbb: number
    estatus_ahbb: string | null
    intento_ahbb: number
    notaFinal_ahbb: Decimal | null
    observaciones_ahbb: string | null
    id_usuario_inscripcion_ahbb: number
    id_curso_inscripcion_ahbb: number
    creadoEn_ahbb: Date | null
    actualizadoEn_ahbb: Date | null
    _count: Td_inscripcion_ahbbCountAggregateOutputType | null
    _avg: Td_inscripcion_ahbbAvgAggregateOutputType | null
    _sum: Td_inscripcion_ahbbSumAggregateOutputType | null
    _min: Td_inscripcion_ahbbMinAggregateOutputType | null
    _max: Td_inscripcion_ahbbMaxAggregateOutputType | null
  }

  type GetTd_inscripcion_ahbbGroupByPayload<T extends td_inscripcion_ahbbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Td_inscripcion_ahbbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Td_inscripcion_ahbbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Td_inscripcion_ahbbGroupByOutputType[P]>
            : GetScalarType<T[P], Td_inscripcion_ahbbGroupByOutputType[P]>
        }
      >
    >


  export type td_inscripcion_ahbbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_inscripcion_ahbb?: boolean
    estatus_ahbb?: boolean
    intento_ahbb?: boolean
    notaFinal_ahbb?: boolean
    observaciones_ahbb?: boolean
    id_usuario_inscripcion_ahbb?: boolean
    id_curso_inscripcion_ahbb?: boolean
    creadoEn_ahbb?: boolean
    actualizadoEn_ahbb?: boolean
    alumno?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    curso?: boolean | td_curso_ahbbDefaultArgs<ExtArgs>
    certificado?: boolean | td_inscripcion_ahbb$certificadoArgs<ExtArgs>
  }, ExtArgs["result"]["td_inscripcion_ahbb"]>

  export type td_inscripcion_ahbbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_inscripcion_ahbb?: boolean
    estatus_ahbb?: boolean
    intento_ahbb?: boolean
    notaFinal_ahbb?: boolean
    observaciones_ahbb?: boolean
    id_usuario_inscripcion_ahbb?: boolean
    id_curso_inscripcion_ahbb?: boolean
    creadoEn_ahbb?: boolean
    actualizadoEn_ahbb?: boolean
    alumno?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    curso?: boolean | td_curso_ahbbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["td_inscripcion_ahbb"]>

  export type td_inscripcion_ahbbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_inscripcion_ahbb?: boolean
    estatus_ahbb?: boolean
    intento_ahbb?: boolean
    notaFinal_ahbb?: boolean
    observaciones_ahbb?: boolean
    id_usuario_inscripcion_ahbb?: boolean
    id_curso_inscripcion_ahbb?: boolean
    creadoEn_ahbb?: boolean
    actualizadoEn_ahbb?: boolean
    alumno?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    curso?: boolean | td_curso_ahbbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["td_inscripcion_ahbb"]>

  export type td_inscripcion_ahbbSelectScalar = {
    id_inscripcion_ahbb?: boolean
    estatus_ahbb?: boolean
    intento_ahbb?: boolean
    notaFinal_ahbb?: boolean
    observaciones_ahbb?: boolean
    id_usuario_inscripcion_ahbb?: boolean
    id_curso_inscripcion_ahbb?: boolean
    creadoEn_ahbb?: boolean
    actualizadoEn_ahbb?: boolean
  }

  export type td_inscripcion_ahbbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_inscripcion_ahbb" | "estatus_ahbb" | "intento_ahbb" | "notaFinal_ahbb" | "observaciones_ahbb" | "id_usuario_inscripcion_ahbb" | "id_curso_inscripcion_ahbb" | "creadoEn_ahbb" | "actualizadoEn_ahbb", ExtArgs["result"]["td_inscripcion_ahbb"]>
  export type td_inscripcion_ahbbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    curso?: boolean | td_curso_ahbbDefaultArgs<ExtArgs>
    certificado?: boolean | td_inscripcion_ahbb$certificadoArgs<ExtArgs>
  }
  export type td_inscripcion_ahbbIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    curso?: boolean | td_curso_ahbbDefaultArgs<ExtArgs>
  }
  export type td_inscripcion_ahbbIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    curso?: boolean | td_curso_ahbbDefaultArgs<ExtArgs>
  }

  export type $td_inscripcion_ahbbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "td_inscripcion_ahbb"
    objects: {
      alumno: Prisma.$td_usuario_ahbbPayload<ExtArgs>
      curso: Prisma.$td_curso_ahbbPayload<ExtArgs>
      certificado: Prisma.$td_certificado_ahbbPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_inscripcion_ahbb: number
      estatus_ahbb: string | null
      intento_ahbb: number
      notaFinal_ahbb: Prisma.Decimal | null
      observaciones_ahbb: string | null
      id_usuario_inscripcion_ahbb: number
      id_curso_inscripcion_ahbb: number
      creadoEn_ahbb: Date | null
      actualizadoEn_ahbb: Date | null
    }, ExtArgs["result"]["td_inscripcion_ahbb"]>
    composites: {}
  }

  type td_inscripcion_ahbbGetPayload<S extends boolean | null | undefined | td_inscripcion_ahbbDefaultArgs> = $Result.GetResult<Prisma.$td_inscripcion_ahbbPayload, S>

  type td_inscripcion_ahbbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<td_inscripcion_ahbbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Td_inscripcion_ahbbCountAggregateInputType | true
    }

  export interface td_inscripcion_ahbbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['td_inscripcion_ahbb'], meta: { name: 'td_inscripcion_ahbb' } }
    /**
     * Find zero or one Td_inscripcion_ahbb that matches the filter.
     * @param {td_inscripcion_ahbbFindUniqueArgs} args - Arguments to find a Td_inscripcion_ahbb
     * @example
     * // Get one Td_inscripcion_ahbb
     * const td_inscripcion_ahbb = await prisma.td_inscripcion_ahbb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends td_inscripcion_ahbbFindUniqueArgs>(args: SelectSubset<T, td_inscripcion_ahbbFindUniqueArgs<ExtArgs>>): Prisma__td_inscripcion_ahbbClient<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Td_inscripcion_ahbb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {td_inscripcion_ahbbFindUniqueOrThrowArgs} args - Arguments to find a Td_inscripcion_ahbb
     * @example
     * // Get one Td_inscripcion_ahbb
     * const td_inscripcion_ahbb = await prisma.td_inscripcion_ahbb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends td_inscripcion_ahbbFindUniqueOrThrowArgs>(args: SelectSubset<T, td_inscripcion_ahbbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__td_inscripcion_ahbbClient<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_inscripcion_ahbb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_inscripcion_ahbbFindFirstArgs} args - Arguments to find a Td_inscripcion_ahbb
     * @example
     * // Get one Td_inscripcion_ahbb
     * const td_inscripcion_ahbb = await prisma.td_inscripcion_ahbb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends td_inscripcion_ahbbFindFirstArgs>(args?: SelectSubset<T, td_inscripcion_ahbbFindFirstArgs<ExtArgs>>): Prisma__td_inscripcion_ahbbClient<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_inscripcion_ahbb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_inscripcion_ahbbFindFirstOrThrowArgs} args - Arguments to find a Td_inscripcion_ahbb
     * @example
     * // Get one Td_inscripcion_ahbb
     * const td_inscripcion_ahbb = await prisma.td_inscripcion_ahbb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends td_inscripcion_ahbbFindFirstOrThrowArgs>(args?: SelectSubset<T, td_inscripcion_ahbbFindFirstOrThrowArgs<ExtArgs>>): Prisma__td_inscripcion_ahbbClient<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Td_inscripcion_ahbbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_inscripcion_ahbbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Td_inscripcion_ahbbs
     * const td_inscripcion_ahbbs = await prisma.td_inscripcion_ahbb.findMany()
     * 
     * // Get first 10 Td_inscripcion_ahbbs
     * const td_inscripcion_ahbbs = await prisma.td_inscripcion_ahbb.findMany({ take: 10 })
     * 
     * // Only select the `id_inscripcion_ahbb`
     * const td_inscripcion_ahbbWithId_inscripcion_ahbbOnly = await prisma.td_inscripcion_ahbb.findMany({ select: { id_inscripcion_ahbb: true } })
     * 
     */
    findMany<T extends td_inscripcion_ahbbFindManyArgs>(args?: SelectSubset<T, td_inscripcion_ahbbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Td_inscripcion_ahbb.
     * @param {td_inscripcion_ahbbCreateArgs} args - Arguments to create a Td_inscripcion_ahbb.
     * @example
     * // Create one Td_inscripcion_ahbb
     * const Td_inscripcion_ahbb = await prisma.td_inscripcion_ahbb.create({
     *   data: {
     *     // ... data to create a Td_inscripcion_ahbb
     *   }
     * })
     * 
     */
    create<T extends td_inscripcion_ahbbCreateArgs>(args: SelectSubset<T, td_inscripcion_ahbbCreateArgs<ExtArgs>>): Prisma__td_inscripcion_ahbbClient<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Td_inscripcion_ahbbs.
     * @param {td_inscripcion_ahbbCreateManyArgs} args - Arguments to create many Td_inscripcion_ahbbs.
     * @example
     * // Create many Td_inscripcion_ahbbs
     * const td_inscripcion_ahbb = await prisma.td_inscripcion_ahbb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends td_inscripcion_ahbbCreateManyArgs>(args?: SelectSubset<T, td_inscripcion_ahbbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Td_inscripcion_ahbbs and returns the data saved in the database.
     * @param {td_inscripcion_ahbbCreateManyAndReturnArgs} args - Arguments to create many Td_inscripcion_ahbbs.
     * @example
     * // Create many Td_inscripcion_ahbbs
     * const td_inscripcion_ahbb = await prisma.td_inscripcion_ahbb.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Td_inscripcion_ahbbs and only return the `id_inscripcion_ahbb`
     * const td_inscripcion_ahbbWithId_inscripcion_ahbbOnly = await prisma.td_inscripcion_ahbb.createManyAndReturn({
     *   select: { id_inscripcion_ahbb: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends td_inscripcion_ahbbCreateManyAndReturnArgs>(args?: SelectSubset<T, td_inscripcion_ahbbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Td_inscripcion_ahbb.
     * @param {td_inscripcion_ahbbDeleteArgs} args - Arguments to delete one Td_inscripcion_ahbb.
     * @example
     * // Delete one Td_inscripcion_ahbb
     * const Td_inscripcion_ahbb = await prisma.td_inscripcion_ahbb.delete({
     *   where: {
     *     // ... filter to delete one Td_inscripcion_ahbb
     *   }
     * })
     * 
     */
    delete<T extends td_inscripcion_ahbbDeleteArgs>(args: SelectSubset<T, td_inscripcion_ahbbDeleteArgs<ExtArgs>>): Prisma__td_inscripcion_ahbbClient<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Td_inscripcion_ahbb.
     * @param {td_inscripcion_ahbbUpdateArgs} args - Arguments to update one Td_inscripcion_ahbb.
     * @example
     * // Update one Td_inscripcion_ahbb
     * const td_inscripcion_ahbb = await prisma.td_inscripcion_ahbb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends td_inscripcion_ahbbUpdateArgs>(args: SelectSubset<T, td_inscripcion_ahbbUpdateArgs<ExtArgs>>): Prisma__td_inscripcion_ahbbClient<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Td_inscripcion_ahbbs.
     * @param {td_inscripcion_ahbbDeleteManyArgs} args - Arguments to filter Td_inscripcion_ahbbs to delete.
     * @example
     * // Delete a few Td_inscripcion_ahbbs
     * const { count } = await prisma.td_inscripcion_ahbb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends td_inscripcion_ahbbDeleteManyArgs>(args?: SelectSubset<T, td_inscripcion_ahbbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_inscripcion_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_inscripcion_ahbbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Td_inscripcion_ahbbs
     * const td_inscripcion_ahbb = await prisma.td_inscripcion_ahbb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends td_inscripcion_ahbbUpdateManyArgs>(args: SelectSubset<T, td_inscripcion_ahbbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_inscripcion_ahbbs and returns the data updated in the database.
     * @param {td_inscripcion_ahbbUpdateManyAndReturnArgs} args - Arguments to update many Td_inscripcion_ahbbs.
     * @example
     * // Update many Td_inscripcion_ahbbs
     * const td_inscripcion_ahbb = await prisma.td_inscripcion_ahbb.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Td_inscripcion_ahbbs and only return the `id_inscripcion_ahbb`
     * const td_inscripcion_ahbbWithId_inscripcion_ahbbOnly = await prisma.td_inscripcion_ahbb.updateManyAndReturn({
     *   select: { id_inscripcion_ahbb: true },
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
    updateManyAndReturn<T extends td_inscripcion_ahbbUpdateManyAndReturnArgs>(args: SelectSubset<T, td_inscripcion_ahbbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Td_inscripcion_ahbb.
     * @param {td_inscripcion_ahbbUpsertArgs} args - Arguments to update or create a Td_inscripcion_ahbb.
     * @example
     * // Update or create a Td_inscripcion_ahbb
     * const td_inscripcion_ahbb = await prisma.td_inscripcion_ahbb.upsert({
     *   create: {
     *     // ... data to create a Td_inscripcion_ahbb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Td_inscripcion_ahbb we want to update
     *   }
     * })
     */
    upsert<T extends td_inscripcion_ahbbUpsertArgs>(args: SelectSubset<T, td_inscripcion_ahbbUpsertArgs<ExtArgs>>): Prisma__td_inscripcion_ahbbClient<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Td_inscripcion_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_inscripcion_ahbbCountArgs} args - Arguments to filter Td_inscripcion_ahbbs to count.
     * @example
     * // Count the number of Td_inscripcion_ahbbs
     * const count = await prisma.td_inscripcion_ahbb.count({
     *   where: {
     *     // ... the filter for the Td_inscripcion_ahbbs we want to count
     *   }
     * })
    **/
    count<T extends td_inscripcion_ahbbCountArgs>(
      args?: Subset<T, td_inscripcion_ahbbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Td_inscripcion_ahbbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Td_inscripcion_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Td_inscripcion_ahbbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Td_inscripcion_ahbbAggregateArgs>(args: Subset<T, Td_inscripcion_ahbbAggregateArgs>): Prisma.PrismaPromise<GetTd_inscripcion_ahbbAggregateType<T>>

    /**
     * Group by Td_inscripcion_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_inscripcion_ahbbGroupByArgs} args - Group by arguments.
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
      T extends td_inscripcion_ahbbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: td_inscripcion_ahbbGroupByArgs['orderBy'] }
        : { orderBy?: td_inscripcion_ahbbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, td_inscripcion_ahbbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTd_inscripcion_ahbbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the td_inscripcion_ahbb model
   */
  readonly fields: td_inscripcion_ahbbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for td_inscripcion_ahbb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__td_inscripcion_ahbbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alumno<T extends td_usuario_ahbbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, td_usuario_ahbbDefaultArgs<ExtArgs>>): Prisma__td_usuario_ahbbClient<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    curso<T extends td_curso_ahbbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, td_curso_ahbbDefaultArgs<ExtArgs>>): Prisma__td_curso_ahbbClient<$Result.GetResult<Prisma.$td_curso_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    certificado<T extends td_inscripcion_ahbb$certificadoArgs<ExtArgs> = {}>(args?: Subset<T, td_inscripcion_ahbb$certificadoArgs<ExtArgs>>): Prisma__td_certificado_ahbbClient<$Result.GetResult<Prisma.$td_certificado_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the td_inscripcion_ahbb model
   */
  interface td_inscripcion_ahbbFieldRefs {
    readonly id_inscripcion_ahbb: FieldRef<"td_inscripcion_ahbb", 'Int'>
    readonly estatus_ahbb: FieldRef<"td_inscripcion_ahbb", 'String'>
    readonly intento_ahbb: FieldRef<"td_inscripcion_ahbb", 'Int'>
    readonly notaFinal_ahbb: FieldRef<"td_inscripcion_ahbb", 'Decimal'>
    readonly observaciones_ahbb: FieldRef<"td_inscripcion_ahbb", 'String'>
    readonly id_usuario_inscripcion_ahbb: FieldRef<"td_inscripcion_ahbb", 'Int'>
    readonly id_curso_inscripcion_ahbb: FieldRef<"td_inscripcion_ahbb", 'Int'>
    readonly creadoEn_ahbb: FieldRef<"td_inscripcion_ahbb", 'DateTime'>
    readonly actualizadoEn_ahbb: FieldRef<"td_inscripcion_ahbb", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * td_inscripcion_ahbb findUnique
   */
  export type td_inscripcion_ahbbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_inscripcion_ahbb to fetch.
     */
    where: td_inscripcion_ahbbWhereUniqueInput
  }

  /**
   * td_inscripcion_ahbb findUniqueOrThrow
   */
  export type td_inscripcion_ahbbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_inscripcion_ahbb to fetch.
     */
    where: td_inscripcion_ahbbWhereUniqueInput
  }

  /**
   * td_inscripcion_ahbb findFirst
   */
  export type td_inscripcion_ahbbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_inscripcion_ahbb to fetch.
     */
    where?: td_inscripcion_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_inscripcion_ahbbs to fetch.
     */
    orderBy?: td_inscripcion_ahbbOrderByWithRelationInput | td_inscripcion_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_inscripcion_ahbbs.
     */
    cursor?: td_inscripcion_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_inscripcion_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_inscripcion_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_inscripcion_ahbbs.
     */
    distinct?: Td_inscripcion_ahbbScalarFieldEnum | Td_inscripcion_ahbbScalarFieldEnum[]
  }

  /**
   * td_inscripcion_ahbb findFirstOrThrow
   */
  export type td_inscripcion_ahbbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_inscripcion_ahbb to fetch.
     */
    where?: td_inscripcion_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_inscripcion_ahbbs to fetch.
     */
    orderBy?: td_inscripcion_ahbbOrderByWithRelationInput | td_inscripcion_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_inscripcion_ahbbs.
     */
    cursor?: td_inscripcion_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_inscripcion_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_inscripcion_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_inscripcion_ahbbs.
     */
    distinct?: Td_inscripcion_ahbbScalarFieldEnum | Td_inscripcion_ahbbScalarFieldEnum[]
  }

  /**
   * td_inscripcion_ahbb findMany
   */
  export type td_inscripcion_ahbbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_inscripcion_ahbbs to fetch.
     */
    where?: td_inscripcion_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_inscripcion_ahbbs to fetch.
     */
    orderBy?: td_inscripcion_ahbbOrderByWithRelationInput | td_inscripcion_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing td_inscripcion_ahbbs.
     */
    cursor?: td_inscripcion_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_inscripcion_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_inscripcion_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_inscripcion_ahbbs.
     */
    distinct?: Td_inscripcion_ahbbScalarFieldEnum | Td_inscripcion_ahbbScalarFieldEnum[]
  }

  /**
   * td_inscripcion_ahbb create
   */
  export type td_inscripcion_ahbbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbInclude<ExtArgs> | null
    /**
     * The data needed to create a td_inscripcion_ahbb.
     */
    data: XOR<td_inscripcion_ahbbCreateInput, td_inscripcion_ahbbUncheckedCreateInput>
  }

  /**
   * td_inscripcion_ahbb createMany
   */
  export type td_inscripcion_ahbbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many td_inscripcion_ahbbs.
     */
    data: td_inscripcion_ahbbCreateManyInput | td_inscripcion_ahbbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * td_inscripcion_ahbb createManyAndReturn
   */
  export type td_inscripcion_ahbbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * The data used to create many td_inscripcion_ahbbs.
     */
    data: td_inscripcion_ahbbCreateManyInput | td_inscripcion_ahbbCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * td_inscripcion_ahbb update
   */
  export type td_inscripcion_ahbbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbInclude<ExtArgs> | null
    /**
     * The data needed to update a td_inscripcion_ahbb.
     */
    data: XOR<td_inscripcion_ahbbUpdateInput, td_inscripcion_ahbbUncheckedUpdateInput>
    /**
     * Choose, which td_inscripcion_ahbb to update.
     */
    where: td_inscripcion_ahbbWhereUniqueInput
  }

  /**
   * td_inscripcion_ahbb updateMany
   */
  export type td_inscripcion_ahbbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update td_inscripcion_ahbbs.
     */
    data: XOR<td_inscripcion_ahbbUpdateManyMutationInput, td_inscripcion_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_inscripcion_ahbbs to update
     */
    where?: td_inscripcion_ahbbWhereInput
    /**
     * Limit how many td_inscripcion_ahbbs to update.
     */
    limit?: number
  }

  /**
   * td_inscripcion_ahbb updateManyAndReturn
   */
  export type td_inscripcion_ahbbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * The data used to update td_inscripcion_ahbbs.
     */
    data: XOR<td_inscripcion_ahbbUpdateManyMutationInput, td_inscripcion_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_inscripcion_ahbbs to update
     */
    where?: td_inscripcion_ahbbWhereInput
    /**
     * Limit how many td_inscripcion_ahbbs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * td_inscripcion_ahbb upsert
   */
  export type td_inscripcion_ahbbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbInclude<ExtArgs> | null
    /**
     * The filter to search for the td_inscripcion_ahbb to update in case it exists.
     */
    where: td_inscripcion_ahbbWhereUniqueInput
    /**
     * In case the td_inscripcion_ahbb found by the `where` argument doesn't exist, create a new td_inscripcion_ahbb with this data.
     */
    create: XOR<td_inscripcion_ahbbCreateInput, td_inscripcion_ahbbUncheckedCreateInput>
    /**
     * In case the td_inscripcion_ahbb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<td_inscripcion_ahbbUpdateInput, td_inscripcion_ahbbUncheckedUpdateInput>
  }

  /**
   * td_inscripcion_ahbb delete
   */
  export type td_inscripcion_ahbbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbInclude<ExtArgs> | null
    /**
     * Filter which td_inscripcion_ahbb to delete.
     */
    where: td_inscripcion_ahbbWhereUniqueInput
  }

  /**
   * td_inscripcion_ahbb deleteMany
   */
  export type td_inscripcion_ahbbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_inscripcion_ahbbs to delete
     */
    where?: td_inscripcion_ahbbWhereInput
    /**
     * Limit how many td_inscripcion_ahbbs to delete.
     */
    limit?: number
  }

  /**
   * td_inscripcion_ahbb.certificado
   */
  export type td_inscripcion_ahbb$certificadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_certificado_ahbb
     */
    select?: td_certificado_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_certificado_ahbb
     */
    omit?: td_certificado_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_certificado_ahbbInclude<ExtArgs> | null
    where?: td_certificado_ahbbWhereInput
  }

  /**
   * td_inscripcion_ahbb without action
   */
  export type td_inscripcion_ahbbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_inscripcion_ahbb
     */
    select?: td_inscripcion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_inscripcion_ahbb
     */
    omit?: td_inscripcion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_inscripcion_ahbbInclude<ExtArgs> | null
  }


  /**
   * Model td_certificado_ahbb
   */

  export type AggregateTd_certificado_ahbb = {
    _count: Td_certificado_ahbbCountAggregateOutputType | null
    _avg: Td_certificado_ahbbAvgAggregateOutputType | null
    _sum: Td_certificado_ahbbSumAggregateOutputType | null
    _min: Td_certificado_ahbbMinAggregateOutputType | null
    _max: Td_certificado_ahbbMaxAggregateOutputType | null
  }

  export type Td_certificado_ahbbAvgAggregateOutputType = {
    id_certificado_ahbb: number | null
    id_inscripcion_certificado_ahbb: number | null
  }

  export type Td_certificado_ahbbSumAggregateOutputType = {
    id_certificado_ahbb: number | null
    id_inscripcion_certificado_ahbb: number | null
  }

  export type Td_certificado_ahbbMinAggregateOutputType = {
    id_certificado_ahbb: number | null
    codigoQrUrl_ahbb: string | null
    id_inscripcion_certificado_ahbb: number | null
    creadoEn_ahbb: Date | null
  }

  export type Td_certificado_ahbbMaxAggregateOutputType = {
    id_certificado_ahbb: number | null
    codigoQrUrl_ahbb: string | null
    id_inscripcion_certificado_ahbb: number | null
    creadoEn_ahbb: Date | null
  }

  export type Td_certificado_ahbbCountAggregateOutputType = {
    id_certificado_ahbb: number
    codigoQrUrl_ahbb: number
    id_inscripcion_certificado_ahbb: number
    creadoEn_ahbb: number
    _all: number
  }


  export type Td_certificado_ahbbAvgAggregateInputType = {
    id_certificado_ahbb?: true
    id_inscripcion_certificado_ahbb?: true
  }

  export type Td_certificado_ahbbSumAggregateInputType = {
    id_certificado_ahbb?: true
    id_inscripcion_certificado_ahbb?: true
  }

  export type Td_certificado_ahbbMinAggregateInputType = {
    id_certificado_ahbb?: true
    codigoQrUrl_ahbb?: true
    id_inscripcion_certificado_ahbb?: true
    creadoEn_ahbb?: true
  }

  export type Td_certificado_ahbbMaxAggregateInputType = {
    id_certificado_ahbb?: true
    codigoQrUrl_ahbb?: true
    id_inscripcion_certificado_ahbb?: true
    creadoEn_ahbb?: true
  }

  export type Td_certificado_ahbbCountAggregateInputType = {
    id_certificado_ahbb?: true
    codigoQrUrl_ahbb?: true
    id_inscripcion_certificado_ahbb?: true
    creadoEn_ahbb?: true
    _all?: true
  }

  export type Td_certificado_ahbbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_certificado_ahbb to aggregate.
     */
    where?: td_certificado_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_certificado_ahbbs to fetch.
     */
    orderBy?: td_certificado_ahbbOrderByWithRelationInput | td_certificado_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: td_certificado_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_certificado_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_certificado_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned td_certificado_ahbbs
    **/
    _count?: true | Td_certificado_ahbbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Td_certificado_ahbbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Td_certificado_ahbbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Td_certificado_ahbbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Td_certificado_ahbbMaxAggregateInputType
  }

  export type GetTd_certificado_ahbbAggregateType<T extends Td_certificado_ahbbAggregateArgs> = {
        [P in keyof T & keyof AggregateTd_certificado_ahbb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTd_certificado_ahbb[P]>
      : GetScalarType<T[P], AggregateTd_certificado_ahbb[P]>
  }




  export type td_certificado_ahbbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_certificado_ahbbWhereInput
    orderBy?: td_certificado_ahbbOrderByWithAggregationInput | td_certificado_ahbbOrderByWithAggregationInput[]
    by: Td_certificado_ahbbScalarFieldEnum[] | Td_certificado_ahbbScalarFieldEnum
    having?: td_certificado_ahbbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Td_certificado_ahbbCountAggregateInputType | true
    _avg?: Td_certificado_ahbbAvgAggregateInputType
    _sum?: Td_certificado_ahbbSumAggregateInputType
    _min?: Td_certificado_ahbbMinAggregateInputType
    _max?: Td_certificado_ahbbMaxAggregateInputType
  }

  export type Td_certificado_ahbbGroupByOutputType = {
    id_certificado_ahbb: number
    codigoQrUrl_ahbb: string
    id_inscripcion_certificado_ahbb: number
    creadoEn_ahbb: Date | null
    _count: Td_certificado_ahbbCountAggregateOutputType | null
    _avg: Td_certificado_ahbbAvgAggregateOutputType | null
    _sum: Td_certificado_ahbbSumAggregateOutputType | null
    _min: Td_certificado_ahbbMinAggregateOutputType | null
    _max: Td_certificado_ahbbMaxAggregateOutputType | null
  }

  type GetTd_certificado_ahbbGroupByPayload<T extends td_certificado_ahbbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Td_certificado_ahbbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Td_certificado_ahbbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Td_certificado_ahbbGroupByOutputType[P]>
            : GetScalarType<T[P], Td_certificado_ahbbGroupByOutputType[P]>
        }
      >
    >


  export type td_certificado_ahbbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_certificado_ahbb?: boolean
    codigoQrUrl_ahbb?: boolean
    id_inscripcion_certificado_ahbb?: boolean
    creadoEn_ahbb?: boolean
    inscripcion?: boolean | td_inscripcion_ahbbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["td_certificado_ahbb"]>

  export type td_certificado_ahbbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_certificado_ahbb?: boolean
    codigoQrUrl_ahbb?: boolean
    id_inscripcion_certificado_ahbb?: boolean
    creadoEn_ahbb?: boolean
    inscripcion?: boolean | td_inscripcion_ahbbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["td_certificado_ahbb"]>

  export type td_certificado_ahbbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_certificado_ahbb?: boolean
    codigoQrUrl_ahbb?: boolean
    id_inscripcion_certificado_ahbb?: boolean
    creadoEn_ahbb?: boolean
    inscripcion?: boolean | td_inscripcion_ahbbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["td_certificado_ahbb"]>

  export type td_certificado_ahbbSelectScalar = {
    id_certificado_ahbb?: boolean
    codigoQrUrl_ahbb?: boolean
    id_inscripcion_certificado_ahbb?: boolean
    creadoEn_ahbb?: boolean
  }

  export type td_certificado_ahbbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_certificado_ahbb" | "codigoQrUrl_ahbb" | "id_inscripcion_certificado_ahbb" | "creadoEn_ahbb", ExtArgs["result"]["td_certificado_ahbb"]>
  export type td_certificado_ahbbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripcion?: boolean | td_inscripcion_ahbbDefaultArgs<ExtArgs>
  }
  export type td_certificado_ahbbIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripcion?: boolean | td_inscripcion_ahbbDefaultArgs<ExtArgs>
  }
  export type td_certificado_ahbbIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripcion?: boolean | td_inscripcion_ahbbDefaultArgs<ExtArgs>
  }

  export type $td_certificado_ahbbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "td_certificado_ahbb"
    objects: {
      inscripcion: Prisma.$td_inscripcion_ahbbPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_certificado_ahbb: number
      codigoQrUrl_ahbb: string
      id_inscripcion_certificado_ahbb: number
      creadoEn_ahbb: Date | null
    }, ExtArgs["result"]["td_certificado_ahbb"]>
    composites: {}
  }

  type td_certificado_ahbbGetPayload<S extends boolean | null | undefined | td_certificado_ahbbDefaultArgs> = $Result.GetResult<Prisma.$td_certificado_ahbbPayload, S>

  type td_certificado_ahbbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<td_certificado_ahbbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Td_certificado_ahbbCountAggregateInputType | true
    }

  export interface td_certificado_ahbbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['td_certificado_ahbb'], meta: { name: 'td_certificado_ahbb' } }
    /**
     * Find zero or one Td_certificado_ahbb that matches the filter.
     * @param {td_certificado_ahbbFindUniqueArgs} args - Arguments to find a Td_certificado_ahbb
     * @example
     * // Get one Td_certificado_ahbb
     * const td_certificado_ahbb = await prisma.td_certificado_ahbb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends td_certificado_ahbbFindUniqueArgs>(args: SelectSubset<T, td_certificado_ahbbFindUniqueArgs<ExtArgs>>): Prisma__td_certificado_ahbbClient<$Result.GetResult<Prisma.$td_certificado_ahbbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Td_certificado_ahbb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {td_certificado_ahbbFindUniqueOrThrowArgs} args - Arguments to find a Td_certificado_ahbb
     * @example
     * // Get one Td_certificado_ahbb
     * const td_certificado_ahbb = await prisma.td_certificado_ahbb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends td_certificado_ahbbFindUniqueOrThrowArgs>(args: SelectSubset<T, td_certificado_ahbbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__td_certificado_ahbbClient<$Result.GetResult<Prisma.$td_certificado_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_certificado_ahbb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_certificado_ahbbFindFirstArgs} args - Arguments to find a Td_certificado_ahbb
     * @example
     * // Get one Td_certificado_ahbb
     * const td_certificado_ahbb = await prisma.td_certificado_ahbb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends td_certificado_ahbbFindFirstArgs>(args?: SelectSubset<T, td_certificado_ahbbFindFirstArgs<ExtArgs>>): Prisma__td_certificado_ahbbClient<$Result.GetResult<Prisma.$td_certificado_ahbbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_certificado_ahbb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_certificado_ahbbFindFirstOrThrowArgs} args - Arguments to find a Td_certificado_ahbb
     * @example
     * // Get one Td_certificado_ahbb
     * const td_certificado_ahbb = await prisma.td_certificado_ahbb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends td_certificado_ahbbFindFirstOrThrowArgs>(args?: SelectSubset<T, td_certificado_ahbbFindFirstOrThrowArgs<ExtArgs>>): Prisma__td_certificado_ahbbClient<$Result.GetResult<Prisma.$td_certificado_ahbbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Td_certificado_ahbbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_certificado_ahbbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Td_certificado_ahbbs
     * const td_certificado_ahbbs = await prisma.td_certificado_ahbb.findMany()
     * 
     * // Get first 10 Td_certificado_ahbbs
     * const td_certificado_ahbbs = await prisma.td_certificado_ahbb.findMany({ take: 10 })
     * 
     * // Only select the `id_certificado_ahbb`
     * const td_certificado_ahbbWithId_certificado_ahbbOnly = await prisma.td_certificado_ahbb.findMany({ select: { id_certificado_ahbb: true } })
     * 
     */
    findMany<T extends td_certificado_ahbbFindManyArgs>(args?: SelectSubset<T, td_certificado_ahbbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_certificado_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Td_certificado_ahbb.
     * @param {td_certificado_ahbbCreateArgs} args - Arguments to create a Td_certificado_ahbb.
     * @example
     * // Create one Td_certificado_ahbb
     * const Td_certificado_ahbb = await prisma.td_certificado_ahbb.create({
     *   data: {
     *     // ... data to create a Td_certificado_ahbb
     *   }
     * })
     * 
     */
    create<T extends td_certificado_ahbbCreateArgs>(args: SelectSubset<T, td_certificado_ahbbCreateArgs<ExtArgs>>): Prisma__td_certificado_ahbbClient<$Result.GetResult<Prisma.$td_certificado_ahbbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Td_certificado_ahbbs.
     * @param {td_certificado_ahbbCreateManyArgs} args - Arguments to create many Td_certificado_ahbbs.
     * @example
     * // Create many Td_certificado_ahbbs
     * const td_certificado_ahbb = await prisma.td_certificado_ahbb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends td_certificado_ahbbCreateManyArgs>(args?: SelectSubset<T, td_certificado_ahbbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Td_certificado_ahbbs and returns the data saved in the database.
     * @param {td_certificado_ahbbCreateManyAndReturnArgs} args - Arguments to create many Td_certificado_ahbbs.
     * @example
     * // Create many Td_certificado_ahbbs
     * const td_certificado_ahbb = await prisma.td_certificado_ahbb.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Td_certificado_ahbbs and only return the `id_certificado_ahbb`
     * const td_certificado_ahbbWithId_certificado_ahbbOnly = await prisma.td_certificado_ahbb.createManyAndReturn({
     *   select: { id_certificado_ahbb: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends td_certificado_ahbbCreateManyAndReturnArgs>(args?: SelectSubset<T, td_certificado_ahbbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_certificado_ahbbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Td_certificado_ahbb.
     * @param {td_certificado_ahbbDeleteArgs} args - Arguments to delete one Td_certificado_ahbb.
     * @example
     * // Delete one Td_certificado_ahbb
     * const Td_certificado_ahbb = await prisma.td_certificado_ahbb.delete({
     *   where: {
     *     // ... filter to delete one Td_certificado_ahbb
     *   }
     * })
     * 
     */
    delete<T extends td_certificado_ahbbDeleteArgs>(args: SelectSubset<T, td_certificado_ahbbDeleteArgs<ExtArgs>>): Prisma__td_certificado_ahbbClient<$Result.GetResult<Prisma.$td_certificado_ahbbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Td_certificado_ahbb.
     * @param {td_certificado_ahbbUpdateArgs} args - Arguments to update one Td_certificado_ahbb.
     * @example
     * // Update one Td_certificado_ahbb
     * const td_certificado_ahbb = await prisma.td_certificado_ahbb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends td_certificado_ahbbUpdateArgs>(args: SelectSubset<T, td_certificado_ahbbUpdateArgs<ExtArgs>>): Prisma__td_certificado_ahbbClient<$Result.GetResult<Prisma.$td_certificado_ahbbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Td_certificado_ahbbs.
     * @param {td_certificado_ahbbDeleteManyArgs} args - Arguments to filter Td_certificado_ahbbs to delete.
     * @example
     * // Delete a few Td_certificado_ahbbs
     * const { count } = await prisma.td_certificado_ahbb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends td_certificado_ahbbDeleteManyArgs>(args?: SelectSubset<T, td_certificado_ahbbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_certificado_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_certificado_ahbbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Td_certificado_ahbbs
     * const td_certificado_ahbb = await prisma.td_certificado_ahbb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends td_certificado_ahbbUpdateManyArgs>(args: SelectSubset<T, td_certificado_ahbbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_certificado_ahbbs and returns the data updated in the database.
     * @param {td_certificado_ahbbUpdateManyAndReturnArgs} args - Arguments to update many Td_certificado_ahbbs.
     * @example
     * // Update many Td_certificado_ahbbs
     * const td_certificado_ahbb = await prisma.td_certificado_ahbb.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Td_certificado_ahbbs and only return the `id_certificado_ahbb`
     * const td_certificado_ahbbWithId_certificado_ahbbOnly = await prisma.td_certificado_ahbb.updateManyAndReturn({
     *   select: { id_certificado_ahbb: true },
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
    updateManyAndReturn<T extends td_certificado_ahbbUpdateManyAndReturnArgs>(args: SelectSubset<T, td_certificado_ahbbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_certificado_ahbbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Td_certificado_ahbb.
     * @param {td_certificado_ahbbUpsertArgs} args - Arguments to update or create a Td_certificado_ahbb.
     * @example
     * // Update or create a Td_certificado_ahbb
     * const td_certificado_ahbb = await prisma.td_certificado_ahbb.upsert({
     *   create: {
     *     // ... data to create a Td_certificado_ahbb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Td_certificado_ahbb we want to update
     *   }
     * })
     */
    upsert<T extends td_certificado_ahbbUpsertArgs>(args: SelectSubset<T, td_certificado_ahbbUpsertArgs<ExtArgs>>): Prisma__td_certificado_ahbbClient<$Result.GetResult<Prisma.$td_certificado_ahbbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Td_certificado_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_certificado_ahbbCountArgs} args - Arguments to filter Td_certificado_ahbbs to count.
     * @example
     * // Count the number of Td_certificado_ahbbs
     * const count = await prisma.td_certificado_ahbb.count({
     *   where: {
     *     // ... the filter for the Td_certificado_ahbbs we want to count
     *   }
     * })
    **/
    count<T extends td_certificado_ahbbCountArgs>(
      args?: Subset<T, td_certificado_ahbbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Td_certificado_ahbbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Td_certificado_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Td_certificado_ahbbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Td_certificado_ahbbAggregateArgs>(args: Subset<T, Td_certificado_ahbbAggregateArgs>): Prisma.PrismaPromise<GetTd_certificado_ahbbAggregateType<T>>

    /**
     * Group by Td_certificado_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_certificado_ahbbGroupByArgs} args - Group by arguments.
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
      T extends td_certificado_ahbbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: td_certificado_ahbbGroupByArgs['orderBy'] }
        : { orderBy?: td_certificado_ahbbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, td_certificado_ahbbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTd_certificado_ahbbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the td_certificado_ahbb model
   */
  readonly fields: td_certificado_ahbbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for td_certificado_ahbb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__td_certificado_ahbbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inscripcion<T extends td_inscripcion_ahbbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, td_inscripcion_ahbbDefaultArgs<ExtArgs>>): Prisma__td_inscripcion_ahbbClient<$Result.GetResult<Prisma.$td_inscripcion_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the td_certificado_ahbb model
   */
  interface td_certificado_ahbbFieldRefs {
    readonly id_certificado_ahbb: FieldRef<"td_certificado_ahbb", 'Int'>
    readonly codigoQrUrl_ahbb: FieldRef<"td_certificado_ahbb", 'String'>
    readonly id_inscripcion_certificado_ahbb: FieldRef<"td_certificado_ahbb", 'Int'>
    readonly creadoEn_ahbb: FieldRef<"td_certificado_ahbb", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * td_certificado_ahbb findUnique
   */
  export type td_certificado_ahbbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_certificado_ahbb
     */
    select?: td_certificado_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_certificado_ahbb
     */
    omit?: td_certificado_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_certificado_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_certificado_ahbb to fetch.
     */
    where: td_certificado_ahbbWhereUniqueInput
  }

  /**
   * td_certificado_ahbb findUniqueOrThrow
   */
  export type td_certificado_ahbbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_certificado_ahbb
     */
    select?: td_certificado_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_certificado_ahbb
     */
    omit?: td_certificado_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_certificado_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_certificado_ahbb to fetch.
     */
    where: td_certificado_ahbbWhereUniqueInput
  }

  /**
   * td_certificado_ahbb findFirst
   */
  export type td_certificado_ahbbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_certificado_ahbb
     */
    select?: td_certificado_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_certificado_ahbb
     */
    omit?: td_certificado_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_certificado_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_certificado_ahbb to fetch.
     */
    where?: td_certificado_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_certificado_ahbbs to fetch.
     */
    orderBy?: td_certificado_ahbbOrderByWithRelationInput | td_certificado_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_certificado_ahbbs.
     */
    cursor?: td_certificado_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_certificado_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_certificado_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_certificado_ahbbs.
     */
    distinct?: Td_certificado_ahbbScalarFieldEnum | Td_certificado_ahbbScalarFieldEnum[]
  }

  /**
   * td_certificado_ahbb findFirstOrThrow
   */
  export type td_certificado_ahbbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_certificado_ahbb
     */
    select?: td_certificado_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_certificado_ahbb
     */
    omit?: td_certificado_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_certificado_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_certificado_ahbb to fetch.
     */
    where?: td_certificado_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_certificado_ahbbs to fetch.
     */
    orderBy?: td_certificado_ahbbOrderByWithRelationInput | td_certificado_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_certificado_ahbbs.
     */
    cursor?: td_certificado_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_certificado_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_certificado_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_certificado_ahbbs.
     */
    distinct?: Td_certificado_ahbbScalarFieldEnum | Td_certificado_ahbbScalarFieldEnum[]
  }

  /**
   * td_certificado_ahbb findMany
   */
  export type td_certificado_ahbbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_certificado_ahbb
     */
    select?: td_certificado_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_certificado_ahbb
     */
    omit?: td_certificado_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_certificado_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_certificado_ahbbs to fetch.
     */
    where?: td_certificado_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_certificado_ahbbs to fetch.
     */
    orderBy?: td_certificado_ahbbOrderByWithRelationInput | td_certificado_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing td_certificado_ahbbs.
     */
    cursor?: td_certificado_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_certificado_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_certificado_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_certificado_ahbbs.
     */
    distinct?: Td_certificado_ahbbScalarFieldEnum | Td_certificado_ahbbScalarFieldEnum[]
  }

  /**
   * td_certificado_ahbb create
   */
  export type td_certificado_ahbbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_certificado_ahbb
     */
    select?: td_certificado_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_certificado_ahbb
     */
    omit?: td_certificado_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_certificado_ahbbInclude<ExtArgs> | null
    /**
     * The data needed to create a td_certificado_ahbb.
     */
    data: XOR<td_certificado_ahbbCreateInput, td_certificado_ahbbUncheckedCreateInput>
  }

  /**
   * td_certificado_ahbb createMany
   */
  export type td_certificado_ahbbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many td_certificado_ahbbs.
     */
    data: td_certificado_ahbbCreateManyInput | td_certificado_ahbbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * td_certificado_ahbb createManyAndReturn
   */
  export type td_certificado_ahbbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_certificado_ahbb
     */
    select?: td_certificado_ahbbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_certificado_ahbb
     */
    omit?: td_certificado_ahbbOmit<ExtArgs> | null
    /**
     * The data used to create many td_certificado_ahbbs.
     */
    data: td_certificado_ahbbCreateManyInput | td_certificado_ahbbCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_certificado_ahbbIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * td_certificado_ahbb update
   */
  export type td_certificado_ahbbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_certificado_ahbb
     */
    select?: td_certificado_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_certificado_ahbb
     */
    omit?: td_certificado_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_certificado_ahbbInclude<ExtArgs> | null
    /**
     * The data needed to update a td_certificado_ahbb.
     */
    data: XOR<td_certificado_ahbbUpdateInput, td_certificado_ahbbUncheckedUpdateInput>
    /**
     * Choose, which td_certificado_ahbb to update.
     */
    where: td_certificado_ahbbWhereUniqueInput
  }

  /**
   * td_certificado_ahbb updateMany
   */
  export type td_certificado_ahbbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update td_certificado_ahbbs.
     */
    data: XOR<td_certificado_ahbbUpdateManyMutationInput, td_certificado_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_certificado_ahbbs to update
     */
    where?: td_certificado_ahbbWhereInput
    /**
     * Limit how many td_certificado_ahbbs to update.
     */
    limit?: number
  }

  /**
   * td_certificado_ahbb updateManyAndReturn
   */
  export type td_certificado_ahbbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_certificado_ahbb
     */
    select?: td_certificado_ahbbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_certificado_ahbb
     */
    omit?: td_certificado_ahbbOmit<ExtArgs> | null
    /**
     * The data used to update td_certificado_ahbbs.
     */
    data: XOR<td_certificado_ahbbUpdateManyMutationInput, td_certificado_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_certificado_ahbbs to update
     */
    where?: td_certificado_ahbbWhereInput
    /**
     * Limit how many td_certificado_ahbbs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_certificado_ahbbIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * td_certificado_ahbb upsert
   */
  export type td_certificado_ahbbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_certificado_ahbb
     */
    select?: td_certificado_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_certificado_ahbb
     */
    omit?: td_certificado_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_certificado_ahbbInclude<ExtArgs> | null
    /**
     * The filter to search for the td_certificado_ahbb to update in case it exists.
     */
    where: td_certificado_ahbbWhereUniqueInput
    /**
     * In case the td_certificado_ahbb found by the `where` argument doesn't exist, create a new td_certificado_ahbb with this data.
     */
    create: XOR<td_certificado_ahbbCreateInput, td_certificado_ahbbUncheckedCreateInput>
    /**
     * In case the td_certificado_ahbb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<td_certificado_ahbbUpdateInput, td_certificado_ahbbUncheckedUpdateInput>
  }

  /**
   * td_certificado_ahbb delete
   */
  export type td_certificado_ahbbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_certificado_ahbb
     */
    select?: td_certificado_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_certificado_ahbb
     */
    omit?: td_certificado_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_certificado_ahbbInclude<ExtArgs> | null
    /**
     * Filter which td_certificado_ahbb to delete.
     */
    where: td_certificado_ahbbWhereUniqueInput
  }

  /**
   * td_certificado_ahbb deleteMany
   */
  export type td_certificado_ahbbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_certificado_ahbbs to delete
     */
    where?: td_certificado_ahbbWhereInput
    /**
     * Limit how many td_certificado_ahbbs to delete.
     */
    limit?: number
  }

  /**
   * td_certificado_ahbb without action
   */
  export type td_certificado_ahbbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_certificado_ahbb
     */
    select?: td_certificado_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_certificado_ahbb
     */
    omit?: td_certificado_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_certificado_ahbbInclude<ExtArgs> | null
  }


  /**
   * Model td_configuracionglobal_ahbb
   */

  export type AggregateTd_configuracionglobal_ahbb = {
    _count: Td_configuracionglobal_ahbbCountAggregateOutputType | null
    _avg: Td_configuracionglobal_ahbbAvgAggregateOutputType | null
    _sum: Td_configuracionglobal_ahbbSumAggregateOutputType | null
    _min: Td_configuracionglobal_ahbbMinAggregateOutputType | null
    _max: Td_configuracionglobal_ahbbMaxAggregateOutputType | null
  }

  export type Td_configuracionglobal_ahbbAvgAggregateOutputType = {
    id_configuracionglobal_ahbb: number | null
  }

  export type Td_configuracionglobal_ahbbSumAggregateOutputType = {
    id_configuracionglobal_ahbb: number | null
  }

  export type Td_configuracionglobal_ahbbMinAggregateOutputType = {
    id_configuracionglobal_ahbb: number | null
    imagenCertificadoGeneral_ahbb: string | null
  }

  export type Td_configuracionglobal_ahbbMaxAggregateOutputType = {
    id_configuracionglobal_ahbb: number | null
    imagenCertificadoGeneral_ahbb: string | null
  }

  export type Td_configuracionglobal_ahbbCountAggregateOutputType = {
    id_configuracionglobal_ahbb: number
    imagenCertificadoGeneral_ahbb: number
    _all: number
  }


  export type Td_configuracionglobal_ahbbAvgAggregateInputType = {
    id_configuracionglobal_ahbb?: true
  }

  export type Td_configuracionglobal_ahbbSumAggregateInputType = {
    id_configuracionglobal_ahbb?: true
  }

  export type Td_configuracionglobal_ahbbMinAggregateInputType = {
    id_configuracionglobal_ahbb?: true
    imagenCertificadoGeneral_ahbb?: true
  }

  export type Td_configuracionglobal_ahbbMaxAggregateInputType = {
    id_configuracionglobal_ahbb?: true
    imagenCertificadoGeneral_ahbb?: true
  }

  export type Td_configuracionglobal_ahbbCountAggregateInputType = {
    id_configuracionglobal_ahbb?: true
    imagenCertificadoGeneral_ahbb?: true
    _all?: true
  }

  export type Td_configuracionglobal_ahbbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_configuracionglobal_ahbb to aggregate.
     */
    where?: td_configuracionglobal_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_configuracionglobal_ahbbs to fetch.
     */
    orderBy?: td_configuracionglobal_ahbbOrderByWithRelationInput | td_configuracionglobal_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: td_configuracionglobal_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_configuracionglobal_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_configuracionglobal_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned td_configuracionglobal_ahbbs
    **/
    _count?: true | Td_configuracionglobal_ahbbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Td_configuracionglobal_ahbbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Td_configuracionglobal_ahbbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Td_configuracionglobal_ahbbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Td_configuracionglobal_ahbbMaxAggregateInputType
  }

  export type GetTd_configuracionglobal_ahbbAggregateType<T extends Td_configuracionglobal_ahbbAggregateArgs> = {
        [P in keyof T & keyof AggregateTd_configuracionglobal_ahbb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTd_configuracionglobal_ahbb[P]>
      : GetScalarType<T[P], AggregateTd_configuracionglobal_ahbb[P]>
  }




  export type td_configuracionglobal_ahbbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_configuracionglobal_ahbbWhereInput
    orderBy?: td_configuracionglobal_ahbbOrderByWithAggregationInput | td_configuracionglobal_ahbbOrderByWithAggregationInput[]
    by: Td_configuracionglobal_ahbbScalarFieldEnum[] | Td_configuracionglobal_ahbbScalarFieldEnum
    having?: td_configuracionglobal_ahbbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Td_configuracionglobal_ahbbCountAggregateInputType | true
    _avg?: Td_configuracionglobal_ahbbAvgAggregateInputType
    _sum?: Td_configuracionglobal_ahbbSumAggregateInputType
    _min?: Td_configuracionglobal_ahbbMinAggregateInputType
    _max?: Td_configuracionglobal_ahbbMaxAggregateInputType
  }

  export type Td_configuracionglobal_ahbbGroupByOutputType = {
    id_configuracionglobal_ahbb: number
    imagenCertificadoGeneral_ahbb: string | null
    _count: Td_configuracionglobal_ahbbCountAggregateOutputType | null
    _avg: Td_configuracionglobal_ahbbAvgAggregateOutputType | null
    _sum: Td_configuracionglobal_ahbbSumAggregateOutputType | null
    _min: Td_configuracionglobal_ahbbMinAggregateOutputType | null
    _max: Td_configuracionglobal_ahbbMaxAggregateOutputType | null
  }

  type GetTd_configuracionglobal_ahbbGroupByPayload<T extends td_configuracionglobal_ahbbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Td_configuracionglobal_ahbbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Td_configuracionglobal_ahbbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Td_configuracionglobal_ahbbGroupByOutputType[P]>
            : GetScalarType<T[P], Td_configuracionglobal_ahbbGroupByOutputType[P]>
        }
      >
    >


  export type td_configuracionglobal_ahbbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_configuracionglobal_ahbb?: boolean
    imagenCertificadoGeneral_ahbb?: boolean
  }, ExtArgs["result"]["td_configuracionglobal_ahbb"]>

  export type td_configuracionglobal_ahbbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_configuracionglobal_ahbb?: boolean
    imagenCertificadoGeneral_ahbb?: boolean
  }, ExtArgs["result"]["td_configuracionglobal_ahbb"]>

  export type td_configuracionglobal_ahbbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_configuracionglobal_ahbb?: boolean
    imagenCertificadoGeneral_ahbb?: boolean
  }, ExtArgs["result"]["td_configuracionglobal_ahbb"]>

  export type td_configuracionglobal_ahbbSelectScalar = {
    id_configuracionglobal_ahbb?: boolean
    imagenCertificadoGeneral_ahbb?: boolean
  }

  export type td_configuracionglobal_ahbbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_configuracionglobal_ahbb" | "imagenCertificadoGeneral_ahbb", ExtArgs["result"]["td_configuracionglobal_ahbb"]>

  export type $td_configuracionglobal_ahbbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "td_configuracionglobal_ahbb"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_configuracionglobal_ahbb: number
      imagenCertificadoGeneral_ahbb: string | null
    }, ExtArgs["result"]["td_configuracionglobal_ahbb"]>
    composites: {}
  }

  type td_configuracionglobal_ahbbGetPayload<S extends boolean | null | undefined | td_configuracionglobal_ahbbDefaultArgs> = $Result.GetResult<Prisma.$td_configuracionglobal_ahbbPayload, S>

  type td_configuracionglobal_ahbbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<td_configuracionglobal_ahbbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Td_configuracionglobal_ahbbCountAggregateInputType | true
    }

  export interface td_configuracionglobal_ahbbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['td_configuracionglobal_ahbb'], meta: { name: 'td_configuracionglobal_ahbb' } }
    /**
     * Find zero or one Td_configuracionglobal_ahbb that matches the filter.
     * @param {td_configuracionglobal_ahbbFindUniqueArgs} args - Arguments to find a Td_configuracionglobal_ahbb
     * @example
     * // Get one Td_configuracionglobal_ahbb
     * const td_configuracionglobal_ahbb = await prisma.td_configuracionglobal_ahbb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends td_configuracionglobal_ahbbFindUniqueArgs>(args: SelectSubset<T, td_configuracionglobal_ahbbFindUniqueArgs<ExtArgs>>): Prisma__td_configuracionglobal_ahbbClient<$Result.GetResult<Prisma.$td_configuracionglobal_ahbbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Td_configuracionglobal_ahbb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {td_configuracionglobal_ahbbFindUniqueOrThrowArgs} args - Arguments to find a Td_configuracionglobal_ahbb
     * @example
     * // Get one Td_configuracionglobal_ahbb
     * const td_configuracionglobal_ahbb = await prisma.td_configuracionglobal_ahbb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends td_configuracionglobal_ahbbFindUniqueOrThrowArgs>(args: SelectSubset<T, td_configuracionglobal_ahbbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__td_configuracionglobal_ahbbClient<$Result.GetResult<Prisma.$td_configuracionglobal_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_configuracionglobal_ahbb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_configuracionglobal_ahbbFindFirstArgs} args - Arguments to find a Td_configuracionglobal_ahbb
     * @example
     * // Get one Td_configuracionglobal_ahbb
     * const td_configuracionglobal_ahbb = await prisma.td_configuracionglobal_ahbb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends td_configuracionglobal_ahbbFindFirstArgs>(args?: SelectSubset<T, td_configuracionglobal_ahbbFindFirstArgs<ExtArgs>>): Prisma__td_configuracionglobal_ahbbClient<$Result.GetResult<Prisma.$td_configuracionglobal_ahbbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_configuracionglobal_ahbb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_configuracionglobal_ahbbFindFirstOrThrowArgs} args - Arguments to find a Td_configuracionglobal_ahbb
     * @example
     * // Get one Td_configuracionglobal_ahbb
     * const td_configuracionglobal_ahbb = await prisma.td_configuracionglobal_ahbb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends td_configuracionglobal_ahbbFindFirstOrThrowArgs>(args?: SelectSubset<T, td_configuracionglobal_ahbbFindFirstOrThrowArgs<ExtArgs>>): Prisma__td_configuracionglobal_ahbbClient<$Result.GetResult<Prisma.$td_configuracionglobal_ahbbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Td_configuracionglobal_ahbbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_configuracionglobal_ahbbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Td_configuracionglobal_ahbbs
     * const td_configuracionglobal_ahbbs = await prisma.td_configuracionglobal_ahbb.findMany()
     * 
     * // Get first 10 Td_configuracionglobal_ahbbs
     * const td_configuracionglobal_ahbbs = await prisma.td_configuracionglobal_ahbb.findMany({ take: 10 })
     * 
     * // Only select the `id_configuracionglobal_ahbb`
     * const td_configuracionglobal_ahbbWithId_configuracionglobal_ahbbOnly = await prisma.td_configuracionglobal_ahbb.findMany({ select: { id_configuracionglobal_ahbb: true } })
     * 
     */
    findMany<T extends td_configuracionglobal_ahbbFindManyArgs>(args?: SelectSubset<T, td_configuracionglobal_ahbbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_configuracionglobal_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Td_configuracionglobal_ahbb.
     * @param {td_configuracionglobal_ahbbCreateArgs} args - Arguments to create a Td_configuracionglobal_ahbb.
     * @example
     * // Create one Td_configuracionglobal_ahbb
     * const Td_configuracionglobal_ahbb = await prisma.td_configuracionglobal_ahbb.create({
     *   data: {
     *     // ... data to create a Td_configuracionglobal_ahbb
     *   }
     * })
     * 
     */
    create<T extends td_configuracionglobal_ahbbCreateArgs>(args: SelectSubset<T, td_configuracionglobal_ahbbCreateArgs<ExtArgs>>): Prisma__td_configuracionglobal_ahbbClient<$Result.GetResult<Prisma.$td_configuracionglobal_ahbbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Td_configuracionglobal_ahbbs.
     * @param {td_configuracionglobal_ahbbCreateManyArgs} args - Arguments to create many Td_configuracionglobal_ahbbs.
     * @example
     * // Create many Td_configuracionglobal_ahbbs
     * const td_configuracionglobal_ahbb = await prisma.td_configuracionglobal_ahbb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends td_configuracionglobal_ahbbCreateManyArgs>(args?: SelectSubset<T, td_configuracionglobal_ahbbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Td_configuracionglobal_ahbbs and returns the data saved in the database.
     * @param {td_configuracionglobal_ahbbCreateManyAndReturnArgs} args - Arguments to create many Td_configuracionglobal_ahbbs.
     * @example
     * // Create many Td_configuracionglobal_ahbbs
     * const td_configuracionglobal_ahbb = await prisma.td_configuracionglobal_ahbb.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Td_configuracionglobal_ahbbs and only return the `id_configuracionglobal_ahbb`
     * const td_configuracionglobal_ahbbWithId_configuracionglobal_ahbbOnly = await prisma.td_configuracionglobal_ahbb.createManyAndReturn({
     *   select: { id_configuracionglobal_ahbb: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends td_configuracionglobal_ahbbCreateManyAndReturnArgs>(args?: SelectSubset<T, td_configuracionglobal_ahbbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_configuracionglobal_ahbbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Td_configuracionglobal_ahbb.
     * @param {td_configuracionglobal_ahbbDeleteArgs} args - Arguments to delete one Td_configuracionglobal_ahbb.
     * @example
     * // Delete one Td_configuracionglobal_ahbb
     * const Td_configuracionglobal_ahbb = await prisma.td_configuracionglobal_ahbb.delete({
     *   where: {
     *     // ... filter to delete one Td_configuracionglobal_ahbb
     *   }
     * })
     * 
     */
    delete<T extends td_configuracionglobal_ahbbDeleteArgs>(args: SelectSubset<T, td_configuracionglobal_ahbbDeleteArgs<ExtArgs>>): Prisma__td_configuracionglobal_ahbbClient<$Result.GetResult<Prisma.$td_configuracionglobal_ahbbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Td_configuracionglobal_ahbb.
     * @param {td_configuracionglobal_ahbbUpdateArgs} args - Arguments to update one Td_configuracionglobal_ahbb.
     * @example
     * // Update one Td_configuracionglobal_ahbb
     * const td_configuracionglobal_ahbb = await prisma.td_configuracionglobal_ahbb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends td_configuracionglobal_ahbbUpdateArgs>(args: SelectSubset<T, td_configuracionglobal_ahbbUpdateArgs<ExtArgs>>): Prisma__td_configuracionglobal_ahbbClient<$Result.GetResult<Prisma.$td_configuracionglobal_ahbbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Td_configuracionglobal_ahbbs.
     * @param {td_configuracionglobal_ahbbDeleteManyArgs} args - Arguments to filter Td_configuracionglobal_ahbbs to delete.
     * @example
     * // Delete a few Td_configuracionglobal_ahbbs
     * const { count } = await prisma.td_configuracionglobal_ahbb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends td_configuracionglobal_ahbbDeleteManyArgs>(args?: SelectSubset<T, td_configuracionglobal_ahbbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_configuracionglobal_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_configuracionglobal_ahbbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Td_configuracionglobal_ahbbs
     * const td_configuracionglobal_ahbb = await prisma.td_configuracionglobal_ahbb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends td_configuracionglobal_ahbbUpdateManyArgs>(args: SelectSubset<T, td_configuracionglobal_ahbbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_configuracionglobal_ahbbs and returns the data updated in the database.
     * @param {td_configuracionglobal_ahbbUpdateManyAndReturnArgs} args - Arguments to update many Td_configuracionglobal_ahbbs.
     * @example
     * // Update many Td_configuracionglobal_ahbbs
     * const td_configuracionglobal_ahbb = await prisma.td_configuracionglobal_ahbb.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Td_configuracionglobal_ahbbs and only return the `id_configuracionglobal_ahbb`
     * const td_configuracionglobal_ahbbWithId_configuracionglobal_ahbbOnly = await prisma.td_configuracionglobal_ahbb.updateManyAndReturn({
     *   select: { id_configuracionglobal_ahbb: true },
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
    updateManyAndReturn<T extends td_configuracionglobal_ahbbUpdateManyAndReturnArgs>(args: SelectSubset<T, td_configuracionglobal_ahbbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_configuracionglobal_ahbbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Td_configuracionglobal_ahbb.
     * @param {td_configuracionglobal_ahbbUpsertArgs} args - Arguments to update or create a Td_configuracionglobal_ahbb.
     * @example
     * // Update or create a Td_configuracionglobal_ahbb
     * const td_configuracionglobal_ahbb = await prisma.td_configuracionglobal_ahbb.upsert({
     *   create: {
     *     // ... data to create a Td_configuracionglobal_ahbb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Td_configuracionglobal_ahbb we want to update
     *   }
     * })
     */
    upsert<T extends td_configuracionglobal_ahbbUpsertArgs>(args: SelectSubset<T, td_configuracionglobal_ahbbUpsertArgs<ExtArgs>>): Prisma__td_configuracionglobal_ahbbClient<$Result.GetResult<Prisma.$td_configuracionglobal_ahbbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Td_configuracionglobal_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_configuracionglobal_ahbbCountArgs} args - Arguments to filter Td_configuracionglobal_ahbbs to count.
     * @example
     * // Count the number of Td_configuracionglobal_ahbbs
     * const count = await prisma.td_configuracionglobal_ahbb.count({
     *   where: {
     *     // ... the filter for the Td_configuracionglobal_ahbbs we want to count
     *   }
     * })
    **/
    count<T extends td_configuracionglobal_ahbbCountArgs>(
      args?: Subset<T, td_configuracionglobal_ahbbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Td_configuracionglobal_ahbbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Td_configuracionglobal_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Td_configuracionglobal_ahbbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Td_configuracionglobal_ahbbAggregateArgs>(args: Subset<T, Td_configuracionglobal_ahbbAggregateArgs>): Prisma.PrismaPromise<GetTd_configuracionglobal_ahbbAggregateType<T>>

    /**
     * Group by Td_configuracionglobal_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_configuracionglobal_ahbbGroupByArgs} args - Group by arguments.
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
      T extends td_configuracionglobal_ahbbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: td_configuracionglobal_ahbbGroupByArgs['orderBy'] }
        : { orderBy?: td_configuracionglobal_ahbbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, td_configuracionglobal_ahbbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTd_configuracionglobal_ahbbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the td_configuracionglobal_ahbb model
   */
  readonly fields: td_configuracionglobal_ahbbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for td_configuracionglobal_ahbb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__td_configuracionglobal_ahbbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the td_configuracionglobal_ahbb model
   */
  interface td_configuracionglobal_ahbbFieldRefs {
    readonly id_configuracionglobal_ahbb: FieldRef<"td_configuracionglobal_ahbb", 'Int'>
    readonly imagenCertificadoGeneral_ahbb: FieldRef<"td_configuracionglobal_ahbb", 'String'>
  }
    

  // Custom InputTypes
  /**
   * td_configuracionglobal_ahbb findUnique
   */
  export type td_configuracionglobal_ahbbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_configuracionglobal_ahbb
     */
    select?: td_configuracionglobal_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_configuracionglobal_ahbb
     */
    omit?: td_configuracionglobal_ahbbOmit<ExtArgs> | null
    /**
     * Filter, which td_configuracionglobal_ahbb to fetch.
     */
    where: td_configuracionglobal_ahbbWhereUniqueInput
  }

  /**
   * td_configuracionglobal_ahbb findUniqueOrThrow
   */
  export type td_configuracionglobal_ahbbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_configuracionglobal_ahbb
     */
    select?: td_configuracionglobal_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_configuracionglobal_ahbb
     */
    omit?: td_configuracionglobal_ahbbOmit<ExtArgs> | null
    /**
     * Filter, which td_configuracionglobal_ahbb to fetch.
     */
    where: td_configuracionglobal_ahbbWhereUniqueInput
  }

  /**
   * td_configuracionglobal_ahbb findFirst
   */
  export type td_configuracionglobal_ahbbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_configuracionglobal_ahbb
     */
    select?: td_configuracionglobal_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_configuracionglobal_ahbb
     */
    omit?: td_configuracionglobal_ahbbOmit<ExtArgs> | null
    /**
     * Filter, which td_configuracionglobal_ahbb to fetch.
     */
    where?: td_configuracionglobal_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_configuracionglobal_ahbbs to fetch.
     */
    orderBy?: td_configuracionglobal_ahbbOrderByWithRelationInput | td_configuracionglobal_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_configuracionglobal_ahbbs.
     */
    cursor?: td_configuracionglobal_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_configuracionglobal_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_configuracionglobal_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_configuracionglobal_ahbbs.
     */
    distinct?: Td_configuracionglobal_ahbbScalarFieldEnum | Td_configuracionglobal_ahbbScalarFieldEnum[]
  }

  /**
   * td_configuracionglobal_ahbb findFirstOrThrow
   */
  export type td_configuracionglobal_ahbbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_configuracionglobal_ahbb
     */
    select?: td_configuracionglobal_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_configuracionglobal_ahbb
     */
    omit?: td_configuracionglobal_ahbbOmit<ExtArgs> | null
    /**
     * Filter, which td_configuracionglobal_ahbb to fetch.
     */
    where?: td_configuracionglobal_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_configuracionglobal_ahbbs to fetch.
     */
    orderBy?: td_configuracionglobal_ahbbOrderByWithRelationInput | td_configuracionglobal_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_configuracionglobal_ahbbs.
     */
    cursor?: td_configuracionglobal_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_configuracionglobal_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_configuracionglobal_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_configuracionglobal_ahbbs.
     */
    distinct?: Td_configuracionglobal_ahbbScalarFieldEnum | Td_configuracionglobal_ahbbScalarFieldEnum[]
  }

  /**
   * td_configuracionglobal_ahbb findMany
   */
  export type td_configuracionglobal_ahbbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_configuracionglobal_ahbb
     */
    select?: td_configuracionglobal_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_configuracionglobal_ahbb
     */
    omit?: td_configuracionglobal_ahbbOmit<ExtArgs> | null
    /**
     * Filter, which td_configuracionglobal_ahbbs to fetch.
     */
    where?: td_configuracionglobal_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_configuracionglobal_ahbbs to fetch.
     */
    orderBy?: td_configuracionglobal_ahbbOrderByWithRelationInput | td_configuracionglobal_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing td_configuracionglobal_ahbbs.
     */
    cursor?: td_configuracionglobal_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_configuracionglobal_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_configuracionglobal_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_configuracionglobal_ahbbs.
     */
    distinct?: Td_configuracionglobal_ahbbScalarFieldEnum | Td_configuracionglobal_ahbbScalarFieldEnum[]
  }

  /**
   * td_configuracionglobal_ahbb create
   */
  export type td_configuracionglobal_ahbbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_configuracionglobal_ahbb
     */
    select?: td_configuracionglobal_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_configuracionglobal_ahbb
     */
    omit?: td_configuracionglobal_ahbbOmit<ExtArgs> | null
    /**
     * The data needed to create a td_configuracionglobal_ahbb.
     */
    data?: XOR<td_configuracionglobal_ahbbCreateInput, td_configuracionglobal_ahbbUncheckedCreateInput>
  }

  /**
   * td_configuracionglobal_ahbb createMany
   */
  export type td_configuracionglobal_ahbbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many td_configuracionglobal_ahbbs.
     */
    data: td_configuracionglobal_ahbbCreateManyInput | td_configuracionglobal_ahbbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * td_configuracionglobal_ahbb createManyAndReturn
   */
  export type td_configuracionglobal_ahbbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_configuracionglobal_ahbb
     */
    select?: td_configuracionglobal_ahbbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_configuracionglobal_ahbb
     */
    omit?: td_configuracionglobal_ahbbOmit<ExtArgs> | null
    /**
     * The data used to create many td_configuracionglobal_ahbbs.
     */
    data: td_configuracionglobal_ahbbCreateManyInput | td_configuracionglobal_ahbbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * td_configuracionglobal_ahbb update
   */
  export type td_configuracionglobal_ahbbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_configuracionglobal_ahbb
     */
    select?: td_configuracionglobal_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_configuracionglobal_ahbb
     */
    omit?: td_configuracionglobal_ahbbOmit<ExtArgs> | null
    /**
     * The data needed to update a td_configuracionglobal_ahbb.
     */
    data: XOR<td_configuracionglobal_ahbbUpdateInput, td_configuracionglobal_ahbbUncheckedUpdateInput>
    /**
     * Choose, which td_configuracionglobal_ahbb to update.
     */
    where: td_configuracionglobal_ahbbWhereUniqueInput
  }

  /**
   * td_configuracionglobal_ahbb updateMany
   */
  export type td_configuracionglobal_ahbbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update td_configuracionglobal_ahbbs.
     */
    data: XOR<td_configuracionglobal_ahbbUpdateManyMutationInput, td_configuracionglobal_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_configuracionglobal_ahbbs to update
     */
    where?: td_configuracionglobal_ahbbWhereInput
    /**
     * Limit how many td_configuracionglobal_ahbbs to update.
     */
    limit?: number
  }

  /**
   * td_configuracionglobal_ahbb updateManyAndReturn
   */
  export type td_configuracionglobal_ahbbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_configuracionglobal_ahbb
     */
    select?: td_configuracionglobal_ahbbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_configuracionglobal_ahbb
     */
    omit?: td_configuracionglobal_ahbbOmit<ExtArgs> | null
    /**
     * The data used to update td_configuracionglobal_ahbbs.
     */
    data: XOR<td_configuracionglobal_ahbbUpdateManyMutationInput, td_configuracionglobal_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_configuracionglobal_ahbbs to update
     */
    where?: td_configuracionglobal_ahbbWhereInput
    /**
     * Limit how many td_configuracionglobal_ahbbs to update.
     */
    limit?: number
  }

  /**
   * td_configuracionglobal_ahbb upsert
   */
  export type td_configuracionglobal_ahbbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_configuracionglobal_ahbb
     */
    select?: td_configuracionglobal_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_configuracionglobal_ahbb
     */
    omit?: td_configuracionglobal_ahbbOmit<ExtArgs> | null
    /**
     * The filter to search for the td_configuracionglobal_ahbb to update in case it exists.
     */
    where: td_configuracionglobal_ahbbWhereUniqueInput
    /**
     * In case the td_configuracionglobal_ahbb found by the `where` argument doesn't exist, create a new td_configuracionglobal_ahbb with this data.
     */
    create: XOR<td_configuracionglobal_ahbbCreateInput, td_configuracionglobal_ahbbUncheckedCreateInput>
    /**
     * In case the td_configuracionglobal_ahbb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<td_configuracionglobal_ahbbUpdateInput, td_configuracionglobal_ahbbUncheckedUpdateInput>
  }

  /**
   * td_configuracionglobal_ahbb delete
   */
  export type td_configuracionglobal_ahbbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_configuracionglobal_ahbb
     */
    select?: td_configuracionglobal_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_configuracionglobal_ahbb
     */
    omit?: td_configuracionglobal_ahbbOmit<ExtArgs> | null
    /**
     * Filter which td_configuracionglobal_ahbb to delete.
     */
    where: td_configuracionglobal_ahbbWhereUniqueInput
  }

  /**
   * td_configuracionglobal_ahbb deleteMany
   */
  export type td_configuracionglobal_ahbbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_configuracionglobal_ahbbs to delete
     */
    where?: td_configuracionglobal_ahbbWhereInput
    /**
     * Limit how many td_configuracionglobal_ahbbs to delete.
     */
    limit?: number
  }

  /**
   * td_configuracionglobal_ahbb without action
   */
  export type td_configuracionglobal_ahbbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_configuracionglobal_ahbb
     */
    select?: td_configuracionglobal_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_configuracionglobal_ahbb
     */
    omit?: td_configuracionglobal_ahbbOmit<ExtArgs> | null
  }


  /**
   * Model td_auditoria_aprobacion_ahbb
   */

  export type AggregateTd_auditoria_aprobacion_ahbb = {
    _count: Td_auditoria_aprobacion_ahbbCountAggregateOutputType | null
    _avg: Td_auditoria_aprobacion_ahbbAvgAggregateOutputType | null
    _sum: Td_auditoria_aprobacion_ahbbSumAggregateOutputType | null
    _min: Td_auditoria_aprobacion_ahbbMinAggregateOutputType | null
    _max: Td_auditoria_aprobacion_ahbbMaxAggregateOutputType | null
  }

  export type Td_auditoria_aprobacion_ahbbAvgAggregateOutputType = {
    id_auditoria_aprobacion_ahbb: number | null
    id_usuario_auditado_ahbb: number | null
    id_aprobador_ahbb: number | null
  }

  export type Td_auditoria_aprobacion_ahbbSumAggregateOutputType = {
    id_auditoria_aprobacion_ahbb: number | null
    id_usuario_auditado_ahbb: number | null
    id_aprobador_ahbb: number | null
  }

  export type Td_auditoria_aprobacion_ahbbMinAggregateOutputType = {
    id_auditoria_aprobacion_ahbb: number | null
    tipoOperacion_ahbb: string | null
    referenciaOperacion_ahbb: string | null
    observacion_ahbb: string | null
    id_usuario_auditado_ahbb: number | null
    id_aprobador_ahbb: number | null
    creadoEn_ahbb: Date | null
  }

  export type Td_auditoria_aprobacion_ahbbMaxAggregateOutputType = {
    id_auditoria_aprobacion_ahbb: number | null
    tipoOperacion_ahbb: string | null
    referenciaOperacion_ahbb: string | null
    observacion_ahbb: string | null
    id_usuario_auditado_ahbb: number | null
    id_aprobador_ahbb: number | null
    creadoEn_ahbb: Date | null
  }

  export type Td_auditoria_aprobacion_ahbbCountAggregateOutputType = {
    id_auditoria_aprobacion_ahbb: number
    tipoOperacion_ahbb: number
    referenciaOperacion_ahbb: number
    observacion_ahbb: number
    id_usuario_auditado_ahbb: number
    id_aprobador_ahbb: number
    creadoEn_ahbb: number
    _all: number
  }


  export type Td_auditoria_aprobacion_ahbbAvgAggregateInputType = {
    id_auditoria_aprobacion_ahbb?: true
    id_usuario_auditado_ahbb?: true
    id_aprobador_ahbb?: true
  }

  export type Td_auditoria_aprobacion_ahbbSumAggregateInputType = {
    id_auditoria_aprobacion_ahbb?: true
    id_usuario_auditado_ahbb?: true
    id_aprobador_ahbb?: true
  }

  export type Td_auditoria_aprobacion_ahbbMinAggregateInputType = {
    id_auditoria_aprobacion_ahbb?: true
    tipoOperacion_ahbb?: true
    referenciaOperacion_ahbb?: true
    observacion_ahbb?: true
    id_usuario_auditado_ahbb?: true
    id_aprobador_ahbb?: true
    creadoEn_ahbb?: true
  }

  export type Td_auditoria_aprobacion_ahbbMaxAggregateInputType = {
    id_auditoria_aprobacion_ahbb?: true
    tipoOperacion_ahbb?: true
    referenciaOperacion_ahbb?: true
    observacion_ahbb?: true
    id_usuario_auditado_ahbb?: true
    id_aprobador_ahbb?: true
    creadoEn_ahbb?: true
  }

  export type Td_auditoria_aprobacion_ahbbCountAggregateInputType = {
    id_auditoria_aprobacion_ahbb?: true
    tipoOperacion_ahbb?: true
    referenciaOperacion_ahbb?: true
    observacion_ahbb?: true
    id_usuario_auditado_ahbb?: true
    id_aprobador_ahbb?: true
    creadoEn_ahbb?: true
    _all?: true
  }

  export type Td_auditoria_aprobacion_ahbbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_auditoria_aprobacion_ahbb to aggregate.
     */
    where?: td_auditoria_aprobacion_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_auditoria_aprobacion_ahbbs to fetch.
     */
    orderBy?: td_auditoria_aprobacion_ahbbOrderByWithRelationInput | td_auditoria_aprobacion_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: td_auditoria_aprobacion_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_auditoria_aprobacion_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_auditoria_aprobacion_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned td_auditoria_aprobacion_ahbbs
    **/
    _count?: true | Td_auditoria_aprobacion_ahbbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Td_auditoria_aprobacion_ahbbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Td_auditoria_aprobacion_ahbbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Td_auditoria_aprobacion_ahbbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Td_auditoria_aprobacion_ahbbMaxAggregateInputType
  }

  export type GetTd_auditoria_aprobacion_ahbbAggregateType<T extends Td_auditoria_aprobacion_ahbbAggregateArgs> = {
        [P in keyof T & keyof AggregateTd_auditoria_aprobacion_ahbb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTd_auditoria_aprobacion_ahbb[P]>
      : GetScalarType<T[P], AggregateTd_auditoria_aprobacion_ahbb[P]>
  }




  export type td_auditoria_aprobacion_ahbbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: td_auditoria_aprobacion_ahbbWhereInput
    orderBy?: td_auditoria_aprobacion_ahbbOrderByWithAggregationInput | td_auditoria_aprobacion_ahbbOrderByWithAggregationInput[]
    by: Td_auditoria_aprobacion_ahbbScalarFieldEnum[] | Td_auditoria_aprobacion_ahbbScalarFieldEnum
    having?: td_auditoria_aprobacion_ahbbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Td_auditoria_aprobacion_ahbbCountAggregateInputType | true
    _avg?: Td_auditoria_aprobacion_ahbbAvgAggregateInputType
    _sum?: Td_auditoria_aprobacion_ahbbSumAggregateInputType
    _min?: Td_auditoria_aprobacion_ahbbMinAggregateInputType
    _max?: Td_auditoria_aprobacion_ahbbMaxAggregateInputType
  }

  export type Td_auditoria_aprobacion_ahbbGroupByOutputType = {
    id_auditoria_aprobacion_ahbb: number
    tipoOperacion_ahbb: string
    referenciaOperacion_ahbb: string
    observacion_ahbb: string | null
    id_usuario_auditado_ahbb: number
    id_aprobador_ahbb: number
    creadoEn_ahbb: Date
    _count: Td_auditoria_aprobacion_ahbbCountAggregateOutputType | null
    _avg: Td_auditoria_aprobacion_ahbbAvgAggregateOutputType | null
    _sum: Td_auditoria_aprobacion_ahbbSumAggregateOutputType | null
    _min: Td_auditoria_aprobacion_ahbbMinAggregateOutputType | null
    _max: Td_auditoria_aprobacion_ahbbMaxAggregateOutputType | null
  }

  type GetTd_auditoria_aprobacion_ahbbGroupByPayload<T extends td_auditoria_aprobacion_ahbbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Td_auditoria_aprobacion_ahbbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Td_auditoria_aprobacion_ahbbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Td_auditoria_aprobacion_ahbbGroupByOutputType[P]>
            : GetScalarType<T[P], Td_auditoria_aprobacion_ahbbGroupByOutputType[P]>
        }
      >
    >


  export type td_auditoria_aprobacion_ahbbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_auditoria_aprobacion_ahbb?: boolean
    tipoOperacion_ahbb?: boolean
    referenciaOperacion_ahbb?: boolean
    observacion_ahbb?: boolean
    id_usuario_auditado_ahbb?: boolean
    id_aprobador_ahbb?: boolean
    creadoEn_ahbb?: boolean
    usuarioAuditado_ahbb?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    aprobador_ahbb?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["td_auditoria_aprobacion_ahbb"]>

  export type td_auditoria_aprobacion_ahbbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_auditoria_aprobacion_ahbb?: boolean
    tipoOperacion_ahbb?: boolean
    referenciaOperacion_ahbb?: boolean
    observacion_ahbb?: boolean
    id_usuario_auditado_ahbb?: boolean
    id_aprobador_ahbb?: boolean
    creadoEn_ahbb?: boolean
    usuarioAuditado_ahbb?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    aprobador_ahbb?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["td_auditoria_aprobacion_ahbb"]>

  export type td_auditoria_aprobacion_ahbbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_auditoria_aprobacion_ahbb?: boolean
    tipoOperacion_ahbb?: boolean
    referenciaOperacion_ahbb?: boolean
    observacion_ahbb?: boolean
    id_usuario_auditado_ahbb?: boolean
    id_aprobador_ahbb?: boolean
    creadoEn_ahbb?: boolean
    usuarioAuditado_ahbb?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    aprobador_ahbb?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["td_auditoria_aprobacion_ahbb"]>

  export type td_auditoria_aprobacion_ahbbSelectScalar = {
    id_auditoria_aprobacion_ahbb?: boolean
    tipoOperacion_ahbb?: boolean
    referenciaOperacion_ahbb?: boolean
    observacion_ahbb?: boolean
    id_usuario_auditado_ahbb?: boolean
    id_aprobador_ahbb?: boolean
    creadoEn_ahbb?: boolean
  }

  export type td_auditoria_aprobacion_ahbbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_auditoria_aprobacion_ahbb" | "tipoOperacion_ahbb" | "referenciaOperacion_ahbb" | "observacion_ahbb" | "id_usuario_auditado_ahbb" | "id_aprobador_ahbb" | "creadoEn_ahbb", ExtArgs["result"]["td_auditoria_aprobacion_ahbb"]>
  export type td_auditoria_aprobacion_ahbbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioAuditado_ahbb?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    aprobador_ahbb?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
  }
  export type td_auditoria_aprobacion_ahbbIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioAuditado_ahbb?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    aprobador_ahbb?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
  }
  export type td_auditoria_aprobacion_ahbbIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioAuditado_ahbb?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
    aprobador_ahbb?: boolean | td_usuario_ahbbDefaultArgs<ExtArgs>
  }

  export type $td_auditoria_aprobacion_ahbbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "td_auditoria_aprobacion_ahbb"
    objects: {
      usuarioAuditado_ahbb: Prisma.$td_usuario_ahbbPayload<ExtArgs>
      aprobador_ahbb: Prisma.$td_usuario_ahbbPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_auditoria_aprobacion_ahbb: number
      tipoOperacion_ahbb: string
      referenciaOperacion_ahbb: string
      observacion_ahbb: string | null
      id_usuario_auditado_ahbb: number
      id_aprobador_ahbb: number
      creadoEn_ahbb: Date
    }, ExtArgs["result"]["td_auditoria_aprobacion_ahbb"]>
    composites: {}
  }

  type td_auditoria_aprobacion_ahbbGetPayload<S extends boolean | null | undefined | td_auditoria_aprobacion_ahbbDefaultArgs> = $Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload, S>

  type td_auditoria_aprobacion_ahbbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<td_auditoria_aprobacion_ahbbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Td_auditoria_aprobacion_ahbbCountAggregateInputType | true
    }

  export interface td_auditoria_aprobacion_ahbbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['td_auditoria_aprobacion_ahbb'], meta: { name: 'td_auditoria_aprobacion_ahbb' } }
    /**
     * Find zero or one Td_auditoria_aprobacion_ahbb that matches the filter.
     * @param {td_auditoria_aprobacion_ahbbFindUniqueArgs} args - Arguments to find a Td_auditoria_aprobacion_ahbb
     * @example
     * // Get one Td_auditoria_aprobacion_ahbb
     * const td_auditoria_aprobacion_ahbb = await prisma.td_auditoria_aprobacion_ahbb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends td_auditoria_aprobacion_ahbbFindUniqueArgs>(args: SelectSubset<T, td_auditoria_aprobacion_ahbbFindUniqueArgs<ExtArgs>>): Prisma__td_auditoria_aprobacion_ahbbClient<$Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Td_auditoria_aprobacion_ahbb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {td_auditoria_aprobacion_ahbbFindUniqueOrThrowArgs} args - Arguments to find a Td_auditoria_aprobacion_ahbb
     * @example
     * // Get one Td_auditoria_aprobacion_ahbb
     * const td_auditoria_aprobacion_ahbb = await prisma.td_auditoria_aprobacion_ahbb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends td_auditoria_aprobacion_ahbbFindUniqueOrThrowArgs>(args: SelectSubset<T, td_auditoria_aprobacion_ahbbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__td_auditoria_aprobacion_ahbbClient<$Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_auditoria_aprobacion_ahbb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_auditoria_aprobacion_ahbbFindFirstArgs} args - Arguments to find a Td_auditoria_aprobacion_ahbb
     * @example
     * // Get one Td_auditoria_aprobacion_ahbb
     * const td_auditoria_aprobacion_ahbb = await prisma.td_auditoria_aprobacion_ahbb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends td_auditoria_aprobacion_ahbbFindFirstArgs>(args?: SelectSubset<T, td_auditoria_aprobacion_ahbbFindFirstArgs<ExtArgs>>): Prisma__td_auditoria_aprobacion_ahbbClient<$Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Td_auditoria_aprobacion_ahbb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_auditoria_aprobacion_ahbbFindFirstOrThrowArgs} args - Arguments to find a Td_auditoria_aprobacion_ahbb
     * @example
     * // Get one Td_auditoria_aprobacion_ahbb
     * const td_auditoria_aprobacion_ahbb = await prisma.td_auditoria_aprobacion_ahbb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends td_auditoria_aprobacion_ahbbFindFirstOrThrowArgs>(args?: SelectSubset<T, td_auditoria_aprobacion_ahbbFindFirstOrThrowArgs<ExtArgs>>): Prisma__td_auditoria_aprobacion_ahbbClient<$Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Td_auditoria_aprobacion_ahbbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_auditoria_aprobacion_ahbbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Td_auditoria_aprobacion_ahbbs
     * const td_auditoria_aprobacion_ahbbs = await prisma.td_auditoria_aprobacion_ahbb.findMany()
     * 
     * // Get first 10 Td_auditoria_aprobacion_ahbbs
     * const td_auditoria_aprobacion_ahbbs = await prisma.td_auditoria_aprobacion_ahbb.findMany({ take: 10 })
     * 
     * // Only select the `id_auditoria_aprobacion_ahbb`
     * const td_auditoria_aprobacion_ahbbWithId_auditoria_aprobacion_ahbbOnly = await prisma.td_auditoria_aprobacion_ahbb.findMany({ select: { id_auditoria_aprobacion_ahbb: true } })
     * 
     */
    findMany<T extends td_auditoria_aprobacion_ahbbFindManyArgs>(args?: SelectSubset<T, td_auditoria_aprobacion_ahbbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Td_auditoria_aprobacion_ahbb.
     * @param {td_auditoria_aprobacion_ahbbCreateArgs} args - Arguments to create a Td_auditoria_aprobacion_ahbb.
     * @example
     * // Create one Td_auditoria_aprobacion_ahbb
     * const Td_auditoria_aprobacion_ahbb = await prisma.td_auditoria_aprobacion_ahbb.create({
     *   data: {
     *     // ... data to create a Td_auditoria_aprobacion_ahbb
     *   }
     * })
     * 
     */
    create<T extends td_auditoria_aprobacion_ahbbCreateArgs>(args: SelectSubset<T, td_auditoria_aprobacion_ahbbCreateArgs<ExtArgs>>): Prisma__td_auditoria_aprobacion_ahbbClient<$Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Td_auditoria_aprobacion_ahbbs.
     * @param {td_auditoria_aprobacion_ahbbCreateManyArgs} args - Arguments to create many Td_auditoria_aprobacion_ahbbs.
     * @example
     * // Create many Td_auditoria_aprobacion_ahbbs
     * const td_auditoria_aprobacion_ahbb = await prisma.td_auditoria_aprobacion_ahbb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends td_auditoria_aprobacion_ahbbCreateManyArgs>(args?: SelectSubset<T, td_auditoria_aprobacion_ahbbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Td_auditoria_aprobacion_ahbbs and returns the data saved in the database.
     * @param {td_auditoria_aprobacion_ahbbCreateManyAndReturnArgs} args - Arguments to create many Td_auditoria_aprobacion_ahbbs.
     * @example
     * // Create many Td_auditoria_aprobacion_ahbbs
     * const td_auditoria_aprobacion_ahbb = await prisma.td_auditoria_aprobacion_ahbb.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Td_auditoria_aprobacion_ahbbs and only return the `id_auditoria_aprobacion_ahbb`
     * const td_auditoria_aprobacion_ahbbWithId_auditoria_aprobacion_ahbbOnly = await prisma.td_auditoria_aprobacion_ahbb.createManyAndReturn({
     *   select: { id_auditoria_aprobacion_ahbb: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends td_auditoria_aprobacion_ahbbCreateManyAndReturnArgs>(args?: SelectSubset<T, td_auditoria_aprobacion_ahbbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Td_auditoria_aprobacion_ahbb.
     * @param {td_auditoria_aprobacion_ahbbDeleteArgs} args - Arguments to delete one Td_auditoria_aprobacion_ahbb.
     * @example
     * // Delete one Td_auditoria_aprobacion_ahbb
     * const Td_auditoria_aprobacion_ahbb = await prisma.td_auditoria_aprobacion_ahbb.delete({
     *   where: {
     *     // ... filter to delete one Td_auditoria_aprobacion_ahbb
     *   }
     * })
     * 
     */
    delete<T extends td_auditoria_aprobacion_ahbbDeleteArgs>(args: SelectSubset<T, td_auditoria_aprobacion_ahbbDeleteArgs<ExtArgs>>): Prisma__td_auditoria_aprobacion_ahbbClient<$Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Td_auditoria_aprobacion_ahbb.
     * @param {td_auditoria_aprobacion_ahbbUpdateArgs} args - Arguments to update one Td_auditoria_aprobacion_ahbb.
     * @example
     * // Update one Td_auditoria_aprobacion_ahbb
     * const td_auditoria_aprobacion_ahbb = await prisma.td_auditoria_aprobacion_ahbb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends td_auditoria_aprobacion_ahbbUpdateArgs>(args: SelectSubset<T, td_auditoria_aprobacion_ahbbUpdateArgs<ExtArgs>>): Prisma__td_auditoria_aprobacion_ahbbClient<$Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Td_auditoria_aprobacion_ahbbs.
     * @param {td_auditoria_aprobacion_ahbbDeleteManyArgs} args - Arguments to filter Td_auditoria_aprobacion_ahbbs to delete.
     * @example
     * // Delete a few Td_auditoria_aprobacion_ahbbs
     * const { count } = await prisma.td_auditoria_aprobacion_ahbb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends td_auditoria_aprobacion_ahbbDeleteManyArgs>(args?: SelectSubset<T, td_auditoria_aprobacion_ahbbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_auditoria_aprobacion_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_auditoria_aprobacion_ahbbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Td_auditoria_aprobacion_ahbbs
     * const td_auditoria_aprobacion_ahbb = await prisma.td_auditoria_aprobacion_ahbb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends td_auditoria_aprobacion_ahbbUpdateManyArgs>(args: SelectSubset<T, td_auditoria_aprobacion_ahbbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_auditoria_aprobacion_ahbbs and returns the data updated in the database.
     * @param {td_auditoria_aprobacion_ahbbUpdateManyAndReturnArgs} args - Arguments to update many Td_auditoria_aprobacion_ahbbs.
     * @example
     * // Update many Td_auditoria_aprobacion_ahbbs
     * const td_auditoria_aprobacion_ahbb = await prisma.td_auditoria_aprobacion_ahbb.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Td_auditoria_aprobacion_ahbbs and only return the `id_auditoria_aprobacion_ahbb`
     * const td_auditoria_aprobacion_ahbbWithId_auditoria_aprobacion_ahbbOnly = await prisma.td_auditoria_aprobacion_ahbb.updateManyAndReturn({
     *   select: { id_auditoria_aprobacion_ahbb: true },
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
    updateManyAndReturn<T extends td_auditoria_aprobacion_ahbbUpdateManyAndReturnArgs>(args: SelectSubset<T, td_auditoria_aprobacion_ahbbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Td_auditoria_aprobacion_ahbb.
     * @param {td_auditoria_aprobacion_ahbbUpsertArgs} args - Arguments to update or create a Td_auditoria_aprobacion_ahbb.
     * @example
     * // Update or create a Td_auditoria_aprobacion_ahbb
     * const td_auditoria_aprobacion_ahbb = await prisma.td_auditoria_aprobacion_ahbb.upsert({
     *   create: {
     *     // ... data to create a Td_auditoria_aprobacion_ahbb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Td_auditoria_aprobacion_ahbb we want to update
     *   }
     * })
     */
    upsert<T extends td_auditoria_aprobacion_ahbbUpsertArgs>(args: SelectSubset<T, td_auditoria_aprobacion_ahbbUpsertArgs<ExtArgs>>): Prisma__td_auditoria_aprobacion_ahbbClient<$Result.GetResult<Prisma.$td_auditoria_aprobacion_ahbbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Td_auditoria_aprobacion_ahbbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_auditoria_aprobacion_ahbbCountArgs} args - Arguments to filter Td_auditoria_aprobacion_ahbbs to count.
     * @example
     * // Count the number of Td_auditoria_aprobacion_ahbbs
     * const count = await prisma.td_auditoria_aprobacion_ahbb.count({
     *   where: {
     *     // ... the filter for the Td_auditoria_aprobacion_ahbbs we want to count
     *   }
     * })
    **/
    count<T extends td_auditoria_aprobacion_ahbbCountArgs>(
      args?: Subset<T, td_auditoria_aprobacion_ahbbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Td_auditoria_aprobacion_ahbbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Td_auditoria_aprobacion_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Td_auditoria_aprobacion_ahbbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Td_auditoria_aprobacion_ahbbAggregateArgs>(args: Subset<T, Td_auditoria_aprobacion_ahbbAggregateArgs>): Prisma.PrismaPromise<GetTd_auditoria_aprobacion_ahbbAggregateType<T>>

    /**
     * Group by Td_auditoria_aprobacion_ahbb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_auditoria_aprobacion_ahbbGroupByArgs} args - Group by arguments.
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
      T extends td_auditoria_aprobacion_ahbbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: td_auditoria_aprobacion_ahbbGroupByArgs['orderBy'] }
        : { orderBy?: td_auditoria_aprobacion_ahbbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, td_auditoria_aprobacion_ahbbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTd_auditoria_aprobacion_ahbbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the td_auditoria_aprobacion_ahbb model
   */
  readonly fields: td_auditoria_aprobacion_ahbbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for td_auditoria_aprobacion_ahbb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__td_auditoria_aprobacion_ahbbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarioAuditado_ahbb<T extends td_usuario_ahbbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, td_usuario_ahbbDefaultArgs<ExtArgs>>): Prisma__td_usuario_ahbbClient<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aprobador_ahbb<T extends td_usuario_ahbbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, td_usuario_ahbbDefaultArgs<ExtArgs>>): Prisma__td_usuario_ahbbClient<$Result.GetResult<Prisma.$td_usuario_ahbbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the td_auditoria_aprobacion_ahbb model
   */
  interface td_auditoria_aprobacion_ahbbFieldRefs {
    readonly id_auditoria_aprobacion_ahbb: FieldRef<"td_auditoria_aprobacion_ahbb", 'Int'>
    readonly tipoOperacion_ahbb: FieldRef<"td_auditoria_aprobacion_ahbb", 'String'>
    readonly referenciaOperacion_ahbb: FieldRef<"td_auditoria_aprobacion_ahbb", 'String'>
    readonly observacion_ahbb: FieldRef<"td_auditoria_aprobacion_ahbb", 'String'>
    readonly id_usuario_auditado_ahbb: FieldRef<"td_auditoria_aprobacion_ahbb", 'Int'>
    readonly id_aprobador_ahbb: FieldRef<"td_auditoria_aprobacion_ahbb", 'Int'>
    readonly creadoEn_ahbb: FieldRef<"td_auditoria_aprobacion_ahbb", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * td_auditoria_aprobacion_ahbb findUnique
   */
  export type td_auditoria_aprobacion_ahbbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_auditoria_aprobacion_ahbb to fetch.
     */
    where: td_auditoria_aprobacion_ahbbWhereUniqueInput
  }

  /**
   * td_auditoria_aprobacion_ahbb findUniqueOrThrow
   */
  export type td_auditoria_aprobacion_ahbbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_auditoria_aprobacion_ahbb to fetch.
     */
    where: td_auditoria_aprobacion_ahbbWhereUniqueInput
  }

  /**
   * td_auditoria_aprobacion_ahbb findFirst
   */
  export type td_auditoria_aprobacion_ahbbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_auditoria_aprobacion_ahbb to fetch.
     */
    where?: td_auditoria_aprobacion_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_auditoria_aprobacion_ahbbs to fetch.
     */
    orderBy?: td_auditoria_aprobacion_ahbbOrderByWithRelationInput | td_auditoria_aprobacion_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_auditoria_aprobacion_ahbbs.
     */
    cursor?: td_auditoria_aprobacion_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_auditoria_aprobacion_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_auditoria_aprobacion_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_auditoria_aprobacion_ahbbs.
     */
    distinct?: Td_auditoria_aprobacion_ahbbScalarFieldEnum | Td_auditoria_aprobacion_ahbbScalarFieldEnum[]
  }

  /**
   * td_auditoria_aprobacion_ahbb findFirstOrThrow
   */
  export type td_auditoria_aprobacion_ahbbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_auditoria_aprobacion_ahbb to fetch.
     */
    where?: td_auditoria_aprobacion_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_auditoria_aprobacion_ahbbs to fetch.
     */
    orderBy?: td_auditoria_aprobacion_ahbbOrderByWithRelationInput | td_auditoria_aprobacion_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_auditoria_aprobacion_ahbbs.
     */
    cursor?: td_auditoria_aprobacion_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_auditoria_aprobacion_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_auditoria_aprobacion_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_auditoria_aprobacion_ahbbs.
     */
    distinct?: Td_auditoria_aprobacion_ahbbScalarFieldEnum | Td_auditoria_aprobacion_ahbbScalarFieldEnum[]
  }

  /**
   * td_auditoria_aprobacion_ahbb findMany
   */
  export type td_auditoria_aprobacion_ahbbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbInclude<ExtArgs> | null
    /**
     * Filter, which td_auditoria_aprobacion_ahbbs to fetch.
     */
    where?: td_auditoria_aprobacion_ahbbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_auditoria_aprobacion_ahbbs to fetch.
     */
    orderBy?: td_auditoria_aprobacion_ahbbOrderByWithRelationInput | td_auditoria_aprobacion_ahbbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing td_auditoria_aprobacion_ahbbs.
     */
    cursor?: td_auditoria_aprobacion_ahbbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_auditoria_aprobacion_ahbbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_auditoria_aprobacion_ahbbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_auditoria_aprobacion_ahbbs.
     */
    distinct?: Td_auditoria_aprobacion_ahbbScalarFieldEnum | Td_auditoria_aprobacion_ahbbScalarFieldEnum[]
  }

  /**
   * td_auditoria_aprobacion_ahbb create
   */
  export type td_auditoria_aprobacion_ahbbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbInclude<ExtArgs> | null
    /**
     * The data needed to create a td_auditoria_aprobacion_ahbb.
     */
    data: XOR<td_auditoria_aprobacion_ahbbCreateInput, td_auditoria_aprobacion_ahbbUncheckedCreateInput>
  }

  /**
   * td_auditoria_aprobacion_ahbb createMany
   */
  export type td_auditoria_aprobacion_ahbbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many td_auditoria_aprobacion_ahbbs.
     */
    data: td_auditoria_aprobacion_ahbbCreateManyInput | td_auditoria_aprobacion_ahbbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * td_auditoria_aprobacion_ahbb createManyAndReturn
   */
  export type td_auditoria_aprobacion_ahbbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * The data used to create many td_auditoria_aprobacion_ahbbs.
     */
    data: td_auditoria_aprobacion_ahbbCreateManyInput | td_auditoria_aprobacion_ahbbCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * td_auditoria_aprobacion_ahbb update
   */
  export type td_auditoria_aprobacion_ahbbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbInclude<ExtArgs> | null
    /**
     * The data needed to update a td_auditoria_aprobacion_ahbb.
     */
    data: XOR<td_auditoria_aprobacion_ahbbUpdateInput, td_auditoria_aprobacion_ahbbUncheckedUpdateInput>
    /**
     * Choose, which td_auditoria_aprobacion_ahbb to update.
     */
    where: td_auditoria_aprobacion_ahbbWhereUniqueInput
  }

  /**
   * td_auditoria_aprobacion_ahbb updateMany
   */
  export type td_auditoria_aprobacion_ahbbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update td_auditoria_aprobacion_ahbbs.
     */
    data: XOR<td_auditoria_aprobacion_ahbbUpdateManyMutationInput, td_auditoria_aprobacion_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_auditoria_aprobacion_ahbbs to update
     */
    where?: td_auditoria_aprobacion_ahbbWhereInput
    /**
     * Limit how many td_auditoria_aprobacion_ahbbs to update.
     */
    limit?: number
  }

  /**
   * td_auditoria_aprobacion_ahbb updateManyAndReturn
   */
  export type td_auditoria_aprobacion_ahbbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * The data used to update td_auditoria_aprobacion_ahbbs.
     */
    data: XOR<td_auditoria_aprobacion_ahbbUpdateManyMutationInput, td_auditoria_aprobacion_ahbbUncheckedUpdateManyInput>
    /**
     * Filter which td_auditoria_aprobacion_ahbbs to update
     */
    where?: td_auditoria_aprobacion_ahbbWhereInput
    /**
     * Limit how many td_auditoria_aprobacion_ahbbs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * td_auditoria_aprobacion_ahbb upsert
   */
  export type td_auditoria_aprobacion_ahbbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbInclude<ExtArgs> | null
    /**
     * The filter to search for the td_auditoria_aprobacion_ahbb to update in case it exists.
     */
    where: td_auditoria_aprobacion_ahbbWhereUniqueInput
    /**
     * In case the td_auditoria_aprobacion_ahbb found by the `where` argument doesn't exist, create a new td_auditoria_aprobacion_ahbb with this data.
     */
    create: XOR<td_auditoria_aprobacion_ahbbCreateInput, td_auditoria_aprobacion_ahbbUncheckedCreateInput>
    /**
     * In case the td_auditoria_aprobacion_ahbb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<td_auditoria_aprobacion_ahbbUpdateInput, td_auditoria_aprobacion_ahbbUncheckedUpdateInput>
  }

  /**
   * td_auditoria_aprobacion_ahbb delete
   */
  export type td_auditoria_aprobacion_ahbbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbInclude<ExtArgs> | null
    /**
     * Filter which td_auditoria_aprobacion_ahbb to delete.
     */
    where: td_auditoria_aprobacion_ahbbWhereUniqueInput
  }

  /**
   * td_auditoria_aprobacion_ahbb deleteMany
   */
  export type td_auditoria_aprobacion_ahbbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which td_auditoria_aprobacion_ahbbs to delete
     */
    where?: td_auditoria_aprobacion_ahbbWhereInput
    /**
     * Limit how many td_auditoria_aprobacion_ahbbs to delete.
     */
    limit?: number
  }

  /**
   * td_auditoria_aprobacion_ahbb without action
   */
  export type td_auditoria_aprobacion_ahbbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the td_auditoria_aprobacion_ahbb
     */
    select?: td_auditoria_aprobacion_ahbbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the td_auditoria_aprobacion_ahbb
     */
    omit?: td_auditoria_aprobacion_ahbbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: td_auditoria_aprobacion_ahbbInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Td_usuario_ahbbScalarFieldEnum: {
    id_usuario_ahbb: 'id_usuario_ahbb',
    cedula_ahbb: 'cedula_ahbb',
    nombre_ahbb: 'nombre_ahbb',
    apellido_ahbb: 'apellido_ahbb',
    correo_ahbb: 'correo_ahbb',
    contrasena_ahbb: 'contrasena_ahbb',
    rol_ahbb: 'rol_ahbb',
    firmaDigital_ahbb: 'firmaDigital_ahbb',
    estadoCuenta_ahbb: 'estadoCuenta_ahbb',
    requiereCambioContrasena_ahbb: 'requiereCambioContrasena_ahbb',
    referenciaPagoMovil_ahbb: 'referenciaPagoMovil_ahbb',
    aprobadoPorUsuarioId_ahbb: 'aprobadoPorUsuarioId_ahbb',
    creadoEn_ahbb: 'creadoEn_ahbb',
    actualizadoEn_ahbb: 'actualizadoEn_ahbb'
  };

  export type Td_usuario_ahbbScalarFieldEnum = (typeof Td_usuario_ahbbScalarFieldEnum)[keyof typeof Td_usuario_ahbbScalarFieldEnum]


  export const Td_curso_ahbbScalarFieldEnum: {
    id_curso_ahbb: 'id_curso_ahbb',
    nombre_ahbb: 'nombre_ahbb',
    tematica_ahbb: 'tematica_ahbb',
    descripcion_ahbb: 'descripcion_ahbb',
    diasDefinidos_ahbb: 'diasDefinidos_ahbb',
    horasDefinidas_ahbb: 'horasDefinidas_ahbb',
    fechaInicio_ahbb: 'fechaInicio_ahbb',
    fechaFin_ahbb: 'fechaFin_ahbb',
    fechaDuracion_ahbb: 'fechaDuracion_ahbb',
    topeEstudiantes_ahbb: 'topeEstudiantes_ahbb',
    temarioTexto_ahbb: 'temarioTexto_ahbb',
    imagenBasePdf_ahbb: 'imagenBasePdf_ahbb',
    imagenBloqueada_ahbb: 'imagenBloqueada_ahbb',
    isPublished_ahbb: 'isPublished_ahbb',
    id_usuario_curso_ahbb: 'id_usuario_curso_ahbb',
    id_curso_curso_ahbb: 'id_curso_curso_ahbb',
    creadoEn_ahbb: 'creadoEn_ahbb',
    actualizadoEn_ahbb: 'actualizadoEn_ahbb'
  };

  export type Td_curso_ahbbScalarFieldEnum = (typeof Td_curso_ahbbScalarFieldEnum)[keyof typeof Td_curso_ahbbScalarFieldEnum]


  export const Td_horario_ahbbScalarFieldEnum: {
    id_horario_ahbb: 'id_horario_ahbb',
    diaSemana_ahbb: 'diaSemana_ahbb',
    horaInicio_ahbb: 'horaInicio_ahbb',
    horaFin_ahbb: 'horaFin_ahbb',
    id_curso_horario_ahbb: 'id_curso_horario_ahbb'
  };

  export type Td_horario_ahbbScalarFieldEnum = (typeof Td_horario_ahbbScalarFieldEnum)[keyof typeof Td_horario_ahbbScalarFieldEnum]


  export const Td_inscripcion_ahbbScalarFieldEnum: {
    id_inscripcion_ahbb: 'id_inscripcion_ahbb',
    estatus_ahbb: 'estatus_ahbb',
    intento_ahbb: 'intento_ahbb',
    notaFinal_ahbb: 'notaFinal_ahbb',
    observaciones_ahbb: 'observaciones_ahbb',
    id_usuario_inscripcion_ahbb: 'id_usuario_inscripcion_ahbb',
    id_curso_inscripcion_ahbb: 'id_curso_inscripcion_ahbb',
    creadoEn_ahbb: 'creadoEn_ahbb',
    actualizadoEn_ahbb: 'actualizadoEn_ahbb'
  };

  export type Td_inscripcion_ahbbScalarFieldEnum = (typeof Td_inscripcion_ahbbScalarFieldEnum)[keyof typeof Td_inscripcion_ahbbScalarFieldEnum]


  export const Td_certificado_ahbbScalarFieldEnum: {
    id_certificado_ahbb: 'id_certificado_ahbb',
    codigoQrUrl_ahbb: 'codigoQrUrl_ahbb',
    id_inscripcion_certificado_ahbb: 'id_inscripcion_certificado_ahbb',
    creadoEn_ahbb: 'creadoEn_ahbb'
  };

  export type Td_certificado_ahbbScalarFieldEnum = (typeof Td_certificado_ahbbScalarFieldEnum)[keyof typeof Td_certificado_ahbbScalarFieldEnum]


  export const Td_configuracionglobal_ahbbScalarFieldEnum: {
    id_configuracionglobal_ahbb: 'id_configuracionglobal_ahbb',
    imagenCertificadoGeneral_ahbb: 'imagenCertificadoGeneral_ahbb'
  };

  export type Td_configuracionglobal_ahbbScalarFieldEnum = (typeof Td_configuracionglobal_ahbbScalarFieldEnum)[keyof typeof Td_configuracionglobal_ahbbScalarFieldEnum]


  export const Td_auditoria_aprobacion_ahbbScalarFieldEnum: {
    id_auditoria_aprobacion_ahbb: 'id_auditoria_aprobacion_ahbb',
    tipoOperacion_ahbb: 'tipoOperacion_ahbb',
    referenciaOperacion_ahbb: 'referenciaOperacion_ahbb',
    observacion_ahbb: 'observacion_ahbb',
    id_usuario_auditado_ahbb: 'id_usuario_auditado_ahbb',
    id_aprobador_ahbb: 'id_aprobador_ahbb',
    creadoEn_ahbb: 'creadoEn_ahbb'
  };

  export type Td_auditoria_aprobacion_ahbbScalarFieldEnum = (typeof Td_auditoria_aprobacion_ahbbScalarFieldEnum)[keyof typeof Td_auditoria_aprobacion_ahbbScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type td_usuario_ahbbWhereInput = {
    AND?: td_usuario_ahbbWhereInput | td_usuario_ahbbWhereInput[]
    OR?: td_usuario_ahbbWhereInput[]
    NOT?: td_usuario_ahbbWhereInput | td_usuario_ahbbWhereInput[]
    id_usuario_ahbb?: IntFilter<"td_usuario_ahbb"> | number
    cedula_ahbb?: StringFilter<"td_usuario_ahbb"> | string
    nombre_ahbb?: StringFilter<"td_usuario_ahbb"> | string
    apellido_ahbb?: StringFilter<"td_usuario_ahbb"> | string
    correo_ahbb?: StringFilter<"td_usuario_ahbb"> | string
    contrasena_ahbb?: StringFilter<"td_usuario_ahbb"> | string
    rol_ahbb?: StringNullableFilter<"td_usuario_ahbb"> | string | null
    firmaDigital_ahbb?: StringNullableFilter<"td_usuario_ahbb"> | string | null
    estadoCuenta_ahbb?: StringFilter<"td_usuario_ahbb"> | string
    requiereCambioContrasena_ahbb?: BoolFilter<"td_usuario_ahbb"> | boolean
    referenciaPagoMovil_ahbb?: StringNullableFilter<"td_usuario_ahbb"> | string | null
    aprobadoPorUsuarioId_ahbb?: IntNullableFilter<"td_usuario_ahbb"> | number | null
    creadoEn_ahbb?: DateTimeNullableFilter<"td_usuario_ahbb"> | Date | string | null
    actualizadoEn_ahbb?: DateTimeNullableFilter<"td_usuario_ahbb"> | Date | string | null
    cursos?: Td_curso_ahbbListRelationFilter
    inscripciones?: Td_inscripcion_ahbbListRelationFilter
    auditoriasAprobadas_ahbb?: Td_auditoria_aprobacion_ahbbListRelationFilter
    auditoriasUsuario_ahbb?: Td_auditoria_aprobacion_ahbbListRelationFilter
  }

  export type td_usuario_ahbbOrderByWithRelationInput = {
    id_usuario_ahbb?: SortOrder
    cedula_ahbb?: SortOrder
    nombre_ahbb?: SortOrder
    apellido_ahbb?: SortOrder
    correo_ahbb?: SortOrder
    contrasena_ahbb?: SortOrder
    rol_ahbb?: SortOrderInput | SortOrder
    firmaDigital_ahbb?: SortOrderInput | SortOrder
    estadoCuenta_ahbb?: SortOrder
    requiereCambioContrasena_ahbb?: SortOrder
    referenciaPagoMovil_ahbb?: SortOrderInput | SortOrder
    aprobadoPorUsuarioId_ahbb?: SortOrderInput | SortOrder
    creadoEn_ahbb?: SortOrderInput | SortOrder
    actualizadoEn_ahbb?: SortOrderInput | SortOrder
    cursos?: td_curso_ahbbOrderByRelationAggregateInput
    inscripciones?: td_inscripcion_ahbbOrderByRelationAggregateInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbOrderByRelationAggregateInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbOrderByRelationAggregateInput
  }

  export type td_usuario_ahbbWhereUniqueInput = Prisma.AtLeast<{
    id_usuario_ahbb?: number
    cedula_ahbb?: string
    correo_ahbb?: string
    AND?: td_usuario_ahbbWhereInput | td_usuario_ahbbWhereInput[]
    OR?: td_usuario_ahbbWhereInput[]
    NOT?: td_usuario_ahbbWhereInput | td_usuario_ahbbWhereInput[]
    nombre_ahbb?: StringFilter<"td_usuario_ahbb"> | string
    apellido_ahbb?: StringFilter<"td_usuario_ahbb"> | string
    contrasena_ahbb?: StringFilter<"td_usuario_ahbb"> | string
    rol_ahbb?: StringNullableFilter<"td_usuario_ahbb"> | string | null
    firmaDigital_ahbb?: StringNullableFilter<"td_usuario_ahbb"> | string | null
    estadoCuenta_ahbb?: StringFilter<"td_usuario_ahbb"> | string
    requiereCambioContrasena_ahbb?: BoolFilter<"td_usuario_ahbb"> | boolean
    referenciaPagoMovil_ahbb?: StringNullableFilter<"td_usuario_ahbb"> | string | null
    aprobadoPorUsuarioId_ahbb?: IntNullableFilter<"td_usuario_ahbb"> | number | null
    creadoEn_ahbb?: DateTimeNullableFilter<"td_usuario_ahbb"> | Date | string | null
    actualizadoEn_ahbb?: DateTimeNullableFilter<"td_usuario_ahbb"> | Date | string | null
    cursos?: Td_curso_ahbbListRelationFilter
    inscripciones?: Td_inscripcion_ahbbListRelationFilter
    auditoriasAprobadas_ahbb?: Td_auditoria_aprobacion_ahbbListRelationFilter
    auditoriasUsuario_ahbb?: Td_auditoria_aprobacion_ahbbListRelationFilter
  }, "id_usuario_ahbb" | "cedula_ahbb" | "correo_ahbb">

  export type td_usuario_ahbbOrderByWithAggregationInput = {
    id_usuario_ahbb?: SortOrder
    cedula_ahbb?: SortOrder
    nombre_ahbb?: SortOrder
    apellido_ahbb?: SortOrder
    correo_ahbb?: SortOrder
    contrasena_ahbb?: SortOrder
    rol_ahbb?: SortOrderInput | SortOrder
    firmaDigital_ahbb?: SortOrderInput | SortOrder
    estadoCuenta_ahbb?: SortOrder
    requiereCambioContrasena_ahbb?: SortOrder
    referenciaPagoMovil_ahbb?: SortOrderInput | SortOrder
    aprobadoPorUsuarioId_ahbb?: SortOrderInput | SortOrder
    creadoEn_ahbb?: SortOrderInput | SortOrder
    actualizadoEn_ahbb?: SortOrderInput | SortOrder
    _count?: td_usuario_ahbbCountOrderByAggregateInput
    _avg?: td_usuario_ahbbAvgOrderByAggregateInput
    _max?: td_usuario_ahbbMaxOrderByAggregateInput
    _min?: td_usuario_ahbbMinOrderByAggregateInput
    _sum?: td_usuario_ahbbSumOrderByAggregateInput
  }

  export type td_usuario_ahbbScalarWhereWithAggregatesInput = {
    AND?: td_usuario_ahbbScalarWhereWithAggregatesInput | td_usuario_ahbbScalarWhereWithAggregatesInput[]
    OR?: td_usuario_ahbbScalarWhereWithAggregatesInput[]
    NOT?: td_usuario_ahbbScalarWhereWithAggregatesInput | td_usuario_ahbbScalarWhereWithAggregatesInput[]
    id_usuario_ahbb?: IntWithAggregatesFilter<"td_usuario_ahbb"> | number
    cedula_ahbb?: StringWithAggregatesFilter<"td_usuario_ahbb"> | string
    nombre_ahbb?: StringWithAggregatesFilter<"td_usuario_ahbb"> | string
    apellido_ahbb?: StringWithAggregatesFilter<"td_usuario_ahbb"> | string
    correo_ahbb?: StringWithAggregatesFilter<"td_usuario_ahbb"> | string
    contrasena_ahbb?: StringWithAggregatesFilter<"td_usuario_ahbb"> | string
    rol_ahbb?: StringNullableWithAggregatesFilter<"td_usuario_ahbb"> | string | null
    firmaDigital_ahbb?: StringNullableWithAggregatesFilter<"td_usuario_ahbb"> | string | null
    estadoCuenta_ahbb?: StringWithAggregatesFilter<"td_usuario_ahbb"> | string
    requiereCambioContrasena_ahbb?: BoolWithAggregatesFilter<"td_usuario_ahbb"> | boolean
    referenciaPagoMovil_ahbb?: StringNullableWithAggregatesFilter<"td_usuario_ahbb"> | string | null
    aprobadoPorUsuarioId_ahbb?: IntNullableWithAggregatesFilter<"td_usuario_ahbb"> | number | null
    creadoEn_ahbb?: DateTimeNullableWithAggregatesFilter<"td_usuario_ahbb"> | Date | string | null
    actualizadoEn_ahbb?: DateTimeNullableWithAggregatesFilter<"td_usuario_ahbb"> | Date | string | null
  }

  export type td_curso_ahbbWhereInput = {
    AND?: td_curso_ahbbWhereInput | td_curso_ahbbWhereInput[]
    OR?: td_curso_ahbbWhereInput[]
    NOT?: td_curso_ahbbWhereInput | td_curso_ahbbWhereInput[]
    id_curso_ahbb?: IntFilter<"td_curso_ahbb"> | number
    nombre_ahbb?: StringFilter<"td_curso_ahbb"> | string
    tematica_ahbb?: StringFilter<"td_curso_ahbb"> | string
    descripcion_ahbb?: StringNullableFilter<"td_curso_ahbb"> | string | null
    diasDefinidos_ahbb?: IntFilter<"td_curso_ahbb"> | number
    horasDefinidas_ahbb?: IntFilter<"td_curso_ahbb"> | number
    fechaInicio_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    fechaFin_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    fechaDuracion_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    topeEstudiantes_ahbb?: IntNullableFilter<"td_curso_ahbb"> | number | null
    temarioTexto_ahbb?: StringNullableFilter<"td_curso_ahbb"> | string | null
    imagenBasePdf_ahbb?: StringNullableFilter<"td_curso_ahbb"> | string | null
    imagenBloqueada_ahbb?: BoolNullableFilter<"td_curso_ahbb"> | boolean | null
    isPublished_ahbb?: BoolFilter<"td_curso_ahbb"> | boolean
    id_usuario_curso_ahbb?: IntFilter<"td_curso_ahbb"> | number
    id_curso_curso_ahbb?: IntNullableFilter<"td_curso_ahbb"> | number | null
    creadoEn_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    actualizadoEn_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    profesor?: XOR<Td_usuario_ahbbScalarRelationFilter, td_usuario_ahbbWhereInput>
    prelacion?: XOR<Td_curso_ahbbNullableScalarRelationFilter, td_curso_ahbbWhereInput> | null
    prelaciones?: Td_curso_ahbbListRelationFilter
    horarios?: Td_horario_ahbbListRelationFilter
    inscripciones?: Td_inscripcion_ahbbListRelationFilter
  }

  export type td_curso_ahbbOrderByWithRelationInput = {
    id_curso_ahbb?: SortOrder
    nombre_ahbb?: SortOrder
    tematica_ahbb?: SortOrder
    descripcion_ahbb?: SortOrderInput | SortOrder
    diasDefinidos_ahbb?: SortOrder
    horasDefinidas_ahbb?: SortOrder
    fechaInicio_ahbb?: SortOrderInput | SortOrder
    fechaFin_ahbb?: SortOrderInput | SortOrder
    fechaDuracion_ahbb?: SortOrderInput | SortOrder
    topeEstudiantes_ahbb?: SortOrderInput | SortOrder
    temarioTexto_ahbb?: SortOrderInput | SortOrder
    imagenBasePdf_ahbb?: SortOrderInput | SortOrder
    imagenBloqueada_ahbb?: SortOrderInput | SortOrder
    isPublished_ahbb?: SortOrder
    id_usuario_curso_ahbb?: SortOrder
    id_curso_curso_ahbb?: SortOrderInput | SortOrder
    creadoEn_ahbb?: SortOrderInput | SortOrder
    actualizadoEn_ahbb?: SortOrderInput | SortOrder
    profesor?: td_usuario_ahbbOrderByWithRelationInput
    prelacion?: td_curso_ahbbOrderByWithRelationInput
    prelaciones?: td_curso_ahbbOrderByRelationAggregateInput
    horarios?: td_horario_ahbbOrderByRelationAggregateInput
    inscripciones?: td_inscripcion_ahbbOrderByRelationAggregateInput
  }

  export type td_curso_ahbbWhereUniqueInput = Prisma.AtLeast<{
    id_curso_ahbb?: number
    AND?: td_curso_ahbbWhereInput | td_curso_ahbbWhereInput[]
    OR?: td_curso_ahbbWhereInput[]
    NOT?: td_curso_ahbbWhereInput | td_curso_ahbbWhereInput[]
    nombre_ahbb?: StringFilter<"td_curso_ahbb"> | string
    tematica_ahbb?: StringFilter<"td_curso_ahbb"> | string
    descripcion_ahbb?: StringNullableFilter<"td_curso_ahbb"> | string | null
    diasDefinidos_ahbb?: IntFilter<"td_curso_ahbb"> | number
    horasDefinidas_ahbb?: IntFilter<"td_curso_ahbb"> | number
    fechaInicio_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    fechaFin_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    fechaDuracion_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    topeEstudiantes_ahbb?: IntNullableFilter<"td_curso_ahbb"> | number | null
    temarioTexto_ahbb?: StringNullableFilter<"td_curso_ahbb"> | string | null
    imagenBasePdf_ahbb?: StringNullableFilter<"td_curso_ahbb"> | string | null
    imagenBloqueada_ahbb?: BoolNullableFilter<"td_curso_ahbb"> | boolean | null
    isPublished_ahbb?: BoolFilter<"td_curso_ahbb"> | boolean
    id_usuario_curso_ahbb?: IntFilter<"td_curso_ahbb"> | number
    id_curso_curso_ahbb?: IntNullableFilter<"td_curso_ahbb"> | number | null
    creadoEn_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    actualizadoEn_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    profesor?: XOR<Td_usuario_ahbbScalarRelationFilter, td_usuario_ahbbWhereInput>
    prelacion?: XOR<Td_curso_ahbbNullableScalarRelationFilter, td_curso_ahbbWhereInput> | null
    prelaciones?: Td_curso_ahbbListRelationFilter
    horarios?: Td_horario_ahbbListRelationFilter
    inscripciones?: Td_inscripcion_ahbbListRelationFilter
  }, "id_curso_ahbb">

  export type td_curso_ahbbOrderByWithAggregationInput = {
    id_curso_ahbb?: SortOrder
    nombre_ahbb?: SortOrder
    tematica_ahbb?: SortOrder
    descripcion_ahbb?: SortOrderInput | SortOrder
    diasDefinidos_ahbb?: SortOrder
    horasDefinidas_ahbb?: SortOrder
    fechaInicio_ahbb?: SortOrderInput | SortOrder
    fechaFin_ahbb?: SortOrderInput | SortOrder
    fechaDuracion_ahbb?: SortOrderInput | SortOrder
    topeEstudiantes_ahbb?: SortOrderInput | SortOrder
    temarioTexto_ahbb?: SortOrderInput | SortOrder
    imagenBasePdf_ahbb?: SortOrderInput | SortOrder
    imagenBloqueada_ahbb?: SortOrderInput | SortOrder
    isPublished_ahbb?: SortOrder
    id_usuario_curso_ahbb?: SortOrder
    id_curso_curso_ahbb?: SortOrderInput | SortOrder
    creadoEn_ahbb?: SortOrderInput | SortOrder
    actualizadoEn_ahbb?: SortOrderInput | SortOrder
    _count?: td_curso_ahbbCountOrderByAggregateInput
    _avg?: td_curso_ahbbAvgOrderByAggregateInput
    _max?: td_curso_ahbbMaxOrderByAggregateInput
    _min?: td_curso_ahbbMinOrderByAggregateInput
    _sum?: td_curso_ahbbSumOrderByAggregateInput
  }

  export type td_curso_ahbbScalarWhereWithAggregatesInput = {
    AND?: td_curso_ahbbScalarWhereWithAggregatesInput | td_curso_ahbbScalarWhereWithAggregatesInput[]
    OR?: td_curso_ahbbScalarWhereWithAggregatesInput[]
    NOT?: td_curso_ahbbScalarWhereWithAggregatesInput | td_curso_ahbbScalarWhereWithAggregatesInput[]
    id_curso_ahbb?: IntWithAggregatesFilter<"td_curso_ahbb"> | number
    nombre_ahbb?: StringWithAggregatesFilter<"td_curso_ahbb"> | string
    tematica_ahbb?: StringWithAggregatesFilter<"td_curso_ahbb"> | string
    descripcion_ahbb?: StringNullableWithAggregatesFilter<"td_curso_ahbb"> | string | null
    diasDefinidos_ahbb?: IntWithAggregatesFilter<"td_curso_ahbb"> | number
    horasDefinidas_ahbb?: IntWithAggregatesFilter<"td_curso_ahbb"> | number
    fechaInicio_ahbb?: DateTimeNullableWithAggregatesFilter<"td_curso_ahbb"> | Date | string | null
    fechaFin_ahbb?: DateTimeNullableWithAggregatesFilter<"td_curso_ahbb"> | Date | string | null
    fechaDuracion_ahbb?: DateTimeNullableWithAggregatesFilter<"td_curso_ahbb"> | Date | string | null
    topeEstudiantes_ahbb?: IntNullableWithAggregatesFilter<"td_curso_ahbb"> | number | null
    temarioTexto_ahbb?: StringNullableWithAggregatesFilter<"td_curso_ahbb"> | string | null
    imagenBasePdf_ahbb?: StringNullableWithAggregatesFilter<"td_curso_ahbb"> | string | null
    imagenBloqueada_ahbb?: BoolNullableWithAggregatesFilter<"td_curso_ahbb"> | boolean | null
    isPublished_ahbb?: BoolWithAggregatesFilter<"td_curso_ahbb"> | boolean
    id_usuario_curso_ahbb?: IntWithAggregatesFilter<"td_curso_ahbb"> | number
    id_curso_curso_ahbb?: IntNullableWithAggregatesFilter<"td_curso_ahbb"> | number | null
    creadoEn_ahbb?: DateTimeNullableWithAggregatesFilter<"td_curso_ahbb"> | Date | string | null
    actualizadoEn_ahbb?: DateTimeNullableWithAggregatesFilter<"td_curso_ahbb"> | Date | string | null
  }

  export type td_horario_ahbbWhereInput = {
    AND?: td_horario_ahbbWhereInput | td_horario_ahbbWhereInput[]
    OR?: td_horario_ahbbWhereInput[]
    NOT?: td_horario_ahbbWhereInput | td_horario_ahbbWhereInput[]
    id_horario_ahbb?: IntFilter<"td_horario_ahbb"> | number
    diaSemana_ahbb?: StringFilter<"td_horario_ahbb"> | string
    horaInicio_ahbb?: StringFilter<"td_horario_ahbb"> | string
    horaFin_ahbb?: StringFilter<"td_horario_ahbb"> | string
    id_curso_horario_ahbb?: IntFilter<"td_horario_ahbb"> | number
    curso?: XOR<Td_curso_ahbbScalarRelationFilter, td_curso_ahbbWhereInput>
  }

  export type td_horario_ahbbOrderByWithRelationInput = {
    id_horario_ahbb?: SortOrder
    diaSemana_ahbb?: SortOrder
    horaInicio_ahbb?: SortOrder
    horaFin_ahbb?: SortOrder
    id_curso_horario_ahbb?: SortOrder
    curso?: td_curso_ahbbOrderByWithRelationInput
  }

  export type td_horario_ahbbWhereUniqueInput = Prisma.AtLeast<{
    id_horario_ahbb?: number
    AND?: td_horario_ahbbWhereInput | td_horario_ahbbWhereInput[]
    OR?: td_horario_ahbbWhereInput[]
    NOT?: td_horario_ahbbWhereInput | td_horario_ahbbWhereInput[]
    diaSemana_ahbb?: StringFilter<"td_horario_ahbb"> | string
    horaInicio_ahbb?: StringFilter<"td_horario_ahbb"> | string
    horaFin_ahbb?: StringFilter<"td_horario_ahbb"> | string
    id_curso_horario_ahbb?: IntFilter<"td_horario_ahbb"> | number
    curso?: XOR<Td_curso_ahbbScalarRelationFilter, td_curso_ahbbWhereInput>
  }, "id_horario_ahbb">

  export type td_horario_ahbbOrderByWithAggregationInput = {
    id_horario_ahbb?: SortOrder
    diaSemana_ahbb?: SortOrder
    horaInicio_ahbb?: SortOrder
    horaFin_ahbb?: SortOrder
    id_curso_horario_ahbb?: SortOrder
    _count?: td_horario_ahbbCountOrderByAggregateInput
    _avg?: td_horario_ahbbAvgOrderByAggregateInput
    _max?: td_horario_ahbbMaxOrderByAggregateInput
    _min?: td_horario_ahbbMinOrderByAggregateInput
    _sum?: td_horario_ahbbSumOrderByAggregateInput
  }

  export type td_horario_ahbbScalarWhereWithAggregatesInput = {
    AND?: td_horario_ahbbScalarWhereWithAggregatesInput | td_horario_ahbbScalarWhereWithAggregatesInput[]
    OR?: td_horario_ahbbScalarWhereWithAggregatesInput[]
    NOT?: td_horario_ahbbScalarWhereWithAggregatesInput | td_horario_ahbbScalarWhereWithAggregatesInput[]
    id_horario_ahbb?: IntWithAggregatesFilter<"td_horario_ahbb"> | number
    diaSemana_ahbb?: StringWithAggregatesFilter<"td_horario_ahbb"> | string
    horaInicio_ahbb?: StringWithAggregatesFilter<"td_horario_ahbb"> | string
    horaFin_ahbb?: StringWithAggregatesFilter<"td_horario_ahbb"> | string
    id_curso_horario_ahbb?: IntWithAggregatesFilter<"td_horario_ahbb"> | number
  }

  export type td_inscripcion_ahbbWhereInput = {
    AND?: td_inscripcion_ahbbWhereInput | td_inscripcion_ahbbWhereInput[]
    OR?: td_inscripcion_ahbbWhereInput[]
    NOT?: td_inscripcion_ahbbWhereInput | td_inscripcion_ahbbWhereInput[]
    id_inscripcion_ahbb?: IntFilter<"td_inscripcion_ahbb"> | number
    estatus_ahbb?: StringNullableFilter<"td_inscripcion_ahbb"> | string | null
    intento_ahbb?: IntFilter<"td_inscripcion_ahbb"> | number
    notaFinal_ahbb?: DecimalNullableFilter<"td_inscripcion_ahbb"> | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: StringNullableFilter<"td_inscripcion_ahbb"> | string | null
    id_usuario_inscripcion_ahbb?: IntFilter<"td_inscripcion_ahbb"> | number
    id_curso_inscripcion_ahbb?: IntFilter<"td_inscripcion_ahbb"> | number
    creadoEn_ahbb?: DateTimeNullableFilter<"td_inscripcion_ahbb"> | Date | string | null
    actualizadoEn_ahbb?: DateTimeNullableFilter<"td_inscripcion_ahbb"> | Date | string | null
    alumno?: XOR<Td_usuario_ahbbScalarRelationFilter, td_usuario_ahbbWhereInput>
    curso?: XOR<Td_curso_ahbbScalarRelationFilter, td_curso_ahbbWhereInput>
    certificado?: XOR<Td_certificado_ahbbNullableScalarRelationFilter, td_certificado_ahbbWhereInput> | null
  }

  export type td_inscripcion_ahbbOrderByWithRelationInput = {
    id_inscripcion_ahbb?: SortOrder
    estatus_ahbb?: SortOrderInput | SortOrder
    intento_ahbb?: SortOrder
    notaFinal_ahbb?: SortOrderInput | SortOrder
    observaciones_ahbb?: SortOrderInput | SortOrder
    id_usuario_inscripcion_ahbb?: SortOrder
    id_curso_inscripcion_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrderInput | SortOrder
    actualizadoEn_ahbb?: SortOrderInput | SortOrder
    alumno?: td_usuario_ahbbOrderByWithRelationInput
    curso?: td_curso_ahbbOrderByWithRelationInput
    certificado?: td_certificado_ahbbOrderByWithRelationInput
  }

  export type td_inscripcion_ahbbWhereUniqueInput = Prisma.AtLeast<{
    id_inscripcion_ahbb?: number
    AND?: td_inscripcion_ahbbWhereInput | td_inscripcion_ahbbWhereInput[]
    OR?: td_inscripcion_ahbbWhereInput[]
    NOT?: td_inscripcion_ahbbWhereInput | td_inscripcion_ahbbWhereInput[]
    estatus_ahbb?: StringNullableFilter<"td_inscripcion_ahbb"> | string | null
    intento_ahbb?: IntFilter<"td_inscripcion_ahbb"> | number
    notaFinal_ahbb?: DecimalNullableFilter<"td_inscripcion_ahbb"> | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: StringNullableFilter<"td_inscripcion_ahbb"> | string | null
    id_usuario_inscripcion_ahbb?: IntFilter<"td_inscripcion_ahbb"> | number
    id_curso_inscripcion_ahbb?: IntFilter<"td_inscripcion_ahbb"> | number
    creadoEn_ahbb?: DateTimeNullableFilter<"td_inscripcion_ahbb"> | Date | string | null
    actualizadoEn_ahbb?: DateTimeNullableFilter<"td_inscripcion_ahbb"> | Date | string | null
    alumno?: XOR<Td_usuario_ahbbScalarRelationFilter, td_usuario_ahbbWhereInput>
    curso?: XOR<Td_curso_ahbbScalarRelationFilter, td_curso_ahbbWhereInput>
    certificado?: XOR<Td_certificado_ahbbNullableScalarRelationFilter, td_certificado_ahbbWhereInput> | null
  }, "id_inscripcion_ahbb">

  export type td_inscripcion_ahbbOrderByWithAggregationInput = {
    id_inscripcion_ahbb?: SortOrder
    estatus_ahbb?: SortOrderInput | SortOrder
    intento_ahbb?: SortOrder
    notaFinal_ahbb?: SortOrderInput | SortOrder
    observaciones_ahbb?: SortOrderInput | SortOrder
    id_usuario_inscripcion_ahbb?: SortOrder
    id_curso_inscripcion_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrderInput | SortOrder
    actualizadoEn_ahbb?: SortOrderInput | SortOrder
    _count?: td_inscripcion_ahbbCountOrderByAggregateInput
    _avg?: td_inscripcion_ahbbAvgOrderByAggregateInput
    _max?: td_inscripcion_ahbbMaxOrderByAggregateInput
    _min?: td_inscripcion_ahbbMinOrderByAggregateInput
    _sum?: td_inscripcion_ahbbSumOrderByAggregateInput
  }

  export type td_inscripcion_ahbbScalarWhereWithAggregatesInput = {
    AND?: td_inscripcion_ahbbScalarWhereWithAggregatesInput | td_inscripcion_ahbbScalarWhereWithAggregatesInput[]
    OR?: td_inscripcion_ahbbScalarWhereWithAggregatesInput[]
    NOT?: td_inscripcion_ahbbScalarWhereWithAggregatesInput | td_inscripcion_ahbbScalarWhereWithAggregatesInput[]
    id_inscripcion_ahbb?: IntWithAggregatesFilter<"td_inscripcion_ahbb"> | number
    estatus_ahbb?: StringNullableWithAggregatesFilter<"td_inscripcion_ahbb"> | string | null
    intento_ahbb?: IntWithAggregatesFilter<"td_inscripcion_ahbb"> | number
    notaFinal_ahbb?: DecimalNullableWithAggregatesFilter<"td_inscripcion_ahbb"> | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: StringNullableWithAggregatesFilter<"td_inscripcion_ahbb"> | string | null
    id_usuario_inscripcion_ahbb?: IntWithAggregatesFilter<"td_inscripcion_ahbb"> | number
    id_curso_inscripcion_ahbb?: IntWithAggregatesFilter<"td_inscripcion_ahbb"> | number
    creadoEn_ahbb?: DateTimeNullableWithAggregatesFilter<"td_inscripcion_ahbb"> | Date | string | null
    actualizadoEn_ahbb?: DateTimeNullableWithAggregatesFilter<"td_inscripcion_ahbb"> | Date | string | null
  }

  export type td_certificado_ahbbWhereInput = {
    AND?: td_certificado_ahbbWhereInput | td_certificado_ahbbWhereInput[]
    OR?: td_certificado_ahbbWhereInput[]
    NOT?: td_certificado_ahbbWhereInput | td_certificado_ahbbWhereInput[]
    id_certificado_ahbb?: IntFilter<"td_certificado_ahbb"> | number
    codigoQrUrl_ahbb?: StringFilter<"td_certificado_ahbb"> | string
    id_inscripcion_certificado_ahbb?: IntFilter<"td_certificado_ahbb"> | number
    creadoEn_ahbb?: DateTimeNullableFilter<"td_certificado_ahbb"> | Date | string | null
    inscripcion?: XOR<Td_inscripcion_ahbbScalarRelationFilter, td_inscripcion_ahbbWhereInput>
  }

  export type td_certificado_ahbbOrderByWithRelationInput = {
    id_certificado_ahbb?: SortOrder
    codigoQrUrl_ahbb?: SortOrder
    id_inscripcion_certificado_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrderInput | SortOrder
    inscripcion?: td_inscripcion_ahbbOrderByWithRelationInput
  }

  export type td_certificado_ahbbWhereUniqueInput = Prisma.AtLeast<{
    id_certificado_ahbb?: number
    id_inscripcion_certificado_ahbb?: number
    AND?: td_certificado_ahbbWhereInput | td_certificado_ahbbWhereInput[]
    OR?: td_certificado_ahbbWhereInput[]
    NOT?: td_certificado_ahbbWhereInput | td_certificado_ahbbWhereInput[]
    codigoQrUrl_ahbb?: StringFilter<"td_certificado_ahbb"> | string
    creadoEn_ahbb?: DateTimeNullableFilter<"td_certificado_ahbb"> | Date | string | null
    inscripcion?: XOR<Td_inscripcion_ahbbScalarRelationFilter, td_inscripcion_ahbbWhereInput>
  }, "id_certificado_ahbb" | "id_inscripcion_certificado_ahbb">

  export type td_certificado_ahbbOrderByWithAggregationInput = {
    id_certificado_ahbb?: SortOrder
    codigoQrUrl_ahbb?: SortOrder
    id_inscripcion_certificado_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrderInput | SortOrder
    _count?: td_certificado_ahbbCountOrderByAggregateInput
    _avg?: td_certificado_ahbbAvgOrderByAggregateInput
    _max?: td_certificado_ahbbMaxOrderByAggregateInput
    _min?: td_certificado_ahbbMinOrderByAggregateInput
    _sum?: td_certificado_ahbbSumOrderByAggregateInput
  }

  export type td_certificado_ahbbScalarWhereWithAggregatesInput = {
    AND?: td_certificado_ahbbScalarWhereWithAggregatesInput | td_certificado_ahbbScalarWhereWithAggregatesInput[]
    OR?: td_certificado_ahbbScalarWhereWithAggregatesInput[]
    NOT?: td_certificado_ahbbScalarWhereWithAggregatesInput | td_certificado_ahbbScalarWhereWithAggregatesInput[]
    id_certificado_ahbb?: IntWithAggregatesFilter<"td_certificado_ahbb"> | number
    codigoQrUrl_ahbb?: StringWithAggregatesFilter<"td_certificado_ahbb"> | string
    id_inscripcion_certificado_ahbb?: IntWithAggregatesFilter<"td_certificado_ahbb"> | number
    creadoEn_ahbb?: DateTimeNullableWithAggregatesFilter<"td_certificado_ahbb"> | Date | string | null
  }

  export type td_configuracionglobal_ahbbWhereInput = {
    AND?: td_configuracionglobal_ahbbWhereInput | td_configuracionglobal_ahbbWhereInput[]
    OR?: td_configuracionglobal_ahbbWhereInput[]
    NOT?: td_configuracionglobal_ahbbWhereInput | td_configuracionglobal_ahbbWhereInput[]
    id_configuracionglobal_ahbb?: IntFilter<"td_configuracionglobal_ahbb"> | number
    imagenCertificadoGeneral_ahbb?: StringNullableFilter<"td_configuracionglobal_ahbb"> | string | null
  }

  export type td_configuracionglobal_ahbbOrderByWithRelationInput = {
    id_configuracionglobal_ahbb?: SortOrder
    imagenCertificadoGeneral_ahbb?: SortOrderInput | SortOrder
  }

  export type td_configuracionglobal_ahbbWhereUniqueInput = Prisma.AtLeast<{
    id_configuracionglobal_ahbb?: number
    AND?: td_configuracionglobal_ahbbWhereInput | td_configuracionglobal_ahbbWhereInput[]
    OR?: td_configuracionglobal_ahbbWhereInput[]
    NOT?: td_configuracionglobal_ahbbWhereInput | td_configuracionglobal_ahbbWhereInput[]
    imagenCertificadoGeneral_ahbb?: StringNullableFilter<"td_configuracionglobal_ahbb"> | string | null
  }, "id_configuracionglobal_ahbb">

  export type td_configuracionglobal_ahbbOrderByWithAggregationInput = {
    id_configuracionglobal_ahbb?: SortOrder
    imagenCertificadoGeneral_ahbb?: SortOrderInput | SortOrder
    _count?: td_configuracionglobal_ahbbCountOrderByAggregateInput
    _avg?: td_configuracionglobal_ahbbAvgOrderByAggregateInput
    _max?: td_configuracionglobal_ahbbMaxOrderByAggregateInput
    _min?: td_configuracionglobal_ahbbMinOrderByAggregateInput
    _sum?: td_configuracionglobal_ahbbSumOrderByAggregateInput
  }

  export type td_configuracionglobal_ahbbScalarWhereWithAggregatesInput = {
    AND?: td_configuracionglobal_ahbbScalarWhereWithAggregatesInput | td_configuracionglobal_ahbbScalarWhereWithAggregatesInput[]
    OR?: td_configuracionglobal_ahbbScalarWhereWithAggregatesInput[]
    NOT?: td_configuracionglobal_ahbbScalarWhereWithAggregatesInput | td_configuracionglobal_ahbbScalarWhereWithAggregatesInput[]
    id_configuracionglobal_ahbb?: IntWithAggregatesFilter<"td_configuracionglobal_ahbb"> | number
    imagenCertificadoGeneral_ahbb?: StringNullableWithAggregatesFilter<"td_configuracionglobal_ahbb"> | string | null
  }

  export type td_auditoria_aprobacion_ahbbWhereInput = {
    AND?: td_auditoria_aprobacion_ahbbWhereInput | td_auditoria_aprobacion_ahbbWhereInput[]
    OR?: td_auditoria_aprobacion_ahbbWhereInput[]
    NOT?: td_auditoria_aprobacion_ahbbWhereInput | td_auditoria_aprobacion_ahbbWhereInput[]
    id_auditoria_aprobacion_ahbb?: IntFilter<"td_auditoria_aprobacion_ahbb"> | number
    tipoOperacion_ahbb?: StringFilter<"td_auditoria_aprobacion_ahbb"> | string
    referenciaOperacion_ahbb?: StringFilter<"td_auditoria_aprobacion_ahbb"> | string
    observacion_ahbb?: StringNullableFilter<"td_auditoria_aprobacion_ahbb"> | string | null
    id_usuario_auditado_ahbb?: IntFilter<"td_auditoria_aprobacion_ahbb"> | number
    id_aprobador_ahbb?: IntFilter<"td_auditoria_aprobacion_ahbb"> | number
    creadoEn_ahbb?: DateTimeFilter<"td_auditoria_aprobacion_ahbb"> | Date | string
    usuarioAuditado_ahbb?: XOR<Td_usuario_ahbbScalarRelationFilter, td_usuario_ahbbWhereInput>
    aprobador_ahbb?: XOR<Td_usuario_ahbbScalarRelationFilter, td_usuario_ahbbWhereInput>
  }

  export type td_auditoria_aprobacion_ahbbOrderByWithRelationInput = {
    id_auditoria_aprobacion_ahbb?: SortOrder
    tipoOperacion_ahbb?: SortOrder
    referenciaOperacion_ahbb?: SortOrder
    observacion_ahbb?: SortOrderInput | SortOrder
    id_usuario_auditado_ahbb?: SortOrder
    id_aprobador_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
    usuarioAuditado_ahbb?: td_usuario_ahbbOrderByWithRelationInput
    aprobador_ahbb?: td_usuario_ahbbOrderByWithRelationInput
  }

  export type td_auditoria_aprobacion_ahbbWhereUniqueInput = Prisma.AtLeast<{
    id_auditoria_aprobacion_ahbb?: number
    AND?: td_auditoria_aprobacion_ahbbWhereInput | td_auditoria_aprobacion_ahbbWhereInput[]
    OR?: td_auditoria_aprobacion_ahbbWhereInput[]
    NOT?: td_auditoria_aprobacion_ahbbWhereInput | td_auditoria_aprobacion_ahbbWhereInput[]
    tipoOperacion_ahbb?: StringFilter<"td_auditoria_aprobacion_ahbb"> | string
    referenciaOperacion_ahbb?: StringFilter<"td_auditoria_aprobacion_ahbb"> | string
    observacion_ahbb?: StringNullableFilter<"td_auditoria_aprobacion_ahbb"> | string | null
    id_usuario_auditado_ahbb?: IntFilter<"td_auditoria_aprobacion_ahbb"> | number
    id_aprobador_ahbb?: IntFilter<"td_auditoria_aprobacion_ahbb"> | number
    creadoEn_ahbb?: DateTimeFilter<"td_auditoria_aprobacion_ahbb"> | Date | string
    usuarioAuditado_ahbb?: XOR<Td_usuario_ahbbScalarRelationFilter, td_usuario_ahbbWhereInput>
    aprobador_ahbb?: XOR<Td_usuario_ahbbScalarRelationFilter, td_usuario_ahbbWhereInput>
  }, "id_auditoria_aprobacion_ahbb">

  export type td_auditoria_aprobacion_ahbbOrderByWithAggregationInput = {
    id_auditoria_aprobacion_ahbb?: SortOrder
    tipoOperacion_ahbb?: SortOrder
    referenciaOperacion_ahbb?: SortOrder
    observacion_ahbb?: SortOrderInput | SortOrder
    id_usuario_auditado_ahbb?: SortOrder
    id_aprobador_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
    _count?: td_auditoria_aprobacion_ahbbCountOrderByAggregateInput
    _avg?: td_auditoria_aprobacion_ahbbAvgOrderByAggregateInput
    _max?: td_auditoria_aprobacion_ahbbMaxOrderByAggregateInput
    _min?: td_auditoria_aprobacion_ahbbMinOrderByAggregateInput
    _sum?: td_auditoria_aprobacion_ahbbSumOrderByAggregateInput
  }

  export type td_auditoria_aprobacion_ahbbScalarWhereWithAggregatesInput = {
    AND?: td_auditoria_aprobacion_ahbbScalarWhereWithAggregatesInput | td_auditoria_aprobacion_ahbbScalarWhereWithAggregatesInput[]
    OR?: td_auditoria_aprobacion_ahbbScalarWhereWithAggregatesInput[]
    NOT?: td_auditoria_aprobacion_ahbbScalarWhereWithAggregatesInput | td_auditoria_aprobacion_ahbbScalarWhereWithAggregatesInput[]
    id_auditoria_aprobacion_ahbb?: IntWithAggregatesFilter<"td_auditoria_aprobacion_ahbb"> | number
    tipoOperacion_ahbb?: StringWithAggregatesFilter<"td_auditoria_aprobacion_ahbb"> | string
    referenciaOperacion_ahbb?: StringWithAggregatesFilter<"td_auditoria_aprobacion_ahbb"> | string
    observacion_ahbb?: StringNullableWithAggregatesFilter<"td_auditoria_aprobacion_ahbb"> | string | null
    id_usuario_auditado_ahbb?: IntWithAggregatesFilter<"td_auditoria_aprobacion_ahbb"> | number
    id_aprobador_ahbb?: IntWithAggregatesFilter<"td_auditoria_aprobacion_ahbb"> | number
    creadoEn_ahbb?: DateTimeWithAggregatesFilter<"td_auditoria_aprobacion_ahbb"> | Date | string
  }

  export type td_usuario_ahbbCreateInput = {
    cedula_ahbb: string
    nombre_ahbb: string
    apellido_ahbb: string
    correo_ahbb: string
    contrasena_ahbb: string
    rol_ahbb?: string | null
    firmaDigital_ahbb?: string | null
    estadoCuenta_ahbb?: string
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: string | null
    aprobadoPorUsuarioId_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    cursos?: td_curso_ahbbCreateNestedManyWithoutProfesorInput
    inscripciones?: td_inscripcion_ahbbCreateNestedManyWithoutAlumnoInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbCreateNestedManyWithoutAprobador_ahbbInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbCreateNestedManyWithoutUsuarioAuditado_ahbbInput
  }

  export type td_usuario_ahbbUncheckedCreateInput = {
    id_usuario_ahbb?: number
    cedula_ahbb: string
    nombre_ahbb: string
    apellido_ahbb: string
    correo_ahbb: string
    contrasena_ahbb: string
    rol_ahbb?: string | null
    firmaDigital_ahbb?: string | null
    estadoCuenta_ahbb?: string
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: string | null
    aprobadoPorUsuarioId_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    cursos?: td_curso_ahbbUncheckedCreateNestedManyWithoutProfesorInput
    inscripciones?: td_inscripcion_ahbbUncheckedCreateNestedManyWithoutAlumnoInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbUncheckedCreateNestedManyWithoutAprobador_ahbbInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbUncheckedCreateNestedManyWithoutUsuarioAuditado_ahbbInput
  }

  export type td_usuario_ahbbUpdateInput = {
    cedula_ahbb?: StringFieldUpdateOperationsInput | string
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    apellido_ahbb?: StringFieldUpdateOperationsInput | string
    correo_ahbb?: StringFieldUpdateOperationsInput | string
    contrasena_ahbb?: StringFieldUpdateOperationsInput | string
    rol_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    firmaDigital_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCuenta_ahbb?: StringFieldUpdateOperationsInput | string
    requiereCambioContrasena_ahbb?: BoolFieldUpdateOperationsInput | boolean
    referenciaPagoMovil_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    aprobadoPorUsuarioId_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: td_curso_ahbbUpdateManyWithoutProfesorNestedInput
    inscripciones?: td_inscripcion_ahbbUpdateManyWithoutAlumnoNestedInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbUpdateManyWithoutAprobador_ahbbNestedInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbUpdateManyWithoutUsuarioAuditado_ahbbNestedInput
  }

  export type td_usuario_ahbbUncheckedUpdateInput = {
    id_usuario_ahbb?: IntFieldUpdateOperationsInput | number
    cedula_ahbb?: StringFieldUpdateOperationsInput | string
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    apellido_ahbb?: StringFieldUpdateOperationsInput | string
    correo_ahbb?: StringFieldUpdateOperationsInput | string
    contrasena_ahbb?: StringFieldUpdateOperationsInput | string
    rol_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    firmaDigital_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCuenta_ahbb?: StringFieldUpdateOperationsInput | string
    requiereCambioContrasena_ahbb?: BoolFieldUpdateOperationsInput | boolean
    referenciaPagoMovil_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    aprobadoPorUsuarioId_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: td_curso_ahbbUncheckedUpdateManyWithoutProfesorNestedInput
    inscripciones?: td_inscripcion_ahbbUncheckedUpdateManyWithoutAlumnoNestedInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutAprobador_ahbbNestedInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutUsuarioAuditado_ahbbNestedInput
  }

  export type td_usuario_ahbbCreateManyInput = {
    id_usuario_ahbb?: number
    cedula_ahbb: string
    nombre_ahbb: string
    apellido_ahbb: string
    correo_ahbb: string
    contrasena_ahbb: string
    rol_ahbb?: string | null
    firmaDigital_ahbb?: string | null
    estadoCuenta_ahbb?: string
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: string | null
    aprobadoPorUsuarioId_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
  }

  export type td_usuario_ahbbUpdateManyMutationInput = {
    cedula_ahbb?: StringFieldUpdateOperationsInput | string
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    apellido_ahbb?: StringFieldUpdateOperationsInput | string
    correo_ahbb?: StringFieldUpdateOperationsInput | string
    contrasena_ahbb?: StringFieldUpdateOperationsInput | string
    rol_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    firmaDigital_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCuenta_ahbb?: StringFieldUpdateOperationsInput | string
    requiereCambioContrasena_ahbb?: BoolFieldUpdateOperationsInput | boolean
    referenciaPagoMovil_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    aprobadoPorUsuarioId_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_usuario_ahbbUncheckedUpdateManyInput = {
    id_usuario_ahbb?: IntFieldUpdateOperationsInput | number
    cedula_ahbb?: StringFieldUpdateOperationsInput | string
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    apellido_ahbb?: StringFieldUpdateOperationsInput | string
    correo_ahbb?: StringFieldUpdateOperationsInput | string
    contrasena_ahbb?: StringFieldUpdateOperationsInput | string
    rol_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    firmaDigital_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCuenta_ahbb?: StringFieldUpdateOperationsInput | string
    requiereCambioContrasena_ahbb?: BoolFieldUpdateOperationsInput | boolean
    referenciaPagoMovil_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    aprobadoPorUsuarioId_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_curso_ahbbCreateInput = {
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    profesor: td_usuario_ahbbCreateNestedOneWithoutCursosInput
    prelacion?: td_curso_ahbbCreateNestedOneWithoutPrelacionesInput
    prelaciones?: td_curso_ahbbCreateNestedManyWithoutPrelacionInput
    horarios?: td_horario_ahbbCreateNestedManyWithoutCursoInput
    inscripciones?: td_inscripcion_ahbbCreateNestedManyWithoutCursoInput
  }

  export type td_curso_ahbbUncheckedCreateInput = {
    id_curso_ahbb?: number
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    id_usuario_curso_ahbb: number
    id_curso_curso_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    prelaciones?: td_curso_ahbbUncheckedCreateNestedManyWithoutPrelacionInput
    horarios?: td_horario_ahbbUncheckedCreateNestedManyWithoutCursoInput
    inscripciones?: td_inscripcion_ahbbUncheckedCreateNestedManyWithoutCursoInput
  }

  export type td_curso_ahbbUpdateInput = {
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profesor?: td_usuario_ahbbUpdateOneRequiredWithoutCursosNestedInput
    prelacion?: td_curso_ahbbUpdateOneWithoutPrelacionesNestedInput
    prelaciones?: td_curso_ahbbUpdateManyWithoutPrelacionNestedInput
    horarios?: td_horario_ahbbUpdateManyWithoutCursoNestedInput
    inscripciones?: td_inscripcion_ahbbUpdateManyWithoutCursoNestedInput
  }

  export type td_curso_ahbbUncheckedUpdateInput = {
    id_curso_ahbb?: IntFieldUpdateOperationsInput | number
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    id_usuario_curso_ahbb?: IntFieldUpdateOperationsInput | number
    id_curso_curso_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelaciones?: td_curso_ahbbUncheckedUpdateManyWithoutPrelacionNestedInput
    horarios?: td_horario_ahbbUncheckedUpdateManyWithoutCursoNestedInput
    inscripciones?: td_inscripcion_ahbbUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type td_curso_ahbbCreateManyInput = {
    id_curso_ahbb?: number
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    id_usuario_curso_ahbb: number
    id_curso_curso_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
  }

  export type td_curso_ahbbUpdateManyMutationInput = {
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_curso_ahbbUncheckedUpdateManyInput = {
    id_curso_ahbb?: IntFieldUpdateOperationsInput | number
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    id_usuario_curso_ahbb?: IntFieldUpdateOperationsInput | number
    id_curso_curso_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_horario_ahbbCreateInput = {
    diaSemana_ahbb: string
    horaInicio_ahbb: string
    horaFin_ahbb: string
    curso: td_curso_ahbbCreateNestedOneWithoutHorariosInput
  }

  export type td_horario_ahbbUncheckedCreateInput = {
    id_horario_ahbb?: number
    diaSemana_ahbb: string
    horaInicio_ahbb: string
    horaFin_ahbb: string
    id_curso_horario_ahbb: number
  }

  export type td_horario_ahbbUpdateInput = {
    diaSemana_ahbb?: StringFieldUpdateOperationsInput | string
    horaInicio_ahbb?: StringFieldUpdateOperationsInput | string
    horaFin_ahbb?: StringFieldUpdateOperationsInput | string
    curso?: td_curso_ahbbUpdateOneRequiredWithoutHorariosNestedInput
  }

  export type td_horario_ahbbUncheckedUpdateInput = {
    id_horario_ahbb?: IntFieldUpdateOperationsInput | number
    diaSemana_ahbb?: StringFieldUpdateOperationsInput | string
    horaInicio_ahbb?: StringFieldUpdateOperationsInput | string
    horaFin_ahbb?: StringFieldUpdateOperationsInput | string
    id_curso_horario_ahbb?: IntFieldUpdateOperationsInput | number
  }

  export type td_horario_ahbbCreateManyInput = {
    id_horario_ahbb?: number
    diaSemana_ahbb: string
    horaInicio_ahbb: string
    horaFin_ahbb: string
    id_curso_horario_ahbb: number
  }

  export type td_horario_ahbbUpdateManyMutationInput = {
    diaSemana_ahbb?: StringFieldUpdateOperationsInput | string
    horaInicio_ahbb?: StringFieldUpdateOperationsInput | string
    horaFin_ahbb?: StringFieldUpdateOperationsInput | string
  }

  export type td_horario_ahbbUncheckedUpdateManyInput = {
    id_horario_ahbb?: IntFieldUpdateOperationsInput | number
    diaSemana_ahbb?: StringFieldUpdateOperationsInput | string
    horaInicio_ahbb?: StringFieldUpdateOperationsInput | string
    horaFin_ahbb?: StringFieldUpdateOperationsInput | string
    id_curso_horario_ahbb?: IntFieldUpdateOperationsInput | number
  }

  export type td_inscripcion_ahbbCreateInput = {
    estatus_ahbb?: string | null
    intento_ahbb?: number
    notaFinal_ahbb?: Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: string | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    alumno: td_usuario_ahbbCreateNestedOneWithoutInscripcionesInput
    curso: td_curso_ahbbCreateNestedOneWithoutInscripcionesInput
    certificado?: td_certificado_ahbbCreateNestedOneWithoutInscripcionInput
  }

  export type td_inscripcion_ahbbUncheckedCreateInput = {
    id_inscripcion_ahbb?: number
    estatus_ahbb?: string | null
    intento_ahbb?: number
    notaFinal_ahbb?: Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: string | null
    id_usuario_inscripcion_ahbb: number
    id_curso_inscripcion_ahbb: number
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    certificado?: td_certificado_ahbbUncheckedCreateNestedOneWithoutInscripcionInput
  }

  export type td_inscripcion_ahbbUpdateInput = {
    estatus_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    intento_ahbb?: IntFieldUpdateOperationsInput | number
    notaFinal_ahbb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alumno?: td_usuario_ahbbUpdateOneRequiredWithoutInscripcionesNestedInput
    curso?: td_curso_ahbbUpdateOneRequiredWithoutInscripcionesNestedInput
    certificado?: td_certificado_ahbbUpdateOneWithoutInscripcionNestedInput
  }

  export type td_inscripcion_ahbbUncheckedUpdateInput = {
    id_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    estatus_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    intento_ahbb?: IntFieldUpdateOperationsInput | number
    notaFinal_ahbb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    id_curso_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificado?: td_certificado_ahbbUncheckedUpdateOneWithoutInscripcionNestedInput
  }

  export type td_inscripcion_ahbbCreateManyInput = {
    id_inscripcion_ahbb?: number
    estatus_ahbb?: string | null
    intento_ahbb?: number
    notaFinal_ahbb?: Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: string | null
    id_usuario_inscripcion_ahbb: number
    id_curso_inscripcion_ahbb: number
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
  }

  export type td_inscripcion_ahbbUpdateManyMutationInput = {
    estatus_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    intento_ahbb?: IntFieldUpdateOperationsInput | number
    notaFinal_ahbb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_inscripcion_ahbbUncheckedUpdateManyInput = {
    id_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    estatus_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    intento_ahbb?: IntFieldUpdateOperationsInput | number
    notaFinal_ahbb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    id_curso_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_certificado_ahbbCreateInput = {
    codigoQrUrl_ahbb: string
    creadoEn_ahbb?: Date | string | null
    inscripcion: td_inscripcion_ahbbCreateNestedOneWithoutCertificadoInput
  }

  export type td_certificado_ahbbUncheckedCreateInput = {
    id_certificado_ahbb?: number
    codigoQrUrl_ahbb: string
    id_inscripcion_certificado_ahbb: number
    creadoEn_ahbb?: Date | string | null
  }

  export type td_certificado_ahbbUpdateInput = {
    codigoQrUrl_ahbb?: StringFieldUpdateOperationsInput | string
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inscripcion?: td_inscripcion_ahbbUpdateOneRequiredWithoutCertificadoNestedInput
  }

  export type td_certificado_ahbbUncheckedUpdateInput = {
    id_certificado_ahbb?: IntFieldUpdateOperationsInput | number
    codigoQrUrl_ahbb?: StringFieldUpdateOperationsInput | string
    id_inscripcion_certificado_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_certificado_ahbbCreateManyInput = {
    id_certificado_ahbb?: number
    codigoQrUrl_ahbb: string
    id_inscripcion_certificado_ahbb: number
    creadoEn_ahbb?: Date | string | null
  }

  export type td_certificado_ahbbUpdateManyMutationInput = {
    codigoQrUrl_ahbb?: StringFieldUpdateOperationsInput | string
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_certificado_ahbbUncheckedUpdateManyInput = {
    id_certificado_ahbb?: IntFieldUpdateOperationsInput | number
    codigoQrUrl_ahbb?: StringFieldUpdateOperationsInput | string
    id_inscripcion_certificado_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_configuracionglobal_ahbbCreateInput = {
    imagenCertificadoGeneral_ahbb?: string | null
  }

  export type td_configuracionglobal_ahbbUncheckedCreateInput = {
    id_configuracionglobal_ahbb?: number
    imagenCertificadoGeneral_ahbb?: string | null
  }

  export type td_configuracionglobal_ahbbUpdateInput = {
    imagenCertificadoGeneral_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type td_configuracionglobal_ahbbUncheckedUpdateInput = {
    id_configuracionglobal_ahbb?: IntFieldUpdateOperationsInput | number
    imagenCertificadoGeneral_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type td_configuracionglobal_ahbbCreateManyInput = {
    id_configuracionglobal_ahbb?: number
    imagenCertificadoGeneral_ahbb?: string | null
  }

  export type td_configuracionglobal_ahbbUpdateManyMutationInput = {
    imagenCertificadoGeneral_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type td_configuracionglobal_ahbbUncheckedUpdateManyInput = {
    id_configuracionglobal_ahbb?: IntFieldUpdateOperationsInput | number
    imagenCertificadoGeneral_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type td_auditoria_aprobacion_ahbbCreateInput = {
    tipoOperacion_ahbb: string
    referenciaOperacion_ahbb: string
    observacion_ahbb?: string | null
    creadoEn_ahbb?: Date | string
    usuarioAuditado_ahbb: td_usuario_ahbbCreateNestedOneWithoutAuditoriasUsuario_ahbbInput
    aprobador_ahbb: td_usuario_ahbbCreateNestedOneWithoutAuditoriasAprobadas_ahbbInput
  }

  export type td_auditoria_aprobacion_ahbbUncheckedCreateInput = {
    id_auditoria_aprobacion_ahbb?: number
    tipoOperacion_ahbb: string
    referenciaOperacion_ahbb: string
    observacion_ahbb?: string | null
    id_usuario_auditado_ahbb: number
    id_aprobador_ahbb: number
    creadoEn_ahbb?: Date | string
  }

  export type td_auditoria_aprobacion_ahbbUpdateInput = {
    tipoOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    referenciaOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    observacion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn_ahbb?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioAuditado_ahbb?: td_usuario_ahbbUpdateOneRequiredWithoutAuditoriasUsuario_ahbbNestedInput
    aprobador_ahbb?: td_usuario_ahbbUpdateOneRequiredWithoutAuditoriasAprobadas_ahbbNestedInput
  }

  export type td_auditoria_aprobacion_ahbbUncheckedUpdateInput = {
    id_auditoria_aprobacion_ahbb?: IntFieldUpdateOperationsInput | number
    tipoOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    referenciaOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    observacion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_auditado_ahbb?: IntFieldUpdateOperationsInput | number
    id_aprobador_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type td_auditoria_aprobacion_ahbbCreateManyInput = {
    id_auditoria_aprobacion_ahbb?: number
    tipoOperacion_ahbb: string
    referenciaOperacion_ahbb: string
    observacion_ahbb?: string | null
    id_usuario_auditado_ahbb: number
    id_aprobador_ahbb: number
    creadoEn_ahbb?: Date | string
  }

  export type td_auditoria_aprobacion_ahbbUpdateManyMutationInput = {
    tipoOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    referenciaOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    observacion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn_ahbb?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type td_auditoria_aprobacion_ahbbUncheckedUpdateManyInput = {
    id_auditoria_aprobacion_ahbb?: IntFieldUpdateOperationsInput | number
    tipoOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    referenciaOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    observacion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_auditado_ahbb?: IntFieldUpdateOperationsInput | number
    id_aprobador_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Td_curso_ahbbListRelationFilter = {
    every?: td_curso_ahbbWhereInput
    some?: td_curso_ahbbWhereInput
    none?: td_curso_ahbbWhereInput
  }

  export type Td_inscripcion_ahbbListRelationFilter = {
    every?: td_inscripcion_ahbbWhereInput
    some?: td_inscripcion_ahbbWhereInput
    none?: td_inscripcion_ahbbWhereInput
  }

  export type Td_auditoria_aprobacion_ahbbListRelationFilter = {
    every?: td_auditoria_aprobacion_ahbbWhereInput
    some?: td_auditoria_aprobacion_ahbbWhereInput
    none?: td_auditoria_aprobacion_ahbbWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type td_curso_ahbbOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type td_inscripcion_ahbbOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type td_auditoria_aprobacion_ahbbOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type td_usuario_ahbbCountOrderByAggregateInput = {
    id_usuario_ahbb?: SortOrder
    cedula_ahbb?: SortOrder
    nombre_ahbb?: SortOrder
    apellido_ahbb?: SortOrder
    correo_ahbb?: SortOrder
    contrasena_ahbb?: SortOrder
    rol_ahbb?: SortOrder
    firmaDigital_ahbb?: SortOrder
    estadoCuenta_ahbb?: SortOrder
    requiereCambioContrasena_ahbb?: SortOrder
    referenciaPagoMovil_ahbb?: SortOrder
    aprobadoPorUsuarioId_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
    actualizadoEn_ahbb?: SortOrder
  }

  export type td_usuario_ahbbAvgOrderByAggregateInput = {
    id_usuario_ahbb?: SortOrder
    aprobadoPorUsuarioId_ahbb?: SortOrder
  }

  export type td_usuario_ahbbMaxOrderByAggregateInput = {
    id_usuario_ahbb?: SortOrder
    cedula_ahbb?: SortOrder
    nombre_ahbb?: SortOrder
    apellido_ahbb?: SortOrder
    correo_ahbb?: SortOrder
    contrasena_ahbb?: SortOrder
    rol_ahbb?: SortOrder
    firmaDigital_ahbb?: SortOrder
    estadoCuenta_ahbb?: SortOrder
    requiereCambioContrasena_ahbb?: SortOrder
    referenciaPagoMovil_ahbb?: SortOrder
    aprobadoPorUsuarioId_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
    actualizadoEn_ahbb?: SortOrder
  }

  export type td_usuario_ahbbMinOrderByAggregateInput = {
    id_usuario_ahbb?: SortOrder
    cedula_ahbb?: SortOrder
    nombre_ahbb?: SortOrder
    apellido_ahbb?: SortOrder
    correo_ahbb?: SortOrder
    contrasena_ahbb?: SortOrder
    rol_ahbb?: SortOrder
    firmaDigital_ahbb?: SortOrder
    estadoCuenta_ahbb?: SortOrder
    requiereCambioContrasena_ahbb?: SortOrder
    referenciaPagoMovil_ahbb?: SortOrder
    aprobadoPorUsuarioId_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
    actualizadoEn_ahbb?: SortOrder
  }

  export type td_usuario_ahbbSumOrderByAggregateInput = {
    id_usuario_ahbb?: SortOrder
    aprobadoPorUsuarioId_ahbb?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Td_usuario_ahbbScalarRelationFilter = {
    is?: td_usuario_ahbbWhereInput
    isNot?: td_usuario_ahbbWhereInput
  }

  export type Td_curso_ahbbNullableScalarRelationFilter = {
    is?: td_curso_ahbbWhereInput | null
    isNot?: td_curso_ahbbWhereInput | null
  }

  export type Td_horario_ahbbListRelationFilter = {
    every?: td_horario_ahbbWhereInput
    some?: td_horario_ahbbWhereInput
    none?: td_horario_ahbbWhereInput
  }

  export type td_horario_ahbbOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type td_curso_ahbbCountOrderByAggregateInput = {
    id_curso_ahbb?: SortOrder
    nombre_ahbb?: SortOrder
    tematica_ahbb?: SortOrder
    descripcion_ahbb?: SortOrder
    diasDefinidos_ahbb?: SortOrder
    horasDefinidas_ahbb?: SortOrder
    fechaInicio_ahbb?: SortOrder
    fechaFin_ahbb?: SortOrder
    fechaDuracion_ahbb?: SortOrder
    topeEstudiantes_ahbb?: SortOrder
    temarioTexto_ahbb?: SortOrder
    imagenBasePdf_ahbb?: SortOrder
    imagenBloqueada_ahbb?: SortOrder
    isPublished_ahbb?: SortOrder
    id_usuario_curso_ahbb?: SortOrder
    id_curso_curso_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
    actualizadoEn_ahbb?: SortOrder
  }

  export type td_curso_ahbbAvgOrderByAggregateInput = {
    id_curso_ahbb?: SortOrder
    diasDefinidos_ahbb?: SortOrder
    horasDefinidas_ahbb?: SortOrder
    topeEstudiantes_ahbb?: SortOrder
    id_usuario_curso_ahbb?: SortOrder
    id_curso_curso_ahbb?: SortOrder
  }

  export type td_curso_ahbbMaxOrderByAggregateInput = {
    id_curso_ahbb?: SortOrder
    nombre_ahbb?: SortOrder
    tematica_ahbb?: SortOrder
    descripcion_ahbb?: SortOrder
    diasDefinidos_ahbb?: SortOrder
    horasDefinidas_ahbb?: SortOrder
    fechaInicio_ahbb?: SortOrder
    fechaFin_ahbb?: SortOrder
    fechaDuracion_ahbb?: SortOrder
    topeEstudiantes_ahbb?: SortOrder
    temarioTexto_ahbb?: SortOrder
    imagenBasePdf_ahbb?: SortOrder
    imagenBloqueada_ahbb?: SortOrder
    isPublished_ahbb?: SortOrder
    id_usuario_curso_ahbb?: SortOrder
    id_curso_curso_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
    actualizadoEn_ahbb?: SortOrder
  }

  export type td_curso_ahbbMinOrderByAggregateInput = {
    id_curso_ahbb?: SortOrder
    nombre_ahbb?: SortOrder
    tematica_ahbb?: SortOrder
    descripcion_ahbb?: SortOrder
    diasDefinidos_ahbb?: SortOrder
    horasDefinidas_ahbb?: SortOrder
    fechaInicio_ahbb?: SortOrder
    fechaFin_ahbb?: SortOrder
    fechaDuracion_ahbb?: SortOrder
    topeEstudiantes_ahbb?: SortOrder
    temarioTexto_ahbb?: SortOrder
    imagenBasePdf_ahbb?: SortOrder
    imagenBloqueada_ahbb?: SortOrder
    isPublished_ahbb?: SortOrder
    id_usuario_curso_ahbb?: SortOrder
    id_curso_curso_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
    actualizadoEn_ahbb?: SortOrder
  }

  export type td_curso_ahbbSumOrderByAggregateInput = {
    id_curso_ahbb?: SortOrder
    diasDefinidos_ahbb?: SortOrder
    horasDefinidas_ahbb?: SortOrder
    topeEstudiantes_ahbb?: SortOrder
    id_usuario_curso_ahbb?: SortOrder
    id_curso_curso_ahbb?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Td_curso_ahbbScalarRelationFilter = {
    is?: td_curso_ahbbWhereInput
    isNot?: td_curso_ahbbWhereInput
  }

  export type td_horario_ahbbCountOrderByAggregateInput = {
    id_horario_ahbb?: SortOrder
    diaSemana_ahbb?: SortOrder
    horaInicio_ahbb?: SortOrder
    horaFin_ahbb?: SortOrder
    id_curso_horario_ahbb?: SortOrder
  }

  export type td_horario_ahbbAvgOrderByAggregateInput = {
    id_horario_ahbb?: SortOrder
    id_curso_horario_ahbb?: SortOrder
  }

  export type td_horario_ahbbMaxOrderByAggregateInput = {
    id_horario_ahbb?: SortOrder
    diaSemana_ahbb?: SortOrder
    horaInicio_ahbb?: SortOrder
    horaFin_ahbb?: SortOrder
    id_curso_horario_ahbb?: SortOrder
  }

  export type td_horario_ahbbMinOrderByAggregateInput = {
    id_horario_ahbb?: SortOrder
    diaSemana_ahbb?: SortOrder
    horaInicio_ahbb?: SortOrder
    horaFin_ahbb?: SortOrder
    id_curso_horario_ahbb?: SortOrder
  }

  export type td_horario_ahbbSumOrderByAggregateInput = {
    id_horario_ahbb?: SortOrder
    id_curso_horario_ahbb?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Td_certificado_ahbbNullableScalarRelationFilter = {
    is?: td_certificado_ahbbWhereInput | null
    isNot?: td_certificado_ahbbWhereInput | null
  }

  export type td_inscripcion_ahbbCountOrderByAggregateInput = {
    id_inscripcion_ahbb?: SortOrder
    estatus_ahbb?: SortOrder
    intento_ahbb?: SortOrder
    notaFinal_ahbb?: SortOrder
    observaciones_ahbb?: SortOrder
    id_usuario_inscripcion_ahbb?: SortOrder
    id_curso_inscripcion_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
    actualizadoEn_ahbb?: SortOrder
  }

  export type td_inscripcion_ahbbAvgOrderByAggregateInput = {
    id_inscripcion_ahbb?: SortOrder
    intento_ahbb?: SortOrder
    notaFinal_ahbb?: SortOrder
    id_usuario_inscripcion_ahbb?: SortOrder
    id_curso_inscripcion_ahbb?: SortOrder
  }

  export type td_inscripcion_ahbbMaxOrderByAggregateInput = {
    id_inscripcion_ahbb?: SortOrder
    estatus_ahbb?: SortOrder
    intento_ahbb?: SortOrder
    notaFinal_ahbb?: SortOrder
    observaciones_ahbb?: SortOrder
    id_usuario_inscripcion_ahbb?: SortOrder
    id_curso_inscripcion_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
    actualizadoEn_ahbb?: SortOrder
  }

  export type td_inscripcion_ahbbMinOrderByAggregateInput = {
    id_inscripcion_ahbb?: SortOrder
    estatus_ahbb?: SortOrder
    intento_ahbb?: SortOrder
    notaFinal_ahbb?: SortOrder
    observaciones_ahbb?: SortOrder
    id_usuario_inscripcion_ahbb?: SortOrder
    id_curso_inscripcion_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
    actualizadoEn_ahbb?: SortOrder
  }

  export type td_inscripcion_ahbbSumOrderByAggregateInput = {
    id_inscripcion_ahbb?: SortOrder
    intento_ahbb?: SortOrder
    notaFinal_ahbb?: SortOrder
    id_usuario_inscripcion_ahbb?: SortOrder
    id_curso_inscripcion_ahbb?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Td_inscripcion_ahbbScalarRelationFilter = {
    is?: td_inscripcion_ahbbWhereInput
    isNot?: td_inscripcion_ahbbWhereInput
  }

  export type td_certificado_ahbbCountOrderByAggregateInput = {
    id_certificado_ahbb?: SortOrder
    codigoQrUrl_ahbb?: SortOrder
    id_inscripcion_certificado_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
  }

  export type td_certificado_ahbbAvgOrderByAggregateInput = {
    id_certificado_ahbb?: SortOrder
    id_inscripcion_certificado_ahbb?: SortOrder
  }

  export type td_certificado_ahbbMaxOrderByAggregateInput = {
    id_certificado_ahbb?: SortOrder
    codigoQrUrl_ahbb?: SortOrder
    id_inscripcion_certificado_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
  }

  export type td_certificado_ahbbMinOrderByAggregateInput = {
    id_certificado_ahbb?: SortOrder
    codigoQrUrl_ahbb?: SortOrder
    id_inscripcion_certificado_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
  }

  export type td_certificado_ahbbSumOrderByAggregateInput = {
    id_certificado_ahbb?: SortOrder
    id_inscripcion_certificado_ahbb?: SortOrder
  }

  export type td_configuracionglobal_ahbbCountOrderByAggregateInput = {
    id_configuracionglobal_ahbb?: SortOrder
    imagenCertificadoGeneral_ahbb?: SortOrder
  }

  export type td_configuracionglobal_ahbbAvgOrderByAggregateInput = {
    id_configuracionglobal_ahbb?: SortOrder
  }

  export type td_configuracionglobal_ahbbMaxOrderByAggregateInput = {
    id_configuracionglobal_ahbb?: SortOrder
    imagenCertificadoGeneral_ahbb?: SortOrder
  }

  export type td_configuracionglobal_ahbbMinOrderByAggregateInput = {
    id_configuracionglobal_ahbb?: SortOrder
    imagenCertificadoGeneral_ahbb?: SortOrder
  }

  export type td_configuracionglobal_ahbbSumOrderByAggregateInput = {
    id_configuracionglobal_ahbb?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type td_auditoria_aprobacion_ahbbCountOrderByAggregateInput = {
    id_auditoria_aprobacion_ahbb?: SortOrder
    tipoOperacion_ahbb?: SortOrder
    referenciaOperacion_ahbb?: SortOrder
    observacion_ahbb?: SortOrder
    id_usuario_auditado_ahbb?: SortOrder
    id_aprobador_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
  }

  export type td_auditoria_aprobacion_ahbbAvgOrderByAggregateInput = {
    id_auditoria_aprobacion_ahbb?: SortOrder
    id_usuario_auditado_ahbb?: SortOrder
    id_aprobador_ahbb?: SortOrder
  }

  export type td_auditoria_aprobacion_ahbbMaxOrderByAggregateInput = {
    id_auditoria_aprobacion_ahbb?: SortOrder
    tipoOperacion_ahbb?: SortOrder
    referenciaOperacion_ahbb?: SortOrder
    observacion_ahbb?: SortOrder
    id_usuario_auditado_ahbb?: SortOrder
    id_aprobador_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
  }

  export type td_auditoria_aprobacion_ahbbMinOrderByAggregateInput = {
    id_auditoria_aprobacion_ahbb?: SortOrder
    tipoOperacion_ahbb?: SortOrder
    referenciaOperacion_ahbb?: SortOrder
    observacion_ahbb?: SortOrder
    id_usuario_auditado_ahbb?: SortOrder
    id_aprobador_ahbb?: SortOrder
    creadoEn_ahbb?: SortOrder
  }

  export type td_auditoria_aprobacion_ahbbSumOrderByAggregateInput = {
    id_auditoria_aprobacion_ahbb?: SortOrder
    id_usuario_auditado_ahbb?: SortOrder
    id_aprobador_ahbb?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type td_curso_ahbbCreateNestedManyWithoutProfesorInput = {
    create?: XOR<td_curso_ahbbCreateWithoutProfesorInput, td_curso_ahbbUncheckedCreateWithoutProfesorInput> | td_curso_ahbbCreateWithoutProfesorInput[] | td_curso_ahbbUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutProfesorInput | td_curso_ahbbCreateOrConnectWithoutProfesorInput[]
    createMany?: td_curso_ahbbCreateManyProfesorInputEnvelope
    connect?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
  }

  export type td_inscripcion_ahbbCreateNestedManyWithoutAlumnoInput = {
    create?: XOR<td_inscripcion_ahbbCreateWithoutAlumnoInput, td_inscripcion_ahbbUncheckedCreateWithoutAlumnoInput> | td_inscripcion_ahbbCreateWithoutAlumnoInput[] | td_inscripcion_ahbbUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: td_inscripcion_ahbbCreateOrConnectWithoutAlumnoInput | td_inscripcion_ahbbCreateOrConnectWithoutAlumnoInput[]
    createMany?: td_inscripcion_ahbbCreateManyAlumnoInputEnvelope
    connect?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
  }

  export type td_auditoria_aprobacion_ahbbCreateNestedManyWithoutAprobador_ahbbInput = {
    create?: XOR<td_auditoria_aprobacion_ahbbCreateWithoutAprobador_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedCreateWithoutAprobador_ahbbInput> | td_auditoria_aprobacion_ahbbCreateWithoutAprobador_ahbbInput[] | td_auditoria_aprobacion_ahbbUncheckedCreateWithoutAprobador_ahbbInput[]
    connectOrCreate?: td_auditoria_aprobacion_ahbbCreateOrConnectWithoutAprobador_ahbbInput | td_auditoria_aprobacion_ahbbCreateOrConnectWithoutAprobador_ahbbInput[]
    createMany?: td_auditoria_aprobacion_ahbbCreateManyAprobador_ahbbInputEnvelope
    connect?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
  }

  export type td_auditoria_aprobacion_ahbbCreateNestedManyWithoutUsuarioAuditado_ahbbInput = {
    create?: XOR<td_auditoria_aprobacion_ahbbCreateWithoutUsuarioAuditado_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedCreateWithoutUsuarioAuditado_ahbbInput> | td_auditoria_aprobacion_ahbbCreateWithoutUsuarioAuditado_ahbbInput[] | td_auditoria_aprobacion_ahbbUncheckedCreateWithoutUsuarioAuditado_ahbbInput[]
    connectOrCreate?: td_auditoria_aprobacion_ahbbCreateOrConnectWithoutUsuarioAuditado_ahbbInput | td_auditoria_aprobacion_ahbbCreateOrConnectWithoutUsuarioAuditado_ahbbInput[]
    createMany?: td_auditoria_aprobacion_ahbbCreateManyUsuarioAuditado_ahbbInputEnvelope
    connect?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
  }

  export type td_curso_ahbbUncheckedCreateNestedManyWithoutProfesorInput = {
    create?: XOR<td_curso_ahbbCreateWithoutProfesorInput, td_curso_ahbbUncheckedCreateWithoutProfesorInput> | td_curso_ahbbCreateWithoutProfesorInput[] | td_curso_ahbbUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutProfesorInput | td_curso_ahbbCreateOrConnectWithoutProfesorInput[]
    createMany?: td_curso_ahbbCreateManyProfesorInputEnvelope
    connect?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
  }

  export type td_inscripcion_ahbbUncheckedCreateNestedManyWithoutAlumnoInput = {
    create?: XOR<td_inscripcion_ahbbCreateWithoutAlumnoInput, td_inscripcion_ahbbUncheckedCreateWithoutAlumnoInput> | td_inscripcion_ahbbCreateWithoutAlumnoInput[] | td_inscripcion_ahbbUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: td_inscripcion_ahbbCreateOrConnectWithoutAlumnoInput | td_inscripcion_ahbbCreateOrConnectWithoutAlumnoInput[]
    createMany?: td_inscripcion_ahbbCreateManyAlumnoInputEnvelope
    connect?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
  }

  export type td_auditoria_aprobacion_ahbbUncheckedCreateNestedManyWithoutAprobador_ahbbInput = {
    create?: XOR<td_auditoria_aprobacion_ahbbCreateWithoutAprobador_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedCreateWithoutAprobador_ahbbInput> | td_auditoria_aprobacion_ahbbCreateWithoutAprobador_ahbbInput[] | td_auditoria_aprobacion_ahbbUncheckedCreateWithoutAprobador_ahbbInput[]
    connectOrCreate?: td_auditoria_aprobacion_ahbbCreateOrConnectWithoutAprobador_ahbbInput | td_auditoria_aprobacion_ahbbCreateOrConnectWithoutAprobador_ahbbInput[]
    createMany?: td_auditoria_aprobacion_ahbbCreateManyAprobador_ahbbInputEnvelope
    connect?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
  }

  export type td_auditoria_aprobacion_ahbbUncheckedCreateNestedManyWithoutUsuarioAuditado_ahbbInput = {
    create?: XOR<td_auditoria_aprobacion_ahbbCreateWithoutUsuarioAuditado_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedCreateWithoutUsuarioAuditado_ahbbInput> | td_auditoria_aprobacion_ahbbCreateWithoutUsuarioAuditado_ahbbInput[] | td_auditoria_aprobacion_ahbbUncheckedCreateWithoutUsuarioAuditado_ahbbInput[]
    connectOrCreate?: td_auditoria_aprobacion_ahbbCreateOrConnectWithoutUsuarioAuditado_ahbbInput | td_auditoria_aprobacion_ahbbCreateOrConnectWithoutUsuarioAuditado_ahbbInput[]
    createMany?: td_auditoria_aprobacion_ahbbCreateManyUsuarioAuditado_ahbbInputEnvelope
    connect?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type td_curso_ahbbUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<td_curso_ahbbCreateWithoutProfesorInput, td_curso_ahbbUncheckedCreateWithoutProfesorInput> | td_curso_ahbbCreateWithoutProfesorInput[] | td_curso_ahbbUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutProfesorInput | td_curso_ahbbCreateOrConnectWithoutProfesorInput[]
    upsert?: td_curso_ahbbUpsertWithWhereUniqueWithoutProfesorInput | td_curso_ahbbUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: td_curso_ahbbCreateManyProfesorInputEnvelope
    set?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    disconnect?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    delete?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    connect?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    update?: td_curso_ahbbUpdateWithWhereUniqueWithoutProfesorInput | td_curso_ahbbUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: td_curso_ahbbUpdateManyWithWhereWithoutProfesorInput | td_curso_ahbbUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: td_curso_ahbbScalarWhereInput | td_curso_ahbbScalarWhereInput[]
  }

  export type td_inscripcion_ahbbUpdateManyWithoutAlumnoNestedInput = {
    create?: XOR<td_inscripcion_ahbbCreateWithoutAlumnoInput, td_inscripcion_ahbbUncheckedCreateWithoutAlumnoInput> | td_inscripcion_ahbbCreateWithoutAlumnoInput[] | td_inscripcion_ahbbUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: td_inscripcion_ahbbCreateOrConnectWithoutAlumnoInput | td_inscripcion_ahbbCreateOrConnectWithoutAlumnoInput[]
    upsert?: td_inscripcion_ahbbUpsertWithWhereUniqueWithoutAlumnoInput | td_inscripcion_ahbbUpsertWithWhereUniqueWithoutAlumnoInput[]
    createMany?: td_inscripcion_ahbbCreateManyAlumnoInputEnvelope
    set?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    disconnect?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    delete?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    connect?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    update?: td_inscripcion_ahbbUpdateWithWhereUniqueWithoutAlumnoInput | td_inscripcion_ahbbUpdateWithWhereUniqueWithoutAlumnoInput[]
    updateMany?: td_inscripcion_ahbbUpdateManyWithWhereWithoutAlumnoInput | td_inscripcion_ahbbUpdateManyWithWhereWithoutAlumnoInput[]
    deleteMany?: td_inscripcion_ahbbScalarWhereInput | td_inscripcion_ahbbScalarWhereInput[]
  }

  export type td_auditoria_aprobacion_ahbbUpdateManyWithoutAprobador_ahbbNestedInput = {
    create?: XOR<td_auditoria_aprobacion_ahbbCreateWithoutAprobador_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedCreateWithoutAprobador_ahbbInput> | td_auditoria_aprobacion_ahbbCreateWithoutAprobador_ahbbInput[] | td_auditoria_aprobacion_ahbbUncheckedCreateWithoutAprobador_ahbbInput[]
    connectOrCreate?: td_auditoria_aprobacion_ahbbCreateOrConnectWithoutAprobador_ahbbInput | td_auditoria_aprobacion_ahbbCreateOrConnectWithoutAprobador_ahbbInput[]
    upsert?: td_auditoria_aprobacion_ahbbUpsertWithWhereUniqueWithoutAprobador_ahbbInput | td_auditoria_aprobacion_ahbbUpsertWithWhereUniqueWithoutAprobador_ahbbInput[]
    createMany?: td_auditoria_aprobacion_ahbbCreateManyAprobador_ahbbInputEnvelope
    set?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    disconnect?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    delete?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    connect?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    update?: td_auditoria_aprobacion_ahbbUpdateWithWhereUniqueWithoutAprobador_ahbbInput | td_auditoria_aprobacion_ahbbUpdateWithWhereUniqueWithoutAprobador_ahbbInput[]
    updateMany?: td_auditoria_aprobacion_ahbbUpdateManyWithWhereWithoutAprobador_ahbbInput | td_auditoria_aprobacion_ahbbUpdateManyWithWhereWithoutAprobador_ahbbInput[]
    deleteMany?: td_auditoria_aprobacion_ahbbScalarWhereInput | td_auditoria_aprobacion_ahbbScalarWhereInput[]
  }

  export type td_auditoria_aprobacion_ahbbUpdateManyWithoutUsuarioAuditado_ahbbNestedInput = {
    create?: XOR<td_auditoria_aprobacion_ahbbCreateWithoutUsuarioAuditado_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedCreateWithoutUsuarioAuditado_ahbbInput> | td_auditoria_aprobacion_ahbbCreateWithoutUsuarioAuditado_ahbbInput[] | td_auditoria_aprobacion_ahbbUncheckedCreateWithoutUsuarioAuditado_ahbbInput[]
    connectOrCreate?: td_auditoria_aprobacion_ahbbCreateOrConnectWithoutUsuarioAuditado_ahbbInput | td_auditoria_aprobacion_ahbbCreateOrConnectWithoutUsuarioAuditado_ahbbInput[]
    upsert?: td_auditoria_aprobacion_ahbbUpsertWithWhereUniqueWithoutUsuarioAuditado_ahbbInput | td_auditoria_aprobacion_ahbbUpsertWithWhereUniqueWithoutUsuarioAuditado_ahbbInput[]
    createMany?: td_auditoria_aprobacion_ahbbCreateManyUsuarioAuditado_ahbbInputEnvelope
    set?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    disconnect?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    delete?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    connect?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    update?: td_auditoria_aprobacion_ahbbUpdateWithWhereUniqueWithoutUsuarioAuditado_ahbbInput | td_auditoria_aprobacion_ahbbUpdateWithWhereUniqueWithoutUsuarioAuditado_ahbbInput[]
    updateMany?: td_auditoria_aprobacion_ahbbUpdateManyWithWhereWithoutUsuarioAuditado_ahbbInput | td_auditoria_aprobacion_ahbbUpdateManyWithWhereWithoutUsuarioAuditado_ahbbInput[]
    deleteMany?: td_auditoria_aprobacion_ahbbScalarWhereInput | td_auditoria_aprobacion_ahbbScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type td_curso_ahbbUncheckedUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<td_curso_ahbbCreateWithoutProfesorInput, td_curso_ahbbUncheckedCreateWithoutProfesorInput> | td_curso_ahbbCreateWithoutProfesorInput[] | td_curso_ahbbUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutProfesorInput | td_curso_ahbbCreateOrConnectWithoutProfesorInput[]
    upsert?: td_curso_ahbbUpsertWithWhereUniqueWithoutProfesorInput | td_curso_ahbbUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: td_curso_ahbbCreateManyProfesorInputEnvelope
    set?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    disconnect?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    delete?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    connect?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    update?: td_curso_ahbbUpdateWithWhereUniqueWithoutProfesorInput | td_curso_ahbbUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: td_curso_ahbbUpdateManyWithWhereWithoutProfesorInput | td_curso_ahbbUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: td_curso_ahbbScalarWhereInput | td_curso_ahbbScalarWhereInput[]
  }

  export type td_inscripcion_ahbbUncheckedUpdateManyWithoutAlumnoNestedInput = {
    create?: XOR<td_inscripcion_ahbbCreateWithoutAlumnoInput, td_inscripcion_ahbbUncheckedCreateWithoutAlumnoInput> | td_inscripcion_ahbbCreateWithoutAlumnoInput[] | td_inscripcion_ahbbUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: td_inscripcion_ahbbCreateOrConnectWithoutAlumnoInput | td_inscripcion_ahbbCreateOrConnectWithoutAlumnoInput[]
    upsert?: td_inscripcion_ahbbUpsertWithWhereUniqueWithoutAlumnoInput | td_inscripcion_ahbbUpsertWithWhereUniqueWithoutAlumnoInput[]
    createMany?: td_inscripcion_ahbbCreateManyAlumnoInputEnvelope
    set?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    disconnect?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    delete?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    connect?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    update?: td_inscripcion_ahbbUpdateWithWhereUniqueWithoutAlumnoInput | td_inscripcion_ahbbUpdateWithWhereUniqueWithoutAlumnoInput[]
    updateMany?: td_inscripcion_ahbbUpdateManyWithWhereWithoutAlumnoInput | td_inscripcion_ahbbUpdateManyWithWhereWithoutAlumnoInput[]
    deleteMany?: td_inscripcion_ahbbScalarWhereInput | td_inscripcion_ahbbScalarWhereInput[]
  }

  export type td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutAprobador_ahbbNestedInput = {
    create?: XOR<td_auditoria_aprobacion_ahbbCreateWithoutAprobador_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedCreateWithoutAprobador_ahbbInput> | td_auditoria_aprobacion_ahbbCreateWithoutAprobador_ahbbInput[] | td_auditoria_aprobacion_ahbbUncheckedCreateWithoutAprobador_ahbbInput[]
    connectOrCreate?: td_auditoria_aprobacion_ahbbCreateOrConnectWithoutAprobador_ahbbInput | td_auditoria_aprobacion_ahbbCreateOrConnectWithoutAprobador_ahbbInput[]
    upsert?: td_auditoria_aprobacion_ahbbUpsertWithWhereUniqueWithoutAprobador_ahbbInput | td_auditoria_aprobacion_ahbbUpsertWithWhereUniqueWithoutAprobador_ahbbInput[]
    createMany?: td_auditoria_aprobacion_ahbbCreateManyAprobador_ahbbInputEnvelope
    set?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    disconnect?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    delete?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    connect?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    update?: td_auditoria_aprobacion_ahbbUpdateWithWhereUniqueWithoutAprobador_ahbbInput | td_auditoria_aprobacion_ahbbUpdateWithWhereUniqueWithoutAprobador_ahbbInput[]
    updateMany?: td_auditoria_aprobacion_ahbbUpdateManyWithWhereWithoutAprobador_ahbbInput | td_auditoria_aprobacion_ahbbUpdateManyWithWhereWithoutAprobador_ahbbInput[]
    deleteMany?: td_auditoria_aprobacion_ahbbScalarWhereInput | td_auditoria_aprobacion_ahbbScalarWhereInput[]
  }

  export type td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutUsuarioAuditado_ahbbNestedInput = {
    create?: XOR<td_auditoria_aprobacion_ahbbCreateWithoutUsuarioAuditado_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedCreateWithoutUsuarioAuditado_ahbbInput> | td_auditoria_aprobacion_ahbbCreateWithoutUsuarioAuditado_ahbbInput[] | td_auditoria_aprobacion_ahbbUncheckedCreateWithoutUsuarioAuditado_ahbbInput[]
    connectOrCreate?: td_auditoria_aprobacion_ahbbCreateOrConnectWithoutUsuarioAuditado_ahbbInput | td_auditoria_aprobacion_ahbbCreateOrConnectWithoutUsuarioAuditado_ahbbInput[]
    upsert?: td_auditoria_aprobacion_ahbbUpsertWithWhereUniqueWithoutUsuarioAuditado_ahbbInput | td_auditoria_aprobacion_ahbbUpsertWithWhereUniqueWithoutUsuarioAuditado_ahbbInput[]
    createMany?: td_auditoria_aprobacion_ahbbCreateManyUsuarioAuditado_ahbbInputEnvelope
    set?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    disconnect?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    delete?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    connect?: td_auditoria_aprobacion_ahbbWhereUniqueInput | td_auditoria_aprobacion_ahbbWhereUniqueInput[]
    update?: td_auditoria_aprobacion_ahbbUpdateWithWhereUniqueWithoutUsuarioAuditado_ahbbInput | td_auditoria_aprobacion_ahbbUpdateWithWhereUniqueWithoutUsuarioAuditado_ahbbInput[]
    updateMany?: td_auditoria_aprobacion_ahbbUpdateManyWithWhereWithoutUsuarioAuditado_ahbbInput | td_auditoria_aprobacion_ahbbUpdateManyWithWhereWithoutUsuarioAuditado_ahbbInput[]
    deleteMany?: td_auditoria_aprobacion_ahbbScalarWhereInput | td_auditoria_aprobacion_ahbbScalarWhereInput[]
  }

  export type td_usuario_ahbbCreateNestedOneWithoutCursosInput = {
    create?: XOR<td_usuario_ahbbCreateWithoutCursosInput, td_usuario_ahbbUncheckedCreateWithoutCursosInput>
    connectOrCreate?: td_usuario_ahbbCreateOrConnectWithoutCursosInput
    connect?: td_usuario_ahbbWhereUniqueInput
  }

  export type td_curso_ahbbCreateNestedOneWithoutPrelacionesInput = {
    create?: XOR<td_curso_ahbbCreateWithoutPrelacionesInput, td_curso_ahbbUncheckedCreateWithoutPrelacionesInput>
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutPrelacionesInput
    connect?: td_curso_ahbbWhereUniqueInput
  }

  export type td_curso_ahbbCreateNestedManyWithoutPrelacionInput = {
    create?: XOR<td_curso_ahbbCreateWithoutPrelacionInput, td_curso_ahbbUncheckedCreateWithoutPrelacionInput> | td_curso_ahbbCreateWithoutPrelacionInput[] | td_curso_ahbbUncheckedCreateWithoutPrelacionInput[]
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutPrelacionInput | td_curso_ahbbCreateOrConnectWithoutPrelacionInput[]
    createMany?: td_curso_ahbbCreateManyPrelacionInputEnvelope
    connect?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
  }

  export type td_horario_ahbbCreateNestedManyWithoutCursoInput = {
    create?: XOR<td_horario_ahbbCreateWithoutCursoInput, td_horario_ahbbUncheckedCreateWithoutCursoInput> | td_horario_ahbbCreateWithoutCursoInput[] | td_horario_ahbbUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: td_horario_ahbbCreateOrConnectWithoutCursoInput | td_horario_ahbbCreateOrConnectWithoutCursoInput[]
    createMany?: td_horario_ahbbCreateManyCursoInputEnvelope
    connect?: td_horario_ahbbWhereUniqueInput | td_horario_ahbbWhereUniqueInput[]
  }

  export type td_inscripcion_ahbbCreateNestedManyWithoutCursoInput = {
    create?: XOR<td_inscripcion_ahbbCreateWithoutCursoInput, td_inscripcion_ahbbUncheckedCreateWithoutCursoInput> | td_inscripcion_ahbbCreateWithoutCursoInput[] | td_inscripcion_ahbbUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: td_inscripcion_ahbbCreateOrConnectWithoutCursoInput | td_inscripcion_ahbbCreateOrConnectWithoutCursoInput[]
    createMany?: td_inscripcion_ahbbCreateManyCursoInputEnvelope
    connect?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
  }

  export type td_curso_ahbbUncheckedCreateNestedManyWithoutPrelacionInput = {
    create?: XOR<td_curso_ahbbCreateWithoutPrelacionInput, td_curso_ahbbUncheckedCreateWithoutPrelacionInput> | td_curso_ahbbCreateWithoutPrelacionInput[] | td_curso_ahbbUncheckedCreateWithoutPrelacionInput[]
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutPrelacionInput | td_curso_ahbbCreateOrConnectWithoutPrelacionInput[]
    createMany?: td_curso_ahbbCreateManyPrelacionInputEnvelope
    connect?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
  }

  export type td_horario_ahbbUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<td_horario_ahbbCreateWithoutCursoInput, td_horario_ahbbUncheckedCreateWithoutCursoInput> | td_horario_ahbbCreateWithoutCursoInput[] | td_horario_ahbbUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: td_horario_ahbbCreateOrConnectWithoutCursoInput | td_horario_ahbbCreateOrConnectWithoutCursoInput[]
    createMany?: td_horario_ahbbCreateManyCursoInputEnvelope
    connect?: td_horario_ahbbWhereUniqueInput | td_horario_ahbbWhereUniqueInput[]
  }

  export type td_inscripcion_ahbbUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<td_inscripcion_ahbbCreateWithoutCursoInput, td_inscripcion_ahbbUncheckedCreateWithoutCursoInput> | td_inscripcion_ahbbCreateWithoutCursoInput[] | td_inscripcion_ahbbUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: td_inscripcion_ahbbCreateOrConnectWithoutCursoInput | td_inscripcion_ahbbCreateOrConnectWithoutCursoInput[]
    createMany?: td_inscripcion_ahbbCreateManyCursoInputEnvelope
    connect?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type td_usuario_ahbbUpdateOneRequiredWithoutCursosNestedInput = {
    create?: XOR<td_usuario_ahbbCreateWithoutCursosInput, td_usuario_ahbbUncheckedCreateWithoutCursosInput>
    connectOrCreate?: td_usuario_ahbbCreateOrConnectWithoutCursosInput
    upsert?: td_usuario_ahbbUpsertWithoutCursosInput
    connect?: td_usuario_ahbbWhereUniqueInput
    update?: XOR<XOR<td_usuario_ahbbUpdateToOneWithWhereWithoutCursosInput, td_usuario_ahbbUpdateWithoutCursosInput>, td_usuario_ahbbUncheckedUpdateWithoutCursosInput>
  }

  export type td_curso_ahbbUpdateOneWithoutPrelacionesNestedInput = {
    create?: XOR<td_curso_ahbbCreateWithoutPrelacionesInput, td_curso_ahbbUncheckedCreateWithoutPrelacionesInput>
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutPrelacionesInput
    upsert?: td_curso_ahbbUpsertWithoutPrelacionesInput
    disconnect?: td_curso_ahbbWhereInput | boolean
    delete?: td_curso_ahbbWhereInput | boolean
    connect?: td_curso_ahbbWhereUniqueInput
    update?: XOR<XOR<td_curso_ahbbUpdateToOneWithWhereWithoutPrelacionesInput, td_curso_ahbbUpdateWithoutPrelacionesInput>, td_curso_ahbbUncheckedUpdateWithoutPrelacionesInput>
  }

  export type td_curso_ahbbUpdateManyWithoutPrelacionNestedInput = {
    create?: XOR<td_curso_ahbbCreateWithoutPrelacionInput, td_curso_ahbbUncheckedCreateWithoutPrelacionInput> | td_curso_ahbbCreateWithoutPrelacionInput[] | td_curso_ahbbUncheckedCreateWithoutPrelacionInput[]
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutPrelacionInput | td_curso_ahbbCreateOrConnectWithoutPrelacionInput[]
    upsert?: td_curso_ahbbUpsertWithWhereUniqueWithoutPrelacionInput | td_curso_ahbbUpsertWithWhereUniqueWithoutPrelacionInput[]
    createMany?: td_curso_ahbbCreateManyPrelacionInputEnvelope
    set?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    disconnect?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    delete?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    connect?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    update?: td_curso_ahbbUpdateWithWhereUniqueWithoutPrelacionInput | td_curso_ahbbUpdateWithWhereUniqueWithoutPrelacionInput[]
    updateMany?: td_curso_ahbbUpdateManyWithWhereWithoutPrelacionInput | td_curso_ahbbUpdateManyWithWhereWithoutPrelacionInput[]
    deleteMany?: td_curso_ahbbScalarWhereInput | td_curso_ahbbScalarWhereInput[]
  }

  export type td_horario_ahbbUpdateManyWithoutCursoNestedInput = {
    create?: XOR<td_horario_ahbbCreateWithoutCursoInput, td_horario_ahbbUncheckedCreateWithoutCursoInput> | td_horario_ahbbCreateWithoutCursoInput[] | td_horario_ahbbUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: td_horario_ahbbCreateOrConnectWithoutCursoInput | td_horario_ahbbCreateOrConnectWithoutCursoInput[]
    upsert?: td_horario_ahbbUpsertWithWhereUniqueWithoutCursoInput | td_horario_ahbbUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: td_horario_ahbbCreateManyCursoInputEnvelope
    set?: td_horario_ahbbWhereUniqueInput | td_horario_ahbbWhereUniqueInput[]
    disconnect?: td_horario_ahbbWhereUniqueInput | td_horario_ahbbWhereUniqueInput[]
    delete?: td_horario_ahbbWhereUniqueInput | td_horario_ahbbWhereUniqueInput[]
    connect?: td_horario_ahbbWhereUniqueInput | td_horario_ahbbWhereUniqueInput[]
    update?: td_horario_ahbbUpdateWithWhereUniqueWithoutCursoInput | td_horario_ahbbUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: td_horario_ahbbUpdateManyWithWhereWithoutCursoInput | td_horario_ahbbUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: td_horario_ahbbScalarWhereInput | td_horario_ahbbScalarWhereInput[]
  }

  export type td_inscripcion_ahbbUpdateManyWithoutCursoNestedInput = {
    create?: XOR<td_inscripcion_ahbbCreateWithoutCursoInput, td_inscripcion_ahbbUncheckedCreateWithoutCursoInput> | td_inscripcion_ahbbCreateWithoutCursoInput[] | td_inscripcion_ahbbUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: td_inscripcion_ahbbCreateOrConnectWithoutCursoInput | td_inscripcion_ahbbCreateOrConnectWithoutCursoInput[]
    upsert?: td_inscripcion_ahbbUpsertWithWhereUniqueWithoutCursoInput | td_inscripcion_ahbbUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: td_inscripcion_ahbbCreateManyCursoInputEnvelope
    set?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    disconnect?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    delete?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    connect?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    update?: td_inscripcion_ahbbUpdateWithWhereUniqueWithoutCursoInput | td_inscripcion_ahbbUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: td_inscripcion_ahbbUpdateManyWithWhereWithoutCursoInput | td_inscripcion_ahbbUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: td_inscripcion_ahbbScalarWhereInput | td_inscripcion_ahbbScalarWhereInput[]
  }

  export type td_curso_ahbbUncheckedUpdateManyWithoutPrelacionNestedInput = {
    create?: XOR<td_curso_ahbbCreateWithoutPrelacionInput, td_curso_ahbbUncheckedCreateWithoutPrelacionInput> | td_curso_ahbbCreateWithoutPrelacionInput[] | td_curso_ahbbUncheckedCreateWithoutPrelacionInput[]
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutPrelacionInput | td_curso_ahbbCreateOrConnectWithoutPrelacionInput[]
    upsert?: td_curso_ahbbUpsertWithWhereUniqueWithoutPrelacionInput | td_curso_ahbbUpsertWithWhereUniqueWithoutPrelacionInput[]
    createMany?: td_curso_ahbbCreateManyPrelacionInputEnvelope
    set?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    disconnect?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    delete?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    connect?: td_curso_ahbbWhereUniqueInput | td_curso_ahbbWhereUniqueInput[]
    update?: td_curso_ahbbUpdateWithWhereUniqueWithoutPrelacionInput | td_curso_ahbbUpdateWithWhereUniqueWithoutPrelacionInput[]
    updateMany?: td_curso_ahbbUpdateManyWithWhereWithoutPrelacionInput | td_curso_ahbbUpdateManyWithWhereWithoutPrelacionInput[]
    deleteMany?: td_curso_ahbbScalarWhereInput | td_curso_ahbbScalarWhereInput[]
  }

  export type td_horario_ahbbUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<td_horario_ahbbCreateWithoutCursoInput, td_horario_ahbbUncheckedCreateWithoutCursoInput> | td_horario_ahbbCreateWithoutCursoInput[] | td_horario_ahbbUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: td_horario_ahbbCreateOrConnectWithoutCursoInput | td_horario_ahbbCreateOrConnectWithoutCursoInput[]
    upsert?: td_horario_ahbbUpsertWithWhereUniqueWithoutCursoInput | td_horario_ahbbUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: td_horario_ahbbCreateManyCursoInputEnvelope
    set?: td_horario_ahbbWhereUniqueInput | td_horario_ahbbWhereUniqueInput[]
    disconnect?: td_horario_ahbbWhereUniqueInput | td_horario_ahbbWhereUniqueInput[]
    delete?: td_horario_ahbbWhereUniqueInput | td_horario_ahbbWhereUniqueInput[]
    connect?: td_horario_ahbbWhereUniqueInput | td_horario_ahbbWhereUniqueInput[]
    update?: td_horario_ahbbUpdateWithWhereUniqueWithoutCursoInput | td_horario_ahbbUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: td_horario_ahbbUpdateManyWithWhereWithoutCursoInput | td_horario_ahbbUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: td_horario_ahbbScalarWhereInput | td_horario_ahbbScalarWhereInput[]
  }

  export type td_inscripcion_ahbbUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<td_inscripcion_ahbbCreateWithoutCursoInput, td_inscripcion_ahbbUncheckedCreateWithoutCursoInput> | td_inscripcion_ahbbCreateWithoutCursoInput[] | td_inscripcion_ahbbUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: td_inscripcion_ahbbCreateOrConnectWithoutCursoInput | td_inscripcion_ahbbCreateOrConnectWithoutCursoInput[]
    upsert?: td_inscripcion_ahbbUpsertWithWhereUniqueWithoutCursoInput | td_inscripcion_ahbbUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: td_inscripcion_ahbbCreateManyCursoInputEnvelope
    set?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    disconnect?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    delete?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    connect?: td_inscripcion_ahbbWhereUniqueInput | td_inscripcion_ahbbWhereUniqueInput[]
    update?: td_inscripcion_ahbbUpdateWithWhereUniqueWithoutCursoInput | td_inscripcion_ahbbUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: td_inscripcion_ahbbUpdateManyWithWhereWithoutCursoInput | td_inscripcion_ahbbUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: td_inscripcion_ahbbScalarWhereInput | td_inscripcion_ahbbScalarWhereInput[]
  }

  export type td_curso_ahbbCreateNestedOneWithoutHorariosInput = {
    create?: XOR<td_curso_ahbbCreateWithoutHorariosInput, td_curso_ahbbUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutHorariosInput
    connect?: td_curso_ahbbWhereUniqueInput
  }

  export type td_curso_ahbbUpdateOneRequiredWithoutHorariosNestedInput = {
    create?: XOR<td_curso_ahbbCreateWithoutHorariosInput, td_curso_ahbbUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutHorariosInput
    upsert?: td_curso_ahbbUpsertWithoutHorariosInput
    connect?: td_curso_ahbbWhereUniqueInput
    update?: XOR<XOR<td_curso_ahbbUpdateToOneWithWhereWithoutHorariosInput, td_curso_ahbbUpdateWithoutHorariosInput>, td_curso_ahbbUncheckedUpdateWithoutHorariosInput>
  }

  export type td_usuario_ahbbCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<td_usuario_ahbbCreateWithoutInscripcionesInput, td_usuario_ahbbUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: td_usuario_ahbbCreateOrConnectWithoutInscripcionesInput
    connect?: td_usuario_ahbbWhereUniqueInput
  }

  export type td_curso_ahbbCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<td_curso_ahbbCreateWithoutInscripcionesInput, td_curso_ahbbUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutInscripcionesInput
    connect?: td_curso_ahbbWhereUniqueInput
  }

  export type td_certificado_ahbbCreateNestedOneWithoutInscripcionInput = {
    create?: XOR<td_certificado_ahbbCreateWithoutInscripcionInput, td_certificado_ahbbUncheckedCreateWithoutInscripcionInput>
    connectOrCreate?: td_certificado_ahbbCreateOrConnectWithoutInscripcionInput
    connect?: td_certificado_ahbbWhereUniqueInput
  }

  export type td_certificado_ahbbUncheckedCreateNestedOneWithoutInscripcionInput = {
    create?: XOR<td_certificado_ahbbCreateWithoutInscripcionInput, td_certificado_ahbbUncheckedCreateWithoutInscripcionInput>
    connectOrCreate?: td_certificado_ahbbCreateOrConnectWithoutInscripcionInput
    connect?: td_certificado_ahbbWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type td_usuario_ahbbUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<td_usuario_ahbbCreateWithoutInscripcionesInput, td_usuario_ahbbUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: td_usuario_ahbbCreateOrConnectWithoutInscripcionesInput
    upsert?: td_usuario_ahbbUpsertWithoutInscripcionesInput
    connect?: td_usuario_ahbbWhereUniqueInput
    update?: XOR<XOR<td_usuario_ahbbUpdateToOneWithWhereWithoutInscripcionesInput, td_usuario_ahbbUpdateWithoutInscripcionesInput>, td_usuario_ahbbUncheckedUpdateWithoutInscripcionesInput>
  }

  export type td_curso_ahbbUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<td_curso_ahbbCreateWithoutInscripcionesInput, td_curso_ahbbUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: td_curso_ahbbCreateOrConnectWithoutInscripcionesInput
    upsert?: td_curso_ahbbUpsertWithoutInscripcionesInput
    connect?: td_curso_ahbbWhereUniqueInput
    update?: XOR<XOR<td_curso_ahbbUpdateToOneWithWhereWithoutInscripcionesInput, td_curso_ahbbUpdateWithoutInscripcionesInput>, td_curso_ahbbUncheckedUpdateWithoutInscripcionesInput>
  }

  export type td_certificado_ahbbUpdateOneWithoutInscripcionNestedInput = {
    create?: XOR<td_certificado_ahbbCreateWithoutInscripcionInput, td_certificado_ahbbUncheckedCreateWithoutInscripcionInput>
    connectOrCreate?: td_certificado_ahbbCreateOrConnectWithoutInscripcionInput
    upsert?: td_certificado_ahbbUpsertWithoutInscripcionInput
    disconnect?: td_certificado_ahbbWhereInput | boolean
    delete?: td_certificado_ahbbWhereInput | boolean
    connect?: td_certificado_ahbbWhereUniqueInput
    update?: XOR<XOR<td_certificado_ahbbUpdateToOneWithWhereWithoutInscripcionInput, td_certificado_ahbbUpdateWithoutInscripcionInput>, td_certificado_ahbbUncheckedUpdateWithoutInscripcionInput>
  }

  export type td_certificado_ahbbUncheckedUpdateOneWithoutInscripcionNestedInput = {
    create?: XOR<td_certificado_ahbbCreateWithoutInscripcionInput, td_certificado_ahbbUncheckedCreateWithoutInscripcionInput>
    connectOrCreate?: td_certificado_ahbbCreateOrConnectWithoutInscripcionInput
    upsert?: td_certificado_ahbbUpsertWithoutInscripcionInput
    disconnect?: td_certificado_ahbbWhereInput | boolean
    delete?: td_certificado_ahbbWhereInput | boolean
    connect?: td_certificado_ahbbWhereUniqueInput
    update?: XOR<XOR<td_certificado_ahbbUpdateToOneWithWhereWithoutInscripcionInput, td_certificado_ahbbUpdateWithoutInscripcionInput>, td_certificado_ahbbUncheckedUpdateWithoutInscripcionInput>
  }

  export type td_inscripcion_ahbbCreateNestedOneWithoutCertificadoInput = {
    create?: XOR<td_inscripcion_ahbbCreateWithoutCertificadoInput, td_inscripcion_ahbbUncheckedCreateWithoutCertificadoInput>
    connectOrCreate?: td_inscripcion_ahbbCreateOrConnectWithoutCertificadoInput
    connect?: td_inscripcion_ahbbWhereUniqueInput
  }

  export type td_inscripcion_ahbbUpdateOneRequiredWithoutCertificadoNestedInput = {
    create?: XOR<td_inscripcion_ahbbCreateWithoutCertificadoInput, td_inscripcion_ahbbUncheckedCreateWithoutCertificadoInput>
    connectOrCreate?: td_inscripcion_ahbbCreateOrConnectWithoutCertificadoInput
    upsert?: td_inscripcion_ahbbUpsertWithoutCertificadoInput
    connect?: td_inscripcion_ahbbWhereUniqueInput
    update?: XOR<XOR<td_inscripcion_ahbbUpdateToOneWithWhereWithoutCertificadoInput, td_inscripcion_ahbbUpdateWithoutCertificadoInput>, td_inscripcion_ahbbUncheckedUpdateWithoutCertificadoInput>
  }

  export type td_usuario_ahbbCreateNestedOneWithoutAuditoriasUsuario_ahbbInput = {
    create?: XOR<td_usuario_ahbbCreateWithoutAuditoriasUsuario_ahbbInput, td_usuario_ahbbUncheckedCreateWithoutAuditoriasUsuario_ahbbInput>
    connectOrCreate?: td_usuario_ahbbCreateOrConnectWithoutAuditoriasUsuario_ahbbInput
    connect?: td_usuario_ahbbWhereUniqueInput
  }

  export type td_usuario_ahbbCreateNestedOneWithoutAuditoriasAprobadas_ahbbInput = {
    create?: XOR<td_usuario_ahbbCreateWithoutAuditoriasAprobadas_ahbbInput, td_usuario_ahbbUncheckedCreateWithoutAuditoriasAprobadas_ahbbInput>
    connectOrCreate?: td_usuario_ahbbCreateOrConnectWithoutAuditoriasAprobadas_ahbbInput
    connect?: td_usuario_ahbbWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type td_usuario_ahbbUpdateOneRequiredWithoutAuditoriasUsuario_ahbbNestedInput = {
    create?: XOR<td_usuario_ahbbCreateWithoutAuditoriasUsuario_ahbbInput, td_usuario_ahbbUncheckedCreateWithoutAuditoriasUsuario_ahbbInput>
    connectOrCreate?: td_usuario_ahbbCreateOrConnectWithoutAuditoriasUsuario_ahbbInput
    upsert?: td_usuario_ahbbUpsertWithoutAuditoriasUsuario_ahbbInput
    connect?: td_usuario_ahbbWhereUniqueInput
    update?: XOR<XOR<td_usuario_ahbbUpdateToOneWithWhereWithoutAuditoriasUsuario_ahbbInput, td_usuario_ahbbUpdateWithoutAuditoriasUsuario_ahbbInput>, td_usuario_ahbbUncheckedUpdateWithoutAuditoriasUsuario_ahbbInput>
  }

  export type td_usuario_ahbbUpdateOneRequiredWithoutAuditoriasAprobadas_ahbbNestedInput = {
    create?: XOR<td_usuario_ahbbCreateWithoutAuditoriasAprobadas_ahbbInput, td_usuario_ahbbUncheckedCreateWithoutAuditoriasAprobadas_ahbbInput>
    connectOrCreate?: td_usuario_ahbbCreateOrConnectWithoutAuditoriasAprobadas_ahbbInput
    upsert?: td_usuario_ahbbUpsertWithoutAuditoriasAprobadas_ahbbInput
    connect?: td_usuario_ahbbWhereUniqueInput
    update?: XOR<XOR<td_usuario_ahbbUpdateToOneWithWhereWithoutAuditoriasAprobadas_ahbbInput, td_usuario_ahbbUpdateWithoutAuditoriasAprobadas_ahbbInput>, td_usuario_ahbbUncheckedUpdateWithoutAuditoriasAprobadas_ahbbInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type td_curso_ahbbCreateWithoutProfesorInput = {
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    prelacion?: td_curso_ahbbCreateNestedOneWithoutPrelacionesInput
    prelaciones?: td_curso_ahbbCreateNestedManyWithoutPrelacionInput
    horarios?: td_horario_ahbbCreateNestedManyWithoutCursoInput
    inscripciones?: td_inscripcion_ahbbCreateNestedManyWithoutCursoInput
  }

  export type td_curso_ahbbUncheckedCreateWithoutProfesorInput = {
    id_curso_ahbb?: number
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    id_curso_curso_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    prelaciones?: td_curso_ahbbUncheckedCreateNestedManyWithoutPrelacionInput
    horarios?: td_horario_ahbbUncheckedCreateNestedManyWithoutCursoInput
    inscripciones?: td_inscripcion_ahbbUncheckedCreateNestedManyWithoutCursoInput
  }

  export type td_curso_ahbbCreateOrConnectWithoutProfesorInput = {
    where: td_curso_ahbbWhereUniqueInput
    create: XOR<td_curso_ahbbCreateWithoutProfesorInput, td_curso_ahbbUncheckedCreateWithoutProfesorInput>
  }

  export type td_curso_ahbbCreateManyProfesorInputEnvelope = {
    data: td_curso_ahbbCreateManyProfesorInput | td_curso_ahbbCreateManyProfesorInput[]
    skipDuplicates?: boolean
  }

  export type td_inscripcion_ahbbCreateWithoutAlumnoInput = {
    estatus_ahbb?: string | null
    intento_ahbb?: number
    notaFinal_ahbb?: Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: string | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    curso: td_curso_ahbbCreateNestedOneWithoutInscripcionesInput
    certificado?: td_certificado_ahbbCreateNestedOneWithoutInscripcionInput
  }

  export type td_inscripcion_ahbbUncheckedCreateWithoutAlumnoInput = {
    id_inscripcion_ahbb?: number
    estatus_ahbb?: string | null
    intento_ahbb?: number
    notaFinal_ahbb?: Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: string | null
    id_curso_inscripcion_ahbb: number
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    certificado?: td_certificado_ahbbUncheckedCreateNestedOneWithoutInscripcionInput
  }

  export type td_inscripcion_ahbbCreateOrConnectWithoutAlumnoInput = {
    where: td_inscripcion_ahbbWhereUniqueInput
    create: XOR<td_inscripcion_ahbbCreateWithoutAlumnoInput, td_inscripcion_ahbbUncheckedCreateWithoutAlumnoInput>
  }

  export type td_inscripcion_ahbbCreateManyAlumnoInputEnvelope = {
    data: td_inscripcion_ahbbCreateManyAlumnoInput | td_inscripcion_ahbbCreateManyAlumnoInput[]
    skipDuplicates?: boolean
  }

  export type td_auditoria_aprobacion_ahbbCreateWithoutAprobador_ahbbInput = {
    tipoOperacion_ahbb: string
    referenciaOperacion_ahbb: string
    observacion_ahbb?: string | null
    creadoEn_ahbb?: Date | string
    usuarioAuditado_ahbb: td_usuario_ahbbCreateNestedOneWithoutAuditoriasUsuario_ahbbInput
  }

  export type td_auditoria_aprobacion_ahbbUncheckedCreateWithoutAprobador_ahbbInput = {
    id_auditoria_aprobacion_ahbb?: number
    tipoOperacion_ahbb: string
    referenciaOperacion_ahbb: string
    observacion_ahbb?: string | null
    id_usuario_auditado_ahbb: number
    creadoEn_ahbb?: Date | string
  }

  export type td_auditoria_aprobacion_ahbbCreateOrConnectWithoutAprobador_ahbbInput = {
    where: td_auditoria_aprobacion_ahbbWhereUniqueInput
    create: XOR<td_auditoria_aprobacion_ahbbCreateWithoutAprobador_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedCreateWithoutAprobador_ahbbInput>
  }

  export type td_auditoria_aprobacion_ahbbCreateManyAprobador_ahbbInputEnvelope = {
    data: td_auditoria_aprobacion_ahbbCreateManyAprobador_ahbbInput | td_auditoria_aprobacion_ahbbCreateManyAprobador_ahbbInput[]
    skipDuplicates?: boolean
  }

  export type td_auditoria_aprobacion_ahbbCreateWithoutUsuarioAuditado_ahbbInput = {
    tipoOperacion_ahbb: string
    referenciaOperacion_ahbb: string
    observacion_ahbb?: string | null
    creadoEn_ahbb?: Date | string
    aprobador_ahbb: td_usuario_ahbbCreateNestedOneWithoutAuditoriasAprobadas_ahbbInput
  }

  export type td_auditoria_aprobacion_ahbbUncheckedCreateWithoutUsuarioAuditado_ahbbInput = {
    id_auditoria_aprobacion_ahbb?: number
    tipoOperacion_ahbb: string
    referenciaOperacion_ahbb: string
    observacion_ahbb?: string | null
    id_aprobador_ahbb: number
    creadoEn_ahbb?: Date | string
  }

  export type td_auditoria_aprobacion_ahbbCreateOrConnectWithoutUsuarioAuditado_ahbbInput = {
    where: td_auditoria_aprobacion_ahbbWhereUniqueInput
    create: XOR<td_auditoria_aprobacion_ahbbCreateWithoutUsuarioAuditado_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedCreateWithoutUsuarioAuditado_ahbbInput>
  }

  export type td_auditoria_aprobacion_ahbbCreateManyUsuarioAuditado_ahbbInputEnvelope = {
    data: td_auditoria_aprobacion_ahbbCreateManyUsuarioAuditado_ahbbInput | td_auditoria_aprobacion_ahbbCreateManyUsuarioAuditado_ahbbInput[]
    skipDuplicates?: boolean
  }

  export type td_curso_ahbbUpsertWithWhereUniqueWithoutProfesorInput = {
    where: td_curso_ahbbWhereUniqueInput
    update: XOR<td_curso_ahbbUpdateWithoutProfesorInput, td_curso_ahbbUncheckedUpdateWithoutProfesorInput>
    create: XOR<td_curso_ahbbCreateWithoutProfesorInput, td_curso_ahbbUncheckedCreateWithoutProfesorInput>
  }

  export type td_curso_ahbbUpdateWithWhereUniqueWithoutProfesorInput = {
    where: td_curso_ahbbWhereUniqueInput
    data: XOR<td_curso_ahbbUpdateWithoutProfesorInput, td_curso_ahbbUncheckedUpdateWithoutProfesorInput>
  }

  export type td_curso_ahbbUpdateManyWithWhereWithoutProfesorInput = {
    where: td_curso_ahbbScalarWhereInput
    data: XOR<td_curso_ahbbUpdateManyMutationInput, td_curso_ahbbUncheckedUpdateManyWithoutProfesorInput>
  }

  export type td_curso_ahbbScalarWhereInput = {
    AND?: td_curso_ahbbScalarWhereInput | td_curso_ahbbScalarWhereInput[]
    OR?: td_curso_ahbbScalarWhereInput[]
    NOT?: td_curso_ahbbScalarWhereInput | td_curso_ahbbScalarWhereInput[]
    id_curso_ahbb?: IntFilter<"td_curso_ahbb"> | number
    nombre_ahbb?: StringFilter<"td_curso_ahbb"> | string
    tematica_ahbb?: StringFilter<"td_curso_ahbb"> | string
    descripcion_ahbb?: StringNullableFilter<"td_curso_ahbb"> | string | null
    diasDefinidos_ahbb?: IntFilter<"td_curso_ahbb"> | number
    horasDefinidas_ahbb?: IntFilter<"td_curso_ahbb"> | number
    fechaInicio_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    fechaFin_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    fechaDuracion_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    topeEstudiantes_ahbb?: IntNullableFilter<"td_curso_ahbb"> | number | null
    temarioTexto_ahbb?: StringNullableFilter<"td_curso_ahbb"> | string | null
    imagenBasePdf_ahbb?: StringNullableFilter<"td_curso_ahbb"> | string | null
    imagenBloqueada_ahbb?: BoolNullableFilter<"td_curso_ahbb"> | boolean | null
    isPublished_ahbb?: BoolFilter<"td_curso_ahbb"> | boolean
    id_usuario_curso_ahbb?: IntFilter<"td_curso_ahbb"> | number
    id_curso_curso_ahbb?: IntNullableFilter<"td_curso_ahbb"> | number | null
    creadoEn_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
    actualizadoEn_ahbb?: DateTimeNullableFilter<"td_curso_ahbb"> | Date | string | null
  }

  export type td_inscripcion_ahbbUpsertWithWhereUniqueWithoutAlumnoInput = {
    where: td_inscripcion_ahbbWhereUniqueInput
    update: XOR<td_inscripcion_ahbbUpdateWithoutAlumnoInput, td_inscripcion_ahbbUncheckedUpdateWithoutAlumnoInput>
    create: XOR<td_inscripcion_ahbbCreateWithoutAlumnoInput, td_inscripcion_ahbbUncheckedCreateWithoutAlumnoInput>
  }

  export type td_inscripcion_ahbbUpdateWithWhereUniqueWithoutAlumnoInput = {
    where: td_inscripcion_ahbbWhereUniqueInput
    data: XOR<td_inscripcion_ahbbUpdateWithoutAlumnoInput, td_inscripcion_ahbbUncheckedUpdateWithoutAlumnoInput>
  }

  export type td_inscripcion_ahbbUpdateManyWithWhereWithoutAlumnoInput = {
    where: td_inscripcion_ahbbScalarWhereInput
    data: XOR<td_inscripcion_ahbbUpdateManyMutationInput, td_inscripcion_ahbbUncheckedUpdateManyWithoutAlumnoInput>
  }

  export type td_inscripcion_ahbbScalarWhereInput = {
    AND?: td_inscripcion_ahbbScalarWhereInput | td_inscripcion_ahbbScalarWhereInput[]
    OR?: td_inscripcion_ahbbScalarWhereInput[]
    NOT?: td_inscripcion_ahbbScalarWhereInput | td_inscripcion_ahbbScalarWhereInput[]
    id_inscripcion_ahbb?: IntFilter<"td_inscripcion_ahbb"> | number
    estatus_ahbb?: StringNullableFilter<"td_inscripcion_ahbb"> | string | null
    intento_ahbb?: IntFilter<"td_inscripcion_ahbb"> | number
    notaFinal_ahbb?: DecimalNullableFilter<"td_inscripcion_ahbb"> | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: StringNullableFilter<"td_inscripcion_ahbb"> | string | null
    id_usuario_inscripcion_ahbb?: IntFilter<"td_inscripcion_ahbb"> | number
    id_curso_inscripcion_ahbb?: IntFilter<"td_inscripcion_ahbb"> | number
    creadoEn_ahbb?: DateTimeNullableFilter<"td_inscripcion_ahbb"> | Date | string | null
    actualizadoEn_ahbb?: DateTimeNullableFilter<"td_inscripcion_ahbb"> | Date | string | null
  }

  export type td_auditoria_aprobacion_ahbbUpsertWithWhereUniqueWithoutAprobador_ahbbInput = {
    where: td_auditoria_aprobacion_ahbbWhereUniqueInput
    update: XOR<td_auditoria_aprobacion_ahbbUpdateWithoutAprobador_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedUpdateWithoutAprobador_ahbbInput>
    create: XOR<td_auditoria_aprobacion_ahbbCreateWithoutAprobador_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedCreateWithoutAprobador_ahbbInput>
  }

  export type td_auditoria_aprobacion_ahbbUpdateWithWhereUniqueWithoutAprobador_ahbbInput = {
    where: td_auditoria_aprobacion_ahbbWhereUniqueInput
    data: XOR<td_auditoria_aprobacion_ahbbUpdateWithoutAprobador_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedUpdateWithoutAprobador_ahbbInput>
  }

  export type td_auditoria_aprobacion_ahbbUpdateManyWithWhereWithoutAprobador_ahbbInput = {
    where: td_auditoria_aprobacion_ahbbScalarWhereInput
    data: XOR<td_auditoria_aprobacion_ahbbUpdateManyMutationInput, td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutAprobador_ahbbInput>
  }

  export type td_auditoria_aprobacion_ahbbScalarWhereInput = {
    AND?: td_auditoria_aprobacion_ahbbScalarWhereInput | td_auditoria_aprobacion_ahbbScalarWhereInput[]
    OR?: td_auditoria_aprobacion_ahbbScalarWhereInput[]
    NOT?: td_auditoria_aprobacion_ahbbScalarWhereInput | td_auditoria_aprobacion_ahbbScalarWhereInput[]
    id_auditoria_aprobacion_ahbb?: IntFilter<"td_auditoria_aprobacion_ahbb"> | number
    tipoOperacion_ahbb?: StringFilter<"td_auditoria_aprobacion_ahbb"> | string
    referenciaOperacion_ahbb?: StringFilter<"td_auditoria_aprobacion_ahbb"> | string
    observacion_ahbb?: StringNullableFilter<"td_auditoria_aprobacion_ahbb"> | string | null
    id_usuario_auditado_ahbb?: IntFilter<"td_auditoria_aprobacion_ahbb"> | number
    id_aprobador_ahbb?: IntFilter<"td_auditoria_aprobacion_ahbb"> | number
    creadoEn_ahbb?: DateTimeFilter<"td_auditoria_aprobacion_ahbb"> | Date | string
  }

  export type td_auditoria_aprobacion_ahbbUpsertWithWhereUniqueWithoutUsuarioAuditado_ahbbInput = {
    where: td_auditoria_aprobacion_ahbbWhereUniqueInput
    update: XOR<td_auditoria_aprobacion_ahbbUpdateWithoutUsuarioAuditado_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedUpdateWithoutUsuarioAuditado_ahbbInput>
    create: XOR<td_auditoria_aprobacion_ahbbCreateWithoutUsuarioAuditado_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedCreateWithoutUsuarioAuditado_ahbbInput>
  }

  export type td_auditoria_aprobacion_ahbbUpdateWithWhereUniqueWithoutUsuarioAuditado_ahbbInput = {
    where: td_auditoria_aprobacion_ahbbWhereUniqueInput
    data: XOR<td_auditoria_aprobacion_ahbbUpdateWithoutUsuarioAuditado_ahbbInput, td_auditoria_aprobacion_ahbbUncheckedUpdateWithoutUsuarioAuditado_ahbbInput>
  }

  export type td_auditoria_aprobacion_ahbbUpdateManyWithWhereWithoutUsuarioAuditado_ahbbInput = {
    where: td_auditoria_aprobacion_ahbbScalarWhereInput
    data: XOR<td_auditoria_aprobacion_ahbbUpdateManyMutationInput, td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutUsuarioAuditado_ahbbInput>
  }

  export type td_usuario_ahbbCreateWithoutCursosInput = {
    cedula_ahbb: string
    nombre_ahbb: string
    apellido_ahbb: string
    correo_ahbb: string
    contrasena_ahbb: string
    rol_ahbb?: string | null
    firmaDigital_ahbb?: string | null
    estadoCuenta_ahbb?: string
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: string | null
    aprobadoPorUsuarioId_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    inscripciones?: td_inscripcion_ahbbCreateNestedManyWithoutAlumnoInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbCreateNestedManyWithoutAprobador_ahbbInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbCreateNestedManyWithoutUsuarioAuditado_ahbbInput
  }

  export type td_usuario_ahbbUncheckedCreateWithoutCursosInput = {
    id_usuario_ahbb?: number
    cedula_ahbb: string
    nombre_ahbb: string
    apellido_ahbb: string
    correo_ahbb: string
    contrasena_ahbb: string
    rol_ahbb?: string | null
    firmaDigital_ahbb?: string | null
    estadoCuenta_ahbb?: string
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: string | null
    aprobadoPorUsuarioId_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    inscripciones?: td_inscripcion_ahbbUncheckedCreateNestedManyWithoutAlumnoInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbUncheckedCreateNestedManyWithoutAprobador_ahbbInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbUncheckedCreateNestedManyWithoutUsuarioAuditado_ahbbInput
  }

  export type td_usuario_ahbbCreateOrConnectWithoutCursosInput = {
    where: td_usuario_ahbbWhereUniqueInput
    create: XOR<td_usuario_ahbbCreateWithoutCursosInput, td_usuario_ahbbUncheckedCreateWithoutCursosInput>
  }

  export type td_curso_ahbbCreateWithoutPrelacionesInput = {
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    profesor: td_usuario_ahbbCreateNestedOneWithoutCursosInput
    prelacion?: td_curso_ahbbCreateNestedOneWithoutPrelacionesInput
    horarios?: td_horario_ahbbCreateNestedManyWithoutCursoInput
    inscripciones?: td_inscripcion_ahbbCreateNestedManyWithoutCursoInput
  }

  export type td_curso_ahbbUncheckedCreateWithoutPrelacionesInput = {
    id_curso_ahbb?: number
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    id_usuario_curso_ahbb: number
    id_curso_curso_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    horarios?: td_horario_ahbbUncheckedCreateNestedManyWithoutCursoInput
    inscripciones?: td_inscripcion_ahbbUncheckedCreateNestedManyWithoutCursoInput
  }

  export type td_curso_ahbbCreateOrConnectWithoutPrelacionesInput = {
    where: td_curso_ahbbWhereUniqueInput
    create: XOR<td_curso_ahbbCreateWithoutPrelacionesInput, td_curso_ahbbUncheckedCreateWithoutPrelacionesInput>
  }

  export type td_curso_ahbbCreateWithoutPrelacionInput = {
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    profesor: td_usuario_ahbbCreateNestedOneWithoutCursosInput
    prelaciones?: td_curso_ahbbCreateNestedManyWithoutPrelacionInput
    horarios?: td_horario_ahbbCreateNestedManyWithoutCursoInput
    inscripciones?: td_inscripcion_ahbbCreateNestedManyWithoutCursoInput
  }

  export type td_curso_ahbbUncheckedCreateWithoutPrelacionInput = {
    id_curso_ahbb?: number
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    id_usuario_curso_ahbb: number
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    prelaciones?: td_curso_ahbbUncheckedCreateNestedManyWithoutPrelacionInput
    horarios?: td_horario_ahbbUncheckedCreateNestedManyWithoutCursoInput
    inscripciones?: td_inscripcion_ahbbUncheckedCreateNestedManyWithoutCursoInput
  }

  export type td_curso_ahbbCreateOrConnectWithoutPrelacionInput = {
    where: td_curso_ahbbWhereUniqueInput
    create: XOR<td_curso_ahbbCreateWithoutPrelacionInput, td_curso_ahbbUncheckedCreateWithoutPrelacionInput>
  }

  export type td_curso_ahbbCreateManyPrelacionInputEnvelope = {
    data: td_curso_ahbbCreateManyPrelacionInput | td_curso_ahbbCreateManyPrelacionInput[]
    skipDuplicates?: boolean
  }

  export type td_horario_ahbbCreateWithoutCursoInput = {
    diaSemana_ahbb: string
    horaInicio_ahbb: string
    horaFin_ahbb: string
  }

  export type td_horario_ahbbUncheckedCreateWithoutCursoInput = {
    id_horario_ahbb?: number
    diaSemana_ahbb: string
    horaInicio_ahbb: string
    horaFin_ahbb: string
  }

  export type td_horario_ahbbCreateOrConnectWithoutCursoInput = {
    where: td_horario_ahbbWhereUniqueInput
    create: XOR<td_horario_ahbbCreateWithoutCursoInput, td_horario_ahbbUncheckedCreateWithoutCursoInput>
  }

  export type td_horario_ahbbCreateManyCursoInputEnvelope = {
    data: td_horario_ahbbCreateManyCursoInput | td_horario_ahbbCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type td_inscripcion_ahbbCreateWithoutCursoInput = {
    estatus_ahbb?: string | null
    intento_ahbb?: number
    notaFinal_ahbb?: Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: string | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    alumno: td_usuario_ahbbCreateNestedOneWithoutInscripcionesInput
    certificado?: td_certificado_ahbbCreateNestedOneWithoutInscripcionInput
  }

  export type td_inscripcion_ahbbUncheckedCreateWithoutCursoInput = {
    id_inscripcion_ahbb?: number
    estatus_ahbb?: string | null
    intento_ahbb?: number
    notaFinal_ahbb?: Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: string | null
    id_usuario_inscripcion_ahbb: number
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    certificado?: td_certificado_ahbbUncheckedCreateNestedOneWithoutInscripcionInput
  }

  export type td_inscripcion_ahbbCreateOrConnectWithoutCursoInput = {
    where: td_inscripcion_ahbbWhereUniqueInput
    create: XOR<td_inscripcion_ahbbCreateWithoutCursoInput, td_inscripcion_ahbbUncheckedCreateWithoutCursoInput>
  }

  export type td_inscripcion_ahbbCreateManyCursoInputEnvelope = {
    data: td_inscripcion_ahbbCreateManyCursoInput | td_inscripcion_ahbbCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type td_usuario_ahbbUpsertWithoutCursosInput = {
    update: XOR<td_usuario_ahbbUpdateWithoutCursosInput, td_usuario_ahbbUncheckedUpdateWithoutCursosInput>
    create: XOR<td_usuario_ahbbCreateWithoutCursosInput, td_usuario_ahbbUncheckedCreateWithoutCursosInput>
    where?: td_usuario_ahbbWhereInput
  }

  export type td_usuario_ahbbUpdateToOneWithWhereWithoutCursosInput = {
    where?: td_usuario_ahbbWhereInput
    data: XOR<td_usuario_ahbbUpdateWithoutCursosInput, td_usuario_ahbbUncheckedUpdateWithoutCursosInput>
  }

  export type td_usuario_ahbbUpdateWithoutCursosInput = {
    cedula_ahbb?: StringFieldUpdateOperationsInput | string
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    apellido_ahbb?: StringFieldUpdateOperationsInput | string
    correo_ahbb?: StringFieldUpdateOperationsInput | string
    contrasena_ahbb?: StringFieldUpdateOperationsInput | string
    rol_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    firmaDigital_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCuenta_ahbb?: StringFieldUpdateOperationsInput | string
    requiereCambioContrasena_ahbb?: BoolFieldUpdateOperationsInput | boolean
    referenciaPagoMovil_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    aprobadoPorUsuarioId_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inscripciones?: td_inscripcion_ahbbUpdateManyWithoutAlumnoNestedInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbUpdateManyWithoutAprobador_ahbbNestedInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbUpdateManyWithoutUsuarioAuditado_ahbbNestedInput
  }

  export type td_usuario_ahbbUncheckedUpdateWithoutCursosInput = {
    id_usuario_ahbb?: IntFieldUpdateOperationsInput | number
    cedula_ahbb?: StringFieldUpdateOperationsInput | string
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    apellido_ahbb?: StringFieldUpdateOperationsInput | string
    correo_ahbb?: StringFieldUpdateOperationsInput | string
    contrasena_ahbb?: StringFieldUpdateOperationsInput | string
    rol_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    firmaDigital_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCuenta_ahbb?: StringFieldUpdateOperationsInput | string
    requiereCambioContrasena_ahbb?: BoolFieldUpdateOperationsInput | boolean
    referenciaPagoMovil_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    aprobadoPorUsuarioId_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inscripciones?: td_inscripcion_ahbbUncheckedUpdateManyWithoutAlumnoNestedInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutAprobador_ahbbNestedInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutUsuarioAuditado_ahbbNestedInput
  }

  export type td_curso_ahbbUpsertWithoutPrelacionesInput = {
    update: XOR<td_curso_ahbbUpdateWithoutPrelacionesInput, td_curso_ahbbUncheckedUpdateWithoutPrelacionesInput>
    create: XOR<td_curso_ahbbCreateWithoutPrelacionesInput, td_curso_ahbbUncheckedCreateWithoutPrelacionesInput>
    where?: td_curso_ahbbWhereInput
  }

  export type td_curso_ahbbUpdateToOneWithWhereWithoutPrelacionesInput = {
    where?: td_curso_ahbbWhereInput
    data: XOR<td_curso_ahbbUpdateWithoutPrelacionesInput, td_curso_ahbbUncheckedUpdateWithoutPrelacionesInput>
  }

  export type td_curso_ahbbUpdateWithoutPrelacionesInput = {
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profesor?: td_usuario_ahbbUpdateOneRequiredWithoutCursosNestedInput
    prelacion?: td_curso_ahbbUpdateOneWithoutPrelacionesNestedInput
    horarios?: td_horario_ahbbUpdateManyWithoutCursoNestedInput
    inscripciones?: td_inscripcion_ahbbUpdateManyWithoutCursoNestedInput
  }

  export type td_curso_ahbbUncheckedUpdateWithoutPrelacionesInput = {
    id_curso_ahbb?: IntFieldUpdateOperationsInput | number
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    id_usuario_curso_ahbb?: IntFieldUpdateOperationsInput | number
    id_curso_curso_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horarios?: td_horario_ahbbUncheckedUpdateManyWithoutCursoNestedInput
    inscripciones?: td_inscripcion_ahbbUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type td_curso_ahbbUpsertWithWhereUniqueWithoutPrelacionInput = {
    where: td_curso_ahbbWhereUniqueInput
    update: XOR<td_curso_ahbbUpdateWithoutPrelacionInput, td_curso_ahbbUncheckedUpdateWithoutPrelacionInput>
    create: XOR<td_curso_ahbbCreateWithoutPrelacionInput, td_curso_ahbbUncheckedCreateWithoutPrelacionInput>
  }

  export type td_curso_ahbbUpdateWithWhereUniqueWithoutPrelacionInput = {
    where: td_curso_ahbbWhereUniqueInput
    data: XOR<td_curso_ahbbUpdateWithoutPrelacionInput, td_curso_ahbbUncheckedUpdateWithoutPrelacionInput>
  }

  export type td_curso_ahbbUpdateManyWithWhereWithoutPrelacionInput = {
    where: td_curso_ahbbScalarWhereInput
    data: XOR<td_curso_ahbbUpdateManyMutationInput, td_curso_ahbbUncheckedUpdateManyWithoutPrelacionInput>
  }

  export type td_horario_ahbbUpsertWithWhereUniqueWithoutCursoInput = {
    where: td_horario_ahbbWhereUniqueInput
    update: XOR<td_horario_ahbbUpdateWithoutCursoInput, td_horario_ahbbUncheckedUpdateWithoutCursoInput>
    create: XOR<td_horario_ahbbCreateWithoutCursoInput, td_horario_ahbbUncheckedCreateWithoutCursoInput>
  }

  export type td_horario_ahbbUpdateWithWhereUniqueWithoutCursoInput = {
    where: td_horario_ahbbWhereUniqueInput
    data: XOR<td_horario_ahbbUpdateWithoutCursoInput, td_horario_ahbbUncheckedUpdateWithoutCursoInput>
  }

  export type td_horario_ahbbUpdateManyWithWhereWithoutCursoInput = {
    where: td_horario_ahbbScalarWhereInput
    data: XOR<td_horario_ahbbUpdateManyMutationInput, td_horario_ahbbUncheckedUpdateManyWithoutCursoInput>
  }

  export type td_horario_ahbbScalarWhereInput = {
    AND?: td_horario_ahbbScalarWhereInput | td_horario_ahbbScalarWhereInput[]
    OR?: td_horario_ahbbScalarWhereInput[]
    NOT?: td_horario_ahbbScalarWhereInput | td_horario_ahbbScalarWhereInput[]
    id_horario_ahbb?: IntFilter<"td_horario_ahbb"> | number
    diaSemana_ahbb?: StringFilter<"td_horario_ahbb"> | string
    horaInicio_ahbb?: StringFilter<"td_horario_ahbb"> | string
    horaFin_ahbb?: StringFilter<"td_horario_ahbb"> | string
    id_curso_horario_ahbb?: IntFilter<"td_horario_ahbb"> | number
  }

  export type td_inscripcion_ahbbUpsertWithWhereUniqueWithoutCursoInput = {
    where: td_inscripcion_ahbbWhereUniqueInput
    update: XOR<td_inscripcion_ahbbUpdateWithoutCursoInput, td_inscripcion_ahbbUncheckedUpdateWithoutCursoInput>
    create: XOR<td_inscripcion_ahbbCreateWithoutCursoInput, td_inscripcion_ahbbUncheckedCreateWithoutCursoInput>
  }

  export type td_inscripcion_ahbbUpdateWithWhereUniqueWithoutCursoInput = {
    where: td_inscripcion_ahbbWhereUniqueInput
    data: XOR<td_inscripcion_ahbbUpdateWithoutCursoInput, td_inscripcion_ahbbUncheckedUpdateWithoutCursoInput>
  }

  export type td_inscripcion_ahbbUpdateManyWithWhereWithoutCursoInput = {
    where: td_inscripcion_ahbbScalarWhereInput
    data: XOR<td_inscripcion_ahbbUpdateManyMutationInput, td_inscripcion_ahbbUncheckedUpdateManyWithoutCursoInput>
  }

  export type td_curso_ahbbCreateWithoutHorariosInput = {
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    profesor: td_usuario_ahbbCreateNestedOneWithoutCursosInput
    prelacion?: td_curso_ahbbCreateNestedOneWithoutPrelacionesInput
    prelaciones?: td_curso_ahbbCreateNestedManyWithoutPrelacionInput
    inscripciones?: td_inscripcion_ahbbCreateNestedManyWithoutCursoInput
  }

  export type td_curso_ahbbUncheckedCreateWithoutHorariosInput = {
    id_curso_ahbb?: number
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    id_usuario_curso_ahbb: number
    id_curso_curso_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    prelaciones?: td_curso_ahbbUncheckedCreateNestedManyWithoutPrelacionInput
    inscripciones?: td_inscripcion_ahbbUncheckedCreateNestedManyWithoutCursoInput
  }

  export type td_curso_ahbbCreateOrConnectWithoutHorariosInput = {
    where: td_curso_ahbbWhereUniqueInput
    create: XOR<td_curso_ahbbCreateWithoutHorariosInput, td_curso_ahbbUncheckedCreateWithoutHorariosInput>
  }

  export type td_curso_ahbbUpsertWithoutHorariosInput = {
    update: XOR<td_curso_ahbbUpdateWithoutHorariosInput, td_curso_ahbbUncheckedUpdateWithoutHorariosInput>
    create: XOR<td_curso_ahbbCreateWithoutHorariosInput, td_curso_ahbbUncheckedCreateWithoutHorariosInput>
    where?: td_curso_ahbbWhereInput
  }

  export type td_curso_ahbbUpdateToOneWithWhereWithoutHorariosInput = {
    where?: td_curso_ahbbWhereInput
    data: XOR<td_curso_ahbbUpdateWithoutHorariosInput, td_curso_ahbbUncheckedUpdateWithoutHorariosInput>
  }

  export type td_curso_ahbbUpdateWithoutHorariosInput = {
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profesor?: td_usuario_ahbbUpdateOneRequiredWithoutCursosNestedInput
    prelacion?: td_curso_ahbbUpdateOneWithoutPrelacionesNestedInput
    prelaciones?: td_curso_ahbbUpdateManyWithoutPrelacionNestedInput
    inscripciones?: td_inscripcion_ahbbUpdateManyWithoutCursoNestedInput
  }

  export type td_curso_ahbbUncheckedUpdateWithoutHorariosInput = {
    id_curso_ahbb?: IntFieldUpdateOperationsInput | number
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    id_usuario_curso_ahbb?: IntFieldUpdateOperationsInput | number
    id_curso_curso_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelaciones?: td_curso_ahbbUncheckedUpdateManyWithoutPrelacionNestedInput
    inscripciones?: td_inscripcion_ahbbUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type td_usuario_ahbbCreateWithoutInscripcionesInput = {
    cedula_ahbb: string
    nombre_ahbb: string
    apellido_ahbb: string
    correo_ahbb: string
    contrasena_ahbb: string
    rol_ahbb?: string | null
    firmaDigital_ahbb?: string | null
    estadoCuenta_ahbb?: string
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: string | null
    aprobadoPorUsuarioId_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    cursos?: td_curso_ahbbCreateNestedManyWithoutProfesorInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbCreateNestedManyWithoutAprobador_ahbbInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbCreateNestedManyWithoutUsuarioAuditado_ahbbInput
  }

  export type td_usuario_ahbbUncheckedCreateWithoutInscripcionesInput = {
    id_usuario_ahbb?: number
    cedula_ahbb: string
    nombre_ahbb: string
    apellido_ahbb: string
    correo_ahbb: string
    contrasena_ahbb: string
    rol_ahbb?: string | null
    firmaDigital_ahbb?: string | null
    estadoCuenta_ahbb?: string
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: string | null
    aprobadoPorUsuarioId_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    cursos?: td_curso_ahbbUncheckedCreateNestedManyWithoutProfesorInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbUncheckedCreateNestedManyWithoutAprobador_ahbbInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbUncheckedCreateNestedManyWithoutUsuarioAuditado_ahbbInput
  }

  export type td_usuario_ahbbCreateOrConnectWithoutInscripcionesInput = {
    where: td_usuario_ahbbWhereUniqueInput
    create: XOR<td_usuario_ahbbCreateWithoutInscripcionesInput, td_usuario_ahbbUncheckedCreateWithoutInscripcionesInput>
  }

  export type td_curso_ahbbCreateWithoutInscripcionesInput = {
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    profesor: td_usuario_ahbbCreateNestedOneWithoutCursosInput
    prelacion?: td_curso_ahbbCreateNestedOneWithoutPrelacionesInput
    prelaciones?: td_curso_ahbbCreateNestedManyWithoutPrelacionInput
    horarios?: td_horario_ahbbCreateNestedManyWithoutCursoInput
  }

  export type td_curso_ahbbUncheckedCreateWithoutInscripcionesInput = {
    id_curso_ahbb?: number
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    id_usuario_curso_ahbb: number
    id_curso_curso_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    prelaciones?: td_curso_ahbbUncheckedCreateNestedManyWithoutPrelacionInput
    horarios?: td_horario_ahbbUncheckedCreateNestedManyWithoutCursoInput
  }

  export type td_curso_ahbbCreateOrConnectWithoutInscripcionesInput = {
    where: td_curso_ahbbWhereUniqueInput
    create: XOR<td_curso_ahbbCreateWithoutInscripcionesInput, td_curso_ahbbUncheckedCreateWithoutInscripcionesInput>
  }

  export type td_certificado_ahbbCreateWithoutInscripcionInput = {
    codigoQrUrl_ahbb: string
    creadoEn_ahbb?: Date | string | null
  }

  export type td_certificado_ahbbUncheckedCreateWithoutInscripcionInput = {
    id_certificado_ahbb?: number
    codigoQrUrl_ahbb: string
    creadoEn_ahbb?: Date | string | null
  }

  export type td_certificado_ahbbCreateOrConnectWithoutInscripcionInput = {
    where: td_certificado_ahbbWhereUniqueInput
    create: XOR<td_certificado_ahbbCreateWithoutInscripcionInput, td_certificado_ahbbUncheckedCreateWithoutInscripcionInput>
  }

  export type td_usuario_ahbbUpsertWithoutInscripcionesInput = {
    update: XOR<td_usuario_ahbbUpdateWithoutInscripcionesInput, td_usuario_ahbbUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<td_usuario_ahbbCreateWithoutInscripcionesInput, td_usuario_ahbbUncheckedCreateWithoutInscripcionesInput>
    where?: td_usuario_ahbbWhereInput
  }

  export type td_usuario_ahbbUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: td_usuario_ahbbWhereInput
    data: XOR<td_usuario_ahbbUpdateWithoutInscripcionesInput, td_usuario_ahbbUncheckedUpdateWithoutInscripcionesInput>
  }

  export type td_usuario_ahbbUpdateWithoutInscripcionesInput = {
    cedula_ahbb?: StringFieldUpdateOperationsInput | string
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    apellido_ahbb?: StringFieldUpdateOperationsInput | string
    correo_ahbb?: StringFieldUpdateOperationsInput | string
    contrasena_ahbb?: StringFieldUpdateOperationsInput | string
    rol_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    firmaDigital_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCuenta_ahbb?: StringFieldUpdateOperationsInput | string
    requiereCambioContrasena_ahbb?: BoolFieldUpdateOperationsInput | boolean
    referenciaPagoMovil_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    aprobadoPorUsuarioId_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: td_curso_ahbbUpdateManyWithoutProfesorNestedInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbUpdateManyWithoutAprobador_ahbbNestedInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbUpdateManyWithoutUsuarioAuditado_ahbbNestedInput
  }

  export type td_usuario_ahbbUncheckedUpdateWithoutInscripcionesInput = {
    id_usuario_ahbb?: IntFieldUpdateOperationsInput | number
    cedula_ahbb?: StringFieldUpdateOperationsInput | string
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    apellido_ahbb?: StringFieldUpdateOperationsInput | string
    correo_ahbb?: StringFieldUpdateOperationsInput | string
    contrasena_ahbb?: StringFieldUpdateOperationsInput | string
    rol_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    firmaDigital_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCuenta_ahbb?: StringFieldUpdateOperationsInput | string
    requiereCambioContrasena_ahbb?: BoolFieldUpdateOperationsInput | boolean
    referenciaPagoMovil_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    aprobadoPorUsuarioId_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: td_curso_ahbbUncheckedUpdateManyWithoutProfesorNestedInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutAprobador_ahbbNestedInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutUsuarioAuditado_ahbbNestedInput
  }

  export type td_curso_ahbbUpsertWithoutInscripcionesInput = {
    update: XOR<td_curso_ahbbUpdateWithoutInscripcionesInput, td_curso_ahbbUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<td_curso_ahbbCreateWithoutInscripcionesInput, td_curso_ahbbUncheckedCreateWithoutInscripcionesInput>
    where?: td_curso_ahbbWhereInput
  }

  export type td_curso_ahbbUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: td_curso_ahbbWhereInput
    data: XOR<td_curso_ahbbUpdateWithoutInscripcionesInput, td_curso_ahbbUncheckedUpdateWithoutInscripcionesInput>
  }

  export type td_curso_ahbbUpdateWithoutInscripcionesInput = {
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profesor?: td_usuario_ahbbUpdateOneRequiredWithoutCursosNestedInput
    prelacion?: td_curso_ahbbUpdateOneWithoutPrelacionesNestedInput
    prelaciones?: td_curso_ahbbUpdateManyWithoutPrelacionNestedInput
    horarios?: td_horario_ahbbUpdateManyWithoutCursoNestedInput
  }

  export type td_curso_ahbbUncheckedUpdateWithoutInscripcionesInput = {
    id_curso_ahbb?: IntFieldUpdateOperationsInput | number
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    id_usuario_curso_ahbb?: IntFieldUpdateOperationsInput | number
    id_curso_curso_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelaciones?: td_curso_ahbbUncheckedUpdateManyWithoutPrelacionNestedInput
    horarios?: td_horario_ahbbUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type td_certificado_ahbbUpsertWithoutInscripcionInput = {
    update: XOR<td_certificado_ahbbUpdateWithoutInscripcionInput, td_certificado_ahbbUncheckedUpdateWithoutInscripcionInput>
    create: XOR<td_certificado_ahbbCreateWithoutInscripcionInput, td_certificado_ahbbUncheckedCreateWithoutInscripcionInput>
    where?: td_certificado_ahbbWhereInput
  }

  export type td_certificado_ahbbUpdateToOneWithWhereWithoutInscripcionInput = {
    where?: td_certificado_ahbbWhereInput
    data: XOR<td_certificado_ahbbUpdateWithoutInscripcionInput, td_certificado_ahbbUncheckedUpdateWithoutInscripcionInput>
  }

  export type td_certificado_ahbbUpdateWithoutInscripcionInput = {
    codigoQrUrl_ahbb?: StringFieldUpdateOperationsInput | string
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_certificado_ahbbUncheckedUpdateWithoutInscripcionInput = {
    id_certificado_ahbb?: IntFieldUpdateOperationsInput | number
    codigoQrUrl_ahbb?: StringFieldUpdateOperationsInput | string
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_inscripcion_ahbbCreateWithoutCertificadoInput = {
    estatus_ahbb?: string | null
    intento_ahbb?: number
    notaFinal_ahbb?: Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: string | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    alumno: td_usuario_ahbbCreateNestedOneWithoutInscripcionesInput
    curso: td_curso_ahbbCreateNestedOneWithoutInscripcionesInput
  }

  export type td_inscripcion_ahbbUncheckedCreateWithoutCertificadoInput = {
    id_inscripcion_ahbb?: number
    estatus_ahbb?: string | null
    intento_ahbb?: number
    notaFinal_ahbb?: Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: string | null
    id_usuario_inscripcion_ahbb: number
    id_curso_inscripcion_ahbb: number
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
  }

  export type td_inscripcion_ahbbCreateOrConnectWithoutCertificadoInput = {
    where: td_inscripcion_ahbbWhereUniqueInput
    create: XOR<td_inscripcion_ahbbCreateWithoutCertificadoInput, td_inscripcion_ahbbUncheckedCreateWithoutCertificadoInput>
  }

  export type td_inscripcion_ahbbUpsertWithoutCertificadoInput = {
    update: XOR<td_inscripcion_ahbbUpdateWithoutCertificadoInput, td_inscripcion_ahbbUncheckedUpdateWithoutCertificadoInput>
    create: XOR<td_inscripcion_ahbbCreateWithoutCertificadoInput, td_inscripcion_ahbbUncheckedCreateWithoutCertificadoInput>
    where?: td_inscripcion_ahbbWhereInput
  }

  export type td_inscripcion_ahbbUpdateToOneWithWhereWithoutCertificadoInput = {
    where?: td_inscripcion_ahbbWhereInput
    data: XOR<td_inscripcion_ahbbUpdateWithoutCertificadoInput, td_inscripcion_ahbbUncheckedUpdateWithoutCertificadoInput>
  }

  export type td_inscripcion_ahbbUpdateWithoutCertificadoInput = {
    estatus_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    intento_ahbb?: IntFieldUpdateOperationsInput | number
    notaFinal_ahbb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alumno?: td_usuario_ahbbUpdateOneRequiredWithoutInscripcionesNestedInput
    curso?: td_curso_ahbbUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type td_inscripcion_ahbbUncheckedUpdateWithoutCertificadoInput = {
    id_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    estatus_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    intento_ahbb?: IntFieldUpdateOperationsInput | number
    notaFinal_ahbb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    id_curso_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_usuario_ahbbCreateWithoutAuditoriasUsuario_ahbbInput = {
    cedula_ahbb: string
    nombre_ahbb: string
    apellido_ahbb: string
    correo_ahbb: string
    contrasena_ahbb: string
    rol_ahbb?: string | null
    firmaDigital_ahbb?: string | null
    estadoCuenta_ahbb?: string
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: string | null
    aprobadoPorUsuarioId_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    cursos?: td_curso_ahbbCreateNestedManyWithoutProfesorInput
    inscripciones?: td_inscripcion_ahbbCreateNestedManyWithoutAlumnoInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbCreateNestedManyWithoutAprobador_ahbbInput
  }

  export type td_usuario_ahbbUncheckedCreateWithoutAuditoriasUsuario_ahbbInput = {
    id_usuario_ahbb?: number
    cedula_ahbb: string
    nombre_ahbb: string
    apellido_ahbb: string
    correo_ahbb: string
    contrasena_ahbb: string
    rol_ahbb?: string | null
    firmaDigital_ahbb?: string | null
    estadoCuenta_ahbb?: string
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: string | null
    aprobadoPorUsuarioId_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    cursos?: td_curso_ahbbUncheckedCreateNestedManyWithoutProfesorInput
    inscripciones?: td_inscripcion_ahbbUncheckedCreateNestedManyWithoutAlumnoInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbUncheckedCreateNestedManyWithoutAprobador_ahbbInput
  }

  export type td_usuario_ahbbCreateOrConnectWithoutAuditoriasUsuario_ahbbInput = {
    where: td_usuario_ahbbWhereUniqueInput
    create: XOR<td_usuario_ahbbCreateWithoutAuditoriasUsuario_ahbbInput, td_usuario_ahbbUncheckedCreateWithoutAuditoriasUsuario_ahbbInput>
  }

  export type td_usuario_ahbbCreateWithoutAuditoriasAprobadas_ahbbInput = {
    cedula_ahbb: string
    nombre_ahbb: string
    apellido_ahbb: string
    correo_ahbb: string
    contrasena_ahbb: string
    rol_ahbb?: string | null
    firmaDigital_ahbb?: string | null
    estadoCuenta_ahbb?: string
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: string | null
    aprobadoPorUsuarioId_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    cursos?: td_curso_ahbbCreateNestedManyWithoutProfesorInput
    inscripciones?: td_inscripcion_ahbbCreateNestedManyWithoutAlumnoInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbCreateNestedManyWithoutUsuarioAuditado_ahbbInput
  }

  export type td_usuario_ahbbUncheckedCreateWithoutAuditoriasAprobadas_ahbbInput = {
    id_usuario_ahbb?: number
    cedula_ahbb: string
    nombre_ahbb: string
    apellido_ahbb: string
    correo_ahbb: string
    contrasena_ahbb: string
    rol_ahbb?: string | null
    firmaDigital_ahbb?: string | null
    estadoCuenta_ahbb?: string
    requiereCambioContrasena_ahbb?: boolean
    referenciaPagoMovil_ahbb?: string | null
    aprobadoPorUsuarioId_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
    cursos?: td_curso_ahbbUncheckedCreateNestedManyWithoutProfesorInput
    inscripciones?: td_inscripcion_ahbbUncheckedCreateNestedManyWithoutAlumnoInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbUncheckedCreateNestedManyWithoutUsuarioAuditado_ahbbInput
  }

  export type td_usuario_ahbbCreateOrConnectWithoutAuditoriasAprobadas_ahbbInput = {
    where: td_usuario_ahbbWhereUniqueInput
    create: XOR<td_usuario_ahbbCreateWithoutAuditoriasAprobadas_ahbbInput, td_usuario_ahbbUncheckedCreateWithoutAuditoriasAprobadas_ahbbInput>
  }

  export type td_usuario_ahbbUpsertWithoutAuditoriasUsuario_ahbbInput = {
    update: XOR<td_usuario_ahbbUpdateWithoutAuditoriasUsuario_ahbbInput, td_usuario_ahbbUncheckedUpdateWithoutAuditoriasUsuario_ahbbInput>
    create: XOR<td_usuario_ahbbCreateWithoutAuditoriasUsuario_ahbbInput, td_usuario_ahbbUncheckedCreateWithoutAuditoriasUsuario_ahbbInput>
    where?: td_usuario_ahbbWhereInput
  }

  export type td_usuario_ahbbUpdateToOneWithWhereWithoutAuditoriasUsuario_ahbbInput = {
    where?: td_usuario_ahbbWhereInput
    data: XOR<td_usuario_ahbbUpdateWithoutAuditoriasUsuario_ahbbInput, td_usuario_ahbbUncheckedUpdateWithoutAuditoriasUsuario_ahbbInput>
  }

  export type td_usuario_ahbbUpdateWithoutAuditoriasUsuario_ahbbInput = {
    cedula_ahbb?: StringFieldUpdateOperationsInput | string
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    apellido_ahbb?: StringFieldUpdateOperationsInput | string
    correo_ahbb?: StringFieldUpdateOperationsInput | string
    contrasena_ahbb?: StringFieldUpdateOperationsInput | string
    rol_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    firmaDigital_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCuenta_ahbb?: StringFieldUpdateOperationsInput | string
    requiereCambioContrasena_ahbb?: BoolFieldUpdateOperationsInput | boolean
    referenciaPagoMovil_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    aprobadoPorUsuarioId_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: td_curso_ahbbUpdateManyWithoutProfesorNestedInput
    inscripciones?: td_inscripcion_ahbbUpdateManyWithoutAlumnoNestedInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbUpdateManyWithoutAprobador_ahbbNestedInput
  }

  export type td_usuario_ahbbUncheckedUpdateWithoutAuditoriasUsuario_ahbbInput = {
    id_usuario_ahbb?: IntFieldUpdateOperationsInput | number
    cedula_ahbb?: StringFieldUpdateOperationsInput | string
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    apellido_ahbb?: StringFieldUpdateOperationsInput | string
    correo_ahbb?: StringFieldUpdateOperationsInput | string
    contrasena_ahbb?: StringFieldUpdateOperationsInput | string
    rol_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    firmaDigital_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCuenta_ahbb?: StringFieldUpdateOperationsInput | string
    requiereCambioContrasena_ahbb?: BoolFieldUpdateOperationsInput | boolean
    referenciaPagoMovil_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    aprobadoPorUsuarioId_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: td_curso_ahbbUncheckedUpdateManyWithoutProfesorNestedInput
    inscripciones?: td_inscripcion_ahbbUncheckedUpdateManyWithoutAlumnoNestedInput
    auditoriasAprobadas_ahbb?: td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutAprobador_ahbbNestedInput
  }

  export type td_usuario_ahbbUpsertWithoutAuditoriasAprobadas_ahbbInput = {
    update: XOR<td_usuario_ahbbUpdateWithoutAuditoriasAprobadas_ahbbInput, td_usuario_ahbbUncheckedUpdateWithoutAuditoriasAprobadas_ahbbInput>
    create: XOR<td_usuario_ahbbCreateWithoutAuditoriasAprobadas_ahbbInput, td_usuario_ahbbUncheckedCreateWithoutAuditoriasAprobadas_ahbbInput>
    where?: td_usuario_ahbbWhereInput
  }

  export type td_usuario_ahbbUpdateToOneWithWhereWithoutAuditoriasAprobadas_ahbbInput = {
    where?: td_usuario_ahbbWhereInput
    data: XOR<td_usuario_ahbbUpdateWithoutAuditoriasAprobadas_ahbbInput, td_usuario_ahbbUncheckedUpdateWithoutAuditoriasAprobadas_ahbbInput>
  }

  export type td_usuario_ahbbUpdateWithoutAuditoriasAprobadas_ahbbInput = {
    cedula_ahbb?: StringFieldUpdateOperationsInput | string
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    apellido_ahbb?: StringFieldUpdateOperationsInput | string
    correo_ahbb?: StringFieldUpdateOperationsInput | string
    contrasena_ahbb?: StringFieldUpdateOperationsInput | string
    rol_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    firmaDigital_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCuenta_ahbb?: StringFieldUpdateOperationsInput | string
    requiereCambioContrasena_ahbb?: BoolFieldUpdateOperationsInput | boolean
    referenciaPagoMovil_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    aprobadoPorUsuarioId_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: td_curso_ahbbUpdateManyWithoutProfesorNestedInput
    inscripciones?: td_inscripcion_ahbbUpdateManyWithoutAlumnoNestedInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbUpdateManyWithoutUsuarioAuditado_ahbbNestedInput
  }

  export type td_usuario_ahbbUncheckedUpdateWithoutAuditoriasAprobadas_ahbbInput = {
    id_usuario_ahbb?: IntFieldUpdateOperationsInput | number
    cedula_ahbb?: StringFieldUpdateOperationsInput | string
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    apellido_ahbb?: StringFieldUpdateOperationsInput | string
    correo_ahbb?: StringFieldUpdateOperationsInput | string
    contrasena_ahbb?: StringFieldUpdateOperationsInput | string
    rol_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    firmaDigital_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCuenta_ahbb?: StringFieldUpdateOperationsInput | string
    requiereCambioContrasena_ahbb?: BoolFieldUpdateOperationsInput | boolean
    referenciaPagoMovil_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    aprobadoPorUsuarioId_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: td_curso_ahbbUncheckedUpdateManyWithoutProfesorNestedInput
    inscripciones?: td_inscripcion_ahbbUncheckedUpdateManyWithoutAlumnoNestedInput
    auditoriasUsuario_ahbb?: td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutUsuarioAuditado_ahbbNestedInput
  }

  export type td_curso_ahbbCreateManyProfesorInput = {
    id_curso_ahbb?: number
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    id_curso_curso_ahbb?: number | null
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
  }

  export type td_inscripcion_ahbbCreateManyAlumnoInput = {
    id_inscripcion_ahbb?: number
    estatus_ahbb?: string | null
    intento_ahbb?: number
    notaFinal_ahbb?: Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: string | null
    id_curso_inscripcion_ahbb: number
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
  }

  export type td_auditoria_aprobacion_ahbbCreateManyAprobador_ahbbInput = {
    id_auditoria_aprobacion_ahbb?: number
    tipoOperacion_ahbb: string
    referenciaOperacion_ahbb: string
    observacion_ahbb?: string | null
    id_usuario_auditado_ahbb: number
    creadoEn_ahbb?: Date | string
  }

  export type td_auditoria_aprobacion_ahbbCreateManyUsuarioAuditado_ahbbInput = {
    id_auditoria_aprobacion_ahbb?: number
    tipoOperacion_ahbb: string
    referenciaOperacion_ahbb: string
    observacion_ahbb?: string | null
    id_aprobador_ahbb: number
    creadoEn_ahbb?: Date | string
  }

  export type td_curso_ahbbUpdateWithoutProfesorInput = {
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelacion?: td_curso_ahbbUpdateOneWithoutPrelacionesNestedInput
    prelaciones?: td_curso_ahbbUpdateManyWithoutPrelacionNestedInput
    horarios?: td_horario_ahbbUpdateManyWithoutCursoNestedInput
    inscripciones?: td_inscripcion_ahbbUpdateManyWithoutCursoNestedInput
  }

  export type td_curso_ahbbUncheckedUpdateWithoutProfesorInput = {
    id_curso_ahbb?: IntFieldUpdateOperationsInput | number
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    id_curso_curso_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelaciones?: td_curso_ahbbUncheckedUpdateManyWithoutPrelacionNestedInput
    horarios?: td_horario_ahbbUncheckedUpdateManyWithoutCursoNestedInput
    inscripciones?: td_inscripcion_ahbbUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type td_curso_ahbbUncheckedUpdateManyWithoutProfesorInput = {
    id_curso_ahbb?: IntFieldUpdateOperationsInput | number
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    id_curso_curso_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_inscripcion_ahbbUpdateWithoutAlumnoInput = {
    estatus_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    intento_ahbb?: IntFieldUpdateOperationsInput | number
    notaFinal_ahbb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curso?: td_curso_ahbbUpdateOneRequiredWithoutInscripcionesNestedInput
    certificado?: td_certificado_ahbbUpdateOneWithoutInscripcionNestedInput
  }

  export type td_inscripcion_ahbbUncheckedUpdateWithoutAlumnoInput = {
    id_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    estatus_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    intento_ahbb?: IntFieldUpdateOperationsInput | number
    notaFinal_ahbb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    id_curso_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificado?: td_certificado_ahbbUncheckedUpdateOneWithoutInscripcionNestedInput
  }

  export type td_inscripcion_ahbbUncheckedUpdateManyWithoutAlumnoInput = {
    id_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    estatus_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    intento_ahbb?: IntFieldUpdateOperationsInput | number
    notaFinal_ahbb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    id_curso_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_auditoria_aprobacion_ahbbUpdateWithoutAprobador_ahbbInput = {
    tipoOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    referenciaOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    observacion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn_ahbb?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioAuditado_ahbb?: td_usuario_ahbbUpdateOneRequiredWithoutAuditoriasUsuario_ahbbNestedInput
  }

  export type td_auditoria_aprobacion_ahbbUncheckedUpdateWithoutAprobador_ahbbInput = {
    id_auditoria_aprobacion_ahbb?: IntFieldUpdateOperationsInput | number
    tipoOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    referenciaOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    observacion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_auditado_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutAprobador_ahbbInput = {
    id_auditoria_aprobacion_ahbb?: IntFieldUpdateOperationsInput | number
    tipoOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    referenciaOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    observacion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_auditado_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type td_auditoria_aprobacion_ahbbUpdateWithoutUsuarioAuditado_ahbbInput = {
    tipoOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    referenciaOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    observacion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn_ahbb?: DateTimeFieldUpdateOperationsInput | Date | string
    aprobador_ahbb?: td_usuario_ahbbUpdateOneRequiredWithoutAuditoriasAprobadas_ahbbNestedInput
  }

  export type td_auditoria_aprobacion_ahbbUncheckedUpdateWithoutUsuarioAuditado_ahbbInput = {
    id_auditoria_aprobacion_ahbb?: IntFieldUpdateOperationsInput | number
    tipoOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    referenciaOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    observacion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    id_aprobador_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type td_auditoria_aprobacion_ahbbUncheckedUpdateManyWithoutUsuarioAuditado_ahbbInput = {
    id_auditoria_aprobacion_ahbb?: IntFieldUpdateOperationsInput | number
    tipoOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    referenciaOperacion_ahbb?: StringFieldUpdateOperationsInput | string
    observacion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    id_aprobador_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type td_curso_ahbbCreateManyPrelacionInput = {
    id_curso_ahbb?: number
    nombre_ahbb: string
    tematica_ahbb: string
    descripcion_ahbb?: string | null
    diasDefinidos_ahbb: number
    horasDefinidas_ahbb: number
    fechaInicio_ahbb?: Date | string | null
    fechaFin_ahbb?: Date | string | null
    fechaDuracion_ahbb?: Date | string | null
    topeEstudiantes_ahbb?: number | null
    temarioTexto_ahbb?: string | null
    imagenBasePdf_ahbb?: string | null
    imagenBloqueada_ahbb?: boolean | null
    isPublished_ahbb?: boolean
    id_usuario_curso_ahbb: number
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
  }

  export type td_horario_ahbbCreateManyCursoInput = {
    id_horario_ahbb?: number
    diaSemana_ahbb: string
    horaInicio_ahbb: string
    horaFin_ahbb: string
  }

  export type td_inscripcion_ahbbCreateManyCursoInput = {
    id_inscripcion_ahbb?: number
    estatus_ahbb?: string | null
    intento_ahbb?: number
    notaFinal_ahbb?: Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: string | null
    id_usuario_inscripcion_ahbb: number
    creadoEn_ahbb?: Date | string | null
    actualizadoEn_ahbb?: Date | string | null
  }

  export type td_curso_ahbbUpdateWithoutPrelacionInput = {
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profesor?: td_usuario_ahbbUpdateOneRequiredWithoutCursosNestedInput
    prelaciones?: td_curso_ahbbUpdateManyWithoutPrelacionNestedInput
    horarios?: td_horario_ahbbUpdateManyWithoutCursoNestedInput
    inscripciones?: td_inscripcion_ahbbUpdateManyWithoutCursoNestedInput
  }

  export type td_curso_ahbbUncheckedUpdateWithoutPrelacionInput = {
    id_curso_ahbb?: IntFieldUpdateOperationsInput | number
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    id_usuario_curso_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelaciones?: td_curso_ahbbUncheckedUpdateManyWithoutPrelacionNestedInput
    horarios?: td_horario_ahbbUncheckedUpdateManyWithoutCursoNestedInput
    inscripciones?: td_inscripcion_ahbbUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type td_curso_ahbbUncheckedUpdateManyWithoutPrelacionInput = {
    id_curso_ahbb?: IntFieldUpdateOperationsInput | number
    nombre_ahbb?: StringFieldUpdateOperationsInput | string
    tematica_ahbb?: StringFieldUpdateOperationsInput | string
    descripcion_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    diasDefinidos_ahbb?: IntFieldUpdateOperationsInput | number
    horasDefinidas_ahbb?: IntFieldUpdateOperationsInput | number
    fechaInicio_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDuracion_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topeEstudiantes_ahbb?: NullableIntFieldUpdateOperationsInput | number | null
    temarioTexto_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBasePdf_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    imagenBloqueada_ahbb?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublished_ahbb?: BoolFieldUpdateOperationsInput | boolean
    id_usuario_curso_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_horario_ahbbUpdateWithoutCursoInput = {
    diaSemana_ahbb?: StringFieldUpdateOperationsInput | string
    horaInicio_ahbb?: StringFieldUpdateOperationsInput | string
    horaFin_ahbb?: StringFieldUpdateOperationsInput | string
  }

  export type td_horario_ahbbUncheckedUpdateWithoutCursoInput = {
    id_horario_ahbb?: IntFieldUpdateOperationsInput | number
    diaSemana_ahbb?: StringFieldUpdateOperationsInput | string
    horaInicio_ahbb?: StringFieldUpdateOperationsInput | string
    horaFin_ahbb?: StringFieldUpdateOperationsInput | string
  }

  export type td_horario_ahbbUncheckedUpdateManyWithoutCursoInput = {
    id_horario_ahbb?: IntFieldUpdateOperationsInput | number
    diaSemana_ahbb?: StringFieldUpdateOperationsInput | string
    horaInicio_ahbb?: StringFieldUpdateOperationsInput | string
    horaFin_ahbb?: StringFieldUpdateOperationsInput | string
  }

  export type td_inscripcion_ahbbUpdateWithoutCursoInput = {
    estatus_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    intento_ahbb?: IntFieldUpdateOperationsInput | number
    notaFinal_ahbb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alumno?: td_usuario_ahbbUpdateOneRequiredWithoutInscripcionesNestedInput
    certificado?: td_certificado_ahbbUpdateOneWithoutInscripcionNestedInput
  }

  export type td_inscripcion_ahbbUncheckedUpdateWithoutCursoInput = {
    id_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    estatus_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    intento_ahbb?: IntFieldUpdateOperationsInput | number
    notaFinal_ahbb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificado?: td_certificado_ahbbUncheckedUpdateOneWithoutInscripcionNestedInput
  }

  export type td_inscripcion_ahbbUncheckedUpdateManyWithoutCursoInput = {
    id_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    estatus_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    intento_ahbb?: IntFieldUpdateOperationsInput | number
    notaFinal_ahbb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observaciones_ahbb?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_inscripcion_ahbb?: IntFieldUpdateOperationsInput | number
    creadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizadoEn_ahbb?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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