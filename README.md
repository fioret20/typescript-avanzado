// CLASE 18 - TYPESCRIPT AVANZADO
(Pasar a un documento .ts para poder entender la lógica)


// Utility Types: 
//Los tipos de utilidad son tipos que se pueden utilizar para crear nuevos tipos. Son útiles para crear
//tipos que no son instanciables, como los tipos de interfaz o los tipos. 

// Por ejemplo , el tipo `Partial<T>` es un tipo que toma un tipo `T` y crea

interface User {
    id: number;
    name: string;
    email: string;
    age: number;   
}

type ModifyUser = {
    id?: number;
    name?: string;
    email?: string;
    age?: number; // Propiedad opcional
}

// Nuevo uso de un UTILITY TYPE: 

// PARTIAL<T>:
// El tipo `Partial<T>` es un tipo que toma un tipo `T` y crea un nuevo tipo con todas las propiedades de `T` marcadas como opcionales.

type PartialUser = Partial<User>;

// Son los mismos datos que usa ModifyUser, pero con todas las propiedades opcionales.
// Esto significa que puedes crear un objeto de tipo PartialUser sin tener que proporcionar todas las propiedades.

// Entonces, las ventajas de usar Partial<T> son:
// 1. Reduce la repetición de código.   
// 2. Hace que el código sea más legible y mantenible.
// 3. Permite crear tipos más flexibles y reutilizables.
// 4. Facilita la creación de tipos que no son instanciables, como los tipos de interfaz o los tipos.
// 5. Permite crear tipos que son más fáciles de usar en funciones y métodos.
// 6. Facilita la creación de tipos que son más fáciles de usar en funciones y métodos.

// Usa todos los campos de forma "parcial/opcional" para crear un nuevo tipo de usuario.

// REQUIRED<T>:
// El tipo `Required<T>` es un tipo que toma un tipo `T` y crea un nuevo tipo con todas las propiedades de `T` marcadas como requeridas.
// Esto significa que puedes crear un objeto de tipo RequiredUser sin tener que proporcionar todas las propiedades.

type RequiredUser = Required<User>;

//Esto hace que todo sea "requerido/obligatorio" y no se pueda crear un objeto de tipo RequiredUser sin proporcionar todas las propiedades.
// Por ejemplo:

function validateConfig(config: RequiredUser) {
    // Aquí, todas las propiedades de config son requeridas
    console.log(config.id, config.name, config.email, config.age);
}

validateConfig({
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30
});

// Esto es útil cuando quieres asegurarte de que todas las propiedades de un objeto son requeridas y no se pueden omitir.

// PICK<T, K>:
// El tipo `Pick<T, K>` es un tipo que toma un tipo `T` y un conjunto de claves `K` y crea un nuevo tipo que solo incluye las propiedades de `T` que están en `K`.  
// Esto significa que puedes crear un objeto de tipo PickedUser que solo tenga las propiedades especificadas en K.

// T = Tipo original
// K = Claves que quieres seleccionar del tipo original


// Por ejemplo:

interface Product {
    id: number;
    name?: string;
    price: number;
    description: string;    
    category: string;
    inStock: boolean;

}

type PickedUser = Pick<User, 'id' | 'name'>;

// Esto crea un nuevo tipo que solo tiene las propiedades `id` y `name` de `User`.

// o tambien: 

type PickedProduct = Pick<Product, 'name' | 'description'>;

// Esto crea un nuevo tipo que solo tiene las propiedades `name` y `description` de `Product`.
// Esto es útil cuando quieres crear un tipo que solo incluya ciertas propiedades de otro tipo y no necesitas todas las propiedades.

// ¿Para qué sirve Pick<T, K>?
// 1. Reduce la repetición de código.
// 2. Hace que el código sea más legible y mantenible.
// 3. Permite crear tipos más flexibles y reutilizables.
// 4. Facilita la creación de tipos que no son instanciables, como los tipos de interfaz o los tipos.
// 5. Permite crear tipos que son más fáciles de usar en funciones y métodos.
// 6. Facilita la creación de tipos que son más fáciles de usar en funciones y métodos.

