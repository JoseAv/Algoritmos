

const handlerTime = (fun) => {
    return function (...args) {
        console.time('Inicio del timpo')
        //? there are spreed the arguments again
        fun(...args)
        console.timeEnd('Fin del tiempo')
    }
}


class MyClass {
    VerifyFields(arg0) {
        throw new Error("Method not implemented.")
    }

    @handlerTime
    fnTime() {
        for (let i = 0; i <= 200; i++) {
            i++
        }
    }

}

