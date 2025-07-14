const handleSecret = {
    get(obj, prop) {
        const value = obj[prop];
        if (typeof value === 'string') {
            return window.atob(value);
        }
        return value;
    },
    set(obj, prop, value) {
        if (typeof value === 'string') {
            obj[prop] = window.btoa(value);
            return true;
        }
        obj[prop] = value;
        return true;
    }
};