// En palabras simples, Pick<T, K> es útil para crear un nuevo tipo que solo incluya ciertas propiedades de otro tipo y no necesitas todas las propiedades.

// OMIT<T, K>:
// El tipo `Omit<T, K>` es un tipo que toma un tipo `T` y un conjunto de claves `K` y crea un nuevo tipo que excluye las propiedades de `T` que están en `K`.
// Esto significa que puedes crear un objeto de tipo OmittedUser que no tenga las propiedades especificadas en K.
// Por ejemplo:

interface Libros {
    id: number;
    title: string; 
    author: string;
    year: number;
    }

type OmitLibros = Omit<Product, 'description' | 'category'>;

// Esto crea un nuevo tipo que no tiene las propiedades `description` y `category` de `Product`.
// y sirve para crear un nuevo tipo que excluye ciertas propiedades de otro tipo y no necesitas esas propiedades.

// ¿Para qué sirve Omit<T, K>?
// 1. Reduce la repetición de código.
// 2. Hace que el código sea más legible y mantenible.
// 3. Permite crear tipos más flexibles y reutilizables.
// 4. Facilita la creación de tipos que no son instanciables, como los tipos de interfaz o los tipos.

// En simples palabras, Omit<T, K> es útil para crear un nuevo tipo que excluye ciertas propiedades de otro tipo y no necesitas esas propiedades.


// Entonces las diferencias entre Pick<T, K> y Omit<T, K> son las siguientes:
// 1. Pick<T, K> crea un nuevo tipo que solo incluye las propiedades especificadas en K, mientras que Omit<T, K> crea un nuevo tipo que excluye las propiedades especificadas en K.
// 2. Pick<T, K> es útil cuando quieres crear un tipo que solo incluya ciertas propiedades de otro tipo y no necesitas todas las propiedades, mientras que Omit<T, K> es útil cuando quieres crear un tipo que excluye ciertas propiedades de otro tipo y no necesitas esas propiedades.

// RECORD<K, T>:
// El tipo `Record<K, T>` (registro) es un tipo que toma un conjunto de claves
// `K` y un tipo `T` y crea un nuevo tipo que es un objeto con las claves de `K` y los valores de tipo `T`.

type RecordExample = Record<string, number>;
// Esto crea un nuevo tipo que es un objeto con claves de tipo `string` y valores de tipo `number`.
// Por ejemplo, puedes usar Record para crear un tipo que represente un diccionario de usuarios:

const cat = {
    "name": "kitty",
    "age": 3,
    "color": "black",
    "ower": "John"
}

type CatRecord = Record<string, number>;

// sirve para tipar la composicion valor-clave de un objeto.
const catAges: CatRecord = {
    "kitty": 3,
    "tom": 5,
    "felix": 2
};

// Otro ejemplo

const httpCodes: StatusCodes = {
    "OK": 200,
    "NOT_FOUND": 404,
    "UNAUTHORIZED": 401
}

// Usar con tipos más específicos:
type Theme = "light" | "dark" | "auto";
type ThemeStyles = {
    background: string;
    text: string;
}
type ThemeConfig = Record<Theme, ThemeStyles>;

// Entonces el "ThemeConfig" es un objeto que tiene las claves "light", "dark" y "auto", y los valores son objetos con las propiedades "background" y "text".
// Osea: Quiero que mi objeto configuracion del tema tenga la clave con estos valores, y los valores con este tipado.   
// Esto es útil cuando quieres crear un tipo que represente un conjunto de datos con claves
// específicas y valores de un tipo específico.

// Entonces, por ejemplo, usar "darklight" como clave en lugar de "string" en Record<string, number>.
// no se podría hacer, ya que "darklight" no es un tipo válido de clave.

// Se usa cuando: 
// 1. Quieres crear un tipo que represente un conjunto de datos con claves específicas y valores de un tipo específico.
// 2. Quieres asegurarte de que las claves de un objeto son de un conjunto específico de valores.
// 3. Quieres tipar la composición valor-clave de un objeto.

// Hay muchos más Utility Types en TypeScript (revisar en página de documentación oficial de TS), pero estos son algunos de los más comunes y útiles.


//             TYPES EN CLASES:

