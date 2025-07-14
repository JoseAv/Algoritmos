class Porbar {


    @Decorator
    VerifyFields(obj) {
        console.log(obj)
    }
}

function Decorator(fun) {

    return (...args) => {
        console.log(args)
    }

}



const newClass = new MyClass()

newClass.VerifyFields({ saludar: 'Hola' })