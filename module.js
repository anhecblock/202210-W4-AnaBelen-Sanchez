const strictEquals = (a, b) => {
    // Exceptions

    // Excepción nº1.   NaN
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return false;
    }

    // Excepción nº2. 0 y -0
    if (
        (Object.is(a, -0) && Object.is(b, 0)) ||
        (Object.is(b, -0) && Object.is(a, 0))
    ) {
        return true;
    }
    // Todas las demás comparaciones devuelven booleano correcto
    return Object.is(a, b);
};

export default strictEquals;