// TS nos permite usar tipos de manera avanzada en las clases, incluyendo propiedades, métodos, herencias, modificadores de acceso y constructores.

class User {
    // propiedad con tipos explicitos
    public id: number;
    public name: string;
    private email: string;
    protected createdAt: Date;
    readonly role: string;

    constructor(id: number, name: string, email: string, role: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.createdAt = new Date();
    }

// esto se usa para definir el tipo de la propiedad email, y que no se pueda modificar fuera de la clase.

// Método con tipos en parametros y retorno

public updateEmail(newEmail: string): boolean {
    if (this.isvalidateEmail(newEmail)) {
        this.email = newEmail;
        return true;
    }
    return false;
}

// Método privado con tipos en parametros y retorno

private isvalidateEmail(email: string): boolean {
    return email.includes('@');
}

// Getter con tipos de retorno:

public getEmail(): string {
    return this.email;
}

const me = new User(1, "John Doe", "john@mail.com");

console.log(me); // User { id: 1, name: 'John Doe', email: '
console.log(me.getEmail()); // john@mail.com



// entonces publico, privado y protegido son modificadores de acceso que controlan la visibilidad de las propiedades y métodos de una clase.
// - `public`: La propiedad o método es accesible desde cualquier parte del código.
// - `private`: La propiedad o método es accesible solo dentro de la clase.
// el "private" suelen ponerle un "_" al principio del nombre de la propiedad o método para indicar que es privado.
// por ejemplo: `_email`.
// - `protected`: La propiedad o método es accesible solo dentro de la clase y sus subclases.
// - `readonly`: La propiedad es de solo lectura y no se puede modificar después de su inicialización.

// PROPIEDADES AUTOMÁTICAS EN CONSTRUCTORES:
// TypeScript permite definir propiedades directamente en el constructor, lo que simplifica la sintaxis y evita la necesidad de declarar las propiedades por separado.
// Por ejemplo:

class Product {
    // Declaración de propiedades automáticas en el constructor
    constructor(
        public id: number,
        public name: string,
        public price: number,
        private description: string
        protected category: string
        readonly createdAt: Date = new Date()
    ) {}

    public getPrice(): number {
        return this.price;
    }

    public applyDiscount(percentage: number): void {
        if (percentage > 0 && percentage < 100) {
            this.price = this.price * (1 - percentage / 100);
        }
    }
}


// que devuelva void significa que el método no retorna ningún valor, es decir, no devuelve nada.
// En este ejemplo, las propiedades `id`, `name`, `price`, `description`, `category` y `createdAt` se definen directamente en el constructor.
// Esto es útil para simplificar la sintaxis y evitar la necesidad de declarar las propiedades por separado.
// La propiedad `description` es privada, lo que significa que solo se puede acceder a
// ella dentro de la clase `Product`. La propiedad `createdAt` es de solo lectura, lo que significa que no se puede modificar después de su inicialización.
// La propiedad `category` es protegida, lo que significa que se puede acceder a
// ella dentro de la clase `Product` y sus subclases.
// Los métodos `getPrice` y `applyDiscount` son públicos, lo que significa que se pueden llamar desde cualquier parte del código.
// Esto es útil para simplificar la sintaxis y evitar la necesidad de declarar las propiedades por separado.
// La propiedad `description` es privada, lo que significa que solo se puede acceder a
// ella dentro de la clase `Product`. La propiedad `createdAt` es de solo lectura, lo que significa que no se puede modificar después de su inicialización.

// Esto sirve para simplificar la sintaxis y evitar la necesidad de declarar las propiedades por separado.
// Además, TypeScript permite definir tipos para los parámetros del constructor y los métodos, lo que ayuda a garantizar la seguridad de tipos en tiempo de compilación.
// Por ejemplo, en el constructor de la clase `Product`, los parámetros `id`, `name`, `price`, `description` y `category` tienen tipos específicos.
// Esto ayuda a garantizar que los valores pasados al constructor sean del tipo correcto y evita errores en tiempo de ejecución.
// Por ejemplo, si se intenta crear un objeto de la clase `Product` con un valor
// de `id` que no es un número, TypeScript generará un error en tiempo de compilación.
// Esto es útil para garantizar la seguridad de tipos en tiempo de compilación y evitar errores en tiempo de ejecución.


// En proyectos reales, es común utilizar TypeScript para definir tipos en clases, lo que ayuda a garantizar la seguridad de tipos y la legibilidad del código.


// CLASES ABSTRACTAS CON TIPOS:
// Las clases abstractas son clases que no se pueden instanciar directamente, pero pueden ser heredadas por otras clases.
// Las clases abstractas se utilizan para definir un contrato o una interfaz que deben implementar las clases que las heredan.

abstract class Animal {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Método abstracto que debe ser implementado por las subclases
    abstract makeSound(): string;
    abstract move(): void;

