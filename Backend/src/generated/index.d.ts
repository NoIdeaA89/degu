
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Taller
 * 
 */
export type Taller = $Result.DefaultSelection<Prisma.$TallerPayload>
/**
 * Model Inscripcion
 * 
 */
export type Inscripcion = $Result.DefaultSelection<Prisma.$InscripcionPayload>
/**
 * Model Sesion
 * 
 */
export type Sesion = $Result.DefaultSelection<Prisma.$SesionPayload>
/**
 * Model Asistencia
 * 
 */
export type Asistencia = $Result.DefaultSelection<Prisma.$AsistenciaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RolUsuario: {
  Administrador: 'Administrador',
  Profesor: 'Profesor',
  Ayudante: 'Ayudante',
  Estudiante: 'Estudiante'
};

export type RolUsuario = (typeof RolUsuario)[keyof typeof RolUsuario]

}

export type RolUsuario = $Enums.RolUsuario

export const RolUsuario: typeof $Enums.RolUsuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taller`: Exposes CRUD operations for the **Taller** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tallers
    * const tallers = await prisma.taller.findMany()
    * ```
    */
  get taller(): Prisma.TallerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inscripcion`: Exposes CRUD operations for the **Inscripcion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscripcions
    * const inscripcions = await prisma.inscripcion.findMany()
    * ```
    */
  get inscripcion(): Prisma.InscripcionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sesion`: Exposes CRUD operations for the **Sesion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sesions
    * const sesions = await prisma.sesion.findMany()
    * ```
    */
  get sesion(): Prisma.SesionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asistencia`: Exposes CRUD operations for the **Asistencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asistencias
    * const asistencias = await prisma.asistencia.findMany()
    * ```
    */
  get asistencia(): Prisma.AsistenciaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    Usuario: 'Usuario',
    Taller: 'Taller',
    Inscripcion: 'Inscripcion',
    Sesion: 'Sesion',
    Asistencia: 'Asistencia'
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
      modelProps: "usuario" | "taller" | "inscripcion" | "sesion" | "asistencia"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Taller: {
        payload: Prisma.$TallerPayload<ExtArgs>
        fields: Prisma.TallerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TallerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TallerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallerPayload>
          }
          findFirst: {
            args: Prisma.TallerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TallerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallerPayload>
          }
          findMany: {
            args: Prisma.TallerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallerPayload>[]
          }
          create: {
            args: Prisma.TallerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallerPayload>
          }
          createMany: {
            args: Prisma.TallerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TallerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallerPayload>[]
          }
          delete: {
            args: Prisma.TallerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallerPayload>
          }
          update: {
            args: Prisma.TallerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallerPayload>
          }
          deleteMany: {
            args: Prisma.TallerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TallerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TallerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallerPayload>[]
          }
          upsert: {
            args: Prisma.TallerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallerPayload>
          }
          aggregate: {
            args: Prisma.TallerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaller>
          }
          groupBy: {
            args: Prisma.TallerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TallerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TallerCountArgs<ExtArgs>
            result: $Utils.Optional<TallerCountAggregateOutputType> | number
          }
        }
      }
      Inscripcion: {
        payload: Prisma.$InscripcionPayload<ExtArgs>
        fields: Prisma.InscripcionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InscripcionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InscripcionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          findFirst: {
            args: Prisma.InscripcionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InscripcionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          findMany: {
            args: Prisma.InscripcionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          create: {
            args: Prisma.InscripcionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          createMany: {
            args: Prisma.InscripcionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InscripcionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          delete: {
            args: Prisma.InscripcionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          update: {
            args: Prisma.InscripcionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          deleteMany: {
            args: Prisma.InscripcionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InscripcionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InscripcionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          upsert: {
            args: Prisma.InscripcionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          aggregate: {
            args: Prisma.InscripcionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscripcion>
          }
          groupBy: {
            args: Prisma.InscripcionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscripcionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InscripcionCountArgs<ExtArgs>
            result: $Utils.Optional<InscripcionCountAggregateOutputType> | number
          }
        }
      }
      Sesion: {
        payload: Prisma.$SesionPayload<ExtArgs>
        fields: Prisma.SesionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SesionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SesionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>
          }
          findFirst: {
            args: Prisma.SesionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SesionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>
          }
          findMany: {
            args: Prisma.SesionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>[]
          }
          create: {
            args: Prisma.SesionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>
          }
          createMany: {
            args: Prisma.SesionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SesionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>[]
          }
          delete: {
            args: Prisma.SesionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>
          }
          update: {
            args: Prisma.SesionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>
          }
          deleteMany: {
            args: Prisma.SesionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SesionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SesionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>[]
          }
          upsert: {
            args: Prisma.SesionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>
          }
          aggregate: {
            args: Prisma.SesionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSesion>
          }
          groupBy: {
            args: Prisma.SesionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SesionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SesionCountArgs<ExtArgs>
            result: $Utils.Optional<SesionCountAggregateOutputType> | number
          }
        }
      }
      Asistencia: {
        payload: Prisma.$AsistenciaPayload<ExtArgs>
        fields: Prisma.AsistenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsistenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsistenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          findFirst: {
            args: Prisma.AsistenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsistenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          findMany: {
            args: Prisma.AsistenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>[]
          }
          create: {
            args: Prisma.AsistenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          createMany: {
            args: Prisma.AsistenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsistenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>[]
          }
          delete: {
            args: Prisma.AsistenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          update: {
            args: Prisma.AsistenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          deleteMany: {
            args: Prisma.AsistenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsistenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsistenciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>[]
          }
          upsert: {
            args: Prisma.AsistenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          aggregate: {
            args: Prisma.AsistenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsistencia>
          }
          groupBy: {
            args: Prisma.AsistenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsistenciaCountArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    taller?: TallerOmit
    inscripcion?: InscripcionOmit
    sesion?: SesionOmit
    asistencia?: AsistenciaOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    asistencias: number
    inscripciones: number
    talleresDictados: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | UsuarioCountOutputTypeCountAsistenciasArgs
    inscripciones?: boolean | UsuarioCountOutputTypeCountInscripcionesArgs
    talleresDictados?: boolean | UsuarioCountOutputTypeCountTalleresDictadosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTalleresDictadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TallerWhereInput
  }


  /**
   * Count Type TallerCountOutputType
   */

  export type TallerCountOutputType = {
    inscripciones: number
    sesiones: number
  }

  export type TallerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | TallerCountOutputTypeCountInscripcionesArgs
    sesiones?: boolean | TallerCountOutputTypeCountSesionesArgs
  }

  // Custom InputTypes
  /**
   * TallerCountOutputType without action
   */
  export type TallerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallerCountOutputType
     */
    select?: TallerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TallerCountOutputType without action
   */
  export type TallerCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
  }

  /**
   * TallerCountOutputType without action
   */
  export type TallerCountOutputTypeCountSesionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SesionWhereInput
  }


  /**
   * Count Type SesionCountOutputType
   */

  export type SesionCountOutputType = {
    asistencias: number
  }

  export type SesionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | SesionCountOutputTypeCountAsistenciasArgs
  }

  // Custom InputTypes
  /**
   * SesionCountOutputType without action
   */
  export type SesionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionCountOutputType
     */
    select?: SesionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SesionCountOutputType without action
   */
  export type SesionCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    rut: string | null
    correo: string | null
    password: string | null
    rol: $Enums.RolUsuario | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    rut: string | null
    correo: string | null
    password: string | null
    rol: $Enums.RolUsuario | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    rut: number
    correo: number
    password: number
    rol: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    rut?: true
    correo?: true
    password?: true
    rol?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    rut?: true
    correo?: true
    password?: true
    rol?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    rut?: true
    correo?: true
    password?: true
    rol?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    rut: string
    correo: string
    password: string
    rol: $Enums.RolUsuario
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    rut?: boolean
    correo?: boolean
    password?: boolean
    rol?: boolean
    asistencias?: boolean | Usuario$asistenciasArgs<ExtArgs>
    inscripciones?: boolean | Usuario$inscripcionesArgs<ExtArgs>
    talleresDictados?: boolean | Usuario$talleresDictadosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    rut?: boolean
    correo?: boolean
    password?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    rut?: boolean
    correo?: boolean
    password?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    rut?: boolean
    correo?: boolean
    password?: boolean
    rol?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "rut" | "correo" | "password" | "rol", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | Usuario$asistenciasArgs<ExtArgs>
    inscripciones?: boolean | Usuario$inscripcionesArgs<ExtArgs>
    talleresDictados?: boolean | Usuario$talleresDictadosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      asistencias: Prisma.$AsistenciaPayload<ExtArgs>[]
      inscripciones: Prisma.$InscripcionPayload<ExtArgs>[]
      talleresDictados: Prisma.$TallerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      apellido: string
      rut: string
      correo: string
      password: string
      rol: $Enums.RolUsuario
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asistencias<T extends Usuario$asistenciasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$asistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inscripciones<T extends Usuario$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    talleresDictados<T extends Usuario$talleresDictadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$talleresDictadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly apellido: FieldRef<"Usuario", 'String'>
    readonly rut: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'RolUsuario'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.asistencias
   */
  export type Usuario$asistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    cursor?: AsistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Usuario.inscripciones
   */
  export type Usuario$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    cursor?: InscripcionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Usuario.talleresDictados
   */
  export type Usuario$talleresDictadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taller
     */
    select?: TallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taller
     */
    omit?: TallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallerInclude<ExtArgs> | null
    where?: TallerWhereInput
    orderBy?: TallerOrderByWithRelationInput | TallerOrderByWithRelationInput[]
    cursor?: TallerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TallerScalarFieldEnum | TallerScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Taller
   */

  export type AggregateTaller = {
    _count: TallerCountAggregateOutputType | null
    _avg: TallerAvgAggregateOutputType | null
    _sum: TallerSumAggregateOutputType | null
    _min: TallerMinAggregateOutputType | null
    _max: TallerMaxAggregateOutputType | null
  }

  export type TallerAvgAggregateOutputType = {
    id: number | null
    dia: number | null
    bloque: number | null
    profesorId: number | null
  }

  export type TallerSumAggregateOutputType = {
    id: number | null
    dia: number | null
    bloque: number | null
    profesorId: number | null
  }

  export type TallerMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    horario: string | null
    semestre: string | null
    estado: boolean | null
    lugar: string | null
    dia: number | null
    bloque: number | null
    profesorId: number | null
  }

  export type TallerMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    horario: string | null
    semestre: string | null
    estado: boolean | null
    lugar: string | null
    dia: number | null
    bloque: number | null
    profesorId: number | null
  }

  export type TallerCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    horario: number
    semestre: number
    estado: number
    lugar: number
    dia: number
    bloque: number
    profesorId: number
    _all: number
  }


  export type TallerAvgAggregateInputType = {
    id?: true
    dia?: true
    bloque?: true
    profesorId?: true
  }

  export type TallerSumAggregateInputType = {
    id?: true
    dia?: true
    bloque?: true
    profesorId?: true
  }

  export type TallerMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    horario?: true
    semestre?: true
    estado?: true
    lugar?: true
    dia?: true
    bloque?: true
    profesorId?: true
  }

  export type TallerMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    horario?: true
    semestre?: true
    estado?: true
    lugar?: true
    dia?: true
    bloque?: true
    profesorId?: true
  }

  export type TallerCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    horario?: true
    semestre?: true
    estado?: true
    lugar?: true
    dia?: true
    bloque?: true
    profesorId?: true
    _all?: true
  }

  export type TallerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taller to aggregate.
     */
    where?: TallerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tallers to fetch.
     */
    orderBy?: TallerOrderByWithRelationInput | TallerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TallerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tallers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tallers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tallers
    **/
    _count?: true | TallerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TallerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TallerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TallerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TallerMaxAggregateInputType
  }

  export type GetTallerAggregateType<T extends TallerAggregateArgs> = {
        [P in keyof T & keyof AggregateTaller]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaller[P]>
      : GetScalarType<T[P], AggregateTaller[P]>
  }




  export type TallerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TallerWhereInput
    orderBy?: TallerOrderByWithAggregationInput | TallerOrderByWithAggregationInput[]
    by: TallerScalarFieldEnum[] | TallerScalarFieldEnum
    having?: TallerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TallerCountAggregateInputType | true
    _avg?: TallerAvgAggregateInputType
    _sum?: TallerSumAggregateInputType
    _min?: TallerMinAggregateInputType
    _max?: TallerMaxAggregateInputType
  }

  export type TallerGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado: boolean
    lugar: string
    dia: number
    bloque: number
    profesorId: number
    _count: TallerCountAggregateOutputType | null
    _avg: TallerAvgAggregateOutputType | null
    _sum: TallerSumAggregateOutputType | null
    _min: TallerMinAggregateOutputType | null
    _max: TallerMaxAggregateOutputType | null
  }

  type GetTallerGroupByPayload<T extends TallerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TallerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TallerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TallerGroupByOutputType[P]>
            : GetScalarType<T[P], TallerGroupByOutputType[P]>
        }
      >
    >


  export type TallerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    horario?: boolean
    semestre?: boolean
    estado?: boolean
    lugar?: boolean
    dia?: boolean
    bloque?: boolean
    profesorId?: boolean
    inscripciones?: boolean | Taller$inscripcionesArgs<ExtArgs>
    sesiones?: boolean | Taller$sesionesArgs<ExtArgs>
    profesor?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | TallerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taller"]>

  export type TallerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    horario?: boolean
    semestre?: boolean
    estado?: boolean
    lugar?: boolean
    dia?: boolean
    bloque?: boolean
    profesorId?: boolean
    profesor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taller"]>

  export type TallerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    horario?: boolean
    semestre?: boolean
    estado?: boolean
    lugar?: boolean
    dia?: boolean
    bloque?: boolean
    profesorId?: boolean
    profesor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taller"]>

  export type TallerSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    horario?: boolean
    semestre?: boolean
    estado?: boolean
    lugar?: boolean
    dia?: boolean
    bloque?: boolean
    profesorId?: boolean
  }

  export type TallerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "horario" | "semestre" | "estado" | "lugar" | "dia" | "bloque" | "profesorId", ExtArgs["result"]["taller"]>
  export type TallerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | Taller$inscripcionesArgs<ExtArgs>
    sesiones?: boolean | Taller$sesionesArgs<ExtArgs>
    profesor?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | TallerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TallerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type TallerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $TallerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Taller"
    objects: {
      inscripciones: Prisma.$InscripcionPayload<ExtArgs>[]
      sesiones: Prisma.$SesionPayload<ExtArgs>[]
      profesor: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      horario: string
      semestre: string
      estado: boolean
      lugar: string
      dia: number
      bloque: number
      profesorId: number
    }, ExtArgs["result"]["taller"]>
    composites: {}
  }

  type TallerGetPayload<S extends boolean | null | undefined | TallerDefaultArgs> = $Result.GetResult<Prisma.$TallerPayload, S>

  type TallerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TallerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TallerCountAggregateInputType | true
    }

  export interface TallerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Taller'], meta: { name: 'Taller' } }
    /**
     * Find zero or one Taller that matches the filter.
     * @param {TallerFindUniqueArgs} args - Arguments to find a Taller
     * @example
     * // Get one Taller
     * const taller = await prisma.taller.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TallerFindUniqueArgs>(args: SelectSubset<T, TallerFindUniqueArgs<ExtArgs>>): Prisma__TallerClient<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Taller that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TallerFindUniqueOrThrowArgs} args - Arguments to find a Taller
     * @example
     * // Get one Taller
     * const taller = await prisma.taller.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TallerFindUniqueOrThrowArgs>(args: SelectSubset<T, TallerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TallerClient<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taller that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallerFindFirstArgs} args - Arguments to find a Taller
     * @example
     * // Get one Taller
     * const taller = await prisma.taller.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TallerFindFirstArgs>(args?: SelectSubset<T, TallerFindFirstArgs<ExtArgs>>): Prisma__TallerClient<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taller that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallerFindFirstOrThrowArgs} args - Arguments to find a Taller
     * @example
     * // Get one Taller
     * const taller = await prisma.taller.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TallerFindFirstOrThrowArgs>(args?: SelectSubset<T, TallerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TallerClient<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tallers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tallers
     * const tallers = await prisma.taller.findMany()
     * 
     * // Get first 10 Tallers
     * const tallers = await prisma.taller.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tallerWithIdOnly = await prisma.taller.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TallerFindManyArgs>(args?: SelectSubset<T, TallerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Taller.
     * @param {TallerCreateArgs} args - Arguments to create a Taller.
     * @example
     * // Create one Taller
     * const Taller = await prisma.taller.create({
     *   data: {
     *     // ... data to create a Taller
     *   }
     * })
     * 
     */
    create<T extends TallerCreateArgs>(args: SelectSubset<T, TallerCreateArgs<ExtArgs>>): Prisma__TallerClient<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tallers.
     * @param {TallerCreateManyArgs} args - Arguments to create many Tallers.
     * @example
     * // Create many Tallers
     * const taller = await prisma.taller.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TallerCreateManyArgs>(args?: SelectSubset<T, TallerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tallers and returns the data saved in the database.
     * @param {TallerCreateManyAndReturnArgs} args - Arguments to create many Tallers.
     * @example
     * // Create many Tallers
     * const taller = await prisma.taller.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tallers and only return the `id`
     * const tallerWithIdOnly = await prisma.taller.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TallerCreateManyAndReturnArgs>(args?: SelectSubset<T, TallerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Taller.
     * @param {TallerDeleteArgs} args - Arguments to delete one Taller.
     * @example
     * // Delete one Taller
     * const Taller = await prisma.taller.delete({
     *   where: {
     *     // ... filter to delete one Taller
     *   }
     * })
     * 
     */
    delete<T extends TallerDeleteArgs>(args: SelectSubset<T, TallerDeleteArgs<ExtArgs>>): Prisma__TallerClient<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Taller.
     * @param {TallerUpdateArgs} args - Arguments to update one Taller.
     * @example
     * // Update one Taller
     * const taller = await prisma.taller.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TallerUpdateArgs>(args: SelectSubset<T, TallerUpdateArgs<ExtArgs>>): Prisma__TallerClient<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tallers.
     * @param {TallerDeleteManyArgs} args - Arguments to filter Tallers to delete.
     * @example
     * // Delete a few Tallers
     * const { count } = await prisma.taller.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TallerDeleteManyArgs>(args?: SelectSubset<T, TallerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tallers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tallers
     * const taller = await prisma.taller.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TallerUpdateManyArgs>(args: SelectSubset<T, TallerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tallers and returns the data updated in the database.
     * @param {TallerUpdateManyAndReturnArgs} args - Arguments to update many Tallers.
     * @example
     * // Update many Tallers
     * const taller = await prisma.taller.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tallers and only return the `id`
     * const tallerWithIdOnly = await prisma.taller.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TallerUpdateManyAndReturnArgs>(args: SelectSubset<T, TallerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Taller.
     * @param {TallerUpsertArgs} args - Arguments to update or create a Taller.
     * @example
     * // Update or create a Taller
     * const taller = await prisma.taller.upsert({
     *   create: {
     *     // ... data to create a Taller
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taller we want to update
     *   }
     * })
     */
    upsert<T extends TallerUpsertArgs>(args: SelectSubset<T, TallerUpsertArgs<ExtArgs>>): Prisma__TallerClient<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tallers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallerCountArgs} args - Arguments to filter Tallers to count.
     * @example
     * // Count the number of Tallers
     * const count = await prisma.taller.count({
     *   where: {
     *     // ... the filter for the Tallers we want to count
     *   }
     * })
    **/
    count<T extends TallerCountArgs>(
      args?: Subset<T, TallerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TallerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TallerAggregateArgs>(args: Subset<T, TallerAggregateArgs>): Prisma.PrismaPromise<GetTallerAggregateType<T>>

    /**
     * Group by Taller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallerGroupByArgs} args - Group by arguments.
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
      T extends TallerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TallerGroupByArgs['orderBy'] }
        : { orderBy?: TallerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TallerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTallerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Taller model
   */
  readonly fields: TallerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Taller.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TallerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inscripciones<T extends Taller$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, Taller$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sesiones<T extends Taller$sesionesArgs<ExtArgs> = {}>(args?: Subset<T, Taller$sesionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profesor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Taller model
   */
  interface TallerFieldRefs {
    readonly id: FieldRef<"Taller", 'Int'>
    readonly nombre: FieldRef<"Taller", 'String'>
    readonly descripcion: FieldRef<"Taller", 'String'>
    readonly horario: FieldRef<"Taller", 'String'>
    readonly semestre: FieldRef<"Taller", 'String'>
    readonly estado: FieldRef<"Taller", 'Boolean'>
    readonly lugar: FieldRef<"Taller", 'String'>
    readonly dia: FieldRef<"Taller", 'Int'>
    readonly bloque: FieldRef<"Taller", 'Int'>
    readonly profesorId: FieldRef<"Taller", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Taller findUnique
   */
  export type TallerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taller
     */
    select?: TallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taller
     */
    omit?: TallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallerInclude<ExtArgs> | null
    /**
     * Filter, which Taller to fetch.
     */
    where: TallerWhereUniqueInput
  }

  /**
   * Taller findUniqueOrThrow
   */
  export type TallerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taller
     */
    select?: TallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taller
     */
    omit?: TallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallerInclude<ExtArgs> | null
    /**
     * Filter, which Taller to fetch.
     */
    where: TallerWhereUniqueInput
  }

  /**
   * Taller findFirst
   */
  export type TallerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taller
     */
    select?: TallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taller
     */
    omit?: TallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallerInclude<ExtArgs> | null
    /**
     * Filter, which Taller to fetch.
     */
    where?: TallerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tallers to fetch.
     */
    orderBy?: TallerOrderByWithRelationInput | TallerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tallers.
     */
    cursor?: TallerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tallers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tallers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tallers.
     */
    distinct?: TallerScalarFieldEnum | TallerScalarFieldEnum[]
  }

  /**
   * Taller findFirstOrThrow
   */
  export type TallerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taller
     */
    select?: TallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taller
     */
    omit?: TallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallerInclude<ExtArgs> | null
    /**
     * Filter, which Taller to fetch.
     */
    where?: TallerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tallers to fetch.
     */
    orderBy?: TallerOrderByWithRelationInput | TallerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tallers.
     */
    cursor?: TallerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tallers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tallers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tallers.
     */
    distinct?: TallerScalarFieldEnum | TallerScalarFieldEnum[]
  }

  /**
   * Taller findMany
   */
  export type TallerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taller
     */
    select?: TallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taller
     */
    omit?: TallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallerInclude<ExtArgs> | null
    /**
     * Filter, which Tallers to fetch.
     */
    where?: TallerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tallers to fetch.
     */
    orderBy?: TallerOrderByWithRelationInput | TallerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tallers.
     */
    cursor?: TallerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tallers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tallers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tallers.
     */
    distinct?: TallerScalarFieldEnum | TallerScalarFieldEnum[]
  }

  /**
   * Taller create
   */
  export type TallerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taller
     */
    select?: TallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taller
     */
    omit?: TallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallerInclude<ExtArgs> | null
    /**
     * The data needed to create a Taller.
     */
    data: XOR<TallerCreateInput, TallerUncheckedCreateInput>
  }

  /**
   * Taller createMany
   */
  export type TallerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tallers.
     */
    data: TallerCreateManyInput | TallerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Taller createManyAndReturn
   */
  export type TallerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taller
     */
    select?: TallerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Taller
     */
    omit?: TallerOmit<ExtArgs> | null
    /**
     * The data used to create many Tallers.
     */
    data: TallerCreateManyInput | TallerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Taller update
   */
  export type TallerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taller
     */
    select?: TallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taller
     */
    omit?: TallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallerInclude<ExtArgs> | null
    /**
     * The data needed to update a Taller.
     */
    data: XOR<TallerUpdateInput, TallerUncheckedUpdateInput>
    /**
     * Choose, which Taller to update.
     */
    where: TallerWhereUniqueInput
  }

  /**
   * Taller updateMany
   */
  export type TallerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tallers.
     */
    data: XOR<TallerUpdateManyMutationInput, TallerUncheckedUpdateManyInput>
    /**
     * Filter which Tallers to update
     */
    where?: TallerWhereInput
    /**
     * Limit how many Tallers to update.
     */
    limit?: number
  }

  /**
   * Taller updateManyAndReturn
   */
  export type TallerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taller
     */
    select?: TallerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Taller
     */
    omit?: TallerOmit<ExtArgs> | null
    /**
     * The data used to update Tallers.
     */
    data: XOR<TallerUpdateManyMutationInput, TallerUncheckedUpdateManyInput>
    /**
     * Filter which Tallers to update
     */
    where?: TallerWhereInput
    /**
     * Limit how many Tallers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Taller upsert
   */
  export type TallerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taller
     */
    select?: TallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taller
     */
    omit?: TallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallerInclude<ExtArgs> | null
    /**
     * The filter to search for the Taller to update in case it exists.
     */
    where: TallerWhereUniqueInput
    /**
     * In case the Taller found by the `where` argument doesn't exist, create a new Taller with this data.
     */
    create: XOR<TallerCreateInput, TallerUncheckedCreateInput>
    /**
     * In case the Taller was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TallerUpdateInput, TallerUncheckedUpdateInput>
  }

  /**
   * Taller delete
   */
  export type TallerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taller
     */
    select?: TallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taller
     */
    omit?: TallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallerInclude<ExtArgs> | null
    /**
     * Filter which Taller to delete.
     */
    where: TallerWhereUniqueInput
  }

  /**
   * Taller deleteMany
   */
  export type TallerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tallers to delete
     */
    where?: TallerWhereInput
    /**
     * Limit how many Tallers to delete.
     */
    limit?: number
  }

  /**
   * Taller.inscripciones
   */
  export type Taller$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    cursor?: InscripcionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Taller.sesiones
   */
  export type Taller$sesionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sesion
     */
    omit?: SesionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    where?: SesionWhereInput
    orderBy?: SesionOrderByWithRelationInput | SesionOrderByWithRelationInput[]
    cursor?: SesionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SesionScalarFieldEnum | SesionScalarFieldEnum[]
  }

  /**
   * Taller without action
   */
  export type TallerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taller
     */
    select?: TallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taller
     */
    omit?: TallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallerInclude<ExtArgs> | null
  }


  /**
   * Model Inscripcion
   */

  export type AggregateInscripcion = {
    _count: InscripcionCountAggregateOutputType | null
    _avg: InscripcionAvgAggregateOutputType | null
    _sum: InscripcionSumAggregateOutputType | null
    _min: InscripcionMinAggregateOutputType | null
    _max: InscripcionMaxAggregateOutputType | null
  }

  export type InscripcionAvgAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    tallerId: number | null
  }

  export type InscripcionSumAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    tallerId: number | null
  }

  export type InscripcionMinAggregateOutputType = {
    id: number | null
    fechaRegistro: Date | null
    estudianteId: number | null
    tallerId: number | null
  }

  export type InscripcionMaxAggregateOutputType = {
    id: number | null
    fechaRegistro: Date | null
    estudianteId: number | null
    tallerId: number | null
  }

  export type InscripcionCountAggregateOutputType = {
    id: number
    fechaRegistro: number
    estudianteId: number
    tallerId: number
    _all: number
  }


  export type InscripcionAvgAggregateInputType = {
    id?: true
    estudianteId?: true
    tallerId?: true
  }

  export type InscripcionSumAggregateInputType = {
    id?: true
    estudianteId?: true
    tallerId?: true
  }

  export type InscripcionMinAggregateInputType = {
    id?: true
    fechaRegistro?: true
    estudianteId?: true
    tallerId?: true
  }

  export type InscripcionMaxAggregateInputType = {
    id?: true
    fechaRegistro?: true
    estudianteId?: true
    tallerId?: true
  }

  export type InscripcionCountAggregateInputType = {
    id?: true
    fechaRegistro?: true
    estudianteId?: true
    tallerId?: true
    _all?: true
  }

  export type InscripcionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscripcion to aggregate.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inscripcions
    **/
    _count?: true | InscripcionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InscripcionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InscripcionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscripcionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscripcionMaxAggregateInputType
  }

  export type GetInscripcionAggregateType<T extends InscripcionAggregateArgs> = {
        [P in keyof T & keyof AggregateInscripcion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscripcion[P]>
      : GetScalarType<T[P], AggregateInscripcion[P]>
  }




  export type InscripcionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithAggregationInput | InscripcionOrderByWithAggregationInput[]
    by: InscripcionScalarFieldEnum[] | InscripcionScalarFieldEnum
    having?: InscripcionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscripcionCountAggregateInputType | true
    _avg?: InscripcionAvgAggregateInputType
    _sum?: InscripcionSumAggregateInputType
    _min?: InscripcionMinAggregateInputType
    _max?: InscripcionMaxAggregateInputType
  }

  export type InscripcionGroupByOutputType = {
    id: number
    fechaRegistro: Date
    estudianteId: number
    tallerId: number
    _count: InscripcionCountAggregateOutputType | null
    _avg: InscripcionAvgAggregateOutputType | null
    _sum: InscripcionSumAggregateOutputType | null
    _min: InscripcionMinAggregateOutputType | null
    _max: InscripcionMaxAggregateOutputType | null
  }

  type GetInscripcionGroupByPayload<T extends InscripcionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscripcionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscripcionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscripcionGroupByOutputType[P]>
            : GetScalarType<T[P], InscripcionGroupByOutputType[P]>
        }
      >
    >


  export type InscripcionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaRegistro?: boolean
    estudianteId?: boolean
    tallerId?: boolean
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    taller?: boolean | TallerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaRegistro?: boolean
    estudianteId?: boolean
    tallerId?: boolean
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    taller?: boolean | TallerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaRegistro?: boolean
    estudianteId?: boolean
    tallerId?: boolean
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    taller?: boolean | TallerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectScalar = {
    id?: boolean
    fechaRegistro?: boolean
    estudianteId?: boolean
    tallerId?: boolean
  }

  export type InscripcionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaRegistro" | "estudianteId" | "tallerId", ExtArgs["result"]["inscripcion"]>
  export type InscripcionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    taller?: boolean | TallerDefaultArgs<ExtArgs>
  }
  export type InscripcionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    taller?: boolean | TallerDefaultArgs<ExtArgs>
  }
  export type InscripcionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    taller?: boolean | TallerDefaultArgs<ExtArgs>
  }

  export type $InscripcionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inscripcion"
    objects: {
      estudiante: Prisma.$UsuarioPayload<ExtArgs>
      taller: Prisma.$TallerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaRegistro: Date
      estudianteId: number
      tallerId: number
    }, ExtArgs["result"]["inscripcion"]>
    composites: {}
  }

  type InscripcionGetPayload<S extends boolean | null | undefined | InscripcionDefaultArgs> = $Result.GetResult<Prisma.$InscripcionPayload, S>

  type InscripcionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InscripcionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InscripcionCountAggregateInputType | true
    }

  export interface InscripcionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inscripcion'], meta: { name: 'Inscripcion' } }
    /**
     * Find zero or one Inscripcion that matches the filter.
     * @param {InscripcionFindUniqueArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InscripcionFindUniqueArgs>(args: SelectSubset<T, InscripcionFindUniqueArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inscripcion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InscripcionFindUniqueOrThrowArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InscripcionFindUniqueOrThrowArgs>(args: SelectSubset<T, InscripcionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscripcion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindFirstArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InscripcionFindFirstArgs>(args?: SelectSubset<T, InscripcionFindFirstArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscripcion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindFirstOrThrowArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InscripcionFindFirstOrThrowArgs>(args?: SelectSubset<T, InscripcionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inscripcions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscripcions
     * const inscripcions = await prisma.inscripcion.findMany()
     * 
     * // Get first 10 Inscripcions
     * const inscripcions = await prisma.inscripcion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inscripcionWithIdOnly = await prisma.inscripcion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InscripcionFindManyArgs>(args?: SelectSubset<T, InscripcionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inscripcion.
     * @param {InscripcionCreateArgs} args - Arguments to create a Inscripcion.
     * @example
     * // Create one Inscripcion
     * const Inscripcion = await prisma.inscripcion.create({
     *   data: {
     *     // ... data to create a Inscripcion
     *   }
     * })
     * 
     */
    create<T extends InscripcionCreateArgs>(args: SelectSubset<T, InscripcionCreateArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inscripcions.
     * @param {InscripcionCreateManyArgs} args - Arguments to create many Inscripcions.
     * @example
     * // Create many Inscripcions
     * const inscripcion = await prisma.inscripcion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InscripcionCreateManyArgs>(args?: SelectSubset<T, InscripcionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inscripcions and returns the data saved in the database.
     * @param {InscripcionCreateManyAndReturnArgs} args - Arguments to create many Inscripcions.
     * @example
     * // Create many Inscripcions
     * const inscripcion = await prisma.inscripcion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inscripcions and only return the `id`
     * const inscripcionWithIdOnly = await prisma.inscripcion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InscripcionCreateManyAndReturnArgs>(args?: SelectSubset<T, InscripcionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inscripcion.
     * @param {InscripcionDeleteArgs} args - Arguments to delete one Inscripcion.
     * @example
     * // Delete one Inscripcion
     * const Inscripcion = await prisma.inscripcion.delete({
     *   where: {
     *     // ... filter to delete one Inscripcion
     *   }
     * })
     * 
     */
    delete<T extends InscripcionDeleteArgs>(args: SelectSubset<T, InscripcionDeleteArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inscripcion.
     * @param {InscripcionUpdateArgs} args - Arguments to update one Inscripcion.
     * @example
     * // Update one Inscripcion
     * const inscripcion = await prisma.inscripcion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InscripcionUpdateArgs>(args: SelectSubset<T, InscripcionUpdateArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inscripcions.
     * @param {InscripcionDeleteManyArgs} args - Arguments to filter Inscripcions to delete.
     * @example
     * // Delete a few Inscripcions
     * const { count } = await prisma.inscripcion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InscripcionDeleteManyArgs>(args?: SelectSubset<T, InscripcionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscripcions
     * const inscripcion = await prisma.inscripcion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InscripcionUpdateManyArgs>(args: SelectSubset<T, InscripcionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscripcions and returns the data updated in the database.
     * @param {InscripcionUpdateManyAndReturnArgs} args - Arguments to update many Inscripcions.
     * @example
     * // Update many Inscripcions
     * const inscripcion = await prisma.inscripcion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inscripcions and only return the `id`
     * const inscripcionWithIdOnly = await prisma.inscripcion.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends InscripcionUpdateManyAndReturnArgs>(args: SelectSubset<T, InscripcionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inscripcion.
     * @param {InscripcionUpsertArgs} args - Arguments to update or create a Inscripcion.
     * @example
     * // Update or create a Inscripcion
     * const inscripcion = await prisma.inscripcion.upsert({
     *   create: {
     *     // ... data to create a Inscripcion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscripcion we want to update
     *   }
     * })
     */
    upsert<T extends InscripcionUpsertArgs>(args: SelectSubset<T, InscripcionUpsertArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionCountArgs} args - Arguments to filter Inscripcions to count.
     * @example
     * // Count the number of Inscripcions
     * const count = await prisma.inscripcion.count({
     *   where: {
     *     // ... the filter for the Inscripcions we want to count
     *   }
     * })
    **/
    count<T extends InscripcionCountArgs>(
      args?: Subset<T, InscripcionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscripcionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InscripcionAggregateArgs>(args: Subset<T, InscripcionAggregateArgs>): Prisma.PrismaPromise<GetInscripcionAggregateType<T>>

    /**
     * Group by Inscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionGroupByArgs} args - Group by arguments.
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
      T extends InscripcionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InscripcionGroupByArgs['orderBy'] }
        : { orderBy?: InscripcionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InscripcionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscripcionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inscripcion model
   */
  readonly fields: InscripcionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inscripcion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InscripcionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taller<T extends TallerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TallerDefaultArgs<ExtArgs>>): Prisma__TallerClient<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Inscripcion model
   */
  interface InscripcionFieldRefs {
    readonly id: FieldRef<"Inscripcion", 'Int'>
    readonly fechaRegistro: FieldRef<"Inscripcion", 'DateTime'>
    readonly estudianteId: FieldRef<"Inscripcion", 'Int'>
    readonly tallerId: FieldRef<"Inscripcion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Inscripcion findUnique
   */
  export type InscripcionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion findUniqueOrThrow
   */
  export type InscripcionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion findFirst
   */
  export type InscripcionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscripcions.
     */
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion findFirstOrThrow
   */
  export type InscripcionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscripcions.
     */
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion findMany
   */
  export type InscripcionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcions to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscripcions.
     */
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion create
   */
  export type InscripcionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The data needed to create a Inscripcion.
     */
    data: XOR<InscripcionCreateInput, InscripcionUncheckedCreateInput>
  }

  /**
   * Inscripcion createMany
   */
  export type InscripcionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inscripcions.
     */
    data: InscripcionCreateManyInput | InscripcionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inscripcion createManyAndReturn
   */
  export type InscripcionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * The data used to create many Inscripcions.
     */
    data: InscripcionCreateManyInput | InscripcionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscripcion update
   */
  export type InscripcionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The data needed to update a Inscripcion.
     */
    data: XOR<InscripcionUpdateInput, InscripcionUncheckedUpdateInput>
    /**
     * Choose, which Inscripcion to update.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion updateMany
   */
  export type InscripcionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inscripcions.
     */
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyInput>
    /**
     * Filter which Inscripcions to update
     */
    where?: InscripcionWhereInput
    /**
     * Limit how many Inscripcions to update.
     */
    limit?: number
  }

  /**
   * Inscripcion updateManyAndReturn
   */
  export type InscripcionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * The data used to update Inscripcions.
     */
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyInput>
    /**
     * Filter which Inscripcions to update
     */
    where?: InscripcionWhereInput
    /**
     * Limit how many Inscripcions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscripcion upsert
   */
  export type InscripcionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The filter to search for the Inscripcion to update in case it exists.
     */
    where: InscripcionWhereUniqueInput
    /**
     * In case the Inscripcion found by the `where` argument doesn't exist, create a new Inscripcion with this data.
     */
    create: XOR<InscripcionCreateInput, InscripcionUncheckedCreateInput>
    /**
     * In case the Inscripcion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InscripcionUpdateInput, InscripcionUncheckedUpdateInput>
  }

  /**
   * Inscripcion delete
   */
  export type InscripcionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter which Inscripcion to delete.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion deleteMany
   */
  export type InscripcionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscripcions to delete
     */
    where?: InscripcionWhereInput
    /**
     * Limit how many Inscripcions to delete.
     */
    limit?: number
  }

  /**
   * Inscripcion without action
   */
  export type InscripcionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
  }


  /**
   * Model Sesion
   */

  export type AggregateSesion = {
    _count: SesionCountAggregateOutputType | null
    _avg: SesionAvgAggregateOutputType | null
    _sum: SesionSumAggregateOutputType | null
    _min: SesionMinAggregateOutputType | null
    _max: SesionMaxAggregateOutputType | null
  }

  export type SesionAvgAggregateOutputType = {
    id: number | null
    tallerId: number | null
    bloque: number | null
  }

  export type SesionSumAggregateOutputType = {
    id: number | null
    tallerId: number | null
    bloque: number | null
  }

  export type SesionMinAggregateOutputType = {
    id: number | null
    tallerId: number | null
    fecha: Date | null
    bloque: number | null
    qrToken: string | null
    validoHasta: Date | null
  }

  export type SesionMaxAggregateOutputType = {
    id: number | null
    tallerId: number | null
    fecha: Date | null
    bloque: number | null
    qrToken: string | null
    validoHasta: Date | null
  }

  export type SesionCountAggregateOutputType = {
    id: number
    tallerId: number
    fecha: number
    bloque: number
    qrToken: number
    validoHasta: number
    _all: number
  }


  export type SesionAvgAggregateInputType = {
    id?: true
    tallerId?: true
    bloque?: true
  }

  export type SesionSumAggregateInputType = {
    id?: true
    tallerId?: true
    bloque?: true
  }

  export type SesionMinAggregateInputType = {
    id?: true
    tallerId?: true
    fecha?: true
    bloque?: true
    qrToken?: true
    validoHasta?: true
  }

  export type SesionMaxAggregateInputType = {
    id?: true
    tallerId?: true
    fecha?: true
    bloque?: true
    qrToken?: true
    validoHasta?: true
  }

  export type SesionCountAggregateInputType = {
    id?: true
    tallerId?: true
    fecha?: true
    bloque?: true
    qrToken?: true
    validoHasta?: true
    _all?: true
  }

  export type SesionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sesion to aggregate.
     */
    where?: SesionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sesions to fetch.
     */
    orderBy?: SesionOrderByWithRelationInput | SesionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SesionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sesions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sesions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sesions
    **/
    _count?: true | SesionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SesionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SesionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SesionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SesionMaxAggregateInputType
  }

  export type GetSesionAggregateType<T extends SesionAggregateArgs> = {
        [P in keyof T & keyof AggregateSesion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSesion[P]>
      : GetScalarType<T[P], AggregateSesion[P]>
  }




  export type SesionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SesionWhereInput
    orderBy?: SesionOrderByWithAggregationInput | SesionOrderByWithAggregationInput[]
    by: SesionScalarFieldEnum[] | SesionScalarFieldEnum
    having?: SesionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SesionCountAggregateInputType | true
    _avg?: SesionAvgAggregateInputType
    _sum?: SesionSumAggregateInputType
    _min?: SesionMinAggregateInputType
    _max?: SesionMaxAggregateInputType
  }

  export type SesionGroupByOutputType = {
    id: number
    tallerId: number
    fecha: Date
    bloque: number
    qrToken: string
    validoHasta: Date
    _count: SesionCountAggregateOutputType | null
    _avg: SesionAvgAggregateOutputType | null
    _sum: SesionSumAggregateOutputType | null
    _min: SesionMinAggregateOutputType | null
    _max: SesionMaxAggregateOutputType | null
  }

  type GetSesionGroupByPayload<T extends SesionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SesionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SesionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SesionGroupByOutputType[P]>
            : GetScalarType<T[P], SesionGroupByOutputType[P]>
        }
      >
    >


  export type SesionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tallerId?: boolean
    fecha?: boolean
    bloque?: boolean
    qrToken?: boolean
    validoHasta?: boolean
    asistencias?: boolean | Sesion$asistenciasArgs<ExtArgs>
    taller?: boolean | TallerDefaultArgs<ExtArgs>
    _count?: boolean | SesionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sesion"]>

  export type SesionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tallerId?: boolean
    fecha?: boolean
    bloque?: boolean
    qrToken?: boolean
    validoHasta?: boolean
    taller?: boolean | TallerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sesion"]>

  export type SesionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tallerId?: boolean
    fecha?: boolean
    bloque?: boolean
    qrToken?: boolean
    validoHasta?: boolean
    taller?: boolean | TallerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sesion"]>

  export type SesionSelectScalar = {
    id?: boolean
    tallerId?: boolean
    fecha?: boolean
    bloque?: boolean
    qrToken?: boolean
    validoHasta?: boolean
  }

  export type SesionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tallerId" | "fecha" | "bloque" | "qrToken" | "validoHasta", ExtArgs["result"]["sesion"]>
  export type SesionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | Sesion$asistenciasArgs<ExtArgs>
    taller?: boolean | TallerDefaultArgs<ExtArgs>
    _count?: boolean | SesionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SesionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taller?: boolean | TallerDefaultArgs<ExtArgs>
  }
  export type SesionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taller?: boolean | TallerDefaultArgs<ExtArgs>
  }

  export type $SesionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sesion"
    objects: {
      asistencias: Prisma.$AsistenciaPayload<ExtArgs>[]
      taller: Prisma.$TallerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tallerId: number
      fecha: Date
      bloque: number
      qrToken: string
      validoHasta: Date
    }, ExtArgs["result"]["sesion"]>
    composites: {}
  }

  type SesionGetPayload<S extends boolean | null | undefined | SesionDefaultArgs> = $Result.GetResult<Prisma.$SesionPayload, S>

  type SesionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SesionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SesionCountAggregateInputType | true
    }

  export interface SesionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sesion'], meta: { name: 'Sesion' } }
    /**
     * Find zero or one Sesion that matches the filter.
     * @param {SesionFindUniqueArgs} args - Arguments to find a Sesion
     * @example
     * // Get one Sesion
     * const sesion = await prisma.sesion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SesionFindUniqueArgs>(args: SelectSubset<T, SesionFindUniqueArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sesion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SesionFindUniqueOrThrowArgs} args - Arguments to find a Sesion
     * @example
     * // Get one Sesion
     * const sesion = await prisma.sesion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SesionFindUniqueOrThrowArgs>(args: SelectSubset<T, SesionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sesion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionFindFirstArgs} args - Arguments to find a Sesion
     * @example
     * // Get one Sesion
     * const sesion = await prisma.sesion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SesionFindFirstArgs>(args?: SelectSubset<T, SesionFindFirstArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sesion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionFindFirstOrThrowArgs} args - Arguments to find a Sesion
     * @example
     * // Get one Sesion
     * const sesion = await prisma.sesion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SesionFindFirstOrThrowArgs>(args?: SelectSubset<T, SesionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sesions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sesions
     * const sesions = await prisma.sesion.findMany()
     * 
     * // Get first 10 Sesions
     * const sesions = await prisma.sesion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sesionWithIdOnly = await prisma.sesion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SesionFindManyArgs>(args?: SelectSubset<T, SesionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sesion.
     * @param {SesionCreateArgs} args - Arguments to create a Sesion.
     * @example
     * // Create one Sesion
     * const Sesion = await prisma.sesion.create({
     *   data: {
     *     // ... data to create a Sesion
     *   }
     * })
     * 
     */
    create<T extends SesionCreateArgs>(args: SelectSubset<T, SesionCreateArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sesions.
     * @param {SesionCreateManyArgs} args - Arguments to create many Sesions.
     * @example
     * // Create many Sesions
     * const sesion = await prisma.sesion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SesionCreateManyArgs>(args?: SelectSubset<T, SesionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sesions and returns the data saved in the database.
     * @param {SesionCreateManyAndReturnArgs} args - Arguments to create many Sesions.
     * @example
     * // Create many Sesions
     * const sesion = await prisma.sesion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sesions and only return the `id`
     * const sesionWithIdOnly = await prisma.sesion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SesionCreateManyAndReturnArgs>(args?: SelectSubset<T, SesionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sesion.
     * @param {SesionDeleteArgs} args - Arguments to delete one Sesion.
     * @example
     * // Delete one Sesion
     * const Sesion = await prisma.sesion.delete({
     *   where: {
     *     // ... filter to delete one Sesion
     *   }
     * })
     * 
     */
    delete<T extends SesionDeleteArgs>(args: SelectSubset<T, SesionDeleteArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sesion.
     * @param {SesionUpdateArgs} args - Arguments to update one Sesion.
     * @example
     * // Update one Sesion
     * const sesion = await prisma.sesion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SesionUpdateArgs>(args: SelectSubset<T, SesionUpdateArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sesions.
     * @param {SesionDeleteManyArgs} args - Arguments to filter Sesions to delete.
     * @example
     * // Delete a few Sesions
     * const { count } = await prisma.sesion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SesionDeleteManyArgs>(args?: SelectSubset<T, SesionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sesions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sesions
     * const sesion = await prisma.sesion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SesionUpdateManyArgs>(args: SelectSubset<T, SesionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sesions and returns the data updated in the database.
     * @param {SesionUpdateManyAndReturnArgs} args - Arguments to update many Sesions.
     * @example
     * // Update many Sesions
     * const sesion = await prisma.sesion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sesions and only return the `id`
     * const sesionWithIdOnly = await prisma.sesion.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SesionUpdateManyAndReturnArgs>(args: SelectSubset<T, SesionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sesion.
     * @param {SesionUpsertArgs} args - Arguments to update or create a Sesion.
     * @example
     * // Update or create a Sesion
     * const sesion = await prisma.sesion.upsert({
     *   create: {
     *     // ... data to create a Sesion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sesion we want to update
     *   }
     * })
     */
    upsert<T extends SesionUpsertArgs>(args: SelectSubset<T, SesionUpsertArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sesions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionCountArgs} args - Arguments to filter Sesions to count.
     * @example
     * // Count the number of Sesions
     * const count = await prisma.sesion.count({
     *   where: {
     *     // ... the filter for the Sesions we want to count
     *   }
     * })
    **/
    count<T extends SesionCountArgs>(
      args?: Subset<T, SesionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SesionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sesion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SesionAggregateArgs>(args: Subset<T, SesionAggregateArgs>): Prisma.PrismaPromise<GetSesionAggregateType<T>>

    /**
     * Group by Sesion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionGroupByArgs} args - Group by arguments.
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
      T extends SesionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SesionGroupByArgs['orderBy'] }
        : { orderBy?: SesionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SesionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSesionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sesion model
   */
  readonly fields: SesionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sesion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SesionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asistencias<T extends Sesion$asistenciasArgs<ExtArgs> = {}>(args?: Subset<T, Sesion$asistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taller<T extends TallerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TallerDefaultArgs<ExtArgs>>): Prisma__TallerClient<$Result.GetResult<Prisma.$TallerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sesion model
   */
  interface SesionFieldRefs {
    readonly id: FieldRef<"Sesion", 'Int'>
    readonly tallerId: FieldRef<"Sesion", 'Int'>
    readonly fecha: FieldRef<"Sesion", 'DateTime'>
    readonly bloque: FieldRef<"Sesion", 'Int'>
    readonly qrToken: FieldRef<"Sesion", 'String'>
    readonly validoHasta: FieldRef<"Sesion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sesion findUnique
   */
  export type SesionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sesion
     */
    omit?: SesionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * Filter, which Sesion to fetch.
     */
    where: SesionWhereUniqueInput
  }

  /**
   * Sesion findUniqueOrThrow
   */
  export type SesionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sesion
     */
    omit?: SesionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * Filter, which Sesion to fetch.
     */
    where: SesionWhereUniqueInput
  }

  /**
   * Sesion findFirst
   */
  export type SesionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sesion
     */
    omit?: SesionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * Filter, which Sesion to fetch.
     */
    where?: SesionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sesions to fetch.
     */
    orderBy?: SesionOrderByWithRelationInput | SesionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sesions.
     */
    cursor?: SesionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sesions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sesions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sesions.
     */
    distinct?: SesionScalarFieldEnum | SesionScalarFieldEnum[]
  }

  /**
   * Sesion findFirstOrThrow
   */
  export type SesionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sesion
     */
    omit?: SesionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * Filter, which Sesion to fetch.
     */
    where?: SesionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sesions to fetch.
     */
    orderBy?: SesionOrderByWithRelationInput | SesionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sesions.
     */
    cursor?: SesionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sesions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sesions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sesions.
     */
    distinct?: SesionScalarFieldEnum | SesionScalarFieldEnum[]
  }

  /**
   * Sesion findMany
   */
  export type SesionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sesion
     */
    omit?: SesionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * Filter, which Sesions to fetch.
     */
    where?: SesionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sesions to fetch.
     */
    orderBy?: SesionOrderByWithRelationInput | SesionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sesions.
     */
    cursor?: SesionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sesions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sesions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sesions.
     */
    distinct?: SesionScalarFieldEnum | SesionScalarFieldEnum[]
  }

  /**
   * Sesion create
   */
  export type SesionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sesion
     */
    omit?: SesionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * The data needed to create a Sesion.
     */
    data: XOR<SesionCreateInput, SesionUncheckedCreateInput>
  }

  /**
   * Sesion createMany
   */
  export type SesionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sesions.
     */
    data: SesionCreateManyInput | SesionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sesion createManyAndReturn
   */
  export type SesionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sesion
     */
    omit?: SesionOmit<ExtArgs> | null
    /**
     * The data used to create many Sesions.
     */
    data: SesionCreateManyInput | SesionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sesion update
   */
  export type SesionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sesion
     */
    omit?: SesionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * The data needed to update a Sesion.
     */
    data: XOR<SesionUpdateInput, SesionUncheckedUpdateInput>
    /**
     * Choose, which Sesion to update.
     */
    where: SesionWhereUniqueInput
  }

  /**
   * Sesion updateMany
   */
  export type SesionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sesions.
     */
    data: XOR<SesionUpdateManyMutationInput, SesionUncheckedUpdateManyInput>
    /**
     * Filter which Sesions to update
     */
    where?: SesionWhereInput
    /**
     * Limit how many Sesions to update.
     */
    limit?: number
  }

  /**
   * Sesion updateManyAndReturn
   */
  export type SesionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sesion
     */
    omit?: SesionOmit<ExtArgs> | null
    /**
     * The data used to update Sesions.
     */
    data: XOR<SesionUpdateManyMutationInput, SesionUncheckedUpdateManyInput>
    /**
     * Filter which Sesions to update
     */
    where?: SesionWhereInput
    /**
     * Limit how many Sesions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sesion upsert
   */
  export type SesionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sesion
     */
    omit?: SesionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * The filter to search for the Sesion to update in case it exists.
     */
    where: SesionWhereUniqueInput
    /**
     * In case the Sesion found by the `where` argument doesn't exist, create a new Sesion with this data.
     */
    create: XOR<SesionCreateInput, SesionUncheckedCreateInput>
    /**
     * In case the Sesion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SesionUpdateInput, SesionUncheckedUpdateInput>
  }

  /**
   * Sesion delete
   */
  export type SesionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sesion
     */
    omit?: SesionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * Filter which Sesion to delete.
     */
    where: SesionWhereUniqueInput
  }

  /**
   * Sesion deleteMany
   */
  export type SesionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sesions to delete
     */
    where?: SesionWhereInput
    /**
     * Limit how many Sesions to delete.
     */
    limit?: number
  }

  /**
   * Sesion.asistencias
   */
  export type Sesion$asistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    cursor?: AsistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Sesion without action
   */
  export type SesionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sesion
     */
    omit?: SesionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
  }


  /**
   * Model Asistencia
   */

  export type AggregateAsistencia = {
    _count: AsistenciaCountAggregateOutputType | null
    _avg: AsistenciaAvgAggregateOutputType | null
    _sum: AsistenciaSumAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  export type AsistenciaAvgAggregateOutputType = {
    id: number | null
    sesionId: number | null
    estudianteId: number | null
    notaSatisfaccion: number | null
  }

  export type AsistenciaSumAggregateOutputType = {
    id: number | null
    sesionId: number | null
    estudianteId: number | null
    notaSatisfaccion: number | null
  }

  export type AsistenciaMinAggregateOutputType = {
    id: number | null
    sesionId: number | null
    estudianteId: number | null
    fechaHora: Date | null
    estado: string | null
    notaSatisfaccion: number | null
    comentario: string | null
  }

  export type AsistenciaMaxAggregateOutputType = {
    id: number | null
    sesionId: number | null
    estudianteId: number | null
    fechaHora: Date | null
    estado: string | null
    notaSatisfaccion: number | null
    comentario: string | null
  }

  export type AsistenciaCountAggregateOutputType = {
    id: number
    sesionId: number
    estudianteId: number
    fechaHora: number
    estado: number
    notaSatisfaccion: number
    comentario: number
    _all: number
  }


  export type AsistenciaAvgAggregateInputType = {
    id?: true
    sesionId?: true
    estudianteId?: true
    notaSatisfaccion?: true
  }

  export type AsistenciaSumAggregateInputType = {
    id?: true
    sesionId?: true
    estudianteId?: true
    notaSatisfaccion?: true
  }

  export type AsistenciaMinAggregateInputType = {
    id?: true
    sesionId?: true
    estudianteId?: true
    fechaHora?: true
    estado?: true
    notaSatisfaccion?: true
    comentario?: true
  }

  export type AsistenciaMaxAggregateInputType = {
    id?: true
    sesionId?: true
    estudianteId?: true
    fechaHora?: true
    estado?: true
    notaSatisfaccion?: true
    comentario?: true
  }

  export type AsistenciaCountAggregateInputType = {
    id?: true
    sesionId?: true
    estudianteId?: true
    fechaHora?: true
    estado?: true
    notaSatisfaccion?: true
    comentario?: true
    _all?: true
  }

  export type AsistenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asistencia to aggregate.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asistencias
    **/
    _count?: true | AsistenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsistenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsistenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsistenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsistenciaMaxAggregateInputType
  }

  export type GetAsistenciaAggregateType<T extends AsistenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateAsistencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsistencia[P]>
      : GetScalarType<T[P], AggregateAsistencia[P]>
  }




  export type AsistenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithAggregationInput | AsistenciaOrderByWithAggregationInput[]
    by: AsistenciaScalarFieldEnum[] | AsistenciaScalarFieldEnum
    having?: AsistenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsistenciaCountAggregateInputType | true
    _avg?: AsistenciaAvgAggregateInputType
    _sum?: AsistenciaSumAggregateInputType
    _min?: AsistenciaMinAggregateInputType
    _max?: AsistenciaMaxAggregateInputType
  }

  export type AsistenciaGroupByOutputType = {
    id: number
    sesionId: number
    estudianteId: number
    fechaHora: Date
    estado: string
    notaSatisfaccion: number | null
    comentario: string | null
    _count: AsistenciaCountAggregateOutputType | null
    _avg: AsistenciaAvgAggregateOutputType | null
    _sum: AsistenciaSumAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  type GetAsistenciaGroupByPayload<T extends AsistenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsistenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsistenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
            : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
        }
      >
    >


  export type AsistenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sesionId?: boolean
    estudianteId?: boolean
    fechaHora?: boolean
    estado?: boolean
    notaSatisfaccion?: boolean
    comentario?: boolean
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    sesion?: boolean | SesionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type AsistenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sesionId?: boolean
    estudianteId?: boolean
    fechaHora?: boolean
    estado?: boolean
    notaSatisfaccion?: boolean
    comentario?: boolean
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    sesion?: boolean | SesionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type AsistenciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sesionId?: boolean
    estudianteId?: boolean
    fechaHora?: boolean
    estado?: boolean
    notaSatisfaccion?: boolean
    comentario?: boolean
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    sesion?: boolean | SesionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type AsistenciaSelectScalar = {
    id?: boolean
    sesionId?: boolean
    estudianteId?: boolean
    fechaHora?: boolean
    estado?: boolean
    notaSatisfaccion?: boolean
    comentario?: boolean
  }

  export type AsistenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sesionId" | "estudianteId" | "fechaHora" | "estado" | "notaSatisfaccion" | "comentario", ExtArgs["result"]["asistencia"]>
  export type AsistenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    sesion?: boolean | SesionDefaultArgs<ExtArgs>
  }
  export type AsistenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    sesion?: boolean | SesionDefaultArgs<ExtArgs>
  }
  export type AsistenciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | UsuarioDefaultArgs<ExtArgs>
    sesion?: boolean | SesionDefaultArgs<ExtArgs>
  }

  export type $AsistenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asistencia"
    objects: {
      estudiante: Prisma.$UsuarioPayload<ExtArgs>
      sesion: Prisma.$SesionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sesionId: number
      estudianteId: number
      fechaHora: Date
      estado: string
      notaSatisfaccion: number | null
      comentario: string | null
    }, ExtArgs["result"]["asistencia"]>
    composites: {}
  }

  type AsistenciaGetPayload<S extends boolean | null | undefined | AsistenciaDefaultArgs> = $Result.GetResult<Prisma.$AsistenciaPayload, S>

  type AsistenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsistenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsistenciaCountAggregateInputType | true
    }

  export interface AsistenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asistencia'], meta: { name: 'Asistencia' } }
    /**
     * Find zero or one Asistencia that matches the filter.
     * @param {AsistenciaFindUniqueArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsistenciaFindUniqueArgs>(args: SelectSubset<T, AsistenciaFindUniqueArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asistencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsistenciaFindUniqueOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsistenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, AsistenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindFirstArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsistenciaFindFirstArgs>(args?: SelectSubset<T, AsistenciaFindFirstArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindFirstOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsistenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, AsistenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asistencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistencias
     * const asistencias = await prisma.asistencia.findMany()
     * 
     * // Get first 10 Asistencias
     * const asistencias = await prisma.asistencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsistenciaFindManyArgs>(args?: SelectSubset<T, AsistenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asistencia.
     * @param {AsistenciaCreateArgs} args - Arguments to create a Asistencia.
     * @example
     * // Create one Asistencia
     * const Asistencia = await prisma.asistencia.create({
     *   data: {
     *     // ... data to create a Asistencia
     *   }
     * })
     * 
     */
    create<T extends AsistenciaCreateArgs>(args: SelectSubset<T, AsistenciaCreateArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asistencias.
     * @param {AsistenciaCreateManyArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsistenciaCreateManyArgs>(args?: SelectSubset<T, AsistenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asistencias and returns the data saved in the database.
     * @param {AsistenciaCreateManyAndReturnArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asistencias and only return the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsistenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, AsistenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asistencia.
     * @param {AsistenciaDeleteArgs} args - Arguments to delete one Asistencia.
     * @example
     * // Delete one Asistencia
     * const Asistencia = await prisma.asistencia.delete({
     *   where: {
     *     // ... filter to delete one Asistencia
     *   }
     * })
     * 
     */
    delete<T extends AsistenciaDeleteArgs>(args: SelectSubset<T, AsistenciaDeleteArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asistencia.
     * @param {AsistenciaUpdateArgs} args - Arguments to update one Asistencia.
     * @example
     * // Update one Asistencia
     * const asistencia = await prisma.asistencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsistenciaUpdateArgs>(args: SelectSubset<T, AsistenciaUpdateArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asistencias.
     * @param {AsistenciaDeleteManyArgs} args - Arguments to filter Asistencias to delete.
     * @example
     * // Delete a few Asistencias
     * const { count } = await prisma.asistencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsistenciaDeleteManyArgs>(args?: SelectSubset<T, AsistenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsistenciaUpdateManyArgs>(args: SelectSubset<T, AsistenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias and returns the data updated in the database.
     * @param {AsistenciaUpdateManyAndReturnArgs} args - Arguments to update many Asistencias.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Asistencias and only return the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AsistenciaUpdateManyAndReturnArgs>(args: SelectSubset<T, AsistenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asistencia.
     * @param {AsistenciaUpsertArgs} args - Arguments to update or create a Asistencia.
     * @example
     * // Update or create a Asistencia
     * const asistencia = await prisma.asistencia.upsert({
     *   create: {
     *     // ... data to create a Asistencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistencia we want to update
     *   }
     * })
     */
    upsert<T extends AsistenciaUpsertArgs>(args: SelectSubset<T, AsistenciaUpsertArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaCountArgs} args - Arguments to filter Asistencias to count.
     * @example
     * // Count the number of Asistencias
     * const count = await prisma.asistencia.count({
     *   where: {
     *     // ... the filter for the Asistencias we want to count
     *   }
     * })
    **/
    count<T extends AsistenciaCountArgs>(
      args?: Subset<T, AsistenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsistenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsistenciaAggregateArgs>(args: Subset<T, AsistenciaAggregateArgs>): Prisma.PrismaPromise<GetAsistenciaAggregateType<T>>

    /**
     * Group by Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaGroupByArgs} args - Group by arguments.
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
      T extends AsistenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsistenciaGroupByArgs['orderBy'] }
        : { orderBy?: AsistenciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AsistenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asistencia model
   */
  readonly fields: AsistenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asistencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsistenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sesion<T extends SesionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SesionDefaultArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Asistencia model
   */
  interface AsistenciaFieldRefs {
    readonly id: FieldRef<"Asistencia", 'Int'>
    readonly sesionId: FieldRef<"Asistencia", 'Int'>
    readonly estudianteId: FieldRef<"Asistencia", 'Int'>
    readonly fechaHora: FieldRef<"Asistencia", 'DateTime'>
    readonly estado: FieldRef<"Asistencia", 'String'>
    readonly notaSatisfaccion: FieldRef<"Asistencia", 'Int'>
    readonly comentario: FieldRef<"Asistencia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Asistencia findUnique
   */
  export type AsistenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia findUniqueOrThrow
   */
  export type AsistenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia findFirst
   */
  export type AsistenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Asistencia findFirstOrThrow
   */
  export type AsistenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Asistencia findMany
   */
  export type AsistenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencias to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Asistencia create
   */
  export type AsistenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Asistencia.
     */
    data: XOR<AsistenciaCreateInput, AsistenciaUncheckedCreateInput>
  }

  /**
   * Asistencia createMany
   */
  export type AsistenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asistencias.
     */
    data: AsistenciaCreateManyInput | AsistenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asistencia createManyAndReturn
   */
  export type AsistenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * The data used to create many Asistencias.
     */
    data: AsistenciaCreateManyInput | AsistenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asistencia update
   */
  export type AsistenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Asistencia.
     */
    data: XOR<AsistenciaUpdateInput, AsistenciaUncheckedUpdateInput>
    /**
     * Choose, which Asistencia to update.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia updateMany
   */
  export type AsistenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asistencias.
     */
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyInput>
    /**
     * Filter which Asistencias to update
     */
    where?: AsistenciaWhereInput
    /**
     * Limit how many Asistencias to update.
     */
    limit?: number
  }

  /**
   * Asistencia updateManyAndReturn
   */
  export type AsistenciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * The data used to update Asistencias.
     */
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyInput>
    /**
     * Filter which Asistencias to update
     */
    where?: AsistenciaWhereInput
    /**
     * Limit how many Asistencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asistencia upsert
   */
  export type AsistenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Asistencia to update in case it exists.
     */
    where: AsistenciaWhereUniqueInput
    /**
     * In case the Asistencia found by the `where` argument doesn't exist, create a new Asistencia with this data.
     */
    create: XOR<AsistenciaCreateInput, AsistenciaUncheckedCreateInput>
    /**
     * In case the Asistencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsistenciaUpdateInput, AsistenciaUncheckedUpdateInput>
  }

  /**
   * Asistencia delete
   */
  export type AsistenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter which Asistencia to delete.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia deleteMany
   */
  export type AsistenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asistencias to delete
     */
    where?: AsistenciaWhereInput
    /**
     * Limit how many Asistencias to delete.
     */
    limit?: number
  }

  /**
   * Asistencia without action
   */
  export type AsistenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    rut: 'rut',
    correo: 'correo',
    password: 'password',
    rol: 'rol'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const TallerScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    horario: 'horario',
    semestre: 'semestre',
    estado: 'estado',
    lugar: 'lugar',
    dia: 'dia',
    bloque: 'bloque',
    profesorId: 'profesorId'
  };

  export type TallerScalarFieldEnum = (typeof TallerScalarFieldEnum)[keyof typeof TallerScalarFieldEnum]


  export const InscripcionScalarFieldEnum: {
    id: 'id',
    fechaRegistro: 'fechaRegistro',
    estudianteId: 'estudianteId',
    tallerId: 'tallerId'
  };

  export type InscripcionScalarFieldEnum = (typeof InscripcionScalarFieldEnum)[keyof typeof InscripcionScalarFieldEnum]


  export const SesionScalarFieldEnum: {
    id: 'id',
    tallerId: 'tallerId',
    fecha: 'fecha',
    bloque: 'bloque',
    qrToken: 'qrToken',
    validoHasta: 'validoHasta'
  };

  export type SesionScalarFieldEnum = (typeof SesionScalarFieldEnum)[keyof typeof SesionScalarFieldEnum]


  export const AsistenciaScalarFieldEnum: {
    id: 'id',
    sesionId: 'sesionId',
    estudianteId: 'estudianteId',
    fechaHora: 'fechaHora',
    estado: 'estado',
    notaSatisfaccion: 'notaSatisfaccion',
    comentario: 'comentario'
  };

  export type AsistenciaScalarFieldEnum = (typeof AsistenciaScalarFieldEnum)[keyof typeof AsistenciaScalarFieldEnum]


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
   * Reference to a field of type 'RolUsuario'
   */
  export type EnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario'>
    


  /**
   * Reference to a field of type 'RolUsuario[]'
   */
  export type ListEnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    rut?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    asistencias?: AsistenciaListRelationFilter
    inscripciones?: InscripcionListRelationFilter
    talleresDictados?: TallerListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rut?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    asistencias?: AsistenciaOrderByRelationAggregateInput
    inscripciones?: InscripcionOrderByRelationAggregateInput
    talleresDictados?: TallerOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rut?: string
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    asistencias?: AsistenciaListRelationFilter
    inscripciones?: InscripcionListRelationFilter
    talleresDictados?: TallerListRelationFilter
  }, "id" | "rut" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rut?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    apellido?: StringWithAggregatesFilter<"Usuario"> | string
    rut?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolUsuarioWithAggregatesFilter<"Usuario"> | $Enums.RolUsuario
  }

  export type TallerWhereInput = {
    AND?: TallerWhereInput | TallerWhereInput[]
    OR?: TallerWhereInput[]
    NOT?: TallerWhereInput | TallerWhereInput[]
    id?: IntFilter<"Taller"> | number
    nombre?: StringFilter<"Taller"> | string
    descripcion?: StringFilter<"Taller"> | string
    horario?: StringFilter<"Taller"> | string
    semestre?: StringFilter<"Taller"> | string
    estado?: BoolFilter<"Taller"> | boolean
    lugar?: StringFilter<"Taller"> | string
    dia?: IntFilter<"Taller"> | number
    bloque?: IntFilter<"Taller"> | number
    profesorId?: IntFilter<"Taller"> | number
    inscripciones?: InscripcionListRelationFilter
    sesiones?: SesionListRelationFilter
    profesor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type TallerOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    horario?: SortOrder
    semestre?: SortOrder
    estado?: SortOrder
    lugar?: SortOrder
    dia?: SortOrder
    bloque?: SortOrder
    profesorId?: SortOrder
    inscripciones?: InscripcionOrderByRelationAggregateInput
    sesiones?: SesionOrderByRelationAggregateInput
    profesor?: UsuarioOrderByWithRelationInput
  }

  export type TallerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TallerWhereInput | TallerWhereInput[]
    OR?: TallerWhereInput[]
    NOT?: TallerWhereInput | TallerWhereInput[]
    nombre?: StringFilter<"Taller"> | string
    descripcion?: StringFilter<"Taller"> | string
    horario?: StringFilter<"Taller"> | string
    semestre?: StringFilter<"Taller"> | string
    estado?: BoolFilter<"Taller"> | boolean
    lugar?: StringFilter<"Taller"> | string
    dia?: IntFilter<"Taller"> | number
    bloque?: IntFilter<"Taller"> | number
    profesorId?: IntFilter<"Taller"> | number
    inscripciones?: InscripcionListRelationFilter
    sesiones?: SesionListRelationFilter
    profesor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type TallerOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    horario?: SortOrder
    semestre?: SortOrder
    estado?: SortOrder
    lugar?: SortOrder
    dia?: SortOrder
    bloque?: SortOrder
    profesorId?: SortOrder
    _count?: TallerCountOrderByAggregateInput
    _avg?: TallerAvgOrderByAggregateInput
    _max?: TallerMaxOrderByAggregateInput
    _min?: TallerMinOrderByAggregateInput
    _sum?: TallerSumOrderByAggregateInput
  }

  export type TallerScalarWhereWithAggregatesInput = {
    AND?: TallerScalarWhereWithAggregatesInput | TallerScalarWhereWithAggregatesInput[]
    OR?: TallerScalarWhereWithAggregatesInput[]
    NOT?: TallerScalarWhereWithAggregatesInput | TallerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Taller"> | number
    nombre?: StringWithAggregatesFilter<"Taller"> | string
    descripcion?: StringWithAggregatesFilter<"Taller"> | string
    horario?: StringWithAggregatesFilter<"Taller"> | string
    semestre?: StringWithAggregatesFilter<"Taller"> | string
    estado?: BoolWithAggregatesFilter<"Taller"> | boolean
    lugar?: StringWithAggregatesFilter<"Taller"> | string
    dia?: IntWithAggregatesFilter<"Taller"> | number
    bloque?: IntWithAggregatesFilter<"Taller"> | number
    profesorId?: IntWithAggregatesFilter<"Taller"> | number
  }

  export type InscripcionWhereInput = {
    AND?: InscripcionWhereInput | InscripcionWhereInput[]
    OR?: InscripcionWhereInput[]
    NOT?: InscripcionWhereInput | InscripcionWhereInput[]
    id?: IntFilter<"Inscripcion"> | number
    fechaRegistro?: DateTimeFilter<"Inscripcion"> | Date | string
    estudianteId?: IntFilter<"Inscripcion"> | number
    tallerId?: IntFilter<"Inscripcion"> | number
    estudiante?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    taller?: XOR<TallerScalarRelationFilter, TallerWhereInput>
  }

  export type InscripcionOrderByWithRelationInput = {
    id?: SortOrder
    fechaRegistro?: SortOrder
    estudianteId?: SortOrder
    tallerId?: SortOrder
    estudiante?: UsuarioOrderByWithRelationInput
    taller?: TallerOrderByWithRelationInput
  }

  export type InscripcionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    estudianteId_tallerId?: InscripcionEstudianteIdTallerIdCompoundUniqueInput
    AND?: InscripcionWhereInput | InscripcionWhereInput[]
    OR?: InscripcionWhereInput[]
    NOT?: InscripcionWhereInput | InscripcionWhereInput[]
    fechaRegistro?: DateTimeFilter<"Inscripcion"> | Date | string
    estudianteId?: IntFilter<"Inscripcion"> | number
    tallerId?: IntFilter<"Inscripcion"> | number
    estudiante?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    taller?: XOR<TallerScalarRelationFilter, TallerWhereInput>
  }, "id" | "estudianteId_tallerId">

  export type InscripcionOrderByWithAggregationInput = {
    id?: SortOrder
    fechaRegistro?: SortOrder
    estudianteId?: SortOrder
    tallerId?: SortOrder
    _count?: InscripcionCountOrderByAggregateInput
    _avg?: InscripcionAvgOrderByAggregateInput
    _max?: InscripcionMaxOrderByAggregateInput
    _min?: InscripcionMinOrderByAggregateInput
    _sum?: InscripcionSumOrderByAggregateInput
  }

  export type InscripcionScalarWhereWithAggregatesInput = {
    AND?: InscripcionScalarWhereWithAggregatesInput | InscripcionScalarWhereWithAggregatesInput[]
    OR?: InscripcionScalarWhereWithAggregatesInput[]
    NOT?: InscripcionScalarWhereWithAggregatesInput | InscripcionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inscripcion"> | number
    fechaRegistro?: DateTimeWithAggregatesFilter<"Inscripcion"> | Date | string
    estudianteId?: IntWithAggregatesFilter<"Inscripcion"> | number
    tallerId?: IntWithAggregatesFilter<"Inscripcion"> | number
  }

  export type SesionWhereInput = {
    AND?: SesionWhereInput | SesionWhereInput[]
    OR?: SesionWhereInput[]
    NOT?: SesionWhereInput | SesionWhereInput[]
    id?: IntFilter<"Sesion"> | number
    tallerId?: IntFilter<"Sesion"> | number
    fecha?: DateTimeFilter<"Sesion"> | Date | string
    bloque?: IntFilter<"Sesion"> | number
    qrToken?: StringFilter<"Sesion"> | string
    validoHasta?: DateTimeFilter<"Sesion"> | Date | string
    asistencias?: AsistenciaListRelationFilter
    taller?: XOR<TallerScalarRelationFilter, TallerWhereInput>
  }

  export type SesionOrderByWithRelationInput = {
    id?: SortOrder
    tallerId?: SortOrder
    fecha?: SortOrder
    bloque?: SortOrder
    qrToken?: SortOrder
    validoHasta?: SortOrder
    asistencias?: AsistenciaOrderByRelationAggregateInput
    taller?: TallerOrderByWithRelationInput
  }

  export type SesionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    qrToken?: string
    AND?: SesionWhereInput | SesionWhereInput[]
    OR?: SesionWhereInput[]
    NOT?: SesionWhereInput | SesionWhereInput[]
    tallerId?: IntFilter<"Sesion"> | number
    fecha?: DateTimeFilter<"Sesion"> | Date | string
    bloque?: IntFilter<"Sesion"> | number
    validoHasta?: DateTimeFilter<"Sesion"> | Date | string
    asistencias?: AsistenciaListRelationFilter
    taller?: XOR<TallerScalarRelationFilter, TallerWhereInput>
  }, "id" | "qrToken">

  export type SesionOrderByWithAggregationInput = {
    id?: SortOrder
    tallerId?: SortOrder
    fecha?: SortOrder
    bloque?: SortOrder
    qrToken?: SortOrder
    validoHasta?: SortOrder
    _count?: SesionCountOrderByAggregateInput
    _avg?: SesionAvgOrderByAggregateInput
    _max?: SesionMaxOrderByAggregateInput
    _min?: SesionMinOrderByAggregateInput
    _sum?: SesionSumOrderByAggregateInput
  }

  export type SesionScalarWhereWithAggregatesInput = {
    AND?: SesionScalarWhereWithAggregatesInput | SesionScalarWhereWithAggregatesInput[]
    OR?: SesionScalarWhereWithAggregatesInput[]
    NOT?: SesionScalarWhereWithAggregatesInput | SesionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sesion"> | number
    tallerId?: IntWithAggregatesFilter<"Sesion"> | number
    fecha?: DateTimeWithAggregatesFilter<"Sesion"> | Date | string
    bloque?: IntWithAggregatesFilter<"Sesion"> | number
    qrToken?: StringWithAggregatesFilter<"Sesion"> | string
    validoHasta?: DateTimeWithAggregatesFilter<"Sesion"> | Date | string
  }

  export type AsistenciaWhereInput = {
    AND?: AsistenciaWhereInput | AsistenciaWhereInput[]
    OR?: AsistenciaWhereInput[]
    NOT?: AsistenciaWhereInput | AsistenciaWhereInput[]
    id?: IntFilter<"Asistencia"> | number
    sesionId?: IntFilter<"Asistencia"> | number
    estudianteId?: IntFilter<"Asistencia"> | number
    fechaHora?: DateTimeFilter<"Asistencia"> | Date | string
    estado?: StringFilter<"Asistencia"> | string
    notaSatisfaccion?: IntNullableFilter<"Asistencia"> | number | null
    comentario?: StringNullableFilter<"Asistencia"> | string | null
    estudiante?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    sesion?: XOR<SesionScalarRelationFilter, SesionWhereInput>
  }

  export type AsistenciaOrderByWithRelationInput = {
    id?: SortOrder
    sesionId?: SortOrder
    estudianteId?: SortOrder
    fechaHora?: SortOrder
    estado?: SortOrder
    notaSatisfaccion?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    estudiante?: UsuarioOrderByWithRelationInput
    sesion?: SesionOrderByWithRelationInput
  }

  export type AsistenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sesionId_estudianteId?: AsistenciaSesionIdEstudianteIdCompoundUniqueInput
    AND?: AsistenciaWhereInput | AsistenciaWhereInput[]
    OR?: AsistenciaWhereInput[]
    NOT?: AsistenciaWhereInput | AsistenciaWhereInput[]
    sesionId?: IntFilter<"Asistencia"> | number
    estudianteId?: IntFilter<"Asistencia"> | number
    fechaHora?: DateTimeFilter<"Asistencia"> | Date | string
    estado?: StringFilter<"Asistencia"> | string
    notaSatisfaccion?: IntNullableFilter<"Asistencia"> | number | null
    comentario?: StringNullableFilter<"Asistencia"> | string | null
    estudiante?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    sesion?: XOR<SesionScalarRelationFilter, SesionWhereInput>
  }, "id" | "sesionId_estudianteId">

  export type AsistenciaOrderByWithAggregationInput = {
    id?: SortOrder
    sesionId?: SortOrder
    estudianteId?: SortOrder
    fechaHora?: SortOrder
    estado?: SortOrder
    notaSatisfaccion?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    _count?: AsistenciaCountOrderByAggregateInput
    _avg?: AsistenciaAvgOrderByAggregateInput
    _max?: AsistenciaMaxOrderByAggregateInput
    _min?: AsistenciaMinOrderByAggregateInput
    _sum?: AsistenciaSumOrderByAggregateInput
  }

  export type AsistenciaScalarWhereWithAggregatesInput = {
    AND?: AsistenciaScalarWhereWithAggregatesInput | AsistenciaScalarWhereWithAggregatesInput[]
    OR?: AsistenciaScalarWhereWithAggregatesInput[]
    NOT?: AsistenciaScalarWhereWithAggregatesInput | AsistenciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Asistencia"> | number
    sesionId?: IntWithAggregatesFilter<"Asistencia"> | number
    estudianteId?: IntWithAggregatesFilter<"Asistencia"> | number
    fechaHora?: DateTimeWithAggregatesFilter<"Asistencia"> | Date | string
    estado?: StringWithAggregatesFilter<"Asistencia"> | string
    notaSatisfaccion?: IntNullableWithAggregatesFilter<"Asistencia"> | number | null
    comentario?: StringNullableWithAggregatesFilter<"Asistencia"> | string | null
  }

  export type UsuarioCreateInput = {
    nombre: string
    apellido: string
    rut: string
    correo: string
    password: string
    rol: $Enums.RolUsuario
    asistencias?: AsistenciaCreateNestedManyWithoutEstudianteInput
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput
    talleresDictados?: TallerCreateNestedManyWithoutProfesorInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    rut: string
    correo: string
    password: string
    rol: $Enums.RolUsuario
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutEstudianteInput
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutEstudianteInput
    talleresDictados?: TallerUncheckedCreateNestedManyWithoutProfesorInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    asistencias?: AsistenciaUpdateManyWithoutEstudianteNestedInput
    inscripciones?: InscripcionUpdateManyWithoutEstudianteNestedInput
    talleresDictados?: TallerUpdateManyWithoutProfesorNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    asistencias?: AsistenciaUncheckedUpdateManyWithoutEstudianteNestedInput
    inscripciones?: InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput
    talleresDictados?: TallerUncheckedUpdateManyWithoutProfesorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    rut: string
    correo: string
    password: string
    rol: $Enums.RolUsuario
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
  }

  export type TallerCreateInput = {
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado?: boolean
    lugar?: string
    dia?: number
    bloque?: number
    profesor: UsuarioCreateNestedOneWithoutTalleresDictadosInput
    inscripciones?: InscripcionCreateNestedManyWithoutTallerInput
    sesiones?: SesionCreateNestedManyWithoutTallerInput
    profesor: UsuarioCreateNestedOneWithoutTalleresDictadosInput
  }

  export type TallerUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado?: boolean
    lugar?: string
    dia?: number
    bloque?: number
    profesorId: number
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutTallerInput
    sesiones?: SesionUncheckedCreateNestedManyWithoutTallerInput
  }

  export type TallerUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    lugar?: StringFieldUpdateOperationsInput | string
    dia?: IntFieldUpdateOperationsInput | number
    bloque?: IntFieldUpdateOperationsInput | number
    profesor?: UsuarioUpdateOneRequiredWithoutTalleresDictadosNestedInput
    inscripciones?: InscripcionUpdateManyWithoutTallerNestedInput
    sesiones?: SesionUpdateManyWithoutTallerNestedInput
    profesor?: UsuarioUpdateOneRequiredWithoutTalleresDictadosNestedInput
  }

  export type TallerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    lugar?: StringFieldUpdateOperationsInput | string
    dia?: IntFieldUpdateOperationsInput | number
    bloque?: IntFieldUpdateOperationsInput | number
    profesorId?: IntFieldUpdateOperationsInput | number
    inscripciones?: InscripcionUncheckedUpdateManyWithoutTallerNestedInput
    sesiones?: SesionUncheckedUpdateManyWithoutTallerNestedInput
  }

  export type TallerCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado?: boolean
    lugar?: string
    dia?: number
    bloque?: number
    profesorId: number
  }

  export type TallerUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    lugar?: StringFieldUpdateOperationsInput | string
    dia?: IntFieldUpdateOperationsInput | number
    bloque?: IntFieldUpdateOperationsInput | number
  }

  export type TallerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    lugar?: StringFieldUpdateOperationsInput | string
    dia?: IntFieldUpdateOperationsInput | number
    bloque?: IntFieldUpdateOperationsInput | number
    profesorId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionCreateInput = {
    fechaRegistro?: Date | string
    estudiante: UsuarioCreateNestedOneWithoutInscripcionesInput
    taller: TallerCreateNestedOneWithoutInscripcionesInput
  }

  export type InscripcionUncheckedCreateInput = {
    id?: number
    fechaRegistro?: Date | string
    estudianteId: number
    tallerId: number
  }

  export type InscripcionUpdateInput = {
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estudiante?: UsuarioUpdateOneRequiredWithoutInscripcionesNestedInput
    taller?: TallerUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type InscripcionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteId?: IntFieldUpdateOperationsInput | number
    tallerId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionCreateManyInput = {
    id?: number
    fechaRegistro?: Date | string
    estudianteId: number
    tallerId: number
  }

  export type InscripcionUpdateManyMutationInput = {
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscripcionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteId?: IntFieldUpdateOperationsInput | number
    tallerId?: IntFieldUpdateOperationsInput | number
  }

  export type SesionCreateInput = {
    fecha?: Date | string
    bloque: number
    qrToken: string
    validoHasta: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutSesionInput
    taller: TallerCreateNestedOneWithoutSesionesInput
  }

  export type SesionUncheckedCreateInput = {
    id?: number
    tallerId: number
    fecha?: Date | string
    bloque: number
    qrToken: string
    validoHasta: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutSesionInput
  }

  export type SesionUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    bloque?: IntFieldUpdateOperationsInput | number
    qrToken?: StringFieldUpdateOperationsInput | string
    validoHasta?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutSesionNestedInput
    taller?: TallerUpdateOneRequiredWithoutSesionesNestedInput
  }

  export type SesionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tallerId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    bloque?: IntFieldUpdateOperationsInput | number
    qrToken?: StringFieldUpdateOperationsInput | string
    validoHasta?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutSesionNestedInput
  }

  export type SesionCreateManyInput = {
    id?: number
    tallerId: number
    fecha?: Date | string
    bloque: number
    qrToken: string
    validoHasta: Date | string
  }

  export type SesionUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    bloque?: IntFieldUpdateOperationsInput | number
    qrToken?: StringFieldUpdateOperationsInput | string
    validoHasta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SesionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tallerId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    bloque?: IntFieldUpdateOperationsInput | number
    qrToken?: StringFieldUpdateOperationsInput | string
    validoHasta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateInput = {
    fechaHora?: Date | string
    estado?: string
    notaSatisfaccion?: number | null
    comentario?: string | null
    estudiante: UsuarioCreateNestedOneWithoutAsistenciasInput
    sesion: SesionCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciaUncheckedCreateInput = {
    id?: number
    sesionId: number
    estudianteId: number
    fechaHora?: Date | string
    estado?: string
    notaSatisfaccion?: number | null
    comentario?: string | null
  }

  export type AsistenciaUpdateInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    notaSatisfaccion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    estudiante?: UsuarioUpdateOneRequiredWithoutAsistenciasNestedInput
    sesion?: SesionUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type AsistenciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sesionId?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    notaSatisfaccion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AsistenciaCreateManyInput = {
    id?: number
    sesionId: number
    estudianteId: number
    fechaHora?: Date | string
    estado?: string
    notaSatisfaccion?: number | null
    comentario?: string | null
  }

  export type AsistenciaUpdateManyMutationInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    notaSatisfaccion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AsistenciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sesionId?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    notaSatisfaccion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioFilter<$PrismaModel> | $Enums.RolUsuario
  }

  export type AsistenciaListRelationFilter = {
    every?: AsistenciaWhereInput
    some?: AsistenciaWhereInput
    none?: AsistenciaWhereInput
  }

  export type InscripcionListRelationFilter = {
    every?: InscripcionWhereInput
    some?: InscripcionWhereInput
    none?: InscripcionWhereInput
  }

  export type TallerListRelationFilter = {
    every?: TallerWhereInput
    some?: TallerWhereInput
    none?: TallerWhereInput
  }

  export type AsistenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InscripcionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TallerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rut?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rut?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rut?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRolUsuarioFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SesionListRelationFilter = {
    every?: SesionWhereInput
    some?: SesionWhereInput
    none?: SesionWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SesionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TallerCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    horario?: SortOrder
    semestre?: SortOrder
    estado?: SortOrder
    lugar?: SortOrder
    dia?: SortOrder
    bloque?: SortOrder
    profesorId?: SortOrder
  }

  export type TallerAvgOrderByAggregateInput = {
    id?: SortOrder
    dia?: SortOrder
    bloque?: SortOrder
    profesorId?: SortOrder
  }

  export type TallerMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    horario?: SortOrder
    semestre?: SortOrder
    estado?: SortOrder
    lugar?: SortOrder
    dia?: SortOrder
    bloque?: SortOrder
    profesorId?: SortOrder
  }

  export type TallerMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    horario?: SortOrder
    semestre?: SortOrder
    estado?: SortOrder
    lugar?: SortOrder
    dia?: SortOrder
    bloque?: SortOrder
    profesorId?: SortOrder
  }

  export type TallerSumOrderByAggregateInput = {
    id?: SortOrder
    dia?: SortOrder
    bloque?: SortOrder
    profesorId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TallerScalarRelationFilter = {
    is?: TallerWhereInput
    isNot?: TallerWhereInput
  }

  export type InscripcionEstudianteIdTallerIdCompoundUniqueInput = {
    estudianteId: number
    tallerId: number
  }

  export type InscripcionCountOrderByAggregateInput = {
    id?: SortOrder
    fechaRegistro?: SortOrder
    estudianteId?: SortOrder
    tallerId?: SortOrder
  }

  export type InscripcionAvgOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    tallerId?: SortOrder
  }

  export type InscripcionMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaRegistro?: SortOrder
    estudianteId?: SortOrder
    tallerId?: SortOrder
  }

  export type InscripcionMinOrderByAggregateInput = {
    id?: SortOrder
    fechaRegistro?: SortOrder
    estudianteId?: SortOrder
    tallerId?: SortOrder
  }

  export type InscripcionSumOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    tallerId?: SortOrder
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

  export type SesionCountOrderByAggregateInput = {
    id?: SortOrder
    tallerId?: SortOrder
    fecha?: SortOrder
    bloque?: SortOrder
    qrToken?: SortOrder
    validoHasta?: SortOrder
  }

  export type SesionAvgOrderByAggregateInput = {
    id?: SortOrder
    tallerId?: SortOrder
    bloque?: SortOrder
  }

  export type SesionMaxOrderByAggregateInput = {
    id?: SortOrder
    tallerId?: SortOrder
    fecha?: SortOrder
    bloque?: SortOrder
    qrToken?: SortOrder
    validoHasta?: SortOrder
  }

  export type SesionMinOrderByAggregateInput = {
    id?: SortOrder
    tallerId?: SortOrder
    fecha?: SortOrder
    bloque?: SortOrder
    qrToken?: SortOrder
    validoHasta?: SortOrder
  }

  export type SesionSumOrderByAggregateInput = {
    id?: SortOrder
    tallerId?: SortOrder
    bloque?: SortOrder
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

  export type SesionScalarRelationFilter = {
    is?: SesionWhereInput
    isNot?: SesionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AsistenciaSesionIdEstudianteIdCompoundUniqueInput = {
    sesionId: number
    estudianteId: number
  }

  export type AsistenciaCountOrderByAggregateInput = {
    id?: SortOrder
    sesionId?: SortOrder
    estudianteId?: SortOrder
    fechaHora?: SortOrder
    estado?: SortOrder
    notaSatisfaccion?: SortOrder
    comentario?: SortOrder
  }

  export type AsistenciaAvgOrderByAggregateInput = {
    id?: SortOrder
    sesionId?: SortOrder
    estudianteId?: SortOrder
    notaSatisfaccion?: SortOrder
  }

  export type AsistenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    sesionId?: SortOrder
    estudianteId?: SortOrder
    fechaHora?: SortOrder
    estado?: SortOrder
    notaSatisfaccion?: SortOrder
    comentario?: SortOrder
  }

  export type AsistenciaMinOrderByAggregateInput = {
    id?: SortOrder
    sesionId?: SortOrder
    estudianteId?: SortOrder
    fechaHora?: SortOrder
    estado?: SortOrder
    notaSatisfaccion?: SortOrder
    comentario?: SortOrder
  }

  export type AsistenciaSumOrderByAggregateInput = {
    id?: SortOrder
    sesionId?: SortOrder
    estudianteId?: SortOrder
    notaSatisfaccion?: SortOrder
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

  export type AsistenciaCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<AsistenciaCreateWithoutEstudianteInput, AsistenciaUncheckedCreateWithoutEstudianteInput> | AsistenciaCreateWithoutEstudianteInput[] | AsistenciaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutEstudianteInput | AsistenciaCreateOrConnectWithoutEstudianteInput[]
    createMany?: AsistenciaCreateManyEstudianteInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type InscripcionCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type TallerCreateNestedManyWithoutProfesorInput = {
    create?: XOR<TallerCreateWithoutProfesorInput, TallerUncheckedCreateWithoutProfesorInput> | TallerCreateWithoutProfesorInput[] | TallerUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: TallerCreateOrConnectWithoutProfesorInput | TallerCreateOrConnectWithoutProfesorInput[]
    createMany?: TallerCreateManyProfesorInputEnvelope
    connect?: TallerWhereUniqueInput | TallerWhereUniqueInput[]
  }

  export type AsistenciaUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<AsistenciaCreateWithoutEstudianteInput, AsistenciaUncheckedCreateWithoutEstudianteInput> | AsistenciaCreateWithoutEstudianteInput[] | AsistenciaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutEstudianteInput | AsistenciaCreateOrConnectWithoutEstudianteInput[]
    createMany?: AsistenciaCreateManyEstudianteInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type InscripcionUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type TallerUncheckedCreateNestedManyWithoutProfesorInput = {
    create?: XOR<TallerCreateWithoutProfesorInput, TallerUncheckedCreateWithoutProfesorInput> | TallerCreateWithoutProfesorInput[] | TallerUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: TallerCreateOrConnectWithoutProfesorInput | TallerCreateOrConnectWithoutProfesorInput[]
    createMany?: TallerCreateManyProfesorInputEnvelope
    connect?: TallerWhereUniqueInput | TallerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.RolUsuario
  }

  export type AsistenciaUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<AsistenciaCreateWithoutEstudianteInput, AsistenciaUncheckedCreateWithoutEstudianteInput> | AsistenciaCreateWithoutEstudianteInput[] | AsistenciaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutEstudianteInput | AsistenciaCreateOrConnectWithoutEstudianteInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutEstudianteInput | AsistenciaUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: AsistenciaCreateManyEstudianteInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutEstudianteInput | AsistenciaUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutEstudianteInput | AsistenciaUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type InscripcionUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutEstudianteInput | InscripcionUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutEstudianteInput | InscripcionUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutEstudianteInput | InscripcionUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type TallerUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<TallerCreateWithoutProfesorInput, TallerUncheckedCreateWithoutProfesorInput> | TallerCreateWithoutProfesorInput[] | TallerUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: TallerCreateOrConnectWithoutProfesorInput | TallerCreateOrConnectWithoutProfesorInput[]
    upsert?: TallerUpsertWithWhereUniqueWithoutProfesorInput | TallerUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: TallerCreateManyProfesorInputEnvelope
    set?: TallerWhereUniqueInput | TallerWhereUniqueInput[]
    disconnect?: TallerWhereUniqueInput | TallerWhereUniqueInput[]
    delete?: TallerWhereUniqueInput | TallerWhereUniqueInput[]
    connect?: TallerWhereUniqueInput | TallerWhereUniqueInput[]
    update?: TallerUpdateWithWhereUniqueWithoutProfesorInput | TallerUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: TallerUpdateManyWithWhereWithoutProfesorInput | TallerUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: TallerScalarWhereInput | TallerScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AsistenciaUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<AsistenciaCreateWithoutEstudianteInput, AsistenciaUncheckedCreateWithoutEstudianteInput> | AsistenciaCreateWithoutEstudianteInput[] | AsistenciaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutEstudianteInput | AsistenciaCreateOrConnectWithoutEstudianteInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutEstudianteInput | AsistenciaUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: AsistenciaCreateManyEstudianteInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutEstudianteInput | AsistenciaUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutEstudianteInput | AsistenciaUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutEstudianteInput | InscripcionUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutEstudianteInput | InscripcionUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutEstudianteInput | InscripcionUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type TallerUncheckedUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<TallerCreateWithoutProfesorInput, TallerUncheckedCreateWithoutProfesorInput> | TallerCreateWithoutProfesorInput[] | TallerUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: TallerCreateOrConnectWithoutProfesorInput | TallerCreateOrConnectWithoutProfesorInput[]
    upsert?: TallerUpsertWithWhereUniqueWithoutProfesorInput | TallerUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: TallerCreateManyProfesorInputEnvelope
    set?: TallerWhereUniqueInput | TallerWhereUniqueInput[]
    disconnect?: TallerWhereUniqueInput | TallerWhereUniqueInput[]
    delete?: TallerWhereUniqueInput | TallerWhereUniqueInput[]
    connect?: TallerWhereUniqueInput | TallerWhereUniqueInput[]
    update?: TallerUpdateWithWhereUniqueWithoutProfesorInput | TallerUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: TallerUpdateManyWithWhereWithoutProfesorInput | TallerUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: TallerScalarWhereInput | TallerScalarWhereInput[]
  }

  export type InscripcionCreateNestedManyWithoutTallerInput = {
    create?: XOR<InscripcionCreateWithoutTallerInput, InscripcionUncheckedCreateWithoutTallerInput> | InscripcionCreateWithoutTallerInput[] | InscripcionUncheckedCreateWithoutTallerInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutTallerInput | InscripcionCreateOrConnectWithoutTallerInput[]
    createMany?: InscripcionCreateManyTallerInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type SesionCreateNestedManyWithoutTallerInput = {
    create?: XOR<SesionCreateWithoutTallerInput, SesionUncheckedCreateWithoutTallerInput> | SesionCreateWithoutTallerInput[] | SesionUncheckedCreateWithoutTallerInput[]
    connectOrCreate?: SesionCreateOrConnectWithoutTallerInput | SesionCreateOrConnectWithoutTallerInput[]
    createMany?: SesionCreateManyTallerInputEnvelope
    connect?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutTalleresDictadosInput = {
    create?: XOR<UsuarioCreateWithoutTalleresDictadosInput, UsuarioUncheckedCreateWithoutTalleresDictadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTalleresDictadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type InscripcionUncheckedCreateNestedManyWithoutTallerInput = {
    create?: XOR<InscripcionCreateWithoutTallerInput, InscripcionUncheckedCreateWithoutTallerInput> | InscripcionCreateWithoutTallerInput[] | InscripcionUncheckedCreateWithoutTallerInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutTallerInput | InscripcionCreateOrConnectWithoutTallerInput[]
    createMany?: InscripcionCreateManyTallerInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type SesionUncheckedCreateNestedManyWithoutTallerInput = {
    create?: XOR<SesionCreateWithoutTallerInput, SesionUncheckedCreateWithoutTallerInput> | SesionCreateWithoutTallerInput[] | SesionUncheckedCreateWithoutTallerInput[]
    connectOrCreate?: SesionCreateOrConnectWithoutTallerInput | SesionCreateOrConnectWithoutTallerInput[]
    createMany?: SesionCreateManyTallerInputEnvelope
    connect?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type InscripcionUpdateManyWithoutTallerNestedInput = {
    create?: XOR<InscripcionCreateWithoutTallerInput, InscripcionUncheckedCreateWithoutTallerInput> | InscripcionCreateWithoutTallerInput[] | InscripcionUncheckedCreateWithoutTallerInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutTallerInput | InscripcionCreateOrConnectWithoutTallerInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutTallerInput | InscripcionUpsertWithWhereUniqueWithoutTallerInput[]
    createMany?: InscripcionCreateManyTallerInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutTallerInput | InscripcionUpdateWithWhereUniqueWithoutTallerInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutTallerInput | InscripcionUpdateManyWithWhereWithoutTallerInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type SesionUpdateManyWithoutTallerNestedInput = {
    create?: XOR<SesionCreateWithoutTallerInput, SesionUncheckedCreateWithoutTallerInput> | SesionCreateWithoutTallerInput[] | SesionUncheckedCreateWithoutTallerInput[]
    connectOrCreate?: SesionCreateOrConnectWithoutTallerInput | SesionCreateOrConnectWithoutTallerInput[]
    upsert?: SesionUpsertWithWhereUniqueWithoutTallerInput | SesionUpsertWithWhereUniqueWithoutTallerInput[]
    createMany?: SesionCreateManyTallerInputEnvelope
    set?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    disconnect?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    delete?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    connect?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    update?: SesionUpdateWithWhereUniqueWithoutTallerInput | SesionUpdateWithWhereUniqueWithoutTallerInput[]
    updateMany?: SesionUpdateManyWithWhereWithoutTallerInput | SesionUpdateManyWithWhereWithoutTallerInput[]
    deleteMany?: SesionScalarWhereInput | SesionScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutTalleresDictadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutTalleresDictadosInput, UsuarioUncheckedCreateWithoutTalleresDictadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTalleresDictadosInput
    upsert?: UsuarioUpsertWithoutTalleresDictadosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTalleresDictadosInput, UsuarioUpdateWithoutTalleresDictadosInput>, UsuarioUncheckedUpdateWithoutTalleresDictadosInput>
  }

  export type InscripcionUncheckedUpdateManyWithoutTallerNestedInput = {
    create?: XOR<InscripcionCreateWithoutTallerInput, InscripcionUncheckedCreateWithoutTallerInput> | InscripcionCreateWithoutTallerInput[] | InscripcionUncheckedCreateWithoutTallerInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutTallerInput | InscripcionCreateOrConnectWithoutTallerInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutTallerInput | InscripcionUpsertWithWhereUniqueWithoutTallerInput[]
    createMany?: InscripcionCreateManyTallerInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutTallerInput | InscripcionUpdateWithWhereUniqueWithoutTallerInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutTallerInput | InscripcionUpdateManyWithWhereWithoutTallerInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type SesionUncheckedUpdateManyWithoutTallerNestedInput = {
    create?: XOR<SesionCreateWithoutTallerInput, SesionUncheckedCreateWithoutTallerInput> | SesionCreateWithoutTallerInput[] | SesionUncheckedCreateWithoutTallerInput[]
    connectOrCreate?: SesionCreateOrConnectWithoutTallerInput | SesionCreateOrConnectWithoutTallerInput[]
    upsert?: SesionUpsertWithWhereUniqueWithoutTallerInput | SesionUpsertWithWhereUniqueWithoutTallerInput[]
    createMany?: SesionCreateManyTallerInputEnvelope
    set?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    disconnect?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    delete?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    connect?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    update?: SesionUpdateWithWhereUniqueWithoutTallerInput | SesionUpdateWithWhereUniqueWithoutTallerInput[]
    updateMany?: SesionUpdateManyWithWhereWithoutTallerInput | SesionUpdateManyWithWhereWithoutTallerInput[]
    deleteMany?: SesionScalarWhereInput | SesionScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<UsuarioCreateWithoutInscripcionesInput, UsuarioUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutInscripcionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TallerCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<TallerCreateWithoutInscripcionesInput, TallerUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: TallerCreateOrConnectWithoutInscripcionesInput
    connect?: TallerWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutInscripcionesInput, UsuarioUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutInscripcionesInput
    upsert?: UsuarioUpsertWithoutInscripcionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutInscripcionesInput, UsuarioUpdateWithoutInscripcionesInput>, UsuarioUncheckedUpdateWithoutInscripcionesInput>
  }

  export type TallerUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<TallerCreateWithoutInscripcionesInput, TallerUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: TallerCreateOrConnectWithoutInscripcionesInput
    upsert?: TallerUpsertWithoutInscripcionesInput
    connect?: TallerWhereUniqueInput
    update?: XOR<XOR<TallerUpdateToOneWithWhereWithoutInscripcionesInput, TallerUpdateWithoutInscripcionesInput>, TallerUncheckedUpdateWithoutInscripcionesInput>
  }

  export type AsistenciaCreateNestedManyWithoutSesionInput = {
    create?: XOR<AsistenciaCreateWithoutSesionInput, AsistenciaUncheckedCreateWithoutSesionInput> | AsistenciaCreateWithoutSesionInput[] | AsistenciaUncheckedCreateWithoutSesionInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutSesionInput | AsistenciaCreateOrConnectWithoutSesionInput[]
    createMany?: AsistenciaCreateManySesionInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type TallerCreateNestedOneWithoutSesionesInput = {
    create?: XOR<TallerCreateWithoutSesionesInput, TallerUncheckedCreateWithoutSesionesInput>
    connectOrCreate?: TallerCreateOrConnectWithoutSesionesInput
    connect?: TallerWhereUniqueInput
  }

  export type AsistenciaUncheckedCreateNestedManyWithoutSesionInput = {
    create?: XOR<AsistenciaCreateWithoutSesionInput, AsistenciaUncheckedCreateWithoutSesionInput> | AsistenciaCreateWithoutSesionInput[] | AsistenciaUncheckedCreateWithoutSesionInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutSesionInput | AsistenciaCreateOrConnectWithoutSesionInput[]
    createMany?: AsistenciaCreateManySesionInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type TallerUpdateOneRequiredWithoutSesionesNestedInput = {
    create?: XOR<TallerCreateWithoutSesionesInput, TallerUncheckedCreateWithoutSesionesInput>
    connectOrCreate?: TallerCreateOrConnectWithoutSesionesInput
    upsert?: TallerUpsertWithoutSesionesInput
    connect?: TallerWhereUniqueInput
    update?: XOR<XOR<TallerUpdateToOneWithWhereWithoutSesionesInput, TallerUpdateWithoutSesionesInput>, TallerUncheckedUpdateWithoutSesionesInput>
  }

  export type AsistenciaUpdateManyWithoutSesionNestedInput = {
    create?: XOR<AsistenciaCreateWithoutSesionInput, AsistenciaUncheckedCreateWithoutSesionInput> | AsistenciaCreateWithoutSesionInput[] | AsistenciaUncheckedCreateWithoutSesionInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutSesionInput | AsistenciaCreateOrConnectWithoutSesionInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutSesionInput | AsistenciaUpsertWithWhereUniqueWithoutSesionInput[]
    createMany?: AsistenciaCreateManySesionInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutSesionInput | AsistenciaUpdateWithWhereUniqueWithoutSesionInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutSesionInput | AsistenciaUpdateManyWithWhereWithoutSesionInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type TallerUpdateOneRequiredWithoutSesionesNestedInput = {
    create?: XOR<TallerCreateWithoutSesionesInput, TallerUncheckedCreateWithoutSesionesInput>
    connectOrCreate?: TallerCreateOrConnectWithoutSesionesInput
    upsert?: TallerUpsertWithoutSesionesInput
    connect?: TallerWhereUniqueInput
    update?: XOR<XOR<TallerUpdateToOneWithWhereWithoutSesionesInput, TallerUpdateWithoutSesionesInput>, TallerUncheckedUpdateWithoutSesionesInput>
  }

  export type AsistenciaUncheckedUpdateManyWithoutSesionNestedInput = {
    create?: XOR<AsistenciaCreateWithoutSesionInput, AsistenciaUncheckedCreateWithoutSesionInput> | AsistenciaCreateWithoutSesionInput[] | AsistenciaUncheckedCreateWithoutSesionInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutSesionInput | AsistenciaCreateOrConnectWithoutSesionInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutSesionInput | AsistenciaUpsertWithWhereUniqueWithoutSesionInput[]
    createMany?: AsistenciaCreateManySesionInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutSesionInput | AsistenciaUpdateWithWhereUniqueWithoutSesionInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutSesionInput | AsistenciaUpdateManyWithWhereWithoutSesionInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<UsuarioCreateWithoutAsistenciasInput, UsuarioUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAsistenciasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type SesionCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<SesionCreateWithoutAsistenciasInput, SesionUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: SesionCreateOrConnectWithoutAsistenciasInput
    connect?: SesionWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateOneRequiredWithoutAsistenciasNestedInput = {
    create?: XOR<UsuarioCreateWithoutAsistenciasInput, UsuarioUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAsistenciasInput
    upsert?: UsuarioUpsertWithoutAsistenciasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAsistenciasInput, UsuarioUpdateWithoutAsistenciasInput>, UsuarioUncheckedUpdateWithoutAsistenciasInput>
  }

  export type SesionUpdateOneRequiredWithoutAsistenciasNestedInput = {
    create?: XOR<SesionCreateWithoutAsistenciasInput, SesionUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: SesionCreateOrConnectWithoutAsistenciasInput
    upsert?: SesionUpsertWithoutAsistenciasInput
    connect?: SesionWhereUniqueInput
    update?: XOR<XOR<SesionUpdateToOneWithWhereWithoutAsistenciasInput, SesionUpdateWithoutAsistenciasInput>, SesionUncheckedUpdateWithoutAsistenciasInput>
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

  export type NestedEnumRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioFilter<$PrismaModel> | $Enums.RolUsuario
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

  export type NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRolUsuarioFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TallerCreateWithoutProfesorInput = {
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado?: boolean
    lugar?: string
    dia?: number
    bloque?: number
    inscripciones?: InscripcionCreateNestedManyWithoutTallerInput
    sesiones?: SesionCreateNestedManyWithoutTallerInput
  }

  export type AsistenciaUncheckedCreateWithoutEstudianteInput = {
    id?: number
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado?: boolean
    lugar?: string
    dia?: number
    bloque?: number
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutTallerInput
    sesiones?: SesionUncheckedCreateNestedManyWithoutTallerInput
  }

  export type AsistenciaCreateOrConnectWithoutEstudianteInput = {
    where: AsistenciaWhereUniqueInput
    create: XOR<AsistenciaCreateWithoutEstudianteInput, AsistenciaUncheckedCreateWithoutEstudianteInput>
  }

  export type AsistenciaCreateManyEstudianteInputEnvelope = {
    data: AsistenciaCreateManyEstudianteInput | AsistenciaCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type InscripcionCreateWithoutEstudianteInput = {
    fechaRegistro?: Date | string
    taller: TallerCreateNestedOneWithoutInscripcionesInput
  }

  export type InscripcionUncheckedCreateWithoutEstudianteInput = {
    id?: number
    fechaRegistro?: Date | string
    tallerId: number
  }

  export type InscripcionCreateOrConnectWithoutEstudianteInput = {
    where: InscripcionWhereUniqueInput
    create: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput>
  }

  export type InscripcionCreateManyEstudianteInputEnvelope = {
    data: InscripcionCreateManyEstudianteInput | InscripcionCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type TallerCreateWithoutProfesorInput = {
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado?: boolean
    inscripciones?: InscripcionCreateNestedManyWithoutTallerInput
    sesiones?: SesionCreateNestedManyWithoutTallerInput
  }

  export type TallerUncheckedCreateWithoutProfesorInput = {
    id?: number
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado?: boolean
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutTallerInput
    sesiones?: SesionUncheckedCreateNestedManyWithoutTallerInput
  }

  export type TallerCreateOrConnectWithoutProfesorInput = {
    where: TallerWhereUniqueInput
    create: XOR<TallerCreateWithoutProfesorInput, TallerUncheckedCreateWithoutProfesorInput>
  }

  export type TallerCreateManyProfesorInputEnvelope = {
    data: TallerCreateManyProfesorInput | TallerCreateManyProfesorInput[]
    skipDuplicates?: boolean
  }

  export type AsistenciaUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: AsistenciaWhereUniqueInput
    update: XOR<AsistenciaUpdateWithoutEstudianteInput, AsistenciaUncheckedUpdateWithoutEstudianteInput>
    create: XOR<AsistenciaCreateWithoutEstudianteInput, AsistenciaUncheckedCreateWithoutEstudianteInput>
  }

  export type AsistenciaUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: AsistenciaWhereUniqueInput
    data: XOR<AsistenciaUpdateWithoutEstudianteInput, AsistenciaUncheckedUpdateWithoutEstudianteInput>
  }

  export type AsistenciaUpdateManyWithWhereWithoutEstudianteInput = {
    where: AsistenciaScalarWhereInput
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type TallerScalarWhereInput = {
    AND?: TallerScalarWhereInput | TallerScalarWhereInput[]
    OR?: TallerScalarWhereInput[]
    NOT?: TallerScalarWhereInput | TallerScalarWhereInput[]
    id?: IntFilter<"Taller"> | number
    nombre?: StringFilter<"Taller"> | string
    descripcion?: StringFilter<"Taller"> | string
    horario?: StringFilter<"Taller"> | string
    semestre?: StringFilter<"Taller"> | string
    estado?: BoolFilter<"Taller"> | boolean
    lugar?: StringFilter<"Taller"> | string
    dia?: IntFilter<"Taller"> | number
    bloque?: IntFilter<"Taller"> | number
    profesorId?: IntFilter<"Taller"> | number
  }

  export type InscripcionUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: InscripcionWhereUniqueInput
    update: XOR<InscripcionUpdateWithoutEstudianteInput, InscripcionUncheckedUpdateWithoutEstudianteInput>
    create: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput>
  }

  export type InscripcionUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: InscripcionWhereUniqueInput
    data: XOR<InscripcionUpdateWithoutEstudianteInput, InscripcionUncheckedUpdateWithoutEstudianteInput>
  }

  export type InscripcionUpdateManyWithWhereWithoutEstudianteInput = {
    where: InscripcionScalarWhereInput
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type InscripcionScalarWhereInput = {
    AND?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
    OR?: InscripcionScalarWhereInput[]
    NOT?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
    id?: IntFilter<"Inscripcion"> | number
    fechaRegistro?: DateTimeFilter<"Inscripcion"> | Date | string
    estudianteId?: IntFilter<"Inscripcion"> | number
    tallerId?: IntFilter<"Inscripcion"> | number
  }

  export type TallerUpsertWithWhereUniqueWithoutProfesorInput = {
    where: TallerWhereUniqueInput
    update: XOR<TallerUpdateWithoutProfesorInput, TallerUncheckedUpdateWithoutProfesorInput>
    create: XOR<TallerCreateWithoutProfesorInput, TallerUncheckedCreateWithoutProfesorInput>
  }

  export type TallerUpdateWithWhereUniqueWithoutProfesorInput = {
    where: TallerWhereUniqueInput
    data: XOR<TallerUpdateWithoutProfesorInput, TallerUncheckedUpdateWithoutProfesorInput>
  }

  export type TallerUpdateManyWithWhereWithoutProfesorInput = {
    where: TallerScalarWhereInput
    data: XOR<TallerUpdateManyMutationInput, TallerUncheckedUpdateManyWithoutProfesorInput>
  }

  export type TallerScalarWhereInput = {
    AND?: TallerScalarWhereInput | TallerScalarWhereInput[]
    OR?: TallerScalarWhereInput[]
    NOT?: TallerScalarWhereInput | TallerScalarWhereInput[]
    id?: IntFilter<"Taller"> | number
    nombre?: StringFilter<"Taller"> | string
    descripcion?: StringFilter<"Taller"> | string
    horario?: StringFilter<"Taller"> | string
    semestre?: StringFilter<"Taller"> | string
    estado?: BoolFilter<"Taller"> | boolean
    profesorId?: IntFilter<"Taller"> | number
  }

  export type InscripcionCreateWithoutTallerInput = {
    fechaRegistro?: Date | string
    estudiante: UsuarioCreateNestedOneWithoutInscripcionesInput
  }

  export type InscripcionUncheckedCreateWithoutTallerInput = {
    id?: number
    fechaRegistro?: Date | string
    estudianteId: number
  }

  export type InscripcionCreateOrConnectWithoutTallerInput = {
    where: InscripcionWhereUniqueInput
    create: XOR<InscripcionCreateWithoutTallerInput, InscripcionUncheckedCreateWithoutTallerInput>
  }

  export type InscripcionCreateManyTallerInputEnvelope = {
    data: InscripcionCreateManyTallerInput | InscripcionCreateManyTallerInput[]
    skipDuplicates?: boolean
  }

  export type SesionCreateWithoutTallerInput = {
    fecha?: Date | string
    bloque: number
    qrToken: string
    validoHasta: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutSesionInput
  }

  export type SesionUncheckedCreateWithoutTallerInput = {
    id?: number
    fecha?: Date | string
    bloque: number
    qrToken: string
    validoHasta: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutSesionInput
  }

  export type SesionCreateOrConnectWithoutTallerInput = {
    where: SesionWhereUniqueInput
    create: XOR<SesionCreateWithoutTallerInput, SesionUncheckedCreateWithoutTallerInput>
  }

  export type SesionCreateManyTallerInputEnvelope = {
    data: SesionCreateManyTallerInput | SesionCreateManyTallerInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutTalleresDictadosInput = {
    nombre: string
    apellido: string
    rut: string
    correo: string
    password: string
    rol: $Enums.RolUsuario
    asistencias?: AsistenciaCreateNestedManyWithoutEstudianteInput
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput
  }

  export type UsuarioUncheckedCreateWithoutTalleresDictadosInput = {
    id?: number
    nombre: string
    apellido: string
    rut: string
    correo: string
    password: string
    rol: $Enums.RolUsuario
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutEstudianteInput
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type UsuarioCreateOrConnectWithoutTalleresDictadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTalleresDictadosInput, UsuarioUncheckedCreateWithoutTalleresDictadosInput>
  }

  export type InscripcionUpsertWithWhereUniqueWithoutTallerInput = {
    where: InscripcionWhereUniqueInput
    update: XOR<InscripcionUpdateWithoutTallerInput, InscripcionUncheckedUpdateWithoutTallerInput>
    create: XOR<InscripcionCreateWithoutTallerInput, InscripcionUncheckedCreateWithoutTallerInput>
  }

  export type InscripcionUpdateWithWhereUniqueWithoutTallerInput = {
    where: InscripcionWhereUniqueInput
    data: XOR<InscripcionUpdateWithoutTallerInput, InscripcionUncheckedUpdateWithoutTallerInput>
  }

  export type InscripcionUpdateManyWithWhereWithoutTallerInput = {
    where: InscripcionScalarWhereInput
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyWithoutTallerInput>
  }

  export type SesionUpsertWithWhereUniqueWithoutTallerInput = {
    where: SesionWhereUniqueInput
    update: XOR<SesionUpdateWithoutTallerInput, SesionUncheckedUpdateWithoutTallerInput>
    create: XOR<SesionCreateWithoutTallerInput, SesionUncheckedCreateWithoutTallerInput>
  }

  export type SesionUpdateWithWhereUniqueWithoutTallerInput = {
    where: SesionWhereUniqueInput
    data: XOR<SesionUpdateWithoutTallerInput, SesionUncheckedUpdateWithoutTallerInput>
  }

  export type SesionUpdateManyWithWhereWithoutTallerInput = {
    where: SesionScalarWhereInput
    data: XOR<SesionUpdateManyMutationInput, SesionUncheckedUpdateManyWithoutTallerInput>
  }

  export type SesionScalarWhereInput = {
    AND?: SesionScalarWhereInput | SesionScalarWhereInput[]
    OR?: SesionScalarWhereInput[]
    NOT?: SesionScalarWhereInput | SesionScalarWhereInput[]
    id?: IntFilter<"Sesion"> | number
    tallerId?: IntFilter<"Sesion"> | number
    fecha?: DateTimeFilter<"Sesion"> | Date | string
    bloque?: IntFilter<"Sesion"> | number
    qrToken?: StringFilter<"Sesion"> | string
    validoHasta?: DateTimeFilter<"Sesion"> | Date | string
  }

  export type UsuarioUpsertWithoutTalleresDictadosInput = {
    update: XOR<UsuarioUpdateWithoutTalleresDictadosInput, UsuarioUncheckedUpdateWithoutTalleresDictadosInput>
    create: XOR<UsuarioCreateWithoutTalleresDictadosInput, UsuarioUncheckedCreateWithoutTalleresDictadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTalleresDictadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTalleresDictadosInput, UsuarioUncheckedUpdateWithoutTalleresDictadosInput>
  }

  export type UsuarioUpdateWithoutTalleresDictadosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    asistencias?: AsistenciaUpdateManyWithoutEstudianteNestedInput
    inscripciones?: InscripcionUpdateManyWithoutEstudianteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTalleresDictadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    asistencias?: AsistenciaUncheckedUpdateManyWithoutEstudianteNestedInput
    inscripciones?: InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type UsuarioCreateWithoutInscripcionesInput = {
    nombre: string
    apellido: string
    rut: string
    correo: string
    password: string
    rol: $Enums.RolUsuario
    asistencias?: AsistenciaCreateNestedManyWithoutEstudianteInput
    talleresDictados?: TallerCreateNestedManyWithoutProfesorInput
  }

  export type UsuarioUncheckedCreateWithoutInscripcionesInput = {
    id?: number
    nombre: string
    apellido: string
    rut: string
    correo: string
    password: string
    rol: $Enums.RolUsuario
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutEstudianteInput
    talleresDictados?: TallerUncheckedCreateNestedManyWithoutProfesorInput
  }

  export type UsuarioCreateOrConnectWithoutInscripcionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutInscripcionesInput, UsuarioUncheckedCreateWithoutInscripcionesInput>
  }

  export type TallerCreateWithoutInscripcionesInput = {
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado?: boolean
    lugar?: string
    dia?: number
    bloque?: number
    profesor: UsuarioCreateNestedOneWithoutTalleresDictadosInput
    sesiones?: SesionCreateNestedManyWithoutTallerInput
    profesor: UsuarioCreateNestedOneWithoutTalleresDictadosInput
  }

  export type TallerUncheckedCreateWithoutInscripcionesInput = {
    id?: number
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado?: boolean
    lugar?: string
    dia?: number
    bloque?: number
    profesorId: number
    sesiones?: SesionUncheckedCreateNestedManyWithoutTallerInput
  }

  export type TallerCreateOrConnectWithoutInscripcionesInput = {
    where: TallerWhereUniqueInput
    create: XOR<TallerCreateWithoutInscripcionesInput, TallerUncheckedCreateWithoutInscripcionesInput>
  }

  export type UsuarioUpsertWithoutInscripcionesInput = {
    update: XOR<UsuarioUpdateWithoutInscripcionesInput, UsuarioUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<UsuarioCreateWithoutInscripcionesInput, UsuarioUncheckedCreateWithoutInscripcionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutInscripcionesInput, UsuarioUncheckedUpdateWithoutInscripcionesInput>
  }

  export type UsuarioUpdateWithoutInscripcionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    asistencias?: AsistenciaUpdateManyWithoutEstudianteNestedInput
    talleresDictados?: TallerUpdateManyWithoutProfesorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutInscripcionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    asistencias?: AsistenciaUncheckedUpdateManyWithoutEstudianteNestedInput
    talleresDictados?: TallerUncheckedUpdateManyWithoutProfesorNestedInput
  }

  export type TallerUpsertWithoutInscripcionesInput = {
    update: XOR<TallerUpdateWithoutInscripcionesInput, TallerUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<TallerCreateWithoutInscripcionesInput, TallerUncheckedCreateWithoutInscripcionesInput>
    where?: TallerWhereInput
  }

  export type TallerUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: TallerWhereInput
    data: XOR<TallerUpdateWithoutInscripcionesInput, TallerUncheckedUpdateWithoutInscripcionesInput>
  }

  export type TallerUpdateWithoutInscripcionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    lugar?: StringFieldUpdateOperationsInput | string
    dia?: IntFieldUpdateOperationsInput | number
    bloque?: IntFieldUpdateOperationsInput | number
    profesor?: UsuarioUpdateOneRequiredWithoutTalleresDictadosNestedInput
    sesiones?: SesionUpdateManyWithoutTallerNestedInput
    profesor?: UsuarioUpdateOneRequiredWithoutTalleresDictadosNestedInput
  }

  export type TallerUncheckedUpdateWithoutInscripcionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    lugar?: StringFieldUpdateOperationsInput | string
    dia?: IntFieldUpdateOperationsInput | number
    bloque?: IntFieldUpdateOperationsInput | number
    profesorId?: IntFieldUpdateOperationsInput | number
    sesiones?: SesionUncheckedUpdateManyWithoutTallerNestedInput
  }

  export type AsistenciaCreateWithoutSesionInput = {
    fechaHora?: Date | string
    estado?: string
    notaSatisfaccion?: number | null
    comentario?: string | null
    estudiante: UsuarioCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciaUncheckedCreateWithoutSesionInput = {
    id?: number
    estudianteId: number
    fechaHora?: Date | string
    estado?: string
    notaSatisfaccion?: number | null
    comentario?: string | null
  }

  export type AsistenciaCreateOrConnectWithoutSesionInput = {
    where: AsistenciaWhereUniqueInput
    create: XOR<AsistenciaCreateWithoutSesionInput, AsistenciaUncheckedCreateWithoutSesionInput>
  }

  export type AsistenciaCreateManySesionInputEnvelope = {
    data: AsistenciaCreateManySesionInput | AsistenciaCreateManySesionInput[]
    skipDuplicates?: boolean
  }

  export type TallerCreateWithoutSesionesInput = {
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado?: boolean
    lugar?: string
    dia?: number
    bloque?: number
    profesor: UsuarioCreateNestedOneWithoutTalleresDictadosInput
    inscripciones?: InscripcionCreateNestedManyWithoutTallerInput
    profesor: UsuarioCreateNestedOneWithoutTalleresDictadosInput
  }

  export type TallerUncheckedCreateWithoutSesionesInput = {
    id?: number
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado?: boolean
    lugar?: string
    dia?: number
    bloque?: number
    profesorId: number
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutTallerInput
  }

  export type TallerCreateOrConnectWithoutSesionesInput = {
    where: TallerWhereUniqueInput
    create: XOR<TallerCreateWithoutSesionesInput, TallerUncheckedCreateWithoutSesionesInput>
  }

  export type AsistenciaUpsertWithWhereUniqueWithoutSesionInput = {
    where: AsistenciaWhereUniqueInput
    update: XOR<AsistenciaUpdateWithoutSesionInput, AsistenciaUncheckedUpdateWithoutSesionInput>
    create: XOR<AsistenciaCreateWithoutSesionInput, AsistenciaUncheckedCreateWithoutSesionInput>
  }

  export type AsistenciaUpdateWithWhereUniqueWithoutSesionInput = {
    where: AsistenciaWhereUniqueInput
    data: XOR<AsistenciaUpdateWithoutSesionInput, AsistenciaUncheckedUpdateWithoutSesionInput>
  }

  export type AsistenciaUpdateManyWithWhereWithoutSesionInput = {
    where: AsistenciaScalarWhereInput
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyWithoutSesionInput>
  }

  export type TallerUpsertWithoutSesionesInput = {
    update: XOR<TallerUpdateWithoutSesionesInput, TallerUncheckedUpdateWithoutSesionesInput>
    create: XOR<TallerCreateWithoutSesionesInput, TallerUncheckedCreateWithoutSesionesInput>
    where?: TallerWhereInput
  }

  export type TallerUpdateToOneWithWhereWithoutSesionesInput = {
    where?: TallerWhereInput
    data: XOR<TallerUpdateWithoutSesionesInput, TallerUncheckedUpdateWithoutSesionesInput>
  }

  export type TallerUpdateWithoutSesionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    lugar?: StringFieldUpdateOperationsInput | string
    dia?: IntFieldUpdateOperationsInput | number
    bloque?: IntFieldUpdateOperationsInput | number
    profesor?: UsuarioUpdateOneRequiredWithoutTalleresDictadosNestedInput
    inscripciones?: InscripcionUpdateManyWithoutTallerNestedInput
    profesor?: UsuarioUpdateOneRequiredWithoutTalleresDictadosNestedInput
  }

  export type TallerUncheckedUpdateWithoutSesionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    lugar?: StringFieldUpdateOperationsInput | string
    dia?: IntFieldUpdateOperationsInput | number
    bloque?: IntFieldUpdateOperationsInput | number
    profesorId?: IntFieldUpdateOperationsInput | number
    inscripciones?: InscripcionUncheckedUpdateManyWithoutTallerNestedInput
  }

  export type AsistenciaUpsertWithWhereUniqueWithoutSesionInput = {
    where: AsistenciaWhereUniqueInput
    update: XOR<AsistenciaUpdateWithoutSesionInput, AsistenciaUncheckedUpdateWithoutSesionInput>
    create: XOR<AsistenciaCreateWithoutSesionInput, AsistenciaUncheckedCreateWithoutSesionInput>
  }

  export type AsistenciaUpdateWithWhereUniqueWithoutSesionInput = {
    where: AsistenciaWhereUniqueInput
    data: XOR<AsistenciaUpdateWithoutSesionInput, AsistenciaUncheckedUpdateWithoutSesionInput>
  }

  export type AsistenciaUpdateManyWithWhereWithoutSesionInput = {
    where: AsistenciaScalarWhereInput
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyWithoutSesionInput>
  }

  export type SesionCreateWithoutAsistenciasInput = {
    fecha?: Date | string
    bloque: number
    qrToken: string
    validoHasta: Date | string
    taller: TallerCreateNestedOneWithoutSesionesInput
  }

  export type SesionUncheckedCreateWithoutAsistenciasInput = {
    id?: number
    tallerId: number
    fecha?: Date | string
    bloque: number
    qrToken: string
    validoHasta: Date | string
  }

  export type SesionCreateOrConnectWithoutAsistenciasInput = {
    where: SesionWhereUniqueInput
    create: XOR<SesionCreateWithoutAsistenciasInput, SesionUncheckedCreateWithoutAsistenciasInput>
  }

  export type UsuarioCreateWithoutAsistenciasInput = {
    nombre: string
    apellido: string
    rut: string
    correo: string
    password: string
    rol: $Enums.RolUsuario
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput
    talleresDictados?: TallerCreateNestedManyWithoutProfesorInput
  }

  export type UsuarioUncheckedCreateWithoutAsistenciasInput = {
    id?: number
    nombre: string
    apellido: string
    rut: string
    correo: string
    password: string
    rol: $Enums.RolUsuario
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutEstudianteInput
    talleresDictados?: TallerUncheckedCreateNestedManyWithoutProfesorInput
  }

  export type UsuarioCreateOrConnectWithoutAsistenciasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAsistenciasInput, UsuarioUncheckedCreateWithoutAsistenciasInput>
  }

  export type SesionCreateWithoutAsistenciasInput = {
    fecha?: Date | string
    bloque: $Enums.BloqueHorario
    qrToken: string
    validoHasta: Date | string
    taller: TallerCreateNestedOneWithoutSesionesInput
  }

  export type SesionUpdateWithoutAsistenciasInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    bloque?: IntFieldUpdateOperationsInput | number
    qrToken?: StringFieldUpdateOperationsInput | string
    validoHasta?: DateTimeFieldUpdateOperationsInput | Date | string
    taller?: TallerUpdateOneRequiredWithoutSesionesNestedInput
  }

  export type SesionUncheckedUpdateWithoutAsistenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    tallerId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    bloque?: IntFieldUpdateOperationsInput | number
    qrToken?: StringFieldUpdateOperationsInput | string
    validoHasta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpsertWithoutAsistenciasInput = {
    update: XOR<UsuarioUpdateWithoutAsistenciasInput, UsuarioUncheckedUpdateWithoutAsistenciasInput>
    create: XOR<UsuarioCreateWithoutAsistenciasInput, UsuarioUncheckedCreateWithoutAsistenciasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAsistenciasInput, UsuarioUncheckedUpdateWithoutAsistenciasInput>
  }

  export type UsuarioUpdateWithoutAsistenciasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    inscripciones?: InscripcionUpdateManyWithoutEstudianteNestedInput
    talleresDictados?: TallerUpdateManyWithoutProfesorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAsistenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    inscripciones?: InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput
    talleresDictados?: TallerUncheckedUpdateManyWithoutProfesorNestedInput
  }

  export type TallerCreateManyProfesorInput = {
    id?: number
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado?: boolean
    lugar?: string
    dia?: number
    bloque?: number
  }

  export type SesionUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: SesionWhereInput
    data: XOR<SesionUpdateWithoutAsistenciasInput, SesionUncheckedUpdateWithoutAsistenciasInput>
  }

  export type SesionUpdateWithoutAsistenciasInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    bloque?: EnumBloqueHorarioFieldUpdateOperationsInput | $Enums.BloqueHorario
    qrToken?: StringFieldUpdateOperationsInput | string
    validoHasta?: DateTimeFieldUpdateOperationsInput | Date | string
    taller?: TallerUpdateOneRequiredWithoutSesionesNestedInput
  }

  export type SesionUncheckedUpdateWithoutAsistenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    tallerId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    bloque?: EnumBloqueHorarioFieldUpdateOperationsInput | $Enums.BloqueHorario
    qrToken?: StringFieldUpdateOperationsInput | string
    validoHasta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateManyEstudianteInput = {
    id?: number
    sesionId: number
    fechaHora?: Date | string
    estado?: string
    notaSatisfaccion?: number | null
    comentario?: string | null
  }

  export type TallerUpdateWithoutProfesorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    lugar?: StringFieldUpdateOperationsInput | string
    dia?: IntFieldUpdateOperationsInput | number
    bloque?: IntFieldUpdateOperationsInput | number
    inscripciones?: InscripcionUpdateManyWithoutTallerNestedInput
    sesiones?: SesionUpdateManyWithoutTallerNestedInput
  }

  export type TallerCreateManyProfesorInput = {
    id?: number
    nombre: string
    descripcion: string
    horario: string
    semestre: string
    estado?: boolean
  }

  export type AsistenciaUpdateWithoutEstudianteInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    notaSatisfaccion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    sesion?: SesionUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type AsistenciaUncheckedUpdateWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    lugar?: StringFieldUpdateOperationsInput | string
    dia?: IntFieldUpdateOperationsInput | number
    bloque?: IntFieldUpdateOperationsInput | number
    inscripciones?: InscripcionUncheckedUpdateManyWithoutTallerNestedInput
    sesiones?: SesionUncheckedUpdateManyWithoutTallerNestedInput
  }

  export type AsistenciaUncheckedUpdateManyWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    lugar?: StringFieldUpdateOperationsInput | string
    dia?: IntFieldUpdateOperationsInput | number
    bloque?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionUpdateWithoutEstudianteInput = {
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    taller?: TallerUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type InscripcionUncheckedUpdateWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    tallerId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionUncheckedUpdateManyWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    tallerId?: IntFieldUpdateOperationsInput | number
  }

  export type TallerUpdateWithoutProfesorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    inscripciones?: InscripcionUpdateManyWithoutTallerNestedInput
    sesiones?: SesionUpdateManyWithoutTallerNestedInput
  }

  export type TallerUncheckedUpdateWithoutProfesorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    inscripciones?: InscripcionUncheckedUpdateManyWithoutTallerNestedInput
    sesiones?: SesionUncheckedUpdateManyWithoutTallerNestedInput
  }

  export type TallerUncheckedUpdateManyWithoutProfesorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InscripcionCreateManyTallerInput = {
    id?: number
    fechaRegistro?: Date | string
    estudianteId: number
  }

  export type SesionCreateManyTallerInput = {
    id?: number
    fecha?: Date | string
    bloque: number
    qrToken: string
    validoHasta: Date | string
  }

  export type InscripcionUpdateWithoutTallerInput = {
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estudiante?: UsuarioUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type InscripcionUncheckedUpdateWithoutTallerInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionUncheckedUpdateManyWithoutTallerInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estudianteId?: IntFieldUpdateOperationsInput | number
  }

  export type SesionUpdateWithoutTallerInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    bloque?: IntFieldUpdateOperationsInput | number
    qrToken?: StringFieldUpdateOperationsInput | string
    validoHasta?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutSesionNestedInput
  }

  export type SesionUncheckedUpdateWithoutTallerInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    bloque?: IntFieldUpdateOperationsInput | number
    qrToken?: StringFieldUpdateOperationsInput | string
    validoHasta?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutSesionNestedInput
  }

  export type SesionUncheckedUpdateManyWithoutTallerInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    bloque?: IntFieldUpdateOperationsInput | number
    qrToken?: StringFieldUpdateOperationsInput | string
    validoHasta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateManySesionInput = {
    id?: number
    estudianteId: number
    fechaHora?: Date | string
    estado?: string
    notaSatisfaccion?: number | null
    comentario?: string | null
  }

  export type AsistenciaUpdateWithoutSesionInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    notaSatisfaccion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    estudiante?: UsuarioUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type AsistenciaUncheckedUpdateWithoutSesionInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    notaSatisfaccion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AsistenciaUncheckedUpdateManyWithoutSesionInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    notaSatisfaccion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
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