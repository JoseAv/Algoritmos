const handler = {
    get(target, prop, receiver) {
        if (prop.startsWith('_')) {
            // Verifica si el acceso viene del propio objeto
            const isInternalAccess = receiver === target || this === target;
            if (!isInternalAccess) {
                throw new Error(`Acceso denegado a propiedad privada '${prop}'`);
            }
        }
        return Reflect.get(target, prop, receiver);
    }
};

const api = new Proxy(
    {
        publicData: "foo",
        _privateData: "bar",
        getPublic() { return this._privateData },
        _getPrivate() { return this._privateData; }
    },
    handler
);

console.log(api.getPublic()); // ✅ "bar" (acceso interno)
console.log(api.publicData);  // ✅ "foo"
console.log(api._privateData); // ❌ Error (acceso externo)