    // Método concreto que puede ser utilizado por las subclases
    public describe(): string {
        return `${this.name} tiene ${this.age} años.`;
    }
}

// Clase que hereda de la clase abstracta Animal, implementando el método makeSound

class Dog extends Animal {
    private breed: string; // porque solo quiero que se pueda acceder a esta propiedad desde la clase Dog y sus subclases.

    constructor(name: string, age: number, breed: string) {
        super(name, age); // Llama al constructor de la clase base Animal (clase padre o superclase)
        this.breed = breed; // Propiedad privada de la clase Dog
    }

public makeSound(): string {
    return "Woof!";
}

public move(): void {
    console.log(`${this.name} está corriendo.`);
}

public getBreed(): string { // Método público para obtener la raza del perro
    return this.breed;
}

const myDog = new Dog("Rex", 5, "Labrador");

console.log(myDog); // Dog { name: 'Rex', age: 5, breed: 'Labrador' }
console.log(myDog.makeSound()); // Woof!
console.log(myDog.move()); // Rex está corriendo.

// Se usa para definir un contrato o una interfaz que deben implementar las clases que las heredan.
// Una clase abstracta no puede ser instanciada directamente.
// En este ejemplo, la clase `Animal` es una clase abstracta que define un contrato para las clases que la heredan.
// La clase `Dog` hereda de la clase `Animal` y debe implementar los métodos
// `makeSound` y `move`. Además, la clase `Dog` puede tener sus propias propiedades y métodos adicionales.
// Las clases abstractas son útiles cuando quieres definir un conjunto de métodos y propiedades que deben ser implementados por las clases que las heredan,
// pero no quieres permitir que se creen instancias de la clase abstracta directamente.
// Esto ayuda a garantizar la seguridad de tipos y la legibilidad del código, ya que las clases que heredan de una clase abstracta deben cumplir con el contrato definido por la clase abstracta.


// INTERFACES CON CLASES:
// Las interfaces en TypeScript son una forma de definir la forma de un objeto, es decir, qué propiedades y métodos debe tener un objeto.
// Las interfaces se utilizan para definir contratos que deben cumplir las clases que las implementan.
// Una clase puede implementar varias interfaces, y una interfaz puede extender a otra interfaz

abstract class Animal {
}

interface Swimmable {
    depth: number;
    swim(): void;
    dive(depth: number): void;
}

interface Flyable {
    altitude: number;
    fly(): void;
    land(): void;
}

interface Walkable {
    walk(): void;
    run(distance: number): void;
}

class Duck extends Animal implements Swimmable, Flyable, Walkable {
    public depth: number;
    public altitude: number;
    public distance: number;

    constructor(depth: number, altitude: number, distance: number) {
        super();
        this.depth = depth;
        this.altitude = altitude;
        this.distance = distance;
    }

    public swim(): void {
        console.log(`El pato está nadando a una profundidad de ${this.depth} metros.`);
    }


    public fly(): void {
        console.log(`El pato está volando a una altitud de ${this.altitude} metros.`);
    }


    public walk(): void {
        console.log(`El pato está caminando una distancia de ${this.distance} metros.`);
    }

