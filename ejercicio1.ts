// 🎯 Ejercicios prácticos - TS Avanzado

//Ejercicio 1: Utility Types
//Crea un sistema de gestión de productos que use Partial, Pick y Omit para diferentes operaciones ABM.
// Con "ABM" se refiere a las operaciones de Alta, Baja y Modificar de un producto en la base de datos, que son comúnmente utilizadas en sistemas de gestión de productos.
// Se refiere a: 
// Alta: Agregar un producto nuevo a la base de datos.
// Baja: Eliminar un producto existente de la base de datos.
// Modificar: Actualizar los datos de un producto existente en la base de datos.

// Aclaración: en esta tarea se comenta lo más posible cada paso para poder entender a nivel teorico y lógico de cada linea de código. 

// Interfaz producto: 


interface Product {
    id: number;
    name: string;
    price: number;
    description: string;    
    category: string;
    inStock: boolean;
    }

// Ahora aplicando los tipos, vamos a usar: 
// Pick para seleccionar los campos que se van a modificar en el producto. Osea para modificar los campos que se seleccionan.
// Omit para eliminar los campos que no se van a modificar en el producto. Osea para la baja de producto.
// Partial para hacer que los campos sean opcionales. Osea para la alta de producto. 


// Uso de "Omit" para la alta de producto 

type NewProduct = Omit<Product, 'id'>;

// Esto hace que los campos id, name, price, description, category, inStock sean opcionales.
// Esto es porque en la alta de producto, no se conoce el id del producto que va a ser creado.


// Uso de "Partial" y "Omit" para la modificación de producto:

type ModifyProduct = Partial<Omit<Product, 'id'>>; 
// Esto se usa para modificar los campos que se seleccionan. Los campos que no se seleccionan, se pueden dejar vacios.
// Se usa partial para hacer que los campos sean opcionales. Y omit para seleccionar los campos que se van a modificar. 

// Uso de "Pick" para la eliminación de producto: 

type DeleteProduct = Pick<Product, 'id'>;
// Esto se usa para eliminar un producto de la base de datos, ya que solo se necesita el id del producto para eliminarlo.


// Ya con eso tenemos los tipos para ABM de productos. 

// Funciones de AMB y "base de datos" simulada de los productos: 

// Nuestra "base de datos" simulada
let products: Product[] = [];
let nextId = 1;
// Esto hace que cada producto tenga un id unico.

//                                           Funciones de Gestión:

//           Alta (Crear): 

function createProduct(newProductData: NewProduct): Product {
    const newProduct: Product = {
        id: nextId++, // Genera un ID único y lo asigna
        ...newProductData, // Copia los datos del producto
    };
    products.push(newProduct); // Agrega el producto a la base de datos simulada
    return newProduct; // Devuelve el producto creado
}



//                              Modificación (Actualizar): 
function modifyProduct(id: number, updatedData: ModifyProduct): Product | undefined { // id del producto a modificar
    const productIndex = products.findIndex(p => p.id === id); // Busca el producto en la base de datos simulada
    if (productIndex === -1) { // Si no lo encuentra
        return undefined; // Producto no encontrado
    }
    products[productIndex] = { ...products[productIndex], ...updatedData }; // Actualiza los datos del producto
    return products[productIndex]; // Devuelve el producto actualizado
}

//                           Baja (Eliminar): 
function deleteProduct(productToDelete: DeleteProduct): boolean {  // id del producto a eliminar
    const initialLength = products.length; // Almacena la cantidad de productos antes de eliminar
    products = products.filter(p => p.id !== productToDelete.id);  // filtra los productos para eliminar el que se selecciono
    return products.length < initialLength; // Devuelve true si se eliminó un producto, false si no.
}


