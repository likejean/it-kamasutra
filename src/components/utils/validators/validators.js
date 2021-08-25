export const requiredField = (value) => {
    if (value) return undefined;
    return 'Field is required!';
}

export const maxLengthCreator = (maxLength) => value => {
    if (value && value.length > maxLength) return "Must less or equal 30 symbols";
    return undefined;
}

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined


export const minPasswordLengthCreator = (minLength) => value => {
    if (value && value.length < minLength) return `Min length of ${minLength} symbols required`;
    return undefined;
}

export const maxPasswordLengthCreator = (maxLength) => value => {
    if (value && value.length > maxLength) return `Min length of ${maxLength} symbols required`;
    return undefined;
}

export const minUsernameLengthCreator = (minLength) => value => {
    if (value && value.length < minLength) return `Min length of ${minLength} symbols required`;
    return undefined;
}

export const maxUsernameLengthCreator = (maxLength) => value => {
    if (value && value.length > maxLength) return `Min length of ${maxLength} symbols required`;
    return undefined;
}