    public run(distance: number): void {
        this.distance = distance; // Incrementa la distancia en 10 metros al correr
        console.log(`El pato está corriendo una distancia de ${this.distance} metros.`);
    }
}

const donald = new Duck(5, 10, 15);
donald.swim(); // El pato está nadando a una profundidad de 5 metros.   
donald.fly(); // El pato está volando a una altitud de 10 metros.
donald.walk(); // El pato está caminando una distancia de 15 metros.
donald.run(25); // El pato está corriendo una distancia de 25 metros.

// En este ejemplo, la clase `Duck` implementa las interfaces `Swimmable`, `Flyable` y `Walkable`, lo que significa que debe proporcionar implementaciones para todos los métodos definidos en esas interfaces.
// Esto ayuda a garantizar que la clase `Duck` cumpla con los contratos definidos por las
// interfaces, y permite que el código que utiliza la clase `Duck` sepa qué métodos están disponibles y cómo usarlos.
// Las interfaces son útiles cuando quieres definir contratos que deben cumplir las clases, y cuando quieres permitir que una clase implemente múltiples contratos. 
// Esto ayuda a garantizar la seguridad de tipos y la legibilidad del código, ya que las clases que implementan una interfaz deben cumplir con el contrato definido por la interfaz.

// En proyectos reales, es común utilizar interfaces para definir contratos que deben cumplir las clases, lo que ayuda a garantizar la seguridad de tipos y la legibilidad del código.

// MODIFICADORES DE ACCESO EN INTERFACES, AVANZADO:

// Viene a suplir la necesidad de combinar las palabras reservadas "public", "private", "protected" y "readonly" en las interfaces.
// Pero en las interfaces no se pueden usar estos modificadores de acceso directamente.
// Sin embargo, TypeScript permite usar estos modificadores de acceso en las propiedades de las clases
// que implementan una interfaz, lo que permite controlar la visibilidad y mutabilidad de las propiedades de la clase.


// El privado es: solo se puede acceder desde la clase donde se define.
// El static es: se puede acceder sin instanciar la clase.
// El BANK_NAME es una propiedad estática y de solo lectura, lo que significa que no se puede modificar después de su inicialización.


// Entonces una "propiedad estatica" es una propiedad que pertenece a la clase en sí misma, y no a las instancias de la clase.
// Esto significa que puedes acceder a una propiedad estática sin tener que crear una instancia de la clase.
// Por ejemplo:

class BankAccount {
    private static readonly BANK_NAME: string = "Banco el Sol S.A"; // Propiedad estática y de solo lectura
    private static accountNumberCounter: number = 0; // Contador estático para generar números de cuenta únicos

    // Propiedades de instancia
    private readonly accountNumber: string; // Número de cuenta de solo lectura
    private balance: number; // Saldo de la cuenta
    protected overdraftLimit: number; // Límite de sobregiro protegido

    constructor(initialBalance: number, overdraftLimit: number = 0) {
        BankAccount.accountNumberCounter++; // Incrementa el contador de números de cuenta, porque es una propiedad estática y se comparte entre todas las instancias de la clase.
        // Es decir , si creas 10 instancias de la clase, el contador de números de cuenta seguirá
       // Aparece "BankAccount" porque es una propiedad estática y se accede a través de la clase directamente.
        // Si no fuera estática, tendrías que crear una instancia de la clase para acceder a ella.
        this.accountNumber = this.generateAccountNumber(); // Genera un número de cuenta único
        this.balance = initialBalance; // Inicializa el saldo de la cuenta
        this.overdraftLimit = overdraftLimit; // Inicializa el límite de sobregiro
    }

    // Método estático:
    public static getTotalAccounts(): number {
        return BankAccount.accountNumberCounter;
    // Sirve para obtener el total de cuentas creadas sin instanciar la clase.
    // Publico que puede ser accedido desde cualquier parte del código.
    // Y estatico porque pertenece a la clase y no a las instancias de la clase, 
    // por lo que puede ser llamado por la clase directamente.
    }

    public static getBankName(): string {
        return BankAccount.BANK_NAME;
    }
    // Sirve para obtener el nombre del banco sin instanciar la clase.
    // Publico que puede ser accedido desde cualquier parte del código.
    // Y estatico porque pertenece a la clase y no a las instancias d

    private generateAccountNumber(): string {
        return `ACC-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`; 
        // Sirve para generar un número de cuenta único
    }
    // Método privado que solo puede ser accedido dentro de la clase.}

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    public withdraw(amount: number): boolean {
        if (amount > 0 && this.balance - amount > -this.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

    public getBalance(): number {
        return this.balance;
    }
    // Hay un "getBalance" porque la propiedad "balance" es privada y no se puede acceder directamente desde fuera de la clase.
    // Entonces se crea un método público para poder acceder al valor de la propiedad "balance".

    public getAccountNumber(): string {
        return this.accountNumber;
    }
    // Hay un "getAccountNumber" porque la propiedad "accountNumber" es de solo
    // lectura y no se puede modificar después de su inicialización.
    // Entonces se crea un método público para poder acceder al valor de la propiedad "accountNumber
}

const myAccount = new BankAccount(1000, 500); // Crea una nueva cuenta bancaria con un saldo inicial de 1000 y un límite de sobregiro de 500
console.log(myAccount.getAccountNumber()); // Muestra el número de cuenta generado
console.log(myAccount.getBalance()); // Muestra el saldo actual de la cuenta
console.log(BankAccount.deposit(500)); // Deposita 500 en la cuenta
console.log(myAccount.withdraw(200)); // Retira 200 de la cuenta    
console.log(myAccount.getBalance()); // Muestra el saldo actual de la cuenta después de la operación de retiro 
console.log(BankAccount.getTotalAccounts()); // Muestra el total de cuentas creadas


// En este ejemplo, la clase `BankAccount` tiene varias propiedades y métodos con diferentes modificadores de acceso:
// - `BANK_NAME`: Es una propiedad estática y de solo lectura que pertenece a la
// clase en sí misma y no a las instancias de la clase. No se puede modificar después de su inicialización.
// - `accountNumber`: Es una propiedad privada que pertenece a las instancias d
// la clase. No se puede acceder directamente desde fuera de la clase.
// - `balance`: Es una propiedad privada que pertenece a las instancias de la
// clase. No se puede acceder directamente desde fuera de la clase.
// - `overdraftLimit`: Es una propiedad protegida que pertenece a las instancias de la clase. Se puede acceder desde la clase y sus subclases.
// - `getTotalAccounts`: Es un método estático y público que pertenece a la clase
// en sí misma y no a las instancias de la clase. Se puede llamar sin instanciar la clase.
// - `getBankName`: Es un método estático y público que pertenece a la clase
// en sí misma y no a las instancias de la clase. Se puede llamar sin instanciar la clase.
// - `generateAccountNumber`: Es un método privado que solo puede ser accedido
// dentro de la clase.
// - `deposit`: Es un método público que pertenece a las instancias de la clas
// - `withdraw`: Es un método público que pertenece a las instancias de la clase.
// - `getBalance`: Es un método público que pertenece a las instancias de la clase.
// - `getAccountNumber`: Es un método público que pertenece a las instancias de la clase.

// La ventajas de usar modificadores de acceso en las propiedades y métodos de una clase son:
// 1. Controlar la visibilidad y mutabilidad de las propiedades y métodos de una clase.

// La ventaja de que sea privada y luego usar el getter es:
// 1. Que puedes controlar cómo se accede y modifica la propiedad.
// 2. Evitar la confusión y el error al acceder a propiedades y métodos de una clase.
// 3. Mejorar la legibilidad y mantenibilidad del código.
// 4. Facilitar la implementación de patrones de diseño como el encapsulamiento y la herencia.
// 5. Garantizar la seguridad de tipos y la integridad de los datos en tiempo de compilación y en tiempo de ejecución.
// 6. Facilitar la colaboración en equipos de desarrollo al definir claramente qué partes del código son accesibles y modificables.
// 7. Mejorar el rendimiento al evitar accesos innecesarios a propiedades y métodos que no son necesarios para el funcionamiento de la clase.
// 8. Facilitar la depuración y el mantenimiento del código al tener un control más preciso sobre qué partes del código pueden acceder y modificar las propiedades y métodos de una clase.

// En proyectos reales, es común utilizar modificadores de acceso en las propiedades y métodos de una clase para controlar la visibilidad y mutabilidad de las propiedades y métodos de una clase, lo que ayuda a garantizar la seguridad de tipos y la legibilidad del código.

//            GENERICS TYPES EN TYPESCRIPT:
// CONCEPTOS BÁSICOS DE GENERICS:
// Generics es una característica de TypeScript que permite a los desarrolladores escribir código que sea
// reutilizable y flexible al permitir que las funciones, clases e interfaces trabajen con diferentes tipos de datos sin perder la seguridad de tipos.
// Los generics se utilizan para crear funciones, clases e interfaces que pueden trabajar con diferentes tipos de datos sin perder la seguridad de tipos.

// Función genérica simple: 

function identity<T>(arg: T): T {
    return arg;
}
// Esta función toma un argumento de cualquier tipo `T` y devuelve un valor del mismo tipo `T`.
// El tipo `T` es un parámetro de tipo que se especifica entre los símbolos `<` y `>` después del nombre de la función.

// Uso con diferentes tipos:

const stringResult = identity<string>("Hello, Generics!"); // string
const numberResult = identity<number>(42); // number
const booleanResult = identity<boolean>(true); // boolean

// Funcion genérica más compleja: 

function getFirstElement<T>(arr: T[]): T | undefined {
    return Array.length > 0 ? arr[0] : undefined;
}

const firstNumber = getFirstElement<number>([1, 2, 3]); // Puede devolver: number | undefined

const FirstName = getFirstElement<string>(["Juan", "Pedro", "Maria"]); // Puede devolver: string | undefined

// La función `getFirstElement` toma un arreglo de elementos de cualquier tipo `T
// y devuelve el primer elemento del arreglo o `undefined` si el arreglo está vacío.
// El tipo `T` es un parámetro de tipo que se especifica entre los símbolos `<` y `>` después del nombre de la función.

// Se usa para: 
// 1. Crear funciones, clases e interfaces que puedan trabajar con diferentes tipos de datos
// 2. Evitar la repetición de código al crear funciones, clases e interfaces que pued
// 3. Mejorar la seguridad de tipos al evitar la pérdida de tipos

// Otro ejemplo: 

interface Container<T> {
    value: T;
    getValue(): T;
    setValue(value: T): void;
}

class Box implements Container <{ id: number; name: string}> {
    private value: { id: number; name: string };

    constructor(value: { id: number; name: string }) {
        this.value = value;
    }
    
    public getValue(): { id: number; name: string; } {
        return this.value;
    }

    public setValue(value: { id: number; name: string }): void {
        this.value = value;
    }

}

// Aqui se puede ver que la clase `Box` implementa la interfaz `Container` con un tipo específico
// de objeto que tiene un `id` y un `name`. Esto permite que la clase `Box` sea reutilizable
// y flexible al trabajar con diferentes tipos de datos sin perder la seguridad de tipos.   

// Consideraciones...

// Constraints (restricciones) en Generics: 

// Generic basic: <T extends U> debe tener una propiedad length

interface Lengthwise {
    length: number;
}

function longLength<T extends Lengthwise>(arg: T): T {
    console.log(`longitud: ${arg.length}`)
    return arg;
}

// comillas simples son estas: `

longLength ("Hola"); // { length: 5 }
longLength([1, 2, 3]); // { length: 3 }
longLength([true, false, false]); // { length: 3 }


// Otro ejemplo generico: 

type Prettify<T> = {
    [K in keyof T]: T[K];
};

// Prettify<T> es un tipo que toma otro tipo T y devuelve un tipo que tien
// los mismos tipos que T pero con un nombre más bonito.

type WeirdType = {
    a: number;
} & {
    b: string;
    } & Omit <
    { c: boolean, d:number[]},
    `c`
>

// Entonces hacemos: 

type GoodType = Prettify<WeirdType>; 
// GoodType es un tipo que tiene los mismos tipos que WeirdType pero con un nombre más bonito.

// GoodType es un tipo que tiene los siguientes tipos:
// - a: number
// - b: string
// - d: number[]

// Entonces sirve para hacer un tipo más bonito de un tipo que ya existe.
// Es como si estuvieras diciendo: "Hey, quiero que este tipo tenga un nombre más bonito".